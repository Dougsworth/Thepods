// App.js
import React, { useEffect } from "react";
import "./index.css";

const App = () => {
  useEffect(() => {
    const handleScroll = () => {
      const image = document.querySelector(".property-image");
      if (image)
        image.style.transform = `translateY(${window.scrollY * 0.05}px)`;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="container">
      <div className="card">
        <h1 className="glowing-text">
          <span className="icon">🏡</span> The Pods
        </h1>
        <p className="subtitle">Spacious Apartments</p>

        <p className="description">
          Unfurnished apartment at 6 University Dr, Kingston—near universities
          🎓 & amenities 🏪. Rent: $49,000/month (light 💡 + water 💧 included).{" "}
          <strong>Limited spots!</strong>
        </p>

        <div className="image-container">
          <img
            src="/apart.jpeg"
            alt="Spacious Apartment"
            className="property-image"
          />
          <div className="image-overlay">Tap to View</div>
        </div>

        <div className="features-grid">
          <span>🎓 Near Unis</span>
          <span>🏪 Amenities</span>
          <span>💡 Light Incl.</span>
          <span>💧 Water Incl.</span>
        </div>

        <div className="contact-info">
          <p>
            📍{" "}
            <a
              href="https://www.google.com/maps?q=6+University+Drive,+Kingston,+Jamaica"
              target="_blank"
              rel="noopener noreferrer"
            >
              6 University Dr, Kingston
            </a>
          </p>
          <p>
            📞{" "}
            <a href="tel:+8767848380">
              (876) 784-8380{" "}
              <span role="img" aria-label="WhatsApp">
                📱
              </span>
            </a>
          </p>
          <p>
            📧 <a href="mailto:6universitydrive@gmail.com">Email</a>
          </p>
        </div>

        <button className="contact-button">
          <a href="tel:+8767848380">Secure Now 🌟</a>
        </button>
      </div>
    </div>
  );
};

export default App;
