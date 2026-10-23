// // import React, { useState, useEffect, useRef } from "react";
// // import { Link } from "react-router-dom";
// // import {
// //   FiGithub,
// //   FiLinkedin,
// //   FiMail,
// //   FiArrowUpRight,
// //   FiCode,
// // } from "react-icons/fi";
// // import { marqueeTools } from "../data/skills";

// // const Hero = ({ onNavigate }) => {
// //   // Normalized mouse coordinates (-1 to 1)
// //   const [mouse, setMouse] = useState({ x: 0, y: 0 });
// //   const [isBlinking, setIsBlinking] = useState(false);
// //   const heroRef = useRef(null);
// //   const rafRef = useRef(null);
// //   const targetMouse = useRef({ x: 0, y: 0 });

// //   // Smooth spring-like interpolation loop for face & head rotation
// //   useEffect(() => {
// //     let currentX = 0;
// //     let currentY = 0;

// //     const animateFace = () => {
// //       currentX += (targetMouse.current.x - currentX) * 0.1;
// //       currentY += (targetMouse.current.y - currentY) * 0.1;
// //       setMouse({ x: currentX, y: currentY });
// //       rafRef.current = requestAnimationFrame(animateFace);
// //     };

// //     rafRef.current = requestAnimationFrame(animateFace);
// //     return () => {
// //       if (rafRef.current) cancelAnimationFrame(rafRef.current);
// //     };
// //   }, []);

// //   // Natural blinking interval
// //   useEffect(() => {
// //     const blinkInterval = setInterval(() => {
// //       setIsBlinking(true);
// //       setTimeout(() => setIsBlinking(false), 160);
// //     }, 3800);
// //     return () => clearInterval(blinkInterval);
// //   }, []);

// //   const handleMouseMove = (e) => {
// //     if (!heroRef.current) return;
// //     const rect = heroRef.current.getBoundingClientRect();
// //     const centerX = rect.left + rect.width / 2;
// //     const centerY = rect.top + rect.height / 2;
// //     const normX = Math.max(
// //       -1,
// //       Math.min(1, (e.clientX - centerX) / (rect.width / 2)),
// //     );
// //     const normY = Math.max(
// //       -1,
// //       Math.min(1, (e.clientY - centerY) / (rect.height / 2)),
// //     );
// //     targetMouse.current = { x: normX, y: normY };
// //   };

// //   const handleTouchMove = (e) => {
// //     if (!heroRef.current || !e.touches[0]) return;
// //     const touch = e.touches[0];
// //     const rect = heroRef.current.getBoundingClientRect();
// //     const centerX = rect.left + rect.width / 2;
// //     const centerY = rect.top + rect.height / 2;
// //     const normX = Math.max(
// //       -1,
// //       Math.min(1, (touch.clientX - centerX) / (rect.width / 2)),
// //     );
// //     const normY = Math.max(
// //       -1,
// //       Math.min(1, (touch.clientY - centerY) / (rect.height / 2)),
// //     );
// //     targetMouse.current = { x: normX, y: normY };
// //   };

// //   const handleMouseLeave = () => {
// //     targetMouse.current = { x: 0, y: 0 };
// //   };

// //   // Computed transforms for 3D head, facial features, eyes, and glasses
// //   const headRotateY = mouse.x * 22; // Left/Right head turn
// //   const headRotateX = -mouse.y * 14; // Up/Down head nod
// //   const headRotateZ = mouse.x * 4; // Subtle head tilt
// //   const faceShiftX = mouse.x * 14;
// //   const faceShiftY = mouse.y * 9;
// //   const pupilShiftX = mouse.x * 7.5;
// //   const pupilShiftY = mouse.y * 5.5;
// //   const shoulderShiftX = mouse.x * 6;

// //   return (
// //     <>
// //       <style>{`
// //         .hero-section {
// //           position: relative;
// //           min-height: 100vh;
// //           padding-top: 96px;
// //           display: flex;
// //           flex-direction: column;
// //           justify-content: space-between;
// //           overflow: hidden;
// //           background:
// //             radial-gradient(circle at 50% 24%, rgba(245, 166, 35, 0.14) 0%, rgba(7, 8, 9, 0) 58%),
// //             linear-gradient(180deg, #070809 0%, #0b0c0f 100%);
// //         }

// //         .hero-glow {
// //           position: absolute;
// //           width: 420px;
// //           height: 420px;
// //           border-radius: 50%;
// //           filter: blur(130px);
// //           pointer-events: none;
// //           z-index: 0;
// //         }

// //         .hero-glow-left {
// //           top: 12%;
// //           left: -120px;
// //           background: rgba(245, 166, 35, 0.12);
// //         }

// //         .hero-glow-right {
// //           bottom: 10%;
// //           right: -120px;
// //           background: rgba(212, 136, 6, 0.1);
// //         }

// //         .hero-container {
// //           position: relative;
// //           z-index: 2;
// //           flex: 1;
// //           display: flex;
// //           flex-direction: column;
// //           justify-content: center;
// //         }

// //         /* RESIZED POSTER TYPOGRAPHY SO IT FITS CLEANLY INSIDE SCREEN */
// //         .hero-giant-title-wrap {
// //           position: absolute;
// //           top: 3%;
// //           left: 0;
// //           width: 100%;
// //           padding: 0 20px;
// //           text-align: center;
// //           pointer-events: none;
// //           z-index: 1;
// //           user-select: none;
// //           transition: transform 0.12s ease-out;
// //           box-sizing: border-box;
// //         }

// //         .hero-giant-text {
// //           font-family: var(--font-display, 'Syne', sans-serif);
// //           font-weight: 800;
// //           font-size: clamp(2.2rem, 7.2vw, 6.2rem);
// //           line-height: 0.96;
// //           letter-spacing: -0.02em;
// //           text-transform: uppercase;
// //           background: linear-gradient(180deg, #fff5d6 0%, #f5b942 48%, #9e6308 100%);
// //           -webkit-background-clip: text;
// //           -webkit-text-fill-color: transparent;
// //           opacity: 0.92;
// //           display: inline-block;
// //           max-width: 100%;
// //           white-space: nowrap;
// //         }

// //         .hero-grid {
// //           position: relative;
// //           z-index: 3;
// //           display: grid;
// //           grid-template-columns: 1.05fr 1.3fr 0.95fr;
// //           align-items: flex-end;
// //           gap: 24px;
// //           margin-top: 64px;
// //           padding-bottom: 24px;
// //         }

// //         .hero-left {
// //           padding-bottom: 18px;
// //         }

// //         .availability-pill {
// //           display: inline-flex;
// //           align-items: center;
// //           gap: 8px;
// //           padding: 6px 14px;
// //           border-radius: 999px;
// //           background: rgba(245, 166, 35, 0.1);
// //           border: 1px solid rgba(245, 166, 35, 0.3);
// //           font-size: 0.74rem;
// //           font-weight: 700;
// //           letter-spacing: 0.08em;
// //           color: var(--gold-light, #ffd166);
// //           margin-bottom: 18px;
// //         }

// //         .hero-subheadline {
// //           font-family: var(--font-display, 'Syne', sans-serif);
// //           font-size: clamp(1.9rem, 3.1vw, 3rem);
// //           font-weight: 800;
// //           line-height: 1.04;
// //           letter-spacing: -0.02em;
// //           margin-bottom: 16px;
// //           color: var(--text-main, #f7f4ed);
// //         }

// //         .hero-description {
// //           color: var(--text-muted, #9ca3af);
// //           font-size: 0.95rem;
// //           max-width: 400px;
// //           margin-bottom: 24px;
// //         }

// //         .hero-cta-group {
// //           display: flex;
// //           flex-wrap: wrap;
// //           gap: 12px;
// //           margin-bottom: 24px;
// //         }

// //         .hero-socials {
// //           display: flex;
// //           align-items: center;
// //           gap: 10px;
// //         }

// //         /* CENTER CHARACTER */
// //         .hero-center {
// //           display: flex;
// //           justify-content: center;
// //           align-items: flex-end;
// //         }

// //         .character-stage {
// //           position: relative;
// //           width: 100%;
// //           max-width: 440px;
// //           display: flex;
// //           justify-content: center;
// //         }

// //         .character-halo {
// //           position: absolute;
// //           bottom: 12%;
// //           width: 310px;
// //           height: 310px;
// //           border-radius: 50%;
// //           background: radial-gradient(circle, rgba(245, 166, 35, 0.22) 0%, rgba(7, 8, 9, 0) 70%);
// //           z-index: 0;
// //           pointer-events: none;
// //         }

// //         .character-3d-wrapper {
// //           position: relative;
// //           z-index: 2;
// //           width: 100%;
// //           transition: transform 0.08s linear;
// //           will-change: transform;
// //         }

// //         .character-svg {
// //           width: 100%;
// //           height: auto;
// //           display: block;
// //           filter: drop-shadow(0 20px 35px rgba(0, 0, 0, 0.85));
// //         }

// //         .character-badge-floating {
// //           position: absolute;
// //           bottom: 14px;
// //           left: 50%;
// //           transform: translateX(-50%);
// //           background: rgba(13, 14, 17, 0.9);
// //           backdrop-filter: blur(8px);
// //           border: 1px solid rgba(245, 166, 35, 0.35);
// //           padding: 7px 15px;
// //           border-radius: 999px;
// //           display: inline-flex;
// //           align-items: center;
// //           gap: 8px;
// //           font-size: 0.75rem;
// //           color: var(--text-main, #f7f4ed);
// //           white-space: nowrap;
// //           box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
// //         }

// //         .gold-icon {
// //           color: var(--gold-primary, #f5a623);
// //         }

// //         /* RIGHT HERO CARD */
// //         .hero-right {
// //           padding-bottom: 18px;
// //           display: flex;
// //           justify-content: flex-end;
// //         }

// //         .hero-status-card {
// //           background: rgba(18, 20, 24, 0.85);
// //           border: 1px solid var(--border-subtle, rgba(255, 255, 255, 0.08));
// //           border-radius: 16px;
// //           padding: 22px;
// //           max-width: 320px;
// //           backdrop-filter: blur(10px);
// //         }

// //         .status-header {
// //           display: flex;
// //           align-items: center;
// //           gap: 8px;
// //           margin-bottom: 10px;
// //         }

// //         .status-title {
// //           font-size: 0.82rem;
// //           font-weight: 700;
// //           color: var(--gold-light, #ffd166);
// //           text-transform: uppercase;
// //           letter-spacing: 0.05em;
// //         }

// //         .status-body {
// //           font-size: 0.88rem;
// //           color: var(--text-muted, #9ca3af);
// //           margin-bottom: 16px;
// //         }

// //         .status-body strong {
// //           color: var(--text-main, #f7f4ed);
// //         }

// //         .hero-mini-metrics {
// //           display: grid;
// //           grid-template-columns: 1fr 1fr;
// //           gap: 12px;
// //           padding-top: 14px;
// //           border-top: 1px solid var(--border-subtle, rgba(255, 255, 255, 0.08));
// //         }

// //         .mini-metric-val {
// //           display: block;
// //           font-family: var(--font-display, 'Syne', sans-serif);
// //           font-weight: 800;
// //           font-size: 1.15rem;
// //           color: var(--gold-primary, #f5a623);
// //         }

// //         .mini-metric-lbl {
// //           font-size: 0.74rem;
// //           color: var(--text-muted, #9ca3af);
// //         }

// //         /* TOOLS STRIP */
// //         .hero-tools-strip {
// //           border-top: 1px solid var(--border-subtle, rgba(255, 255, 255, 0.08));
// //           border-bottom: 1px solid var(--border-subtle, rgba(255, 255, 255, 0.08));
// //           background: rgba(13, 14, 17, 0.9);
// //           padding: 22px 0;
// //           position: relative;
// //           z-index: 3;
// //         }

// //         .tools-strip-label {
// //           text-align: center;
// //           font-size: 0.7rem;
// //           letter-spacing: 0.16em;
// //           color: var(--text-dim, #6b7280);
// //           font-weight: 700;
// //           margin-bottom: 14px;
// //         }

// //         .tools-strip-list {
// //           display: flex;
// //           flex-wrap: wrap;
// //           justify-content: center;
// //           gap: 10px 26px;
// //         }

// //         .tool-pill-item {
// //           font-size: 0.9rem;
// //           font-weight: 600;
// //           color: var(--text-muted, #9ca3af);
// //           transition: var(--transition-smooth);
// //         }

// //         .tool-pill-item:hover {
// //           color: var(--gold-primary, #f5a623);
// //         }

// //         /* HERO RESPONSIVE BREAKPOINTS */
// //         @media (max-width: 1200px) {
// //           .hero-giant-text {
// //             font-size: clamp(2rem, 6.8vw, 5.2rem);
// //           }
// //           .hero-grid {
// //             grid-template-columns: 1fr 1.15fr;
// //           }
// //           .hero-right {
// //             grid-column: 1 / -1;
// //             justify-content: flex-start;
// //           }
// //           .hero-status-card {
// //             max-width: 100%;
// //             width: 100%;
// //           }
// //         }

// //         @media (max-width: 768px) {
// //           .hero-section {
// //             padding-top: 88px;
// //           }
// //           .hero-giant-title-wrap {
// //             position: relative;
// //             top: 0;
// //             margin-top: 10px;
// //             margin-bottom: -12px;
// //             padding: 0 12px;
// //           }
// //           .hero-giant-text {
// //             font-size: clamp(1.75rem, 8.2vw, 3.2rem);
// //             white-space: nowrap;
// //           }
// //           .hero-grid {
// //             grid-template-columns: 1fr;
// //             margin-top: 14px;
// //             text-align: center;
// //           }
// //           .hero-left {
// //             order: 2;
// //             display: flex;
// //             flex-direction: column;
// //             align-items: center;
// //           }
// //           .hero-center {
// //             order: 1;
// //           }
// //           .hero-right {
// //             order: 3;
// //           }
// //           .hero-description {
// //             margin-left: auto;
// //             margin-right: auto;
// //           }
// //           .hero-cta-group {
// //             justify-content: center;
// //           }
// //         }

// //         @media (max-width: 420px) {
// //           .hero-giant-text {
// //             font-size: clamp(1.5rem, 7.8vw, 2.3rem);
// //           }
// //           .hero-cta-group {
// //             width: 100%;
// //             flex-direction: column;
// //           }
// //           .hero-cta-group a {
// //             width: 100%;
// //           }
// //           .character-badge-floating {
// //             font-size: 0.68rem;
// //             padding: 6px 12px;
// //           }
// //         }
// //       `}</style>

// //       <section
// //         id="home"
// //         ref={heroRef}
// //         className="hero-section"
// //         onMouseMove={handleMouseMove}
// //         onTouchMove={handleTouchMove}
// //         onMouseLeave={handleMouseLeave}
// //       >
// //         {/* Subtle Ambient Gold Spotlights */}
// //         <div className="hero-glow hero-glow-left" aria-hidden="true" />
// //         <div className="hero-glow hero-glow-right" aria-hidden="true" />

// //         <div className="container hero-container">
// //           {/* Resized Background Poster Name */}
// //           <div
// //             className="hero-giant-title-wrap"
// //             style={{
// //               transform: `translate3d(${-mouse.x * 12}px, ${-mouse.y * 6}px, 0)`,
// //             }}
// //             aria-hidden="true"
// //           >
// //             <span className="hero-giant-text">AWAIS MUGHAL</span>
// //           </div>

// //           {/* Main Hero 3-Zone Responsive Layout */}
// //           <div className="hero-grid">
// //             {/* Left Column: Headline, Intro, CTAs */}
// //             <div className="hero-left reveal-up">
// //               <div className="availability-pill">
// //                 <span className="pulse-dot" />
// //                 <span>AVAILABLE FOR PROJECTS</span>
// //               </div>

// //               <h1 className="sr-only">Awais Mughal - Full Stack Developer</h1>

// //               <h2 className="hero-subheadline">
// //                 I BUILD <br />
// //                 WEBSITES <br />
// //                 PEOPLE <br />
// //                 <span className="gold-highlight">REMEMBER.</span>
// //               </h2>

// //               <p className="hero-description">
// //                 Fast, responsive full-stack web applications with clean MERN
// //                 architecture and motion that feels natural. From first database
// //                 schema to launch day.
// //               </p>

// //               <div className="hero-cta-group">
// //                 <Link
// //                   to="/projects"
// //                   className="btn-gold-solid"
// //                   onClick={() =>
// //                     onNavigate && onNavigate("projects", "/projects")
// //                   }
// //                 >
// //                   <span>Explore My Work</span>
// //                   <FiArrowUpRight size={18} />
// //                 </Link>
// //                 <Link
// //                   to="/contact"
// //                   className="btn-dark-pill"
// //                   onClick={() =>
// //                     onNavigate && onNavigate("contact", "/contact")
// //                   }
// //                 >
// //                   <span>Let&apos;s Talk</span>
// //                 </Link>
// //               </div>

// //               <div className="hero-socials">
// //                 <a
// //                   href="https://github.com/awais-arif-webdev"
// //                   target="_blank"
// //                   rel="noopener noreferrer"
// //                   aria-label="GitHub Profile"
// //                   className="social-icon-btn"
// //                 >
// //                   <FiGithub size={18} />
// //                 </a>
// //                 <a
// //                   href="https://www.linkedin.com/in/awais-arif-webdev/"
// //                   target="_blank"
// //                   rel="noopener noreferrer"
// //                   aria-label="LinkedIn Profile"
// //                   className="social-icon-btn"
// //                 >
// //                   <FiLinkedin size={18} />
// //                 </a>
// //                 {/* <a
// //                   href="mailto:awais.arif.fs.dev.dev@gmail.com"
// //                   aria-label="Email Awais Mughal"
// //                   className="social-icon-btn"
// //                 >
// //                   <FiMail size={18} />
// //                 </a>
                
// //                 */}

// //                 <a
// //                   href="https://mail.google.com/mail/?view=cm&fs=1&to=awais.arif.fs.dev@gmail.com"
// //                   target="_blank"
// //                   rel="noopener noreferrer"
// //                   aria-label="Email Awais Mughal"
// //                   className="social-icon-btn"
// //                 >
// //                   <FiMail size={18} />
// //                 </a>
// //               </div>
// //             </div>

// //             {/* Center Column: 3D Mouse-Tracking Developer Portrait */}
// //             <div className="hero-center">
// //               <div className="character-stage">
// //                 <div className="character-halo" />

// //                 {/* Interactive SVG Portrait with 3D Perspective */}
// //                 <div
// //                   className="character-3d-wrapper"
// //                   style={{
// //                     transform: `perspective(1000px) rotateY(${headRotateY * 0.45}deg) rotateX(${headRotateX * 0.35}deg)`,
// //                   }}
// //                 >
// //                   <svg
// //                     viewBox="0 0 500 580"
// //                     className="character-svg"
// //                     role="img"
// //                     aria-label="Interactive 3D illustrated portrait of Awais Mughal wearing a dark formal suit and glasses that follow cursor movement"
// //                   >
// //                     <defs>
// //                       <linearGradient
// //                         id="suitGrad"
// //                         x1="0%"
// //                         y1="0%"
// //                         x2="100%"
// //                         y2="100%"
// //                       >
// //                         <stop offset="0%" stopColor="#1d1e22" />
// //                         <stop offset="50%" stopColor="#121316" />
// //                         <stop offset="100%" stopColor="#090a0c" />
// //                       </linearGradient>
// //                       <linearGradient
// //                         id="skinGrad"
// //                         x1="0%"
// //                         y1="0%"
// //                         x2="0%"
// //                         y2="100%"
// //                       >
// //                         <stop offset="0%" stopColor="#e8b89a" />
// //                         <stop offset="100%" stopColor="#c99372" />
// //                       </linearGradient>
// //                       <linearGradient
// //                         id="goldRim"
// //                         x1="0%"
// //                         y1="0%"
// //                         x2="100%"
// //                         y2="0%"
// //                       >
// //                         <stop offset="0%" stopColor="#f5a623" />
// //                         <stop offset="50%" stopColor="#ffd166" />
// //                         <stop offset="100%" stopColor="#d48806" />
// //                       </linearGradient>
// //                       <linearGradient
// //                         id="lensSheen"
// //                         x1="0%"
// //                         y1="0%"
// //                         x2="100%"
// //                         y2="100%"
// //                       >
// //                         <stop offset="0%" stopColor="rgba(255,255,255,0.22)" />
// //                         <stop offset="50%" stopColor="rgba(245,166,35,0.08)" />
// //                         <stop offset="100%" stopColor="rgba(0,0,0,0.1)" />
// //                       </linearGradient>
// //                       <filter
// //                         id="softShadow"
// //                         x="-15%"
// //                         y="-15%"
// //                         width="130%"
// //                         height="130%"
// //                       >
// //                         <feDropShadow
// //                           dx="0"
// //                           dy="14"
// //                           stdDeviation="12"
// //                           floodColor="#000"
// //                           floodOpacity="0.65"
// //                         />
// //                       </filter>
// //                     </defs>

// //                     {/* TORSO & CROSSED ARMS IN DARK FORMAL SUIT */}
// //                     <g
// //                       style={{
// //                         transform: `translate(${shoulderShiftX}px, 0px)`,
// //                         transition: "transform 0.08s linear",
// //                       }}
// //                     >
// //                       {/* Suit Shoulders & Jacket */}
// //                       <path
// //                         d="M85 575 C88 430, 130 375, 250 375 C370 375, 412 430, 415 575 Z"
// //                         fill="url(#suitGrad)"
// //                         stroke="rgba(245, 166, 35, 0.22)"
// //                         strokeWidth="1.5"
// //                         filter="url(#softShadow)"
// //                       />

// //                       {/* Crisp Charcoal / Dark Inner Shirt & Gold Collar Pin */}
// //                       <path d="M210 375 L250 465 L290 375 Z" fill="#18191c" />
// //                       {/* Suit Lapels */}
// //                       <path
// //                         d="M192 372 L250 480 L220 495 L168 415 Z"
// //                         fill="#23252a"
// //                         stroke="#2f3138"
// //                         strokeWidth="1"
// //                       />
// //                       <path
// //                         d="M308 372 L250 480 L280 495 L332 415 Z"
// //                         fill="#23252a"
// //                         stroke="#2f3138"
// //                         strokeWidth="1"
// //                       />

// //                       {/* Subtle Gold Lapel Pin */}
// //                       <circle cx="202" cy="422" r="4" fill="url(#goldRim)" />

// //                       {/* Crossed Arms Pose */}
// //                       <path
// //                         d="M95 570 C100 475, 135 435, 185 455 L340 490 C365 495, 375 535, 355 570 Z"
// //                         fill="#16171b"
// //                         stroke="#2a2c32"
// //                         strokeWidth="1.5"
// //                       />
// //                       {/* Right Hand Tucked on Left Arm */}
// //                       <path
// //                         d="M150 492 C135 486, 132 465, 152 460 L185 465 C192 475, 185 495, 165 495 Z"
// //                         fill="url(#skinGrad)"
// //                       />
// //                       {/* Left Hand Resting on Right Elbow */}
// //                       <path
// //                         d="M332 478 C352 472, 366 485, 358 504 L328 512 Z"
// //                         fill="url(#skinGrad)"
// //                       />
// //                       {/* Luxury Watch with Gold Bezel */}
// //                       <rect
// //                         x="178"
// //                         y="464"
// //                         width="14"
// //                         height="28"
// //                         rx="4"
// //                         transform="rotate(14 185 478)"
// //                         fill="#0d0e11"
// //                         stroke="url(#goldRim)"
// //                         strokeWidth="2.5"
// //                       />
// //                       {/* Right Forearm Overlapping Front */}
// //                       <path
// //                         d="M165 480 L368 475 C395 478, 408 525, 398 575 L140 575 Z"
// //                         fill="#1d1f24"
// //                         stroke="rgba(255,255,255,0.07)"
// //                         strokeWidth="1.5"
// //                       />
// //                     </g>

// //                     {/* NECK */}
// //                     <path
// //                       d="M218 320 L218 392 C218 410, 282 410, 282 392 L282 320 Z"
// //                       fill="#ba8362"
// //                     />
// //                     {/* Neck Shadow */}
// //                     <path
// //                       d="M218 325 Q250 355 282 325 L282 360 Q250 380 218 360 Z"
// //                       fill="rgba(0,0,0,0.28)"
// //                     />

// //                     {/* DYNAMIC 3D ROTATING HEAD GROUP */}
// //                     <g
// //                       style={{
// //                         transform: `translate(${faceShiftX}px, ${faceShiftY}px) rotate(${headRotateZ}deg)`,
// //                         transformOrigin: "250px 250px",
// //                       }}
// //                     >
// //                       {/* Ears */}
// //                       <ellipse
// //                         cx={162 - faceShiftX * 0.25}
// //                         cy="248"
// //                         rx="14"
// //                         ry="26"
// //                         fill="#c99372"
// //                       />
// //                       <ellipse
// //                         cx={338 - faceShiftX * 0.25}
// //                         cy="248"
// //                         rx="14"
// //                         ry="26"
// //                         fill="#c99372"
// //                       />

// //                       {/* Base Head Shape */}
// //                       <path
// //                         d="M168 185 C168 120, 332 120, 332 185 C336 245, 326 322, 250 344 C174 322, 164 245, 168 185 Z"
// //                         fill="url(#skinGrad)"
// //                         filter="url(#softShadow)"
// //                       />

// //                       {/* Stylized Hair */}
// //                       <path
// //                         d="M158 205 C150 145, 178 96, 238 92 C295 88, 348 112, 344 178 C342 195, 336 210, 331 215 C329 175, 314 148, 275 144 C232 140, 192 152, 170 185 C166 195, 163 208, 158 205 Z"
// //                         fill="#141519"
// //                       />
// //                       <path
// //                         d="M178 135 Q245 102 320 132 Q275 118 205 142 Z"
// //                         fill="#272930"
// //                       />

// //                       {/* INTERACTIVE INNER FACIAL FEATURES */}
// //                       <g
// //                         style={{
// //                           transform: `translate(${faceShiftX * 0.65}px, ${faceShiftY * 0.55}px)`,
// //                         }}
// //                       >
// //                         {/* Eyebrows */}
// //                         <path
// //                           d={`M186 ${196 - mouse.y * 4} Q212 ${186 - mouse.y * 5} 234 ${195 - mouse.y * 3}`}
// //                           fill="none"
// //                           stroke="#16171a"
// //                           strokeWidth="6.5"
// //                           strokeLinecap="round"
// //                         />
// //                         <path
// //                           d={`M266 ${195 - mouse.y * 3} Q288 ${186 - mouse.y * 5} 314 ${196 - mouse.y * 4}`}
// //                           fill="none"
// //                           stroke="#16171a"
// //                           strokeWidth="6.5"
// //                           strokeLinecap="round"
// //                         />

// //                         {/* Left Eye */}
// //                         <g transform="translate(210, 220)">
// //                           <ellipse
// //                             cx="0"
// //                             cy="0"
// //                             rx="16"
// //                             ry={isBlinking ? 1.5 : 10}
// //                             fill="#ffffff"
// //                             style={{ transition: "ry 0.08s ease" }}
// //                           />
// //                           {!isBlinking && (
// //                             <g
// //                               transform={`translate(${pupilShiftX}, ${pupilShiftY})`}
// //                             >
// //                               <circle cx="0" cy="0" r="6.5" fill="#2b1d14" />
// //                               <circle cx="0" cy="0" r="3.2" fill="#090a0c" />
// //                               <circle
// //                                 cx="2.2"
// //                                 cy="-2.2"
// //                                 r="1.8"
// //                                 fill="#ffffff"
// //                               />
// //                             </g>
// //                           )}
// //                         </g>

// //                         {/* Right Eye */}
// //                         <g transform="translate(290, 220)">
// //                           <ellipse
// //                             cx="0"
// //                             cy="0"
// //                             rx="16"
// //                             ry={isBlinking ? 1.5 : 10}
// //                             fill="#ffffff"
// //                             style={{ transition: "ry 0.08s ease" }}
// //                           />
// //                           {!isBlinking && (
// //                             <g
// //                               transform={`translate(${pupilShiftX}, ${pupilShiftY})`}
// //                             >
// //                               <circle cx="0" cy="0" r="6.5" fill="#2b1d14" />
// //                               <circle cx="0" cy="0" r="3.2" fill="#090a0c" />
// //                               <circle
// //                                 cx="2.2"
// //                                 cy="-2.2"
// //                                 r="1.8"
// //                                 fill="#ffffff"
// //                               />
// //                             </g>
// //                           )}
// //                         </g>

// //                         {/* Nose */}
// //                         <path
// //                           d={`M250 218 L${248 + mouse.x * 4} 262 Q250 268 ${258 + mouse.x * 3} 264`}
// //                           fill="none"
// //                           stroke="#a97253"
// //                           strokeWidth="3.5"
// //                           strokeLinecap="round"
// //                         />

// //                         {/* Full Groomed Beard & Mustache */}
// //                         <path
// //                           d="M167 240 C168 278, 185 335, 250 347 C315 335, 332 278, 333 240 C326 268, 312 292, 286 300 C276 282, 262 276, 250 276 C238 276, 224 282, 214 300 C188 292, 174 268, 167 240 Z"
// //                           fill="#16171b"
// //                         />
// //                         <path
// //                           d="M210 282 Q230 268 250 277 Q270 268 290 282 Q272 290 250 285 Q228 290 210 282 Z"
// //                           fill="#121317"
// //                         />

// //                         {/* Confident Smile */}
// //                         <path
// //                           d="M222 287 Q250 308 278 287 Q250 296 222 287 Z"
// //                           fill="#ffffff"
// //                         />
// //                         <path
// //                           d="M220 286 Q250 310 280 286"
// //                           fill="none"
// //                           stroke="#0f1014"
// //                           strokeWidth="2.5"
// //                           strokeLinecap="round"
// //                         />

// //                         {/* PREMIUM EYEGLASSES */}
// //                         <g
// //                           style={{
// //                             transform: `translate(${mouse.x * 4}px, ${mouse.y * 3}px)`,
// //                           }}
// //                         >
// //                           <rect
// //                             x="176"
// //                             y="198"
// //                             width="66"
// //                             height="46"
// //                             rx="12"
// //                             fill="url(#lensSheen)"
// //                             stroke="#111215"
// //                             strokeWidth="6"
// //                           />
// //                           <rect
// //                             x="258"
// //                             y="198"
// //                             width="66"
// //                             height="46"
// //                             rx="12"
// //                             fill="url(#lensSheen)"
// //                             stroke="#111215"
// //                             strokeWidth="6"
// //                           />
// //                           <path
// //                             d="M242 214 Q250 208 258 214"
// //                             fill="none"
// //                             stroke="url(#goldRim)"
// //                             strokeWidth="4"
// //                           />
// //                           <circle
// //                             cx="182"
// //                             cy="206"
// //                             r="2.5"
// //                             fill="url(#goldRim)"
// //                           />
// //                           <circle
// //                             cx="318"
// //                             cy="206"
// //                             r="2.5"
// //                             fill="url(#goldRim)"
// //                           />
// //                           <path
// //                             d={`M${190 - mouse.x * 6} 204 L${202 - mouse.x * 6} 238`}
// //                             stroke="rgba(255,255,255,0.35)"
// //                             strokeWidth="3.5"
// //                             strokeLinecap="round"
// //                           />
// //                           <path
// //                             d={`M${272 - mouse.x * 6} 204 L${284 - mouse.x * 6} 238`}
// //                             stroke="rgba(255,255,255,0.35)"
// //                             strokeWidth="3.5"
// //                             strokeLinecap="round"
// //                           />
// //                         </g>
// //                       </g>
// //                     </g>
// //                   </svg>

// //                   {/* Interactive Cursor Hint Badge */}
// //                   <div className="character-badge-floating">
// //                     <FiCode className="gold-icon" />
// //                     <span>Move cursor — 3D Head Tracking Active</span>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Right Column: Open For New Projects Note */}
// //             <div className="hero-right reveal-up">
// //               <div className="hero-status-card">
// //                 <div className="status-header">
// //                   <span className="pulse-dot" />
// //                   <span className="status-title">Open for new projects</span>
// //                 </div>
// //                 <p className="status-body">
// //                   <strong>From landing pages to full websites.</strong> Tell me
// //                   what you&apos;re building and I&apos;ll help you launch it
// //                   with clean code and standout design.
// //                 </p>
// //                 <div className="hero-mini-metrics">
// //                   <div>
// //                     <span className="mini-metric-val">15+</span>
// //                     <span className="mini-metric-lbl">Projects Built</span>
// //                   </div>
// //                   <div>
// //                     <span className="mini-metric-val">MERN</span>
// //                     <span className="mini-metric-lbl">Core Stack</span>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Bottom Platforms & Tools Bar */}
// //         <div className="hero-tools-strip">
// //           <div className="container">
// //             <p className="tools-strip-label">
// //               PLATFORMS &amp; TOOLS I WORK WITH
// //             </p>
// //             <div className="tools-strip-list">
// //               {marqueeTools.map((tool, index) => (
// //                 <span key={index} className="tool-pill-item">
// //                   {tool}
// //                 </span>
// //               ))}
// //             </div>
// //           </div>
// //         </div>
// //       </section>
// //     </>
// //   );
// // };

// // export default Hero;




// import React, { useState, useEffect, useRef } from "react";
// import { Link } from "react-router-dom";
// import {
//   FiGithub,
//   FiLinkedin,
//   FiMail,
//   FiArrowUpRight,
//   FiCode,
// } from "react-icons/fi";
// import { marqueeTools } from "../data/skills";

// const Hero = ({ onNavigate }) => {
//   // Normalized mouse coordinates (-1 to 1)
//   const [mouse, setMouse] = useState({ x: 0, y: 0 });
//   const [isBlinking, setIsBlinking] = useState(false);
//   const heroRef = useRef(null);
//   const rafRef = useRef(null);
//   const targetMouse = useRef({ x: 0, y: 0 });

//   // Smooth spring-like interpolation loop for face & head rotation
//   useEffect(() => {
//     let currentX = 0;
//     let currentY = 0;

//     const animateFace = () => {
//       currentX += (targetMouse.current.x - currentX) * 0.1;
//       currentY += (targetMouse.current.y - currentY) * 0.1;
//       setMouse({ x: currentX, y: currentY });
//       rafRef.current = requestAnimationFrame(animateFace);
//     };

//     rafRef.current = requestAnimationFrame(animateFace);
//     return () => {
//       if (rafRef.current) cancelAnimationFrame(rafRef.current);
//     };
//   }, []);

//   // Natural blinking interval
//   useEffect(() => {
//     const blinkInterval = setInterval(() => {
//       setIsBlinking(true);
//       setTimeout(() => setIsBlinking(false), 160);
//     }, 3800);
//     return () => clearInterval(blinkInterval);
//   }, []);

//   const handleMouseMove = (e) => {
//     if (!heroRef.current) return;
//     const rect = heroRef.current.getBoundingClientRect();
//     const centerX = rect.left + rect.width / 2;
//     const centerY = rect.top + rect.height / 2;
//     const normX = Math.max(
//       -1,
//       Math.min(1, (e.clientX - centerX) / (rect.width / 2)),
//     );
//     const normY = Math.max(
//       -1,
//       Math.min(1, (e.clientY - centerY) / (rect.height / 2)),
//     );
//     targetMouse.current = { x: normX, y: normY };
//   };

//   const handleTouchMove = (e) => {
//     if (!heroRef.current || !e.touches[0]) return;
//     const touch = e.touches[0];
//     const rect = heroRef.current.getBoundingClientRect();
//     const centerX = rect.left + rect.width / 2;
//     const centerY = rect.top + rect.height / 2;
//     const normX = Math.max(
//       -1,
//       Math.min(1, (touch.clientX - centerX) / (rect.width / 2)),
//     );
//     const normY = Math.max(
//       -1,
//       Math.min(1, (touch.clientY - centerY) / (rect.height / 2)),
//     );
//     targetMouse.current = { x: normX, y: normY };
//   };

//   const handleMouseLeave = () => {
//     targetMouse.current = { x: 0, y: 0 };
//   };

//   // Computed transforms for 3D head, facial features, eyes, and glasses
//   const headRotateY = mouse.x * 22; // Left/Right head turn
//   const headRotateX = -mouse.y * 14; // Up/Down head nod
//   const headRotateZ = mouse.x * 4; // Subtle head tilt
//   const faceShiftX = mouse.x * 14;
//   const faceShiftY = mouse.y * 9;
//   const pupilShiftX = mouse.x * 7.5;
//   const pupilShiftY = mouse.y * 5.5;
//   const shoulderShiftX = mouse.x * 6;

//   return (
//     <>
//       <style>{`
//         .hero-section {
//           position: relative;
//           min-height: 100vh;
//           padding-top: 96px;
//           display: flex;
//           flex-direction: column;
//           justify-content: space-between;
//           overflow: hidden;
//           background:
//             radial-gradient(circle at 50% 24%, rgba(245, 166, 35, 0.14) 0%, rgba(7, 8, 9, 0) 58%),
//             linear-gradient(180deg, #070809 0%, #0b0c0f 100%);
//         }

//         .hero-glow {
//           position: absolute;
//           width: 420px;
//           height: 420px;
//           border-radius: 50%;
//           filter: blur(130px);
//           pointer-events: none;
//           z-index: 0;
//         }

//         .hero-glow-left {
//           top: 12%;
//           left: -120px;
//           background: rgba(245, 166, 35, 0.12);
//         }

//         .hero-glow-right {
//           bottom: 10%;
//           right: -120px;
//           background: rgba(212, 136, 6, 0.1);
//         }

//         .hero-container {
//           position: relative;
//           z-index: 2;
//           flex: 1;
//           display: flex;
//           flex-direction: column;
//           justify-content: center;
//         }

//         /* RESIZED POSTER TYPOGRAPHY SO IT FITS CLEANLY INSIDE SCREEN */
//         .hero-giant-title-wrap {
//           position: absolute;
//           top: 3%;
//           left: 0;
//           width: 100%;
//           padding: 0 20px;
//           text-align: center;
//           pointer-events: none;
//           z-index: 1;
//           user-select: none;
//           transition: transform 0.12s ease-out;
//           box-sizing: border-box;
//         }

//         .hero-giant-text {
//           font-family: var(--font-display, 'Syne', sans-serif);
//           font-weight: 800;
//           font-size: clamp(2.2rem, 7.2vw, 6.2rem);
//           line-height: 0.96;
//           letter-spacing: -0.02em;
//           text-transform: uppercase;
//           background: linear-gradient(180deg, #fff5d6 0%, #f5b942 48%, #9e6308 100%);
//           -webkit-background-clip: text;
//           background-clip: text;
//           -webkit-text-fill-color: transparent;
//           opacity: 0.92;
//           display: inline-block;
//           max-width: 100%;
//           white-space: nowrap;
//         }

//         .hero-grid {
//           position: relative;
//           z-index: 3;
//           display: grid;
//           grid-template-columns: 1.05fr 1.3fr 0.95fr;
//           align-items: flex-end;
//           gap: 24px;
//           margin-top: 64px;
//           padding-bottom: 24px;
//         }

//         .hero-left {
//           padding-bottom: 18px;
//         }

//         .availability-pill {
//           display: inline-flex;
//           align-items: center;
//           gap: 8px;
//           padding: 6px 14px;
//           border-radius: 999px;
//           background: rgba(245, 166, 35, 0.1);
//           border: 1px solid rgba(245, 166, 35, 0.3);
//           font-size: 0.74rem;
//           font-weight: 700;
//           letter-spacing: 0.08em;
//           color: var(--gold-light, #ffd166);
//           margin-bottom: 18px;
//         }

//         .hero-subheadline {
//           font-family: var(--font-display, 'Syne', sans-serif);
//           font-size: clamp(1.9rem, 3.1vw, 3rem);
//           font-weight: 800;
//           line-height: 1.04;
//           letter-spacing: -0.02em;
//           margin-bottom: 16px;
//           color: var(--text-main, #f7f4ed);
//         }

//         .hero-description {
//           color: var(--text-muted, #9ca3af);
//           font-size: 0.95rem;
//           max-width: 400px;
//           margin-bottom: 24px;
//         }

//         .hero-cta-group {
//           display: flex;
//           flex-wrap: wrap;
//           gap: 12px;
//           margin-bottom: 24px;
//         }

//         .hero-socials {
//           display: flex;
//           align-items: center;
//           gap: 10px;
//         }

//         /* CENTER CHARACTER */
//         .hero-center {
//           display: flex;
//           justify-content: center;
//           align-items: flex-end;
//         }

//         .character-stage {
//           position: relative;
//           width: 100%;
//           max-width: 440px;
//           display: flex;
//           justify-content: center;
//         }

//         .character-halo {
//           position: absolute;
//           bottom: 12%;
//           width: 310px;
//           height: 310px;
//           border-radius: 50%;
//           background: radial-gradient(circle, rgba(245, 166, 35, 0.22) 0%, rgba(7, 8, 9, 0) 70%);
//           z-index: 0;
//           pointer-events: none;
//         }

//         .character-3d-wrapper {
//           position: relative;
//           z-index: 2;
//           width: 100%;
//           transition: transform 0.08s linear;
//           will-change: transform;
//         }

//         .character-svg {
//           width: 100%;
//           height: auto;
//           display: block;
//           filter: drop-shadow(0 20px 35px rgba(0, 0, 0, 0.85));
//         }

//         .character-badge-floating {
//           position: absolute;
//           bottom: 14px;
//           left: 50%;
//           transform: translateX(-50%);
//           background: rgba(13, 14, 17, 0.9);
//           backdrop-filter: blur(8px);
//           border: 1px solid rgba(245, 166, 35, 0.35);
//           padding: 7px 15px;
//           border-radius: 999px;
//           display: inline-flex;
//           align-items: center;
//           gap: 8px;
//           font-size: 0.75rem;
//           color: var(--text-main, #f7f4ed);
//           white-space: nowrap;
//           box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
//         }

//         .gold-icon {
//           color: var(--gold-primary, #f5a623);
//         }

//         /* RIGHT HERO CARD */
//         .hero-right {
//           padding-bottom: 18px;
//           display: flex;
//           justify-content: flex-end;
//         }

//         .hero-status-card {
//           background: rgba(18, 20, 24, 0.85);
//           border: 1px solid var(--border-subtle, rgba(255, 255, 255, 0.08));
//           border-radius: 16px;
//           padding: 22px;
//           max-width: 320px;
//           backdrop-filter: blur(10px);
//         }

//         .status-header {
//           display: flex;
//           align-items: center;
//           gap: 8px;
//           margin-bottom: 10px;
//         }

//         .status-title {
//           font-size: 0.82rem;
//           font-weight: 700;
//           color: var(--gold-light, #ffd166);
//           text-transform: uppercase;
//           letter-spacing: 0.05em;
//         }

//         .status-body {
//           font-size: 0.88rem;
//           color: var(--text-muted, #9ca3af);
//           margin-bottom: 16px;
//         }

//         .status-body strong {
//           color: var(--text-main, #f7f4ed);
//         }

//         .hero-mini-metrics {
//           display: grid;
//           grid-template-columns: 1fr 1fr;
//           gap: 12px;
//           padding-top: 14px;
//           border-top: 1px solid var(--border-subtle, rgba(255, 255, 255, 0.08));
//         }

//         .mini-metric-val {
//           display: block;
//           font-family: var(--font-display, 'Syne', sans-serif);
//           font-weight: 800;
//           font-size: 1.15rem;
//           color: var(--gold-primary, #f5a623);
//         }

//         .mini-metric-lbl {
//           font-size: 0.74rem;
//           color: var(--text-muted, #9ca3af);
//         }

//         /* TOOLS STRIP */
//         .hero-tools-strip {
//           border-top: 1px solid var(--border-subtle, rgba(255, 255, 255, 0.08));
//           border-bottom: 1px solid var(--border-subtle, rgba(255, 255, 255, 0.08));
//           background: rgba(13, 14, 17, 0.9);
//           padding: 22px 0;
//           position: relative;
//           z-index: 3;
//         }

//         .tools-strip-label {
//           text-align: center;
//           font-size: 0.7rem;
//           letter-spacing: 0.16em;
//           color: var(--text-dim, #6b7280);
//           font-weight: 700;
//           margin-bottom: 14px;
//         }

//         .tools-strip-list {
//           display: flex;
//           flex-wrap: wrap;
//           justify-content: center;
//           gap: 10px 26px;
//         }

//         .tool-pill-item {
//           font-size: 0.9rem;
//           font-weight: 600;
//           color: var(--text-muted, #9ca3af);
//           transition: var(--transition-smooth);
//         }

//         .tool-pill-item:hover {
//           color: var(--gold-primary, #f5a623);
//         }

//         /* HERO RESPONSIVE BREAKPOINTS */
//         @media (max-width: 1200px) {
//           .hero-giant-text {
//             font-size: clamp(2rem, 6.8vw, 5.2rem);
//           }
//           .hero-grid {
//             grid-template-columns: 1fr 1.15fr;
//           }
//           .hero-right {
//             grid-column: 1 / -1;
//             justify-content: flex-start;
//           }
//           .hero-status-card {
//             max-width: 100%;
//             width: 100%;
//           }
//         }

//         @media (max-width: 768px) {
//           .hero-section {
//             padding-top: 88px;
//           }
//           .hero-giant-title-wrap {
//             position: relative;
//             top: 0;
//             margin-top: 10px;
//             margin-bottom: 0;
//             padding: 0 12px;
//             /* disable the parallax shift on small screens so the name never gets pushed off-screen */
//             transform: none !important;
//           }
//           /* Name is split into two lines (AWAIS / MUGHAL) so it always fits */
//           .hero-giant-text {
//             font-size: clamp(2.2rem, 12.5vw, 4.5rem);
//             line-height: 1;
//             letter-spacing: -0.01em;
//             white-space: normal;
//           }
//           .hero-name-line {
//             display: block;
//           }
//           .hero-grid {
//             grid-template-columns: 1fr;
//             margin-top: 14px;
//             text-align: center;
//           }
//           .hero-left {
//             order: 2;
//             display: flex;
//             flex-direction: column;
//             align-items: center;
//           }
//           .hero-center {
//             order: 1;
//           }
//           .hero-right {
//             order: 3;
//           }
//           .hero-description {
//             margin-left: auto;
//             margin-right: auto;
//           }
//           .hero-cta-group {
//             justify-content: center;
//           }
//         }

//         @media (max-width: 420px) {
//           .hero-giant-text {
//             font-size: clamp(2rem, 12.5vw, 3.4rem);
//           }
//           .hero-cta-group {
//             width: 100%;
//             flex-direction: column;
//           }
//           .hero-cta-group a {
//             width: 100%;
//           }
//           .character-badge-floating {
//             font-size: 0.68rem;
//             padding: 6px 12px;
//           }
//         }
//       `}</style>

//       <section
//         id="home"
//         ref={heroRef}
//         className="hero-section"
//         onMouseMove={handleMouseMove}
//         onTouchMove={handleTouchMove}
//         onMouseLeave={handleMouseLeave}
//       >
//         {/* Subtle Ambient Gold Spotlights */}
//         <div className="hero-glow hero-glow-left" aria-hidden="true" />
//         <div className="hero-glow hero-glow-right" aria-hidden="true" />

//         <div className="container hero-container">
//           {/* Resized Background Poster Name */}
//           <div
//             className="hero-giant-title-wrap"
//             style={{
//               transform: `translate3d(${-mouse.x * 12}px, ${-mouse.y * 6}px, 0)`,
//             }}
//             aria-hidden="true"
//           >
//             <span className="hero-giant-text">
//               <span className="hero-name-line">AWAIS</span>{" "}
//               <span className="hero-name-line">MUGHAL</span>
//             </span>
//           </div>

//           {/* Main Hero 3-Zone Responsive Layout */}
//           <div className="hero-grid">
//             {/* Left Column: Headline, Intro, CTAs */}
//             <div className="hero-left reveal-up">
//               <div className="availability-pill">
//                 <span className="pulse-dot" />
//                 <span>AVAILABLE FOR PROJECTS</span>
//               </div>

//               <h1 className="sr-only">Awais Mughal - Full Stack Developer</h1>

//               <h2 className="hero-subheadline">
//                 I BUILD <br />
//                 WEBSITES <br />
//                 PEOPLE <br />
//                 <span className="gold-highlight">REMEMBER.</span>
//               </h2>

//               <p className="hero-description">
//                 Fast, responsive full-stack web applications with clean MERN
//                 architecture and motion that feels natural. From first database
//                 schema to launch day.
//               </p>

//               <div className="hero-cta-group">
//                 <Link
//                   to="/projects"
//                   className="btn-gold-solid"
//                   onClick={() =>
//                     onNavigate && onNavigate("projects", "/projects")
//                   }
//                 >
//                   <span>Explore My Work</span>
//                   <FiArrowUpRight size={18} />
//                 </Link>
//                 <Link
//                   to="/contact"
//                   className="btn-dark-pill"
//                   onClick={() =>
//                     onNavigate && onNavigate("contact", "/contact")
//                   }
//                 >
//                   <span>Let&apos;s Talk</span>
//                 </Link>
//               </div>

//               <div className="hero-socials">
//                 <a
//                   href="https://github.com/awais-arif-webdev"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label="GitHub Profile"
//                   className="social-icon-btn"
//                 >
//                   <FiGithub size={18} />
//                 </a>
//                 <a
//                   href="https://www.linkedin.com/in/awais-arif-webdev/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label="LinkedIn Profile"
//                   className="social-icon-btn"
//                 >
//                   <FiLinkedin size={18} />
//                 </a>
//                 {/* <a
//                   href="mailto:awais.arif.fs.dev.dev@gmail.com"
//                   aria-label="Email Awais Mughal"
//                   className="social-icon-btn"
//                 >
//                   <FiMail size={18} />
//                 </a>
                
//                 */}

//                 <a
//                   href="https://mail.google.com/mail/?view=cm&fs=1&to=awais.arif.fs.dev@gmail.com"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label="Email Awais Mughal"
//                   className="social-icon-btn"
//                 >
//                   <FiMail size={18} />
//                 </a>
//               </div>
//             </div>

//             {/* Center Column: 3D Mouse-Tracking Developer Portrait */}
//             <div className="hero-center">
//               <div className="character-stage">
//                 <div className="character-halo" />

//                 {/* Interactive SVG Portrait with 3D Perspective */}
//                 <div
//                   className="character-3d-wrapper"
//                   style={{
//                     transform: `perspective(1000px) rotateY(${headRotateY * 0.45}deg) rotateX(${headRotateX * 0.35}deg)`,
//                   }}
//                 >
//                   <svg
//                     viewBox="0 0 500 580"
//                     className="character-svg"
//                     role="img"
//                     aria-label="Interactive 3D illustrated portrait of Awais Mughal wearing a dark formal suit and glasses that follow cursor movement"
//                   >
//                     <defs>
//                       <linearGradient
//                         id="suitGrad"
//                         x1="0%"
//                         y1="0%"
//                         x2="100%"
//                         y2="100%"
//                       >
//                         <stop offset="0%" stopColor="#1d1e22" />
//                         <stop offset="50%" stopColor="#121316" />
//                         <stop offset="100%" stopColor="#090a0c" />
//                       </linearGradient>
//                       <linearGradient
//                         id="skinGrad"
//                         x1="0%"
//                         y1="0%"
//                         x2="0%"
//                         y2="100%"
//                       >
//                         <stop offset="0%" stopColor="#e8b89a" />
//                         <stop offset="100%" stopColor="#c99372" />
//                       </linearGradient>
//                       <linearGradient
//                         id="goldRim"
//                         x1="0%"
//                         y1="0%"
//                         x2="100%"
//                         y2="0%"
//                       >
//                         <stop offset="0%" stopColor="#f5a623" />
//                         <stop offset="50%" stopColor="#ffd166" />
//                         <stop offset="100%" stopColor="#d48806" />
//                       </linearGradient>
//                       <linearGradient
//                         id="lensSheen"
//                         x1="0%"
//                         y1="0%"
//                         x2="100%"
//                         y2="100%"
//                       >
//                         <stop offset="0%" stopColor="rgba(255,255,255,0.22)" />
//                         <stop offset="50%" stopColor="rgba(245,166,35,0.08)" />
//                         <stop offset="100%" stopColor="rgba(0,0,0,0.1)" />
//                       </linearGradient>
//                       <filter
//                         id="softShadow"
//                         x="-15%"
//                         y="-15%"
//                         width="130%"
//                         height="130%"
//                       >
//                         <feDropShadow
//                           dx="0"
//                           dy="14"
//                           stdDeviation="12"
//                           floodColor="#000"
//                           floodOpacity="0.65"
//                         />
//                       </filter>
//                     </defs>

//                     {/* TORSO & CROSSED ARMS IN DARK FORMAL SUIT */}
//                     <g
//                       style={{
//                         transform: `translate(${shoulderShiftX}px, 0px)`,
//                         transition: "transform 0.08s linear",
//                       }}
//                     >
//                       {/* Suit Shoulders & Jacket */}
//                       <path
//                         d="M85 575 C88 430, 130 375, 250 375 C370 375, 412 430, 415 575 Z"
//                         fill="url(#suitGrad)"
//                         stroke="rgba(245, 166, 35, 0.22)"
//                         strokeWidth="1.5"
//                         filter="url(#softShadow)"
//                       />

//                       {/* Crisp Charcoal / Dark Inner Shirt & Gold Collar Pin */}
//                       <path d="M210 375 L250 465 L290 375 Z" fill="#18191c" />
//                       {/* Suit Lapels */}
//                       <path
//                         d="M192 372 L250 480 L220 495 L168 415 Z"
//                         fill="#23252a"
//                         stroke="#2f3138"
//                         strokeWidth="1"
//                       />
//                       <path
//                         d="M308 372 L250 480 L280 495 L332 415 Z"
//                         fill="#23252a"
//                         stroke="#2f3138"
//                         strokeWidth="1"
//                       />

//                       {/* Subtle Gold Lapel Pin */}
//                       <circle cx="202" cy="422" r="4" fill="url(#goldRim)" />

//                       {/* Crossed Arms Pose */}
//                       <path
//                         d="M95 570 C100 475, 135 435, 185 455 L340 490 C365 495, 375 535, 355 570 Z"
//                         fill="#16171b"
//                         stroke="#2a2c32"
//                         strokeWidth="1.5"
//                       />
//                       {/* Right Hand Tucked on Left Arm */}
//                       <path
//                         d="M150 492 C135 486, 132 465, 152 460 L185 465 C192 475, 185 495, 165 495 Z"
//                         fill="url(#skinGrad)"
//                       />
//                       {/* Left Hand Resting on Right Elbow */}
//                       <path
//                         d="M332 478 C352 472, 366 485, 358 504 L328 512 Z"
//                         fill="url(#skinGrad)"
//                       />
//                       {/* Luxury Watch with Gold Bezel */}
//                       <rect
//                         x="178"
//                         y="464"
//                         width="14"
//                         height="28"
//                         rx="4"
//                         transform="rotate(14 185 478)"
//                         fill="#0d0e11"
//                         stroke="url(#goldRim)"
//                         strokeWidth="2.5"
//                       />
//                       {/* Right Forearm Overlapping Front */}
//                       <path
//                         d="M165 480 L368 475 C395 478, 408 525, 398 575 L140 575 Z"
//                         fill="#1d1f24"
//                         stroke="rgba(255,255,255,0.07)"
//                         strokeWidth="1.5"
//                       />
//                     </g>

//                     {/* NECK */}
//                     <path
//                       d="M218 320 L218 392 C218 410, 282 410, 282 392 L282 320 Z"
//                       fill="#ba8362"
//                     />
//                     {/* Neck Shadow */}
//                     <path
//                       d="M218 325 Q250 355 282 325 L282 360 Q250 380 218 360 Z"
//                       fill="rgba(0,0,0,0.28)"
//                     />

//                     {/* DYNAMIC 3D ROTATING HEAD GROUP */}
//                     <g
//                       style={{
//                         transform: `translate(${faceShiftX}px, ${faceShiftY}px) rotate(${headRotateZ}deg)`,
//                         transformOrigin: "250px 250px",
//                       }}
//                     >
//                       {/* Ears */}
//                       <ellipse
//                         cx={162 - faceShiftX * 0.25}
//                         cy="248"
//                         rx="14"
//                         ry="26"
//                         fill="#c99372"
//                       />
//                       <ellipse
//                         cx={338 - faceShiftX * 0.25}
//                         cy="248"
//                         rx="14"
//                         ry="26"
//                         fill="#c99372"
//                       />

//                       {/* Base Head Shape */}
//                       <path
//                         d="M168 185 C168 120, 332 120, 332 185 C336 245, 326 322, 250 344 C174 322, 164 245, 168 185 Z"
//                         fill="url(#skinGrad)"
//                         filter="url(#softShadow)"
//                       />

//                       {/* Stylized Hair */}
//                       <path
//                         d="M158 205 C150 145, 178 96, 238 92 C295 88, 348 112, 344 178 C342 195, 336 210, 331 215 C329 175, 314 148, 275 144 C232 140, 192 152, 170 185 C166 195, 163 208, 158 205 Z"
//                         fill="#141519"
//                       />
//                       <path
//                         d="M178 135 Q245 102 320 132 Q275 118 205 142 Z"
//                         fill="#272930"
//                       />

//                       {/* INTERACTIVE INNER FACIAL FEATURES */}
//                       <g
//                         style={{
//                           transform: `translate(${faceShiftX * 0.65}px, ${faceShiftY * 0.55}px)`,
//                         }}
//                       >
//                         {/* Eyebrows */}
//                         <path
//                           d={`M186 ${196 - mouse.y * 4} Q212 ${186 - mouse.y * 5} 234 ${195 - mouse.y * 3}`}
//                           fill="none"
//                           stroke="#16171a"
//                           strokeWidth="6.5"
//                           strokeLinecap="round"
//                         />
//                         <path
//                           d={`M266 ${195 - mouse.y * 3} Q288 ${186 - mouse.y * 5} 314 ${196 - mouse.y * 4}`}
//                           fill="none"
//                           stroke="#16171a"
//                           strokeWidth="6.5"
//                           strokeLinecap="round"
//                         />

//                         {/* Left Eye */}
//                         <g transform="translate(210, 220)">
//                           <ellipse
//                             cx="0"
//                             cy="0"
//                             rx="16"
//                             ry={isBlinking ? 1.5 : 10}
//                             fill="#ffffff"
//                             style={{ transition: "ry 0.08s ease" }}
//                           />
//                           {!isBlinking && (
//                             <g
//                               transform={`translate(${pupilShiftX}, ${pupilShiftY})`}
//                             >
//                               <circle cx="0" cy="0" r="6.5" fill="#2b1d14" />
//                               <circle cx="0" cy="0" r="3.2" fill="#090a0c" />
//                               <circle
//                                 cx="2.2"
//                                 cy="-2.2"
//                                 r="1.8"
//                                 fill="#ffffff"
//                               />
//                             </g>
//                           )}
//                         </g>

//                         {/* Right Eye */}
//                         <g transform="translate(290, 220)">
//                           <ellipse
//                             cx="0"
//                             cy="0"
//                             rx="16"
//                             ry={isBlinking ? 1.5 : 10}
//                             fill="#ffffff"
//                             style={{ transition: "ry 0.08s ease" }}
//                           />
//                           {!isBlinking && (
//                             <g
//                               transform={`translate(${pupilShiftX}, ${pupilShiftY})`}
//                             >
//                               <circle cx="0" cy="0" r="6.5" fill="#2b1d14" />
//                               <circle cx="0" cy="0" r="3.2" fill="#090a0c" />
//                               <circle
//                                 cx="2.2"
//                                 cy="-2.2"
//                                 r="1.8"
//                                 fill="#ffffff"
//                               />
//                             </g>
//                           )}
//                         </g>

//                         {/* Nose */}
//                         <path
//                           d={`M250 218 L${248 + mouse.x * 4} 262 Q250 268 ${258 + mouse.x * 3} 264`}
//                           fill="none"
//                           stroke="#a97253"
//                           strokeWidth="3.5"
//                           strokeLinecap="round"
//                         />

//                         {/* Full Groomed Beard & Mustache */}
//                         <path
//                           d="M167 240 C168 278, 185 335, 250 347 C315 335, 332 278, 333 240 C326 268, 312 292, 286 300 C276 282, 262 276, 250 276 C238 276, 224 282, 214 300 C188 292, 174 268, 167 240 Z"
//                           fill="#16171b"
//                         />
//                         <path
//                           d="M210 282 Q230 268 250 277 Q270 268 290 282 Q272 290 250 285 Q228 290 210 282 Z"
//                           fill="#121317"
//                         />

//                         {/* Confident Smile */}
//                         <path
//                           d="M222 287 Q250 308 278 287 Q250 296 222 287 Z"
//                           fill="#ffffff"
//                         />
//                         <path
//                           d="M220 286 Q250 310 280 286"
//                           fill="none"
//                           stroke="#0f1014"
//                           strokeWidth="2.5"
//                           strokeLinecap="round"
//                         />

//                         {/* PREMIUM EYEGLASSES */}
//                         <g
//                           style={{
//                             transform: `translate(${mouse.x * 4}px, ${mouse.y * 3}px)`,
//                           }}
//                         >
//                           <rect
//                             x="176"
//                             y="198"
//                             width="66"
//                             height="46"
//                             rx="12"
//                             fill="url(#lensSheen)"
//                             stroke="#111215"
//                             strokeWidth="6"
//                           />
//                           <rect
//                             x="258"
//                             y="198"
//                             width="66"
//                             height="46"
//                             rx="12"
//                             fill="url(#lensSheen)"
//                             stroke="#111215"
//                             strokeWidth="6"
//                           />
//                           <path
//                             d="M242 214 Q250 208 258 214"
//                             fill="none"
//                             stroke="url(#goldRim)"
//                             strokeWidth="4"
//                           />
//                           <circle
//                             cx="182"
//                             cy="206"
//                             r="2.5"
//                             fill="url(#goldRim)"
//                           />
//                           <circle
//                             cx="318"
//                             cy="206"
//                             r="2.5"
//                             fill="url(#goldRim)"
//                           />
//                           <path
//                             d={`M${190 - mouse.x * 6} 204 L${202 - mouse.x * 6} 238`}
//                             stroke="rgba(255,255,255,0.35)"
//                             strokeWidth="3.5"
//                             strokeLinecap="round"
//                           />
//                           <path
//                             d={`M${272 - mouse.x * 6} 204 L${284 - mouse.x * 6} 238`}
//                             stroke="rgba(255,255,255,0.35)"
//                             strokeWidth="3.5"
//                             strokeLinecap="round"
//                           />
//                         </g>
//                       </g>
//                     </g>
//                   </svg>

//                   {/* Interactive Cursor Hint Badge */}
//                   <div className="character-badge-floating">
//                     <FiCode className="gold-icon" />
//                     <span>Move cursor — 3D Head Tracking Active</span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Right Column: Open For New Projects Note */}
//             <div className="hero-right reveal-up">
//               <div className="hero-status-card">
//                 <div className="status-header">
//                   <span className="pulse-dot" />
//                   <span className="status-title">Open for new projects</span>
//                 </div>
//                 <p className="status-body">
//                   <strong>From landing pages to full websites.</strong> Tell me
//                   what you&apos;re building and I&apos;ll help you launch it
//                   with clean code and standout design.
//                 </p>
//                 <div className="hero-mini-metrics">
//                   <div>
//                     <span className="mini-metric-val">15+</span>
//                     <span className="mini-metric-lbl">Projects Built</span>
//                   </div>
//                   <div>
//                     <span className="mini-metric-val">MERN</span>
//                     <span className="mini-metric-lbl">Core Stack</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Platforms & Tools Bar */}
//         <div className="hero-tools-strip">
//           <div className="container">
//             <p className="tools-strip-label">
//               PLATFORMS &amp; TOOLS I WORK WITH
//             </p>
//             <div className="tools-strip-list">
//               {marqueeTools.map((tool, index) => (
//                 <span key={index} className="tool-pill-item">
//                   {tool}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Hero;


import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiArrowUpRight,
  FiCode,
} from "react-icons/fi";
import { marqueeTools } from "../data/skills";

const Hero = ({ onNavigate }) => {
  // Normalized mouse coordinates (-1 to 1)
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [isBlinking, setIsBlinking] = useState(false);
  const heroRef = useRef(null);
  const rafRef = useRef(null);
  const targetMouse = useRef({ x: 0, y: 0 });

  // Smooth spring-like interpolation loop for face & head rotation
  useEffect(() => {
    let currentX = 0;
    let currentY = 0;

    const animateFace = () => {
      currentX += (targetMouse.current.x - currentX) * 0.1;
      currentY += (targetMouse.current.y - currentY) * 0.1;
      setMouse({ x: currentX, y: currentY });
      rafRef.current = requestAnimationFrame(animateFace);
    };

    rafRef.current = requestAnimationFrame(animateFace);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // Natural blinking interval
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 160);
    }, 3800);
    return () => clearInterval(blinkInterval);
  }, []);

  const handleMouseMove = (e) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const normX = Math.max(
      -1,
      Math.min(1, (e.clientX - centerX) / (rect.width / 2)),
    );
    const normY = Math.max(
      -1,
      Math.min(1, (e.clientY - centerY) / (rect.height / 2)),
    );
    targetMouse.current = { x: normX, y: normY };
  };

  const handleTouchMove = (e) => {
    if (!heroRef.current || !e.touches[0]) return;
    const touch = e.touches[0];
    const rect = heroRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const normX = Math.max(
      -1,
      Math.min(1, (touch.clientX - centerX) / (rect.width / 2)),
    );
    const normY = Math.max(
      -1,
      Math.min(1, (touch.clientY - centerY) / (rect.height / 2)),
    );
    targetMouse.current = { x: normX, y: normY };
  };

  const handleMouseLeave = () => {
    targetMouse.current = { x: 0, y: 0 };
  };

  // Computed transforms for 3D head, facial features, eyes, and glasses
  const headRotateY = mouse.x * 22; // Left/Right head turn
  const headRotateX = -mouse.y * 14; // Up/Down head nod
  const headRotateZ = mouse.x * 4; // Subtle head tilt
  const faceShiftX = mouse.x * 14;
  const faceShiftY = mouse.y * 9;
  const pupilShiftX = mouse.x * 7.5;
  const pupilShiftY = mouse.y * 5.5;
  const shoulderShiftX = mouse.x * 6;

  return (
    <>
      <style>{`
        .hero-section {
          position: relative;
          min-height: 100vh;
          padding-top: 96px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          overflow: hidden;
          background:
            radial-gradient(circle at 50% 24%, rgba(245, 166, 35, 0.14) 0%, rgba(7, 8, 9, 0) 58%),
            linear-gradient(180deg, #070809 0%, #0b0c0f 100%);
        }

        .hero-glow {
          position: absolute;
          width: 420px;
          height: 420px;
          border-radius: 50%;
          filter: blur(130px);
          pointer-events: none;
          z-index: 0;
        }

        .hero-glow-left {
          top: 12%;
          left: -120px;
          background: rgba(245, 166, 35, 0.12);
        }

        .hero-glow-right {
          bottom: 10%;
          right: -120px;
          background: rgba(212, 136, 6, 0.1);
        }

        .hero-container {
          position: relative;
          z-index: 2;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        /* RESIZED POSTER TYPOGRAPHY SO IT FITS CLEANLY INSIDE SCREEN */
        .hero-giant-title-wrap {
          position: absolute;
          top: 3%;
          left: 0;
          width: 100%;
          padding: 0 20px;
          text-align: center;
          pointer-events: none;
          z-index: 1;
          user-select: none;
          transition: transform 0.12s ease-out;
          box-sizing: border-box;
        }

        .hero-giant-text {
          font-family: var(--font-display, 'Syne', sans-serif);
          font-weight: 800;
          font-size: clamp(2.2rem, 7.2vw, 6.2rem);
          line-height: 0.96;
          letter-spacing: -0.02em;
          text-transform: uppercase;
          background: linear-gradient(180deg, #fff5d6 0%, #f5b942 48%, #9e6308 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          opacity: 0.92;
          display: inline-block;
          max-width: 100%;
          white-space: nowrap;
        }

        .hero-grid {
          position: relative;
          z-index: 3;
          display: grid;
          grid-template-columns: 1.05fr 1.3fr 0.95fr;
          align-items: flex-end;
          gap: 24px;
          margin-top: 64px;
          padding-bottom: 24px;
        }

        .hero-left {
          padding-bottom: 18px;
        }

        .availability-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 14px;
          border-radius: 999px;
          background: rgba(245, 166, 35, 0.1);
          border: 1px solid rgba(245, 166, 35, 0.3);
          font-size: 0.74rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: var(--gold-light, #ffd166);
          margin-bottom: 18px;
        }

        .hero-subheadline {
          font-family: var(--font-display, 'Syne', sans-serif);
          font-size: clamp(1.9rem, 3.1vw, 3rem);
          font-weight: 800;
          line-height: 1.04;
          letter-spacing: -0.02em;
          margin-bottom: 16px;
          color: var(--text-main, #f7f4ed);
        }

        .hero-description {
          color: var(--text-muted, #9ca3af);
          font-size: 0.95rem;
          max-width: 400px;
          margin-bottom: 24px;
        }

        .hero-cta-group {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 24px;
        }

        .hero-socials {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        /* CENTER CHARACTER */
        .hero-center {
          display: flex;
          justify-content: center;
          align-items: flex-end;
        }

        .character-stage {
          position: relative;
          width: 100%;
          max-width: 440px;
          display: flex;
          justify-content: center;
        }

        .character-halo {
          position: absolute;
          bottom: 12%;
          width: 310px;
          height: 310px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(245, 166, 35, 0.22) 0%, rgba(7, 8, 9, 0) 70%);
          z-index: 0;
          pointer-events: none;
        }

        .character-3d-wrapper {
          position: relative;
          z-index: 2;
          width: 100%;
          transition: transform 0.08s linear;
          will-change: transform;
        }

        .character-svg {
          width: 100%;
          height: auto;
          display: block;
          filter: drop-shadow(0 20px 35px rgba(0, 0, 0, 0.85));
        }

        .character-badge-floating {
          position: absolute;
          bottom: 14px;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(13, 14, 17, 0.9);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(245, 166, 35, 0.35);
          padding: 7px 15px;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.75rem;
          color: var(--text-main, #f7f4ed);
          white-space: nowrap;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
        }

        .gold-icon {
          color: var(--gold-primary, #f5a623);
        }

        /* RIGHT HERO CARD */
        .hero-right {
          padding-bottom: 18px;
          display: flex;
          justify-content: flex-end;
        }

        .hero-status-card {
          background: rgba(18, 20, 24, 0.85);
          border: 1px solid var(--border-subtle, rgba(255, 255, 255, 0.08));
          border-radius: 16px;
          padding: 22px;
          max-width: 320px;
          backdrop-filter: blur(10px);
        }

        .status-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 10px;
        }

        .status-title {
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--gold-light, #ffd166);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .status-body {
          font-size: 0.88rem;
          color: var(--text-muted, #9ca3af);
          margin-bottom: 16px;
        }

        .status-body strong {
          color: var(--text-main, #f7f4ed);
        }

        .hero-mini-metrics {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          padding-top: 14px;
          border-top: 1px solid var(--border-subtle, rgba(255, 255, 255, 0.08));
        }

        .mini-metric-val {
          display: block;
          font-family: var(--font-display, 'Syne', sans-serif);
          font-weight: 800;
          font-size: 1.15rem;
          color: var(--gold-primary, #f5a623);
        }

        .mini-metric-lbl {
          font-size: 0.74rem;
          color: var(--text-muted, #9ca3af);
        }

        /* TOOLS STRIP */
        .hero-tools-strip {
          border-top: 1px solid var(--border-subtle, rgba(255, 255, 255, 0.08));
          border-bottom: 1px solid var(--border-subtle, rgba(255, 255, 255, 0.08));
          background: rgba(13, 14, 17, 0.9);
          padding: 22px 0;
          position: relative;
          z-index: 3;
        }

        .tools-strip-label {
          text-align: center;
          font-size: 0.7rem;
          letter-spacing: 0.16em;
          color: var(--text-dim, #6b7280);
          font-weight: 700;
          margin-bottom: 14px;
        }

        .tools-strip-list {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 10px 26px;
        }

        .tool-pill-item {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-muted, #9ca3af);
          transition: var(--transition-smooth);
        }

        .tool-pill-item:hover {
          color: var(--gold-primary, #f5a623);
        }

        /* HERO RESPONSIVE BREAKPOINTS */
        @media (max-width: 1200px) {
          .hero-giant-text {
            font-size: clamp(2rem, 6.8vw, 5.2rem);
          }
          .hero-grid {
            grid-template-columns: 1fr 1.15fr;
          }
          .hero-right {
            grid-column: 1 / -1;
            justify-content: flex-start;
          }
          .hero-status-card {
            max-width: 100%;
            width: 100%;
          }
        }

        @media (max-width: 768px) {
          .hero-section {
            padding-top: 88px;
          }
          .hero-giant-title-wrap {
            position: relative;
            top: 0;
            margin-top: 10px;
            margin-bottom: 0;
            padding: 0 8px;
            /* the wrapper becomes a size container so the name can be sized from its real available width */
            container-type: inline-size;
            /* disable the parallax shift on small screens so the name never gets pushed off-screen */
            transform: none !important;
          }
          /* Name stays on ONE line (AWAIS MUGHAL) and is sized to always fit its container */
          .hero-giant-text {
            /* fallback for browsers without container query units */
            font-size: 5.6vw;
            /* 7cqw = 7% of the available width, so 12 wide characters always fit */
            font-size: min(7cqw, 3.2rem);
            line-height: 1.1;
            letter-spacing: 0;
            white-space: nowrap;
            max-width: 100%;
          }
          .hero-name-line {
            display: inline;
          }
          .hero-grid {
            grid-template-columns: 1fr;
            margin-top: 14px;
            text-align: center;
          }
          .hero-left {
            order: 2;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .hero-center {
            order: 1;
          }
          .hero-right {
            order: 3;
          }
          .hero-description {
            margin-left: auto;
            margin-right: auto;
          }
          .hero-cta-group {
            justify-content: center;
          }
        }

        @media (max-width: 420px) {
          .hero-giant-text {
            font-size: 5.4vw;
            font-size: min(6.8cqw, 2.2rem);
          }
          .hero-cta-group {
            width: 100%;
            flex-direction: column;
          }
          .hero-cta-group a {
            width: 100%;
          }
          .character-badge-floating {
            font-size: 0.68rem;
            padding: 6px 12px;
          }
        }
      `}</style>

      <section
        id="home"
        ref={heroRef}
        className="hero-section"
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Subtle Ambient Gold Spotlights */}
        <div className="hero-glow hero-glow-left" aria-hidden="true" />
        <div className="hero-glow hero-glow-right" aria-hidden="true" />

        <div className="container hero-container">
          {/* Resized Background Poster Name */}
          <div
            className="hero-giant-title-wrap"
            style={{
              transform: `translate3d(${-mouse.x * 12}px, ${-mouse.y * 6}px, 0)`,
            }}
            aria-hidden="true"
          >
            <span className="hero-giant-text">
              <span className="hero-name-line">AWAIS</span>{" "}
              <span className="hero-name-line">MUGHAL</span>
            </span>
          </div>

          {/* Main Hero 3-Zone Responsive Layout */}
          <div className="hero-grid">
            {/* Left Column: Headline, Intro, CTAs */}
            <div className="hero-left reveal-up">
              <div className="availability-pill">
                <span className="pulse-dot" />
                <span>AVAILABLE FOR PROJECTS</span>
              </div>

              <h1 className="sr-only">Awais Mughal - Full Stack Developer</h1>

              <h2 className="hero-subheadline">
                I BUILD <br />
                WEBSITES <br />
                PEOPLE <br />
                <span className="gold-highlight">REMEMBER.</span>
              </h2>

              <p className="hero-description">
                Fast, responsive full-stack web applications with clean MERN
                architecture and motion that feels natural. From first database
                schema to launch day.
              </p>

              <div className="hero-cta-group">
                <Link
                  to="/projects"
                  className="btn-gold-solid"
                  onClick={() =>
                    onNavigate && onNavigate("projects", "/projects")
                  }
                >
                  <span>Explore My Work</span>
                  <FiArrowUpRight size={18} />
                </Link>
                <Link
                  to="/contact"
                  className="btn-dark-pill"
                  onClick={() =>
                    onNavigate && onNavigate("contact", "/contact")
                  }
                >
                  <span>Let&apos;s Talk</span>
                </Link>
              </div>

              <div className="hero-socials">
                <a
                  href="https://github.com/awais-arif-webdev"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="social-icon-btn"
                >
                  <FiGithub size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/awais-arif-webdev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="social-icon-btn"
                >
                  <FiLinkedin size={18} />
                </a>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=awais.arif.fs.dev@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Email Awais Mughal"
                  className="social-icon-btn"
                >
                  <FiMail size={18} />
                </a>
              </div>
            </div>

            {/* Center Column: 3D Mouse-Tracking Developer Portrait */}
            <div className="hero-center">
              <div className="character-stage">
                <div className="character-halo" />

                {/* Interactive SVG Portrait with 3D Perspective */}
                <div
                  className="character-3d-wrapper"
                  style={{
                    transform: `perspective(1000px) rotateY(${headRotateY * 0.45}deg) rotateX(${headRotateX * 0.35}deg)`,
                  }}
                >
                  <svg
                    viewBox="0 0 500 580"
                    className="character-svg"
                    role="img"
                    aria-label="Interactive 3D illustrated portrait of Awais Mughal wearing a dark formal suit and glasses that follow cursor movement"
                  >
                    <defs>
                      <linearGradient
                        id="suitGrad"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#1d1e22" />
                        <stop offset="50%" stopColor="#121316" />
                        <stop offset="100%" stopColor="#090a0c" />
                      </linearGradient>
                      <linearGradient
                        id="skinGrad"
                        x1="0%"
                        y1="0%"
                        x2="0%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#e8b89a" />
                        <stop offset="100%" stopColor="#c99372" />
                      </linearGradient>
                      <linearGradient
                        id="goldRim"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop offset="0%" stopColor="#f5a623" />
                        <stop offset="50%" stopColor="#ffd166" />
                        <stop offset="100%" stopColor="#d48806" />
                      </linearGradient>
                      <linearGradient
                        id="lensSheen"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="rgba(255,255,255,0.22)" />
                        <stop offset="50%" stopColor="rgba(245,166,35,0.08)" />
                        <stop offset="100%" stopColor="rgba(0,0,0,0.1)" />
                      </linearGradient>
                      <filter
                        id="softShadow"
                        x="-15%"
                        y="-15%"
                        width="130%"
                        height="130%"
                      >
                        <feDropShadow
                          dx="0"
                          dy="14"
                          stdDeviation="12"
                          floodColor="#000"
                          floodOpacity="0.65"
                        />
                      </filter>
                    </defs>

                    {/* TORSO & CROSSED ARMS IN DARK FORMAL SUIT */}
                    <g
                      style={{
                        transform: `translate(${shoulderShiftX}px, 0px)`,
                        transition: "transform 0.08s linear",
                      }}
                    >
                      {/* Suit Shoulders & Jacket */}
                      <path
                        d="M85 575 C88 430, 130 375, 250 375 C370 375, 412 430, 415 575 Z"
                        fill="url(#suitGrad)"
                        stroke="rgba(245, 166, 35, 0.22)"
                        strokeWidth="1.5"
                        filter="url(#softShadow)"
                      />

                      {/* Crisp Charcoal / Dark Inner Shirt & Gold Collar Pin */}
                      <path d="M210 375 L250 465 L290 375 Z" fill="#18191c" />
                      {/* Suit Lapels */}
                      <path
                        d="M192 372 L250 480 L220 495 L168 415 Z"
                        fill="#23252a"
                        stroke="#2f3138"
                        strokeWidth="1"
                      />
                      <path
                        d="M308 372 L250 480 L280 495 L332 415 Z"
                        fill="#23252a"
                        stroke="#2f3138"
                        strokeWidth="1"
                      />

                      {/* Subtle Gold Lapel Pin */}
                      <circle cx="202" cy="422" r="4" fill="url(#goldRim)" />

                      {/* Crossed Arms Pose */}
                      <path
                        d="M95 570 C100 475, 135 435, 185 455 L340 490 C365 495, 375 535, 355 570 Z"
                        fill="#16171b"
                        stroke="#2a2c32"
                        strokeWidth="1.5"
                      />
                      {/* Right Hand Tucked on Left Arm */}
                      <path
                        d="M150 492 C135 486, 132 465, 152 460 L185 465 C192 475, 185 495, 165 495 Z"
                        fill="url(#skinGrad)"
                      />
                      {/* Left Hand Resting on Right Elbow */}
                      <path
                        d="M332 478 C352 472, 366 485, 358 504 L328 512 Z"
                        fill="url(#skinGrad)"
                      />
                      {/* Luxury Watch with Gold Bezel */}
                      <rect
                        x="178"
                        y="464"
                        width="14"
                        height="28"
                        rx="4"
                        transform="rotate(14 185 478)"
                        fill="#0d0e11"
                        stroke="url(#goldRim)"
                        strokeWidth="2.5"
                      />
                      {/* Right Forearm Overlapping Front */}
                      <path
                        d="M165 480 L368 475 C395 478, 408 525, 398 575 L140 575 Z"
                        fill="#1d1f24"
                        stroke="rgba(255,255,255,0.07)"
                        strokeWidth="1.5"
                      />
                    </g>

                    {/* NECK */}
                    <path
                      d="M218 320 L218 392 C218 410, 282 410, 282 392 L282 320 Z"
                      fill="#ba8362"
                    />
                    {/* Neck Shadow */}
                    <path
                      d="M218 325 Q250 355 282 325 L282 360 Q250 380 218 360 Z"
                      fill="rgba(0,0,0,0.28)"
                    />

                    {/* DYNAMIC 3D ROTATING HEAD GROUP */}
                    <g
                      style={{
                        transform: `translate(${faceShiftX}px, ${faceShiftY}px) rotate(${headRotateZ}deg)`,
                        transformOrigin: "250px 250px",
                      }}
                    >
                      {/* Ears */}
                      <ellipse
                        cx={162 - faceShiftX * 0.25}
                        cy="248"
                        rx="14"
                        ry="26"
                        fill="#c99372"
                      />
                      <ellipse
                        cx={338 - faceShiftX * 0.25}
                        cy="248"
                        rx="14"
                        ry="26"
                        fill="#c99372"
                      />

                      {/* Base Head Shape */}
                      <path
                        d="M168 185 C168 120, 332 120, 332 185 C336 245, 326 322, 250 344 C174 322, 164 245, 168 185 Z"
                        fill="url(#skinGrad)"
                        filter="url(#softShadow)"
                      />

                      {/* Stylized Hair */}
                      <path
                        d="M158 205 C150 145, 178 96, 238 92 C295 88, 348 112, 344 178 C342 195, 336 210, 331 215 C329 175, 314 148, 275 144 C232 140, 192 152, 170 185 C166 195, 163 208, 158 205 Z"
                        fill="#141519"
                      />
                      <path
                        d="M178 135 Q245 102 320 132 Q275 118 205 142 Z"
                        fill="#272930"
                      />

                      {/* INTERACTIVE INNER FACIAL FEATURES */}
                      <g
                        style={{
                          transform: `translate(${faceShiftX * 0.65}px, ${faceShiftY * 0.55}px)`,
                        }}
                      >
                        {/* Eyebrows */}
                        <path
                          d={`M186 ${196 - mouse.y * 4} Q212 ${186 - mouse.y * 5} 234 ${195 - mouse.y * 3}`}
                          fill="none"
                          stroke="#16171a"
                          strokeWidth="6.5"
                          strokeLinecap="round"
                        />
                        <path
                          d={`M266 ${195 - mouse.y * 3} Q288 ${186 - mouse.y * 5} 314 ${196 - mouse.y * 4}`}
                          fill="none"
                          stroke="#16171a"
                          strokeWidth="6.5"
                          strokeLinecap="round"
                        />

                        {/* Left Eye */}
                        <g transform="translate(210, 220)">
                          <ellipse
                            cx="0"
                            cy="0"
                            rx="16"
                            ry={isBlinking ? 1.5 : 10}
                            fill="#ffffff"
                            style={{ transition: "ry 0.08s ease" }}
                          />
                          {!isBlinking && (
                            <g
                              transform={`translate(${pupilShiftX}, ${pupilShiftY})`}
                            >
                              <circle cx="0" cy="0" r="6.5" fill="#2b1d14" />
                              <circle cx="0" cy="0" r="3.2" fill="#090a0c" />
                              <circle
                                cx="2.2"
                                cy="-2.2"
                                r="1.8"
                                fill="#ffffff"
                              />
                            </g>
                          )}
                        </g>

                        {/* Right Eye */}
                        <g transform="translate(290, 220)">
                          <ellipse
                            cx="0"
                            cy="0"
                            rx="16"
                            ry={isBlinking ? 1.5 : 10}
                            fill="#ffffff"
                            style={{ transition: "ry 0.08s ease" }}
                          />
                          {!isBlinking && (
                            <g
                              transform={`translate(${pupilShiftX}, ${pupilShiftY})`}
                            >
                              <circle cx="0" cy="0" r="6.5" fill="#2b1d14" />
                              <circle cx="0" cy="0" r="3.2" fill="#090a0c" />
                              <circle
                                cx="2.2"
                                cy="-2.2"
                                r="1.8"
                                fill="#ffffff"
                              />
                            </g>
                          )}
                        </g>

                        {/* Nose */}
                        <path
                          d={`M250 218 L${248 + mouse.x * 4} 262 Q250 268 ${258 + mouse.x * 3} 264`}
                          fill="none"
                          stroke="#a97253"
                          strokeWidth="3.5"
                          strokeLinecap="round"
                        />

                        {/* Full Groomed Beard & Mustache */}
                        <path
                          d="M167 240 C168 278, 185 335, 250 347 C315 335, 332 278, 333 240 C326 268, 312 292, 286 300 C276 282, 262 276, 250 276 C238 276, 224 282, 214 300 C188 292, 174 268, 167 240 Z"
                          fill="#16171b"
                        />
                        <path
                          d="M210 282 Q230 268 250 277 Q270 268 290 282 Q272 290 250 285 Q228 290 210 282 Z"
                          fill="#121317"
                        />

                        {/* Confident Smile */}
                        <path
                          d="M222 287 Q250 308 278 287 Q250 296 222 287 Z"
                          fill="#ffffff"
                        />
                        <path
                          d="M220 286 Q250 310 280 286"
                          fill="none"
                          stroke="#0f1014"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                        />

                        {/* PREMIUM EYEGLASSES */}
                        <g
                          style={{
                            transform: `translate(${mouse.x * 4}px, ${mouse.y * 3}px)`,
                          }}
                        >
                          <rect
                            x="176"
                            y="198"
                            width="66"
                            height="46"
                            rx="12"
                            fill="url(#lensSheen)"
                            stroke="#111215"
                            strokeWidth="6"
                          />
                          <rect
                            x="258"
                            y="198"
                            width="66"
                            height="46"
                            rx="12"
                            fill="url(#lensSheen)"
                            stroke="#111215"
                            strokeWidth="6"
                          />
                          <path
                            d="M242 214 Q250 208 258 214"
                            fill="none"
                            stroke="url(#goldRim)"
                            strokeWidth="4"
                          />
                          <circle
                            cx="182"
                            cy="206"
                            r="2.5"
                            fill="url(#goldRim)"
                          />
                          <circle
                            cx="318"
                            cy="206"
                            r="2.5"
                            fill="url(#goldRim)"
                          />
                          <path
                            d={`M${190 - mouse.x * 6} 204 L${202 - mouse.x * 6} 238`}
                            stroke="rgba(255,255,255,0.35)"
                            strokeWidth="3.5"
                            strokeLinecap="round"
                          />
                          <path
                            d={`M${272 - mouse.x * 6} 204 L${284 - mouse.x * 6} 238`}
                            stroke="rgba(255,255,255,0.35)"
                            strokeWidth="3.5"
                            strokeLinecap="round"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>

                  {/* Interactive Cursor Hint Badge */}
                  <div className="character-badge-floating">
                    <FiCode className="gold-icon" />
                    <span>Move cursor — 3D Head Tracking Active</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Open For New Projects Note */}
            <div className="hero-right reveal-up">
              <div className="hero-status-card">
                <div className="status-header">
                  <span className="pulse-dot" />
                  <span className="status-title">Open for new projects</span>
                </div>
                <p className="status-body">
                  <strong>From landing pages to full websites.</strong> Tell me
                  what you&apos;re building and I&apos;ll help you launch it
                  with clean code and standout design.
                </p>
                <div className="hero-mini-metrics">
                  <div>
                    <span className="mini-metric-val">15+</span>
                    <span className="mini-metric-lbl">Projects Built</span>
                  </div>
                  <div>
                    <span className="mini-metric-val">MERN</span>
                    <span className="mini-metric-lbl">Core Stack</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Platforms & Tools Bar */}
        <div className="hero-tools-strip">
          <div className="container">
            <p className="tools-strip-label">
              PLATFORMS &amp; TOOLS I WORK WITH
            </p>
            <div className="tools-strip-list">
              {marqueeTools.map((tool, index) => (
                <span key={index} className="tool-pill-item">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;