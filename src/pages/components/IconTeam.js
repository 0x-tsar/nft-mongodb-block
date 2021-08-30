import React from "react";
import styled from "styled-components";
import Link from "next/link";

export const Img = styled.img`
  width: 50px;
  height: 50px;
  margin: 5px;
`;

const handleClick = (name) => {
  console.log(name);
};

function IconTeam({ src, color, name }) {
  if (color === "black") {
    return (
      <>
        <Link href={`/teams/${name}`}>
          {
            <Img
              style={{ backgroundColor: "black" }}
              onClick={() => {
                handleClick(name);
              }}
            />
          }
        </Link>
      </>
    );
  } else if (color === "red") {
    return (
      <>
        <Link href={`/teams/${name}`}>
          <Img
            style={{ backgroundColor: "red" }}
            onClick={() => {
              handleClick(name);
            }}
          ></Img>
        </Link>
      </>
    );
  }

  if (src) {
    return (
      <>
        <Link href={`/teams/${name}`}>
          <Img
            src={src}
            onClick={() => {
              handleClick(name);
            }}
          ></Img>
        </Link>
      </>
    );
  }
}

export default IconTeam;
