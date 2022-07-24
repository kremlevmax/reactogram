import React from "react";
import useStorage from "../hooks/useStorage";

const ProgressBar = ({ file }) => {
  const { url, progress } = useStorage(file);
  console.log(url, progress);
  return <div>ProgressBar</div>;
};

export default ProgressBar;
