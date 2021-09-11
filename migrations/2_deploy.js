const Cards = artifacts.require("Cards");

module.exports = async (deployer, network, account) => {
  await deployer.deploy(Cards);
  console.log("Deployed");
};
