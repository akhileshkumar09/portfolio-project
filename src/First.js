import React, { useEffect, useState } from 'react';
import './first.css';

const First = () => {
  const [stickerClasses, setStickerClasses] = useState(['hidden', 'hidden', 'hidden', 'hidden', 'hidden']);

  // Effect to animate stickers after a delay
  useEffect(() => {
    const timeout = setTimeout(() => {
      setStickerClasses(['sticker', 'sticker', 'sticker', 'sticker', 'sticker']);
    }, 500); // Adjust delay as needed
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="container">
      <div className="info">
        <h1 style={{ color: 'grey' }}>John Doe</h1>
        <p style={{ color: 'grey' }}>Software Engineer</p>
        <p className="profession-details">
          I specialize in building modern web applications with a focus on performance and scalability.
        </p>
      </div>
      <div className="stickers">
        <div className={`sticker ${stickerClasses[0]}`}>React</div>
        <div className={`sticker ${stickerClasses[1]}`}>JavaScript</div>
        <div className={`sticker ${stickerClasses[2]}`}>CSS</div>
        <div className={`sticker ${stickerClasses[3]}`}>HTML</div>
        <div className={`sticker ${stickerClasses[4]}`}>Node.js</div>
      </div>
    </div>
  );
};

export default First;
