pragma solidity ^0.4.18; //We have to specify what version of compiler this code will use

contract FundRebalance {
	uint public funda_bal = 100;
	uint public fundb_bal = 300;
	uint public balance;

	function rebalancefunds(uint amount, bytes32 fund) {
		if(fund == "A") {
			funda_bal -= amount;
			fundb_bal += amount;
		} else {
			funda_bal += amount;
			fundb_bal -= amount;
		}
	}

	function getfundA() returns (uint) {
		return funda_bal;
	}

	function getfundB() returns (uint) {
		return fundb_bal;
	}
}