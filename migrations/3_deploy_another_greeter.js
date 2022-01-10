const GreeterContract = artifacts.require("AnotherGreeter");

module.exports = function(deployer) {
  deployer.deploy(GreeterContract);
}