const Web3 = require('web3');

// Proveedor de nodo Ethereum (Infura u otro)
const provider = new Web3.providers.HttpProvider('http://127.0.0.1:7545');

// Instancia de Web3
const web3 = new Web3(provider);
