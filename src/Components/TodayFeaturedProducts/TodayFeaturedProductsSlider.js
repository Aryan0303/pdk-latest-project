import React from 'react'; 
import { Container } from 'react-bootstrap'; // Import Container from react-bootstrap
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ProductCard from './tfpproductcard';
import TodayFeaturedProductsData from '../../Data/TodayFeaturedProductsdata';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 7
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 7
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2
  }
};

const ProductSlider = () => {
  return (
    <Container style={{ backgroundColor: '#FF9402', padding: '20px' }}>
    <h2 className='textHeading text-center mb-4' style={{ color: '#031A6B' }}>
      Today’s Featured Products
    </h2>
      <Carousel
        responsive={responsive}
        // autoPlay
        // autoPlaySpeed={3000} 
        // infinite
        // showDots={false}
        arrows
      >
        {TodayFeaturedProductsData.map((product) => (
          <div key={product.id} className="custom-col-tfp">
            <ProductCard product={product} />
          </div>
        ))}
      </Carousel>
    </Container>
  );
};

export default ProductSlider;
