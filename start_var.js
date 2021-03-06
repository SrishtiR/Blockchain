var Web3 = require('web3');
var fs = require('fs');
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
var code = fs.readFileSync('fundrebal.sol').toString();
var solc = require('solc');
var compiledCode = solc.compile(code);
var abiDefinition = JSON.parse(compiledCode.contracts[':FundRebalance'].interface);
var fundContract = web3.eth.contract(abiDefinition);
var byteCode = compiledCode.contracts[':FundRebalance'].bytecode;
var deployedContract = fundContract.new(100,300,{data: byteCode, from: web3.eth.accounts[0], gas: 4700000});
var contractInstance = fundContract.at(deployedContract.address)
console.log(deployedContract);
