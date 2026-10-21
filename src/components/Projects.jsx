import React from 'react';
import { FiGithub, FiExternalLink, FiFolder, FiArrowUpRight } from 'react-icons/fi';
import { projectsData } from '../data/projects';

const Projects = () => {
  return (
    <section id="projects" className="section-padding projects-section">
      <div className="container">
        <div className="section-header-split reveal-up">
          <div>
            <span className="section-eyebrow">FEATURED WORK</span>
            <h2 className="section-heading">
              RECENT <span className="gold-highlight">PROJECTS</span>
            </h2>
          </div>
          <p className="section-subtitle">
            From idea to launch, a curated selection of full-stack applications and interactive
            interfaces I have engineered.
          </p>
        </div>

        <div className="projects-grid">
          {projectsData.map((project) => (
            <article className="project-card reveal-up" key={project.id}>
              <div className="project-image-box">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                  loading="lazy"
                />
              </div>

              <div className="project-content">
                <div className="project-category-row">
                  <span className="project-cat-badge">
                    <FiFolder className="cat-icon" />
                    {project.category}
                  </span>
                </div>

                {/* Heading with aligned icon outside screenshot area */}
                <div className="project-heading-row">
                  <h3 className="project-title">{project.title}</h3>
                  {/* <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-heading-icon"
                    aria-label={`Open ${project.title} live preview`}
                  >
                    <FiArrowUpRight size={18} />
                  </a> */}
                </div>

                <p className="project-description">{project.description}</p>

                <div className="project-tech-stack">
                  {project.tech.map((techItem, idx) => (
                    <span className="tech-badge" key={idx}>
                      {techItem}
                    </span>
                  ))}
                </div>

               
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;