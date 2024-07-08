import React, { useState } from 'react';
import {
  MDBContainer,
//   MDBNavbarNav,
//   MDBNavbarItem,
  MDBNavbarLink,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBCol,
  MDBRow,
//   MDBRipple,
  MDBIcon,
} from 'mdb-react-ui-kit';
import './CustomDropdown.css';

const CustomDropdown = ({ title, items }) => {
    const [show, setShow] = useState(false);
  
    const handleToggle = () => {
      setShow(!show);
    };
  
    return (
      <MDBDropdown className="custom-dropdown" isOpen={show} toggle={handleToggle}>
        <MDBDropdownToggle tag="a" className="custom-dropdown-toggle nav-link">
          {title} <MDBIcon fas icon="chevron-down" />
        </MDBDropdownToggle>
        <MDBDropdownMenu className="custom-dropdown-menu">
          <MDBContainer className="dropdown-content">
            <MDBRow>
              <MDBCol className="dropdown-categories">
                <MDBNavbarLink href="#" className="dropdown-category-link-title">
                  {title} {/* Display title */}
                </MDBNavbarLink>
                {items.categories.map((category, index) => (
                  <MDBNavbarLink href="#" key={index} className="dropdown-category-link-cate">
                    {category}
                  </MDBNavbarLink>
                ))}
              </MDBCol>
              <MDBCol className="dropdown-products">
                {items.products.map((product, index) => (
                  <div className="dropdown-product-item" key={index}>
                    <img src={product.image} alt={product.name} />
                    <div>
                      <p>{product.name}</p>
                      <div className="star-rating">
                        {Array(5)
                          .fill(0)
                          .map((_, i) => (
                            <MDBIcon fas icon="star" key={i} className="fa-star" />
                          ))}
                      </div>
                    </div>
                  </div>
                ))}
              </MDBCol>
              <MDBCol className="dropdown-image">
                <img src={items.image} alt="Category" />
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBDropdownMenu>
      </MDBDropdown>
    );
  };
  export default CustomDropdown;
