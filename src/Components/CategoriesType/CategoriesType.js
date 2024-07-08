import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import catimg1 from '../../images/Category-img(1).webp';
import catimg2 from '../../images/Category-img(2).webp';
import catimg3 from '../../images/Category-img(3).webp';
import catimg4 from '../../images/Category-img(4).webp';
import catimg5 from '../../images/Category-img(5).webp';
import catimg6 from '../../images/Category-img(6).webp';

const CategoriesType = () => {
    // Array of image paths
    const imagePaths = [
        catimg1,
        catimg2,
        catimg3,
        catimg4,
        catimg5,
        catimg6
    ];

    return (
        <Container>
            <h2 className="textHeading text-center mt-5">
                Categories by <span style={{ color: '#FF9402' }}>Pets</span> Type
            </h2>
            <Row className='my-5'>
                {/* Map over the imagePaths array to generate image elements */}
                {imagePaths.map((imagePath, index) => (
                    <Col key={index} md={2} sm={4} xs={6}>
                        <a href="#">
                            <div className="category-item">
                                <img src={imagePath} alt={`Image ${index + 1}`} style={{ maxWidth: '100%' }} />
                            </div>
                        </a>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default CategoriesType;
