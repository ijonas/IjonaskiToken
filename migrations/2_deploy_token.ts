const IjonaskiToken = artifacts.require("./IjonaskiToken.sol");

module.exports = function(deployer) {
  const name = "Ijonaski";
  const symbol = "ii";
  const decimals = 18;
  deployer.deploy(IjonaskiToken, name, symbol, decimals);
} as Truffle.Migration;

export {};