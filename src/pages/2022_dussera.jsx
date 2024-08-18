import React, { useState, useEffect } from "react";
import "../Gallery.css"; // Import the CSS file
import Navbar from "../navbar";

// Array of image objects
const images = [
  { src: "./tes/dussera_bathukamma22.jpg", title: "Bathukamma" },
  { src: "./tes/dandiya_22.jpeg", title: "Dandiya" },
  { src: "./tes/rangoli_22.jpeg", title: "Rangoli" },
  { src: "./tes/dussehra2.jpeg", title: "Garba" },
  { src: "./tes/dussera_claydoll.jpg", title: "Claydoll" },
  { src: "./tes/dussera_rangoli.jpg", title: "Rangoli" },
  { src: "./tes/dussera_garba.jpg", title: "Garba" },
  { src: "./tes/dussera_bathukamma.jpg", title: "Bathukamma" }, 
];

const Dussehra_2022 = () => {
  const [currentImage, setCurrentImage] = useState(null);
  const [isPreloaded, setIsPreloaded] = useState(false);

  // Preloading images
  useEffect(() => {
    const preloadImages = async () => {
      const promises = images.map((image) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = image.src;
          img.onload = resolve;
          img.onerror = resolve;
        });
      });
      await Promise.all(promises);
      setIsPreloaded(true); // Updating the state when all images are preloaded
    };

    preloadImages();
  }, []);

  const handleClick = (image) => {
    setCurrentImage(image.src);
  };

  const handleClose = () => {
    setCurrentImage(null);
  };

  return (
    <>
      <div className="header">
        <div>
          <img src="./tes/ebsb-logo.png" className="logo" alt="EBSB Logo"></img>
          <img src="./tes/wording.png" className="text" alt="Wording"></img>
        </div>
        <Navbar />
      </div>
      <div className="gallery">
        <div className="gallery-grid">
          {/* Render the gallery only when images are preloaded */}
          {isPreloaded && images.map((image, index) => (
            <div
              key={index}
              className="gallery-item"
              onClick={() => handleClick(image)}
            >
              <img src={image.src} alt={`Gallery ${index}`} />
              <div className="overlay">
                <div className="overlay-text">{image.title}</div>
              </div>
            </div>
          ))}
        </div>

        {currentImage && (
          <div className="lightbox" onClick={handleClose}>
            <img src={currentImage} alt="Current" />
          </div>
        )}
      </div>
    </>
  );
};

export default Dussehra_2022;
