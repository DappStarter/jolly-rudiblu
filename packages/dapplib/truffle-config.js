require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy kiwi brand venture strong deny museum clump hockey praise army genius'; 
let testAccounts = [
"0xa17baa6c2918b3290464c80ffd23daa3d1822cc7668fc350b9a00daf82e1c92d",
"0x86d9b32ce3a01b5b22fa8e472432ddfdb6ed6a7893f4be1ad26608d5cdb6281d",
"0xb3605a224fed9d96937310031a87a97a09a3b505300adaaac0e8167ac379efc7",
"0xd9f574770a3b5c2f493032004d96c1304dc12db2ab23fd02954706fd74bb00ff",
"0xb742878a746a6ae9c5063201ed6c68ace529d5d82c1e6876e36b9f18306f69f1",
"0xbd2402ff46977c9734cc6930dec2870a5cce96d1783a6f100a84e055058e6e49",
"0xc02e98dfd6979122230a92b9a6073afcfb3e07978fbb7b33599ad4dc66953c74",
"0x3d3275717f8ad9aa7230bc456fcca180eb5adcf4248115bf7b909f0910f5152f",
"0x2f9221ff8e2888fa70e419054d12f69007857f9cc46079ab3c8d6c0fbeda9dc0",
"0x129bad3c69f48ca1e3554a8b1cff96918de8eea0de16776f49ae86be682e8db3"
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
            version: '^0.5.11'
        }
    }
};
