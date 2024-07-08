import React, { useState, useEffect } from 'react';
import './ProductSizes.css'; // Import the CSS file for ProductSizes component

const ProductSizes = ({ sizes, onSelectSize }) => {
  const [selectedSize, setSelectedSize] = useState(null);

  useEffect(() => {
    if (sizes.length > 0) {
      setSelectedSize(sizes[0]);
      onSelectSize(sizes[0]); // Initialize selectedSize in parent component
    }
  }, [sizes, onSelectSize]);

  const handleSizeClick = (size) => {
    setSelectedSize(size);
    onSelectSize(size); // Update selectedSize in parent component
  };

  return (
    <div className="product-sizes">
      <p><span className='label-'>Size:</span> {selectedSize}</p>
      <div className="size-buttons">
        {sizes.map((size) => (
          <button
            key={size}
            className={selectedSize === size ? 'size-button active' : 'size-button'}
            onClick={() => handleSizeClick(size)}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductSizes;
