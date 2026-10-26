import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Warehouse,
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
  Flame,
  Truck,
  Box,
  Thermometer,
  Lock
} from 'lucide-react';
import ContactSalesModal from '../components/ContactSalesModal';

// Interactive hotspots for 3D Cutaway Logistics Warehouse Overview
const WAREHOUSE_HOTSPOTS = [
  {
    id: 1,
    x: '48%',
    y: '72%',
    tag: 'Main Gate & Truck Entrance',
    title: 'Vehicle Access Control & Intelligent ANPR Gate',
    device: 'Smart ANPR Speed Barrier Gate & Under-Vehicle Inspection System (UVIS)',
    spec: '98%+ plate recognition, automated driver face capture, fast brushless motor barrier (<1.2s)',
    desc: 'Automates security verification for arriving freight carriers and supplier trucks, cross-referencing license plates against warehouse management system (WMS) delivery schedules.',
    benefit: 'Eliminates entrance queue bottlenecks, prevents unauthorized trucks from entering cargo yards, and logs precise arrival timestamps.'
  },
  {
    id: 2,
    x: '38%',
    y: '58%',
    tag: 'Loading Docks & Truck Bays',
    title: 'Dock Scheduling & Loading Bay Surveillance',
    device: 'TandemVu 4K Panoramic & PTZ Camera (DS-2SE7C144MW-AE)',
    spec: 'Simultaneous 180° wide overview and 40x optical zoom detail, ultra-low-light ColorVu, smart auto-tracking',
    desc: 'Continuously monitors container loading and pallet cross-docking operations. Detects open bay occupancy in real time and automatically alerts supervisors if a truck exceeds allotted loading time.',
    benefit: 'Reduces dock turnaround times by 32% and resolves shipping discrepancy disputes with continuous high-definition video archives.'
  },
  {
    id: 3,
    x: '52%',
    y: '42%',
    tag: 'High-Bay Storage & Forklift Aisles',
    title: 'High-Bay Racking & Narrow-Aisle Forklift Safety',
    device: 'ColorVu 4K Wide-Angle Fixed Dome Camera (DS-2CD2187G2-LSU)',
    spec: '4K UHD 24/7 vivid color, 102° wide field of view, AI human/forklift target classification, audio alarm',
    desc: 'Eliminates dangerous blind spots between multi-tier warehouse racks. AI algorithms detect personnel walking inside designated high-speed forklift corridors, flashing visual warning lights.',
    benefit: 'Prevents catastrophic forklift-pedestrian collisions and protects millions of dollars in stored merchandise from accidental rack impacts.'
  },
  {
    id: 4,
    x: '62%',
    y: '48%',
    tag: 'Battery Charging & Hazardous Goods',
    title: 'Battery Charging Bay & Thermal Fire Prevention',
    device: 'Bi-Spectrum Thermography Turret Camera (DS-2TD1228T-2/QA)',
    spec: 'Continuous radiometric temperature measurement, -20°C to 150°C range, early overheat pre-alarm',
    desc: 'Monitors electric forklift lithium-ion battery charging bays, high-voltage electrical transformers, and flammable packaging storage for abnormal surface heat build-up long before smoke or flame appears.',
    benefit: 'Provides critical early warnings to avoid devastating industrial warehouse fires, satisfying insurance underwriting compliance.'
  },
  {
    id: 5,
    x: '28%',
    y: '50%',
    tag: 'Perimeter Grounds & Fence',
    title: 'Perimeter Defense & Radar Intrusion Tracking',
    device: 'Thermal & Optical Bi-Spectrum Bullet Camera (DS-2TD2628-10/QA)',
    spec: 'Thermal detection range up to 450m, all-weather penetration (fog, dust, total darkness), strobe light deterrence',
    desc: 'Forms an impenetrable virtual tripwire along boundary fences and outdoor container yards, ignoring moving tree branches and small animals while accurately classifying human intruders.',
    benefit: 'Cuts false alarms by over 90% and stops external theft attempts before intruders can reach warehouse cargo bay doors.'
  },
];

export default function WarehousesSolution() {
  const [showContactModal, setShowContactModal] = useState(false);
  const [copiedShare, setCopiedShare] = useState(false);
  const [activeNav, setActiveNav] = useState('overview');
  const [activeHotspot, setActiveHotspot] = useState(WAREHOUSE_HOTSPOTS[0]);
  const [lightboxImg, setLightboxImg] = useState(null);
  const [showCaseStudyModal, setShowCaseStudyModal] = useState(false);

  // Product accordion state (Perimeter open by default matching screenshot)
  const [accordionOpen, setAccordionOpen] = useState({
    perimeter: true,
    panoramic: false,
    thermal: false,
    access: false,
    platform: false,
  });

  const toggleAccordion = (key) => {
    setAccordionOpen((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // Scrollspy for sub-navigation
  useEffect(() => {
    const handleScroll = () => {
      const navSections = [
        'overview',
        'general-security',
        'what-we-offer',
        'success-stories',
        'download',
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
    alert('Thank you for downloading the Warehouse Security Solution Brochure. Your PDF document has been queued.');
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
      {/* 1. HERO SECTION: Logistics Warehouse Banner with Amber/Orange Radial Glow & Exact 740px Height */}
      <section
        style={{
          position: 'relative',
          width: '100%',
          minHeight: '740px',
          height: '740px',
          overflow: 'hidden',
          backgroundColor: '#451a03',
        }}
      >
        {/* Real High-Resolution Logistics Warehouse Hero Image */}
        <img
          src="/images/warehouses/warehouse_hero.jpg"
          alt="Coloron Smart Warehouses Intelligent Logistics Security & Fire Prevention Solution"
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

        {/* Amber / Orange Circular Radial Glow Overlay (matches screenshot) */}
        <div
          style={{
            position: 'absolute',
            top: '-20%',
            left: '-10%',
            width: '65vw',
            height: '140%',
            borderRadius: '50%',
            background: 'radial-gradient(ellipse at center, rgba(245, 158, 11, 0.72) 0%, rgba(217, 119, 6, 0.48) 45%, rgba(180, 83, 9, 0.18) 75%, transparent 100%)',
            pointerEvents: 'none',
            mixBlendMode: 'screen',
          }}
        />

        {/* Subtle Vignette for High Text Readability */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(90deg, rgba(69, 26, 3, 0.8) 0%, rgba(69, 26, 3, 0.42) 50%, rgba(69, 26, 3, 0.12) 100%)',
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
            <Warehouse size={15} color="#fed7aa" />
            <span>Solutions by Scenario</span>
          </div>

          {/* Title matching screenshot */}
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
            Warehouses
          </h1>

          {/* Subtitle matching official Hikvision copy */}
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
            Intelligent security, touch-free fire prevention, and streamlined dock logistics for modern distribution centers
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
              <span>Contact Warehouse Specialist</span>
            </button>

            <button
              onClick={() => scrollToSection('general-security')}
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
              <span>Explore Security Systems</span>
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
            <span style={{ color: '#111827', fontWeight: 600 }}>Warehouses</span>
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
                color: '#d97706',
                fontSize: '13px',
                cursor: 'pointer',
                fontWeight: 600,
              }}
            >
              <PhoneCall size={14} />
              <span>Talk to Logistics Engineer</span>
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
            { id: 'overview', label: 'Solutions overview' },
            { id: 'general-security', label: 'General warehouses security' },
            { id: 'what-we-offer', label: 'What we offer' },
            { id: 'success-stories', label: 'Success stories' },
            { id: 'download', label: 'Download' },
            { id: 'related', label: 'You may also be interested in' },
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
                  color: isActive ? '#d97706' : '#4b5563',
                  borderBottom: isActive ? '3px solid #d97706' : '3px solid transparent',
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

      {/* 4. SECTION: SOLUTIONS OVERVIEW WITH 3D CUTAWAY LOGISTICS WAREHOUSE MAP */}
      <section
        id="overview"
        style={{
          padding: '70px 32px 60px',
          maxWidth: '1360px',
          margin: '0 auto',
        }}
      >
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '920px', margin: '0 auto 48px' }}>
          <h2
            style={{
              fontSize: 'clamp(28px, 3.2vw, 38px)',
              fontWeight: 800,
              color: '#111827',
              margin: '0 0 16px 0',
              letterSpacing: '-0.02em',
            }}
          >
            Solutions overview
          </h2>
          <p
            style={{
              fontSize: '15px',
              color: '#4b5563',
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            Loss prevention and efficient operations are the two main concerns for warehouse operators. That&apos;s why Hikvision offers an all-encompassing solution for these busy enterprises, focusing on four critical components: improving comprehensive safety with top-notch security solutions, enhancing warehouse-traffic management, improving dock scheduling capabilities, and keeping track of parcels at all times. All together, Hikvision&apos;s warehouse management solution aims to build a more secure and more intelligent warehouse.
          </p>
        </div>

        {/* 3D Isometric Warehouse Cutaway Container */}
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
              maxWidth: '820px',
              minHeight: '380px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <img
              src="/images/warehouses/warehouse_3d_map.jpg"
              alt="Interactive 3D Cutaway Logistics Warehouse Map"
              style={{
                width: '100%',
                maxHeight: '440px',
                objectFit: 'contain',
                display: 'block',
                filter: 'drop-shadow(0 15px 25px rgba(0, 0, 0, 0.08))',
              }}
            />

            {/* Clickable Hotspot Pins */}
            {WAREHOUSE_HOTSPOTS.map((spot) => {
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
                    backgroundColor: isSelected ? '#d97706' : '#dc2626',
                    color: '#ffffff',
                    border: '3px solid #ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: isSelected ? '14px' : '12px',
                    fontWeight: 800,
                    cursor: 'pointer',
                    boxShadow: isSelected
                      ? '0 0 0 6px rgba(217, 119, 6, 0.35), 0 4px 12px rgba(0,0,0,0.3)'
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
            {WAREHOUSE_HOTSPOTS.map((spot) => {
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
                    border: isSelected ? '1.5px solid #d97706' : '1px solid #d1d5db',
                    backgroundColor: isSelected ? '#fffbeb' : '#ffffff',
                    color: isSelected ? '#d97706' : '#374151',
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
                      backgroundColor: isSelected ? '#d97706' : '#6b7280',
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
                      backgroundColor: '#fef3c7',
                      color: '#92400e',
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
                <span>AI Thermal & Optical Verified</span>
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
                  Recommended Technology
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
                  Operational Impact
                </span>
                <p style={{ fontSize: '13px', color: '#374151', margin: '4px 0 0 0', lineHeight: 1.5 }}>
                  {activeHotspot.benefit}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SECTION: GENERAL WAREHOUSES SECURITY (2 CHALLENGE CARDS MATCHING SCREENSHOT) */}
      <section
        id="general-security"
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
              General warehouses security
            </h2>
            <p style={{ fontSize: '15px', color: '#4b5563', lineHeight: 1.7, margin: 0 }}>
              With a large number of people, vehicles, and goods moving through the warehouse every hour, it is important to ensure the comprehensive security of the warehouse and personnel with enhanced efficiency. Next, preventing goods from theft or fire to minimize loss is the second priority. Below, you will see how Hikvision’s advanced warehouse management technologies address these concerns – and more.
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
            {/* Challenge Card 1: Unattended Warehouse Perimeters */}
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
                  src="/images/warehouses/challenge_perimeter.jpg"
                  alt="Unattended warehouse perimeters security"
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
                  Unattended warehouse perimeters security
                </h3>
                <p style={{ fontSize: '14px', color: '#4b5563', lineHeight: 1.6, margin: '0 0 14px 0' }}>
                  Expansive logistics distribution perimeters and outdoor storage yards are frequently left unmonitored at night, with dark boundary corners exposed to fence-cutting, cargo tampering, and theft.
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
                  <span>Manual security guard patrols cannot cover miles of outer boundary fence</span>
                </div>
              </div>
            </div>

            {/* Challenge Card 2: Unmonitored Critical Areas */}
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
                  src="/images/warehouses/challenge_critical_areas.jpg"
                  alt="Unmonitored critical areas security"
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
                  Unmonitored critical areas security
                </h3>
                <p style={{ fontSize: '14px', color: '#4b5563', lineHeight: 1.6, margin: '0 0 14px 0' }}>
                  Towering high-bay storage racks, battery charging zones, and electrical distribution rooms lack continuous thermal thermography and wide-angle visual auditing, creating immense fire risks.
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
                  <span>Hidden lithium battery thermal runaways can trigger catastrophic fires</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SECTION: WHAT WE OFFER (AERIAL FACILITY HIGHLIGHT + TOPOLOGY & PRODUCT ACCORDION) */}
      <section
        id="what-we-offer"
        style={{
          padding: '80px 32px',
          maxWidth: '1360px',
          margin: '0 auto',
        }}
      >
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
            What we offer
          </h2>
          <p style={{ fontSize: '15px', color: '#4b5563', lineHeight: 1.7, margin: 0 }}>
            To enhance the general security of logistics parks with a focus on personnel, goods and vehicles, Hikvision offers corresponding functions powered by video, thermographic, and AI technologies.
          </p>
        </div>

        {/* Feature Highlight Row Matching Screenshot */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '44px',
            alignItems: 'center',
            marginBottom: '64px',
          }}
        >
          {/* Left: Aerial Logistics Park Image */}
          <div
            style={{
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
              cursor: 'pointer',
            }}
            onClick={() => setLightboxImg('/images/warehouses/offer_facility.jpg')}
          >
            <img
              src="/images/warehouses/offer_facility.jpg"
              alt="General Warehouse Security Facility Architecture"
              style={{
                width: '100%',
                height: '380px',
                objectFit: 'cover',
                display: 'block',
                transition: 'transform 0.3s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            />
          </div>

          {/* Right: Benefits & Features Breakdown */}
          <div>
            <div style={{ marginBottom: '24px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#111827', margin: '0 0 12px 0' }}>
                Benefits
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[
                  'Comprehensive warehouse security monitoring of personnel and goods for logistics operators',
                  'Visitor and staff protection with automated Access Control and Attendance Management',
                  'Touch-free, preemptive, and visualized fire hazard prevention to minimize property loss',
                  'Centralized management through the HikCentral Platform and dashboard for all data from vehicles, employees, events, and alarms',
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <div style={{ width: '18px', height: '18px', borderRadius: '50%', backgroundColor: '#fef3c7', color: '#d97706', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                      <Check size={11} strokeWidth={3} />
                    </div>
                    <span style={{ fontSize: '13px', color: '#374151', lineHeight: 1.5 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#111827', margin: '0 0 12px 0' }}>
                Features
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[
                  'Perimeter and key area monitoring using thermographic cameras and panoramic cameras',
                  'Comprehensive and intelligent Access Control and Attendance Management using face recognition technology',
                  'Warehouse temperature detection and timely alarms for fire prevention',
                  'Visualized Logistics Dashboard for the entire logistics park for intuitive monitoring',
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <div style={{ width: '18px', height: '18px', borderRadius: '50%', backgroundColor: '#fef3c7', color: '#d97706', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                      <Check size={11} strokeWidth={3} />
                    </div>
                    <span style={{ fontSize: '13px', color: '#374151', lineHeight: 1.5 }}>{item}</span>
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
                    System Architecture & Selected Products
                  </h4>
                  <p style={{ fontSize: '13px', color: '#6b7280', margin: 0 }}>
                    HikCentral Platform managing Thermal Cameras, Speed Domes, and Access Control
                  </p>
                </div>

                <button
                  onClick={() => setLightboxImg('/images/warehouses/warehouse_topology.jpg')}
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
                onClick={() => setLightboxImg('/images/warehouses/warehouse_topology.jpg')}
              >
                <img
                  src="/images/warehouses/warehouse_topology.jpg"
                  alt="Warehouse General Security System Architecture Topology"
                  style={{
                    width: '100%',
                    maxHeight: '320px',
                    objectFit: 'contain',
                    display: 'block',
                  }}
                />
              </div>
            </div>

            {/* Right: Product Category Accordion Matching Screenshot */}
            <div>
              <h4 style={{ fontSize: '18px', fontWeight: 700, color: '#111827', margin: '0 0 16px 0' }}>
                Selected Products Matrix
              </h4>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {/* Accordion 1: Perimeter Protection */}
                <div
                  style={{
                    borderRadius: '12px',
                    border: accordionOpen.perimeter ? '1.5px solid #d97706' : '1px solid #e5e7eb',
                    backgroundColor: accordionOpen.perimeter ? '#fffbeb' : '#ffffff',
                    overflow: 'hidden',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <button
                    onClick={() => toggleAccordion('perimeter')}
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
                      <Shield size={18} color="#d97706" />
                      <span style={{ fontSize: '15px', fontWeight: 700, color: '#111827' }}>
                        Perimeter Protection Camera
                      </span>
                    </div>
                    {accordionOpen.perimeter ? (
                      <ChevronUp size={18} color="#d97706" />
                    ) : (
                      <ChevronDown size={18} color="#6b7280" />
                    )}
                  </button>

                  {accordionOpen.perimeter && (
                    <div style={{ padding: '0 20px 18px 20px', fontSize: '13px', color: '#4b5563', lineHeight: 1.6 }}>
                      <p style={{ margin: '0 0 8px 0', fontWeight: 600, color: '#1f2937' }}>
                        Model: DS-2TD2628-10/QA (Thermal & Optical Bi-Spectrum Bullet)
                      </p>
                      <p style={{ margin: '0 0 10px 0' }}>
                        Combines long-range thermal detection with 4 MP optical imaging. Features deep learning line crossing algorithms and fire pre-alarm capabilities for total perimeter defense.
                      </p>
                      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                        <span style={{ padding: '3px 8px', borderRadius: '4px', backgroundColor: '#fef3c7', color: '#92400e', fontSize: '11px', fontWeight: 600 }}>
                          Bi-Spectrum Thermal
                        </span>
                        <span style={{ padding: '3px 8px', borderRadius: '4px', backgroundColor: '#fef3c7', color: '#92400e', fontSize: '11px', fontWeight: 600 }}>
                          Line Crossing
                        </span>
                        <span style={{ padding: '3px 8px', borderRadius: '4px', backgroundColor: '#fef3c7', color: '#92400e', fontSize: '11px', fontWeight: 600 }}>
                          IP67 Weatherproof
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Accordion 2: Panoramic Camera */}
                <div
                  style={{
                    borderRadius: '12px',
                    border: accordionOpen.panoramic ? '1.5px solid #d97706' : '1px solid #e5e7eb',
                    backgroundColor: accordionOpen.panoramic ? '#fffbeb' : '#ffffff',
                    overflow: 'hidden',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <button
                    onClick={() => toggleAccordion('panoramic')}
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
                      <Eye size={18} color="#d97706" />
                      <span style={{ fontSize: '15px', fontWeight: 700, color: '#111827' }}>
                        Panoramic & PTZ Speed Dome
                      </span>
                    </div>
                    {accordionOpen.panoramic ? (
                      <ChevronUp size={18} color="#d97706" />
                    ) : (
                      <ChevronDown size={18} color="#6b7280" />
                    )}
                  </button>

                  {accordionOpen.panoramic && (
                    <div style={{ padding: '0 20px 18px 20px', fontSize: '13px', color: '#4b5563', lineHeight: 1.6 }}>
                      <p style={{ margin: '0 0 8px 0', fontWeight: 600, color: '#1f2937' }}>
                        Model: DS-2DP1618ZIXS-DE (16 MP 180° Panoramic & PTZ)
                      </p>
                      <p style={{ margin: '0 0 10px 0' }}>
                        Delivers continuous 180-degree panoramic situational awareness across open truck marshalling yards, while the integrated high-speed 40x PTZ tracks moving targets.
                      </p>
                      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                        <span style={{ padding: '3px 8px', borderRadius: '4px', backgroundColor: '#fef3c7', color: '#92400e', fontSize: '11px', fontWeight: 600 }}>
                          16 MP Panorama
                        </span>
                        <span style={{ padding: '3px 8px', borderRadius: '4px', backgroundColor: '#fef3c7', color: '#92400e', fontSize: '11px', fontWeight: 600 }}>
                          40x Optical PTZ
                        </span>
                        <span style={{ padding: '3px 8px', borderRadius: '4px', backgroundColor: '#fef3c7', color: '#92400e', fontSize: '11px', fontWeight: 600 }}>
                          Smart Auto-Tracking
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Accordion 3: Fire Detection Camera */}
                <div
                  style={{
                    borderRadius: '12px',
                    border: accordionOpen.thermal ? '1.5px solid #d97706' : '1px solid #e5e7eb',
                    backgroundColor: accordionOpen.thermal ? '#fffbeb' : '#ffffff',
                    overflow: 'hidden',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <button
                    onClick={() => toggleAccordion('thermal')}
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
                      <Flame size={18} color="#d97706" />
                      <span style={{ fontSize: '15px', fontWeight: 700, color: '#111827' }}>
                        Bi-Spectrum Thermography Turret Camera
                      </span>
                    </div>
                    {accordionOpen.thermal ? (
                      <ChevronUp size={18} color="#d97706" />
                    ) : (
                      <ChevronDown size={18} color="#6b7280" />
                    )}
                  </button>

                  {accordionOpen.thermal && (
                    <div style={{ padding: '0 20px 18px 20px', fontSize: '13px', color: '#4b5563', lineHeight: 1.6 }}>
                      <p style={{ margin: '0 0 8px 0', fontWeight: 600, color: '#1f2937' }}>
                        Model: DS-2TD1228T-2/QA (Thermography Fire Detection)
                      </p>
                      <p style={{ margin: '0 0 10px 0' }}>
                        Provides continuous temperature monitoring of high-risk battery charging zones, chemical storage racks, and electrical switchgear with instant audio-visual strobe alerts.
                      </p>
                      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                        <span style={{ padding: '3px 8px', borderRadius: '4px', backgroundColor: '#fef3c7', color: '#92400e', fontSize: '11px', fontWeight: 600 }}>
                          Temperature Alarm
                        </span>
                        <span style={{ padding: '3px 8px', borderRadius: '4px', backgroundColor: '#fef3c7', color: '#92400e', fontSize: '11px', fontWeight: 600 }}>
                          Strobe & Audio Siren
                        </span>
                        <span style={{ padding: '3px 8px', borderRadius: '4px', backgroundColor: '#fef3c7', color: '#92400e', fontSize: '11px', fontWeight: 600 }}>
                          Compact Turret
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Accordion 4: Access Control */}
                <div
                  style={{
                    borderRadius: '12px',
                    border: accordionOpen.access ? '1.5px solid #d97706' : '1px solid #e5e7eb',
                    backgroundColor: accordionOpen.access ? '#fffbeb' : '#ffffff',
                    overflow: 'hidden',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <button
                    onClick={() => toggleAccordion('access')}
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
                      <Lock size={18} color="#d97706" />
                      <span style={{ fontSize: '15px', fontWeight: 700, color: '#111827' }}>
                        Minmoe Face Recognition Terminal
                      </span>
                    </div>
                    {accordionOpen.access ? (
                      <ChevronUp size={18} color="#d97706" />
                    ) : (
                      <ChevronDown size={18} color="#6b7280" />
                    )}
                  </button>

                  {accordionOpen.access && (
                    <div style={{ padding: '0 20px 18px 20px', fontSize: '13px', color: '#4b5563', lineHeight: 1.6 }}>
                      <p style={{ margin: '0 0 8px 0', fontWeight: 600, color: '#1f2937' }}>
                        Model: DS-K1T671M Pro Face Access Terminal
                      </p>
                      <p style={{ margin: '0 0 10px 0' }}>
                        7-inch touch screen biometric terminal for shift attendance and warehouse turnstile gates. Achieves less than 0.2-second facial authentication even with hard hats and safety masks.
                      </p>
                      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                        <span style={{ padding: '3px 8px', borderRadius: '4px', backgroundColor: '#fef3c7', color: '#92400e', fontSize: '11px', fontWeight: 600 }}>
                          Face & Card Access
                        </span>
                        <span style={{ padding: '3px 8px', borderRadius: '4px', backgroundColor: '#fef3c7', color: '#92400e', fontSize: '11px', fontWeight: 600 }}>
                          Anti-Spoofing AI
                        </span>
                        <span style={{ padding: '3px 8px', borderRadius: '4px', backgroundColor: '#fef3c7', color: '#92400e', fontSize: '11px', fontWeight: 600 }}>
                          Time & Attendance
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 6 SELECTED PRODUCTS CARDS GRID MATCHING SCREENSHOT */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '20px',
          }}
        >
          {[
            {
              title: '16 MP 180° Panoramic & PTZ',
              model: 'DS-2DP1618ZIXS-DE',
              tag: 'Panoramic Camera',
              icon: <Eye size={36} color="#d97706" />,
            },
            {
              title: 'Thermographic Speed Dome',
              model: 'DS-2TD4137T-25/W',
              tag: 'Thermal Speed Dome',
              icon: <Flame size={36} color="#d97706" />,
            },
            {
              title: 'Bi-Spectrum Thermography Turret',
              model: 'DS-2TD1228T-2/QA',
              tag: 'Fire Detection Camera',
              icon: <Thermometer size={36} color="#d97706" />,
            },
            {
              title: 'Thermal & Optical Bullet Camera',
              model: 'DS-2TD2628-10/QA',
              tag: 'Perimeter Protection',
              icon: <Shield size={36} color="#d97706" />,
            },
            {
              title: 'Minmoe Face Access Terminal',
              model: 'DS-K1T671M',
              tag: 'Access Control',
              icon: <Users size={36} color="#d97706" />,
            },
            {
              title: 'HikCentral Enterprise Logistics',
              model: 'HikCentral Software',
              tag: 'Central Management',
              icon: <Cpu size={36} color="#d97706" />,
            },
          ].map((prod, i) => (
            <div
              key={i}
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '14px',
                border: '1px solid #e5e7eb',
                padding: '20px 16px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                boxShadow: '0 4px 14px rgba(0, 0, 0, 0.03)',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-3px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              <div
                style={{
                  width: '74px',
                  height: '74px',
                  borderRadius: '50%',
                  backgroundColor: '#fffbeb',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '14px',
                }}
              >
                {prod.icon}
              </div>

              <span style={{ fontSize: '11px', fontWeight: 700, color: '#d97706', textTransform: 'uppercase', letterSpacing: '0.4px', marginBottom: '4px' }}>
                {prod.tag}
              </span>
              <h4 style={{ fontSize: '14px', fontWeight: 700, color: '#111827', margin: '0 0 4px 0', minHeight: '38px', display: 'flex', alignItems: 'center' }}>
                {prod.title}
              </h4>
              <p style={{ fontSize: '12px', color: '#6b7280', margin: '0 0 14px 0' }}>
                {prod.model}
              </p>
              <button
                onClick={() => setShowContactModal(true)}
                style={{
                  marginTop: 'auto',
                  padding: '6px 14px',
                  borderRadius: '6px',
                  border: '1px solid #d1d5db',
                  backgroundColor: '#ffffff',
                  color: '#374151',
                  fontSize: '12px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#d97706';
                  e.currentTarget.style.color = '#ffffff';
                  e.currentTarget.style.borderColor = '#d97706';
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
          ))}
        </div>
      </section>

      {/* 7. SECTION: SUCCESS STORIES (MATCHING SCREENSHOT WITH FIRE PREVENTION CASE STUDY) */}
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
              src="/images/warehouses/success_story_fire.jpg"
              alt="Minimizing fire risks in automotive logistics company with Hikvision thermal cameras"
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
              Minimizing fire risks in automotive logistics company with Hikvision
            </h3>

            <p style={{ fontSize: '14px', color: '#4b5563', lineHeight: 1.7, margin: '0 0 20px 0' }}>
              A major automotive parts and tire logistics enterprise in the Czech Republic deployed Hikvision radiometric thermal cameras and HikCentral Enterprise to continuously audit indoor charging bays, high-bay storage racks, and packaging materials for temperature anomalies, ensuring full fire insurance compliance and zero catastrophic property loss.
            </p>

            <button
              onClick={() => setShowCaseStudyModal(true)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'none',
                border: 'none',
                color: '#d97706',
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

      {/* 8. SECTION: DOWNLOAD BROCHURE MATCHING SCREENSHOT */}
      <section
        id="download"
        style={{
          padding: '40px 32px 70px',
          maxWidth: '1360px',
          margin: '0 auto',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '28px' }}>
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
                backgroundColor: '#fffbeb',
                color: '#d97706',
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
                Warehouse Solution (PDF)
              </h4>
              <span style={{ fontSize: '12px', color: '#6b7280' }}>
                Architecture & Security Product Guide • 5.2 MB
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
              backgroundColor: '#fffbeb',
              color: '#d97706',
              border: 'none',
              fontSize: '13px',
              fontWeight: 700,
              cursor: 'pointer',
              transition: 'all 0.15s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#d97706';
              e.currentTarget.style.color = '#ffffff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#fffbeb';
              e.currentTarget.style.color = '#d97706';
            }}
          >
            <Download size={15} />
            <span>Download</span>
          </button>
        </div>
      </section>

      {/* 9. SECTION: YOU MAY ALSO BE INTERESTED IN (3 CARDS MATCHING SCREENSHOT) */}
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
            {/* Card 1: Dock Management */}
            <Link
              to="/solutions/dock-management"
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
                src="/images/warehouses/interest_dock_management.jpg"
                alt="Dock Management Solution"
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
                <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.5px', color: 'rgba(255,255,255,0.85)', display: 'block', marginBottom: '4px' }}>
                  Solutions by Function
                </span>
                <h3 style={{ fontSize: '20px', fontWeight: 700, margin: '0 0 6px 0' }}>
                  Dock Management
                </h3>
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.85)', margin: 0 }}>
                  Automated loading bay status, truck turn times & dispatch scheduling
                </p>
              </div>
            </Link>

            {/* Card 2: Parcel Tracking */}
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
                src="/images/warehouses/interest_parcel_tracking.jpg"
                alt="Parcel Tracking Solution"
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
                <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.5px', color: 'rgba(255,255,255,0.85)', display: 'block', marginBottom: '4px' }}>
                  Solutions by Function
                </span>
                <h3 style={{ fontSize: '20px', fontWeight: 700, margin: '0 0 6px 0' }}>
                  Parcel Tracking
                </h3>
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.85)', margin: 0 }}>
                  High-speed barcode reading linked to synchronized package video clips
                </p>
              </div>
            </Link>

            {/* Card 3: Line Haul Management */}
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
                src="/images/warehouses/interest_line_haul.jpg"
                alt="Line Haul Management Solution"
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
                <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.5px', color: 'rgba(255,255,255,0.85)', display: 'block', marginBottom: '4px' }}>
                  Solutions by Function
                </span>
                <h3 style={{ fontSize: '20px', fontWeight: 700, margin: '0 0 6px 0' }}>
                  Line Haul Management
                </h3>
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.85)', margin: 0 }}>
                  Long-distance fleet dispatch, driver behavior auditing & cargo integrity
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 10. SECTION: READY TO DISCUSS YOUR NEEDS (RED & BLACK CTA BUTTONS MATCHING SCREENSHOT) */}
      <section
        style={{
          padding: '60px 32px 80px',
          backgroundColor: '#ffffff',
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

      {/* CASE STUDY MODAL: AUTOMOTIVE LOGISTICS COMPANY */}
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
                backgroundColor: '#fef3c7',
                color: '#92400e',
                fontSize: '12px',
                fontWeight: 700,
                textTransform: 'uppercase',
                marginBottom: '12px',
              }}
            >
              Case Study Full Report
            </span>

            <h3 style={{ fontSize: '24px', fontWeight: 800, color: '#111827', margin: '0 0 16px 0', lineHeight: 1.3 }}>
              Minimizing Fire Risks in Automotive Logistics with Radiometric Thermal Cameras
            </h3>

            <div style={{ borderRadius: '12px', overflow: 'hidden', marginBottom: '20px', maxHeight: '280px' }}>
              <img
                src="/images/warehouses/success_story_fire.jpg"
                alt="Automotive Logistics Facility"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            <div style={{ fontSize: '14px', color: '#4b5563', lineHeight: 1.8 }}>
              <p>
                <strong>Location:</strong> Czech Republic<br />
                <strong>Facility Scale:</strong> 65,000 m² high-bay distribution hub with 120 loading docks and 80 electric forklifts<br />
                <strong>Solution Components:</strong> Hikvision Bi-Spectrum Thermography Turrets, Thermal Speed Domes, ColorVu 4K Perimeter Bullets, HikCentral Enterprise
              </p>

              <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#111827', margin: '18px 0 8px 0' }}>
                Key Operational Results
              </h4>
              <ul style={{ paddingLeft: '20px', margin: 0 }}>
                <li><strong>Zero Fire Incidents:</strong> Radiometric thermography caught three separate lithium forklift battery overcharging thermal anomalies before smoke generation, preventing millions in potential inventory damage.</li>
                <li><strong>62% Reduction in Cargo Discrepancies:</strong> 4K ColorVu dome cameras along high-bay aisles eliminated inventory misplacement and provided definitive video evidence for freight insurance claims.</li>
                <li><strong>Streamlined Dock Logistics:</strong> Automated ANPR gate control linked to dock bays cut incoming delivery truck dwell time from 45 minutes to under 18 minutes.</li>
                <li><strong>Unified Operations:</strong> Centralized dashboard gives the logistics director real-time visibility across facility security, employee attendance, and fire pre-alarms on a single screen.</li>
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
                  backgroundColor: '#d97706',
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
        solutionTitle="Warehouses Solution"
      />
    </div>
  );
}
