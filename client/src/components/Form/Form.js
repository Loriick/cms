import React from "react";
import { Mutation } from "react-apollo";
import { ADD_POST, POSTS } from "../../queries";
import openNotificationWithIcon from "../../utils/Notification";
import { FormStyled } from "./FormStyled";
import { withRouter } from "react-router-dom";

function Form({
  title,
  description,
  photographeName,
  imgUrl,
  handleChange,
  handleSubmit,
  history,
  setToForm
}) {
  return (
    <FormStyled>
      <div className="container">
        <h2>{title}</h2>
        <Mutation
          mutation={ADD_POST}
          variables={{
            title,
            description,
            photographeName,
            imgUrl,
            createdDate: Date.now()
          }}
          onCompleted={data => {
            console.log({ data });
            openNotificationWithIcon("success", "Votre post a bien été créé!");
            history.push("/");
          }}
          refetchQueries={() => [{ query: POSTS }]}
        >
          {(addPost, { loading, error }) => {
            if (loading) return <p>loading</p>;
            if (error)
              return openNotificationWithIcon(
                "error",
                "Il a eu un problème avec l'envoie du fichier!"
              );
            return (
              <form onSubmit={e => handleSubmit(e, addPost)}>
                <input
                  name="photographeName"
                  id="photographeName"
                  onChange={handleChange}
                  type="text"
                  value={photographeName}
                  placeholder="Nom du Photographe"
                />
                <input
                  name="description"
                  id="description"
                  onChange={handleChange}
                  type="text"
                  value={description}
                  placeholder="Description"
                />
                <div className="btn-container">
                  <button type="submit" disabled={loading}>
                    Enregister
                  </button>
                  <button onClick={() => setToForm(false)}>Retour</button>
                </div>
              </form>
            );
          }}
        </Mutation>
      </div>
    </FormStyled>
  );
}

export default withRouter(Form);
