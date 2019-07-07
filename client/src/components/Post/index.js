import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Card = styled.div`
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

export default function Post({ _id, img, title }) {
  return (
    <Card>
      <Link to={`/post/${_id}`}>
        <div>
          <img src={img} alt={title} />
        </div>
        <div>
          <p>Titre: {title}</p>
        </div>
      </Link>
    </Card>
  );
}

Post.propTypes = {
  _id: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};
