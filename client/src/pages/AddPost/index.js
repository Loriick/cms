import React, { useState } from "react";
import useForm from "../../hooks/useForm";
import SelectImg from "../../components/Form/SelectImg";
import Form from "../../components/Form/Form";
import { REACT_APP_CLOUDINARY_USERNAME } from "../../.keys.json";

export default function AddPost() {
  const [imgUrl, setImgUrl] = useState("");
  const [toForm, setToForm] = useState(false);
  const [imgSrc, setImgSrc] = useState("");
  const [imageName, setImageName] = useState("");
  const [fileObj, setFileObj] = useState(null);
  const [imgLoading, setImgLoading] = useState(false);
  const [values, handleChange] = useForm({
    title: "",
    description: "",
    photographeName: ""
  });

  console.log(process.env.REACT_APP_CLOUDINARY_USERNAME);
  const uploadFileToCloudinary = async fileObj => {
    setImgLoading(true);
    const data = new FormData();
    data.append("file", fileObj);
    data.append("upload_preset", "raycms");
    data.append("cloudname", REACT_APP_CLOUDINARY_USERNAME);
    console.log(fileObj);

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${REACT_APP_CLOUDINARY_USERNAME}/image/upload`,
      {
        method: "POST",
        body: data,
        mode: "cors"
      }
    );
    const file = await res.json();
    setImgUrl(file.secure_url);
    setImgLoading(false);
    console.log(file);
  };

  const goToNext = fileObj => {
    uploadFileToCloudinary(fileObj);
    setToForm(true);
  };

  const upload = e => {
    const file = e.target.files[0];
    setFileObj(file);
    setImageName(file.name);
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setImgSrc(reader.result);
    };
  };

  const handleSubmit = (e, addPost) => {
    e.preventDefault();
    addPost();
    setImgSrc("");
  };
  const { title, description, photographeName } = values;
  return (
    <section style={{ width: "80vw" }}>
      {toForm ? (
        <Form
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          description={description}
          photographeName={photographeName}
          setToForm={setToForm}
          title={title}
          imgUrl={imgUrl}
          imgLoading={imgLoading}
        />
      ) : (
        <SelectImg
          upload={upload}
          imgSrc={imgSrc}
          title={title}
          handleChange={handleChange}
          goToNext={goToNext}
          imgLoading={imgLoading}
          imageName={imageName}
          fileObj={fileObj}
        />
      )}
    </section>
  );
}
