import React, { useState, useContext } from 'react';
import { Navbar, Nav, Container, Offcanvas, Accordion } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../../CartContext';
import footerlogo from '../../images/footerlogo.webp';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import CustomDropdown from './CustomDropdown';
import megaimg1 from '../../images/MegaMenu (1).webp';
import megaimg2 from '../../images/MegaMenu (2).webp';
import megaimg3 from '../../images/MegaMenu (3).webp';
import megaimg4 from '../../images/MegaMenu (4).webp';
import megaimg5 from '../../images/MegaMenu (5).webp';
import megaimg6 from '../../images/MegaMenu (6).webp';
import megaimg7 from '../../images/MegaMenu (7).webp';
import megaimg8 from '../../images/MegaMenu (8).webp';
import megaimg9 from '../../images/MegaMenu (9).webp';
import megaimg10 from '../../images/MegaMenu (10).webp';
import megaimg11 from '../../images/MegaMenu (11).webp';
import megaimg12 from '../../images/MegaMenu (12).webp';

const CustomNavbar = () => {
  const { cart, removeFromCart } = useContext(CartContext);
  const [show, setShow] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const navigate = useNavigate();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCartClose = () => setShowCart(false);
  const handleCartShow = () => setShowCart(true);

  const dropdownItemsDogs = {
    categories: ['Beds', 'Bowls & Feeders', 'Carriers and Travels', 'Collars', 'Leashes', 'Grooming', 'Harnesses', 'Cages', 'Houses', 'Toys'],
    products: [
      { image: megaimg6, name: 'Dog Rope Ball Pull Toy' },
      { image: megaimg2, name: 'Pet GPS Waterproof Electronic Collar' },
      { image: megaimg9, name: 'Dog Lightweight Rain Jacket Waterproof' },
      { image: megaimg3, name: 'Pet Cooling Bed For Pets' },
    ],
    image: megaimg5,
  };

  const dropdownItemsCats = {
    title: "Cats",
    categories: ['Beds', 'Bowls & Feeders', 'Carriers and Travels', 'Collars', 'Grooming', 'Toys', 'Cages', 'Scratchers & Climbers', 'Houses', 'ToLitter Boxys'],
    products: [
      { image: megaimg3, name: 'Cat Scratching Post' },
      { image: megaimg7, name: 'Cat Bed' },
      { image: megaimg8, name: 'Automatic Cat Feeder' },
      { image: megaimg1, name: 'Interactive Cat Toy' },
    ],
    image: megaimg4,
  };

  const dropdownItemsFish = {
    title: "Fish",
    categories: ['Aquariums', 'Filters', 'Food', 'Decorations'],
    products: [
      { image: megaimg3, name: 'Freshwater Aquarium' },
      { image: megaimg4, name: 'Aquarium Filter' },
      { image: megaimg5, name: 'Fish Food' },
      { image: megaimg6, name: 'Aquarium Decoration' },
    ],
    image: megaimg10,
  };

  const dropdownItemsSmallPets = {
    title: "SmallPets",
    categories: ['Cages', 'Bedding', 'Toys', 'Food'],
    products: [
      { image: megaimg7, name: 'Small Pet Cage' },
      { image: megaimg8, name: 'Pet Bedding' },
      { image: megaimg9, name: 'Small Pet Toy' },
      { image: megaimg1, name: 'Small Pet Food' },
    ],
    image: megaimg11,
  };

  const dropdownItemsReptiles = {
    title: "Reptiles",
    categories: ['Terrariums', 'Heating', 'Food', 'Decorations'],
    products: [
      { image: megaimg2, name: 'Glass Terrarium' },
      { image: megaimg3, name: 'Heating Lamp' },
      { image: megaimg4, name: 'Reptile Food' },
      { image: megaimg5, name: 'Terrarium Decoration' },
    ],
    image: megaimg12,
  };
    const handleViewCart = () => {
    navigate('/viewcart');
    handleCartClose();
  };

  return (
    <>
      <Navbar expand="lg" className="navbar-lg d-none nav-bgr d-lg-block">
        <Container>
          <Navbar.Brand as={Link} to="/" className='ml-5'>
            <img src={footerlogo} alt="Pet Daily Kit" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="mainNavbar" />
          <Navbar.Collapse id="mainNavbar">
            <Nav className="ml-auto mr-auto">
              <Nav.Link as={Link} to="/shop">Shop</Nav.Link>
              <CustomDropdown title="Dogs" items={dropdownItemsDogs} />
              <CustomDropdown title="Cats" items={dropdownItemsCats} />
              <CustomDropdown title="Fish" items={dropdownItemsFish} />
              <CustomDropdown title="Small Pets" items={dropdownItemsSmallPets} />
              <CustomDropdown title="Reptiles" items={dropdownItemsReptiles} />
            </Nav>
            <Nav>
              <Nav.Link href="#"><i className="fas fa-search fa-lg"></i></Nav.Link>
              <Nav.Link href="#"><i className="fas fa-user fa-lg"></i></Nav.Link>
              <Nav.Link href="#"><i className="fa-regular fa-heart fa-lg"></i></Nav.Link>
              <Nav.Link href="#" className="position-relative" onClick={handleCartShow}>
                <i className="fas fa-shopping-cart fa-lg"></i>
                <span className="badge badge-pill badge-deskptop">{cart.length}</span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Navbar expand={false} className="navbar-sm nav-bgr d-lg-none">
        <Container fluid className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={handleShow} />
            <Navbar.Brand as={Link} to="/" className="ml-2">
              <img src={footerlogo} alt="Pet Daily Kit" />
            </Navbar.Brand>
          </div>
          <Nav className="ml-auto d-flex flex-row align-items-center">
            <Nav.Link href="#"><i className="fas fa-search fa-lg"></i></Nav.Link>
            <Nav.Link href="#"><i className="fas fa-user fa-lg"></i></Nav.Link>
            <Nav.Link href="#" onClick={handleCartShow}>
              <i className="fas fa-shopping-cart fa-lg"></i>
              <span className="badge badge-pill badge-mob ">{cart.length}</span>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Offcanvas show={show} onHide={handleClose} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title id="offcanvasNavbarLabel">
            <img src={footerlogo} alt="Pet Daily Kit" className="sidebar-logo" />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='off-canvas-body-side-bar'>
          <Nav className="flex-column">
            <Nav.Link as={Link} to="/" className='sidebar-start border-bottom'>Home</Nav.Link>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Shop</Accordion.Header>
                <Accordion.Body className='off-canvas-body-side-bar'>
                  <Nav.Link href="#" className="border-bottom">Dogs 1</Nav.Link>
                  <Nav.Link href="#" className="border-bottom">Dogs 2</Nav.Link>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Nav.Link href="#" className='sidebar-start border-bottom'>Pet Toys</Nav.Link>
            <Nav.Link href="#" className='sidebar-start border-bottom'>Pet Bath Accessories</Nav.Link>
            <Nav.Link href="#" className='sidebar-start border-bottom'>Pet Carrying Bags</Nav.Link>
            <Nav.Link href="#" className='sidebar-start border-bottom'>About Us</Nav.Link>
            <Nav.Link href="#" className='sidebar-start border-bottom'>Contact Us</Nav.Link>
            <Nav.Link href="#" className='sidebar-start border-bottom'>Blog</Nav.Link>
            <Nav.Link href="#" className='sidebar-start border-bottom'>FAQs</Nav.Link>
          </Nav>
          <div className="footer-social-icons d-flex justify-content-around pt-3">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-pinterest"></i></a>
          </div>
        </Offcanvas.Body>
      </Offcanvas>

      <Offcanvas show={showCart} onHide={handleCartClose} id="offcanvasCart" aria-labelledby="offcanvasCartLabel" placement="end">
  <Offcanvas.Header closeButton>
    <Offcanvas.Title id="offcanvasCartLabel">Cart</Offcanvas.Title>
  </Offcanvas.Header>
  <Offcanvas.Body>
    {cart.length === 0 ? (
      <p>Your cart is empty</p>
    ) : (
      cart.filter(item => item.selected).map((item) => (
        <div key={`${item.id}-${item.size}-${item.color}`} className="cart-item d-flex justify-content-between align-items-center">
          <img src={item.image} alt={item.name} className="cart-item-image" />
          <div className="cart-item-details">
            <p className="cart-item-name">{item.title} - {item.color}, {item.size}</p>
            <p className="cart-item-quantity">{item.quantity}x ${parseFloat(item.price).toFixed(2)}</p>
          </div>
          <button className="remove-item-button" onClick={() => removeFromCart(item)}>
            <i className="fa fa-times-circle fa-xl" style={{ color: 'red' }}></i>
          </button>
        </div>
      ))
    )}
    <div className="cart-subtotal d-flex justify-content-between align-items-center my-3 py-3">
      <p>Subtotal:</p>
      <p>${cart.reduce((total, item) => total + item.quantity * parseFloat(item.price), 0).toFixed(2)}</p>
    </div>
    <div className="cart-actions d-flex justify-content-between">
      <button className="view-cart-btncart col-6 mr-1" onClick={handleViewCart}>View cart</button>
      <button className="checkout-btn-cart col-6 ml-1">Checkout</button>
    </div>
  </Offcanvas.Body>
</Offcanvas>





















    </>
  );
};

export default CustomNavbar;



















































{/* <Offcanvas show={showCart} onHide={handleCartClose} id="offcanvasCart" aria-labelledby="offcanvasCartLabel" placement="end">
<Offcanvas.Header closeButton>
  <Offcanvas.Title id="offcanvasCartLabel">Cart</Offcanvas.Title>
</Offcanvas.Header>
<Offcanvas.Body>
  {cart.length === 0 ? (
    <p>Your cart is empty</p>
  ) : (
    cart.map((item) => (
      <div key={item.itemNum} className="cart-item d-flex justify-content-between align-items-center">
        <img src={item.image} alt={item.name} className="cart-item-image" />
        <div className="cart-item-details">
          <p className="cart-item-name">{item.title} - {item.color}, {item.size}</p>
          <p className="cart-item-quantity">{item.quantity}x ${parseFloat(item.price).toFixed(2)}</p>
        </div>
        <button className="remove-item-button" onClick={() => removeFromCart(item.itemNum)}>
          <i className="fas fa-minus-circle" style={{ color: 'red' }}></i>
        </button>
      </div>
    ))
  )}
  <div className="cart-subtotal d-flex justify-content-between align-items-center">
    <p>Subtotal:</p>
    <p>${cart.reduce((total, item) => total + item.quantity * parseFloat(item.price), 0).toFixed(2)}</p>
  </div>
  <div className="cart-actions d-flex justify-content-between">
    <button className="btn btn-primary" onClick={handleCartClose}>View cart</button>
    <button className="btn btn-warning">Checkout</button>
  </div>
</Offcanvas.Body>
</Offcanvas> */}