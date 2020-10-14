const HelloWorld = artifacts.require("HelloWorld");

module.exports = function(deployer, network, accounts) {
  deployer.deploy(HelloWorld).then(function(instance){
      instance.setMessage("Hello Rodrigo!", {value: 1000000, from: accounts[0]}).then(function(){
        console.log("success");
      }).catch(function(err){
        console.log("Error: " + err);
      });
  }).catch(function(err){
    console.log("Deploy failed " + err);
  });
};