// import React, { useEffect, useState } from 'react'
import './Explorations.css'

// function Explorations({slides}) {
//   const [currentImage, setCurrentImage] = useState(0);
  // const interval = 3000;
//   useEffect(()=>{
//     const slideInterval = setInterval(()=>{
//       setCurrentImage((prev)=> (prev+1)%slides.length)
//     },interval);

//     return ()=> clearInterval(slideInterval)
//   },[slides.length, interval])
//   return (
//     <div className='explorations'>
//         <div className='carousel-slides'>
//           {slides.map((slide, index) =>(
//             <div
//             key={index}
//             className={`carousel-slide ${ index === currentImage ? "active" : ''}`}
//             style={{
//               opacity: index === currentImage ? 1 : 0,
//               transition: 'opacity 0.5s ease',
//             }}
//             >
//             <img src={slide.image} alt={slide.caption}/>
//             </div>
//           ))}
//         </div>
//     </div>
//   )
// }

// export default Explorations
import React, { useState, useEffect } from 'react';
// import './AutoCarousel.css';

const AutoCarousel = ({ slides, interval = 2000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, interval);

    return () => clearInterval(slideInterval); // Cleanup on unmount
  }, [slides.length, interval]);

  return (
    <div className="carousel" id='explorations'>
     <div className='exploration-light-text'>
            <p>... these are also my works = )</p>
        </div>
        <div className='exploration-dark-text'>
            <p>Your product can look <br/>something like this too:</p>
        </div>
      <div
        className="carousel-slides"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div className="carousel-slide" key={index}>
            <img src={slide.image} alt={slide.caption} />
          
          </div>
        ))}
      </div>
    
    </div>
  );
};

export default AutoCarousel;
