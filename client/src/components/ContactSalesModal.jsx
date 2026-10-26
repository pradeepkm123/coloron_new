import React, { useState, useEffect } from 'react';
import { X, CheckCircle, ChevronDown } from 'lucide-react';

export default function ContactSalesModal({ isOpen, onClose }) {
  const [userType, setUserType] = useState('Business');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    state: '',
    city: '',
    postcode: '',
    message: '',
    companyName: '',
    businessType: '',
    industry: '',
    jobTitle: '',
    subscribeNewsletter: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setSubmitted(false);
      setErrors({});
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: false }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = true;
    if (!formData.lastName.trim()) newErrors.lastName = true;
    if (!formData.email.trim() || !formData.email.includes('@')) newErrors.email = true;
    if (!formData.country) newErrors.country = true;
    if (!formData.state.trim()) newErrors.state = true;
    if (!formData.city.trim()) newErrors.city = true;
    if (!formData.message.trim()) newErrors.message = true;

    if (userType === 'Business') {
      if (!formData.companyName.trim()) newErrors.companyName = true;
      if (!formData.businessType) newErrors.businessType = true;
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setSubmitted(true);
  };

  const countries = [
    'United States',
    'United Kingdom',
    'India',
    'United Arab Emirates',
    'Germany',
    'France',
    'Canada',
    'Australia',
    'Singapore',
    'Saudi Arabia',
    'Qatar',
    'Netherlands',
    'Japan',
    'South Korea',
    'Brazil',
    'Mexico',
    'South Africa',
    'Other',
  ];

  const businessTypes = [
    'System Integrator',
    'Distributor / Reseller',
    'Installer / Contractor',
    'End User / Enterprise',
    'Architect / Consultant',
    'Government / Public Sector',
    'Other',
  ];

  const industries = [
    'Education & Campuses',
    'Commercial Buildings & Real Estate',
    'Energy & Utilities',
    'Healthcare & Hospitals',
    'Logistics, Warehouses & Seaports',
    'Retail Stores & Shopping Malls',
    'Traffic, Highways & Smart City',
    'Banking & Financial Institutions',
    'Manufacturing & Industrial',
    'Residential & Communities',
    'Other',
  ];

  const inputStyle = (hasError) => ({
    width: '100%',
    padding: '11px 14px',
    fontSize: '0.92rem',
    borderRadius: '6px',
    border: `1px solid ${hasError ? '#ef4444' : '#d1d5db'}`,
    backgroundColor: '#ffffff',
    color: '#1f2937',
    outline: 'none',
    boxSizing: 'border-box',
    transition: 'border-color 0.2s, box-shadow 0.2s',
  });

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        backgroundColor: 'rgba(0, 0, 0, 0.55)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px 16px',
        overflowY: 'auto',
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: 'relative',
          backgroundColor: '#ffffff',
          width: '100%',
          maxWidth: '720px',
          maxHeight: '92vh',
          overflowY: 'auto',
          borderRadius: '16px',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          padding: 'clamp(24px, 4vw, 44px)',
          margin: 'auto',
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close"
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            backgroundColor: '#f3f4f6',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: '#4b5563',
            transition: 'background-color 0.2s, color 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#e5e7eb';
            e.currentTarget.style.color = '#111827';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#f3f4f6';
            e.currentTarget.style.color = '#4b5563';
          }}
        >
          <X size={18} />
        </button>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '48px 16px' }}>
            <div
              style={{
                width: '72px',
                height: '72px',
                borderRadius: '50%',
                backgroundColor: '#dcfce7',
                color: '#16a34a',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
              }}
            >
              <CheckCircle size={42} />
            </div>
            <h3 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#111827', margin: '0 0 10px' }}>
              Inquiry Received!
            </h3>
            <p style={{ fontSize: '1rem', color: '#4b5563', maxWidth: '440px', margin: '0 auto 28px', lineHeight: 1.5 }}>
              Thank you, <strong>{formData.firstName}</strong>. A Coloron Solutions Expert will review your site specifications and contact you shortly.
            </p>
            <button
              onClick={onClose}
              style={{
                backgroundColor: '#e06d63',
                color: '#ffffff',
                border: 'none',
                padding: '10px 32px',
                borderRadius: '20px',
                fontSize: '0.94rem',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            {/* Title */}
            <h2
              style={{
                fontSize: 'clamp(1.6rem, 3vw, 2rem)',
                fontWeight: 700,
                color: '#111827',
                textAlign: 'center',
                margin: '0 0 28px',
                letterSpacing: '-0.02em',
              }}
            >
              Contact Sales
            </h2>

            {/* 1. User type */}
            <div style={{ marginBottom: '26px' }}>
              <label
                style={{
                  display: 'block',
                  fontSize: '0.94rem',
                  fontWeight: 600,
                  color: '#1f2937',
                  marginBottom: '12px',
                }}
              >
                <span style={{ color: '#dc2626', marginRight: '4px' }}>*</span>
                User type
              </label>

              <div style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
                <label
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    cursor: 'pointer',
                    fontSize: '0.92rem',
                    color: '#374151',
                  }}
                >
                  <input
                    type="radio"
                    name="userType"
                    value="Business"
                    checked={userType === 'Business'}
                    onChange={() => setUserType('Business')}
                    style={{
                      width: '18px',
                      height: '18px',
                      accentColor: '#e06d63',
                      cursor: 'pointer',
                    }}
                  />
                  <span>Business</span>
                </label>

                <label
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    cursor: 'pointer',
                    fontSize: '0.92rem',
                    color: '#374151',
                  }}
                >
                  <input
                    type="radio"
                    name="userType"
                    value="Personal"
                    checked={userType === 'Personal'}
                    onChange={() => setUserType('Personal')}
                    style={{
                      width: '18px',
                      height: '18px',
                      accentColor: '#e06d63',
                      cursor: 'pointer',
                    }}
                  />
                  <span>Personal</span>
                </label>
              </div>
            </div>

            {/* 2. How can we reach you ? */}
            <div style={{ marginBottom: '32px' }}>
              <h3
                style={{
                  fontSize: '1.15rem',
                  fontWeight: 700,
                  color: '#111827',
                  margin: '0 0 16px',
                }}
              >
                How can we reach you ?
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {/* First Name & Last Name */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px' }}>
                  <div>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="First Name *"
                      style={inputStyle(errors.firstName)}
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Last Name *"
                      style={inputStyle(errors.lastName)}
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email *"
                    style={inputStyle(errors.email)}
                  />
                </div>

                {/* Phone */}
                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone"
                    style={inputStyle(false)}
                  />
                </div>

                {/* Country / Region & Province / State */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px' }}>
                  <div style={{ position: 'relative' }}>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      style={{
                        ...inputStyle(errors.country),
                        appearance: 'none',
                        color: formData.country ? '#1f2937' : '#9ca3af',
                        paddingRight: '36px',
                        cursor: 'pointer',
                      }}
                    >
                      <option value="">Country/Region *</option>
                      {countries.map((c) => (
                        <option key={c} value={c} style={{ color: '#1f2937' }}>
                          {c}
                        </option>
                      ))}
                    </select>
                    <div
                      style={{
                        position: 'absolute',
                        right: '12px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        pointerEvents: 'none',
                        color: '#6b7280',
                      }}
                    >
                      <ChevronDown size={16} />
                    </div>
                  </div>

                  <div>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      placeholder="Province/State *"
                      style={inputStyle(errors.state)}
                    />
                  </div>
                </div>

                {/* City & Postcode */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px' }}>
                  <div>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="City *"
                      style={inputStyle(errors.city)}
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="postcode"
                      value={formData.postcode}
                      onChange={handleChange}
                      placeholder="Postcode"
                      style={inputStyle(false)}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* 3. What can we help you with ? */}
            <div style={{ marginBottom: '32px' }}>
              <h3
                style={{
                  fontSize: '1.15rem',
                  fontWeight: 700,
                  color: '#111827',
                  margin: '0 0 16px',
                }}
              >
                What can we help you with ?
              </h3>

              <div style={{ position: 'relative' }}>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message *"
                  maxLength={200}
                  rows={4}
                  style={{
                    ...inputStyle(errors.message),
                    minHeight: '110px',
                    resize: 'vertical',
                    paddingBottom: '28px',
                    fontFamily: 'inherit',
                  }}
                />
                <span
                  style={{
                    position: 'absolute',
                    right: '12px',
                    bottom: '10px',
                    fontSize: '0.78rem',
                    color: '#9ca3af',
                    pointerEvents: 'none',
                  }}
                >
                  {formData.message.length}/200
                </span>
              </div>
            </div>

            {/* 4. Company Details (Only shown when userType is Business) */}
            {userType === 'Business' && (
              <div style={{ marginBottom: '28px' }}>
                <h3
                  style={{
                    fontSize: '1.15rem',
                    fontWeight: 700,
                    color: '#111827',
                    margin: '0 0 16px',
                  }}
                >
                  Company Details
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <div>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      placeholder="Company Name *"
                      style={inputStyle(errors.companyName)}
                    />
                  </div>

                  <div style={{ position: 'relative' }}>
                    <select
                      name="businessType"
                      value={formData.businessType}
                      onChange={handleChange}
                      style={{
                        ...inputStyle(errors.businessType),
                        appearance: 'none',
                        color: formData.businessType ? '#1f2937' : '#9ca3af',
                        paddingRight: '36px',
                        cursor: 'pointer',
                      }}
                    >
                      <option value="">Business Type/Role *</option>
                      {businessTypes.map((bt) => (
                        <option key={bt} value={bt} style={{ color: '#1f2937' }}>
                          {bt}
                        </option>
                      ))}
                    </select>
                    <div
                      style={{
                        position: 'absolute',
                        right: '12px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        pointerEvents: 'none',
                        color: '#6b7280',
                      }}
                    >
                      <ChevronDown size={16} />
                    </div>
                  </div>

                  <div style={{ position: 'relative' }}>
                    <select
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      style={{
                        ...inputStyle(false),
                        appearance: 'none',
                        color: formData.industry ? '#1f2937' : '#9ca3af',
                        paddingRight: '36px',
                        cursor: 'pointer',
                      }}
                    >
                      <option value="">Industry</option>
                      {industries.map((ind) => (
                        <option key={ind} value={ind} style={{ color: '#1f2937' }}>
                          {ind}
                        </option>
                      ))}
                    </select>
                    <div
                      style={{
                        position: 'absolute',
                        right: '12px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        pointerEvents: 'none',
                        color: '#6b7280',
                      }}
                    >
                      <ChevronDown size={16} />
                    </div>
                  </div>

                  <div>
                    <input
                      type="text"
                      name="jobTitle"
                      value={formData.jobTitle}
                      onChange={handleChange}
                      placeholder="Job Title"
                      style={inputStyle(false)}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* 5. Newsletter & Privacy Checkbox */}
            <div style={{ marginBottom: '24px' }}>
              <label
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '10px',
                  cursor: 'pointer',
                  fontSize: '0.84rem',
                  color: '#4b5563',
                  lineHeight: 1.45,
                }}
              >
                <input
                  type="checkbox"
                  name="subscribeNewsletter"
                  checked={formData.subscribeNewsletter}
                  onChange={handleChange}
                  style={{
                    width: '16px',
                    height: '16px',
                    marginTop: '2px',
                    accentColor: '#e06d63',
                    cursor: 'pointer',
                  }}
                />
                <span>
                  Yes, I would like to subscribe to newsletters and be informed of new products, services and surveys from Coloron. I understand that I can unsubscribe at any time.
                </span>
              </label>

              <p
                style={{
                  fontSize: '0.84rem',
                  color: '#4b5563',
                  margin: '12px 0 0',
                  lineHeight: 1.45,
                }}
              >
                By submitting this form, I confirm that I have read and agreed to the{' '}
                <a
                  href="/privacy"
                  onClick={(e) => e.stopPropagation()}
                  style={{ color: '#0071e3', textDecoration: 'none' }}
                  onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
                  onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
                >
                  privacy policy
                </a>
                .
              </p>
            </div>

            {/* 6. Submit Button */}
            <div>
              <button
                type="submit"
                style={{
                  backgroundColor: '#e06d63',
                  color: '#ffffff',
                  border: 'none',
                  padding: '9px 34px',
                  borderRadius: '18px',
                  fontSize: '0.94rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  boxShadow: '0 4px 12px rgba(224, 109, 99, 0.25)',
                  transition: 'background-color 0.2s, transform 0.1s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#d35c52')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#e06d63')}
                onMouseDown={(e) => (e.currentTarget.style.transform = 'scale(0.98)')}
                onMouseUp={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              >
                Submit
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
