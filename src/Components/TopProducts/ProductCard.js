import React from 'react';
import Card from 'react-bootstrap/Card';
import './TopProducts.css'

const ProductCard = ({ product }) => {
  return (
    <Card  style={{ width: '10rem'}} className="product-card">
      <Card.Img variant="top" src={product.image} className="product-image-topproducts" />
      <Card.Body>
        <Card.Text>{product.description}</Card.Text>
        <p style={{ color: '#FF9402' }}>{product.price}</p>
      </Card.Body>
    </Card> 
  ); 
};

export default ProductCard;
