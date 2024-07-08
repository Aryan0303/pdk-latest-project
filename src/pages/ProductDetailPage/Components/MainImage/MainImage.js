// src/pages/ProductDetailPage/Components/MainImage/MainImage.js
import React from 'react';
import './MainImage.css';

const MainImage = ({ imageUrl }) => {
  return (
    <div className="main-image-container">
      {imageUrl ? (
        <img src={imageUrl} alt="Product Main" className="main-image" />
      ) : (
        <p>Loading main image...</p>
      )}
    </div>
  );
};

export default MainImage;
