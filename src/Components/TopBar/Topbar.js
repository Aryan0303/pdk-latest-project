import React from 'react';
import './Topbar.css';

const TopBar = () => {
  return (
    <>
      {/* Navigation bar for desktop */}
      <nav className="navbar top-back navbar-expand-md navbar-custom d-none d-md-block">
        <div className="container topbody1">
          <span className=" text-white desktop-top-tx"> ☆ Free Shipping On $35 ☆ </span>
          <ul className="navbar-nav ml-auto align-items-end">
            <li className="nav-item">
              <a className="nav-link top-nav-item" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link top-nav-item" href="#">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link top-nav-item" href="#">Blog</a>
            </li>
            <li className="nav-item">
              <a className="nav-link top-nav-item" href="#">Login | Registration</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Navigation bar for mobile */}
      <nav className="navbar top-back navbar-expand-md mtopnav d-md-none">
        <div className="container mobile-top-nav-text text-center"> {/* Added text-center class here */}
          <span className="  text-white">☆ We only deliver in USA | Free shipping on $35 ☆ </span>
        </div>
      </nav>

    </>
  );
}

export default TopBar;
