import React, { useState, useEffect } from "react";
import styled from "styled-components";
import spfc from "./teams/spfc.png";
import gremio from "./teams/gremio.png";
import atl from "./teams/atl.png";
import bahia from "./teams/bahia.png";
import ceara from "./teams/ceara.png";
import fortaleza from "./teams/fortaleza.png";
import juventude from "./teams/juventude.png";
import sport from "./teams/sport.png";
import Link from "next/link";

import IconTeam from "./IconTeam";

function name(params) {}

export const LeftComponent = styled.div`
  background-color: white;
  grid-area: left;
  font-family: "Kanit", sans-serif;
  color: rgb(122, 110, 170);
  border: 2px solid rgba(0, 0, 0, 0.2);
  border-top: 0;
  cursor: pointer;
  /* @media only screen and (max-width: 600px) {
    display: none;
  } */
`;

export const Menu = styled.div`
  display: flex;
  justify-content: center;
  padding: 5px;
  /* margin: 5px; */

  :hover {
    background-color: rgb(122, 110, 170, 0.1);
  }
`;

export const HolderTeams = styled.div`
  /* display: flex;
  justify-content: center; */
  /* padding: 5px; */
  /* background-color: #06aa48; */
  margin-top: 400px;
  height: 300px;
`;

export const MenuTeams = styled.div`
  padding: 5px;
  background-color: white;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MenuHolder = styled.div`
  width: 250px;
  height: 30px;
  /* background-color: green; */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const MenuItem = styled.div`
  font-family: "Kanit", sans-serif;

  color: black;
  margin: 0 2px;
  /* margin-right: 10px; */
  border: 2px solid rgba(0, 0, 0, 0.1);
  color: rgba(0, 0, 0, 0.5);

  :hover {
    color: #06aa48;
  }
`;

export const HTeams = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const ButtonCreate = styled.button`
  /* display: flex;
  justify-content: center;
  flex-wrap: wrap; */

  border: none;
  padding: 10px;
  background-color: red;
  color: white;
  margin: 10px 100px;
  cursor: pointer;

  :hover {
    background-color: rgba(0, 0, 0);
  }
`;

const Left = () => {
  const [whichCategory, setWhichCategory] = useState("Série A");

  useEffect(() => {
    console.log(whichCategory);
  }, [whichCategory]);

  return (
    <LeftComponent>
      <Link href={`/`}>
        <Menu style={{ fontWeight: "bolder" }}>Meus Items</Menu>
      </Link>
      <Menu>Início</Menu>
      <Menu>Trocar</Menu>
      <Menu>Moeda</Menu>

      {/* <div style={{ justifyContent: "center" }}> */}
      <ButtonCreate
        onClick={() => {
          console.log("click");
        }}
      >
        Create Card
      </ButtonCreate>
      {/* </div> */}

      <HolderTeams>
        <MenuTeams>
          <MenuHolder>
            <MenuItem
              onClick={() => {
                setWhichCategory("Série A");
              }}
              style={{
                color:
                  whichCategory === "Série A"
                    ? `#06aa48`
                    : `rgb(122, 110, 170)`,
              }}
            >
              Série A
            </MenuItem>
            <MenuItem
              onClick={() => {
                setWhichCategory("Série B");
              }}
              style={{
                color:
                  whichCategory === "Série B"
                    ? `#06aa48`
                    : `rgb(122, 110, 170)`,
              }}
            >
              Série B
            </MenuItem>
            <MenuItem
              onClick={() => {
                setWhichCategory("Europa");
              }}
              style={{
                color:
                  whichCategory === "Europa" ? `#06aa48` : `rgb(122, 110, 170)`,
              }}
            >
              Europa
            </MenuItem>
          </MenuHolder>
        </MenuTeams>
        {whichCategory === "Série A" ? (
          <HTeams>
            <IconTeam src={spfc.src} name={"sao-paulo"}></IconTeam>
            <IconTeam src={ceara.src} name={"ceara"}></IconTeam>
            <IconTeam src={juventude.src} name="juventude"></IconTeam>
            <IconTeam src={gremio.src} name="gremio"></IconTeam>
            <IconTeam src={atl.src} name="atletico-mg"></IconTeam>
            <IconTeam src={sport.src} name="sport"></IconTeam>
            <IconTeam src={fortaleza.src} name="fortaleza"></IconTeam>
            <IconTeam src={bahia.src} name="bahia"></IconTeam>
          </HTeams>
        ) : (
          <div></div>
        )}
        {whichCategory === "Série B" ? (
          <HTeams>
            <IconTeam color={"black"}></IconTeam>
            <IconTeam color={"black"}></IconTeam>
            <IconTeam color={"black"}></IconTeam>
            <IconTeam color={"black"}></IconTeam>
            <IconTeam color={"black"}></IconTeam>
            <IconTeam color={"black"}></IconTeam>
            <IconTeam color={"black"}></IconTeam>
            <IconTeam color={"black"}></IconTeam>
          </HTeams>
        ) : (
          <div></div>
        )}

        {whichCategory === "Europa" ? (
          <HTeams>
            <IconTeam color={"red"}></IconTeam>
            <IconTeam color={"red"}></IconTeam>
            <IconTeam color={"red"}></IconTeam>
            <IconTeam color={"red"}></IconTeam>
            <IconTeam color={"red"}></IconTeam>
            <IconTeam color={"red"}></IconTeam>
            <IconTeam color={"red"}></IconTeam>
            <IconTeam color={"red"}></IconTeam>
          </HTeams>
        ) : (
          <div></div>
        )}
      </HolderTeams>
    </LeftComponent>
  );
};

export default Left;
