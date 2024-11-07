// components/MemoriesPage.js
import React, { useState, useEffect, useRef } from 'react';

const MemoriesPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const scrollRef = useRef(null);
  const autoScrollRef = useRef(null);

  const memories = [
    {
      id: 1,
      image: '/memories/1.jpg',
      title: 'Our First Family Trip',
      description: 'When you met my parents ❤️'
    },
    {
      id: 2,
      image: '/memories/2.jpg',
      title: 'A beautiful day with you',
      description: 'You looked soo beautiful in jhumkas and kurti ❤️'
    },{
      id: 3,
      image: '/memories/3.jpg',
      title: 'Our First Zara Shopping',
      description: 'We look sooo sexy together ❤️'
    },{
      id: 4,
      image: '/memories/4.jpg',
      title: 'Our First Bakery Date',
      description: 'I love to see you eat and smile ❤️'
    },
    {
      id: 5,
      image: '/memories/5.jpg',
      title: 'You are my brightest star',
      description: 'You look more beautiful than the stars ❤️'
    },{
      id: 6,
      image: '/memories/6.jpg',
      title: 'Our Beginnings from Burger King',
      description: 'Rajiv Chowk burger king is the❤️'
    },{
      id: 7,
      image: '/memories/7.jpg',
      title: 'Our First official Date',
      description: 'Haye! you were looking sooo beautiful ❤️'
    },{
      id: 8,
      image: '/memories/8.jpg',
      title: 'Our First Date',
      description: 'Thank you for Holding my Hand ❤️'
    },{
      id: 9,
      image: '/memories/9.jpg',
      title: 'Our Small Trip',
      description: 'Added because I love it❤️'
    },
    {
      id: 10,
      image: '/memories/10.jpg',
      title: 'Your Killer eyes',
      description: 'You are sooo sexy and your eyes are magical ❤️'
    },
    {
      id: 11,
      image: '/memories/11.jpg',
      title: 'Our First Date',
      description: 'I love everything when you are close to me ❤️'
    },{
      id: 12,
      image: '/memories/12.jpg',
      title: 'Our First Trip',
      description: 'The best trip of my life❤️'
    },{
      id: 13,
      image: '/memories/13.jpg',
      title: 'You are a sundari',
      description: 'I Just want to keep kssing you❤️'
    },{
      id: 14,
      image: '/memories/14.jpg',
      title: 'You and Food',
      description: 'I Will always keep feeding you good food❤️'
    },{
      id: 15,
      image: '/memories/15.jpg',
      title: 'You and Winters are my favourtie',
      description: 'Just want to pull you closer and feel you❤️'
    },{
      id: 16,
      image: '/memories/16.jpg',
      title: 'You Are All Mine',
      description: 'I Will Always Hold your hands and never let you go❤️'
    },
    {
      id: 17,
      image: '/memories/17.jpg',
      title: 'Our Small Bus Trips',
      description: 'I can never get bored of tarvelling with you❤️'
    },{
      id: 18,
      image: '/memories/18.jpg',
      title: 'Give me some FOOD',
      description: 'I want to go herr again with you❤️'
    },{
      id: 19,
      image: '/memories/19.jpg',
      title: 'YOu are SO FUN',
      description: 'I enjoy my every moment with you❤️'
    },
    {
      id: 20,
      image: '/memories/20.jpg',
      title: 'Us When',
      description: 'I will always cook good food for you❤️'
    },
    {
      id: 21,
      image: '/memories/20.jpg',
      title: 'Our First Shopping',
      description: 'I will buy everything that you ever want❤️'
    },
    // Add all your photos here with orientation
  ];


 
  // Auto-slide effect for main display
  useEffect(() => {
    const timer = setInterval(() => {
      if (!selectedPhoto) {
        setCurrentSlide((prev) => (prev + 1) % memories.length);
      }
    }, 3000);

    return () => clearInterval(timer);
  }, [selectedPhoto]);

  // Auto-scroll effect for right panel
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scroll = () => {
      if (scrollContainer.scrollTop >= scrollContainer.scrollHeight / 2) {
        scrollContainer.scrollTop = 0; // Reset to the top to create an infinite scroll effect
      }
      scrollContainer.scrollTop += 1; // Smooth scroll speed
    };

    autoScrollRef.current = setInterval(scroll, 50);
    return () => clearInterval(autoScrollRef.current);
  }, []);

  // Handle photo click
  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
    setTimeout(() => {
      setSelectedPhoto(null);
    }, 2500); // Return to auto-slide after 3 seconds
  };

  return (
    <div className="memories-page">
      <h1 className="memories-title">Our Beautiful Memories and Amazing Journey ❤️</h1>

      <div className="memories-layout">
        {/* Mobile-like Featured Photo */}
        <div className="featured-photo">
          {memories.map((memory, index) => (
            <div
              key={memory.id}
              className={`featured-slide ${selectedPhoto?.id === memory.id || index === currentSlide ? 'active' : ''}`}
            >
              <img src={memory.image} alt={memory.title} className="featured-image" />
              <div className="featured-info">
                <h3>{memory.title}</h3>
                <p>{memory.description}</p>
              </div>
            </div>
          ))}

          <div className="nav-buttons">
            <button onClick={() => setCurrentSlide((prev) => (prev === 0 ? memories.length - 1 : prev - 1))}>←</button>
            <button onClick={() => setCurrentSlide((prev) => (prev + 1) % memories.length)}>→</button>
          </div>
        </div>

        {/* Fixed Grid Layout */}
        <div className="photos-grid" ref={scrollRef}>
          {[...memories, ...memories].map((memory, index) => (
            <div key={`${memory.id}-${index}`} className="grid-photo" onClick={() => handlePhotoClick(memory)}>
              <div className="photo-wrapper">
                <img src={memory.image} alt={memory.title} className="grid-image" />
                <div className="photo-overlay">
                  <h4>{memory.title}</h4>
                  <p>{memory.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
         {/* Background Decorations */}
      <div className="decorations">
        {[...Array(25)].map((_, i) => (
          <span
            key={`star-${i}`}
            className="decoration star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`
            }}
          >
            ⭐
          </span>
        ))}
        
        {[...Array(15)].map((_, i) => (
          <span
            key={`heart-${i}`}
            className="decoration heart"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`
            }}
          >
            ❤️
          </span>
        ))}

    </div>


      </div>
    </div>
  );
};

export default MemoriesPage;
