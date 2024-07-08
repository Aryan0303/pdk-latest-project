import React, { useState, useEffect } from 'react';
import '../ProductSizes/ProductSizes.css';


const ProductColors = ({ colors, onSelectColor }) => {
  const [selectedColor, setSelectedColor] = useState(null);

  useEffect(() => {
    if (colors.length > 0) {
      setSelectedColor(colors[0]);
      onSelectColor(colors[0]); // Initialize selectedColor in parent component
    }
  }, [colors, onSelectColor]);

  const handleColorClick = (color) => {
    setSelectedColor(color);
    onSelectColor(color); // Update selectedColor in parent component
  };

  return (
    <div className="product-colors">
      <p><span className='label'>Color:</span> {selectedColor}</p>
      <div className="color-buttons">
        {colors.map((color) => (
          <button
            key={color}
            className={selectedColor === color ? 'color-button active' : 'color-button'}
            onClick={() => handleColorClick(color)}
          >
            {color}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductColors;
