import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import '../styles/Header.css';

const Header = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    gsap.from(headerRef.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    });
  }, []);

  return (
    <header className="header" ref={headerRef}>
      <div className="logo">DataViz</div>
      <nav>
        <ul>
          <li><Link to="/" className="hover-scale">Home</Link></li>
          <li><Link to="/dashboard" className="hover-scale">Dashboard</Link></li>
          <li><Link to="/about" className="hover-scale">About</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
