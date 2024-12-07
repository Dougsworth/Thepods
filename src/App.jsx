import React from "react";
import "./index.css";

const App = () => {
  return (
    <div className="container">
      <div className="card">
        <h1 className="animate-title fade-in">
          🏡 The Pods
          <br />
          <span className="subtitle slide-in">Studios for Rent</span>
        </h1>
        <p className="description zoom-in">
          Modern, fully-equipped studios in Kingston. Perfect for students and
          young professionals. <br />
          <strong>Don’t wait—spaces are going fast!</strong>
        </p>
        <img
          src="/house.jpg"
          alt="Rental Property"
          className="property-image fade-in"
        />
        <div className="contact-info">
          <p className="fade-in">
            📍 <strong>Location:</strong>{" "}
            <a
              href="https://www.google.com/maps?q=6+University+Drive,+Kingston,+Jamaica"
              target="_blank"
              rel="noopener noreferrer"
            >
              6 University Drive, Kingston, Jamaica
            </a>
          </p>
          <p className="fade-in">
            🏙️ <strong>Close to:</strong> Universities, major shopping centers,
            and public transportation.
          </p>
          <p className="fade-in">
            📞 <strong>Call:</strong> <a href="tel:8767848380">876-784-8380</a>
          </p>
        </div>
        <button className="contact-button pulse">
          <a href="tel:+876-784-8380">Contact Now</a>
        </button>
      </div>
    </div>
  );
};

export default App;
