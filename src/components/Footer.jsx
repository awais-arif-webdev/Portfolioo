// import React from "react";
// import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from "react-icons/fi";
// import { FiInstagram } from 'react-icons/fi';

// const Footer = ({ onNavigate }) => {
//   const scrollToTop = () => {
//     onNavigate("home", "/");
//   };

//   return (
//     <>
//       <style>{`
//         /* =========================================================
//            FOOTER SECTION
//            ========================================================= */
//         .footer-section {
//           background: #050607;
//           border-top: 1px solid var(--border-subtle, rgba(255, 255, 255, 0.08));
//           padding: 72px 0 32px;
//           overflow: hidden;
//         }

//         .footer-grid {
//           display: grid;
//           grid-template-columns: 1.4fr 0.8fr 1fr 1.1fr;
//           gap: 36px;
//           padding-bottom: 48px;
//           border-bottom: 1px solid var(--border-subtle, rgba(255, 255, 255, 0.08));
//         }

//         .footer-brand-col,
//         .footer-links-col,
//         .footer-cta-col {
//           min-width: 0;
//         }

//         .footer-tagline {
//           color: var(--text-muted, #9ca3af);
//           font-size: 0.88rem;
//           margin: 14px 0 20px;
//           max-width: 320px;
//         }

//         .footer-socials {
//           display: flex;
//           gap: 10px;
//         }

//         .footer-links-col h4,
//         .footer-cta-col h4 {
//           font-family: var(--font-display, 'Syne', sans-serif);
//           font-size: 1rem;
//           margin-bottom: 16px;
//           color: var(--text-main, #f7f4ed);
//         }

//         .footer-links-col ul {
//           display: flex;
//           flex-direction: column;
//           gap: 10px;
//         }

//         .footer-links-col a {
//           font-size: 0.88rem;
//           color: var(--text-muted, #9ca3af);
//           transition: var(--transition-smooth, all 0.3s ease);
//         }

//         .footer-links-col a:hover {
//           color: var(--gold-primary, #f5a623);
//         }

//         .footer-status-badge {
//           display: inline-flex;
//           align-items: center;
//           gap: 8px;
//           padding: 6px 12px;
//           border-radius: 999px;
//           background: rgba(34, 197, 94, 0.1);
//           border: 1px solid rgba(34, 197, 94, 0.3);
//           font-size: 0.7rem;
//           font-weight: 700;
//           color: #86efac;
//           margin-bottom: 14px;
//           max-width: 100%;
//         }

//         .footer-status-badge .pulse-dot {
//           flex-shrink: 0;
//         }

//         .footer-contact-line {
//           font-weight: 600;
//           font-size: 0.92rem;
//           color: var(--text-main, #f7f4ed);
//           overflow-wrap: anywhere;
//           word-break: break-word;
//         }

//         .footer-contact-sub {
//           font-size: 0.84rem;
//           color: var(--text-muted, #9ca3af);
//           margin-top: 4px;
//         }

//         .footer-bottom {
//           padding-top: 26px;
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           font-size: 0.84rem;
//           color: var(--text-dim, #6b7280);
//           flex-wrap: wrap;
//           gap: 14px;
//         }

//         .back-to-top-btn {
//           display: inline-flex;
//           align-items: center;
//           gap: 6px;
//           background: var(--bg-card, #121418);
//           border: 1px solid var(--border-subtle, rgba(255, 255, 255, 0.08));
//           color: var(--text-main, #f7f4ed);
//           padding: 8px 14px;
//           border-radius: 999px;
//           font-size: 0.8rem;
//           cursor: pointer;
//           transition: var(--transition-smooth, all 0.3s ease);
//         }

//         .back-to-top-btn:hover {
//           border-color: var(--gold-primary, #f5a623);
//           color: var(--gold-primary, #f5a623);
//         }

//         /* =========================================================
//            RESPONSIVE — LARGE TABLET / SMALL LAPTOP (<= 1024px)
//            ========================================================= */
//         @media (max-width: 1024px) {
//           .footer-section {
//             padding: 64px 0 28px;
//           }

//           .footer-grid {
//             grid-template-columns: repeat(2, 1fr);
//             gap: 40px 32px;
//             padding-bottom: 40px;
//           }

//           .footer-tagline {
//             max-width: 420px;
//           }
//         }

//         /* =========================================================
//            RESPONSIVE — TABLET PORTRAIT / LARGE PHONE (<= 768px)
//            ========================================================= */
//         @media (max-width: 768px) {
//           .footer-section {
//             padding: 52px 0 24px;
//           }

//           .footer-grid {
//             grid-template-columns: 1fr;
//             gap: 36px;
//             padding-bottom: 36px;
//             text-align: center;
//           }

//           .footer-brand-col,
//           .footer-links-col,
//           .footer-cta-col {
//             display: flex;
//             flex-direction: column;
//             align-items: center;
//           }

//           .footer-tagline {
//             max-width: 480px;
//             margin: 14px auto 20px;
//           }

//           .footer-socials {
//             justify-content: center;
//           }

//           .footer-links-col ul {
//             align-items: center;
//           }

//           .footer-links-col a {
//             display: inline-block;
//             padding: 4px 0;
//           }

//           .footer-status-badge {
//             justify-content: center;
//             text-align: center;
//             line-height: 1.4;
//           }

//           .footer-bottom {
//             flex-direction: column;
//             justify-content: center;
//             text-align: center;
//             padding-top: 22px;
//           }
//         }

//         /* =========================================================
//            RESPONSIVE — MOBILE (<= 480px)
//            ========================================================= */
//         @media (max-width: 480px) {
//           .footer-section {
//             padding: 44px 0 22px;
//           }

//           .footer-grid {
//             gap: 30px;
//             padding-bottom: 30px;
//           }

//           .footer-tagline {
//             font-size: 0.85rem;
//           }

//           .footer-links-col h4,
//           .footer-cta-col h4 {
//             margin-bottom: 12px;
//           }

//           .footer-links-col ul {
//             gap: 6px;
//           }

//           .footer-status-badge {
//             font-size: 0.66rem;
//             padding: 7px 12px;
//           }

//           .footer-contact-line {
//             font-size: 0.88rem;
//           }

//           .footer-contact-sub,
//           .footer-bottom {
//             font-size: 0.8rem;
//           }

//           .back-to-top-btn {
//             padding: 10px 18px;
//           }
//         }

//         /* =========================================================
//            RESPONSIVE — SMALL MOBILE (<= 360px)
//            ========================================================= */
//         @media (max-width: 360px) {
//           .footer-grid {
//             gap: 26px;
//           }

//           .footer-status-badge {
//             font-size: 0.62rem;
//             letter-spacing: 0;
//           }

//           .footer-contact-line {
//             font-size: 0.84rem;
//           }
//         }
//       `}</style>

//       <footer className="footer-section">
//         <div className="container">
//           <div className="footer-grid">
//             <div className="footer-brand-col">
//               <a
//                 href="/"
//                 className="brand-logo"
//                 onClick={(e) => {
//                   e.preventDefault();
//                   onNavigate("home", "/");
//                 }}
//               >
//                 {/* <span className="brand-avatar">AM</span> */}
//                 <span className="brand-text">
//                   Awais<strong>Mughal</strong>
//                 </span>
//               </a>
//               <p className="footer-tagline">
//                 Building modern full-stack web applications, responsive
//                 interfaces, and scalable digital solutions that help brands
//                 grow.
//               </p>
//               <div className="footer-socials">
//                 <a
//                   href="https://github.com/awais-arif-webdev/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label="GitHub"
//                   className="social-icon-btn"
//                 >
//                   <FiGithub size={17} />
//                 </a>
//                 <a
//                   href="https://www.linkedin.com/in/awais-arif-webdev/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label="LinkedIn"
//                   className="social-icon-btn"
//                 >
//                   <FiLinkedin size={17} />
//                 </a>

//                 <a
//                   href="https://mail.google.com/mail/?view=cm&fs=1&to=awais.arif.fs.dev@gmail.com"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label="Email Awais Mughal"
//                   className="social-icon-btn"
//                 >
//                   <FiMail size={18} />
//                 </a>
//                 <a
//                   href="https://www.instagram.com/cyb3r.awais/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label="Instagram Profile"
//                   className="social-icon-btn"
//                 >
//                   <FiInstagram size={18} />
//                 </a>
//               </div>
//             </div>

//             <div className="footer-links-col">
//               <h4>Quick Links</h4>
//               <ul>
//                 {[
//                   { id: "home", label: "Home", path: "/" },
//                   { id: "about", label: "About", path: "/about" },
//                   { id: "skills", label: "Skills", path: "/skills" },
//                   { id: "projects", label: "Portfolio", path: "/projects" },
//                   { id: "process", label: "Process", path: "/process" },
//                   { id: "contact", label: "Contact", path: "/contact" },
//                 ].map((item) => (
//                   <li key={item.id}>
//                     <a
//                       href={item.path}
//                       onClick={(e) => {
//                         e.preventDefault();
//                         onNavigate(item.id, item.path);
//                       }}
//                     >
//                       {item.label}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             <div className="footer-links-col">
//               <h4>Core Services</h4>
//               <ul>
//                 <li>
//                   <a
//                     href="/services"
//                     onClick={(e) => {
//                       e.preventDefault();
//                       onNavigate("services", "/services");
//                     }}
//                   >
//                     Frontend Development
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="/services"
//                     onClick={(e) => {
//                       e.preventDefault();
//                       onNavigate("services", "/services");
//                     }}
//                   >
//                     MERN Stack Web Apps
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="/services"
//                     onClick={(e) => {
//                       e.preventDefault();
//                       onNavigate("services", "/services");
//                     }}
//                   >
//                     Responsive UI Design
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="/services"
//                     onClick={(e) => {
//                       e.preventDefault();
//                       onNavigate("services", "/services");
//                     }}
//                   >
//                     RESTful API Engineering
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="/services"
//                     onClick={(e) => {
//                       e.preventDefault();
//                       onNavigate("services", "/services");
//                     }}
//                   >
//                     MongoDB &amp; MySQL Design
//                   </a>
//                 </li>
//               </ul>
//             </div>

//             <div className="footer-cta-col">
//               <h4>Let&apos;s Talk</h4>
//               <div className="footer-status-badge">
//                 <span className="pulse-dot" />
//                 <span>AVAILABLE FOR FREELANCE &amp; FULL-TIME</span>
//               </div>
//               <p className="footer-contact-line">awais.arif.fs.dev@gmail.com</p>
//               <p className="footer-contact-sub">Lahore, Punjab, Pakistan</p>
//             </div>
//           </div>

//           <div className="footer-bottom">
//             <p>
//               &copy; {new Date().getFullYear()} Awais Mughal. Crafted with
//               React.js.
//             </p>
//             <button
//               type="button"
//               className="back-to-top-btn"
//               onClick={scrollToTop}
//               aria-label="Scroll back to top"
//             >
//               <span>Back to top</span>
//               <FiArrowUp size={16} />
//             </button>
//           </div>
//         </div>
//       </footer>
//     </>
//   );
// };

// export default Footer;






import React from "react";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiArrowUp,
  FiInstagram,
} from "react-icons/fi";

const Footer = ({ onNavigate }) => {
  const scrollToTop = () => {
    onNavigate("home", "/");
  };

  return (
    <>
      <style>{`
        /* =========================================================
           FOOTER SECTION
           ========================================================= */
        .footer-section {
          background: #050607;
          border-top: 1px solid var(--border-subtle, rgba(255, 255, 255, 0.08));
          padding: 72px 0 32px;
          overflow: hidden;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1.4fr 0.8fr 1fr 1.1fr;
          gap: 36px;
          padding-bottom: 48px;
          border-bottom: 1px solid var(--border-subtle, rgba(255, 255, 255, 0.08));
        }

        .footer-brand-col,
        .footer-links-col,
        .footer-cta-col {
          min-width: 0;
        }

        .footer-tagline {
          color: var(--text-muted, #9ca3af);
          font-size: 0.88rem;
          margin: 14px 0 20px;
          max-width: 320px;
        }

        .footer-socials {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .footer-links-col h4,
        .footer-cta-col h4 {
          font-family: var(--font-display, 'Syne', sans-serif);
          font-size: 1rem;
          margin-bottom: 16px;
          color: var(--text-main, #f7f4ed);
        }

        .footer-links-col ul {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .footer-links-col a {
          font-size: 0.88rem;
          color: var(--text-muted, #9ca3af);
          transition: var(--transition-smooth, all 0.3s ease);
        }

        .footer-links-col a:hover {
          color: var(--gold-primary, #f5a623);
        }

        /* Mobile-only link (hidden on tablet and desktop) */
        .footer-link-mobile-only {
          display: none;
        }

        .footer-status-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 12px;
          border-radius: 999px;
          background: rgba(34, 197, 94, 0.1);
          border: 1px solid rgba(34, 197, 94, 0.3);
          font-size: 0.7rem;
          font-weight: 700;
          color: #86efac;
          margin-bottom: 14px;
          max-width: 100%;
        }

        .footer-status-badge .pulse-dot {
          flex-shrink: 0;
        }

        .footer-contact-line {
          font-weight: 600;
          font-size: 0.92rem;
          color: var(--text-main, #f7f4ed);
          overflow-wrap: anywhere;
          word-break: break-word;
        }

        .footer-contact-sub {
          font-size: 0.84rem;
          color: var(--text-muted, #9ca3af);
          margin-top: 4px;
        }

        .footer-bottom {
          padding-top: 26px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.84rem;
          color: var(--text-dim, #6b7280);
          flex-wrap: wrap;
          gap: 14px;
        }

        .back-to-top-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: var(--bg-card, #121418);
          border: 1px solid var(--border-subtle, rgba(255, 255, 255, 0.08));
          color: var(--text-main, #f7f4ed);
          padding: 8px 14px;
          border-radius: 999px;
          font-size: 0.8rem;
          cursor: pointer;
          transition: var(--transition-smooth, all 0.3s ease);
        }

        .back-to-top-btn:hover {
          border-color: var(--gold-primary, #f5a623);
          color: var(--gold-primary, #f5a623);
        }

        /* =========================================================
           RESPONSIVE — TABLET / SMALL LAPTOP (<= 1024px)
           Brand on top (full width), Quick Links + Core Services
           side by side, contact block at the bottom (full width)
           ========================================================= */
        @media (max-width: 1024px) {
          .footer-section {
            padding: 64px 0 28px;
          }

          .footer-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 40px 32px;
            padding-bottom: 40px;
          }

          .footer-brand-col,
          .footer-cta-col {
            grid-column: 1 / -1;
          }

          .footer-tagline {
            max-width: 520px;
          }
        }

        /* =========================================================
           RESPONSIVE — LARGE PHONE / SMALL TABLET (<= 768px)
           Single centered column. Only the important links are shown:
           Home, About, Services, Projects, Contact.
           Skills, Process and the Core Services column are hidden.
           ========================================================= */
        @media (max-width: 768px) {
          .footer-section {
            padding: 52px 0 24px;
          }

          .footer-grid {
            grid-template-columns: 1fr;
            gap: 32px;
            padding-bottom: 32px;
            text-align: center;
          }

          .footer-brand-col,
          .footer-links-col,
          .footer-cta-col {
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .footer-tagline {
            max-width: 480px;
            margin: 14px auto 20px;
          }

          .footer-socials {
            justify-content: center;
          }

          /* Hide the Core Services column (all its links go to /services) */
          .footer-links-col.footer-services-col {
            display: none;
          }

          /* Hide less important links */
          .footer-link-secondary {
            display: none;
          }

          /* Show the Services link in Quick Links instead */
          .footer-link-mobile-only {
            display: list-item;
          }

          /* Quick Links become a compact wrapped row */
          .footer-links-col.footer-quick-col ul {
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            gap: 4px 22px;
          }

          .footer-links-col a {
            display: inline-block;
            padding: 8px 2px;
          }

          .footer-status-badge {
            justify-content: center;
            text-align: center;
            line-height: 1.4;
          }

          .footer-bottom {
            flex-direction: column;
            justify-content: center;
            text-align: center;
            padding-top: 22px;
          }
        }

        /* =========================================================
           RESPONSIVE — MOBILE (<= 480px)
           ========================================================= */
        @media (max-width: 480px) {
          .footer-section {
            padding: 44px 0 22px;
          }

          .footer-grid {
            gap: 28px;
            padding-bottom: 28px;
          }

          .footer-tagline {
            font-size: 0.85rem;
          }

          .footer-links-col h4,
          .footer-cta-col h4 {
            margin-bottom: 8px;
          }

          .footer-links-col.footer-quick-col ul {
            gap: 2px 18px;
          }

          .footer-status-badge {
            font-size: 0.66rem;
            padding: 7px 12px;
          }

          .footer-contact-line {
            font-size: 0.88rem;
          }

          .footer-contact-sub,
          .footer-bottom {
            font-size: 0.8rem;
          }

          .back-to-top-btn {
            padding: 10px 18px;
          }
        }

        /* =========================================================
           RESPONSIVE — SMALL MOBILE (<= 360px)
           ========================================================= */
        @media (max-width: 360px) {
          .footer-grid {
            gap: 24px;
          }

          .footer-links-col.footer-quick-col ul {
            gap: 2px 14px;
          }

          .footer-status-badge {
            font-size: 0.62rem;
            letter-spacing: 0;
          }

          .footer-contact-line {
            font-size: 0.84rem;
          }
        }
      `}</style>

      <footer className="footer-section">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand-col">
              <a
                href="/"
                className="brand-logo"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate("home", "/");
                }}
              >
                {/* <span className="brand-avatar">AM</span> */}
                <span className="brand-text">
                  Awais <strong>Mughal</strong>
                </span>
              </a>
              <p className="footer-tagline">
                Building modern full-stack web applications, responsive
                interfaces, and scalable digital solutions that help brands
                grow.
              </p>
              <div className="footer-socials">
                <a
                  href="https://github.com/awais-arif-webdev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="social-icon-btn"
                >
                  <FiGithub size={17} />
                </a>
                <a
                  href="https://www.linkedin.com/in/awais-arif-webdev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="social-icon-btn"
                >
                  <FiLinkedin size={17} />
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
                <a
                  href="https://www.instagram.com/cyb3r.awais/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Profile"
                  className="social-icon-btn"
                >
                  <FiInstagram size={18} />
                </a>
              </div>
            </div>

            <div className="footer-links-col footer-quick-col">
              <h4>Quick Links</h4>
              <ul>
                {[
                  { id: "home", label: "Home", path: "/", cls: "" },
                  { id: "about", label: "About", path: "/about", cls: "" },
                  {
                    id: "skills",
                    label: "Skills",
                    path: "/skills",
                    cls: "footer-link-secondary",
                  },
                  {
                    id: "services",
                    label: "Services",
                    path: "/services",
                    cls: "footer-link-mobile-only",
                  },
                  {
                    id: "projects",
                    label: "Portfolio",
                    path: "/projects",
                    cls: "",
                  },
                  {
                    id: "process",
                    label: "Process",
                    path: "/process",
                    cls: "footer-link-secondary",
                  },
                  { id: "contact", label: "Contact", path: "/contact", cls: "" },
                ].map((item) => (
                  <li key={item.id} className={item.cls}>
                    <a
                      href={item.path}
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate(item.id, item.path);
                      }}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-links-col footer-services-col">
              <h4>Core Services</h4>
              <ul>
                <li>
                  <a
                    href="/services"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate("services", "/services");
                    }}
                  >
                    Frontend Development
                  </a>
                </li>
                <li>
                  <a
                    href="/services"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate("services", "/services");
                    }}
                  >
                    MERN Stack Web Apps
                  </a>
                </li>
                <li>
                  <a
                    href="/services"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate("services", "/services");
                    }}
                  >
                    Responsive UI Design
                  </a>
                </li>
                <li>
                  <a
                    href="/services"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate("services", "/services");
                    }}
                  >
                    RESTful API Engineering
                  </a>
                </li>
                <li>
                  <a
                    href="/services"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate("services", "/services");
                    }}
                  >
                    MongoDB &amp; MySQL Design
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-cta-col">
              <h4>Let&apos;s Talk</h4>
              <div className="footer-status-badge">
                <span className="pulse-dot" />
                <span>AVAILABLE FOR FREELANCE &amp; FULL-TIME</span>
              </div>
              <p className="footer-contact-line">awais.arif.fs.dev@gmail.com</p>
              <p className="footer-contact-sub">Lahore, Punjab, Pakistan</p>
            </div>
          </div>

          <div className="footer-bottom">
            <p>
              &copy; {new Date().getFullYear()} Awais Mughal. Crafted with
              React.js.
            </p>
            <button
              type="button"
              className="back-to-top-btn"
              onClick={scrollToTop}
              aria-label="Scroll back to top"
            >
              <span>Back to top</span>
              <FiArrowUp size={16} />
            </button>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;