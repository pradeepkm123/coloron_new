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
  Users,
  Eye,
  Car,
  Warehouse,
  Key,
  ChevronDown,
  ChevronUp,
  Volume2,
  Lock,
  Compass
} from 'lucide-react';
import ContactSalesModal from '../components/ContactSalesModal';

// Interactive hotspots for the 3D Car Dealership Complex
const dealershipHotspots = [
  {
    id: 'outdoor-lot',
    title: 'Outdoor Vehicle Inventory Lot',
    desc: 'High-density outdoor vehicle storage protected by AcuSense ColorVu bullet cameras with active strobe light deterrence and audible warnings against after-hours intrusion.',
    top: '48%',
    left: '60%',
    device: 'ColorVu Active Deterrence Bullet Camera',
    spec: 'F1.0 super-aperture, 24/7 full-color, flashing strobe & siren, human/vehicle classification',
  },
  {
    id: 'showroom',
    title: 'New Vehicle Showroom',
    desc: 'Ultra HD 4K wide-angle panoramic cameras and customer foot-traffic heatmaps analyzing buyer dwell times and visitor engagement around flagship models.',
    top: '42%',
    left: '26%',
    device: '4K Panoramic Fisheye & Dwell Heatmap Camera',
    spec: '360° surround view, customer dwell heatmap, virtual tripwire, discrete low-profile design',
  },
  {
    id: 'service-bay',
    title: 'Service & Maintenance Bay',
    desc: 'High-definition coverage of vehicle intake and repair bays documenting condition at drop-off and pickup to prevent false scratch and damage claims.',
    top: '22%',
    left: '76%',
    device: 'High-FPS Varifocal Vehicle Inspection Camera',
    spec: 'Motorized zoom, optical WDR against headlight glare, synchronized audio recording',
  },
  {
    id: 'entry-gate',
    title: 'Dealership Entrance & Exit Gate',
    desc: 'Intelligent ANPR license plate recognition cameras automatically identifying arriving VIP buyers, fleet deliveries, and service appointments in sub-second time.',
    top: '72%',
    left: '52%',
    device: 'High-Speed DeepinView ANPR Camera & Barrier',
    spec: '99.8% plate accuracy, vehicle color and model classification, automatic boom gate trigger',
  },
];

export default function CarDealershipsSolution() {
  const [activeHotspot, setActiveHotspot] = useState(dealershipHotspots[0]);
  const [showSalesModal, setShowSalesModal] = useState(false);
  const [activeNav, setActiveNav] = useState('overview');

  const [openAccordions, setOpenAccordions] = useState({
    networkCamera: true,
    nvr: false,
    accessControl: false,
    software: false,
  });

  const toggleAccordion = (key) => {
    setOpenAccordions((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // Subnav scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['overview', 'parking-lots', 'what-we-offer', 'success-stories', 'related-links'];
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

  return (
    <div
      style={{
        backgroundColor: '#ffffff',
        minHeight: '100vh',
        paddingTop: '64px',
        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
        color: '#1d1d1f',
      }}
    >
      {/* 1. HERO BANNER: Cinematic Showroom & Lot with Purple Branded Overlay (Matching Screenshot) */}
      <section
        style={{
          position: 'relative',
          width: '100%',
          height: 'clamp(460px, 45vw, 620px)',
          minHeight: '420px',
          overflow: 'hidden',
          backgroundColor: '#160a28',
        }}
      >
        {/* Background Image */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'url(/images/car_dealerships/car_dealership_hero.jpg)',
            backgroundPosition: 'center 40%',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        />

        {/* Purple Architectural Curved Accents matching screenshot design */}
        <div
          style={{
            position: 'absolute',
            top: '-20%',
            left: '-10%',
            width: '60vw',
            height: '140%',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(138, 43, 226, 0.45) 0%, rgba(90, 20, 160, 0.2) 60%, transparent 80%)',
            pointerEvents: 'none',
            filter: 'blur(30px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(90deg, rgba(32, 10, 56, 0.88) 0%, rgba(32, 10, 56, 0.65) 45%, rgba(32, 10, 56, 0.15) 100%)',
          }}
        />

        {/* Content Box */}
        <div
          style={{
            position: 'relative',
            zIndex: 2,
            maxWidth: '1360px',
            height: '100%',
            margin: '0 auto',
            padding: '0 32px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <div style={{ maxWidth: '640px' }}>
            {/* Tag / Scenario indicator */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                color: '#ffffff',
                fontSize: '0.94rem',
                fontWeight: 600,
                letterSpacing: '0.02em',
                marginBottom: '16px',
                textShadow: '0 2px 8px rgba(0,0,0,0.5)',
              }}
            >
              <div
                style={{
                  width: '26px',
                  height: '26px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <div
                  style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    backgroundColor: '#ffffff',
                  }}
                />
              </div>
              <span style={{ fontSize: '0.92rem', textTransform: 'capitalize' }}>Solutions By Scenario</span>
            </div>

            {/* Main Title */}
            <h1
              style={{
                fontSize: 'clamp(2.6rem, 5.2vw, 4.4rem)',
                fontWeight: 800,
                color: '#ffffff',
                letterSpacing: '-0.03em',
                lineHeight: 1.08,
                margin: '0 0 16px',
                textShadow: '0 3px 20px rgba(0,0,0,0.6)',
              }}
            >
              Car Dealerships
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontSize: 'clamp(1.1rem, 2vw, 1.45rem)',
                color: 'rgba(255, 255, 255, 0.95)',
                fontWeight: 400,
                lineHeight: 1.4,
                margin: '0 0 32px',
                textShadow: '0 2px 10px rgba(0,0,0,0.6)',
              }}
            >
              Secured & fully covered
            </p>

            {/* CTA Action Buttons */}
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
                  padding: '13px 32px',
                  borderRadius: '9999px',
                  fontSize: '0.96rem',
                  fontWeight: 600,
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 6px 24px rgba(215, 0, 21, 0.45)',
                  transition: 'transform 0.2s ease, background-color 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#b70012';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#d70015';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <span>Contact Solution Expert</span>
                <ArrowRight size={16} />
              </button>

              <button
                type="button"
                onClick={() => scrollToSection('overview')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  backdropFilter: 'blur(16px)',
                  color: '#ffffff',
                  padding: '13px 26px',
                  borderRadius: '9999px',
                  fontSize: '0.96rem',
                  fontWeight: 600,
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.25)')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)')}
              >
                <span>Explore Solution</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STICKY SUB-NAVIGATION BAR (Matching Screenshot) */}
      <nav
        style={{
          position: 'sticky',
          top: '64px',
          zIndex: 40,
          backgroundColor: 'rgba(255, 255, 255, 0.94)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
          padding: '0 24px',
          boxShadow: '0 2px 12px rgba(0,0,0,0.03)',
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
          {/* Left: Breadcrumb / Section Label */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
            {[
              { id: 'overview', label: 'Solution overview' },
              { id: 'parking-lots', label: 'Parking Lots' },
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

          {/* Right Action */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <button
              type="button"
              onClick={() => setShowSalesModal(true)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                backgroundColor: '#d70015',
                color: '#ffffff',
                padding: '7px 18px',
                borderRadius: '9999px',
                fontSize: '0.85rem',
                fontWeight: 600,
                border: 'none',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'background-color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#b70012')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#d70015')}
            >
              <PhoneCall size={13} />
              <span>Contact Sales</span>
            </button>
          </div>
        </div>
      </nav>

      {/* 3. SECTION 1: SOLUTION OVERVIEW WITH 3D INTERACTIVE DEALERSHIP MODEL */}
      <section id="overview" style={{ padding: 'clamp(56px, 7vw, 90px) 24px', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto', textAlign: 'center' }}>
          {/* Main Section Header */}
          <h2
            style={{
              fontSize: 'clamp(2.2rem, 3.8vw, 3rem)',
              fontWeight: 700,
              color: '#1d1d1f',
              letterSpacing: '-0.025em',
              margin: '0 0 20px',
            }}
          >
            Solution overview
          </h2>

          {/* Narrative Paragraphs matching exact Hikvision structure */}
          <div style={{ maxWidth: '980px', margin: '0 auto 48px', textAlign: 'center' }}>
            <p
              style={{
                fontSize: '1.04rem',
                color: '#515154',
                lineHeight: 1.7,
                margin: '0 0 16px',
              }}
            >
              Automotive dealerships face unique security challenges with millions of dollars in vehicle inventory stored outdoors 24/7, bustling glass showrooms, and busy maintenance service bays. Protecting vehicle assets against vandalism, catalytic converter theft, and misplaced inventory while providing an effortless customer experience requires a comprehensive, intelligent solution.
            </p>
            <p
              style={{
                fontSize: '1.04rem',
                color: '#515154',
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              Coloron delivers an end-to-end intelligent security and management solution for automotive dealerships. From active perimeter strobe deterrence and automated parking lot ANPR entry to showroom customer analytics and service bay vehicle inspection, we empower dealerships to secure their assets, prevent losses, and boost customer satisfaction.
            </p>
          </div>

          {/* 3D Isometric Dealership Complex Container */}
          <div
            style={{
              position: 'relative',
              borderRadius: '24px',
              overflow: 'hidden',
              backgroundColor: '#f8f9fa',
              border: '1px solid rgba(0, 0, 0, 0.08)',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.06)',
              maxWidth: '1100px',
              margin: '0 auto 28px',
            }}
          >
            <img
              src="/images/car_dealerships/car_dealership_3d_overview.jpg"
              alt="Car Dealership 3D Security Architecture and Multi-Zone Diagram"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                objectFit: 'contain',
              }}
            />

            {/* Interactive Pins Overlay */}
            {dealershipHotspots.map((spot) => {
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
                    padding: '8px 16px',
                    borderRadius: '9999px',
                    border: isSelected ? '2px solid #ffffff' : '1px solid rgba(0,0,0,0.15)',
                    boxShadow: isSelected
                      ? '0 8px 24px rgba(215, 0, 21, 0.55)'
                      : '0 4px 16px rgba(0, 0, 0, 0.18)',
                    fontSize: '0.84rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    zIndex: 5,
                    transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                  onMouseEnter={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.backgroundColor = '#1d1d1f';
                      e.currentTarget.style.color = '#ffffff';
                      e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1.06)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
                      e.currentTarget.style.color = '#1d1d1f';
                      e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1)';
                    }
                  }}
                >
                  <span
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      backgroundColor: isSelected ? '#ffffff' : '#d70015',
                    }}
                  />
                  <span>{spot.title}</span>
                </button>
              );
            })}
          </div>

          {/* Dynamic Active Hotspot Detail Card */}
          <div
            style={{
              maxWidth: '1100px',
              margin: '0 auto',
              backgroundColor: '#f5f7fa',
              borderRadius: '18px',
              padding: '24px 30px',
              border: '1px solid rgba(0, 0, 0, 0.06)',
              textAlign: 'left',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '24px',
              flexWrap: 'wrap',
            }}
          >
            <div style={{ flex: 1, minWidth: '280px' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  color: '#d70015',
                  letterSpacing: '0.04em',
                  marginBottom: '6px',
                }}
              >
                <Sparkles size={14} />
                <span>Selected Dealership Zone</span>
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1d1d1f', margin: '0 0 8px' }}>
                {activeHotspot.title}
              </h3>
              <p style={{ fontSize: '0.92rem', color: '#515154', lineHeight: 1.55, margin: 0 }}>
                {activeHotspot.desc}
              </p>
            </div>

            <div
              style={{
                backgroundColor: '#ffffff',
                padding: '16px 20px',
                borderRadius: '12px',
                border: '1px solid rgba(0,0,0,0.06)',
                display: 'flex',
                flexDirection: 'column',
                gap: '4px',
                minWidth: '240px',
              }}
            >
              <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#86868b', textTransform: 'uppercase' }}>
                Recommended Device
              </span>
              <span style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0071e3' }}>
                {activeHotspot.device}
              </span>
              <span style={{ fontSize: '0.8rem', color: '#515154' }}>
                {activeHotspot.spec}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SECTION 2: PARKING LOTS (Challenges matching screenshot) */}
      <section
        id="parking-lots"
        style={{
          padding: 'clamp(56px, 7vw, 90px) 24px',
          backgroundColor: '#f5f5f7',
          borderTop: '1px solid rgba(0, 0, 0, 0.06)',
          borderBottom: '1px solid rgba(0, 0, 0, 0.06)',
        }}
      >
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          {/* Centered Heading */}
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <h2
              style={{
                fontSize: 'clamp(2.2rem, 3.8vw, 3rem)',
                fontWeight: 700,
                color: '#1d1d1f',
                letterSpacing: '-0.025em',
                margin: '0 0 10px',
              }}
            >
              Parking Lots
            </h2>
          </div>

          {/* Subheading: Challenges */}
          <div style={{ maxWidth: '980px', margin: '0 auto 40px', textAlign: 'left' }}>
            <h3
              style={{
                fontSize: '1.15rem',
                fontWeight: 700,
                color: '#1d1d1f',
                letterSpacing: '-0.01em',
                margin: '0 0 12px',
              }}
            >
              Challenges
            </h3>
            <p
              style={{
                fontSize: '0.98rem',
                color: '#515154',
                lineHeight: 1.65,
                margin: 0,
              }}
            >
              Dealership outdoor lots store hundreds of expensive vehicles around the clock. Protecting vehicle assets against after-hours theft and vandalism while navigating tight parking logistics are constant operational hurdles.
            </p>
          </div>

          {/* 2 Challenge Cards Side-by-Side (Exact Match to Screenshot) */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '24px',
              maxWidth: '980px',
              margin: '0 auto',
            }}
          >
            {/* Challenge 1: Vehicle Theft & Vandalism */}
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1px solid rgba(0, 0, 0, 0.06)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.04)';
              }}
            >
              <div style={{ position: 'relative', width: '100%', aspectRatio: '4 / 3', overflow: 'hidden' }}>
                <img
                  src="/images/car_dealerships/challenge_theft_vandalism.jpg"
                  alt="Vehicle theft and vandalism risks at car dealership"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.5s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.04)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '14px',
                    left: '14px',
                    backgroundColor: 'rgba(215, 0, 21, 0.9)',
                    color: '#ffffff',
                    padding: '4px 12px',
                    borderRadius: '9999px',
                    fontSize: '0.74rem',
                    fontWeight: 700,
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                  }}
                >
                  Challenge 01
                </div>
              </div>
              <div style={{ padding: '20px 24px' }}>
                <h4
                  style={{
                    fontSize: '1.15rem',
                    fontWeight: 700,
                    color: '#1d1d1f',
                    margin: '0 0 10px',
                  }}
                >
                  Vehicle theft & vandalism
                </h4>
                <p
                  style={{
                    fontSize: '0.88rem',
                    color: '#6e6e73',
                    lineHeight: 1.55,
                    margin: 0,
                  }}
                >
                  Unattended open-air dealership forecourts are vulnerable to wheel removal, catalytic converter theft, scratching, and nighttime lot intrusion.
                </p>
              </div>
            </div>

            {/* Challenge 2: Parking Congestion & Inventory Search */}
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1px solid rgba(0, 0, 0, 0.06)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.04)';
              }}
            >
              <div style={{ position: 'relative', width: '100%', aspectRatio: '4 / 3', overflow: 'hidden' }}>
                <img
                  src="/images/car_dealerships/challenge_parking_congestion.jpg"
                  alt="Parking lot congestion and inventory location challenges"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.5s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.04)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '14px',
                    left: '14px',
                    backgroundColor: 'rgba(29, 29, 31, 0.85)',
                    color: '#ffffff',
                    padding: '4px 12px',
                    borderRadius: '9999px',
                    fontSize: '0.74rem',
                    fontWeight: 700,
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                  }}
                >
                  Challenge 02
                </div>
              </div>
              <div style={{ padding: '20px 24px' }}>
                <h4
                  style={{
                    fontSize: '1.15rem',
                    fontWeight: 700,
                    color: '#1d1d1f',
                    margin: '0 0 10px',
                  }}
                >
                  Parking congestion & tracking
                </h4>
                <p
                  style={{
                    fontSize: '0.88rem',
                    color: '#6e6e73',
                    lineHeight: 1.55,
                    margin: 0,
                  }}
                >
                  Locating specific trade-in or customer service vehicles across dense rows wastes sales staff time, while customer parking bottlenecks damage initial impressions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SECTION 3: WHAT WE OFFER (Exact Match to Screenshot) */}
      <section id="what-we-offer" style={{ padding: 'clamp(56px, 7vw, 90px) 24px', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '24px' }}>
            <h2
              style={{
                fontSize: 'clamp(2.2rem, 3.8vw, 3rem)',
                fontWeight: 700,
                color: '#1d1d1f',
                letterSpacing: '-0.025em',
                margin: '0 0 14px',
              }}
            >
              What we offer
            </h2>
            <p
              style={{
                fontSize: '1.02rem',
                color: '#515154',
                maxWidth: '860px',
                margin: '0 auto 48px',
                lineHeight: 1.6,
              }}
            >
              To protect dealership inventory, accelerate customer transactions, and optimize operations across the showroom and service bays, Coloron delivers an end-to-end intelligent automotive solution.
            </p>
          </div>

          {/* Two-Column Feature Block: ANPR Camera on Pole Photo + Benefits Bullets */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
              gap: '40px',
              alignItems: 'center',
              maxWidth: '1100px',
              margin: '0 auto 60px',
            }}
          >
            {/* Left: Camera Pole Image */}
            <div
              style={{
                position: 'relative',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 16px 40px rgba(0, 0, 0, 0.08)',
                border: '1px solid rgba(0, 0, 0, 0.08)',
                backgroundColor: '#f5f7fa',
              }}
            >
              <img
                src="/images/car_dealerships/car_dealership_offer.jpg"
                alt="ANPR Surveillance Camera on Pole Overlooking Car Dealership Inventory"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  objectFit: 'cover',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '16px 20px',
                  background: 'linear-gradient(0deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0) 100%)',
                  color: '#ffffff',
                }}
              >
                <div style={{ fontSize: '0.86rem', fontWeight: 600 }}>Forecourt & Inventory Protection</div>
                <div style={{ fontSize: '0.74rem', color: 'rgba(255,255,255,0.8)' }}>
                  AcuSense active deterrence cameras & high-speed ANPR license plate capture
                </div>
              </div>
            </div>

            {/* Right: Benefits Bullets */}
            <div>
              <h3
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: '#1d1d1f',
                  marginBottom: '20px',
                }}
              >
                Benefits
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  {
                    title: 'Active perimeter deterrence',
                    desc: 'AcuSense cameras flash strobes and sound customizable voice warnings when human trespassers approach vehicles after closing.',
                  },
                  {
                    title: 'Automated ANPR vehicle recognition',
                    desc: 'Capture license plates instantly upon entry to greet VIP clients, auto-trigger barrier gates, and speed up service intake.',
                  },
                  {
                    title: 'Vivid 24/7 ColorVu night vision',
                    desc: 'F1.0 super-apertures capture clear vehicle colors, plate numbers, and suspect clothing in total darkness without blinding floodlights.',
                  },
                  {
                    title: 'Rapid vehicle attribute search',
                    desc: 'Locate vehicles across inventory rows in seconds by searching license plate, vehicle make, body type, or paint color.',
                  },
                  {
                    title: 'Service bay dispute prevention',
                    desc: 'Continuous high-definition video of vehicle drop-off and pickup provides unambiguous evidence against pre-existing scratch claims.',
                  },
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <div
                      style={{
                        width: '22px',
                        height: '22px',
                        borderRadius: '50%',
                        backgroundColor: '#f3e8ff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        marginTop: '2px',
                      }}
                    >
                      <Check size={14} color="#7c3aed" strokeWidth={3} />
                    </div>
                    <div>
                      <span style={{ fontSize: '0.94rem', fontWeight: 700, color: '#1d1d1f' }}>
                        {item.title}:{' '}
                      </span>
                      <span style={{ fontSize: '0.9rem', color: '#515154', lineHeight: 1.5 }}>
                        {item.desc}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* System Topology Diagram & Product Accordion matching Screenshot */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(320px, 440px) minmax(0, 1fr)',
              gap: '40px',
              alignItems: 'flex-start',
              maxWidth: '1100px',
              margin: '0 auto',
            }}
            className="topology-accordion-grid"
          >
            {/* Left Column: Topology Architecture Card */}
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '16px',
                border: '1px solid rgba(0, 0, 0, 0.08)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
                padding: '24px 20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
              }}
            >
              {/* Management Center (Top box) */}
              <div
                style={{
                  backgroundColor: '#f5f7fa',
                  borderRadius: '12px',
                  padding: '16px',
                  position: 'relative',
                  border: '1px solid rgba(0,0,0,0.05)',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: '-12px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: '#1b315b',
                    color: '#ffffff',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    padding: '3px 14px',
                    borderRadius: '4px',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                  }}
                >
                  Management Center
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', marginTop: '4px' }}>
                  <div>
                    <Layers size={22} color="#0071e3" style={{ margin: '0 auto 4px' }} />
                    <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#1d1d1f' }}>Software VMS</div>
                  </div>
                  <div>
                    <Cpu size={22} color="#1b8738" style={{ margin: '0 auto 4px' }} />
                    <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#1d1d1f' }}>Central Server</div>
                  </div>
                  <div>
                    <Warehouse size={22} color="#8944ab" style={{ margin: '0 auto 4px' }} />
                    <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#1d1d1f' }}>Storage Pool</div>
                  </div>
                </div>
              </div>

              {/* Central Switch Icon & Divider */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
                <div style={{ width: '2px', height: '16px', backgroundColor: '#93c5fd' }} />
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    backgroundColor: '#0071e3',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 12px rgba(0, 113, 227, 0.3)',
                  }}
                >
                  <Radio size={20} />
                </div>
                <div style={{ width: '2px', height: '16px', backgroundColor: '#93c5fd' }} />
              </div>

              {/* Bottom 3 Architecture Solution Pillars */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
                {/* Solution 1 */}
                <div
                  style={{
                    backgroundColor: '#f8f9fb',
                    padding: '12px 8px',
                    borderRadius: '10px',
                    border: '1px solid rgba(0,0,0,0.05)',
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <Camera size={20} color="#0071e3" style={{ margin: '0 auto 6px' }} />
                  <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#1d1d1f', marginBottom: '8px' }}>
                    Front-End Smart Camera
                  </div>
                  <div
                    style={{
                      backgroundColor: '#1b315b',
                      color: '#ffffff',
                      fontSize: '0.62rem',
                      fontWeight: 600,
                      padding: '3px 4px',
                      borderRadius: '4px',
                    }}
                  >
                    Direct Camera
                  </div>
                </div>

                {/* Solution 2 */}
                <div
                  style={{
                    backgroundColor: '#f8f9fb',
                    padding: '12px 8px',
                    borderRadius: '10px',
                    border: '1px solid rgba(0,0,0,0.05)',
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <Cpu size={20} color="#0071e3" style={{ margin: '0 auto 6px' }} />
                  <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#1d1d1f', marginBottom: '8px' }}>
                    Back-End AI NVR
                  </div>
                  <div
                    style={{
                      backgroundColor: '#1b315b',
                      color: '#ffffff',
                      fontSize: '0.62rem',
                      fontWeight: 600,
                      padding: '3px 4px',
                      borderRadius: '4px',
                    }}
                  >
                    NVR Solution
                  </div>
                </div>

                {/* Solution 3 */}
                <div
                  style={{
                    backgroundColor: '#f8f9fb',
                    padding: '12px 8px',
                    borderRadius: '10px',
                    border: '1px solid rgba(0,0,0,0.05)',
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <Car size={20} color="#0071e3" style={{ margin: '0 auto 6px' }} />
                  <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#1d1d1f', marginBottom: '8px' }}>
                    ANPR Gate System
                  </div>
                  <div
                    style={{
                      backgroundColor: '#1b315b',
                      color: '#ffffff',
                      fontSize: '0.62rem',
                      fontWeight: 600,
                      padding: '3px 4px',
                      borderRadius: '4px',
                    }}
                  >
                    Barrier & Plate
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Dealership Product Accordions */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {/* Accordion 1: Network Camera */}
              <div
                style={{
                  borderTop: '1px solid #e5e7eb',
                  borderBottom: '1px solid #e5e7eb',
                  padding: '16px 0 20px',
                }}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion('networkCamera')}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    background: 'none',
                    border: 'none',
                    padding: '4px 0 16px',
                    cursor: 'pointer',
                    textAlign: 'left',
                  }}
                >
                  <span style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1d1d1f', letterSpacing: '-0.01em' }}>
                    Network Camera
                  </span>
                  <div style={{ color: '#86868b', display: 'flex', alignItems: 'center' }}>
                    {openAccordions.networkCamera ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </div>
                </button>

                {openAccordions.networkCamera && (
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                      gap: '16px',
                    }}
                  >
                    {/* Camera Card 1: ColorVu Strobe Bullet */}
                    <div
                      style={{
                        backgroundColor: '#f8f9fb',
                        borderRadius: '6px',
                        padding: '16px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '14px',
                        border: '1px solid rgba(0, 0, 0, 0.05)',
                        transition: 'all 0.2s ease',
                        cursor: 'pointer',
                      }}
                      onClick={() => setShowSalesModal(true)}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#f1f4f8';
                        e.currentTarget.style.borderColor = 'rgba(0, 113, 227, 0.25)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#f8f9fb';
                        e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.05)';
                      }}
                    >
                      <div
                        style={{
                          width: '68px',
                          height: '68px',
                          flexShrink: 0,
                          backgroundColor: '#ffffff',
                          borderRadius: '6px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          border: '1px solid rgba(0, 0, 0, 0.05)',
                          color: '#0071e3',
                        }}
                      >
                        <Camera size={28} />
                      </div>
                      <div style={{ minWidth: 0, flex: 1 }}>
                        <div style={{ fontSize: '0.94rem', fontWeight: 700, color: '#1d1d1f', marginBottom: '4px', lineHeight: 1.3 }}>
                          DS-2CD2047G2-LU/SL
                        </div>
                        <div style={{ fontSize: '0.78rem', color: '#6e6e73', lineHeight: 1.4 }}>
                          4MP ColorVu Strobe & Audio Active Deterrence Bullet Camera
                        </div>
                      </div>
                    </div>

                    {/* Camera Card 2: DeepinView ANPR */}
                    <div
                      style={{
                        backgroundColor: '#f8f9fb',
                        borderRadius: '6px',
                        padding: '16px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '14px',
                        border: '1px solid rgba(0, 0, 0, 0.05)',
                        transition: 'all 0.2s ease',
                        cursor: 'pointer',
                      }}
                      onClick={() => setShowSalesModal(true)}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#f1f4f8';
                        e.currentTarget.style.borderColor = 'rgba(0, 113, 227, 0.25)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#f8f9fb';
                        e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.05)';
                      }}
                    >
                      <div
                        style={{
                          width: '68px',
                          height: '68px',
                          flexShrink: 0,
                          backgroundColor: '#ffffff',
                          borderRadius: '6px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          border: '1px solid rgba(0, 0, 0, 0.05)',
                          color: '#0071e3',
                        }}
                      >
                        <Car size={28} />
                      </div>
                      <div style={{ minWidth: 0, flex: 1 }}>
                        <div style={{ fontSize: '0.94rem', fontWeight: 700, color: '#1d1d1f', marginBottom: '4px', lineHeight: 1.3 }}>
                          iDS-2CD7A46G0-IZHS(Y)
                        </div>
                        <div style={{ fontSize: '0.78rem', color: '#6e6e73', lineHeight: 1.4 }}>
                          4MP DeepinView High-Speed ANPR & Vehicle Model Camera
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Accordion 2: NVR */}
              <div
                style={{
                  borderBottom: '1px solid #e5e7eb',
                  padding: '16px 0 20px',
                }}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion('nvr')}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    background: 'none',
                    border: 'none',
                    padding: '4px 0 16px',
                    cursor: 'pointer',
                    textAlign: 'left',
                  }}
                >
                  <span style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1d1d1f', letterSpacing: '-0.01em' }}>
                    NVR & Storage
                  </span>
                  <div style={{ color: '#86868b', display: 'flex', alignItems: 'center' }}>
                    {openAccordions.nvr ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </div>
                </button>

                {openAccordions.nvr && (
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                      gap: '16px',
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: '#f8f9fb',
                        borderRadius: '6px',
                        padding: '16px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '14px',
                        border: '1px solid rgba(0, 0, 0, 0.05)',
                        cursor: 'pointer',
                      }}
                      onClick={() => setShowSalesModal(true)}
                    >
                      <div style={{ width: '68px', height: '68px', flexShrink: 0, backgroundColor: '#ffffff', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0071e3' }}>
                        <Layers size={28} />
                      </div>
                      <div style={{ minWidth: 0, flex: 1 }}>
                        <div style={{ fontSize: '0.94rem', fontWeight: 700, color: '#1d1d1f', marginBottom: '4px' }}>
                          iDS-7716NXI-M4/16P/X
                        </div>
                        <div style={{ fontSize: '0.78rem', color: '#6e6e73' }}>
                          16-ch 1.5U DeepinMind AcuSense Intelligent NVR
                        </div>
                      </div>
                    </div>

                    <div
                      style={{
                        backgroundColor: '#f8f9fb',
                        borderRadius: '6px',
                        padding: '16px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '14px',
                        border: '1px solid rgba(0, 0, 0, 0.05)',
                        cursor: 'pointer',
                      }}
                      onClick={() => setShowSalesModal(true)}
                    >
                      <div style={{ width: '68px', height: '68px', flexShrink: 0, backgroundColor: '#ffffff', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0071e3' }}>
                        <Cpu size={28} />
                      </div>
                      <div style={{ minWidth: 0, flex: 1 }}>
                        <div style={{ fontSize: '0.94rem', fontWeight: 700, color: '#1d1d1f', marginBottom: '4px' }}>
                          iDS-9632NXI-I8/X
                        </div>
                        <div style={{ fontSize: '0.78rem', color: '#6e6e73' }}>
                          32-ch 2U DeepinMind Enterprise NVR for High-Density Lots
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Accordion 3: Access Control & Intercom */}
              <div
                style={{
                  borderBottom: '1px solid #e5e7eb',
                  padding: '16px 0 20px',
                }}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion('accessControl')}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    background: 'none',
                    border: 'none',
                    padding: '4px 0 16px',
                    cursor: 'pointer',
                    textAlign: 'left',
                  }}
                >
                  <span style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1d1d1f', letterSpacing: '-0.01em' }}>
                    Access Control & Intercom
                  </span>
                  <div style={{ color: '#86868b', display: 'flex', alignItems: 'center' }}>
                    {openAccordions.accessControl ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </div>
                </button>

                {openAccordions.accessControl && (
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                      gap: '16px',
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: '#f8f9fb',
                        borderRadius: '6px',
                        padding: '16px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '14px',
                        border: '1px solid rgba(0, 0, 0, 0.05)',
                        cursor: 'pointer',
                      }}
                      onClick={() => setShowSalesModal(true)}
                    >
                      <div style={{ width: '68px', height: '68px', flexShrink: 0, backgroundColor: '#ffffff', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0071e3' }}>
                        <Lock size={28} />
                      </div>
                      <div style={{ minWidth: 0, flex: 1 }}>
                        <div style={{ fontSize: '0.94rem', fontWeight: 700, color: '#1d1d1f', marginBottom: '4px' }}>
                          DS-K1T673DX
                        </div>
                        <div style={{ fontSize: '0.78rem', color: '#6e6e73' }}>
                          Touchless Face Recognition & Staff Keyless Access Terminal
                        </div>
                      </div>
                    </div>

                    <div
                      style={{
                        backgroundColor: '#f8f9fb',
                        borderRadius: '6px',
                        padding: '16px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '14px',
                        border: '1px solid rgba(0, 0, 0, 0.05)',
                        cursor: 'pointer',
                      }}
                      onClick={() => setShowSalesModal(true)}
                    >
                      <div style={{ width: '68px', height: '68px', flexShrink: 0, backgroundColor: '#ffffff', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0071e3' }}>
                        <Volume2 size={28} />
                      </div>
                      <div style={{ minWidth: 0, flex: 1 }}>
                        <div style={{ fontSize: '0.94rem', fontWeight: 700, color: '#1d1d1f', marginBottom: '4px' }}>
                          DS-KV8113-WME1
                        </div>
                        <div style={{ fontSize: '0.78rem', color: '#6e6e73' }}>
                          Vandal-Resistant Outdoor Gate Video Intercom Door Station
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Accordion 4: Software */}
              <div
                style={{
                  borderBottom: '1px solid #e5e7eb',
                  padding: '16px 0 20px',
                }}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion('software')}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    background: 'none',
                    border: 'none',
                    padding: '4px 0 16px',
                    cursor: 'pointer',
                    textAlign: 'left',
                  }}
                >
                  <span style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1d1d1f', letterSpacing: '-0.01em' }}>
                    Software & VMS Platform
                  </span>
                  <div style={{ color: '#86868b', display: 'flex', alignItems: 'center' }}>
                    {openAccordions.software ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </div>
                </button>

                {openAccordions.software && (
                  <div style={{ padding: '10px 0' }}>
                    <div
                      style={{
                        backgroundColor: '#f8f9fb',
                        borderRadius: '6px',
                        padding: '16px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '14px',
                        border: '1px solid rgba(0, 0, 0, 0.05)',
                        cursor: 'pointer',
                      }}
                      onClick={() => setShowSalesModal(true)}
                    >
                      <div style={{ width: '68px', height: '68px', flexShrink: 0, backgroundColor: '#ffffff', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#7c3aed' }}>
                        <Layers size={28} />
                      </div>
                      <div style={{ minWidth: 0, flex: 1 }}>
                        <div style={{ fontSize: '0.94rem', fontWeight: 700, color: '#1d1d1f', marginBottom: '4px' }}>
                          Coloron Central Dealership VMS
                        </div>
                        <div style={{ fontSize: '0.78rem', color: '#6e6e73' }}>
                          Unified management for multi-site car dealerships with central video wall, vehicle plate hotlists, and mobile manager app.
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

      {/* 6. SECTION 4: SUCCESS STORIES (Exact Match to Screenshot) */}
      <section
        id="success-stories"
        style={{
          padding: 'clamp(56px, 7vw, 90px) 24px',
          backgroundColor: '#f5f5f7',
          borderTop: '1px solid rgba(0, 0, 0, 0.06)',
          borderBottom: '1px solid rgba(0, 0, 0, 0.06)',
        }}
      >
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          {/* Centered Heading */}
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2
              style={{
                fontSize: 'clamp(2.2rem, 3.8vw, 3rem)',
                fontWeight: 700,
                color: '#1d1d1f',
                letterSpacing: '-0.025em',
                margin: 0,
              }}
            >
              Success stories
            </h2>
          </div>

          {/* Featured Case Study Bento Card (Matching screenshot) */}
          <div
            style={{
              maxWidth: '920px',
              margin: '0 auto',
              backgroundColor: '#ffffff',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 12px 36px rgba(0, 0, 0, 0.06)',
              border: '1px solid rgba(0, 0, 0, 0.06)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              transition: 'transform 0.3s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-3px)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
          >
            {/* Left Case Study Photo */}
            <div style={{ position: 'relative', width: '100%', minHeight: '260px' }}>
              <img
                src="/images/car_dealerships/car_dealership_case_study.jpg"
                alt="Automotive car dealership boosts efficiency with end-to-end smart security solution"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </div>

            {/* Right Case Study Details */}
            <div style={{ padding: '36px 32px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <span
                style={{
                  fontSize: '0.74rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  color: '#0071e3',
                  letterSpacing: '0.05em',
                  marginBottom: '10px',
                }}
              >
                Case Study · Automotive Retail
              </span>

              <h3
                style={{
                  fontSize: '1.45rem',
                  fontWeight: 700,
                  color: '#1d1d1f',
                  margin: '0 0 14px',
                  lineHeight: 1.3,
                }}
              >
                Automotive car dealership boosts efficiency with end-to-end security solution
              </h3>

              <p
                style={{
                  fontSize: '0.92rem',
                  color: '#6e6e73',
                  lineHeight: 1.6,
                  margin: '0 0 24px',
                }}
              >
                A premier automotive retail dealership deployed Coloron perimeter tripwire cameras, automated ANPR gate check-in, and 4K showroom coverage to cut vehicle shrinkage to zero and improve service turnaround.
              </p>

              <div>
                <button
                  type="button"
                  onClick={() => setShowSalesModal(true)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.92rem',
                    fontWeight: 600,
                    color: '#0071e3',
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
                  onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
                >
                  <span>Read case study</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SECTION 5: YOU MAY ALSO BE INTERESTED IN (Exact Match to Screenshot) */}
      <section id="related-links" style={{ padding: 'clamp(56px, 7vw, 90px) 24px', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          {/* Centered Heading */}
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <h2
              style={{
                fontSize: 'clamp(2.2rem, 3.8vw, 3rem)',
                fontWeight: 700,
                color: '#1d1d1f',
                letterSpacing: '-0.025em',
                margin: 0,
              }}
            >
              You may also be interested in
            </h2>
          </div>

          {/* 3 Related Scenario Bento Cards */}
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
                title: 'SUPERMARKETS',
                desc: 'Loss prevention at POS checkout registers, shelf replenishment alerts, and customer flow heatmaps.',
                route: '/solutions/supermarkets',
                image: '/images/scenarios/supermarkets.jpg',
              },
              {
                title: 'ELECTRICAL SUBSTATIONS',
                desc: 'Continuous radiometric thermography, perimeter intrusion detection, and remote asset inspection.',
                route: '/solutions#substations',
                image: '/images/scenarios/electrical_substations.jpg',
              },
              {
                title: 'PARKING LOTS',
                desc: 'High-accuracy ANPR boom gate access, space occupancy indicators, and effortless parking navigation.',
                route: '/solutions#parking-lots',
                image: '/images/scenarios/parking_lots.jpg',
              },
            ].map((rel, idx) => (
              <Link
                key={idx}
                to={rel.route}
                style={{
                  position: 'relative',
                  height: '220px',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  textDecoration: 'none',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.06)',
                  border: '1px solid rgba(0,0,0,0.08)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '24px',
                  color: '#ffffff',
                }}
                onMouseEnter={(e) => {
                  const img = e.currentTarget.querySelector('img');
                  if (img) img.style.transform = 'scale(1.06)';
                  e.currentTarget.style.boxShadow = '0 14px 36px rgba(0,0,0,0.12)';
                }}
                onMouseLeave={(e) => {
                  const img = e.currentTarget.querySelector('img');
                  if (img) img.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.06)';
                }}
              >
                {/* Background image */}
                <img
                  src={rel.image}
                  alt={rel.title}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    zIndex: 0,
                    transition: 'transform 0.5s ease',
                  }}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = '/images/cctv_hero_banner.png';
                  }}
                />

                {/* Dark Gradient Overlay for Contrast */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background:
                      'linear-gradient(180deg, rgba(15,20,30,0.15) 0%, rgba(15,20,30,0.7) 50%, rgba(15,20,30,0.92) 100%)',
                    zIndex: 1,
                  }}
                />

                {/* Content */}
                <div style={{ position: 'relative', zIndex: 2 }}>
                  <h4
                    style={{
                      fontSize: '1.05rem',
                      fontWeight: 800,
                      color: '#ffffff',
                      letterSpacing: '0.04em',
                      textTransform: 'uppercase',
                      margin: '0 0 8px',
                      textShadow: '0 2px 8px rgba(0,0,0,0.6)',
                    }}
                  >
                    {rel.title}
                  </h4>
                  <p
                    style={{
                      fontSize: '0.82rem',
                      color: 'rgba(255, 255, 255, 0.85)',
                      lineHeight: 1.45,
                      margin: '0 0 12px',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    {rel.desc}
                  </p>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      color: '#ffffff',
                    }}
                  >
                    <span>Explore Scenario</span>
                    <ArrowRight size={13} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 8. SECTION 6: READY TO DISCUSS YOUR NEEDS (Exact Match to Screenshot with Illustration) */}
      <section
        style={{
          padding: 'clamp(64px, 8vw, 96px) 24px',
          backgroundColor: '#f5f5f7',
          borderTop: '1px solid rgba(0,0,0,0.06)',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            maxWidth: '1100px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '40px',
            flexWrap: 'wrap',
          }}
        >
          {/* Left CTA text & buttons */}
          <div style={{ flex: 1, minWidth: '320px', textAlign: 'left' }}>
            <h2
              style={{
                fontSize: 'clamp(2.2rem, 3.8vw, 3.2rem)',
                fontWeight: 800,
                color: '#1d1d1f',
                letterSpacing: '-0.03em',
                margin: '0 0 16px',
              }}
            >
              Ready to discuss your needs?
            </h2>
            <p
              style={{
                fontSize: '1.05rem',
                color: '#6e6e73',
                lineHeight: 1.6,
                margin: '0 0 32px',
                maxWidth: '560px',
              }}
            >
              Connect with Coloron certified commercial security specialists to configure and deploy a comprehensive automotive dealership surveillance and asset protection system.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <button
                type="button"
                onClick={() => setShowSalesModal(true)}
                style={{
                  backgroundColor: '#d70015',
                  color: '#ffffff',
                  border: 'none',
                  padding: '14px 34px',
                  borderRadius: '9999px',
                  fontSize: '0.96rem',
                  fontWeight: 700,
                  letterSpacing: '0.04em',
                  cursor: 'pointer',
                  boxShadow: '0 6px 20px rgba(215, 0, 21, 0.4)',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#b70012';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#d70015';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                CONTACT US NOW
              </button>

              <Link
                to="/solutions"
                style={{
                  backgroundColor: '#1d1d1f',
                  color: '#ffffff',
                  textDecoration: 'none',
                  padding: '14px 34px',
                  borderRadius: '9999px',
                  fontSize: '0.96rem',
                  fontWeight: 700,
                  letterSpacing: '0.04em',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#000000';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#1d1d1f';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                EXPLORE MORE SOLUTIONS
              </Link>
            </div>
          </div>

          {/* Right Specialist Illustration matching screenshot */}
          <div
            style={{
              flex: 1,
              minWidth: '280px',
              maxWidth: '440px',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <img
              src="/images/car_dealerships/discuss_illustration.png"
              alt="Consultant Ready to Discuss Your Dealership Security Needs"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                objectFit: 'contain',
              }}
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
        </div>
      </section>

      {/* Contact Sales Modal */}
      {showSalesModal && (
        <ContactSalesModal
          solutionName="Car Dealerships Security Solution"
          onClose={() => setShowSalesModal(false)}
        />
      )}

      <style>{`
        @media (max-width: 860px) {
          .topology-accordion-grid {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
          }
        }
      `}</style>
    </div>
  );
}
