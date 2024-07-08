import React from 'react'; 
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ProductCard from './ProductCard';
import TopProductsData from '../../Data/Topproductdata';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 8
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 8
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const ProductSlider = () => {
  return (
    <Carousel
      responsive={responsive}
      autoPlay
      autoPlaySpeed={3000} 
      infinite
      showDots={false}
      arrows={false} 
    >
      {TopProductsData.map((product) => (
        <div key={product.id} className="custom-col">
          <ProductCard product={product} />
        </div>
      ))}
    </Carousel>
  );
};
 
export default ProductSlider;
