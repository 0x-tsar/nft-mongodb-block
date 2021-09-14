import React, { useContext, useEffect, useState } from "react";
import getBlockchain from "../../ethereum";
import { AuthContext } from "../../providers/context";

const FetchItems = async () => {
  const { token, setToken, info, setInfo, myCards, setMyCards } =
    useContext(AuthContext);

  useEffect(() => {
    console.log("---");
    console.log(info);
    const init = async () => {
      const { nft } = await getBlockchain();
      setToken(nft);

      const contract_address = nft.address;
      const acc = window.ethereum.selectedAddress;

      const balance = await nft.balanceOf(acc);
      const balanceMarket = await nft.balanceOf(contract_address);
      // console.log(parseInt(balance));

      for (let i = 0; i < balance; i++) {
        const tokenId = await nft.tokenOfOwnerByIndex(acc, i);
        const item = await nft.getMyCards(parseInt(tokenId));

        //   function getyMyCards(uint256 i) external view returns (Card memory) {
        //     return accountCollection[msg.sender][i];
        // }

        let date = new Date(Number(item.date) * 1000);

        const obj = {
          amountMinted: parseInt(item.amountMinted),
          date: date,
          isForSelling: item.isForSelling,
          description: item.description,
          name: item.name,
          nationality: item.nationality,
          owner: item.owner,
          price: parseInt(item.price),
          team: item.team,
          tokenId: item.tokenId,
          rareness: item.rareness,
          image: item.urlPic,
          owner: item.owner,
        };

        setMyCards((myCards) => [...myCards, obj]);
      }

      //fetching my cards
      for (let i = 0; i < balanceMarket; i++) {
        const tokenId = await nft.tokenOfOwnerByIndex(contract_address, i);
        const item = await nft.getCardMarket(parseInt(tokenId));

        let date = new Date(Number(item.date) * 1000);

        const obj = {
          amountMinted: parseInt(item.amountMinted),
          date: date,
          isForSelling: item.isForSelling,
          description: item.description,
          name: item.name,
          nationality: item.nationality,
          owner: item.owner,
          price: parseInt(item.price),
          team: item.team,
          tokenId: item.tokenId,
          rareness: item.rareness,
          image: item.urlPic,
          owner: item.owner,
        };

        setInfo((info) => [...info, obj]);
      }
    };

    init();
  }, []);
};

export default FetchItems;
