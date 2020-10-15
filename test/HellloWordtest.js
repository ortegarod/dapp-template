// Truffle uses mocha testing framework

const HelloWorld = artifacts.require("HelloWorld");

contract("HelloWorld", async function(){
    // this contains all the tests for HelloWorld
    it("should initialize correctly", async function(){
        let instance = await HelloWorld.deployed();
        let message = await instance.getMessage();
        assert(message === "Hello Rodrigo!");
    });
});