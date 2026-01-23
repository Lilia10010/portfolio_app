import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import './i18n/config'; // Initialize i18n
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ScrollProgress from './components/ScrollProgress';
import CursorTrail from './components/CursorTrail';
import StarField from './components/StarField';
import LanguageSwitcher from './components/LanguageSwitcher';

function App() {
//   // Initialize smooth scrolling with optimized settings
//   useEffect(() => {
//     const lenis = new Lenis({
//       duration: 0.8, // Reduced from 1.2 for faster scroll
//       easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
//       smooth: true,
//       smoothTouch: false,
//       wheelMultiplier: 1.2, // Faster wheel response
//     });

//     function raf(time) {
//       lenis.raf(time);
//       requestAnimationFrame(raf);
//     }

//     requestAnimationFrame(raf);

//     return () => {
//       lenis.destroy();
//     };
//   }, []);

  return (
    <div className="App" style={{ position: 'relative' }}>
      {/* Global Visual Effects */}
      <StarField />
      <ScrollProgress />
      <CursorTrail />
      <LanguageSwitcher />
      
      {/* Sections */}
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
