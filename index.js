Web3 = require('web3');
web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
abi = JSON.parse('[{"constant": true,"inputs": [],"name": "fundb_bal","outputs": [{"name": "","type":"uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": false,"inputs": [],"name": "getfundA","outputs": [{"name": "","type": "uint256"}],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": false,"inputs": [],"name": "getfundB","outputs": [{"name": "","type": "uint256"}],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": false,"inputs": [{"name": "amount","type": "uint256"},{"name": "fund","type": "bytes32"}],"name": "rebalancefunds","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": true,"inputs": [],"name": "funda_bal","outputs": [{"name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"}]');
RebalanceContract = web3.eth.contract(abi);
contractInstance = RebalanceContract.at('0x2912e9dd37f4b88f531df5e94a1e970b955cbebf');

function init() {
	document.getElementById('fundA').innerHTML = contractInstance.getfundA.call().toString();
    document.getElementById('fundB').innerHTML = contractInstance.getfundB.call().toString();
}

function rebalanceFunds() {
	amount = document.getElementById('amt').value;
    console.log(amount);
    fund = document.getElementById('fnd').value;
    console.log(fund);
    console.log(contractInstance.getfundA.call().toString());
    contractInstance.rebalancefunds(amount, fund, {from: web3.eth.accounts[0]});
    document.getElementById('fundA').innerHTML = contractInstance.getfundA.call().toString();
    document.getElementById('fundB').innerHTML = contractInstance.getfundB.call().toString();
}


