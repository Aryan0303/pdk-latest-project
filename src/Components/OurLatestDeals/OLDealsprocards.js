import React from 'react';
import Card from 'react-bootstrap/Card';
import './OurLatestDeals.css'; 

const ProductCard = ({ product }) => {
  return (
    <Card   className="old-product-card">
      <Card.Img variant="top" src={product.image} className="product-image" />
      <Card.Body className='old-card-body'>
        <Card.Text>{product.description}</Card.Text>
        <p style={{ color: '#FF9402' }}>{product.price}</p>
      </Card.Body>
    </Card> 
  );
};

export default ProductCard;
