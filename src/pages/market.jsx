import React, { useContext, useEffect, useState } from "react";
import getBlockchain from "../ethereum";
import { AuthContext } from "../providers/context";
import CustomCard from "./components/CustomCard";
import { card1 } from "/public/card3.png";
import styled from "styled-components";

const cor = "rgb(230,230,230)";

export const MiddleComponent = styled.div`
  background-color: ${cor};
  grid-area: middle;
  display: flex;
  flex-wrap: wrap;
  font-family: "Kanit", sans-serif;
  color: rgb(122, 110, 170);
`;

const market = () => {
  const { token, setToken, info, setInfo } = useContext(AuthContext);

  // const [dados, setDados] = useState([
  //   { name: "um", imageUrl: 1 },
  //   { name: "um", imageUrl: 1 },
  //   { name: "um", imageUrl: 2 },
  //   { name: "um", imageUrl: 2 },
  //   { name: "second to last", imageUrl: 2 },
  //   { name: "last", imageUrl: 2 },
  // ]);

  console.log(token);

  useEffect(() => {
    const init = async () => {
      const { nft } = await getBlockchain();
      setToken(nft);

      const contract_address = nft.address;
      console.log(nft.provider.provider.selectedAddress);

      const balance = await nft.balanceOf(contract_address);
      console.log(parseInt(balance));

      for (let i = 0; i < balance; i++) {
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

  return (
    <MiddleComponent>
      <CustomCard data={info}></CustomCard>
      {/* {info.map((item, key) => {
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
      })} */}
    </MiddleComponent>
  );
};

export default market;
