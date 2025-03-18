import React, { useEffect, useState } from "react";
import "./index.css";

const App = () => {
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const image = document.querySelector(".property-image");
      if (image)
        image.style.transform = `translateY(${window.scrollY * 0.05}px)`;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="container">
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-modal">
            <button className="popup-close" onClick={closePopup}>
              ✕
            </button>
            <h2>📞 Number Can't Be Reached?</h2>
            <strong>
              {" "}
              <p>Refresh page to see this message again.</p>
            </strong>
            <p>If you can't reach the number, please:</p>

            <div className="popup-contact-options">
              <a
                href="https://wa.me/18767848380"
                target="_blank"
                rel="noopener noreferrer"
                className="popup-whatsapp-btn"
              >
                WhatsApp Us
              </a>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSf3rEQu4Y4IhKpjuIFV6hEqVyHan9NlU02XWAXXLy8V7CtKJA/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="popup-form-btn"
              >
                Use Google Form
              </a>
            </div>
          </div>
        </div>
      )}

      <div className="card">
        <h1 className="glowing-text">
          <span className="icon">🏡</span> The Pods
        </h1>
        <p className="subtitle">Spacious Apartments</p>
        <div className="description-container">
          <p className="description">
            Unfurnished apt at 6 University Dr—near unis 🎓 & amenities 🏪.
            Private bath & kitchen.
          </p>
          <p className="description rent-details">
            <strong>Rent: $50,000/mo (light 💡 + water 💧 incl.).</strong>
          </p>
          <p className="description urgency">
            <strong>Limited spots!</strong>
          </p>
        </div>
        {/* Direct YouTube Link - Simplified */}
        <div className="image-container">
          <a
            href="https://youtube.com/shorts/VjvPFSthZsM"
            target="_blank"
            rel="noopener noreferrer"
            className="video-link"
          >
            <img
              src="/apart.jpeg"
              alt="Spacious Apartment"
              className="property-image"
            />
            <div className="video-play-overlay">
              <div className="play-button">
                <svg viewBox="0 0 24 24" width="48" height="48">
                  <path fill="#FFFFFF" d="M8 5v14l11-7z" />
                </svg>
              </div>
              <div className="watch-text">Watch Video Tour</div>
            </div>
          </a>
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
              6 University Dr
            </a>
          </p>
          <p>
            📞{" "}
            <a href="tel:18767848380">
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
        <div className="button-container">
          <button className="contact-button">
            <a href="tel:18767848380">Secure Now 🌟</a>
          </button>
          <button className="form-button">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSf3rEQu4Y4IhKpjuIFV6hEqVyHan9NlU02XWAXXLy8V7CtKJA/viewform"
              target="_blank"
              rel="noopener noreferrer"
            >
              Apply Now
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
