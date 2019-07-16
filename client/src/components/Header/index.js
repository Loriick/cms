import React from "react";
import styled from "styled-components";

const HeaderStyled = styled.header`
  height: 5vh;
  width: 100%;
  display: flex;
  align-items: center;
  .logo {
    object-fit: contain;
    height: 90%;
    margin-right: 2em;
  }
  > h3 {
    font-size: 1.6em;
    margin-right: auto;
  }

  > a {
    color: currentColor;
    padding: 0 10%;
    font-weight: bold;
  }
`;

export default function Header() {
  return (
    <HeaderStyled>
      <img
        className="logo"
        src={`https://res.cloudinary.com/${
          process.env.REACT_APP_CLOUDINARY_USERNAME
        }/image/upload/v1562236609/logo-ray-cms.png`}
        alt="logo"
      />
      <h3>Content Manager</h3>
      <a href="http://raymike.com" target="_blank">
        Aller au site
      </a>
    </HeaderStyled>
  );
}
