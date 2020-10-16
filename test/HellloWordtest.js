// Truffle uses mocha testing framework

const HelloWorld = artifacts.require("HelloWorld");

contract("HelloWorld", async function(){
    // this contains all the tests for HelloWorld
    it("should initialize correctly", async function(){
        let instance = await HelloWorld.deployed();
        let message = await instance.getMessage();
        assert(message === "Hello Rodrigo!");
    });
    // standard practice to test every function in your contract
    it("should set the message correctly", async function(){
        let instance = await HelloWorld.deployed();
        await instance.setMessage("Testing Message");
        let message = await instance.getMessage();
        assert(message === "Testing Message", "Message should be the same as we set it to");
    });
});