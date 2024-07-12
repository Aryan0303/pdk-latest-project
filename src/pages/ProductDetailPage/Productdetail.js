import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import Breadcrumbs from '../../Components/Breadcrumbs/Breadcrumbs';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button, Form, Tabs, Tab } from 'react-bootstrap';
import MainImage from './Components/MainImage/MainImage';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { CartContext } from '../../CartContext';
import './ProductDetail.css';

const ProductDetail = () => {
  const { title } = useParams();
  const navigate = useNavigate();
  const { onAddToCart } = useContext(CartContext);
  const [productDetails, setProductDetails] = useState({
    sizes: [],
    selectedSize: null,
    titleSecondary: '',
    price: '',
    sku: '',
    subcategory: '',
    galleryImages: [],
    shortDescription: '',
    longDescription: ''
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [mainImage, setMainImage] = useState('');
  const [selectedVariation, setSelectedVariation] = useState({
    price: '',
    stock: '',
    color: ''
  });
  const [quantity, setQuantity] = useState(1);
  const [quantityError, setQuantityError] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const formattedTitle = title.replace(/-/g, ' ');
        const response = await axios.get(`http://localhost:5001/api/shop/title/${encodeURIComponent(formattedTitle)}`);
        console.log('API response:', response.data);
        const {
          sizes,
          mainImage,
          galleryImages,
          title: titleSecondary,
          price_min,
          price_max,
          SKU,
          subcategory_name,
          short_description,
          long_description
        } = response.data;

        setProductDetails({
          sizes: sizes || [],
          selectedSize: sizes && sizes.length > 0 ? sizes[0] : null,
          titleSecondary,
          price: `${price_min} – ${price_max}`,
          sku: SKU,
          subcategory: subcategory_name,
          galleryImages,
          shortDescription: short_description || '',
          longDescription: long_description || ''
        });

        if (sizes && sizes.length > 0 && sizes[0].colors.length > 0) {
          setSelectedVariation({
            price: sizes[0].colors[0].price,
            stock: sizes[0].colors[0].stock,
            color: sizes[0].colors[0].color
          });
        }

        setMainImage(mainImage || '');
        setLoading(false);
      } catch (error) {
        console.error('Error fetching product details:', error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchDetails();
  }, [title]);

  const handleImageClick = (image) => {
    setMainImage(image);
  };

  const handleColorClick = (color) => {
    setMainImage(color.image_url);
    const selectedColor = productDetails.sizes
      .find(size => size.size === productDetails.selectedSize.size)
      .colors.find(c => c.color === color.color);

    setSelectedVariation({
      price: selectedColor.price,
      stock: selectedColor.stock,
      color: selectedColor.color
    });
  };

  const handleSizeClick = (size) => {
    const defaultColor = size.colors[0];
    setProductDetails((prevDetails) => ({
      ...prevDetails,
      selectedSize: size
    }));
    setMainImage(defaultColor.image_url);
    setSelectedVariation({
      price: defaultColor.price,
      stock: defaultColor.stock,
      color: defaultColor.color
    });
  };

  const handleQuantityChange = (event) => {
    const value = Math.max(1, Number(event.target.value));
    setQuantity(value);
    if (value > selectedVariation.stock) {
      setQuantityError(`You can't go above the quantity that is present: ${selectedVariation.stock}`);
    } else {
      setQuantityError('');
    }
  };

  const handleAddToCart = () => {
    if (quantity > selectedVariation.stock) {
      setQuantityError(`You can't go above the quantity that is present: ${selectedVariation.stock}`);
    } else {
      setQuantityError('');
      const selectedProduct = {
        id: title,
        image: mainImage,
        titleSecondary: productDetails.titleSecondary,
        price: selectedVariation.price,
        size: productDetails.selectedSize.size,
        color: selectedVariation.color,
        quantity,
        stock: selectedVariation.stock
      };
      onAddToCart(selectedProduct);
      console.log('Selected product:', selectedProduct);

      setSuccessMessage(`"${productDetails.titleSecondary}" has been added to your cart.`);
      setShowSuccessMessage(true);
    }
  };

  const handleViewCart = () => {
    navigate('/viewcart');
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching product details: {error}</p>;
  }

  const { price, galleryImages, sizes, selectedSize, sku, subcategory, shortDescription, longDescription } = productDetails;

  const prices = productDetails.sizes.flatMap(size => size.colors.map(color => color.price));
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 4
    }
  };

  const stock = selectedVariation.stock;
  const stockClass = stock > 0 ? 'text-success' : 'text-danger';
  const stockText = stock > 0 ? `${stock} in stock` : 'Out of Stock!!';

  return (
    <>
      <Breadcrumbs title={productDetails.titleSecondary} />
      {showSuccessMessage && (
        <div className="success-message viewcart-msg d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <i className="fa fa-check-circle" style={{ color: '#031A6B' }}></i>
            <span className="ml-2">{successMessage}</span>
          </div>
          <Button variant="viewcart-button" onClick={handleViewCart}>VIEW CART</Button>
        </div>
      )}
      <Container className="product-detail mt-4">
        <Row>
          <Col xs={12} md={4}>
            <MainImage imageUrl={mainImage} />
            {galleryImages && galleryImages.length > 0 && (
              <Carousel responsive={responsive} className="gallery-carousel">
                {galleryImages.map((image, index) => (
                  <div
                    key={index}
                    onClick={() => handleImageClick(image)}
                    className="gallery-thumbnail"
                  >
                    <img
                      src={image}
                      alt={`Gallery ${index + 1}`}
                      className="gallery-image"
                    />
                  </div>
                ))}
              </Carousel>
            )}
          </Col>
          <Col xs={12} md={8}>
            <div className="product-details p-3">
              <h2 className="title-pd">{title}</h2>
              <p>{`$${minPrice} – $${maxPrice}`}</p>
              <p className="product-price-pd">{price}</p>
              <div className="product-options">
                <div className="option-group">
                  <p className="label-">Color:</p>
                  <span className="selected-option ml-2">{selectedVariation.color}</span>
                  <div className="option-buttons">
                    {selectedSize && selectedSize.colors.map((color, index) => (
                      <Button
                        key={index}
                        className={`color-button ${mainImage === color.image_url ? 'selected-color-button' : ''}`}
                        onClick={() => handleColorClick(color)}
                      >
                        {color.color}
                      </Button>
                    ))}
                  </div>
                </div>
                <div className="option-group">
                  <p className="label-">Size:</p>
                  <span className="selected-option ml-2">{selectedSize ? selectedSize.size : 'Select a size'}</span>
                  <div className="option-buttons">
                    {sizes.map((size, index) => (
                      <Button
                        key={index}
                        className={`color-button ${selectedSize && selectedSize.size === size.size ? 'selected-color-button' : ''}`}
                        onClick={() => handleSizeClick(size)}
                      >
                        {size.size}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="selected-variation-details p-3">
              <p className="product-price-pd-in">
                ${selectedVariation.price}
              </p>
              <p className={`product-stock-pd ${stockClass}`}>
                Availability: {stockText}
              </p>
              <div className="d-flex align-items-center mb-3">
                <Form.Group controlId="formQuantity" className="mb-0 mr-3">
                  <Form.Control
                    type="number"
                    value={quantity}
                    onChange={handleQuantityChange}
                    min={1}
                    className="quantity-input"
                  />
                </Form.Group>
                <Button
                  variant="primary"
                  className="add-to-cart-button"
                  onClick={handleAddToCart}
                  disabled={stock === 0}
                >
                  Add to Cart
                </Button>
              </div>
              {quantityError && <p className="text-danger">{quantityError}</p>}
            </div>
            <div className="sku-subcategory p-3 d-flex justify-content-between align-items-center">
              <p className="mb-0 mr-3"><strong>SKU:</strong> {sku}</p>
              <p className="mb-0 mr-auto"><strong>Subcategory:</strong> {subcategory}</p>
            </div>
            <div className="short-description">
                <p><strong>Short Description:</strong></p>
                <ul>
                  {shortDescription.split('\n').map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
          </Col>
        </Row>
        <Row>
          <Col>
          <Tabs defaultActiveKey="description" id="uncontrolled-tab-example" className="mt-3 product-tabs" variant="pills">
        <Tab eventKey="description" title="Description">
          <p>{longDescription}</p>
        </Tab>
        <Tab eventKey="additional-info" title="Additional Information">
          <p>Additional information about the product goes here.</p>
        </Tab>
        <Tab eventKey="reviews" title="Reviews">
          <p>Customer reviews will be displayed here.</p>
        </Tab>
      </Tabs>
          </Col>
        </Row>
      </Container>
    </>
  );
};


export default ProductDetail;
