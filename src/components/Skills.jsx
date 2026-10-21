// import React from 'react';
// import {
//   FaHtml5,
//   FaCss3Alt,
//   FaJsSquare,
//   FaReact,
//   FaBootstrap,
//   FaNodeJs,
//   FaGitAlt,
//   FaGithub
// } from 'react-icons/fa';
// import { SiExpress, SiMongodb, SiMysql } from 'react-icons/si';
// import { VscVscode } from 'react-icons/vsc';
// import { skillsData } from '../data/skills';

// const ICON_MAP = {
//   html: FaHtml5,
//   css: FaCss3Alt,
//   js: FaJsSquare,
//   react: FaReact,
//   bootstrap: FaBootstrap,
//   node: FaNodeJs,
//   express: SiExpress,
//   mongodb: SiMongodb,
//   // mysql: SiMysql,
//   git: FaGitAlt,
//   github: FaGithub,
//   vscode: VscVscode
// };

// const Skills = () => {
//   return (
//     <section id="skills" className="section-padding skills-section">
//       <div className="container">
//         <div className="section-header-split reveal-up">
//           <div>
//             <span className="section-eyebrow">TECHNICAL ARSENAL</span>
//             <h2 className="section-heading">
//               CORE SKILLS &amp; <span className="gold-highlight">TECHNOLOGIES</span>
//             </h2>
//           </div>
//           <p className="section-subtitle">
//             A focused, production-tested stack covering responsive frontend interfaces, scalable
//             Node/Express backends
//           </p>
//         </div>

//         <div className="skills-categories-grid">
//           {skillsData.map((group, idx) => (
//             <div className="skill-group-card reveal-up" key={idx}>
//               <div className="skill-group-top">
//                 <span className="skill-group-badge">{group.badge}</span>
//                 <h3 className="skill-group-title">{group.category}</h3>
//               </div>

//               <div className="skill-items-list">
//                 {group.items.map((skill, sIdx) => {
//                   const IconComponent = ICON_MAP[skill.iconKey] || FaReact;
//                   return (
//                     <div className="skill-pill-card" key={sIdx}>
//                       <div
//                         className="skill-icon-wrap"
//                         style={{
//                           color: skill.color,
//                           borderColor: `${skill.color}33`,
//                           background: `${skill.color}12`
//                         }}
//                       >
//                         <IconComponent size={24} />
//                       </div>
//                       <div className="skill-meta">
//                         <div className="skill-name-row">
//                           <span className="skill-name">{skill.name}</span>
//                           <span className="skill-level">{skill.level}</span>
//                         </div>
//                         <div className="skill-bar-track">
//                           <div
//                             className="skill-bar-fill"
//                             style={{ width: skill.level, backgroundColor: skill.color }}
//                           />
//                         </div>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;










import React from 'react';
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaBootstrap,
  FaNodeJs,
  FaGitAlt,
  FaGithub
} from 'react-icons/fa';
import { SiExpress, SiMongodb } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { skillsData } from '../data/skills';

const ICON_MAP = {
  html: FaHtml5,
  css: FaCss3Alt,
  js: FaJsSquare,
  react: FaReact,
  bootstrap: FaBootstrap,
  node: FaNodeJs,
  express: SiExpress,
  mongodb: SiMongodb,
  git: FaGitAlt,
  github: FaGithub,
  vscode: VscVscode
};

const Skills = () => {
  return (
    <>
      <style>{`
        .skills-section {
          background: var(--bg-secondary, #0d0e11);
          border-top: 1px solid var(--border-subtle, rgba(255, 255, 255, 0.08));
          border-bottom: 1px solid var(--border-subtle, rgba(255, 255, 255, 0.08));
          padding: 100px 0;
          position: relative;
        }

        .skills-categories-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 28px;
        }

        .skill-group-card {
          background: var(--bg-card, #121418);
          border: 1px solid var(--border-subtle, rgba(255, 255, 255, 0.08));
          border-radius: 18px;
          padding: 32px;
          transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .skill-group-card:hover {
          border-color: var(--border-gold, rgba(245, 166, 35, 0.38));
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.45);
        }

        .skill-group-top {
          margin-bottom: 24px;
        }

        .skill-group-badge {
          font-size: 0.72rem;
          font-weight: 700;
          color: var(--gold-primary, #f5a623);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .skill-group-title {
          font-family: var(--font-display, 'Syne', sans-serif);
          font-size: 1.35rem;
          font-weight: 800;
          color: var(--text-main, #f7f4ed);
          margin-top: 6px;
        }

        .skill-items-list {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
          gap: 14px;
        }

        .skill-pill-card {
          background: rgba(7, 8, 9, 0.65);
          border: 1px solid var(--border-subtle, rgba(255, 255, 255, 0.08));
          border-radius: 14px;
          padding: 16px;
          display: flex;
          align-items: center;
          gap: 14px;
          transition: all 0.25s ease;
        }

        .skill-pill-card:hover {
          transform: translateY(-3px);
          border-color: rgba(245, 166, 35, 0.4);
          background: rgba(18, 20, 24, 0.9);
        }

        .skill-icon-wrap {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          border: 1px solid;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .skill-meta {
          flex: 1;
        }

        .skill-name-row {
          display: flex;
          justify-content: space-between;
          font-size: 0.86rem;
          font-weight: 600;
          color: var(--text-main, #f7f4ed);
          margin-bottom: 6px;
        }

        .skill-level {
          color: var(--text-muted, #9ca3af);
          font-size: 0.76rem;
        }

        .skill-bar-track {
          width: 100%;
          height: 5px;
          background: rgba(255, 255, 255, 0.08);
          border-radius: 999px;
          overflow: hidden;
        }

        .skill-bar-fill {
          height: 100%;
          border-radius: 999px;
          transition: width 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        }

        /* Responsive Media Queries for Tablet and Mobile View */
        @media (max-width: 1024px) {
          .skills-categories-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
        }

        @media (max-width: 768px) {
          .skills-section {
            padding: 72px 0;
          }
          .skill-group-card {
            padding: 24px 20px;
          }
          .skill-items-list {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 420px) {
          .skill-pill-card {
            padding: 12px;
          }
        }
      `}</style>

      <section id="skills" className="skills-section">
        <div className="container">
          <div className="section-header-split reveal-up">
            <div>
              <span className="section-eyebrow">TECHNICAL ARSENAL</span>
              <h2 className="section-heading">
                CORE SKILLS &amp; <span className="gold-highlight">TECHNOLOGIES</span>
              </h2>
            </div>
            <p className="section-subtitle">
              A focused, production-tested stack covering responsive frontend interfaces, scalable
              Node/Express backends
            </p>
          </div>

          <div className="skills-categories-grid">
            {skillsData.map((group, idx) => (
              <div className="skill-group-card reveal-up" key={idx}>
                <div className="skill-group-top">
                  <span className="skill-group-badge">{group.badge}</span>
                  <h3 className="skill-group-title">{group.category}</h3>
                </div>

                <div className="skill-items-list">
                  {group.items.map((skill, sIdx) => {
                    const IconComponent = ICON_MAP[skill.iconKey] || FaReact;
                    return (
                      <div className="skill-pill-card" key={sIdx}>
                        <div
                          className="skill-icon-wrap"
                          style={{
                            color: skill.color,
                            borderColor: `${skill.color}33`,
                            background: `${skill.color}12`
                          }}
                        >
                          <IconComponent size={24} />
                        </div>
                        <div className="skill-meta">
                          <div className="skill-name-row">
                            <span className="skill-name">{skill.name}</span>
                            <span className="skill-level">{skill.level}</span>
                          </div>
                          <div className="skill-bar-track">
                            <div
                              className="skill-bar-fill"
                              style={{ width: skill.level, backgroundColor: skill.color }}
                            />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;