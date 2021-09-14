const Cards = artifacts.require("Cards");

module.exports = async () => {
  const [account] = await web3.eth.getAccounts();

  const cards = await Cards.deployed();
  const name = await cards.name();
  const balance = await cards.balanceOf(cards.address);

  console.log(balance);
  console.log(`account: ${account}`);

  // await cards.methods.create({ from: account });
  const symbol = await cards.symbol();
  console.log(symbol);

  // const receipt = await cards.mint();
  // console.log(receipt);

  const value = web3.utils.toWei("0.01");

  // const receipt = await cards.mint(
  //   "Botafogo x São Paulo",
  //   "../public/card2",
  //   "Hernanes nos 2 gols na virada que salvou o Tricolor do rebaixamento de 2017",
  //   2,
  //   "Brazilian",
  //   "Sao Paulo",
  //   3,
  //   value
  // );

  cards.mint(
    "São Paulo x Flamengo",
    "../public/card1",
    "Luciano hat-trick contra o Flamengo 2020",
    2,
    "Brazilian",
    "Sao Paulo",
    2,
    value
  );

  console.log(receipt);

  // const balanceContract = await web3.eth.getBalance(cards.address);
  // console.log(`contract ether balance: ${parseInt(balanceContract)}`);

  // console.log(parseInt(supply));
  // await cards.mint();

  // await cards
  //   .mint(
  //     "Botafogo x São Paulo", //name
  //     "../public/card2", // urlPic
  //     // Rareness.festive, //rareness
  //     "Hernanes nos 2 gols na virada que salvou o Tricolor do rebaixamento de 2017", //description
  //     "Brazilian", //nationality
  //     "Campeonato Brasileiro", //league
  //     "São Paulo", //team
  //     4, //amountsMinted
  //     value //price
  //     // {
  //     // from: account,
  //     //   value: value,
  //     // }
  //   )
  //   .then((receipt) => {
  //     console.log(receipt);
  //   });
  // address to,
  //     string memory name,
  //     string memory imageUrl,
  //     Rareness rareness,
  //     string memory description,
  //     string memory nationality,
  //     string memory league,
  //     string memory team,
  //     uint amountMinted,
  //     uint price

  // console.log(await cards.balanceOf(account));

  // let balance = await token1.balanceOf(account);
  // console.log(`balance of this account: ${balance}`);
};
