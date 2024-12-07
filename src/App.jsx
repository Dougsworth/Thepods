import React from "react";
import "./index.css";

const App = () => {
  return (
    <div className="container">
      <div className="card">
        <h1 className="animate-title">
          🏡 The Pods
          <br />
          <span className="subtitle">Rooms for Rent</span>
        </h1>{" "}
        <p className="description animate-fade">
          Modern, fully-equipped rooms in the heart of Kingston. Perfect for
          student and young professionals <br />
          <strong>Don’t wait—rooms are going fast!</strong>
        </p>
        <img
          src="public/apartment.jpg"
          alt="Rental Property"
          className="property-image animate-image"
        />
        <div className="contact-info animate-fade">
          <p>
            📍 <strong>Location:</strong>{" "}
            <a
              href="https://www.google.com/maps?q=6+University+Drive,+Kingston,+Jamaica"
              target="_blank"
              rel="noopener noreferrer"
            >
              6 University Drive, Kingston, Jamaica
            </a>
          </p>
          <p>
            🏙️ <strong>Close to:</strong> Universities, major shopping centers,
            and public transportation.
          </p>
          <p>
            📞 <strong>Call:</strong> <a href="tel:+17848380">876-784-8380</a>
          </p>
        </div>
        <button className="contact-button animate-button">
          <a href="tel:+17848380">Contact Now</a>
        </button>
      </div>
    </div>
  );
};

export default App;
