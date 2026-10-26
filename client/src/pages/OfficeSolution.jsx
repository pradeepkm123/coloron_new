import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Shield,
  ArrowRight,
  CheckCircle2,
  MapPin,
  ChevronRight,
  PhoneCall,
  Check,
  AlertCircle,
  Clock,
  Download,
  Share2,
  Sparkles,
  Camera,
  Layers,
  FileText,
  Building,
  Car,
  ChevronDown,
  ChevronUp,
  CreditCard,
  ExternalLink
} from 'lucide-react';
import ContactSalesModal from '../components/ContactSalesModal';

// Interactive hotspots for the 3D Office Campus Complex
const officeHotspots = [
  {
    id: 'vehicle-entrance',
    title: 'Vehicle Entrance & Exit',
    desc: 'High-speed ANPR license plate recognition paired with brushless barrier gates and anti-fall radar, ensuring seamless non-stop vehicle entry.',
    top: '58%',
    left: '67%',
    device: '4MP DeepinView ANPR Camera & High-Speed Barrier Gate',
  },
  {
    id: 'lobby-reception',
    title: 'Lobby & Reception Speed Gates',
    desc: 'Frictionless biometric face recognition turnstiles and self-service QR visitor check-in kiosks with automated elevator destination dispatch.',
    top: '44%',
    left: '56%',
    device: 'MinMoe Face Recognition Speed Gate Terminal',
  },
  {
    id: 'open-office',
    title: 'Open Office Workspaces',
    desc: 'Panoramic ultra-wide indoor cameras with smart occupancy analytics, ambient light-sensing energy automation, and acoustic noise zoning.',
    top: '32%',
    left: '48%',
    device: 'Panoramic 360° Fisheye Sensor & Smart Sensors',
  },
  {
    id: 'meeting-rooms',
    title: 'Executive Conference & Meeting Rooms',
    desc: '4K Ultra HD interactive touch screens, wireless multi-screen projection, and automated booking displays synchronized with Microsoft 365.',
    top: '34%',
    left: '28%',
    device: '4K Interactive Display & Room Scheduling Screen',
  },
  {
    id: 'control-room',
    title: 'Central Security Control Room',
    desc: 'Unified HikCentral Professional VMS platform driving multi-screen video walls, consolidated alarm handling, and cyber-hardened storage.',
    top: '18%',
    left: '42%',
    device: 'HikCentral Enterprise Server & Ultra-HD Video Wall',
  },
];

export default function OfficeSolution() {
  const [activeHotspot, setActiveHotspot] = useState(officeHotspots[0]);
  const [showSalesModal, setShowSalesModal] = useState(false);
  const [activeNav, setActiveNav] = useState('overview');
  const [expandedOption, setExpandedOption] = useState(0);

  // Subnav scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['overview', 'vehicle-entrance', 'what-we-offer', 'success-stories', 'related-links'];
      const scrollPos = window.scrollY + 200;

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
    setActiveNav(id);
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -110;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const hardwareItems = [
    {
      title: 'ANPR Camera',
      model: 'iDS-TCM403-BI / 4MP DeepinView ANPR Camera',
      desc: 'High-speed license plate recognition up to 99.8% accuracy with built-in deep learning vehicle classification, color detection, and dark-environment starlight illumination.',
    },
    {
      title: 'Barrier Gate',
      model: 'DS-TMG4B0 Series / High-Speed Brushless Barrier Gate',
      desc: 'High-reliability DC brushless motor enabling 0.6s to 3s adjustable arm lifting, 5 million MTBF duty cycles, and automated emergency release upon power loss.',
    },
    {
      title: 'LED Screen & Radar',
      model: 'DS-TVL121 Series Display & Anti-Fall Radar',
      desc: 'Ultra-bright outdoor entrance LED screen displaying customized greetings, plate numbers, and remaining bays, combined with 79GHz anti-fall radar eliminating boom-strike hazards.',
    },
    {
      title: 'Software',
      model: 'HikCentral Professional Parking & Visitor Module',
      desc: 'Centralized parking lot management supporting multi-tier tenant quotas, pre-authorized VIP guest invites, electronic billing reconciliation, and automated notification alerts.',
    },
  ];

  return (
    <div
      style={{
        backgroundColor: '#ffffff',
        minHeight: '100vh',
        paddingTop: '64px',
        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, sans-serif',
        color: '#1d1d1f',
      }}
    >
      {/* 1. HERO BANNER (Modern Corporate Glass Complex with Warm Golden Arc) */}
      <section
        style={{
          position: 'relative',
          width: '100%',
          height: 'clamp(440px, 42vw, 560px)',
          minHeight: '400px',
          overflow: 'hidden',
          backgroundColor: '#1b1b1f',
        }}
      >
        {/* Background Image */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url('/images/offices/office-building-banner-pc.jpg')`,
            backgroundPosition: 'center right',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        />

        {/* Subtle Dark Gradient Overlay for text readability */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(90deg, rgba(20, 20, 22, 0.72) 0%, rgba(20, 20, 22, 0.42) 36%, rgba(20, 20, 22, 0.1) 60%, rgba(0,0,0,0) 80%)',
            pointerEvents: 'none',
          }}
        />

        {/* Content Container */}
        <div
          style={{
            position: 'relative',
            zIndex: 2,
            maxWidth: '1360px',
            height: '100%',
            margin: '0 auto',
            padding: '0 clamp(24px, 5vw, 64px)',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <div style={{ maxWidth: '660px' }}>
            {/* Breadcrumb Tag */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                color: '#ffffff',
                fontSize: '0.92rem',
                fontWeight: 600,
                letterSpacing: '0.02em',
                marginBottom: '14px',
                textShadow: '0 2px 8px rgba(0,0,0,0.5)',
              }}
            >
              <span
                style={{
                  display: 'inline-block',
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: '#e6a13b',
                }}
              />
              <span>Solutions by Scenario</span>
            </div>

            {/* Main Title */}
            <h1
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4.2rem)',
                fontWeight: 800,
                color: '#ffffff',
                letterSpacing: '-0.03em',
                lineHeight: 1.08,
                margin: '0 0 16px',
                textShadow: '0 3px 18px rgba(0,0,0,0.6)',
              }}
            >
              Office Buildings
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontSize: 'clamp(1.05rem, 1.8vw, 1.32rem)',
                color: 'rgba(255, 255, 255, 0.95)',
                fontWeight: 400,
                lineHeight: 1.45,
                margin: '0 0 28px',
                textShadow: '0 2px 10px rgba(0,0,0,0.6)',
                maxWidth: '580px',
              }}
            >
              Smart commercial workplace solutions unifying contactless access, automated vehicle parking, visitor self-service, and centralized energy efficiency management.
            </p>

            {/* CTA Button */}
            <button
              type="button"
              onClick={() => setShowSalesModal(true)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: '#d70015',
                color: '#ffffff',
                padding: '12px 30px',
                borderRadius: '9999px',
                fontSize: '0.96rem',
                fontWeight: 600,
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 4px 18px rgba(215, 0, 21, 0.45)',
                transition: 'transform 0.2s ease, background-color 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#b70012';
                e.currentTarget.style.transform = 'scale(1.03)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#d70015';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <span>Contact Solution Expert</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* 2. STICKY SUBNAV BAR */}
      <nav
        style={{
          position: 'sticky',
          top: '64px',
          zIndex: 40,
          backgroundColor: 'rgba(255, 255, 255, 0.92)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
          padding: '0 24px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.03)',
        }}
      >
        <div
          style={{
            maxWidth: '1360px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            overflowX: 'auto',
            scrollbarWidth: 'none',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
            {[
              { id: 'overview', label: 'Solution overview' },
              { id: 'vehicle-entrance', label: 'Vehicle Entrance & Exit' },
              { id: 'what-we-offer', label: 'What we offer' },
              { id: 'success-stories', label: 'Success stories' },
              { id: 'related-links', label: 'You may also be interested in' },
            ].map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  borderBottom: activeNav === item.id ? '2px solid #d70015' : '2px solid transparent',
                  color: activeNav === item.id ? '#d70015' : '#6e6e73',
                  fontSize: '0.92rem',
                  fontWeight: activeNav === item.id ? 600 : 500,
                  padding: '16px 0',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  if (activeNav !== item.id) e.currentTarget.style.color = '#1d1d1f';
                }}
                onMouseLeave={(e) => {
                  if (activeNav !== item.id) e.currentTarget.style.color = '#6e6e73';
                }}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setShowSalesModal(true)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              backgroundColor: '#1d1d1f',
              color: '#ffffff',
              padding: '7px 18px',
              borderRadius: '9999px',
              fontSize: '0.85rem',
              fontWeight: 500,
              border: 'none',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              transition: 'background-color 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#d70015')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#1d1d1f')}
          >
            <PhoneCall size={13} />
            <span>Consult Building Specialist</span>
          </button>
        </div>
      </nav>

      {/* 3. SECTION 1: SOLUTION OVERVIEW WITH 3D INTERACTIVE OFFICE CAMPUS */}
      <section id="overview" style={{ padding: 'clamp(56px, 7vw, 90px) 24px', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2
            style={{
              fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
              fontWeight: 700,
              color: '#1d1d1f',
              letterSpacing: '-0.025em',
              margin: '0 0 16px',
            }}
          >
            Solution overview
          </h2>

          <div
            style={{
              fontSize: 'clamp(1.02rem, 1.6vw, 1.12rem)',
              color: '#6e6e73',
              lineHeight: 1.65,
              maxWidth: '960px',
              margin: '0 auto 48px',
              textAlign: 'center',
            }}
          >
            <p style={{ margin: '0 0 14px' }}>
              Commercial office buildings are complex multi-tenant environments requiring a delicate balance between welcoming hospitality and rigorous corporate security. Traditional fragmented systems create operational silos, long visitor queues, and inefficient energy use.
            </p>
            <p style={{ margin: 0 }}>
              Coloron&apos;s Office Buildings solution provides an all-in-one smart facility infrastructure. Integrating intelligent ANPR vehicle gates, touchless biometric speed gates, automated visitor check-in, and centralized security management, the solution elevates tenant satisfaction and slashes facility management overhead.
            </p>
          </div>

          {/* 3D Isometric Office Campus Map */}
          <div
            style={{
              position: 'relative',
              borderRadius: '24px',
              overflow: 'hidden',
              backgroundColor: '#f5f5f7',
              border: '1px solid rgba(0, 0, 0, 0.06)',
              boxShadow: '0 20px 48px rgba(0, 0, 0, 0.06)',
              maxWidth: '1080px',
              margin: '0 auto',
            }}
          >
            <img
              src="/images/offices/office-building-3d-map.jpg"
              alt="Office Buildings Multi-Zone 3D Architectural Map"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                objectFit: 'contain',
                maxHeight: '680px',
              }}
            />

            {/* Interactive Pins Overlay */}
            {officeHotspots.map((spot) => {
              const isSelected = activeHotspot.id === spot.id;
              return (
                <button
                  key={spot.id}
                  type="button"
                  onClick={() => setActiveHotspot(spot)}
                  aria-label={`Inspect ${spot.title}`}
                  style={{
                    position: 'absolute',
                    top: spot.top,
                    left: spot.left,
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: isSelected ? '#d70015' : 'rgba(255, 255, 255, 0.95)',
                    color: isSelected ? '#ffffff' : '#1d1d1f',
                    padding: '8px 14px',
                    borderRadius: '9999px',
                    border: isSelected ? '2px solid #ffffff' : '1px solid rgba(0,0,0,0.12)',
                    boxShadow: isSelected
                      ? '0 6px 20px rgba(215, 0, 21, 0.5)'
                      : '0 4px 14px rgba(0, 0, 0, 0.15)',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                    zIndex: isSelected ? 15 : 10,
                  }}
                  onMouseEnter={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.backgroundColor = '#1d1d1f';
                      e.currentTarget.style.color = '#ffffff';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
                      e.currentTarget.style.color = '#1d1d1f';
                    }
                  }}
                >
                  <MapPin size={14} color={isSelected ? '#ffffff' : '#d70015'} />
                  <span>{spot.title}</span>
                </button>
              );
            })}
          </div>

          {/* Hotspot Detailed Information Drawer */}
          {activeHotspot && (
            <div
              style={{
                marginTop: '28px',
                padding: '20px 28px',
                backgroundColor: '#fbfbfd',
                borderRadius: '16px',
                border: '1px solid rgba(0, 0, 0, 0.06)',
                maxWidth: '860px',
                margin: '28px auto 0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '16px',
                textAlign: 'left',
              }}
            >
              <div>
                <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#d70015', textTransform: 'uppercase' }}>
                  Zone Focus
                </div>
                <div style={{ fontSize: '1.15rem', fontWeight: 700, color: '#1d1d1f', margin: '2px 0 4px' }}>
                  {activeHotspot.title}
                </div>
                <div style={{ fontSize: '0.94rem', color: '#6e6e73' }}>{activeHotspot.desc}</div>
              </div>
              <div
                style={{
                  backgroundColor: '#ffffff',
                  padding: '8px 16px',
                  borderRadius: '8px',
                  border: '1px solid rgba(0,0,0,0.08)',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  color: '#0071e3',
                }}
              >
                {activeHotspot.device}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 4. SECTION 2: VEHICLE ENTRANCE & EXIT (Challenges matching screenshot) */}
      <section
        id="vehicle-entrance"
        style={{
          padding: 'clamp(56px, 7vw, 90px) 24px',
          backgroundColor: '#f5f5f7',
          borderTop: '1px solid rgba(0, 0, 0, 0.05)',
          borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto 48px' }}>
            <h2
              style={{
                fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
                fontWeight: 700,
                color: '#1d1d1f',
                letterSpacing: '-0.025em',
                margin: '0 0 8px',
              }}
            >
              Vehicle Entrance & Exit
            </h2>
            <div
              style={{
                fontSize: '0.85rem',
                fontWeight: 700,
                color: '#d70015',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '10px',
              }}
            >
              Challenges
            </div>
            <p style={{ fontSize: '1.05rem', color: '#6e6e73', lineHeight: 1.55, margin: 0 }}>
              Peak commuting hours strain property access points. Slow manual verification and paper badge ticketing result in vehicle bottlenecks and security blindspots.
            </p>
          </div>

          {/* 2 Challenge Cards Matching Screenshot */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '28px',
            }}
          >
            {/* Card 1: Rush hour congestion */}
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 12px 30px rgba(0, 0, 0, 0.05)',
                border: '1px solid rgba(0, 0, 0, 0.06)',
                transition: 'transform 0.3s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-4px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              <div style={{ height: '260px', overflow: 'hidden' }}>
                <img
                  src="/images/offices/rush-hour-congestion.jpg"
                  alt="Rush hour vehicle congestion at building entrance"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
              </div>
              <div style={{ padding: '28px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <AlertCircle size={18} color="#d70015" />
                  <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#d70015', textTransform: 'uppercase' }}>
                    Challenge 01
                  </span>
                </div>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#1d1d1f', margin: '0 0 10px' }}>
                  Rush hour congestion
                </h3>
                <p style={{ fontSize: '0.95rem', color: '#6e6e73', lineHeight: 1.55, margin: 0 }}>
                  Manual security guard ticket dispensing and physical badge tapping cause severe entrance delays during morning and evening peaks, creating traffic backups on adjacent city streets.
                </p>
              </div>
            </div>

            {/* Card 2: Difficult to retrieve records */}
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 12px 30px rgba(0, 0, 0, 0.05)',
                border: '1px solid rgba(0, 0, 0, 0.06)',
                transition: 'transform 0.3s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-4px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              <div style={{ height: '260px', overflow: 'hidden' }}>
                <img
                  src="/images/offices/difficult-to-retrieve-records.jpg"
                  alt="Difficult to retrieve physical paper records in filing cabinet"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
              </div>
              <div style={{ padding: '28px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <Clock size={18} color="#d70015" />
                  <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#d70015', textTransform: 'uppercase' }}>
                    Challenge 02
                  </span>
                </div>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#1d1d1f', margin: '0 0 10px' }}>
                  Difficult to retrieve records
                </h3>
                <p style={{ fontSize: '0.95rem', color: '#6e6e73', lineHeight: 1.55, margin: 0 }}>
                  Manual paper visitor logbooks and disconnected gate registers make tracking vehicle dwell duration, resolving parking disputes, or auditing security incidents time-consuming and unreliable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SECTION 3: WHAT WE OFFER (ANPR Gate HUD + Architecture Topology matching screenshot) */}
      <section id="what-we-offer" style={{ padding: 'clamp(56px, 7vw, 90px) 24px', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto 56px' }}>
            <h2
              style={{
                fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
                fontWeight: 700,
                color: '#1d1d1f',
                letterSpacing: '-0.025em',
                margin: '0 0 14px',
              }}
            >
              What we offer
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#6e6e73', lineHeight: 1.55, margin: 0 }}>
              An automated smart parking access ecosystem combining high-definition ANPR cameras, high-speed brushless barrier gates, and integrated entrance LED guidance.
            </p>
          </div>

          {/* Row 1: ANPR Gate HUD Visual + Categorized Bullet Points */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 'clamp(32px, 5vw, 64px)',
              alignItems: 'center',
              marginBottom: '72px',
            }}
          >
            {/* Visual Demo Card */}
            <div
              style={{
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 16px 40px rgba(0,0,0,0.1)',
                border: '1px solid rgba(0,0,0,0.06)',
                backgroundColor: '#ffffff',
              }}
            >
              <img
                src="/images/offices/vehicle-entries-3.jpg"
                alt="ANPR camera automatically recognizing license plate at corporate office gate"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  objectFit: 'cover',
                }}
              />
            </div>

            {/* Bullets Categorized Matching Screenshot */}
            <div>
              {/* Category 1: Quick pass */}
              <div style={{ marginBottom: '26px' }}>
                <span
                  style={{
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    color: '#d70015',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    display: 'block',
                    marginBottom: '10px',
                  }}
                >
                  Quick pass
                </span>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.96rem', color: '#1d1d1f' }}>
                    <Check size={18} color="#d70015" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>Non-stop automated barrier raising powered by &gt;99.5% ANPR accuracy</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.96rem', color: '#1d1d1f' }}>
                    <Check size={18} color="#d70015" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>Sub-second 0.6s rapid barrier arm actuation preventing peak queuing</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.96rem', color: '#1d1d1f' }}>
                    <Check size={18} color="#d70015" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>Dual radar detection prevents vehicle tailgating and boom-fall accidents</span>
                  </li>
                </ul>
              </div>

              {/* Category 2: Visualized management */}
              <div>
                <span
                  style={{
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    color: '#0071e3',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    display: 'block',
                    marginBottom: '10px',
                  }}
                >
                  Visualized management
                </span>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.96rem', color: '#1d1d1f' }}>
                    <Check size={18} color="#0071e3" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>Real-time vacancy display with customized tenant greetings on entrance LED</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.96rem', color: '#0071e3' }}>
                    <Check size={18} color="#0071e3" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>Instant photo search by license plate, vehicle model, color, and timestamp</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.96rem', color: '#0071e3' }}>
                    <Check size={18} color="#0071e3" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>VIP visitor pre-registration with automated parking quota reservation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Solution Architecture Deck Matching Screenshot */}
          <div
            style={{
              backgroundColor: '#fbfbfd',
              borderRadius: '24px',
              border: '1px solid rgba(0, 0, 0, 0.08)',
              padding: 'clamp(28px, 4vw, 44px)',
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.03)',
            }}
          >
            <h3
              style={{
                fontSize: '1.45rem',
                fontWeight: 700,
                color: '#1d1d1f',
                marginBottom: '28px',
              }}
            >
              Vehicle Entrance & Exit System Architecture
            </h3>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '36px',
                alignItems: 'center',
              }}
            >
              {/* Topology Diagram */}
              <div
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '16px',
                  padding: '24px',
                  border: '1px solid rgba(0,0,0,0.06)',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.03)',
                  textAlign: 'center',
                }}
              >
                <img
                  src="/images/offices/office-anpr-entry-demo.jpg"
                  alt="Vehicle Entrance and Exit system topology diagram"
                  style={{
                    width: '100%',
                    maxHeight: '380px',
                    objectFit: 'contain',
                    display: 'block',
                    margin: '0 auto',
                  }}
                />
                <div style={{ fontSize: '0.82rem', color: '#86868b', marginTop: '12px' }}>
                  Architecture: Control Room (HikCentral) ↔ Switch ↔ Entrances/Exits (ANPR, Screen, Barrier)
                </div>
              </div>

              {/* Expandable Product List Accordion */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {hardwareItems.map((item, idx) => {
                  const isExp = expandedOption === idx;
                  return (
                    <div
                      key={idx}
                      style={{
                        backgroundColor: '#ffffff',
                        borderRadius: '14px',
                        border: isExp ? '1.5px solid #d70015' : '1px solid rgba(0, 0, 0, 0.08)',
                        overflow: 'hidden',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      <button
                        type="button"
                        onClick={() => setExpandedOption(isExp ? -1 : idx)}
                        style={{
                          width: '100%',
                          padding: '16px 20px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          textAlign: 'left',
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                          <div
                            style={{
                              width: '8px',
                              height: '8px',
                              borderRadius: '50%',
                              backgroundColor: isExp ? '#d70015' : '#86868b',
                            }}
                          />
                          <span style={{ fontSize: '1.02rem', fontWeight: 600, color: '#1d1d1f' }}>
                            {item.title}
                          </span>
                        </div>
                        {isExp ? <ChevronUp size={18} color="#d70015" /> : <ChevronDown size={18} color="#86868b" />}
                      </button>

                      {isExp && (
                        <div style={{ padding: '0 20px 18px', borderTop: '1px solid rgba(0,0,0,0.04)' }}>
                          <div style={{ fontSize: '0.84rem', color: '#0071e3', fontWeight: 600, marginTop: '8px' }}>
                            {item.model}
                          </div>
                          <p style={{ fontSize: '0.9rem', color: '#6e6e73', lineHeight: 1.5, margin: '6px 0 12px' }}>
                            {item.desc}
                          </p>
                          <Link
                            to="/quote-calculator"
                            style={{
                              fontSize: '0.84rem',
                              color: '#d70015',
                              fontWeight: 600,
                              textDecoration: 'none',
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '4px',
                            }}
                          >
                            <span>Request Engineering Datasheet</span>
                            <ChevronRight size={14} />
                          </Link>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SECTION 4: SUCCESS STORIES (Matching Screenshot) */}
      <section
        id="success-stories"
        style={{
          padding: 'clamp(56px, 7vw, 90px) 24px',
          backgroundColor: '#f5f5f7',
          borderTop: '1px solid rgba(0, 0, 0, 0.05)',
          borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
              fontWeight: 700,
              color: '#1d1d1f',
              textAlign: 'center',
              letterSpacing: '-0.02em',
              margin: '0 0 40px',
            }}
          >
            Success stories
          </h2>

          {/* Featured Case Study Card */}
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 16px 40px rgba(0, 0, 0, 0.06)',
              border: '1px solid rgba(0, 0, 0, 0.06)',
              maxWidth: '980px',
              margin: '0 auto',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              alignItems: 'center',
            }}
          >
            <div style={{ height: '100%', minHeight: '300px', overflow: 'hidden' }}>
              <img
                src="/images/offices/case-study-emirates.jpg"
                alt="Emirates NBD VISA smart parking barrier access case study"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </div>

            <div style={{ padding: 'clamp(32px, 5vw, 48px)' }}>
              <span
                style={{
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  color: '#d70015',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  display: 'block',
                  marginBottom: '8px',
                }}
              >
                Commercial Banking Headquarters
              </span>
              <h3
                style={{
                  fontSize: 'clamp(1.25rem, 2vw, 1.55rem)',
                  fontWeight: 700,
                  color: '#1d1d1f',
                  lineHeight: 1.35,
                  margin: '0 0 14px',
                }}
              >
                A partnership of leaders and vision: Solving the parking puzzle at corporate office headquarters
              </h3>
              <p style={{ fontSize: '0.94rem', color: '#6e6e73', lineHeight: 1.6, margin: '0 0 24px' }}>
                Deploying high-speed ANPR camera barriers, VIP badge reservation, and integrated guidance across 4,500 parking spaces, reducing morning entry wait times by over 75%.
              </p>

              <button
                type="button"
                onClick={() => setShowSalesModal(true)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  backgroundColor: 'transparent',
                  border: 'none',
                  color: '#0071e3',
                  fontSize: '0.94rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  padding: 0,
                }}
              >
                <span>Read Full Case Study</span>
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SECTION 5: YOU MAY ALSO BE INTERESTED IN */}
      <section id="related-links" style={{ padding: 'clamp(56px, 7vw, 90px) 24px', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
              fontWeight: 700,
              color: '#1d1d1f',
              textAlign: 'center',
              letterSpacing: '-0.02em',
              margin: '0 0 44px',
            }}
          >
            You may also be interested in
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '24px',
            }}
          >
            {[
              {
                title: 'Commercial Buildings',
                subtitle: 'Comprehensive multi-tenant facility management & smart security architecture',
                image: '/images/offices/rel-commercial-buildings.jpg',
                link: '/solutions',
              },
              {
                title: 'Access Control',
                subtitle: 'Touchless biometric speed gates, QR visitor kiosks & mobile NFC credentials',
                image: '/images/offices/rel-access-control.jpg',
                link: '/technologies',
              },
              {
                title: 'Supermarkets',
                subtitle: 'Retail loss prevention, queue dwell analytics & smart POS video overlay',
                image: '/images/offices/rel-supermarkets.jpg',
                link: '/solutions',
              },
            ].map((rel, idx) => (
              <Link
                key={idx}
                to={rel.link}
                style={{
                  position: 'relative',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  height: '240px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '24px',
                  textDecoration: 'none',
                  boxShadow: '0 10px 24px rgba(0,0,0,0.08)',
                  transition: 'transform 0.3s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-4px)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
              >
                <img
                  src={rel.image}
                  alt={rel.title}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    zIndex: 1,
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background:
                      'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.45) 50%, rgba(0,0,0,0.85) 100%)',
                    zIndex: 2,
                  }}
                />
                <div style={{ position: 'relative', zIndex: 3 }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#ffffff', margin: '0 0 6px' }}>
                    {rel.title}
                  </h3>
                  <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.85)', margin: 0, lineHeight: 1.4 }}>
                    {rel.subtitle}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 8. SECTION 6: READY TO DISCUSS YOUR NEEDS */}
      <section
        style={{
          padding: 'clamp(56px, 7vw, 84px) 24px',
          backgroundColor: '#fbfbfd',
          borderTop: '1px solid rgba(0, 0, 0, 0.06)',
        }}
      >
        <div
          style={{
            maxWidth: '1100px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            alignItems: 'center',
            gap: '48px',
          }}
        >
          {/* Left CTA Action */}
          <div>
            <h2
              style={{
                fontSize: 'clamp(2rem, 3.5vw, 2.6rem)',
                fontWeight: 800,
                color: '#1d1d1f',
                letterSpacing: '-0.025em',
                margin: '0 0 16px',
              }}
            >
              Ready to discuss your needs?
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#6e6e73', lineHeight: 1.5, margin: '0 0 28px' }}>
              Connect directly with our corporate building security engineers for customized parking site surveys, entrance speed gate layouts, and volume pricing.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
              <button
                type="button"
                onClick={() => setShowSalesModal(true)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: '#d70015',
                  color: '#ffffff',
                  padding: '12px 28px',
                  borderRadius: '9999px',
                  fontSize: '0.94rem',
                  fontWeight: 600,
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 4px 18px rgba(215, 0, 21, 0.35)',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#b70012';
                  e.currentTarget.style.transform = 'scale(1.03)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#d70015';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                <span>Contact Sales</span>
                <ArrowRight size={16} />
              </button>

              <Link
                to="/quote-calculator"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: '#ffffff',
                  color: '#d70015',
                  border: '1.5px solid #d70015',
                  padding: '10.5px 26px',
                  borderRadius: '9999px',
                  fontSize: '0.94rem',
                  fontWeight: 600,
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(215, 0, 21, 0.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#ffffff';
                }}
              >
                <span>Calculate Pricing</span>
              </Link>
            </div>
          </div>

          {/* Right Illustration */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img
              src="/images/apartment/apartment_discuss_illu.png"
              alt="Ready to discuss needs consultation illustration"
              style={{
                maxWidth: '440px',
                width: '100%',
                height: 'auto',
                display: 'block',
                mixBlendMode: 'multiply',
              }}
            />
          </div>
        </div>
      </section>

      {/* Contact Sales Modal */}
      <ContactSalesModal isOpen={showSalesModal} onClose={() => setShowSalesModal(false)} />
    </div>
  );
}
