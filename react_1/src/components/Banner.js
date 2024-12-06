import React, { useState, useEffect } from 'react';

const Banner = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  const buttonStyle = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'rgba(255, 255, 255, 0.5)',
    border: 'none',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    fontSize: '20px',
    cursor: 'pointer',
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '500px', overflow: 'hidden' }}>
      {slides.map((slide, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            opacity: index === currentSlide ? 1 : 0,
            transition: 'opacity 1s ease-in-out',
          }}
        >
          <img
            src={slide.image}
            alt={slide.alt}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            padding: '20px',
            textAlign: 'center',
          }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>{slide.title}</h2>
            <p style={{ fontSize: '1.2rem', marginBottom: '2rem', maxWidth: '600px' }}>{slide.description}</p>
            <button
              style={{
                backgroundColor: '#3498db',
                color: 'white',
                border: 'none',
                padding: '10px 20px',
                fontSize: '1rem',
                cursor: 'pointer',
              }}
              onClick={() => console.log(`Clicked on ${slide.title}`)}
            >
              Learn More
            </button>
          </div>
        </div>
      ))}
      <button
        style={{ ...buttonStyle, left: '10px' }}
        onClick={prevSlide}
      >
        &#10094;
      </button>
      <button
        style={{ ...buttonStyle, right: '10px' }}
        onClick={nextSlide}
      >
        &#10095;
      </button>
    </div>
  );
};

export default Banner;