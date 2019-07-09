import React from "react";
import styled from "styled-components";
import { Query } from "react-apollo";
import { POSTS } from "../../queries";
import Post from "../Post";
import { LargeSpinner } from "../Loader";
import openNotificationWithIcon from "../../utils/Notification";
import moment from "moment";

const PostsHomePreviewStyled = styled.section`
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

export default function PostsHomePreview() {
  return (
    <Query query={POSTS}>
      {({ data, loading, error }) => {
        if (error)
          return openNotificationWithIcon(
            "error",
            "Il semblerait qu'il y ait un problème"
          );
        if (loading) return <LargeSpinner />;

        const { posts } = data;

        return (
          <PostsHomePreviewStyled>
            <div className="container">
              <h2>Mes derniers posts</h2>
              {posts.length <= 0 ? (
                <p>
                  Il y a encore de post pour l'instant!{" "}
                  <span role="img" aria-label="sad">
                    😕
                  </span>{" "}
                  <br />
                  Mais tu peux en mettre{" "}
                  <span role="img" aria-label="happy">
                    😁
                  </span>
                </p>
              ) : (
                <div className="posts__container">
                  {posts.map(post => {
                    const { _id, title, imgUrl } = post;
                    return (
                      <Post key={_id} img={imgUrl} title={title} _id={_id} />
                    );
                  })}
                </div>
              )}
            </div>
          </PostsHomePreviewStyled>
        );
      }}
    </Query>
  );
}
