var web3 = new Web3(Web3.givenProvider); //enable web3 to interact with contract instance
var contractInstance;

$(document).ready(function() {
    window.ethereum.enable().then(function(accounts){ // permission to access Metamask account
        contractInstance = new web3.eth.Contract(abi, "0xb292f0B7Cf0763ADa448e13f69Ae2C371bbb4A61", {from: accounts[0]}); // people-project contract
        console.log(contractInstance);
    }); 
    // add click handler using jQuery, executes function on click
    $("#add_data_button").click(inputData)


});


function inputData(){
    // alert("inputdata"); // to test
    var name = $("#name_input").val();
    var age = $("#age_input").val();
    var height = $("#height_input").val();

    var config = {
        value: web3.utils.toWei("1", "ether")
    }

    contractInstance.methods.createPerson(name, age, height).send(config);
}
