import React from 'react';
import './Features.css'

const Features = () => {
  return (
    <div className="container p-4 py-4 mt-4" style={{ paddingLeft: 0, paddingRight: 0 }}>
      <div className="row ">
        <div className="col-12">
          <div className="row icon-description-set">
            <div className="col-md-6 mb-4">
              <div className="d-flex align-items-start">
                <div className="me-3">
                  <i className="fa fa-calendar-check-o fa-3x text-primary"></i>
                </div>
                <div>
                  <h4>Easy Online Booking</h4>
                  <hr className="my-2" />
                  <p>
                    Just fill up basic details and choose the dates on our reservation form in this website to book your travel needs.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="d-flex align-items-start">
                <div className="me-3">
                  <i className="fa fa-id-card-o fa-3x text-primary"></i>
                </div>
                <div>
                  <h4>Professional Drivers</h4>
                  <hr className="my-3" />
                  <p>
                    Our drivers are not only professional but also very supportive to ensure your journey is totally comfortable.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="d-flex align-items-start">
                <div className="me-3">
                  <i className="fa fa-bus fa-3x text-primary"></i>
                </div>
                <div>
                  <h4>Wide Fleet of Vehicles</h4>
                  <hr className="my-3" />
                  <p>
                    All our fleet that are in perfect condition before the journey to provide you a safe and pleasant travel experience.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="d-flex align-items-start">
                <div className="me-3">
                  <i className="fa fa-shield fa-3x text-primary"></i>
                </div>
                <div>
                  <h4>Free Travel Insurance</h4>
                  <hr className="my-3" />
                  <p>
                    Enjoy your travel in comfort with our free travel insurance that offers life coverage up to Rs. 2 Lacs. Conditions apply.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;