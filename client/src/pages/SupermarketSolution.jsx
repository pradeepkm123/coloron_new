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
  ShoppingBag,
  ShoppingCart,
  Users,
  CreditCard,
  TrendingUp,
  BarChart3,
  Eye,
  ExternalLink,
  Store,
  Receipt,
  ScanLine
} from 'lucide-react';
import ContactSalesModal from '../components/ContactSalesModal';

// Interactive hotspots for the 3D Supermarket Cutaway
const supermarketHotspots = [
  {
    id: 'entrance',
    title: 'Store Entrance & Flow Control',
    desc: 'Accurate dual-lens people counting with 98%+ precision, real-time occupancy display, and VIP loyalty welcome recognition.',
    top: '56%',
    left: '68%',
    device: 'Dual-Lens People Counting Camera',
    spec: 'DS-2CD6825G0/C-IVS • 3D Binocular Stereo Vision',
  },
  {
    id: 'parking',
    title: 'Customer Parking Lot & Access',
    desc: 'High-speed ANPR license plate recognition with parking occupancy display and non-stop barrier gates for rapid customer turnover.',
    top: '72%',
    left: '84%',
    device: 'ANPR Smart Parking Camera',
    spec: 'DarkFighter ANPR • Automatic Barrier Gate Integration',
  },
  {
    id: 'cashier',
    title: 'Cashier Checkout & Queue Hub',
    desc: 'Queue detection camera alerts staff to open secondary registers, while POS text overlay provides video proof for every transaction.',
    top: '64%',
    left: '46%',
    device: 'POS Video Overlay & Queue Camera',
    spec: 'AcuSense 4MP Ultra-Wide • RS-232 / TCP POS Link',
  },
  {
    id: 'fresh-produce',
    title: 'Fresh Produce & Bakery Area',
    desc: 'Panoramic fisheye cameras with heat mapping to monitor foot traffic around seasonal displays, plus wet floor slip hazard alerts.',
    top: '38%',
    left: '52%',
    device: '360° Panoramic Fisheye Camera',
    spec: '12MP Fisheye • Dynamic Heat Map • Spill Detection',
  },
  {
    id: 'grocery-aisles',
    title: 'Grocery Shelves & Merchandising',
    desc: 'Ultra HD mini-dome cameras monitor shelf stock levels, prevent sweet-hearting and shoplifting, and analyze customer dwell time.',
    top: '32%',
    left: '36%',
    device: 'Compact AI Dome Camera',
    spec: '4K ColorVu 24/7 Color • Deep Learning Analytics',
  },
  {
    id: 'security-center',
    title: 'Security Control & Loading Bay',
    desc: 'Centralized HikCentral retail platform monitoring loading bay pallet deliveries, cold-chain temperature sensors, and multi-store video walls.',
    top: '22%',
    left: '26%',
    device: 'HikCentral Retail Management VMS',
    spec: 'Unified Multi-Store Management • Temperature Alarms',
  },
];

// Product highlights
const entranceProducts = [
  {
    title: 'Dual-Lens People Counting Camera',
    model: 'DS-2CD6825G0/C-IVS',
    tag: 'Accurate Footfall Analytics',
    desc: 'Dual-lens 3D binocular stereo vision tracks customers with over 98% accuracy. Distinguishes adults from children and ignores shopping carts or moving shadows.',
    specs: ['3D Binocular Stereo Vision', 'Bi-directional In/Out Counting', 'Height Filtering Algorithm', 'Flash & Auditory Warning'],
    image: '/images/supermarkets/supermarket-entrance.jpg'
  },
  {
    title: 'AcuSense POS Transaction Camera',
    model: 'iDS-2CD7146G0/E-IZ',
    tag: 'Cashier Loss Prevention',
    desc: 'Integrates seamlessly with POS cash registers to stamp receipt text directly over cashier video footage. Eliminates sweethearting, refund fraud, and cashier errors.',
    specs: ['4MP Ultra-Low Light ColorVu', 'RS-232 / Network POS Protocol', 'Transaction Event Search', 'Instant Void Alert'],
    image: '/images/supermarkets/supermarket-cashier.jpg'
  }
];

export default function SupermarketSolution() {
  const [activeHotspot, setActiveHotspot] = useState(supermarketHotspots[0]);
  const [showSalesModal, setShowSalesModal] = useState(false);
  const [activeNav, setActiveNav] = useState('overview');

  // Subnav scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['overview', 'entrance', 'cashier', 'shopping-floor', 'success-stories', 'related-resources', 'related-links'];
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

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', color: '#1d1d1f', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}>
      
      {/* 1. HERO SECTION WITH SIGNATURE PURPLE ARC & GROCERY PRODUCE BANNER */}
      <section
        style={{
          position: 'relative',
          minHeight: '480px',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          backgroundImage: `url('/images/supermarkets/supermarket-banner-1.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center right',
          backgroundRepeat: 'no-repeat',
          overflow: 'hidden',
        }}
      >
        {/* Signature Hikvision Purple Organic Gradient Arc Overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            width: '100%',
            maxWidth: '820px',
            background: 'linear-gradient(105deg, rgba(82, 35, 114, 0.95) 0%, rgba(98, 42, 133, 0.92) 42%, rgba(118, 52, 155, 0.82) 65%, rgba(135, 65, 175, 0.35) 88%, transparent 100%)',
            zIndex: 1,
          }}
        />

        {/* Ambient subtle light flare */}
        <div
          style={{
            position: 'absolute',
            top: '-20%',
            left: '-10%',
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.35) 0%, transparent 70%)',
            pointerEvents: 'none',
            zIndex: 2,
          }}
        />

        {/* Hero Content */}
        <div
          style={{
            position: 'relative',
            zIndex: 3,
            maxWidth: '1280px',
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
              color: 'rgba(255, 255, 255, 0.9)',
              fontSize: '0.95rem',
              fontWeight: 500,
              marginBottom: '16px',
            }}
          >
            <Store size={18} color="#e9d5ff" />
            <span>Solutions by Scenario</span>
          </div>

          {/* Hero Title */}
          <h1
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.8rem)',
              fontWeight: 700,
              color: '#ffffff',
              margin: '0 0 16px 0',
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
            }}
          >
            Supermarkets
          </h1>

          {/* Hero Subtitle */}
          <p
            style={{
              fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
              color: 'rgba(255, 255, 255, 0.92)',
              maxWidth: '560px',
              lineHeight: 1.5,
              margin: '0 0 28px 0',
              fontWeight: 400,
            }}
          >
            Tailored for convenient shopping, smart retail loss prevention, and seamless store operations.
          </p>

          {/* Hero CTA Button */}
          <div>
            <button
              onClick={() => setShowSalesModal(true)}
              style={{
                backgroundColor: '#d70015',
                color: '#ffffff',
                border: 'none',
                padding: '12px 28px',
                borderRadius: '4px',
                fontSize: '0.98rem',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.2s ease',
                boxShadow: '0 4px 14px rgba(215, 0, 21, 0.4)',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#b50012')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#d70015')}
            >
              <span>Contact an Expert</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* 2. SUB-BREADCRUMB & STICKY SUB-NAVIGATION BAR */}
      <div
        style={{
          backgroundColor: '#f5f5f7',
          borderBottom: '1px solid #e5e5ea',
          fontSize: '0.85rem',
          color: '#86868b',
          padding: '8px 24px',
        }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Link to="/" style={{ color: '#515154', textDecoration: 'none' }}>Home</Link>
          <ChevronRight size={13} />
          <Link to="/solutions" style={{ color: '#515154', textDecoration: 'none' }}>Solutions</Link>
          <ChevronRight size={13} />
          <span style={{ color: '#1d1d1f', fontWeight: 600 }}>Supermarkets</span>
        </div>
      </div>

      <nav
        style={{
          position: 'sticky',
          top: '64px',
          zIndex: 40,
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid #e5e5ea',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
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
            overflowX: 'auto',
          }}
        >
          <div style={{ fontWeight: 700, fontSize: '1rem', color: '#1d1d1f', padding: '16px 0', whiteSpace: 'nowrap', marginRight: '32px' }}>
            Supermarkets Solution
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px', whiteSpace: 'nowrap' }}>
            {[
              { id: 'overview', label: 'Solution overview' },
              { id: 'entrance', label: 'Entrance' },
              { id: 'cashier', label: 'Cashier Area' },
              { id: 'shopping-floor', label: 'Shopping Floor' },
              { id: 'success-stories', label: 'Success stories' },
              { id: 'related-resources', label: 'Related Resources' },
              { id: 'related-links', label: 'You may also be interested in' },
            ].map((nav) => (
              <a
                key={nav.id}
                href={`#${nav.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(nav.id)?.scrollIntoView({ behavior: 'smooth' });
                  setActiveNav(nav.id);
                }}
                style={{
                  textDecoration: 'none',
                  fontSize: '0.92rem',
                  fontWeight: activeNav === nav.id ? 600 : 500,
                  color: activeNav === nav.id ? '#d70015' : '#515154',
                  padding: '16px 0',
                  borderBottom: activeNav === nav.id ? '2px solid #d70015' : '2px solid transparent',
                  transition: 'all 0.2s ease',
                }}
              >
                {nav.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* 3. SOLUTION OVERVIEW & 3D ISOMETRIC SUPERMARKET CUTAWAY */}
      <section id="overview" style={{ padding: '64px 24px', maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto 48px auto' }}>
          <h2 style={{ fontSize: '2.1rem', fontWeight: 700, color: '#1d1d1f', marginBottom: '20px' }}>
            Solution overview
          </h2>
          <p style={{ fontSize: '1.02rem', lineHeight: 1.7, color: '#4b5563', margin: '0 0 16px 0' }}>
            A modern supermarket or retail grocery chain requires a versatile security system that protects the premises and prevents retail loss while silently assisting operational staff to optimize customer flow, layout, and shopping experiences across daily hours.
          </p>
          <p style={{ fontSize: '0.98rem', lineHeight: 1.7, color: '#6b7280', margin: 0 }}>
            Coloron’s intelligent video and AIoT supermarket solution provides end-to-end coverage across parking lots, entrances, checkout aisles, and back-of-store cold storage with actionable footfall business intelligence.
          </p>
        </div>

        {/* 3D Isometric Supermarket Store Cutaway Model with Interactive Pins */}
        <div
          style={{
            position: 'relative',
            backgroundColor: '#f8fafc',
            borderRadius: '16px',
            overflow: 'hidden',
            border: '1px solid #e2e8f0',
            boxShadow: '0 10px 30px rgba(0,0,0,0.06)',
            marginBottom: '40px',
          }}
        >
          <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', maxHeight: '680px', backgroundColor: '#e2e8f0' }}>
            <img
              src="/images/supermarkets/supermarket-3d-map.jpg"
              alt="3D Isometric Supermarket Layout & Security Topology"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                display: 'block',
              }}
            />

            {/* Hotspot Markers */}
            {supermarketHotspots.map((spot, index) => {
              const isActive = activeHotspot.id === spot.id;
              return (
                <button
                  key={spot.id}
                  onClick={() => setActiveHotspot(spot)}
                  aria-label={spot.title}
                  style={{
                    position: 'absolute',
                    top: spot.top,
                    left: spot.left,
                    transform: 'translate(-50%, -50%)',
                    zIndex: 10,
                    width: isActive ? '36px' : '28px',
                    height: isActive ? '36px' : '28px',
                    borderRadius: '50%',
                    backgroundColor: isActive ? '#d70015' : '#702082',
                    color: '#ffffff',
                    border: '3px solid #ffffff',
                    boxShadow: isActive ? '0 0 0 4px rgba(215, 0, 21, 0.4), 0 4px 10px rgba(0,0,0,0.3)' : '0 2px 8px rgba(0,0,0,0.3)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700,
                    fontSize: isActive ? '0.9rem' : '0.78rem',
                    transition: 'all 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1.15)';
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1)';
                  }}
                >
                  {index + 1}
                </button>
              );
            })}
          </div>

          {/* Active Hotspot Inspector Card */}
          <div
            style={{
              padding: '24px 32px',
              backgroundColor: '#ffffff',
              borderTop: '1px solid #e5e5ea',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '20px',
            }}
          >
            <div style={{ flex: '1 1 500px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#702082', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px' }}>
                <MapPin size={16} />
                <span>Zone {supermarketHotspots.findIndex(s => s.id === activeHotspot.id) + 1}: {activeHotspot.title}</span>
              </div>
              <p style={{ margin: '0 0 8px 0', fontSize: '1rem', color: '#374151', lineHeight: 1.5 }}>
                {activeHotspot.desc}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#6b7280', fontSize: '0.88rem' }}>
                <Camera size={15} color="#d70015" />
                <span style={{ fontWeight: 600, color: '#111827' }}>{activeHotspot.device}</span>
                <span style={{ color: '#9ca3af' }}>•</span>
                <span>{activeHotspot.spec}</span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '12px' }}>
              <button
                onClick={() => setShowSalesModal(true)}
                style={{
                  backgroundColor: '#d70015',
                  color: '#ffffff',
                  border: 'none',
                  padding: '10px 22px',
                  borderRadius: '4px',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  transition: 'background-color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#b50012')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#d70015')}
              >
                <span>Request Topology</span>
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Hotspot Quick Selector Pills */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
          {supermarketHotspots.map((spot, idx) => (
            <button
              key={spot.id}
              onClick={() => setActiveHotspot(spot)}
              style={{
                backgroundColor: activeHotspot.id === spot.id ? '#702082' : '#f3f4f6',
                color: activeHotspot.id === spot.id ? '#ffffff' : '#374151',
                border: 'none',
                padding: '8px 16px',
                borderRadius: '20px',
                fontSize: '0.86rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              <span
                style={{
                  display: 'inline-flex',
                  width: '18px',
                  height: '18px',
                  borderRadius: '50%',
                  backgroundColor: activeHotspot.id === spot.id ? '#ffffff' : '#9ca3af',
                  color: activeHotspot.id === spot.id ? '#702082' : '#ffffff',
                  fontSize: '0.75rem',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                }}
              >
                {idx + 1}
              </span>
              <span>{spot.title}</span>
            </button>
          ))}
        </div>
      </section>

      {/* 4. ENTRANCE SECTION (Matches Screenshot Entrance Section) */}
      <section id="entrance" style={{ backgroundColor: '#f9fafb', padding: '72px 24px', borderTop: '1px solid #e5e7eb' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 48px auto' }}>
            <h2 style={{ fontSize: '2.1rem', fontWeight: 700, color: '#1d1d1f', marginBottom: '14px' }}>
              Entrance
            </h2>
            <p style={{ fontSize: '1.02rem', lineHeight: 1.6, color: '#4b5563', margin: 0 }}>
              Automate customer footfall monitoring, prevent retail shrink, and ensure smooth, welcoming entry experiences from the moment shoppers arrive.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '40px', alignItems: 'center' }}>
            {/* Left: Entrance Photo Feature */}
            <div style={{ position: 'relative', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 12px 28px rgba(0,0,0,0.08)' }}>
              <img
                src="/images/supermarkets/supermarket-entrance.jpg"
                alt="Supermarket Entrance & Automatic Sliding Doors"
                style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '16px 20px',
                  background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)',
                  color: '#ffffff',
                }}
              >
                <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>Automated Store Entrance Gate</div>
                <div style={{ fontSize: '0.82rem', color: '#e5e7eb' }}>Real-time Bi-directional Footfall Analytics & VIP Welcome</div>
              </div>
            </div>

            {/* Right: Key Capabilities */}
            <div>
              <div style={{ marginBottom: '24px' }}>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#111827', marginBottom: '12px' }}>
                  Smart Storefront Flow & Security
                </h3>
                <p style={{ fontSize: '0.96rem', color: '#4b5563', lineHeight: 1.6 }}>
                  Store entrances represent the critical first impression for shoppers and the primary data collection point for retail management to measure conversion rates and campaign effectiveness.
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
                {[
                  {
                    title: 'Accurate Dual-Lens People Counting',
                    desc: 'Binocular 3D vision filters out shadows, pets, shopping carts, and strollers to achieve over 98% counting precision.',
                  },
                  {
                    title: 'Real-Time Store Occupancy Management',
                    desc: 'Automatically tracks customer headcount and displays available capacity on entrance digital screens to prevent overcrowding.',
                  },
                  {
                    title: 'VIP & Frequent Shopper Recognition',
                    desc: 'Instantly alerts store managers via mobile app when registered loyalty club members arrive, providing personalized service.',
                  },
                  {
                    title: 'Non-Intrusive Shoplifting Deterrence',
                    desc: 'Integrates with EAS anti-theft pedestals to trigger overhead PTZ camera tracking whenever unpurchased merchandise passes through.',
                  },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                    <div
                      style={{
                        minWidth: '24px',
                        height: '24px',
                        borderRadius: '50%',
                        backgroundColor: '#f3e8ff',
                        color: '#702082',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: '2px',
                      }}
                    >
                      <Check size={15} strokeWidth={2.5} />
                    </div>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: '0.95rem', color: '#111827', marginBottom: '2px' }}>
                        {item.title}
                      </div>
                      <div style={{ fontSize: '0.86rem', color: '#6b7280', lineHeight: 1.5 }}>
                        {item.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setShowSalesModal(true)}
                style={{
                  backgroundColor: 'transparent',
                  color: '#d70015',
                  border: '1px solid #d70015',
                  padding: '10px 24px',
                  borderRadius: '4px',
                  fontSize: '0.92rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#d70015';
                  e.currentTarget.style.color = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#d70015';
                }}
              >
                <span>Select your Entrance Product</span>
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* Recommended Hardware Product Card */}
          <div
            style={{
              marginTop: '48px',
              backgroundColor: '#ffffff',
              borderRadius: '12px',
              padding: '28px 32px',
              border: '1px solid #e5e7eb',
              boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '24px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flex: '1 1 500px' }}>
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '12px',
                  backgroundColor: '#f3e8ff',
                  color: '#702082',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Users size={32} />
              </div>
              <div>
                <div style={{ display: 'inline-block', backgroundColor: '#fef2f2', color: '#d70015', fontSize: '0.75rem', fontWeight: 700, padding: '2px 8px', borderRadius: '4px', marginBottom: '4px' }}>
                  FEATURED HARDWARE
                </div>
                <h4 style={{ margin: '0 0 4px 0', fontSize: '1.15rem', fontWeight: 700, color: '#111827' }}>
                  Dual-Lens People Counting Camera (DS-2CD6825G0/C-IVS)
                </h4>
                <p style={{ margin: 0, fontSize: '0.88rem', color: '#6b7280' }}>
                  Bi-directional customer counting • Height filtering • Flash & audible alert • 98%+ precision
                </p>
              </div>
            </div>

            <button
              onClick={() => setShowSalesModal(true)}
              style={{
                backgroundColor: '#111827',
                color: '#ffffff',
                border: 'none',
                padding: '10px 22px',
                borderRadius: '4px',
                fontSize: '0.88rem',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              <span>View Data Sheet</span>
              <Download size={15} />
            </button>
          </div>
        </div>
      </section>

      {/* 5. CASHIER & CHECKOUT AREA SECTION */}
      <section id="cashier" style={{ padding: '72px 24px', maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 48px auto' }}>
          <h2 style={{ fontSize: '2.1rem', fontWeight: 700, color: '#1d1d1f', marginBottom: '14px' }}>
            Cashier & Checkout Area
          </h2>
          <p style={{ fontSize: '1.02rem', lineHeight: 1.6, color: '#4b5563', margin: 0 }}>
            Mitigate cashier shrinkage, verify transaction disputes instantly, and optimize checkout queue wait times during rush hours.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(420px, 1fr))', gap: '32px' }}>
          {/* Card 1: Queue Detection & Smart Dispatch */}
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '12px',
              overflow: 'hidden',
              border: '1px solid #e5e7eb',
              boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div style={{ position: 'relative', height: '260px', overflow: 'hidden' }}>
              <img
                src="/images/supermarkets/supermarket-queuing.jpg"
                alt="Supermarket Checkout Queue Management"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: '16px',
                  left: '16px',
                  backgroundColor: 'rgba(112, 32, 130, 0.9)',
                  color: '#ffffff',
                  padding: '4px 12px',
                  borderRadius: '20px',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <Clock size={14} />
                <span>Smart Queue Analytics</span>
              </div>
            </div>

            <div style={{ padding: '28px', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#111827', marginBottom: '10px' }}>
                Queue Length Detection & Auto-Dispatch
              </h3>
              <p style={{ fontSize: '0.92rem', color: '#4b5563', lineHeight: 1.6, marginBottom: '20px', flex: 1 }}>
                Overhead queue detection cameras measure customer wait times and lane depth in real time. If line length exceeds 4 shoppers, an automated alert triggers store audio dispatch to open adjacent cash registers, reducing cart abandonment.
              </p>

              <div style={{ borderTop: '1px solid #f3f4f6', paddingTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.85rem', color: '#6b7280', fontWeight: 500 }}>Wait-Time Alerts • Lane Balancing</span>
                <button
                  onClick={() => setShowSalesModal(true)}
                  style={{ background: 'none', border: 'none', color: '#d70015', fontWeight: 600, fontSize: '0.88rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}
                >
                  Learn more <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>

          {/* Card 2: POS Transaction Video Overlay */}
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '12px',
              overflow: 'hidden',
              border: '1px solid #e5e7eb',
              boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div style={{ position: 'relative', height: '260px', overflow: 'hidden' }}>
              <img
                src="/images/supermarkets/supermarket-cashier.jpg"
                alt="POS Cash Register Video Overlay Audit"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: '16px',
                  left: '16px',
                  backgroundColor: 'rgba(215, 0, 21, 0.9)',
                  color: '#ffffff',
                  padding: '4px 12px',
                  borderRadius: '20px',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <Receipt size={14} />
                <span>Loss Prevention & Audit</span>
              </div>
            </div>

            <div style={{ padding: '28px', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#111827', marginBottom: '10px' }}>
                POS Video Overlay & Exception Tracking
              </h3>
              <p style={{ fontSize: '0.92rem', color: '#4b5563', lineHeight: 1.6, marginBottom: '20px', flex: 1 }}>
                Synchronizes register keystrokes and barcode scanner logs directly into live surveillance video. Supervisors can search recorded events by receipt number, void transactions, no-sale drawer opens, or manual discount overrides.
              </p>

              <div style={{ borderTop: '1px solid #f3f4f6', paddingTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.85rem', color: '#6b7280', fontWeight: 500 }}>Sweethearting Prevention • POS Sync</span>
                <button
                  onClick={() => setShowSalesModal(true)}
                  style={{ background: 'none', border: 'none', color: '#d70015', fontWeight: 600, fontSize: '0.88rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}
                >
                  Learn more <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SHOPPING FLOOR & AISLE MERCHANDISING */}
      <section id="shopping-floor" style={{ backgroundColor: '#f9fafb', padding: '72px 24px', borderTop: '1px solid #e5e7eb' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 48px auto' }}>
            <h2 style={{ fontSize: '2.1rem', fontWeight: 700, color: '#1d1d1f', marginBottom: '14px' }}>
              Shopping Floor & Merchandising
            </h2>
            <p style={{ fontSize: '1.02rem', lineHeight: 1.6, color: '#4b5563', margin: 0 }}>
              Unlock actionable merchandising insights, detect wet-floor slip hazards, and protect merchandise displays without hindering shopper comfort.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {[
              {
                icon: <BarChart3 size={28} color="#702082" />,
                title: 'Heat Mapping & Shelf Dwell Time',
                desc: 'Panoramic fisheye cameras generate heat maps highlighting high-traffic promotional displays and identifying cold retail zones for layout rebalancing.',
              },
              {
                icon: <AlertCircle size={28} color="#d70015" />,
                title: 'Wet Floor & Spill Fall Hazard Alert',
                desc: 'Intelligent computer vision detects fallen items, liquids, or slipped customers in fresh produce aisles, dispatching cleaning crews instantly.',
              },
              {
                icon: <Eye size={28} color="#0071e3" />,
                title: '360° Zero-Blindspot Surveillance',
                desc: 'Replaces multiple directional cameras with single panoramic ceiling units, eliminating hidden spots between high grocery shelving.',
              },
              {
                icon: <Shield size={28} color="#059669" />,
                title: '24/7 ColorVu Night Protection',
                desc: 'Safeguards inventory after hours in full vivid color under low lighting, deterring after-hours burglary and unauthorized stockroom entry.',
              },
            ].map((feature, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '12px',
                  padding: '28px',
                  border: '1px solid #e5e7eb',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.03)',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.03)';
                }}
              >
                <div style={{ marginBottom: '16px' }}>{feature.icon}</div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#111827', marginBottom: '8px' }}>
                  {feature.title}
                </h3>
                <p style={{ fontSize: '0.88rem', color: '#6b7280', lineHeight: 1.6, margin: 0 }}>
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. SUCCESS STORIES (Matches Colombia's Grupo Éxito Supermarket Card in Screenshot) */}
      <section id="success-stories" style={{ padding: '72px 24px', maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2 style={{ fontSize: '2.1rem', fontWeight: 700, color: '#1d1d1f', margin: '0 0 12px 0' }}>
            Success stories
          </h2>
          <p style={{ fontSize: '1.02rem', color: '#6b7280', margin: 0 }}>
            Discover how leading international retail and grocery chains accelerate operational efficiency with our solutions.
          </p>
        </div>

        {/* Grupo Éxito Supermarket Case Study Card */}
        <div
          style={{
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            overflow: 'hidden',
            border: '1px solid #e5e7eb',
            boxShadow: '0 8px 30px rgba(0,0,0,0.06)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            alignItems: 'stretch',
          }}
        >
          <div style={{ position: 'relative', minHeight: '340px' }}>
            <img
              src="/images/supermarkets/case-study-exito.jpg"
              alt="Grupo Éxito Supermarket Store Digitalization"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
            <div
              style={{
                position: 'absolute',
                top: '20px',
                left: '20px',
                backgroundColor: 'rgba(0, 0, 0, 0.75)',
                backdropFilter: 'blur(8px)',
                color: '#ffffff',
                padding: '6px 14px',
                borderRadius: '20px',
                fontSize: '0.8rem',
                fontWeight: 600,
              }}
            >
              SUPERMARKET CASE STUDY
            </div>
          </div>

          <div style={{ padding: '40px 36px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ fontSize: '0.85rem', color: '#702082', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '10px' }}>
              RETAIL & GROCERY CHAINS
            </div>

            <h3 style={{ fontSize: '1.55rem', fontWeight: 700, color: '#111827', lineHeight: 1.3, marginBottom: '16px' }}>
              How digitalization transforms Colombia's leading supermarket group
            </h3>

            <p style={{ fontSize: '0.95rem', color: '#4b5563', lineHeight: 1.65, marginBottom: '24px' }}>
              Grupo Éxito, South America's prominent retail enterprise, implemented Coloron's intelligent video management platform and people-counting AI across hundreds of hypermarkets and supermarkets. The deployment centralized loss prevention, enhanced customer flow intelligence by 35%, and expedited cashier dispute resolution with zero downtime.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginBottom: '28px' }}>
              <div style={{ backgroundColor: '#f3e8ff', padding: '8px 16px', borderRadius: '8px' }}>
                <div style={{ fontSize: '1.15rem', fontWeight: 700, color: '#702082' }}>35%</div>
                <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>Faster Checkout Time</div>
              </div>
              <div style={{ backgroundColor: '#fef2f2', padding: '8px 16px', borderRadius: '8px' }}>
                <div style={{ fontSize: '1.15rem', fontWeight: 700, color: '#d70015' }}>400+</div>
                <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>Stores Unified</div>
              </div>
              <div style={{ backgroundColor: '#ecfdf5', padding: '8px 16px', borderRadius: '8px' }}>
                <div style={{ fontSize: '1.15rem', fontWeight: 700, color: '#059669' }}>98.8%</div>
                <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>Footfall Accuracy</div>
              </div>
            </div>

            <div>
              <button
                onClick={() => setShowSalesModal(true)}
                style={{
                  backgroundColor: '#d70015',
                  color: '#ffffff',
                  border: 'none',
                  padding: '12px 24px',
                  borderRadius: '4px',
                  fontSize: '0.92rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'background-color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#b50012')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#d70015')}
              >
                <span>Read Full Case Study</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 8. RELATED RESOURCES SECTION */}
      <section id="related-resources" style={{ backgroundColor: '#f9fafb', padding: '64px 24px', borderTop: '1px solid #e5e7eb' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '1.9rem', fontWeight: 700, color: '#1d1d1f', margin: '0 0 10px 0' }}>
              Related Resources
            </h2>
            <p style={{ fontSize: '0.98rem', color: '#6b7280', margin: 0 }}>
              Download technical brochures, architecture blueprints, and retail whitepapers.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px', maxWidth: '1000px', margin: '0 auto' }}>
            {[
              {
                title: 'Supermarket & Smart Retail AI Solution Brochure',
                type: 'PDF • 4.8 MB',
                desc: 'Comprehensive guide to retail loss prevention, dual-lens counting cameras, and POS transaction overlay integration.',
              },
              {
                title: 'Retail Queue Management & Flow Analytics Whitepaper',
                type: 'PDF • 3.2 MB',
                desc: 'Detailed engineering specifications on automated cashier dispatch and customer dwell time analytics.',
              },
            ].map((res, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '10px',
                  padding: '24px',
                  border: '1px solid #e5e7eb',
                  display: 'flex',
                  gap: '16px',
                  alignItems: 'flex-start',
                }}
              >
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '8px',
                    backgroundColor: '#fef2f2',
                    color: '#d70015',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <FileText size={22} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '0.78rem', color: '#6b7280', fontWeight: 600, textTransform: 'uppercase', marginBottom: '4px' }}>
                    {res.type}
                  </div>
                  <h4 style={{ fontSize: '0.98rem', fontWeight: 700, color: '#111827', margin: '0 0 6px 0', lineHeight: 1.4 }}>
                    {res.title}
                  </h4>
                  <p style={{ fontSize: '0.84rem', color: '#6b7280', margin: '0 0 14px 0', lineHeight: 1.5 }}>
                    {res.desc}
                  </p>
                  <button
                    onClick={() => setShowSalesModal(true)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#d70015',
                      fontSize: '0.86rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      padding: 0,
                    }}
                  >
                    <span>Download Brochure</span>
                    <Download size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Expert Red Button Banner */}
          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#111827', marginBottom: '16px' }}>
              Contact our solution expert today
            </h3>
            <button
              onClick={() => setShowSalesModal(true)}
              style={{
                backgroundColor: '#d70015',
                color: '#ffffff',
                border: 'none',
                padding: '12px 36px',
                borderRadius: '4px',
                fontSize: '0.95rem',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'background-color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#b50012')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#d70015')}
            >
              <span>Contact us</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* 9. YOU MAY ALSO BE INTERESTED IN (Matches Screenshot 3 Cards) */}
      <section id="related-links" style={{ padding: '72px 24px', maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '44px' }}>
          <h2 style={{ fontSize: '1.9rem', fontWeight: 700, color: '#1d1d1f', margin: 0 }}>
            You may also be interested in
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
          {[
            {
              title: 'Stores',
              subtitle: 'Tailored security and smart footfall intelligence for retail stores and boutiques.',
              image: '/images/supermarkets/rel-retail.jpg',
              link: '/solutions',
            },
            {
              title: 'Shopping Malls',
              subtitle: 'Multi-level commercial mall security, smart vehicle parking, and visitor flow orchestration.',
              image: '/images/supermarkets/rel-shopping-malls.jpg',
              link: '/solutions',
            },
            {
              title: 'HikCentral Professional',
              subtitle: 'Unified AIoT security software managing video surveillance, access control, and retail analytics.',
              image: '/images/supermarkets/rel-hikcentral.jpg',
              link: '/products',
            },
          ].map((item, i) => (
            <Link
              key={i}
              to={item.link}
              style={{
                textDecoration: 'none',
                backgroundColor: '#ffffff',
                borderRadius: '12px',
                overflow: 'hidden',
                border: '1px solid #e5e7eb',
                boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
                transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                display: 'flex',
                flexDirection: 'column',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 12px 28px rgba(0,0,0,0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.04)';
              }}
            >
              <div style={{ position: 'relative', height: '190px', overflow: 'hidden' }}>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)',
                    display: 'flex',
                    alignItems: 'flex-end',
                    padding: '16px',
                  }}
                >
                  <h4 style={{ color: '#ffffff', margin: 0, fontSize: '1.2rem', fontWeight: 700 }}>
                    {item.title}
                  </h4>
                </div>
              </div>

              <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <p style={{ margin: '0 0 16px 0', fontSize: '0.88rem', color: '#6b7280', lineHeight: 1.5 }}>
                  {item.subtitle}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#d70015', fontWeight: 600, fontSize: '0.88rem' }}>
                  <span>Explore Scenario</span>
                  <ChevronRight size={16} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 10. READY TO DISCUSS YOUR NEEDS (Bottom Call-to-Action) */}
      <section
        style={{
          backgroundColor: '#f5f5f7',
          padding: '70px 24px',
          borderTop: '1px solid #e5e5ea',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 700, color: '#1d1d1f', marginBottom: '16px' }}>
            Ready to discuss your needs?
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#6b7280', lineHeight: 1.6, marginBottom: '32px' }}>
            Get in touch with our certified retail and supermarket solution architects to design a customized smart retail surveillance deployment.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
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
              <span>CONTACT AN EXPERT</span>
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
      </section>

      {/* Contact Sales Modal */}
      {showSalesModal && (
        <ContactSalesModal
          isOpen={showSalesModal}
          onClose={() => setShowSalesModal(false)}
          defaultSolution="Supermarkets & Smart Retail"
        />
      )}
    </div>
  );
}
