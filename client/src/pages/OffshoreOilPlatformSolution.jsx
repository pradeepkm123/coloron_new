import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Shield,
  Clock,
  CheckCircle2,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Share2,
  PhoneCall,
  FileText,
  Download,
  AlertTriangle,
  Compass,
  BarChart3,
  Layers,
  Sparkles,
  Maximize2,
  X,
  ArrowRight,
  Eye,
  Camera,
  Cpu,
  Tv,
  Users,
  TrendingUp,
  MapPin,
  Check,
  Radio,
  Gauge,
  Flame,
  LifeBuoy,
  Anchor,
  Activity,
  HardHat,
  Monitor,
  Zap
} from 'lucide-react';
import ContactSalesModal from '../components/ContactSalesModal';

// Interactive hotspots for 3D Cutaway Offshore Oil Platform
const PLATFORM_HOTSPOTS = [
  {
    id: 1,
    x: '48%',
    y: '22%',
    tag: 'Derrick & Drilling Module',
    title: 'Drilling Derrick & Rotary Table Deck',
    device: 'DS-2DY9236I-CWX(T5/316L) 316L Explosion-Proof PTZ',
    spec: '36x Optical Zoom, ATEX/IECEx Zone 1/21, IP68 Marine C5-M anti-corrosion stainless steel',
    desc: 'Provides 24/7 continuous optical and thermal surveillance of high-risk mud pumps, drill pipe handling, and rotating machinery. AI video analytics instantly identify unauthorized personnel near the drill floor.',
    benefit: 'Prevents catastrophic mechanical strike accidents and provides real-time video verification for drill floor supervisors in harsh gale-force conditions.'
  },
  {
    id: 2,
    x: '24%',
    y: '42%',
    tag: 'Flare Stack & Vent Booms',
    title: 'Flare Stack Combustion & Gas Venting Boom',
    device: 'Bi-Spectrum Radiometric Thermal & Optical Telephoto Camera',
    spec: 'Continuous flame temperature thermography, pilot light verification, unburned methane alert',
    desc: 'Mounted on stable pedestal brackets to continuously observe flare combustion efficiency from over 300 meters away. Detects flame blowout or inefficient combustion in heavy squalls.',
    benefit: 'Avoids massive regulatory fines, prevents unburned toxic hydrocarbon release into maritime air corridors, and verifies emergency flare ignition.'
  },
  {
    id: 3,
    x: '62%',
    y: '56%',
    tag: 'Production Separator & Manifolds',
    title: 'High-Pressure Separator Decks & Wellhead Manifolds',
    device: 'Optical Gas Imaging (OGI) & Explosion-Proof Thermographic Bullet',
    spec: 'VOC hydrocarbon gas absorption band (3.2–3.4 µm), sub-pixel thermal sensitivity NETD < 35 mK',
    desc: 'Continuous non-contact inspection of thousands of flanged joints, high-pressure valves, and separator vessel shells. Identifies microscopic gas plumes invisible to the human eye.',
    benefit: 'Pinpoints fugitive gas leaks before explosive lower flammable limit (LFL) concentrations build up in enclosed modules.'
  },
  {
    id: 4,
    x: '78%',
    y: '68%',
    tag: 'Helideck & Boat Landing',
    title: 'Helicopter Approach Deck & Support Vessel Landing',
    device: 'Long-Range Marine Radar & Sphere Dual-Sensor PTZ',
    spec: 'Multi-target radar track integration, thermal fog penetration, 360° continuous pan',
    desc: 'Surveys approaching crew transfer vessels, cargo supply barges, and inbound helicopters. Ensures deck clearance, clear flight paths, and detects unannounced maritime traffic entering platform 500m safety zones.',
    benefit: 'Prevents devastating ship-platform collision risks and ensures smooth crew logistical changes in zero-visibility sea fog.'
  },
  {
    id: 5,
    x: '38%',
    y: '74%',
    tag: 'Living Quarters & Muster Stations',
    title: 'Accommodation Module & Lifeboat Muster Stations',
    device: 'Deep Learning Biometric Muster Terminals & Public Address Intercom',
    spec: '1:N instant facial recognition, battery-backed offline operation, IP66 weatherproof housing',
    desc: 'Installed at primary emergency assembly stations beside TEMPSC lifeboats. Rapidly accounts for every offshore crew member during drills or active platform evacuations without slow paper clipboards.',
    benefit: 'Reduces muster accountability time from 20 minutes to under 90 seconds, saving lives when every moment counts.'
  },
];

export default function OffshoreOilPlatformSolution() {
  const [showContactModal, setShowContactModal] = useState(false);
  const [copiedShare, setCopiedShare] = useState(false);
  const [activeNav, setActiveNav] = useState('overview');
  const [activeHotspot, setActiveHotspot] = useState(PLATFORM_HOTSPOTS[0]);
  const [lightboxImg, setLightboxImg] = useState(null);

  // Accordion state
  const [openAccordions, setOpenAccordions] = useState({
    // Keep production running
    flare: true,
    thermo: true,
    gas: true,
    // Secure personnel
    vessel: true,
    compliance_cam: true,
    compliance_nvr: false,
    abnormal_cam: true,
    abnormal_nvr: false,
    mustering: true,
    // Provide insights
    led: true,
    software: false,
  });

  const toggleAccordion = (key) => {
    setOpenAccordions((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // Scrollspy for sub-navigation
  useEffect(() => {
    const handleScroll = () => {
      const navSections = [
        'overview',
        'production',
        'personnel',
        'insights',
        'stories',
        'resources',
        'related',
      ];
      const scrollPos = window.scrollY + 220;

      for (let i = navSections.length - 1; i >= 0; i--) {
        const sectionId = navSections[i];
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
    }
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedShare(true);
      setTimeout(() => setCopiedShare(false), 2500);
    }
  };

  return (
    <div style={{ fontFamily: '"Inter", "Segoe UI", system-ui, -apple-system, sans-serif', color: '#1d1d1f', backgroundColor: '#ffffff' }}>
      
      {/* 1. HERO SECTION (740px Height Constraint with Amber Radial Glow & Offshore Rig Superstructure) */}
      <section
        style={{
          position: 'relative',
          width: '100%',
          height: '740px',
          minHeight: '740px',
          backgroundImage: 'url(/images/offshore_oil_platform/hero_offshore.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center right',
          backgroundRepeat: 'no-repeat',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
        }}
      >
        {/* Amber Circular Radial Glow Overlay matching the screenshot */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            width: '65%',
            background: 'radial-gradient(ellipse at 35% 45%, rgba(245, 158, 11, 0.85) 0%, rgba(217, 119, 6, 0.6) 45%, rgba(180, 83, 9, 0.18) 75%, transparent 100%)',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />

        {/* Subtle dark gradient for high contrast reading on responsive screens */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(90deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.1) 40%, transparent 80%)',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />

        {/* Hero Content Container */}
        <div
          style={{
            position: 'relative',
            zIndex: 2,
            maxWidth: '1360px',
            margin: '0 auto',
            padding: '0 24px',
            width: '100%',
          }}
        >
          <div style={{ maxWidth: '680px', paddingLeft: 'clamp(8px, 3vw, 40px)' }}>
            
            {/* Category tag */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                color: '#ffffff',
                fontSize: 'clamp(1rem, 1.2vw, 1.25rem)',
                fontWeight: 600,
                letterSpacing: '-0.01em',
                marginBottom: '16px',
                textShadow: '0 2px 8px rgba(0,0,0,0.3)',
              }}
            >
              <img
                src="/images/offshore_oil_platform/icon_industry.png"
                alt="Solutions by Scenario"
                style={{ width: '22px', height: '22px', filter: 'brightness(0) invert(1)' }}
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
              <span>Solutions by Scenario</span>
            </div>

            {/* Main Title */}
            <h1
              style={{
                fontSize: 'clamp(2.8rem, 4.8vw, 4.4rem)',
                fontWeight: 800,
                color: '#ffffff',
                lineHeight: 1.1,
                letterSpacing: '-0.03em',
                margin: '0 0 16px',
                textShadow: '0 3px 14px rgba(0,0,0,0.45)',
              }}
            >
              Offshore Oil Platform
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontSize: 'clamp(1.15rem, 1.6vw, 1.45rem)',
                fontWeight: 500,
                color: 'rgba(255, 255, 255, 0.96)',
                lineHeight: 1.4,
                letterSpacing: '-0.01em',
                margin: '0 0 32px',
                textShadow: '0 2px 10px rgba(0,0,0,0.4)',
              }}
            >
              Safe and smart operations offshore
            </p>
          </div>
        </div>
      </section>

      {/* 2. BREADCRUMBS & UTILITY BAR */}
      <section
        style={{
          borderBottom: '1px solid #e5e5e7',
          backgroundColor: '#ffffff',
          position: 'relative',
          zIndex: 10,
        }}
      >
        <div
          style={{
            maxWidth: '1360px',
            margin: '0 auto',
            padding: '14px 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          {/* Breadcrumb Links */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.86rem', color: '#6e6e73' }}>
            <Link to="/" style={{ color: '#6e6e73', textDecoration: 'none' }}>Coloron</Link>
            <ChevronRight size={13} color="#a1a1a6" />
            <Link to="/solutions" style={{ color: '#6e6e73', textDecoration: 'none' }}>Solutions</Link>
            <ChevronRight size={13} color="#a1a1a6" />
            <Link to="/solutions#scenario" style={{ color: '#6e6e73', textDecoration: 'none' }}>Solutions by Scenario</Link>
            <ChevronRight size={13} color="#a1a1a6" />
            <span style={{ color: '#1d1d1f', fontWeight: 600 }}>Offshore Oil Platform</span>
          </nav>

          {/* Utility Action Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <button
              onClick={handleShare}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontSize: '0.86rem',
                color: copiedShare ? '#10b981' : '#555558',
                fontWeight: 500,
                padding: '4px 8px',
                borderRadius: '6px',
                transition: 'all 0.2s ease',
              }}
              title="Share this solution"
            >
              <Share2 size={15} />
              <span>{copiedShare ? 'Copied Link!' : 'Share'}</span>
            </button>

            <button
              onClick={() => setShowContactModal(true)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontSize: '0.86rem',
                color: '#555558',
                fontWeight: 500,
                padding: '4px 8px',
                borderRadius: '6px',
              }}
            >
              <PhoneCall size={15} />
              <span>Contact Us</span>
            </button>
          </div>
        </div>
      </section>

      {/* 3. STICKY SUB-NAVIGATION BAR */}
      <nav
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 40,
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: '1px solid #e5e5e7',
          boxShadow: '0 2px 10px rgba(0,0,0,0.03)',
        }}
      >
        <div
          style={{
            maxWidth: '1360px',
            margin: '0 auto',
            padding: '0 24px',
            display: 'flex',
            alignItems: 'center',
            overflowX: 'auto',
            whiteSpace: 'nowrap',
            scrollbarWidth: 'none',
          }}
        >
          {[
            { id: 'overview', label: 'Solution overview' },
            { id: 'production', label: 'Keep production running smoothly' },
            { id: 'personnel', label: 'Secure personnel with enhanced situational awareness' },
            { id: 'insights', label: 'Provide insights with visualized data' },
            { id: 'stories', label: 'Success stories' },
            { id: 'resources', label: 'Related Resources' },
            { id: 'related', label: 'You may also be interested in' },
          ].map((item) => {
            const isActive = activeNav === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  outline: 'none',
                  cursor: 'pointer',
                  padding: '16px 20px',
                  fontSize: '0.92rem',
                  fontWeight: isActive ? 600 : 500,
                  color: isActive ? '#d97706' : '#555558',
                  borderBottom: isActive ? '3px solid #d97706' : '3px solid transparent',
                  transition: 'all 0.2s ease',
                  flexShrink: 0,
                }}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </nav>

      {/* 4. SECTION: SOLUTION OVERVIEW (Three Circular Highlight Cards matching screenshot) */}
      <section
        id="overview"
        style={{
          padding: 'clamp(60px, 8vw, 90px) 24px',
          backgroundColor: '#ffffff',
          borderBottom: '1px solid #f2f2f4',
        }}
      >
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          
          {/* Main Centered Title */}
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <h2
              style={{
                fontSize: 'clamp(2.1rem, 3.5vw, 3rem)',
                fontWeight: 800,
                color: '#1d1d1f',
                letterSpacing: '-0.025em',
                margin: '0 0 16px',
              }}
            >
              Solution overview
            </h2>
            <p
              style={{
                fontSize: 'clamp(1.05rem, 1.4vw, 1.25rem)',
                color: '#6e6e73',
                lineHeight: 1.6,
                maxWidth: '820px',
                margin: '0 auto',
              }}
            >
              For safer and more productive operations
            </p>
          </div>

          {/* Three Circular Cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '40px',
              maxWidth: '1100px',
              margin: '0 auto',
            }}
          >
            {[
              {
                id: 'production',
                title: 'Offshore Production Optimization',
                desc: 'Continuous radiometric monitoring, gas leak visualization, and flare stack combustion efficiency to maintain peak operational output.',
                img: '/images/offshore_oil_platform/overview_production.png',
              },
              {
                id: 'personnel',
                title: 'Personnel Safety Management',
                desc: 'AI-driven PPE compliance inspection, man-down/fall alerts, and biometric lifeboat muster accountability in hazardous environments.',
                img: '/images/offshore_oil_platform/overview_personnel.png',
              },
              {
                id: 'insights',
                title: 'Centralized System Management',
                desc: 'Consolidated SCADA video overlay, marine radar tracking, and 3D GIS platform monitoring through HikCentral Enterprise.',
                img: '/images/offshore_oil_platform/overview_management.png',
              },
            ].map((card, idx) => (
              <div
                key={idx}
                onClick={() => scrollToSection(card.id)}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  cursor: 'pointer',
                  padding: '24px 16px',
                  borderRadius: '16px',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  const img = e.currentTarget.querySelector('.circle-img');
                  if (img) img.style.transform = 'scale(1.06)';
                  const title = e.currentTarget.querySelector('.circle-title');
                  if (title) title.style.color = '#d97706';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  const img = e.currentTarget.querySelector('.circle-img');
                  if (img) img.style.transform = 'scale(1)';
                  const title = e.currentTarget.querySelector('.circle-title');
                  if (title) title.style.color = '#1d1d1f';
                }}
              >
                {/* Circular Image Container */}
                <div
                  style={{
                    width: '180px',
                    height: '180px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    marginBottom: '24px',
                    boxShadow: '0 12px 28px rgba(0, 0, 0, 0.1)',
                    border: '4px solid #ffffff',
                    backgroundColor: '#f5f5f7',
                  }}
                >
                  <img
                    className="circle-img"
                    src={card.img}
                    alt={card.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                      transition: 'transform 0.4s ease',
                    }}
                  />
                </div>

                <h3
                  className="circle-title"
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: '#1d1d1f',
                    letterSpacing: '-0.015em',
                    margin: '0 0 12px',
                    transition: 'color 0.2s ease',
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.94rem',
                    color: '#555558',
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SECTION: KEEP PRODUCTION RUNNING SMOOTHLY */}
      <section
        id="production"
        style={{
          padding: 'clamp(60px, 8vw, 100px) 24px',
          backgroundColor: '#fafafc',
          borderBottom: '1px solid #e5e5e7',
        }}
      >
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          
          {/* Section Main Header */}
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2
              style={{
                fontSize: 'clamp(2.2rem, 3.6vw, 3.2rem)',
                fontWeight: 800,
                color: '#1d1d1f',
                letterSpacing: '-0.025em',
                margin: '0 0 16px',
              }}
            >
              Keep production running smoothly
            </h2>
            <p
              style={{
                fontSize: 'clamp(1rem, 1.3vw, 1.15rem)',
                color: '#555558',
                lineHeight: 1.7,
                maxWidth: '960px',
                margin: '0 auto',
              }}
            >
              Equipped with advanced technologies such as thermal imaging, acoustic imaging, and optical gas imaging, Hikvision’s explosion-proof and corrosion-resistant cameras provide all-around protection in critical areas, assisting in the early detection of anomalies and helping avoid potential hazards.
            </p>
          </div>

          {/* Subheading: All-around protection in critical areas */}
          <div style={{ textAlign: 'center', marginBottom: '24px' }}>
            <h3
              style={{
                fontSize: 'clamp(1.5rem, 2.2vw, 2rem)',
                fontWeight: 700,
                color: '#1d1d1f',
                letterSpacing: '-0.02em',
                margin: '0 0 8px',
              }}
            >
              All-around protection in critical areas
            </h3>
            <p style={{ fontSize: '1rem', color: '#6e6e73', margin: 0 }}>
              Learn about Hikvision’s explosion-proof cameras
            </p>
          </div>

          {/* 3 Explosion-Proof Cameras Product Cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px',
              marginBottom: '56px',
            }}
          >
            {[
              {
                model: 'DS-2DY9236I-CWX(T5/316L)',
                title: '316L Stainless Steel Explosion-Proof Positioning System',
                img: '/images/offshore_oil_platform/prod_ex_ptz.png',
                desc: '36x optical zoom, 2 MP darkfighter sensor, integrated wiper, ATEX/IECEx Zone 1/21 certification for harsh offshore saltwater environments.',
              },
              {
                model: 'DS-2XE6146F-HS (C)',
                title: '316L Explosion-Proof Anti-Corrosion Dome Camera',
                img: '/images/offshore_oil_platform/prod_ex_dome.png',
                desc: '4 MP high-resolution image sensor, IK10 vandal-resistant dome, IP68 waterproof rating, ideal for separator decks and tight pump passages.',
              },
              {
                model: 'DS-2XE6885G0-IZHS(B)',
                title: '316L 8MP Explosion-Proof Vari-focal Bullet with Built-in Junction',
                img: '/images/offshore_oil_platform/prod_ex_bullet.png',
                desc: 'Ultra-clear 4K optical sensor with DeepinView AI analytics for PPE compliance, intrusion detection, and built-in Ex junction box.',
              },
            ].map((prod, pidx) => (
              <div
                key={pidx}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '16px',
                  padding: '28px 24px',
                  boxShadow: '0 4px 18px rgba(0, 0, 0, 0.05)',
                  border: '1px solid #ebebeb',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 12px 28px rgba(0, 0, 0, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 18px rgba(0, 0, 0, 0.05)';
                }}
              >
                <div
                  style={{
                    height: '180px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px',
                  }}
                >
                  <img
                    src={prod.img}
                    alt={prod.model}
                    style={{
                      maxHeight: '160px',
                      maxWidth: '100%',
                      objectFit: 'contain',
                    }}
                  />
                </div>
                <div
                  style={{
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    color: '#d97706',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                    marginBottom: '6px',
                  }}
                >
                  {prod.model}
                </div>
                <h4
                  style={{
                    fontSize: '1.05rem',
                    fontWeight: 700,
                    color: '#1d1d1f',
                    lineHeight: 1.35,
                    margin: '0 0 10px',
                  }}
                >
                  {prod.title}
                </h4>
                <p
                  style={{
                    fontSize: '0.88rem',
                    color: '#6e6e73',
                    lineHeight: 1.55,
                    margin: '0 0 20px',
                    flex: 1,
                  }}
                >
                  {prod.desc}
                </p>
                <button
                  onClick={() => setShowContactModal(true)}
                  style={{
                    alignSelf: 'flex-start',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    backgroundColor: '#f5f5f7',
                    border: 'none',
                    color: '#1d1d1f',
                    fontSize: '0.84rem',
                    fontWeight: 600,
                    padding: '8px 16px',
                    borderRadius: '20px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#d97706';
                    e.currentTarget.style.color = '#ffffff';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#f5f5f7';
                    e.currentTarget.style.color = '#1d1d1f';
                  }}
                >
                  <span>Request Specs</span>
                  <ChevronRight size={14} />
                </button>
              </div>
            ))}
          </div>

          {/* Interactive 3D Cutaway Platform Overview Map */}
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '20px',
              padding: 'clamp(20px, 3vw, 36px)',
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.06)',
              border: '1px solid #ebebeb',
              marginBottom: '72px',
            }}
          >
            <div style={{ textAlign: 'center', marginBottom: '24px' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: '#d97706',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  marginBottom: '6px',
                }}
              >
                <Sparkles size={14} />
                <span>Interactive Architecture</span>
              </div>
              <h3
                style={{
                  fontSize: 'clamp(1.4rem, 2vw, 1.85rem)',
                  fontWeight: 800,
                  color: '#1d1d1f',
                  margin: '0 0 8px',
                }}
              >
                Offshore Platform Complete Protection Map
              </h3>
              <p style={{ fontSize: '0.92rem', color: '#6e6e73', margin: 0 }}>
                Click numbered hotspots on the 3D isometric platform to explore specialized marine camera deployments
              </p>
            </div>

            {/* 3D Map Image with Hotspot Pins */}
            <div
              style={{
                position: 'relative',
                borderRadius: '12px',
                overflow: 'hidden',
                backgroundColor: '#0a192f',
                boxShadow: 'inset 0 0 40px rgba(0,0,0,0.4)',
                marginBottom: '24px',
              }}
            >
              <img
                src="/images/offshore_oil_platform/platform_3d_cutaway.png"
                alt="Offshore Oil Platform 3D Cutaway Map"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  cursor: 'zoom-in',
                }}
                onClick={() => setLightboxImg('/images/offshore_oil_platform/platform_3d_cutaway.png')}
              />

              {/* Pulsing Hotspot Pins */}
              {PLATFORM_HOTSPOTS.map((spot) => {
                const isSelected = activeHotspot.id === spot.id;
                return (
                  <button
                    key={spot.id}
                    onClick={() => setActiveHotspot(spot)}
                    style={{
                      position: 'absolute',
                      top: spot.y,
                      left: spot.x,
                      transform: 'translate(-50%, -50%)',
                      width: isSelected ? '38px' : '30px',
                      height: isSelected ? '38px' : '30px',
                      borderRadius: '50%',
                      backgroundColor: isSelected ? '#d97706' : '#d92d20',
                      color: '#ffffff',
                      border: '3px solid #ffffff',
                      boxShadow: isSelected
                        ? '0 0 0 6px rgba(217, 119, 6, 0.4), 0 4px 12px rgba(0,0,0,0.5)'
                        : '0 0 0 3px rgba(217, 45, 32, 0.4), 0 2px 8px rgba(0,0,0,0.4)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 800,
                      fontSize: isSelected ? '1rem' : '0.85rem',
                      cursor: 'pointer',
                      zIndex: isSelected ? 10 : 5,
                      transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                    }}
                    title={spot.title}
                  >
                    {spot.id}
                  </button>
                );
              })}

              {/* Expand Fullscreen Button */}
              <button
                onClick={() => setLightboxImg('/images/offshore_oil_platform/platform_3d_cutaway.png')}
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  backgroundColor: 'rgba(0, 0, 0, 0.65)',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '8px 12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  backdropFilter: 'blur(8px)',
                  zIndex: 10,
                }}
              >
                <Maximize2 size={14} />
                <span>Fullscreen</span>
              </button>
            </div>

            {/* Selected Hotspot Detail Card */}
            {activeHotspot && (
              <div
                style={{
                  backgroundColor: '#f8fafc',
                  borderRadius: '14px',
                  padding: '24px',
                  border: '1px solid #e2e8f0',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '24px',
                  alignItems: 'center',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                    <span
                      style={{
                        backgroundColor: '#d97706',
                        color: '#ffffff',
                        fontSize: '0.76rem',
                        fontWeight: 700,
                        padding: '3px 9px',
                        borderRadius: '12px',
                      }}
                    >
                      Zone {activeHotspot.id}: {activeHotspot.tag}
                    </span>
                  </div>
                  <h4
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: 800,
                      color: '#0f172a',
                      margin: '0 0 8px',
                    }}
                  >
                    {activeHotspot.title}
                  </h4>
                  <p
                    style={{
                      fontSize: '0.92rem',
                      color: '#475569',
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    {activeHotspot.desc}
                  </p>
                </div>

                <div
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '10px',
                    padding: '16px 20px',
                    border: '1px solid #e2e8f0',
                  }}
                >
                  <div style={{ fontSize: '0.78rem', color: '#64748b', fontWeight: 600, textTransform: 'uppercase', marginBottom: '4px' }}>
                    Recommended Deployment
                  </div>
                  <div style={{ fontSize: '0.96rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>
                    {activeHotspot.device}
                  </div>
                  <div style={{ fontSize: '0.84rem', color: '#d97706', fontWeight: 600, marginBottom: '10px' }}>
                    {activeHotspot.spec}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '6px', fontSize: '0.86rem', color: '#059669', fontWeight: 500 }}>
                    <CheckCircle2 size={16} style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>{activeHotspot.benefit}</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 3 Dedicated Feature Blocks matching screenshot */}

          {/* FEATURE 1: Gas leakage detection */}
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '20px',
              padding: 'clamp(24px, 4vw, 40px)',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
              border: '1px solid #ebebeb',
              marginBottom: '40px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 'clamp(24px, 4vw, 48px)',
              alignItems: 'center',
            }}
          >
            {/* Left Image */}
            <div
              style={{
                borderRadius: '14px',
                overflow: 'hidden',
                boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
                cursor: 'zoom-in',
              }}
              onClick={() => setLightboxImg('/images/offshore_oil_platform/feat_gas_leakage.png')}
            >
              <img
                src="/images/offshore_oil_platform/feat_gas_leakage.png"
                alt="Gas leakage detection"
                style={{ width: '100%', height: 'auto', display: 'block', transition: 'transform 0.4s ease' }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.03)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
              />
            </div>

            {/* Right Content & Accordions */}
            <div>
              <h3
                style={{
                  fontSize: 'clamp(1.5rem, 2.2vw, 2rem)',
                  fontWeight: 800,
                  color: '#1d1d1f',
                  letterSpacing: '-0.02em',
                  margin: '0 0 14px',
                }}
              >
                Gas leakage detection
              </h3>
              <p
                style={{
                  fontSize: '0.96rem',
                  color: '#555558',
                  lineHeight: 1.65,
                  margin: '0 0 24px',
                }}
              >
                Hikvision’s professional cameras for gas leak detection detect methane concentrations in a given area and promptly alert nearby workers when thresholds are exceeded. When combined with handheld devices, they can precisely detect specific leak points for quick repairs.
              </p>

              {/* Accordion: Optical Gas Imager */}
              <div
                style={{
                  border: '1px solid #e5e5e7',
                  borderRadius: '12px',
                  overflow: 'hidden',
                }}
              >
                <button
                  onClick={() => toggleAccordion('gas')}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '16px 20px',
                    backgroundColor: openAccordions.gas ? '#fbfbfd' : '#ffffff',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: '#1d1d1f',
                    textAlign: 'left',
                  }}
                >
                  <span>Optical Gas Imagers & Handheld Acoustic Cameras</span>
                  {openAccordions.gas ? <ChevronUp size={18} color="#d97706" /> : <ChevronDown size={18} color="#86868b" />}
                </button>

                {openAccordions.gas && (
                  <div style={{ padding: '16px 20px', backgroundColor: '#ffffff', borderTop: '1px solid #f0f0f2' }}>
                    <div style={{ fontSize: '0.88rem', color: '#555558', lineHeight: 1.6, marginBottom: '14px' }}>
                      Visualizes invisible VOC, methane, and hydrocarbon gases with high-sensitivity thermal spectral filtering, enabling continuous monitoring of remote wellheads and flanges.
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px' }}>
                      <div style={{ backgroundColor: '#f8fafc', padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                        <div style={{ fontWeight: 700, fontSize: '0.86rem', color: '#0f172a' }}>Spectral Band</div>
                        <div style={{ fontSize: '0.82rem', color: '#64748b' }}>3.2 µm – 3.4 µm (Methane / VOC)</div>
                      </div>
                      <div style={{ backgroundColor: '#f8fafc', padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                        <div style={{ fontWeight: 700, fontSize: '0.86rem', color: '#0f172a' }}>Certification</div>
                        <div style={{ fontSize: '0.82rem', color: '#64748b' }}>ATEX / IECEx Zone 1/21</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* FEATURE 2: Real-time flare monitoring */}
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '20px',
              padding: 'clamp(24px, 4vw, 40px)',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
              border: '1px solid #ebebeb',
              marginBottom: '40px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 'clamp(24px, 4vw, 48px)',
              alignItems: 'center',
            }}
          >
            {/* Left Image */}
            <div
              style={{
                borderRadius: '14px',
                overflow: 'hidden',
                boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
                cursor: 'zoom-in',
              }}
              onClick={() => setLightboxImg('/images/offshore_oil_platform/feat_flare_monitoring.png')}
            >
              <img
                src="/images/offshore_oil_platform/feat_flare_monitoring.png"
                alt="Real-time flare monitoring"
                style={{ width: '100%', height: 'auto', display: 'block', transition: 'transform 0.4s ease' }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.03)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
              />
            </div>

            {/* Right Content & Accordions */}
            <div>
              <h3
                style={{
                  fontSize: 'clamp(1.5rem, 2.2vw, 2rem)',
                  fontWeight: 800,
                  color: '#1d1d1f',
                  letterSpacing: '-0.02em',
                  margin: '0 0 14px',
                }}
              >
                Real-time flare monitoring
              </h3>
              <p
                style={{
                  fontSize: '0.96rem',
                  color: '#555558',
                  lineHeight: 1.65,
                  margin: '0 0 24px',
                }}
              >
                Hikvision’s thermal cameras monitor flame combustion in real time, promptly alerting in case of extinguishment or insufficient / over combustion, preventing hazards and environmental harms.
              </p>

              {/* Accordion: Thermal Camera */}
              <div
                style={{
                  border: '1px solid #e5e5e7',
                  borderRadius: '12px',
                  overflow: 'hidden',
                }}
              >
                <button
                  onClick={() => toggleAccordion('flare')}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '16px 20px',
                    backgroundColor: openAccordions.flare ? '#fbfbfd' : '#ffffff',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: '#1d1d1f',
                    textAlign: 'left',
                  }}
                >
                  <span>Thermal Cameras for Combustion Analytics</span>
                  {openAccordions.flare ? <ChevronUp size={18} color="#d97706" /> : <ChevronDown size={18} color="#86868b" />}
                </button>

                {openAccordions.flare && (
                  <div style={{ padding: '16px 20px', backgroundColor: '#ffffff', borderTop: '1px solid #f0f0f2' }}>
                    <div style={{ fontSize: '0.88rem', color: '#555558', lineHeight: 1.6, marginBottom: '14px' }}>
                      Long-range bi-spectrum thermal optical zoom lenses maintain sharp visibility through heavy maritime rain and salt fog, continuously tracking pilot flame status and soot levels.
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px' }}>
                      <div style={{ backgroundColor: '#f8fafc', padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                        <div style={{ fontWeight: 700, fontSize: '0.86rem', color: '#0f172a' }}>Monitoring Range</div>
                        <div style={{ fontSize: '0.82rem', color: '#64748b' }}>Up to 1,500 meters line-of-sight</div>
                      </div>
                      <div style={{ backgroundColor: '#f8fafc', padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                        <div style={{ fontWeight: 700, fontSize: '0.86rem', color: '#0f172a' }}>Flame Analysis</div>
                        <div style={{ fontSize: '0.82rem', color: '#64748b' }}>Extinguishment, Over-combustion</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* FEATURE 3: Industrial thermography */}
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '20px',
              padding: 'clamp(24px, 4vw, 40px)',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
              border: '1px solid #ebebeb',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 'clamp(24px, 4vw, 48px)',
              alignItems: 'center',
            }}
          >
            {/* Left Image */}
            <div
              style={{
                borderRadius: '14px',
                overflow: 'hidden',
                boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
                cursor: 'zoom-in',
              }}
              onClick={() => setLightboxImg('/images/offshore_oil_platform/feat_industrial_thermography.png')}
            >
              <img
                src="/images/offshore_oil_platform/feat_industrial_thermography.png"
                alt="Industrial thermography"
                style={{ width: '100%', height: 'auto', display: 'block', transition: 'transform 0.4s ease' }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.03)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
              />
            </div>

            {/* Right Content & Accordions */}
            <div>
              <h3
                style={{
                  fontSize: 'clamp(1.5rem, 2.2vw, 2rem)',
                  fontWeight: 800,
                  color: '#1d1d1f',
                  letterSpacing: '-0.02em',
                  margin: '0 0 14px',
                }}
              >
                Industrial thermography
              </h3>
              <p
                style={{
                  fontSize: '0.96rem',
                  color: '#555558',
                  lineHeight: 1.65,
                  margin: '0 0 24px',
                }}
              >
                From abnormal oil levels to insulation damages, Hikvision’s professional thermography cameras enable early detection of anomalies by identifying small temperature changes.
              </p>

              {/* Accordion: Thermography Cameras with 3 Products */}
              <div
                style={{
                  border: '1px solid #e5e5e7',
                  borderRadius: '12px',
                  overflow: 'hidden',
                }}
              >
                <button
                  onClick={() => toggleAccordion('thermo')}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '16px 20px',
                    backgroundColor: openAccordions.thermo ? '#fbfbfd' : '#ffffff',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: '#1d1d1f',
                    textAlign: 'left',
                  }}
                >
                  <span>Thermography Cameras (3 Products)</span>
                  {openAccordions.thermo ? <ChevronUp size={18} color="#d97706" /> : <ChevronDown size={18} color="#86868b" />}
                </button>

                {openAccordions.thermo && (
                  <div style={{ padding: '16px 20px', backgroundColor: '#ffffff', borderTop: '1px solid #f0f0f2' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                      {[
                        {
                          model: 'DS-2TD4137T-9/W',
                          title: 'Thermographic Thermal & Optical Bi-spectrum Speed Dome',
                          img: '/images/offshore_oil_platform/prod_speed_dome.png',
                          desc: 'Temperature exception alarm from -20°C to 550°C, 360° endless pan, smart wiper.',
                        },
                        {
                          model: 'DS-2TD3017T-2/V',
                          title: 'Thermographic Cube Camera',
                          img: '/images/offshore_oil_platform/prod_cube_cam.png',
                          desc: 'Compact form factor for generator compartments and electrical transformer cabinets.',
                        },
                        {
                          model: 'DS-2TD2528T-3/Q',
                          title: 'Explosion-Proof Thermographic Network Bullet Camera',
                          img: '/images/offshore_oil_platform/prod_bullet_bracket.png',
                          desc: 'ATEX/IECEx Zone 1 certified with integrated bracket and high-accuracy surface temperature reading.',
                        },
                      ].map((item, pidx) => (
                        <div
                          key={pidx}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '14px',
                            padding: '10px 14px',
                            backgroundColor: '#f8fafc',
                            borderRadius: '10px',
                            border: '1px solid #e2e8f0',
                          }}
                        >
                          <img
                            src={item.img}
                            alt={item.model}
                            style={{ width: '60px', height: '48px', objectFit: 'contain' }}
                          />
                          <div style={{ flex: 1 }}>
                            <div style={{ fontSize: '0.84rem', fontWeight: 700, color: '#d97706' }}>
                              {item.model}
                            </div>
                            <div style={{ fontSize: '0.88rem', fontWeight: 600, color: '#1d1d1f' }}>
                              {item.title}
                            </div>
                            <div style={{ fontSize: '0.78rem', color: '#64748b' }}>
                              {item.desc}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 6. SECTION: SECURE PERSONNEL WITH ENHANCED SITUATIONAL AWARENESS */}
      <section
        id="personnel"
        style={{
          padding: 'clamp(60px, 8vw, 100px) 24px',
          backgroundColor: '#ffffff',
          borderBottom: '1px solid #e5e5e7',
        }}
      >
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          
          {/* Main Section Header */}
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <h2
              style={{
                fontSize: 'clamp(2.2rem, 3.6vw, 3.2rem)',
                fontWeight: 800,
                color: '#1d1d1f',
                letterSpacing: '-0.025em',
                margin: '0 0 16px',
              }}
            >
              Secure personnel with enhanced situational awareness
            </h2>
            <p
              style={{
                fontSize: 'clamp(1rem, 1.3vw, 1.15rem)',
                color: '#555558',
                lineHeight: 1.7,
                maxWidth: '960px',
                margin: '0 auto',
              }}
            >
              Personnel safety is the cornerstone of offshore operations. Hikvision helps create a secure and compliant work environment, providing continuous monitoring, automated AI compliance alerts, and rapid emergency response capabilities.
            </p>
          </div>

          {/* 4 Feature Items */}

          {/* FEATURE 4: Accurate vessel detection */}
          <div
            style={{
              backgroundColor: '#fafafc',
              borderRadius: '20px',
              padding: 'clamp(24px, 4vw, 40px)',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
              border: '1px solid #ebebeb',
              marginBottom: '40px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 'clamp(24px, 4vw, 48px)',
              alignItems: 'center',
            }}
          >
            {/* Left Image */}
            <div
              style={{
                borderRadius: '14px',
                overflow: 'hidden',
                boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
                cursor: 'zoom-in',
              }}
              onClick={() => setLightboxImg('/images/offshore_oil_platform/feat_vessel_detection.png')}
            >
              <img
                src="/images/offshore_oil_platform/feat_vessel_detection.png"
                alt="Accurate vessel detection"
                style={{ width: '100%', height: 'auto', display: 'block', transition: 'transform 0.4s ease' }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.03)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
              />
            </div>

            {/* Right Content & Accordions */}
            <div>
              <h3
                style={{
                  fontSize: 'clamp(1.5rem, 2.2vw, 2rem)',
                  fontWeight: 800,
                  color: '#1d1d1f',
                  letterSpacing: '-0.02em',
                  margin: '0 0 14px',
                }}
              >
                Accurate vessel detection
              </h3>
              <p
                style={{
                  fontSize: '0.96rem',
                  color: '#555558',
                  lineHeight: 1.65,
                  margin: '0 0 24px',
                }}
              >
                Hikvision’s solution helps timely detect suspicious ships near the oil platform, or other risks and security breaches, safeguarding workers and critical equipment.
              </p>

              {/* Accordion: Thermal Camera / Sphere Positioning Systems */}
              <div
                style={{
                  border: '1px solid #e5e5e7',
                  borderRadius: '12px',
                  overflow: 'hidden',
                }}
              >
                <button
                  onClick={() => toggleAccordion('vessel')}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '16px 20px',
                    backgroundColor: openAccordions.vessel ? '#fbfbfd' : '#ffffff',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: '#1d1d1f',
                    textAlign: 'left',
                  }}
                >
                  <span>Thermal Positioning Sphere Systems</span>
                  {openAccordions.vessel ? <ChevronUp size={18} color="#d97706" /> : <ChevronDown size={18} color="#86868b" />}
                </button>

                {openAccordions.vessel && (
                  <div style={{ padding: '16px 20px', backgroundColor: '#ffffff', borderTop: '1px solid #f0f0f2' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                      {[
                        {
                          model: 'DS-2TD95C8-150ZE4FL/W',
                          title: 'Thermal & Optical Sphere Positioning System',
                          img: '/images/offshore_oil_platform/prod_sphere_pos.png',
                          desc: 'Long-range marine thermal detection with gyroscope image stabilization for wave movement.',
                        },
                        {
                          model: 'DS-2TD8167-150ZE2F/W',
                          title: 'Thermal & Optical Stable PTZ Camera',
                          img: '/images/offshore_oil_platform/prod_stable_ptz.png',
                          desc: 'Continuous vessel trajectory tracking and automatic radar slave target positioning.',
                        },
                        {
                          model: 'DS-2TD6267-75C4L/W',
                          title: 'Bi-spectrum Network Positioning System',
                          img: '/images/offshore_oil_platform/prod_pos_sys.png',
                          desc: '360° infinite rotation, C5-M marine anti-corrosion coating, optical wiper.',
                        },
                      ].map((item, pidx) => (
                        <div
                          key={pidx}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '14px',
                            padding: '10px 14px',
                            backgroundColor: '#f8fafc',
                            borderRadius: '10px',
                            border: '1px solid #e2e8f0',
                          }}
                        >
                          <img
                            src={item.img}
                            alt={item.model}
                            style={{ width: '60px', height: '48px', objectFit: 'contain' }}
                          />
                          <div style={{ flex: 1 }}>
                            <div style={{ fontSize: '0.84rem', fontWeight: 700, color: '#d97706' }}>
                              {item.model}
                            </div>
                            <div style={{ fontSize: '0.88rem', fontWeight: 600, color: '#1d1d1f' }}>
                              {item.title}
                            </div>
                            <div style={{ fontSize: '0.78rem', color: '#64748b' }}>
                              {item.desc}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* FEATURE 5: Personnel safety compliance */}
          <div
            style={{
              backgroundColor: '#fafafc',
              borderRadius: '20px',
              padding: 'clamp(24px, 4vw, 40px)',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
              border: '1px solid #ebebeb',
              marginBottom: '40px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 'clamp(24px, 4vw, 48px)',
              alignItems: 'center',
            }}
          >
            {/* Left Image */}
            <div
              style={{
                borderRadius: '14px',
                overflow: 'hidden',
                boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
                cursor: 'zoom-in',
              }}
              onClick={() => setLightboxImg('/images/offshore_oil_platform/feat_personnel_compliance.png')}
            >
              <img
                src="/images/offshore_oil_platform/feat_personnel_compliance.png"
                alt="Personnel safety compliance"
                style={{ width: '100%', height: 'auto', display: 'block', transition: 'transform 0.4s ease' }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.03)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
              />
            </div>

            {/* Right Content & Accordions */}
            <div>
              <h3
                style={{
                  fontSize: 'clamp(1.5rem, 2.2vw, 2rem)',
                  fontWeight: 800,
                  color: '#1d1d1f',
                  letterSpacing: '-0.02em',
                  margin: '0 0 14px',
                }}
              >
                Personnel safety compliance
              </h3>
              <p
                style={{
                  fontSize: '0.96rem',
                  color: '#555558',
                  lineHeight: 1.65,
                  margin: '0 0 24px',
                }}
              >
                Hikvision’s AI-based devices verify the presence of personal protective equipment, preventing safety hazards while achieving legal safety compliance.
              </p>

              {/* Accordion 1: Explosion-proof Camera */}
              <div
                style={{
                  border: '1px solid #e5e5e7',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  marginBottom: '12px',
                }}
              >
                <button
                  onClick={() => toggleAccordion('compliance_cam')}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '16px 20px',
                    backgroundColor: openAccordions.compliance_cam ? '#fbfbfd' : '#ffffff',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: '#1d1d1f',
                    textAlign: 'left',
                  }}
                >
                  <span>Explosion-proof Camera (AI PPE Verification)</span>
                  {openAccordions.compliance_cam ? <ChevronUp size={18} color="#d97706" /> : <ChevronDown size={18} color="#86868b" />}
                </button>

                {openAccordions.compliance_cam && (
                  <div style={{ padding: '16px 20px', backgroundColor: '#ffffff', borderTop: '1px solid #f0f0f2' }}>
                    <div style={{ fontSize: '0.88rem', color: '#555558', lineHeight: 1.6 }}>
                      Equipped with deep learning algorithms to detect hard hats, high-visibility coveralls, eye protection, and safety harnesses before contractors step onto drill or crane decks.
                    </div>
                  </div>
                )}
              </div>

              {/* Accordion 2: Network Video Recorders */}
              <div
                style={{
                  border: '1px solid #e5e5e7',
                  borderRadius: '12px',
                  overflow: 'hidden',
                }}
              >
                <button
                  onClick={() => toggleAccordion('compliance_nvr')}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '16px 20px',
                    backgroundColor: openAccordions.compliance_nvr ? '#fbfbfd' : '#ffffff',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: '#1d1d1f',
                    textAlign: 'left',
                  }}
                >
                  <span>Network Video Recorders (Automated Incident Logs)</span>
                  {openAccordions.compliance_nvr ? <ChevronUp size={18} color="#d97706" /> : <ChevronDown size={18} color="#86868b" />}
                </button>

                {openAccordions.compliance_nvr && (
                  <div style={{ padding: '16px 20px', backgroundColor: '#ffffff', borderTop: '1px solid #f0f0f2' }}>
                    <div style={{ fontSize: '0.88rem', color: '#555558', lineHeight: 1.6 }}>
                      DeepinMind AI NVR automatically catalogs safety infractions with high-definition snapshot snapshots, timestamps, and department IDs for weekly safety briefings.
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* FEATURE 6: Abnormal activity detection */}
          <div
            style={{
              backgroundColor: '#fafafc',
              borderRadius: '20px',
              padding: 'clamp(24px, 4vw, 40px)',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
              border: '1px solid #ebebeb',
              marginBottom: '40px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 'clamp(24px, 4vw, 48px)',
              alignItems: 'center',
            }}
          >
            {/* Left Image */}
            <div
              style={{
                borderRadius: '14px',
                overflow: 'hidden',
                boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
                cursor: 'zoom-in',
              }}
              onClick={() => setLightboxImg('/images/offshore_oil_platform/feat_abnormal_activity.png')}
            >
              <img
                src="/images/offshore_oil_platform/feat_abnormal_activity.png"
                alt="Abnormal activity detection"
                style={{ width: '100%', height: 'auto', display: 'block', transition: 'transform 0.4s ease' }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.03)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
              />
            </div>

            {/* Right Content & Accordions */}
            <div>
              <h3
                style={{
                  fontSize: 'clamp(1.5rem, 2.2vw, 2rem)',
                  fontWeight: 800,
                  color: '#1d1d1f',
                  letterSpacing: '-0.02em',
                  margin: '0 0 14px',
                }}
              >
                Abnormal activity detection
              </h3>
              <p
                style={{
                  fontSize: '0.96rem',
                  color: '#555558',
                  lineHeight: 1.65,
                  margin: '0 0 24px',
                }}
              >
                Hikvision helps identify emergencies and hazardous events that can threaten worker safety, such as falls, prolonged lone work, and improper device placement. This enables managers to respond in a timely manner.
              </p>

              {/* Accordion: Explosion-proof Camera */}
              <div
                style={{
                  border: '1px solid #e5e5e7',
                  borderRadius: '12px',
                  overflow: 'hidden',
                }}
              >
                <button
                  onClick={() => toggleAccordion('abnormal_cam')}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '16px 20px',
                    backgroundColor: openAccordions.abnormal_cam ? '#fbfbfd' : '#ffffff',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: '#1d1d1f',
                    textAlign: 'left',
                  }}
                >
                  <span>Explosion-proof Camera (Man-Down & Fall Alerts)</span>
                  {openAccordions.abnormal_cam ? <ChevronUp size={18} color="#d97706" /> : <ChevronDown size={18} color="#86868b" />}
                </button>

                {openAccordions.abnormal_cam && (
                  <div style={{ padding: '16px 20px', backgroundColor: '#ffffff', borderTop: '1px solid #f0f0f2' }}>
                    <div style={{ fontSize: '0.88rem', color: '#555558', lineHeight: 1.6, marginBottom: '14px' }}>
                      Instantly detects slip-and-fall incidents, crew members lying motionless on catwalks, lone workers exceeding predefined inactivity limits, and unauthorized loitering in hazardous high-pressure zones.
                    </div>
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                      <span style={{ backgroundColor: '#fef3c7', color: '#92400e', fontSize: '0.78rem', fontWeight: 600, padding: '4px 10px', borderRadius: '12px' }}>Fall Detection</span>
                      <span style={{ backgroundColor: '#fef3c7', color: '#92400e', fontSize: '0.78rem', fontWeight: 600, padding: '4px 10px', borderRadius: '12px' }}>Lone Worker Monitor</span>
                      <span style={{ backgroundColor: '#fef3c7', color: '#92400e', fontSize: '0.78rem', fontWeight: 600, padding: '4px 10px', borderRadius: '12px' }}>Catwalk Loitering Alert</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* FEATURE 7: Emergency mustering */}
          <div
            style={{
              backgroundColor: '#fafafc',
              borderRadius: '20px',
              padding: 'clamp(24px, 4vw, 40px)',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
              border: '1px solid #ebebeb',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 'clamp(24px, 4vw, 48px)',
              alignItems: 'center',
            }}
          >
            {/* Left Image */}
            <div
              style={{
                borderRadius: '14px',
                overflow: 'hidden',
                boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
                cursor: 'zoom-in',
              }}
              onClick={() => setLightboxImg('/images/offshore_oil_platform/feat_emergency_mustering.png')}
            >
              <img
                src="/images/offshore_oil_platform/feat_emergency_mustering.png"
                alt="Emergency mustering"
                style={{ width: '100%', height: 'auto', display: 'block', transition: 'transform 0.4s ease' }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.03)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
              />
            </div>

            {/* Right Content & Accordions */}
            <div>
              <h3
                style={{
                  fontSize: 'clamp(1.5rem, 2.2vw, 2rem)',
                  fontWeight: 800,
                  color: '#1d1d1f',
                  letterSpacing: '-0.02em',
                  margin: '0 0 14px',
                }}
              >
                Emergency mustering
              </h3>
              <p
                style={{
                  fontSize: '0.96rem',
                  color: '#555558',
                  lineHeight: 1.65,
                  margin: '0 0 24px',
                }}
              >
                During emergencies such as a fire, the sensor automatically triggers the opening of escape routes and emergency exits. Broadcasts, SMS reminders, and other measures accompany the process of gathering personnel in a safe place.
              </p>

              {/* Accordion: Face Recognition Terminal */}
              <div
                style={{
                  border: '1px solid #e5e5e7',
                  borderRadius: '12px',
                  overflow: 'hidden',
                }}
              >
                <button
                  onClick={() => toggleAccordion('mustering')}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '16px 20px',
                    backgroundColor: openAccordions.mustering ? '#fbfbfd' : '#ffffff',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: '#1d1d1f',
                    textAlign: 'left',
                  }}
                >
                  <span>Face Recognition Terminals & Lifeboat Roll Call</span>
                  {openAccordions.mustering ? <ChevronUp size={18} color="#d97706" /> : <ChevronDown size={18} color="#86868b" />}
                </button>

                {openAccordions.mustering && (
                  <div style={{ padding: '16px 20px', backgroundColor: '#ffffff', borderTop: '1px solid #f0f0f2' }}>
                    <div style={{ fontSize: '0.88rem', color: '#555558', lineHeight: 1.6, marginBottom: '14px' }}>
                      Fast 0.2-second facial verification per person handles wet faces and dim lighting. Operates with built-in battery backup and local cache during main power shutdown, instantly reporting missing personnel counts to the Offshore Installation Manager (OIM).
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '10px' }}>
                      <div style={{ backgroundColor: '#f8fafc', padding: '10px 14px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                        <div style={{ fontSize: '0.8rem', color: '#64748b' }}>Speed</div>
                        <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#0f172a' }}>&lt; 0.2s per person</div>
                      </div>
                      <div style={{ backgroundColor: '#f8fafc', padding: '10px 14px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                        <div style={{ fontSize: '0.8rem', color: '#64748b' }}>Offline Sync</div>
                        <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#0f172a' }}>100,000 faces local cache</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 7. SECTION: PROVIDE INSIGHTS WITH VISUALIZED DATA */}
      <section
        id="insights"
        style={{
          padding: 'clamp(60px, 8vw, 100px) 24px',
          backgroundColor: '#fafafc',
          borderBottom: '1px solid #e5e5e7',
        }}
      >
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '20px',
              padding: 'clamp(24px, 4vw, 40px)',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
              border: '1px solid #ebebeb',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 'clamp(24px, 4vw, 48px)',
              alignItems: 'center',
            }}
          >
            {/* Left Image */}
            <div
              style={{
                borderRadius: '14px',
                overflow: 'hidden',
                boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
                cursor: 'zoom-in',
              }}
              onClick={() => setLightboxImg('/images/offshore_oil_platform/feat_visualized_data.png')}
            >
              <img
                src="/images/offshore_oil_platform/feat_visualized_data.png"
                alt="Provide insights with visualized data"
                style={{ width: '100%', height: 'auto', display: 'block', transition: 'transform 0.4s ease' }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.03)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
              />
            </div>

            {/* Right Content & Accordions */}
            <div>
              <h3
                style={{
                  fontSize: 'clamp(1.6rem, 2.4vw, 2.2rem)',
                  fontWeight: 800,
                  color: '#1d1d1f',
                  letterSpacing: '-0.02em',
                  margin: '0 0 14px',
                }}
              >
                Provide insights with visualized data
              </h3>
              <p
                style={{
                  fontSize: '0.96rem',
                  color: '#555558',
                  lineHeight: 1.65,
                  margin: '0 0 24px',
                }}
              >
                Manage all devices and alarm information seamlessly through the HikCentral Professional software platform. Receive real-time alarm notifications in pop-up windows, enabling the security team to quickly respond with an intuitive user interface. Additionally, Hikvision’s software platform offers a visual data dashboard, providing a comprehensive and easy-to-understand overview of the system’s status.
              </p>

              {/* Accordion 1: LED Displays */}
              <div
                style={{
                  border: '1px solid #e5e5e7',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  marginBottom: '12px',
                }}
              >
                <button
                  onClick={() => toggleAccordion('led')}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '16px 20px',
                    backgroundColor: openAccordions.led ? '#fbfbfd' : '#ffffff',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: '#1d1d1f',
                    textAlign: 'left',
                  }}
                >
                  <span>LED Displays & Video Walls</span>
                  {openAccordions.led ? <ChevronUp size={18} color="#d97706" /> : <ChevronDown size={18} color="#86868b" />}
                </button>

                {openAccordions.led && (
                  <div style={{ padding: '16px 20px', backgroundColor: '#ffffff', borderTop: '1px solid #f0f0f2' }}>
                    <div style={{ fontSize: '0.88rem', color: '#555558', lineHeight: 1.6 }}>
                      Fine-pitch LED video wall systems engineered for 24/7 continuous offshore control room duty, displaying real-time split screens of well pressure telemetry, CCTV video loops, and vessel positioning radars.
                    </div>
                  </div>
                )}
              </div>

              {/* Accordion 2: Software */}
              <div
                style={{
                  border: '1px solid #e5e5e7',
                  borderRadius: '12px',
                  overflow: 'hidden',
                }}
              >
                <button
                  onClick={() => toggleAccordion('software')}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '16px 20px',
                    backgroundColor: openAccordions.software ? '#fbfbfd' : '#ffffff',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: '#1d1d1f',
                    textAlign: 'left',
                  }}
                >
                  <span>Software (HikCentral Professional Energy Edition)</span>
                  {openAccordions.software ? <ChevronUp size={18} color="#d97706" /> : <ChevronDown size={18} color="#86868b" />}
                </button>

                {openAccordions.software && (
                  <div style={{ padding: '16px 20px', backgroundColor: '#ffffff', borderTop: '1px solid #f0f0f2' }}>
                    <div style={{ fontSize: '0.88rem', color: '#555558', lineHeight: 1.6 }}>
                      Integrates SCADA Modbus inputs, optical gas alarms, perimeter tripwires, and biometric muster counts into a single 3D platform dashboard with automated emergency SOP workflows.
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 8. SECTION: SUCCESS STORIES */}
      <section
        id="stories"
        style={{
          padding: 'clamp(60px, 8vw, 100px) 24px',
          backgroundColor: '#ffffff',
          borderBottom: '1px solid #e5e5e7',
        }}
      >
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2
              style={{
                fontSize: 'clamp(2.1rem, 3.5vw, 3rem)',
                fontWeight: 800,
                color: '#1d1d1f',
                letterSpacing: '-0.025em',
                margin: '0 0 12px',
              }}
            >
              Success stories
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#6e6e73', margin: 0 }}>
              Discover how leading energy operators protect critical offshore assets
            </p>
          </div>

          {/* Success Story Hero Banner Card */}
          <div
            style={{
              backgroundColor: '#fafafc',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.06)',
              border: '1px solid #ebebeb',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 16px 36px rgba(0, 0, 0, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.06)';
            }}
          >
            {/* Story Image */}
            <div style={{ position: 'relative', minHeight: '320px' }}>
              <img
                src="/images/offshore_oil_platform/success_story_rig.jpg"
                alt="LATINA Offshore Platform Case Study"
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
                  top: '16px',
                  left: '16px',
                  backgroundColor: '#d97706',
                  color: '#ffffff',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  padding: '4px 12px',
                  borderRadius: '20px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                }}
              >
                Case Study
              </div>
            </div>

            {/* Story Details */}
            <div
              style={{
                padding: 'clamp(32px, 5vw, 48px)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <div style={{ fontSize: '0.85rem', color: '#86868b', fontWeight: 600, marginBottom: '8px' }}>
                August 21, 2024
              </div>
              <h3
                style={{
                  fontSize: 'clamp(1.35rem, 2vw, 1.75rem)',
                  fontWeight: 800,
                  color: '#1d1d1f',
                  lineHeight: 1.3,
                  margin: '0 0 16px',
                }}
              >
                Oil platform operator enhances staff health and safety and minimizes security risks with Hikvision
              </h3>
              <p
                style={{
                  fontSize: '0.94rem',
                  color: '#555558',
                  lineHeight: 1.65,
                  margin: '0 0 24px',
                }}
              >
                A premier offshore drilling contractor retrofitted its central production platforms with 316L explosion-proof cameras and centralized thermal surveillance, providing 360-degree all-weather monitoring and cutting unverified safety infractions by over 80%.
              </p>
              <div>
                <button
                  onClick={() => setShowContactModal(true)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: '#d97706',
                    background: 'none',
                    border: 'none',
                    fontSize: '0.95rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    padding: 0,
                  }}
                >
                  <span>Learn more about this deployment</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 9. SECTION: RELATED RESOURCES */}
      <section
        id="resources"
        style={{
          padding: 'clamp(60px, 8vw, 90px) 24px',
          backgroundColor: '#fafafc',
          borderBottom: '1px solid #e5e5e7',
        }}
      >
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2
              style={{
                fontSize: 'clamp(2rem, 3.2vw, 2.8rem)',
                fontWeight: 800,
                color: '#1d1d1f',
                letterSpacing: '-0.02em',
                margin: 0,
              }}
            >
              Related Resources
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '24px',
              maxWidth: '820px',
              margin: '0 auto',
            }}
          >
            {[
              {
                title: 'Offshore Oil Platform Solution Brochure',
                type: 'PDF',
                size: '4.8 MB',
              },
              {
                title: 'Explosion-Proof & Marine-Grade Camera Selection Guide',
                type: 'PDF',
                size: '6.2 MB',
              },
            ].map((res, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e5e5e7',
                  borderRadius: '14px',
                  padding: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.03)',
                  transition: 'all 0.2s ease',
                  cursor: 'pointer',
                }}
                onClick={() => setShowContactModal(true)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#d97706';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 18px rgba(0,0,0,0.06)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#e5e5e7';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.03)';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '10px',
                      backgroundColor: '#fef3c7',
                      color: '#d97706',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <FileText size={22} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.96rem', fontWeight: 700, color: '#1d1d1f', margin: '0 0 4px' }}>
                      {res.title}
                    </h4>
                    <span style={{ fontSize: '0.82rem', color: '#86868b' }}>
                      {res.type} | {res.size}
                    </span>
                  </div>
                </div>

                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    backgroundColor: '#f5f5f7',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#1d1d1f',
                  }}
                >
                  <Download size={16} />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 10. SECTION: YOU MAY ALSO BE INTERESTED IN */}
      <section
        id="related"
        style={{
          padding: 'clamp(60px, 8vw, 100px) 24px',
          backgroundColor: '#ffffff',
          borderBottom: '1px solid #e5e5e7',
        }}
      >
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2
              style={{
                fontSize: 'clamp(2.1rem, 3.5vw, 3rem)',
                fontWeight: 800,
                color: '#1d1d1f',
                letterSpacing: '-0.025em',
                margin: 0,
              }}
            >
              You may also be interested in
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '24px',
            }}
          >
            {[
              {
                title: 'Energy',
                desc: 'Clean energy generation, substation thermal monitoring, and smart grid transmission line integrity.',
                img: '/images/offshore_oil_platform/rec_energy.jpg',
                link: '/solutions/electrical-substations',
              },
              {
                title: 'Oil & Gas',
                desc: 'Comprehensive security, explosion-proof monitoring, and digital twin management for onshore and offshore assets.',
                img: '/images/offshore_oil_platform/rec_oil_gas.jpg',
                link: '/solutions/onshore-oilfields',
              },
              {
                title: 'Intelligent Inspection',
                desc: 'Radiometric thermography, acoustic gas detection, and automated AI anomaly inspection for heavy industry.',
                img: '/images/offshore_oil_platform/rec_intelligent_inspection.jpg',
                link: '/solutions/factories',
              },
            ].map((item, idx) => (
              <Link
                key={idx}
                to={item.link}
                style={{
                  textDecoration: 'none',
                  position: 'relative',
                  height: '340px',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '28px',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 16px 36px rgba(0,0,0,0.15)';
                  const img = e.currentTarget.querySelector('img');
                  if (img) img.style.transform = 'scale(1.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.08)';
                  const img = e.currentTarget.querySelector('img');
                  if (img) img.style.transform = 'scale(1)';
                }}
              >
                {/* Background Image */}
                <img
                  src={item.img}
                  alt={item.title}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                    zIndex: 1,
                  }}
                />

                {/* Dark Gradient Overlay */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0.92) 100%)',
                    zIndex: 2,
                  }}
                />

                {/* Content */}
                <div style={{ position: 'relative', zIndex: 3 }}>
                  <div
                    style={{
                      width: '32px',
                      height: '3px',
                      backgroundColor: '#d97706',
                      marginBottom: '12px',
                      borderRadius: '2px',
                    }}
                  />
                  <h3
                    style={{
                      fontSize: '1.45rem',
                      fontWeight: 700,
                      color: '#ffffff',
                      margin: '0 0 8px',
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '0.88rem',
                      color: 'rgba(255,255,255,0.85)',
                      lineHeight: 1.5,
                      margin: '0 0 16px',
                    }}
                  >
                    {item.desc}
                  </p>
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      color: '#ffffff',
                      fontSize: '0.84rem',
                      fontWeight: 600,
                    }}
                  >
                    <span>Explore Solution</span>
                    <ArrowRight size={14} color="#d97706" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* 11. SECTION: READY TO DISCUSS YOUR NEEDS? (BOTTOM CTA BANNER) */}
      <section
        style={{
          padding: 'clamp(60px, 8vw, 90px) 24px',
          backgroundColor: '#f5f5f7',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: 'clamp(2.2rem, 3.8vw, 3.2rem)',
              fontWeight: 800,
              color: '#1d1d1f',
              letterSpacing: '-0.025em',
              margin: '0 0 16px',
            }}
          >
            Ready to discuss your needs?
          </h2>
          <p
            style={{
              fontSize: '1.08rem',
              color: '#555558',
              lineHeight: 1.6,
              margin: '0 0 36px',
            }}
          >
            Connect with our certified marine & explosion-proof surveillance engineers to tailor an offshore oil platform solution for your facility.
          </p>

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
              onClick={() => setShowContactModal(true)}
              style={{
                backgroundColor: '#d92d20',
                color: '#ffffff',
                border: 'none',
                borderRadius: '8px',
                padding: '14px 32px',
                fontSize: '1rem',
                fontWeight: 600,
                cursor: 'pointer',
                boxShadow: '0 4px 14px rgba(217, 45, 32, 0.25)',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#b42318';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#d92d20';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Get in Touch
            </button>

            <Link
              to="/contact"
              style={{
                backgroundColor: '#d92d20',
                color: '#ffffff',
                textDecoration: 'none',
                borderRadius: '8px',
                padding: '14px 32px',
                fontSize: '1rem',
                fontWeight: 600,
                boxShadow: '0 4px 14px rgba(217, 45, 32, 0.25)',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#b42318';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#d92d20';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Find a Partner
            </Link>
          </div>
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      {lightboxImg && (
        <div
          onClick={() => setLightboxImg(null)}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
            cursor: 'zoom-out',
          }}
        >
          <div
            style={{
              position: 'relative',
              maxWidth: '92vw',
              maxHeight: '90vh',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightboxImg(null)}
              style={{
                position: 'absolute',
                top: '-44px',
                right: '0',
                backgroundColor: 'transparent',
                border: 'none',
                color: '#ffffff',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '0.9rem',
              }}
            >
              <X size={24} />
              <span>Close</span>
            </button>
            <img
              src={lightboxImg}
              alt="Expanded view"
              style={{
                width: '100%',
                maxHeight: '85vh',
                objectFit: 'contain',
                display: 'block',
                borderRadius: '8px',
              }}
            />
          </div>
        </div>
      )}

      {/* CONTACT SALES MODAL */}
      <ContactSalesModal
        isOpen={showContactModal}
        onClose={() => setShowContactModal(false)}
        solutionTitle="Offshore Oil Platform Solution"
      />
    </div>
  );
}
