var web3 = new Web3(Web3.givenProvider); //enable web3 to interact with contract instance
var contractInstance;

$(document).ready(function() {
    window.ethereum.enable().then(function(accounts){ // permission to access Metamask account
        contractInstance = new web3.eth.Contract(abi, "0xE069C5448F200b5E8ED17f5B9F4C67F06E485AB2", {from: accounts[0]}); // people-project contract
        console.log(contractInstance);
    }); 





});

