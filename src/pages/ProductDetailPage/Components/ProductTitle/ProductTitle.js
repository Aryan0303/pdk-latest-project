// ProductTitle.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ProductTitle.css'

const ProductTitle = ({ productId }) => {
  const [title, setTitle] = useState('');

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:5001/shop/${productId}`);
        setTitle(response.data.title);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [productId]);

  return (
    <div className="product-title ">
      <h1>{title}</h1>
    </div>
  );
};

export default ProductTitle;
