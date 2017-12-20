pragma solidity ^0.4.18; //We have to specify what version of compiler this code will use

contract FundRebalance {
	uint public funda_bal;
	uint public fundb_bal;

	function rebalancefunds(uint amount, bytes32 fund) {
		if(fund == "A") {
			funda_bal -= amount;
			fundb_bal += amount;
		} if(fund == "B") {
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