import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  FileText,
  Download,
  ChevronRight,
  Home,
  Monitor,
  Calendar,
  Layers,
  ArrowRight,
  ShieldCheck,
  Zap,
  Sliders
} from 'lucide-react';
import ContactSalesModal from '../components/ContactSalesModal';

export default function InformationDisplaySolution() {
  const [activeNav, setActiveNav] = useState('challenges');
  const [showSalesModal, setShowSalesModal] = useState(false);
  const [activeProductIndex, setActiveProductIndex] = useState(0);

  // Subnav scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['challenges', 'solution-overview', 'highlights', 'products', 'success-stories', 'related-resources', 'related-links'];
      const scrollPos = window.scrollY + 180;

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
      const yOffset = -120;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveNav(id);
    }
  };

  const products = [
    {
      title: 'Education Digital Signage',
      model: 'DS-D6122TH-D/C',
      type: 'Wall-Mounted Interactive Signage',
      image: '/images/information-display/product_education_signage.jpg',
      desc: 'Smart interactive campus signage featuring facial recognition attendance check-in, real-time schedule broadcast, and high-definition anti-glare touch glass.',
    },
    {
      title: 'Floor-Standing Digital Signage',
      model: 'DS-D6055UL',
      type: 'Free-Standing Totem Kiosk Display',
      image: '/images/information-display/product_standing_signage.jpg',
      desc: 'Slim ultra-thin aluminum profile with 4K UHD resolution, 24/7 commercial-grade panel, built-in dual speakers, and remote scheduled content distribution.',
    },
    {
      title: '55-inch 3.5 mm LCD Display Unit',
      model: 'DS-D2055HU-Y',
      type: 'Ultra-Narrow Bezel Commercial Video Wall',
      image: '/images/information-display/product_lcd_unit.jpg',
      desc: 'Industrial 3.5 mm ultra-narrow physical bezel with 500 nits high brightness, direct-lit LED backlight, and intelligent color and temperature self-calibration.',
    },
  ];

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
      
      {/* 1. HERO BANNER - 750px Height */}
      <section
        style={{
          position: 'relative',
          width: '100%',
          height: '750px',
          minHeight: '750px',
          backgroundImage: "url('/images/information-display/banner.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center right',
          backgroundRepeat: 'no-repeat',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            maxWidth: '1440px',
            width: '100%',
            margin: '0 auto',
            padding: '48px 32px',
            position: 'relative',
            zIndex: 2,
          }}
        >
          {/* Breadcrumbs */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: 'rgba(255, 255, 255, 0.85)',
              fontSize: '0.86rem',
              fontWeight: 500,
              marginBottom: '28px',
            }}
          >
            <Link to="/" style={{ color: 'inherit', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Home size={14} /> Home
            </Link>
            <ChevronRight size={13} />
            <Link to="/solutions" style={{ color: 'inherit', textDecoration: 'none' }}>
              Solutions
            </Link>
            <ChevronRight size={13} />
            <Link to="/solutions" style={{ color: 'inherit', textDecoration: 'none' }}>
              Solutions by Function
            </Link>
            <ChevronRight size={13} />
            <span style={{ color: '#ffffff', fontWeight: 600 }}>Information Display</span>
          </div>

          <div style={{ maxWidth: '640px' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                color: '#ffffff',
                fontSize: '1.05rem',
                fontWeight: 600,
                marginBottom: '12px',
                letterSpacing: '0.02em',
                textShadow: '0 1px 3px rgba(0,0,0,0.2)',
              }}
            >
              <Monitor size={20} />
              Solutions by Function
            </div>
            <h1
              style={{
                fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
                fontWeight: 700,
                color: '#ffffff',
                margin: 0,
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
                textShadow: '0 2px 8px rgba(0, 0, 0, 0.25)',
              }}
            >
              Information Display
            </h1>
          </div>
        </div>
      </section>

      {/* 2. STICKY SUB-NAVIGATION */}
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
            maxWidth: '1440px',
            margin: '0 auto',
            padding: '0 32px',
            display: 'flex',
            alignItems: 'center',
            gap: '36px',
            overflowX: 'auto',
            whiteSpace: 'nowrap',
          }}
        >
          {[
            { id: 'challenges', label: 'What School Administrators Encounter' },
            { id: 'solution-overview', label: 'Coloron Information Display' },
            { id: 'highlights', label: 'Solution Highlights' },
            { id: 'products', label: 'Product Showcase' },
            { id: 'success-stories', label: 'Success stories' },
            { id: 'related-resources', label: 'Related Resources' },
          ].map((item) => {
            const isActive = activeNav === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  padding: '18px 0',
                  fontSize: '0.94rem',
                  fontWeight: isActive ? 600 : 500,
                  color: isActive ? '#d7150e' : '#4b5563',
                  borderBottom: isActive ? '3px solid #d7150e' : '3px solid transparent',
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

      {/* 3. SECTION: WHAT SCHOOL ADMINISTRATORS ENCOUNTER */}
      <section
        id="challenges"
        style={{
          maxWidth: '1440px',
          margin: '0 auto',
          padding: '80px 32px 64px',
        }}
      >
        <h2
          style={{
            fontSize: 'clamp(1.9rem, 3.2vw, 2.6rem)',
            fontWeight: 700,
            color: '#1d1d1f',
            textAlign: 'center',
            marginBottom: '20px',
            letterSpacing: '-0.02em',
          }}
        >
          What School Administrators Encounter
        </h2>

        <div style={{ maxWidth: '920px', margin: '0 auto 56px', textAlign: 'center' }}>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.8,
              color: '#4b5563',
              margin: 0,
            }}
          >
            To ensure a safe campus environment, it is important to keep the entire community well-informed. However, swiftly and broadly promoting campus activities often presents challenges for school administrators.
          </p>
        </div>

        {/* 3 Challenge Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px',
            maxWidth: '1180px',
            margin: '0 auto',
          }}
        >
          {[
            {
              image: '/images/information-display/challenge_01.jpg',
              desc: 'It’s challenging to share info, schedules, and notifications with all faculty and students quickly',
            },
            {
              image: '/images/information-display/challenge_02.jpg',
              desc: 'Making information visually appealing can be a struggle on traditional paper-based pinboards',
            },
            {
              image: '/images/information-display/challenge_03.jpg',
              desc: 'Controlling display devices across large campus facilities independently can be time-consuming',
            },
          ].map((card, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #e5e7eb',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 28px rgba(0, 0, 0, 0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.04)';
              }}
            >
              <div style={{ width: '100%', height: '220px', overflow: 'hidden', backgroundColor: '#f3f4f6' }}>
                <img
                  src={card.image}
                  alt={card.desc}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ padding: '24px 20px', flex: 1, display: 'flex', alignItems: 'center' }}>
                <p
                  style={{
                    fontSize: '0.96rem',
                    lineHeight: 1.6,
                    color: '#374151',
                    margin: 0,
                    fontWeight: 500,
                  }}
                >
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. SECTION: COLORON'S INFORMATION DISPLAY SOLUTION OVERVIEW */}
      <section
        id="solution-overview"
        style={{
          backgroundColor: '#f9fafb',
          borderTop: '1px solid #f1f5f9',
          borderBottom: '1px solid #f1f5f9',
          padding: '80px 32px',
        }}
      >
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: 'clamp(1.9rem, 3.2vw, 2.6rem)',
              fontWeight: 700,
              color: '#1d1d1f',
              textAlign: 'center',
              marginBottom: '20px',
              letterSpacing: '-0.02em',
            }}
          >
            Coloron’s Information Display Solution
          </h2>

          <div style={{ maxWidth: '960px', margin: '0 auto 56px', textAlign: 'center' }}>
            <p
              style={{
                fontSize: '1rem',
                lineHeight: 1.8,
                color: '#4b5563',
                margin: 0,
              }}
            >
              To address these challenges, Coloron’s solution offers diverse information displays that help facilitate efficient campus communication and enhance student engagement in the learning community.
            </p>
          </div>

          {/* 3 Circular Value Proposition Badges */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '36px',
              maxWidth: '1060px',
              margin: '0 auto',
            }}
          >
            {[
              {
                icon: '/images/information-display/icon_timely_accurate.jpg',
                title: 'Ensuring timely & accurate communication',
                desc: 'Instantly publish announcements, weather alerts, and emergency notifications across campus.',
              },
              {
                icon: '/images/information-display/icon_appealing_way.jpg',
                title: 'Organizing information in an appealing way',
                desc: 'Support dynamic multi-zone layouts, rich 4K video, audio schedules, and interactive media.',
              },
              {
                icon: '/images/information-display/icon_manage_devices.jpg',
                title: 'Managing multiple display devices efficiently',
                desc: 'Centralized cloud and local dispatch platform controlling hundreds of displays with one click.',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e5e7eb',
                  borderRadius: '16px',
                  padding: '36px 24px',
                  textAlign: 'center',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.03)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <div
                  style={{
                    width: '90px',
                    height: '90px',
                    borderRadius: '50%',
                    backgroundColor: '#eff6ff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '24px',
                    overflow: 'hidden',
                  }}
                >
                  <img
                    src={item.icon}
                    alt={item.title}
                    style={{ width: '72px', height: '72px', objectFit: 'contain' }}
                  />
                </div>
                <h3
                  style={{
                    fontSize: '1.15rem',
                    fontWeight: 700,
                    color: '#1d1d1f',
                    marginBottom: '12px',
                    lineHeight: 1.4,
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.9rem', color: '#6b7280', lineHeight: 1.6, margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SECTION: INFORMATION DISPLAY SOLUTION HIGHLIGHTS */}
      <section
        id="highlights"
        style={{
          maxWidth: '1440px',
          margin: '0 auto',
          padding: '80px 32px',
        }}
      >
        <h2
          style={{
            fontSize: 'clamp(1.9rem, 3.2vw, 2.6rem)',
            fontWeight: 700,
            color: '#1d1d1f',
            textAlign: 'center',
            marginBottom: '64px',
            letterSpacing: '-0.02em',
          }}
        >
          Information Display Solution Highlights
        </h2>

        {/* 5 Alternating Zig-Zag Rows */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '64px', maxWidth: '1200px', margin: '0 auto' }}>
          
          {/* Row 1: Easy to setup and manage */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
              gap: '48px',
              alignItems: 'center',
            }}
          >
            <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid #e5e7eb', boxShadow: '0 6px 20px rgba(0,0,0,0.05)' }}>
              <img
                src="/images/information-display/highlight_easy_setup.jpg"
                alt="Easy to setup and manage"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
            <div>
              <h3 style={{ fontSize: '1.45rem', fontWeight: 700, color: '#1d1d1f', marginBottom: '16px' }}>
                Easy to setup and manage
              </h3>
              <p style={{ fontSize: '1rem', lineHeight: 1.75, color: '#4b5563', margin: 0 }}>
                Coloron’s Digital Signage can be easily set up in classrooms, outdoor teaching areas, the canteen, and control rooms. It allows centralized management of multiple devices across locations.
              </p>
            </div>
          </div>

          {/* Row 2: Versatile display options (Reversed on desktop) */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
              gap: '48px',
              alignItems: 'center',
            }}
          >
            <div style={{ order: 2 }}>
              <h3 style={{ fontSize: '1.45rem', fontWeight: 700, color: '#1d1d1f', marginBottom: '16px' }}>
                Versatile display options
              </h3>
              <p style={{ fontSize: '1rem', lineHeight: 1.75, color: '#4b5563', margin: 0 }}>
                With a range of devices, including floor-standing, wall-mounted, and education digital signage, Coloron’s displays fit various needs and showcase customized content to engage students and faculty.
              </p>
            </div>
            <div style={{ order: 1, borderRadius: '16px', overflow: 'hidden', border: '1px solid #e5e7eb', boxShadow: '0 6px 20px rgba(0,0,0,0.05)' }}>
              <img
                src="/images/information-display/highlight_versatile_display.png"
                alt="Versatile display options"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          </div>

          {/* Row 3: Dynamic display formats */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
              gap: '48px',
              alignItems: 'center',
            }}
          >
            <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid #e5e7eb', boxShadow: '0 6px 20px rgba(0,0,0,0.05)' }}>
              <img
                src="/images/information-display/highlight_dynamic_formats.jpg"
                alt="Dynamic display formats"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
            <div>
              <h3 style={{ fontSize: '1.45rem', fontWeight: 700, color: '#1d1d1f', marginBottom: '16px' }}>
                Dynamic display formats
              </h3>
              <p style={{ fontSize: '1rem', lineHeight: 1.75, color: '#4b5563', margin: 0 }}>
                Coloron’s devices enable prompt updates of campus information, schedules, activities, and notifications, and support multimedia content such as pictures, audio, and videos, enhancing great readability and engagement.
              </p>
            </div>
          </div>

          {/* Row 4: Interactive attendance management (Reversed on desktop) */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
              gap: '48px',
              alignItems: 'center',
            }}
          >
            <div style={{ order: 2 }}>
              <h3 style={{ fontSize: '1.45rem', fontWeight: 700, color: '#1d1d1f', marginBottom: '16px' }}>
                Interactive attendance management
              </h3>
              <p style={{ fontSize: '1rem', lineHeight: 1.75, color: '#4b5563', margin: 0 }}>
                Coloron’s Education Digital Signage streamlines attendance with face recognition and/or ID card scanning. This allows for swift student check-ins, while automatic data retrieval aids teachers in managing attendance records with ease.
              </p>
            </div>
            <div style={{ order: 1, borderRadius: '16px', overflow: 'hidden', border: '1px solid #e5e7eb', boxShadow: '0 6px 20px rgba(0,0,0,0.05)' }}>
              <img
                src="/images/information-display/highlight_attendance.jpg"
                alt="Interactive attendance management"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          </div>

          {/* Row 5: Unified management via the platform */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
              gap: '48px',
              alignItems: 'center',
            }}
          >
            <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid #e5e7eb', boxShadow: '0 6px 20px rgba(0,0,0,0.05)', backgroundColor: '#ffffff' }}>
              <img
                src="/images/information-display/highlight_unified_platform.jpg"
                alt="Unified management via the platform"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
            <div>
              <h3 style={{ fontSize: '1.45rem', fontWeight: 700, color: '#1d1d1f', marginBottom: '16px' }}>
                Unified management via the platform
              </h3>
              <p style={{ fontSize: '1rem', lineHeight: 1.75, color: '#4b5563', margin: 0 }}>
                School managers can dispatch content to individual or multiple screens remotely using the Coloron centralized platform, enabling seamless information flow and centralized operational peace of mind.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 6. SECTION: PRODUCT SHOWCASE */}
      <section
        id="products"
        style={{
          backgroundColor: '#f9fafb',
          borderTop: '1px solid #f1f5f9',
          borderBottom: '1px solid #f1f5f9',
          padding: '80px 32px',
        }}
      >
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: 'clamp(1.9rem, 3.2vw, 2.6rem)',
              fontWeight: 700,
              color: '#1d1d1f',
              textAlign: 'center',
              marginBottom: '56px',
              letterSpacing: '-0.02em',
            }}
          >
            Product Showcase
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '32px',
              maxWidth: '1200px',
              margin: '0 auto 40px',
            }}
          >
            {products.map((prod, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e5e7eb',
                  borderRadius: '18px',
                  overflow: 'hidden',
                  boxShadow: '0 6px 24px rgba(0, 0, 0, 0.05)',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 16px 36px rgba(0, 0, 0, 0.1)';
                  e.currentTarget.style.borderColor = '#d7150e';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 6px 24px rgba(0, 0, 0, 0.05)';
                  e.currentTarget.style.borderColor = '#e5e7eb';
                }}
                onClick={() => setShowSalesModal(true)}
              >
                {/* Silver / Gray Pedestal Stage */}
                <div
                  style={{
                    height: '240px',
                    backgroundColor: '#ffffff',
                    background: 'radial-gradient(ellipse at bottom, #f1f5f9 0%, #ffffff 80%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '24px',
                    position: 'relative',
                    borderBottom: '1px solid #f1f5f9',
                  }}
                >
                  <img
                    src={prod.image}
                    alt={prod.title}
                    style={{ maxHeight: '190px', maxWidth: '100%', objectFit: 'contain' }}
                  />
                </div>

                <div style={{ padding: '28px 24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ fontSize: '0.8rem', color: '#d7150e', fontWeight: 600, textTransform: 'uppercase', marginBottom: '6px' }}>
                    {prod.type}
                  </div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#1d1d1f', marginBottom: '6px' }}>
                    {prod.title}
                  </h3>
                  <div style={{ fontSize: '0.94rem', fontWeight: 600, color: '#6b7280', marginBottom: '14px' }}>
                    {prod.model}
                  </div>
                  <p style={{ fontSize: '0.9rem', color: '#4b5563', lineHeight: 1.6, margin: 0, flex: 1 }}>
                    {prod.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px' }}>
            {products.map((_, i) => (
              <span
                key={i}
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: i === activeProductIndex ? '#d7150e' : '#d1d5db',
                  display: 'inline-block',
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 7. SECTION: SUCCESS STORIES */}
      <section
        id="success-stories"
        style={{
          maxWidth: '1440px',
          margin: '0 auto',
          padding: '80px 32px',
        }}
      >
        <h2
          style={{
            fontSize: 'clamp(1.9rem, 3.2vw, 2.6rem)',
            fontWeight: 700,
            color: '#1d1d1f',
            textAlign: 'center',
            marginBottom: '48px',
            letterSpacing: '-0.02em',
          }}
        >
          Success stories
        </h2>

        {/* Featured Case Study Card: Naked-eye 3D Display */}
        <div
          style={{
            maxWidth: '1100px',
            margin: '0 auto',
            backgroundColor: '#ffffff',
            borderRadius: '18px',
            border: '1px solid #e5e7eb',
            overflow: 'hidden',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.06)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
          }}
        >
          {/* Left: 3D LED Display Image */}
          <div
            style={{
              position: 'relative',
              minHeight: '320px',
              backgroundColor: '#000000',
              overflow: 'hidden',
            }}
          >
            <img
              src="/images/information-display/success_3d_display.jpg"
              alt="Giant naked-eye 3D display"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </div>

          {/* Right: Info */}
          <div style={{ padding: '36px 32px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h3
              style={{
                fontSize: '1.35rem',
                fontWeight: 700,
                color: '#1d1d1f',
                lineHeight: 1.35,
                marginBottom: '14px',
              }}
            >
              Tech-savvy marvel: Giant naked-eye 3D display in the heart of urban innovation
            </h3>
            
            <div style={{ fontSize: '0.88rem', color: '#9ca3af', marginBottom: '18px', fontWeight: 500 }}>
              July 10, 2024
            </div>

            <div style={{ marginBottom: '24px' }}>
              <div style={{ fontSize: '0.86rem', color: '#6b7280', fontWeight: 600, marginBottom: '8px' }}>
                Topic:
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {[
                  'Commercial display',
                  'LED displays',
                  '3D digital signage',
                  'Outdoor advertising',
                ].map((topic, idx) => (
                  <span
                    key={idx}
                    style={{
                      fontSize: '0.82rem',
                      color: '#4b5563',
                      backgroundColor: '#f3f4f6',
                      padding: '4px 10px',
                      borderRadius: '4px',
                      fontWeight: 500,
                    }}
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>

            <button
              onClick={() => setShowSalesModal(true)}
              style={{
                alignSelf: 'flex-start',
                backgroundColor: 'transparent',
                color: '#d7150e',
                border: 'none',
                fontWeight: 600,
                fontSize: '0.94rem',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                cursor: 'pointer',
                padding: 0,
              }}
            >
              Read Case Study <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* 8. SECTION: RELATED RESOURCES */}
      <section
        id="related-resources"
        style={{
          backgroundColor: '#f9fafb',
          borderTop: '1px solid #f1f5f9',
          borderBottom: '1px solid #f1f5f9',
          padding: '80px 32px',
        }}
      >
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: 'clamp(1.9rem, 3.2vw, 2.6rem)',
              fontWeight: 700,
              color: '#1d1d1f',
              textAlign: 'center',
              marginBottom: '48px',
              letterSpacing: '-0.02em',
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
                title: 'Information Display Solution',
                type: 'Solution Flyer',
                desc: 'Comprehensive brochure covering centralized digital signage networks and campus communication.',
              },
              {
                title: 'Educational Digital Signage',
                type: 'Product Infographic',
                desc: 'Interactive touchscreen models, integrated attendance facial recognition, and schedule specs.',
              },
            ].map((res, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e5e7eb',
                  borderRadius: '12px',
                  padding: '24px',
                  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.03)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  transition: 'all 0.2s ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#d7150e';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 16px rgba(0, 0, 0, 0.06)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#e5e7eb';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.03)';
                }}
                onClick={() => setShowSalesModal(true)}
              >
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '8px',
                    backgroundColor: '#fee2e2',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <FileText size={22} color="#dc2626" />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: '0.78rem', color: '#9ca3af', fontWeight: 600, textTransform: 'uppercase' }}>
                    {res.type}
                  </div>
                  <h4
                    style={{
                      fontSize: '0.94rem',
                      fontWeight: 600,
                      color: '#1d1d1f',
                      margin: '2px 0 0',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    {res.title}
                  </h4>
                </div>
                <Download size={18} color="#9ca3af" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. SECTION: YOU MAY ALSO BE INTERESTED IN */}
      <section
        id="related-links"
        style={{
          maxWidth: '1440px',
          margin: '0 auto',
          padding: '80px 32px 64px',
        }}
      >
        <h2
          style={{
            fontSize: 'clamp(1.9rem, 3.2vw, 2.6rem)',
            fontWeight: 700,
            color: '#1d1d1f',
            textAlign: 'center',
            marginBottom: '48px',
            letterSpacing: '-0.02em',
          }}
        >
          You may also be interested in
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
            maxWidth: '1100px',
            margin: '0 auto',
          }}
        >
          {[
            {
              title: 'Student Attendance',
              image: '/images/distance-learning/interest_information_release.jpg',
              link: '/solutions/student-attendance',
            },
            {
              title: 'Classroom Hub',
              image: '/images/distance-learning/interest_classroom_hub.jpg',
              link: '/solutions/classroom-hub',
            },
            {
              title: 'Distance Learning',
              image: '/images/distance-learning/interest_remote_inspection.jpg',
              link: '/solutions/distance-learning',
            },
          ].map((item, idx) => (
            <Link
              key={idx}
              to={item.link}
              style={{
                position: 'relative',
                height: '240px',
                borderRadius: '16px',
                overflow: 'hidden',
                textDecoration: 'none',
                display: 'block',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 16px 36px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.08)';
              }}
            >
              <img
                src={item.image}
                alt={item.title}
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
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0.1) 60%, transparent 100%)',
                  display: 'flex',
                  alignItems: 'flex-end',
                  padding: '24px',
                }}
              >
                <h3
                  style={{
                    color: '#ffffff',
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    margin: 0,
                    textShadow: '0 2px 4px rgba(0, 0, 0, 0.4)',
                  }}
                >
                  {item.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 10. SECTION: READY TO DISCUSS YOUR NEEDS? (With matching illustration) */}
      <section
        style={{
          backgroundColor: '#f9fafb',
          borderTop: '1px solid #e5e7eb',
          padding: '80px 32px',
        }}
      >
        <div
          style={{
            maxWidth: '1100px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '48px',
            alignItems: 'center',
          }}
        >
          {/* Left Text & Action Buttons */}
          <div>
            <h2
              style={{
                fontSize: '2.1rem',
                fontWeight: 700,
                color: '#1d1d1f',
                marginBottom: '16px',
                lineHeight: 1.25,
              }}
            >
              Ready to discuss your needs?
            </h2>
            <p
              style={{
                fontSize: '1rem',
                lineHeight: 1.65,
                color: '#4b5563',
                marginBottom: '32px',
              }}
            >
              Our audiovisual and smart campus specialists can assist you with system blueprints, signage hardware options, and platform deployments.
            </p>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                flexWrap: 'wrap',
              }}
            >
              <button
                onClick={() => setShowSalesModal(true)}
                style={{
                  backgroundColor: '#d7150e',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '9999px',
                  padding: '14px 34px',
                  fontSize: '0.98rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  boxShadow: '0 4px 14px rgba(215, 21, 14, 0.25)',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#b91c1c';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#d7150e';
                }}
              >
                Contact Sales
              </button>
              <button
                onClick={() => setShowSalesModal(true)}
                style={{
                  backgroundColor: 'transparent',
                  color: '#d7150e',
                  border: '2px solid #d7150e',
                  borderRadius: '9999px',
                  padding: '12px 32px',
                  fontSize: '0.98rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(215, 21, 14, 0.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                Request a Demo
              </button>
            </div>
          </div>

          {/* Right Vector Illustration (Person at desk with headset & laptop) */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <svg
              width="360"
              height="280"
              viewBox="0 0 400 300"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ maxWidth: '100%', height: 'auto' }}
            >
              {/* Plant foliage */}
              <path d="M70 290 C50 240 70 190 100 170 C110 210 90 270 70 290 Z" fill="#10b981" opacity="0.8" />
              <path d="M100 290 C120 230 150 200 170 220 C150 260 120 280 100 290 Z" fill="#34d399" opacity="0.6" />
              <path d="M360 290 C340 250 350 220 375 210 C385 240 375 280 360 290 Z" fill="#10b981" opacity="0.7" />

              {/* Gears */}
              <circle cx="180" cy="110" r="14" fill="#64748b" />
              <circle cx="180" cy="110" r="8" fill="#ffffff" />
              <circle cx="210" cy="90" r="10" fill="#94a3b8" />
              <circle cx="210" cy="90" r="5" fill="#ffffff" />

              {/* Chat bubbles */}
              <circle cx="225" cy="50" r="12" fill="#475569" />
              <rect x="290" y="42" width="34" height="22" rx="4" fill="#3b82f6" />
              <path d="M298 50 L307 56 L316 50" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />

              {/* Table */}
              <rect x="220" y="195" width="120" height="8" rx="3" fill="#1e293b" />
              <rect x="240" y="203" width="6" height="87" fill="#334155" />
              <rect x="315" y="203" width="6" height="87" fill="#334155" />

              {/* Chair */}
              <rect x="265" y="200" width="28" height="5" rx="2" fill="#334155" />
              <rect x="277" y="205" width="4" height="85" fill="#64748b" />
              <path d="M260 288 L298 288" stroke="#334155" strokeWidth="4" strokeLinecap="round" />

              {/* Person Body & Arms */}
              <circle cx="270" cy="100" r="14" fill="#cbd5e1" />
              {/* Headset */}
              <path d="M256 100 A14 14 0 0 1 284 100" stroke="#ef4444" strokeWidth="3" fill="none" />
              <circle cx="256" cy="100" r="4" fill="#ef4444" />
              <circle cx="284" cy="100" r="4" fill="#ef4444" />
              <path d="M284 102 C280 110 274 112 268 111" stroke="#ef4444" strokeWidth="2" fill="none" />

              {/* Torso */}
              <path d="M250 120 C250 115 290 115 290 120 L295 180 C295 185 245 185 245 180 Z" fill="#ffffff" stroke="#334155" strokeWidth="2.5" />
              {/* Legs */}
              <path d="M258 180 L258 240 L275 285" stroke="#1e293b" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" fill="none" />

              {/* Laptop */}
              <rect x="270" y="180" width="30" height="15" rx="2" fill="#0f172a" />
              <path d="M266 195 L304 195" stroke="#38bdf8" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </section>

      {/* SALES CONTACT MODAL */}
      <ContactSalesModal
        isOpen={showSalesModal}
        onClose={() => setShowSalesModal(false)}
        defaultSolution="Information Display Solution"
      />
    </div>
  );
}
