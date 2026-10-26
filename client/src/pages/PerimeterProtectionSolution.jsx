import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Shield,
  Activity,
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
  Sun,
  Moon,
  CloudFog,
  Radar,
  Flame,
  AlertTriangle,
  Building,
  Home as HomeIcon,
  Factory,
  Boxes,
  Compass,
  Crosshair,
  Volume2
} from 'lucide-react';
import ContactSalesModal from '../components/ContactSalesModal';

export default function PerimeterProtectionSolution() {
  const [lightboxImg, setLightboxImg] = useState(null);
  const [showContactModal, setShowContactModal] = useState(false);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);
  const [activeNav, setActiveNav] = useState('overview');

  // Auto-dismiss toast
  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => setToastMessage(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -70;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div style={{ backgroundColor: '#020612', minHeight: '100vh', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif', color: '#ffffff' }}>
      
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
            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.5)',
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

      {/* 1. HERO BANNER - FULL WIDTH EDGE-TO-EDGE */}
      <section
        id="overview"
        style={{
          position: 'relative',
          width: '100%',
          overflow: 'hidden',
          backgroundColor: '#020612',
          textAlign: 'center'
        }}
      >
        {/* Full-Width Panoramic Hero Banner Image Spanning 100% Edge-to-Edge */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            overflow: 'hidden',
            backgroundColor: '#020612',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
          }}
        >
          <img
            src="/images/perimeter-protection/hero_banner.jpg"
            alt="Perimeter Protection Shield Every Edge"
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
              maxHeight: '620px',
              objectFit: 'cover',
              objectPosition: 'center center'
            }}
          />
        </div>

        {/* Hero Text Copy & Solutions Overview */}
        <div style={{ maxWidth: '1380px', margin: '0 auto', padding: '60px 24px 70px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: 'rgba(0, 113, 227, 0.15)',
              border: '1px solid rgba(0, 113, 227, 0.35)',
              padding: '6px 18px',
              borderRadius: '9999px',
              marginBottom: '16px',
              backdropFilter: 'blur(8px)'
            }}
          >
            <Shield size={14} color="#00d2ff" />
            <span style={{ fontSize: '0.82rem', color: '#00d2ff', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Solutions by Function
            </span>
          </div>

          <h1
            style={{
              fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)',
              fontWeight: 800,
              color: '#ffffff',
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              margin: '0 0 14px'
            }}
          >
            Perimeter Protection
          </h1>

          <div
            style={{
              fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
              fontWeight: 600,
              color: '#00d2ff',
              letterSpacing: '0.02em',
              marginBottom: '22px'
            }}
          >
            Faster, more accurate, and more adaptable
          </div>

          <h2
            style={{
              fontSize: '1.3rem',
              fontWeight: 700,
              color: '#ffffff',
              margin: '0 0 14px',
              letterSpacing: '0.02em'
            }}
          >
            Solutions Overview
          </h2>

          <p
            style={{
              fontSize: '1.02rem',
              lineHeight: 1.7,
              color: '#94a3b8',
              margin: '0 auto 52px',
              maxWidth: '840px'
            }}
          >
            Protecting perimeters is the first line of defense against unauthorized intrusions. Coloron provides comprehensive perimeter protection solutions with DeepinView optical cameras, thermal imaging, and security radar to safeguard properties of all sizes.
          </p>

          {/* 3 GLOWING ISOMETRIC 3D SCENE TIERS (Side-by-Side as in Screenshot) */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '28px'
            }}
          >
          {/* Tier 1: Short Perimeter (< 50m) */}
          <div
            onClick={() => scrollToSection('short-perimeter')}
            style={{
              backgroundColor: '#070f24',
              borderRadius: '16px',
              overflow: 'hidden',
              border: '1px solid rgba(239, 68, 68, 0.4)',
              boxShadow: '0 8px 30px rgba(239, 68, 68, 0.15)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              textAlign: 'center'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-6px)';
              e.currentTarget.style.borderColor = '#ef4444';
              e.currentTarget.style.boxShadow = '0 16px 40px rgba(239, 68, 68, 0.35)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 0.4)';
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(239, 68, 68, 0.15)';
            }}
          >
            <div style={{ height: '240px', overflow: 'hidden', backgroundColor: '#020612' }}>
              <img
                src="/images/perimeter-protection/overview_tier_short.jpg"
                alt="Short Perimeter Villa 3D Overview"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div style={{ padding: '20px 24px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ fontSize: '1.25rem', fontWeight: 700, color: '#ffffff', marginBottom: '4px' }}>
                Short Perimeter
              </div>
              <div style={{ fontSize: '0.92rem', color: '#ef4444', fontWeight: 700 }}>
                &lt; 50 m
              </div>
              <div style={{ fontSize: '0.82rem', color: '#94a3b8', marginTop: '6px' }}>
                Optical AI &bull; AcuSense Target Classification
              </div>
            </div>
          </div>

          {/* Tier 2: Medium Perimeter (50 - 500m) */}
          <div
            onClick={() => scrollToSection('medium-perimeter')}
            style={{
              backgroundColor: '#070f24',
              borderRadius: '16px',
              overflow: 'hidden',
              border: '1px solid rgba(245, 158, 11, 0.4)',
              boxShadow: '0 8px 30px rgba(245, 158, 11, 0.15)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              textAlign: 'center'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-6px)';
              e.currentTarget.style.borderColor = '#f59e0b';
              e.currentTarget.style.boxShadow = '0 16px 40px rgba(245, 158, 11, 0.35)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'rgba(245, 158, 11, 0.4)';
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(245, 158, 11, 0.15)';
            }}
          >
            <div style={{ height: '240px', overflow: 'hidden', backgroundColor: '#020612' }}>
              <img
                src="/images/perimeter-protection/overview_tier_medium.jpg"
                alt="Medium Perimeter Factory 3D Overview"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div style={{ padding: '20px 24px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ fontSize: '1.25rem', fontWeight: 700, color: '#ffffff', marginBottom: '4px' }}>
                Medium Perimeter
              </div>
              <div style={{ fontSize: '0.92rem', color: '#f59e0b', fontWeight: 700 }}>
                50 – 500 m
              </div>
              <div style={{ fontSize: '0.82rem', color: '#94a3b8', marginTop: '6px' }}>
                Thermal Bi-Spectrum &bull; Fog & Darkness Immunity
              </div>
            </div>
          </div>

          {/* Tier 3: Large Perimeter (> 500m) */}
          <div
            onClick={() => scrollToSection('long-perimeter')}
            style={{
              backgroundColor: '#070f24',
              borderRadius: '16px',
              overflow: 'hidden',
              border: '1px solid rgba(0, 210, 255, 0.4)',
              boxShadow: '0 8px 30px rgba(0, 210, 255, 0.15)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              textAlign: 'center'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-6px)';
              e.currentTarget.style.borderColor = '#00d2ff';
              e.currentTarget.style.boxShadow = '0 16px 40px rgba(0, 210, 255, 0.35)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'rgba(0, 210, 255, 0.4)';
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 210, 255, 0.15)';
            }}
          >
            <div style={{ height: '240px', overflow: 'hidden', backgroundColor: '#020612' }}>
              <img
                src="/images/perimeter-protection/overview_tier_long.jpg"
                alt="Large Perimeter Airport 3D Overview"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div style={{ padding: '20px 24px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ fontSize: '1.25rem', fontWeight: 700, color: '#ffffff', marginBottom: '4px' }}>
                Large Perimeter
              </div>
              <div style={{ fontSize: '0.92rem', color: '#00d2ff', fontWeight: 700 }}>
                &gt; 500 m
              </div>
              <div style={{ fontSize: '0.82rem', color: '#94a3b8', marginTop: '6px' }}>
                Security Radar &bull; Auto-Tracking Laser PTZ
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* 2. STICKY SUB-NAVIGATION BAR */}
      <nav
        style={{
          position: 'sticky',
          top: '64px',
          zIndex: 40,
          backgroundColor: '#070d1e',
          borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)'
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
          <div style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
            {[
              { id: 'short-perimeter', label: 'Short Perimeter (< 50m)' },
              { id: 'medium-perimeter', label: 'Medium Perimeter (50-500m)' },
              { id: 'long-perimeter', label: 'Large Perimeter (> 500m)' },
              { id: 'comparison-matrix', label: 'Comparison Matrix' },
              { id: 'success-stories', label: 'Success Stories' },
              { id: 'resources', label: 'Resources' },
            ].map((nav) => (
              <button
                key={nav.id}
                onClick={() => scrollToSection(nav.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  color: '#ffffff',
                  cursor: 'pointer',
                  padding: '6px 0',
                  transition: 'color 0.2s',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#00d2ff')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#ffffff')}
              >
                <span>{nav.label}</span>
              </button>
            ))}
          </div>

          <button
            onClick={() => setShowContactModal(true)}
            style={{
              backgroundColor: '#d70015',
              color: '#ffffff',
              border: 'none',
              padding: '8px 20px',
              borderRadius: '4px',
              fontSize: '0.85rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'background-color 0.2s ease, transform 0.15s ease',
              flexShrink: 0
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#b50012';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#d70015';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Ask about solutions
          </button>
        </div>
      </nav>

      {/* 3. SECTION 1: SHORT PERIMETER (< 50m) */}
      <section id="short-perimeter" style={{ padding: '80px 24px 60px', maxWidth: '1380px', margin: '0 auto' }}>
        
        {/* Sleek Blue Metallic Banner Header with Camera Cone */}
        <div
          style={{
            position: 'relative',
            borderRadius: '12px',
            overflow: 'hidden',
            marginBottom: '44px',
            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.4)',
            border: '1px solid rgba(0, 113, 227, 0.3)'
          }}
        >
          <img
            src="/images/perimeter-protection/tier_short.jpg"
            alt="Short Perimeter Header Banner"
            style={{ width: '100%', height: '70px', objectFit: 'cover', display: 'block' }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0 32px',
              background: 'linear-gradient(90deg, rgba(7, 15, 36, 0.85) 0%, rgba(7, 15, 36, 0.4) 50%, rgba(7, 15, 36, 0.85) 100%)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Shield size={20} color="#00d2ff" />
              <span style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.01em' }}>
                Short Perimeter (&lt; 50 m)
              </span>
            </div>
            <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#00d2ff', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              AcuSense Technology
            </div>
          </div>
        </div>

        {/* Video / Feature Comparison Cards (Traditional VMD vs AcuSense Target Classification) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '28px',
            marginBottom: '48px'
          }}
        >
          {/* Traditional VMD Card */}
          <div
            style={{
              backgroundColor: '#070f24',
              borderRadius: '16px',
              padding: '24px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <AlertTriangle size={18} color="#ef4444" />
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, margin: 0, color: '#ffffff' }}>
                  Traditional Motion Detection (VMD)
                </h4>
              </div>
              <span style={{ fontSize: '0.78rem', color: '#ef4444', fontWeight: 700, backgroundColor: 'rgba(239, 68, 68, 0.15)', padding: '3px 8px', borderRadius: '4px' }}>
                High False Alarms
              </span>
            </div>
            <div
              style={{
                borderRadius: '10px',
                overflow: 'hidden',
                backgroundColor: '#020612',
                height: '210px',
                cursor: 'pointer',
                marginBottom: '14px'
              }}
              onClick={() => setLightboxImg('/images/perimeter-protection/feature_false_alarms.png')}
            >
              <img
                src="/images/perimeter-protection/feature_false_alarms.png"
                alt="Traditional VMD False Alarms"
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </div>
            <p style={{ margin: 0, fontSize: '0.88rem', color: '#94a3b8', lineHeight: 1.5 }}>
              Triggered by windblown branches, leaves, pets, heavy rainfall, and vehicle headlight beams. Security operators face constant alarm fatigue.
            </p>
          </div>

          {/* AcuSense Target Classification Card */}
          <div
            style={{
              backgroundColor: '#070f24',
              borderRadius: '16px',
              padding: '24px',
              border: '1px solid rgba(0, 210, 255, 0.4)',
              boxShadow: '0 4px 24px rgba(0, 210, 255, 0.15)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={18} color="#34c759" />
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, margin: 0, color: '#ffffff' }}>
                  AcuSense Target Classification
                </h4>
              </div>
              <span style={{ fontSize: '0.78rem', color: '#34c759', fontWeight: 700, backgroundColor: 'rgba(52, 199, 89, 0.15)', padding: '3px 8px', borderRadius: '4px' }}>
                98%+ Accuracy
              </span>
            </div>
            <div
              style={{
                borderRadius: '10px',
                overflow: 'hidden',
                backgroundColor: '#020612',
                height: '210px',
                cursor: 'pointer',
                marginBottom: '14px'
              }}
              onClick={() => setLightboxImg('/images/perimeter-protection/feature_target_classification.png')}
            >
              <img
                src="/images/perimeter-protection/feature_target_classification.png"
                alt="AcuSense Accurate Classification"
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </div>
            <p style={{ margin: 0, fontSize: '0.88rem', color: '#94a3b8', lineHeight: 1.5 }}>
              Deep learning algorithms distinguish humans and vehicles from benign environmental movement, delivering verified alerts and triggering live acoustic strobe deterrence.
            </p>
          </div>
        </div>

        {/* Featured Products Shelf Container */}
        <div
          style={{
            backgroundColor: '#070f24',
            borderRadius: '16px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '32px 28px',
            marginBottom: '48px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0, color: '#ffffff' }}>
              Featured Products
            </h3>
            <span style={{ fontSize: '0.85rem', color: '#00d2ff', fontWeight: 600 }}>Short-Range Edge Lineup</span>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
              gap: '16px'
            }}
          >
            {[
              {
                name: 'AcuSense 4K Bullet',
                model: 'DS-2CD2T86G2-ISU/SL',
                spec: '4K • Strobe & Siren Deterrence',
                img: '/images/perimeter-protection/prod_5series_bullet.jpg'
              },
              {
                name: 'AcuSense 4K Turret',
                model: 'DS-2CD2386G2-ISU/SL',
                spec: '4K • Built-in Microphone',
                img: '/images/apple_turret_air.jpg'
              },
              {
                name: 'DarkFighter 25x PTZ',
                model: 'DS-2DE4425IW-DE',
                spec: '4MP • 100m IR • AcuSense',
                img: '/images/apple_ptz_pro.jpg'
              },
              {
                name: 'AcuSeek AI NVR',
                model: 'DS-7608NXI-I2/S',
                spec: '8-ch 4K • Quick Video Search',
                img: '/images/apple_nvr_pro.jpg'
              },
              {
                name: 'Solar-Powered 4G Bullet',
                model: 'DS-2XS2T47G0-LDH/4G',
                spec: 'ColorVu • Battery Standalone',
                img: '/images/perimeter-protection/prod_deepinview_bullet.jpg'
              },
              {
                name: 'Network Horn Speaker',
                model: 'DS-PA0103',
                spec: 'IP Speaker • Auto Warning',
                img: '/images/cctv_hero_camera.png'
              }
            ].map((p, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#030816',
                  borderRadius: '12px',
                  padding: '16px',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(0, 210, 255, 0.4)';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{ width: '90px', height: '90px', marginBottom: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img
                    src={p.img}
                    alt={p.name}
                    style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                  />
                </div>
                <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#ffffff', marginBottom: '2px' }}>
                  {p.name}
                </div>
                <div style={{ fontSize: '0.72rem', color: '#00d2ff', marginBottom: '4px', fontFamily: 'monospace' }}>
                  {p.model}
                </div>
                <div style={{ fontSize: '0.72rem', color: '#64748b' }}>
                  {p.spec}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Application Scenarios Graphic Diagram */}
        <div
          style={{
            backgroundColor: '#070f24',
            borderRadius: '16px',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            padding: '28px',
            boxShadow: '0 8px 30px rgba(0,0,0,0.4)',
            cursor: 'pointer'
          }}
          onClick={() => setLightboxImg('/images/perimeter-protection/scenarios_short.jpg')}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, margin: '0 0 4px', color: '#ffffff' }}>
                Application Scenarios of Short Perimeter
              </h3>
              <p style={{ fontSize: '0.86rem', color: '#94a3b8', margin: 0 }}>
                1. Villas & Residences &bull; 2. Commercial Buildings & Retail &bull; 3. Construction Sites &bull; 4. Logistics & Parking Yards
              </p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#00d2ff', fontSize: '0.85rem', fontWeight: 600 }}>
              <Maximize2 size={15} /> Click to expand
            </div>
          </div>
          <div style={{ borderRadius: '10px', overflow: 'hidden', backgroundColor: '#020612' }}>
            <img
              src="/images/perimeter-protection/scenarios_short.jpg"
              alt="Application Scenarios of Short Perimeter"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
        </div>
      </section>

      {/* 4. SECTION 2: MEDIUM PERIMETER (50 - 500m) */}
      <section id="medium-perimeter" style={{ padding: '80px 24px 60px', maxWidth: '1380px', margin: '0 auto', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        
        {/* Sleek Blue Metallic Banner Header with Thermal Sensor Cone */}
        <div
          style={{
            position: 'relative',
            borderRadius: '12px',
            overflow: 'hidden',
            marginBottom: '44px',
            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.4)',
            border: '1px solid rgba(245, 158, 11, 0.3)'
          }}
        >
          <img
            src="/images/perimeter-protection/tier_medium.jpg"
            alt="Medium Perimeter Header Banner"
            style={{ width: '100%', height: '70px', objectFit: 'cover', display: 'block' }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0 32px',
              background: 'linear-gradient(90deg, rgba(7, 15, 36, 0.85) 0%, rgba(7, 15, 36, 0.4) 50%, rgba(7, 15, 36, 0.85) 100%)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Flame size={20} color="#f59e0b" />
              <span style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.01em' }}>
                Medium Perimeter (50 – 500 m / Total up to 2km)
              </span>
            </div>
            <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#f59e0b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Thermal Bi-Spectrum Technology
            </div>
          </div>
        </div>

        {/* 3 Thermal Capabilities Showcase Boxes */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px',
            marginBottom: '48px'
          }}
        >
          <div
            style={{
              backgroundColor: '#070f24',
              borderRadius: '16px',
              padding: '24px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <Moon size={20} color="#f59e0b" />
              <h4 style={{ fontSize: '1.05rem', fontWeight: 700, margin: 0, color: '#ffffff' }}>
                Zero-Lux Darkness Penetration
              </h4>
            </div>
            <p style={{ margin: 0, fontSize: '0.88rem', color: '#94a3b8', lineHeight: 1.6 }}>
              Radiometric thermal sensors capture ambient heat differentials without relying on supplementary light, rendering intruders in razor-sharp contrast even in pitch-black remote yards.
            </p>
          </div>

          <div
            style={{
              backgroundColor: '#070f24',
              borderRadius: '16px',
              padding: '24px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <CloudFog size={20} color="#f59e0b" />
              <h4 style={{ fontSize: '1.05rem', fontWeight: 700, margin: 0, color: '#ffffff' }}>
                Heavy Fog & Severe Weather
              </h4>
            </div>
            <p style={{ margin: 0, fontSize: '0.88rem', color: '#94a3b8', lineHeight: 1.6 }}>
              Long-wavelength infrared easily cuts through dense coastal mist, torrential storms, and particulate smoke where conventional optical lenses suffer from severe visual occlusion.
            </p>
          </div>

          <div
            style={{
              backgroundColor: '#070f24',
              borderRadius: '16px',
              padding: '24px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <Zap size={20} color="#f59e0b" />
              <h4 style={{ fontSize: '1.05rem', fontWeight: 700, margin: 0, color: '#ffffff' }}>
                Temperature Anomaly Alerts
              </h4>
            </div>
            <p style={{ margin: 0, fontSize: '0.88rem', color: '#94a3b8', lineHeight: 1.6 }}>
              Dual function security plus early fire prevention: continuously monitors transformer substations, inverter banks, and battery energy storage systems for pre-fire hotspots.
            </p>
          </div>
        </div>

        {/* Featured Products Shelf Container */}
        <div
          style={{
            backgroundColor: '#070f24',
            borderRadius: '16px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '32px 28px',
            marginBottom: '48px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0, color: '#ffffff' }}>
              Featured Products
            </h3>
            <span style={{ fontSize: '0.85rem', color: '#f59e0b', fontWeight: 600 }}>Thermal Bi-Spectrum Lineup</span>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '16px'
            }}
          >
            {[
              {
                name: 'Thermal Bi-Spectrum Bullet',
                model: 'DS-2TD2137-15/P',
                spec: 'Up to 450m detection • IP67',
                img: '/images/perimeter-protection/prod_thermal_bullet.jpg'
              },
              {
                name: 'Thermal Bi-Spectrum Turret',
                model: 'DS-2TD1217-3/PA',
                spec: 'Integrated strobe & acoustic siren',
                img: '/images/perimeter-protection/prod_thermal_turret.jpg'
              },
              {
                name: 'Bi-Spectrum PTZ Speed Dome',
                model: 'DS-2TD4237-25/W',
                spec: '360° Endless Pan • 40x Optical Zoom',
                img: '/images/hydro-plants/product-bi-spectrum-ptz.png'
              },
              {
                name: 'Explosion-Proof Thermal',
                model: 'DS-2TD2466T-25X',
                spec: 'ATEX Certified • Chemical / Tank Farms',
                img: '/images/offshore_oil_platform/prod_ex_bullet.png'
              }
            ].map((p, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#030816',
                  borderRadius: '12px',
                  padding: '20px 16px',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(245, 158, 11, 0.4)';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{ width: '100px', height: '100px', marginBottom: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img
                    src={p.img}
                    alt={p.name}
                    style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                  />
                </div>
                <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#ffffff', marginBottom: '2px' }}>
                  {p.name}
                </div>
                <div style={{ fontSize: '0.75rem', color: '#f59e0b', marginBottom: '4px', fontFamily: 'monospace' }}>
                  {p.model}
                </div>
                <div style={{ fontSize: '0.74rem', color: '#64748b' }}>
                  {p.spec}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Application Scenarios Graphic Diagram */}
        <div
          style={{
            backgroundColor: '#070f24',
            borderRadius: '16px',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            padding: '28px',
            boxShadow: '0 8px 30px rgba(0,0,0,0.4)',
            cursor: 'pointer'
          }}
          onClick={() => setLightboxImg('/images/perimeter-protection/scenarios_medium.jpg')}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, margin: '0 0 4px', color: '#ffffff' }}>
                Application Scenarios of Medium Perimeter
              </h3>
              <p style={{ fontSize: '0.86rem', color: '#94a3b8', margin: 0 }}>
                1. Solar PV Farms &bull; 2. Industrial Manufacturing Campuses &bull; 3. Electrical Substations
              </p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#f59e0b', fontSize: '0.85rem', fontWeight: 600 }}>
              <Maximize2 size={15} /> Click to expand
            </div>
          </div>
          <div style={{ borderRadius: '10px', overflow: 'hidden', backgroundColor: '#020612' }}>
            <img
              src="/images/perimeter-protection/scenarios_medium.jpg"
              alt="Application Scenarios of Medium Perimeter"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
        </div>
      </section>

      {/* 5. SECTION 3: LARGE PERIMETER (> 500m) */}
      <section id="long-perimeter" style={{ padding: '80px 24px 60px', maxWidth: '1380px', margin: '0 auto', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        
        {/* Sleek Blue Metallic Banner Header with Radar Cone */}
        <div
          style={{
            position: 'relative',
            borderRadius: '12px',
            overflow: 'hidden',
            marginBottom: '44px',
            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.4)',
            border: '1px solid rgba(0, 210, 255, 0.3)'
          }}
        >
          <div
            style={{
              height: '70px',
              backgroundColor: '#071532',
              backgroundImage: 'linear-gradient(90deg, #071532 0%, #0d2858 50%, #071532 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0 32px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Radar size={20} color="#00d2ff" />
              <span style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.01em' }}>
                Large Perimeter (&gt; 500 m / Total &gt; 2km)
              </span>
            </div>
            <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#00d2ff', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Security Radar + Long-Range PTZ Synergy
            </div>
          </div>
        </div>

        {/* Radar-PTZ Tracking Feature Banner */}
        <div
          style={{
            backgroundColor: '#070f24',
            borderRadius: '16px',
            border: '1px solid rgba(0, 210, 255, 0.3)',
            padding: '28px 32px',
            marginBottom: '48px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '24px'
          }}
        >
          <div style={{ flex: '1 1 540px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#00d2ff', fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>
              <Crosshair size={16} /> Radar Auto-Tracking Integration
            </div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, margin: '0 0 10px', color: '#ffffff' }}>
              360° All-Weather Continuous Target Lock
            </h3>
            <p style={{ margin: 0, fontSize: '0.94rem', color: '#94a3b8', lineHeight: 1.6 }}>
              The 77GHz millimeter-wave radar continuously sweeps the outer exclusion boundary. The millisecond an intruder or unauthorized vehicle crosses the perimeter perimeter threshold, the system computes coordinates, speed, and heading vector—instantly slewing long-range optical PTZs to track and zoom in on the target automatically.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '12px' }}>
            <div style={{ backgroundColor: '#030816', padding: '12px 20px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.08)', textAlign: 'center' }}>
              <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#00d2ff' }}>1,500m+</div>
              <div style={{ fontSize: '0.74rem', color: '#64748b' }}>Radar Range</div>
            </div>
            <div style={{ backgroundColor: '#030816', padding: '12px 20px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.08)', textAlign: 'center' }}>
              <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#34c759' }}>32 Targets</div>
              <div style={{ fontSize: '0.74rem', color: '#64748b' }}>Simultaneous Track</div>
            </div>
          </div>
        </div>

        {/* Featured Products Shelf Container */}
        <div
          style={{
            backgroundColor: '#070f24',
            borderRadius: '16px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '32px 28px',
            marginBottom: '48px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0, color: '#ffffff' }}>
              Featured Products
            </h3>
            <span style={{ fontSize: '0.85rem', color: '#00d2ff', fontWeight: 600 }}>Long-Range Radar & Master PTZ</span>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '16px'
            }}
          >
            {[
              {
                name: '77GHz Security Radar',
                model: 'DS-PR1-60',
                spec: 'Up to 1.5km human/vehicle detection',
                img: '/images/hydro-plants/product-radar-2km.png'
              },
              {
                name: 'Laser PTZ Speed Dome',
                model: 'DS-2DF8836IX-AELW',
                spec: '4K • 36x Optical • 500m Laser IR',
                img: '/images/hydro-plants/product-panoramic-ptz.png'
              },
              {
                name: 'Radar-PTZ Master Unit',
                model: 'iDS-2SR8141IX-AB',
                spec: 'Integrated Radar + Optical Speed Dome',
                img: '/images/offshore_oil_platform/prod_stable_ptz.png'
              },
              {
                name: 'Enterprise VMS Server',
                model: 'HikCentral Master',
                spec: 'GIS E-Map • Distributed Alarm Core',
                img: '/images/hydro-plants/product-deepinmind-nvr.png'
              }
            ].map((p, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#030816',
                  borderRadius: '12px',
                  padding: '20px 16px',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(0, 210, 255, 0.4)';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{ width: '100px', height: '100px', marginBottom: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img
                    src={p.img}
                    alt={p.name}
                    style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                  />
                </div>
                <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#ffffff', marginBottom: '2px' }}>
                  {p.name}
                </div>
                <div style={{ fontSize: '0.75rem', color: '#00d2ff', marginBottom: '4px', fontFamily: 'monospace' }}>
                  {p.model}
                </div>
                <div style={{ fontSize: '0.74rem', color: '#64748b' }}>
                  {p.spec}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Application Scenarios Graphic Diagram */}
        <div
          style={{
            backgroundColor: '#070f24',
            borderRadius: '16px',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            padding: '28px',
            boxShadow: '0 8px 30px rgba(0,0,0,0.4)',
            cursor: 'pointer'
          }}
          onClick={() => setLightboxImg('/images/perimeter-protection/scenarios_long.jpg')}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, margin: '0 0 4px', color: '#ffffff' }}>
                Application Scenarios of Large Perimeter
              </h3>
              <p style={{ fontSize: '0.86rem', color: '#94a3b8', margin: 0 }}>
                1. Airports & Seaports &bull; 2. Oil & Gas Refineries & National Borders
              </p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#00d2ff', fontSize: '0.85rem', fontWeight: 600 }}>
              <Maximize2 size={15} /> Click to expand
            </div>
          </div>
          <div style={{ borderRadius: '10px', overflow: 'hidden', backgroundColor: '#020612' }}>
            <img
              src="/images/perimeter-protection/scenarios_long.jpg"
              alt="Application Scenarios of Large Perimeter"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
        </div>
      </section>

      {/* 6. COMPARISON MATRIX (Exact Match to Screenshot) */}
      <section id="comparison-matrix" style={{ padding: '80px 24px 60px', maxWidth: '1380px', margin: '0 auto', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div style={{ textAlign: 'center', marginBottom: '44px' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 3.2vw, 2.5rem)', fontWeight: 800, margin: '0 0 12px', color: '#ffffff' }}>
            Find the best fit for your perimeter security
          </h2>
          <p style={{ fontSize: '1rem', color: '#94a3b8', maxWidth: '780px', margin: '0 auto' }}>
            Compare coverage range, environmental resilience, false alarm filtering, and active deterrence capabilities across our three core tiers.
          </p>
        </div>

        <div
          style={{
            overflowX: 'auto',
            backgroundColor: '#070f24',
            borderRadius: '16px',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            boxShadow: '0 10px 40px rgba(0,0,0,0.4)'
          }}
        >
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '860px' }}>
            <thead>
              <tr style={{ backgroundColor: '#0b1633', borderBottom: '1px solid rgba(255, 255, 255, 0.15)' }}>
                <th style={{ padding: '22px 24px', fontSize: '0.92rem', color: '#cbd5e1', fontWeight: 700 }}>Technology / Parameters</th>
                <th style={{ padding: '22px 24px', fontSize: '0.92rem', color: '#00d2ff', fontWeight: 700 }}>Optical (AcuSense & ColorVu)</th>
                <th style={{ padding: '22px 24px', fontSize: '0.92rem', color: '#f59e0b', fontWeight: 700 }}>Thermal Bi-Spectrum</th>
                <th style={{ padding: '22px 24px', fontSize: '0.92rem', color: '#34c759', fontWeight: 700 }}>Security Radar + PTZ</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.06)' }}>
                <td style={{ padding: '18px 24px', color: '#ffffff', fontWeight: 600, fontSize: '0.9rem' }}>Detection Distance</td>
                <td style={{ padding: '18px 24px', color: '#94a3b8', fontSize: '0.9rem' }}>&le; 50 meters (up to 100m)</td>
                <td style={{ padding: '18px 24px', color: '#94a3b8', fontSize: '0.9rem' }}>50 – 500 meters</td>
                <td style={{ padding: '18px 24px', color: '#94a3b8', fontSize: '0.9rem' }}>&gt; 500m to 1,500+ meters</td>
              </tr>
              <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.06)' }}>
                <td style={{ padding: '18px 24px', color: '#ffffff', fontWeight: 600, fontSize: '0.9rem' }}>Environmental Resilience</td>
                <td style={{ padding: '18px 24px', color: '#94a3b8', fontSize: '0.9rem' }}>ColorVu / IR supplementary light</td>
                <td style={{ padding: '18px 24px', color: '#34c759', fontWeight: 600, fontSize: '0.9rem' }}>Unaffected by fog, rain, or total black</td>
                <td style={{ padding: '18px 24px', color: '#34c759', fontWeight: 600, fontSize: '0.9rem' }}>Unaffected by blizzards or dust storms</td>
              </tr>
              <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.06)' }}>
                <td style={{ padding: '18px 24px', color: '#ffffff', fontWeight: 600, fontSize: '0.9rem' }}>False Alarm Suppression</td>
                <td style={{ padding: '18px 24px', color: '#94a3b8', fontSize: '0.9rem' }}>AI filters leaves, rain, pets (98%)</td>
                <td style={{ padding: '18px 24px', color: '#94a3b8', fontSize: '0.9rem' }}>Radiometric temperature verification</td>
                <td style={{ padding: '18px 24px', color: '#94a3b8', fontSize: '0.9rem' }}>Microwave Doppler velocity filtering</td>
              </tr>
              <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.06)' }}>
                <td style={{ padding: '18px 24px', color: '#ffffff', fontWeight: 600, fontSize: '0.9rem' }}>Target Classification</td>
                <td style={{ padding: '18px 24px', color: '#94a3b8', fontSize: '0.9rem' }}>Human / Vehicle / Face capture</td>
                <td style={{ padding: '18px 24px', color: '#94a3b8', fontSize: '0.9rem' }}>Human / Vehicle / Heat anomaly</td>
                <td style={{ padding: '18px 24px', color: '#94a3b8', fontSize: '0.9rem' }}>Vector coordinate + 45x PTZ optical</td>
              </tr>
              <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.06)' }}>
                <td style={{ padding: '18px 24px', color: '#ffffff', fontWeight: 600, fontSize: '0.9rem' }}>Active Deterrence</td>
                <td style={{ padding: '18px 24px', color: '#34c759', fontWeight: 600, fontSize: '0.9rem' }}>Strobe light + customized audio siren</td>
                <td style={{ padding: '18px 24px', color: '#34c759', fontWeight: 600, fontSize: '0.9rem' }}>Bi-spectrum acoustic alarm horn</td>
                <td style={{ padding: '18px 24px', color: '#94a3b8', fontSize: '0.9rem' }}>Integrated Long-range horn & strobe</td>
              </tr>
              <tr>
                <td style={{ padding: '18px 24px', color: '#ffffff', fontWeight: 600, fontSize: '0.9rem' }}>Typical Applications</td>
                <td style={{ padding: '18px 24px', color: '#94a3b8', fontSize: '0.9rem' }}>Villas, retail shops, construction yards</td>
                <td style={{ padding: '18px 24px', color: '#94a3b8', fontSize: '0.9rem' }}>Solar PV farms, substations, factories</td>
                <td style={{ padding: '18px 24px', color: '#94a3b8', fontSize: '0.9rem' }}>Airports, seaports, borders, oilfields</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 7. SUCCESS STORIES (Copperleaf Golf & Residential Estate) */}
      <section id="success-stories" style={{ padding: '80px 24px 60px', maxWidth: '1380px', margin: '0 auto', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div style={{ textAlign: 'center', marginBottom: '44px' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 3.2vw, 2.5rem)', fontWeight: 800, margin: '0 0 12px', color: '#ffffff' }}>
            Success stories
          </h2>
          <p style={{ fontSize: '1rem', color: '#94a3b8' }}>
            Proven perimeter protection implementations securing valuable assets worldwide.
          </p>
        </div>

        <div
          style={{
            backgroundColor: '#070f24',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 12px 40px rgba(0, 0, 0, 0.5)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
          onClick={() =>
            setSelectedCaseStudy({
              title: 'Security hole in one: South African golf and residential community protects residents and visitors 24x7 with Coloron',
              date: 'March 10, 2023',
              img: '/images/perimeter-protection/success_story_residential.jpg',
              tags: ['Thermal bi-spectrum', 'DeepinView', 'Perimeter protection', 'Residential estate'],
              content: `Copperleaf Golf & Country Estate, a prestigious residential and championship golf community near Johannesburg, spans hundreds of hectares of open river valleys and wooded boundary lines.

Faced with extensive perimeter fences vulnerable to wildlife interference, dense foliage shadows, and zero-ambient nighttime illumination, the estate management needed an unbreachable perimeter solution.

Coloron deployed an integrated thermal bi-spectrum and DeepinView optical perimeter network:
• 84 thermal bi-spectrum bullet cameras installed along the outer fence line with virtual tripwires
• Deep learning target classification eliminating false alarms caused by birds, antelope, and windblown trees
• Instant acoustic warning strobes activating upon human intrusion attempts
• Centralized command control with automated PTZ optical tracking and patrol dispatch within seconds`
            })
          }
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-4px)';
            e.currentTarget.style.borderColor = 'rgba(0, 210, 255, 0.5)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
          }}
        >
          <div style={{ height: '320px', overflow: 'hidden' }}>
            <img
              src="/images/perimeter-protection/success_story_residential.jpg"
              alt="South African Residential Community"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          <div style={{ padding: '36px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#64748b', fontSize: '0.85rem', marginBottom: '12px' }}>
              <Calendar size={14} /> March 10, 2023
            </div>

            <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#ffffff', lineHeight: 1.35, marginBottom: '14px' }}>
              Security hole in one: South African golf and residential community protects residents and visitors 24x7 with Coloron
            </h3>

            <p style={{ fontSize: '0.92rem', color: '#94a3b8', lineHeight: 1.6, marginBottom: '20px' }}>
              Deploying thermal bi-spectrum cameras and optical AI intrusion tripwires across hundreds of hectares of river and golf estate borders to guarantee round-the-clock safety.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {['Thermal bi-spectrum', 'DeepinView', 'Perimeter protection', 'Residential estate'].map((t, i) => (
                <span
                  key={i}
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    color: '#cbd5e1',
                    padding: '4px 10px',
                    borderRadius: '6px',
                    fontSize: '0.78rem',
                    fontWeight: 500
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. TECHNICAL RESOURCES & DOWNLOADS */}
      <section id="resources" style={{ padding: '70px 24px', maxWidth: '1380px', margin: '0 auto', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <h2 style={{ fontSize: '1.8rem', fontWeight: 800, textAlign: 'center', marginBottom: '36px', color: '#ffffff' }}>
          Related Resources
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '18px'
          }}
        >
          {[
            { title: 'Intelligent Perimeter Protection Brochure', type: 'PDF • 4.8 MB' },
            { title: 'Thermal Bi-Spectrum Perimeter Whitepaper', type: 'PDF • 6.2 MB' },
            { title: 'Security Radar Perimeter Design Guide', type: 'PDF • 8.1 MB' },
            { title: 'AcuSense AI Detection Handbook', type: 'PDF • 3.5 MB' },
            { title: 'Solar-Powered Wireless Solution Guide', type: 'PDF • 2.9 MB' },
            { title: 'HikCentral Enterprise VMS Architecture', type: 'PDF • 5.4 MB' }
          ].map((res, i) => (
            <div
              key={i}
              style={{
                backgroundColor: '#070f24',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '12px',
                padding: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
              onClick={() => setToastMessage(`Downloading ${res.title}...`)}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#00d2ff')}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)')}
            >
              <div>
                <h5 style={{ fontSize: '0.92rem', fontWeight: 600, margin: '0 0 4px', color: '#ffffff' }}>
                  {res.title}
                </h5>
                <span style={{ fontSize: '0.78rem', color: '#64748b' }}>{res.type}</span>
              </div>
              <div style={{ width: '34px', height: '34px', borderRadius: '50%', backgroundColor: 'rgba(255, 255, 255, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Download size={15} color="#00d2ff" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. YOU MAY ALSO BE INTERESTED IN (6 Photographic Scenario Cards) */}
      <section style={{ padding: '80px 24px', maxWidth: '1380px', margin: '0 auto', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <h2 style={{ fontSize: 'clamp(2rem, 3.2vw, 2.5rem)', fontWeight: 800, textAlign: 'center', marginBottom: '44px', color: '#ffffff' }}>
          You may also be interested in
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px'
          }}
        >
          {[
            {
              name: 'Factories',
              route: '/solutions/factories',
              desc: 'Automated campus security, production line monitoring, and worker safety.',
              img: '/images/scenarios/warehouses.jpg'
            },
            {
              name: 'Solar Farms',
              route: '/solutions/solar-farms',
              desc: 'Remote photovoltaic panel thermal hot spot patrol and wide-boundary defense.',
              img: '/images/industry_energy.jpg'
            },
            {
              name: 'Transmission Lines',
              route: '/solutions/transmission-line-inspection',
              desc: 'Tower intrusion monitoring and automated high-voltage line inspection.',
              img: '/images/scenarios/transmission_line_inspection.jpg'
            },
            {
              name: 'Highways',
              route: '/solutions/highways',
              desc: 'Toll plaza ANPR, traffic incident alerts, and expressway gantry surveillance.',
              img: '/images/scenarios/highways.jpg'
            },
            {
              name: 'Hydroelectric Power Plants',
              route: '/solutions/hydroelectric-power-plants',
              desc: 'Dam crest security, water discharge monitoring, and substation protection.',
              img: '/images/industry_commercial.jpg'
            },
            {
              name: 'Onshore Oilfields',
              route: '/solutions/onshore-oilfields',
              desc: 'Explosion-proof cameras, wellhead perimeter fences, and tank farm thermal monitoring.',
              img: '/images/scenarios/onshore_oilfields.jpg'
            }
          ].map((item, idx) => (
            <Link
              key={idx}
              to={item.route}
              style={{
                textDecoration: 'none',
                backgroundColor: '#070f24',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '16px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.25s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = 'rgba(0, 210, 255, 0.6)';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 210, 255, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{ height: '170px', overflow: 'hidden' }}>
                <img
                  src={item.img}
                  alt={item.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#ffffff', margin: '0 0 8px' }}>
                    {item.name}
                  </h4>
                  <p style={{ fontSize: '0.86rem', color: '#94a3b8', lineHeight: 1.5, margin: 0 }}>
                    {item.desc}
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#00d2ff', fontWeight: 600, fontSize: '0.85rem', marginTop: '16px' }}>
                  Learn more <ArrowRight size={14} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 10. "READY TO DISCUSS YOUR NEEDS?" BOTTOM CTA (Exact Match to Illustration Layout in Screenshot) */}
      <section
        style={{
          padding: '80px 24px',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          backgroundColor: '#040816'
        }}
      >
        <div
          style={{
            maxWidth: '1100px',
            margin: '0 auto',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '40px'
          }}
        >
          {/* Left Text & CTA */}
          <div style={{ flex: '1 1 500px' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 3.2vw, 2.5rem)', fontWeight: 800, margin: '0 0 16px', color: '#ffffff' }}>
              Ready to discuss your needs?
            </h2>
            <p style={{ fontSize: '1.02rem', color: '#94a3b8', margin: '0 0 32px', lineHeight: 1.6 }}>
              Get in touch with our certified perimeter protection engineers to configure the optimal security architecture for your facility.
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <button
                onClick={() => setShowContactModal(true)}
                style={{
                  backgroundColor: '#d70015',
                  color: '#ffffff',
                  border: 'none',
                  padding: '13px 32px',
                  borderRadius: '4px',
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  boxShadow: '0 4px 18px rgba(215, 0, 21, 0.4)',
                  transition: 'all 0.2s',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#b50012')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#d70015')}
              >
                <span>CONTACT AN EXPERT</span>
                <ArrowRight size={16} />
              </button>

              <button
                onClick={() => setShowContactModal(true)}
                style={{
                  backgroundColor: '#d70015',
                  color: '#ffffff',
                  border: 'none',
                  padding: '13px 32px',
                  borderRadius: '4px',
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  boxShadow: '0 4px 18px rgba(215, 0, 21, 0.4)',
                  transition: 'all 0.2s',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#b50012')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#d70015')}
              >
                <span>HOW TO BUY</span>
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* Right Vector Illustration Graphic matching screenshot */}
          <div
            style={{
              flex: '0 1 380px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <div
              style={{
                width: '320px',
                height: '240px',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {/* Clean SVG Tech Expert at Desk matching Hikvision's illustration in screenshot */}
              <svg width="280" height="220" viewBox="0 0 280 220" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Desk and Floor Base */}
                <rect x="20" y="190" width="240" height="6" rx="3" fill="#1e293b" />
                <rect x="50" y="150" width="160" height="6" rx="2" fill="#334155" />
                <rect x="65" y="156" width="6" height="34" fill="#1e293b" />
                <rect x="189" y="156" width="6" height="34" fill="#1e293b" />
                
                {/* Plant on Left */}
                <path d="M40 190 Q30 160 42 140 Q46 160 40 190 Z" fill="#059669" />
                <path d="M40 190 Q50 165 46 145 Q42 165 40 190 Z" fill="#10b981" />
                <path d="M35 190 Q22 170 30 155 Q35 170 35 190 Z" fill="#047857" />

                {/* Laptop on Desk */}
                <rect x="130" y="132" width="40" height="24" rx="2" fill="#64748b" />
                <rect x="133" y="135" width="34" height="18" rx="1" fill="#00d2ff" fillOpacity="0.8" />
                <polygon points="120,154 180,154 175,150 125,150" fill="#94a3b8" />

                {/* Person Silhouette working */}
                {/* Chair */}
                <rect x="85" y="145" width="35" height="6" rx="2" fill="#d70015" />
                <rect x="85" y="115" width="6" height="36" rx="2" fill="#d70015" />
                <rect x="99" y="151" width="6" height="39" rx="1" fill="#475569" />
                
                {/* Person Head */}
                <circle cx="106" cy="94" r="12" fill="#ffffff" />
                {/* Hair */}
                <path d="M96 90 Q106 78 116 86 Q118 94 114 96 Q108 90 98 94 Z" fill="#1e293b" />
                {/* Glasses / Headset */}
                <path d="M102 94 L114 94" stroke="#d70015" strokeWidth="2" strokeLinecap="round" />
                <circle cx="102" cy="94" r="3" fill="#d70015" />

                {/* Person Body */}
                <path d="M96 110 Q106 108 118 110 L114 148 L96 148 Z" fill="#ffffff" />
                {/* Arms typing on laptop */}
                <path d="M114 116 Q130 128 138 142" stroke="#ffffff" strokeWidth="6" strokeLinecap="round" />
                <path d="M100 118 Q118 132 132 144" stroke="#e2e8f0" strokeWidth="5" strokeLinecap="round" />
                
                {/* Person Legs */}
                <rect x="98" y="148" width="10" height="28" rx="3" fill="#1e293b" />
                <rect x="108" y="148" width="10" height="26" rx="3" fill="#334155" />

                {/* Floating Tech Gears & Chat Bubble */}
                <circle cx="80" cy="80" r="10" stroke="#64748b" strokeWidth="3" strokeDasharray="4 4" />
                <circle cx="70" cy="100" r="6" stroke="#475569" strokeWidth="2" strokeDasharray="3 3" />

                <path d="M160 85 Q160 70 185 70 Q210 70 210 85 Q210 98 195 98 L185 106 L187 98 Q160 98 160 85 Z" fill="#334155" />
                <circle cx="178" cy="84" r="2.5" fill="#00d2ff" />
                <circle cx="185" cy="84" r="2.5" fill="#00d2ff" />
                <circle cx="192" cy="84" r="2.5" fill="#00d2ff" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      {lightboxImg && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.94)',
            backdropFilter: 'blur(16px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 99999,
            padding: '24px'
          }}
          onClick={() => setLightboxImg(null)}
        >
          <div style={{ position: 'relative', maxWidth: '92vw', maxHeight: '92vh' }}>
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
              alt="Zoomed Graphic"
              style={{
                maxWidth: '92vw',
                maxHeight: '88vh',
                borderRadius: '12px',
                boxShadow: '0 20px 50px rgba(0,0,0,0.8)',
                display: 'block'
              }}
            />
          </div>
        </div>
      )}

      {/* CASE STUDY MODAL */}
      {selectedCaseStudy && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.88)',
            backdropFilter: 'blur(12px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 99999,
            padding: '24px'
          }}
          onClick={() => setSelectedCaseStudy(null)}
        >
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '780px',
              backgroundColor: '#070f24',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.7)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              maxHeight: '90vh',
              overflowY: 'auto'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ height: '280px', position: 'relative' }}>
              <img
                src={selectedCaseStudy.img}
                alt={selectedCaseStudy.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <button
                onClick={() => setSelectedCaseStudy(null)}
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  backgroundColor: 'rgba(0,0,0,0.6)',
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

            <div style={{ padding: '36px' }}>
              <div style={{ fontSize: '0.85rem', color: '#64748b', marginBottom: '8px' }}>
                {selectedCaseStudy.date}
              </div>
              <h3 style={{ fontSize: '1.45rem', fontWeight: 700, color: '#ffffff', marginBottom: '18px' }}>
                {selectedCaseStudy.title}
              </h3>
              <div style={{ whiteSpace: 'pre-line', fontSize: '0.94rem', lineHeight: 1.65, color: '#cbd5e1' }}>
                {selectedCaseStudy.content}
              </div>

              <div style={{ marginTop: '28px', paddingTop: '20px', borderTop: '1px solid rgba(255, 255, 255, 0.1)', display: 'flex', justifyContent: 'flex-end' }}>
                <button
                  onClick={() => {
                    setSelectedCaseStudy(null);
                    setShowContactModal(true);
                  }}
                  style={{
                    backgroundColor: '#d70015',
                    color: '#ffffff',
                    border: 'none',
                    padding: '10px 24px',
                    borderRadius: '6px',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  Request Full Case Study PDF
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CONTACT SALES MODAL */}
      {showContactModal && (
        <ContactSalesModal
          isOpen={showContactModal}
          onClose={() => setShowContactModal(false)}
        />
      )}
    </div>
  );
}
