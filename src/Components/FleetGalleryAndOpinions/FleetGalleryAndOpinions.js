import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './FleetGalleryAndOpinions.css';

const FleetGalleryAndOpinions = () => {
  const fleetGallery = [
    {
      imgSrc: "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://basstravels.in/digitalfactory_content/uploads/2017/02/8726.png",
      title: "37 Seater A.C.",
    },
    {
      imgSrc: "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://basstravels.in/digitalfactory_content/uploads/2017/02/Etios.png",
      title: "4 Seater Etios",
    },
    {
      imgSrc: "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://basstravels.in/digitalfactory_content/uploads/2017/02/Innova.png",
      title: "7 Seater Innova",
    },
    {
      imgSrc: "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://basstravels.in/digitalfactory_content/uploads/2017/02/IndigoCS.png",
      title: "4 Seater IndigoCS",
    },
    {
      imgSrc: "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://basstravels.in/digitalfactory_content/uploads/2017/02/8023.png",
      title: "33 Seater A.C.",
    },
    {
      imgSrc: "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://basstravels.in/digitalfactory_content/uploads/2017/02/7677.png",
      title: "37 Seater A.C.",
    },
    {
      imgSrc: "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://basstravels.in/digitalfactory_content/uploads/2017/02/9151.png",
      title: "54 Seater Non-A.C.",
    },
    {
      imgSrc: "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://basstravels.in/digitalfactory_content/uploads/2017/02/7277.png",
      title: "54 Seater Non-A.C.",
    },
    {
      imgSrc: "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://basstravels.in/digitalfactory_content/uploads/2017/02/2662.png",
      title: "37 Seater Non-A.C.",
    },
  ];
  

  const customerOpinions = [
    {
      feedback:
        "BASS TRAVELS is definitely a professional travel agency from my personal experience. Flexible, polite, and safety-conscious drivers are rare to find nowadays! My experience with them was comfortable, and I recommend them!",
      imgSrc: "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://basstravels.in/digitalfactory_content/uploads/2017/07/Kamal-Raj-orangepeel.jpg",
      name: "Kamal Raj",
      vehicle: "17S Tempo Traveler",
    },
    {
      feedback:
        "I found BASS TRAVELS very reliable, I could count on them to do our corporate tour as planned, despite the rough weather! They made us feel safe. Highly recommend them!",
      imgSrc: "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://basstravels.in/digitalfactory_content/uploads/2017/07/TI1-antique.jpg",
      name: "Mike Jones",
      vehicle: "Luxury Coach",
    },
  ];

  const [currentOpinionIndex, setCurrentOpinionIndex] = useState(0);

  const handleDotClick = (index) => {
    setCurrentOpinionIndex(index); // Update the displayed opinion based on dot click
  };

  return (
    <div className="container my-5">
      <div className="row">
        {/* Fleet Gallery Section on the left */}
        <div className="col-md-12 col-lg-6 mb-5">
          <h3 className="text-center mb-4">Fleet Gallery</h3>
          <div className="row">
            {fleetGallery.map((item, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="card">
                  <img src={item.imgSrc} className="card-img-top" alt={item.title} />
                  <div className="card-body">
                    <h5 className="card-title text-center">{item.title}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Customer Opinions Section on the right */}
        <div className="col-md-12 col-lg-6 customer_opinion">
          <h3 className="text-center mb-4">Customer Opinions</h3>
          <div className="row">
            {/* Display only the current opinion */}
            <div className="col-md-12 mb-4">
              <div className="card">
                <div className="card-body">
                  {/* Feedback Text */}
                  <div className="feedback-text">
                    {customerOpinions[currentOpinionIndex].feedback}
                  </div>
                  {/* Customer Info */}
                  <div className="d-flex align-items-center mt-4">
                    <img
                      src={customerOpinions[currentOpinionIndex].imgSrc}
                      alt={customerOpinions[currentOpinionIndex].name}
                      className="rounded-circle me-3"
                    />
                    <div>
                      <h6 className="mb-0">{customerOpinions[currentOpinionIndex].name}</h6>
                      <small>{customerOpinions[currentOpinionIndex].vehicle}</small>
                    </div>
                  </div>
                </div>
                {/* Dots to switch between opinions */}
                <div className="text-center mt-3">
                  <span
                    className={`dot ${currentOpinionIndex === 0 ? "active" : ""}`}
                    onClick={() => handleDotClick(0)}
                  ></span>
                  <span
                    className={`dot ${currentOpinionIndex === 1 ? "active" : ""}`}
                    onClick={() => handleDotClick(1)}
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FleetGalleryAndOpinions;
