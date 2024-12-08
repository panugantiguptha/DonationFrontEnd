import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ImageSlider = () => {
  // Sample slider data
  const slides = [
    {
      image: '../../assets/images/goods.jpg',
      title: 'Help Sandip end the suffering of abandoned elderly parents',
      buttonText: 'Donate now'
    },
    {
      image: '../../assets/images/goods.jpg',
      title: 'Support education for underprivileged children',
      buttonText: 'Contribute now'
    },
    {
      image: '/api/placeholder/1200/500',
      title: 'Join us in providing healthcare to rural communities',
      buttonText: 'Help now'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Change to the next slide
  const goToNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    const nextIndex = (currentIndex + 1) % slides.length;
    setCurrentIndex(nextIndex);
  };

  // Change to the previous slide
  const goToPrevious = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
    setCurrentIndex(prevIndex);
  };

  // Change to a specific slide when a dot is clicked
  const goToSlide = (index) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(index);
  };

  // Automatically change slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(goToNext, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  // Delay animation to allow for smooth transition
  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => setIsAnimating(false), 500); // Match CSS transition duration
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      {/* Slides Container */}
      <div
        className="relative w-full h-full flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="relative w-full h-full flex-shrink-0"
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {/* Slide Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>

            {/* Slide Content */}
            <div className="absolute inset-0 flex justify-center items-center text-center px-6 md:px-16">
              <div className="z-10 text-white">
                <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
                  {slide.title}
                </h2>
                <button className="px-8 py-3 text-white bg-red-500 rounded-full w-fit hover:bg-red-600 transition-colors">
                  {slide.buttonText}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Left Arrow */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 text-white bg-black bg-opacity-50 rounded-full hover:bg-opacity-80 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 text-white bg-black bg-opacity-50 rounded-full hover:bg-opacity-80 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center items-center space-x-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              currentIndex === index
                ? 'bg-red-500'
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
