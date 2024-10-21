import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Importing FontAwesome icons

function Slideshow() {
  const [imageIndex, setImageIndex] = useState(0);

  // Array of images
  const images = [
    '../../src/images/slide_1.png',
    '../../src/images/slide_2.png',
    '../../src/images/slide_3.png',
    '../../src/images/slide_4.png',
    '../../src/images/slide_5.png'
  ];

  // Automatically cycle through the images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 3000); // Change the image every 3 seconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [images.length]);

  // Go to the next image
  const goToNextImage = () => {
    setImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  // Go to the previous image
  const goToPreviousImage = () => {
    setImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <>
      <div className="d-flex justify-content-center position-relative">
        {/* Image */}
        <img
          className="rounded"
          style={{ height: '400px', width: '90%' }}
          src={images[imageIndex]}
          alt="slide image"
        />

        {/* Left arrow */}
        <button
          className="position-absolute top-50 start-0 translate-middle-y btn btn-light"
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', borderRadius: '50%', padding: '10px' }}
          onClick={goToPreviousImage}
        >
          <FaChevronLeft size={24} />
        </button>

        {/* Right arrow */}
        <button
          className="position-absolute top-50 end-0 translate-middle-y btn btn-light"
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', borderRadius: '50%', padding: '10px' }}
          onClick={goToNextImage}
        >
          <FaChevronRight size={24} />
        </button>
      </div>
    </>
  );
}

export default Slideshow;