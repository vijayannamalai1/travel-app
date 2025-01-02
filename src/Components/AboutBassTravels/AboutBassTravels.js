import React, { useState } from "react";
import "./AboutBassTravels.css"
const AboutBassTravels = () => {
  const [showModal, setShowModal] = useState(false);

  // Toggle Modal and manage scroll behavior
  const toggleModal = () => {
    setShowModal(!showModal);
    
    // Disable or enable scroll
    if (!showModal) {
      // Disable scrolling by adding 'overflow: hidden' to body
      document.body.style.overflow = "hidden";
    } else {
      // Restore scrolling when modal is closed
      document.body.style.overflow = "auto";
    }
  };

  return (
    <div className="container my-5 about_bass_travels">
      <div className="row">
        {/* Left Section: About BASS TRAVELS */}
        <div className="col-md-6">
          <h3 className="line-left">About - BASS TRAVELS</h3>
          <div className="title-block4"></div>
          <p style={{ textAlign: "justify" }}>
            BASS TRAVELS – a leading tours and travels agency in Pondicherry with over ten years of experience specializes in organizing tours and offering fleet & taxi services. We have gathered significant knowledge and exposure to design and offer you the best services and meet your requirements perfectly.
          </p>
          <p style={{ textAlign: "justify" }}>
            We also accommodate custom trip requests to offer you the best we can at reasonable fares. Our professional drivers will guide and support you to ensure that your journey turns out to be a comfortable experience.
          </p>
          <div>
            <a href="https://basstravels.in/about" className="btn btn-primary learnmore_btn">
              Learn More
            </a>
          </div>
        </div>

        {/* Right Section: YouTube Video with Play Button */}
        <div className="col-md-6">
          <div
            className="video-wrapper"
            style={{
              background: "url(https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://basstravels.in/digitalfactory_content/uploads/2017/02/Safety-Tips.jpg) no-repeat center top",
              backgroundSize: "cover",
              height: "300px",
              position: "relative",
            }}
          >
            {/* Play Button */}
            <div
              className="video-play-button"
              onClick={toggleModal}
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                backgroundColor: "rgba(0, 0, 0, 0.6)",
                padding: "15px",
                borderRadius: "50%",
                cursor: "pointer",
              }}
            >
              <i className="fa fa-play" style={{ color: "#fff", fontSize: "30px" }}></i>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for YouTube Video */}
      {showModal && (
        <>
          {/* Modal Backdrop */}
          <div
            className="pp_overlay"
            style={{
              opacity: "0.8",
              backgroundColor: "rgba(0, 0, 0, 0.8)", // Darkened backdrop
              position: "fixed",
              top: "0",
              left: "0",
              right: "0",
              bottom: "0",
              zIndex: "1040",
            }}
            onClick={toggleModal}
          ></div>

          {/* Modal Content */}
          <div
            className="pp_pic_holder pp_default"
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "500px",
              zIndex: "1050",
            }}
          >
            {/* Top Section (with a blank middle area, similar to your HTML structure) */}
            <div className="pp_top">
              <div className="pp_left"></div>
              <div className="pp_middle"></div>
              <div className="pp_right"></div>
            </div>

            {/* Modal Content */}
            <div className="pp_content_container">
              <div className="pp_left">
                <div className="pp_right">
                  <div className="pp_content">
                    <div className="pp_loaderIcon" style={{ display: "none" }}></div>
                    <div className="pp_fade" style={{ display: "block" }}>
                      <div id="pp_full_res">
                        {/* YouTube Video */}
                        <iframe
                          src="https://www.youtube.com/embed/KS88JAkOECo?rel=1&autoplay=1"
                          width="500"
                          height="344"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          title="Bass Travels YouTube Video"
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Close Button positioned at the top-right of modal content */}
              <a
                className="pp_close"
                href="#samplelink"
                onClick={toggleModal}
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  fontSize: "20px",
                  color: "#fff",
                  backgroundColor: "rgba(0, 0, 0, 0.6)",
                  padding: "5px 10px",
                  borderRadius: "50%",
                  cursor: "pointer",
                }}
              >
                <i className="fa fa-close"></i>
              </a>
            </div>

            {/* Bottom Section (empty placeholders) */}
            <div className="pp_bottom">
              <div className="pp_left"></div>
              <div className="pp_middle"></div>
              <div className="pp_right"></div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AboutBassTravels;
