import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Activity,
  Shield,
  Gauge,
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
  Sliders,
  Sparkles,
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
  RotateCcw
} from 'lucide-react';
import ContactSalesModal from '../components/ContactSalesModal';

// Dedicated Interactive Video Scenario Card with Authentic Speed Overlay
function ScenarioVideoCard({ sc, tabKey, onOpenModal }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [speedVal, setSpeedVal] = useState(sc.telemetry?.speed || '35 km/h');

  // When tab changes, automatically restart & play video smoothly
  useEffect(() => {
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.currentTime = sc.startTime || 0;
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
  }, [tabKey, sc.video, sc.startTime]);

  // Real-time speed telemetry simulation jitter for authentic live sensor feel
  useEffect(() => {
    const raw = parseInt(sc.telemetry?.speed) || 35;
    const interval = setInterval(() => {
      const delta = Math.floor(Math.random() * 5) - 2;
      setSpeedVal(`${Math.max(15, raw + delta)} km/h`);
    }, 2400);
    return () => clearInterval(interval);
  }, [sc.telemetry?.speed]);

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

  return (
    <div
      style={{
        position: 'relative',
        height: '280px',
        borderRadius: '18px',
        overflow: 'hidden',
        cursor: 'pointer',
        backgroundColor: '#0a192f',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease'
      }}
      onMouseEnter={(e) => {
        setIsHovered(true);
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = '0 16px 36px rgba(0, 113, 227, 0.18)';
      }}
      onMouseLeave={(e) => {
        setIsHovered(false);
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.1)';
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

      {/* Subtle Vignette Gradient */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0) 40%, rgba(0,0,0,0.65) 100%)',
          pointerEvents: 'none'
        }}
      />

      {/* Top Left: Live Radar Pulse Badge */}
      <div
        style={{
          position: 'absolute',
          top: '14px',
          left: '14px',
          backgroundColor: 'rgba(10, 20, 35, 0.75)',
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
          RADAR VIDEO PLAYING
        </span>
      </div>

      {/* Top Right: Expand / Fullscreen Button (Matching screenshot) */}
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
          backgroundColor: 'rgba(0, 0, 0, 0.55)',
          border: '1px solid rgba(255, 255, 255, 0.25)',
          color: '#ffffff',
          borderRadius: '50%',
          width: '36px',
          height: '36px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          backdropFilter: 'blur(8px)',
          zIndex: 2,
          transition: 'all 0.2s'
        }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(0, 113, 227, 0.85)')}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.55)')}
      >
        <Maximize2 size={15} />
      </button>

      {/* Center Controls (Visible on hover or when paused) */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          zIndex: 3,
          opacity: isHovered || !isPlaying ? 1 : 0,
          transition: 'opacity 0.25s ease'
        }}
      >
        {/* Play/Pause Button */}
        <button
          onClick={togglePlay}
          title={isPlaying ? 'Pause' : 'Play'}
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            border: '1px solid rgba(255, 255, 255, 0.35)',
            color: '#ffffff',
            borderRadius: '50%',
            width: '52px',
            height: '52px',
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
          {isPlaying ? <Pause size={22} /> : <Play size={22} style={{ marginLeft: '2px' }} />}
        </button>

        {/* Audio Mute/Unmute Button */}
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

      {/* Bottom Left: Location Badge (Matching screenshot) */}
      <div
        style={{
          position: 'absolute',
          bottom: '16px',
          left: '16px',
          backgroundColor: 'rgba(10, 20, 35, 0.85)',
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

      {/* Bottom Right: Authentic Frosted Telemetry Box (Matching User's Screenshot Exactly) */}
      <div
        style={{
          position: 'absolute',
          bottom: '16px',
          right: '16px',
          backgroundColor: 'rgba(12, 24, 44, 0.84)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(255, 255, 255, 0.22)',
          borderRadius: '10px',
          padding: '8px 14px',
          color: '#ffffff',
          fontSize: '0.8rem',
          lineHeight: 1.4,
          boxShadow: '0 4px 14px rgba(0,0,0,0.3)',
          zIndex: 2,
          minWidth: '145px'
        }}
      >
        {sc.telemetry?.limit && (
          <div style={{ color: '#ff453a', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: '2px', borderBottom: '1px dashed rgba(255, 69, 58, 0.4)', paddingBottom: '2px' }}>
            SPEED LIMIT: {sc.telemetry.limit}
          </div>
        )}
        <div style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '0.74rem' }}>
          License Plate: <strong style={{ color: '#ffffff' }}>{sc.telemetry?.plate || 'THX 138'}</strong>
        </div>
        <div style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '0.74rem' }}>
          Speed: <strong style={{ color: '#34c759' }}>{speedVal}</strong>
        </div>
      </div>
    </div>
  );
}

export default function SpeedMeasurementSolution() {
  const [activeTab, setActiveTab] = useState('checkpoint');
  const [lightboxImg, setLightboxImg] = useState(null);
  const [activeVideoModal, setActiveVideoModal] = useState(null);
  const [showContactModal, setShowContactModal] = useState(false);
  const [contactSubject, setContactSubject] = useState('Speed Measurement Solution');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);
  const [expandedCategories, setExpandedCategories] = useState({
    'cat-0': true,
    'cat-1': false,
    'cat-2': false
  });
  const [comparedProducts, setComparedProducts] = useState([]);
  const [toastMessage, setToastMessage] = useState(null);

  // Auto-dismiss toast
  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => setToastMessage(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  const toggleCompare = (productName) => {
    if (comparedProducts.includes(productName)) {
      setComparedProducts(comparedProducts.filter((p) => p !== productName));
      setToastMessage(`Removed "${productName}" from comparison`);
    } else {
      if (comparedProducts.length >= 4) {
        setToastMessage('Maximum 4 items can be compared at once.');
        return;
      }
      setComparedProducts([...comparedProducts, productName]);
      setToastMessage(`Added "${productName}" to comparison`);
    }
  };

  const toggleAccordion = (catId) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [catId]: !prev[catId]
    }));
  };

  const handleOpenContact = (subject = 'Speed Measurement Solution') => {
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

  // Recommended Solution Tab Data with DISTINCT, UNIQUE VIDEOS FOR EVERY HEADING & SCENARIO
  const solutionTabs = {
    checkpoint: {
      id: 'checkpoint',
      name: 'Checkpoint speed measurement',
      tagline: 'Enhanced safety at major roads',
      description: 'Regulates driving behaviors, reduces traffic accident rates, and improves comprehensive road safety.',
      bullets: [
        'Detects speeding vehicles, provides legally binding forensic evidence, and locates suspect vehicle routes',
        'High speed measurement accuracy with a strict deviation of -4 to 0 km/h',
        'Provides abundant vehicle feature data – license plate number, speed, vehicle color, manufacturer, and type',
        'Simultaneous detection of mobile phone usage, seatbelt violations, and lane infractions'
      ],
      scenarios: [
        {
          title: 'Urban roads',
          img: '/images/speed-measurement/checkpoint-urbanroad.jpg',
          video: '/images/speed-measurement/video-urban-checkpoint.mp4',
          telemetry: { plate: 'NYC 7824', speed: '48 km/h', limit: '50 km/h' }
        },
        {
          title: 'Highways',
          img: '/images/speed-measurement/highway.jpg',
          video: '/images/speed-measurement/checkpoint-highway-video.mp4',
          telemetry: { plate: 'DXB 9912', speed: '118 km/h', limit: '120 km/h' }
        }
      ],
      architectures: [
        {
          id: 'arch-1',
          title: 'Solution with capture units',
          topoImg: '/images/speed-measurement/checkpoint-topo01.jpg',
          categories: [
            {
              id: 'cat-1-1',
              title: 'Capture units',
              items: [
                {
                  name: 'Coloron Ultra-Speed All-in-One Capture Unit',
                  model: 'CLR-TC800-4K-RD',
                  desc: '4K 9MP 1-inch Global Shutter CMOS sensor, multi-lane radar-video fusion engine, embedded DeepinView vehicle attribute analysis.',
                  badge: 'Flagship'
                },
                {
                  name: 'Coloron Dual-Lens Checkpoint Camera',
                  model: 'CLR-TC500-IR',
                  desc: 'Synchronized dual optical lenses with ultra-low starlight sensitivity for unlit highways and tunnels.',
                  badge: 'High Accuracy'
                }
              ]
            },
            {
              id: 'cat-1-2',
              title: 'Radar',
              items: [
                {
                  name: 'Coloron Multi-Lane 3D Tracking Radar',
                  model: 'CLR-TDR-77G',
                  desc: '77 GHz millimeter-wave precision radar, tracks up to 64 targets simultaneously across 4 continuous traffic lanes.',
                  badge: 'Long Range 250m'
                }
              ]
            },
            {
              id: 'cat-1-3',
              title: 'Flash lamps',
              items: [
                {
                  name: 'Coloron Synchronized Strobe & Flash Unit',
                  model: 'CLR-FL-160W',
                  desc: 'High-speed Xenon flash / LED pulsed supplementary illuminator with auto-exposure light metering and zero-dazzle filter.',
                  badge: 'Zero-Dazzle'
                }
              ]
            }
          ]
        },
        {
          id: 'arch-2',
          title: 'Solution with all-rounder traffic cameras',
          topoImg: '/images/speed-measurement/checkpoint-topo02.jpg',
          categories: [
            {
              id: 'cat-2-1',
              title: 'All-rounder traffic cameras',
              items: [
                {
                  name: 'Coloron All-Rounder Traffic Radar-Speed Camera',
                  model: 'CLR-ART-900',
                  desc: 'Integrates ANPR, speed tracking, phone/seatbelt violation detection, and high-efficiency strobe light into a single ruggedized enclosure.',
                  badge: 'All-in-One'
                }
              ]
            },
            {
              id: 'cat-2-2',
              title: 'Terminals & Edge Processors',
              items: [
                {
                  name: 'Coloron Edge Enforcement Terminal',
                  model: 'CLR-EET-400',
                  desc: 'Industrial-grade fanless roadside edge computing unit, local evidence cryptographic signing, 4G/5G failover backhaul.',
                  badge: 'Edge AI'
                }
              ]
            }
          ]
        }
      ]
    },
    segment: {
      id: 'segment',
      name: 'Segment speed measurement',
      tagline: 'Safe driving in specified road segments',
      description: 'Prevents disputes between citizens and law enforcement, enhances efficiency and standardization of law enforcement across long corridors.',
      bullets: [
        'Avoids drivers deliberately braking to escape speeding behavior when spotting fixed speed detection gantries',
        'Calculates exact average sectional speed based on high-precision time-synchronized entry and exit checkpoints',
        'Provides abundant vehicle feature data – license plate number, sectional duration, vehicle color, manufacturer, and type',
        'Simultaneous phone usage, seatbelt compliance, and cross-lane trajectory enforcement'
      ],
      scenarios: [
        {
          title: 'Highways',
          img: '/images/speed-measurement/segmentspeed2.jpg',
          video: '/images/speed-measurement/video-highway-corridor.mp4',
          telemetry: { plate: 'CA 5KL99', speed: '96 km/h', limit: '100 km/h' }
        },
        {
          title: 'Fast city roads',
          img: '/images/speed-measurement/segmentspeed1.jpg',
          video: '/images/speed-measurement/video-fast-city.mp4',
          telemetry: { plate: 'TX 4892A', speed: '72 km/h', limit: '80 km/h' }
        }
      ],
      architectures: [
        {
          id: 'arch-seg',
          title: 'Segment Speed Measurement System',
          topoImg: '/images/speed-measurement/segment-speed-topo.jpg',
          categories: [
            {
              id: 'cat-seg-1',
              title: 'Capture units',
              items: [
                {
                  name: 'Coloron Segment Speed Entrance/Exit Terminal Camera',
                  model: 'CLR-SS-800',
                  desc: 'GPS-synchronized microsecond timestamping, 4K multi-lane global shutter capture with automated plate reconciliation.',
                  badge: 'Microsecond Sync'
                }
              ]
            },
            {
              id: 'cat-seg-2',
              title: 'Flash lamps',
              items: [
                {
                  name: 'Coloron Continuous & Pulsed Supplementary Illuminator',
                  model: 'CLR-CFL-120W',
                  desc: 'Intelligent light suppression preventing driver glare while providing clear driver-face and seatbelt illumination.',
                  badge: 'Night Starlight'
                }
              ]
            },
            {
              id: 'cat-seg-3',
              title: 'Terminals & Central Analysis Server',
              items: [
                {
                  name: 'Coloron Sectional Speed Validation Server',
                  model: 'CLR-SVS-6400',
                  desc: 'High-throughput cluster calculating entry-to-exit distance-over-time velocity vectors with automatic toll and police dispatch.',
                  badge: 'Certified Accuracy'
                }
              ]
            }
          ]
        }
      ]
    },
    portable: {
      id: 'portable',
      name: 'Portable speed measurement',
      tagline: 'Temporary speed measurement and evidence collection',
      description: 'Deploys flexibly for dynamic law enforcement, mobile highway patrol, and rapid event-based traffic safety campaigns.',
      bullets: [
        'Deploys rapidly on tripods, patrol vehicles, or roadside barriers for easy on-demand law enforcement',
        'Prevents drivers deliberately braking only at well-known fixed detection sites',
        'High speed measurement accuracy with verified deviation of -4 to 0 km/h',
        'Provides instant on-site license plate recognition, speed readings, vehicle snapshots, and live wireless transmission'
      ],
      scenarios: [
        {
          title: 'Urban roads',
          img: '/images/speed-measurement/portablespeed2.jpg',
          video: '/images/speed-measurement/video-violation-urban.mp4',
          telemetry: { plate: 'FL 9308P', speed: '42 km/h', limit: '40 km/h' }
        },
        {
          title: 'Highways',
          img: '/images/speed-measurement/portablespeed1.jpg',
          video: '/images/speed-measurement/video-tunnel-incident.mp4',
          telemetry: { plate: 'AZ 6109M', speed: '84 km/h', limit: '90 km/h' }
        }
      ],
      architectures: [
        {
          id: 'arch-port',
          title: 'Portable Speed Measurement System',
          topoImg: '/images/speed-measurement/portablespeed-topo.jpg',
          categories: [
            {
              id: 'cat-port-1',
              title: 'Portable speed detectors',
              items: [
                {
                  name: 'Coloron Mobile Radar Speed Enforcement Gun & Camera',
                  model: 'CLR-PRD-300',
                  desc: 'Integrated handheld/tripod radar enforcement camera, 7-inch sunlight-readable touchscreen, 10-hour battery life, 5G live video.',
                  badge: 'Portable All-in-One'
                }
              ]
            },
            {
              id: 'cat-port-2',
              title: 'Flash lamps & Portable Battery Packs',
              items: [
                {
                  name: 'Coloron Compact Mobile Flash Unit',
                  model: 'CLR-MFL-60W',
                  desc: 'Lightweight battery-operated flash synchronizer with automated ambient light sensor and magnetic tripod mount.',
                  badge: 'Quick Deploy'
                }
              ]
            }
          ]
        }
      ]
    },
    precautionary: {
      id: 'precautionary',
      name: 'Precautionary speed measurement',
      tagline: 'Instant reminders for safe driving',
      description: 'Fuses radar and video for accurate vehicle positioning to facilitate proactive visualized management in closed zones.',
      bullets: [
        'Real-time vehicle speed and license plate info displayed on high-visibility outdoor LED matrix screens',
        'Gentle and effective behavioral reminder urging drivers to slow down in school zones, industrial parks, and hospitals',
        'High speed measurement accuracy with deviation of -4 to 0 km/h',
        'Comprehensive vehicle feature logging: plate number, speed, timestamp, and vehicle classification'
      ],
      scenarios: [
        {
          title: 'Industrial parks',
          img: '/images/speed-measurement/industrialpark.jpg',
          video: '/videos/cctv_hero_bg.webm',
          telemetry: { plate: 'IND 4910', speed: '28 km/h', limit: '30 km/h' }
        },
        {
          title: 'School campuses',
          img: '/images/speed-measurement/campus.jpg',
          video: '/images/speed-measurement/video-campus-advisory.mp4',
          telemetry: { plate: 'SCH 318', speed: '24 km/h', limit: '25 km/h' }
        }
      ],
      architectures: [
        {
          id: 'arch-prec',
          title: 'Precautionary Speed Display System',
          topoImg: '/images/speed-measurement/precautionaryspeed-topo.jpg',
          categories: [
            {
              id: 'cat-prec-1',
              title: 'Radar-assisted traffic cameras',
              items: [
                {
                  name: 'Coloron Precautionary Speed Radar Camera',
                  model: 'CLR-PS-400R',
                  desc: 'Combined 4MP camera + Doppler radar, triggers customizable green/red advisory messages based on road speed limits.',
                  badge: 'Dual Doppler'
                }
              ]
            },
            {
              id: 'cat-prec-2',
              title: 'Continuous lights',
              items: [
                {
                  name: 'Coloron Roadside Auxiliary LED Illuminator',
                  model: 'CLR-AL-50W',
                  desc: 'Even flood lighting ensuring crystal clear plate capture at night without blinding approaching drivers.',
                  badge: 'Eco-Friendly'
                }
              ]
            },
            {
              id: 'cat-prec-3',
              title: 'Outdoor LED screens',
              items: [
                {
                  name: 'Coloron Dynamic Traffic Warning LED Matrix Display',
                  model: 'CLR-LED-P10',
                  desc: 'High-brightness P10 outdoor RGB LED display, displays vehicle plate number, detected speed in Green (Compliant) or Red (Speeding).',
                  badge: 'Dual-Color Feedback'
                }
              ]
            }
          ]
        }
      ]
    }
  };

  const currentTab = solutionTabs[activeTab];

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', color: '#1d1d1f' }}>
      
      {/* Toast Notification */}
      {toastMessage && (
        <div
          style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            backgroundColor: '#1d1d1f',
            color: '#ffffff',
            padding: '12px 20px',
            borderRadius: '9999px',
            boxShadow: '0 8px 24px rgba(0,0,0,0.25)',
            fontSize: '0.88rem',
            fontWeight: 500,
            zIndex: 99999,
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            animation: 'fadeIn 0.3s ease-out'
          }}
        >
          <CheckCircle2 size={16} color="#34c759" />
          {toastMessage}
        </div>
      )}

      {/* 1. HERO BANNER */}
      <section
        style={{
          position: 'relative',
          width: '100%',
          minHeight: '480px',
          height: '56vh',
          maxHeight: '620px',
          backgroundImage: 'url(/images/speed-measurement/speed-measurement-banner.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
          backgroundColor: '#07162c',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden'
        }}
      >
        {/* Dark / Blue Overlay Gradient */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(90deg, rgba(7, 22, 44, 0.92) 0%, rgba(10, 34, 68, 0.72) 45%, rgba(0, 0, 0, 0.35) 100%)',
            zIndex: 1
          }}
        />

        {/* Circular Blue Glow / Bubble Element */}
        <div
          style={{
            position: 'absolute',
            left: '-10%',
            top: '-20%',
            width: '650px',
            height: '650px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(14, 76, 161, 0.75) 0%, rgba(9, 44, 98, 0.45) 60%, transparent 80%)',
            filter: 'blur(30px)',
            zIndex: 2,
            pointerEvents: 'none'
          }}
        />

        {/* Content Container */}
        <div
          style={{
            position: 'relative',
            zIndex: 3,
            maxWidth: '1360px',
            width: '100%',
            margin: '0 auto',
            padding: '0 32px'
          }}
        >
          {/* Circular Emblem & Category Badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              padding: '8px 18px',
              borderRadius: '9999px',
              backgroundColor: 'rgba(255, 255, 255, 0.12)',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              marginBottom: '20px'
            }}
          >
            <div
              style={{
                width: '28px',
                height: '28px',
                borderRadius: '50%',
                backgroundColor: '#0071e3',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 8px rgba(0, 113, 227, 0.5)'
              }}
            >
              <Activity size={16} color="#ffffff" />
            </div>
            <span style={{ fontSize: '0.86rem', fontWeight: 600, color: 'rgba(255, 255, 255, 0.95)', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
              Solutions by Function
            </span>
          </div>

          {/* Title */}
          <h1
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4.2rem)',
              fontWeight: 800,
              color: '#ffffff',
              letterSpacing: '-0.03em',
              margin: '0 0 16px',
              lineHeight: 1.1,
              maxWidth: '850px',
              textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
            }}
          >
            Speed Measurement
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
              color: 'rgba(255, 255, 255, 0.85)',
              maxWidth: '680px',
              lineHeight: 1.55,
              margin: '0 0 32px'
            }}
          >
            Precision speed enforcement, intelligent traffic analytics, and multi-target radar-video fusion for highways and urban roadways.
          </p>

          {/* Quick CTA Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <button
              onClick={() => handleOpenContact('Consultation for Speed Measurement')}
              style={{
                backgroundColor: '#0071e3',
                color: '#ffffff',
                border: 'none',
                borderRadius: '9999px',
                padding: '12px 28px',
                fontSize: '0.95rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: '0 4px 16px rgba(0, 113, 227, 0.4)'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#0077ed')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#0071e3')}
            >
              Consult an Expert
            </button>
            <button
              onClick={() => scrollToSection('recommended-solution')}
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.12)',
                color: '#ffffff',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                borderRadius: '9999px',
                padding: '12px 26px',
                fontSize: '0.95rem',
                fontWeight: 500,
                cursor: 'pointer',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.22)')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.12)')}
            >
              Explore Solutions
            </button>
          </div>
        </div>
      </section>

      {/* 2. STICKY SUB-NAVBAR */}
      <nav
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 90,
          backgroundColor: 'rgba(255, 255, 255, 0.94)',
          backdropFilter: 'blur(18px)',
          borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.03)'
        }}
      >
        <div
          style={{
            maxWidth: '1360px',
            margin: '0 auto',
            padding: '0 24px',
            height: '56px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          {/* Subheader Title */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '0.96rem', fontWeight: 700, color: '#1d1d1f', letterSpacing: '-0.01em' }}>
              Traffic Speed Measurement Solution
            </span>
          </div>

          {/* Links */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '24px',
              overflowX: 'auto',
              scrollbarWidth: 'none'
            }}
          >
            <button
              onClick={() => scrollToSection('what-we-offer')}
              style={{
                background: 'none',
                border: 'none',
                fontSize: '0.88rem',
                fontWeight: 500,
                color: '#555558',
                cursor: 'pointer',
                padding: '6px 0',
                transition: 'color 0.2s ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#0071e3')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#555558')}
            >
              What we offer
            </button>
            <button
              onClick={() => scrollToSection('key-technology')}
              style={{
                background: 'none',
                border: 'none',
                fontSize: '0.88rem',
                fontWeight: 500,
                color: '#555558',
                cursor: 'pointer',
                padding: '6px 0',
                transition: 'color 0.2s ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#0071e3')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#555558')}
            >
              Key technology
            </button>
            <button
              onClick={() => scrollToSection('recommended-solution')}
              style={{
                background: 'none',
                border: 'none',
                fontSize: '0.88rem',
                fontWeight: 500,
                color: '#555558',
                cursor: 'pointer',
                padding: '6px 0',
                transition: 'color 0.2s ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#0071e3')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#555558')}
            >
              Recommended solution
            </button>
            <button
              onClick={() => scrollToSection('success-stories')}
              style={{
                background: 'none',
                border: 'none',
                fontSize: '0.88rem',
                fontWeight: 500,
                color: '#555558',
                cursor: 'pointer',
                padding: '6px 0',
                transition: 'color 0.2s ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#0071e3')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#555558')}
            >
              Success stories
            </button>
            <button
              onClick={() => handleOpenContact('Speed Measurement Proposal')}
              style={{
                backgroundColor: '#e02424',
                color: '#ffffff',
                border: 'none',
                borderRadius: '9999px',
                padding: '7px 18px',
                fontSize: '0.84rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'opacity 0.2s'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.9')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
            >
              Contact Sales
            </button>
          </div>
        </div>
      </nav>

      {/* 3. WHAT WE OFFER */}
      <section id="what-we-offer" style={{ padding: 'clamp(64px, 8vw, 96px) 24px', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto', textAlign: 'center' }}>
          
          <h2
            style={{
              fontSize: 'clamp(2.2rem, 3.5vw, 3.2rem)',
              fontWeight: 800,
              color: '#1d1d1f',
              letterSpacing: '-0.03em',
              margin: '0 0 20px'
            }}
          >
            What we offer
          </h2>

          <p
            style={{
              fontSize: '1.05rem',
              color: '#555558',
              lineHeight: 1.7,
              maxWidth: '960px',
              margin: '0 auto 56px'
            }}
          >
            Coloron&apos;s Speed Measurement Solution boasts high accuracy and low detection deviation. It excels in scenarios on both high- and low-speed roads. It can effectively regulate driver behavior, reduce traffic accidents caused by driving too fast or too slow, and elevate road safety. Over all, Coloron’s solution improves the efficiency of road safety management for governments, enterprises, and users in general.
          </p>

          {/* 4 Feature Cards matching the 4 icons in screenshot */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
              gap: '24px'
            }}
          >
            {[
              {
                id: 'checkpoint',
                title: 'Checkpoint speed measurement',
                img: '/images/speed-measurement/what-we-offer-01.jpg',
                desc: 'Point-to-point instantaneous spot enforcement with sub-millisecond ANPR validation.'
              },
              {
                id: 'segment',
                title: 'Segment speed measurement',
                img: '/images/speed-measurement/what-we-offer-02.jpg',
                desc: 'Average sectional corridor enforcement preventing sudden braking near gantries.'
              },
              {
                id: 'portable',
                title: 'Portable speed measurement',
                img: '/images/speed-measurement/what-we-offer-03.jpg',
                desc: 'Rapid tripod and mobile patrol vehicle deployment for dynamic law enforcement.'
              },
              {
                id: 'precautionary',
                title: 'Precautionary speed measurement',
                img: '/images/speed-measurement/what-we-offer-04.jpg',
                desc: 'Radar-driven interactive LED speed feedback screens promoting safer campus driving.'
              }
            ].map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  scrollToSection('recommended-solution');
                }}
                style={{
                  backgroundColor: '#ffffff',
                  padding: '36px 20px',
                  borderRadius: '18px',
                  border: '1px solid rgba(0, 0, 0, 0.07)',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.03)',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 16px 32px rgba(0, 113, 227, 0.12)';
                  e.currentTarget.style.borderColor = 'rgba(0, 113, 227, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.03)';
                  e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.07)';
                }}
              >
                {/* Icon Circle */}
                <div
                  style={{
                    width: '84px',
                    height: '84px',
                    borderRadius: '50%',
                    backgroundColor: '#f5f7fa',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px',
                    overflow: 'hidden'
                  }}
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    style={{ width: '64px', height: '64px', objectFit: 'contain' }}
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>

                <h3
                  style={{
                    fontSize: '1.08rem',
                    fontWeight: 700,
                    color: '#1d1d1f',
                    margin: '0 0 10px',
                    lineHeight: 1.3
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    fontSize: '0.88rem',
                    color: '#6e6e73',
                    lineHeight: 1.5,
                    margin: '0 0 16px'
                  }}
                >
                  {item.desc}
                </p>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: '#0071e3',
                    marginTop: 'auto'
                  }}
                >
                  <span>Explore configuration</span>
                  <ChevronRight size={16} />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. KEY TECHNOLOGY */}
      <section id="key-technology" style={{ padding: 'clamp(64px, 8vw, 96px) 24px', backgroundColor: '#fbfbfd', borderTop: '1px solid rgba(0, 0, 0, 0.05)', borderBottom: '1px solid rgba(0, 0, 0, 0.05)' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <h2
              style={{
                fontSize: 'clamp(2.2rem, 3.5vw, 3.2rem)',
                fontWeight: 800,
                color: '#1d1d1f',
                letterSpacing: '-0.03em',
                margin: 0
              }}
            >
              Key technology
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            
            {/* Tech 1: Radar video fusion technology */}
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '20px',
                border: '1px solid rgba(0, 0, 0, 0.06)',
                overflow: 'hidden',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                alignItems: 'center',
                boxShadow: '0 6px 20px rgba(0, 0, 0, 0.03)'
              }}
            >
              {/* Graphic */}
              <div
                style={{
                  position: 'relative',
                  height: '340px',
                  backgroundColor: '#0a192f',
                  cursor: 'pointer',
                  overflow: 'hidden'
                }}
                onClick={() => setLightboxImg({ src: '/images/speed-measurement/key-tech-radar-video-fusion.jpg', title: 'Radar video fusion technology' })}
              >
                <img
                  src="/images/speed-measurement/key-tech-radar-video-fusion.jpg"
                  alt="Radar video fusion technology"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '16px',
                    right: '16px',
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    color: '#ffffff',
                    borderRadius: '50%',
                    padding: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backdropFilter: 'blur(8px)'
                  }}
                >
                  <Maximize2 size={16} />
                </div>
              </div>

              {/* Text */}
              <div style={{ padding: 'clamp(24px, 4vw, 48px)' }}>
                <div style={{ display: 'inline-block', backgroundColor: '#eaf4ff', color: '#0071e3', padding: '4px 12px', borderRadius: '6px', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: '14px' }}>
                  Unified Sensing
                </div>
                <h3
                  style={{
                    fontSize: 'clamp(1.5rem, 2.4vw, 2rem)',
                    fontWeight: 700,
                    color: '#1d1d1f',
                    letterSpacing: '-0.02em',
                    margin: '0 0 16px'
                  }}
                >
                  Radar video fusion technology
                </h3>
                <p style={{ fontSize: '0.98rem', color: '#555558', lineHeight: 1.65, margin: '0 0 14px' }}>
                  Coordinating radar and video systems are transformed and unified in time and space through an AI-fusion algorithm.
                </p>
                <p style={{ fontSize: '0.98rem', color: '#555558', lineHeight: 1.65, margin: '0 0 24px' }}>
                  The target position, speed, characteristics, and other telemetry are identified with high accuracy to carry out continuous, long-distance, and all-weather detection and analysis.
                </p>

                {/* Key Metric Tags */}
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                  <div style={{ backgroundColor: '#f5f5f7', padding: '8px 14px', borderRadius: '8px', fontSize: '0.85rem', color: '#1d1d1f', fontWeight: 600 }}>
                    ⚡ -4 to 0 km/h Deviation
                  </div>
                  <div style={{ backgroundColor: '#f5f5f7', padding: '8px 14px', borderRadius: '8px', fontSize: '0.85rem', color: '#1d1d1f', fontWeight: 600 }}>
                    🛰️ 250m Radar Range
                  </div>
                  <div style={{ backgroundColor: '#f5f5f7', padding: '8px 14px', borderRadius: '8px', fontSize: '0.85rem', color: '#1d1d1f', fontWeight: 600 }}>
                    🌧️ Rain & Fog Resilient
                  </div>
                </div>
              </div>
            </div>

            {/* Tech 2: AI deep learning */}
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '20px',
                border: '1px solid rgba(0, 0, 0, 0.06)',
                overflow: 'hidden',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                alignItems: 'center',
                boxShadow: '0 6px 20px rgba(0, 0, 0, 0.03)'
              }}
            >
              {/* Graphic */}
              <div
                style={{
                  position: 'relative',
                  height: '340px',
                  backgroundColor: '#0a192f',
                  cursor: 'pointer',
                  overflow: 'hidden'
                }}
                onClick={() => setLightboxImg({ src: '/images/speed-measurement/key-tech-ai-deep-learning.jpg', title: 'AI deep learning attribute detection' })}
              >
                <img
                  src="/images/speed-measurement/key-tech-ai-deep-learning.jpg"
                  alt="AI deep learning attribute detection"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '16px',
                    right: '16px',
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    color: '#ffffff',
                    borderRadius: '50%',
                    padding: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backdropFilter: 'blur(8px)'
                  }}
                >
                  <Maximize2 size={16} />
                </div>
              </div>

              {/* Text */}
              <div style={{ padding: 'clamp(24px, 4vw, 48px)' }}>
                <div style={{ display: 'inline-block', backgroundColor: '#f0fbf0', color: '#34c759', padding: '4px 12px', borderRadius: '6px', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: '14px' }}>
                  Neural Engine
                </div>
                <h3
                  style={{
                    fontSize: 'clamp(1.5rem, 2.4vw, 2rem)',
                    fontWeight: 700,
                    color: '#1d1d1f',
                    letterSpacing: '-0.02em',
                    margin: '0 0 16px'
                  }}
                >
                  AI deep learning
                </h3>
                <p style={{ fontSize: '0.98rem', color: '#555558', lineHeight: 1.65, margin: '0 0 14px' }}>
                  High recognition and detection accuracy of target attributes under complex illumination, extreme glare, and heavy multi-lane congestion.
                </p>
                <p style={{ fontSize: '0.98rem', color: '#555558', lineHeight: 1.65, margin: '0 0 24px' }}>
                  Advanced, deep learning algorithm technology achieves industry-leading performance, delivering forensic-grade reliability and automated violation indexing.
                </p>

                {/* Key Metric Tags */}
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                  <div style={{ backgroundColor: '#f5f5f7', padding: '8px 14px', borderRadius: '8px', fontSize: '0.85rem', color: '#1d1d1f', fontWeight: 600 }}>
                    🎯 &gt;99.5% ANPR Precision
                  </div>
                  <div style={{ backgroundColor: '#f5f5f7', padding: '8px 14px', borderRadius: '8px', fontSize: '0.85rem', color: '#1d1d1f', fontWeight: 600 }}>
                    📱 Phone & Belt Violation
                  </div>
                  <div style={{ backgroundColor: '#f5f5f7', padding: '8px 14px', borderRadius: '8px', fontSize: '0.85rem', color: '#1d1d1f', fontWeight: 600 }}>
                    🏎️ Make & Model Analytics
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. RECOMMENDED SOLUTION */}
      <section id="recommended-solution" style={{ padding: 'clamp(64px, 8vw, 100px) 24px', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2
              style={{
                fontSize: 'clamp(2.2rem, 3.5vw, 3.2rem)',
                fontWeight: 800,
                color: '#1d1d1f',
                letterSpacing: '-0.03em',
                margin: '0 0 24px'
              }}
            >
              Recommended solution
            </h2>

            {/* Pill Tabs Strip */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                backgroundColor: '#f5f5f7',
                padding: '6px',
                borderRadius: '9999px',
                gap: '4px',
                maxWidth: '100%',
                overflowX: 'auto',
                scrollbarWidth: 'none',
                boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.06)'
              }}
            >
              {Object.keys(solutionTabs).map((key) => {
                const tab = solutionTabs[key];
                const isActive = activeTab === key;
                return (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    style={{
                      backgroundColor: isActive ? '#0071e3' : 'transparent',
                      color: isActive ? '#ffffff' : '#555558',
                      border: 'none',
                      borderRadius: '9999px',
                      padding: '10px 22px',
                      fontSize: '0.9rem',
                      fontWeight: isActive ? 600 : 500,
                      cursor: 'pointer',
                      whiteSpace: 'nowrap',
                      transition: 'all 0.2s ease',
                      boxShadow: isActive ? '0 4px 14px rgba(0, 113, 227, 0.35)' : 'none'
                    }}
                  >
                    {tab.name}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Tab Content Container */}
          <div style={{ marginTop: '40px' }}>
            
            {/* Header info */}
            <div style={{ marginBottom: '36px' }}>
              <h3
                style={{
                  fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)',
                  fontWeight: 700,
                  color: '#1d1d1f',
                  letterSpacing: '-0.02em',
                  margin: '0 0 10px'
                }}
              >
                {currentTab.tagline}
              </h3>
              <p style={{ fontSize: '1.05rem', color: '#555558', lineHeight: 1.6, margin: '0 0 20px', maxWidth: '900px' }}>
                {currentTab.description}
              </p>

              {/* Bullet Points */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '14px', marginTop: '20px' }}>
                {currentTab.bullets.map((bullet, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <div style={{ marginTop: '2px', color: '#0071e3', flexShrink: 0 }}>
                      <CheckCircle2 size={18} />
                    </div>
                    <span style={{ fontSize: '0.94rem', color: '#333336', lineHeight: 1.5 }}>
                      {bullet}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* 2 Scenario Interactive Video Cards (Plays UNIQUE video as per heading and scenario) */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '24px',
                marginBottom: '50px'
              }}
            >
              {currentTab.scenarios.map((sc, idx) => (
                <ScenarioVideoCard
                  key={`${activeTab}-${sc.title}-${idx}`}
                  sc={sc}
                  tabKey={activeTab}
                  onOpenModal={(selectedSc) => setActiveVideoModal(selectedSc)}
                />
              ))}
            </div>

            {/* System Architecture Topology & Hardware Breakdown */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
              {currentTab.architectures.map((arch, aIdx) => (
                <div
                  key={arch.id}
                  style={{
                    backgroundColor: '#fbfbfd',
                    border: '1px solid rgba(0, 0, 0, 0.08)',
                    borderRadius: '20px',
                    padding: 'clamp(20px, 3vw, 36px)',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)'
                  }}
                >
                  <h4
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      color: '#1d1d1f',
                      margin: '0 0 24px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px'
                    }}
                  >
                    <Layers size={22} color="#0071e3" />
                    {arch.title}
                  </h4>

                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                      gap: '32px',
                      alignItems: 'start'
                    }}
                  >
                    {/* Topology Diagram Box */}
                    <div
                      style={{
                        backgroundColor: '#ffffff',
                        borderRadius: '14px',
                        border: '1px solid rgba(0, 0, 0, 0.06)',
                        padding: '16px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                      }}
                    >
                      <div
                        style={{
                          width: '100%',
                          minHeight: '260px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          cursor: 'pointer',
                          position: 'relative'
                        }}
                        onClick={() => setLightboxImg({ src: arch.topoImg, title: arch.title })}
                      >
                        <img
                          src={arch.topoImg}
                          alt={arch.title}
                          style={{ maxWidth: '100%', maxHeight: '340px', objectFit: 'contain' }}
                        />
                        <div
                          style={{
                            position: 'absolute',
                            bottom: '8px',
                            right: '8px',
                            backgroundColor: 'rgba(0, 0, 0, 0.65)',
                            color: '#ffffff',
                            borderRadius: '6px',
                            padding: '4px 10px',
                            fontSize: '0.78rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px',
                            backdropFilter: 'blur(6px)'
                          }}
                        >
                          <Maximize2 size={12} />
                          <span>Click to Zoom Diagram</span>
                        </div>
                      </div>
                      <span style={{ fontSize: '0.82rem', color: '#86868b', marginTop: '10px' }}>
                        Coloron End-to-End Topology Architecture
                      </span>
                    </div>

                    {/* Hardware Accordion & Recommended Devices */}
                    <div>
                      <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#86868b', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '14px' }}>
                        System Hardware Components
                      </div>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        {arch.categories.map((cat, cIdx) => {
                          const catKey = `${arch.id}-${cat.id}`;
                          const isExpanded = expandedCategories[catKey] !== false;
                          return (
                            <div
                              key={cat.id}
                              style={{
                                backgroundColor: '#ffffff',
                                border: '1px solid rgba(0, 0, 0, 0.06)',
                                borderRadius: '12px',
                                overflow: 'hidden'
                              }}
                            >
                              {/* Category Header */}
                              <button
                                onClick={() => toggleAccordion(catKey)}
                                style={{
                                  width: '100%',
                                  padding: '14px 18px',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'space-between',
                                  backgroundColor: 'transparent',
                                  border: 'none',
                                  cursor: 'pointer',
                                  textAlign: 'left'
                                }}
                              >
                                <span style={{ fontSize: '0.98rem', fontWeight: 600, color: '#1d1d1f' }}>
                                  {cat.title}
                                </span>
                                <div
                                  style={{
                                    transform: isExpanded ? 'rotate(90deg)' : 'rotate(0deg)',
                                    transition: 'transform 0.2s ease',
                                    color: '#86868b'
                                  }}
                                >
                                  <ChevronRight size={18} />
                                </div>
                              </button>

                              {/* Items List */}
                              {isExpanded && (
                                <div style={{ padding: '0 18px 16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                  {cat.items.map((item, iIdx) => {
                                    const isCompared = comparedProducts.includes(item.model);
                                    return (
                                      <div
                                        key={iIdx}
                                        style={{
                                          backgroundColor: '#fbfbfd',
                                          padding: '14px 16px',
                                          borderRadius: '10px',
                                          border: '1px solid rgba(0,0,0,0.04)',
                                          display: 'flex',
                                          flexDirection: 'column',
                                          gap: '6px'
                                        }}
                                      >
                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '6px' }}>
                                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            <span style={{ fontSize: '0.92rem', fontWeight: 700, color: '#1d1d1f' }}>
                                              {item.name}
                                            </span>
                                            {item.badge && (
                                              <span style={{ backgroundColor: '#eaf4ff', color: '#0071e3', fontSize: '0.72rem', fontWeight: 700, padding: '2px 8px', borderRadius: '4px' }}>
                                                {item.badge}
                                              </span>
                                            )}
                                          </div>
                                          <span style={{ fontSize: '0.78rem', color: '#86868b', fontFamily: 'monospace' }}>
                                            {item.model}
                                          </span>
                                        </div>

                                        <p style={{ fontSize: '0.84rem', color: '#555558', margin: '4px 0 10px', lineHeight: 1.45 }}>
                                          {item.desc}
                                        </p>

                                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: 'auto' }}>
                                          <button
                                            onClick={() => toggleCompare(item.model)}
                                            style={{
                                              backgroundColor: isCompared ? '#e8f5e9' : '#ffffff',
                                              color: isCompared ? '#2e7d32' : '#555558',
                                              border: '1px solid',
                                              borderColor: isCompared ? '#81c784' : '#d2d2d7',
                                              borderRadius: '6px',
                                              padding: '4px 10px',
                                              fontSize: '0.76rem',
                                              fontWeight: 600,
                                              cursor: 'pointer',
                                              display: 'flex',
                                              alignItems: 'center',
                                              gap: '4px',
                                              transition: 'all 0.2s'
                                            }}
                                          >
                                            {isCompared ? <Check size={12} /> : <Plus size={12} />}
                                            {isCompared ? 'Compared' : '+ Add to compare'}
                                          </button>

                                          <button
                                            onClick={() => handleOpenContact(`Datasheet Inquiry for ${item.model}`)}
                                            style={{
                                              background: 'none',
                                              border: 'none',
                                              color: '#0071e3',
                                              fontSize: '0.78rem',
                                              fontWeight: 600,
                                              cursor: 'pointer',
                                              padding: 0,
                                              display: 'flex',
                                              alignItems: 'center',
                                              gap: '3px'
                                            }}
                                          >
                                            Inquire specs
                                            <ChevronRight size={13} />
                                          </button>
                                        </div>
                                      </div>
                                    );
                                  })}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* 6. SUCCESS STORIES */}
      <section id="success-stories" style={{ padding: 'clamp(64px, 8vw, 96px) 24px', backgroundColor: '#fbfbfd', borderTop: '1px solid rgba(0, 0, 0, 0.05)', borderBottom: '1px solid rgba(0, 0, 0, 0.05)' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2
              style={{
                fontSize: 'clamp(2.2rem, 3.5vw, 3.2rem)',
                fontWeight: 800,
                color: '#1d1d1f',
                letterSpacing: '-0.03em',
                margin: 0
              }}
            >
              Success stories
            </h2>
          </div>

          {/* Featured Case Study Card */}
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '20px',
              border: '1px solid rgba(0, 0, 0, 0.07)',
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.04)',
              overflow: 'hidden',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              alignItems: 'center'
            }}
          >
            {/* Image / Video preview */}
            <div
              style={{
                position: 'relative',
                height: '380px',
                backgroundColor: '#0a192f',
                cursor: 'pointer',
                overflow: 'hidden'
              }}
              onClick={() => setActiveVideoModal({
                title: 'Saudi University Smart Campus Traffic Management',
                img: '/images/speed-measurement/case-study-qassim.jpg',
                video: '/images/speed-measurement/video-campus-advisory.mp4',
                telemetry: { plate: 'KSA 4021', speed: '28 km/h', limit: '30 km/h' }
              })}
            >
              <img
                src="/images/speed-measurement/case-study-qassim.jpg"
                alt="Case Study Qassim University"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.7) 100%)'
                }}
              />
              {/* Play Video Trigger Overlay */}
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(0, 113, 227, 0.88)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  boxShadow: '0 8px 24px rgba(0, 113, 227, 0.45)',
                  backdropFilter: 'blur(8px)',
                  transition: 'transform 0.2s ease'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1.1)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1)')}
              >
                <Play size={26} style={{ marginLeft: '3px' }} />
              </div>

              <div
                style={{
                  position: 'absolute',
                  bottom: '16px',
                  left: '16px',
                  color: '#ffffff',
                  fontSize: '0.82rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <MapPin size={14} color="#0071e3" />
                <span>Saudi Arabia • Click to Play Case Video</span>
              </div>
            </div>

            {/* Story Text */}
            <div style={{ padding: 'clamp(24px, 4vw, 48px)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
                <Calendar size={14} color="#86868b" />
                <span style={{ fontSize: '0.82rem', color: '#86868b', fontWeight: 500 }}>February 20, 2025</span>
              </div>

              <h3
                style={{
                  fontSize: 'clamp(1.35rem, 2.2vw, 1.85rem)',
                  fontWeight: 700,
                  color: '#1d1d1f',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.3,
                  margin: '0 0 16px'
                }}
              >
                Crafting a digital oasis: a Saudi university&apos;s journey to smart education
              </h3>

              {/* Tags Strip */}
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '20px' }}>
                {['Speed measurement', 'AR live interaction', 'Access Control', 'Intelligent traffic', 'Parking management'].map((tag) => (
                  <span
                    key={tag}
                    style={{
                      backgroundColor: '#f5f5f7',
                      color: '#555558',
                      fontSize: '0.76rem',
                      fontWeight: 500,
                      padding: '4px 10px',
                      borderRadius: '6px'
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p style={{ fontSize: '0.92rem', color: '#555558', lineHeight: 1.6, margin: '0 0 24px' }}>
                By deploying Coloron radar-assisted speed checkpoints and multi-lane ANPR cameras across all campus gates and perimeter roads, Qassim University achieved zero severe speeding accidents and full traffic transparency.
              </p>

              <button
                onClick={() => setSelectedCaseStudy({
                  title: 'Crafting a digital oasis: a Saudi university’s journey to smart education',
                  date: 'February 20, 2025',
                  location: 'Saudi Arabia',
                  topics: ['Speed measurement', 'AR live interaction', 'Access Control', 'Intelligent traffic', 'Parking management'],
                  body: `Qassim University in Saudi Arabia faced major vehicular speeding challenges across its sprawling 5-square-kilometer campus serving over 40,000 students and staff. Coloron deployed a comprehensive intelligent traffic network integrating 3D radar speed measurement checkpoint cameras, automated license plate recognition (ANPR), and central traffic enforcement servers. 

The system established real-time vehicle telemetry across arterial ring roads and student boarding zones, eliminating blind spots and reducing vehicular speeding infractions by 78% within the first six months of deployment.`
                })}
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
                <span>Read Story</span>
                <ArrowRight size={15} />
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* 7. YOU MAY ALSO BE INTERESTED IN */}
      <section style={{ padding: 'clamp(64px, 8vw, 96px) 24px', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '44px' }}>
            <h2
              style={{
                fontSize: 'clamp(2rem, 3.2vw, 2.8rem)',
                fontWeight: 800,
                color: '#1d1d1f',
                letterSpacing: '-0.02em',
                margin: 0
              }}
            >
              You may also be interested in
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px'
            }}
          >
            {[
              {
                title: 'Vehicle information detection',
                category: 'Function',
                img: '/images/speed-measurement/related-vehicle-info.jpg',
                link: '/solutions'
              },
              {
                title: 'Highways',
                category: 'Scenario',
                img: '/images/speed-measurement/related-highways.jpg',
                link: '/solutions/highways'
              },
              {
                title: 'Traffic',
                category: 'Industry',
                img: '/images/speed-measurement/related-traffic.jpg',
                link: '/solutions/urban-roadways'
              }
            ].map((card, idx) => (
              <Link
                key={idx}
                to={card.link}
                style={{
                  textDecoration: 'none',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  position: 'relative',
                  height: '240px',
                  backgroundColor: '#07162c',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '24px'
                }}
                onMouseEnter={(e) => {
                  const img = e.currentTarget.querySelector('img');
                  if (img) img.style.transform = 'scale(1.08)';
                }}
                onMouseLeave={(e) => {
                  const img = e.currentTarget.querySelector('img');
                  if (img) img.style.transform = 'scale(1)';
                }}
              >
                <img
                  src={card.img}
                  alt={card.title}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.4s ease'
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.75) 100%)'
                  }}
                />
                <div style={{ position: 'relative', zIndex: 2 }}>
                  <span style={{ fontSize: '0.78rem', color: '#0071e3', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', display: 'block', marginBottom: '6px' }}>
                    {card.category}
                  </span>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#ffffff', margin: 0, lineHeight: 1.3 }}>
                    {card.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* 8. READY TO DISCUSS YOUR NEEDS? (Banner with Illustration matching screenshot) */}
      <section style={{ padding: '0 24px clamp(60px, 8vw, 100px)', backgroundColor: '#ffffff' }}>
        <div
          style={{
            maxWidth: '1240px',
            margin: '0 auto',
            borderRadius: '24px',
            backgroundColor: '#ffffff',
            border: '1px solid rgba(0, 0, 0, 0.08)',
            boxShadow: '0 12px 36px rgba(0, 0, 0, 0.04)',
            overflow: 'hidden',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            alignItems: 'center',
            position: 'relative'
          }}
        >
          {/* Left Text */}
          <div style={{ padding: 'clamp(32px, 6vw, 64px)' }}>
            <h2
              style={{
                fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
                fontWeight: 800,
                color: '#1d1d1f',
                letterSpacing: '-0.02em',
                margin: '0 0 16px',
                lineHeight: 1.15
              }}
            >
              Ready to discuss your needs?
            </h2>
            <p style={{ fontSize: '1.02rem', color: '#555558', lineHeight: 1.6, margin: '0 0 32px', maxWidth: '480px' }}>
              Speak directly with a Coloron ITS traffic engineer to receive custom site blueprints, radar link budgets, and camera layout designs.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
              <button
                onClick={() => handleOpenContact('Speed Measurement RFP Inquiry')}
                style={{
                  backgroundColor: '#e02424',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '9999px',
                  padding: '13px 30px',
                  fontSize: '0.94rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'opacity 0.2s',
                  boxShadow: '0 4px 14px rgba(224, 36, 36, 0.35)'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.9')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
              >
                Contact Coloron Sales
              </button>

              <button
                onClick={() => handleOpenContact('Request a Speed Radar Demo')}
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
                Request a Demo
              </button>
            </div>
          </div>

          {/* Right Illustration */}
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
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = '/images/cctv_hero_banner.png';
              }}
            />
          </div>
        </div>
      </section>

      {/* Fullscreen Video Player Modal */}
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
                <span style={{ width: '9px', height: '9px', borderRadius: '50%', backgroundColor: '#34c759', boxShadow: '0 0 10px #34c759' }} />
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#ffffff', margin: 0 }}>
                  {activeVideoModal.title} — Real-time Radar Speed Capture
                </h3>
              </div>

              <button
                onClick={() => setActiveVideoModal(null)}
                style={{
                  background: 'rgba(255, 255, 255, 0.15)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '36px',
                  height: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: '#ffffff',
                  transition: 'background 0.2s'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.25)')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)')}
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

            {/* Footer Telemetry & Actions */}
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
                  Detected Plate: <strong style={{ color: '#ffffff', letterSpacing: '0.04em' }}>{activeVideoModal.telemetry?.plate || 'THX 138'}</strong>
                </div>
                <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)' }}>
                  Radar Velocity: <strong style={{ color: '#34c759' }}>{activeVideoModal.telemetry?.speed || '35 km/h'}</strong>
                </div>
                <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)' }}>
                  Zone Speed Limit: <strong style={{ color: '#ff9500' }}>{activeVideoModal.telemetry?.limit || '30 km/h'}</strong>
                </div>
              </div>

              <button
                onClick={() => {
                  setActiveVideoModal(null);
                  handleOpenContact(`Inquiry regarding ${activeVideoModal.title} video solution`);
                }}
                style={{
                  backgroundColor: '#0071e3',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '9999px',
                  padding: '9px 22px',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'background 0.2s'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#0077ed')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#0071e3')}
              >
                Inquire Live Demo
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Case Study Modal */}
      {selectedCaseStudy && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.65)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            padding: '20px'
          }}
          onClick={() => setSelectedCaseStudy(null)}
        >
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '20px',
              maxWidth: '680px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              padding: '36px',
              position: 'relative',
              boxShadow: '0 24px 60px rgba(0, 0, 0, 0.3)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedCaseStudy(null)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: '#f5f5f7',
                border: 'none',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              <X size={18} color="#1d1d1f" />
            </button>

            <span style={{ fontSize: '0.8rem', color: '#0071e3', fontWeight: 700, textTransform: 'uppercase' }}>
              Case Study Details
            </span>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#1d1d1f', margin: '8px 0 16px' }}>
              {selectedCaseStudy.title}
            </h2>

            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '20px' }}>
              {selectedCaseStudy.topics.map((t) => (
                <span key={t} style={{ backgroundColor: '#f0f0f2', fontSize: '0.76rem', padding: '4px 10px', borderRadius: '4px', color: '#555558' }}>
                  {t}
                </span>
              ))}
            </div>

            <p style={{ fontSize: '0.96rem', color: '#444446', lineHeight: 1.7, whiteSpace: 'pre-line' }}>
              {selectedCaseStudy.body}
            </p>

            <div style={{ marginTop: '28px', display: 'flex', gap: '12px' }}>
              <button
                onClick={() => {
                  setSelectedCaseStudy(null);
                  handleOpenContact(`Inquiry regarding ${selectedCaseStudy.title}`);
                }}
                style={{
                  backgroundColor: '#0071e3',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '9999px',
                  padding: '10px 22px',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                Inquire Similar Deployment
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Lightbox Image Modal */}
      {lightboxImg && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 99999,
            padding: '24px'
          }}
          onClick={() => setLightboxImg(null)}
        >
          <button
            onClick={() => setLightboxImg(null)}
            style={{
              position: 'absolute',
              top: '24px',
              right: '24px',
              background: 'rgba(255, 255, 255, 0.2)',
              border: 'none',
              borderRadius: '50%',
              width: '44px',
              height: '44px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: '#ffffff'
            }}
          >
            <X size={24} />
          </button>

          <img
            src={lightboxImg.src}
            alt={lightboxImg.title}
            style={{ maxWidth: '92vw', maxHeight: '82vh', objectFit: 'contain', borderRadius: '12px', boxShadow: '0 20px 60px rgba(0, 0, 0, 0.6)' }}
            onClick={(e) => e.stopPropagation()}
          />
          <span style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '1rem', fontWeight: 600, marginTop: '16px' }}>
            {lightboxImg.title}
          </span>
        </div>
      )}

      {/* Contact Sales Modal */}
      <ContactSalesModal
        isOpen={showContactModal}
        onClose={() => setShowContactModal(false)}
        initialSubject={contactSubject}
      />

    </div>
  );
}
