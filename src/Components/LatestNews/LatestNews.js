import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './LatestNews.css';
import img1 from '../../images/latestnewimsg (1).webp';
import img2 from '../../images/latestnewimsg (2).webp';
import img3 from '../../images/latestnewimsg (3).webp';
import img4 from '../../images/latestnewimsg (4).webp';
import img5 from '../../images/latestnewimsg (5).webp';

const LatestNews = () => {
  return (
    <Container className="my-5">
      <Row className="justify-content-between align-items-center mb-4">
        <h2 className="text-center flex-grow-1">Latest News<span><a href="/discover-more" className="text-decoration-none text-danger">Discover More →</a></span></h2>
      </Row>
      <Row>
        <Col className='mb-3' md={6}>
          <img src={img2} alt="Main news" className="img-fluid main-ln mb-3" />
          <h5 className='ln-text-bold'>How to Safely Expose Your Indoor Cat to the Great Outdoors</h5>
          <p>It might be tempting to let your indoor cat outside to chase the butterflies, but the outdoors come with...</p>
          <Button className='btn-ln'>Read More</Button>
        </Col>
        <Col md={6} className="d-none d-md-block">
          <Row>
            <Col xs={6}>
              <div className="hover-container mb-3">
                <img src={img3} alt="News 2" className="img-fluid news-image" />
                <div className="overlay">
                  <div className="text-overlay">
                    <h5>Anxiety Busters: Essential Approaches for Relaxing Your Pet</h5>
                    <p>As pet owners, one of our obligations is to safeguard...</p>
                    <Button className='btn-ln'>Read More</Button>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={6}>
              <div className="hover-container">
                <img src={img4} alt="News 3" className="img-fluid news-image" />
                <div className="overlay">
                  <div className="text-overlay">
                    <h5>Dog Grooming Tips to Keep Your Best Friend Healthy and Happy</h5>
                    <p>Whether your dog is an obsessive groomer or wants to...</p>
                    <Button className='btn-ln'>Read More</Button>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              <div className="hover-container">
                <img src={img5} alt="News 4" className="img-fluid news-image" />
                <div className="overlay">
                  <div className="text-overlay">
                    <h5>Understanding the 7 Common Causes of Pet Anxiety</h5>
                    <p>Pets, our beloved companions, can sometimes exhibit...</p>
                    <Button className='btn-ln'>Read More</Button>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={6}>
              <div className="hover-container">
                <img src={img1} alt="News 5" className="img-fluid news-image" />
                <div className="overlay">
                  <div className="text-overlay">
                    <h5>Traveling With A Cat In A Car</h5>
                    <p>It’s summer, so you know what that means? Vacation...</p>
                    <Button className='btn-ln'>Read More</Button>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default LatestNews;
