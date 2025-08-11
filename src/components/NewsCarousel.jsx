import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

// --- Component Starts Here ---

const NewsCarousel = () => {
  // Define your news items here
  const newsItems = [
    {
      image: 'https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=3600',
      title: 'MAG machines GmbH is now part of the K industries group',
      date: 'NEWS · 2025-04-08',
    },
    {
      image: 'https://images.unsplash.com/photo-1616400619579-267838531a19?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=3600',
      title: '6 good reasons to choose for a MAG honeycomb catalyst',
      date: 'NEWS · 2023-07-12',
    },
    {
      image: 'https://images.unsplash.com/photo-1554224155-1696413565d3?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=3600',
      title: 'Our MAG sales network is strengthened: Unitek Japan K.K takes over sales',
      date: 'NEWS · 2023-06-07',
    },
    {
      image: 'https://images.unsplash.com/photo-1517976487612-6a7f2f45811f?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=3600',
      title: 'New HPW plant in Garsten, Austria relies on technology from MAG',
      date: 'NEWS · 2023-05-23',
    },
  ];
  
  const AUTOPLAY_DELAY = 5000;

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true, 
      align: 'start' 
    },
    [Autoplay({ delay: AUTOPLAY_DELAY, stopOnInteraction: true })] // Stop autoplay on interaction
  );
  
  const [progress, setProgress] = useState(0);
  
  // --- NEW: State for button enabled/disabled status ---
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  // --- NEW: Callback functions for scrolling ---
  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  // --- NEW: Logic to update button disabled state on slide change ---
  const onSelect = useCallback((emblaApi) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    
    // Update button states on init and select
    onSelect(emblaApi);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);

    // Logic for the autoplay progress bar
    const timer = setInterval(() => {
      // Check if autoplay is running before updating progress
      if (emblaApi.plugins()?.autoplay?.isPlaying()) {
        const progress = emblaApi.plugins().autoplay.measureProgress();
        setProgress(progress * 100);
      }
    }, 120);

    return () => {
      clearInterval(timer);
      emblaApi.off('reInit', onSelect);
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);


  return (
    <section className="bg-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- MODIFIED: Header with title and buttons --- */}
        <div className="flex justify-between items-center mb-8">
            <h2 className="text-sm font-semibold tracking-widest uppercase text-gray-500">NEWS</h2>
            <div className="flex space-x-2">
                <button 
                    onClick={scrollPrev} 
                    disabled={prevBtnDisabled}
                    aria-label="Previous slide"
                    className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                </button>
                <button 
                    onClick={scrollNext} 
                    disabled={nextBtnDisabled}
                    aria-label="Next slide"
                    className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </button>
            </div>
        </div>
        
        {/* Embla Carousel Structure */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-4">
            {newsItems.map((item, index) => (
              <div 
                className="flex-shrink-0 w-full md:w-1/2 min-w-0 pl-4" 
                key={index}
              >
                <div className="group cursor-pointer">
                  <div className="overflow-hidden mb-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300 ease-in-out"
                    />
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-medium text-gray-800 group-hover:text-blue-600 transition-colors duration-200">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-500 mt-2">{item.date}</p>
                    </div>
                    <svg className="w-6 h-6 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transform transition-all duration-300 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="relative w-full h-0.5 bg-gray-200 mt-12">
          <div 
            className="absolute top-0 left-0 h-full bg-blue-500"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default NewsCarousel;