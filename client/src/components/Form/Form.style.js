import styled from "styled-components";

export const FormStyled = styled.section`
  width: 100%;
  padding-top: 3%;
  > .container {
    > form {
      width: 100%;
      height: 70%;
      margin-top: 5%;
      > input {
        margin-bottom: 7%;
        height: 10%;
        outline: none;
        border: none;
        display: block;
        height: 4vh;
        width: 100%;
        border-radius: 3px;
        margin-top: 1%;
        box-sizing: border-box;
        padding: 0 3%;
        box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
        transition: 0.4s;
        &:focus {
          box-shadow: 0 4px 4px rgba(0, 0, 0, 0.5);
        }
      }

      .btn-container {
        text-align: right;
        width: 100%;
        height: 10%;
        margin-top: 10%;
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
            background: #293f76;
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
