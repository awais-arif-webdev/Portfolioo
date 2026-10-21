import React, { useState, useEffect, useCallback } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Projects from './components/Projects';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';

const SECTION_PATHS = {
  home: '/',
  about: '/about',
  skills: '/skills',
  services: '/services',
  projects: '/projects',
  process: '/process',
  contact: '/contact'
};

const PATH_TO_SECTION = {
  '/': 'home',
  '/about': 'about',
  '/skills': 'skills',
  '/services': 'services',
  '/projects': 'projects',
  '/process': 'process',
  '/contact': 'contact'
};

function App() {
  const [activeSection, setActiveSection] = useState('home');

  // Smooth scroll to section and update browser URL without page reload
  const handleNavigate = useCallback((sectionId, path, pushHistory = true) => {
    const targetEl = document.getElementById(sectionId);
    if (targetEl) {
      const navOffset = 76;
      const elementPosition = targetEl.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: sectionId === 'home' ? 0 : elementPosition - navOffset,
        behavior: 'smooth'
      });
    }

    setActiveSection(sectionId);

    if (pushHistory && window.location.pathname !== path) {
      window.history.pushState({ sectionId }, '', path);
    }
  }, []);

  // Handle initial URL path and browser Back/Forward buttons
  useEffect(() => {
    const syncFromLocation = () => {
      const cleanPath = window.location.pathname.replace(/\/+$/, '') || '/';
      const matchedSection = PATH_TO_SECTION[cleanPath] || 'home';
      setActiveSection(matchedSection);

      if (matchedSection !== 'home') {
        setTimeout(() => {
          const el = document.getElementById(matchedSection);
          if (el) {
            const top = el.getBoundingClientRect().top + window.scrollY - 76;
            window.scrollTo({ top, behavior: 'smooth' });
          }
        }, 100);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    syncFromLocation();
    window.addEventListener('popstate', syncFromLocation);
    return () => window.removeEventListener('popstate', syncFromLocation);
  }, []);

  // Scroll Spy: update active link & URL path smoothly as user scrolls
  useEffect(() => {
    const sectionIds = Object.keys(SECTION_PATHS);

    const handleScrollSpy = () => {
      const scrollPos = window.scrollY + 240;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection((prev) => {
              if (prev !== id) {
                const newPath = SECTION_PATHS[id] || '/';
                window.history.replaceState({ sectionId: id }, '', newPath);
              }
              return id;
            });
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollSpy, { passive: true });
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  // Viewport entrance reveal animations
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal-up');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        :root {
          --bg-primary: #070809;
          --bg-secondary: #0d0e11;
          --bg-card: #121418;
          --bg-card-hover: #171a20;
          --border-subtle: rgba(255, 255, 255, 0.08);
          --border-gold: rgba(245, 166, 35, 0.38);
          --gold-primary: #f5a623;
          --gold-light: #ffd166;
          --gold-dark: #c98209;
          --text-main: #f7f4ed;
          --text-muted: #9ca3af;
          --text-dim: #6b7280;
          --font-display: 'Syne', sans-serif;
          --font-sans: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
          --transition-smooth: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
          background-color: var(--bg-primary);
          color: var(--text-main);
          font-family: var(--font-sans);
          overflow-x: hidden;
        }

        body {
          background-color: var(--bg-primary);
          color: var(--text-main);
          line-height: 1.6;
          overflow-x: hidden;
          -webkit-font-smoothing: antialiased;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        ul {
          list-style: none;
        }

        img {
          max-width: 100%;
          display: block;
        }

        button, input, textarea {
          font-family: inherit;
        }

        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          border: 0;
        }

        .container {
          width: 100%;
          max-width: 1320px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .section-padding {
          padding: 100px 0;
          position: relative;
        }

        .gold-highlight {
          color: var(--gold-primary);
        }

        .pulse-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #22c55e;
          box-shadow: 0 0 10px #22c55e;
          animation: pulseAnim 2s infinite;
        }

        @keyframes pulseAnim {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.25); opacity: 0.65; }
        }

        /* REVEAL ANIMATION */
        .reveal-up {
          opacity: 0;
          transform: translateY(26px);
          transition: opacity 0.65s ease, transform 0.65s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .reveal-up.revealed {
          opacity: 1;
          transform: translateY(0);
        }

        @media (prefers-reduced-motion: reduce) {
          .reveal-up {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }
        }

        /* SHARED BUTTONS & SOCIAL ICONS */
        .btn-gold-solid {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          background: linear-gradient(135deg, var(--gold-light) 0%, var(--gold-primary) 55%, var(--gold-dark) 100%);
          color: #090a0c;
          font-weight: 700;
          font-size: 0.92rem;
          padding: 13px 26px;
          border-radius: 999px;
          border: none;
          cursor: pointer;
          transition: var(--transition-smooth);
          box-shadow: 0 8px 24px rgba(245, 166, 35, 0.25);
        }

        .btn-gold-solid:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(245, 166, 35, 0.4);
        }

        .btn-gold-outline {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background: rgba(245, 166, 35, 0.08);
          color: var(--text-main);
          font-weight: 600;
          font-size: 0.9rem;
          padding: 11px 22px;
          border-radius: 999px;
          border: 1px solid var(--border-gold);
          cursor: pointer;
          transition: var(--transition-smooth);
        }

        .btn-gold-outline:hover {
          background: var(--gold-primary);
          color: #090a0c;
          transform: translateY(-2px);
        }

        .btn-dark-pill {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background: var(--bg-card);
          color: var(--text-main);
          font-weight: 600;
          font-size: 0.92rem;
          padding: 13px 26px;
          border-radius: 999px;
          border: 1px solid var(--border-subtle);
          transition: var(--transition-smooth);
        }

        .btn-dark-pill:hover {
          border-color: var(--gold-primary);
          color: var(--gold-primary);
          transform: translateY(-2px);
        }

        .social-icon-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: var(--text-muted);
          transition: var(--transition-smooth);
        }

        .social-icon-btn:hover {
          color: #090a0c;
          background: var(--gold-primary);
          border-color: var(--gold-primary);
          transform: translateY(-2px);
        }

        .w-full {
          width: 100%;
        }

        /* SECTION HEADERS */
        .section-eyebrow {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--gold-primary);
          margin-bottom: 10px;
        }

        .section-heading {
          font-family: var(--font-display);
          font-size: clamp(1.85rem, 3.4vw, 2.85rem);
          font-weight: 800;
          line-height: 1.08;
          letter-spacing: -0.02em;
          color: var(--text-main);
        }

        .section-header-split {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 32px;
          margin-bottom: 48px;
          flex-wrap: wrap;
        }

        .section-subtitle {
          color: var(--text-muted);
          max-width: 460px;
          font-size: 0.96rem;
        }

        .header-right-block {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 16px;
        }

        /* SERVICES SECTION */
        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .service-card {
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          border-radius: 16px;
          overflow: hidden;
          transition: var(--transition-smooth);
          display: flex;
          flex-direction: column;
        }

        .service-card:hover {
          transform: translateY(-6px);
          border-color: var(--border-gold);
          box-shadow: 0 18px 36px rgba(0, 0, 0, 0.45);
        }

        .service-thumb-wrap {
          position: relative;
          height: 190px;
          overflow: hidden;
        }

        .service-thumb {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .service-card:hover .service-thumb {
          transform: scale(1.06);
        }

        .service-icon-floating {
          position: absolute;
          bottom: 12px;
          right: 12px;
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: rgba(9, 10, 12, 0.88);
          border: 1px solid var(--border-gold);
          color: var(--gold-primary);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .service-card-body {
          padding: 22px;
          flex: 1;
        }

        .service-title {
          font-family: var(--font-display);
          font-size: 1.15rem;
          margin-bottom: 8px;
          color: var(--text-main);
        }

        .service-desc {
          font-size: 0.88rem;
          color: var(--text-muted);
        }

        /* PROJECTS SECTION */
        .projects-section {
          background: var(--bg-secondary);
          border-top: 1px solid var(--border-subtle);
          border-bottom: 1px solid var(--border-subtle);
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .project-card {
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          border-radius: 16px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          height: 100%;
          transition: var(--transition-smooth);
        }

        .project-card:hover {
          transform: translateY(-6px);
          border-color: var(--border-gold);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.55);
        }

        .project-image-box {
          aspect-ratio: 16 / 10;
          width: 100%;
          overflow: hidden;
          background: #090a0d;
          border-bottom: 1px solid var(--border-subtle);
        }

        .project-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .project-card:hover .project-image {
          transform: scale(1.05);
        }

        .project-content {
          padding: 22px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .project-category-row {
          margin-bottom: 8px;
        }

        .project-cat-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: var(--gold-primary);
        }

        .project-heading-row {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 10px;
        }

        .project-title {
          font-family: var(--font-display);
          font-size: 1.15rem;
          line-height: 1.28;
          color: var(--text-main);
        }

        .project-heading-icon {
          width: 34px;
          height: 34px;
          border-radius: 8px;
          background: rgba(245, 166, 35, 0.1);
          border: 1px solid rgba(245, 166, 35, 0.3);
          color: var(--gold-primary);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: var(--transition-smooth);
        }

        .project-heading-icon:hover {
          background: var(--gold-primary);
          color: #090a0c;
        }

        .project-description {
          font-size: 0.87rem;
          color: var(--text-muted);
          margin-bottom: 16px;
          flex: 1;
        }

        .project-tech-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 18px;
        }

        .tech-badge {
          font-size: 0.72rem;
          padding: 4px 10px;
          border-radius: 6px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-subtle);
          color: var(--text-main);
        }

        .project-links-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 14px;
          border-top: 1px solid var(--border-subtle);
        }

        .project-link-primary {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.84rem;
          font-weight: 700;
          color: var(--gold-primary);
        }

        .project-link-primary:hover {
          color: var(--gold-light);
        }

        .project-link-secondary {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.82rem;
          color: var(--text-muted);
        }

        .project-link-secondary:hover {
          color: var(--text-main);
        }

        /* PROCESS & TESTIMONIALS */
        .process-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-bottom: 90px;
        }

        .process-card {
          position: relative;
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          border-radius: 16px;
          padding: 26px 22px;
          transition: var(--transition-smooth);
        }

        .process-card:hover {
          border-color: var(--border-gold);
          transform: translateY(-4px);
        }

        .process-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
        }

        .process-icon-box {
          width: 42px;
          height: 42px;
          border-radius: 10px;
          background: rgba(245, 166, 35, 0.12);
          color: var(--gold-primary);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .process-number {
          font-family: var(--font-display);
          font-size: 1.5rem;
          font-weight: 800;
          color: rgba(255, 255, 255, 0.18);
        }

        .process-title {
          font-family: var(--font-display);
          font-size: 1.15rem;
          margin-bottom: 8px;
        }

        .process-desc {
          font-size: 0.86rem;
          color: var(--text-muted);
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .testimonial-card {
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          border-radius: 16px;
          padding: 26px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .stars-row {
          display: flex;
          gap: 4px;
          color: var(--gold-primary);
          margin-bottom: 14px;
        }

        .star-filled {
          fill: var(--gold-primary);
        }

        .testimonial-quote {
          font-size: 0.9rem;
          color: var(--text-muted);
          margin-bottom: 20px;
          flex: 1;
        }

        .testimonial-author {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .author-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(245, 166, 35, 0.16);
          border: 1px solid var(--border-gold);
          color: var(--gold-light);
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .author-name {
          font-size: 0.92rem;
          color: var(--text-main);
        }

        .author-role {
          font-size: 0.76rem;
          color: var(--text-dim);
        }

        /* =========================================================
           RESPONSIVE BREAKPOINTS FOR REMAINING SECTIONS
           ========================================================= */
        @media (max-width: 1024px) {
          .services-grid,
          .projects-grid,
          .testimonials-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .process-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .section-padding {
            padding: 72px 0;
          }
          .services-grid,
          .projects-grid,
          .process-grid,
          .testimonials-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 420px) {
          .container {
            padding: 0 16px;
          }
        }
      `}</style>

      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />
      <main>
        <Hero onNavigate={handleNavigate} />
        <About onNavigate={handleNavigate} />
        <Skills />
        <Services onNavigate={handleNavigate} />
        <Projects />
        <Process />
        <Contact />
      </main>
      <Footer onNavigate={handleNavigate} />
    </>
  );
}

export default App;