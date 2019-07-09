import styled from "styled-components";

export const PostStyled = styled.section`
  height: 80vh;
  width: 100vw;

  > .back {
    display: inline-block;
    font-size: 1.3em;
    box-sizing: border-box;
    padding: 3%;
    cursor: pointer;
    width: 15%;
    height: 3%;
    color: currentColor;
  }

  > div {
    height: 80%;
    width: 80%;
    margin: 5% auto 0 auto;
    display: flex;

    & > div:first-child {
      width: 50%;
      height: 100%;
      > img {
        height: 100%;
        width: 100%;
        object-fit: contain;
      }
    }

    & > div:last-child {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 50%;
      height: 100%;
      box-sizing: border-box;
      padding: 5% 0;
      > div {
        width: 80%;
        height: 30%;
        margin-bottom: 10%;
        p {
          font-size: 1.1em;
          > strong {
            font-size: 1.3em;
          }
        }
      }
      .btn-container {
        display: flex;
        button {
          height: 4vh;
          width: 7vw;
          outline: none;
          border: none;
          border-radius: 3px;
          cursor: pointer;
          color: white;
          box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
          transition: 0.3s;
          &:hover {
            box-shadow: 0 4px 4px rgba(0, 0, 0, 0.5);
          }

          &:first-child {
            background: #293f76;
            margin-right: 5%;

            &:disabled {
              background: rgba(41, 63, 118, 0.5);
            }
          }
          &:nth-child(2) {
            background: #e06c42;
            margin-right: 5%;
            > a {
              color: inherit;
            }
          }
        }
      }
    }
  }
`;
