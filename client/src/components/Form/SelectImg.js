import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Icon } from "antd";
import PropTypes from "prop-types";

const SelectImgStyled = styled.section`
  width: 100%;
  padding-top: 3%;

  .container {
    .image__preview {
      height: 40vh;
      width: 100%;
      margin: 0 auto;
      > .preview,
      > img {
        height: 100%;
        width: 100%;
      }
      > .preview {
        background-color: #aaa;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 3px;
        .upload {
          height: 4vh;
          width: 15vw;
          padding: 0.5em;
          background: #ddd;
          box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
          transition: 0.3s;
          cursor: pointer;
          text-align: center;
          font-size: 1em;
          border-radius: 3px;
          &:hover {
            box-shadow: 0 4px 4px rgba(0, 0, 0, 0.5);
          }
        }
      }
      > img {
        object-fit: contain;
      }
    }
    .image__title {
      height: 10%;
      width: 100%;
      margin: 0 auto;
      margin-top: 3em;

      > input {
        outline: none;
        border: none;
        display: block;
        height: 4vh;
        width: 100%;
        border-radius: 3px;
        margin-top: 1%;
        padding: 0 3%;
        box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
        transition: 0.4s;

        &:hover {
          box-shadow: 0 4px 4px rgba(0, 0, 0, 0.5);
        }
        &:focus {
          box-shadow: 0 5px 9px rgba(41, 63, 118, 0.5);
        }
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

        &:disabled {
          background-image: rgba(41, 63, 118, 0.5);
        }
        &:hover {
          box-shadow: 0 4px 4px rgba(0, 0, 0, 0.5);
        }

        &:first-child {
          background: #293f76;
          margin-right: 5%;

          &:disabled {
            background: rgba(41, 63, 118, 0.5);
            cursor: no-drop;
            &:hover {
              box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
            }
          }
        }
        &:nth-child(2) {
          background: #293f76;
          > a {
            color: inherit;
          }
        }
      }
    }
  }
`;

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
    if (imgSrc || imgLoading) {
      return false;
    } else {
      return true;
    }
  };
  return (
    <SelectImgStyled className="image">
      <div className="container">
        <h2>Selectionnez une image</h2>
        <div className="image__preview">
          {imgSrc ? (
            <img src={imgSrc} alt={"null"} />
          ) : (
            <div className="preview">
              <label className="upload" htmlFor="imgUrl">
                <Icon type="upload" /> Selectionnez une photo
                <input
                  name="imgUrl"
                  id="imgUrl"
                  onChange={upload}
                  type="file"
                  hidden
                />
              </label>
            </div>
          )}
          {imageName && <p>{imageName}</p>}
        </div>
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
  fileObj: PropTypes.object.isRequired
};
