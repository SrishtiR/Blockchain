web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
/*abi = JSON.parse('f_interface');*/
RebalanceContract = web3.eth.contract([
	{
		"constant": true,
		"inputs": [],
		"name": "fundb_bal",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "getfundA",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "getfundB",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "amount",
				"type": "uint8"
			},
			{
				"name": "fund",
				"type": "bytes32"
			}
		],
		"name": "rebalancefunds",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "balance",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "funda_bal",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]);
contractInstance = RebalanceContract.at('');
Funds = {"A" : "funda", "B" : "fundb"};
fundAval = $(#funda).val();
fundBval = $(#fundb).val();

function rebalanceFunds(amount, fund) {
	fundName = $(#fnd).val();
	try {
		contractInstance.rebalancefunds(amount, fundName, {
			from: web3.eth.accounts[0]}, function() {
				$("#funda").html(contractInstance.getFundA.call().toString());
				$("#fundb").html(contractInstance.getFundB.call().toString());
			});
	}
}}


