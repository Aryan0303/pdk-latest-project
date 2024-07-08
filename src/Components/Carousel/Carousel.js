import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import slide1 from '../../images/Banner1.webp'; 
import slide2 from '../../images/Banner2.webp';
import slide3 from '../../images/Banner3.webp';
import slide4 from '../../images/Banner4.png';
import './Carousel.css';  

const CustomCarousel = () => {
  return (
    <>
      <Carousel fade data-bs-theme="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide1}
            alt="First slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide2}
            alt="Second slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide3}
            alt="Third slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide4}
            alt="Fourth slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Container className="text-center mt-5">
        <Row>
          <Col>
            <h2 className="textHeading">Our Top Quality Pet Supplies</h2>
            <p className="text-secondary mt-1 mb-5">
              At <strong className='textbold'>Pet Daily Kit</strong>, the well-being of pets is our top priority. 
              We make sure that all products must meet top quality and safety standards. 
              Every product is carefully selected and tested to ensure that it provides the 
              best experience for pets and peace of mind for pet owners. 
              Pet Daily Kit is committed to delivering top-quality pet supplies in every aspect of their offerings.
            </p>
            <h2 className="textHeading">Top Products</h2>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CustomCarousel;
