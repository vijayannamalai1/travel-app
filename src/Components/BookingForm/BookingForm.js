import React, { useState } from "react";
import './BookingForm.css';

const BookingForm = () => {
  const [activeTab, setActiveTab] = useState("distance");

  return (
    <div className="container-fluid booking-form mt-4 px-0">
      <div className="row">
        {/* Vertical Tabs */}
        <div className="col-md-2 d-flex flex-column p-0">
          <div
            className="nav flex-column nav-pills h-100"
            role="tablist"
            aria-orientation="vertical"
          >
            <button
              className={`nav-link ${activeTab === "distance" ? "active" : ""} flex-grow-1 d-flex align-items-center justify-content-center`}
              onClick={() => setActiveTab("distance")}
            >
              Distance
            </button>
            <button
              className={`nav-link ${activeTab === "flatRate" ? "active" : ""} flex-grow-1 d-flex align-items-center justify-content-center`}
              onClick={() => setActiveTab("flatRate")}
            >
              Flat Rate
            </button>
          </div>
        </div>

        {/* Horizontal Form Fields */}
        <div className="col-md-10">
          {activeTab === "distance" && (
            <form className="d-flex align-items-center flex-wrap justify-content-evenly">
              <div className="me-3 mb-2">
                <label htmlFor="pickupAddress" className="form-label">Pick Up Address</label>
                <input
                  type="text"
                  id="pickupAddress"
                  className="form-control form-control-sm"
                  placeholder="Enter pickup address"
                />
              </div>
              <div className="me-3 mb-2">
                <label htmlFor="dropoffAddress" className="form-label">Drop Off Address</label>
                <input
                  type="text"
                  id="dropoffAddress"
                  className="form-control form-control-sm"
                  placeholder="Enter drop-off address"
                />
              </div>
              <div className="me-3 mb-2">
                <label htmlFor="return" className="form-label">Return</label>
                <select id="return" className="form-select form-select-sm">
                  <option value="oneWay">One Way</option>
                  <option value="return">Return</option>
                </select>
              </div>
              <div className="me-3 mb-2">
                <label htmlFor="pickupDate" className="form-label">Pick Up Date</label>
                <input
                  type="date"
                  id="pickupDate"
                  className="form-control form-control-sm"
                />
              </div>
              <div className="me-3 mb-2">
                <label htmlFor="pickupTime" className="form-label">Pick Up Time</label>
                <input
                  type="time"
                  id="pickupTime"
                  className="form-control form-control-sm"
                />
              </div>
              <button type="submit" className="btn btn-primary btn-sm">Reserve Now</button>
            </form>
          )}

          {activeTab === "flatRate" && (
            <form className="d-flex align-items-center flex-wrap justify-content-evenly">
              <div className="me-3 mb-2">
                <label htmlFor="trip" className="form-label">Trip</label>
                <select id="trip" className="form-select form-select-sm">
                  <option value="chennaiPondicherry">{'Chennai Airport > Pondicherry'}</option>
                  <option value="pondicherryChennai">{'Pondicherry > Chennai Airport'}</option>
                </select>
              </div>
              <div className="me-3 mb-2">
                <label htmlFor="returnFlat" className="form-label">Return</label>
                <select id="returnFlat" className="form-select form-select-sm">
                  <option value="oneWay">One Way</option>
                  <option value="return">Return</option>
                </select>
              </div>
              <div className="me-3 mb-2">
                <label htmlFor="pickupDateFlat" className="form-label">Pick Up Date</label>
                <input
                  type="date"
                  id="pickupDateFlat"
                  className="form-control form-control-sm"
                />
              </div>
              <div className="me-3 mb-2">
                <label htmlFor="pickupTimeFlat" className="form-label">Pick Up Time</label>
                <input
                  type="time"
                  id="pickupTimeFlat"
                  className="form-control form-control-sm"
                />
              </div>
              <button type="submit" className="btn btn-primary btn-sm">Reserve Now</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
