import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  Scan,
} from 'lucide-react';

const technologies = [
  {
    id: 'aov-solarvu',
    title: 'AOV SolarVu™ Cameras',
    badge: '100% Off-Grid Solar AI',
    hudTag: 'AUTONOMOUS 4G & SOLAR ARRAY',
    targetInfo: 'POWER: 80W SOLAR | BATTERY: 360Wh | 4G LTE',
    description:
      'Engineered for locations without power grids or Ethernet infrastructure. Continuous 24/7 video monitoring powered by high-yield photovoltaic solar cells, deep-cycle lithium storage, and 4G cellular telemetry.',
    buttonText: 'Discover Now',
    link: '/technologies?tech=solar-powered-4g',
    image: '/images/solar_camera_hero.jpg',
    video: '/images/speed-measurement/checkpoint-highway-video.mp4',
    imageAlt: 'AOV SolarVu Autonomous Solar Cameras',
  },
  {
    id: 'guanlan-encoding',
    title: 'Guanlan Encoding',
    badge: 'AI ROI Compression',
    hudTag: 'ROI ENCODING: -50% BITRATE',
    targetInfo: 'CODEC: SMART H.265+ | 4K 60FPS | ROI ACTIVE',
    description:
      "Guanlan Encoding brings Hikvision's Guanlan Large-Scale AI Model directly into the video encoding pipeline – cutting storage costs by 30%–50% on average without compromising the clarity of critical objects like people and vehicles.",
    buttonText: 'Discover Now',
    link: '/technologies#guanlan-encoding',
    image: '/images/core_tech_guanlan.jpg',
    video: '/videos/cctv_hero_bg.webm',
    imageAlt: 'Guanlan Encoding AI Video Compression',
  },
  {
    id: 'colorvu',
    title: 'ColorVu Technology',
    badge: '24/7 Full-Color Optics',
    hudTag: '0.0003 LUX ZERO-GLARE ENHANCER',
    targetInfo: 'APERTURE: F1.0 | SENSOR: 1/1.2" | COLOR NIGHT',
    description:
      'ColorVu Technology captures high-resolution, full-color images in ultra-low light environments down to 0.0003 Lux, turning night into day with F1.0 super-aperture lenses and advanced sensors.',
    buttonText: 'Discover Now',
    link: '/technologies#colorsense',
    image: '/images/core_tech_colorvu.jpg',
    video: '/images/speed-measurement/checkpoint-highway-video.mp4',
    imageAlt: 'ColorVu Ultra Low-Light Imaging',
  },
  {
    id: 'acusense',
    title: 'AcuSense Intelligence',
    badge: 'Deep Learning Vision',
    hudTag: 'FALSE ALARM FILTERING: 99.4%',
    targetInfo: 'TARGET: VEHICLE (0.97) | PEDESTRIAN (0.98)',
    description:
      'Deep learning algorithms classify humans and vehicles with 99.4% accuracy, eliminating false alarms triggered by raindrops, leaves, and animals, focusing attention on real security threats.',
    buttonText: 'Discover Now',
    link: '/technologies#neural-ai',
    image: '/images/core_tech_acusense.jpg',
    video: '/images/violation-detection/video_intersection_violation.mp4',
    imageAlt: 'AcuSense AI Deep Learning Object Classification',
  },
  {
    id: 'tandemvu',
    title: 'TandemVu Technology',
    badge: 'Dual-Lens Synergy',
    hudTag: '180° PANORAMA + 40X PTZ TRACKING',
    targetInfo: 'CHANNEL 1: 180° OVERVIEW | CHANNEL 2: TARGET LOCK',
    description:
      'Integrates panoramic and PTZ lenses within a single housing, maintaining continuous wide-angle situational awareness while autonomously zooming in to track and identify targets.',
    buttonText: 'Discover Now',
    link: '/technologies#thermal-spectrum',
    image: '/images/core_tech_tandemvu.jpg',
    video: '/images/speed-measurement/video-highway-corridor.mp4',
    imageAlt: 'TandemVu Dual-Lens Surveillance Technology',
  },
];

export default function CoreTechnologiesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [fadeState, setFadeState] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);
  const timerRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const total = technologies.length;

  const goToSlide = (newIndex) => {
    setFadeState(false);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setIsPlaying(true);
      setFadeState(true);
    }, 200);
  };

  const handlePrev = () => {
    goToSlide((currentIndex - 1 + total) % total);
  };

  const handleNext = () => {
    goToSlide((currentIndex + 1) % total);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const deltaX = touchStartX.current - touchEndX.current;
    if (deltaX > 45) {
      handleNext();
    } else if (deltaX < -45) {
      handlePrev();
    }
  };

  // Auto advance slide every 8 seconds when not hovering
  useEffect(() => {
    if (isHovered) return;
    timerRef.current = setInterval(() => {
      goToSlide((currentIndex + 1) % total);
    }, 8000);
    return () => clearInterval(timerRef.current);
  }, [currentIndex, isHovered, total]);

  // Handle Play/Pause toggle
  const togglePlay = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  // Handle Mute toggle
  const toggleMute = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  // Fullscreen video
  const toggleFullscreen = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if (videoRef.current.webkitRequestFullscreen) {
        videoRef.current.webkitRequestFullscreen();
      }
    }
  };

  const currentTech = technologies[currentIndex];

  return (
    <section
      aria-label="Core Technologies"
      style={{
        backgroundColor: '#000000',
        color: '#ffffff',
        padding: '70px 0 80px',
        overflow: 'hidden',
        position: 'relative',
        userSelect: 'none',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        style={{
          maxWidth: '1360px',
          margin: '0 auto',
          padding: '0 clamp(20px, 4vw, 48px)',
        }}
      >
        {/* Section Top Header: Core Technologies & View more -> */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '40px',
          }}
        >
          <h2
            style={{
              fontSize: 'clamp(2rem, 3.2vw, 2.75rem)',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              color: '#ffffff',
              margin: 0,
              lineHeight: 1.2,
            }}
          >
            Core Technologies
          </h2>

          <Link
            to="/technologies"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '15px',
              fontWeight: 500,
              color: '#9ca3af',
              textDecoration: 'none',
              transition: 'color 0.2s ease, transform 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#ffffff';
              e.currentTarget.style.transform = 'translateX(3px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#9ca3af';
              e.currentTarget.style.transform = 'translateX(0)';
            }}
          >
            View more
            <span style={{ fontSize: '18px', lineHeight: 1 }}>&rarr;</span>
          </Link>
        </div>

        {/* Slide Content: Video Showcase Left + Text Right */}
        <div
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 540px), 1fr))',
            alignItems: 'center',
            gap: 'clamp(24px, 5vw, 64px)',
            minHeight: '440px',
            opacity: fadeState ? 1 : 0,
            transform: fadeState ? 'translateY(0)' : 'translateY(8px)',
            transition: 'opacity 0.25s ease, transform 0.25s ease',
            touchAction: 'pan-y',
          }}
        >
          {/* Active Video Player Showcase Left */}
          <div
            style={{
              position: 'relative',
              borderRadius: '20px',
              overflow: 'hidden',
              backgroundColor: '#050505',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.85), 0 0 35px rgba(0, 113, 227, 0.18)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              aspectRatio: '16/9',
            }}
          >
            {/* Live Playing Video Element */}
            <video
              ref={videoRef}
              key={currentTech.id}
              src={currentTech.video}
              poster={currentTech.image}
              autoPlay
              muted={isMuted}
              loop
              playsInline
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
                borderRadius: '19px',
              }}
            />

            {/* Futuristic Tech HUD Overlay on Video */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                pointerEvents: 'none',
                background:
                  'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.05) 30%, rgba(0,0,0,0.05) 70%, rgba(0,0,0,0.7) 100%)',
                borderRadius: '19px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '16px 20px',
              }}
            >
              {/* HUD Header Bar */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                {/* REC Status & Camera Channel */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      backgroundColor: '#ef4444',
                      boxShadow: '0 0 8px #ef4444',
                      display: 'inline-block',
                      animation: 'pulse 1.5s infinite',
                    }}
                  />
                  <span
                    style={{
                      fontSize: '11px',
                      fontWeight: 700,
                      color: '#ffffff',
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      fontFamily: 'monospace',
                    }}
                  >
                    LIVE STREAM • CAM 04
                  </span>
                </div>

                {/* Tech Badge */}
                <div
                  style={{
                    backgroundColor: 'rgba(0, 113, 227, 0.35)',
                    border: '1px solid rgba(0, 113, 227, 0.6)',
                    backdropFilter: 'blur(8px)',
                    color: '#60a5fa',
                    fontSize: '10px',
                    fontWeight: 700,
                    padding: '3px 9px',
                    borderRadius: '4px',
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    fontFamily: 'monospace',
                  }}
                >
                  {currentTech.hudTag}
                </div>
              </div>

              {/* Central AI Targeting Crosshairs & Scanline Accent */}
              <div
                style={{
                  position: 'absolute',
                  inset: '28px',
                  border: '1px dashed rgba(41, 151, 255, 0.25)',
                  borderRadius: '10px',
                  pointerEvents: 'none',
                }}
              >
                {/* 4 Corner Reticles */}
                <div
                  style={{
                    position: 'absolute',
                    top: '-1px',
                    left: '-1px',
                    width: '14px',
                    height: '14px',
                    borderTop: '2px solid #2997ff',
                    borderLeft: '2px solid #2997ff',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '-1px',
                    right: '-1px',
                    width: '14px',
                    height: '14px',
                    borderTop: '2px solid #2997ff',
                    borderRight: '2px solid #2997ff',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    bottom: '-1px',
                    left: '-1px',
                    width: '14px',
                    height: '14px',
                    borderBottom: '2px solid #2997ff',
                    borderLeft: '2px solid #2997ff',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    bottom: '-1px',
                    right: '-1px',
                    width: '14px',
                    height: '14px',
                    borderBottom: '2px solid #2997ff',
                    borderRight: '2px solid #2997ff',
                  }}
                />
              </div>

              {/* HUD Footer Bar: Telemetry Info + Interactive Controls */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-end',
                  justifyContent: 'space-between',
                  zIndex: 2,
                }}
              >
                {/* Telemetry Target Info */}
                <div
                  style={{
                    fontSize: '11px',
                    color: '#93c5fd',
                    fontFamily: 'monospace',
                    letterSpacing: '0.04em',
                    backgroundColor: 'rgba(0, 0, 0, 0.55)',
                    padding: '4px 10px',
                    borderRadius: '4px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                >
                  {currentTech.targetInfo}
                </div>

                {/* Video Playback Glass Controls */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    pointerEvents: 'auto',
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    borderRadius: '8px',
                    padding: '4px',
                  }}
                >
                  {/* Play / Pause Toggle */}
                  <button
                    onClick={togglePlay}
                    aria-label={isPlaying ? 'Pause video' : 'Play video'}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#ffffff',
                      cursor: 'pointer',
                      padding: '4px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: '4px',
                      transition: 'background 0.2s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.2)')}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                  >
                    {isPlaying ? <Pause size={14} /> : <Play size={14} />}
                  </button>

                  {/* Mute / Unmute Toggle */}
                  <button
                    onClick={toggleMute}
                    aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#ffffff',
                      cursor: 'pointer',
                      padding: '4px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: '4px',
                      transition: 'background 0.2s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.2)')}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                  >
                    {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
                  </button>

                  {/* Fullscreen Video Button */}
                  <button
                    onClick={toggleFullscreen}
                    aria-label="Fullscreen video"
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#ffffff',
                      cursor: 'pointer',
                      padding: '4px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: '4px',
                      transition: 'background 0.2s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.2)')}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                  >
                    <Maximize2 size={13} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content Right */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              padding: '10px 0',
            }}
          >
            {/* Tech Category Badge */}
            <div style={{ marginBottom: '12px' }}>
              <span
                style={{
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  color: '#2997ff',
                  backgroundColor: 'rgba(41, 151, 255, 0.12)',
                  border: '1px solid rgba(41, 151, 255, 0.25)',
                  padding: '4px 12px',
                  borderRadius: '9999px',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                }}
              >
                {currentTech.badge}
              </span>
            </div>

            <h3
              style={{
                fontSize: 'clamp(1.85rem, 3vw, 2.45rem)',
                fontWeight: 600,
                letterSpacing: '-0.02em',
                color: '#ffffff',
                marginBottom: '20px',
                lineHeight: 1.25,
              }}
            >
              {currentTech.title}
            </h3>

            <p
              style={{
                fontSize: 'clamp(0.95rem, 1.3vw, 1.05rem)',
                color: '#a1a1a6',
                lineHeight: 1.75,
                marginBottom: '36px',
                maxWidth: '540px',
                letterSpacing: '-0.01em',
              }}
            >
              {currentTech.description}
            </p>

            <div>
              <Link
                to={currentTech.link}
                style={{
                  display: 'inline-block',
                  border: '1px solid rgba(255, 255, 255, 0.45)',
                  backgroundColor: 'transparent',
                  color: '#ffffff',
                  borderRadius: '9999px',
                  padding: '10px 30px',
                  fontSize: '15px',
                  fontWeight: 500,
                  textDecoration: 'none',
                  letterSpacing: '-0.01em',
                  transition: 'all 0.25s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#ffffff';
                  e.currentTarget.style.color = '#000000';
                  e.currentTarget.style.borderColor = '#ffffff';
                  e.currentTarget.style.boxShadow = '0 0 20px rgba(255, 255, 255, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#ffffff';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.45)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {currentTech.buttonText}
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Carousel Controls: Prev <, Dots, Next > */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '24px',
            marginTop: '48px',
          }}
        >
          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            aria-label="Previous Technology Slide"
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              outline: 'none',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.35)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
            }}
          >
            <ChevronLeft size={20} strokeWidth={2.2} />
          </button>

          {/* Dots Indicator */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            {technologies.map((tech, idx) => {
              const isActive = idx === currentIndex;
              return (
                <button
                  key={tech.id}
                  onClick={() => goToSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  style={{
                    width: isActive ? '20px' : '8px',
                    height: '8px',
                    borderRadius: '4px',
                    backgroundColor: isActive ? '#ffffff' : 'rgba(255, 255, 255, 0.3)',
                    border: 'none',
                    padding: 0,
                    cursor: 'pointer',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                    boxShadow: isActive ? '0 0 10px rgba(255, 255, 255, 0.5)' : 'none',
                  }}
                />
              );
            })}
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            aria-label="Next Technology Slide"
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              outline: 'none',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.35)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
            }}
          >
            <ChevronRight size={20} strokeWidth={2.2} />
          </button>
        </div>
      </div>
    </section>
  );
}
