import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './CardShuffle.css';
import img1 from '../../images/Cardshuffle (1).png';
import img2 from '../../images/Cardshuffle (2).png';
import img3 from '../../images/Cardshuffle (3).png';

const CardShuffle = () => {
    const cards = [
        { id: 1, img: img1, text: 'Best Paw-fect Toys', description: 'Playtime with the best for your pets!' },
        { id: 2, img: img2, text: 'Best Paw-fect Toys', description: 'Playtime with the best for your pets!' },
        { id: 3, img: img3, text: 'Pet Bath Accessories', description: 'Best Bath Accessories For Your Pets' }
    ];

    const [visibleCards, setVisibleCards] = useState(3); // Default to show all 3 cards

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setVisibleCards(1); // Mobile view
            } else if (window.innerWidth >= 768 && window.innerWidth < 992) {
                setVisibleCards(2); // Tablet view
            } else {
                setVisibleCards(3); // Desktop view
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Initial check

        const interval = setInterval(shuffleItems, 4000);
        return () => {
            clearInterval(interval);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const shuffleItems = () => {
        const cardElements = document.querySelectorAll('.card-content');
        cards.push(cards.shift()); // Rotate the array

        cardElements.forEach((card, index) => {
            card.classList.add('fade-out');
            setTimeout(() => {
                card.querySelector('img').src = cards[index].img;
                card.querySelector('.card-title').textContent = cards[index].text;
                card.querySelector('.card-description').textContent = cards[index].description;
                card.classList.remove('fade-out');
                card.classList.add('fade-in');
            }, 1000);
        });

        setTimeout(() => {
            cardElements.forEach(card => {
                card.classList.remove('fade-in');
            });
        }, 2000);
    };

    return (
        <Container className="cu-container">
            <Row className="mt-4">
                {cards.slice(0, visibleCards).map(card => (
                    <Col key={card.id} xs={12} md={6} lg={4}>
                        <Card className="card-custom">
                            <div className="card-content">
                                <div className="card-body">
                                    <p className="card-title">{card.text}</p>
                                    <p className="card-description">{card.description}</p>
                                    <Button className="custom-button">Shop Now</Button>
                                </div>
                                <img src={card.img} alt={card.text} className="card-img" />
                            </div>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default CardShuffle;
