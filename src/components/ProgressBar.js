import React, { useEffect } from "react";
import useStorage from "../hooks/useStorage";
import "./ProgressBar.css";
import { motion } from "framer-motion";

//
const ProgressBar = ({ file, setFile }) => {
  const { url, progress } = useStorage(file);

  console.log(progress);
  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);
  //   background: conic-gradient(var(--secondary) 0% 20%);\\

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: progress + "%" }}
      className='progress-bar'
      style={{
        width: progress + "%",
      }}
    />
  );
};

export default ProgressBar;
