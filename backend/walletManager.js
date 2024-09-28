// walletManager.js
const bip39 = require("bip39");
const bip32 = require('bip32'); // Import the BIP32Factory from bip32
// const bip44 = require("bip44"); // Example placeholder, replace with actual BIP44 implementation
const { BalanceSyncItem, HistorySyncItem } = require("./syncItems");
const SyncQueue = require("./syncQueue");
const bitcoin = require("bitcoinjs-lib");
const ecc = require('tiny-secp256k1'); // Required for BIP32Factory

// const bip32 = BIP32Factory(ecc);

class WalletManager {
  constructor() {
    this.wallets = []; // Stores imported wallets
    this.transactions = {}; // Stores transactions by wallet address
    this.syncQueue = new SyncQueue();
  }

  // Method to import a wallet using mnemonic words
  async importWallet(name,mnemonic) {
    if (!bip39.validateMnemonic(mnemonic)) {
      throw new Error("Invalid mnemonic");
    }
    const network = bitcoin.networks.testnet;

    // Derive address using BIP44 from the mnemonic
    const seed = bip39.mnemonicToSeedSync(mnemonic);

    const root = bip32.fromSeed(seed, network);

    const path = "m/44'/1'/0'/0/0";

    // Step 5: Derive the node at the BIP44 path
    const addressNode = root.derivePath(path);

    // Step 6: Generate the Bitcoin address (P2PKH - Pay to Public Key Hash)
    const { address } = bitcoin.payments.p2pkh({
      pubkey: addressNode.publicKey,
      network,
    });

    // Add sync items to the queue
    const balanceSyncItem = new BalanceSyncItem(address);
    console.log(balanceSyncItem);

    const balance = await balanceSyncItem.execute();

    const wallet = {
      name,
      balance
    };
    this.wallets.push(wallet);
    
    const historySyncItem = new HistorySyncItem(address);
    this.syncQueue.add(balanceSyncItem);
    this.syncQueue.add(historySyncItem);

    return wallet;
  }

  // Method to process sync items and update state
  async processSyncQueue() {
    await this.syncQueue.process();
  }

  // Get list of wallets
  getWallets() {
    return this.wallets;
  }

  // Get transactions for a specific address
  getAllTransactions() {
    return Object.values(this.transactions).flat();
  }

  // Update transactions (called by sync items upon successful fetch)
  updateTransactions(address, transactions) {
    this.transactions[address] = transactions;
  }
}

module.exports = WalletManager;
