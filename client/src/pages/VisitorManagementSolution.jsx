import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Users,
  Shield,
  QrCode,
  CreditCard,
  Building,
  CheckCircle2,
  Clock,
  ArrowRight,
  ChevronRight,
  Download,
  FileText,
  Play,
  Monitor,
  Video,
  Eye,
  Sliders,
  Sparkles,
  Layers,
  Printer,
  Calendar,
  KeyRound,
  Home
} from 'lucide-react';
import ContactSalesModal from '../components/ContactSalesModal';

export default function VisitorManagementSolution() {
  const [activeTab, setActiveTab] = useState('receptionist'); // 'receptionist' | 'self_service'
  const [activeArchitectureItem, setActiveArchitectureItem] = useState('terminal'); // 'terminal' | 'printer' | 'turnstile'
  const [showSalesModal, setShowSalesModal] = useState(false);
  const [activeNav, setActiveNav] = useState('what-we-offer');

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
      const yOffset = -70;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', color: '#1d1d1f', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}>
      
      {/* 1. HERO BANNER - FULL WIDTH (HEIGHT 750px) WITH CORPORATE RECEPTION & BLUE ORGANIC ARC */}
      <section
        style={{
          position: 'relative',
          width: '100%',
          height: '750px',
          minHeight: '750px',
          display: 'flex',
          alignItems: 'center',
          backgroundImage: `url('/images/visitor-management/hero_banner.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          overflow: 'hidden',
        }}
      >
        {/* Deep blue organic curve overlay matching Hikvision visual identity */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            width: '100%',
            maxWidth: '820px',
            background: 'linear-gradient(105deg, rgba(14, 50, 118, 0.95) 0%, rgba(18, 64, 142, 0.91) 42%, rgba(25, 82, 172, 0.78) 65%, rgba(35, 110, 210, 0.35) 86%, transparent 100%)',
            zIndex: 1,
          }}
        />

        {/* Content Container */}
        <div
          style={{
            position: 'relative',
            zIndex: 3,
            maxWidth: '1380px',
            width: '100%',
            margin: '0 auto',
            padding: '70px 24px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          {/* Breadcrumb / Scenario Pill */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              color: 'rgba(255, 255, 255, 0.95)',
              fontSize: '0.92rem',
              fontWeight: 600,
              marginBottom: '16px',
            }}
          >
            <Users size={18} color="#60a5fa" />
            <span>Solutions by Function</span>
          </div>

          {/* Hero Title */}
          <h1
            style={{
              fontSize: 'clamp(2.6rem, 5vw, 4rem)',
              fontWeight: 800,
              color: '#ffffff',
              letterSpacing: '-0.02em',
              margin: '0 0 18px 0',
              lineHeight: 1.15,
              textShadow: '0 2px 10px rgba(0,0,0,0.3)',
            }}
          >
            Visitor Management
          </h1>

          {/* Subtitle / Value Proposition */}
          <p
            style={{
              fontSize: 'clamp(1rem, 1.3vw, 1.2rem)',
              lineHeight: 1.6,
              color: 'rgba(255, 255, 255, 0.92)',
              maxWidth: '560px',
              margin: '0 0 32px 0',
              fontWeight: 400,
            }}
          >
            Streamlined guest registration, contactless identity verification, and synchronized building access control to safeguard enterprise facilities and elevate the visitor experience.
          </p>

          {/* Hero CTA Button */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <button
              onClick={() => setShowSalesModal(true)}
              style={{
                backgroundColor: '#d70015',
                color: '#ffffff',
                border: 'none',
                padding: '13px 28px',
                borderRadius: '4px',
                fontSize: '0.95rem',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'background-color 0.2s, transform 0.15s',
                boxShadow: '0 4px 14px rgba(215, 0, 21, 0.35)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#b50012';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#d70015';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <span>Contact an Expert</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* 3. STICKY SUB-NAVIGATION BAR */}
      <nav
        style={{
          position: 'sticky',
          top: '64px',
          zIndex: 90,
          backgroundColor: '#ffffff',
          borderBottom: '1px solid #e5e5e5',
          boxShadow: '0 1px 4px rgba(0,0,0,0.03)',
        }}
      >
        <div
          style={{
            maxWidth: '1440px',
            margin: '0 auto',
            padding: '0 32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '52px',
          }}
        >
          {/* Left Title & Center Nav Tabs */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '36px', overflowX: 'auto', whiteSpace: 'nowrap' }}>
            <span style={{ fontSize: '0.95rem', fontWeight: 700, color: '#1d1d1f' }}>
              Visitor Management Solution - Hikvision
            </span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
              {[
                { id: 'what-we-offer', label: 'What we offer' },
                { id: 'recommended-solution', label: 'Recommended solution' },
                { id: 'success-stories', label: 'Success stories' },
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
                      padding: '16px 0',
                      fontSize: '0.86rem',
                      fontWeight: isActive ? 600 : 400,
                      color: isActive ? '#d70015' : '#333333',
                      cursor: 'pointer',
                      position: 'relative',
                      borderBottom: isActive ? '2px solid #d70015' : '2px solid transparent',
                      transition: 'color 0.2s, border-color 0.2s',
                    }}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Breadcrumb */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.8rem',
              color: '#666666',
              whiteSpace: 'nowrap',
            }}
          >
            <Link to="/" style={{ color: '#666666', display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
              <Home size={14} />
            </Link>
            <span style={{ color: '#999999' }}>&gt;</span>
            <Link to="/solutions" style={{ color: '#666666', textDecoration: 'none' }}>
              Solutions
            </Link>
            <span style={{ color: '#999999' }}>&gt;</span>
            <span style={{ color: '#666666' }}>Solutions by Function</span>
            <span style={{ color: '#999999' }}>&gt;</span>
          </div>
        </div>
      </nav>

      {/* 4. WHAT WE OFFER SECTION */}
      <section id="what-we-offer" style={{ padding: '80px 24px 70px 24px', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.3rem', fontWeight: 700, margin: '0 0 20px 0', color: '#111827', letterSpacing: '-0.02em' }}>
            What we offer
          </h2>
          <p
            style={{
              fontSize: '0.98rem',
              color: '#555555',
              lineHeight: 1.65,
              maxWidth: '860px',
              margin: '0 auto 60px auto',
            }}
          >
            Hikvision's Visitor Management Solution provides a vastly improved experience for users and guests while protecting personnel and property. This application integrates to build a comfortable and safe working place in a multitude of settings. Read on to learn how this Hikvision technology can work for you.
          </p>

          {/* 2 Column Clean Borderless Icons Centered */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'flex-start',
              gap: '140px',
              flexWrap: 'wrap',
              margin: '0 auto',
            }}
          >
            {/* Item 1 */}
            <div
              onClick={() => {
                setActiveTab('receptionist');
                scrollToSection('recommended-solution');
              }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                cursor: 'pointer',
                textAlign: 'center',
                maxWidth: '220px',
              }}
            >
              <div
                style={{
                  width: '76px',
                  height: '76px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px',
                  transition: 'transform 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.06)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              >
                <img
                  src="/images/visitor-management/offer_icon01.jpg"
                  alt="Visitor management with receptionist service"
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              </div>
              <span
                style={{
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  color: '#222222',
                  lineHeight: 1.45,
                  display: 'block',
                }}
              >
                Visitor management with receptionist service
              </span>
            </div>

            {/* Item 2 */}
            <div
              onClick={() => {
                setActiveTab('self_service');
                scrollToSection('recommended-solution');
              }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                cursor: 'pointer',
                textAlign: 'center',
                maxWidth: '220px',
              }}
            >
              <div
                style={{
                  width: '76px',
                  height: '76px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px',
                  transition: 'transform 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.06)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              >
                <img
                  src="/images/visitor-management/offer_icon02.jpg"
                  alt="Visitor management with self service"
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              </div>
              <span
                style={{
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  color: '#222222',
                  lineHeight: 1.45,
                  display: 'block',
                }}
              >
                Visitor management with self service
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. RECOMMENDED SOLUTION SECTION WITH TABS, 3D SCENARIO & TOPOLOGY */}
      <section id="recommended-solution" style={{ padding: '80px 24px', backgroundColor: '#f9fafb' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '2.1rem', fontWeight: 700, margin: '0 0 12px 0', color: '#111827' }}>
              Recommended solution
            </h2>
            <p style={{ fontSize: '1rem', color: '#6b7280', maxWidth: '680px', margin: '0 auto' }}>
              Optimized visitor flows for receptionist-assisted corporate headquarters and unstaffed self-service commercial towers.
            </p>
          </div>

          {/* Solution Tabs */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              borderBottom: '1px solid #e5e7eb',
              marginBottom: '40px',
              gap: '32px',
            }}
          >
            {[
              { id: 'receptionist', label: 'Receptionist service' },
              { id: 'self_service', label: 'Self-service' },
            ].map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: '14px 16px',
                    fontSize: '1rem',
                    fontWeight: isActive ? 700 : 500,
                    color: isActive ? '#d70015' : '#4b5563',
                    cursor: 'pointer',
                    position: 'relative',
                    borderBottom: isActive ? '3px solid #d70015' : '3px solid transparent',
                    transition: 'all 0.2s',
                  }}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* TAB 1: RECEPTIONIST SERVICE */}
          {activeTab === 'receptionist' && (
            <div>
              {/* Needs & Features */}
              <div
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '8px',
                  padding: '32px',
                  marginBottom: '40px',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                  gap: '32px',
                  border: '1px solid #e5e7eb',
                }}
              >
                <div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#111827', margin: '0 0 14px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Users size={18} color="#d70015" />
                    <span>Customer Needs</span>
                  </h4>
                  <ul style={{ margin: 0, paddingLeft: '20px', color: '#4b5563', fontSize: '0.9rem', lineHeight: 1.7 }}>
                    <li>Eliminate front-desk bottlenecks during large corporate delegations and morning peak hours.</li>
                    <li>Ensure visitors only access their host's designated floor and prevent unauthorized roaming.</li>
                    <li>Verify visitor identity using valid government-issued IDs or passports without manual typing errors.</li>
                    <li>Maintain complete digital audit logs for regulatory and enterprise security compliance.</li>
                  </ul>
                </div>

                <div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#111827', margin: '0 0 14px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <CheckCircle2 size={18} color="#059669" />
                    <span>Solution Highlights</span>
                  </h4>
                  <ul style={{ margin: 0, paddingLeft: '20px', color: '#4b5563', fontSize: '0.9rem', lineHeight: 1.7 }}>
                    <li>Dual-screen reception terminal with integrated OCR passport, ID, and business card scanner.</li>
                    <li>Instant thermal visitor badge printing with personalized dynamic QR codes and host contact.</li>
                    <li>Direct linkage with lobby speed gates, elevator dispatch controllers, and door intercoms.</li>
                    <li>Automatic overstay notifications alert security if a guest remains past authorized meeting times.</li>
                  </ul>
                </div>
              </div>

              {/* 3D Isometric Scenario Card */}
              <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                <div
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    border: '1px solid #e5e7eb',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.05)',
                    display: 'inline-block',
                    maxWidth: '820px',
                    width: '100%',
                  }}
                >
                  <img
                    src="/images/visitor-management/scenario_enterprise_building.jpg"
                    alt="Enterprise Building Visitor Management 3D Model"
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                  />
                  <div style={{ padding: '20px', backgroundColor: '#ffffff', textAlign: 'center' }}>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#111827', margin: '0 0 6px 0' }}>
                      Enterprise building
                    </h3>
                    <p style={{ fontSize: '0.88rem', color: '#6b7280', margin: 0 }}>
                      Complete visitor lifecycle from underground parking barrier ANPR to lobby reception desk, speed gate turnstiles, elevator floor dispatch, and office meeting rooms.
                    </p>
                  </div>
                </div>
              </div>

              {/* Topology Architecture Diagram with Component Selector */}
              <div
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '10px',
                  padding: '36px 32px',
                  display: 'grid',
                  gridTemplateColumns: 'minmax(0, 1.4fr) minmax(300px, 0.8fr)',
                  gap: '36px',
                  alignItems: 'center',
                }}
              >
                {/* Left: Diagram Image */}
                <div style={{ textAlign: 'center' }}>
                  <div style={{ marginBottom: '14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#0f172a' }}>
                      System Architecture: Receptionist-Assisted Flow
                    </span>
                    <span style={{ fontSize: '0.78rem', color: '#64748b' }}>
                      HikCentral Professional
                    </span>
                  </div>
                  <div
                    style={{
                      borderRadius: '8px',
                      overflow: 'hidden',
                      backgroundColor: '#ffffff',
                      boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
                      border: '1px solid #e2e8f0',
                    }}
                  >
                    <img
                      src="/images/visitor-management/topology_receptionist_service.jpg"
                      alt="Visitor Management Topology"
                      style={{ width: '100%', height: 'auto', display: 'block' }}
                    />
                  </div>
                </div>

                {/* Right: Architecture Product List */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0f172a', margin: '0 0 6px 0' }}>
                    Core Architecture Components
                  </h4>

                  {[
                    {
                      id: 'terminal',
                      title: 'Visitor Terminal',
                      model: 'DS-K5032 Series',
                      desc: 'Dual-display desktop visitor terminal with OCR document scanner, camera for visitor photo capture, and digital signature pad.',
                    },
                    {
                      id: 'printer',
                      title: 'Visitor Badge Printer',
                      model: 'Thermal QR Series',
                      desc: 'High-speed thermal badge printer issuing encrypted dynamic QR passes with visitor name, host name, photo, and time validity.',
                    },
                    {
                      id: 'turnstile',
                      title: 'Access Control & Speed Gate',
                      model: 'DS-K3B601 + MinMoe',
                      desc: 'Integrated swing barriers with embedded QR scanners and face terminals for frictionless visitor verification at lobby turnstiles.',
                    },
                  ].map((comp) => {
                    const isSelected = activeArchitectureItem === comp.id;
                    return (
                      <div
                        key={comp.id}
                        onClick={() => setActiveArchitectureItem(comp.id)}
                        style={{
                          backgroundColor: isSelected ? '#ffffff' : '#f8fafc',
                          border: isSelected ? '1.5px solid #d70015' : '1px solid #e2e8f0',
                          borderRadius: '8px',
                          padding: '16px 18px',
                          cursor: 'pointer',
                          transition: 'all 0.15s ease',
                          boxShadow: isSelected ? '0 4px 14px rgba(215, 0, 21, 0.08)' : 'none',
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                          <span style={{ fontSize: '0.92rem', fontWeight: 700, color: isSelected ? '#d70015' : '#0f172a' }}>
                            {comp.title}
                          </span>
                          <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#64748b', backgroundColor: '#f1f5f9', padding: '2px 8px', borderRadius: '4px' }}>
                            {comp.model}
                          </span>
                        </div>
                        <p style={{ fontSize: '0.84rem', color: '#64748b', margin: 0, lineHeight: 1.5 }}>
                          {comp.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: SELF-SERVICE */}
          {activeTab === 'self_service' && (
            <div>
              <div
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '8px',
                  padding: '32px',
                  marginBottom: '40px',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                  gap: '32px',
                  border: '1px solid #e5e7eb',
                }}
              >
                <div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#111827', margin: '0 0 14px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Building size={18} color="#d70015" />
                    <span>Unstaffed Lobby Efficiency</span>
                  </h4>
                  <ul style={{ margin: 0, paddingLeft: '20px', color: '#4b5563', fontSize: '0.9rem', lineHeight: 1.7 }}>
                    <li>24/7 self-check-in kiosks reduce dedicated front-desk staffing overhead.</li>
                    <li>Visitors scan their invitation QR code or passport to check in autonomously.</li>
                    <li>Instant SMS/app push notifications alert the host that their visitor has arrived.</li>
                    <li>Automated badge return deposit boxes at speed gate exit lanes.</li>
                  </ul>
                </div>

                <div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#111827', margin: '0 0 14px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <KeyRound size={18} color="#059669" />
                    <span>Self-Service Highlights</span>
                  </h4>
                  <ul style={{ margin: 0, paddingLeft: '20px', color: '#4b5563', fontSize: '0.9rem', lineHeight: 1.7 }}>
                    <li>Floor-standing touch kiosk with voice guidance and multi-language support.</li>
                    <li>Video intercom integration lets visitors call the host office directly from the kiosk.</li>
                    <li>Contactless smartphone Bluetooth credentials issued directly to the guest’s phone.</li>
                    <li>Elevator dispatch linkage summons the specific elevator cab for the visitor’s floor.</li>
                  </ul>
                </div>
              </div>

              {/* Self Service Scenarios & Topology */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
                  gap: '32px',
                  alignItems: 'center',
                }}
              >
                <div style={{ borderRadius: '8px', overflow: 'hidden', border: '1px solid #e5e7eb', boxShadow: '0 4px 16px rgba(0,0,0,0.05)' }}>
                  <img
                    src="/images/visitor-management/scenario_self_service.jpg"
                    alt="Self Service Commercial Building Lobby"
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                  />
                  <div style={{ padding: '20px', backgroundColor: '#ffffff' }}>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#111827', margin: '0 0 6px 0' }}>
                      Commercial multi-tenant towers
                    </h3>
                    <p style={{ fontSize: '0.88rem', color: '#6b7280', margin: 0, lineHeight: 1.55 }}>
                      Self-service visitor kiosks empower corporate guests to register independently, streamlining reception lobby flow during high-volume business hours.
                    </p>
                  </div>
                </div>

                <div style={{ borderRadius: '8px', overflow: 'hidden', border: '1px solid #e5e7eb', boxShadow: '0 4px 16px rgba(0,0,0,0.05)' }}>
                  <img
                    src="/images/visitor-management/topology_self_service.jpg"
                    alt="Self Service Visitor Topology"
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                  />
                  <div style={{ padding: '20px', backgroundColor: '#ffffff' }}>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#111827', margin: '0 0 6px 0' }}>
                      Self-service network topology
                    </h3>
                    <p style={{ fontSize: '0.88rem', color: '#6b7280', margin: 0, lineHeight: 1.55 }}>
                      Standalone floor kiosks linked with cloud access servers, mobile app invite engines, and elevator floor controllers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* 6. SUCCESS STORIES SECTION */}
      <section id="success-stories" style={{ padding: '80px 24px', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontSize: '2.1rem', fontWeight: 700, margin: '0 0 12px 0', color: '#111827' }}>
              Success stories
            </h2>
            <p style={{ fontSize: '1rem', color: '#6b7280' }}>
              Real-world deployment of Hikvision visitor management and access control solutions across premier global institutions.
            </p>
          </div>

          {/* Large Success Story Showcase Card */}
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '10px',
              overflow: 'hidden',
              border: '1px solid #e5e7eb',
              boxShadow: '0 6px 20px rgba(0,0,0,0.05)',
              display: 'grid',
              gridTemplateColumns: 'minmax(320px, 1.1fr) minmax(320px, 1fr)',
              gap: 0,
            }}
          >
            {/* Story Image with Play Icon Overlay */}
            <div style={{ position: 'relative', minHeight: '340px', overflow: 'hidden' }}>
              <img
                src="/images/visitor-management/success_story_colombia_mall.jpg"
                alt="Mallplaza NQS Colombia Visitor Management"
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
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(0,0,0,0.65)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  backdropFilter: 'blur(4px)',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
                  cursor: 'pointer',
                }}
                onClick={() => setShowSalesModal(true)}
              >
                <Play size={24} style={{ marginLeft: '3px' }} fill="#ffffff" />
              </div>
            </div>

            {/* Story Content */}
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
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  color: '#6b7280',
                  marginBottom: '12px',
                }}
              >
                <Calendar size={14} color="#d70015" />
                <span>July 2, 2026</span>
                <span>•</span>
                <span style={{ color: '#d70015' }}>Retail & Visitor Destination</span>
              </div>

              <h3
                style={{
                  fontSize: 'clamp(1.25rem, 2vw, 1.6rem)',
                  fontWeight: 800,
                  color: '#111827',
                  margin: '0 0 16px 0',
                  lineHeight: 1.3,
                }}
              >
                How AIoT powers a more intelligent retail and visitor destination at Colombia's largest mall
              </h3>

              <p
                style={{
                  fontSize: '0.92rem',
                  color: '#4b5563',
                  lineHeight: 1.65,
                  margin: '0 0 24px 0',
                }}
              >
                Mallplaza NQS in Bogotá, Colombia deployed Hikvision's integrated visitor flow management, automated vehicle entrance control, and unified video security across 100,000 m². The solution streamlined parking access, expedited vendor deliveries, and empowered mall management with live occupancy data for over 45,000 daily visitors.
              </p>

              <div>
                <button
                  onClick={() => setShowSalesModal(true)}
                  style={{
                    backgroundColor: 'transparent',
                    border: 'none',
                    color: '#d70015',
                    fontSize: '0.95rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: 0,
                  }}
                >
                  <span>Read case study</span>
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. DOWNLOAD SECTION */}
      <section id="download" style={{ padding: '70px 24px', backgroundColor: '#f9fafb' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.1rem', fontWeight: 700, margin: '0 0 12px 0', color: '#111827' }}>
            Download
          </h2>
          <p style={{ fontSize: '1rem', color: '#6b7280', marginBottom: '40px' }}>
            Get comprehensive technical brochures, solution blueprints, and product datasheets.
          </p>

          <div style={{ maxWidth: '640px', margin: '0 auto' }}>
            <div
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                padding: '24px 28px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                boxShadow: '0 2px 10px rgba(0,0,0,0.03)',
                transition: 'border-color 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#d70015';
                e.currentTarget.style.boxShadow = '0 6px 18px rgba(0,0,0,0.07)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#e5e7eb';
                e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.03)';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', textAlign: 'left' }}>
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
                  <FileText size={24} color="#d70015" />
                </div>
                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#111827', margin: '0 0 4px 0' }}>
                    Visitor Management Solution Brochure
                  </h4>
                  <span style={{ fontSize: '0.82rem', color: '#6b7280' }}>
                    PDF | 9.8 MB | Full System Architecture & Specifications
                  </span>
                </div>
              </div>

              <a
                href="#download"
                onClick={(e) => {
                  e.preventDefault();
                  setShowSalesModal(true);
                }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  backgroundColor: '#f3f4f6',
                  color: '#111827',
                  padding: '9px 16px',
                  borderRadius: '4px',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  textDecoration: 'none',
                  transition: 'background-color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#e5e7eb')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#f3f4f6')}
              >
                <Download size={15} />
                <span>Download</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 8. YOU MAY ALSO BE INTERESTED IN */}
      <section id="related-links" style={{ padding: '80px 24px', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.1rem', fontWeight: 700, margin: '0 0 36px 0', textAlign: 'center', color: '#111827' }}>
            You may also be interested in
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '28px',
            }}
          >
            {[
              {
                title: 'Access Control',
                desc: 'Frictionless speed gate and turnstile access with multi-credential authentication.',
                image: '/images/visitor-management/rel_access_control.jpg',
                link: '/solutions/access-control',
              },
              {
                title: 'Apartments & Villas',
                desc: 'Smart residential video intercom, resident facial recognition, and guest temporary QR passes.',
                image: '/images/visitor-management/rel_apartment.jpg',
                link: '/solutions/apartments',
              },
              {
                title: 'Education',
                desc: 'Campus visitor pre-screening, parent pick-up verification, and dormitory access safety.',
                image: '/images/visitor-management/rel_education.jpg',
                link: '/solutions/schools',
              },
            ].map((card, i) => (
              <Link
                key={i}
                to={card.link}
                style={{
                  position: 'relative',
                  height: '320px',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  textDecoration: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '28px 24px',
                  boxShadow: '0 6px 18px rgba(0,0,0,0.1)',
                  transition: 'transform 0.25s, box-shadow 0.25s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 12px 28px rgba(0,0,0,0.18)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 6px 18px rgba(0,0,0,0.1)';
                }}
              >
                {/* Background Image */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: `url(${card.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    zIndex: 0,
                  }}
                />

                {/* Dark Vignette Gradient */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.45) 55%, rgba(0,0,0,0.15) 100%)',
                    zIndex: 1,
                  }}
                />

                {/* Content */}
                <div style={{ position: 'relative', zIndex: 2 }}>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#ffffff', margin: '0 0 8px 0' }}>
                    {card.title}
                  </h3>
                  <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.85)', margin: '0 0 16px 0', lineHeight: 1.5 }}>
                    {card.desc}
                  </p>
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      color: '#60a5fa',
                      fontSize: '0.86rem',
                      fontWeight: 600,
                    }}
                  >
                    <span>Learn more</span>
                    <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 9. BOTTOM BANNER - READY TO DISCUSS YOUR NEEDS */}
      <section
        style={{
          padding: '80px 24px',
          backgroundColor: '#f9fafb',
          borderTop: '1px solid #eef0f3',
        }}
      >
        <div
          style={{
            maxWidth: '1240px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: '48px',
            alignItems: 'center',
          }}
        >
          {/* Left Text and CTA Buttons */}
          <div>
            <h2
              style={{
                fontSize: 'clamp(2rem, 3.2vw, 2.7rem)',
                fontWeight: 800,
                color: '#111827',
                margin: '0 0 16px 0',
                letterSpacing: '-0.02em',
              }}
            >
              Ready to discuss your needs?
            </h2>
            <p
              style={{
                fontSize: '1.05rem',
                color: '#4b5563',
                lineHeight: 1.6,
                margin: '0 0 36px 0',
                maxWidth: '480px',
              }}
            >
              Our visitor management and security engineers are ready to design a custom guest check-in and access blueprint tailored to your property.
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <button
                onClick={() => setShowSalesModal(true)}
                style={{
                  backgroundColor: '#d70015',
                  color: '#ffffff',
                  border: 'none',
                  padding: '13px 32px',
                  borderRadius: '4px',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'background-color 0.2s',
                  boxShadow: '0 4px 12px rgba(215, 0, 21, 0.3)',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#b50012')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#d70015')}
              >
                <span>CONTACT SALES</span>
                <ArrowRight size={16} />
              </button>

              <button
                onClick={() => setShowSalesModal(true)}
                style={{
                  backgroundColor: '#d70015',
                  color: '#ffffff',
                  border: 'none',
                  padding: '13px 32px',
                  borderRadius: '4px',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'background-color 0.2s',
                  boxShadow: '0 4px 12px rgba(215, 0, 21, 0.3)',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#b50012')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#d70015')}
              >
                <span>HOW TO BUY</span>
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* Right: Modern Illustration Matching Screenshot */}
          <div style={{ textAlign: 'center' }}>
            <img
              src="/images/visitor-management/contact-banner-illustration.jpg"
              alt="Ready to discuss your needs illustration"
              style={{
                width: '100%',
                maxWidth: '520px',
                height: 'auto',
                display: 'inline-block',
              }}
            />
          </div>
        </div>
      </section>

      {/* Contact Sales Modal */}
      {showSalesModal && (
        <ContactSalesModal
          isOpen={showSalesModal}
          onClose={() => setShowSalesModal(false)}
        />
      )}
    </div>
  );
}
