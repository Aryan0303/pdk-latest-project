import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ShopProductCard.css';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { title, mainImage, minPrice, maxPrice } = product;

  // Format title for URL
  const formattedTitle = title.replace(/\s+/g, '-');

  const handleCardClick = () => {
    navigate(`/shop/${formattedTitle}`);
  };

  return (
    <Card className="product-card-shop" onClick={handleCardClick} style={{ cursor: 'pointer' }}>
      <Card.Img variant="top" src={mainImage} alt={title} />
      <Card.Body className="bodycard">
        <Card.Title className="product-title-display">{title}</Card.Title>
        <Card.Text className="product-price">{`$${minPrice}  –  $${maxPrice}`}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
