import React, { useContext, useEffect, useState } from "react";
import getBlockchain from "../ethereum";
import { AuthContext } from "../providers/context";
import { card1 } from "/public/card3.png";

const market = () => {
  const { token, setToken, info, setInfo } = useContext(AuthContext);

  console.log(token);

  useEffect(() => {
    const init = async () => {
      const { nft } = await getBlockchain();
      setToken(nft);

      console.log(token);
      const contract_address = nft.address;
      console.log(nft.provider.provider.selectedAddress);

      const balance = await nft.balanceOf(contract_address);
      console.log(parseInt(balance));

      // const balance = await nft.balanceOf(contract_address);
      // console.log(`balance market: ${parseInt(balance)}`);

      for (let i = 0; i < balance; i++) {
        const tokenId = await nft.tokenOfOwnerByIndex(contract_address, i);
        const item = await nft.getCardMarket(parseInt(tokenId));
        console.log(item);

        const obj = {
          description: item.description,
          name: item.name,
          image: item.urlPic,
          owner: item.owner,
        };

        //   // let date = new Date(Number(item.date) * 1000);
        setInfo((info) => [...info, obj]);
      }
    };

    init();
  }, []);

  return (
    <div>
      {info.map((item, key) => {
        console.log(item.image);
        return (
          <div key={key}>
            <img src="../card2.png" width={130} alt="card" />
            <div>{item.name}</div>
            <br></br>
            <div>{item.description}</div>
            <br></br>
            <div>{item.owner}</div>
          </div>
        );
      })}
    </div>
  );
};

export default market;
