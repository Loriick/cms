import React from "react";
import { Icon } from "antd";

export default function ImgPreview({ imgSrc, upload, imageName }) {
  return (
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
      {imageName && <p className="img-name">{imageName}</p>}
    </div>
  );
}
