// import React, { useRef, useState } from 'react';
// import emailjs from '@emailjs/browser';
// import {
//   FiMail,
//   FiMapPin,
//   FiGithub,
//   FiLinkedin,
//   FiSend,
//   FiCheckCircle,
//   FiAlertCircle,
//   FiCopy
// } from 'react-icons/fi';

// // EmailJS configuration
// const EMAILJS_SERVICE_ID = 'service_ej6dl7s';
// const EMAILJS_TEMPLATE_ID = 'template_j1han28';
// const EMAILJS_PUBLIC_KEY = 'tKoUFC7TYH7vtKDCM';

// const initialFormData = {
//   from_name: '',
//   from_email: '',
//   subject: '',
//   message: ''
// };

// const Contact = () => {
//   const formRef = useRef(null);

//   const [formData, setFormData] = useState(initialFormData);
//   const [errors, setErrors] = useState({});
//   const [status, setStatus] = useState({ type: '', text: '' });
//   const [copied, setCopied] = useState(false);
//   const [isSending, setIsSending] = useState(false);

//   // Validate form fields
//   const validate = () => {
//     const newErrors = {};

//     if (!formData.from_name.trim() || formData.from_name.trim().length < 2) {
//       newErrors.from_name = 'Please enter your full name (at least 2 characters).';
//     }

//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailPattern.test(formData.from_email.trim())) {
//       newErrors.from_email = 'Please enter a valid email address.';
//     }

//     if (!formData.subject.trim() || formData.subject.trim().length < 3) {
//       newErrors.subject = 'Please enter a clear project subject.';
//     }

//     if (!formData.message.trim() || formData.message.trim().length < 15) {
//       newErrors.message = 'Please write at least 15 characters about your project.';
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   // Handle input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormData((prev) => ({
//       ...prev,
//       [name]: value
//     }));

//     if (errors[name]) {
//       setErrors((prev) => ({
//         ...prev,
//         [name]: ''
//       }));
//     }

//     setStatus({ type: '', text: '' });
//   };

//   // Send the message using EmailJS (sendForm)
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (isSending) return;

//     setStatus({ type: '', text: '' });

//     if (!validate()) {
//       setStatus({
//         type: 'error',
//         text: 'Please fix the highlighted fields before sending your message.'
//       });
//       return;
//     }

//     if (!formRef.current) {
//       setStatus({
//         type: 'error',
//         text: 'Something went wrong. Please refresh the page and try again.'
//       });
//       return;
//     }

//     setIsSending(true);

//     try {
//       await emailjs.sendForm(
//         EMAILJS_SERVICE_ID,
//         EMAILJS_TEMPLATE_ID,
//         formRef.current,
//         EMAILJS_PUBLIC_KEY
//       );

//       setStatus({
//         type: 'success',
//         text: 'Your message has been sent successfully! I will get back to you soon.'
//       });

//       setFormData(initialFormData);
//       setErrors({});
//     } catch (error) {
//       console.error('EmailJS Error:', error);

//       setStatus({
//         type: 'error',
//         text: 'Sorry, your message could not be sent. Please try again later.'
//       });
//     } finally {
//       setIsSending(false);
//     }
//   };

//   // Copy contact email
//   const handleCopyEmail = async () => {
//     const emailAddress = 'awais.arif.fs.dev@gmail.com';

//     try {
//       await navigator.clipboard.writeText(emailAddress);
//       setCopied(true);

//       setTimeout(() => setCopied(false), 2500);
//     } catch (error) {
//       console.error('Unable to copy email address:', error);

//       setStatus({
//         type: 'error',
//         text: 'Unable to copy the email address. Please copy it manually.'
//       });
//     }
//   };

//   return (
//     <>
//       <style>{`
//         .contact-section {
//           padding: 100px 0;
//           position: relative;
//           background: var(--bg-secondary, #0d0e11);
//         }

//         .contact-banner {
//           background: linear-gradient(145deg, #13151a 0%, #0b0c0f 100%);
//           border: 1px solid var(--border-gold, rgba(245, 166, 35, 0.38));
//           border-radius: 22px;
//           padding: 48px;
//           box-shadow: 0 24px 60px rgba(0, 0, 0, 0.6);
//         }

//         .contact-banner-grid {
//           display: grid;
//           grid-template-columns: 0.95fr 1.05fr;
//           gap: 44px;
//           align-items: flex-start;
//         }

//         .contact-invite {
//           color: var(--text-muted, #9ca3af);
//           font-size: 0.95rem;
//           margin: 16px 0 28px;
//         }

//         .contact-direct-list {
//           display: flex;
//           flex-direction: column;
//           gap: 18px;
//           margin-bottom: 28px;
//         }

//         .contact-direct-item {
//           display: flex;
//           align-items: flex-start;
//           gap: 14px;
//         }

//         .contact-icon-pill {
//           width: 42px;
//           height: 42px;
//           border-radius: 10px;
//           background: rgba(245, 166, 35, 0.12);
//           color: var(--gold-primary, #f5a623);
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           flex-shrink: 0;
//         }

//         .direct-label {
//           display: block;
//           font-size: 0.75rem;
//           color: var(--text-dim, #6b7280);
//           text-transform: uppercase;
//           letter-spacing: 0.06em;
//         }

//         .direct-value {
//           font-size: 0.95rem;
//           font-weight: 600;
//           color: var(--text-main, #f7f4ed);
//         }

//         .email-copy-row {
//           display: flex;
//           align-items: center;
//           gap: 10px;
//           flex-wrap: wrap;
//           margin-top: 2px;
//         }

//         .copy-btn {
//           display: inline-flex;
//           align-items: center;
//           gap: 4px;
//           background: rgba(255, 255, 255, 0.06);
//           border: 1px solid var(--border-subtle, rgba(255, 255, 255, 0.08));
//           color: var(--gold-light, #ffd166);
//           padding: 3px 9px;
//           border-radius: 6px;
//           font-size: 0.74rem;
//           cursor: pointer;
//           transition: background 0.2s ease;
//         }

//         .copy-btn:hover {
//           background: rgba(245, 166, 35, 0.18);
//         }

//         .contact-socials {
//           display: flex;
//           gap: 12px;
//           flex-wrap: wrap;
//         }

//         .social-pill-link {
//           display: inline-flex;
//           align-items: center;
//           gap: 8px;
//           padding: 9px 16px;
//           border-radius: 999px;
//           background: var(--bg-card, #121418);
//           border: 1px solid var(--border-subtle, rgba(255, 255, 255, 0.08));
//           font-size: 0.85rem;
//           color: var(--text-main, #f7f4ed);
//           transition: var(--transition-smooth, all 0.3s ease);
//         }

//         .social-pill-link:hover {
//           border-color: var(--gold-primary, #f5a623);
//           color: var(--gold-primary, #f5a623);
//         }

//         .contact-form {
//           display: flex;
//           flex-direction: column;
//           gap: 16px;
//         }

//         .form-row-two {
//           display: grid;
//           grid-template-columns: 1fr 1fr;
//           gap: 16px;
//         }

//         .form-group {
//           display: flex;
//           flex-direction: column;
//           gap: 6px;
//         }

//         .form-group label {
//           font-size: 0.82rem;
//           font-weight: 600;
//           color: var(--text-main, #f7f4ed);
//         }

//         .form-group input,
//         .form-group textarea {
//           background: #08090b;
//           border: 1px solid var(--border-subtle, rgba(255, 255, 255, 0.08));
//           border-radius: 10px;
//           padding: 12px 14px;
//           color: var(--text-main, #f7f4ed);
//           font-size: 0.9rem;
//           transition: all 0.25s ease;
//         }

//         .form-group input:focus,
//         .form-group textarea:focus {
//           outline: none;
//           border-color: var(--gold-primary, #f5a623);
//           box-shadow: 0 0 0 3px rgba(245, 166, 35, 0.15);
//         }

//         .input-error {
//           border-color: #ef4444 !important;
//         }

//         .field-error {
//           font-size: 0.76rem;
//           color: #f87171;
//         }

//         .form-alert {
//           display: flex;
//           align-items: center;
//           gap: 10px;
//           padding: 12px 14px;
//           border-radius: 10px;
//           font-size: 0.85rem;
//         }

//         .alert-success {
//           background: rgba(34, 197, 94, 0.12);
//           border: 1px solid rgba(34, 197, 94, 0.35);
//           color: #86efac;
//         }

//         .alert-error {
//           background: rgba(239, 68, 68, 0.12);
//           border: 1px solid rgba(239, 68, 68, 0.35);
//           color: #fca5a5;
//         }

//         .submit-btn {
//           margin-top: 4px;
//         }

//         .submit-btn:disabled {
//           opacity: 0.7;
//           cursor: not-allowed;
//           transform: none !important;
//           box-shadow: none !important;
//         }

//         /* Responsive Breakpoints */
//         @media (max-width: 1024px) {
//           .contact-banner-grid {
//             grid-template-columns: 1fr;
//             gap: 36px;
//           }
//         }

//         @media (max-width: 768px) {
//           .contact-section {
//             padding: 72px 0;
//           }
//           .contact-banner {
//             padding: 28px 20px;
//           }
//           .form-row-two {
//             grid-template-columns: 1fr;
//           }
//         }

//         @media (max-width: 420px) {
//           .container {
//             padding: 0 16px;
//           }
//         }
//       `}</style>

//       <section id="contact" className="section-padding contact-section">
//         <div className="container">
//           {/* Contact Banner */}
//           <div className="contact-banner reveal-up">
//             <div className="contact-banner-grid">
              
//               {/* Contact Information */}
//               <div className="contact-banner-info">
//                 <span className="section-eyebrow">
//                   LET&apos;S WORK TOGETHER
//                 </span>

//                 <h2 className="section-heading">
//                   HAVE A PROJECT <br />
//                   <span className="gold-highlight">IN MIND?</span>
//                 </h2>

//                 <p className="contact-invite">
//                   Whether it&apos;s a full-stack MERN application,
//                   custom e-commerce platform, or responsive web
//                   interface, I&apos;d love to hear what you&apos;re building.
//                 </p>

//                 <div className="contact-direct-list">
//                   {/* Direct Email */}
//                   <div className="contact-direct-item">
//                     <div className="contact-icon-pill">
//                       <FiMail size={18} />
//                     </div>

//                     <div>
//                       <span className="direct-label">Direct Email</span>

//                       <div className="email-copy-row">
//                         <a
//                           href="mailto:awais.arif.fs.dev@gmail.com"
//                           className="direct-value"
//                         >
//                           awais.arif.fs.dev@gmail.com
//                         </a>

//                         <button
//                           type="button"
//                           onClick={handleCopyEmail}
//                           className="copy-btn"
//                           aria-label="Copy email address"
//                         >
//                           <FiCopy size={14} />
//                           <span>{copied ? 'Copied!' : 'Copy'}</span>
//                         </button>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Location */}
//                   <div className="contact-direct-item">
//                     <div className="contact-icon-pill">
//                       <FiMapPin size={18} />
//                     </div>

//                     <div>
//                       <span className="direct-label">Location</span>
//                       <p className="direct-value">
//                         Lahore, Punjab, Pakistan (Remote Worldwide)
//                       </p>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Social Links */}
//                 <div className="contact-socials">
//                   <a
//                     href="https://github.com/awais-fs-dev"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="social-pill-link"
//                   >
//                     <FiGithub size={17} />
//                     <span>GitHub</span>
//                   </a>

//                   <a
//                     href="https://www.linkedin.com/in/awais-arif-webdev/"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="social-pill-link"
//                   >
//                     <FiLinkedin size={17} />
//                     <span>LinkedIn</span>
//                   </a>
//                 </div>
//               </div>

//               {/* Contact Form */}
//               <div className="contact-form-wrapper">
//                 <form
//                   ref={formRef}
//                   className="contact-form"
//                   onSubmit={handleSubmit}
//                   noValidate
//                 >
//                   <div className="form-row-two">
//                     {/* Name */}
//                     <div className="form-group">
//                       <label htmlFor="from_name">Your Name *</label>

//                       <input
//                         id="from_name"
//                         name="from_name"
//                         type="text"
//                         placeholder="e.g. Ali Raza"
//                         value={formData.from_name}
//                         onChange={handleChange}
//                         className={errors.from_name ? 'input-error' : ''}
//                         aria-invalid={Boolean(errors.from_name)}
//                         autoComplete="name"
//                         required
//                       />

//                       {errors.from_name && (
//                         <span className="field-error">
//                           {errors.from_name}
//                         </span>
//                       )}
//                     </div>

//                     {/* Email */}
//                     <div className="form-group">
//                       <label htmlFor="from_email">Your Email *</label>

//                       <input
//                         id="from_email"
//                         name="from_email"
//                         type="email"
//                         placeholder="name@company.com"
//                         value={formData.from_email}
//                         onChange={handleChange}
//                         className={errors.from_email ? 'input-error' : ''}
//                         aria-invalid={Boolean(errors.from_email)}
//                         autoComplete="email"
//                         required
//                       />

//                       {errors.from_email && (
//                         <span className="field-error">
//                           {errors.from_email}
//                         </span>
//                       )}
//                     </div>
//                   </div>

//                   {/* Subject */}
//                   <div className="form-group">
//                     <label htmlFor="subject">Subject *</label>

//                     <input
//                       id="subject"
//                       name="subject"
//                       type="text"
//                       placeholder="Full-Stack Web App / E-Commerce Store / Portfolio"
//                       value={formData.subject}
//                       onChange={handleChange}
//                       className={errors.subject ? 'input-error' : ''}
//                       aria-invalid={Boolean(errors.subject)}
//                       required
//                     />

//                     {errors.subject && (
//                       <span className="field-error">
//                         {errors.subject}
//                       </span>
//                     )}
//                   </div>

//                   {/* Project Details */}
//                   <div className="form-group">
//                     <label htmlFor="message">Project Details *</label>

//                     <textarea
//                       id="message"
//                       name="message"
//                       rows={4}
//                       placeholder="Tell me about your goals, timeline, and required features..."
//                       value={formData.message}
//                       onChange={handleChange}
//                       className={errors.message ? 'input-error' : ''}
//                       aria-invalid={Boolean(errors.message)}
//                       required
//                     />

//                     {errors.message && (
//                       <span className="field-error">
//                         {errors.message}
//                       </span>
//                     )}
//                   </div>

//                   {/* Success / Error Alert */}
//                   {status.text && (
//                     <div
//                       className={`form-alert ${
//                         status.type === 'success'
//                           ? 'alert-success'
//                           : 'alert-error'
//                       }`}
//                       role="status"
//                       aria-live="polite"
//                     >
//                       {status.type === 'success' ? (
//                         <FiCheckCircle size={18} />
//                       ) : (
//                         <FiAlertCircle size={18} />
//                       )}

//                       <span>{status.text}</span>
//                     </div>
//                   )}

//                   {/* Submit Button */}
//                   <button
//                     type="submit"
//                     className="btn-gold-solid w-full submit-btn"
//                     disabled={isSending}
//                   >
//                     <span>
//                       {isSending
//                         ? 'Sending Your Inquiry...'
//                         : 'Send Message'}
//                     </span>

//                     <FiSend size={17} />
//                   </button>
//                 </form>
//               </div>

//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Contact;





import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  FiMail,
  FiMapPin,
  FiGithub,
  FiLinkedin,
  FiSend,
  FiCheckCircle,
  FiAlertCircle,
  FiCopy
} from 'react-icons/fi';

// EmailJS configuration
const EMAILJS_SERVICE_ID = 'service_ej6dl7s';
const EMAILJS_TEMPLATE_ID = 'template_j1han28';
const EMAILJS_PUBLIC_KEY = 'tKoUFC7TYH7vtKDCM';

const initialFormData = {
  from_name: '',
  from_email: '',
  subject: '',
  message: ''
};

const Contact = () => {
  const formRef = useRef(null);

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: '', text: '' });
  const [copied, setCopied] = useState(false);
  const [isSending, setIsSending] = useState(false);

  // Validate form fields
  const validate = () => {
    const newErrors = {};

    if (!formData.from_name.trim() || formData.from_name.trim().length < 2) {
      newErrors.from_name = 'Please enter your full name (at least 2 characters).';
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.from_email.trim())) {
      newErrors.from_email = 'Please enter a valid email address.';
    }

    if (!formData.subject.trim() || formData.subject.trim().length < 3) {
      newErrors.subject = 'Please enter a clear project subject.';
    }

    if (!formData.message.trim() || formData.message.trim().length < 15) {
      newErrors.message = 'Please write at least 15 characters about your project.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: ''
      }));
    }

    setStatus({ type: '', text: '' });
  };

  // Send the message using EmailJS (sendForm)
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSending) return;

    setStatus({ type: '', text: '' });

    if (!validate()) {
      setStatus({
        type: 'error',
        text: 'Please fix the highlighted fields before sending your message.'
      });
      return;
    }

    if (!formRef.current) {
      setStatus({
        type: 'error',
        text: 'Something went wrong. Please refresh the page and try again.'
      });
      return;
    }

    setIsSending(true);

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );

      setStatus({
        type: 'success',
        text: 'Your message has been sent successfully! I will get back to you soon.'
      });

      setFormData(initialFormData);
      setErrors({});
    } catch (error) {
      console.error('EmailJS Error:', error);

      setStatus({
        type: 'error',
        text: 'Sorry, your message could not be sent. Please try again later.'
      });
    } finally {
      setIsSending(false);
    }
  };

  // Copy contact email
  const handleCopyEmail = async () => {
    const emailAddress = 'awais.arif.fs.dev@gmail.com';

    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopied(true);

      setTimeout(() => setCopied(false), 2500);
    } catch (error) {
      console.error('Unable to copy email address:', error);

      setStatus({
        type: 'error',
        text: 'Unable to copy the email address. Please copy it manually.'
      });
    }
  };

  return (
    <>
      <style>{`
        /* =========================================================
           CONTACT SECTION
           ========================================================= */
        .contact-section {
          padding: 100px 0;
          position: relative;
          background: var(--bg-secondary, #0d0e11);
          overflow: hidden;
        }

        .contact-banner {
          background: linear-gradient(145deg, #13151a 0%, #0b0c0f 100%);
          border: 1px solid var(--border-gold, rgba(245, 166, 35, 0.38));
          border-radius: 22px;
          padding: 48px;
          box-shadow: 0 24px 60px rgba(0, 0, 0, 0.6);
        }

        .contact-banner-grid {
          display: grid;
          grid-template-columns: 0.95fr 1.05fr;
          gap: 44px;
          align-items: flex-start;
        }

        .contact-banner-info,
        .contact-form-wrapper {
          min-width: 0;
        }

        .contact-invite {
          color: var(--text-muted, #9ca3af);
          font-size: 0.95rem;
          margin: 16px 0 28px;
        }

        .contact-direct-list {
          display: flex;
          flex-direction: column;
          gap: 18px;
          margin-bottom: 28px;
        }

        .contact-direct-item {
          display: flex;
          align-items: flex-start;
          gap: 14px;
        }

        .contact-direct-item > div:last-child {
          min-width: 0;
        }

        .contact-icon-pill {
          width: 42px;
          height: 42px;
          border-radius: 10px;
          background: rgba(245, 166, 35, 0.12);
          color: var(--gold-primary, #f5a623);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .direct-label {
          display: block;
          font-size: 0.75rem;
          color: var(--text-dim, #6b7280);
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }

        .direct-value {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-main, #f7f4ed);
          overflow-wrap: anywhere;
          word-break: break-word;
        }

        .email-copy-row {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
          margin-top: 2px;
        }

        .copy-btn {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid var(--border-subtle, rgba(255, 255, 255, 0.08));
          color: var(--gold-light, #ffd166);
          padding: 3px 9px;
          border-radius: 6px;
          font-size: 0.74rem;
          cursor: pointer;
          transition: background 0.2s ease;
        }

        .copy-btn:hover {
          background: rgba(245, 166, 35, 0.18);
        }

        .contact-socials {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .social-pill-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 9px 16px;
          border-radius: 999px;
          background: var(--bg-card, #121418);
          border: 1px solid var(--border-subtle, rgba(255, 255, 255, 0.08));
          font-size: 0.85rem;
          color: var(--text-main, #f7f4ed);
          transition: var(--transition-smooth, all 0.3s ease);
        }

        .social-pill-link:hover {
          border-color: var(--gold-primary, #f5a623);
          color: var(--gold-primary, #f5a623);
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .form-row-two {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
          min-width: 0;
        }

        .form-group label {
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--text-main, #f7f4ed);
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          background: #08090b;
          border: 1px solid var(--border-subtle, rgba(255, 255, 255, 0.08));
          border-radius: 10px;
          padding: 12px 14px;
          color: var(--text-main, #f7f4ed);
          font-size: 0.9rem;
          transition: all 0.25s ease;
        }

        .form-group textarea {
          resize: vertical;
          min-height: 110px;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--gold-primary, #f5a623);
          box-shadow: 0 0 0 3px rgba(245, 166, 35, 0.15);
        }

        .input-error {
          border-color: #ef4444 !important;
        }

        .field-error {
          font-size: 0.76rem;
          color: #f87171;
        }

        .form-alert {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 12px 14px;
          border-radius: 10px;
          font-size: 0.85rem;
        }

        .form-alert svg {
          flex-shrink: 0;
          margin-top: 2px;
        }

        .alert-success {
          background: rgba(34, 197, 94, 0.12);
          border: 1px solid rgba(34, 197, 94, 0.35);
          color: #86efac;
        }

        .alert-error {
          background: rgba(239, 68, 68, 0.12);
          border: 1px solid rgba(239, 68, 68, 0.35);
          color: #fca5a5;
        }

        .submit-btn {
          margin-top: 4px;
        }

        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
          transform: none !important;
          box-shadow: none !important;
        }

        /* =========================================================
           RESPONSIVE — LARGE TABLET / SMALL LAPTOP (<= 1024px)
           ========================================================= */
        @media (max-width: 1024px) {
          .contact-section {
            padding: 84px 0;
          }

          .contact-banner {
            padding: 40px 32px;
          }

          .contact-banner-grid {
            grid-template-columns: 1fr;
            gap: 36px;
          }

          .contact-invite {
            max-width: 620px;
          }
        }

        /* =========================================================
           RESPONSIVE — TABLET PORTRAIT / LARGE PHONE (<= 768px)
           ========================================================= */
        @media (max-width: 768px) {
          .contact-section {
            padding: 72px 0;
          }

          .contact-banner {
            padding: 28px 20px;
            border-radius: 18px;
          }

          .contact-banner-grid {
            gap: 30px;
          }

          .form-row-two {
            grid-template-columns: 1fr;
          }

          .contact-direct-list {
            gap: 16px;
            margin-bottom: 24px;
          }

          .contact-socials {
            gap: 10px;
          }

          .social-pill-link {
            flex: 1 1 140px;
            padding: 11px 16px;
          }

          /* 16px prevents iOS Safari from zooming into inputs */
          .form-group input,
          .form-group textarea {
            font-size: 16px;
            padding: 13px 14px;
          }

          .submit-btn {
            width: 100%;
            padding: 14px 20px;
          }
        }

        /* =========================================================
           RESPONSIVE — MOBILE (<= 480px)
           ========================================================= */
        @media (max-width: 480px) {
          .contact-section {
            padding: 60px 0;
          }

          .contact-banner {
            padding: 22px 16px;
            border-radius: 16px;
          }

          .contact-banner-grid {
            gap: 26px;
          }

          .contact-invite {
            font-size: 0.9rem;
            margin: 12px 0 22px;
          }

          .contact-icon-pill {
            width: 38px;
            height: 38px;
            border-radius: 9px;
          }

          .direct-value {
            font-size: 0.88rem;
          }

          .email-copy-row {
            gap: 8px;
          }

          .copy-btn {
            padding: 6px 12px;
            font-size: 0.78rem;
          }

          .contact-socials {
            flex-direction: column;
          }

          .social-pill-link {
            width: 100%;
            flex: none;
          }

          .contact-form {
            gap: 14px;
          }

          .form-alert {
            font-size: 0.82rem;
            padding: 11px 12px;
          }
        }

        /* =========================================================
           RESPONSIVE — SMALL MOBILE (<= 360px)
           ========================================================= */
        @media (max-width: 360px) {
          .contact-banner {
            padding: 18px 14px;
          }

          .contact-direct-item {
            gap: 10px;
          }

          .direct-value {
            font-size: 0.84rem;
          }
        }
      `}</style>

      <section id="contact" className="section-padding contact-section">
        <div className="container">
          {/* Contact Banner */}
          <div className="contact-banner reveal-up">
            <div className="contact-banner-grid">

              {/* Contact Information */}
              <div className="contact-banner-info">
                <span className="section-eyebrow">
                  LET&apos;S WORK TOGETHER
                </span>

                <h2 className="section-heading">
                  HAVE A PROJECT <br />
                  <span className="gold-highlight">IN MIND?</span>
                </h2>

                <p className="contact-invite">
                  Whether it&apos;s a full-stack MERN application,
                  custom e-commerce platform, or responsive web
                  interface, I&apos;d love to hear what you&apos;re building.
                </p>

                <div className="contact-direct-list">
                  {/* Direct Email */}
                  <div className="contact-direct-item">
                    <div className="contact-icon-pill">
                      <FiMail size={18} />
                    </div>

                    <div>
                      <span className="direct-label">Direct Email</span>

                      <div className="email-copy-row">
                        <a
                          href="mailto:awais.arif.fs.dev@gmail.com"
                          className="direct-value"
                        >
                          awais.arif.fs.dev@gmail.com
                        </a>

                        <button
                          type="button"
                          onClick={handleCopyEmail}
                          className="copy-btn"
                          aria-label="Copy email address"
                        >
                          <FiCopy size={14} />
                          <span>{copied ? 'Copied!' : 'Copy'}</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="contact-direct-item">
                    <div className="contact-icon-pill">
                      <FiMapPin size={18} />
                    </div>

                    <div>
                      <span className="direct-label">Location</span>
                      <p className="direct-value">
                        Lahore, Punjab, Pakistan (Remote Worldwide)
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="contact-socials">
                  <a
                    href="https://github.com/awais-fs-dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-pill-link"
                  >
                    <FiGithub size={17} />
                    <span>GitHub</span>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/awais-arif-webdev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-pill-link"
                  >
                    <FiLinkedin size={17} />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>

              {/* Contact Form */}
              <div className="contact-form-wrapper">
                <form
                  ref={formRef}
                  className="contact-form"
                  onSubmit={handleSubmit}
                  noValidate
                >
                  <div className="form-row-two">
                    {/* Name */}
                    <div className="form-group">
                      <label htmlFor="from_name">Your Name *</label>

                      <input
                        id="from_name"
                        name="from_name"
                        type="text"
                        placeholder="e.g. Ali Raza"
                        value={formData.from_name}
                        onChange={handleChange}
                        className={errors.from_name ? 'input-error' : ''}
                        aria-invalid={Boolean(errors.from_name)}
                        autoComplete="name"
                        required
                      />

                      {errors.from_name && (
                        <span className="field-error">
                          {errors.from_name}
                        </span>
                      )}
                    </div>

                    {/* Email */}
                    <div className="form-group">
                      <label htmlFor="from_email">Your Email *</label>

                      <input
                        id="from_email"
                        name="from_email"
                        type="email"
                        placeholder="name@company.com"
                        value={formData.from_email}
                        onChange={handleChange}
                        className={errors.from_email ? 'input-error' : ''}
                        aria-invalid={Boolean(errors.from_email)}
                        autoComplete="email"
                        required
                      />

                      {errors.from_email && (
                        <span className="field-error">
                          {errors.from_email}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="form-group">
                    <label htmlFor="subject">Subject *</label>

                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="Full-Stack Web App / E-Commerce Store / Portfolio"
                      value={formData.subject}
                      onChange={handleChange}
                      className={errors.subject ? 'input-error' : ''}
                      aria-invalid={Boolean(errors.subject)}
                      required
                    />

                    {errors.subject && (
                      <span className="field-error">
                        {errors.subject}
                      </span>
                    )}
                  </div>

                  {/* Project Details */}
                  <div className="form-group">
                    <label htmlFor="message">Project Details *</label>

                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Tell me about your goals, timeline, and required features..."
                      value={formData.message}
                      onChange={handleChange}
                      className={errors.message ? 'input-error' : ''}
                      aria-invalid={Boolean(errors.message)}
                      required
                    />

                    {errors.message && (
                      <span className="field-error">
                        {errors.message}
                      </span>
                    )}
                  </div>

                  {/* Success / Error Alert */}
                  {status.text && (
                    <div
                      className={`form-alert ${
                        status.type === 'success'
                          ? 'alert-success'
                          : 'alert-error'
                      }`}
                      role="status"
                      aria-live="polite"
                    >
                      {status.type === 'success' ? (
                        <FiCheckCircle size={18} />
                      ) : (
                        <FiAlertCircle size={18} />
                      )}

                      <span>{status.text}</span>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="btn-gold-solid w-full submit-btn"
                    disabled={isSending}
                  >
                    <span>
                      {isSending
                        ? 'Sending Your Inquiry...'
                        : 'Send Message'}
                    </span>

                    <FiSend size={17} />
                  </button>
                </form>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;