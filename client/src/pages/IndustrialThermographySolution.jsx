import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Home,
  Maximize2,
  ChevronDown,
  ChevronRight,
  X,
  Shield,
  Flame,
  Thermometer,
  FileText,
  Download,
  Calendar,
  Layers,
  Activity,
  CheckCircle,
  Eye
} from 'lucide-react';
import ContactSalesModal from '../components/ContactSalesModal';

export default function IndustrialThermographySolution() {
  const [activeNav, setActiveNav] = useState('what-we-offer');
  const [showSalesModal, setShowSalesModal] = useState(false);
  const [lightboxImg, setLightboxImg] = useState(null);
  const [openAccordions, setOpenAccordions] = useState({
    'standard': true,
    'explosion': true,
  });

  const toggleAccordion = (key) => {
    setOpenAccordions((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // Subnav scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['what-we-offer', 'recommended-solution', 'success-stories', 'download', 'related-links'];
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
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif', color: '#1d1d1f' }}>
      
      {/* 1. HERO BANNER - 750px Height Exactly */}
      <section
        style={{
          position: 'relative',
          width: '100%',
          height: '750px',
          minHeight: '750px',
          backgroundImage: "url('/images/industrial-thermography/banner.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
        }}
      >
        {/* Amber / Warm Flame Curved Gradient Overlay matching screenshot */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            width: '65%',
            background: 'radial-gradient(ellipse at 15% 45%, rgba(217, 119, 6, 0.78) 0%, rgba(180, 83, 9, 0.5) 45%, rgba(0, 0, 0, 0.25) 75%, transparent 100%)',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />
        {/* Soft dark vignette */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to right, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.3) 45%, rgba(0, 0, 0, 0.05) 100%)',
            zIndex: 1,
          }}
        />

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
              fontSize: '0.9rem',
              color: 'rgba(255, 255, 255, 0.85)',
              marginBottom: '28px',
            }}
          >
            <Link to="/" style={{ color: 'rgba(255, 255, 255, 0.85)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Home size={15} />
              <span>Home</span>
            </Link>
            <span>/</span>
            <Link to="/solutions" style={{ color: 'rgba(255, 255, 255, 0.85)', textDecoration: 'none' }}>
              Solutions
            </Link>
            <span>/</span>
            <Link to="/solutions#functions" style={{ color: 'rgba(255, 255, 255, 0.85)', textDecoration: 'none' }}>
              Solutions by Function
            </Link>
            <span>/</span>
            <span style={{ color: '#ffffff', fontWeight: 600 }}>Industrial Thermography</span>
          </div>

          {/* Eyebrow badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '16px',
            }}
          >
            <svg width="22" height="14" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 8C5 2 9 14 13 8C17 2 21 14 23 8" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
            <span
              style={{
                fontSize: '1.15rem',
                fontWeight: 600,
                color: '#ffffff',
                letterSpacing: '0.01em',
              }}
            >
              Solutions by Function
            </span>
          </div>

          {/* Title */}
          <h1
            style={{
              fontSize: 'clamp(2.6rem, 5vw, 4.2rem)',
              fontWeight: 800,
              color: '#ffffff',
              lineHeight: 1.15,
              margin: '0 0 24px 0',
              maxWidth: '850px',
              letterSpacing: '-0.02em',
              textShadow: '0 3px 12px rgba(0, 0, 0, 0.35)',
            }}
          >
            Industrial Thermography
          </h1>

          <p
            style={{
              fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)',
              color: 'rgba(255, 255, 255, 0.92)',
              maxWidth: '680px',
              lineHeight: 1.6,
              margin: '0 0 36px 0',
              textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
            }}
          >
            Harnessing industry-leading thermography products to detect abnormal temperature rises 24/7, enabling early fire hazard warning and continuous equipment protection.
          </p>

          {/* CTA Buttons */}
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <button
              onClick={() => setShowSalesModal(true)}
              style={{
                backgroundColor: '#d7150e',
                color: '#ffffff',
                border: 'none',
                borderRadius: '9999px',
                padding: '14px 36px',
                fontSize: '1rem',
                fontWeight: 700,
                cursor: 'pointer',
                boxShadow: '0 4px 18px rgba(215, 21, 14, 0.45)',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#b91c1c';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#d7150e';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Contact Sales
            </button>
            <button
              onClick={() => scrollToSection('recommended-solution')}
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                color: '#ffffff',
                border: '1.5px solid rgba(255, 255, 255, 0.7)',
                backdropFilter: 'blur(8px)',
                borderRadius: '9999px',
                padding: '14px 36px',
                fontSize: '1rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
                e.currentTarget.style.borderColor = '#ffffff';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.7)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Explore Solution
            </button>
          </div>
        </div>
      </section>

      {/* 2. STICKY SUBNAV BAR */}
      <nav
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 90,
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
            justifyContent: 'center',
            gap: '40px',
            overflowX: 'auto',
            whiteSpace: 'nowrap',
          }}
        >
          {[
            { id: 'what-we-offer', label: 'What we offer' },
            { id: 'recommended-solution', label: 'Recommended solution' },
            { id: 'success-stories', label: 'Success stories' },
            { id: 'download', label: 'Download' },
            { id: 'related-links', label: 'You may also be interested in' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              style={{
                background: 'none',
                border: 'none',
                padding: '18px 4px',
                fontSize: '0.98rem',
                fontWeight: activeNav === item.id ? 700 : 500,
                color: activeNav === item.id ? '#d7150e' : '#4b5563',
                cursor: 'pointer',
                position: 'relative',
                transition: 'all 0.2s ease',
              }}
            >
              {item.label}
              {activeNav === item.id && (
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '3px',
                    backgroundColor: '#d7150e',
                    borderRadius: '2px 2px 0 0',
                  }}
                />
              )}
            </button>
          ))}
        </div>
      </nav>

      {/* 3. SECTION: WHAT WE OFFER */}
      <section
        id="what-we-offer"
        style={{
          padding: '88px 32px 72px',
          maxWidth: '1440px',
          margin: '0 auto',
        }}
      >
        <div style={{ textAlign: 'center', maxWidth: '1020px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: 'clamp(2rem, 3.2vw, 2.75rem)',
              fontWeight: 700,
              color: '#1d1d1f',
              marginBottom: '24px',
              letterSpacing: '-0.02em',
            }}
          >
            What we offer
          </h2>
          <p
            style={{
              fontSize: '1.08rem',
              lineHeight: 1.75,
              color: '#4b5563',
              marginBottom: '56px',
            }}
          >
            Equipment damage or malfunction usually causes a rapid increase in temperature. If there's no intervention in the early stages, it can lead to operational downtime and expensive losses. That’s a headache for business owners in any industry. But that does not have to be the end of the story. Coloron's Industrial Thermography Solution harnesses industry-leading thermography products to detect signs of failure 24/7 via abnormal temperature changes during temperature-critical operations, helping with preventive maintenance and product quality control while enabling timely and effective responses to all kinds of risks. Keep reading to learn more.
          </p>

          {/* Single Circular Badge Matching Screenshot */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div
              onClick={() => scrollToSection('recommended-solution')}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '16px',
                cursor: 'pointer',
                transition: 'transform 0.25s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-4px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              <div
                style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: '2px solid #e5e7eb',
                  boxShadow: '0 4px 14px rgba(0,0,0,0.06)',
                  padding: '4px',
                  backgroundColor: '#ffffff',
                }}
              >
                <img
                  src="/images/industrial-thermography/icon_thermal.jpg"
                  alt="Thermal imaging for industrial applications"
                  style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '50%' }}
                />
              </div>
              <span
                style={{
                  fontSize: '1.02rem',
                  fontWeight: 600,
                  color: '#1d1d1f',
                  maxWidth: '240px',
                  lineHeight: 1.4,
                }}
              >
                Thermal imaging for industrial applications
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SECTION: RECOMMENDED SOLUTION */}
      <section
        id="recommended-solution"
        style={{
          padding: '88px 32px',
          backgroundColor: '#f8f9fa',
          borderTop: '1px solid #f1f5f9',
        }}
      >
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: 'clamp(2rem, 3.2vw, 2.75rem)',
              fontWeight: 700,
              color: '#1d1d1f',
              textAlign: 'center',
              marginBottom: '16px',
              letterSpacing: '-0.02em',
            }}
          >
            Recommended solution
          </h2>

          <div
            style={{
              textAlign: 'center',
              color: '#d7150e',
              fontWeight: 600,
              fontSize: '1rem',
              marginBottom: '36px',
            }}
          >
            Thermal imaging for industrial applications
          </div>

          {/* Subtitle & Bullets */}
          <div style={{ maxWidth: '1080px', margin: '0 auto 40px' }}>
            <h3
              style={{
                fontSize: '1.45rem',
                fontWeight: 700,
                color: '#1d1d1f',
                marginBottom: '18px',
              }}
            >
              Capture the invisible instantly
            </h3>
            <ul
              style={{
                fontSize: '1.02rem',
                lineHeight: 1.8,
                color: '#4b5563',
                paddingLeft: '22px',
                margin: 0,
              }}
            >
              <li style={{ marginBottom: '10px' }}>
                Real-time monitoring 24/7 on generators, corrosion of pipelines, temperature rise in electrical installations, etc., with great stability, clear imaging and high accuracy – up to ± 2° C or ± 2%.
              </li>
              <li style={{ marginBottom: '10px' }}>
                Multiple temperature measurement rules – including point, line and frame measurements – which users can select for various scenarios to reach maximum accuracy.
              </li>
              <li style={{ marginBottom: '10px' }}>
                Heat distribution can be clearly displayed with images and a historical temperature curve of the presets or thermometry points. This provides users with a quick overview of observed targets, helping maintenance teams troubleshoot problems and take corrective actions.
              </li>
              <li style={{ marginBottom: '10px' }}>
                Remote inspection via professional software platforms offers smart temperature analysis with live video feed based on thermal imaging. Users can automatically receive alarm notifications with video clips or still images according to pre-set rules.
              </li>
            </ul>
          </div>

          {/* 2 Scenario Cards: Petrochemical Plants & Electrical Substations */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
              gap: '24px',
              maxWidth: '1080px',
              margin: '0 auto 64px',
            }}
          >
            {/* Scenario 1: Petrochemical Plants */}
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
                transition: 'transform 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-4px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              <div style={{ height: '260px', overflow: 'hidden' }}>
                <img
                  src="/images/industrial-thermography/scenario_petrochemical.png"
                  alt="Petrochemical Plants"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ padding: '20px 24px' }}>
                <h4 style={{ fontSize: '1.18rem', fontWeight: 700, margin: 0, color: '#1d1d1f' }}>
                  Petrochemical Plants
                </h4>
              </div>
            </div>

            {/* Scenario 2: Electrical Substations */}
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
                transition: 'transform 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-4px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              <div style={{ height: '260px', overflow: 'hidden' }}>
                <img
                  src="/images/industrial-thermography/scenario_substations.png"
                  alt="Electrical Substations"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ padding: '20px 24px' }}>
                <h4 style={{ fontSize: '1.18rem', fontWeight: 700, margin: 0, color: '#1d1d1f' }}>
                  Electrical Substations
                </h4>
              </div>
            </div>
          </div>

          {/* Topology Diagram (Left) & Product Selection (Right) */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(460px, 1fr))',
              gap: '32px',
              alignItems: 'start',
              backgroundColor: '#ffffff',
              padding: '36px',
              borderRadius: '12px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
              maxWidth: '1280px',
              margin: '0 auto',
            }}
          >
            {/* Left: Topology Diagram */}
            <div>
              <div
                style={{
                  position: 'relative',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  border: '1px solid #e5e7eb',
                  backgroundColor: '#f3f4f6',
                  cursor: 'pointer',
                }}
                onClick={() => setLightboxImg('/images/industrial-thermography/diagram_topology.jpg')}
              >
                <img
                  src="/images/industrial-thermography/diagram_topology.jpg"
                  alt="Industrial Thermography System Topology"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    bottom: '12px',
                    right: '12px',
                    backgroundColor: 'rgba(0,0,0,0.7)',
                    color: '#ffffff',
                    padding: '6px 12px',
                    borderRadius: '20px',
                    fontSize: '0.82rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  <Maximize2 size={13} />
                  <span>Click to enlarge</span>
                </div>
              </div>
              <p style={{ fontSize: '0.88rem', color: '#6b7280', marginTop: '12px', textAlign: 'center' }}>
                Architecture: Control Center VMS + Switch + Bi-spectrum Speed Dome, Bullet, Cube & Handheld Cameras
              </p>
            </div>

            {/* Right: Products Accordion */}
            <div>
              <h4
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: '#1d1d1f',
                  marginBottom: '20px',
                  paddingBottom: '12px',
                  borderBottom: '2px solid #e5e7eb',
                }}
              >
                Product Selection
              </h4>

              {/* Accordion 1: Standard Thermography Cameras */}
              <div style={{ borderBottom: '1px solid #e5e7eb' }}>
                <button
                  onClick={() => toggleAccordion('standard')}
                  style={{
                    width: '100%',
                    padding: '16px 0',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    background: 'none',
                    border: 'none',
                    fontSize: '1.05rem',
                    fontWeight: 600,
                    color: '#1d1d1f',
                    cursor: 'pointer',
                    textAlign: 'left',
                  }}
                >
                  <span>Standard Thermography Cameras</span>
                  <ChevronDown
                    size={18}
                    style={{
                      transform: openAccordions['standard'] ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.2s ease',
                    }}
                  />
                </button>
                {openAccordions['standard'] && (
                  <div style={{ paddingBottom: '18px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {/* Prod 1 */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '16px',
                        padding: '12px 16px',
                        backgroundColor: '#f9fafb',
                        borderRadius: '8px',
                        border: '1px solid #f3f4f6',
                      }}
                    >
                      <div style={{ width: '80px', height: '60px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <img
                          src="/images/industrial-thermography/prod_speed_dome.png"
                          alt="DS-2TD4137T-9/W"
                          style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}
                        />
                      </div>
                      <div>
                        <div style={{ fontWeight: 700, fontSize: '0.98rem', color: '#111827' }}>
                          DS-2TD4137T-9/W
                        </div>
                        <div style={{ fontSize: '0.88rem', color: '#6b7280', marginTop: '2px' }}>
                          Thermographic Thermal & Optical Bi-spectrum Network Speed Dome
                        </div>
                      </div>
                    </div>

                    {/* Prod 2 */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '16px',
                        padding: '12px 16px',
                        backgroundColor: '#f9fafb',
                        borderRadius: '8px',
                        border: '1px solid #f3f4f6',
                      }}
                    >
                      <div style={{ width: '80px', height: '60px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <img
                          src="/images/industrial-thermography/prod_cube.png"
                          alt="DS-2TD3017T-2/V"
                          style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}
                        />
                      </div>
                      <div>
                        <div style={{ fontWeight: 700, fontSize: '0.98rem', color: '#111827' }}>
                          DS-2TD3017T-2/V
                        </div>
                        <div style={{ fontSize: '0.88rem', color: '#6b7280', marginTop: '2px' }}>
                          Thermographic Cube Camera with Ultra-Compact Form Factor
                        </div>
                      </div>
                    </div>

                    {/* Prod 3 */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '16px',
                        padding: '12px 16px',
                        backgroundColor: '#f9fafb',
                        borderRadius: '8px',
                        border: '1px solid #f3f4f6',
                      }}
                    >
                      <div style={{ width: '80px', height: '60px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <img
                          src="/images/industrial-thermography/prod_positioning.png"
                          alt="DS-2TD5537T-7/W"
                          style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}
                        />
                      </div>
                      <div>
                        <div style={{ fontWeight: 700, fontSize: '0.98rem', color: '#111827' }}>
                          DS-2TD5537T-7/W
                        </div>
                        <div style={{ fontSize: '0.88rem', color: '#6b7280', marginTop: '2px' }}>
                          Bi-spectrum Thermography Mini Positioning Series
                        </div>
                      </div>
                    </div>

                    {/* Prod 4 */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '16px',
                        padding: '12px 16px',
                        backgroundColor: '#f9fafb',
                        borderRadius: '8px',
                        border: '1px solid #f3f4f6',
                      }}
                    >
                      <div style={{ width: '80px', height: '60px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <img
                          src="/images/industrial-thermography/prod_bullet.png"
                          alt="DS-2TD2637T-10/QY"
                          style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}
                        />
                      </div>
                      <div>
                        <div style={{ fontWeight: 700, fontSize: '0.98rem', color: '#111827' }}>
                          DS-2TD2637T-10/QY
                        </div>
                        <div style={{ fontSize: '0.88rem', color: '#6b7280', marginTop: '2px' }}>
                          Thermographic Thermal & Optical Bi-spectrum Network Bullet Camera
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Accordion 2: Explosion-proof Thermography Cameras */}
              <div style={{ borderBottom: '1px solid #e5e7eb' }}>
                <button
                  onClick={() => toggleAccordion('explosion')}
                  style={{
                    width: '100%',
                    padding: '16px 0',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    background: 'none',
                    border: 'none',
                    fontSize: '1.05rem',
                    fontWeight: 600,
                    color: '#1d1d1f',
                    cursor: 'pointer',
                    textAlign: 'left',
                  }}
                >
                  <span>Explosion-proof Thermography Cameras</span>
                  <ChevronDown
                    size={18}
                    style={{
                      transform: openAccordions['explosion'] ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.2s ease',
                    }}
                  />
                </button>
                {openAccordions['explosion'] && (
                  <div style={{ paddingBottom: '18px' }}>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '16px',
                        padding: '12px 16px',
                        backgroundColor: '#f9fafb',
                        borderRadius: '8px',
                        border: '1px solid #f3f4f6',
                      }}
                    >
                      <div style={{ width: '80px', height: '60px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <img
                          src="/images/industrial-thermography/prod_ex_bullet.png"
                          alt="DS-2TD2528T-10/Q"
                          style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}
                        />
                      </div>
                      <div>
                        <div style={{ fontWeight: 700, fontSize: '0.98rem', color: '#111827' }}>
                          DS-2TD2528T-10/Q
                        </div>
                        <div style={{ fontSize: '0.88rem', color: '#6b7280', marginTop: '2px' }}>
                          Explosion-Proof Thermographic Network Bullet Camera for Hazardous Environments
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SECTION: SUCCESS STORIES */}
      <section
        id="success-stories"
        style={{
          padding: '88px 32px',
          maxWidth: '1440px',
          margin: '0 auto',
        }}
      >
        <h2
          style={{
            fontSize: 'clamp(2rem, 3.2vw, 2.75rem)',
            fontWeight: 700,
            color: '#1d1d1f',
            textAlign: 'center',
            marginBottom: '48px',
            letterSpacing: '-0.02em',
          }}
        >
          Success stories
        </h2>

        {/* Story Card Matching Screenshot */}
        <div
          style={{
            maxWidth: '1180px',
            margin: '0 auto',
            backgroundColor: '#ffffff',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
            border: '1px solid #f1f5f9',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
            alignItems: 'stretch',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-4px)';
            e.currentTarget.style.boxShadow = '0 16px 40px rgba(0, 0, 0, 0.12)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.08)';
          }}
        >
          {/* Story Left Image */}
          <div style={{ minHeight: '340px', position: 'relative' }}>
            <img
              src="/images/industrial-thermography/success_oil_platform.jpg"
              alt="Oil Platform Operator"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </div>

          {/* Story Right Content */}
          <div
            style={{
              padding: '44px 40px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '0.88rem',
                color: '#6b7280',
                marginBottom: '14px',
              }}
            >
              <Calendar size={15} />
              <span>August 21, 2024</span>
            </div>

            <h3
              style={{
                fontSize: 'clamp(1.4rem, 2.2vw, 1.85rem)',
                fontWeight: 700,
                color: '#1d1d1f',
                lineHeight: 1.3,
                marginBottom: '16px',
                letterSpacing: '-0.01em',
              }}
            >
              Oil platform operator enhances staff health and safety and minimizes security risks with Coloron
            </h3>

            <p
              style={{
                fontSize: '1rem',
                lineHeight: 1.65,
                color: '#4b5563',
                marginBottom: '28px',
              }}
            >
              Deploying rugged explosion-proof thermal cameras across offshore drilling rigs, operators achieved round-the-clock flare monitoring, pipeline leak thermometry, and automated fire hazard warnings.
            </p>

            {/* Topics Tags */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#374151' }}>Topic:</span>
              {['Energy', 'Industrial thermography', 'Offshore'].map((topic, idx) => (
                <span
                  key={idx}
                  style={{
                    backgroundColor: '#f3f4f6',
                    color: '#4b5563',
                    padding: '4px 12px',
                    borderRadius: '9999px',
                    fontSize: '0.82rem',
                    fontWeight: 500,
                  }}
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. SECTION: DOWNLOAD (MATCHING SCREENSHOT) */}
      <section
        id="download"
        style={{
          padding: '72px 32px 88px',
          backgroundColor: '#f8f9fa',
          borderTop: '1px solid #f1f5f9',
        }}
      >
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: 'clamp(2rem, 3.2vw, 2.75rem)',
              fontWeight: 700,
              color: '#1d1d1f',
              textAlign: 'center',
              marginBottom: '48px',
              letterSpacing: '-0.02em',
            }}
          >
            Download
          </h2>

          <div style={{ maxWidth: '480px', margin: '0 auto' }}>
            <div
              onClick={() => setLightboxImg('/images/industrial-thermography/resource_infographic.jpg')}
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '10px',
                padding: '24px 28px',
                boxShadow: '0 4px 18px rgba(0, 0, 0, 0.05)',
                border: '1px solid #e5e7eb',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 10px 28px rgba(0, 0, 0, 0.1)';
                e.currentTarget.style.borderColor = '#d7150e';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 18px rgba(0, 0, 0, 0.05)';
                e.currentTarget.style.borderColor = '#e5e7eb';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(215, 21, 14, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#d7150e',
                  }}
                >
                  <FileText size={24} />
                </div>
                <div>
                  <div style={{ fontSize: '0.82rem', fontWeight: 600, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Infographic
                  </div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#111827', margin: '2px 0 0' }}>
                    Industrial Thermography
                  </h3>
                </div>
              </div>

              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  backgroundColor: '#f3f4f6',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#374151',
                }}
              >
                <Download size={18} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SECTION: YOU MAY ALSO BE INTERESTED IN (3 PHOTO CARDS MATCHING SCREENSHOT) */}
      <section
        id="related-links"
        style={{
          padding: '88px 32px',
          maxWidth: '1440px',
          margin: '0 auto',
        }}
      >
        <h2
          style={{
            fontSize: 'clamp(2rem, 3.2vw, 2.75rem)',
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
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px',
            maxWidth: '1240px',
            margin: '0 auto',
          }}
        >
          {[
            {
              category: 'Solutions by industry',
              title: 'Energy',
              desc: 'Coloron provides comprehensive system solutions to enhance safety and efficiency for energy businesses, optimizing operational awareness.',
              image: '/images/industrial-thermography/interest_energy.jpg',
              link: '/solutions/electrical-substations',
            },
            {
              category: 'Solutions by industry',
              title: 'Oil & Gas',
              desc: 'Provides advanced technologies and products that empower your businesses and employees with automated thermometry and safety monitoring.',
              image: '/images/industrial-thermography/interest_oil_gas.jpg',
              link: '/solutions/onshore-oilfields',
            },
            {
              category: 'Solutions by function',
              title: 'Intelligent Inspection',
              desc: 'Traceable, regulated, and automated inspection processes with high-definition video, thermal imaging, and AI analytics.',
              image: '/images/industrial-thermography/interest_intelligent_inspection.jpg',
              link: '/solutions/intelligent-inspection',
            },
          ].map((card, idx) => (
            <Link
              key={idx}
              to={card.link}
              style={{
                position: 'relative',
                height: '340px',
                borderRadius: '8px',
                overflow: 'hidden',
                textDecoration: 'none',
                display: 'block',
                boxShadow: '0 6px 20px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 16px 36px rgba(0, 0, 0, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.1)';
              }}
            >
              <img
                src={card.image}
                alt={card.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
              {/* Dark Gradient Overlay */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(0, 0, 0, 0.92) 0%, rgba(0, 0, 0, 0.55) 45%, rgba(0, 0, 0, 0.1) 85%, transparent 100%)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '28px 24px',
                }}
              >
                <div style={{ fontSize: '0.82rem', color: 'rgba(255, 255, 255, 0.75)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '6px' }}>
                  {card.category}
                </div>
                <h3
                  style={{
                    color: '#ffffff',
                    fontSize: '1.45rem',
                    fontWeight: 700,
                    margin: '0 0 10px 0',
                    lineHeight: 1.25,
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    color: 'rgba(255, 255, 255, 0.85)',
                    fontSize: '0.9rem',
                    lineHeight: 1.5,
                    margin: 0,
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                  }}
                >
                  {card.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 8. SECTION: READY TO DISCUSS YOUR NEEDS? (MATCHING BOTTOM CTA & ARTWORK) */}
      <section
        style={{
          backgroundColor: '#ffffff',
          borderTop: '1px solid #e5e7eb',
          padding: '88px 32px',
        }}
      >
        <div
          style={{
            maxWidth: '1180px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '48px',
            flexWrap: 'wrap',
          }}
        >
          {/* Left Text & CTA Buttons */}
          <div style={{ flex: '1 1 480px' }}>
            <h2
              style={{
                fontSize: 'clamp(2rem, 3.2vw, 2.75rem)',
                fontWeight: 700,
                color: '#1d1d1f',
                marginBottom: '28px',
                letterSpacing: '-0.02em',
              }}
            >
              Ready to discuss your needs?
            </h2>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
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
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#b91c1c')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#d7150e')}
              >
                Contact Us
              </button>
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
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#b91c1c')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#d7150e')}
              >
                Contact Specialists
              </button>
            </div>
          </div>

          {/* Right Vector Illustration Graphic matching Hikvision's artwork */}
          <div
            style={{
              flex: '0 1 440px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <svg width="400" height="280" viewBox="0 0 400 280" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="180" y="246" width="200" height="4" rx="2" fill="#cbd5e1" />
              <rect x="230" y="172" width="130" height="6" rx="2" fill="#1e293b" />
              <rect x="245" y="178" width="6" height="68" fill="#1e293b" />
              <rect x="345" y="178" width="6" height="68" fill="#1e293b" />
              <rect x="245" y="220" width="106" height="4" fill="#334155" />

              <rect x="272" y="152" width="38" height="20" rx="2" fill="#1e293b" />
              <rect x="275" y="155" width="32" height="15" rx="1" fill="#38bdf8" />
              <polygon points="264,172 318,172 312,168 270,168" fill="#64748b" />

              <circle cx="260" cy="116" r="14" fill="#fed7aa" />
              <path d="M250 110 Q260 98 272 108 Q274 116 270 120 Q262 110 252 114 Z" fill="#1e293b" />
              
              <path d="M256 102 C265 102 272 108 272 116" stroke="#d7150e" strokeWidth="3" fill="none" strokeLinecap="round" />
              <circle cx="272" cy="116" r="5" fill="#d7150e" />
              <path d="M272 118 L264 126" stroke="#d7150e" strokeWidth="2" strokeLinecap="round" />

              <path d="M250 130 C242 142 242 165 242 185 L278 185 C278 165 274 142 268 130 Z" fill="#1e293b" />
              <path d="M260 130 L260 142" stroke="#ffffff" strokeWidth="2" />
              <path d="M256 142 Q270 156 280 166" stroke="#1e293b" strokeWidth="6" strokeLinecap="round" />
              <path d="M246 145 Q262 160 274 168" stroke="#334155" strokeWidth="5" strokeLinecap="round" />

              <rect x="232" y="148" width="6" height="42" rx="2" fill="#d7150e" />
              <rect x="230" y="186" width="32" height="6" rx="2" fill="#d7150e" />
              <rect x="242" y="192" width="6" height="48" fill="#475569" />
              <path d="M232 240 L258 240" stroke="#475569" strokeWidth="4" strokeLinecap="round" />

              <path d="M210 246 Q185 210 195 170 Q215 205 210 246 Z" fill="#059669" />
              <path d="M210 246 Q225 215 218 185 Q205 215 210 246 Z" fill="#10b981" />
              <path d="M205 246 Q165 230 180 205 Q200 225 205 246 Z" fill="#047857" />

              <path d="M375 246 Q395 215 385 185 Q370 215 375 246 Z" fill="#10b981" />
              <path d="M370 246 Q360 225 362 205 Q375 225 370 246 Z" fill="#059669" />

              <g transform="translate(195, 120)">
                <circle cx="16" cy="16" r="14" stroke="#475569" strokeWidth="4" strokeDasharray="5 3" fill="none" />
                <circle cx="16" cy="16" r="5" fill="#475569" />
              </g>
              <g transform="translate(216, 96)">
                <circle cx="12" cy="12" r="10" stroke="#64748b" strokeWidth="3" strokeDasharray="4 2" fill="none" />
                <circle cx="12" cy="12" r="3.5" fill="#64748b" />
              </g>

              <circle cx="230" cy="74" r="14" fill="#334155" />
              <path d="M230 65 L230 74 L237 74" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />

              <rect x="306" y="70" width="36" height="24" rx="4" fill="#334155" />
              <polygon points="320,94 326,94 322,99" fill="#334155" />
              <path d="M312 76 L324 84 L336 76" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" fill="none" />
            </svg>
          </div>
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      {lightboxImg && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.88)',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 99999,
            padding: '24px',
          }}
          onClick={() => setLightboxImg(null)}
        >
          <div
            style={{ position: 'relative', maxWidth: '94vw', maxHeight: '92vh' }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightboxImg(null)}
              style={{
                position: 'absolute',
                top: '-44px',
                right: '0',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                color: '#ffffff',
                border: 'none',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              <X size={20} />
            </button>
            <img
              src={lightboxImg}
              alt="Preview"
              style={{
                maxWidth: '94vw',
                maxHeight: '88vh',
                objectFit: 'contain',
                borderRadius: '8px',
                boxShadow: '0 12px 48px rgba(0,0,0,0.5)',
              }}
            />
          </div>
        </div>
      )}

      {/* SALES CONTACT MODAL */}
      <ContactSalesModal
        isOpen={showSalesModal}
        onClose={() => setShowSalesModal(false)}
        defaultSubject="Inquiry: Industrial Thermography Solution"
      />

    </div>
  );
}
