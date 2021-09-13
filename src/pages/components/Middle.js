import React from "react";
import styled from "styled-components";
// import card1 from "../../../public/card1.png";
// import card2 from "../../../public/card2.png";
// import card3 from "../../../public/card3.png";

import CustomCard from "./CustomCard";

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
  // const [msg, setMsg] = useState(<div>qqq</div>);

  // const msg = (
  //   <div style={{ color: purple }}>
  //     <div>Teste1</div>
  //     <div>Teste2</div>
  //     <div>Teste3</div>
  //     <img src={card1}></img>
  // </div>
  // );

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
      <CustomCard
        data={[
          { name: "11", imageUrl: 1 },
          { name: "222", imageUrl: 2 },
        ]}
      ></CustomCard>
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
