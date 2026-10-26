import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ShoppingBag,
  Store,
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
  Building,
  Check
} from 'lucide-react';
import ContactSalesModal from '../components/ContactSalesModal';

// Interactive hotspots for 3D Cutaway Shopping Mall Overview
const MALL_HOTSPOTS = [
  {
    id: 1,
    x: '49%',
    y: '72%',
    tag: 'Main Entrances & Exits',
    title: 'Main Pedestrian & Transit Entrances',
    device: 'Dual-Lens 3D Binocular People Counting Camera (iDS-2CD6825G0/C-IVS)',
    spec: '3D stereoscopic vision, 98%+ counting accuracy, height filtering, bi-directional in/out count',
    desc: 'Deep learning binocular cameras at all exterior and transit portals filter out baby strollers and shadows to provide high-precision footfall counts and live mall occupancy data.',
    benefit: 'Enables real-time occupancy monitoring for fire code compliance and tracks total daily visitor traffic trends.'
  },
  {
    id: 2,
    x: '52%',
    y: '48%',
    tag: 'Central Atrium & Escalators',
    title: 'Multi-Story Atrium & Vertical Transit',
    device: 'Panoramic 360° Fisheye Camera (DS-2CD63C5G0-IVS)',
    spec: '12 MP ultra HD sensor, 360° panoramic multi-zone dewarping, customer dwell heatmaps',
    desc: 'Ultra-wide angle coverage of open multi-level atriums and escalators detects passenger bottleneck density, issuing automatic alerts before congestion becomes a safety hazard.',
    benefit: 'Replaces up to 4 standard dome cameras per atrium while generating foot traffic heatmaps of high-value advertising spaces.'
  },
  {
    id: 3,
    x: '38%',
    y: '53%',
    tag: 'Anchor Stores & Boutiques',
    title: 'Specialty Boutiques & Brand Retailers',
    device: 'iDS-7 Series Smart DeepinView Dome (iDS-2CD7146G0-IZS)',
    spec: 'Passerby vs. entry detection, customer dwell time analytics, 4 MP DarkFighter low-light sensor',
    desc: 'Analyzes the ratio of shoppers walking past a retail storefront versus those entering the store, delivering verified foot traffic data for commercial lease evaluations.',
    benefit: 'Provides leasing managers and retail tenants with objective store conversion rates and promotional ROI metrics.'
  },
  {
    id: 4,
    x: '64%',
    y: '42%',
    tag: 'Dining Plaza & Food Court',
    title: 'Dining Court & Food Hall Zones',
    device: 'Smart Queue Management Dome & Kitchen Thermal Sensor',
    spec: 'Automated queue length notifications, thermal surface temperature alarm, discreet indoor housing',
    desc: 'Monitors food counter wait queues to notify floor managers during lunch and dinner rushes, while thermal sensors continuously audit commercial kitchen ranges for fire risks.',
    benefit: 'Reduces dining wait times by 28% and guarantees rapid response to back-of-house culinary thermal anomalies.'
  },
  {
    id: 5,
    x: '32%',
    y: '68%',
    tag: 'Underground Parking & Logistics',
    title: 'Subterranean Parking & Logistics Docks',
    device: 'Smart ANPR Barrier Gate & Parking Space Guidance Camera',
    spec: '98%+ license plate recognition, dual-space LED indicators, loading dock dwell timer',
    desc: 'Frictionless ticketless ANPR gate entry for shoppers with overhead parking guidance indicators directing drivers to open bays, plus automated delivery truck turnaround tracking.',
    benefit: 'Cuts parking search time to under 90 seconds and prevents delivery truck congestion in subterranean service bays.'
  },
];

export default function ShoppingMallsSolution() {
  const [showContactModal, setShowContactModal] = useState(false);
  const [copiedShare, setCopiedShare] = useState(false);
  const [activeNav, setActiveNav] = useState('overview');
  const [activeHotspot, setActiveHotspot] = useState(MALL_HOTSPOTS[0]);
  const [lightboxImg, setLightboxImg] = useState(null);
  const [showCaseStudyModal, setShowCaseStudyModal] = useState(false);

  // Accordion state for product recommendations (Dual-Lens open by default matching screenshot)
  const [accordionOpen, setAccordionOpen] = useState({
    peopleCounting: true,
    fisheye: false,
    smartDome: false,
  });

  const toggleAccordion = (key) => {
    setAccordionOpen((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // Scrollspy for sub-navigation
  useEffect(() => {
    const handleScroll = () => {
      const navSections = [
        'overview',
        'customer-traffic-analytics',
        'what-we-offer',
        'related',
        'success-stories',
        'download',
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

  const handleBrochureDownload = () => {
    const link = document.createElement('a');
    link.href = '#';
    link.setAttribute('download', 'Coloron_Shopping_Malls_Solution_Brochure.pdf');
    alert('Thank you for downloading the Shopping Malls Solution Brochure. The technical document has been queued.');
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
      {/* 1. HERO SECTION: Shopping Mall Interior Banner with Purple Glow & Exact 740px Height */}
      <section
        style={{
          position: 'relative',
          width: '100%',
          minHeight: '740px',
          height: '740px',
          overflow: 'hidden',
          backgroundColor: '#2e1065',
        }}
      >
        {/* Real High-Resolution Shopping Mall Hero Image */}
        <img
          src="/images/shopping_malls/mall_hero.jpg"
          alt="Coloron Shopping Malls Intelligent Security & Footfall Analytics Solution"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 40%',
            filter: 'brightness(0.96)',
          }}
        />

        {/* Purple / Violet Circular Radial Glow Overlay (matches screenshot) */}
        <div
          style={{
            position: 'absolute',
            top: '-20%',
            left: '-10%',
            width: '65vw',
            height: '140%',
            borderRadius: '50%',
            background: 'radial-gradient(ellipse at center, rgba(147, 51, 234, 0.72) 0%, rgba(126, 34, 206, 0.48) 45%, rgba(107, 33, 168, 0.18) 75%, transparent 100%)',
            pointerEvents: 'none',
            mixBlendMode: 'screen',
          }}
        />

        {/* Subtle Vignette for High Text Readability */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(90deg, rgba(59, 7, 100, 0.78) 0%, rgba(59, 7, 100, 0.42) 50%, rgba(59, 7, 100, 0.12) 100%)',
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
              backgroundColor: 'rgba(255, 255, 255, 0.22)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.38)',
              color: '#ffffff',
              fontSize: '13px',
              fontWeight: 600,
              letterSpacing: '0.4px',
              width: 'fit-content',
              marginBottom: '16px',
            }}
          >
            <ShoppingBag size={15} color="#f3e8ff" />
            <span>Solutions by Scenario</span>
          </div>

          {/* Title */}
          <h1
            style={{
              fontSize: 'clamp(36px, 4.6vw, 58px)',
              fontWeight: 800,
              color: '#ffffff',
              lineHeight: 1.12,
              margin: '0 0 14px 0',
              letterSpacing: '-0.02em',
              textShadow: '0 3px 18px rgba(0, 0, 0, 0.55)',
            }}
          >
            Shopping Malls
          </h1>

          {/* Subtitle matching official Hikvision wording */}
          <p
            style={{
              fontSize: 'clamp(16px, 1.8vw, 20px)',
              fontWeight: 400,
              color: 'rgba(255, 255, 255, 0.95)',
              lineHeight: 1.5,
              maxWidth: '680px',
              margin: '0 0 28px 0',
              textShadow: '0 2px 8px rgba(0, 0, 0, 0.45)',
            }}
          >
            Digital operation and intelligent security for modern shopping destinations
          </p>

          {/* Action CTAs */}
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <button
              onClick={() => setShowContactModal(true)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '13px 28px',
                borderRadius: '8px',
                backgroundColor: '#dc2626',
                color: '#ffffff',
                fontSize: '15px',
                fontWeight: 600,
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 4px 14px rgba(220, 38, 38, 0.45)',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#b91c1c')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#dc2626')}
            >
              <PhoneCall size={16} />
              <span>Contact Sales</span>
            </button>

            <button
              onClick={() => scrollToSection('customer-traffic-analytics')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '13px 26px',
                borderRadius: '8px',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.45)',
                color: '#ffffff',
                fontSize: '15px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.32)')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)')}
            >
              <span>Explore Analytics</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* 2. BREADCRUMB & UTILITY BAR */}
      <section
        style={{
          borderBottom: '1px solid #e5e7eb',
          backgroundColor: '#f9fafb',
          padding: '12px 32px',
        }}
      >
        <div
          style={{
            maxWidth: '1360px',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '13px',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          {/* Breadcrumb links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#4b5563' }}>
            <Link to="/" style={{ color: '#6b7280', textDecoration: 'none' }}>
              Home
            </Link>
            <span>/</span>
            <Link to="/solutions" style={{ color: '#6b7280', textDecoration: 'none' }}>
              Solutions
            </Link>
            <span>/</span>
            <span style={{ color: '#6b7280' }}>Solutions by Scenario</span>
            <span>/</span>
            <span style={{ color: '#111827', fontWeight: 600 }}>Shopping Malls</span>
          </div>

          {/* Utility Tools */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
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
                fontWeight: 500,
              }}
            >
              <Share2 size={14} />
              <span>{copiedShare ? 'Link Copied!' : 'Share'}</span>
            </button>

            <button
              onClick={() => setShowContactModal(true)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                background: 'none',
                border: 'none',
                color: '#9333ea',
                fontSize: '13px',
                cursor: 'pointer',
                fontWeight: 600,
              }}
            >
              <PhoneCall size={14} />
              <span>Talk to Retail Specialist</span>
            </button>
          </div>
        </div>
      </section>

      {/* 3. STICKY SUB-NAVIGATION */}
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
            maxWidth: '1360px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            overflowX: 'auto',
            whiteSpace: 'nowrap',
            padding: '0 32px',
            scrollbarWidth: 'none',
          }}
        >
          {[
            { id: 'overview', label: 'Solution overview' },
            { id: 'customer-traffic-analytics', label: 'Customer Traffic Analytics' },
            { id: 'what-we-offer', label: 'What we offer' },
            { id: 'related', label: 'You may also be interested in' },
            { id: 'success-stories', label: 'Success stories' },
            { id: 'download', label: 'Download' },
          ].map((tab) => {
            const isActive = activeNav === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => scrollToSection(tab.id)}
                style={{
                  padding: '16px 20px',
                  fontSize: '14px',
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? '#9333ea' : '#4b5563',
                  borderBottom: isActive ? '3px solid #9333ea' : '3px solid transparent',
                  background: 'none',
                  borderTop: 'none',
                  borderLeft: 'none',
                  borderRight: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                  flexShrink: 0,
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </nav>

      {/* 4. SECTION: SOLUTION OVERVIEW WITH INTERACTIVE 3D CUTAWAY MALL MAP */}
      <section
        id="overview"
        style={{
          padding: '70px 32px 60px',
          maxWidth: '1360px',
          margin: '0 auto',
        }}
      >
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto 48px' }}>
          <h2
            style={{
              fontSize: 'clamp(28px, 3.2vw, 38px)',
              fontWeight: 800,
              color: '#111827',
              margin: '0 0 16px 0',
              letterSpacing: '-0.02em',
            }}
          >
            Solution overview
          </h2>
          <p
            style={{
              fontSize: '15px',
              color: '#4b5563',
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            Today&apos;s retail industry is growing fast and competition is fierce. Shopping malls need to find more innovative approaches to gain deeper customer insights and make informed decisions, improve operations, and upgrade shopper experiences while ensuring a safe, welcoming environment.
          </p>
        </div>

        {/* 3D Isometric Mall Cutaway Map Container */}
        <div
          style={{
            position: 'relative',
            backgroundColor: '#f8fafc',
            borderRadius: '20px',
            border: '1px solid #e2e8f0',
            overflow: 'hidden',
            padding: '30px 20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.04)',
          }}
        >
          {/* Visual Interactive Map Area */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '780px',
              minHeight: '380px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <img
              src="/images/shopping_malls/mall_3d_map.jpg"
              alt="Interactive 3D Cutaway Shopping Mall Architecture"
              style={{
                width: '100%',
                maxHeight: '440px',
                objectFit: 'contain',
                display: 'block',
                filter: 'drop-shadow(0 15px 25px rgba(0, 0, 0, 0.08))',
              }}
            />

            {/* Clickable Hotspot Pins */}
            {MALL_HOTSPOTS.map((spot) => {
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
                    width: isSelected ? '34px' : '28px',
                    height: isSelected ? '34px' : '28px',
                    borderRadius: '50%',
                    backgroundColor: isSelected ? '#9333ea' : '#dc2626',
                    color: '#ffffff',
                    border: '3px solid #ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: isSelected ? '14px' : '12px',
                    fontWeight: 800,
                    cursor: 'pointer',
                    boxShadow: isSelected
                      ? '0 0 0 6px rgba(147, 51, 234, 0.35), 0 4px 12px rgba(0,0,0,0.3)'
                      : '0 2px 8px rgba(0,0,0,0.25)',
                    transition: 'all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    zIndex: isSelected ? 20 : 10,
                  }}
                  title={spot.title}
                >
                  {spot.id}
                </button>
              );
            })}
          </div>

          {/* Quick zone tabs beneath map */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '10px',
              justifyContent: 'center',
              marginTop: '28px',
              padding: '0 12px',
            }}
          >
            {MALL_HOTSPOTS.map((spot) => {
              const isSelected = activeHotspot.id === spot.id;
              return (
                <button
                  key={spot.id}
                  onClick={() => setActiveHotspot(spot)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '8px 16px',
                    borderRadius: '30px',
                    border: isSelected ? '1.5px solid #9333ea' : '1px solid #d1d5db',
                    backgroundColor: isSelected ? '#faf5ff' : '#ffffff',
                    color: isSelected ? '#9333ea' : '#374151',
                    fontSize: '13px',
                    fontWeight: isSelected ? 700 : 500,
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                  }}
                >
                  <span
                    style={{
                      width: '18px',
                      height: '18px',
                      borderRadius: '50%',
                      backgroundColor: isSelected ? '#9333ea' : '#6b7280',
                      color: '#ffffff',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '11px',
                      fontWeight: 700,
                    }}
                  >
                    {spot.id}
                  </span>
                  <span>{spot.tag}</span>
                </button>
              );
            })}
          </div>

          {/* Active Hotspot Detailed Drawer Card */}
          <div
            style={{
              marginTop: '24px',
              width: '100%',
              maxWidth: '920px',
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              border: '1px solid #e5e7eb',
              padding: '24px 28px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                  <span
                    style={{
                      display: 'inline-block',
                      padding: '3px 9px',
                      borderRadius: '6px',
                      backgroundColor: '#f3e8ff',
                      color: '#7e22ce',
                      fontSize: '12px',
                      fontWeight: 700,
                    }}
                  >
                    Zone {activeHotspot.id} • {activeHotspot.tag}
                  </span>
                </div>
                <h3 style={{ fontSize: '19px', fontWeight: 700, color: '#111827', margin: '0 0 8px 0' }}>
                  {activeHotspot.title}
                </h3>
              </div>

              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '6px 12px',
                  backgroundColor: '#f0fdf4',
                  borderRadius: '20px',
                  color: '#15803d',
                  fontSize: '12px',
                  fontWeight: 600,
                }}
              >
                <CheckCircle2 size={14} />
                <span>AI Verified Footfall</span>
              </div>
            </div>

            <p style={{ fontSize: '14px', color: '#4b5563', lineHeight: 1.6, margin: '8px 0 16px 0' }}>
              {activeHotspot.desc}
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '14px',
                paddingTop: '14px',
                borderTop: '1px solid #f3f4f6',
              }}
            >
              <div>
                <span style={{ fontSize: '12px', color: '#6b7280', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  Recommended Device
                </span>
                <p style={{ fontSize: '13px', fontWeight: 600, color: '#1f2937', margin: '4px 0 0 0' }}>
                  {activeHotspot.device}
                </p>
                <p style={{ fontSize: '12px', color: '#6b7280', margin: '2px 0 0 0' }}>
                  {activeHotspot.spec}
                </p>
              </div>

              <div>
                <span style={{ fontSize: '12px', color: '#6b7280', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  Business Value
                </span>
                <p style={{ fontSize: '13px', color: '#374151', margin: '4px 0 0 0', lineHeight: 1.5 }}>
                  {activeHotspot.benefit}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SECTION: CUSTOMER TRAFFIC ANALYTICS (2 CHALLENGE CARDS MATCHING SCREENSHOT) */}
      <section
        id="customer-traffic-analytics"
        style={{
          padding: '70px 32px',
          backgroundColor: '#fafafa',
          borderTop: '1px solid #f3f4f6',
          borderBottom: '1px solid #f3f4f6',
        }}
      >
        <div style={{ maxWidth: '1360px', margin: '0 auto' }}>
          {/* Section Header */}
          <div style={{ textAlign: 'center', maxWidth: '880px', margin: '0 auto 48px' }}>
            <h2
              style={{
                fontSize: 'clamp(28px, 3.2vw, 38px)',
                fontWeight: 800,
                color: '#111827',
                margin: '0 0 16px 0',
                letterSpacing: '-0.02em',
              }}
            >
              Customer Traffic Analytics
            </h2>
            <p style={{ fontSize: '15px', color: '#4b5563', lineHeight: 1.7, margin: 0 }}>
              Shopping mall operators and retail property managers face significant hurdles in gathering accurate, actionable foot traffic intelligence across vast multi-level commercial layouts.
            </p>
          </div>

          {/* 2 Challenge Cards Side-by-Side Matching Screenshot */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '28px',
              maxWidth: '1100px',
              margin: '0 auto',
            }}
          >
            {/* Challenge Card 1: Traffic Congestion */}
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1px solid #e5e7eb',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.04)';
              }}
            >
              <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
                <img
                  src="/images/shopping_malls/challenge_traffic.jpg"
                  alt="Customer Flow & Congestion in Atrium"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '14px',
                    left: '14px',
                    backgroundColor: 'rgba(220, 38, 38, 0.92)',
                    color: '#ffffff',
                    padding: '4px 10px',
                    borderRadius: '6px',
                    fontSize: '11px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.4px',
                  }}
                >
                  Challenge 1
                </div>
              </div>

              <div style={{ padding: '24px 26px' }}>
                <h3
                  style={{
                    fontSize: '18px',
                    fontWeight: 700,
                    color: '#111827',
                    margin: '0 0 10px 0',
                  }}
                >
                  Customer Flow & Atrium Congestion
                </h3>
                <p style={{ fontSize: '14px', color: '#4b5563', lineHeight: 1.6, margin: '0 0 14px 0' }}>
                  During peak holiday sales and weekend events, dense crowds gather rapidly in central multi-level atriums and escalator landings, causing dangerous bottlenecks and emergency egress risks without prior warning.
                </p>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: '#dc2626',
                    fontSize: '13px',
                    fontWeight: 600,
                  }}
                >
                  <AlertTriangle size={15} />
                  <span>Manual guard patrols cannot track dynamic crowd density in real-time</span>
                </div>
              </div>
            </div>

            {/* Challenge Card 2: Retail Store Performance */}
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1px solid #e5e7eb',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.04)';
              }}
            >
              <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
                <img
                  src="/images/shopping_malls/challenge_retail_store.jpg"
                  alt="Store Conversion & Performance Analysis"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '14px',
                    left: '14px',
                    backgroundColor: 'rgba(220, 38, 38, 0.92)',
                    color: '#ffffff',
                    padding: '4px 10px',
                    borderRadius: '6px',
                    fontSize: '11px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.4px',
                  }}
                >
                  Challenge 2
                </div>
              </div>

              <div style={{ padding: '24px 26px' }}>
                <h3
                  style={{
                    fontSize: '18px',
                    fontWeight: 700,
                    color: '#111827',
                    margin: '0 0 10px 0',
                  }}
                >
                  Storefront Conversion & Performance
                </h3>
                <p style={{ fontSize: '14px', color: '#4b5563', lineHeight: 1.6, margin: '0 0 14px 0' }}>
                  Commercial leasing managers lack verified, objective data to determine how many shoppers pass by a tenant&apos;s shop window versus how many enter the boutique, leading to disputes over retail rental valuation.
                </p>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: '#dc2626',
                    fontSize: '13px',
                    fontWeight: 600,
                  }}
                >
                  <AlertTriangle size={15} />
                  <span>No objective visibility into retail marketing campaign ROI and store capture rates</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SECTION: WHAT WE OFFER (3 VISUAL FEATURE ROWS + TOPOLOGY/ACCORDION + PRODUCT CARDS) */}
      <section
        id="what-we-offer"
        style={{
          padding: '80px 32px',
          maxWidth: '1360px',
          margin: '0 auto',
        }}
      >
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '880px', margin: '0 auto 56px' }}>
          <h2
            style={{
              fontSize: 'clamp(28px, 3.2vw, 38px)',
              fontWeight: 800,
              color: '#111827',
              margin: '0 0 16px 0',
              letterSpacing: '-0.02em',
            }}
          >
            What we offer
          </h2>
          <p style={{ fontSize: '15px', color: '#4b5563', lineHeight: 1.7, margin: 0 }}>
            Hikvision delivers end-to-end intelligent IoT solutions tailored specifically for modern shopping malls, transforming everyday security surveillance into powerful commercial business intelligence.
          </p>
        </div>

        {/* 3 Visual Feature Rows Matching Screenshot */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '60px', marginBottom: '80px' }}>
          {/* Row 1: Image Left, Text Right (Atrium & Escalator Traffic Analytics) */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '40px',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
                cursor: 'pointer',
              }}
              onClick={() => setLightboxImg('/images/shopping_malls/offer_atrium_flow.jpg')}
            >
              <img
                src="/images/shopping_malls/offer_atrium_flow.jpg"
                alt="Atrium & Escalator Traffic Analytics"
                style={{
                  width: '100%',
                  height: '320px',
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'transform 0.3s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              />
            </div>

            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '4px 10px',
                  borderRadius: '6px',
                  backgroundColor: '#f3e8ff',
                  color: '#7e22ce',
                  fontSize: '12px',
                  fontWeight: 700,
                  marginBottom: '12px',
                }}
              >
                <TrendingUp size={13} />
                <span>Crowd Safety & Spatial Analytics</span>
              </div>

              <h3 style={{ fontSize: '24px', fontWeight: 800, color: '#111827', margin: '0 0 14px 0' }}>
                Atrium & Escalator Traffic Analytics
              </h3>
              <p style={{ fontSize: '15px', color: '#4b5563', lineHeight: 1.7, margin: '0 0 20px 0' }}>
                Continuous panoramic monitoring of multi-floor open spaces detects escalator queue build-up and pedestrian congestion before overcrowding creates trip-and-fall hazards.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  'Accurate footfall counting across wide open spaces and high-traffic walkways',
                  'Heatmap analytics identifying high-traffic anchor zones and quiet dead zones for tenant optimization',
                  'Automated alarm triggers when crowd density exceeds safe passenger thresholds near escalators',
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <div
                      style={{
                        width: '20px',
                        height: '20px',
                        borderRadius: '50%',
                        backgroundColor: '#f3e8ff',
                        color: '#9333ea',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        marginTop: '2px',
                      }}
                    >
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span style={{ fontSize: '14px', color: '#374151', lineHeight: 1.5 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Row 2: Text Left, Image Right (Storefront Conversion Rate Optimization) */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '40px',
              alignItems: 'center',
            }}
          >
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '4px 10px',
                  borderRadius: '6px',
                  backgroundColor: '#eff6ff',
                  color: '#1d4ed8',
                  fontSize: '12px',
                  fontWeight: 700,
                  marginBottom: '12px',
                }}
              >
                <Store size={13} />
                <span>Tenant Commercial Insights</span>
              </div>

              <h3 style={{ fontSize: '24px', fontWeight: 800, color: '#111827', margin: '0 0 14px 0' }}>
                Storefront Conversion Rate Optimization
              </h3>
              <p style={{ fontSize: '15px', color: '#4b5563', lineHeight: 1.7, margin: '0 0 20px 0' }}>
                Measure retail promotional campaign effectiveness and boutique tenant performance with precise passerby vs. entering conversion ratios.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  'Detects passerby volume vs. customer entrance counts outside individual retail units',
                  'Calculates true boutique store capture rate in real-time on HikCentral management platform',
                  'Empowers leasing managers with objective tenant footfall data for transparent leasing negotiations',
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <div
                      style={{
                        width: '20px',
                        height: '20px',
                        borderRadius: '50%',
                        backgroundColor: '#eff6ff',
                        color: '#2563eb',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        marginTop: '2px',
                      }}
                    >
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span style={{ fontSize: '14px', color: '#374151', lineHeight: 1.5 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
                cursor: 'pointer',
              }}
              onClick={() => setLightboxImg('/images/shopping_malls/offer_escalator_flow.jpg')}
            >
              <img
                src="/images/shopping_malls/offer_escalator_flow.jpg"
                alt="Storefront Conversion Rate Optimization"
                style={{
                  width: '100%',
                  height: '320px',
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'transform 0.3s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              />
            </div>
          </div>

          {/* Row 3: Image Left, Text Right (Entrance People Counting & Regional Flow) */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '40px',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
                cursor: 'pointer',
              }}
              onClick={() => setLightboxImg('/images/shopping_malls/offer_people_counting.jpg')}
            >
              <img
                src="/images/shopping_malls/offer_people_counting.jpg"
                alt="Entrance People Counting & Regional Flow"
                style={{
                  width: '100%',
                  height: '320px',
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'transform 0.3s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              />
            </div>

            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '4px 10px',
                  borderRadius: '6px',
                  backgroundColor: '#fef3c7',
                  color: '#b45309',
                  fontSize: '12px',
                  fontWeight: 700,
                  marginBottom: '12px',
                }}
              >
                <Users size={13} />
                <span>Stereoscopic Bi-Directional Counting</span>
              </div>

              <h3 style={{ fontSize: '24px', fontWeight: 800, color: '#111827', margin: '0 0 14px 0' }}>
                Entrance People Counting & Regional Flow
              </h3>
              <p style={{ fontSize: '15px', color: '#4b5563', lineHeight: 1.7, margin: '0 0 20px 0' }}>
                Deploy stereoscopic binocular cameras at all pedestrian, metro, and parking garage mall entrances to record verified footfall without privacy violation.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  '3D binocular stereo vision filters out shadows, children under threshold height, and shopping carts',
                  'Bi-directional counting (in/out) with automated live mall occupancy display at information kiosks',
                  'Centralized cloud and on-premise reporting across daily, weekly, and seasonal promotional periods',
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <div
                      style={{
                        width: '20px',
                        height: '20px',
                        borderRadius: '50%',
                        backgroundColor: '#fef3c7',
                        color: '#d97706',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        marginTop: '2px',
                      }}
                    >
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span style={{ fontSize: '14px', color: '#374151', lineHeight: 1.5 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ARCHITECTURE TOPOLOGY & PRODUCT ACCORDION MATCHING SCREENSHOT */}
        <div
          style={{
            backgroundColor: '#ffffff',
            borderRadius: '20px',
            border: '1px solid #e5e7eb',
            padding: '36px',
            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.04)',
            marginBottom: '48px',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '36px',
              alignItems: 'flex-start',
            }}
          >
            {/* Left: Official Architecture Topology Diagram */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                <div>
                  <h4 style={{ fontSize: '18px', fontWeight: 700, color: '#111827', margin: '0 0 4px 0' }}>
                    System Architecture Topology
                  </h4>
                  <p style={{ fontSize: '13px', color: '#6b7280', margin: 0 }}>
                    HikCentral Server & Client connecting Dual-Lens, Fisheye & DeepinView Cameras via PoE Switch
                  </p>
                </div>

                <button
                  onClick={() => setLightboxImg('/images/shopping_malls/offer_topology_diagram.jpg')}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '6px 12px',
                    borderRadius: '8px',
                    border: '1px solid #d1d5db',
                    backgroundColor: '#ffffff',
                    color: '#374151',
                    fontSize: '12px',
                    fontWeight: 600,
                    cursor: 'pointer',
                  }}
                >
                  <Maximize2 size={13} />
                  <span>Expand</span>
                </button>
              </div>

              <div
                style={{
                  position: 'relative',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  border: '1px solid #e5e7eb',
                  backgroundColor: '#f9fafb',
                  cursor: 'pointer',
                  padding: '12px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onClick={() => setLightboxImg('/images/shopping_malls/offer_topology_diagram.jpg')}
              >
                <img
                  src="/images/shopping_malls/offer_topology_diagram.jpg"
                  alt="Shopping Malls Solution Architecture Topology"
                  style={{
                    width: '100%',
                    maxHeight: '320px',
                    objectFit: 'contain',
                    display: 'block',
                  }}
                />
              </div>
            </div>

            {/* Right: Product Selection Accordion Matching Screenshot */}
            <div>
              <h4 style={{ fontSize: '18px', fontWeight: 700, color: '#111827', margin: '0 0 16px 0' }}>
                Key Hardware Components
              </h4>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {/* Accordion 1: Dual-Lens People Counting Camera */}
                <div
                  style={{
                    borderRadius: '12px',
                    border: accordionOpen.peopleCounting ? '1.5px solid #9333ea' : '1px solid #e5e7eb',
                    backgroundColor: accordionOpen.peopleCounting ? '#faf5ff' : '#ffffff',
                    overflow: 'hidden',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <button
                    onClick={() => toggleAccordion('peopleCounting')}
                    style={{
                      width: '100%',
                      padding: '16px 20px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      textAlign: 'left',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <Camera size={18} color="#9333ea" />
                      <span style={{ fontSize: '15px', fontWeight: 700, color: '#111827' }}>
                        Dual-Lens People Counting Camera
                      </span>
                    </div>
                    {accordionOpen.peopleCounting ? (
                      <ChevronUp size={18} color="#9333ea" />
                    ) : (
                      <ChevronDown size={18} color="#6b7280" />
                    )}
                  </button>

                  {accordionOpen.peopleCounting && (
                    <div style={{ padding: '0 20px 18px 20px', fontSize: '13px', color: '#4b5563', lineHeight: 1.6 }}>
                      <p style={{ margin: '0 0 8px 0', fontWeight: 600, color: '#1f2937' }}>
                        Model: iDS-2CD6825G0/C-IVS (Binocular 3D Vision)
                      </p>
                      <p style={{ margin: '0 0 10px 0' }}>
                        Features 3D binocular stereo vision algorithms for accurate height detection, eliminating shadows and shopping carts. Achieves up to 98% counting accuracy at crowded entrances.
                      </p>
                      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                        <span style={{ padding: '3px 8px', borderRadius: '4px', backgroundColor: '#f3e8ff', color: '#7e22ce', fontSize: '11px', fontWeight: 600 }}>
                          98%+ Accuracy
                        </span>
                        <span style={{ padding: '3px 8px', borderRadius: '4px', backgroundColor: '#f3e8ff', color: '#7e22ce', fontSize: '11px', fontWeight: 600 }}>
                          3D Binocular
                        </span>
                        <span style={{ padding: '3px 8px', borderRadius: '4px', backgroundColor: '#f3e8ff', color: '#7e22ce', fontSize: '11px', fontWeight: 600 }}>
                          PoE Supported
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Accordion 2: Panoramic Fisheye Camera */}
                <div
                  style={{
                    borderRadius: '12px',
                    border: accordionOpen.fisheye ? '1.5px solid #9333ea' : '1px solid #e5e7eb',
                    backgroundColor: accordionOpen.fisheye ? '#faf5ff' : '#ffffff',
                    overflow: 'hidden',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <button
                    onClick={() => toggleAccordion('fisheye')}
                    style={{
                      width: '100%',
                      padding: '16px 20px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      textAlign: 'left',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <Eye size={18} color="#9333ea" />
                      <span style={{ fontSize: '15px', fontWeight: 700, color: '#111827' }}>
                        Panoramic Fisheye Camera
                      </span>
                    </div>
                    {accordionOpen.fisheye ? (
                      <ChevronUp size={18} color="#9333ea" />
                    ) : (
                      <ChevronDown size={18} color="#6b7280" />
                    )}
                  </button>

                  {accordionOpen.fisheye && (
                    <div style={{ padding: '0 20px 18px 20px', fontSize: '13px', color: '#4b5563', lineHeight: 1.6 }}>
                      <p style={{ margin: '0 0 8px 0', fontWeight: 600, color: '#1f2937' }}>
                        Model: DS-2CD63C5G0-IVS (12 MP Ultra HD 360°)
                      </p>
                      <p style={{ margin: '0 0 10px 0' }}>
                        Ultra-high 12 MP resolution provides full 360-degree situational coverage of multi-floor open atriums. Generates spatial heatmaps and customer dwell statistics with zero blind spots.
                      </p>
                      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                        <span style={{ padding: '3px 8px', borderRadius: '4px', backgroundColor: '#f3e8ff', color: '#7e22ce', fontSize: '11px', fontWeight: 600 }}>
                          12 MP Resolution
                        </span>
                        <span style={{ padding: '3px 8px', borderRadius: '4px', backgroundColor: '#f3e8ff', color: '#7e22ce', fontSize: '11px', fontWeight: 600 }}>
                          360° Dewarping
                        </span>
                        <span style={{ padding: '3px 8px', borderRadius: '4px', backgroundColor: '#f3e8ff', color: '#7e22ce', fontSize: '11px', fontWeight: 600 }}>
                          Heatmap Analytics
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Accordion 3: iDS-7 Series Smart DeepinView Dome */}
                <div
                  style={{
                    borderRadius: '12px',
                    border: accordionOpen.smartDome ? '1.5px solid #9333ea' : '1px solid #e5e7eb',
                    backgroundColor: accordionOpen.smartDome ? '#faf5ff' : '#ffffff',
                    overflow: 'hidden',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <button
                    onClick={() => toggleAccordion('smartDome')}
                    style={{
                      width: '100%',
                      padding: '16px 20px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      textAlign: 'left',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <Cpu size={18} color="#9333ea" />
                      <span style={{ fontSize: '15px', fontWeight: 700, color: '#111827' }}>
                        iDS-7 Series Smart DeepinView Dome
                      </span>
                    </div>
                    {accordionOpen.smartDome ? (
                      <ChevronUp size={18} color="#9333ea" />
                    ) : (
                      <ChevronDown size={18} color="#6b7280" />
                    )}
                  </button>

                  {accordionOpen.smartDome && (
                    <div style={{ padding: '0 20px 18px 20px', fontSize: '13px', color: '#4b5563', lineHeight: 1.6 }}>
                      <p style={{ margin: '0 0 8px 0', fontWeight: 600, color: '#1f2937' }}>
                        Model: iDS-2CD7146G0-IZS (DeepinView AI Dome)
                      </p>
                      <p style={{ margin: '0 0 10px 0' }}>
                        Equipped with DarkFighter low-light sensor and DeepinView deep learning chips for passerby counting, storefront entry detection, queue duration auditing, and facial attribute metadata.
                      </p>
                      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                        <span style={{ padding: '3px 8px', borderRadius: '4px', backgroundColor: '#f3e8ff', color: '#7e22ce', fontSize: '11px', fontWeight: 600 }}>
                          Passerby vs Entry
                        </span>
                        <span style={{ padding: '3px 8px', borderRadius: '4px', backgroundColor: '#f3e8ff', color: '#7e22ce', fontSize: '11px', fontWeight: 600 }}>
                          Queue Detection
                        </span>
                        <span style={{ padding: '3px 8px', borderRadius: '4px', backgroundColor: '#f3e8ff', color: '#7e22ce', fontSize: '11px', fontWeight: 600 }}>
                          DarkFighter 4 MP
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 PRODUCT CARDS ROW MATCHING SCREENSHOT BOTTOM OF 'WHAT WE OFFER' */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
          }}
        >
          {/* Product 1: Dual-Lens People Counting */}
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              border: '1px solid #e5e7eb',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.03)',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-3px)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
          >
            <div
              style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                backgroundColor: '#f3e8ff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '16px',
              }}
            >
              <Users size={44} color="#9333ea" />
            </div>

            <span style={{ fontSize: '12px', fontWeight: 700, color: '#9333ea', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '6px' }}>
              Entrance Analytics
            </span>
            <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#111827', margin: '0 0 6px 0' }}>
              Dual-Lens People Counting Camera
            </h4>
            <p style={{ fontSize: '12px', color: '#6b7280', margin: '0 0 16px 0' }}>
              iDS-2CD6825G0/C-IVS
            </p>
            <button
              onClick={() => setShowContactModal(true)}
              style={{
                marginTop: 'auto',
                padding: '8px 18px',
                borderRadius: '6px',
                border: '1px solid #d1d5db',
                backgroundColor: '#ffffff',
                color: '#374151',
                fontSize: '13px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.15s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#9333ea';
                e.currentTarget.style.color = '#ffffff';
                e.currentTarget.style.borderColor = '#9333ea';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#ffffff';
                e.currentTarget.style.color = '#374151';
                e.currentTarget.style.borderColor = '#d1d5db';
              }}
            >
              Inquire Specs
            </button>
          </div>

          {/* Product 2: Panoramic Fisheye */}
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              border: '1px solid #e5e7eb',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.03)',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-3px)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
          >
            <div
              style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                backgroundColor: '#f3e8ff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '16px',
              }}
            >
              <Eye size={44} color="#9333ea" />
            </div>

            <span style={{ fontSize: '12px', fontWeight: 700, color: '#9333ea', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '6px' }}>
              Atrium & Hall
            </span>
            <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#111827', margin: '0 0 6px 0' }}>
              Panoramic 360° Fisheye Camera
            </h4>
            <p style={{ fontSize: '12px', color: '#6b7280', margin: '0 0 16px 0' }}>
              DS-2CD63C5G0-IVS
            </p>
            <button
              onClick={() => setShowContactModal(true)}
              style={{
                marginTop: 'auto',
                padding: '8px 18px',
                borderRadius: '6px',
                border: '1px solid #d1d5db',
                backgroundColor: '#ffffff',
                color: '#374151',
                fontSize: '13px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.15s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#9333ea';
                e.currentTarget.style.color = '#ffffff';
                e.currentTarget.style.borderColor = '#9333ea';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#ffffff';
                e.currentTarget.style.color = '#374151';
                e.currentTarget.style.borderColor = '#d1d5db';
              }}
            >
              Inquire Specs
            </button>
          </div>

          {/* Product 3: DeepinView Smart Camera */}
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              border: '1px solid #e5e7eb',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.03)',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-3px)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
          >
            <div
              style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                backgroundColor: '#f3e8ff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '16px',
              }}
            >
              <Cpu size={44} color="#9333ea" />
            </div>

            <span style={{ fontSize: '12px', fontWeight: 700, color: '#9333ea', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '6px' }}>
              Storefront Intelligence
            </span>
            <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#111827', margin: '0 0 6px 0' }}>
              iDS-7 Series Smart Camera
            </h4>
            <p style={{ fontSize: '12px', color: '#6b7280', margin: '0 0 16px 0' }}>
              iDS-2CD7146G0-IZS
            </p>
            <button
              onClick={() => setShowContactModal(true)}
              style={{
                marginTop: 'auto',
                padding: '8px 18px',
                borderRadius: '6px',
                border: '1px solid #d1d5db',
                backgroundColor: '#ffffff',
                color: '#374151',
                fontSize: '13px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.15s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#9333ea';
                e.currentTarget.style.color = '#ffffff';
                e.currentTarget.style.borderColor = '#9333ea';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#ffffff';
                e.currentTarget.style.color = '#374151';
                e.currentTarget.style.borderColor = '#d1d5db';
              }}
            >
              Inquire Specs
            </button>
          </div>
        </div>
      </section>

      {/* 7. SECTION: YOU MAY ALSO BE INTERESTED IN (3 CARDS MATCHING SCREENSHOT) */}
      <section
        id="related"
        style={{
          padding: '70px 32px',
          backgroundColor: '#fafafa',
          borderTop: '1px solid #f3f4f6',
          borderBottom: '1px solid #f3f4f6',
        }}
      >
        <div style={{ maxWidth: '1360px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2
              style={{
                fontSize: 'clamp(24px, 2.8vw, 32px)',
                fontWeight: 800,
                color: '#111827',
                margin: 0,
                letterSpacing: '-0.02em',
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
              maxWidth: '1100px',
              margin: '0 auto',
            }}
          >
            {/* Card 1: Smart Retail */}
            <Link
              to="/solutions"
              style={{
                position: 'relative',
                height: '180px',
                borderRadius: '16px',
                overflow: 'hidden',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
                transition: 'transform 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-4px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              <img
                src="/images/shopping_malls/interest_smart_retail.jpg"
                alt="Smart Retail Solution"
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'brightness(0.65)',
                }}
              />
              <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', color: '#ffffff', padding: '0 20px' }}>
                <h3 style={{ fontSize: '20px', fontWeight: 700, margin: '0 0 6px 0' }}>
                  Smart Retail
                </h3>
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.85)', margin: 0 }}>
                  Intelligent in-store shelf auditing & checkout management
                </p>
              </div>
            </Link>

            {/* Card 2: Retail Store */}
            <Link
              to="/solutions"
              style={{
                position: 'relative',
                height: '180px',
                borderRadius: '16px',
                overflow: 'hidden',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
                transition: 'transform 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-4px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              <img
                src="/images/shopping_malls/interest_retail_store.jpg"
                alt="Retail Store Solution"
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'brightness(0.65)',
                }}
              />
              <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', color: '#ffffff', padding: '0 20px' }}>
                <h3 style={{ fontSize: '20px', fontWeight: 700, margin: '0 0 6px 0' }}>
                  Retail Store
                </h3>
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.85)', margin: 0 }}>
                  Loss prevention and VIP customer recognition for boutiques
                </p>
              </div>
            </Link>

            {/* Card 3: Logistics Park */}
            <Link
              to="/solutions"
              style={{
                position: 'relative',
                height: '180px',
                borderRadius: '16px',
                overflow: 'hidden',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
                transition: 'transform 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-4px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              <img
                src="/images/shopping_malls/interest_logistics_park.jpg"
                alt="Logistics Park Solution"
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'brightness(0.65)',
                }}
              />
              <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', color: '#ffffff', padding: '0 20px' }}>
                <h3 style={{ fontSize: '20px', fontWeight: 700, margin: '0 0 6px 0' }}>
                  Logistics Park
                </h3>
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.85)', margin: 0 }}>
                  Centralized freight sorting & automated loading dock efficiency
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 8. SECTION: SUCCESS STORIES (VIALIA VIGO CASE STUDY MATCHING SCREENSHOT) */}
      <section
        id="success-stories"
        style={{
          padding: '80px 32px',
          maxWidth: '1360px',
          margin: '0 auto',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2
            style={{
              fontSize: 'clamp(28px, 3.2vw, 38px)',
              fontWeight: 800,
              color: '#111827',
              margin: 0,
              letterSpacing: '-0.02em',
            }}
          >
            Success stories
          </h2>
        </div>

        {/* Case Study Card Matching Screenshot */}
        <div
          style={{
            maxWidth: '1040px',
            margin: '0 auto',
            backgroundColor: '#ffffff',
            borderRadius: '20px',
            border: '1px solid #e5e7eb',
            overflow: 'hidden',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            alignItems: 'stretch',
          }}
        >
          {/* Real High-Resolution Success Story Image */}
          <div style={{ position: 'relative', minHeight: '300px' }}>
            <img
              src="/images/shopping_malls/success_story_vigo.png"
              alt="Vialia Vigo shopping center boosts safety, efficiency and revenues"
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
                padding: '4px 12px',
                borderRadius: '6px',
                backgroundColor: 'rgba(17, 24, 39, 0.85)',
                color: '#ffffff',
                fontSize: '11px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
              }}
            >
              Case Study
            </div>
          </div>

          {/* Content matching screenshot headline & text */}
          <div style={{ padding: '36px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h3
              style={{
                fontSize: 'clamp(20px, 2.2vw, 25px)',
                fontWeight: 800,
                color: '#111827',
                lineHeight: 1.3,
                margin: '0 0 14px 0',
              }}
            >
              Vialia helps Vigo shopping center boost safety, efficiency and revenues
            </h3>

            <p style={{ fontSize: '14px', color: '#4b5563', lineHeight: 1.7, margin: '0 0 20px 0' }}>
              Vialia Estación de Vigo, spanning 43,000 square meters in Galicia, Spain, integrated more than 200 Hikvision AI cameras, smart people counting systems, and HikCentral software to safeguard passengers, streamline multi-level parking, and provide tenant retailers with certified footfall conversion analytics.
            </p>

            <button
              onClick={() => setShowCaseStudyModal(true)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'none',
                border: 'none',
                color: '#9333ea',
                fontSize: '14px',
                fontWeight: 700,
                cursor: 'pointer',
                padding: 0,
                width: 'fit-content',
              }}
            >
              <span>Read more</span>
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </section>

      {/* 9. SECTION: DOWNLOAD BROCHURE MATCHING SCREENSHOT */}
      <section
        id="download"
        style={{
          padding: '60px 32px 80px',
          maxWidth: '1360px',
          margin: '0 auto',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <h2
            style={{
              fontSize: 'clamp(26px, 3vw, 34px)',
              fontWeight: 800,
              color: '#111827',
              margin: 0,
              letterSpacing: '-0.02em',
            }}
          >
            Download
          </h2>
        </div>

        <div
          style={{
            maxWidth: '580px',
            margin: '0 auto',
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            border: '1px solid #e5e7eb',
            padding: '24px 28px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
            gap: '16px',
            flexWrap: 'wrap',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '10px',
                backgroundColor: '#f3e8ff',
                color: '#9333ea',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <FileText size={22} />
            </div>

            <div>
              <h4 style={{ fontSize: '15px', fontWeight: 700, color: '#111827', margin: '0 0 2px 0' }}>
                Shopping Mall Solution (PDF)
              </h4>
              <span style={{ fontSize: '12px', color: '#6b7280' }}>
                System Architecture & Product Catalog • 4.8 MB
              </span>
            </div>
          </div>

          <button
            onClick={handleBrochureDownload}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '10px 18px',
              borderRadius: '8px',
              backgroundColor: '#f3e8ff',
              color: '#9333ea',
              border: 'none',
              fontSize: '13px',
              fontWeight: 700,
              cursor: 'pointer',
              transition: 'all 0.15s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#9333ea';
              e.currentTarget.style.color = '#ffffff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#f3e8ff';
              e.currentTarget.style.color = '#9333ea';
            }}
          >
            <Download size={15} />
            <span>Download</span>
          </button>
        </div>
      </section>

      {/* 10. SECTION: READY TO DISCUSS YOUR NEEDS (RED & BLACK CTA BUTTONS MATCHING SCREENSHOT) */}
      <section
        style={{
          padding: '60px 32px 80px',
          backgroundColor: '#fafafa',
          borderTop: '1px solid #f3f4f6',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: 'clamp(24px, 2.8vw, 32px)',
              fontWeight: 800,
              color: '#111827',
              margin: '0 0 24px 0',
              letterSpacing: '-0.02em',
            }}
          >
            Ready to discuss your needs?
          </h2>

          <div
            style={{
              display: 'flex',
              gap: '16px',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <button
              onClick={() => setShowContactModal(true)}
              style={{
                padding: '12px 30px',
                borderRadius: '24px',
                backgroundColor: '#dc2626',
                color: '#ffffff',
                fontSize: '14px',
                fontWeight: 700,
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 4px 14px rgba(220, 38, 38, 0.4)',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#b91c1c')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#dc2626')}
            >
              Get in Touch
            </button>

            <button
              onClick={() => setShowContactModal(true)}
              style={{
                padding: '12px 30px',
                borderRadius: '24px',
                backgroundColor: '#dc2626',
                color: '#ffffff',
                fontSize: '14px',
                fontWeight: 700,
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 4px 14px rgba(220, 38, 38, 0.4)',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#b91c1c')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#dc2626')}
            >
              Find a Partner
            </button>
          </div>
        </div>
      </section>

      {/* LIGHTBOX MODAL FOR TOPOLOGY DIAGRAM & FEATURE IMAGES */}
      {lightboxImg && (
        <div
          onClick={() => setLightboxImg(null)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 100,
            backgroundColor: 'rgba(0, 0, 0, 0.88)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
            backdropFilter: 'blur(6px)',
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              maxWidth: '92vw',
              maxHeight: '92vh',
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
            }}
          >
            <button
              onClick={() => setLightboxImg(null)}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                backgroundColor: 'rgba(0, 0, 0, 0.65)',
                color: '#ffffff',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 10,
              }}
            >
              <X size={20} />
            </button>
            <img
              src={lightboxImg}
              alt="Expanded view"
              style={{
                width: '100%',
                maxHeight: '85vh',
                objectFit: 'contain',
                display: 'block',
              }}
            />
          </div>
        </div>
      )}

      {/* CASE STUDY MODAL: VIALIA VIGO SHOPPING CENTER */}
      {showCaseStudyModal && (
        <div
          onClick={() => setShowCaseStudyModal(false)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 100,
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
            backdropFilter: 'blur(6px)',
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              maxWidth: '780px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              backgroundColor: '#ffffff',
              borderRadius: '20px',
              padding: '36px',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
            }}
          >
            <button
              onClick={() => setShowCaseStudyModal(false)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                backgroundColor: '#f3f4f6',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: '#374151',
              }}
            >
              <X size={18} />
            </button>

            <span
              style={{
                display: 'inline-block',
                padding: '4px 10px',
                borderRadius: '6px',
                backgroundColor: '#f3e8ff',
                color: '#7e22ce',
                fontSize: '12px',
                fontWeight: 700,
                textTransform: 'uppercase',
                marginBottom: '12px',
              }}
            >
              Case Study Full Report
            </span>

            <h3 style={{ fontSize: '24px', fontWeight: 800, color: '#111827', margin: '0 0 16px 0', lineHeight: 1.3 }}>
              Vialia Vigo Shopping Center: AI-Powered Commercial Security & Footfall Optimization
            </h3>

            <div style={{ borderRadius: '12px', overflow: 'hidden', marginBottom: '20px', maxHeight: '280px' }}>
              <img
                src="/images/shopping_malls/success_story_vigo.png"
                alt="Vialia Vigo shopping center"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            <div style={{ fontSize: '14px', color: '#4b5563', lineHeight: 1.8 }}>
              <p>
                <strong>Location:</strong> Vigo, Galicia, Spain<br />
                <strong>Scale:</strong> 43,000 m² commercial space, integrated railway transport terminal, 120+ retail stores<br />
                <strong>Solution Components:</strong> Hikvision HikCentral Enterprise, 200+ AI Cameras, Dual-Lens People Counting, 360° Fisheye Panoramic Surveillance, ANPR Parking Barriers
              </p>

              <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#111827', margin: '18px 0 8px 0' }}>
                Key Operational Results
              </h4>
              <ul style={{ paddingLeft: '20px', margin: 0 }}>
                <li><strong>98.4% Footfall Accuracy:</strong> Binocular 3D people counting accurately differentiates shoppers from luggage and prams across 8 major transit gates.</li>
                <li><strong>Tenant Trust & Revenue:</strong> Audited passerby-to-entrance conversion metrics provide objective data for tenant lease renewals and promotional spot pricing.</li>
                <li><strong>Zero Blind Spot Atriums:</strong> 12 MP fisheye sensors monitor multi-story central plazas, cutting total required camera hardware by 35%.</li>
                <li><strong>Seamless Evacuation Readiness:</strong> Real-time mall occupancy tracking linked to emergency broadcast systems ensures full compliance with European fire safety standards.</li>
              </ul>
            </div>

            <div style={{ marginTop: '28px', display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
              <button
                onClick={() => {
                  setShowCaseStudyModal(false);
                  setShowContactModal(true);
                }}
                style={{
                  padding: '10px 22px',
                  borderRadius: '8px',
                  backgroundColor: '#9333ea',
                  color: '#ffffff',
                  fontSize: '14px',
                  fontWeight: 600,
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                Inquire Similar Solution
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CONTACT SALES MODAL */}
      <ContactSalesModal
        isOpen={showContactModal}
        onClose={() => setShowContactModal(false)}
        solutionTitle="Shopping Malls Solution"
      />
    </div>
  );
}
