import React from "react";
import "./SliderComponent.css";

const SliderComponent = () => {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      // data-bs-ride="carousel"
      // data-bs-interval="5000" /* Set to 10-second interval */
    >
      {/* Carousel Inner */}
      <div className="carousel-inner">
        {/* Slide 1 */}
        <div className="carousel-item active">
          <img
            src="https://basstravels.in/digitalfactory_content/uploads/2017/07/B2.jpg"
            className="d-block w-100"
            alt="Welcome to BASS TRAVELS"
          />
          <div className="carousel-caption d-md-block">
            <h5>Welcome to BASS TRAVELS!</h5>
            <p>
              We are an Exclusive Tours &amp; Travels Agency. We offer luxury
              buses, deluxe vans &amp; premium cars on tour &amp; holiday
              rentals!
            </p>
            <a
              href="https://basstravels.in/about/"
              className="btn btn-primary slideshow-button"
            >
              About BASS TRAVELS
            </a>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="carousel-item">
          <img
            src="https://basstravels.in/digitalfactory_content/uploads/2017/07/B1.jpg"
            className="d-block w-100"
            alt="Re-define your Travel Experience"
          />
          <div className="carousel-caption d-md-block">
            <h5>Re-define your Travel Experience</h5>
            <p>
              Choose from our fleet of A.C. Buses, Vans &amp; Cars for Family
              Trips, Airport Transit, Wedding Functions, Corporate Holidays,
              Sightseeing, Temple &amp; Educational Tours!
            </p>
            <a
              href="https://basstravels.in/fleet/"
              className="btn btn-primary slideshow-button"
            >
              Explore Our Fleet
            </a>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="carousel-item">
          <img
            src="https://basstravels.in/digitalfactory_content/uploads/2017/07/S1.jpg"
            className="d-block w-100"
            alt="Travel In Luxury"
          />
          <div className="carousel-caption d-md-block">
            <h5>Travel In Luxury</h5>
            <p>
              Book your tours from our wide fleet range of luxury coaches,
              mini-buses, and vans designed for a comfortable travel experience!
            </p>
            <a
              href="https://basstravels.in/booking/"
              className="btn btn-primary slideshow-button"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>

      {/* Carousel Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default SliderComponent;
