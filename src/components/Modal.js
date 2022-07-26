import React from "react";
import "./Modal.css";
import { motion } from "framer-motion";

const Modal = ({ selectedImage, setSelectedImage }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className='backdrop'
      onClick={() => setSelectedImage(null)}
    >
      <motion.img
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        transition={{ delay: 0.5 }}
        src={selectedImage}
        alt='Enlarged Pic'
      />
    </motion.div>
  );
};

export default Modal;
