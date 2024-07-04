import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/About.css';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const sections = aboutRef.current.querySelectorAll('.about-section');
    sections.forEach((section) => {
      gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
        },
      });
    });
  }, []);

  return (
    <section className="about" ref={aboutRef}>
      <div className="about-section hover-shadow">
        <h2 className="hover-scale">About DataViz</h2>
        <p>DataViz is a powerful data visualization tool that helps you transform complex data into beautiful, interactive charts and graphs.</p>
      </div>
      <div className="about-section hover-shadow">
        <h3 className="hover-scale">Key Features</h3>
        <ul>
          <li className="hover-rotate">Easy-to-use interface</li>
          <li className="hover-rotate">Multiple chart types</li>
          <li className="hover-rotate">Real-time data updates</li>
          <li className="hover-rotate">Customizable designs</li>
          <li className="hover-rotate">Export and share options</li>
        </ul>
      </div>
      <div className="about-section hover-shadow">
        <h3 className="hover-scale">Why Choose DataViz?</h3>
        <p>Our platform empowers you to make data-driven decisions with confidence. Whether you're a business analyst, researcher, or data enthusiast, DataViz provides the tools you need to unlock insights and communicate your findings effectively.</p>
      </div>
    </section>
  );
};

export default About;