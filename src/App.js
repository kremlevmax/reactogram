import { useState } from "react";
import "./App.css";
import ImageGrid from "./components/ImageGrid";
import UploadForm from "./components/UploadForm";
import Modal from "./components/Modal";
import Logo from "./components/Logo";
import MessageContainer from "./components/MessageContainer";

function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [error, setError] = useState(null);

  return (
    <div className='App'>
      <Logo>
        <UploadForm setImageFile={setImageFile} setError={setError} />
      </Logo>
      <MessageContainer
        error={error}
        imageFile={imageFile}
        setImageFile={setImageFile}
      />
      <ImageGrid setSelectedImage={setSelectedImage} />
      {selectedImage && (
        <Modal
          setSelectedImage={setSelectedImage}
          selectedImage={selectedImage}
        />
      )}
    </div>
  );
}

export default App;
