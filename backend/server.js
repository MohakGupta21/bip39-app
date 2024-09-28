// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const WalletManager = require('./walletManager');

const app = express();
const walletManager = new WalletManager();

app.use(cors());
app.use(bodyParser.json());

// Import wallet endpoint
app.post('/import-wallet', async (req, res) => {
  const { name,mnemonic } = req.body;
  try {
    const wallet = await walletManager.importWallet(name,mnemonic);
    res.json(wallet);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Process sync queue endpoint
app.post('/process-sync', async (req, res) => {
  await walletManager.processSyncQueue();
  res.json({message:'Sync queue processed'});
});

// Get list of wallets
app.get('/wallets', (req, res) => {
  const wallets = walletManager.getWallets();
  res.json(wallets);
});

// Get transactions for a specific address
app.get('/all-transactions', (req, res) => {
  const allTransactions = walletManager.getAllTransactions();
  res.json(allTransactions);
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
