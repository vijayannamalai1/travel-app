import React, { useState } from 'react';
import './Fleet.css'
const FleetComponent = () => {
  const fleetData = [
    {
      title: "Indigo",
      price: "From Rs. 8.50",
      image: "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://basstravels.in/digitalfactory_content/uploads/2017/07/F-Indigo.png",
      link: "https://basstravels.in/fleet/indigo/",
      details: ["4 Seater", "6 Bags"]
    },
    {
      title: "Deluxe Mini-Bus",
      price: "From Rs. 12",
      image: "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://basstravels.in/digitalfactory_content/uploads/2017/07/F-2662.png",
      link: "https://basstravels.in/fleet/deluxe-mini-bus/",
      details: ["37 Seater", "42 Bags"]
    },
    {
      title: "Luxury Coach",
      price: "From Rs. 15",
      image: "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://basstravels.in/digitalfactory_content/uploads/2017/07/F-7277.png",
      link: "https://basstravels.in/fleet/luxury-coach/",
      details: ["54 Seater", "60 Bags"]
    },
    {
      title: "17S Tempo Traveller",
      price: "From Rs. 20",
      image: "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://basstravels.in/digitalfactory_content/uploads/2017/07/F-17TT.png",
      link: "https://basstravels.in/fleet/17s-tempo-traveller/",
      details: ["17 Seater", "20 Bags"]
    },
    {
      title: "Innova",
      price: "From Rs. 12",
      image: "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://basstravels.in/digitalfactory_content/uploads/2017/07/F-Innova.png",
      link: "https://basstravels.in/fleet/innova/",
      details: ["7 Seater", "9 Bags"]
    },
    {
      title: "Etios",
      price: "From Rs. 9",
      image: "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://basstravels.in/digitalfactory_content/uploads/2017/07/F-Etios.png",
      
      details: ["4 Seater", "6 Bags"]
    }
  ];

  const [startIndex, setStartIndex] = useState(0);
  const cardsPerPage = 4;
  const totalDots = Math.ceil(fleetData.length / cardsPerPage); // 2 dots for 6 cards and 4 cards per page

  const handlePrevious = () => {
    setStartIndex((prevIndex) =>
      prevIndex === 0 ? fleetData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setStartIndex((prevIndex) =>
      (prevIndex + 1) % fleetData.length
    );
  };

  const handleDotClick = (dotIndex) => {
    setStartIndex(dotIndex * cardsPerPage);
  };

  const displayedFleet = Array.from({ length: cardsPerPage }, (_, i) =>
    fleetData[(startIndex + i) % fleetData.length]
  );

  return (
    <section className="container my-5 position-relative fleet_Section">
        
      <div className="d-flex justify-content-end align-items-center mb-4">
      <h3 className="text-center mx-auto line">Our Fleet</h3>
        <div>
          <button
            className="btn btn-outline-primary me-2"
            onClick={handlePrevious}
          >
            &lt;
          </button>
          <button
            className="btn btn-outline-primary"
            onClick={handleNext}
          >
            &gt;
          </button>
        </div>
      </div>
      <p className="text-center mb-4">Choose from our wide range of luxury and budgeted fleet to meet your travel needs.</p>
      <div className="row">
        {displayedFleet.map((fleet, index) => (
          <div className="col-md-3 mb-4" key={index}>
            <div className="card">
              <a href={fleet.link} title={fleet.title}>
                <img
                  src={fleet.image}
                  className="card-img-top"
                  alt={fleet.title}
                />
              </a>
              <div className="card-body">
                <h5 className="card-title">{fleet.title}</h5>
                <p className="card-text">{fleet.price}</p>
                <ul className="list-unstyled">
                  {fleet.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="d-flex justify-content-center mt-4">
        {Array.from({ length: totalDots }).map((_, dotIndex) => (
          <button
            key={dotIndex}
            className={`dot mx-1 ${dotIndex === Math.floor(startIndex / cardsPerPage) ? 'active-dot' : ''}`}
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              border: '1px solid #000',
              background: dotIndex === Math.floor(startIndex / cardsPerPage) ? '#000' : '#fff',
              cursor: 'pointer',
              margin: '0 5px'
            }}
            onClick={() => handleDotClick(dotIndex)}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default FleetComponent;
