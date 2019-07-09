import React from "react";
import { Query } from "react-apollo";
import { POSTS } from "../../queries";
import Post from "../Post";
import { LargeSpinner } from "../Loader";
import openNotificationWithIcon from "../../utils/Notification";
import moment from "moment";
import { PostsHomePreviewStyled } from "./Posts.style";

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
        //console.log(moment(+posts[0].createdDate).format("MM/DD/YYYY"));

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
