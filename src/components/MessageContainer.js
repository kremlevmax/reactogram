import React from "react";
import ProgressBar from "./ProgressBar";
import "./MessageConteiner.css";

const MessageContainer = ({ error, imageFile, setImageFile }) => {
  return (
    <div className='message__container'>
      {imageFile && <ProgressBar file={imageFile} setFile={setImageFile} />}
      {error && <span className='error__message'>{error}</span>}
    </div>
  );
};

export default MessageContainer;
