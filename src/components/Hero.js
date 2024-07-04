import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import '../styles/Hero.css';

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(heroRef.current.querySelector('h1'), { y: 50, opacity: 0, duration: 1 })
      .from(heroRef.current.querySelector('p'), { y: 30, opacity: 0, duration: 0.8 }, '-=0.5')
      .from(heroRef.current.querySelector('button'), { y: 20, opacity: 0, duration: 0.6 }, '-=0.3');
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero-content">
        <h1>Visualize Your Data</h1>
        <p>Transform raw data into stunning, interactive visualizations</p>
        <button>Get Started</button>
      </div>
      <div className="hero-background"></div>
    </section>
  );
};

export default Hero;