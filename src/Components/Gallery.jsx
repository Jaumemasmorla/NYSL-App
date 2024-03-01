import React, { useState } from 'react';
import { storage } from '../firebase';
import { Ref } from 'react';

export const Gallery = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    } else {
      setSelectedFile(null);
    }
  };

  const handlePost = () => {
    if (selectedFile) {
       storage.ref(`pictures/${selectedFile.name}`);

      

    }
  };

  return (
    <div>
      <h2>Gallery</h2>
      <input type="file" onChange={handleFileChange} accept="image/*" capture="camera" />
      <button onClick={handlePost} disabled={!selectedFile}>Post</button>
    </div>
  );
};
