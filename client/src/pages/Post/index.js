import React from "react";
import { Query, Mutation } from "react-apollo";
import { POST, DELETE_POST, POSTS } from "../../queries";
import { Icon } from "antd";
import { Link } from "react-router-dom";
import openNotificationWithIcon from "../../utils/Notification";
import PropTypes from "prop-types";
import { PostStyled } from "./Post.style";

export default function Post({ match, history }) {
  const handleDeletePost = deletePost => {
    deletePost();
  };
  return (
    <Query query={POST} variables={{ _id: match.params._id }}>
      {({ data, loading, error }) => {
        if (error) return <p>Error</p>;
        if (loading) return <p>loading</p>;
        console.log(data);
        const { imgUrl, title, description, photographeName } = data.post;
        return (
          <PostStyled>
            <Link className="back" to="/">
              <Icon type="left" /> Retour
            </Link>
            <div>
              <div>
                <img src={imgUrl} alt={title} />
              </div>
              <div>
                <div>
                  <p>
                    <strong>Titre</strong>: {title}
                  </p>
                  <p>
                    <strong>Description</strong>: {description}
                  </p>
                  <p>
                    <strong>Nom du photographe</strong>: {photographeName}
                  </p>
                </div>

                <div className="btn-container">
                  <button>Modifier</button>
                  <Mutation
                    mutation={DELETE_POST}
                    variables={{
                      _id: match.params._id
                    }}
                    onCompleted={data => {
                      console.log({ data });
                      openNotificationWithIcon(
                        "success",
                        "Votre post a bien été supprimé!"
                      );
                      history.push("/");
                    }}
                    refetchQueries={() => [{ query: POSTS }]}
                  >
                    {(deletePost, { loading, error }) => {
                      if (loading) return <p>loading</p>;
                      if (error) return <p>error</p>;
                      return (
                        <button onClick={() => handleDeletePost(deletePost)}>
                          Supprimer
                        </button>
                      );
                    }}
                  </Mutation>
                </div>
              </div>
            </div>
          </PostStyled>
        );
      }}
    </Query>
  );
}

Post.propTypes = {
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};
