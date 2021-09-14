import React, { useContext, useEffect, useState } from "react";
import getBlockchain from "../ethereum";
import { AuthContext } from "../providers/context";
import CustomCard from "./components/CustomCard";
import { card1 } from "/public/card3.png";
import styled from "styled-components";
import FetchItems from "./components/FetchItems";

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

  FetchItems();

  // useEffect(() => {
  //   const init = async () => {};

  //   init();
  // }, []);

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
