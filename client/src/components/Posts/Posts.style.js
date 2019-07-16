import styled from "styled-components";

export const PostsHomePreviewStyled = styled.section`
  width: 100%;
  padding-top: 3%;

  .container {
    > p {
      text-align: center;
      margin-top: 10%;
      font-size: 1.8em;
    }
    > .posts__container {
      display: flex;
      flex-wrap: wrap;
      height: 80%;
      width: 100%;
      margin: 0 auto;
      justify-content: space-between;
      padding-top: 10%;

      > div:not(:last-child) {
        margin-bottom: 10%;
      }
    }
  }
`;
