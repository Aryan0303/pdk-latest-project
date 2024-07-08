// ProductPrice.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ProductPrice.css'

const ProductPrice = ({ productId }) => {
  const [price, setPrice] = useState('');

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:5001/shop/${productId}`);
        setPrice(response.data.price);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [productId]);

  return (
    <div className=" product-detail-page-product-price">
      < p>{price}</p>
    </div>
  );
};

export default ProductPrice;
