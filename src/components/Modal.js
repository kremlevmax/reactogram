import React from "react";
import "./Modal.css";

const Modal = ({ selectedImage, setSelectedImage }) => {
  return (
    <div className='backdrop' onClick={() => setSelectedImage(null)}>
      <img src={selectedImage} alt='Enlarged Pic' />
    </div>
  );
};

export default Modal;
