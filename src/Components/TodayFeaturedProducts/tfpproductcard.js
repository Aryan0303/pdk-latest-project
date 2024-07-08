import React from 'react';
import Card from 'react-bootstrap/Card';

const ProductCard = ({ product }) => {
  return (
    <Card  style={{ width: '10rem'}} className="tfp-product-card">
      <Card.Img variant="top" src={product.image} className="product-image" />
      <Card.Body>
        <Card.Text>{product.description}</Card.Text>
        <p style={{ color: '#FF9402' }}>{product.price}</p>
      </Card.Body>
    </Card> 
  );
};

export default ProductCard;
