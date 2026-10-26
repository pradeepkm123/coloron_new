import React, { useState, useEffect, useRef } from 'react';
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
  Play,
  Pause,
  Volume2,
  VolumeX,
  AlertTriangle,
  Download,
  FileText,
  Sliders,
  ExternalLink
} from 'lucide-react';
import ContactSalesModal from '../components/ContactSalesModal';

// Dedicated Interactive Video Scenario Card with Incident Alert HUD
function ScenarioVideoCard({ sc, onOpenModal }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch((err) => {
            console.log('Autoplay handled:', err);
            setIsPlaying(false);
          });
      }
    }
  }, [sc.video]);

  const togglePlay = (e) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const isAlert = sc.telemetry?.isAlert;

  return (
    <div
      style={{
        position: 'relative',
        height: '300px',
        borderRadius: '18px',
        overflow: 'hidden',
        cursor: 'pointer',
        backgroundColor: '#0a192f',
        boxShadow: isAlert
          ? '0 10px 30px rgba(239, 68, 68, 0.25)'
          : '0 8px 24px rgba(0, 0, 0, 0.12)',
        border: isAlert
          ? '1.5px solid rgba(239, 68, 68, 0.45)'
          : '1px solid rgba(255, 255, 255, 0.12)',
        transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease'
      }}
      onMouseEnter={(e) => {
        setIsHovered(true);
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = isAlert
          ? '0 16px 36px rgba(239, 68, 68, 0.35)'
          : '0 16px 36px rgba(0, 113, 227, 0.22)';
      }}
      onMouseLeave={(e) => {
        setIsHovered(false);
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = isAlert
          ? '0 10px 30px rgba(239, 68, 68, 0.25)'
          : '0 8px 24px rgba(0, 0, 0, 0.12)';
      }}
      onClick={() => onOpenModal(sc)}
    >
      {/* Video Element */}
      <video
        ref={videoRef}
        src={sc.video}
        poster={sc.img}
        autoPlay
        muted={isMuted}
        playsInline
        loop
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block'
        }}
      />

      {/* Vignette Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0) 40%, rgba(0,0,0,0.75) 100%)',
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
            backgroundColor: isAlert ? '#ff3b30' : '#34c759',
            boxShadow: isAlert ? '0 0 8px #ff3b30' : '0 0 8px #34c759',
            display: 'inline-block'
          }}
        />
        <span style={{ fontSize: '0.74rem', color: '#ffffff', fontWeight: 600, letterSpacing: '0.04em' }}>
          {isAlert ? 'INCIDENT DETECTED' : 'AI PATROL LIVE'}
        </span>
      </div>

      {/* Top Right: Expand Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onOpenModal(sc);
        }}
        title="Open Fullscreen Video"
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

      {/* Center Hover Play/Pause & Mute Bar */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          opacity: isHovered ? 1 : 0,
          transition: 'opacity 0.25s ease',
          zIndex: 3
        }}
      >
        <button
          onClick={togglePlay}
          title={isPlaying ? 'Pause Video' : 'Play Video'}
          style={{
            backgroundColor: 'rgba(0, 113, 227, 0.88)',
            border: 'none',
            color: '#ffffff',
            borderRadius: '50%',
            width: '48px',
            height: '48px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 6px 20px rgba(0, 113, 227, 0.45)',
            transition: 'transform 0.2s'
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          {isPlaying ? <Pause size={22} /> : <Play size={22} style={{ marginLeft: '2px' }} />}
        </button>

        <button
          onClick={toggleMute}
          title={isMuted ? 'Unmute Audio' : 'Mute Audio'}
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            border: '1px solid rgba(255, 255, 255, 0.35)',
            color: '#ffffff',
            borderRadius: '50%',
            width: '42px',
            height: '42px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 4px 16px rgba(0,0,0,0.4)',
            transition: 'transform 0.2s'
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          {isMuted ? <VolumeX size={17} /> : <Volume2 size={17} />}
        </button>
      </div>

      {/* Bottom Left: Location Badge */}
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

      {/* Bottom Right: Authentic Incident Telemetry HUD */}
      <div
        style={{
          position: 'absolute',
          bottom: '16px',
          right: '16px',
          backgroundColor: isAlert ? 'rgba(35, 10, 15, 0.92)' : 'rgba(12, 24, 44, 0.88)',
          backdropFilter: 'blur(12px)',
          border: isAlert ? '1px solid rgba(255, 69, 58, 0.5)' : '1px solid rgba(255, 255, 255, 0.22)',
          borderRadius: '10px',
          padding: '8px 14px',
          color: '#ffffff',
          fontSize: '0.8rem',
          lineHeight: 1.4,
          boxShadow: '0 4px 14px rgba(0,0,0,0.4)',
          zIndex: 2,
          minWidth: '160px'
        }}
      >
        <div
          style={{
            color: isAlert ? '#ff453a' : '#34c759',
            fontSize: '0.72rem',
            fontWeight: 700,
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
            marginBottom: '3px',
            borderBottom: isAlert ? '1px dashed rgba(255, 69, 58, 0.4)' : '1px solid rgba(255,255,255,0.1)',
            paddingBottom: '3px',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}
        >
          {isAlert && <AlertTriangle size={12} color="#ff453a" />}
          {sc.telemetry?.event || 'Normal Flow'}
        </div>
        <div style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '0.72rem' }}>
          Lane: <strong style={{ color: '#ffffff' }}>{sc.telemetry?.lane || 'Lane 01'}</strong>
        </div>
        <div style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '0.72rem' }}>
          Speed: <strong style={{ color: isAlert ? '#ff9500' : '#34c759' }}>{sc.telemetry?.speed || '80 km/h'}</strong>
        </div>
      </div>
    </div>
  );
}

export default function IncidentDetectionSolution() {
  const [activeTab, setActiveTab] = useState('incident');
  const [lightboxImg, setLightboxImg] = useState(null);
  const [activeVideoModal, setActiveVideoModal] = useState(null);
  const [showContactModal, setShowContactModal] = useState(false);
  const [contactSubject, setContactSubject] = useState('Traffic Incident Detection Solution');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);
  const [expandedCategories, setExpandedCategories] = useState({
    'cat-servers': true,
    'cat-cameras': false,
    'cat-allinone': true
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

  const handleOpenContact = (subject = 'Traffic Incident Detection Solution') => {
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

  // Recommended Solution Data
  const solutionData = {
    incident: {
      id: 'incident',
      name: 'Traffic incident detection',
      bullets: [
        'Detects a wide variety of traffic incidents and abnormal road situations including stopped vehicles, wrong-way driving, pedestrians, congestion, falling objects, and smoke/fire',
        'Reduces accident rates and clears traffic congestion quickly by alerting the traffic control center in real time',
        'Deep learning algorithm with high accuracy and low false alarm rate even in complex lighting, weather, and reflections',
        'Provides clear video and forensic snapshots with timestamps, lane identification, and incident classification'
      ],
      scenarios: [
        {
          title: 'Tunnels',
          img: '/images/speed-measurement/portablespeed1.jpg',
          video: '/images/speed-measurement/video-tunnel-incident.mp4',
          telemetry: {
            event: 'STOPPED VEHICLE DETECTED',
            lane: 'Lane 02 (Subterranean)',
            speed: '0 km/h (Stationary Hazard)',
            isAlert: true
          }
        },
        {
          title: 'Highways',
          img: '/images/speed-measurement/highway.jpg',
          video: '/images/incident-detection/video-highway-incident.mp4',
          telemetry: {
            event: 'HIGHWAY MULTI-LANE PATROL',
            lane: 'Gore Area / Open Expressway',
            speed: '105 km/h',
            isAlert: false
          }
        }
      ]
    }
  };

  // Architectures
  const architectures = [
    {
      id: 'arch-servers',
      title: 'Solution with traffic incident detection servers',
      topoImg: '/images/incident-detection/topo_servers.jpg',
      categories: [
        {
          id: 'cat-servers',
          title: 'Traffic incident detection servers',
          items: [
            {
              name: 'Coloron 64-Channel Traffic Incident Detection Server',
              model: 'CLR-TIDS-6400',
              desc: 'High-density GPU-accelerated server running deep learning algorithms to concurrently analyze 64 channels of real-time 4K video feeds. Instantly identifies 12 types of highway and tunnel incidents within 0.5 seconds.',
              badge: 'Enterprise Flagship'
            },
            {
              name: 'Coloron Edge Incident Analysis Processor',
              model: 'CLR-EIAP-1600',
              desc: 'Industrial fanless edge computing unit designed for roadside cabinet deployment. Analyzes up to 16 video channels with localized alarm output and dry contact relay triggering.',
              badge: 'Edge AI'
            }
          ]
        },
        {
          id: 'cat-cameras',
          title: 'Dedicated traffic cameras',
          items: [
            {
              name: 'Coloron 4K DeepinView Starlight Traffic Camera',
              model: 'CLR-TDS-4K80',
              desc: '1/1.2" progressive scan starlight CMOS, 0.0005 Lux ultra-low light sensitivity, built-in defog and anti-shake algorithms for vibrating gantry and bridge installations.',
              badge: 'Starlight 4K'
            },
            {
              name: 'Coloron Anti-Corrosion Tunnel Dome Camera',
              model: 'CLR-TDM-316L',
              desc: '316L stainless steel enclosure with IP68 and IK10 ratings, specifically engineered to withstand acidic exhaust fumes, tunnel washing jets, and severe humidity.',
              badge: 'IP68 / 316L'
            }
          ]
        }
      ]
    },
    {
      id: 'arch-allinone',
      title: 'Solution with all-rounder incident detection cameras',
      topoImg: '/images/incident-detection/topo_allinone.jpg',
      categories: [
        {
          id: 'cat-allinone',
          title: 'All-rounder incident detection cameras',
          items: [
            {
              name: 'Coloron All-in-One AI Traffic Incident Camera',
              model: 'CLR-AIC-800',
              desc: 'Integrates 4K optical sensor, edge neural network processor, motorized zoom lens, and supplementary infrared array into a single compact housing. Eliminates the need for external incident analysis servers.',
              badge: 'All-in-One AI'
            },
            {
              name: 'Coloron Panoramic Multi-Sensor Highway Gantry Camera',
              model: 'CLR-PMG-400',
              desc: 'Combines 180-degree panoramic stitched video with a 40x high-speed PTZ tracking dome for seamless wide-area surveillance and instant incident zoom verification.',
              badge: '180° Panoramic'
            }
          ]
        }
      ]
    }
  ];

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

      {/* 1. HERO BANNER - Exact Match with Circular Arc Overlay & Tunnel Highway Approach */}
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
        {/* Background Image: Tunnel Portal Approach with Patrol Vehicle */}
        <img
          src="/images/incident-detection/hero_banner.jpg"
          alt="Highway Tunnel Incident Detection"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 40%'
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

          {/* Main Title: Incident Detection */}
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
            Incident Detection
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
              onClick={() => scrollToSection('recommended-solution')}
              style={{
                background: 'none',
                border: 'none',
                fontSize: '0.88rem',
                fontWeight: 600,
                color: '#0071e3',
                cursor: 'pointer',
                padding: '6px 0',
                borderBottom: '2px solid #0071e3'
              }}
            >
              Traffic incident detection
            </button>
            <button
              onClick={() => scrollToSection('related-products')}
              style={{
                background: 'none',
                border: 'none',
                fontSize: '0.88rem',
                fontWeight: 500,
                color: '#6e6e73',
                cursor: 'pointer',
                padding: '6px 0'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#1d1d1f')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#6e6e73')}
            >
              Related Products
            </button>
            <button
              onClick={() => scrollToSection('success-stories')}
              style={{
                background: 'none',
                border: 'none',
                fontSize: '0.88rem',
                fontWeight: 500,
                color: '#6e6e73',
                cursor: 'pointer',
                padding: '6px 0'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#1d1d1f')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#6e6e73')}
            >
              Success Stories
            </button>
            <button
              onClick={() => scrollToSection('related-resources')}
              style={{
                background: 'none',
                border: 'none',
                fontSize: '0.88rem',
                fontWeight: 500,
                color: '#6e6e73',
                cursor: 'pointer',
                padding: '6px 0'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#1d1d1f')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#6e6e73')}
            >
              Resources
            </button>
            <button
              onClick={() => scrollToSection('interested-in')}
              style={{
                background: 'none',
                border: 'none',
                fontSize: '0.88rem',
                fontWeight: 500,
                color: '#6e6e73',
                cursor: 'pointer',
                padding: '6px 0'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#1d1d1f')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#6e6e73')}
            >
              You may also be interested in
            </button>
          </div>

          <button
            onClick={() => handleOpenContact('Inquiry: Traffic Incident Detection Solution')}
            style={{
              backgroundColor: '#0071e3',
              color: '#ffffff',
              border: 'none',
              borderRadius: '9999px',
              padding: '7px 18px',
              fontSize: '0.82rem',
              fontWeight: 600,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              flexShrink: 0,
              transition: 'background-color 0.2s'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#0077ed')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#0071e3')}
          >
            <PhoneCall size={13} />
            Ask about solutions
          </button>
        </div>
      </nav>

      {/* 3. WHAT WE OFFER SECTION */}
      <section style={{ padding: '64px 24px 48px', maxWidth: '1080px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.4rem', fontWeight: 800, color: '#1d1d1f', marginBottom: '16px' }}>
          What we offer
        </h2>
        <p style={{ fontSize: '1.05rem', color: '#6e6e73', lineHeight: 1.6, maxWidth: '820px', margin: '0 auto 40px' }}>
          Quickly detects various traffic incidents and illegal events on highways, bridges, tunnels and urban roads, so as to improve operational efficiency and safety, while lowering the accident rate.
        </p>

        {/* 3D Icon Card */}
        <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center' }}>
          <div
            style={{
              width: '120px',
              height: '120px',
              borderRadius: '24px',
              overflow: 'hidden',
              backgroundColor: '#f5f5f7',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.06)',
              marginBottom: '14px',
              transition: 'transform 0.3s ease'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-4px)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
          >
            <img
              src="/images/incident-detection/offer_icon.jpg"
              alt="Traffic incident detection"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <span style={{ fontSize: '0.94rem', fontWeight: 600, color: '#1d1d1f' }}>
            Traffic incident detection
          </span>
        </div>
      </section>

      {/* 4. RECOMMENDED SOLUTION SECTION */}
      <section id="recommended-solution" style={{ padding: '48px 24px 80px', maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#1d1d1f', marginBottom: '24px' }}>
            Recommended solution
          </h2>

          {/* Tab Button (Matching Screenshot Pill) */}
          <div style={{ display: 'inline-flex', backgroundColor: '#f2f2f7', padding: '5px', borderRadius: '9999px' }}>
            <button
              onClick={() => setActiveTab('incident')}
              style={{
                backgroundColor: activeTab === 'incident' ? '#0071e3' : 'transparent',
                color: activeTab === 'incident' ? '#ffffff' : '#48484a',
                border: 'none',
                padding: '10px 24px',
                borderRadius: '9999px',
                fontSize: '0.92rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: activeTab === 'incident' ? '0 4px 12px rgba(0, 113, 227, 0.3)' : 'none'
              }}
            >
              Traffic incident detection
            </button>
          </div>
        </div>

        {/* Tab Description & Bullets */}
        <div
          style={{
            backgroundColor: '#fbfbfd',
            borderRadius: '24px',
            padding: '36px 40px',
            border: '1px solid #f0f0f4',
            marginBottom: '40px'
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {currentTab.bullets.map((bullet, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <CheckCircle2 size={20} color="#0071e3" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ fontSize: '0.94rem', color: '#3a3a3c', lineHeight: 1.55 }}>
                  {bullet}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 2 Scenario Interactive Video Cards (Tunnels & Highways) */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(420px, 1fr))', gap: '24px', marginBottom: '60px' }}>
          {currentTab.scenarios.map((sc, idx) => (
            <ScenarioVideoCard
              key={idx}
              sc={sc}
              onOpenModal={(data) => setActiveVideoModal(data)}
            />
          ))}
        </div>

        {/* 5. ARCHITECTURES & HARDWARE ACCORDIONS */}
        <div id="related-products">
          {architectures.map((arch, archIdx) => (
            <div
              key={arch.id}
              style={{
                marginBottom: '64px',
                backgroundColor: '#ffffff',
                borderRadius: '24px',
                border: '1px solid #e5e5ea',
                padding: '36px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)'
              }}
            >
              <h3 style={{ fontSize: '1.45rem', fontWeight: 700, color: '#1d1d1f', marginBottom: '28px' }}>
                {arch.title}
              </h3>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
                  gap: '36px',
                  alignItems: 'start'
                }}
              >
                {/* Left: System Topology Diagram */}
                <div
                  style={{
                    backgroundColor: '#fbfbfd',
                    borderRadius: '16px',
                    border: '1px solid #e5e5ea',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    position: 'relative'
                  }}
                  onClick={() => setLightboxImg({ src: arch.topoImg, title: arch.title })}
                >
                  <img
                    src={arch.topoImg}
                    alt={arch.title}
                    style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'contain' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '12px',
                      right: '12px',
                      backgroundColor: 'rgba(0, 0, 0, 0.65)',
                      color: '#ffffff',
                      borderRadius: '8px',
                      padding: '4px 10px',
                      fontSize: '0.74rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      backdropFilter: 'blur(6px)'
                    }}
                  >
                    <Maximize2 size={12} />
                    Click to enlarge
                  </div>
                </div>

                {/* Right: Product Categories Accordions */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {arch.categories.map((cat) => {
                    const isOpen = expandedCategories[cat.id] ?? false;
                    return (
                      <div
                        key={cat.id}
                        style={{
                          border: '1px solid #e5e5ea',
                          borderRadius: '14px',
                          overflow: 'hidden',
                          backgroundColor: '#fbfbfd',
                          transition: 'border-color 0.2s'
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
                            backgroundColor: isOpen ? '#f2f2f7' : '#fbfbfd',
                            border: 'none',
                            cursor: 'pointer',
                            fontSize: '0.98rem',
                            fontWeight: 600,
                            color: '#1d1d1f',
                            textAlign: 'left'
                          }}
                        >
                          <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <Server size={18} color="#0071e3" />
                            {cat.title}
                          </span>
                          <span style={{ color: '#0071e3', fontWeight: 'bold' }}>
                            {isOpen ? '−' : '+'}
                          </span>
                        </button>

                        {isOpen && (
                          <div style={{ padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: '14px', backgroundColor: '#ffffff' }}>
                            {cat.items.map((prod, prodIdx) => (
                              <div
                                key={prodIdx}
                                style={{
                                  border: '1px solid #f0f0f4',
                                  borderRadius: '12px',
                                  padding: '16px',
                                  backgroundColor: '#ffffff',
                                  boxShadow: '0 2px 8px rgba(0,0,0,0.02)'
                                }}
                              >
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                                  <span style={{ fontSize: '0.96rem', fontWeight: 700, color: '#1d1d1f' }}>
                                    {prod.name}
                                  </span>
                                  <span
                                    style={{
                                      backgroundColor: 'rgba(0, 113, 227, 0.1)',
                                      color: '#0071e3',
                                      padding: '3px 8px',
                                      borderRadius: '6px',
                                      fontSize: '0.72rem',
                                      fontWeight: 600
                                    }}
                                  >
                                    {prod.badge}
                                  </span>
                                </div>
                                <div style={{ fontSize: '0.78rem', color: '#86868b', fontFamily: 'monospace', marginBottom: '8px' }}>
                                  Model: {prod.model}
                                </div>
                                <p style={{ fontSize: '0.85rem', color: '#6e6e73', lineHeight: 1.5, margin: '0 0 12px' }}>
                                  {prod.desc}
                                </p>
                                <button
                                  onClick={() => handleOpenContact(`Inquiry regarding ${prod.name} (${prod.model})`)}
                                  style={{
                                    backgroundColor: 'transparent',
                                    border: 'none',
                                    color: '#0071e3',
                                    fontSize: '0.82rem',
                                    fontWeight: 600,
                                    padding: 0,
                                    cursor: 'pointer',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '4px'
                                  }}
                                >
                                  Inquire about this product <ArrowRight size={13} />
                                </button>
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
      </section>

      {/* 6. SUCCESS STORIES SECTION */}
      <section id="success-stories" style={{ padding: '60px 24px', backgroundColor: '#f5f5f7' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.4rem', fontWeight: 800, color: '#1d1d1f', textAlign: 'center', marginBottom: '40px' }}>
            Success stories
          </h2>

          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
              alignItems: 'center',
              border: '1px solid #e5e5ea'
            }}
          >
            {/* Left Image */}
            <div style={{ height: '360px', overflow: 'hidden' }}>
              <img
                src="/images/incident-detection/success_story.jpg"
                alt="Spanish municipality traffic management"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            {/* Right Content */}
            <div style={{ padding: '40px 48px' }}>
              <span
                style={{
                  backgroundColor: 'rgba(0, 113, 227, 0.1)',
                  color: '#0071e3',
                  padding: '4px 12px',
                  borderRadius: '9999px',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  display: 'inline-block',
                  marginBottom: '14px'
                }}
              >
                Municipal Traffic Case Study
              </span>

              <h3 style={{ fontSize: '1.45rem', fontWeight: 700, color: '#1d1d1f', lineHeight: 1.3, marginBottom: '14px' }}>
                Spanish municipality optimizes traffic management and public safety with Coloron smart city solution
              </h3>

              <p style={{ fontSize: '0.94rem', color: '#6e6e73', lineHeight: 1.6, marginBottom: '24px' }}>
                The Department of Mobility and Transportation in a major Spanish metropolitan area integrated Coloron AI incident detection servers and edge traffic cameras across 14 high-volume arterial roadways and two subterranean tunnel passes. The automated system detects stalled vehicles and roadway debris in less than 3 seconds, cutting emergency response dispatch times by 46% and reducing secondary tunnel collisions to zero over an 18-month audit period.
              </p>

              <button
                onClick={() => setSelectedCaseStudy(true)}
                style={{
                  backgroundColor: '#0071e3',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '9999px',
                  padding: '10px 22px',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  transition: 'background-color 0.2s'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#0077ed')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#0071e3')}
              >
                View case study <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. RELATED RESOURCES SECTION */}
      <section id="related-resources" style={{ padding: '60px 24px', maxWidth: '1080px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#1d1d1f', marginBottom: '36px' }}>
          Related Resources
        </h2>

        <div style={{ display: 'inline-flex', width: '100%', maxWidth: '640px' }}>
          <div
            style={{
              width: '100%',
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              border: '1px solid #e5e5ea',
              padding: '24px 28px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              boxShadow: '0 4px 16px rgba(0,0,0,0.03)',
              cursor: 'pointer',
              transition: 'border-color 0.2s, transform 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#0071e3';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#e5e5ea';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
            onClick={() => {
              setToastMessage('Downloading Coloron Traffic Incident Detection PDF Brochure...');
              setTimeout(() => {
                handleOpenContact('Download: Traffic Incident Detection Solution Brochure');
              }, 800);
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', textAlign: 'left' }}>
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(239, 68, 68, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ef4444'
                }}
              >
                <FileText size={24} />
              </div>
              <div>
                <div style={{ fontSize: '0.98rem', fontWeight: 700, color: '#1d1d1f', marginBottom: '4px' }}>
                  Coloron Traffic Incident Detection Solution Brochure
                </div>
                <div style={{ fontSize: '0.8rem', color: '#86868b' }}>
                  PDF · 4.8 MB · Technical Architecture & Hardware Specifications
                </div>
              </div>
            </div>

            <Download size={20} color="#0071e3" />
          </div>
        </div>
      </section>

      {/* 8. YOU MAY ALSO BE INTERESTED IN SECTION */}
      <section id="interested-in" style={{ padding: '60px 24px', backgroundColor: '#fbfbfd' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#1d1d1f', textAlign: 'center', marginBottom: '40px' }}>
            You may also be interested in
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
            {/* Card 1: Urban Roadways */}
            <Link
              to="/solutions/urban-roadways"
              style={{
                textDecoration: 'none',
                position: 'relative',
                height: '240px',
                borderRadius: '18px',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'flex-end',
                padding: '24px',
                color: '#ffffff',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
                transition: 'transform 0.3s ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-4px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              <img
                src="/images/urban/rel-highways.jpg"
                alt="Urban Roadways"
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 30%, rgba(0,0,0,0.85) 100%)' }} />
              <div style={{ position: 'relative', zIndex: 2 }}>
                <h4 style={{ fontSize: '1.25rem', fontWeight: 700, margin: '0 0 6px' }}>Urban Roadways</h4>
                <p style={{ fontSize: '0.84rem', color: 'rgba(255,255,255,0.8)', margin: 0 }}>
                  Intelligent intersection surveillance and signal-optimized traffic flow.
                </p>
              </div>
            </Link>

            {/* Card 2: Highways */}
            <Link
              to="/solutions/highways"
              style={{
                textDecoration: 'none',
                position: 'relative',
                height: '240px',
                borderRadius: '18px',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'flex-end',
                padding: '24px',
                color: '#ffffff',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
                transition: 'transform 0.3s ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-4px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              <img
                src="/images/highways/highways_hero.jpg"
                alt="Highways"
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 30%, rgba(0,0,0,0.85) 100%)' }} />
              <div style={{ position: 'relative', zIndex: 2 }}>
                <h4 style={{ fontSize: '1.25rem', fontWeight: 700, margin: '0 0 6px' }}>Highways</h4>
                <p style={{ fontSize: '0.84rem', color: 'rgba(255,255,255,0.8)', margin: 0 }}>
                  Comprehensive corridor management, tolling, and long-range incident tracking.
                </p>
              </div>
            </Link>

            {/* Card 3: Speed Measurement */}
            <Link
              to="/solutions/speed-measurement"
              style={{
                textDecoration: 'none',
                position: 'relative',
                height: '240px',
                borderRadius: '18px',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'flex-end',
                padding: '24px',
                color: '#ffffff',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
                transition: 'transform 0.3s ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-4px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              <img
                src="/images/speed-measurement/related-traffic.jpg"
                alt="Speed Measurement"
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 30%, rgba(0,0,0,0.85) 100%)' }} />
              <div style={{ position: 'relative', zIndex: 2 }}>
                <h4 style={{ fontSize: '1.25rem', fontWeight: 700, margin: '0 0 6px' }}>Speed Measurement</h4>
                <p style={{ fontSize: '0.84rem', color: 'rgba(255,255,255,0.8)', margin: 0 }}>
                  Radar-video fusion checkpoint and average segment speed enforcement.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 9. READY TO DISCUSS YOUR NEEDS SECTION (CTA Banner with Illustration) */}
      <section style={{ padding: '80px 24px', backgroundColor: '#ffffff' }}>
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            borderRadius: '28px',
            border: '1px solid #e5e5ea',
            backgroundColor: '#fafafc',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            alignItems: 'center',
            overflow: 'hidden',
            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.04)'
          }}
        >
          {/* Left Text & CTA Buttons */}
          <div style={{ padding: '60px 48px' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#1d1d1f', marginBottom: '18px', lineHeight: 1.2 }}>
              Ready to discuss your needs?
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#6e6e73', lineHeight: 1.6, marginBottom: '32px', maxWidth: '480px' }}>
              Connect with our intelligent transportation specialists to receive a customized system layout, lens optical calculation, and server dimensioning for your road or tunnel network.
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <button
                onClick={() => handleOpenContact('Consultation Request: Traffic Incident Detection')}
                style={{
                  backgroundColor: '#e60012',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '9999px',
                  padding: '13px 28px',
                  fontSize: '0.94rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  boxShadow: '0 4px 14px rgba(230, 0, 18, 0.3)',
                  transition: 'background-color 0.2s'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#cc0010')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#e60012')}
              >
                Contact Coloron Sales
              </button>

              <button
                onClick={() => {
                  setToastMessage('Initiating solution package download...');
                  setTimeout(() => {
                    handleOpenContact('Download Solution Package');
                  }, 800);
                }}
                style={{
                  backgroundColor: '#ffffff',
                  color: '#1d1d1f',
                  border: '1px solid #d2d2d7',
                  borderRadius: '9999px',
                  padding: '13px 26px',
                  fontSize: '0.94rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'border-color 0.2s'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#1d1d1f')}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#d2d2d7')}
              >
                Download Solution
              </button>
            </div>
          </div>

          {/* Right Illustration (Matching Screenshot) */}
          <div
            style={{
              height: '360px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#ffffff',
              padding: '24px'
            }}
          >
            <img
              src="/images/speed-measurement/contact-banner-illustration.jpg"
              alt="Ready to discuss your needs"
              style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}
            />
          </div>
        </div>
      </section>

      {/* FULLSCREEN VIDEO PLAYER MODAL */}
      {activeVideoModal && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.92)',
            backdropFilter: 'blur(16px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 99999,
            padding: '24px'
          }}
          onClick={() => setActiveVideoModal(null)}
        >
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '1100px',
              backgroundColor: '#07162c',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 24px 80px rgba(0, 0, 0, 0.85)',
              border: '1px solid rgba(255, 255, 255, 0.15)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Bar */}
            <div
              style={{
                padding: '16px 24px',
                backgroundColor: 'rgba(7, 22, 44, 0.95)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: activeVideoModal.telemetry?.isAlert ? '#ff3b30' : '#34c759'
                  }}
                />
                <span style={{ color: '#ffffff', fontWeight: 700, fontSize: '1.05rem' }}>
                  {activeVideoModal.title} — Incident Radar Video Stream
                </span>
              </div>
              <button
                onClick={() => setActiveVideoModal(null)}
                style={{
                  background: 'rgba(255, 255, 255, 0.15)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '32px',
                  height: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: '#ffffff'
                }}
              >
                <X size={18} />
              </button>
            </div>

            {/* Video Player */}
            <div style={{ position: 'relative', width: '100%', maxHeight: '68vh', backgroundColor: '#000000', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <video
                src={activeVideoModal.video}
                poster={activeVideoModal.img}
                controls
                autoPlay
                playsInline
                style={{ width: '100%', maxHeight: '68vh', objectFit: 'contain' }}
              />
            </div>

            {/* Footer Telemetry */}
            <div
              style={{
                padding: '16px 24px',
                backgroundColor: '#050f1e',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '14px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
                <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)' }}>
                  Event Status: <strong style={{ color: activeVideoModal.telemetry?.isAlert ? '#ff453a' : '#34c759' }}>{activeVideoModal.telemetry?.event || 'Normal Flow'}</strong>
                </div>
                <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)' }}>
                  Monitored Zone: <strong style={{ color: '#ffffff' }}>{activeVideoModal.telemetry?.lane || 'Lane 01'}</strong>
                </div>
                <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)' }}>
                  Velocity: <strong style={{ color: '#34c759' }}>{activeVideoModal.telemetry?.speed || '80 km/h'}</strong>
                </div>
              </div>

              <button
                onClick={() => {
                  setActiveVideoModal(null);
                  handleOpenContact(`Inquiry regarding ${activeVideoModal.title} incident detection`);
                }}
                style={{
                  backgroundColor: '#0071e3',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '9999px',
                  padding: '8px 20px',
                  fontSize: '0.84rem',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                Inquire about this setup
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ARCHITECTURE LIGHTBOX MODAL */}
      {lightboxImg && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.88)',
            backdropFilter: 'blur(12px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 99999,
            padding: '24px'
          }}
          onClick={() => setLightboxImg(null)}
        >
          <div
            style={{
              position: 'relative',
              maxWidth: '1200px',
              maxHeight: '90vh',
              backgroundColor: '#ffffff',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 24px 80px rgba(0, 0, 0, 0.6)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              style={{
                padding: '16px 24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottom: '1px solid #e5e5ea',
                backgroundColor: '#fbfbfd'
              }}
            >
              <h4 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 700, color: '#1d1d1f' }}>
                {lightboxImg.title}
              </h4>
              <button
                onClick={() => setLightboxImg(null)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: '#86868b',
                  padding: '4px'
                }}
              >
                <X size={20} />
              </button>
            </div>
            <div style={{ padding: '20px', overflowY: 'auto', maxHeight: 'calc(90vh - 70px)' }}>
              <img
                src={lightboxImg.src}
                alt={lightboxImg.title}
                style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '12px' }}
              />
            </div>
          </div>
        </div>
      )}

      {/* CASE STUDY DETAIL MODAL */}
      {selectedCaseStudy && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
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
              maxWidth: '860px',
              maxHeight: '90vh',
              backgroundColor: '#ffffff',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 24px 80px rgba(0, 0, 0, 0.5)',
              display: 'flex',
              flexDirection: 'column'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div
              style={{
                padding: '20px 28px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottom: '1px solid #e5e5ea'
              }}
            >
              <div>
                <span
                  style={{
                    backgroundColor: 'rgba(0, 113, 227, 0.1)',
                    color: '#0071e3',
                    padding: '3px 10px',
                    borderRadius: '6px',
                    fontSize: '0.74rem',
                    fontWeight: 700,
                    textTransform: 'uppercase'
                  }}
                >
                  Official Implementation Review
                </span>
                <h3 style={{ margin: '6px 0 0', fontSize: '1.25rem', fontWeight: 800, color: '#1d1d1f' }}>
                  Spanish Municipality Public Safety & Incident Detection
                </h3>
              </div>
              <button
                onClick={() => setSelectedCaseStudy(null)}
                style={{
                  background: '#f2f2f7',
                  border: 'none',
                  borderRadius: '50%',
                  width: '32px',
                  height: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: '#1d1d1f'
                }}
              >
                <X size={16} />
              </button>
            </div>

            {/* Modal Body */}
            <div style={{ padding: '28px', overflowY: 'auto' }}>
              <img
                src="/images/incident-detection/success_story.jpg"
                alt="Case study"
                style={{ width: '100%', height: '260px', objectFit: 'cover', borderRadius: '16px', marginBottom: '24px' }}
              />

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '24px' }}>
                <div style={{ backgroundColor: '#fbfbfd', padding: '16px', borderRadius: '14px', border: '1px solid #e5e5ea', textAlign: 'center' }}>
                  <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0071e3' }}>46%</div>
                  <div style={{ fontSize: '0.8rem', color: '#6e6e73' }}>Faster Incident Response</div>
                </div>
                <div style={{ backgroundColor: '#fbfbfd', padding: '16px', borderRadius: '14px', border: '1px solid #e5e5ea', textAlign: 'center' }}>
                  <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#34c759' }}>0</div>
                  <div style={{ fontSize: '0.8rem', color: '#6e6e73' }}>Secondary Tunnel Crashes</div>
                </div>
                <div style={{ backgroundColor: '#fbfbfd', padding: '16px', borderRadius: '14px', border: '1px solid #e5e5ea', textAlign: 'center' }}>
                  <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#1d1d1f' }}>14</div>
                  <div style={{ fontSize: '0.8rem', color: '#6e6e73' }}>Corridors Monitored</div>
                </div>
              </div>

              <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '10px' }}>Project Background</h4>
              <p style={{ fontSize: '0.92rem', color: '#6e6e73', lineHeight: 1.6, marginBottom: '20px' }}>
                With increasing commuter congestion and frequent stalled vehicles inside subterranean river tunnels, the municipal transportation department required an autonomous computer vision system to relieve control center operators from having to manually scan dozens of split-screen video walls.
              </p>

              <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '10px' }}>Coloron Solution Deployed</h4>
              <p style={{ fontSize: '0.92rem', color: '#6e6e73', lineHeight: 1.6, marginBottom: '20px' }}>
                Deploying Coloron CLR-TIDS-6400 high-density incident analysis servers integrated with 4K DeepinView starlight cameras immediately transformed the city's operational posture. Automatic audio-visual alerts trigger on the main video wall within 3 seconds of a vehicle stopping or driving against flow.
              </p>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
                <button
                  onClick={() => {
                    setSelectedCaseStudy(null);
                    handleOpenContact('Spanish Municipality Incident Detection Case Study Inquiry');
                  }}
                  style={{
                    backgroundColor: '#0071e3',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '9999px',
                    padding: '12px 24px',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  Contact Project Engineer
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
          defaultSubject={contactSubject}
        />
      )}
    </div>
  );
}
