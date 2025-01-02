import React from 'react';
import './HeaderContent.css'
const HeaderContent = () => {
  return (
    <div className="header-content d-flex align-items-center justify-content-between mx-auto">
      {/* Logo */}
      <div className="logo">
        <a href="https://basstravels.in/">
          <img
            src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://basstravels.in/digitalfactory_content/uploads/2017/07/BTL.png"
            alt="BASS TRAVELS"
            className="img-fluid"
            
          />
        </a>
      </div>

      {/* Header Icons (Desktop Only) */}
      <div className="d-none d-lg-flex flex-grow-1 justify-content-center text-center mx-4 header-icons-wrapper">
        <div className=" px-3">
          <p>
            <i className="fa fa-check-square-o" aria-hidden="true"></i>
            <strong> Corporate/Family Tours</strong>
          </p>
          <p className="m-0 header-icon-text">Comfort Travel Assured</p>
        </div>
        <div className="px-3">
          <p>
            <i className="fa fa-check-square-o" aria-hidden="true"></i>
            <strong> Temple & Wedding Tours</strong>
          </p>
          <p className="m-0 header-icon-text">Organized Easily</p>
        </div>
        <div className="px-3">
          <p>
            <i className="fa fa-check-square-o" aria-hidden="true"></i>
            <strong> Educational Tours</strong>
          </p>
          <p className="m-0 header-icon-text">Arranged Instantly</p>
        </div>
      </div>

      {/* BOOK NOW Button (Desktop Only) */}
      <div className="d-none d-lg-block">
        <a
          href="https://basstravels.in/booking/"
          className="btn btn-primary booknow_btn"
          target="_blank"
          rel="noopener noreferrer"
        >
         BOOK NOW
        </a>
      </div>
      
    </div>
  );
};

export default HeaderContent;
