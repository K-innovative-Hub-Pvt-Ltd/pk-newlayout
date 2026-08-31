import React, { useEffect } from 'react';
import Lenis from 'lenis';

import Header from './components/Header';
import Hero from './components/Hero';
import BrandStory from './components/BrandStory';
import WhyPallavi from './components/WhyPallavi';
import LearningJourney from './components/LearningJourney';
import ADayAtPallavi from './components/ADayAtPallavi';
import CampusExperience from './components/CampusExperience';
import Teachers from './components/Teachers';
import DevelopmentOutcomes from './components/DevelopmentOutcomes';
import Campuses from './components/Campuses';
import Ecosystem from './components/Ecosystem';
import ParentStories from './components/ParentStories';
import Leadership from './components/Leadership';
import CampusFinder from './components/CampusFinder';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    // 1. Initialize Lenis Smooth Inertia Scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 2.0,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const rafId = requestAnimationFrame(raf);

    // 2. Global Scroll-Reveal Animation Observer
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
        }
      });
    };

    const scrollObserver = new IntersectionObserver(observerCallback, {
      threshold: 0.12,
      rootMargin: '0px 0px -50px 0px',
    });

    const revealSections = document.querySelectorAll('section, .split-section-wrapper');
    revealSections.forEach((sec) => {
      sec.classList.add('scroll-reveal');
      scrollObserver.observe(sec);
    });

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      scrollObserver.disconnect();
    };
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <BrandStory />
      <WhyPallavi />
      <LearningJourney />
      <ADayAtPallavi />
      <CampusExperience />
      <div className="split-section-wrapper">
        <Teachers />
        <DevelopmentOutcomes />
      </div>
      <Campuses />
      <Ecosystem />
      <ParentStories />
      <Leadership />
      <CampusFinder />
      <FinalCTA />
      <Footer />
    </>
  );
}
