import React, { useState, useEffect, Component } from 'react';
import { Calendar, MapPin, Users, Clock, ChevronDown } from 'lucide-react';
import './App.css';
import AI from './AI.jsx'; // Importing the AI component


//http://localhost:3000/ for Simple Browser link

/**
 * @typedef {Object} Festival
 * @property {number} id - The unique ID of the festival.
 * @property {string} name - The name of the festival.
 * @property {string} location - The location of the festival.
 * @property {string} date - The date of the festival.
 * @property {string} time - The time of the festival.
 * @property {string} expectedCrowd - The expected crowd size.
 * @property {string} description - A description of the festival.
 * @property {string} imageUrl - The URL of the festival's image.
 */

/** @type {Festival[]} */
const festivals = [
  {
    id: 1,
    name: "Sumida River Fireworks Festival",
    location: "Sumida River, Tokyo",
    date: "July 27, 2024",
    time: "19:00 - 20:30",
    expectedCrowd: "950,000+",
    description: "One of Tokyo's oldest and most famous fireworks festivals, featuring approximately 20,000 fireworks.",
    imageUrl: "https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    name: "Nagaoka Fireworks Festival",
    location: "Nagaoka City, Niigata",
    date: "August 2-3, 2024",
    time: "19:20 - 21:10",
    expectedCrowd: "800,000+",
    description: "Famous for its wide starmine fireworks and moving tribute to peace, featuring the famous 'Phoenix' fireworks.",
    imageUrl: "https://images.unsplash.com/photo-1581103126419-b03e86056591?auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    name: "Miyajima Water Fireworks Festival",
    location: "Itsukushima Shrine, Hiroshima",
    date: "August 24, 2024",
    time: "19:40 - 20:40",
    expectedCrowd: "200,000+",
    description: "Spectacular fireworks display over the famous 'floating' torii gate of Itsukushima Shrine.",
    imageUrl: "https://images.unsplash.com/photo-1535159530326-d7bf02d4edb8?auto=format&fit=crop&q=80"
  }
];


const Test = () => {
  console.log('Clicked');
}

function SearchPage() {
  return (
    <div>
      <h1>Search Page</h1>
      <button onClick={Test}>Click me</button>
    </div>
  );
}



function App() {//App function
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContent = () => {
    const mainContent = document.querySelector('.festival-grid');
    mainContent?.scrollIntoView({ behavior: 'smooth' });
  };

  return (//HTML code
    <div className="app">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="hero-title-jp">日本の花火大会</span>
            <span className="hero-title-en">HANABI GO</span>
          </h1>
          <p className="hero-subtitle">花火大会の魔法を感じるように</p>
          <button className="scroll-button" onClick={scrollToContent}>
            Discover Festivals
            <ChevronDown className="scroll-icon" />
          </button>
        </div>
      </section>

      <main className="main">
        <div className="festival-grid">
          {festivals.map((festival) => (
            <div key={festival.id} className="festival-card">
              <div className="festival-image">
                <img 
                  src={festival.imageUrl} 
                  alt={festival.name}
                />
              </div>
              
              <div className="festival-content">
                <h2 className="festival-title">{festival.name}</h2>
                
                <div className="festival-info">
                  <div className="info-item">
                    <Calendar className="info-icon" />
                    <span>{festival.date}</span>
                  </div>
                  
                  <div className="info-item">
                    <Clock className="info-icon" />
                    <span>{festival.time}</span>
                  </div>
                  
                  <div className="info-item">
                    <MapPin className="info-icon" />
                    <span>{festival.location}</span>
                  </div>
                  
                  <div className="info-item">
                    <Users className="info-icon" />
                    <span>{festival.expectedCrowd} expected visitors</span>
                  </div>
                </div>
                
                <p className="festival-description">{festival.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <section className="ai-section">
      <AI />
      </section>
      
      <footer className="footer">
        <p>※ Dates and times are subject to change. Please check official websites for the most up-to-date information.</p>
      </footer>
    </div>
  ); //End of HTML code
}//End of App function

export default App; //shows the App function on the site