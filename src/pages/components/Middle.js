import React, { useContext } from "react";
import styled from "styled-components";
// import card1 from "../../../public/card1.png";
// import card2 from "../../../public/card2.png";
// import card3 from "../../../public/card3.png";
import CustomCard from "./CustomCard";
import spfc from "./teams/spfc.png";
import atl from "./teams/atl.png";

import { useState, useEffect, useRef } from "react";
import { purple, red } from "@material-ui/core/colors";
import { AuthContext } from "../../providers/context";

import FetchItems from "./FetchItems";

const cor = "rgb(230,230,230)";

export const MiddleComponent = styled.div`
  background-color: ${cor};
  grid-area: middle;
  display: flex;
  flex-wrap: wrap;
  font-family: "Kanit", sans-serif;
  color: rgb(122, 110, 170);
`;

export const Panel = styled.div`
  width: 500px;
  height: 370px;
  background-color: white;
  border: 2px solid rgba(0, 0, 0, 0.2);
  padding: 10px;
  margin: 10px;
  /* grid-area: middle; */
  display: flex;
  align-items: center;
`;

const Middle = ({ cards }) => {
  const ref = useRef();
  const { token, setToken, info, setInfo, myCards, setMyCards } =
    useContext(AuthContext);
  // console.log(info[0]);

  FetchItems();

  useEffect(() => {
    // console.log(info);
  }, []);

  return (
    <MiddleComponent>
      <CustomCard data={myCards}></CustomCard>
      {/* <ImageHolder style={{ borderBottom: randomBorder() }}>
        <Img
          src={card2.src}
          onMouseLeave={(e) => {
            ref.current.style.display = "none";
          }}
          onMouseMove={(e) => {
            ref.current.innerHTML =
              "Hernanes 2 gols na virada que salvou o Tricolor do rebaixamento de 2017<br> Botafogo x São Paulo";
            ref.current.style.display = "block";
            ref.current.style.left = `${e.pageX + 10}px`;
            ref.current.style.top = `${e.pageY + 10}px`;
          }}
        ></Img>{" "}
      </ImageHolder>
      <ImageHolder style={{ borderBottom: randomBorder() }}>
        <Img
          src={card3.src}
          onMouseLeave={(e) => {
            ref.current.style.display = "none";
          }}
          onMouseMove={(e) => {
            ref.current.innerHTML =
              "Comemoração marcante do Reinaldo em gol contra o Corinthians<br> São Paulo x Corinthians";
            ref.current.style.display = "block";
            ref.current.style.left = `${e.pageX + 10}px`;
            ref.current.style.top = `${e.pageY + 10}px`;
          }}
        ></Img>{" "}
      </ImageHolder> */}
    </MiddleComponent>
  );
};

export default Middle;
