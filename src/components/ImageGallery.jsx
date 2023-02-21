import React, { useState, useEffect } from 'react';

function ImageGallery({ folderPath }) {
  const [imagePaths, setImagePaths] = useState([]);

  useEffect(() => {
    fetch(`/images/${folderPath}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        setImagePaths(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [folderPath]);

  return (
    // empty 
    console.log(imagePaths)
    /*
    <div>
      {imagePaths.map((imagePath, index) => (
        <img key={index} src={imagePath} alt={`Image ${index}`} />
      ))}
    </div>
    */
  );
}

export default ImageGallery;

