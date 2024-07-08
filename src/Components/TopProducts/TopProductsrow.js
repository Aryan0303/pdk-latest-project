import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ProductCard from './ProductCard';
import TopProductsData from '../../Data/Topproductdata';
import './TopProducts.css'; 
 
const TopProducts = () => {
  return (
    <Container>
      <Row>
        {TopProductsData.slice(0, 8).map((product) => (
          <div key={product.id} className="custom-col">
            <ProductCard product={product} />
          </div>
        ))}
      </Row>
    </Container>
  );
};

export default TopProducts;
