import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ProductCard from './tdcproductcard';
import TopdogCategoriesdata from '../../Data/TopDogCategoriesdata';
import './tdcategories.css'; 
 
const TopdogsCategories = () => {
  return (
    <Container className='mt-5'>
      <h2 className='textHeading text-center mb-4' style={{ color: '#031A6B' }}>
      Top <span style={{ color: '#FF9402'}}>Dogs</span>Categories
    </h2>
      <Row>
        {TopdogCategoriesdata.slice(0, 6).map((product) => (
          <div key={product.id} className="col-6 col-md-4 col-lg-2 mb-2">
          <ProductCard product={product} />
      </div>
      
        ))}
      </Row>
    </Container>
  );
};

export default TopdogsCategories;
