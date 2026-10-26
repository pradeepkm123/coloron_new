import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Hotel,
  Shield,
  Car,
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
  Sparkle,
  Tv,
  Key,
  Users,
  Compass,
  X
} from 'lucide-react';
import ContactSalesModal from '../components/ContactSalesModal';

// Interactive hotspots for 3D Cutaway Hotel Overview
const hotelHotspots = [
  {
    id: 'parking-lot',
    number: '1',
    title: 'Hotel Parking Lot & Valet Area',
    subtitle: 'ANPR Gate & Indoor Space Guidance',
    desc: 'High-speed ANPR camera automatically admits registered VIP guests and hotel patrons without barrier tickets. Overhead dual-lens parking guidance cameras direct arriving drivers to vacant parking stalls using vibrant green/red indicators.',
    top: '72%',
    left: '52%',
    image: '/images/hotels/offer_parking.jpg',
    device: 'Smart Parking Guidance & ANPR Terminal (DS-TPE400)',
    spec: '98%+ plate accuracy, dual-bay space detection, dynamic LED space occupancy sign, anti-tailgating radar',
    benefit: 'Reduces guest parking time from 10 minutes to under 60 seconds while providing complete forecourt security.',
  },
  {
    id: 'grand-lobby',
    number: '2',
    title: 'Grand Hotel Lobby & Atrium',
    subtitle: '180° Panoramic Overview & Discreet Aesthetics',
    desc: 'Multi-sensor panoramic cameras seamlessly blend into the high luxury aesthetic of the hotel lobby. Provides complete 180° coverage of the atrium, concierge, elevators, and luggage staging zones without intrusive blind spots.',
    top: '56%',
    left: '46%',
    image: '/images/hotels/zone_lobby.jpg',
    device: 'PanoVu 4-Sensor 180° Panoramic Camera (DS-2CD6984G0-IHS)',
    spec: '32 MP panoramic stitched view, ultra-low-light DarkFighter, integrated audio microphone, IK10 vandal-proof',
    benefit: 'Delivers comprehensive visual coverage of VIP arrivals and busy check-in areas using just a single discrete ceiling mount.',
  },
  {
    id: 'reception-desk',
    number: '3',
    title: 'Reception & Front Desk',
    subtitle: 'Queue Detection, Concierge Audio & Fast Check-In',
    desc: 'Compact DeepinView dome cameras installed above the check-in counter monitor guest queue lengths and prompt managers to open additional reception kiosks during tour group arrivals. Audio recording resolves billing disputes respectfully.',
    top: '50%',
    left: '56%',
    image: '/images/hotels/zone_reception.jpg',
    device: 'DeepinView Queue Detection Indoor Dome (iDS-2CD7146G0-IZS)',
    spec: '4 MP high-resolution, built-in queue management algorithm, two-way audio pickup, compact discreet dome design',
    benefit: 'Shortens front-desk wait times, improves Tripadvisor guest reviews, and verifies credit card transactions.',
  },
  {
    id: 'guest-rooms',
    number: '4',
    title: 'Guest Rooms & Meeting Suites',
    subtitle: 'Smart Keyless Access & Interactive Flat Panels',
    desc: 'Contactless mobile credential and RFID guest door locks provide seamless keyless entry. Executive conference rooms feature 4K interactive flat panel displays with wireless screen sharing for corporate meeting guests.',
    top: '32%',
    left: '50%',
    image: '/images/hotels/zone_meeting.jpg',
    device: '86" 4K Interactive Flat Panel Display & Hotel Smart Lock',
    spec: '86-inch UHD optical bonding touch display, wireless presentation dongle, touchless RFID hotel door lock',
    benefit: 'Empowers premium corporate business guests with state-of-the-art presentation tools and keyless convenience.',
  },
  {
    id: 'hotel-perimeter',
    number: '5',
    title: 'Perimeter Grounds & Poolside',
    subtitle: 'AcuSense Human Intrusion & Pool Safety Monitoring',
    desc: 'ColorVu smart hybrid light bullet cameras and thermal sensors line the perimeter fence and outdoor swimming pools. Alarms notify lifeguards and security guards immediately if guests enter deep pool areas after hours.',
    top: '62%',
    left: '38%',
    image: '/images/hotels/zone_perimeter.jpg',
    device: 'ColorVu AcuSense Fixed Bullet Camera (DS-2CD2047G2-LU)',
    spec: '24/7 vivid color imaging, human/vehicle target classification, strobe light deterrence, IP67 weatherproof',
    benefit: 'Prevents after-hours poolside accidents and stops unauthorized external intruders from entering resort villas.',
  },
];

export default function HotelsSolution() {
  const [activeHotspot, setActiveHotspot] = useState(hotelHotspots[0]);
  const [showSalesModal, setShowSalesModal] = useState(false);
  const [activeNav, setActiveNav] = useState('overview');
  const [lightboxImage, setLightboxImage] = useState(null);
  const [copiedShare, setCopiedShare] = useState(false);
  const [showCaseStudyModal, setShowCaseStudyModal] = useState(false);

  // Accordion state matching screenshot
  const [openAccordions, setOpenAccordions] = useState({
    anpr: true,
    guidance: false,
    led: false,
    software: false,
  });

  const toggleAccordion = (key) => {
    setOpenAccordions((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // Subnav scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['overview', 'challenges', 'what-we-offer', 'success-stories', 'interested'];
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
      {/* 1. HERO SECTION: Panoramic Luxury Resort Hotel Banner with Warm Gold Radial Overlay */}
      <section
        style={{
          position: 'relative',
          width: '100%',
          minHeight: '440px',
          height: 'clamp(440px, 42vw, 540px)',
          overflow: 'hidden',
          backgroundColor: '#1c1917',
        }}
      >
        {/* Real High-Resolution Luxury Hotel Banner Image */}
        <img
          src="/images/hotels/hotel_hero.jpg"
          alt="Hotel Security Management Solution"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 45%',
            filter: 'brightness(0.96)',
          }}
        />

        {/* Warm Gold / Amber Elliptical Glow Overlay (matches screenshot) */}
        <div
          style={{
            position: 'absolute',
            top: '-20%',
            left: '-12%',
            width: '65vw',
            height: '140%',
            borderRadius: '50%',
            background: 'radial-gradient(ellipse at center, rgba(217, 119, 6, 0.72) 0%, rgba(180, 83, 9, 0.52) 45%, rgba(146, 64, 14, 0.22) 75%, transparent 100%)',
            pointerEvents: 'none',
            mixBlendMode: 'screen',
          }}
        />

        {/* Subtle Darkening Overlay for Typography Contrast */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(90deg, rgba(28, 25, 23, 0.65) 0%, rgba(28, 25, 23, 0.35) 50%, rgba(28, 25, 23, 0.12) 100%)',
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
            <Hotel size={15} color="#fed7aa" />
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
            Hotels
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
            Where comfort and security go hand in hand
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
            <span style={{ color: '#111827', fontWeight: 600 }}>Hotel Security Management Solution</span>
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
                color: '#d97706',
                fontWeight: 600,
                fontSize: '13px',
                cursor: 'pointer',
                padding: '4px 8px',
                borderRadius: '6px',
                transition: 'background 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#fef3c7')}
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
            { id: 'challenges', label: 'Parking Lot' },
            { id: 'what-we-offer', label: 'What we offer' },
            { id: 'success-stories', label: 'Success stories' },
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
                  color: isActive ? '#d97706' : '#4b5563',
                  borderBottom: isActive ? '2px solid #d97706' : '2px solid transparent',
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
              The hospitality industry relies heavily on guest satisfaction and a welcoming atmosphere. Ensuring safety for guests, personnel, and property without being intrusive is key to building a memorable hotel brand.
            </p>
            <p style={{ margin: 0 }}>
              Coloron's Hotel Security Management Solution brings together intelligent vehicle access control, indoor parking guidance, discreet lobby surveillance, queue detection at reception, keyless room entry, and perimeter protection on a unified management platform.
            </p>
          </div>
        </div>

        {/* 3D Cutaway Hotel Isometric Graphic Card */}
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
              src="/images/hotels/hotel_3d_map.jpg"
              alt="Hotel 3D Architecture Map"
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
            {hotelHotspots.map((spot) => {
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
              onClick={() => setLightboxImage('/images/hotels/hotel_3d_map.jpg')}
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
              {hotelHotspots.map((spot) => {
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
                      backgroundColor: isSelected ? '#d97706' : '#ffffff',
                      color: isSelected ? '#ffffff' : '#475569',
                      border: isSelected ? '1px solid #d97706' : '1px solid #cbd5e1',
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
                        color: isSelected ? '#d97706' : '#ffffff',
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
                      backgroundColor: '#fef3c7',
                      color: '#b45309',
                      fontSize: '11px',
                      fontWeight: 700,
                    }}
                  >
                    FACILITY {activeHotspot.number}
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
                  <span style={{ fontWeight: 600 }}>Hospitality Impact: {activeHotspot.benefit}</span>
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

      {/* 5. SECTION 2: PARKING LOT (CHALLENGES) */}
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
              Parking Lot
            </h2>
            <div
              style={{
                display: 'inline-block',
                fontSize: '16px',
                fontWeight: 600,
                color: '#d97706',
                borderBottom: '2px solid #d97706',
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
              First impressions begin at the hotel driveway. Long queues at parking barriers and frustrating searches for available parking spaces harm guest satisfaction.
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
            {/* Challenge 1: Rush hour processing efficiency */}
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
                  src="/images/hotels/challenge_rush_hour.jpg"
                  alt="Rush hour processing efficiency"
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
                  Rush hour processing efficiency
                </h3>
                <p
                  style={{
                    fontSize: '14px',
                    color: '#4b5563',
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  During convention check-ins or wedding banquets, manual parking ticket issuance causes entrance congestion, blocking hotel driveways and delaying VIP arrivals.
                </p>
              </div>
            </div>

            {/* Challenge 2: Difficult finding available parking spaces */}
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
                  src="/images/hotels/challenge_finding_space.jpg"
                  alt="Difficult finding available parking spaces"
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
                  Difficult finding available parking spaces
                </h3>
                <p
                  style={{
                    fontSize: '14px',
                    color: '#4b5563',
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  In large multi-level hotel parking garages, wandering without guidance leads to customer frustration, wasted fuel, and accidental minor vehicle scrapes.
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
            Enhance the arrival experience with ticketless high-accuracy ANPR barrier gates, automated indoor space guidance, and real-time vehicle locator kiosks.
          </p>
        </div>

        {/* Top: Hotel Driveway Showcase (Image Left + Benefits/Features Right) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: '40px',
            alignItems: 'center',
            marginBottom: '72px',
          }}
        >
          {/* Main Parking Barrier Image with Lightbox */}
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
              src="/images/hotels/offer_parking.jpg"
              alt="Automated ANPR Hotel Parking Barrier"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                maxHeight: '440px',
                objectFit: 'cover',
              }}
            />
            <button
              onClick={() => setLightboxImage('/images/hotels/offer_parking.jpg')}
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
                    backgroundColor: '#d97706',
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
                <li>Ticketless guest drive-through with zero delay at hotel gates.</li>
                <li>VIP recognition alerts front-desk staff before guests reach the lobby.</li>
                <li>Reduces parking congestion and prevents unauthorized long-term parking.</li>
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
                    backgroundColor: '#d97706',
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
                <li>Up to 98%+ ANPR accuracy across multinational license plates.</li>
                <li>Overhead 2-in-1 camera detects space occupancy and records high-res video.</li>
                <li>LED digital guidance signs show real-time available spaces per floor.</li>
                <li>Touchscreen "Find My Car" kiosks guide guests to parked vehicles.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Half: System Topology Diagram + Hardware Accordions */}
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
          {/* Left: System Topology Architecture */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
              <div>
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#0f172a', margin: 0 }}>
                  System Topology
                </h3>
                <span style={{ fontSize: '13px', color: '#64748b' }}>
                  Hotel Parking Management &amp; Guidance Architecture
                </span>
              </div>
              <button
                onClick={() => setLightboxImage('/images/hotels/hotel_topology.jpg')}
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
              onClick={() => setLightboxImage('/images/hotels/hotel_topology.jpg')}
            >
              <img
                src="/images/hotels/hotel_topology.jpg"
                alt="Hotel Parking System Topology Diagram"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  borderRadius: '8px',
                }}
              />
            </div>
            <p style={{ fontSize: '12px', color: '#64748b', marginTop: '10px', lineHeight: 1.5 }}>
              Interconnects Entrance ANPR Terminals, Indoor Dual-Lens Guidance Cameras, Video Intercom Stations, Barrier Gates, and PMS Hotel Property Management.
            </p>
          </div>

          {/* Right: Product Category Accordions (matches screenshot) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {/* Accordion 1: ANPR Entrance Camera */}
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '10px',
                border: '1px solid #e2e8f0',
                overflow: 'hidden',
                boxShadow: '0 2px 6px rgba(0,0,0,0.03)',
              }}
            >
              <button
                onClick={() => toggleAccordion('anpr')}
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '18px 20px',
                  backgroundColor: '#ffffff',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                }}
              >
                <span style={{ fontSize: '16px', fontWeight: 600, color: '#0f172a' }}>
                  ANPR Entrance Camera
                </span>
                {openAccordions.anpr ? <ChevronUp size={18} color="#d97706" /> : <ChevronDown size={18} color="#94a3b8" />}
              </button>

              {openAccordions.anpr && (
                <div
                  style={{
                    padding: '0 20px 20px',
                    borderTop: '1px solid #f1f5f9',
                    fontSize: '13px',
                    color: '#475569',
                    lineHeight: 1.7,
                  }}
                >
                  <p style={{ margin: '14px 0 8px 0', fontWeight: 600, color: '#0f172a' }}>
                    iDS-TCM403-BI Smart ANPR Entrance Terminal
                  </p>
                  <ul style={{ margin: 0, paddingLeft: '18px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <li>Integrates 4MP sensor, motorized zoom lens, DarkFighter illumination, and deep learning ANPR.</li>
                    <li>Built-in barrier control relay triggers gate release within 0.3s of license plate confirmation.</li>
                  </ul>
                </div>
              )}
            </div>

            {/* Accordion 2: Parking Guidance Camera */}
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '10px',
                border: '1px solid #e2e8f0',
                overflow: 'hidden',
                boxShadow: '0 2px 6px rgba(0,0,0,0.03)',
              }}
            >
              <button
                onClick={() => toggleAccordion('guidance')}
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '18px 20px',
                  backgroundColor: '#ffffff',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                }}
              >
                <span style={{ fontSize: '16px', fontWeight: 600, color: '#0f172a' }}>
                  Parking Guidance Camera
                </span>
                {openAccordions.guidance ? <ChevronUp size={18} color="#d97706" /> : <ChevronDown size={18} color="#94a3b8" />}
              </button>

              {openAccordions.guidance && (
                <div
                  style={{
                    padding: '0 20px 20px',
                    borderTop: '1px solid #f1f5f9',
                    fontSize: '13px',
                    color: '#475569',
                    lineHeight: 1.7,
                  }}
                >
                  <p style={{ margin: '14px 0 8px 0', fontWeight: 600, color: '#0f172a' }}>
                    DS-TCP400 Dual-Lens Space Occupancy Detector
                  </p>
                  <ul style={{ margin: 0, paddingLeft: '18px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <li>Monitors up to 6 parking spaces simultaneously with high-accuracy plate capture per stall.</li>
                    <li>7-color customizable LED indicator (Green = Available, Red = Occupied, Blue = Disabled/VIP).</li>
                  </ul>
                </div>
              )}
            </div>

            {/* Accordion 3: Outdoor LED Screen */}
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '10px',
                border: '1px solid #e2e8f0',
                overflow: 'hidden',
                boxShadow: '0 2px 6px rgba(0,0,0,0.03)',
              }}
            >
              <button
                onClick={() => toggleAccordion('led')}
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '18px 20px',
                  backgroundColor: '#ffffff',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                }}
              >
                <span style={{ fontSize: '16px', fontWeight: 600, color: '#0f172a' }}>
                  Outdoor LED Screen &amp; Guidance Board
                </span>
                {openAccordions.led ? <ChevronUp size={18} color="#d97706" /> : <ChevronDown size={18} color="#94a3b8" />}
              </button>

              {openAccordions.led && (
                <div
                  style={{
                    padding: '0 20px 20px',
                    borderTop: '1px solid #f1f5f9',
                    fontSize: '13px',
                    color: '#475569',
                    lineHeight: 1.7,
                  }}
                >
                  <p style={{ margin: '14px 0 8px 0', fontWeight: 600, color: '#0f172a' }}>
                    DS-TVL121 Dynamic Multi-Level Wayfinding Sign
                  </p>
                  <ul style={{ margin: 0, paddingLeft: '18px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <li>Displays available parking stall count per level (B1, B2, VIP Valet).</li>
                    <li>Weatherproof high-contrast LED visible under direct midday sunlight.</li>
                  </ul>
                </div>
              )}
            </div>

            {/* Accordion 4: Software */}
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '10px',
                border: '1px solid #e2e8f0',
                overflow: 'hidden',
                boxShadow: '0 2px 6px rgba(0,0,0,0.03)',
              }}
            >
              <button
                onClick={() => toggleAccordion('software')}
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '18px 20px',
                  backgroundColor: '#ffffff',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                }}
              >
                <span style={{ fontSize: '16px', fontWeight: 600, color: '#0f172a' }}>
                  Software &amp; PMS Integration
                </span>
                {openAccordions.software ? <ChevronUp size={18} color="#d97706" /> : <ChevronDown size={18} color="#94a3b8" />}
              </button>

              {openAccordions.software && (
                <div
                  style={{
                    padding: '0 20px 20px',
                    borderTop: '1px solid #f1f5f9',
                    fontSize: '13px',
                    color: '#475569',
                    lineHeight: 1.7,
                  }}
                >
                  <p style={{ margin: '14px 0 8px 0', fontWeight: 600, color: '#0f172a' }}>
                    Coloron HikCentral Hospitality Edition
                  </p>
                  <ul style={{ margin: 0, paddingLeft: '18px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <li>Seamless API sync with Opera, Fidelio, and cloud PMS hotel booking systems.</li>
                    <li>Automatically binds guest room keys to permitted parking barrier access.</li>
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
                src="/images/hotels/story_cambodia.jpg"
                alt="Cambodian hotel resort LED display"
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
                  color: '#d97706',
                  letterSpacing: '0.8px',
                  marginBottom: '10px',
                }}
              >
                Luxury Hospitality • Case Study
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
                Cambodian hotel resort dazzles the coast with majestic Hikvision LED display
              </h3>

              <p
                style={{
                  fontSize: '14px',
                  color: '#4b5563',
                  lineHeight: 1.7,
                  margin: '0 0 24px 0',
                }}
              >
                A world-class coastal resort in Sihanoukville deployed grand curved outdoor LED facade displays, comprehensive ANPR vehicle gates, and discreet lobby surveillance, setting a new benchmark for luxury guest experiences in Southeast Asia.
              </p>

              <div>
                <button
                  onClick={() => setShowCaseStudyModal(true)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    backgroundColor: '#d97706',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '10px 20px',
                    fontSize: '14px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'background 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#b45309')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#d97706')}
                >
                  <span>Read Full Case Study</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. SECTION 5: YOU MAY ALSO BE INTERESTED IN */}
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
          {/* Card 1: Entrance & Exit Management */}
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
              src="/images/hotels/interest_entrance.jpg"
              alt="Entrance & Exit Management"
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
                Entrance &amp; Exit Management
              </h3>
              <p style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.82)', margin: 0, lineHeight: 1.5 }}>
                Intelligent vehicle gate access, ticketless parking, and automated guest validation.
              </p>
            </div>
          </div>

          {/* Card 2: Perimeter Protection */}
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
              src="/images/hotels/interest_perimeter.jpg"
              alt="Perimeter Protection"
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
                Perimeter Protection
              </h3>
              <p style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.82)', margin: 0, lineHeight: 1.5 }}>
                Deep-learning false alarm reduction to secure resort grounds, private villas, and poolsides.
              </p>
            </div>
          </div>

          {/* Card 3: TandemVu PTZ Cameras */}
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
              src="/images/hotels/interest_tandemvu.jpg"
              alt="TandemVu PTZ Cameras"
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
                TandemVu PTZ Cameras
              </h3>
              <p style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.82)', margin: 0, lineHeight: 1.5 }}>
                Simultaneous panoramic resort overview and optical zoom detail tracking on a single camera.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. SECTION 6: READY TO DISCUSS YOUR NEEDS? (CTA) */}
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
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
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
              maxWidth: '640px',
              margin: '0 0 32px 0',
              lineHeight: 1.6,
            }}
          >
            Speak with a Coloron hospitality security and smart hotel consultant to design a tailored security, parking guidance, and guest experience solution for your property.
          </p>

          {/* Action Buttons */}
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
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
                color: '#d97706',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
              }}
            >
              Sihanoukville, Cambodia • Luxury Resort
            </span>

            <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#0f172a', margin: '8px 0 16px 0', lineHeight: 1.3 }}>
              Cambodian hotel resort dazzles the coast with majestic Hikvision LED display
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '14px', lineHeight: 1.7, color: '#334155' }}>
              <p style={{ margin: 0 }}>
                <strong>The Challenge:</strong> As an elite international beachfront destination, the resort needed to elevate its brand presence while guaranteeing frictionless arrivals and discreet 24/7 security for global dignitaries and vacationing families.
              </p>
              <p style={{ margin: 0 }}>
                <strong>The Solution:</strong> The property deployed a landmark curved high-definition outdoor LED display facade, integrated ANPR vehicle barriers, 180° lobby panoramic cameras, and intelligent guest parking guidance.
              </p>
              <p style={{ margin: 0 }}>
                <strong>The Outcome:</strong> Vehicle drop-off bottlenecks were completely eliminated, security response times dropped by 70%, and the property experienced a surge in international tourism visibility.
              </p>
            </div>

            <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'flex-end' }}>
              <button
                onClick={() => {
                  setShowCaseStudyModal(false);
                  setShowSalesModal(true);
                }}
                style={{
                  backgroundColor: '#d97706',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '10px 22px',
                  fontSize: '14px',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                Inquire About Hotel Solutions
              </button>
            </div>
          </div>
        </div>
      )}

      {/* SALES MODAL */}
      <ContactSalesModal
        isOpen={showSalesModal}
        onClose={() => setShowSalesModal(false)}
        defaultSubject="Hotels & Hospitality Security Solution Inquiry"
      />
    </div>
  );
}
