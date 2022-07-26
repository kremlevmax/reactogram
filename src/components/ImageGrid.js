import React from "react";
import useFirestore from "../hooks/useFirestore";
import "./ImageGrid.css";
import { motion } from "framer-motion";

const ImageGrid = ({ setSelectedImage }) => {
  const { docs } = useFirestore();
  return (
    <div className='image-grid'>
      {docs &&
        docs.map((doc) => (
          <motion.div
            whileHover={{ opacity: 1 }}
            layout
            className='image-wrap'
            key={doc.id}
            onClick={() => setSelectedImage(doc.url)}
          >
            <motion.img
              src={doc.url}
              alt='Uploaded pic'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
          </motion.div>
        ))}
    </div>
  );
};

export default ImageGrid;
