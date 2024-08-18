import React, { useState, useEffect } from "react";
import "../Gallery.css"; // Import the CSS file
import Navbar from "../navbar";

// Array of image objects
const images = [
  { src: './tes/bhangr.jpeg', title: 'Bhangara' },
  { src: './tes/bonfir.jpeg', title: 'Bonfire' },
  { src: './tes/khokh.jpeg', title: 'Kho Kho' },
  { src: './tes/kit.jpeg', title: 'Kite Flying' },
  { src: './tes/rangoli1.jpg', title: 'Rangoli' },
  { src: './tes/tow-m.jpeg', title: 'Tug of wars' },
  { src: './tes/dodgebal.jpeg', title: 'Dodgeball' },
  { src: './tes/vibe.jpeg', title: 'Vibes Jamming' },
];

const Sankranthi_2022 = () => {
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

export default Sankranthi_2022;
