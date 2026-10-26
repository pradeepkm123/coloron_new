import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  FileText,
  Download,
  ChevronRight,
  ChevronUp,
  ChevronDown,
  Home,
  Monitor,
  Mic,
  Camera,
  Layers,
  ArrowRight,
  Shield,
  Eye
} from 'lucide-react';
import ContactSalesModal from '../components/ContactSalesModal';

export default function RemoteClassroomInspectionSolution() {
  const [activeNav, setActiveNav] = useState('what-we-offer');
  const [showSalesModal, setShowSalesModal] = useState(false);
  const [openAccordions, setOpenAccordions] = useState({
    'cost-camera': true,
    'cost-mic': true,
    'high-camera': true,
    'high-sharing': true,
  });

  const toggleAccordion = (key) => {
    setOpenAccordions((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // Subnav scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['what-we-offer', 'recommended-solution', 'related-resources', 'related-links'];
      const scrollPos = window.scrollY + 180;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveNav(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -120;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveNav(id);
    }
  };

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
      
      {/* 1. HERO BANNER - 750px Height */}
      <section
        style={{
          position: 'relative',
          width: '100%',
          height: '750px',
          minHeight: '750px',
          backgroundImage: "url('/images/remote-classroom/banner.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center right',
          backgroundRepeat: 'no-repeat',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            maxWidth: '1440px',
            width: '100%',
            margin: '0 auto',
            padding: '48px 32px',
            position: 'relative',
            zIndex: 2,
          }}
        >
          {/* Breadcrumbs */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: 'rgba(255, 255, 255, 0.85)',
              fontSize: '0.86rem',
              fontWeight: 500,
              marginBottom: '28px',
            }}
          >
            <Link to="/" style={{ color: 'inherit', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Home size={14} /> Home
            </Link>
            <ChevronRight size={13} />
            <Link to="/solutions" style={{ color: 'inherit', textDecoration: 'none' }}>
              Solutions
            </Link>
            <ChevronRight size={13} />
            <Link to="/solutions" style={{ color: 'inherit', textDecoration: 'none' }}>
              Solutions by Function
            </Link>
            <ChevronRight size={13} />
            <span style={{ color: '#ffffff', fontWeight: 600 }}>Remote Classroom Inspection</span>
          </div>

          <div style={{ maxWidth: '640px' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                color: '#ffffff',
                fontSize: '1.05rem',
                fontWeight: 600,
                marginBottom: '12px',
                letterSpacing: '0.02em',
                textShadow: '0 1px 3px rgba(0,0,0,0.2)',
              }}
            >
              <Eye size={20} />
              Solutions by Function
            </div>
            <h1
              style={{
                fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
                fontWeight: 700,
                color: '#ffffff',
                margin: 0,
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
                textShadow: '0 2px 8px rgba(0, 0, 0, 0.25)',
              }}
            >
              Remote Classroom Inspection
            </h1>
          </div>
        </div>
      </section>

      {/* 2. STICKY SUB-NAVIGATION */}
      <nav
        style={{
          position: 'sticky',
          top: '64px',
          zIndex: 40,
          backgroundColor: '#ffffff',
          borderBottom: '1px solid #e5e7eb',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
        }}
      >
        <div
          style={{
            maxWidth: '1440px',
            margin: '0 auto',
            padding: '0 32px',
            display: 'flex',
            alignItems: 'center',
            gap: '36px',
            overflowX: 'auto',
            whiteSpace: 'nowrap',
          }}
        >
          {[
            { id: 'what-we-offer', label: 'What we offer' },
            { id: 'recommended-solution', label: 'Recommended solution' },
            { id: 'related-resources', label: 'Related Resources' },
            { id: 'related-links', label: 'Related links' },
          ].map((item) => {
            const isActive = activeNav === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  padding: '18px 0',
                  fontSize: '0.94rem',
                  fontWeight: isActive ? 600 : 500,
                  color: isActive ? '#d7150e' : '#4b5563',
                  borderBottom: isActive ? '3px solid #d7150e' : '3px solid transparent',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </nav>

      {/* 3. SECTION: WHAT WE OFFER */}
      <section
        id="what-we-offer"
        style={{
          maxWidth: '1440px',
          margin: '0 auto',
          padding: '80px 32px 56px',
        }}
      >
        <h2
          style={{
            fontSize: 'clamp(1.9rem, 3.2vw, 2.6rem)',
            fontWeight: 700,
            color: '#1d1d1f',
            textAlign: 'center',
            marginBottom: '36px',
            letterSpacing: '-0.02em',
          }}
        >
          What we offer
        </h2>

        <div style={{ maxWidth: '980px', margin: '0 auto 56px', textAlign: 'center' }}>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.8,
              color: '#4b5563',
              marginBottom: '20px',
            }}
          >
            To ensure a safe classroom environment, boost instructional performance, and elevate teaching quality, evaluation should be done on a regular basis. Therefore, all schools can benefit from classroom inspections that can be done remotely, giving school managers and evaluators an overall picture.
          </p>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.8,
              color: '#4b5563',
              margin: 0,
            }}
          >
            This was not easy when school evaluators were needed on-site, consuming time and energy and making it difficult to prevent disruptions to the class and to classroom flow. What's more, expensive cameras were needed to be specifically installed for teaching evaluations, creating a financial burden on education authorities or preventing inspections entirely.
          </p>
        </div>

        {/* Highlight Card */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div
            onClick={() => scrollToSection('recommended-solution')}
            style={{
              backgroundColor: '#ffffff',
              border: '1px solid #e5e7eb',
              borderRadius: '16px',
              padding: '36px 48px',
              textAlign: 'center',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
              cursor: 'pointer',
              transition: 'all 0.25s ease',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              maxWidth: '380px',
              width: '100%',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.08)';
              e.currentTarget.style.borderColor = '#16a34a';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.04)';
              e.currentTarget.style.borderColor = '#e5e7eb';
            }}
          >
            <div
              style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                backgroundColor: '#f0fdf4',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px',
                overflow: 'hidden',
              }}
            >
              <img
                src="/images/remote-classroom/icon_remote_inspection.jpg"
                alt="Remote Classroom Inspection"
                style={{ width: '84px', height: '84px', objectFit: 'contain' }}
              />
            </div>
            <h3
              style={{
                fontSize: '1.2rem',
                fontWeight: 600,
                color: '#1d1d1f',
                margin: 0,
              }}
            >
              Remote Classroom Inspection
            </h3>
          </div>
        </div>
      </section>

      {/* 4. SECTION: RECOMMENDED SOLUTION */}
      <section
        id="recommended-solution"
        style={{
          backgroundColor: '#f9fafb',
          borderTop: '1px solid #f1f5f9',
          borderBottom: '1px solid #f1f5f9',
          padding: '80px 32px',
        }}
      >
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: 'clamp(1.9rem, 3.2vw, 2.6rem)',
              fontWeight: 700,
              color: '#1d1d1f',
              textAlign: 'center',
              marginBottom: '56px',
              letterSpacing: '-0.02em',
            }}
          >
            Recommended solution
          </h2>

          {/* Feature Highlight Card (Teacher at chalkboard + 4 Bullets) */}
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              border: '1px solid #e5e7eb',
              boxShadow: '0 6px 24px rgba(0, 0, 0, 0.04)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
              gap: '40px',
              alignItems: 'center',
              padding: '36px',
              marginBottom: '48px',
            }}
          >
            <div
              style={{
                position: 'relative',
                borderRadius: '12px',
                overflow: 'hidden',
                border: '1px solid #eaeaea',
              }}
            >
              <img
                src="/images/remote-classroom/maximize_teaching_quality.jpg"
                alt="Maximize teaching quality and campus safety"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  objectFit: 'cover',
                }}
              />
            </div>

            <div>
              <h3
                style={{
                  fontSize: '1.3rem',
                  fontWeight: 700,
                  color: '#1d1d1f',
                  marginBottom: '20px',
                  lineHeight: 1.4,
                }}
              >
                Maximize teaching quality and campus safety
              </h3>
              <ul
                style={{
                  listStyleType: 'disc',
                  paddingLeft: '22px',
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px',
                }}
              >
                <li style={{ fontSize: '0.96rem', color: '#4b5563', lineHeight: 1.65 }}>
                  Open course inspectors can view real-time video feeds of classes from their computer or mobile phone without any interruption to the class.
                </li>
                <li style={{ fontSize: '0.96rem', color: '#4b5563', lineHeight: 1.65 }}>
                  Security staff can quickly and conveniently inspect multiple classrooms at the same time to ensure property safety.
                </li>
                <li style={{ fontSize: '0.96rem', color: '#4b5563', lineHeight: 1.65 }}>
                  In emergencies, school administrators, teachers, or security staff can talk to teachers and students in the classroom remotely.
                </li>
                <li style={{ fontSize: '0.96rem', color: '#4b5563', lineHeight: 1.65 }}>
                  Flexible equipment options will meet a host of needs and budgets. The high-end solution enables class recording along with more advanced remote learning and multi-classroom learning functions.
                </li>
              </ul>
            </div>
          </div>

          {/* Solution 1: Cost-Effective Solution */}
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              border: '1px solid #e5e7eb',
              boxShadow: '0 6px 24px rgba(0, 0, 0, 0.04)',
              padding: '36px',
              marginBottom: '40px',
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
                gap: '40px',
                alignItems: 'start',
              }}
            >
              {/* Left: Diagram */}
              <div
                style={{
                  position: 'relative',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  border: '1px solid #eaeaea',
                  backgroundColor: '#f8fafc',
                  padding: '16px',
                }}
              >
                <img
                  src="/images/remote-classroom/diagram_cost_effective.jpg"
                  alt="Cost-Effective Solution Diagram"
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    objectFit: 'contain',
                  }}
                />
              </div>

              {/* Right: Products List / Accordions */}
              <div>
                <h4
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: '#1d1d1f',
                    marginBottom: '20px',
                    paddingBottom: '12px',
                    borderBottom: '2px solid #f1f5f9',
                  }}
                >
                  Cost-Effective Solution
                </h4>

                {/* Accordion 1: Camera */}
                <div style={{ marginBottom: '16px', border: '1px solid #e5e7eb', borderRadius: '10px', overflow: 'hidden' }}>
                  <button
                    onClick={() => toggleAccordion('cost-camera')}
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '14px 18px',
                      backgroundColor: '#f9fafb',
                      border: 'none',
                      cursor: 'pointer',
                      fontWeight: 600,
                      fontSize: '0.98rem',
                      color: '#1d1d1f',
                    }}
                  >
                    <span>Camera</span>
                    {openAccordions['cost-camera'] ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </button>
                  {openAccordions['cost-camera'] && (
                    <div style={{ padding: '16px 18px', backgroundColor: '#ffffff' }}>
                      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                        <div style={{ width: '80px', height: '60px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <img
                            src="/images/distance-learning/prod_dome_camera.png"
                            alt="iDS-2CD7186G0/H-IZ(H)S(Y)"
                            style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                          />
                        </div>
                        <div>
                          <div style={{ fontSize: '1rem', fontWeight: 700, color: '#1d1d1f' }}>
                            iDS-2CD7186G0/H-IZ(H)S(Y)
                          </div>
                          <div style={{ fontSize: '0.88rem', color: '#6b7280', marginTop: '2px' }}>
                            8MP DeepinView HEOP Moto Varifocal Dome Camera
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Accordion 2: Array Microphone */}
                <div style={{ border: '1px solid #e5e7eb', borderRadius: '10px', overflow: 'hidden' }}>
                  <button
                    onClick={() => toggleAccordion('cost-mic')}
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '14px 18px',
                      backgroundColor: '#f9fafb',
                      border: 'none',
                      cursor: 'pointer',
                      fontWeight: 600,
                      fontSize: '0.98rem',
                      color: '#1d1d1f',
                    }}
                  >
                    <span>Array Microphone</span>
                    {openAccordions['cost-mic'] ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </button>
                  {openAccordions['cost-mic'] && (
                    <div style={{ padding: '16px 18px', backgroundColor: '#ffffff' }}>
                      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                        <div style={{ width: '80px', height: '60px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f3f4f6', borderRadius: '8px' }}>
                          <Mic size={26} color="#4b5563" />
                        </div>
                        <div>
                          <div style={{ fontSize: '1rem', fontWeight: 700, color: '#1d1d1f' }}>
                            DS-UAM001-B
                          </div>
                          <div style={{ fontSize: '0.88rem', color: '#6b7280', marginTop: '2px' }}>
                            Ceiling Array Microphone with AI Acoustic Echo Cancellation & Noise Suppression
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Solution 2: High-End Solution */}
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              border: '1px solid #e5e7eb',
              boxShadow: '0 6px 24px rgba(0, 0, 0, 0.04)',
              padding: '36px',
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
                gap: '40px',
                alignItems: 'start',
              }}
            >
              {/* Left: Diagram */}
              <div
                style={{
                  position: 'relative',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  border: '1px solid #eaeaea',
                  backgroundColor: '#f8fafc',
                  padding: '16px',
                }}
              >
                <img
                  src="/images/remote-classroom/diagram_high_end.jpg"
                  alt="High-End Solution Diagram"
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    objectFit: 'contain',
                  }}
                />
              </div>

              {/* Right: Products List / Accordions */}
              <div>
                <h4
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: '#1d1d1f',
                    marginBottom: '20px',
                    paddingBottom: '12px',
                    borderBottom: '2px solid #f1f5f9',
                  }}
                >
                  High-End Solution
                </h4>

                {/* Accordion 1: Camera */}
                <div style={{ marginBottom: '16px', border: '1px solid #e5e7eb', borderRadius: '10px', overflow: 'hidden' }}>
                  <button
                    onClick={() => toggleAccordion('high-camera')}
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '14px 18px',
                      backgroundColor: '#f9fafb',
                      border: 'none',
                      cursor: 'pointer',
                      fontWeight: 600,
                      fontSize: '0.98rem',
                      color: '#1d1d1f',
                    }}
                  >
                    <span>Camera</span>
                    {openAccordions['high-camera'] ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </button>
                  {openAccordions['high-camera'] && (
                    <div style={{ padding: '16px 18px', backgroundColor: '#ffffff' }}>
                      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                        <div style={{ width: '80px', height: '60px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <img
                            src="/images/distance-learning/prod_dome_camera.png"
                            alt="iDS-2CD7186G0/H-IZ(H)S(Y)"
                            style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                          />
                        </div>
                        <div>
                          <div style={{ fontSize: '1rem', fontWeight: 700, color: '#1d1d1f' }}>
                            iDS-2CD7186G0/H-IZ(H)S(Y)
                          </div>
                          <div style={{ fontSize: '0.88rem', color: '#6b7280', marginTop: '2px' }}>
                            8MP DeepinView HEOP Moto Varifocal Dome Camera
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Accordion 2: Education Sharing Device */}
                <div style={{ border: '1px solid #e5e7eb', borderRadius: '10px', overflow: 'hidden' }}>
                  <button
                    onClick={() => toggleAccordion('high-sharing')}
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '14px 18px',
                      backgroundColor: '#f9fafb',
                      border: 'none',
                      cursor: 'pointer',
                      fontWeight: 600,
                      fontSize: '0.98rem',
                      color: '#1d1d1f',
                    }}
                  >
                    <span>Education Sharing Device</span>
                    {openAccordions['high-sharing'] ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </button>
                  {openAccordions['high-sharing'] && (
                    <div style={{ padding: '16px 18px', backgroundColor: '#ffffff' }}>
                      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                        <div style={{ width: '80px', height: '60px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f3f4f6', borderRadius: '8px' }}>
                          <Layers size={26} color="#4b5563" />
                        </div>
                        <div>
                          <div style={{ fontSize: '1rem', fontWeight: 700, color: '#1d1d1f' }}>
                            DS-VE22D-C/HW
                          </div>
                          <div style={{ fontSize: '0.88rem', color: '#6b7280', marginTop: '2px' }}>
                            Interactive Lecture Recording Terminal & Multi-Camera Matrix Hub
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SECTION: RELATED RESOURCES */}
      <section
        id="related-resources"
        style={{
          maxWidth: '1440px',
          margin: '0 auto',
          padding: '80px 32px',
        }}
      >
        <h2
          style={{
            fontSize: 'clamp(1.9rem, 3.2vw, 2.6rem)',
            fontWeight: 700,
            color: '#1d1d1f',
            textAlign: 'center',
            marginBottom: '48px',
            letterSpacing: '-0.02em',
          }}
        >
          Related Resources
        </h2>

        <div
          style={{
            maxWidth: '560px',
            margin: '0 auto',
          }}
        >
          <div
            style={{
              backgroundColor: '#ffffff',
              border: '1px solid #e5e7eb',
              borderRadius: '12px',
              padding: '24px 28px',
              boxShadow: '0 2px 10px rgba(0, 0, 0, 0.03)',
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
              transition: 'all 0.2s ease',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#d7150e';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 16px rgba(0, 0, 0, 0.06)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#e5e7eb';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.03)';
            }}
            onClick={() => setShowSalesModal(true)}
          >
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '8px',
                backgroundColor: '#fee2e2',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <FileText size={24} color="#dc2626" />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: '0.8rem', color: '#9ca3af', fontWeight: 600, textTransform: 'uppercase' }}>
                Leaflet
              </div>
              <h4
                style={{
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: '#1d1d1f',
                  margin: '4px 0 0',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                Remote Classroom Inspection Solution
              </h4>
            </div>
            <Download size={20} color="#9ca3af" />
          </div>
        </div>
      </section>

      {/* 6. SECTION: YOU MAY ALSO BE INTERESTED IN */}
      <section
        id="related-links"
        style={{
          backgroundColor: '#f9fafb',
          borderTop: '1px solid #f1f5f9',
          padding: '80px 32px 64px',
        }}
      >
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: 'clamp(1.9rem, 3.2vw, 2.6rem)',
              fontWeight: 700,
              color: '#1d1d1f',
              textAlign: 'center',
              marginBottom: '48px',
              letterSpacing: '-0.02em',
            }}
          >
            You may also be interested in
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '24px',
              maxWidth: '1100px',
              margin: '0 auto',
            }}
          >
            {[
              {
                title: 'Information Release',
                image: '/images/distance-learning/interest_information_release.jpg',
                link: '/solutions/information-display',
              },
              {
                title: 'Classroom Hub',
                image: '/images/distance-learning/interest_classroom_hub.jpg',
                link: '/solutions/classroom-hub',
              },
              {
                title: 'Distance Learning',
                image: '/images/distance-learning/interest_remote_inspection.jpg',
                link: '/solutions/distance-learning',
              },
            ].map((item, idx) => (
              <Link
                key={idx}
                to={item.link}
                style={{
                  position: 'relative',
                  height: '240px',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  textDecoration: 'none',
                  display: 'block',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 16px 36px rgba(0, 0, 0, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.08)';
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0.1) 60%, transparent 100%)',
                    display: 'flex',
                    alignItems: 'flex-end',
                    padding: '24px',
                  }}
                >
                  <h3
                    style={{
                      color: '#ffffff',
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      margin: 0,
                      textShadow: '0 2px 4px rgba(0, 0, 0, 0.4)',
                    }}
                  >
                    {item.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7. SECTION: READY TO DISCUSS YOUR NEEDS? */}
      <section
        style={{
          backgroundColor: '#ffffff',
          borderTop: '1px solid #e5e7eb',
          padding: '64px 32px',
          textAlign: 'center',
        }}
      >
        <h2
          style={{
            fontSize: '1.75rem',
            fontWeight: 700,
            color: '#1d1d1f',
            marginBottom: '28px',
          }}
        >
          Ready to discuss your needs?
        </h2>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            flexWrap: 'wrap',
          }}
        >
          <button
            onClick={() => setShowSalesModal(true)}
            style={{
              backgroundColor: '#d7150e',
              color: '#ffffff',
              border: 'none',
              borderRadius: '9999px',
              padding: '12px 32px',
              fontSize: '0.98rem',
              fontWeight: 600,
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(215, 21, 14, 0.25)',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#b91c1c';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#d7150e';
            }}
          >
            Contact Sales
          </button>
          <button
            onClick={() => setShowSalesModal(true)}
            style={{
              backgroundColor: 'transparent',
              color: '#d7150e',
              border: '2px solid #d7150e',
              borderRadius: '9999px',
              padding: '10px 30px',
              fontSize: '0.98rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(215, 21, 14, 0.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            Request a Demo
          </button>
        </div>
      </section>

      {/* SALES CONTACT MODAL */}
      <ContactSalesModal
        isOpen={showSalesModal}
        onClose={() => setShowSalesModal(false)}
        defaultSolution="Remote Classroom Inspection Solution"
      />
    </div>
  );
}
