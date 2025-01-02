import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './Footer.css'
const Footer = () => {
  return (
    <footer className="footer mt-5">
      <div className="footer-inner">
        <div className="container">
          <div className="row">
            {/* About Us Section */}
            <div className="col-md-6 mb-4">
              <h5 className="line-left">About Us &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h5>
              <div className="title-block6"></div>
              <p className="text-justify">
                BASS TRAVELS is a leading tours and travels agency in Pondicherry. With over 10 years of experience in organizing tours and providing fleet services, we have gathered significant knowledge in designing and offering you the best tour packages to meet your requirements perfectly.
              </p>
              <p className="text-justify">
                BASS TRAVELS also offers a wide range of travel services – high-tech fleet services for private tours, seasonal temple tours, educational tours, corporate holiday outings, business tours, and wedding trips. Our objective is to offer our clients a safe, comfortable, and happy journey experience!
              </p>
            </div>

            {/* Quick Links Section */}
            <div className="col-md-3 mb-4">
              <h5 className="line-left">QUICK LINKS</h5>
              <div className="title-block6"></div>
              <ul className="list-unstyled quick-links">
                <li><a href="https://basstravels.in/travel-policy/">Travel Policy</a></li>
                <li><a href="https://basstravels.in/f-a-qs/">F.A.Q’s</a></li>
                <li><a href="https://basstravels.in/privacy-policy/">Privacy Policy</a></li>
                <li><a href="https://basstravels.in/feedback-form/">Feedback Form</a></li>
              </ul>
            </div>

            {/* Contact Details Section */}
            <div className="col-md-3 mb-4">
              <h5 className="line-left">Contact Details</h5>
              <div className="title-block6"></div>
              <ul className="list-unstyled contact-details">
                <li>#20,21, ECR, 100FT, ROAD, KARUVADIKUPPAM, PONDICHERRY-605008</li>
                <li><a href="tel:+919443279915 +919791855051">+919443279915 +919791855051</a><br/><span>Mon-Sat | 7.00 a.m. - 10.30 p.m.</span></li>
                <li><a href="mailto:bookings@basstravels.in">bookings@basstravels.in</a><br/><span>We respond within 3 hours.</span></li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom Section */}
          <hr style={{paddingBottom:'5px'}}/>
          <div className="footer-bottom">
            <div className="row">
              {/* Social Media Icons */}
              <div className="col-12 text-center mb-3">
                <a href="https://facebook.com/basstravels" target="_blank" rel="noopener noreferrer" className="me-3"><i className="fa fa-facebook"></i></a>
                <a href="https://plus.google.com/basstravels.in" target="_blank" rel="noopener noreferrer" className="me-3"><i className="fa fa-google-plus"></i></a>
                <a href="http://basstravelspdy" target="_blank" rel="noopener noreferrer" className="me-3"><i className="fa fa-skype"></i></a>
              </div>
            
              {/* Footer Text */}
              <div className="col-12 text-center">
                <p>© 2017 BASS TRAVELS | Powered by <span style={{ color: "#0b7dbf" }}><a href="http://digitalfactory.co.in" style={{ color: "#0b7dbf" }}><strong>DIGITAL FACTORY</strong></a></span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
