import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import ImgPreview from "./ImgPreview";
import { SelectImgStyled } from "./SelectImg.style";

export default function SelectImg({
  goToNext,
  upload,
  imgSrc,
  handleChange,
  imgLoading,
  imageName,
  fileObj,
  title
}) {
  const loadingFunc = () => {
    if (imgSrc) {
      return false;
    } else {
      return true;
    }
  };
  return (
    <SelectImgStyled className="image">
      <div className="container">
        <h2>Selectionnez une image</h2>
        <ImgPreview imgSrc={imgSrc} upload={upload} imageName={imageName} />
        <div className="image__title">
          <input
            type="text"
            name="title"
            id="title"
            onChange={handleChange}
            placeholder="Titre"
            value={title}
          />
        </div>
        <div className="btn-container">
          <button
            disabled={loadingFunc() || !title.trim()}
            onClick={() => goToNext(fileObj)}
          >
            Continuer
          </button>
          <button>
            <Link to="/">Annuler</Link>
          </button>
        </div>
      </div>
    </SelectImgStyled>
  );
}

SelectImg.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imageName: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  upload: PropTypes.func.isRequired,
  goToNext: PropTypes.func.isRequired,
  imgLoading: PropTypes.bool.isRequired,
  fileObj: PropTypes.object
};
