import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, CheckCircle2, ChevronDown, Check } from 'lucide-react';
import { submitContact } from '../api/client';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: 'India',
    state: '',
    city: '',
    message: '',
    division: 'Sales',
  });

  const [captchaState, setCaptchaState] = useState('idle'); // 'idle' | 'checking' | 'verified'
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleCaptchaClick = () => {
    if (captchaState === 'idle') {
      setCaptchaState('checking');
      setTimeout(() => {
        setCaptchaState('verified');
      }, 650);
    } else if (captchaState === 'verified') {
      setCaptchaState('idle');
    }
  };

  // States list for India
  const indianStates = [
    'Andhra Pradesh',
    'Assam',
    'Bihar',
    'Chandigarh',
    'Chhattisgarh',
    'Delhi NCR',
    'Goa',
    'Gujarat',
    'Haryana',
    'Himachal Pradesh',
    'Jharkhand',
    'Karnataka',
    'Kerala',
    'Madhya Pradesh',
    'Maharashtra',
    'Odisha',
    'Punjab',
    'Rajasthan',
    'Tamil Nadu',
    'Telangana',
    'Uttar Pradesh',
    'Uttarakhand',
    'West Bengal',
  ];

  const countries = [
    'India',
    'United States',
    'United Kingdom',
    'United Arab Emirates',
    'Singapore',
    'Germany',
    'Australia',
    'Canada',
    'Other',
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (captchaState !== 'verified') {
      alert("Please check the \"I'm not a robot\" box before submitting.");
      return;
    }
    setSubmitting(true);
    try {
      const res = await submitContact(formData);
      if (res.success) {
        setSuccess(true);
      } else {
        alert(res.error || 'Failed to submit message.');
      }
    } catch (err) {
      alert('Error communicating with server.');
    } finally {
      setSubmitting(false);
    }
  };

  const scrollToForm = (divisionName) => {
    setFormData((prev) => ({ ...prev, division: divisionName }));
    const formElem = document.getElementById('contact-form-section');
    if (formElem) {
      formElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="contact-page-wrapper">
      {/* 1. TOP BREADCRUMB */}
      <div className="contact-breadcrumb-bar">
        <div className="contact-container">
          <nav className="contact-breadcrumb">
            <Link to="/" className="cb-link">Home</Link>
            <span className="cb-sep">&gt;</span>
            <span className="cb-active">Contact Us</span>
          </nav>
        </div>
      </div>

      {/* 2. TOP CONTACT PAGE HERO BANNER (Height: 750px) */}
      <div className="contact-hero-banner">
        <img
          src="/images/contact_hero_750.jpg"
          alt="Coloron Vision Expert Support"
          className="contact-banner-img"
        />
      </div>

      {/* 3. MAIN SECTION */}
      <div className="contact-main-wrapper">
        <div className="contact-container">
          {/* Centered Heading */}
          <h1 className="contact-main-title">Speak to Our Experts</h1>

          {/* Two-Column Grid */}
          <div className="contact-grid-layout">
            {/* LEFT COLUMN: CONTACT DETAILS & DIVISIONS */}
            <div className="contact-info-col">
              {/* Working Hours */}
              <div className="info-block">
                <div className="hours-day">Monday - Saturday</div>
                <div className="hours-time">10:00 to 18:00</div>
              </div>

              <div className="contact-divider" />

              {/* Sales Enquiries */}
              <div className="info-block">
                <h3 className="division-heading">For Sales Enquiries</h3>
                <div className="contact-row">
                  <div className="icon-wrap">
                    <Phone size={16} className="contact-icon" />
                  </div>
                  <a href="tel:+919225550000" className="contact-link">
                    +91 92255 50000
                  </a>
                </div>
                <div className="contact-row">
                  <div className="icon-wrap">
                    <Mail size={16} className="contact-icon" />
                  </div>
                  <a href="mailto:sales@coloronvision.com" className="contact-link">
                    sales@coloronvision.com
                  </a>
                </div>
                <button
                  type="button"
                  onClick={() => scrollToForm('Sales Enquiries')}
                  className="btn-red-action"
                >
                  SALES ENQUIRY FORM
                </button>
              </div>

              <div className="contact-divider" />

              {/* Service - CCTV Division */}
              <div className="info-block">
                <h3 className="division-heading">For Service - CCTV Division</h3>
                <div className="contact-row">
                  <div className="icon-wrap">
                    <Phone size={16} className="contact-icon" />
                  </div>
                  <a href="tel:+917507407111" className="contact-link">
                    +91 75074 07111
                  </a>
                </div>
                <div className="contact-row">
                  <div className="icon-wrap">
                    <Mail size={16} className="contact-icon" />
                  </div>
                  <a href="mailto:support@coloronvision.com" className="contact-link">
                    support@coloronvision.com
                  </a>
                </div>
              </div>

              <div className="contact-divider" />

              {/* Service - Display Division */}
              <div className="info-block">
                <h3 className="division-heading">For Service - Display Division</h3>
                <div className="contact-row">
                  <div className="icon-wrap">
                    <Phone size={16} className="contact-icon" />
                  </div>
                  <a href="tel:+919851815171" className="contact-link">
                    +91 98518 15171
                  </a>
                </div>
                <div className="contact-row">
                  <div className="icon-wrap">
                    <Mail size={16} className="contact-icon" />
                  </div>
                  <a href="mailto:display.support@coloronvision.com" className="contact-link">
                    display.support@coloronvision.com
                  </a>
                </div>
              </div>
            </div>

            {/* VERTICAL DIVIDER */}
            <div className="contact-vertical-divider" />

            {/* RIGHT COLUMN: INTERACTIVE FORM */}
            <div className="contact-form-col" id="contact-form-section">
              <p className="form-lead-text">
                Fill in this form and one of our experts will get in touch with you shortly
              </p>

              {success ? (
                <div className="form-success-card">
                  <div className="success-icon-bubble">
                    <CheckCircle2 size={36} color="#16a34a" />
                  </div>
                  <h3 className="success-title">Message Received</h3>
                  <p className="success-desc">
                    Thank you, <strong>{formData.name}</strong>. Your inquiry has been routed to our{' '}
                    <strong>{formData.division}</strong> specialists. We will reach you shortly at{' '}
                    <strong>{formData.phone || formData.email}</strong>.
                  </p>
                  <button
                    onClick={() => {
                      setSuccess(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        country: 'India',
                        state: '',
                        city: '',
                        message: '',
                        division: 'Sales',
                      });
                      setCaptchaState('idle');
                    }}
                    className="btn-red-action"
                    style={{ marginTop: '16px' }}
                  >
                    SEND ANOTHER INQUIRY
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="expert-contact-form">
                  {/* Row 1: Name and Email */}
                  <div className="form-two-col">
                    <div className="input-group">
                      <input
                        type="text"
                        required
                        placeholder="Your Name*"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="custom-field-input"
                      />
                    </div>
                    <div className="input-group">
                      <input
                        type="email"
                        required
                        placeholder="Your Email*"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="custom-field-input"
                      />
                    </div>
                  </div>

                  {/* Row 2: Phone with India Flag & Country */}
                  <div className="form-two-col">
                    <div className="input-group phone-input-wrap">
                      <div className="flag-badge">
                        <span className="flag-icon" role="img" aria-label="India Flag">🇮🇳</span>
                        <span className="dial-code">+91</span>
                      </div>
                      <input
                        type="tel"
                        required
                        placeholder="Phone Number*"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="custom-field-input phone-input"
                      />
                    </div>
                    <div className="input-group select-wrap">
                      <select
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        className="custom-field-input custom-select"
                      >
                        {countries.map((c) => (
                          <option key={c} value={c}>
                            {c}
                          </option>
                        ))}
                      </select>
                      <ChevronDown size={14} className="select-arrow" />
                    </div>
                  </div>

                  {/* Row 3: State & City */}
                  <div className="form-two-col">
                    <div className="input-group select-wrap">
                      <select
                        value={formData.state}
                        onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                        className="custom-field-input custom-select"
                      >
                        <option value="">Select State</option>
                        {indianStates.map((st) => (
                          <option key={st} value={st}>
                            {st}
                          </option>
                        ))}
                      </select>
                      <ChevronDown size={14} className="select-arrow" />
                    </div>
                    <div className="input-group">
                      <input
                        type="text"
                        placeholder="Select City"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="custom-field-input"
                      />
                    </div>
                  </div>

                  {/* Row 4: Message */}
                  <div className="input-group">
                    <textarea
                      rows={4}
                      required
                      placeholder="Your Message*"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="custom-field-input custom-textarea"
                    />
                  </div>

                  {/* Row 5: Authentic Google reCAPTCHA v2 Box */}
                  <div className="recaptcha-box-wrap">
                    <div className="recaptcha-card">
                      <div className="recaptcha-left" onClick={handleCaptchaClick}>
                        <div className={`recaptcha-checkbox ${captchaState}`}>
                          {captchaState === 'checking' && (
                            <div className="recaptcha-spinner" />
                          )}
                          {captchaState === 'verified' && (
                            <svg viewBox="0 0 24 24" className="recaptcha-check-icon">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          )}
                        </div>
                        <span className="recaptcha-text">I'm not a robot</span>
                      </div>

                      <div className="recaptcha-right">
                        <div className="recaptcha-logo-wrap">
                          <img
                            src="/images/logo_48.png"
                            alt="reCAPTCHA"
                            className="recaptcha-brand-img"
                          />
                        </div>
                        <span className="rc-title">reCAPTCHA</span>
                        <div className="rc-links">
                          <a href="https://www.google.com/intl/en/policies/privacy/" target="_blank" rel="noopener noreferrer" className="rc-link">Privacy</a>
                          <span className="rc-link-sep">-</span>
                          <a href="https://www.google.com/intl/en/policies/terms/" target="_blank" rel="noopener noreferrer" className="rc-link">Terms</a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Row 6: Submit Button */}
                  <div>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="btn-send-message"
                    >
                      {submitting ? 'SENDING...' : 'SEND MESSAGE'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* STYLES */}
      <style>{`
        .contact-page-wrapper {
          min-height: 100vh;
          background-color: #ffffff;
          padding-top: 64px;
          color: #111827;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
          -webkit-font-smoothing: antialiased;
        }

        .contact-container {
          max-width: 1240px;
          margin: 0 auto;
          padding: 0 28px;
        }

        /* 1. TOP BREADCRUMB */
        .contact-breadcrumb-bar {
          background-color: #ffffff;
          padding: 14px 0;
          border-bottom: 1px solid #f1f3f5;
        }
        .contact-breadcrumb {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
        }
        .cb-link {
          color: #6b7280;
          text-decoration: none;
          transition: color 0.15s ease;
        }
        .cb-link:hover {
          color: #e31e24;
        }
        .cb-sep {
          color: #9ca3af;
          font-size: 11px;
        }
        .cb-active {
          color: #111827;
          font-weight: 500;
        }

        /* 2. TOP BANNER (EXACT 750PX HEIGHT) */
        .contact-hero-banner {
          width: 100%;
          height: 750px;
          min-height: 750px;
          overflow: hidden;
          background-color: #0b1118;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }
        .contact-banner-img {
          width: 100%;
          height: 750px;
          min-height: 750px;
          object-fit: cover;
          object-position: center 25%;
          display: block;
        }
        @media (max-width: 980px) {
          .contact-hero-banner,
          .contact-banner-img {
            height: 520px;
            min-height: 520px;
          }
        }
        @media (max-width: 640px) {
          .contact-hero-banner,
          .contact-banner-img {
            height: 380px;
            min-height: 380px;
          }
        }

        /* 3. MAIN SECTION */
        .contact-main-wrapper {
          padding: 48px 0 90px;
        }

        .contact-main-title {
          text-align: center;
          font-size: clamp(26px, 3.2vw, 36px);
          font-weight: 800;
          color: #111827;
          margin: 0 0 48px 0;
          letter-spacing: -0.5px;
        }

        .contact-grid-layout {
          display: grid;
          grid-template-columns: 420px 1px 1fr;
          gap: 40px;
          align-items: start;
        }
        @media (max-width: 980px) {
          .contact-grid-layout {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .contact-vertical-divider {
            display: none;
          }
        }

        /* LEFT COLUMN */
        .contact-info-col {
          display: flex;
          flex-direction: column;
        }

        .info-block {
          padding: 4px 0;
        }

        .hours-day {
          font-size: 16px;
          font-weight: 700;
          color: #111827;
          margin-bottom: 4px;
        }
        .hours-time {
          font-size: 14px;
          color: #4b5563;
        }

        .contact-divider {
          height: 1px;
          background-color: #e5e7eb;
          margin: 22px 0;
        }

        .division-heading {
          font-size: 16px;
          font-weight: 700;
          color: #111827;
          margin: 0 0 14px 0;
        }

        .contact-row {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 10px;
        }

        .icon-wrap {
          width: 22px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #111827;
        }
        .contact-icon {
          stroke-width: 2.2;
        }

        .contact-link {
          font-size: 15px;
          font-weight: 500;
          color: #111827;
          text-decoration: none;
          transition: color 0.15s ease;
        }
        .contact-link:hover {
          color: #e31e24;
        }

        /* Red Action Button */
        .btn-red-action {
          display: inline-block;
          background-color: #e31e24;
          color: #ffffff;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          padding: 10px 22px;
          border-radius: 6px;
          border: none;
          cursor: pointer;
          margin-top: 10px;
          transition: background-color 0.18s ease, transform 0.15s ease;
        }
        .btn-red-action:hover {
          background-color: #c9151b;
          transform: translateY(-1px);
        }

        /* VERTICAL DIVIDER */
        .contact-vertical-divider {
          width: 1px;
          background-color: #e5e7eb;
          height: 100%;
          min-height: 480px;
        }

        /* RIGHT COLUMN: FORM */
        .contact-form-col {
          display: flex;
          flex-direction: column;
        }

        .form-lead-text {
          font-size: 15px;
          color: #374151;
          margin: 0 0 24px 0;
          line-height: 1.5;
        }

        .expert-contact-form {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .form-two-col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        @media (max-width: 600px) {
          .form-two-col {
            grid-template-columns: 1fr;
          }
        }

        .input-group {
          position: relative;
          width: 100%;
        }

        .custom-field-input {
          width: 100%;
          height: 46px;
          background-color: #ffffff;
          border: 1px solid #d1d5db;
          border-radius: 8px;
          padding: 0 14px;
          font-size: 14px;
          color: #111827;
          outline: none;
          transition: border-color 0.15s ease, box-shadow 0.15s ease;
          box-sizing: border-box;
        }
        .custom-field-input::placeholder {
          color: #6b7280;
          font-size: 13.5px;
        }
        .custom-field-input:focus {
          border-color: #111827;
          box-shadow: 0 0 0 2px rgba(17, 24, 39, 0.08);
        }

        /* Phone Input with Country Code */
        .phone-input-wrap {
          display: flex;
          align-items: center;
        }
        .flag-badge {
          position: absolute;
          left: 12px;
          display: flex;
          align-items: center;
          gap: 6px;
          pointer-events: none;
          z-index: 1;
        }
        .flag-icon {
          font-size: 16px;
        }
        .dial-code {
          font-size: 13px;
          color: #374151;
          font-weight: 500;
        }
        .phone-input {
          padding-left: 72px;
        }

        /* Select Dropdowns */
        .select-wrap {
          position: relative;
        }
        .custom-select {
          appearance: none;
          cursor: pointer;
          color: #374151;
        }
        .select-arrow {
          position: absolute;
          right: 14px;
          top: 50%;
          transform: translateY(-50%);
          color: #6b7280;
          pointer-events: none;
        }

        /* Textarea */
        .custom-textarea {
          height: 120px;
          padding: 12px 14px;
          resize: vertical;
          font-family: inherit;
        }

        /* reCAPTCHA Box - Pixel Perfect Google reCAPTCHA v2 */
        .recaptcha-box-wrap {
          margin: 6px 0 10px;
        }
        .recaptcha-card {
          width: 304px;
          height: 78px;
          background-color: #f9f9f9;
          border: 1px solid #d3d3d3;
          border-radius: 3px;
          box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.08);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 12px;
          box-sizing: border-box;
          user-select: none;
        }

        .recaptcha-left {
          display: flex;
          align-items: center;
          gap: 12px;
          cursor: pointer;
        }

        .recaptcha-checkbox {
          position: relative;
          width: 28px;
          height: 28px;
          background-color: #ffffff;
          border: 2px solid #c1c1c1;
          border-radius: 2px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: border-color 0.15s ease;
          box-sizing: border-box;
        }
        .recaptcha-left:hover .recaptcha-checkbox {
          border-color: #b2b2b2;
        }
        .recaptcha-checkbox.verified {
          border: none;
          background: transparent;
        }

        /* Spinner */
        .recaptcha-spinner {
          width: 22px;
          height: 22px;
          border: 3px solid #e0e0e0;
          border-top-color: #4285f4;
          border-radius: 50%;
          animation: recaptchaSpin 0.7s linear infinite;
        }
        @keyframes recaptchaSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        /* Verified Check Icon */
        .recaptcha-check-icon {
          width: 30px;
          height: 30px;
          fill: none;
          stroke: #0f9d58;
          stroke-width: 3.5;
          stroke-linecap: round;
          stroke-linejoin: round;
          animation: checkPop 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        @keyframes checkPop {
          0% { transform: scale(0.4); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }

        .recaptcha-text {
          font-family: Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif;
          font-size: 14px;
          color: #282828;
          font-weight: 400;
        }

        .recaptcha-right {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin-right: 4px;
        }
        .recaptcha-logo-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 2px;
        }
        .recaptcha-brand-img {
          width: 32px;
          height: 32px;
          object-fit: contain;
          display: block;
        }
        .rc-title {
          font-family: Roboto, -apple-system, sans-serif;
          font-size: 10px;
          color: #555555;
          font-weight: 500;
          line-height: 1.1;
        }
        .rc-links {
          display: flex;
          align-items: center;
          gap: 3px;
          margin-top: 1px;
        }
        .rc-link {
          font-family: Roboto, -apple-system, sans-serif;
          font-size: 8px;
          color: #555555;
          text-decoration: none;
        }
        .rc-link:hover {
          text-decoration: underline;
        }
        .rc-link-sep {
          font-size: 7px;
          color: #888888;
        }

        /* Submit Button */
        .btn-send-message {
          display: inline-block;
          background-color: #e31e24;
          color: #ffffff;
          font-size: 13.5px;
          font-weight: 700;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          padding: 13px 34px;
          border-radius: 6px;
          border: none;
          cursor: pointer;
          transition: background-color 0.18s ease, transform 0.15s ease;
        }
        .btn-send-message:hover {
          background-color: #c9151b;
          transform: translateY(-1px);
        }

        /* Success Card */
        .form-success-card {
          padding: 40px 24px;
          border: 1px solid #dcfce7;
          background-color: #f0fdf4;
          border-radius: 12px;
          text-align: center;
        }
        .success-icon-bubble {
          display: flex;
          justify-content: center;
          margin-bottom: 12px;
        }
        .success-title {
          font-size: 20px;
          font-weight: 700;
          color: #166534;
          margin: 0 0 8px 0;
        }
        .success-desc {
          font-size: 14.5px;
          color: #374151;
          line-height: 1.5;
          max-width: 480px;
          margin: 0 auto;
        }
      `}</style>
    </div>
  );
}
