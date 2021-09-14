import React from "react";
import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import card1 from "../../../public/card1.png";
import card2 from "../../../public/card2.png";
import card3 from "../../../public/card3.png";
import { purple, red } from "@material-ui/core/colors";

const cor = "rgb(230,230,230)";

export const Container = styled.div``;

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

export const Img = styled.img`
  transform: scale(1);
  transition-duration: 5s;

  :hover {
    /* transition-delay: 0.5s; */
    transform: scale(1.1) rotate(1deg);
    cursor: pointer;
  }
`;

// MAKE A COMPONENT WITH ALL THE CLUBS AND THEIR PAGES
export const LittleWindow = styled.div`
  width: 200px;
  height: 400px;
  /* height: 300; */
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  border: 2px solid rgb(0, 0, 0, 0.2);
  z-index: 999;
  position: absolute;
  /* left: 100px;
  top: 100px; */
  color: black;
  cursor: default;
  pointer-events: none;
  padding: 10px;
  display: none;

  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
`;

const CustomCard = ({ data }) => {
  const ref = useRef();
  const [desc, setDesc] = useState("...");
  const [border, setBorder] = useState();
  const [dados, setDados] = useState({
    name: "",
    description: "",
    nationality: "",
    team: "",
    owner: "",
    price: "",
    rareness: "",
    tokenid: 0,
    amountminted: "",
    isforselling: "",
  });

  useEffect(() => {
    const randomBorder = () => {
      const colors = ["purple", "yellow", "red", "blue", "cyan"];
      const r = Math.floor(Math.random() * colors.length);
      setBorder(`10px solid ${colors[r]}`);
      // return `10px solid ${colors[r]}`;
    };
    // randomBorder();
  }, []);

  return (
    <>
      {data.map((item, key) => {
        return (
          <ImageHolder
            key={key}
            style={{ borderBottom: border }}
            onMouseLeave={(e) => {
              ref.current.style.display = "none";
            }}
            onMouseMove={(e) => {
              ref.current.style.display = "flex";
              ref.current.style.left = `${e.pageX + 10}px`;
              ref.current.style.top = `${e.pageY + 10}px`;
            }}
            onMouseEnter={(e) => {
              // console.log(e.currentTarget.children[0].children[0].attributes);
              // console.log(e.currentTarget.children[0].children[0].attributes);
              // setDesc(e.currentTarget.children[0].attributes[0].value);

              // console.log(e.currentTarget.children[0].children[0].attributes);

              setDados({
                name: e.currentTarget.children[0].children[0].attributes.name
                  .value,
                description:
                  e.currentTarget.children[0].children[0].attributes.description
                    .value,
                nationality:
                  e.currentTarget.children[0].children[0].attributes.nationality
                    .value,
                team: e.currentTarget.children[0].children[0].attributes.team
                  .value,
                owner:
                  e.currentTarget.children[0].children[0].attributes.owner
                    .value,
                price:
                  e.currentTarget.children[0].children[0].attributes.price
                    .value,
                amountMinted:
                  e.currentTarget.children[0].children[0].attributes.amountMinted.value.toString(),
                tokenId:
                  e.currentTarget.children[0].children[0].attributes.tokenId
                    .value,
                rareness:
                  e.currentTarget.children[0].children[0].attributes.rareness
                    .value,
                isForSelling:
                  e.currentTarget.children[0].children[0].attributes
                    .isForSelling.value,
                // setDesc(e.currentTarget.textContent)
              });
            }}
            onClick={(e) => {
              console.log("buy it");
            }}
          >
            <LittleWindow ref={ref} value={item.description}>
              <div
                name={item.name}
                description={item.description}
                nationality={item.nationality}
                team={item.team}
                owner={item.owner}
                price={item.price}
                rareness={item.rareness}
                tokenid={parseInt(item.tokenId)}
                amountminted={item.amountMinted}
                isforselling={item.isForSelling.toString()}
              ></div>
              <div>{dados.name}</div>
              <div>{dados.description}</div>
              <div>{dados.nationality}</div>
              <div>{dados.team}</div>
              <div>{dados.owner}</div>
              <div>{dados.price}</div>
              <div>tokenId: {dados.tokenId}</div>
              <div>is for selling? {dados.isForSelling}</div>
              <div>Rareness: {dados.rareness}</div>
              <div>amounts minted: {dados.amountMinted}</div>
            </LittleWindow>
            <Img src={item.imageUrl === 1 ? card1.src : card2.src}></Img>
          </ImageHolder>
        );
      })}
    </>
  );
};

export default CustomCard;
