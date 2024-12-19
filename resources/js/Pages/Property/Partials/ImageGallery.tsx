import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface ImageGalleryProps {
  images: string[];
}

export function ImageGallery({ images }: ImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showLightbox, setShowLightbox] = useState(false);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (showLightbox) {
        switch (event.key) {
          case 'ArrowLeft':
            previousImage();
            break;
          case 'ArrowRight':
            nextImage();
            break;
          case 'Escape':
            setShowLightbox(false);
            break;
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [showLightbox, images]);


  return (
    <div className="relative">
      {/* Main Gallery Grid */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        <div className="col-span-2 row-span-2">
          <img
            src={images[0]}
            alt="Property main"
            className="w-full h-[400px] object-cover rounded-lg cursor-pointer hover:opacity-95 transition"
            onClick={() => setShowLightbox(true)}
          />
        </div>
        {images.slice(1, 5).map((image, index) => (
          <div key={index}>
            <div className="relative">
              <img
                src={image}
                alt={`Property ${index + 2}`}
                className="w-full h-[195px] object-cover rounded-lg cursor-pointer hover:opacity-95 transition"
                onClick={() => {
                  setCurrentIndex(index + 1);
                  setShowLightbox(true);
                }}
              />
              {index === 3 && (
                <div className="absolute inset-0 bg-gray-200 bg-opacity-70 flex items-center justify-center">
                  <p className="text-3xl font-bold text-gray-800">+{images.length - 5}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {showLightbox && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <button
            onClick={() => setShowLightbox(false)}
            className="absolute top-4 right-4 text-white hover:text-gray-300"
          >
            <X size={24} />
          </button>
          <button
            onClick={previousImage}
            className="absolute left-4 text-white hover:text-gray-300"
          >
            <ChevronLeft size={24} />
          </button>
          <img
            src={images[currentIndex]}
            alt={`Property ${currentIndex + 1}`}
            className="max-h-[90vh] max-w-[90vw] object-contain"
          />
          <button
            onClick={nextImage}
            className="absolute right-4 text-white hover:text-gray-300"
          >
            <ChevronRight size={24} />
          </button>
          <p className="absolute bottom-4 text-white">
            {currentIndex + 1}/{images.length}
          </p>
        </div>
      )}
    </div>
  );
}

