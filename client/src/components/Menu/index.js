import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const MenuStyled = styled.div`
  width: 30vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background: black;

  > div {
    height: 30%;
    width: 100%;
    padding: 0 3% 0 10%;
    box-sizing: border-box;

    > a {
      color: white;
      display: block;
      font-size: 1.5em;
      margin-bottom: 2em;

      &.active {
        color: #e06c42;
      }
    }
  }
`;

export default function Menu() {
  return (
    <MenuStyled>
      <div>
        <NavLink exact to="/">
          Photos
        </NavLink>
        <NavLink exact to="/add">
          Ajouter une photo
        </NavLink>
      </div>
    </MenuStyled>
  );
}
