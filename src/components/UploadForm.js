import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

const UploadForm = () => {
  const [imageFile, setImageFile] = useState(null);
  const [error, setError] = useState(null);

  const supportedFileFormats = ["image/png", "image/jpeg"];

  const onChangeHandler = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile && supportedFileFormats.includes(selectedFile.type)) {
      setError("");
      setImageFile(selectedFile);
    } else {
      setError("Error! Please choose a png or jpg file");
    }
  };

  return (
    <form action=''>
      <label></label>
      <input type='file' onChange={onChangeHandler} />
      <div className='message__container'>
        {error && <span className='error__message'>{error}</span>}
        {imageFile && <ProgressBar file={imageFile} />}
      </div>
    </form>
  );
};

export default UploadForm;
