import React from "react";
import styled from "styled-components";
import card1 from "./card1.png";
import card2 from "./card2.png";
import card3 from "./card3.png";

import spfc from "./teams/spfc.png";
import atl from "./teams/atl.png";

// import { card1 } from "../../../public/card1.png";
import { useState, useEffect, useRef } from "react";
import { purple, red } from "@material-ui/core/colors";
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
    transform: scale(1.1) rotate(1deg);
    cursor: pointer;
  }
`;

// MAKE A COMPONENT WITH ALL THE CLUBS AND THEIR PAGES

export const LittleWindow = styled.div`
  width: 200px;
  /* height: 120px; */
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
  padding: 5px;
  display: none;

  justify-content: center;
`;

const Middle = ({ cards }) => {
  const ref = useRef();
  // const [msg, setMsg] = useState(<div>qqq</div>);

  const msg = (
    <div style={{ color: purple }}>
      <div>Teste1</div>
      <div>Teste2</div>
      <div>Teste3</div>
      <img src={card1}></img>
    </div>
  );
  // console.log(msg.props.children);

  useEffect(() => {
    // window.addEventListener("mousemove", (event) => {
    //   console.log(Img);
    //   // console.log(event);
    // });
  }, []);

  // console.log(
  //   Object(<div dangerouslySetInnerHTML={{ __html: "var1" }}></div>).props
  //     .dangerouslySetInnerHTML.__html
  // );
  return (
    <MiddleComponent>
      <LittleWindow ref={ref}>Hello there</LittleWindow>
      <ImageHolder style={{ borderBottom: randomBorder() }}>
        <Img
          src={card1.src}
          onMouseLeave={(e) => {
            ref.current.style.display = "none";
          }}
          onMouseMove={(e) => {
            console.log(msg.props.children);
            //  ref.current.h =  <div dangerouslySetInnerHTML={{ __html: var1 }}>
            ref.current.innerHTML = msg.props.children;
            // ref.current.html = `<div style={{"color",eee "red"}}>
            // ref.current.html = `<div style={{"color",eee "red"}}>
            // Luciano Hat Trick <br> São Paulo x Flamengo
            // <div>`;
            ref.current.style.display = "flex";
            ref.current.style.left = `${e.pageX + 10}px`;
            ref.current.style.top = `${e.pageY + 10}px`;
          }}
        ></Img>
      </ImageHolder>

      <ImageHolder style={{ borderBottom: randomBorder() }}>
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
      </ImageHolder>
    </MiddleComponent>
  );
};

export default Middle;
