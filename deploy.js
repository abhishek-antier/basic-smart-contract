// deploy code will go here
const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
    'dance fatigue wire round assume control vintage together category jelly empower kitchen',
    'https://rinkeby.infura.io/v3/4ab2665d6b67482ea99a96be7fc378d4'
)

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log("attempting deployment from account",accounts[0]);
    const result = await new web3.eth.Contract(JSON.parse(interface))
     .deploy({ data: bytecode, arguments: ['Hi there!']})
     .send({ gas: '1000000',  gasPrice: '5000000000', from: accounts[0]});
     console.log('Contract deployed at', result.options.address);
}
deploy();


// const HDWalletProvider = require("truffle-hdwallet-provider");
// const Web3 = require("web3");
// const { interface, bytecode } = require("./compile");

// const provider = new HDWalletProvider(
//     'dance fatigue wire round assume control vintage together category jelly empower kitchen',
//     'https://rinkeby.infura.io/v3/4ab2665d6b67482ea99a96be7fc378d4'
// )
// const web3 = new Web3(provider);

// const deploy = async () => {
//   const accounts = await web3.eth.getAccounts();

//   console.log("Attempting to deploy from account", accounts[0]);

//   const result = await new web3.eth.Contract(JSON.parse(interface))
//     .deploy({ data: bytecode, arguments: ["Hi there!"] })
//     .send({ gas: "1000000",  gasPrice: '5000000000', from: accounts[0] });

//   console.log("Contract deployed to", result.options.address);
// };
// deploy();