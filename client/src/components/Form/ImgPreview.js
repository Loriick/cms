import React from "react";
import styled from "styled-components";
import { SmallSpinner } from "../Loader";
import PropTypes from "prop-types";

const defaultImgUrl = "https://via.placeholder.com/1000";

const ImgPreviewStyled = styled.div`
  width: 50%;

  > h3 {
    text-align: center;
    margin: 5% 0;
  }

  .previewer {
    height: 60%;
    width: 70%;
    padding: 3%;
    box-sizing: border-box;
    margin: 0 auto;
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
    > div {
      width: 80%;
      height: 90%;
      box-sizing: border-box;
      padding: 3%;
      position: relative;
      > img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    > span {
      display: inline-block;
      box-sizing: border-box;
      padding: 3% 0;
    }
  }

  .btn-container {
    height: 60%;
    width: 70%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    margin-top: 5%;
    > p {
      text-align: center;
    }
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

      &:nth-child(2) {
        background: #293f76;
        margin-right: 5%;

        &:disabled {
          background: rgba(41, 63, 118, 0.5);
        }
      }
      &:nth-child(3) {
        background: #e06c42;
        margin-right: 5%;
        > a {
          color: inherit;
        }
      }
    }
  }
`;

export default function ImgPreview({
  imgSrc,
  title,
  setImgSrc,
  uploadFileToCloudinary,
  fileObj,
  setImageName,
  imageName,
  imgLoading
}) {
  const loadingFunc = () => {
    if (imgSrc || imgLoading) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <ImgPreviewStyled>
      <h3>Preview de la photo selectionné</h3>
      <div className="previewer">
        <div>
          <img src={imgSrc ? imgSrc : defaultImgUrl} alt={title} />
          {imgLoading && <SmallSpinner />}
        </div>
        {imageName && <span>Image selectionnée: {imageName}</span>}
      </div>

      {imgSrc && (
        <div className="btn-container">
          <p>Cette image vous convient ?</p>
          <button
            disabled={loadingFunc()}
            onClick={() => uploadFileToCloudinary(fileObj)}
          >
            Valider
          </button>
          <button
            onClick={() => {
              setImgSrc("");
              setImageName("");
            }}
          >
            Annuler
          </button>
        </div>
      )}
    </ImgPreviewStyled>
  );
}

ImgPreview.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imageName: PropTypes.string.isRequired,
  imgLoading: PropTypes.bool.isRequired,
  setImgSrc: PropTypes.func.isRequired,
  fileObj: PropTypes.object,
  uploadFileToCloudinary: PropTypes.func.isRequired,
  setImageName: PropTypes.func.isRequired
};
