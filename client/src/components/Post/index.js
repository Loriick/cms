import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Card } from "./Post.style";

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
