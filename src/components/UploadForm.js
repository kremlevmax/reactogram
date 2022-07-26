import React from "react";
import "./UploadForm.css";

const UploadForm = ({ setError, setImageFile }) => {
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
    <form>
      <label>
        <input type='file' onChange={onChangeHandler} />
        <span>+</span>
      </label>
    </form>
  );
};

export default UploadForm;
