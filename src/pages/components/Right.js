// import { Container } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

export const RRight = styled.div`
  background-color: tomato;
  grid-area: right;
  min-width: 200px;
  overflow-y: scroll;
  color: white;
`;

export const Container = styled.div`
  margin: 10px;
  background-color: black;
  height: 100px;
  display: flex;
  align-items: center;
`;

const Right = ({ data }) => {
  console.log(data);

  return (
    <RRight>
      {data.map((item, key) => {
        if (key > 0) {
          return (
            <Container key={key} style={{ marginTop: 50 }}>
              <div style={{ marginLeft: "10px" }}>
                <div>Item: {item.item}</div>
                <div>Price: {item.price}</div>
                <div>Quantity: {item.quantity}</div>
              </div>
            </Container>
          );
        } else {
          return (
            <Container
              key={key}
              style={{ marginTop: 10, backgroundColor: "purple" }}
            >
              <div style={{ marginLeft: "10px" }}>
                <div>Item: {item.item}</div>
                <div>Price: {item.price}</div>
                <div>Quantity: {item.quantity}</div>
              </div>
            </Container>
          );
        }
      })}
    </RRight>
  );
};

export default Right;
