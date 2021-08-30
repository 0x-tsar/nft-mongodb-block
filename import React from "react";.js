import React from "react";
import styled from "styled-components";
import card1 from "./card1.png";
import card2 from "./card2.png";
import card3 from "./card3.png";
// import { card1 } from "../../../public/card1.png";
const cor = "rgb(230,230,230)";

export const MiddleComponent = styled.div`
  background-color: ${cor};
  grid-area: middle;
  display: flex;
  flex-wrap: wrap;
  font-family: "Kanit", sans-serif;
  color: rgb(122, 110, 170);
`;

const randomBorder = () => {
  const colors = ["purple", "yellow", "red", "blue", "cyan"];
  const r = Math.floor(Math.random() * colors.length);
  console.log(colors[r]);
  console.log(r);
  return `10px solid ${colors[r]}`;
};

export const ImageHolder = styled.div`
  width: 200px;
  height: 300px;
  background-color: #000000;
  grid-area: middle;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  margin: 10px;
  border-radius: 10px;
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

export const Img = styled.img`
  transform: scale(1);
  transition-duration: 5s;

  :hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;

console.log(card1.src);
const Middle = ({ cards }) => {
  return (
    <MiddleComponent>
      <Panel>
        <ImageHolder style={{ borderBottom: randomBorder() }}>
          <Img src={card1.src}></Img>
        </ImageHolder>

        <div>
          <div>Brasileirão 2021</div>
          <div>Hat Trick</div>
        </div>
      </Panel>
      <Panel>
        <ImageHolder style={{ borderBottom: randomBorder() }}>
          <Img src={card2.src}></Img>
        </ImageHolder>
      </Panel>
      <Panel>
        <ImageHolder style={{ borderBottom: randomBorder() }}>
          <Img src={card3.src}></Img>
        </ImageHolder>
      </Panel>
    </MiddleComponent>
  );
};

export default Middle;
