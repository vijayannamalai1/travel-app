import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CallToAction.css";

const CallToActionSection = () => {
  return (
    <div className="container-fluid p-0 call_to_action">
      <div className="row">
        <div className="col-12 px-0">
          <div
            className="call-to-action-2-section"
            style={{
              background: "url(https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://basstravels.in/digitalfactory_content/uploads/2017/07/CTAM.jpg) no-repeat center top",
              backgroundSize: "cover", // Ensure the image covers the entire section
              backgroundPosition: "center",
              height: "400px", // Adjust the height as needed
              position: "relative", // Allow absolute positioning for the text content
            }}
          >
            <div className="call-to-action-2-section-inner d-flex justify-content-center align-items-center text-center">
              <div className="content-wrapper">
                <h3 className="pb-2">Book Online Now to Enjoy Comfort Travel!</h3>
                <div className="title-block5"></div>
                <p>Call us: +91 94432 79915 | Email: bookings@basstravels.in</p>
                <a href="https://basstravels.in/booking" className="btn btn-primary booknow_btn">
                  BOOK NOW
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToActionSection;
