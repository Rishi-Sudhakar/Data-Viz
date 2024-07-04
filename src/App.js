import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LocomotiveScroll from 'locomotive-scroll';
import Header from './components/Header';
import Hero from './components/Hero';
import Dashboard from './components/Dashboard';
import About from './components/About';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import './styles/App.css';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      multiplier: 1,
      class: 'is-revealed',
    });

    scroll.on('scroll', ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(scrollRef.current, {
      scrollTop(value) {
        return arguments.length
          ? scroll.scrollTo(value, 0, 0)
          : scroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
    });
    
    gsap.to('.hero-background', {
      yPercent: 50,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });

    // Parallax effect for about sections
    gsap.utils.toArray('.about-section').forEach((section, i) => {
      gsap.to(section, {
        yPercent: i % 2 === 0 ? 20 : -20,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    });

    ScrollTrigger.addEventListener('refresh', () => scroll.update());
    ScrollTrigger.refresh();

    return () => {
      scroll.destroy();
      ScrollTrigger.removeEventListener('refresh', () => scroll.update());
    };
  }, []);

  return (
    <Router>
      <div className="App" data-scroll-container ref={scrollRef}>
        <CustomCursor />
        <Header />
        <Hero />
        <Dashboard />
        <About />
        <Footer />
      </div>
    </Router>
  );
}

export default App;