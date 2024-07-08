import React from 'react';
import './Footer.css'

import footerImg1 from '../../images/footerimg1.png'
import footerImg2 from '../../images/footerimg2.png'
import footerlogo from '../../images/footerlogo.webp'



const Footer = () => {
  return (
    <>
      {/* Responsive footer for desktop screen */}
      <footer className="footer-lg">
        <div className="mt-5">
          <div className="container">
            <div className="row row1">
              {/* First Image Column */}
              <div className="col-md-4 text-start">
                <img src={footerImg1} className=" footer-img" alt="Image 1" />
              </div>
              {/* Subscribe Form Column */}
              <div className="col-md-4 d-flex flex-column align-items-center justify-content-center">
                <div className="subscribe-text mb-2">Subscribe To Our Newsletter</div>
                <form className="form-inline footer-email-input justify-content-center mb-5">
                  <div className="form-group mb-2">
                    <label htmlFor="email" className="sr-only">Email</label>
                    <input type="email" className="form-control emailTtext" id="email" placeholder="Email" />
                  </div>
                  
                  <button type="submit" className="btn-foot p-2 mb-2 ml-2">SUBSCRIBE</button>
                </form>
              </div>
              {/* Second Image Column */}
              <div className="col-md-4 text-right">
                <img src={footerImg2} className=" footer-img" alt="Image 2" />
              </div>
            </div>
          </div>
          <div className="backgroundoffooter">
            <div className="container">
              <div className="row row-footer pt-5">
                <div className="col-md-2">
                  <div className="spacecol pl-3">
                    <h5 className="font-weight-bold li">Info</h5>
                    <ul className="list-unstyled mt-3">
                      <li><a href="#" className="textli">Home</a></li>
                      <li><a href="#" className="textli">About Us</a></li>
                      <li><a href="#" className="textli">Contact Us</a></li>
                      <li><a href="#" className="textli">Blogs</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-2">
                  <h5 className="font-weight-bold li">Categories</h5>
                  <ul className="list-unstyled mt-3">
                    <li><a href="#" className="textli">Dogs</a></li>
                    <li><a href="#" className="textli">Cats</a></li>
                    <li><a href="#" className="textli">Fish</a></li>
                    <li><a href="#" className="textli">Small Pets</a></li>
                    <li><a href="#" className="textli">Reptiles</a></li>
                  </ul>
                </div>
                <div className="col-md-4 text-center">
                  <img src={footerlogo} alt="PetDailyKit Image" className="img-fluid" />
                  <p className="mt-3 ftext">PetDailyKit truly comprehends that your adorable furry companions deserve nothing but the very best, which is why we’ve carefully handpicked an extensive collection of products to fulfill all their needs.</p>
                </div>
                <div className="col-md-2">
                  <h5 className="font-weight-bold li">Policies</h5>
                  <ul className="list-unstyled mt-3">
                    <li><a href="#" className="textli">Terms & Conditions</a></li>
                    <li><a href="#" className="textli">Privacy Policy</a></li>
                    <li><a href="#" className="textli">Return and Refund Policy</a></li>
                    <li><a href="#" className="textli">Shipping Policy</a></li>
                  </ul>
                </div>
                <div className="col-md-2">
                  <h5 className="font-weight-bold li">Contact Us</h5>
                  <ul className="list-unstyled mt-3">
                    <li>
                      <a href="mailto:contact@petdailykit.com" className="textli">contact@petdailykit.com</a>
                    </li>
                    <li>
                      <address className="textli">
                        5100 Dexham Road Ste A,<br />
                        Rowlett, Texas, 75088
                      </address>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Social media icons */}
              <div className="row justify-content-center">
                <ul className="text-center">
                  <li className="list-inline-item"><a href="#" className="textli"><i className="fa-brands fa-facebook fa-2x" /></a></li>
                  <li className="list-inline-item"><a href="#" className="textli"><i className="fab fa-instagram fa-2x" /></a></li>
                  <li className="list-inline-item"><a href="#" className="textli"><i className="fab fa-pinterest fa-2x" /></a></li>
                  <li className="list-inline-item"><a href="#" className="textli"><i className="fab fa-youtube fa-2x" /></a></li>
                </ul>
              </div>
              {/* Copyright text */}
              <div className="row justify-content-center">
                <span className="text-center">Copyright © 2024 PetDailyKit | Powered by PetDailyKit</span>
              </div>
           
              </div>
          </div>
        </div>
      </footer>
      
      {/* Responsive footer for mobile screen */}
      <footer className="footer-sm">
        <div className="mt-5 background-footer">
          <div className="container">
            <div className="row row1">
              
              <div className="col-md-12 mt-4   text-center">
                  <img src={footerlogo} alt="PetDailyKit Image" className="img-fluid f-img" />
                  <p className="mt-3 f-text">PetDailyKit truly comprehends that your adorable furry companions deserve nothing but the very best, which is why we’ve carefully handpicked an extensive collection of products to fulfill all their needs.</p>
                </div>
            </div>
          </div>
          {/* Subscribe Form Column */}
              <div className="row mt-5">
              <div className="col-md-12 text-center">
                <div className="subscribe-text">Subscribe To Our Newsletter</div>
                <form className="form-inline justify-content-center mt-2">
                  <div className="form-group col-md-12 mb-2">
                    <label htmlFor="email" className="sr-only">Email</label>
                    <input type="email" className="form-control emailTtext-ft" id="email" placeholder="Email" />
                  </div>
                  <button type="submit" className="btn-foot p-2 mb-2 ml-2">SUBSCRIBE</button>
                </form>
              </div>
                <div className="col-md-12 text-center">
                
                  <h5 className="font-weight-bold li">Find Us</h5>
                  <ul className="list-unstyled mt-3">
                    <li>
                      <a href="mailto:contact@petdailykit.com" className="textli"><i className="fa fa-envelope mr-2" aria-hidden="true"></i> contact@petdailykit.com</a>
                    </li>
                    <li>
                      <address className="textli"><i className="fa fa-map-marker mr-2" aria-hidden="true"></i>
                        5100 Dexham Road Ste A,<br />
                        Rowlett, Texas, 75088
                      </address>
                    </li>
                  </ul>
                </div> 
              </div>
              {/* Social media icons */}
              <div className="row justify-content-center">
                <ul className="text-center">
                  <li className="list-inline-item"><a href="#" className="textli"><i className="fab fa-facebook-f fa-2x"></i></a></li>
                  <li className="list-inline-item"><a href="#" className="textli"><i className="fab fa-instagram fa-2x"></i></a></li>
                  <li className="list-inline-item"><a href="#" className="textli"><i className="fab fa-pinterest fa-2x"></i></a></li>
                  <li className="list-inline-item"><a href="#" className="textli"><i className="fab fa-youtube fa-2x"></i></a></li>
                </ul>                    
              </div> 
              {/* Copyright text */}
              <div className="row justify-content-center">
                <span className="text-center">Copyright © 2024 PetDailyKit | Powered by PetDailyKit</span>
              </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;