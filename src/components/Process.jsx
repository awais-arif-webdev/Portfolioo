import React from 'react';
import { FiCompass, FiPenTool, FiCode, FiTrendingUp, FiStar } from 'react-icons/fi';

const STEPS = [
  {
    num: '01',
    title: 'Discovery',
    icon: FiCompass,
    description: 'We talk about your goals, target audience, feature requirements, and project timeline.'
  },
  {
    num: '02',
    title: 'Design',
    icon: FiPenTool,
    description: 'I create a clear UI structure, component wireframe, and visual direction for your application.'
  },
  {
    num: '03',
    title: 'Development',
    icon: FiCode,
    description: 'I build everything with clean React & Node.js code, responsive layouts, and smooth motion.'
  },
  {
    num: '04',
    title: 'Launch',
    icon: FiTrendingUp,
    description: 'We test across devices, deploy to production, and stay available for ongoing support.'
  }
];

const TESTIMONIALS = [
  {
    name: 'Usman Tariq',
    role: 'Founder, TechVista Solutions',
    quote:
      'Awais delivered an outstanding full-stack web platform. His attention to UI detail and clean React structure made the entire launch effortless.'
  },
  {
    name: 'Hamza Khan',
    role: 'E-Commerce Brand Owner',
    quote:
      'Fast communication and rock-solid MERN code. He built our custom store with OTP authentication and responsive mobile views ahead of schedule.'
  },
  {
    name: 'Sarah Ahmed',
    role: 'Product Manager',
    quote:
      'Rarely do you find a developer who cares equally about backend API performance and pixel-accurate dark-mode aesthetics. Highly recommended.'
  }
];

const Process = () => {
  return (
    <section id="process" className="section-padding process-section">
      <div className="container">
        {/* 4-Step Process Block (Matches Video 00:44) */}
        <div className="section-header-split reveal-up">
          <div>
            <span className="section-eyebrow">HOW IT WORKS</span>
            <h2 className="section-heading">
              A SIMPLE &amp; <br />
              <span className="gold-highlight">CLEAR PROCESS</span>
            </h2>
          </div>
          <p className="section-subtitle">
            From first idea to final deployment, I keep the workflow transparent, structured, and
            focused on your goals.
          </p>
        </div>

        <div className="process-grid">
          {STEPS.map((step, index) => {
            const Icon = step.icon;
            return (
              <div className="process-card reveal-up" key={step.num}>
                <div className="process-card-top">
                  <div className="process-icon-box">
                    <Icon size={20} />
                  </div>
                  <span className="process-number">{step.num}</span>
                </div>
                <h3 className="process-title">{step.title}</h3>
                <p className="process-desc">{step.description}</p>
                {index < STEPS.length - 1 && <div className="process-connector" aria-hidden="true" />}
              </div>
            );
          })}
        </div>

        {/* Client Testimonials Sub-Section (Matches Video 00:47 "KIND WORDS FROM AMAZING CLIENTS") */}
        <div className="testimonials-block">
          <div className="section-header-split reveal-up">
            <div>
              <span className="section-eyebrow">WHAT CLIENTS SAY</span>
              <h2 className="section-heading">
                KIND WORDS FROM <br />
                <span className="gold-highlight">AMAZING CLIENTS</span>
              </h2>
            </div>
            <p className="section-subtitle">
              Collaborating with ambitious founders and teams to build digital products that perform.
            </p>
          </div>

          <div className="testimonials-grid">
            {TESTIMONIALS.map((item, idx) => (
              <div className="testimonial-card reveal-up" key={idx}>
                <div className="stars-row" aria-label="5 out of 5 stars">
                  {[...Array(5)].map((_, i) => (
                    <FiStar key={i} className="star-filled" />
                  ))}
                </div>
                <p className="testimonial-quote">&ldquo;{item.quote}&rdquo;</p>
                <div className="testimonial-author">
                  <div className="author-avatar">{item.name.charAt(0)}</div>
                  <div>
                    <h4 className="author-name">{item.name}</h4>
                    <span className="author-role">{item.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;