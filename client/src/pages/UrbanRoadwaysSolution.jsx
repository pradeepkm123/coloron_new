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
  Radio,
  Cpu,
  Layers,
  FileText,
  Activity,
  Car,
  Eye,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import ContactSalesModal from '../components/ContactSalesModal';

// Interactive hotspots for the 3D Urban Roadway City District
const urbanHotspots = [
  {
    id: 'intersection-control',
    title: 'Intelligent Intersection Control',
    desc: 'Adaptive traffic signal control powered by millimeter-wave radar and AI traffic cameras, dynamically adjusting green light phases based on real-time vehicle queue lengths.',
    top: '38%',
    left: '49%',
    device: 'All-in-One AI Traffic Camera & Radar',
  },
  {
    id: 'arterial-flow',
    title: 'Urban Arterial Corridor',
    desc: 'Coordinated green-wave progression along main thoroughfares, maintaining continuous traffic flow and reducing frequent stop-and-go delays across multiple junctions.',
    top: '25%',
    left: '57%',
    device: 'Radar-Assisted Flow Detection Unit',
  },
  {
    id: 'pedestrian-crossing',
    title: 'Smart Pedestrian Crosswalk & Bus Lane',
    desc: 'Automated pedestrian detection with active illuminated crosswalk markers, alongside 24/7 dedicated bus-lane violation enforcement ensuring rapid transit priority.',
    top: '56%',
    left: '44%',
    device: 'Bus Lane & Crosswalk Enforcement Camera',
  },
  {
    id: 'command-center',
    title: 'Municipal Traffic Command Center',
    desc: 'Centralized HikCentral Traffic VMS platform delivering real-time city-wide traffic heatmaps, automated incident alerts, and emergency vehicle green wave preemption.',
    top: '39%',
    left: '71%',
    device: 'HikCentral ITS Management Server',
  },
];

export default function UrbanRoadwaysSolution() {
  const [activeHotspot, setActiveHotspot] = useState(urbanHotspots[0]);
  const [showSalesModal, setShowSalesModal] = useState(false);
  const [activeNav, setActiveNav] = useState('overview');

  // Accordion state for Solution Option A
  const [expandedOptionA, setExpandedOptionA] = useState(0);
  // Accordion state for Solution Option B
  const [expandedOptionB, setExpandedOptionB] = useState(0);

  // Subnav scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['overview', 'intersections', 'what-we-offer', 'resources', 'related-links'];
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

  // Option A Products
  const optionAItems = [
    {
      title: 'Capture units',
      desc: 'High-definition traffic cameras (up to 9MP) equipped with deep learning algorithms for multi-lane vehicle feature recognition, license plate capture, and driver behavior analysis.',
      model: 'iDS-TCM403-E / 9MP Starlight ITS Camera',
    },
    {
      title: 'Radar detector',
      desc: 'High-precision 77GHz multi-lane radar measuring vehicle velocity up to 250 km/h and tracking over 128 targets simultaneously across 8 lanes.',
      model: 'DS-TSS920-E / 77GHz Traffic Radar',
    },
    {
      title: 'Signal detection',
      desc: 'Traffic light status collector interfacing directly with physical signal light heads to synchronize yellow, red, and green phase transitions in real time.',
      model: 'DS-TE800 / Traffic Light Signal Detector',
    },
    {
      title: 'Terminals',
      desc: 'Ruggedized outdoor edge computing terminal managing local video encoding, cryptographic evidence watermarking, and dual-uplink failover transmission.',
      model: 'DS-TP50-16HK / Intelligent Roadway Terminal',
    },
  ];

  // Option B Products
  const optionBItems = [
    {
      title: 'All-rounder traffic cameras',
      desc: 'Integrated all-in-one housing combining high-sensitivity optical sensor, built-in radar detector, multi-array supplemental white LED strobe, and edge AI processor in a single compact unit.',
      model: 'iDS-TCV907-BIR / All-in-One ITS Smart Camera',
    },
    {
      title: 'Traffic light signal detector',
      desc: 'Direct voltage sampling detector monitoring 16/32 traffic light phases with optical isolation, preventing signal spoofing or asynchronous capture errors.',
      model: 'DS-TE800-B / Optical Isolated Phase Collector',
    },
    {
      title: 'Terminals',
      desc: 'Compact fanless DIN-rail intersection terminal facilitating local storage buffers and real-time ANPR comparison against municipal hotlists.',
      model: 'DS-TP4204-12 / Edge ITS Processing Unit',
    },
    {
      title: 'Software',
      desc: 'HikCentral Master ITS Platform consolidating incident management, adaptive traffic light optimization, electronic citation dispatch, and GIS map integration.',
      model: 'HikCentral ITS Enterprise Management Suite',
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
      {/* 1. HERO BANNER (Authentic Urban Roadways Panorama with Blue Arc) */}
      <section
        style={{
          position: 'relative',
          width: '100%',
          height: 'clamp(440px, 42vw, 560px)',
          minHeight: '400px',
          overflow: 'hidden',
          backgroundColor: '#0c1626',
        }}
      >
        {/* Background Image */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url('/images/urban/urban-roadway-banner-pc.jpg')`,
            backgroundPosition: 'center right',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        />

        {/* Subtle Dark Gradient Overlay for optimal text readability */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(90deg, rgba(8, 20, 44, 0.72) 0%, rgba(8, 20, 44, 0.42) 36%, rgba(8, 20, 44, 0.1) 60%, rgba(0,0,0,0) 80%)',
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
                  backgroundColor: '#4ea1ff',
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
              Urban roadways
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
              Transforming city transportation with AI-driven intersection signal optimization, automated multi-lane violation enforcement, and urban arterial corridor management.
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
              { id: 'intersections', label: 'Intersections' },
              { id: 'what-we-offer', label: 'What we offer' },
              { id: 'resources', label: 'Related Resources' },
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
            <span>Consult ITS Specialist</span>
          </button>
        </div>
      </nav>

      {/* 3. SECTION 1: SOLUTION OVERVIEW WITH 3D INTERACTIVE CITY MAP */}
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
              Urban roadways form the critical lifeblood of modern economic vitality. As vehicle density surges across metropolitan centers, municipal traffic authorities confront escalating intersection bottlenecks, safety hazards, and reactive management models.
            </p>
            <p style={{ margin: 0 }}>
              Coloron&apos;s Urban Roadways solution establishes an intelligent, proactive transportation network. Uniting deep-learning video sensors, high-frequency radar detection, and adaptive traffic signal control algorithms, the solution significantly elevates urban traffic throughput, slashes intersection idle times, and protects vulnerable road users.
            </p>
          </div>

          {/* 3D Isometric Urban Roadway Map */}
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
              src="/images/urban/urban-roadways-3d-overview.jpg"
              alt="Urban Roadways Intelligent Transportation 3D Map"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                objectFit: 'contain',
                maxHeight: '680px',
              }}
            />

            {/* Interactive Pins Overlay */}
            {urbanHotspots.map((spot) => {
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
                  ITS Zone Focus
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

      {/* 4. SECTION 2: INTERSECTIONS (Challenges matching screenshot) */}
      <section
        id="intersections"
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
              Intersections
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
              Intersections represent the most complex conflict points in urban road topology. Static signal timing and high driver non-compliance cause compounding queue spillbacks and hazardous accidents.
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
            {/* Card 1: Busy Intersection Congestion */}
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
                  src="/images/urban/intersections-busy-intersection.jpg"
                  alt="Congestion at busy urban intersection"
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
                  Busy intersection
                </h3>
                <p style={{ fontSize: '0.95rem', color: '#6e6e73', lineHeight: 1.55, margin: 0 }}>
                  Pre-programmed fixed timer traffic signals cannot respond to sudden morning or evening volume spikes, causing extensive waiting queues, cross-junction spillbacks, and wasted commuter fuel.
                </p>
              </div>
            </div>

            {/* Card 2: Serious Accidents & Violations */}
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
                  src="/images/urban/intersections-serious-accidents.jpg"
                  alt="Various violations causing serious accidents"
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
                  Serious accidents
                </h3>
                <p style={{ fontSize: '0.95rem', color: '#6e6e73', lineHeight: 1.55, margin: 0 }}>
                  Red-light running, illegal turns, wrong-way entries, and reckless lane changing account for over 50% of fatal roadway crashes, disrupting grid continuity for hours after each collision.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SECTION 3: WHAT WE OFFER (Intersection Video AI + Architecture Topologies matching screenshot) */}
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
              An end-to-end intelligent roadway ecosystem unifying AI radar-optical sensors, automated violation enforcement, and real-time adaptive signal control.
            </p>
          </div>

          {/* Row 1: Radar Vision Intersection Demo + Categorized Bullet Points */}
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
                boxShadow: '0 16px 40px rgba(0,0,0,0.12)',
                border: '1px solid rgba(0,0,0,0.06)',
                backgroundColor: '#090d14',
              }}
            >
              <img
                src="/images/urban/intersection-crossroads-demo.jpg"
                alt="Intersection crossroads radar detection and red light violation evidence capture"
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
              {/* Category 1: Traffic signal control */}
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
                  Traffic signal control
                </span>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.96rem', color: '#1d1d1f' }}>
                    <Check size={18} color="#d70015" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>Real-time vehicle queue length and approach speed measurement via radar-optical fusion</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.96rem', color: '#1d1d1f' }}>
                    <Check size={18} color="#d70015" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>Dynamic green phase allocation reducing intersection queue delays by up to 35%</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.96rem', color: '#1d1d1f' }}>
                    <Check size={18} color="#d70015" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>Priority signal preemption for emergency medical, fire, and municipal transit buses</span>
                  </li>
                </ul>
              </div>

              {/* Category 2: Violation detection */}
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
                  Violation detection
                </span>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.96rem', color: '#1d1d1f' }}>
                    <Check size={18} color="#0071e3" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>Comprehensive capture of red-light running, illegal turns, wrong-way driving, and speeding</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.96rem', color: '#0071e3' }}>
                    <Check size={18} color="#0071e3" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>High-accuracy ANPR plate recognition exceeding 99.5% across diverse weather conditions</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.96rem', color: '#0071e3' }}>
                    <Check size={18} color="#0071e3" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>Cryptographically signed 3-photo evidentiary bundles complete with video clips</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Solution Architecture Decks Matching Screenshot */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
            {/* Option 1: Solution with capture units */}
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
                Solution with capture units
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
                    padding: '20px',
                    border: '1px solid rgba(0,0,0,0.06)',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.03)',
                    textAlign: 'center',
                  }}
                >
                  <img
                    src="/images/urban/topology-capture-units-1.jpg"
                    alt="Solution with capture units system topology diagram"
                    style={{
                      width: '100%',
                      maxHeight: '360px',
                      objectFit: 'contain',
                      display: 'block',
                      margin: '0 auto',
                    }}
                  />
                  <div style={{ fontSize: '0.82rem', color: '#86868b', marginTop: '12px' }}>
                    Architecture: Monitor Center ↔ Terminal ↔ Capture Unit & Radar Sensor
                  </div>
                </div>

                {/* Expandable Product List */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {optionAItems.map((item, idx) => {
                    const isExp = expandedOptionA === idx;
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
                          onClick={() => setExpandedOptionA(isExp ? -1 : idx)}
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

            {/* Option 2: Solution with all-in-one traffic cameras */}
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
                Solution with all-in-one traffic cameras
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
                    padding: '20px',
                    border: '1px solid rgba(0,0,0,0.06)',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.03)',
                    textAlign: 'center',
                  }}
                >
                  <img
                    src="/images/urban/topology-capture-units-2.jpg"
                    alt="Solution with all-rounder traffic camera system topology diagram"
                    style={{
                      width: '100%',
                      maxHeight: '360px',
                      objectFit: 'contain',
                      display: 'block',
                      margin: '0 auto',
                    }}
                  />
                  <div style={{ fontSize: '0.82rem', color: '#86868b', marginTop: '12px' }}>
                    Architecture: Monitor Center ↔ Terminal ↔ All-Rounder Smart ITS Camera
                  </div>
                </div>

                {/* Expandable Product List */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {optionBItems.map((item, idx) => {
                    const isExp = expandedOptionB === idx;
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
                          onClick={() => setExpandedOptionB(isExp ? -1 : idx)}
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
        </div>
      </section>

      {/* 6. SECTION 4: RELATED RESOURCES (Brochure PDF Card matching screenshot) */}
      <section
        id="resources"
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
              margin: '0 0 36px',
            }}
          >
            Related Resources
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '24px',
              maxWidth: '860px',
              margin: '0 auto',
            }}
          >
            {[
              {
                title: 'Urban Roadways Solution Brochure',
                type: 'Brochure PDF • 5.8 MB',
                desc: 'Comprehensive architectural guide covering intelligent intersection control, multi-lane radar detection, and automated citation workflows.',
              },
              {
                title: 'Intelligent Traffic Signal & Adaptive Control Whitepaper',
                type: 'Whitepaper PDF • 8.4 MB',
                desc: 'In-depth engineering analysis on green wave arterial synchronization, radar-optical fusion accuracy, and emergency preemption.',
              },
            ].map((res, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '18px',
                  padding: '28px',
                  border: '1px solid rgba(0,0,0,0.06)',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.04)',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '18px',
                  transition: 'transform 0.25s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-3px)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
              >
                <div
                  style={{
                    backgroundColor: 'rgba(215,0,21,0.08)',
                    padding: '12px',
                    borderRadius: '12px',
                    color: '#d70015',
                  }}
                >
                  <FileText size={26} />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#d70015', textTransform: 'uppercase' }}>
                    {res.type}
                  </div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#1d1d1f', margin: '4px 0 8px' }}>
                    {res.title}
                  </h3>
                  <p style={{ fontSize: '0.88rem', color: '#6e6e73', lineHeight: 1.45, margin: '0 0 16px' }}>
                    {res.desc}
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
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      padding: 0,
                    }}
                  >
                    <Download size={14} />
                    <span>Download Resource</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. SECTION 5: YOU MAY ALSO BE INTERESTED IN (Matching screenshot) */}
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
                title: 'Traffic',
                subtitle: 'Metropolitan intelligent transportation systems and road safety ecosystems',
                image: '/images/urban/rel-traffic-management.jpg',
                link: '/solutions',
              },
              {
                title: 'Highways',
                subtitle: 'Free-flow electronic tolling, highway incident detection & over-speed enforcement',
                image: '/images/urban/rel-highways.jpg',
                link: '/solutions',
              },
              {
                title: 'Incident Detection',
                subtitle: 'Automated expressway stopped-vehicle, debris, and congestion detection',
                image: '/images/urban/rel-expressway.jpg',
                link: '/technologies',
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
              Connect directly with our municipal ITS engineers for site surveys, adaptive signal timing simulations, and smart traffic camera pricing.
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
