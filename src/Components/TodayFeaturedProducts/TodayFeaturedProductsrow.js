import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ProductCard from './tfpproductcard';
import TodayFeaturedProductsData from '../../Data/TodayFeaturedProductsdata';
import './TodayFeaturedProducts.css'; 
 
const TodayFeaturedProducts = () => {
  return (
    <Container>
      <Row>
        
        {TodayFeaturedProductsData.slice(0, 8).map((product) => (
          <div key={product.id} className="custom-col-tfp">
            <ProductCard product={product} />
          </div>
        ))}
      </Row>
    </Container>
  );
};

export default TodayFeaturedProducts;
