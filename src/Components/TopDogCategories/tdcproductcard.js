import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
// import '../OurLatestDeals/OurLatestDeals.css';

const ProductCard = ({ product }) => {
  return (
    <Card className="tdc-product-card">
      <Card.Img variant="top" src={product.image} className="product-image-tdc" />
        <Row className="justify-content-center align-items-center text-center">
          <div className='card-body-top-categories my-2'>      
              <Card.Text className="product-description m-0x  ">{product.description}</Card.Text>
          </div>
        </Row>
    </Card>
  );
};

export default ProductCard;
