import React from "react";
import useFirestore from "../hooks/useFirestore";
import "./ImageGrid.css";

const ImageGrid = ({ setSelectedImage }) => {
  const { docs } = useFirestore();
  return (
    <div className='image-grid'>
      {docs &&
        docs.map((doc) => (
          <div
            className='image-wrap'
            key={doc.id}
            onClick={() => setSelectedImage(doc.url)}
          >
            <img src={doc.url} alt='Uploaded pic' />
          </div>
        ))}
    </div>
  );
};

export default ImageGrid;
