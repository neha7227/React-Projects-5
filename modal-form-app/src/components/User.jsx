import React, { useState } from "react";
import "../styles.css";

const User = ({ closeModal }) => {
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    closeModal(true); // Close the modal
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Fill Details</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              required
              className="input-field"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="input-field"
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              className="input-field"
            />
          </div>
          <div className="form-group">
            <label htmlFor="dob">Date of Birth:</label>
            <input
              type="date"
              id="dob"
              name="dob"
              required
              className="input-field"
            />
          </div>
          <div className="form-group">
            <button type="submit" className="submit-button">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default User;
