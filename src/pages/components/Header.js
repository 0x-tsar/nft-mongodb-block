import React from "react";
import styled from "styled-components";
import { SearchField } from "./SearchField";

export const HeaderComponent = styled.div`
  background-color: white;
  grid-area: header;
  /* width: 100vw; */
  border: 2px solid rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
`;

const Header = () => {
  return (
    <HeaderComponent>
      <div style={{ marginLeft: 10 }}>My Logo Here! :)</div>
    </HeaderComponent>
  );
};

export default Header;
