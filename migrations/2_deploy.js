const Cards = artifacts.require("Cards");

module.exports = async (deployer, network, account) => {
  const cards = await deployer.deploy(Cards);
  console.log("deployed");
};
