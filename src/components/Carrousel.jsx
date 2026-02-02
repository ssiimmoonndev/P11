import { useState } from "react";
import "../style/Carrousel.scss"

export default function CarrouselContainer({pictures}) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex(currentIndex === pictures.length - 1 ? 0 : currentIndex + 1);
  };

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? pictures.length - 1 : currentIndex - 1);
  };

  return (
    <div className="carousel-container">
      <img 
        src={pictures[currentIndex]} 
        alt={`Slide ${currentIndex + 1}`} 
        className="carrousel-img" 
      />
    {pictures.length > 1 && (
      <>
        <svg 
            className="arrow arrow-left" 
            onClick={prevSlide} 
            viewBox="0 0 48 80" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z" fill="white"/>
        </svg>
        <svg 
            className="arrow arrow-right" 
            onClick={nextSlide} 
            viewBox="0 0 48 80" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z" fill="white"/>
        </svg>
        <span className="slide-counter">
          {currentIndex + 1} / {pictures.length}
        </span>
      </>
    )}
    </div>
  )
}