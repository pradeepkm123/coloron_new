import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  FileText,
  Download,
  ChevronRight,
  ChevronUp,
  ChevronDown,
  Home,
  Play,
  Monitor,
  Camera,
  Layers,
  ArrowRight
} from 'lucide-react';
import ContactSalesModal from '../components/ContactSalesModal';

export default function DistanceLearningSolution() {
  const [activeTab, setActiveTab] = useState('remote_learning'); // 'remote_learning' | 'multi_classroom'
  const [activeNav, setActiveNav] = useState('what-we-offer');
  const [showSalesModal, setShowSalesModal] = useState(false);
  const [openAccordions, setOpenAccordions] = useState({
    'cost-effective-ifp': true,
    'cost-effective-camera': true,
    'high-end-sharing': true,
    'multi-ifp': true,
    'multi-sharing': true,
    'multi-camera': true,
  });

  const toggleAccordion = (key) => {
    setOpenAccordions(prev => ({ ...prev, [key]: !prev[key] }));
  };

  // Subnav scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['what-we-offer', 'recommended-solution', 'success-stories', 'related-resources', 'related-links'];
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

  const tabs = [
    { id: 'remote_learning', label: 'Remote Learning' },
    { id: 'multi_classroom', label: 'Multi-classroom Learning' },
  ];

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
      
      {/* 1. HERO BANNER */}
      <section
        style={{
          position: 'relative',
          width: '100%',
          height: '750px',
          minHeight: '750px',
          backgroundImage: "url('/images/distance-learning/Distance-learning-banner-pc.jpg')",
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
          {/* Breadcrumb text on hero */}
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
            <span style={{ color: '#ffffff', fontWeight: 600 }}>Distance Learning</span>
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
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c3 3 9 3 12 0v-5" />
              </svg>
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
              Distance Learning
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
            { id: 'recommended-solution', label: 'Recommended distance learning solution' },
            { id: 'success-stories', label: 'Success stories' },
            { id: 'related-resources', label: 'Related Resources' },
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

        <div style={{ maxWidth: '1000px', margin: '0 auto 60px', textAlign: 'center' }}>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.8,
              color: '#4b5563',
              marginBottom: '20px',
            }}
          >
            Coloron’s Distance Learning Solution, with its advanced lightweight systems empowered by AI technologies, takes excellent education beyond the classroom walls out to new horizons. Combining advanced products and technologies, this solution enables students in remote schools and classrooms, at home, or in virtually any location to access classroom instruction via live stream. Even students in different time zones, in remote learning, can watch recordings of classes at a later time.
          </p>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.8,
              color: '#4b5563',
              margin: 0,
            }}
          >
            Coloron’s aim is to empower the transmission of great educational resources so that anyone can access it. Read on to learn more about how this solution can boost your unique learning institution.
          </p>
        </div>

        {/* 2 Interactive Cards under What we offer */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px',
            maxWidth: '860px',
            margin: '0 auto',
          }}
        >
          {/* Card 1: Remote Learning Solution */}
          <div
            onClick={() => {
              setActiveTab('remote_learning');
              scrollToSection('recommended-solution');
            }}
            style={{
              backgroundColor: '#ffffff',
              border: '1px solid #e5e7eb',
              borderRadius: '16px',
              padding: '36px 24px',
              textAlign: 'center',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
              cursor: 'pointer',
              transition: 'all 0.25s ease',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
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
                src="/images/distance-learning/icon_remote_learning.jpg"
                alt="Remote Learning Solution"
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
              Remote Learning Solution
            </h3>
          </div>

          {/* Card 2: Multi-classroom Learning Solution */}
          <div
            onClick={() => {
              setActiveTab('multi_classroom');
              scrollToSection('recommended-solution');
            }}
            style={{
              backgroundColor: '#ffffff',
              border: '1px solid #e5e7eb',
              borderRadius: '16px',
              padding: '36px 24px',
              textAlign: 'center',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
              cursor: 'pointer',
              transition: 'all 0.25s ease',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
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
                src="/images/distance-learning/icon_multi_classroom.jpg"
                alt="Multi-classroom Learning Solution"
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
              Multi-classroom Learning Solution
            </h3>
          </div>
        </div>
      </section>

      {/* 4. SECTION: RECOMMENDED DISTANCE LEARNING SOLUTION */}
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
              marginBottom: '40px',
              letterSpacing: '-0.02em',
            }}
          >
            Recommended distance learning solution
          </h2>

          {/* 2 Tabs Selector */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '16px',
              borderBottom: '2px solid #e5e7eb',
              marginBottom: '48px',
              flexWrap: 'wrap',
            }}
          >
            {tabs.map((tab) => {
              const isSelected = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: '14px 28px',
                    fontSize: '1.05rem',
                    fontWeight: isSelected ? 700 : 500,
                    color: isSelected ? '#d7150e' : '#4b5563',
                    borderBottom: isSelected ? '3px solid #d7150e' : '3px solid transparent',
                    marginBottom: '-2px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* TAB 1 CONTENT: REMOTE LEARNING */}
          {activeTab === 'remote_learning' && (
            <div>
              {/* Feature Highlight Card (Boy on laptop + Text Bullets) */}
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
                    src="/images/distance-learning/SBF-Distance-Learning-Illustration01.jpg"
                    alt="Dynamic student engagement"
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
                    Dynamic student engagement built on a lightweight system
                  </h3>
                  <ul
                    style={{
                      listStyleType: 'disc',
                      paddingLeft: '22px',
                      margin: 0,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '16px',
                    }}
                  >
                    <li style={{ fontSize: '0.98rem', color: '#4b5563', lineHeight: 1.65 }}>
                      Remote learning students will get a more immersive learning experience as the whole system enables easy switching among views of the teacher – such as close-ups and panoramas – with excellent image and sound quality.
                    </li>
                    <li style={{ fontSize: '0.98rem', color: '#4b5563', lineHeight: 1.65 }}>
                      ClassIn software supports real-time remote sharing as well as integration with mainstream video conferencing applications like Zoom, Webex and more. Users will also find support for RTMP video streaming to live broadcast platforms such as YouTube and Facebook.
                    </li>
                    <li style={{ fontSize: '0.98rem', color: '#4b5563', lineHeight: 1.65 }}>
                      Easier installation and management for schools with a one-stop hardware and software solution, including intelligent cameras, high-quality interactive flat panel displays, and dedicated ClassIn software, offering flexible options for various educational institute needs.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Diagram 1: Cost-effective solution */}
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
                      src="/images/distance-learning/Education-LandingPage_distance-Learning-Remote-Learning-01.jpg"
                      alt="Cost-effective solution diagram"
                      style={{
                        width: '100%',
                        height: 'auto',
                        display: 'block',
                        objectFit: 'contain',
                      }}
                    />
                  </div>

                  {/* Right: Products List */}
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
                      Cost-effective solution
                    </h4>

                    {/* Accordion 1: Interactive flat panel */}
                    <div style={{ marginBottom: '16px', border: '1px solid #e5e7eb', borderRadius: '10px', overflow: 'hidden' }}>
                      <button
                        onClick={() => toggleAccordion('cost-effective-ifp')}
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
                        <span>Interactive flat panel</span>
                        {openAccordions['cost-effective-ifp'] ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                      </button>
                      {openAccordions['cost-effective-ifp'] && (
                        <div style={{ padding: '16px 18px', backgroundColor: '#ffffff' }}>
                          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                            <div style={{ width: '80px', height: '60px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                              <img
                                src="/images/distance-learning/prod_ifp_65.png"
                                alt="DS-D5C65RB/A"
                                style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                              />
                            </div>
                            <div>
                              <div style={{ fontSize: '1rem', fontWeight: 700, color: '#1d1d1f' }}>
                                DS-D5C65RB/A
                              </div>
                              <div style={{ fontSize: '0.88rem', color: '#6b7280', marginTop: '2px' }}>
                                65-inch 4K Interactive Display
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Accordion 2: Teacher camera */}
                    <div style={{ border: '1px solid #e5e7eb', borderRadius: '10px', overflow: 'hidden' }}>
                      <button
                        onClick={() => toggleAccordion('cost-effective-camera')}
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
                        <span>Teacher camera</span>
                        {openAccordions['cost-effective-camera'] ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                      </button>
                      {openAccordions['cost-effective-camera'] && (
                        <div style={{ padding: '16px 18px', backgroundColor: '#ffffff' }}>
                          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                            <div style={{ width: '80px', height: '60px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                              <img
                                src="/images/distance-learning/prod_dome_camera.png"
                                alt="iDS-2CD7186G0-IZ(H)S(Y)"
                                style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                              />
                            </div>
                            <div>
                              <div style={{ fontSize: '1rem', fontWeight: 700, color: '#1d1d1f' }}>
                                iDS-2CD7186G0-IZ(H)S(Y)
                              </div>
                              <div style={{ fontSize: '0.88rem', color: '#6b7280', marginTop: '2px' }}>
                                8MP DeepinView Moto Varifocal Dome Camera
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Diagram 2: High-end solution */}
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
                      src="/images/distance-learning/Education-LandingPage_distance-Learning-Remote-Learning-02.jpg"
                      alt="High-end solution diagram"
                      style={{
                        width: '100%',
                        height: 'auto',
                        display: 'block',
                        objectFit: 'contain',
                      }}
                    />
                  </div>

                  {/* Right: Products List */}
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
                      High-end solution
                    </h4>

                    {/* Accordion: Education sharing device */}
                    <div style={{ border: '1px solid #e5e7eb', borderRadius: '10px', overflow: 'hidden' }}>
                      <button
                        onClick={() => toggleAccordion('high-end-sharing')}
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
                        <span>Education sharing device</span>
                        {openAccordions['high-end-sharing'] ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                      </button>
                      {openAccordions['high-end-sharing'] && (
                        <div style={{ padding: '16px 18px', backgroundColor: '#ffffff' }}>
                          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                            <div style={{ width: '80px', height: '60px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f3f4f6', borderRadius: '8px' }}>
                              <Layers size={28} color="#4b5563" />
                            </div>
                            <div>
                              <div style={{ fontSize: '1rem', fontWeight: 700, color: '#1d1d1f' }}>
                                DS-VE22D-C/HW
                              </div>
                              <div style={{ fontSize: '0.88rem', color: '#6b7280', marginTop: '2px' }}>
                                Interactive Lecture Sharing Terminal & Multi-Camera Matrix Hub
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
          )}

          {/* TAB 2 CONTENT: MULTI-CLASSROOM LEARNING */}
          {activeTab === 'multi_classroom' && (
            <div>
              {/* Feature Highlight Card (Multi-classroom Illustration + Bullets) */}
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
                    src="/images/distance-learning/SBF-Distance-Learning-Illustration02.jpg"
                    alt="Synchronized teaching and learning"
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
                    Synchronized teaching and learning among multiple classrooms
                  </h3>
                  <ul
                    style={{
                      listStyleType: 'disc',
                      paddingLeft: '22px',
                      margin: 0,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '16px',
                    }}
                  >
                    <li style={{ fontSize: '0.98rem', color: '#4b5563', lineHeight: 1.65 }}>
                      The main classroom can interact with up to three secondary classrooms at the same time using Coloron’s ClassLink software. The real-time situation in each classroom can be shared with each other class, providing a very immersive experience for remote learners.
                    </li>
                    <li style={{ fontSize: '0.98rem', color: '#4b5563', lineHeight: 1.65 }}>
                      Interactivity among multiple classrooms gets enhanced as flexible teaching views, sound, and annotations on the Interactive Flat Panel in the main classroom can be synchronized to a secondary classroom in real time, and teachers and students in the various rooms can also write on the same virtual whiteboard.
                    </li>
                    <li style={{ fontSize: '0.98rem', color: '#4b5563', lineHeight: 1.65 }}>
                      High-quality instruction and other resources are shared among classes, allowing students in remote cities or classrooms to access the best educational opportunities available.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Diagram: Multi-classroom Learning */}
              <div
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '16px',
                  border: '1px solid #e5e7eb',
                  boxShadow: '0 6px 24px rgba(0, 0, 0, 0.04)',
                  padding: '36px',
                  marginBottom: '24px',
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
                      src="/images/distance-learning/Education-LandingPage_distance-Learning-Multi-classroom-Learning.jpg"
                      alt="Multi-classroom learning diagram"
                      style={{
                        width: '100%',
                        height: 'auto',
                        display: 'block',
                        objectFit: 'contain',
                      }}
                    />
                  </div>

                  {/* Right: Products List */}
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
                      Multi-classroom learning
                    </h4>

                    {/* Accordion 1: Interactive flat panel */}
                    <div style={{ marginBottom: '16px', border: '1px solid #e5e7eb', borderRadius: '10px', overflow: 'hidden' }}>
                      <button
                        onClick={() => toggleAccordion('multi-ifp')}
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
                        <span>Interactive flat panel</span>
                        {openAccordions['multi-ifp'] ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                      </button>
                      {openAccordions['multi-ifp'] && (
                        <div style={{ padding: '16px 18px', backgroundColor: '#ffffff' }}>
                          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                            <div style={{ width: '80px', height: '60px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                              <img
                                src="/images/distance-learning/prod_ifp_65.png"
                                alt="DS-D5C65RB/A"
                                style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                              />
                            </div>
                            <div>
                              <div style={{ fontSize: '1rem', fontWeight: 700, color: '#1d1d1f' }}>
                                DS-D5C65RB/A
                              </div>
                              <div style={{ fontSize: '0.88rem', color: '#6b7280', marginTop: '2px' }}>
                                65-inch 4K Interactive Display
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Accordion 2: Education sharing device */}
                    <div style={{ marginBottom: '16px', border: '1px solid #e5e7eb', borderRadius: '10px', overflow: 'hidden' }}>
                      <button
                        onClick={() => toggleAccordion('multi-sharing')}
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
                        <span>Education sharing device</span>
                        {openAccordions['multi-sharing'] ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                      </button>
                      {openAccordions['multi-sharing'] && (
                        <div style={{ padding: '16px 18px', backgroundColor: '#ffffff' }}>
                          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                            <div style={{ width: '80px', height: '60px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f3f4f6', borderRadius: '8px' }}>
                              <Layers size={28} color="#4b5563" />
                            </div>
                            <div>
                              <div style={{ fontSize: '1rem', fontWeight: 700, color: '#1d1d1f' }}>
                                DS-VE22D-C/HW
                              </div>
                              <div style={{ fontSize: '0.88rem', color: '#6b7280', marginTop: '2px' }}>
                                Multi-Classroom Interactive Sharing Device & Terminal
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Accordion 3: Teacher camera */}
                    <div style={{ border: '1px solid #e5e7eb', borderRadius: '10px', overflow: 'hidden' }}>
                      <button
                        onClick={() => toggleAccordion('multi-camera')}
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
                        <span>Teacher camera</span>
                        {openAccordions['multi-camera'] ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                      </button>
                      {openAccordions['multi-camera'] && (
                        <div style={{ padding: '16px 18px', backgroundColor: '#ffffff' }}>
                          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                            <div style={{ width: '80px', height: '60px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                              <img
                                src="/images/distance-learning/prod_dome_camera.png"
                                alt="iDS-2CD7186G0-IZ(H)S(Y)"
                                style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                              />
                            </div>
                            <div>
                              <div style={{ fontSize: '1rem', fontWeight: 700, color: '#1d1d1f' }}>
                                iDS-2CD7186G0-IZ(H)S(Y)
                              </div>
                              <div style={{ fontSize: '0.88rem', color: '#6b7280', marginTop: '2px' }}>
                                8MP DeepinView Moto Varifocal Dome Camera
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Note below Multi-classroom section */}
              <div style={{ padding: '0 8px' }}>
                <p style={{ fontSize: '0.88rem', color: '#6b7280', fontStyle: 'italic', margin: 0 }}>
                  *Note: the teacher’s consent should be obtained before using the teacher camera.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 5. SECTION: SUCCESS STORIES */}
      <section
        id="success-stories"
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
          Success stories
        </h2>

        {/* Featured Card (Saudi university) */}
        <div
          style={{
            maxWidth: '1100px',
            margin: '0 auto',
            backgroundColor: '#ffffff',
            borderRadius: '18px',
            border: '1px solid #e5e7eb',
            overflow: 'hidden',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.06)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
          }}
        >
          {/* Left: Aerial image with play badge */}
          <div
            style={{
              position: 'relative',
              minHeight: '320px',
              backgroundColor: '#000000',
              overflow: 'hidden',
            }}
          >
            <img
              src="/images/distance-learning/success_story_qassim.jpg"
              alt="Saudi university journey to smart education"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />
            {/* Play Button Overlay */}
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                backgroundColor: 'rgba(0, 0, 0, 0.65)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                backdropFilter: 'blur(4px)',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(215, 21, 14, 0.9)';
                e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.65)';
                e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1)';
              }}
            >
              <Play size={24} color="#ffffff" style={{ marginLeft: '4px' }} />
            </div>
          </div>

          {/* Right: Info */}
          <div style={{ padding: '36px 32px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h3
              style={{
                fontSize: '1.35rem',
                fontWeight: 700,
                color: '#1d1d1f',
                lineHeight: 1.35,
                marginBottom: '14px',
              }}
            >
              Crafting a digital oasis: a Saudi university's journey to smart education
            </h3>
            
            <div style={{ fontSize: '0.88rem', color: '#9ca3af', marginBottom: '18px', fontWeight: 500 }}>
              February 20, 2025
            </div>

            <div style={{ marginBottom: '24px' }}>
              <div style={{ fontSize: '0.86rem', color: '#6b7280', fontWeight: 600, marginBottom: '8px' }}>
                Topic:
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {[
                  'Speed measurement',
                  'AR live interaction',
                  'Entrance & exit management',
                  'Information display',
                  'Intelligent traffic',
                  'Interactive flat panel displays',
                  'Parking management',
                ].map((topic, idx) => (
                  <span
                    key={idx}
                    style={{
                      fontSize: '0.82rem',
                      color: '#4b5563',
                      backgroundColor: '#f3f4f6',
                      padding: '4px 10px',
                      borderRadius: '4px',
                      fontWeight: 500,
                    }}
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>

            <button
              onClick={() => setShowSalesModal(true)}
              style={{
                alignSelf: 'flex-start',
                backgroundColor: 'transparent',
                color: '#d7150e',
                border: 'none',
                fontWeight: 600,
                fontSize: '0.94rem',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                cursor: 'pointer',
                padding: 0,
              }}
            >
              Read Case Study <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* 6. SECTION: RELATED RESOURCES */}
      <section
        id="related-resources"
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
              marginBottom: '48px',
              letterSpacing: '-0.02em',
            }}
          >
            Related Resources
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px',
              maxWidth: '1100px',
              margin: '0 auto',
            }}
          >
            {[
              {
                title: 'Coloron Remote Learning Solution',
                type: 'Infographic',
                desc: 'Quick overview of lightweight architecture and interactive lecture streaming.',
              },
              {
                title: 'Coloron Remote Learning Solution',
                type: 'Brochure',
                desc: 'Comprehensive hardware configurations, camera tracking models, and display specs.',
              },
              {
                title: 'Multi-classroom Learning',
                type: 'Infographic',
                desc: 'Multi-campus synchronized classroom wiring, audio pickup, and interactive whiteboards.',
              },
            ].map((res, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e5e7eb',
                  borderRadius: '12px',
                  padding: '24px',
                  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.03)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
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
                    width: '44px',
                    height: '44px',
                    borderRadius: '8px',
                    backgroundColor: '#fee2e2',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <FileText size={22} color="#dc2626" />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: '0.78rem', color: '#9ca3af', fontWeight: 600, textTransform: 'uppercase' }}>
                    {res.type}
                  </div>
                  <h4
                    style={{
                      fontSize: '0.94rem',
                      fontWeight: 600,
                      color: '#1d1d1f',
                      margin: '2px 0 0',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    {res.title}
                  </h4>
                </div>
                <Download size={18} color="#9ca3af" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. SECTION: YOU MAY ALSO BE INTERESTED IN */}
      <section
        id="related-links"
        style={{
          maxWidth: '1440px',
          margin: '0 auto',
          padding: '80px 32px 64px',
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
              link: '/solutions',
            },
            {
              title: 'Remote Classroom Inspection',
              image: '/images/distance-learning/interest_remote_inspection.jpg',
              link: '/solutions',
            },
            {
              title: 'Classroom Hub',
              image: '/images/distance-learning/interest_classroom_hub.jpg',
              link: '/solutions/classroom-hub',
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
      </section>

      {/* 8. SECTION: WANT TO LEARN MORE? */}
      <section
        style={{
          backgroundColor: '#ffffff',
          padding: '40px 32px 64px',
          textAlign: 'center',
        }}
      >
        <h2
          style={{
            fontSize: '1.75rem',
            fontWeight: 700,
            color: '#1d1d1f',
            marginBottom: '24px',
          }}
        >
          Want to learn more?
        </h2>
        <Link
          to="/solutions"
          style={{
            display: 'inline-block',
            backgroundColor: '#d7150e',
            color: '#ffffff',
            padding: '12px 36px',
            borderRadius: '9999px',
            fontSize: '0.98rem',
            fontWeight: 600,
            textDecoration: 'none',
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
          View More
        </Link>
      </section>

      {/* 9. SECTION: READY TO DISCUSS YOUR NEEDS? */}
      <section
        style={{
          backgroundColor: '#f9fafb',
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
        defaultSolution="Distance Learning Solution"
      />
    </div>
  );
}
