require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture infant forget seed edge rare remain method hover argue broken slogan'; 
let testAccounts = [
"0x9cc3db5db93495bf042ac145e5d043e828f30008605eaf077551ba437dc2f6b9",
"0x3c2acbbe8bfabaa619354a1676a8e4a42301087d0e69f64854dbb48f48ae59a2",
"0x4b01c4d3de0f5020678c52118919b2456b0b41213a2f784a25d00d77c7eeda39",
"0xa19cf1d1854b7db15633386176429fdd2fea61271caaf01ac17257269c2d5607",
"0x272a2033d323d4008a7f143592cc1a8f1443f396ef046992c7fe0125530c1ed4",
"0xa30479ef0faf3336f0f98bbe63ba3fada065a470a1a72a1599c17dcaeb48fbb3",
"0xd6e288dd0beaff31036f5c1345914681f78691ca8ef379d62096a4660eb9ca70",
"0x070217a7b3e448f98703ce66fa242b6b2aa6708484af92a7ffae6a84868a8d5a",
"0x7bd0ac39fdd24cd05563247900321b1b6b421164dd9c29dfc1550662fb4b835e",
"0x46f082136617f1772cc8885e6fa536ba7af5cb5f5f4210f743952d2f87ed05cd"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

