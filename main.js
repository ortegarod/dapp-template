var web3 = new Web3(Web3.givenProvider); //enable web3 to interact with contract instance
var contractInstance;

$(document).ready(function() {
    window.ethereum.enable().then(function(accounts){ // permission to access Metamask account
        contractInstance = new web3.eth.Contract(abi, "0x472d9672fCcD7A59c2F00536D17258c11f88f749", {from: accounts[0]}); // people-project contract
        console.log(contractInstance);
    }); 
    // add click handler using jQuery, executes function on click
    $("#add_data_button").click(inputData)
    $("#get_data_button").click(fetchAndDisplay)


});


function inputData(){
    // alert("inputdata"); // to test
    var name = $("#name_input").val();
    var age = $("#age_input").val();
    var height = $("#height_input").val();

    var config = {
        value: web3.utils.toWei("1", "ether")
    }

    contractInstance.methods.createPerson(name, age, height).send(config) // sends tx
    //web3 tx listener
    .on("transactionHash", function(hash){ 
        console.log(hash);
    }) 
    .on("confirmation", function(confirmationNr){
        console.log(confirmationNr); 
    })
    .on("receipt", function(receipt){
        console.log(receipt);
        alert("tx done");
    })
}

function fetchAndDisplay(){
    contractInstance.methods.getPerson().call().then(function(res){ // queries for data
        // console.log(res);
        $("#name_output").text(res.name);
        $("#age_output").text(res.age);
        $("#height_output").text(res.height);

    }) 

}