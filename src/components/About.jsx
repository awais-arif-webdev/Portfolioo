import React from "react";
import { Link } from "react-router-dom";
import { FaGraduationCap, FaCode } from "react-icons/fa";
import { FiDownload, FiAward, FiArrowUpRight } from "react-icons/fi";

const About = ({ onNavigate }) => {
  const handleDownloadCV = () => {
    // const cvContent =

    const link = document.createElement("a");
    link.href = "img/AwaisCV.jpg";
    link.download = "Muhammad Awais CV.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const stats = [
    { value: "2+", label: "Years of Experience" },
    { value: "100%", label: "Responsive Precision" },
    { value: "15+", label: "Full-Stack & Web Projects" },
    { value: "3.3", label: "CGPA (First 2 Semesters)" },
  ];

  return (
    <>
      <style>{`
        .about-section {
          padding: 100px 0;
          position: relative;
          background: var(--bg-primary, #070809);
        }

        /* Top Stats Row */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-bottom: 80px;
        }

        .stat-card {
          background: var(--bg-card, #121418);
          border: 1px solid var(--border-subtle, rgba(255, 255, 255, 0.08));
          border-radius: 14px;
          padding: 24px 20px;
          display: flex;
          align-items: center;
          gap: 16px;
          transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .stat-card:hover {
          border-color: var(--border-gold, rgba(245, 166, 35, 0.38));
          transform: translateY(-4px);
          box-shadow: 0 14px 30px rgba(0, 0, 0, 0.45);
        }

        .stat-icon-box {
          width: 46px;
          height: 46px;
          border-radius: 12px;
          background: rgba(245, 166, 35, 0.12);
          border: 1px solid rgba(245, 166, 35, 0.25);
          color: var(--gold-primary, #f5a623);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .stat-number {
          font-family: var(--font-display, 'Syne', sans-serif);
          font-size: 1.75rem;
          font-weight: 800;
          color: var(--text-main, #f7f4ed);
          line-height: 1.1;
        }

        .stat-label {
          font-size: 0.82rem;
          color: var(--text-muted, #9ca3af);
          margin-top: 2px;
        }

        /* Centered Section Heading */
        .about-heading-block {
          text-align: center;
          max-width: 640px;
          margin: 0 auto 52px;
        }

        .about-heading-block > span {
          display: inline-block;
          font-size: 0.76rem;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--gold-primary, #f5a623);
          background: rgba(245, 166, 35, 0.1);
          border: 1px solid rgba(245, 166, 35, 0.28);
          padding: 6px 16px;
          border-radius: 999px;
          margin-bottom: 14px;
        }

        .about-heading-block h2 {
          font-family: var(--font-display, 'Syne', sans-serif);
          font-size: clamp(2rem, 3.6vw, 3rem);
          font-weight: 800;
          color: var(--text-main, #f7f4ed);
          line-height: 1.1;
          letter-spacing: -0.02em;
          margin-bottom: 12px;
        }

        .about-heading-block p {
          color: var(--text-muted, #9ca3af);
          font-size: 1rem;
        }

        /* Two-Column Equal Height Cards Grid */
        .about-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 28px;
          align-items: stretch;
        }

        .about-info,
        .education-card {
          position: relative;
          background: linear-gradient(160deg, #14171d 0%, #0d0f13 100%);
          border: 1px solid var(--border-subtle, rgba(255, 255, 255, 0.08));
          border-radius: 18px;
          padding: 36px 32px;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          transition: all 0.32s cubic-bezier(0.22, 1, 0.36, 1);
          overflow: hidden;
        }

        .about-info::before,
        .education-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 3px;
          background: linear-gradient(90deg, transparent, var(--gold-primary, #f5a623), transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .about-info:hover,
        .education-card:hover {
          transform: translateY(-6px);
          border-color: var(--border-gold, rgba(245, 166, 35, 0.42));
          box-shadow: 0 20px 42px rgba(0, 0, 0, 0.55);
        }

        .about-info:hover::before,
        .education-card:hover::before {
          opacity: 1;
        }

        .about-icon {
          width: 54px;
          height: 54px;
          border-radius: 14px;
          background: rgba(245, 166, 35, 0.12);
          border: 1px solid rgba(245, 166, 35, 0.32);
          color: var(--gold-primary, #f5a623);
          font-size: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 22px;
          box-shadow: 0 8px 20px rgba(245, 166, 35, 0.15);
        }

        .about-info h3,
        .education-card h3 {
          font-family: var(--font-display, 'Syne', sans-serif);
          font-size: 1.45rem;
          font-weight: 800;
          color: var(--text-main, #f7f4ed);
          margin-bottom: 16px;
          letter-spacing: -0.01em;
        }

        .about-info p,
        .education-card p {
          color: var(--text-muted, #9ca3af);
          font-size: 0.95rem;
          line-height: 1.7;
          margin-bottom: 14px;
        }

        .about-info p:last-of-type {
          margin-bottom: 0;
        }

        .education-card p strong {
          color: var(--gold-light, #ffd166);
          font-weight: 700;
        }

        /* Education CGPA Stat Box */
        .education-stat {
          margin-top: auto;
          padding: 16px 20px;
          border-radius: 12px;
          background: rgba(245, 166, 35, 0.08);
          border: 1px solid rgba(245, 166, 35, 0.32);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }

        .education-stat span {
          font-size: 0.86rem;
          font-weight: 600;
          color: var(--text-muted, #9ca3af);
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }

        .education-stat strong {
          font-family: var(--font-display, 'Syne', sans-serif);
          font-size: 1.35rem;
          font-weight: 800;
          color: var(--gold-primary, #f5a623);
        }

        /* Bottom Action Buttons inside About */
        .about-cta-row {
          margin-top: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        /* Responsive Breakpoints */
        @media (max-width: 1024px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            margin-bottom: 60px;
          }
        }

        @media (max-width: 768px) {
          .about-section {
            padding: 72px 0;
          }
          .about-grid {
            grid-template-columns: 1fr;
          }
          .about-info,
          .education-card {
            padding: 28px 22px;
          }
        }

        @media (max-width: 420px) {
          .stats-grid {
            grid-template-columns: 1fr;
          }
          .education-stat {
            flex-direction: column;
            align-items: flex-start;
            gap: 4px;
          }
          .about-cta-row {
            flex-direction: column;
            width: 100%;
          }
          .about-cta-row button,
          .about-cta-row a {
            width: 100%;
          }
        }
      `}</style>

      <section id="about" className="about-section">
        <div className="container">
          {/* Top Stats Bar */}
          <div className="stats-grid reveal-up">
            {stats.map((stat, idx) => (
              <div className="stat-card" key={idx}>
                <div className="stat-icon-box">
                  <FiAward size={20} />
                </div>
                <div>
                  <h3 className="stat-number">{stat.value}</h3>
                  <p className="stat-label">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Section Heading */}
          <div className="about-heading-block reveal-up">
            <span>ABOUT ME</span>
            <h2>Who I Am</h2>
            <p>
              A developer focused on building scalable, modern web applications.
            </p>
          </div>

          {/* Two-Card Grid Matching Provided Structure */}
          <div className="about-grid">
            {/* First Card */}
            <div className="about-info reveal-up">
              <div className="about-icon">
                <FaCode />
              </div>
              <h3>MERN Stack Developer</h3>
              <p>
                I am Awais, a MERN Stack Web Developer currently studying ADP CS
                in Lahore.
              </p>
              <p>
                I have built both frontend and backend architectures and enjoy
                developing complete web systems using modern frameworks and
                libraries.
              </p>
              <p>
                My focus is on writing clean, maintainable code and building
                performant, responsive, and secure user experiences.
              </p>
            </div>

            {/* Second Card (Formatted identically to the first) */}
            <div className="education-card reveal-up">
              <div className="about-icon">
                <FaGraduationCap />
              </div>
              <h3>Education &amp; Academics</h3>
              <p>
                Pursuing an <strong>ADP CS</strong> (Associate Degree Program in
                Computer Science) with a focus on core software fundamentals.
              </p>
              <p>
                Actively building full-stack engineering skills alongside
                undergraduate coursework, bridging theoretical computer science
                with practical web architecture.
              </p>
              <div className="education-stat">
                <span>First 2 Semesters</span>
                <strong>3.3 CGPA</strong>
              </div>
            </div>
          </div>

          {/* Action Buttons (Download CV & View Work) */}
          <div className="about-cta-row reveal-up">
            <button
              type="button"
              className="btn-gold-solid"
              onClick={handleDownloadCV}
            >
              <FiDownload size={18} />
              <span>Download CV</span>
            </button>
            <Link
              to="/projects"
              className="btn-gold-outline"
              onClick={() => onNavigate && onNavigate("projects", "/projects")}
            >
              <span>View Recent Work</span>
              <FiArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
