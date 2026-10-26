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
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Cpu,
  MonitorCheck
} from 'lucide-react';
import ContactSalesModal from '../components/ContactSalesModal';

// Dedicated Interactive Video Scenario Card with Violation HUD
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
          ? '0 10px 30px rgba(220, 38, 38, 0.25)'
          : '0 8px 24px rgba(0, 0, 0, 0.12)',
        border: isAlert
          ? '1.5px solid rgba(220, 38, 38, 0.45)'
          : '1px solid rgba(255, 255, 255, 0.12)',
        transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease'
      }}
      onMouseEnter={(e) => {
        setIsHovered(true);
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = isAlert
          ? '0 16px 36px rgba(220, 38, 38, 0.35)'
          : '0 16px 36px rgba(0, 113, 227, 0.22)';
      }}
      onMouseLeave={(e) => {
        setIsHovered(false);
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = isAlert
          ? '0 10px 30px rgba(220, 38, 38, 0.25)'
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
          background: 'linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 40%, rgba(0,0,0,0.8) 100%)',
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
          {isAlert ? 'VIOLATION DETECTED' : 'ANPR MONITORING'}
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
          e.currentTarget.style.backgroundColor = 'rgba(217, 35, 35, 0.9)';
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
            backgroundColor: 'rgba(217, 35, 35, 0.92)',
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
            boxShadow: '0 6px 20px rgba(217, 35, 35, 0.45)',
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
        <MapPin size={14} color="#d92323" />
        {sc.title}
      </div>

      {/* Bottom Right: Authentic Violation Telemetry HUD */}
      <div
        style={{
          position: 'absolute',
          bottom: '16px',
          right: '16px',
          backgroundColor: isAlert ? 'rgba(38, 12, 16, 0.94)' : 'rgba(12, 24, 44, 0.88)',
          backdropFilter: 'blur(12px)',
          border: isAlert ? '1px solid rgba(255, 69, 58, 0.55)' : '1px solid rgba(255, 255, 255, 0.22)',
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
          Plate: <strong style={{ color: '#ffffff' }}>{sc.telemetry?.plate || 'MH12 AB 8901'}</strong>
        </div>
        <div style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '0.72rem' }}>
          Lane: <strong style={{ color: '#ffffff' }}>{sc.telemetry?.lane || 'Lane 01'}</strong>
        </div>
      </div>
    </div>
  );
}

export default function ViolationDetectionSolution() {
  const [activeTab, setActiveTab] = useState('intersection');
  const [lightboxImg, setLightboxImg] = useState(null);
  const [activeVideoModal, setActiveVideoModal] = useState(null);
  const [showContactModal, setShowContactModal] = useState(false);
  const [contactSubject, setContactSubject] = useState('Violation Detection Solution');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);
  const [expandedCategories, setExpandedCategories] = useState({
    'cat-capture': true,
    'cat-strobe': false,
    'cat-detectors': false,
    'cat-allrounder': true,
    'cat-terminals': false,
    'cat-yellow-units': true,
    'cat-gore-cams': true,
    'cat-parking-ptz': true
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

  const handleOpenContact = (subject = 'Violation Detection Solution') => {
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
    { id: 'intersection', name: 'Intersection violation detection' },
    { id: 'yellowbox', name: 'Yellow box junction violation detection' },
    { id: 'gorearea', name: 'Crossing the gore area detection' },
    { id: 'parking', name: 'Illegal parking detection' }
  ];

  // Recommended Solution Content per Tab
  const solutionData = {
    intersection: {
      id: 'intersection',
      headline: 'Guaranteed safety of drivers & pedestrians in orderly traffic',
      bullets: [
        'Prevents disputes between citizens and law enforcement, enhances efficiency and standardization of law enforcement',
        'Detects a variety of traffic violations including red light running, wrong-way driving, not following directional signs, illegal lane change, weaving out of lane, speeding, etc.',
        'Provides abundant vehicle feature data – license plate number, vehicle color, manufacturer, vehicle classification and speed'
      ],
      scenarios: [
        {
          title: 'Crossroads',
          img: '/images/violation-detection/scenario_crossroads.jpg',
          video: '/images/violation-detection/video_intersection_violation.mp4',
          telemetry: {
            event: 'RED LIGHT VIOLATION',
            plate: 'KA04 MF 6821',
            lane: 'Lane 01 (Left/Straight)',
            isAlert: true
          }
        },
        {
          title: 'T junctions',
          img: '/images/violation-detection/scenario_t_junction.jpg',
          video: '/images/violation-detection/video_diversion_zone.mp4',
          telemetry: {
            event: 'ILLEGAL LANE DIVERSION',
            plate: 'DL01 TC 4920',
            lane: 'Lane 02 (Cross Turning)',
            isAlert: true
          }
        }
      ],
      architectures: [
        {
          id: 'arch-capture-units',
          title: 'Solution with capture units',
          topoImg: '/images/violation-detection/topo_capture_units.jpg',
          categories: [
            {
              id: 'cat-capture',
              title: 'Capture units',
              items: [
                {
                  name: 'Coloron 9 MP DeepinView Traffic Violation Capture Camera',
                  model: 'CLR-TC900-V',
                  desc: 'High-definition 1" Global Shutter CMOS sensor capturing 3 full traffic lanes. Features multi-frame fusion HDR, vehicle body classification, and optical ANPR with over 99% recognition accuracy.',
                  badge: 'Flagship 9 MP'
                },
                {
                  name: 'Coloron 4K Multi-Sensor Roadside Enforcement Camera',
                  model: 'CLR-TC400-ANPR',
                  desc: 'Motorized varifocal telephoto lens with edge neural processing. Automatically triggers 3 high-resolution burst frames per red-light violation (entry, mid-crossing, exit) with stamped timing.',
                  badge: 'Triple-Frame Evidence'
                }
              ]
            },
            {
              id: 'cat-strobe',
              title: 'Strobe lights',
              items: [
                {
                  name: 'Coloron Synchronous Intelligent White LED Strobe Light',
                  model: 'CLR-STR-100W',
                  desc: 'High-power synchronized strobe unit operating in tandem with camera exposure. Provides uniform illumination without blinding motorists, ensuring forensic-grade nighttime license plate capture.',
                  badge: 'Anti-Glare Strobe'
                }
              ]
            },
            {
              id: 'cat-detectors',
              title: 'Signal detectors',
              items: [
                {
                  name: 'Coloron Optical Traffic Light Signal Phase Detector',
                  model: 'CLR-TLD-800',
                  desc: 'Connects directly to intersection traffic signal controller cabinets or uses AI visual optical sensing to synchronize red, amber, and green phase timing with zero millisecond latency.',
                  badge: 'Zero Latency Sync'
                }
              ]
            }
          ]
        },
        {
          id: 'arch-allrounder',
          title: 'Solution with all-rounder traffic cameras',
          topoImg: '/images/violation-detection/topo_allinone.jpg',
          categories: [
            {
              id: 'cat-allrounder',
              title: 'All-rounder traffic cameras',
              items: [
                {
                  name: 'Coloron All-in-One Multi-Lane Traffic Radar-Video Camera',
                  model: 'CLR-AIT-9000',
                  desc: 'Integrates 9 MP camera, 77 GHz tracking Doppler radar, and edge AI processor inside one IP67 enclosure. Simultaneously performs speed enforcement, red-light detection, and vehicle classification across 4 lanes.',
                  badge: 'Radar + Video'
                }
              ]
            },
            {
              id: 'cat-terminals',
              title: 'Terminals & Signal Detectors',
              items: [
                {
                  name: 'Coloron Edge Intelligent Traffic Management Terminal',
                  model: 'CLR-ETM-2400',
                  desc: 'Ruggedized roadside cabinet server supporting forensic cryptographic watermark signing, dual-fiber uplink redundancy, and direct integration with municipal traffic violation dispatch centers.',
                  badge: 'Edge Server'
                }
              ]
            }
          ]
        }
      ]
    },
    yellowbox: {
      id: 'yellowbox',
      headline: 'Enhanced traffic efficiency at key crossroads or road segments',
      bullets: [
        'Relieves gridlock and traffic congestion, ensuring the safety of pedestrians at busy crossroads or accident-prone road segments',
        'Detects the violations of illegally driving into the yellow box junction of a crossroad when forward traffic is congested',
        'Detects violations of stranding or illegally stopping in the yellow box junction near schools, hospitals, and emergency depots',
        'Provides abundant vehicle feature data – license plate number, vehicle color, manufacturer, dwell time and trajectory tracking'
      ],
      scenarios: [
        {
          title: 'Crossroads Yellow Box',
          img: '/images/violation-detection/scenario_crossroads.jpg',
          video: '/images/violation-detection/video_intersection_violation.mp4',
          telemetry: {
            event: 'YELLOW BOX GRIDLOCK VIOLATION',
            plate: 'MH02 BJ 3110',
            lane: 'Central Yellow Mesh',
            isAlert: true
          }
        },
        {
          title: 'Critical Facility Corridors',
          img: '/images/violation-detection/traffic_light.jpg',
          video: '/images/violation-detection/video_diversion_zone.mp4',
          telemetry: {
            event: 'EMERGENCY LANE BLOCKING',
            plate: 'MH14 CX 8802',
            lane: 'Hospital Entry Box',
            isAlert: true
          }
        }
      ],
      architectures: [
        {
          id: 'arch-yellow-capture',
          title: 'Solution with capture units & central terminals',
          topoImg: '/images/violation-detection/topo_capture_units.jpg',
          categories: [
            {
              id: 'cat-yellow-units',
              title: 'Capture units & Strobe lights',
              items: [
                {
                  name: 'Coloron High-Resolution Yellow Box Grid Monitor',
                  model: 'CLR-YBX-800',
                  desc: 'Configurable virtual mesh polygons detecting vehicles that enter the yellow box without a clear exit path. Configurable dwell time filters out legitimate slow-moving traffic while penalizing gridlock blockages.',
                  badge: 'Virtual Mesh AI'
                }
              ]
            }
          ]
        }
      ]
    },
    gorearea: {
      id: 'gorearea',
      headline: 'Reduced accident rates, improved road safety at highway splits',
      bullets: [
        'Regulates driving behaviors and eliminates dangerous abrupt lane cut-offs at expressway exits',
        'Detects gore area violations and records the whole continuous trajectory at highway exit ramps or complex urban road merges',
        'Provides rich vehicle feature data – license plate number, vehicle color, speed, trajectory vector, and driver profile'
      ],
      scenarios: [
        {
          title: 'Exit ramps of highways',
          img: '/images/violation-detection/scenario_crossroads.jpg',
          video: '/images/violation-detection/video_diversion_zone.mp4',
          telemetry: {
            event: 'CROSSING GORE AREA CHEVRON',
            plate: 'HR26 DK 1145',
            lane: 'Expressway Exit Split',
            isAlert: true
          }
        },
        {
          title: 'Urban road merging',
          img: '/images/violation-detection/scenario_t_junction.jpg',
          video: '/images/violation-detection/video_intersection_violation.mp4',
          telemetry: {
            event: 'ILLEGAL OVERTAKE MERGE',
            plate: 'UP16 ZQ 7730',
            lane: 'Gore Buffer Zone',
            isAlert: true
          }
        }
      ],
      architectures: [
        {
          id: 'arch-gore-allinone',
          title: 'Solution with all-rounder incident detection cameras',
          topoImg: '/images/violation-detection/topo_allinone.jpg',
          categories: [
            {
              id: 'cat-gore-cams',
              title: 'All-rounder incident detection cameras & Terminals',
              items: [
                {
                  name: 'Coloron Gore Area Multi-Lane Tracking Camera',
                  model: 'CLR-GRA-600',
                  desc: 'Equipped with wide-angle optical zoom and continuous vector tracking across painted chevron buffer zones. Logs entry point, traverse duration, and exit vector with timestamped 1080p evidence video.',
                  badge: 'Gore Zone AI'
                }
              ]
            }
          ]
        }
      ]
    },
    parking: {
      id: 'parking',
      headline: 'Reduced road occupancy and urban congestion by illegal parking',
      bullets: [
        'Improves enforcement efficiency through automated video-based remote detection and management of illegal parking violations',
        'Detects and reports illegally parked vehicles that cause road congestion or traffic incidents at roadsides, bus stops, and taxi ranks',
        'Provides abundant vehicle feature data – license plate number, vehicle color, type, parking duration, and multiple timestamped snapshots'
      ],
      scenarios: [
        {
          title: 'Roadside Enforcement',
          img: '/images/violation-detection/scenario_crossroads.jpg',
          video: '/images/violation-detection/video_intersection_violation.mp4',
          telemetry: {
            event: 'ILLEGAL CURBSIDE PARKING',
            plate: 'TS09 FA 9912',
            lane: 'Arterial Curb Lane',
            isAlert: true
          }
        },
        {
          title: 'Dedicated Bus Stops',
          img: '/images/violation-detection/scenario_t_junction.jpg',
          video: '/images/violation-detection/video_diversion_zone.mp4',
          telemetry: {
            event: 'BUS BAY ENCROACHMENT',
            plate: 'WB02 KK 5532',
            lane: 'BRT Transit Bay',
            isAlert: true
          }
        }
      ],
      architectures: [
        {
          id: 'arch-parking-ptz',
          title: 'Solution with Traffic PTZ Cameras & 4K NVR Storage',
          topoImg: '/images/violation-detection/topo_allinone.jpg',
          categories: [
            {
              id: 'cat-parking-ptz',
              title: 'Traffic PTZ Cameras & 4K NVRs',
              items: [
                {
                  name: 'Coloron 4K 40x Ultra-Long-Range Traffic PTZ Enforcement Camera',
                  model: 'CLR-PTZ-840',
                  desc: 'High-speed pan-tilt-zoom camera with automated patrol tours covering up to 500 meters of urban curbside. Automatically zooms in, reads license plate, logs dwell duration, and generates legal evidence packages.',
                  badge: '40x Optical PTZ'
                },
                {
                  name: 'Coloron 32-Channel 2U 4K Deep Learning NVR Storage',
                  model: 'CLR-NVR-9632',
                  desc: 'Enterprise 32-ch 4K network video recorder featuring RAID 0/1/5/6/10 data protection, encrypted evidence tamper resistance, and instant search by license plate or vehicle color.',
                  badge: 'Enterprise Storage'
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

      {/* 1. HERO BANNER - Exact 750px Height with Curved Arc Overlay & Night Intersection */}
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
        {/* Background Image: Night/Dusk Intersection with Yellow Grid & Headlight Trails */}
        <img
          src="/images/violation-detection/hero_banner.jpg"
          alt="Violation Detection Intersection Solution"
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

          {/* Main Title: Violation Detection */}
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
            Violation Detection
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
              onClick={() => scrollToSection('key-technology')}
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
              Key technology
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
              onClick={() => scrollToSection('success-stories')}
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
              Success stories
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
            onClick={() => handleOpenContact('Violation Detection Inquiry')}
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

      {/* 3. "WHAT WE OFFER" SECTION - Exact 4 3D Icons Layout */}
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
            maxWidth: '820px',
            margin: '0 auto 60px'
          }}
        >
          Coloron violation detection solutions provide reliable evidence for law enforcement departments to reduce accidents and traffic congestion, creating safer and smoother roadways for drivers and pedestrians alike.
        </p>

        {/* 4 Feature Items Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '36px',
            alignItems: 'start'
          }}
        >
          {/* Item 1 */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
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
                src="/images/violation-detection/offer_icon_1.jpg"
                alt="Red light running detection"
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
              Red light running<br />detection
            </h3>
          </div>

          {/* Item 2 */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
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
                src="/images/violation-detection/offer_icon_2.jpg"
                alt="Illegal parking detection"
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
              Illegal parking<br />detection
            </h3>
          </div>

          {/* Item 3 */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
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
                src="/images/violation-detection/offer_icon_3.jpg"
                alt="Wrong-way driving detection"
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
              Wrong-way driving<br />detection
            </h3>
          </div>

          {/* Item 4 */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
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
                src="/images/violation-detection/offer_icon_4.jpg"
                alt="Illegal lane change detection"
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
              Illegal lane change<br />detection
            </h3>
          </div>
        </div>
      </section>

      {/* 4. "KEY TECHNOLOGY" SECTION - Traffic light enhancement technology */}
      <section
        id="key-technology"
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
              marginBottom: '50px'
            }}
          >
            Key technology
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: '48px',
              alignItems: 'center'
            }}
          >
            {/* Left Image: Traffic Light */}
            <div
              style={{
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 12px 36px rgba(0, 0, 0, 0.08)',
                backgroundColor: '#ffffff',
                border: '1px solid #e5e5ea',
                cursor: 'pointer',
                transition: 'transform 0.3s ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.01)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              onClick={() => setLightboxImg('/images/violation-detection/traffic_light.jpg')}
            >
              <img
                src="/images/violation-detection/traffic_light.jpg"
                alt="Traffic light enhancement technology"
                style={{ width: '100%', height: '360px', objectFit: 'cover', display: 'block' }}
              />
            </div>

            {/* Right Copy: Bullets */}
            <div>
              <h3
                style={{
                  fontSize: '1.45rem',
                  fontWeight: 700,
                  color: '#1d1d1f',
                  marginBottom: '20px'
                }}
              >
                Traffic light enhancement technology
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <span
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      backgroundColor: '#d92323',
                      marginTop: '8px',
                      flexShrink: 0
                    }}
                  />
                  <p style={{ fontSize: '1rem', color: '#424245', lineHeight: 1.5, margin: 0 }}>
                    Render realistic, natural imaging under harsh sunlight and low-light night conditions
                  </p>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <span
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      backgroundColor: '#d92323',
                      marginTop: '8px',
                      flexShrink: 0
                    }}
                  />
                  <p style={{ fontSize: '1rem', color: '#424245', lineHeight: 1.5, margin: 0 }}>
                    Remain unaffected by traffic light shaking caused by high winds or gantry vibration
                  </p>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <span
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      backgroundColor: '#d92323',
                      marginTop: '8px',
                      flexShrink: 0
                    }}
                  />
                  <p style={{ fontSize: '1rem', color: '#424245', lineHeight: 1.5, margin: 0 }}>
                    Are not affected by sudden ambient changes from bright day to pitch night
                  </p>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <span
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      backgroundColor: '#d92323',
                      marginTop: '8px',
                      flexShrink: 0
                    }}
                  />
                  <p style={{ fontSize: '1rem', color: '#424245', lineHeight: 1.5, margin: 0 }}>
                    Resolves issues around green lights appearing overexposed or white in optical cameras
                  </p>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <span
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      backgroundColor: '#d92323',
                      marginTop: '8px',
                      flexShrink: 0
                    }}
                  />
                  <p style={{ fontSize: '1rem', color: '#424245', lineHeight: 1.5, margin: 0 }}>
                    Deep learning algorithm multi-lane tracking automatically correlates signal status with vehicle trajectory
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. "RECOMMENDED SOLUTION" SECTION - 4 Tabs, Scenario Videos & Topologies */}
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

        {/* 4 Tabs Bar */}
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

          {/* Interactive Scenario Cards with Real Video */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '24px',
              marginBottom: '56px'
            }}
          >
            {currentTab.scenarios.map((sc, idx) => (
              <ScenarioVideoCard key={idx} sc={sc} onOpenModal={(scenario) => setActiveVideoModal(scenario)} />
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

      {/* 6. "SUCCESS STORIES" SECTION - Historic Ancient City Bell Tower Roundabout */}
      <section
        id="success-stories"
        style={{
          padding: '80px 24px',
          backgroundColor: '#f5f5f7'
        }}
      >
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: 'clamp(2rem, 3.2vw, 2.6rem)',
              fontWeight: 700,
              color: '#1d1d1f',
              textAlign: 'center',
              marginBottom: '50px'
            }}
          >
            Success stories
          </h2>

          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 8px 30px rgba(0,0,0,0.06)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
              cursor: 'pointer',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}
            onClick={() =>
              setSelectedCaseStudy({
                title: 'Intelligent traffic management: helping vehicles to flow through an ancient city',
                date: 'July 20, 2020',
                img: '/images/violation-detection/success_story.jpg',
                tags: ['Speed measurement', 'Incident detection', 'Intelligent traffic', 'Violation detection'],
                content: `An ancient historic city renowned for centuries of cultural heritage faced severe urban congestion at its iconic central bell tower roundabout and surrounding arterials. 

With more than 300,000 vehicles traversing the central monument plaza daily, illegal lane changing, yellow box stranding, and red light running caused persistent gridlock.

Coloron deployed an intelligent violation detection ecosystem comprising 4K Global Shutter capture cameras, multi-lane radar tracking, and real-time ANPR edge analytics.

Key Results:
• Reduced peak-hour roundabout waiting times by 28%
• 41% decrease in illegal lane changes and improper turns
• Over 99.2% automated violation recognition accuracy with certified forensic evidence
• Seamless preservation of the cultural heritage aesthetic through compact, unobtrusive camera units`
              })
            }
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,0,0,0.12)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.06)';
            }}
          >
            <div style={{ height: '340px', overflow: 'hidden' }}>
              <img
                src="/images/violation-detection/success_story.jpg"
                alt="Ancient City Intelligent Traffic Management"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            <div style={{ padding: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: '#86868b',
                  fontSize: '0.85rem',
                  marginBottom: '14px'
                }}
              >
                <Calendar size={14} />
                July 20, 2020
              </div>

              <h3
                style={{
                  fontSize: '1.45rem',
                  fontWeight: 700,
                  color: '#1d1d1f',
                  lineHeight: 1.3,
                  marginBottom: '16px'
                }}
              >
                Intelligent traffic management: helping vehicles to flow through an ancient city
              </h3>

              <p style={{ fontSize: '0.94rem', color: '#515154', lineHeight: 1.55, marginBottom: '24px' }}>
                Deploying intelligent traffic cameras and violation capture systems at major historic intersections and rotary arteries to streamline dense vehicle flow and preserve cultural heritage zones.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {['Speed measurement', 'AR live interaction', 'Incident detection', 'Intelligent traffic', 'Violation detection'].map((t, i) => (
                  <span
                    key={i}
                    style={{
                      backgroundColor: '#f5f5f7',
                      color: '#1d1d1f',
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
        </div>
      </section>

      {/* 7. "YOU MAY ALSO BE INTERESTED IN" SECTION */}
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
          {/* Card 1: Urban Roadways */}
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
                Comprehensive citywide traffic management, arterial signal coordination, and urban corridor flow optimization.
              </p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#d92323', fontWeight: 600, fontSize: '0.9rem', marginTop: '20px' }}>
              Learn more <ArrowRight size={16} />
            </div>
          </Link>

          {/* Card 2: Incident Detection */}
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
                Real-time automated detection of stopped vehicles, wrong-way drivers, pedestrians, and expressway hazards.
              </p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#d92323', fontWeight: 600, fontSize: '0.9rem', marginTop: '20px' }}>
              Learn more <ArrowRight size={16} />
            </div>
          </Link>

          {/* Card 3: Speed Measurement */}
          <Link
            to="/solutions/speed-measurement"
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
                Speed Measurement
              </h4>
              <p style={{ fontSize: '0.9rem', color: '#a1a1a6', lineHeight: 1.5, margin: 0 }}>
                High-precision multi-lane radar and laser velocity enforcement with automatic point-to-point average speed calculation.
              </p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#d92323', fontWeight: 600, fontSize: '0.9rem', marginTop: '20px' }}>
              Learn more <ArrowRight size={16} />
            </div>
          </Link>
        </div>
      </section>

      {/* 8. "READY TO DISCUSS YOUR NEEDS?" CTA BANNER */}
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
              onClick={() => handleOpenContact('Violation Detection Solution Consultation')}
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
              onClick={() => handleOpenContact('Violation Detection Technical Advisory')}
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

      {/* FULLSCREEN VIDEO MODAL */}
      {activeVideoModal && (
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
          onClick={() => setActiveVideoModal(null)}
        >
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '1020px',
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
                    backgroundColor: '#d92323',
                    boxShadow: '0 0 10px #d92323'
                  }}
                />
                <h3 style={{ color: '#ffffff', fontSize: '1.15rem', fontWeight: 700, margin: 0 }}>
                  {activeVideoModal.title} — Real-time Violation Capture Stream
                </h3>
              </div>

              <button
                onClick={() => setActiveVideoModal(null)}
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

            {/* Video Player in Modal */}
            <div style={{ position: 'relative', maxHeight: '70vh', backgroundColor: '#000000' }}>
              <video
                src={activeVideoModal.video}
                autoPlay
                controls
                playsInline
                style={{ width: '100%', maxHeight: '70vh', display: 'block' }}
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
                  <div style={{ color: '#86868b', fontSize: '0.75rem', textTransform: 'uppercase' }}>Violation Type</div>
                  <div style={{ color: '#ff453a', fontWeight: 700, fontSize: '0.95rem' }}>
                    {activeVideoModal.telemetry?.event}
                  </div>
                </div>
                <div>
                  <div style={{ color: '#86868b', fontSize: '0.75rem', textTransform: 'uppercase' }}>License Plate</div>
                  <div style={{ color: '#ffffff', fontWeight: 600, fontSize: '0.95rem' }}>
                    {activeVideoModal.telemetry?.plate}
                  </div>
                </div>
                <div>
                  <div style={{ color: '#86868b', fontSize: '0.75rem', textTransform: 'uppercase' }}>Lane Assignment</div>
                  <div style={{ color: '#ffffff', fontWeight: 600, fontSize: '0.95rem' }}>
                    {activeVideoModal.telemetry?.lane}
                  </div>
                </div>
              </div>

              <button
                onClick={() => {
                  setToastMessage('High-resolution violation snapshot downloaded with cryptographic signature.');
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
                <Download size={14} /> Export Forensic Snapshot
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

      {/* CASE STUDY MODAL */}
      {selectedCaseStudy && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
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
              backgroundColor: '#ffffff',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.35)',
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
              <div style={{ fontSize: '0.85rem', color: '#86868b', marginBottom: '8px' }}>
                {selectedCaseStudy.date}
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1d1d1f', marginBottom: '20px' }}>
                {selectedCaseStudy.title}
              </h3>
              <div style={{ whiteSpace: 'pre-line', fontSize: '0.96rem', lineHeight: 1.65, color: '#424245' }}>
                {selectedCaseStudy.content}
              </div>

              <div style={{ marginTop: '28px', paddingTop: '20px', borderTop: '1px solid #f0f0f2', display: 'flex', justifyContent: 'flex-end' }}>
                <button
                  onClick={() => {
                    setSelectedCaseStudy(null);
                    handleOpenContact('Ancient City Case Study Inquiry');
                  }}
                  style={{
                    backgroundColor: '#d92323',
                    color: '#ffffff',
                    border: 'none',
                    padding: '10px 24px',
                    borderRadius: '8px',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  Request Detailed Case Study PDF
                </button>
              </div>
            </div>
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
