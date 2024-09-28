const bip39 = require('bip39');

// Generate a 12-word mnemonic
const mnemonic = bip39.generateMnemonic(128); // 128 bits of entropy for 12 words
console.log('Generated Mnemonic:', mnemonic);