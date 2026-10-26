import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Compass,
  Shield,
  Truck,
  Eye,
  Camera,
  AlertTriangle,
  FileText,
  Clock,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Maximize2,
  PhoneCall,
  Download,
  Share2,
  Sparkles,
  Layers,
  Activity,
  Gauge,
  Car,
  X
} from 'lucide-react';
import ContactSalesModal from '../components/ContactSalesModal';

// Interactive hotspots for 3D Cutaway Highway & Expressway Overview
const highwayHotspots = [
  {
    id: 'toll-plazas',
    number: '1',
    title: 'Highway Toll Plazas & Gateways',
    subtitle: 'Free-Flow Multi-Lane ANPR & Axle Classification',
    desc: 'High-speed ANPR cameras paired with microwave trigger radar and electronic tolling integration. Captures license plates, vehicle color, model, and calculates axle configurations without requiring vehicles to come to a complete stop.',
    top: '68%',
    left: '42%',
    device: 'High-Speed Toll Gate ANPR Camera (iDS-TCV900-AI)',
    spec: '98%+ plate accuracy at 160 km/h, dual-lens WDR, DarkFighter ultra-low-light sensor, vehicle axle classification',
    benefit: 'Eliminates peak-hour toll barrier bottlenecks and recovers lost revenue from toll evasion.',
  },
  {
    id: 'mainline-lanes',
    number: '2',
    title: 'Mainline Expressways & Overpasses',
    subtitle: 'Radar-Video Fused Speed & Tailgating Enforcement',
    desc: 'Integrated Doppler radar and 4K bullet cameras mounted on overhead highway gantries. Continuously measures individual vehicle speeds across up to 4 lanes, detects safe headway distance violations, and captures high-res driver facial details.',
    top: '38%',
    left: '48%',
    device: 'Radar-Video Fused Speed Enforcement Station (iDS-TCM403-B/16)',
    spec: '0.5 km/h radar accuracy, multi-target simultaneous tracking, automated vehicle classification (light/heavy)',
    benefit: 'Reduces high-speed collision fatalities by over 40% through round-the-clock automated enforcement.',
  },
  {
    id: 'ramps-merges',
    number: '3',
    title: 'Highway Ramps & Interchanges',
    subtitle: 'Illegal Lane Change & Wrong-Way Driving Alarms',
    desc: 'Wide-angle AI cameras covering highway on-ramps, off-ramps, and cloverleaf merges. Immediately alerts the highway operations center when vehicles perform illegal U-turns, reverse along exit slip roads, or travel in the wrong direction.',
    top: '32%',
    left: '54%',
    device: 'TandemVu Dual-Channel 4K Ramp Monitoring PTZ (DS-2SE8C442MWX)',
    spec: 'Panoramic wide channel + 42x optical zoom detail channel, wrong-way vehicle AI classifier, strobe deterrence',
    benefit: 'Provides instant alerts to emergency dispatchers within 2 seconds of a wrong-way driver entering the highway.',
  },
  {
    id: 'hard-shoulders',
    number: '4',
    title: 'Emergency Lanes & Hard Shoulders',
    subtitle: 'Illegal Shoulder Occupancy & Stopped Vehicle Detection',
    desc: 'Continuous highway perimeter surveillance cameras monitoring emergency breakdown lanes. Detects unauthorized parking, illegal overtaking along hard shoulders, and stranded motorists in need of immediate roadside assistance.',
    top: '52%',
    left: '52%',
    device: 'DeepinView Perimeter Traffic Bullet (iDS-2CD7A46G0/P-IZHS)',
    spec: 'Automatic Incident Detection (AID), stopped vehicle alarm, debris on road detection, slow vehicle detection',
    benefit: 'Keeps emergency shoulders clear for ambulances and police while expediting recovery of broken-down vehicles.',
  },
  {
    id: 'tunnels',
    number: '5',
    title: 'Highway Tunnels & Underpasses',
    subtitle: 'Bi-Spectrum Thermal Fire & Smoke Alarm',
    desc: 'Long-range bi-spectrum thermal and optical cameras installed through enclosed highway tunnel tubes. Detects vehicle overheated brakes, fire smoke plumes, stopped traffic congestion, and pedestrian foot intrusions in low-visibility environments.',
    top: '35%',
    left: '64%',
    device: 'Tunnel Bi-Spectrum Thermal & Optical Bullet (DS-2TD2636-15)',
    spec: 'High-sensitivity thermal radiometric sensor, optical defogging, toxic smoke penetration, IP67 anti-corrosion casing',
    benefit: 'Enables instant tunnel evacuation ventilation control and fire suppression linkage before smoke asphyxiation occurs.',
  },
];

export default function HighwaysSolution() {
  const [activeHotspot, setActiveHotspot] = useState(highwayHotspots[0]);
  const [showSalesModal, setShowSalesModal] = useState(false);
  const [activeNav, setActiveNav] = useState('overview');
  const [lightboxImage, setLightboxImage] = useState(null);
  const [copiedShare, setCopiedShare] = useState(false);
  const [showCaseStudyModal, setShowCaseStudyModal] = useState(false);

  // Accordion states for Topology 1 & Topology 2
  const [openAccordions1, setOpenAccordions1] = useState({
    tollCamera: true,
    ptz: false,
    thermal: false,
    radar: false,
  });

  const [openAccordions2, setOpenAccordions2] = useState({
    speedRadar: true,
    checkpoint: false,
    software: false,
  });

  const toggleAccordion1 = (key) => {
    setOpenAccordions1((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleAccordion2 = (key) => {
    setOpenAccordions2((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // Subnav scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['overview', 'challenges', 'what-we-offer', 'success-stories', 'resources', 'interested'];
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
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -110;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedShare(true);
    setTimeout(() => setCopiedShare(false), 2500);
  };

  return (
    <div
      style={{
        backgroundColor: '#ffffff',
        minHeight: '100vh',
        paddingTop: '64px',
        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Segoe UI", Roboto, sans-serif',
        color: '#1d1d1f',
      }}
    >
      {/* 1. HERO SECTION: Panoramic Elevated Highway Banner with Deep Blue Glow Overlay */}
      <section
        style={{
          position: 'relative',
          width: '100%',
          minHeight: '440px',
          height: 'clamp(440px, 42vw, 540px)',
          overflow: 'hidden',
          backgroundColor: '#0a192f',
        }}
      >
        {/* Real High-Resolution Highway Hero Image */}
        <img
          src="/images/highways/highways_hero.jpg"
          alt="Highways System Solution"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 45%',
            filter: 'brightness(0.95)',
          }}
        />

        {/* Deep Blue Circular Accent Glow Overlay (matches screenshot) */}
        <div
          style={{
            position: 'absolute',
            top: '-20%',
            left: '-12%',
            width: '65vw',
            height: '140%',
            borderRadius: '50%',
            background: 'radial-gradient(ellipse at center, rgba(30, 58, 138, 0.82) 0%, rgba(30, 64, 175, 0.6) 45%, rgba(29, 78, 216, 0.25) 75%, transparent 100%)',
            pointerEvents: 'none',
            mixBlendMode: 'screen',
          }}
        />

        {/* Linear Dark Overlay for High Contrast Typography */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(90deg, rgba(10, 25, 47, 0.65) 0%, rgba(10, 25, 47, 0.35) 50%, rgba(10, 25, 47, 0.12) 100%)',
            pointerEvents: 'none',
          }}
        />

        {/* Hero Content Container */}
        <div
          style={{
            position: 'relative',
            zIndex: 10,
            maxWidth: '1360px',
            margin: '0 auto',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '0 32px',
          }}
        >
          {/* Badge: Solutions by Scenario */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 14px',
              borderRadius: '20px',
              backgroundColor: 'rgba(255, 255, 255, 0.18)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.35)',
              color: '#ffffff',
              fontSize: '13px',
              fontWeight: 600,
              letterSpacing: '0.4px',
              width: 'fit-content',
              marginBottom: '16px',
            }}
          >
            <Compass size={15} color="#93c5fd" />
            <span>Solutions by Scenario</span>
          </div>

          {/* Title */}
          <h1
            style={{
              fontSize: 'clamp(36px, 4.5vw, 56px)',
              fontWeight: 800,
              color: '#ffffff',
              lineHeight: 1.12,
              margin: '0 0 14px 0',
              letterSpacing: '-0.02em',
              textShadow: '0 3px 18px rgba(0, 0, 0, 0.55)',
            }}
          >
            Highways
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: 'clamp(17px, 2vw, 22px)',
              fontWeight: 400,
              color: 'rgba(255, 255, 255, 0.94)',
              margin: 0,
              maxWidth: '650px',
              lineHeight: 1.45,
              textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
            }}
          >
            Intelligent expressways with 24/7 incident response
          </p>
        </div>
      </section>

      {/* 2. SUB-BAR: Breadcrumb & Utility Actions */}
      <div
        style={{
          backgroundColor: '#fafafc',
          borderBottom: '1px solid #e5e7eb',
          fontSize: '13px',
          color: '#6b7280',
        }}
      >
        <div
          style={{
            maxWidth: '1360px',
            margin: '0 auto',
            padding: '12px 32px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          {/* Breadcrumb path */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Link to="/" style={{ color: '#6b7280', textDecoration: 'none' }}>Coloron</Link>
            <span>/</span>
            <Link to="/solutions" style={{ color: '#6b7280', textDecoration: 'none' }}>Solutions</Link>
            <span>/</span>
            <Link to="/solutions" style={{ color: '#6b7280', textDecoration: 'none' }}>Solutions by Scenario</Link>
            <span>/</span>
            <span style={{ color: '#111827', fontWeight: 600 }}>Highway System Solution</span>
          </div>

          {/* Action buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <button
              onClick={() => setShowSalesModal(true)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                background: 'none',
                border: 'none',
                color: '#2563eb',
                fontWeight: 600,
                fontSize: '13px',
                cursor: 'pointer',
                padding: '4px 8px',
                borderRadius: '6px',
                transition: 'background 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#eff6ff')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
            >
              <PhoneCall size={14} />
              <span>Contact Specialist</span>
            </button>

            <button
              onClick={handleShare}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                background: 'none',
                border: 'none',
                color: '#4b5563',
                fontSize: '13px',
                cursor: 'pointer',
                padding: '4px 8px',
                borderRadius: '6px',
              }}
              title="Share this solution"
            >
              <Share2 size={14} />
              <span>{copiedShare ? 'Copied Link!' : 'Share'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* 3. STICKY SUB-NAVIGATION */}
      <nav
        style={{
          position: 'sticky',
          top: '64px',
          zIndex: 40,
          backgroundColor: '#ffffff',
          borderBottom: '1px solid #e5e7eb',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.03)',
        }}
      >
        <div
          style={{
            maxWidth: '1360px',
            margin: '0 auto',
            padding: '0 32px',
            display: 'flex',
            gap: '32px',
            overflowX: 'auto',
            whiteSpace: 'nowrap',
          }}
        >
          {[
            { id: 'overview', label: 'Solution overview' },
            { id: 'challenges', label: 'Highway toll stations' },
            { id: 'what-we-offer', label: 'What we offer' },
            { id: 'success-stories', label: 'Success stories' },
            { id: 'resources', label: 'Related Resources' },
            { id: 'interested', label: 'You may also be interested in' },
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
                  fontSize: '15px',
                  fontWeight: isActive ? 600 : 400,
                  color: isActive ? '#2563eb' : '#4b5563',
                  borderBottom: isActive ? '2px solid #2563eb' : '2px solid transparent',
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

      {/* 4. SECTION 1: SOLUTION OVERVIEW */}
      <section
        id="overview"
        style={{
          padding: '72px 32px 80px',
          maxWidth: '1360px',
          margin: '0 auto',
        }}
      >
        {/* Title & Description */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <h2
            style={{
              fontSize: '32px',
              fontWeight: 700,
              color: '#111827',
              margin: '0 0 16px 0',
              letterSpacing: '-0.01em',
            }}
          >
            Solution overview
          </h2>
          <div
            style={{
              maxWidth: '940px',
              margin: '0 auto',
              fontSize: '15px',
              lineHeight: 1.75,
              color: '#4b5563',
              textAlign: 'left',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
            }}
          >
            <p style={{ margin: 0 }}>
              Expressways connect cities and regions, accommodating continuous high-speed and high-density traffic. Managing vehicle throughput, clearing incidents, and enforcing speed limits require specialized intelligent transportation systems.
            </p>
            <p style={{ margin: 0 }}>
              Coloron's Highway Solution delivers all-weather ITS infrastructure, encompassing high-speed ANPR toll collection, radar-video fused speed enforcement, automatic traffic incident detection (AID), and cloud-coordinated command centers to guarantee safety and mobility.
            </p>
          </div>
        </div>

        {/* 3D Cutaway Highway Isometric Graphic Card */}
        <div
          style={{
            position: 'relative',
            marginTop: '36px',
            borderRadius: '16px',
            overflow: 'hidden',
            backgroundColor: '#f8fafc',
            border: '1px solid #e2e8f0',
            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.05)',
          }}
        >
          {/* Main 3D Model Graphic */}
          <div style={{ position: 'relative', width: '100%', minHeight: '440px', backgroundColor: '#ffffff' }}>
            <img
              src="/images/highways/highways_3d_map.jpg"
              alt="Highway & Expressway 3D Architecture Map"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                maxHeight: '660px',
                objectFit: 'contain',
                margin: '0 auto',
              }}
            />

            {/* Interactive Pulse Hotspots */}
            {highwayHotspots.map((spot) => {
              const isSelected = activeHotspot.id === spot.id;
              return (
                <button
                  key={spot.id}
                  onClick={() => setActiveHotspot(spot)}
                  style={{
                    position: 'absolute',
                    top: spot.top,
                    left: spot.left,
                    transform: 'translate(-50%, -50%)',
                    width: isSelected ? '38px' : '32px',
                    height: isSelected ? '38px' : '32px',
                    borderRadius: '50%',
                    backgroundColor: isSelected ? '#dc2626' : '#ef4444',
                    color: '#ffffff',
                    border: '3px solid #ffffff',
                    boxShadow: isSelected
                      ? '0 0 0 6px rgba(220, 38, 38, 0.35), 0 4px 12px rgba(0,0,0,0.3)'
                      : '0 0 0 3px rgba(239, 68, 68, 0.25), 0 2px 8px rgba(0,0,0,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700,
                    fontSize: isSelected ? '15px' : '13px',
                    cursor: 'pointer',
                    zIndex: 20,
                    transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                  title={spot.title}
                >
                  {spot.number}
                </button>
              );
            })}

            {/* Zoom / Lightbox Button */}
            <button
              onClick={() => setLightboxImage('/images/highways/highways_3d_map.jpg')}
              style={{
                position: 'absolute',
                bottom: '16px',
                right: '16px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                backgroundColor: 'rgba(255, 255, 255, 0.92)',
                backdropFilter: 'blur(8px)',
                border: '1px solid #cbd5e1',
                borderRadius: '8px',
                padding: '8px 14px',
                fontSize: '12px',
                fontWeight: 600,
                color: '#334155',
                cursor: 'pointer',
                boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
              }}
            >
              <Maximize2 size={14} />
              <span>Inspect 3D Layout</span>
            </button>
          </div>

          {/* Hotspot Info Panel */}
          <div
            style={{
              padding: '24px 32px',
              backgroundColor: '#f8fafc',
              borderTop: '1px solid #e2e8f0',
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
            }}
          >
            {/* Zone Selector Pills */}
            <div
              style={{
                display: 'flex',
                gap: '8px',
                flexWrap: 'wrap',
                marginBottom: '4px',
              }}
            >
              {highwayHotspots.map((spot) => {
                const isSelected = activeHotspot.id === spot.id;
                return (
                  <button
                    key={spot.id}
                    onClick={() => setActiveHotspot(spot)}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '7px 16px',
                      borderRadius: '24px',
                      backgroundColor: isSelected ? '#2563eb' : '#ffffff',
                      color: isSelected ? '#ffffff' : '#475569',
                      border: isSelected ? '1px solid #2563eb' : '1px solid #cbd5e1',
                      fontSize: '13px',
                      fontWeight: isSelected ? 600 : 500,
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                    }}
                  >
                    <span
                      style={{
                        width: '18px',
                        height: '18px',
                        borderRadius: '50%',
                        backgroundColor: isSelected ? '#ffffff' : '#ef4444',
                        color: isSelected ? '#2563eb' : '#ffffff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '11px',
                        fontWeight: 700,
                      }}
                    >
                      {spot.number}
                    </span>
                    <span>{spot.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Selected Zone Specs Card */}
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '12px',
                padding: '20px 24px',
                border: '1px solid #e2e8f0',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '20px',
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                  <span
                    style={{
                      padding: '2px 8px',
                      borderRadius: '4px',
                      backgroundColor: '#dbeafe',
                      color: '#1e40af',
                      fontSize: '11px',
                      fontWeight: 700,
                    }}
                  >
                    SEGMENT {activeHotspot.number}
                  </span>
                  <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#0f172a', margin: 0 }}>
                    {activeHotspot.title}
                  </h3>
                </div>
                <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#475569', margin: '0 0 10px 0' }}>
                  {activeHotspot.desc}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: '#16a34a' }}>
                  <CheckCircle2 size={16} />
                  <span style={{ fontWeight: 600 }}>Highway Mobility Impact: {activeHotspot.benefit}</span>
                </div>
              </div>

              <div
                style={{
                  borderLeft: '1px solid #f1f5f9',
                  paddingLeft: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  gap: '8px',
                }}
              >
                <div>
                  <span style={{ fontSize: '11px', color: '#64748b', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    Recommended Core Hardware
                  </span>
                  <div style={{ fontSize: '14px', fontWeight: 600, color: '#0f172a', marginTop: '2px' }}>
                    {activeHotspot.device}
                  </div>
                </div>
                <div>
                  <span style={{ fontSize: '11px', color: '#64748b', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    Key Performance Specs
                  </span>
                  <div style={{ fontSize: '13px', color: '#475569', marginTop: '2px', lineHeight: 1.4 }}>
                    {activeHotspot.spec}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SECTION 2: HIGHWAY TOLL STATIONS (CHALLENGES) */}
      <section
        id="challenges"
        style={{
          padding: '72px 32px 80px',
          backgroundColor: '#fafafc',
          borderTop: '1px solid #f0f0f2',
          borderBottom: '1px solid #f0f0f2',
        }}
      >
        <div style={{ maxWidth: '1360px', margin: '0 auto' }}>
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2
              style={{
                fontSize: '32px',
                fontWeight: 700,
                color: '#111827',
                margin: '0 0 10px 0',
              }}
            >
              Highway toll stations
            </h2>
            <div
              style={{
                display: 'inline-block',
                fontSize: '16px',
                fontWeight: 600,
                color: '#2563eb',
                borderBottom: '2px solid #2563eb',
                paddingBottom: '4px',
              }}
            >
              Challenges
            </div>
            <p
              style={{
                fontSize: '14px',
                color: '#6b7280',
                maxWidth: '680px',
                margin: '14px auto 0',
                lineHeight: 1.6,
              }}
            >
              Toll plazas are notorious bottlenecks where peak-hour vehicle queues cause severe congestion, and manual cash/ticket handling reduces throughput.
            </p>
          </div>

          {/* Two Side-by-Side Challenge Cards matching screenshot */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: '32px',
              maxWidth: '1080px',
              margin: '0 auto',
            }}
          >
            {/* Challenge 1: Busy highway toll station */}
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '12px',
                overflow: 'hidden',
                border: '1px solid #e5e7eb',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.04)';
              }}
            >
              <div style={{ position: 'relative', height: '240px', overflow: 'hidden', backgroundColor: '#111827' }}>
                <img
                  src="/images/highways/challenge_busy_toll.png"
                  alt="Busy highway toll station"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </div>
              <div style={{ padding: '24px 28px' }}>
                <h3
                  style={{
                    fontSize: '18px',
                    fontWeight: 700,
                    color: '#111827',
                    margin: '0 0 10px 0',
                  }}
                >
                  Busy highway toll station
                </h3>
                <p
                  style={{
                    fontSize: '14px',
                    color: '#4b5563',
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  Peak-hour holiday travel and commuter surges flood toll lanes, causing severe traffic jams that extend several kilometers back onto the highway mainline.
                </p>
              </div>
            </div>

            {/* Challenge 2: Low-efficiency toll station management */}
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '12px',
                overflow: 'hidden',
                border: '1px solid #e5e7eb',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.04)';
              }}
            >
              <div style={{ position: 'relative', height: '240px', overflow: 'hidden', backgroundColor: '#111827' }}>
                <img
                  src="/images/highways/challenge_low_efficiency.png"
                  alt="Low-efficiency toll station management"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </div>
              <div style={{ padding: '24px 28px' }}>
                <h3
                  style={{
                    fontSize: '18px',
                    fontWeight: 700,
                    color: '#111827',
                    margin: '0 0 10px 0',
                  }}
                >
                  Low-efficiency toll station management
                </h3>
                <p
                  style={{
                    fontSize: '14px',
                    color: '#4b5563',
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  Manual toll collection, paper ticket issuing, and slow vehicle classification cause delays of 15 to 30 seconds per vehicle at the barrier.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SECTION 3: WHAT WE OFFER */}
      <section
        id="what-we-offer"
        style={{
          padding: '80px 32px 90px',
          maxWidth: '1360px',
          margin: '0 auto',
        }}
      >
        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <h2
            style={{
              fontSize: '32px',
              fontWeight: 700,
              color: '#111827',
              margin: '0 0 12px 0',
            }}
          >
            What we offer
          </h2>
          <p
            style={{
              fontSize: '15px',
              color: '#4b5563',
              maxWidth: '820px',
              margin: '0 auto',
              lineHeight: 1.6,
            }}
          >
            Toll lanes and mainline expressways achieve maximum efficiency through radar-fused ANPR, multi-lane free-flow electronic tolling, and intelligent vehicle classification.
          </p>
        </div>

        {/* Top: Multi-lane Flow Showcase (Image Left + Benefits/Features Right) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: '40px',
            alignItems: 'center',
            marginBottom: '72px',
          }}
        >
          {/* Main Highway Traffic Image with Lightbox */}
          <div
            style={{
              position: 'relative',
              borderRadius: '14px',
              overflow: 'hidden',
              boxShadow: '0 8px 28px rgba(0, 0, 0, 0.08)',
              border: '1px solid #e5e7eb',
              backgroundColor: '#f9fafb',
            }}
          >
            <img
              src="/images/highways/offer_vci.jpg"
              alt="Highway Multi-Lane Vehicle Flow & Tolling"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                maxHeight: '440px',
                objectFit: 'cover',
              }}
            />
            <button
              onClick={() => setLightboxImage('/images/highways/offer_vci.jpg')}
              style={{
                position: 'absolute',
                top: '14px',
                right: '14px',
                backgroundColor: 'rgba(255, 255, 255, 0.88)',
                backdropFilter: 'blur(6px)',
                border: 'none',
                borderRadius: '8px',
                padding: '6px 10px',
                fontSize: '12px',
                fontWeight: 600,
                color: '#1f2937',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
              }}
            >
              <Maximize2 size={13} />
              <span>Zoom</span>
            </button>
          </div>

          {/* Benefits & Features Bullet Lists */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            {/* Benefits Block */}
            <div>
              <h3
                style={{
                  fontSize: '18px',
                  fontWeight: 700,
                  color: '#111827',
                  margin: '0 0 14px 0',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <span
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: '#2563eb',
                  }}
                />
                Benefits
              </h3>
              <ul
                style={{
                  margin: 0,
                  paddingLeft: '20px',
                  fontSize: '14px',
                  color: '#4b5563',
                  lineHeight: 1.8,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px',
                }}
              >
                <li>Fast vehicle passage without stopping for toll collection.</li>
                <li>Automated vehicle classification by axle, height, and weight.</li>
                <li>Instant blacklist alerts on stolen vehicles and toll evasion.</li>
              </ul>
            </div>

            {/* Features Block */}
            <div>
              <h3
                style={{
                  fontSize: '18px',
                  fontWeight: 700,
                  color: '#111827',
                  margin: '0 0 14px 0',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <span
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: '#2563eb',
                  }}
                />
                Features
              </h3>
              <ul
                style={{
                  margin: 0,
                  paddingLeft: '20px',
                  fontSize: '14px',
                  color: '#4b5563',
                  lineHeight: 1.8,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px',
                }}
              >
                <li>98%+ ANPR recognition accuracy at speeds up to 160 km/h.</li>
                <li>Radar-assisted vehicle capture ensuring zero missed plates in dense traffic.</li>
                <li>Dual-lens DarkFighter color capture under low-light night conditions.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Middle: Architecture 1 (Toll Gate Solution) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: '40px',
            alignItems: 'start',
            backgroundColor: '#f8fafc',
            borderRadius: '16px',
            padding: '36px',
            border: '1px solid #e2e8f0',
            marginBottom: '40px',
          }}
        >
          {/* Topology 1 Graphic */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
              <div>
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#0f172a', margin: 0 }}>
                  Toll Gate System Architecture
                </h3>
                <span style={{ fontSize: '13px', color: '#64748b' }}>
                  Integrated ANPR, Server &amp; Radar Interconnect
                </span>
              </div>
              <button
                onClick={() => setLightboxImage('/images/highways/topo_toll_1.jpg')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  backgroundColor: '#ffffff',
                  border: '1px solid #cbd5e1',
                  borderRadius: '6px',
                  padding: '6px 12px',
                  fontSize: '12px',
                  fontWeight: 600,
                  color: '#334155',
                  cursor: 'pointer',
                }}
              >
                <Maximize2 size={13} />
                <span>Full Diagram</span>
              </button>
            </div>

            <div
              style={{
                position: 'relative',
                borderRadius: '12px',
                overflow: 'hidden',
                backgroundColor: '#ffffff',
                border: '1px solid #cbd5e1',
                padding: '16px',
                cursor: 'pointer',
              }}
              onClick={() => setLightboxImage('/images/highways/topo_toll_1.jpg')}
            >
              <img
                src="/images/highways/topo_toll_1.jpg"
                alt="Toll Gate System Topology Diagram"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  borderRadius: '8px',
                }}
              />
            </div>
          </div>

          {/* Accordions 1 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {/* Accordion 1: Toll Gate Camera */}
            <div style={{ backgroundColor: '#ffffff', borderRadius: '10px', border: '1px solid #e2e8f0', overflow: 'hidden' }}>
              <button
                onClick={() => toggleAccordion1('tollCamera')}
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '16px 20px',
                  backgroundColor: '#ffffff',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                }}
              >
                <span style={{ fontSize: '15px', fontWeight: 600, color: '#0f172a' }}>Toll Gate Camera</span>
                {openAccordions1.tollCamera ? <ChevronUp size={18} color="#2563eb" /> : <ChevronDown size={18} color="#94a3b8" />}
              </button>
              {openAccordions1.tollCamera && (
                <div style={{ padding: '0 20px 18px', borderTop: '1px solid #f1f5f9', fontSize: '13px', color: '#475569', lineHeight: 1.7 }}>
                  <p style={{ margin: '10px 0 6px 0', fontWeight: 600, color: '#0f172a' }}>iDS-TCV900-AI Series</p>
                  <ul style={{ margin: 0, paddingLeft: '18px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <li>Ultra-high 9MP resolution capturing full lane panorama plus front plate and driver face.</li>
                    <li>Built-in polarized flash trigger filter eliminates windshield glare under direct sunlight.</li>
                  </ul>
                </div>
              )}
            </div>

            {/* Accordion 2: PTZ Camera */}
            <div style={{ backgroundColor: '#ffffff', borderRadius: '10px', border: '1px solid #e2e8f0', overflow: 'hidden' }}>
              <button
                onClick={() => toggleAccordion1('ptz')}
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '16px 20px',
                  backgroundColor: '#ffffff',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                }}
              >
                <span style={{ fontSize: '15px', fontWeight: 600, color: '#0f172a' }}>PTZ Camera</span>
                {openAccordions1.ptz ? <ChevronUp size={18} color="#2563eb" /> : <ChevronDown size={18} color="#94a3b8" />}
              </button>
              {openAccordions1.ptz && (
                <div style={{ padding: '0 20px 18px', borderTop: '1px solid #f1f5f9', fontSize: '13px', color: '#475569', lineHeight: 1.7 }}>
                  <p style={{ margin: '10px 0 6px 0', fontWeight: 600, color: '#0f172a' }}>TandemVu Dual-Channel 42x PTZ</p>
                  <ul style={{ margin: 0, paddingLeft: '18px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <li>Top panoramic lens maintains unbroken toll plaza view while lower PTZ zooms in on specific incidents.</li>
                  </ul>
                </div>
              )}
            </div>

            {/* Accordion 3: Thermal Camera */}
            <div style={{ backgroundColor: '#ffffff', borderRadius: '10px', border: '1px solid #e2e8f0', overflow: 'hidden' }}>
              <button
                onClick={() => toggleAccordion1('thermal')}
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '16px 20px',
                  backgroundColor: '#ffffff',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                }}
              >
                <span style={{ fontSize: '15px', fontWeight: 600, color: '#0f172a' }}>Thermal Camera</span>
                {openAccordions1.thermal ? <ChevronUp size={18} color="#2563eb" /> : <ChevronDown size={18} color="#94a3b8" />}
              </button>
              {openAccordions1.thermal && (
                <div style={{ padding: '0 20px 18px', borderTop: '1px solid #f1f5f9', fontSize: '13px', color: '#475569', lineHeight: 1.7 }}>
                  <p style={{ margin: '10px 0 6px 0', fontWeight: 600, color: '#0f172a' }}>Bi-Spectrum Thermal Bullet</p>
                  <ul style={{ margin: 0, paddingLeft: '18px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <li>Detects truck brake and tire overheating before vehicles enter tunnels or high-density zones.</li>
                  </ul>
                </div>
              )}
            </div>

            {/* Accordion 4: Radar & Sensors */}
            <div style={{ backgroundColor: '#ffffff', borderRadius: '10px', border: '1px solid #e2e8f0', overflow: 'hidden' }}>
              <button
                onClick={() => toggleAccordion1('radar')}
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '16px 20px',
                  backgroundColor: '#ffffff',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                }}
              >
                <span style={{ fontSize: '15px', fontWeight: 600, color: '#0f172a' }}>Radar &amp; Sensors</span>
                {openAccordions1.radar ? <ChevronUp size={18} color="#2563eb" /> : <ChevronDown size={18} color="#94a3b8" />}
              </button>
              {openAccordions1.radar && (
                <div style={{ padding: '0 20px 18px', borderTop: '1px solid #f1f5f9', fontSize: '13px', color: '#475569', lineHeight: 1.7 }}>
                  <p style={{ margin: '10px 0 6px 0', fontWeight: 600, color: '#0f172a' }}>Anti-Fall Microwave Radar</p>
                  <ul style={{ margin: 0, paddingLeft: '18px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <li>Prevents toll barrier boom from falling onto vehicle roofs or following motorcycles.</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Lower: Architecture 2 (Checkpoint & Speed Enforcement) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: '40px',
            alignItems: 'start',
            backgroundColor: '#f8fafc',
            borderRadius: '16px',
            padding: '36px',
            border: '1px solid #e2e8f0',
          }}
        >
          {/* Topology 2 Graphic */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
              <div>
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#0f172a', margin: 0 }}>
                  Checkpoint &amp; Speed Measurement Architecture
                </h3>
                <span style={{ fontSize: '13px', color: '#64748b' }}>
                  Multi-Lane Doppler Radar &amp; Optical Checkpoint Linkage
                </span>
              </div>
              <button
                onClick={() => setLightboxImage('/images/highways/topo_toll_2.jpg')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  backgroundColor: '#ffffff',
                  border: '1px solid #cbd5e1',
                  borderRadius: '6px',
                  padding: '6px 12px',
                  fontSize: '12px',
                  fontWeight: 600,
                  color: '#334155',
                  cursor: 'pointer',
                }}
              >
                <Maximize2 size={13} />
                <span>Full Diagram</span>
              </button>
            </div>

            <div
              style={{
                position: 'relative',
                borderRadius: '12px',
                overflow: 'hidden',
                backgroundColor: '#ffffff',
                border: '1px solid #cbd5e1',
                padding: '16px',
                cursor: 'pointer',
              }}
              onClick={() => setLightboxImage('/images/highways/topo_toll_2.jpg')}
            >
              <img
                src="/images/highways/topo_toll_2.jpg"
                alt="Checkpoint Speed Measurement Topology Diagram"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  borderRadius: '8px',
                }}
              />
            </div>
          </div>

          {/* Accordions 2 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {/* Accordion 1: Speed Measurement Radar */}
            <div style={{ backgroundColor: '#ffffff', borderRadius: '10px', border: '1px solid #e2e8f0', overflow: 'hidden' }}>
              <button
                onClick={() => toggleAccordion2('speedRadar')}
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '16px 20px',
                  backgroundColor: '#ffffff',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                }}
              >
                <span style={{ fontSize: '15px', fontWeight: 600, color: '#0f172a' }}>Speed Measurement Radar</span>
                {openAccordions2.speedRadar ? <ChevronUp size={18} color="#2563eb" /> : <ChevronDown size={18} color="#94a3b8" />}
              </button>
              {openAccordions2.speedRadar && (
                <div style={{ padding: '0 20px 18px', borderTop: '1px solid #f1f5f9', fontSize: '13px', color: '#475569', lineHeight: 1.7 }}>
                  <p style={{ margin: '10px 0 6px 0', fontWeight: 600, color: '#0f172a' }}>Multi-Lane Doppler Speed Radar</p>
                  <ul style={{ margin: 0, paddingLeft: '18px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <li>Simultaneously tracks speed, trajectory, and lane position of up to 128 vehicles.</li>
                    <li>Operates flawlessly in heavy rain, fog, and nighttime conditions.</li>
                  </ul>
                </div>
              )}
            </div>

            {/* Accordion 2: All-in-one Checkpoint Camera */}
            <div style={{ backgroundColor: '#ffffff', borderRadius: '10px', border: '1px solid #e2e8f0', overflow: 'hidden' }}>
              <button
                onClick={() => toggleAccordion2('checkpoint')}
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '16px 20px',
                  backgroundColor: '#ffffff',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                }}
              >
                <span style={{ fontSize: '15px', fontWeight: 600, color: '#0f172a' }}>All-in-one Checkpoint Camera</span>
                {openAccordions2.checkpoint ? <ChevronUp size={18} color="#2563eb" /> : <ChevronDown size={18} color="#94a3b8" />}
              </button>
              {openAccordions2.checkpoint && (
                <div style={{ padding: '0 20px 18px', borderTop: '1px solid #f1f5f9', fontSize: '13px', color: '#475569', lineHeight: 1.7 }}>
                  <p style={{ margin: '10px 0 6px 0', fontWeight: 600, color: '#0f172a' }}>DeepinView 4K Checkpoint Station</p>
                  <ul style={{ margin: 0, paddingLeft: '18px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <li>Integrates camera, lens, flash lighting, and AI edge processor into an IP67 housing.</li>
                  </ul>
                </div>
              )}
            </div>

            {/* Accordion 3: Central Software */}
            <div style={{ backgroundColor: '#ffffff', borderRadius: '10px', border: '1px solid #e2e8f0', overflow: 'hidden' }}>
              <button
                onClick={() => toggleAccordion2('software')}
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '16px 20px',
                  backgroundColor: '#ffffff',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                }}
              >
                <span style={{ fontSize: '15px', fontWeight: 600, color: '#0f172a' }}>Central Software</span>
                {openAccordions2.software ? <ChevronUp size={18} color="#2563eb" /> : <ChevronDown size={18} color="#94a3b8" />}
              </button>
              {openAccordions2.software && (
                <div style={{ padding: '0 20px 18px', borderTop: '1px solid #f1f5f9', fontSize: '13px', color: '#475569', lineHeight: 1.7 }}>
                  <p style={{ margin: '10px 0 6px 0', fontWeight: 600, color: '#0f172a' }}>Coloron HikCentral Highway Edition</p>
                  <ul style={{ margin: 0, paddingLeft: '18px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <li>GIS map-based incident dispatch, speed violation evidence chain export, and traffic flow heatmaps.</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 7. SECTION 4: SUCCESS STORIES */}
      <section
        id="success-stories"
        style={{
          padding: '80px 32px',
          backgroundColor: '#fafafc',
          borderTop: '1px solid #f0f0f2',
          borderBottom: '1px solid #f0f0f2',
        }}
      >
        <div style={{ maxWidth: '1360px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '44px' }}>
            <h2
              style={{
                fontSize: '32px',
                fontWeight: 700,
                color: '#111827',
                margin: 0,
              }}
            >
              Success stories
            </h2>
          </div>

          {/* Featured Case Study Card matching screenshot */}
          <div
            style={{
              maxWidth: '1080px',
              margin: '0 auto',
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              overflow: 'hidden',
              border: '1px solid #e5e7eb',
              boxShadow: '0 6px 24px rgba(0, 0, 0, 0.05)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              alignItems: 'stretch',
            }}
          >
            {/* Image side */}
            <div style={{ position: 'relative', minHeight: '320px', backgroundColor: '#111827' }}>
              <img
                src="/images/highways/story_seapoint.jpg"
                alt="Sea Point highway deployment"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </div>

            {/* Content side */}
            <div
              style={{
                padding: '40px 36px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <div
                style={{
                  fontSize: '12px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  color: '#2563eb',
                  letterSpacing: '0.8px',
                  marginBottom: '10px',
                }}
              >
                Intelligent Traffic • Case Study
              </div>

              <h3
                style={{
                  fontSize: '22px',
                  fontWeight: 700,
                  color: '#111827',
                  lineHeight: 1.35,
                  margin: '0 0 16px 0',
                }}
              >
                Sea Point sees a two-thirds decrease in illicit incidents following the deployment of Hikvision cameras
              </h3>

              <p
                style={{
                  fontSize: '14px',
                  color: '#4b5563',
                  lineHeight: 1.7,
                  margin: '0 0 24px 0',
                }}
              >
                By implementing an integrated network of ANPR traffic cameras, overview PTZs, and central command dispatch along coastal expressways, local authorities achieved a 66% drop in vehicle-related incidents and expedited emergency response times.
              </p>

              <div>
                <button
                  onClick={() => setShowCaseStudyModal(true)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    backgroundColor: '#2563eb',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '10px 20px',
                    fontSize: '14px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'background 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#1d4ed8')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#2563eb')}
                >
                  <span>Read Full Case Study</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. SECTION 5: RELATED RESOURCES */}
      <section
        id="resources"
        style={{
          padding: '80px 32px',
          maxWidth: '1360px',
          margin: '0 auto',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2
            style={{
              fontSize: '32px',
              fontWeight: 700,
              color: '#111827',
              margin: 0,
            }}
          >
            Related Resources
          </h2>
        </div>

        {/* Brochure Download Card matching screenshot */}
        <div
          style={{
            maxWidth: '840px',
            margin: '0 auto',
            backgroundColor: '#f8fafc',
            borderRadius: '12px',
            padding: '28px 36px',
            border: '1px solid #e2e8f0',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '24px',
            flexWrap: 'wrap',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '12px',
                backgroundColor: '#dbeafe',
                color: '#2563eb',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <FileText size={28} />
            </div>
            <div>
              <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#111827', margin: '0 0 4px 0' }}>
                Coloron Highway Solution Guide
              </h3>
              <p style={{ fontSize: '13px', color: '#6b7280', margin: 0 }}>
                PDF • 9.8 MB • Expressways, toll gates, AID tunnels &amp; speed radar architecture
              </p>
            </div>
          </div>

          <button
            onClick={() => setShowSalesModal(true)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: '#2563eb',
              color: '#ffffff',
              border: 'none',
              borderRadius: '8px',
              padding: '12px 24px',
              fontSize: '14px',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'background 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#1d4ed8')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#2563eb')}
          >
            <Download size={16} />
            <span>Download PDF</span>
          </button>
        </div>
      </section>

      {/* 9. SECTION 6: YOU MAY ALSO BE INTERESTED IN */}
      <section
        id="interested"
        style={{
          padding: '80px 32px 90px',
          maxWidth: '1360px',
          margin: '0 auto',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '44px' }}>
          <h2
            style={{
              fontSize: '32px',
              fontWeight: 700,
              color: '#111827',
              margin: 0,
            }}
          >
            You may also be interested in
          </h2>
        </div>

        {/* 3 Visual Cards matching screenshot */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '28px',
          }}
        >
          {/* Card 1: Traffic */}
          <div
            style={{
              position: 'relative',
              borderRadius: '12px',
              overflow: 'hidden',
              height: '320px',
              backgroundColor: '#111827',
              cursor: 'pointer',
              boxShadow: '0 6px 20px rgba(0,0,0,0.06)',
              transition: 'transform 0.25s, box-shadow 0.25s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-6px)';
              e.currentTarget.style.boxShadow = '0 14px 28px rgba(0,0,0,0.14)';
              const img = e.currentTarget.querySelector('img');
              if (img) img.style.transform = 'scale(1.06)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.06)';
              const img = e.currentTarget.querySelector('img');
              if (img) img.style.transform = 'scale(1)';
            }}
            onClick={() => setShowSalesModal(true)}
          >
            <img
              src="/images/highways/interest_traffic.jpg"
              alt="Traffic"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.4s ease',
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(0, 0, 0, 0.88) 0%, rgba(0, 0, 0, 0.45) 50%, rgba(0, 0, 0, 0.1) 100%)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '24px',
                color: '#ffffff',
              }}
            >
              <h3 style={{ fontSize: '18px', fontWeight: 700, margin: '0 0 6px 0' }}>
                Traffic
              </h3>
              <p style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.82)', margin: 0, lineHeight: 1.5 }}>
                Intelligent traffic management systems, traffic light control, and urban flow optimization.
              </p>
            </div>
          </div>

          {/* Card 2: Urban Roadways */}
          <div
            style={{
              position: 'relative',
              borderRadius: '12px',
              overflow: 'hidden',
              height: '320px',
              backgroundColor: '#111827',
              cursor: 'pointer',
              boxShadow: '0 6px 20px rgba(0,0,0,0.06)',
              transition: 'transform 0.25s, box-shadow 0.25s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-6px)';
              e.currentTarget.style.boxShadow = '0 14px 28px rgba(0,0,0,0.14)';
              const img = e.currentTarget.querySelector('img');
              if (img) img.style.transform = 'scale(1.06)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.06)';
              const img = e.currentTarget.querySelector('img');
              if (img) img.style.transform = 'scale(1)';
            }}
            onClick={() => setShowSalesModal(true)}
          >
            <img
              src="/images/highways/interest_urban.jpg"
              alt="Urban Roadways"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.4s ease',
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(0, 0, 0, 0.88) 0%, rgba(0, 0, 0, 0.45) 50%, rgba(0, 0, 0, 0.1) 100%)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '24px',
                color: '#ffffff',
              }}
            >
              <h3 style={{ fontSize: '18px', fontWeight: 700, margin: '0 0 6px 0' }}>
                Urban Roadways
              </h3>
              <p style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.82)', margin: 0, lineHeight: 1.5 }}>
                Arterial intersection monitoring, e-police red light enforcement, and pedestrian safety.
              </p>
            </div>
          </div>

          {/* Card 3: Vehicle Information Detection */}
          <div
            style={{
              position: 'relative',
              borderRadius: '12px',
              overflow: 'hidden',
              height: '320px',
              backgroundColor: '#111827',
              cursor: 'pointer',
              boxShadow: '0 6px 20px rgba(0,0,0,0.06)',
              transition: 'transform 0.25s, box-shadow 0.25s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-6px)';
              e.currentTarget.style.boxShadow = '0 14px 28px rgba(0,0,0,0.14)';
              const img = e.currentTarget.querySelector('img');
              if (img) img.style.transform = 'scale(1.06)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.06)';
              const img = e.currentTarget.querySelector('img');
              if (img) img.style.transform = 'scale(1)';
            }}
            onClick={() => setShowSalesModal(true)}
          >
            <img
              src="/images/highways/interest_vci.jpg"
              alt="Vehicle Information Detection"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.4s ease',
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(0, 0, 0, 0.88) 0%, rgba(0, 0, 0, 0.45) 50%, rgba(0, 0, 0, 0.1) 100%)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '24px',
                color: '#ffffff',
              }}
            >
              <h3 style={{ fontSize: '18px', fontWeight: 700, margin: '0 0 6px 0' }}>
                Vehicle Information Detection
              </h3>
              <p style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.82)', margin: 0, lineHeight: 1.5 }}>
                Advanced vehicle characterization, plate recognition, speed logging, and brand identification.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. SECTION 7: READY TO DISCUSS YOUR NEEDS? (CTA) WITH ILLUSTRATION */}
      <section
        style={{
          padding: '80px 32px 90px',
          backgroundColor: '#fafafc',
          borderTop: '1px solid #f0f0f2',
        }}
      >
        <div
          style={{
            maxWidth: '1080px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            alignItems: 'center',
            gap: '48px',
          }}
        >
          {/* Left: Text & CTA Buttons */}
          <div>
            <h2
              style={{
                fontSize: '32px',
                fontWeight: 700,
                color: '#111827',
                margin: '0 0 16px 0',
              }}
            >
              Ready to discuss your needs?
            </h2>

            <p
              style={{
                fontSize: '15px',
                color: '#6b7280',
                maxWidth: '520px',
                margin: '0 0 32px 0',
                lineHeight: 1.6,
              }}
            >
              Consult with our intelligent traffic engineers to design high-speed ANPR toll collection, radar speed enforcement, and highway AID networks.
            </p>

            {/* Action Buttons */}
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <button
                onClick={() => setShowSalesModal(true)}
                style={{
                  backgroundColor: '#dc2626',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '12px 28px',
                  fontSize: '15px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  boxShadow: '0 4px 12px rgba(220, 38, 38, 0.25)',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#b91c1c')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#dc2626')}
              >
                Get in Touch
              </button>

              <Link
                to="/contact"
                style={{
                  backgroundColor: '#ffffff',
                  color: '#dc2626',
                  border: '1px solid #dc2626',
                  borderRadius: '8px',
                  padding: '12px 28px',
                  fontSize: '15px',
                  fontWeight: 600,
                  textDecoration: 'none',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#fef2f2')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#ffffff')}
              >
                Find a Distributor
              </Link>
            </div>
          </div>

          {/* Right: Specialist Desk Illustration (exact match to screenshot) */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img
              src="/images/car_dealerships/discuss_illustration.png"
              alt="Consultant Ready to Discuss Your Needs"
              style={{
                maxWidth: '420px',
                width: '100%',
                height: 'auto',
                display: 'block',
              }}
            />
          </div>
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      {lightboxImage && (
        <div
          onClick={() => setLightboxImage(null)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1000,
            backgroundColor: 'rgba(0, 0, 0, 0.88)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              maxWidth: '92vw',
              maxHeight: '90vh',
            }}
          >
            <button
              onClick={() => setLightboxImage(null)}
              style={{
                position: 'absolute',
                top: '-44px',
                right: '0',
                background: 'none',
                border: 'none',
                color: '#ffffff',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '14px',
                fontWeight: 600,
              }}
            >
              <X size={20} />
              <span>Close</span>
            </button>
            <img
              src={lightboxImage}
              alt="Enlarged Visual"
              style={{
                width: '100%',
                maxHeight: '85vh',
                objectFit: 'contain',
                borderRadius: '8px',
                boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
              }}
            />
          </div>
        </div>
      )}

      {/* CASE STUDY MODAL */}
      {showCaseStudyModal && (
        <div
          onClick={() => setShowCaseStudyModal(false)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1000,
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
            backdropFilter: 'blur(6px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              maxWidth: '680px',
              width: '100%',
              padding: '36px',
              position: 'relative',
              maxHeight: '88vh',
              overflowY: 'auto',
            }}
          >
            <button
              onClick={() => setShowCaseStudyModal(false)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: '#64748b',
              }}
            >
              <X size={22} />
            </button>

            <span
              style={{
                fontSize: '12px',
                fontWeight: 700,
                color: '#2563eb',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
              }}
            >
              Sea Point Traffic &amp; Highway Project
            </span>

            <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#0f172a', margin: '8px 0 16px 0', lineHeight: 1.3 }}>
              Sea Point sees a two-thirds decrease in illicit incidents following the deployment of Hikvision cameras
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '14px', lineHeight: 1.7, color: '#334155' }}>
              <p style={{ margin: 0 }}>
                <strong>The Challenge:</strong> High traffic volumes along major coastal expressways and toll corridors created frequent congestion, reckless speeding, and vehicle-related illicit incidents. Highway patrol officers lacked real-time automated plate detection to catch offending motorists.
              </p>
              <p style={{ margin: 0 }}>
                <strong>The Solution:</strong> Municipal authorities and traffic police installed integrated Coloron / Hikvision ANPR bullet cameras, panoramic PTZs, and automated speed checkpoints linked to a centralized traffic control center.
              </p>
              <p style={{ margin: 0 }}>
                <strong>The Outcome:</strong> Illicit vehicle incidents dropped by 66% within months. Toll lane flow improved by 45%, and emergency vehicle clearance times were cut in half.
              </p>
            </div>

            <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'flex-end' }}>
              <button
                onClick={() => {
                  setShowCaseStudyModal(false);
                  setShowSalesModal(true);
                }}
                style={{
                  backgroundColor: '#2563eb',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '10px 22px',
                  fontSize: '14px',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                Consult Traffic Specialist
              </button>
            </div>
          </div>
        </div>
      )}

      {/* SALES MODAL */}
      <ContactSalesModal
        isOpen={showSalesModal}
        onClose={() => setShowSalesModal(false)}
        defaultSubject="Highways & Traffic ITS Solution Inquiry"
      />
    </div>
  );
}
