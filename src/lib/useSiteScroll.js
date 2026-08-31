import { useEffect } from 'react';
import Lenis from 'lenis';

/**
 * Site-wide scroll behaviour, shared by every page:
 *  1. Lenis smooth inertia scrolling.
 *  2. A scroll-reveal IntersectionObserver that tags sections as they enter view.
 */
export default function useSiteScroll() {
  useEffect(() => {
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

    const scrollObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -50px 0px' },
    );

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
}
