import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ProductCard from './OLDealsprocards';
import OurLatestdealsDATA from '../../Data/OurLatestdealsdata';
import './OurLatestDeals.css'; 

const OurLatestdealsrow = () => {
    return (
        <Container>
          <h2 className='textHeading text-center mb-4' style={{ color: '#031A6B', textAlign: 'center', marginBottom: '20px' }}>
          Our Latest <span style={{ color: '#FF9402'}}>Deals</span>
        </h2>
          <Row>
            {OurLatestdealsDATA.slice(0, 8).map((product) => (
              <div key={product.id} className="custom-col-oldeals mb-2">
                <ProductCard product={product} />
              </div>
            ))}
          </Row>
        </Container>
      );
}

export default OurLatestdealsrow