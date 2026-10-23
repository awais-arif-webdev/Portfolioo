import React, { useEffect } from 'react';
import { FiHome, FiArrowUpRight, FiTerminal, FiUser, FiFolder, FiMail } from 'react-icons/fi';

const QUICK_LINKS = [
  { id: 'about', label: 'About', path: '/about', Icon: FiUser },
  { id: 'projects', label: 'Projects', path: '/projects', Icon: FiFolder },
  { id: 'contact', label: 'Contact', path: '/contact', Icon: FiMail }
];

const NotFound = ({ onNavigate }) => {
  const attemptedPath =
    typeof window !== 'undefined' ? window.location.pathname : '/';

  // Update the browser tab title while the 404 page is visible
  useEffect(() => {
    const previousTitle = document.title;
    document.title = '404 - Page Not Found | Awais Mughal';
    return () => {
      document.title = previousTitle;
    };
  }, []);

  const goTo = (e, id, path) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(id, path);
    }
  };

  return (
    <>
      <style>{`
        .nf-section {
          position: relative;
          min-height: 100vh;
          min-height: 100svh;
          padding: 130px 0 90px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          text-align: center;
          background:
            radial-gradient(circle at 50% 28%, rgba(245, 166, 35, 0.14) 0%, rgba(7, 8, 9, 0) 58%),
            linear-gradient(180deg, #070809 0%, #0b0c0f 100%);
        }

        .nf-glow {
          position: absolute;
          width: 380px;
          height: 380px;
          border-radius: 50%;
          filter: blur(130px);
          pointer-events: none;
          z-index: 0;
        }

        .nf-glow-left {
          top: 8%;
          left: -120px;
          background: rgba(245, 166, 35, 0.12);
        }

        .nf-glow-right {
          bottom: 6%;
          right: -120px;
          background: rgba(212, 136, 6, 0.1);
        }

        .nf-inner {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 680px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .nf-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 14px;
          border-radius: 999px;
          background: rgba(245, 166, 35, 0.1);
          border: 1px solid rgba(245, 166, 35, 0.3);
          font-size: 0.74rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: var(--gold-light, #ffd166);
          margin-bottom: 8px;
        }

        .nf-code {
          font-family: var(--font-display, 'Syne', sans-serif);
          font-weight: 800;
          font-size: clamp(6rem, 24vw, 13rem);
          line-height: 1;
          letter-spacing: -0.04em;
          background: linear-gradient(180deg, #fff5d6 0%, #f5b942 48%, #9e6308 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          opacity: 0.95;
          user-select: none;
          animation: nfFloat 5s ease-in-out infinite;
        }

        @keyframes nfFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .nf-title {
          font-family: var(--font-display, 'Syne', sans-serif);
          font-size: clamp(1.6rem, 4vw, 2.5rem);
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -0.02em;
          color: var(--text-main, #f7f4ed);
          margin: 6px 0 14px;
        }

        .nf-text {
          color: var(--text-muted, #9ca3af);
          font-size: 0.96rem;
          max-width: 480px;
          margin-bottom: 28px;
        }

        .nf-terminal {
          width: 100%;
          max-width: 460px;
          background: rgba(18, 20, 24, 0.9);
          border: 1px solid var(--border-subtle, rgba(255, 255, 255, 0.08));
          border-radius: 14px;
          overflow: hidden;
          text-align: left;
          margin-bottom: 30px;
          box-shadow: 0 18px 40px rgba(0, 0, 0, 0.45);
        }

        .nf-terminal-bar {
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 10px 14px;
          background: rgba(255, 255, 255, 0.03);
          border-bottom: 1px solid var(--border-subtle, rgba(255, 255, 255, 0.08));
          font-size: 0.72rem;
          color: var(--text-dim, #6b7280);
        }

        .nf-dot {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.14);
          flex-shrink: 0;
        }

        .nf-dot-gold {
          background: var(--gold-primary, #f5a623);
        }

        .nf-terminal-title {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-left: 6px;
        }

        .nf-terminal-body {
          padding: 16px 18px;
          font-family: 'Courier New', Courier, monospace;
          font-size: 0.84rem;
          line-height: 1.7;
          color: var(--text-muted, #9ca3af);
        }

        .nf-terminal-body p {
          overflow-wrap: anywhere;
          word-break: break-word;
        }

        .nf-prompt {
          color: var(--gold-primary, #f5a623);
          margin-right: 8px;
        }

        .nf-path {
          color: var(--text-main, #f7f4ed);
        }

        .nf-error {
          color: #f87171;
        }

        .nf-hint {
          color: var(--text-dim, #6b7280);
        }

        .nf-actions {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 12px;
          margin-bottom: 24px;
        }

        .nf-quick {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 10px;
        }

        .nf-quick-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 9px 16px;
          border-radius: 999px;
          background: var(--bg-card, #121418);
          border: 1px solid var(--border-subtle, rgba(255, 255, 255, 0.08));
          font-size: 0.85rem;
          color: var(--text-main, #f7f4ed);
          transition: var(--transition-smooth, all 0.3s ease);
        }

        .nf-quick-link:hover {
          border-color: var(--gold-primary, #f5a623);
          color: var(--gold-primary, #f5a623);
        }

        @media (prefers-reduced-motion: reduce) {
          .nf-code {
            animation: none;
          }
        }

        @media (max-width: 768px) {
          .nf-section {
            padding: 112px 0 72px;
          }
        }

        @media (max-width: 480px) {
          .nf-section {
            padding: 100px 0 60px;
          }

          .nf-actions {
            width: 100%;
            flex-direction: column;
          }

          .nf-actions a {
            width: 100%;
          }

          .nf-terminal-body {
            font-size: 0.78rem;
            padding: 14px;
          }

          .nf-quick-link {
            flex: 1 1 120px;
            justify-content: center;
          }
        }
      `}</style>

      <main className="nf-section">
        <div className="nf-glow nf-glow-left" aria-hidden="true" />
        <div className="nf-glow nf-glow-right" aria-hidden="true" />

        <div className="container">
          <div className="nf-inner">
            <span className="nf-eyebrow">
              <span className="pulse-dot" />
              <span>PAGE NOT FOUND</span>
            </span>

            <div className="nf-code" aria-hidden="true">
              404
            </div>

            <h1 className="nf-title">
              LOST IN THE <span className="gold-highlight">CODE?</span>
            </h1>

            <p className="nf-text">
              The page you are looking for doesn&apos;t exist, was moved, or the
              link is incorrect. Let&apos;s get you back on track.
            </p>

            <div className="nf-terminal" aria-hidden="true">
              <div className="nf-terminal-bar">
                <span className="nf-dot" />
                <span className="nf-dot" />
                <span className="nf-dot nf-dot-gold" />
                <span className="nf-terminal-title">
                  <FiTerminal size={13} />
                  <span>terminal</span>
                </span>
              </div>
              <div className="nf-terminal-body">
                <p>
                  <span className="nf-prompt">$</span>
                  GET <span className="nf-path">{attemptedPath}</span>
                </p>
                <p className="nf-error">404 - Route not found</p>
                <p className="nf-hint"># try heading back home</p>
              </div>
            </div>

            <div className="nf-actions">
              <a
                href="/"
                className="btn-gold-solid"
                onClick={(e) => goTo(e, 'home', '/')}
              >
                <FiHome size={17} />
                <span>Back to Home</span>
              </a>

              <a
                href="/contact"
                className="btn-dark-pill"
                onClick={(e) => goTo(e, 'contact', '/contact')}
              >
                <span>Report a Problem</span>
                <FiArrowUpRight size={17} />
              </a>
            </div>

            <div className="nf-quick">
              {QUICK_LINKS.map(({ id, label, path, Icon }) => (
                <a
                  key={id}
                  href={path}
                  className="nf-quick-link"
                  onClick={(e) => goTo(e, id, path)}
                >
                  <Icon size={16} />
                  <span>{label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default NotFound;