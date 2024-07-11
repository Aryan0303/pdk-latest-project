import React, { useContext } from 'react';
import { Container, Table, Button, Form, Row, Col } from 'react-bootstrap';
import { CartContext } from '../../CartContext';
import './Checkout.css';
import visaLogo from '../../images/credit-card(1).svg';
import mastercardLogo from '../../images/credit-card(2).svg';
import amexLogo from '../../images/credit-card(3).svg';
import discoverLogo from '../../images/credit-card(4).svg';
import Dinersclub from '../../images/credit-card(5).svg';
import jcbLogo from '../../images/credit-card(6).svg';

const Checkout = ({ calculateTotal }) => {
  const { cart } = useContext(CartContext);

  return (
    <Container className="checkout-container mt-5">
      <Row>
        <Col md={6}>
          <Form>
            <h4>Billing details</h4>
            <Row>
              <Col md={6}>
                <Form.Group controlId="formFirstName">
                  <Form.Label>First name *</Form.Label>
                  <Form.Control type="text" placeholder="First name" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formLastName">
                  <Form.Label>Last name *</Form.Label>
                  <Form.Control type="text" placeholder="Last name" />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group controlId="formCompanyName">
              <Form.Label>Company name (optional)</Form.Label>
              <Form.Control type="text" placeholder="Company name" />
            </Form.Group>
            <Form.Group controlId="formCountry">
              <Form.Label>Country / Region *</Form.Label>
              <Form.Control as="select">
                <option>United States (US)</option>
                {/* Add other countries as needed */}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formAddress1">
              <Form.Label>Street address *</Form.Label>
              <Form.Control type="text" placeholder="House number and street name" />
            </Form.Group>
            <Form.Group controlId="formAddress2">
              <Form.Label>Apartment, suite, unit, etc. (optional)</Form.Label>
              <Form.Control type="text" placeholder="Apartment, suite, unit, etc. (optional)" />
            </Form.Group>
            <Row>
              <Col md={6}>
                <Form.Group controlId="formCity">
                  <Form.Label>Town / City *</Form.Label>
                  <Form.Control type="text" placeholder="Town / City" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formState">
                  <Form.Label>State *</Form.Label>
                  <Form.Control as="select">
                    <option>Select an option...</option>
                    {/* Add states as needed */}
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>
            <Form.Group controlId="formZip">
              <Form.Label>ZIP Code *</Form.Label>
              <Form.Control type="text" placeholder="ZIP Code" />
            </Form.Group>
            <Form.Group controlId="formPhone">
              <Form.Label>Phone *</Form.Label>
              <Form.Control type="text" placeholder="Phone" />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email address *</Form.Label>
              <Form.Control type="email" placeholder="Email address" />
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Label>Create account password *</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formShipDifferent">
              <Form.Check type="checkbox" label="Ship to a different address?" />
            </Form.Group>
            <Form.Group controlId="formOrderNotes">
              <Form.Label>Order notes (optional)</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Notes about your order, e.g. special notes for delivery." />
            </Form.Group>
          </Form>
        </Col>
        <Col md={5} className='your-order'>
          <h4>Your Order</h4>
          <Table bordered className="order-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={index}>
                  <td>{`${item.title} - ${item.color}, ${item.size} x ${item.quantity}`}</td>
                  <td>${(item.price * item.quantity).toFixed(2)}</td>
                </tr>
              ))}
              <tr>
                <td>Subtotal</td>
                <td>${calculateTotal()}</td>
              </tr>
              <tr>
                <td>Hot Summer Discount <span className="remove-discount">[Remove]</span></td>
                <td>-${(calculateTotal() * 0.3).toFixed(2)}</td>
              </tr>
              <tr>
                <td>Tax</td>
                <td>$0.00</td>
              </tr>
              <tr>
                <td>Total</td>
                <td>${(calculateTotal() * 0.7).toFixed(2)}</td>
              </tr>
            </tbody>
          </Table>

          <h5>Credit Card</h5>
          <div className="credit-card-logos">
            <img src={visaLogo} alt="Visa" />
            <img src={mastercardLogo} alt="MasterCard" />
            <img src={amexLogo} alt="Amex" />
            <img src={discoverLogo} alt="Discover" />
            <img src={Dinersclub} alt="Dinersclub" />
            <img src={jcbLogo} alt="JCB" />
          </div>
          <Form.Group controlId="formCardPayment">
            {/* Add your payment input fields here */}
            <Form.Control type="text" placeholder="Card number" className="mt-2" />
            <Form.Control type="text" placeholder="Card holder name" className="mt-2" />
            <Form.Control type="text" placeholder="Expiry date" className="mt-2" />
            <Form.Control type="text" placeholder="CVV" className="mt-2" />
          </Form.Group>
          <Form.Group controlId="formTerms">
            <Form.Check type="checkbox" label="I have read and agree to the website terms and conditions *" />
          </Form.Group>
          <Button className="btn btn-primary btn-block mt-4">Continue to Payment</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Checkout;
