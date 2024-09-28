// syncItems.js
const axios = require('axios');

// Sync item for fetching balance
class BalanceSyncItem {
  constructor(address) {
    this.address = address;
  }

  // Executes the balance fetch
  async execute() {
    try {
      const response = await axios.get(`https://api.blockcypher.com/v1/btc/test3/addrs/${this.address}/balance`);
      console.log(response.data);
      const balance = response.data.final_balance;
      console.log(`Balance for ${this.address}: ${balance}`);
      return balance;
    } catch (error) {
      console.error(`Failed to fetch balance for ${this.address}:`, error);
      return 0;
    }
  }
}

// Sync item for fetching transaction history
class HistorySyncItem {
  constructor(address,walletManager) {
    this.address = address;
    this.walletManager = walletManager; // Reference to WalletManager to update transactions

  }

  // Executes the transaction history fetch
  async execute() {
    try {
      const response = await axios.get(`https://api.blockcypher.com/v1/btc/test3/addrs/${this.address}/full`);
      const transactions = response.data.txs;
      console.log(`Transactions for ${this.address}:`, transactions);

      // Update transactions in WalletManager
      this.walletManager.updateTransactions(this.address, transactions);
   
    } catch (error) {
      console.error(`Failed to fetch transactions for ${this.address}:`, error);
    }
  }
}

module.exports = { BalanceSyncItem, HistorySyncItem };
