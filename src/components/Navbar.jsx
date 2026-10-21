// import React, { useState, useEffect, useRef } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { FiMenu, FiX, FiArrowUpRight } from 'react-icons/fi';

// const NAV_ITEMS = [
//   { id: 'home', label: 'Home', path: '/' },
//   { id: 'about', label: 'About', path: '/about' },
//   { id: 'skills', label: 'Skills', path: '/skills' },
//   { id: 'services', label: 'Services', path: '/services' },
//   { id: 'projects', label: 'Projects', path: '/projects' },
//   { id: 'process', label: 'Process', path: '/process' },
//   { id: 'contact', label: 'Contact', path: '/contact' }
// ];

// const Navbar = ({ activeSection, onNavigate }) => {
//   const [scrolled, setScrolled] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const navRef = useRef(null);
//   const location = useLocation();

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 30);
//     };
//     window.addEventListener('scroll', handleScroll, { passive: true });
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Close mobile dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (menuOpen && navRef.current && !navRef.current.contains(e.target)) {
//         setMenuOpen(false);
//       }
//     };
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, [menuOpen]);

//   // Close mobile menu whenever route changes
//   useEffect(() => {
//     setMenuOpen(false);
//   }, [location.pathname]);

//   const handleLinkClick = (item) => {
//     setMenuOpen(false);
//     if (onNavigate) {
//       onNavigate(item.id, item.path);
//     }
//   };

//   // Determine active state from either prop or current router pathname
//   const isItemActive = (item) => {
//     if (activeSection) {
//       return activeSection === item.id;
//     }
//     return location.pathname === item.path;
//   };

//   return (
//     <>
//       <style>{`
//         .navbar-wrapper {
//           position: fixed;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 76px; /* Fixed height prevents vertical resize/jump */
//           z-index: 1000;
//           display: flex;
//           align-items: center;
//           background: rgba(7, 8, 9, 0.45);
//           border-bottom: 1px solid transparent; /* Pre-allocated border prevents 1px shift */
//           transition: background-color 0.25s ease, border-color 0.25s ease, backdrop-filter 0.25s ease;
//           box-sizing: border-box;
//         }

//         .navbar-wrapper.navbar-scrolled {
//           background: rgba(7, 8, 9, 0.9);
//           backdrop-filter: blur(14px);
//           -webkit-backdrop-filter: blur(14px);
//           border-bottom-color: rgba(255, 255, 255, 0.08);
//         }

//         .navbar-inner {
//           width: 100%;
//           max-width: 1320px;
//           margin: 0 auto;
//           padding: 0 24px;
//           height: 100%;
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           gap: 20px;
//           box-sizing: border-box;
//         }

//         .brand-logo {
//           display: inline-flex;
//           align-items: center;
//           gap: 10px;
//           font-size: 1.05rem;
//           color: #f7f4ed;
//           text-decoration: none;
//           flex-shrink: 0;
//           white-space: nowrap;
//         }

//         .brand-avatar {
//           width: 36px;
//           height: 36px;
//           border-radius: 50%;
//           background: linear-gradient(135deg, #ffd166, #f5a623);
//           color: #08090c;
//           font-weight: 800;
//           font-size: 0.85rem;
//           display: inline-flex;
//           align-items: center;
//           justify-content: center;
//           box-shadow: 0 0 16px rgba(245, 166, 35, 0.35);
//           flex-shrink: 0;
//         }

//         .brand-text {
//           font-weight: 500;
//           letter-spacing: -0.01em;
//         }

//         .brand-text strong {
//           color: #f5a623;
//           font-weight: 700;
//           margin-left: 2px;
//         }

//         .desktop-nav {
//           background: rgba(18, 20, 24, 0.9);
//           border: 1px solid rgba(255, 255, 255, 0.08);
//           border-radius: 999px;
//           padding: 5px 6px;
//           flex-shrink: 0;
//         }

//         .nav-list {
//           display: flex;
//           align-items: center;
//           gap: 4px;
//           list-style: none;
//           margin: 0;
//           padding: 0;
//         }

//         .nav-link {
//           display: inline-flex;
//           align-items: center;
//           justify-content: center;
//           padding: 7px 15px;
//           border-radius: 999px;
//           font-size: 0.86rem;
//           font-weight: 600; /* Constant font-weight prevents text width jitter */
//           line-height: 1.2;
//           color: #9ca3af;
//           text-decoration: none;
//           border: 1px solid transparent; /* Pre-allocated 1px border stops layout shift on active */
//           transition: color 0.2s ease, background-color 0.2s ease, border-color 0.2s ease;
//           white-space: nowrap;
//           box-sizing: border-box;
//         }

//         .nav-link:hover {
//           color: #f7f4ed;
//         }

//         .nav-link.active {
//           background: rgba(245, 166, 35, 0.16);
//           color: #ffd166;
//           border-color: rgba(245, 166, 35, 0.38);
//         }

//         .nav-actions {
//           display: flex;
//           align-items: center;
//           gap: 12px;
//           flex-shrink: 0;
//         }

//         .nav-cta {
//           display: inline-flex;
//           align-items: center;
//           justify-content: center;
//           gap: 8px;
//           background: rgba(245, 166, 35, 0.08);
//           color: #f7f4ed;
//           font-weight: 600;
//           font-size: 0.88rem;
//           line-height: 1;
//           height: 40px;
//           padding: 0 20px;
//           border-radius: 999px;
//           border: 1px solid rgba(245, 166, 35, 0.38);
//           text-decoration: none;
//           white-space: nowrap;
//           transition: background-color 0.25s ease, color 0.25s ease, transform 0.25s ease;
//           box-sizing: border-box;
//         }

//         .nav-cta:hover {
//           background: #f5a623;
//           color: #090a0c;
//           transform: translateY(-1px);
//         }

//         .icon-inline {
//           flex-shrink: 0;
//         }

//         .mobile-menu-toggle {
//           display: none;
//           background: #121418;
//           border: 1px solid rgba(255, 255, 255, 0.08);
//           color: #f7f4ed;
//           width: 42px;
//           height: 42px;
//           border-radius: 10px;
//           align-items: center;
//           justify-content: center;
//           cursor: pointer;
//           padding: 0;
//           flex-shrink: 0;
//           transition: border-color 0.2s ease, color 0.2s ease;
//         }

//         .mobile-menu-toggle:hover {
//           border-color: rgba(245, 166, 35, 0.45);
//           color: #ffd166;
//         }

//         /* Mobile Dropdown Positioned Absolutely Below Fixed 76px Header */
//         .mobile-dropdown {
//           position: absolute;
//           top: 76px;
//           left: 0;
//           width: 100%;
//           background: rgba(14, 16, 20, 0.98);
//           backdrop-filter: blur(16px);
//           -webkit-backdrop-filter: blur(16px);
//           border-bottom: 1px solid rgba(255, 255, 255, 0.08);
//           padding: 18px 24px 24px;
//           box-sizing: border-box;
//           opacity: 0;
//           visibility: hidden;
//           transform: translateY(-8px);
//           pointer-events: none;
//           transition: opacity 0.22s ease, transform 0.22s ease, visibility 0.22s ease;
//         }

//         .mobile-dropdown.open {
//           opacity: 1;
//           visibility: visible;
//           transform: translateY(0);
//           pointer-events: auto;
//         }

//         .mobile-nav-list {
//           display: flex;
//           flex-direction: column;
//           gap: 6px;
//           list-style: none;
//           margin: 0 0 16px 0;
//           padding: 0;
//         }

//         .mobile-nav-link {
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           padding: 12px 14px;
//           border-radius: 10px;
//           font-size: 0.94rem;
//           font-weight: 600;
//           color: #9ca3af;
//           text-decoration: none;
//           border: 1px solid transparent;
//           transition: background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease;
//           box-sizing: border-box;
//         }

//         .mobile-nav-link.active,
//         .mobile-nav-link:hover {
//           background: rgba(245, 166, 35, 0.12);
//           color: #ffd166;
//           border-color: rgba(245, 166, 35, 0.28);
//         }

//         .mobile-dropdown-footer {
//           width: 100%;
//         }

//         .mobile-cta-btn {
//           display: inline-flex;
//           align-items: center;
//           justify-content: center;
//           gap: 10px;
//           width: 100%;
//           background: linear-gradient(135deg, #ffd166 0%, #f5a623 55%, #c98209 100%);
//           color: #090a0c;
//           font-weight: 700;
//           font-size: 0.92rem;
//           padding: 13px 24px;
//           border-radius: 999px;
//           border: none;
//           text-decoration: none;
//           box-sizing: border-box;
//           box-shadow: 0 8px 24px rgba(245, 166, 35, 0.25);
//         }

//         @media (max-width: 1024px) {
//           .desktop-nav {
//             display: none;
//           }
//           .mobile-menu-toggle {
//             display: inline-flex;
//           }
//         }

//         @media (max-width: 768px) {
//           .nav-cta {
//             display: none;
//           }
//         }

//         @media (max-width: 420px) {
//           .navbar-inner {
//             padding: 0 16px;
//           }
//           .mobile-dropdown {
//             padding: 16px;
//           }
//         }
//       `}</style>

//       <header className={`navbar-wrapper ${scrolled ? 'navbar-scrolled' : ''}`} ref={navRef}>
//         <div className="navbar-inner">
//           <Link
//             to="/"
//             className="brand-logo"
//             onClick={() => handleLinkClick({ id: 'home', path: '/' })}
//             aria-label="Awais Mughal Home"
//           >
//             {/* <span className="brand-avatar">AM</span> */}
//             <span className="brand-text">
//               Awais<strong>Mughal</strong>
//             </span>
//           </Link>

//           <nav className="desktop-nav" aria-label="Primary Navigation">
//             <ul className="nav-list">
//               {NAV_ITEMS.map((item) => (
//                 <li key={item.id}>
//                   <Link
//                     to={item.path}
//                     className={`nav-link ${isItemActive(item) ? 'active' : ''}`}
//                     onClick={() => handleLinkClick(item)}
//                   >
//                     {item.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </nav>

//           <div className="nav-actions">
//             <Link
//               to="/contact"
//               className="nav-cta"
//               onClick={() => handleLinkClick({ id: 'contact', path: '/contact' })}
//             >
//               <span>Let&apos;s talk</span>
//               <FiArrowUpRight className="icon-inline" />
//             </Link>

//             <button
//               type="button"
//               className="mobile-menu-toggle"
//               aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
//               aria-expanded={menuOpen}
//               onClick={() => setMenuOpen((prev) => !prev)}
//             >
//               {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Dropdown Menu */}
//         <div className={`mobile-dropdown ${menuOpen ? 'open' : ''}`}>
//           <ul className="mobile-nav-list">
//             {NAV_ITEMS.map((item) => (
//               <li key={item.id}>
//                 <Link
//                   to={item.path}
//                   className={`mobile-nav-link ${isItemActive(item) ? 'active' : ''}`}
//                   onClick={() => handleLinkClick(item)}
//                 >
//                   <span>{item.label}</span>
//                   <FiArrowUpRight size={16} />
//                 </Link>
//               </li>
//             ))}
//           </ul>
//           <div className="mobile-dropdown-footer">
//             <Link
//               to="/contact"
//               className="mobile-cta-btn"
//               onClick={() => handleLinkClick({ id: 'contact', path: '/contact' })}
//             >
//               <span>Let&apos;s Talk Now</span>
//               <FiArrowUpRight size={18} />
//             </Link>
//           </div>
//         </div>
//       </header>
//     </>
//   );
// };

// export default Navbar;





import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiArrowUpRight } from 'react-icons/fi';

const NAV_ITEMS = [
  { id: 'home', label: 'Home', path: '/' },
  { id: 'about', label: 'About', path: '/about' },
  { id: 'skills', label: 'Skills', path: '/skills' },
  { id: 'services', label: 'Services', path: '/services' },
  { id: 'projects', label: 'Projects', path: '/projects' },
  { id: 'process', label: 'Process', path: '/process' },
  { id: 'contact', label: 'Contact', path: '/contact' }
];

const Navbar = ({ activeSection, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuOpen && navRef.current && !navRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

  // Close mobile menu whenever route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const handleLinkClick = (item) => {
    setMenuOpen(false);
    if (onNavigate) {
      onNavigate(item.id, item.path);
    }
  };

  // Determine active state from either prop or current router pathname
  const isItemActive = (item) => {
    if (activeSection) {
      return activeSection === item.id;
    }
    return location.pathname === item.path;
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Mrs+Saint+Delafield&display=swap');

        .navbar-wrapper {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 76px; /* Fixed height prevents vertical resize/jump */
          z-index: 1000;
          display: flex;
          align-items: center;
          background: rgba(7, 8, 9, 0.45);
          border-bottom: 1px solid transparent; /* Pre-allocated border prevents 1px shift */
          transition: background-color 0.25s ease, border-color 0.25s ease, backdrop-filter 0.25s ease;
          box-sizing: border-box;
        }

        .navbar-wrapper.navbar-scrolled {
          background: rgba(7, 8, 9, 0.9);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border-bottom-color: rgba(255, 255, 255, 0.08);
        }

        .navbar-inner {
          width: 100%;
          max-width: 1320px;
          margin: 0 auto;
          padding: 0 24px;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          box-sizing: border-box;
        }

        /* =========================================================
           SIGNATURE BRAND
           ========================================================= */
        .brand-logo {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: #f7f4ed;
          text-decoration: none;
          flex-shrink: 0;
          white-space: nowrap;
        }

        .brand-avatar {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: linear-gradient(135deg, #ffd166, #f5a623);
          color: #08090c;
          font-weight: 800;
          font-size: 0.85rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 16px rgba(245, 166, 35, 0.35);
          flex-shrink: 0;
        }

        .brand-text {
          display: inline-block;
          font-family: 'Mrs Saint Delafield', 'Brush Script MT', 'Segoe Script', cursive;
          font-size: 2.35rem;
          font-weight: 400;
          line-height: 1;
          letter-spacing: 0.01em;
          color: #f7f4ed;
          padding: 4px 6px 12px 2px;
          transform: rotate(-3deg);
          transform-origin: left center;
          text-shadow: 0 2px 14px rgba(245, 166, 35, 0.18);
          transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), text-shadow 0.35s ease;
        }

        .brand-text strong {
          font-weight: 400; /* script font has one weight; avoids fake bold */
          margin-left: 4px;
          background: linear-gradient(135deg, #ffd166 0%, #f5a623 55%, #c98209 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: #f5a623;
        }

        .brand-logo:hover .brand-text {
          transform: rotate(-3deg) scale(1.04);
          text-shadow: 0 2px 20px rgba(245, 166, 35, 0.4);
        }

        /* Hand-drawn flourish under the signature */
        .brand-flourish {
          position: absolute;
          left: 4px;
          bottom: 2px;
          width: calc(100% - 8px);
          height: 12px;
          overflow: visible;
          pointer-events: none;
        }

        .brand-flourish path {
          fill: none;
          stroke: url(#brandFlourishGradient);
          stroke-width: 1.8;
          stroke-linecap: round;
          stroke-dasharray: 1;
          stroke-dashoffset: 1;
          animation: drawFlourish 1.4s cubic-bezier(0.65, 0, 0.35, 1) 0.4s forwards;
        }

        @keyframes drawFlourish {
          to {
            stroke-dashoffset: 0;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .brand-flourish path {
            animation: none;
            stroke-dashoffset: 0;
          }
          .brand-text {
            transition: none;
          }
        }

        /* =========================================================
           DESKTOP NAV
           ========================================================= */
        .desktop-nav {
          background: rgba(18, 20, 24, 0.9);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 999px;
          padding: 5px 6px;
          flex-shrink: 0;
        }

        .nav-list {
          display: flex;
          align-items: center;
          gap: 4px;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .nav-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 7px 15px;
          border-radius: 999px;
          font-size: 0.86rem;
          font-weight: 600; /* Constant font-weight prevents text width jitter */
          line-height: 1.2;
          color: #9ca3af;
          text-decoration: none;
          border: 1px solid transparent; /* Pre-allocated 1px border stops layout shift on active */
          transition: color 0.2s ease, background-color 0.2s ease, border-color 0.2s ease;
          white-space: nowrap;
          box-sizing: border-box;
        }

        .nav-link:hover {
          color: #f7f4ed;
        }

        .nav-link.active {
          background: rgba(245, 166, 35, 0.16);
          color: #ffd166;
          border-color: rgba(245, 166, 35, 0.38);
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-shrink: 0;
        }

        .nav-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background: rgba(245, 166, 35, 0.08);
          color: #f7f4ed;
          font-weight: 600;
          font-size: 0.88rem;
          line-height: 1;
          height: 40px;
          padding: 0 20px;
          border-radius: 999px;
          border: 1px solid rgba(245, 166, 35, 0.38);
          text-decoration: none;
          white-space: nowrap;
          transition: background-color 0.25s ease, color 0.25s ease, transform 0.25s ease;
          box-sizing: border-box;
        }

        .nav-cta:hover {
          background: #f5a623;
          color: #090a0c;
          transform: translateY(-1px);
        }

        .icon-inline {
          flex-shrink: 0;
        }

        .mobile-menu-toggle {
          display: none;
          background: #121418;
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: #f7f4ed;
          width: 42px;
          height: 42px;
          border-radius: 10px;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          padding: 0;
          flex-shrink: 0;
          transition: border-color 0.2s ease, color 0.2s ease;
        }

        .mobile-menu-toggle:hover {
          border-color: rgba(245, 166, 35, 0.45);
          color: #ffd166;
        }

        /* Mobile Dropdown Positioned Absolutely Below Fixed 76px Header */
        .mobile-dropdown {
          position: absolute;
          top: 76px;
          left: 0;
          width: 100%;
          background: rgba(14, 16, 20, 0.98);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          padding: 18px 24px 24px;
          box-sizing: border-box;
          opacity: 0;
          visibility: hidden;
          transform: translateY(-8px);
          pointer-events: none;
          transition: opacity 0.22s ease, transform 0.22s ease, visibility 0.22s ease;
        }

        .mobile-dropdown.open {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
          pointer-events: auto;
        }

        .mobile-nav-list {
          display: flex;
          flex-direction: column;
          gap: 6px;
          list-style: none;
          margin: 0 0 16px 0;
          padding: 0;
        }

        .mobile-nav-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 14px;
          border-radius: 10px;
          font-size: 0.94rem;
          font-weight: 600;
          color: #9ca3af;
          text-decoration: none;
          border: 1px solid transparent;
          transition: background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease;
          box-sizing: border-box;
        }

        .mobile-nav-link.active,
        .mobile-nav-link:hover {
          background: rgba(245, 166, 35, 0.12);
          color: #ffd166;
          border-color: rgba(245, 166, 35, 0.28);
        }

        .mobile-dropdown-footer {
          width: 100%;
        }

        .mobile-cta-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          width: 100%;
          background: linear-gradient(135deg, #ffd166 0%, #f5a623 55%, #c98209 100%);
          color: #090a0c;
          font-weight: 700;
          font-size: 0.92rem;
          padding: 13px 24px;
          border-radius: 999px;
          border: none;
          text-decoration: none;
          box-sizing: border-box;
          box-shadow: 0 8px 24px rgba(245, 166, 35, 0.25);
        }

        /* =========================================================
           RESPONSIVE
           ========================================================= */
        @media (max-width: 1024px) {
          .desktop-nav {
            display: none;
          }
          .mobile-menu-toggle {
            display: inline-flex;
          }
        }

        @media (max-width: 768px) {
          .nav-cta {
            display: none;
          }
          .brand-text {
            font-size: 2.15rem;
          }
        }

        @media (max-width: 420px) {
          .navbar-inner {
            padding: 0 16px;
          }
          .mobile-dropdown {
            padding: 16px;
          }
          .brand-text {
            font-size: 1.95rem;
          }
        }

        @media (max-width: 360px) {
          .brand-text {
            font-size: 1.75rem;
          }
        }
      `}</style>

      <header className={`navbar-wrapper ${scrolled ? 'navbar-scrolled' : ''}`} ref={navRef}>
        <div className="navbar-inner">
          <Link
            to="/"
            className="brand-logo"
            onClick={() => handleLinkClick({ id: 'home', path: '/' })}
            aria-label="Awais Mughal Home"
          >
            {/* <span className="brand-avatar">AM</span> */}
            <span className="brand-text">
              Awais <strong>Mughal</strong>
            </span>

            {/* Signature flourish */}
            <svg
              className="brand-flourish"
              viewBox="0 0 220 12"
              preserveAspectRatio="none"
              aria-hidden="true"
              focusable="false"
            >
              <defs>
                <linearGradient id="brandFlourishGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ffd166" stopOpacity="0" />
                  <stop offset="25%" stopColor="#ffd166" />
                  <stop offset="70%" stopColor="#f5a623" />
                  <stop offset="100%" stopColor="#c98209" stopOpacity="0.2" />
                </linearGradient>
              </defs>
              <path
                pathLength="1"
                d="M2 9 C 30 3, 70 10, 110 6 S 180 2, 218 7"
              />
            </svg>
          </Link>

          <nav className="desktop-nav" aria-label="Primary Navigation">
            <ul className="nav-list">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.path}
                    className={`nav-link ${isItemActive(item) ? 'active' : ''}`}
                    onClick={() => handleLinkClick(item)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="nav-actions">
            <Link
              to="/contact"
              className="nav-cta"
              onClick={() => handleLinkClick({ id: 'contact', path: '/contact' })}
            >
              <span>Let&apos;s talk</span>
              <FiArrowUpRight className="icon-inline" />
            </Link>

            <button
              type="button"
              className="mobile-menu-toggle"
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div className={`mobile-dropdown ${menuOpen ? 'open' : ''}`}>
          <ul className="mobile-nav-list">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.path}
                  className={`mobile-nav-link ${isItemActive(item) ? 'active' : ''}`}
                  onClick={() => handleLinkClick(item)}
                >
                  <span>{item.label}</span>
                  <FiArrowUpRight size={16} />
                </Link>
              </li>
            ))}
          </ul>
          <div className="mobile-dropdown-footer">
            <Link
              to="/contact"
              className="mobile-cta-btn"
              onClick={() => handleLinkClick({ id: 'contact', path: '/contact' })}
            >
              <span>Let&apos;s Talk Now</span>
              <FiArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;