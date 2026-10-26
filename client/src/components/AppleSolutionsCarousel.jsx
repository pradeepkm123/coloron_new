import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Play, Pause, ChevronRight, Shield } from 'lucide-react';

export default function AppleSolutionsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const duration = 5000;
  const timerRef = useRef(null);

  const solutionCards = [
    {
      id: 'commercial',
      title: 'Commercial Enterprises & Campuses',
      tagline: 'Frictionless 0.2s facial recognition access',
      video: 'https://assets.mixkit.co/videos/preview/mixkit-modern-office-building-with-glass-facade-41710-large.mp4',
      poster: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
      link: '/solutions#commercial',
      tag: 'Office & Campus',
    },
    {
      id: 'city',
      title: 'Smart Cities & Municipal Traffic',
      tagline: 'High-speed ANPR license plate capture up to 160 km/h',
      video: 'https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-city-traffic-at-night-42217-large.mp4',
      poster: 'https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=1200&q=80',
      link: '/solutions#city',
      tag: 'Municipal AIoT',
    },
    {
      id: 'banking',
      title: 'Banking & Financial Vaults',
      tagline: '140dB Super WDR with NDAA AES-256 RAID archives',
      video: 'https://assets.mixkit.co/videos/preview/mixkit-security-camera-recording-traffic-41748-large.mp4',
      poster: 'https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?auto=format&fit=crop&w=1200&q=80',
      link: '/solutions#banking',
      tag: 'Banking Tier',
    },
    {
      id: 'industrial',
      title: 'Industrial Logistics & Seaports',
      tagline: 'Dual-spectrum radiometric thermal heat detection',
      video: 'https://assets.mixkit.co/videos/preview/mixkit-forklift-moving-boxes-in-a-warehouse-42526-large.mp4',
      poster: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
      link: '/solutions#industrial',
      tag: 'Heavy Industrial',
    },
    {
      id: 'retail',
      title: 'Retail Stores & Commercial Malls',
      tagline: 'Customer dwell heatmaps & cashier loss prevention',
      video: 'https://assets.mixkit.co/videos/preview/mixkit-people-walking-in-a-shopping-mall-41852-large.mp4',
      poster: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&w=1200&q=80',
      link: '/solutions#retail',
      tag: 'Retail Analytics',
    },
    {
      id: 'residential',
      title: 'Luxury Estates & Smart Villas',
      tagline: 'Discreet pan & tilt with mechanical privacy shutter',
      video: 'https://assets.mixkit.co/videos/preview/mixkit-modern-suburban-house-exterior-at-sunset-42173-large.mp4',
      poster: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      link: '/solutions#residential',
      tag: 'Private Estate',
    },
  ];

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % solutionCards.length);
    setProgress(0);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + solutionCards.length) % solutionCards.length);
    setProgress(0);
  };

  const goToSlide = (idx) => {
    setCurrentIndex(idx);
    setProgress(0);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 45) {
      nextSlide();
    } else if (diff < -45) {
      prevSlide();
    }
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  useEffect(() => {
    if (!isPlaying) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    const stepMs = 50;
    timerRef.current = setInterval(() => {
      setProgress((old) => {
        if (old >= 100) {
          nextSlide();
          return 0;
        }
        return old + (stepMs / duration) * 100;
      });
    }, stepMs);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, currentIndex]);

  return (
    <section
      style={{
        backgroundColor: '#f5f5f7',
        color: '#1d1d1f',
        padding: '72px 0 64px',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: '1600px', margin: '0 auto', padding: '0 24px', marginBottom: '32px' }}>
        {/* Apple Heading: Solutions */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <h2
              style={{
                fontSize: 'clamp(2.8rem, 5.2vw, 4.2rem)',
                fontWeight: 600,
                letterSpacing: '-0.025em',
                color: '#1d1d1f',
                lineHeight: 1.05,
                margin: 0,
              }}
            >
              Solutions
            </h2>
            <p
              style={{
                fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
                color: '#6e6e73',
                fontWeight: 400,
                letterSpacing: '-0.01em',
                marginTop: '6px',
              }}
            >
              Explore tailored surveillance architectures built for enterprise scale.
            </p>
          </div>

          <Link
            to="/solutions"
            style={{
              color: '#0071e3',
              textDecoration: 'none',
              fontSize: '0.95rem',
              fontWeight: 400,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
            onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
          >
            All solutions <ChevronRight size={16} />
          </Link>
        </div>
      </div>

      {/* Horizontal Carousel Track - Full Bleed Video Cards */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          overflow: 'hidden',
          padding: '10px 0 20px',
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          style={{
            display: 'flex',
            gap: '20px',
            transform: `translateX(calc(max(16px, (100vw - 1600px) / 2) - ${currentIndex} * (min(780px, 86vw) + 20px)))`,
            transition: 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)',
            paddingLeft: '0',
          }}
        >
          {solutionCards.map((card, idx) => (
            <Link
              key={card.id}
              to={card.link}
              style={{
                textDecoration: 'none',
                color: '#ffffff',
                flex: '0 0 min(780px, 86vw)',
                height: 'clamp(300px, 44vw, 460px)',
                borderRadius: 'clamp(14px, 2vw, 24px)',
                overflow: 'hidden',
                position: 'relative',
                backgroundColor: '#000000',
                boxShadow: '0 15px 35px rgba(0, 0, 0, 0.12)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'pointer',
                display: 'block',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.015)';
                e.currentTarget.style.boxShadow = '0 20px 45px rgba(0, 0, 0, 0.18)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.12)';
              }}
            >
              {/* Full-Bleed Video Element */}
              <video
                src={card.video}
                poster={card.poster}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />

              {/* Cinematic Bottom Gradient Overlay */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 40%, transparent 80%)',
                }}
              />

              {/* Top Tag Pill */}
              <div
                style={{
                  position: 'absolute',
                  top: '24px',
                  left: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: 'rgba(0, 0, 0, 0.65)',
                  backdropFilter: 'blur(12px)',
                  padding: '6px 14px',
                  borderRadius: '9999px',
                  fontSize: '0.78rem',
                  color: '#ffffff',
                  fontWeight: 600,
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                }}
              >
                <span
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: '#30d158',
                    boxShadow: '0 0 8px #30d158',
                  }}
                />
                <span>{card.tag}</span>
              </div>

              {/* Bottom Title & Tagline Overlay */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '28px',
                  left: '28px',
                  right: '28px',
                  zIndex: 2,
                }}
              >
                <h3
                  style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)',
                    fontWeight: 700,
                    color: '#ffffff',
                    margin: 0,
                    lineHeight: 1.2,
                    textShadow: '0 2px 10px rgba(0,0,0,0.7)',
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.95rem',
                    color: '#d2d2d7',
                    margin: '6px 0 0',
                    fontWeight: 400,
                    textShadow: '0 2px 8px rgba(0,0,0,0.7)',
                  }}
                >
                  {card.tagline}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom Controls: Apple-Style Progress Dots + Play/Pause */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '16px',
          marginTop: '28px',
        }}
      >
        {/* Dots Capsule */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(0, 0, 0, 0.08)',
            padding: '8px 16px',
            borderRadius: '9999px',
          }}
        >
          {solutionCards.map((_, idx) => {
            const isActive = currentIndex === idx;
            return (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                aria-label={`Go to solution ${idx + 1}`}
                style={{
                  position: 'relative',
                  width: isActive ? '36px' : '8px',
                  height: '8px',
                  borderRadius: '9999px',
                  background: 'rgba(0, 0, 0, 0.25)',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  overflow: 'hidden',
                  transition: 'width 0.3s cubic-bezier(0.25, 1, 0.5, 1)',
                }}
              >
                {isActive && (
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      bottom: 0,
                      width: `${progress}%`,
                      background: '#1d1d1f',
                      borderRadius: '9999px',
                      transition: isPlaying ? 'width 0.05s linear' : 'none',
                    }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Play/Pause Button */}
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
          style={{
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            background: 'rgba(0, 0, 0, 0.08)',
            border: 'none',
            color: '#1d1d1f',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'background 0.2s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(0, 0, 0, 0.15)')}
          onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(0, 0, 0, 0.08)')}
        >
          {isPlaying ? <Pause size={13} fill="#1d1d1f" /> : <Play size={13} fill="#1d1d1f" />}
        </button>
      </div>
    </section>
  );
}
