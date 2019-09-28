const MyToken = artifacts.require("./MyToken.sol");

module.exports = function(deployer) {
  const name = "Ijonaski";
  const symbol = "ii";
  const decimals = 18;
  deployer.deploy(MyToken, name, symbol, decimals);
};
