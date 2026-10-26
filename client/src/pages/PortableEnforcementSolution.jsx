import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Activity,
  Shield,
  Camera,
  Layers,
  CheckCircle2,
  ChevronRight,
  ArrowRight,
  Maximize2,
  X,
  PhoneCall,
  Mail,
  Zap,
  Radio,
  Eye,
  FileCheck,
  Server,
  MapPin,
  Calendar,
  Tag,
  Plus,
  Check,
  Download,
  FileText,
  Sliders,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Cpu,
  MonitorCheck,
  BatteryCharging,
  HardDrive,
  Car,
  AlertTriangle
} from 'lucide-react';
import ContactSalesModal from '../components/ContactSalesModal';

// Interactive Scenario Card for Portable Enforcement
function ScenarioCard({ sc, onOpenModal }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        position: 'relative',
        height: '320px',
        borderRadius: '18px',
        overflow: 'hidden',
        cursor: 'pointer',
        backgroundColor: '#0a192f',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
        border: '1px solid rgba(255, 255, 255, 0.12)',
        transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease'
      }}
      onMouseEnter={(e) => {
        setIsHovered(true);
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = '0 16px 36px rgba(0, 113, 227, 0.22)';
      }}
      onMouseLeave={(e) => {
        setIsHovered(false);
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.12)';
      }}
      onClick={() => onOpenModal(sc)}
    >
      {/* Background Image */}
      <img
        src={sc.img}
        alt={sc.title}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
          transition: 'transform 0.5s ease',
          transform: isHovered ? 'scale(1.04)' : 'scale(1)'
        }}
      />

      {/* Vignette Gradient Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.85) 100%)',
          pointerEvents: 'none'
        }}
      />

      {/* Top Left: Live Status Badge */}
      <div
        style={{
          position: 'absolute',
          top: '14px',
          left: '14px',
          backgroundColor: 'rgba(10, 20, 35, 0.85)',
          backdropFilter: 'blur(8px)',
          padding: '4px 12px',
          borderRadius: '9999px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          border: '1px solid rgba(255, 255, 255, 0.18)',
          zIndex: 2
        }}
      >
        <span
          style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            backgroundColor: '#34c759',
            boxShadow: '0 0 8px #34c759',
            display: 'inline-block'
          }}
        />
        <span style={{ fontSize: '0.74rem', color: '#ffffff', fontWeight: 600, letterSpacing: '0.04em' }}>
          PATROL ACTIVE
        </span>
      </div>

      {/* Top Right: Zoom / View Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onOpenModal(sc);
        }}
        title="Zoom Scenario"
        style={{
          position: 'absolute',
          top: '14px',
          right: '14px',
          backgroundColor: 'rgba(10, 20, 35, 0.75)',
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(255, 255, 255, 0.25)',
          color: '#ffffff',
          borderRadius: '50%',
          width: '34px',
          height: '34px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          zIndex: 2,
          transition: 'all 0.2s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = 'rgba(0, 113, 227, 0.9)';
          e.currentTarget.style.transform = 'scale(1.08)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'rgba(10, 20, 35, 0.75)';
          e.currentTarget.style.transform = 'scale(1)';
        }}
      >
        <Maximize2 size={15} />
      </button>

      {/* Bottom Left: Location Title */}
      <div
        style={{
          position: 'absolute',
          bottom: '16px',
          left: '16px',
          backgroundColor: 'rgba(10, 20, 35, 0.88)',
          backdropFilter: 'blur(12px)',
          color: '#ffffff',
          padding: '6px 16px',
          borderRadius: '9999px',
          fontSize: '0.86rem',
          fontWeight: 600,
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          zIndex: 2
        }}
      >
        <MapPin size={14} color="#0071e3" />
        {sc.title}
      </div>

      {/* Bottom Right: Patrol Telemetry HUD */}
      <div
        style={{
          position: 'absolute',
          bottom: '16px',
          right: '16px',
          backgroundColor: 'rgba(12, 24, 44, 0.92)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          borderRadius: '10px',
          padding: '8px 14px',
          color: '#ffffff',
          fontSize: '0.8rem',
          lineHeight: 1.4,
          boxShadow: '0 4px 14px rgba(0,0,0,0.4)',
          zIndex: 2,
          minWidth: '165px'
        }}
      >
        <div
          style={{
            color: '#34c759',
            fontSize: '0.72rem',
            fontWeight: 700,
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
            marginBottom: '3px',
            borderBottom: '1px solid rgba(255,255,255,0.12)',
            paddingBottom: '3px',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}
        >
          <Shield size={12} color="#34c759" />
          {sc.telemetry?.mode || 'Field Enforcement'}
        </div>
        <div style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '0.72rem' }}>
          Device: <strong style={{ color: '#ffffff' }}>{sc.telemetry?.device || 'BWC 4G / GPS'}</strong>
        </div>
        <div style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '0.72rem' }}>
          Battery: <strong style={{ color: '#34c759' }}>{sc.telemetry?.battery || '94% (14h rem)'}</strong>
        </div>
      </div>
    </div>
  );
}

export default function PortableEnforcementSolution() {
  const [activeTab, setActiveTab] = useState('bodyworn');
  const [lightboxImg, setLightboxImg] = useState(null);
  const [activeScenarioModal, setActiveScenarioModal] = useState(null);
  const [showContactModal, setShowContactModal] = useState(false);
  const [contactSubject, setContactSubject] = useState('Portable Enforcement Solution');
  const [expandedCategories, setExpandedCategories] = useState({
    'cat-bwc': true,
    'cat-dock': true,
    'cat-ptz': true,
    'cat-mnvr': true
  });
  const [toastMessage, setToastMessage] = useState(null);

  // Auto-dismiss toast
  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => setToastMessage(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  const toggleAccordion = (catId) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [catId]: !prev[catId]
    }));
  };

  const handleOpenContact = (subject = 'Portable Enforcement Solution') => {
    setContactSubject(subject);
    setShowContactModal(true);
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Recommended Solution Tab Definitions
  const tabs = [
    { id: 'bodyworn', name: 'Body worn enforcement' },
    { id: 'onboard', name: 'On board enforcement' }
  ];

  // Recommended Solution Content per Tab
  const solutionData = {
    bodyworn: {
      id: 'bodyworn',
      headline: 'Solid enforcement evidence, guaranteed personnel safety',
      bullets: [
        'Provides effective image and video evidence for law enforcement operations and forensic analysis',
        'Ensures law enforcement personnel safety with one-touch emergency alarms, GPS live tracking, and two-way audio intercom',
        'Up to 15 hours of continuous operating time for HD video recording (with 4G, GPS, LCD disabled)',
        'Rugged industrial hardware designed to be impact-safe from drops of 1.5 meters',
        'Waterproof with IP67 protection, making it dependable in extreme outdoor rain, dust, and temperature conditions'
      ],
      scenarios: [
        {
          title: 'Police stations',
          img: '/images/portable-enforcement/scenario_police_stations.jpg',
          telemetry: {
            mode: 'Officer Shift Ingestion',
            device: 'Body Camera & Dock',
            battery: 'Full 100% (Ready)'
          }
        }
      ],
      architectures: [
        {
          id: 'arch-bodyworn',
          title: 'Solution with body worn cameras & docking stations',
          topoImg: '/images/portable-enforcement/topo_bodyworn.jpg',
          categories: [
            {
              id: 'cat-bwc',
              title: 'Body worn cameras',
              items: [
                {
                  name: 'Coloron 4K 4G GPS Body Worn Camera',
                  model: 'CLR-BWC-4K80',
                  desc: '1080p/4K high-definition body camera with integrated 4G LTE wireless live streaming, GPS/Beidou satellite tracking, electronic image stabilization (EIS), and 120-degree wide-angle lens. Features AES-256 encrypted storage.',
                  badge: 'Flagship 4G BWC'
                },
                {
                  name: 'Coloron Ultra-Lightweight Tactical Police Body Camera',
                  model: 'CLR-BWC-200',
                  desc: 'Compact 130g rugged body camera featuring one-touch recording, infrared night illumination up to 10 meters, and pre-event buffering up to 30 seconds to capture initial confrontation moments.',
                  badge: 'IP67 Rugged'
                }
              ]
            },
            {
              id: 'cat-dock',
              title: 'Docking stations',
              items: [
                {
                  name: 'Coloron 8-Bay Intelligent Evidence Ingestion Docking Station',
                  model: 'CLR-DS-800',
                  desc: 'Simultaneously charges 8 body worn cameras while automatically extracting and purging encrypted evidence video. Features built-in touch screen and gigabit LAN transfer to central police storage.',
                  badge: '8-Bay Terminal'
                },
                {
                  name: 'Coloron 24-Bay Enterprise Evidence Management Terminal',
                  model: 'CLR-DS-2400',
                  desc: 'High-capacity kiosk docking station with integrated facial recognition officer login, automatic chain of custody watermarking, and redundant RAID-6 archiving.',
                  badge: 'Enterprise Kiosk'
                }
              ]
            }
          ]
        }
      ]
    },
    onboard: {
      id: 'onboard',
      headline: 'Secures critical borders with a mobile view around the city',
      bullets: [
        'Regulates driving behaviors and reduces traffic violations with patrol car mobile dynamic enforcement',
        'Provides a visual law enforcement system to continuously record high-definition patrol video as certified evidence',
        'IR speed domes support recognition of license plate, color, vehicle type, and manufacturer while vehicle is in motion',
        '360-degree endless pan rotation with optical zoom allows officers to track suspects from safe stand-off distances'
      ],
      scenarios: [
        {
          title: 'Urban roads',
          img: '/images/portable-enforcement/scenario_urban_roads.jpg',
          telemetry: {
            mode: 'Mobile Road Patrol',
            device: 'Rooftop PTZ Camera',
            battery: 'Vehicle Powered 12V'
          }
        },
        {
          title: 'Checkpoints',
          img: '/images/portable-enforcement/scenario_checkpoints.jpg',
          telemetry: {
            mode: 'Highway Checkpoint ANPR',
            device: 'Mobile ANPR Terminal',
            battery: 'Auxiliary Battery Active'
          }
        }
      ],
      architectures: [
        {
          id: 'arch-onboard',
          title: 'Solution with vehicle-mounted PTZ dome camera & mobile NVR',
          topoImg: '/images/portable-enforcement/topo_onboard.jpg',
          categories: [
            {
              id: 'cat-ptz',
              title: 'Vehicle-mounted PTZ dome cameras',
              items: [
                {
                  name: 'Coloron 4K 30x Vehicle-Mounted Infrared Patrol PTZ Camera',
                  model: 'CLR-PTZ-500R',
                  desc: 'Anti-shock magnetic roof-mount PTZ camera with gyro stabilization for moving patrol cars. Equipped with 150m IR illumination, wiper blade, and IP66 anti-vibration housing.',
                  badge: 'Patrol Roof PTZ'
                }
              ]
            },
            {
              id: 'cat-mnvr',
              title: 'In-vehicle mobile NVRs & terminals',
              items: [
                {
                  name: 'Coloron 8-Channel Mobile Rugged Video Recorder',
                  model: 'CLR-MNVR-800',
                  desc: 'ISO 7637-2 certified in-vehicle mobile NVR supporting dual 4G/5G SIM cards, GPS geo-stamping, inertia sensors for impact detection, and hot-swappable vibration-damped SSD drives.',
                  badge: 'Mobile NVR'
                }
              ]
            }
          ]
        }
      ]
    }
  };

  const currentTab = solutionData[activeTab];

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif', color: '#1d1d1f' }}>
      
      {/* Toast Notification */}
      {toastMessage && (
        <div
          style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            backgroundColor: 'rgba(10, 20, 35, 0.95)',
            color: '#ffffff',
            padding: '12px 22px',
            borderRadius: '12px',
            backdropFilter: 'blur(12px)',
            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.25)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            fontSize: '0.9rem',
            fontWeight: 500,
            zIndex: 99999,
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}
        >
          <Check size={16} color="#34c759" />
          {toastMessage}
        </div>
      )}

      {/* 1. HERO BANNER - Exact 750px Height with Curved Arc Overlay & Police Cruiser Emergency Lights */}
      <section
        style={{
          position: 'relative',
          height: '750px',
          overflow: 'hidden',
          backgroundColor: '#0a192f',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        {/* Background Image: Police Cruiser with Blue Emergency Light Bar */}
        <img
          src="/images/portable-enforcement/hero_banner.jpg"
          alt="Portable Enforcement Solution"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center center'
          }}
        />

        {/* Signature Deep Blue Organic Arc Overlay (Exact match to screenshot) */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            width: '58%',
            minWidth: '420px',
            background: 'linear-gradient(135deg, rgba(13, 44, 108, 0.96) 0%, rgba(20, 58, 130, 0.92) 65%, rgba(23, 66, 145, 0.85) 100%)',
            clipPath: 'ellipse(92% 100% at 0% 50%)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            paddingLeft: 'max(40px, 8vw)',
            paddingRight: '60px',
            zIndex: 2
          }}
        >
          {/* Badge: Solutions by Function */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              border: '1px solid rgba(255, 255, 255, 0.25)',
              padding: '6px 14px',
              borderRadius: '9999px',
              width: 'fit-content',
              marginBottom: '16px',
              backdropFilter: 'blur(8px)'
            }}
          >
            <Activity size={14} color="#ffffff" />
            <span style={{ fontSize: '0.85rem', color: '#ffffff', fontWeight: 600, letterSpacing: '0.02em' }}>
              Solutions by Function
            </span>
          </div>

          {/* Main Title: Portable Enforcement */}
          <h1
            style={{
              fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)',
              fontWeight: 800,
              color: '#ffffff',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              margin: 0
            }}
          >
            Portable Enforcement
          </h1>
        </div>
      </section>

      {/* 2. STICKY SUB-NAVIGATION BAR (Exact match to screenshot) */}
      <nav
        style={{
          position: 'sticky',
          top: '64px',
          zIndex: 40,
          backgroundColor: '#ffffff',
          borderBottom: '1px solid #e5e5ea',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)'
        }}
      >
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '52px',
            overflowX: 'auto',
            whiteSpace: 'nowrap',
            gap: '20px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
            <button
              onClick={() => scrollToSection('what-we-offer')}
              style={{
                background: 'none',
                border: 'none',
                fontSize: '0.88rem',
                fontWeight: 600,
                color: '#1d1d1f',
                cursor: 'pointer',
                padding: '6px 0',
                transition: 'color 0.2s'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#d92323')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#1d1d1f')}
            >
              What we offer
            </button>
            <button
              onClick={() => scrollToSection('recommended-solution')}
              style={{
                background: 'none',
                border: 'none',
                fontSize: '0.88rem',
                fontWeight: 600,
                color: '#d92323',
                cursor: 'pointer',
                padding: '6px 0',
                borderBottom: '2px solid #d92323'
              }}
            >
              Recommended solution
            </button>
            <button
              onClick={() => scrollToSection('download-section')}
              style={{
                background: 'none',
                border: 'none',
                fontSize: '0.88rem',
                fontWeight: 600,
                color: '#1d1d1f',
                cursor: 'pointer',
                padding: '6px 0',
                transition: 'color 0.2s'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#d92323')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#1d1d1f')}
            >
              Download
            </button>
            <button
              onClick={() => scrollToSection('interested-in')}
              style={{
                background: 'none',
                border: 'none',
                fontSize: '0.88rem',
                fontWeight: 600,
                color: '#1d1d1f',
                cursor: 'pointer',
                padding: '6px 0',
                transition: 'color 0.2s'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#d92323')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#1d1d1f')}
            >
              You may also be interested in
            </button>
          </div>

          <button
            onClick={() => handleOpenContact('Portable Enforcement Solution Inquiry')}
            style={{
              backgroundColor: '#d92323',
              color: '#ffffff',
              border: 'none',
              padding: '7px 18px',
              borderRadius: '6px',
              fontSize: '0.85rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'background-color 0.2s ease, transform 0.15s ease',
              flexShrink: 0
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#b71c1c';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#d92323';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Ask about solutions
          </button>
        </div>
      </nav>

      {/* 3. "WHAT WE OFFER" SECTION - Exact 2 3D Icons Layout */}
      <section
        id="what-we-offer"
        style={{
          padding: '80px 24px 60px',
          maxWidth: '1240px',
          margin: '0 auto',
          textAlign: 'center'
        }}
      >
        <h2
          style={{
            fontSize: 'clamp(2rem, 3.2vw, 2.6rem)',
            fontWeight: 700,
            color: '#1d1d1f',
            marginBottom: '16px',
            letterSpacing: '-0.01em'
          }}
        >
          What we offer
        </h2>
        <p
          style={{
            fontSize: '1.05rem',
            lineHeight: 1.6,
            color: '#515154',
            maxWidth: '860px',
            margin: '0 auto 60px'
          }}
        >
          Coloron's Portable Enforcement System features body worn cameras, portable PTZ dome cameras, integrated video recording, 3G and 4G wireless transmission, GPS positioning, and centralized management. The docking station provides a simplified way to access and back up law-enforcement data while also charging the cameras. The portable PTZ camera provides critical views on the street and around the city to secure the scene.
        </p>

        {/* 2 Feature Items Grid (Exact layout from user screenshot) */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            gap: '80px',
            flexWrap: 'wrap'
          }}
        >
          {/* Item 1: Body worn enforcement */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              cursor: 'pointer',
              maxWidth: '220px'
            }}
            onClick={() => {
              setActiveTab('bodyworn');
              scrollToSection('recommended-solution');
            }}
          >
            <div
              style={{
                width: '100px',
                height: '100px',
                marginBottom: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'transform 0.3s ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-4px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              <img
                src="/images/portable-enforcement/offer_icon_bodyworn.jpg"
                alt="Body worn enforcement"
                style={{ width: '90px', height: '90px', objectFit: 'contain' }}
              />
            </div>
            <h3
              style={{
                fontSize: '0.96rem',
                fontWeight: 600,
                color: '#1d1d1f',
                lineHeight: 1.35,
                margin: 0
              }}
            >
              Body worn enforcement
            </h3>
          </div>

          {/* Item 2: On-board enforcement */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              cursor: 'pointer',
              maxWidth: '220px'
            }}
            onClick={() => {
              setActiveTab('onboard');
              scrollToSection('recommended-solution');
            }}
          >
            <div
              style={{
                width: '100px',
                height: '100px',
                marginBottom: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'transform 0.3s ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-4px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              <img
                src="/images/portable-enforcement/offer_icon_onboard.jpg"
                alt="On-board enforcement"
                style={{ width: '90px', height: '90px', objectFit: 'contain' }}
              />
            </div>
            <h3
              style={{
                fontSize: '0.96rem',
                fontWeight: 600,
                color: '#1d1d1f',
                lineHeight: 1.35,
                margin: 0
              }}
            >
              On-board enforcement
            </h3>
          </div>
        </div>
      </section>

      {/* 4. "RECOMMENDED SOLUTION" SECTION - 2 Tabs, Scenario Cards & Topologies */}
      <section id="recommended-solution" style={{ padding: '80px 24px', maxWidth: '1240px', margin: '0 auto' }}>
        <h2
          style={{
            fontSize: 'clamp(2rem, 3.2vw, 2.6rem)',
            fontWeight: 700,
            color: '#1d1d1f',
            textAlign: 'center',
            marginBottom: '40px'
          }}
        >
          Recommended solution
        </h2>

        {/* 2 Tabs Bar */}
        <div
          style={{
            display: 'flex',
            borderBottom: '1px solid #d2d2d7',
            marginBottom: '48px',
            overflowX: 'auto',
            gap: '8px'
          }}
        >
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  padding: '14px 20px',
                  fontSize: '0.98rem',
                  fontWeight: isActive ? 600 : 500,
                  color: isActive ? '#d92323' : '#6e6e73',
                  borderBottom: isActive ? '2px solid #d92323' : '2px solid transparent',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.2s ease',
                  outline: 'none'
                }}
              >
                {tab.name}
              </button>
            );
          })}
        </div>

        {/* Active Tab Content */}
        <div>
          {/* Subheading & Bullet Points */}
          <div style={{ marginBottom: '40px' }}>
            <h3
              style={{
                fontSize: '1.45rem',
                fontWeight: 700,
                color: '#1d1d1f',
                marginBottom: '16px'
              }}
            >
              {currentTab.headline}
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {currentTab.bullets.map((bullet, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <span
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      backgroundColor: '#d92323',
                      marginTop: '8px',
                      flexShrink: 0
                    }}
                  />
                  <p style={{ fontSize: '0.96rem', color: '#424245', lineHeight: 1.55, margin: 0 }}>
                    {bullet}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Scenario Cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: currentTab.scenarios.length === 1 ? 'minmax(320px, 620px)' : 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '24px',
              marginBottom: '56px',
              justifyContent: 'center'
            }}
          >
            {currentTab.scenarios.map((sc, idx) => (
              <ScenarioCard key={idx} sc={sc} onOpenModal={(scenario) => setActiveScenarioModal(scenario)} />
            ))}
          </div>

          {/* Solution Topologies / System Architecture */}
          {currentTab.architectures && currentTab.architectures.length > 0 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
              {currentTab.architectures.map((arch) => (
                <div
                  key={arch.id}
                  style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid #e5e5ea',
                    borderRadius: '16px',
                    padding: '36px',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)'
                  }}
                >
                  <h4
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      color: '#1d1d1f',
                      marginBottom: '28px',
                      borderBottom: '1px solid #f0f0f2',
                      paddingBottom: '12px'
                    }}
                  >
                    {arch.title}
                  </h4>

                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
                      gap: '40px',
                      alignItems: 'start'
                    }}
                  >
                    {/* Topology Diagram with Lightbox */}
                    <div
                      style={{
                        backgroundColor: '#f5f5f7',
                        borderRadius: '12px',
                        padding: '16px',
                        cursor: 'pointer',
                        border: '1px solid #e5e5ea',
                        position: 'relative',
                        transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                      }}
                      onClick={() => setLightboxImg(arch.topoImg)}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.08)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      <img
                        src={arch.topoImg}
                        alt={arch.title}
                        style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '8px' }}
                      />
                      <div
                        style={{
                          position: 'absolute',
                          bottom: '12px',
                          right: '12px',
                          backgroundColor: 'rgba(0,0,0,0.65)',
                          color: '#ffffff',
                          padding: '4px 10px',
                          borderRadius: '6px',
                          fontSize: '0.75rem',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '5px'
                        }}
                      >
                        <Maximize2 size={12} />
                        Click to zoom
                      </div>
                    </div>

                    {/* Accordion Product Categories */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                      {arch.categories.map((cat) => {
                        const isOpen = expandedCategories[cat.id];
                        return (
                          <div
                            key={cat.id}
                            style={{
                              border: '1px solid #e5e5ea',
                              borderRadius: '10px',
                              overflow: 'hidden',
                              backgroundColor: '#ffffff'
                            }}
                          >
                            <button
                              onClick={() => toggleAccordion(cat.id)}
                              style={{
                                width: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                padding: '16px 20px',
                                background: isOpen ? '#fbfbfd' : '#ffffff',
                                border: 'none',
                                cursor: 'pointer',
                                textAlign: 'left',
                                transition: 'background-color 0.2s'
                              }}
                            >
                              <span style={{ fontSize: '1rem', fontWeight: 600, color: '#1d1d1f' }}>
                                {cat.title}
                              </span>
                              {isOpen ? <ChevronUp size={18} color="#6e6e73" /> : <ChevronDown size={18} color="#6e6e73" />}
                            </button>

                            {isOpen && (
                              <div style={{ padding: '0 20px 20px', borderTop: '1px solid #f0f0f2' }}>
                                {cat.items.map((item, idx) => (
                                  <div
                                    key={idx}
                                    style={{
                                      paddingTop: '16px',
                                      marginTop: idx > 0 ? '16px' : '0',
                                      borderTop: idx > 0 ? '1px dashed #e5e5ea' : 'none'
                                    }}
                                  >
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px', marginBottom: '6px' }}>
                                      <h5 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#1d1d1f', margin: 0 }}>
                                        {item.name}
                                      </h5>
                                      {item.badge && (
                                        <span
                                          style={{
                                            backgroundColor: '#fef2f2',
                                            color: '#d92323',
                                            fontSize: '0.72rem',
                                            fontWeight: 600,
                                            padding: '2px 8px',
                                            borderRadius: '9999px',
                                            border: '1px solid #fecaca',
                                            whiteSpace: 'nowrap'
                                          }}
                                        >
                                          {item.badge}
                                        </span>
                                      )}
                                    </div>
                                    <div style={{ fontSize: '0.82rem', color: '#0071e3', fontWeight: 600, marginBottom: '6px' }}>
                                      Model: {item.model}
                                    </div>
                                    <p style={{ fontSize: '0.86rem', color: '#6e6e73', lineHeight: 1.5, margin: 0 }}>
                                      {item.desc}
                                    </p>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 5. "DOWNLOAD" SECTION - Exact matching flyer box from screenshot */}
      <section
        id="download-section"
        style={{
          padding: '80px 24px',
          backgroundColor: '#fbfbfd',
          borderTop: '1px solid #f0f0f2',
          borderBottom: '1px solid #f0f0f2'
        }}
      >
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: 'clamp(2rem, 3.2vw, 2.6rem)',
              fontWeight: 700,
              color: '#1d1d1f',
              textAlign: 'center',
              marginBottom: '40px'
            }}
          >
            Download
          </h2>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #e5e5ea',
                borderRadius: '12px',
                padding: '20px 24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
                maxWidth: '600px',
                boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onClick={() => {
                setToastMessage('Downloading Intelligent Vehicle Light Bar Solution Flyer PDF...');
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.08)';
                e.currentTarget.style.borderColor = '#d92323';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.04)';
                e.currentTarget.style.borderColor = '#e5e5ea';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div
                  style={{
                    width: '42px',
                    height: '48px',
                    backgroundColor: '#fef2f2',
                    border: '1px solid #fecaca',
                    borderRadius: '6px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#d92323',
                    fontWeight: 700,
                    fontSize: '0.72rem'
                  }}
                >
                  <FileText size={20} />
                  PDF
                </div>
                <div>
                  <div style={{ fontSize: '0.76rem', color: '#86868b', textTransform: 'uppercase', fontWeight: 600 }}>
                    Flyer
                  </div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 600, color: '#1d1d1f', margin: '2px 0 0' }}>
                    Intelligent Vehicle Light Bar Solution
                  </h4>
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
                  color: '#1d1d1f'
                }}
              >
                <Download size={18} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. "YOU MAY ALSO BE INTERESTED IN" SECTION */}
      <section id="interested-in" style={{ padding: '80px 24px', maxWidth: '1240px', margin: '0 auto' }}>
        <h2
          style={{
            fontSize: 'clamp(2rem, 3.2vw, 2.6rem)',
            fontWeight: 700,
            color: '#1d1d1f',
            textAlign: 'center',
            marginBottom: '50px'
          }}
        >
          You may also be interested in
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px'
          }}
        >
          {/* Card 1: Violation Detection */}
          <Link
            to="/solutions/violation-detection"
            style={{
              textDecoration: 'none',
              borderRadius: '16px',
              overflow: 'hidden',
              backgroundColor: '#1c1c1e',
              padding: '36px 30px',
              color: '#ffffff',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '220px',
              boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
              transition: 'transform 0.25s ease, box-shadow 0.25s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 16px 36px rgba(0,0,0,0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.1)';
            }}
          >
            <div>
              <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#86868b', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                Solutions by Function
              </span>
              <h4 style={{ fontSize: '1.4rem', fontWeight: 700, margin: '8px 0 12px', color: '#ffffff' }}>
                Violation Detection
              </h4>
              <p style={{ fontSize: '0.9rem', color: '#a1a1a6', lineHeight: 1.5, margin: 0 }}>
                Automated multi-lane red light running, illegal parking, wrong-way driving, and lane change enforcement.
              </p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#d92323', fontWeight: 600, fontSize: '0.9rem', marginTop: '20px' }}>
              Learn more <ArrowRight size={16} />
            </div>
          </Link>

          {/* Card 2: Urban Roadways */}
          <Link
            to="/solutions/urban-roadways"
            style={{
              textDecoration: 'none',
              borderRadius: '16px',
              overflow: 'hidden',
              backgroundColor: '#1c1c1e',
              padding: '36px 30px',
              color: '#ffffff',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '220px',
              boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
              transition: 'transform 0.25s ease, box-shadow 0.25s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 16px 36px rgba(0,0,0,0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.1)';
            }}
          >
            <div>
              <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#86868b', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                Solutions by Scenario
              </span>
              <h4 style={{ fontSize: '1.4rem', fontWeight: 700, margin: '8px 0 12px', color: '#ffffff' }}>
                Urban Roadways
              </h4>
              <p style={{ fontSize: '0.9rem', color: '#a1a1a6', lineHeight: 1.5, margin: 0 }}>
                Comprehensive arterial signal coordination, bus-lane prioritization, and citywide transit optimization.
              </p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#d92323', fontWeight: 600, fontSize: '0.9rem', marginTop: '20px' }}>
              Learn more <ArrowRight size={16} />
            </div>
          </Link>

          {/* Card 3: Traffic & Incident Detection */}
          <Link
            to="/solutions/incident-detection"
            style={{
              textDecoration: 'none',
              borderRadius: '16px',
              overflow: 'hidden',
              backgroundColor: '#1c1c1e',
              padding: '36px 30px',
              color: '#ffffff',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '220px',
              boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
              transition: 'transform 0.25s ease, box-shadow 0.25s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 16px 36px rgba(0,0,0,0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.1)';
            }}
          >
            <div>
              <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#86868b', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                Solutions by Function
              </span>
              <h4 style={{ fontSize: '1.4rem', fontWeight: 700, margin: '8px 0 12px', color: '#ffffff' }}>
                Incident Detection
              </h4>
              <p style={{ fontSize: '0.9rem', color: '#a1a1a6', lineHeight: 1.5, margin: 0 }}>
                Autonomous detection of stopped vehicles, pedestrians, debris, and wrong-way traffic along highway tunnels.
              </p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#d92323', fontWeight: 600, fontSize: '0.9rem', marginTop: '20px' }}>
              Learn more <ArrowRight size={16} />
            </div>
          </Link>
        </div>
      </section>

      {/* 7. "READY TO DISCUSS YOUR NEEDS?" CTA BANNER */}
      <section
        style={{
          padding: '80px 24px',
          backgroundColor: '#f5f5f7',
          textAlign: 'center'
        }}
      >
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: 'clamp(2rem, 3.2vw, 2.5rem)',
              fontWeight: 700,
              color: '#1d1d1f',
              marginBottom: '28px'
            }}
          >
            Ready to discuss your needs?
          </h2>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <button
              onClick={() => handleOpenContact('Portable Enforcement Consultation')}
              style={{
                backgroundColor: '#d92323',
                color: '#ffffff',
                border: 'none',
                padding: '14px 32px',
                borderRadius: '8px',
                fontSize: '1rem',
                fontWeight: 600,
                cursor: 'pointer',
                boxShadow: '0 4px 14px rgba(217, 35, 35, 0.3)',
                transition: 'background-color 0.2s, transform 0.15s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#b71c1c';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#d92323';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Contact Sales
            </button>

            <button
              onClick={() => handleOpenContact('Portable Enforcement Technical Advisory')}
              style={{
                backgroundColor: '#ffffff',
                color: '#d92323',
                border: '1.5px solid #d92323',
                padding: '14px 32px',
                borderRadius: '8px',
                fontSize: '1rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'background-color 0.2s, transform 0.15s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#fff5f5';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#ffffff';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Talk to an Expert
            </button>
          </div>
        </div>
      </section>

      {/* SCENARIO DETAIL MODAL */}
      {activeScenarioModal && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.88)',
            backdropFilter: 'blur(16px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 99999,
            padding: '24px'
          }}
          onClick={() => setActiveScenarioModal(null)}
        >
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '960px',
              backgroundColor: '#0a192f',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.6)',
              border: '1px solid rgba(255, 255, 255, 0.15)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '18px 24px',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                backgroundColor: 'rgba(10, 20, 35, 0.9)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span
                  style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    backgroundColor: '#34c759',
                    boxShadow: '0 0 10px #34c759'
                  }}
                />
                <h3 style={{ color: '#ffffff', fontSize: '1.15rem', fontWeight: 700, margin: 0 }}>
                  {activeScenarioModal.title} — Mobile Law Enforcement Deployment
                </h3>
              </div>

              <button
                onClick={() => setActiveScenarioModal(null)}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  border: 'none',
                  color: '#ffffff',
                  borderRadius: '50%',
                  width: '36px',
                  height: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
              >
                <X size={18} />
              </button>
            </div>

            {/* Image in Modal */}
            <div style={{ position: 'relative', maxHeight: '65vh', backgroundColor: '#000000' }}>
              <img
                src={activeScenarioModal.img}
                alt={activeScenarioModal.title}
                style={{ width: '100%', maxHeight: '65vh', objectFit: 'contain', display: 'block' }}
              />
            </div>

            {/* Telemetry Footer */}
            <div
              style={{
                padding: '18px 24px',
                backgroundColor: 'rgba(10, 20, 35, 0.95)',
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '16px'
              }}
            >
              <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
                <div>
                  <div style={{ color: '#86868b', fontSize: '0.75rem', textTransform: 'uppercase' }}>Mode</div>
                  <div style={{ color: '#34c759', fontWeight: 700, fontSize: '0.95rem' }}>
                    {activeScenarioModal.telemetry?.mode}
                  </div>
                </div>
                <div>
                  <div style={{ color: '#86868b', fontSize: '0.75rem', textTransform: 'uppercase' }}>Primary Device</div>
                  <div style={{ color: '#ffffff', fontWeight: 600, fontSize: '0.95rem' }}>
                    {activeScenarioModal.telemetry?.device}
                  </div>
                </div>
                <div>
                  <div style={{ color: '#86868b', fontSize: '0.75rem', textTransform: 'uppercase' }}>Battery Life</div>
                  <div style={{ color: '#ffffff', fontWeight: 600, fontSize: '0.95rem' }}>
                    {activeScenarioModal.telemetry?.battery}
                  </div>
                </div>
              </div>

              <button
                onClick={() => {
                  setToastMessage('Exported patrol audit evidence report.');
                }}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.12)',
                  color: '#ffffff',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  padding: '8px 16px',
                  borderRadius: '8px',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <Download size={14} /> Export Patrol Audit
              </button>
            </div>
          </div>
        </div>
      )}

      {/* LIGHTBOX MODAL */}
      {lightboxImg && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.88)',
            backdropFilter: 'blur(16px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 99999,
            padding: '24px'
          }}
          onClick={() => setLightboxImg(null)}
        >
          <div style={{ position: 'relative', maxWidth: '90vw', maxHeight: '90vh' }}>
            <button
              onClick={() => setLightboxImg(null)}
              style={{
                position: 'absolute',
                top: '-45px',
                right: '0',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                border: 'none',
                color: '#ffffff',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              <X size={20} />
            </button>
            <img
              src={lightboxImg}
              alt="Zoomed diagram"
              style={{
                maxWidth: '90vw',
                maxHeight: '85vh',
                borderRadius: '12px',
                boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                display: 'block'
              }}
            />
          </div>
        </div>
      )}

      {/* CONTACT SALES MODAL */}
      <ContactSalesModal
        isOpen={showContactModal}
        onClose={() => setShowContactModal(false)}
        initialSubject={contactSubject}
      />
    </div>
  );
}
