import React, { useContext, useEffect, useState } from "react";
import getBlockchain from "../ethereum";
import { AuthContext } from "../providers/context";

const market = () => {
  const { token, setToken } = useContext(AuthContext);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const init = async () => {
      const { nft } = await getBlockchain();
      setToken(nft);

      console.log(nft);
      const contract_address = nft.address;
      console.log(nft.provider.provider.selectedAddress);

      // const supply = await nft.symbol.call();
      // const supply = await nft.getSupply();
      const supply = await nft.totalSupply();
      console.log(supply);

      // const total = await nft.balanceOf(contract_address);
      // const total = await nft.totalSupply.call();
      // console.log(total);
      // const supply = await nft.balanceOf(nft.provider.provider.selectedAddress);
      // console.log("---");
      // console.log(total);

      // const balance = await nft.balanceOf(contract_address);
      // console.log(`balance market: ${parseInt(balance)}`);

      // for (let i = 0; i < balance; i++) {
      //   const tokenId = await nft.tokenOfOwnerByIndex(contract_address, i);
      //   const item = await nft.getCardMarket(parseInt(tokenId));
      //   // let date = new Date(Number(item.date) * 1000);

      //   // const obj = {
      //   //   name: item.name,
      //   //   image: item.imageUrl,
      //   //   date: item.date,
      //   //   owner: item.owner,
      //   // };
      //   // setInfo((info) => [...info, obj]);

      //   // const data = await axios.get(tokenURI);
      //   // const name = await data.data.title;
      //   // const picture = await data.data.properties.image.description;
      //   // console.log(data);
      //   // setInfo((info) => [...info, { picture, name }]);
      // }
    };

    init();
  }, []);

  return <div>Market</div>;
};

export default market;
