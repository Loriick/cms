import styled from "styled-components";

export const Card = styled.div`
  height: 10vh;
  width: 40%;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
  > a {
    height: 100%;
    width: 100%;
    display: flex;

    > div {
      margin: 0;
    }
    > div:first-child {
      height: 100%;
      width: 30%;
      > img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }
    > div:last-child {
      height: 100%;
      width: 70%;
      background-color: white;
      display: flex;
      align-items: center;
      padding-left: 5%;
      > p {
        font-size: 1.2em;
        color: black;
      }
    }
  }
`;
