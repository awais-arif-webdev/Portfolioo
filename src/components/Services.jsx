import React from 'react';
import {
  FiLayout,
  FiCode,
  FiSmartphone,
  FiServer,
  FiDatabase,
  FiArrowUpRight
} from 'react-icons/fi';

const SERVICES = [
  {
    icon: FiLayout,
    title: 'Frontend Development',
    description:
      'Interactive, component-driven React.js user interfaces with smooth animations, clean state architecture, and crisp visual hierarchy.',
    image:
      'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=700&q=80'
  },
  {
    icon: FiCode,
    title: 'Full-Stack Web Development',
    description:
      'End-to-end MERN stack web applications uniting custom React frontends with secure Node.js, Express, and MongoDB backends.',
    image:
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=700&q=80'
  },
  {
    icon: FiSmartphone,
    title: 'Responsive Website Design',
    description:
      'Mobile-first layouts engineered with CSS Grid, Flexbox, and Bootstrap that adapt seamlessly from 360px smartphones to 4K monitors.',
    image:
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=700&q=80'
  },
  {
    icon: FiServer,
    title: 'REST API Development',
    description:
      'Fast, structured Express.js & Node.js RESTful APIs featuring JWT/OTP authentication, request validation, and clean error handling.',
    image:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=700&q=80'
  }
];

const Services = ({ onNavigate }) => {
  return (
    <section id="services" className="section-padding services-section">
      <div className="container">
        {/* Header Split Matching Video ("SOLUTIONS FOR YOUR DIGITAL GROWTH") */}
        <div className="section-header-split reveal-up">
          <div>
            <span className="section-eyebrow">WHAT I DO</span>
            <h2 className="section-heading">
              SOLUTIONS FOR YOUR <br />
              <span className="gold-highlight">DIGITAL GROWTH</span>
            </h2>
          </div>
          <div className="header-right-block">
            <p className="section-subtitle">
              From modern frontend interfaces to full-stack web architectures and database
              integrations, I provide complete engineering solutions to help your brand stand out.
            </p>
            <a
              href="/contact"
              className="btn-gold-solid"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('contact', '/contact');
              }}
            >
              <span>Discuss a Project</span>
              <FiArrowUpRight size={18} />
            </a>
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="services-grid">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <article className="service-card reveal-up" key={index}>
                <div className="service-thumb-wrap">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="service-thumb"
                    loading="lazy"
                  />
                  <div className="service-icon-floating">
                    <Icon size={20} />
                  </div>
                </div>
                <div className="service-card-body">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-desc">{service.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;