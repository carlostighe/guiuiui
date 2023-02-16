import React, { useState, useEffect } from 'react';

function ImageGallery({ folderPath }) {
  const [imagePaths, setImagePaths] = useState([]);

  useEffect(() => {
    fetch(`/images?folderPath=${folderPath}`)
      .then(response => response.json())
      .then(data => setImagePaths(data));
  }, [folderPath]);

  return (
    <div>
      {imagePaths.map((imagePath, index) => (
        <img key={index} src={imagePath} alt={`Image ${index}`} />
      ))}
    </div>
  );
}

export default ImageGallery;

