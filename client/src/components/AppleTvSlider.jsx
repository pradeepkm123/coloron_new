import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Play, Pause, ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    badge: 'GOVERNMENT CERTIFIED',
    title: 'COLOR ON Proudly Meets BIS-ER Certified by STQC',
    tagline: 'Engineered for Excellence • Ensuring Quality, Reliability and Compliance',
    buttonText: 'Explore Certified Range',
    link: '/products',
    image: '/images/home_slider/Image1.png',
    accent: '#f59e0b',
    bgColor: '#000000',
  },
  {
    id: 2,
    badge: 'STQC SERIES',
    title: 'Introducing COLOR ON STQC Series',
    tagline: 'Born to Lead • Certified to Protect • Superior Performance & Dependable Reliability',
    buttonText: 'View Series',
    link: '/products',
    image: '/images/home_slider/Image2.png',
    accent: '#2563eb',
    bgColor: '#f8fafc',
  },
  {
    id: 3,
    badge: 'ACCESS CONTROL',
    title: 'Biometrics Identification and Authentication',
    tagline: 'Security Access Right at Your Fingertips • Face Recognition, RFID & Smart Access',
    buttonText: 'Explore Solutions',
    link: '/solutions/access-control',
    image: '/images/home_slider/Image3.png',
    accent: '#0284c7',
    bgColor: '#ffffff',
  },
  {
    id: 4,
    badge: 'SMART SAFETY',
    title: 'COLOR ON For Your Smart Safety',
    tagline: 'Comprehensive Security Solutions for Home, Office & Business',
    buttonText: 'Discover More',
    link: '/solutions',
    image: '/images/home_slider/Image4.png',
    accent: '#16a34a',
    bgColor: '#ffffff',
  },
  {
    id: 5,
    badge: 'BHARAT NIRMAN',
    title: 'Made in India For India and the World',
    tagline: 'Trusted Security Solutions • Engineered for a Safer Tomorrow',
    buttonText: 'About COLOR ON',
    link: '/about',
    image: '/images/home_slider/Image5.png',
    accent: '#ea580c',
    bgColor: '#ffffff',
  },
  {
    id: 6,
    badge: 'INNOVATION & R&D',
    title: 'Indian Manufacturing Brand and R&D',
    tagline: 'Building a Safer Tomorrow, Made in India • Local Support & Quality Assurance',
    buttonText: 'Learn More',
    link: '/about',
    image: '/images/home_slider/Image6.png',
    accent: '#16a34a',
    bgColor: '#ffffff',
  },
  {
    id: 7,
    badge: 'AI-POWERED NVR',
    title: 'Make Surveillance Smarter with AI-Enabled NVRs',
    tagline: 'Intelligent Analytics • 4K Ultra HD Resolution • Large Storage • Smart Alerts',
    buttonText: 'Explore NVR Lineup',
    link: '/products',
    image: '/images/home_slider/Image7.png',
    accent: '#dc2626',
    bgColor: '#ffffff',
  },
];

export default function AppleTvSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const duration = 5000;
  const intervalRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
    setProgress(0);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
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
    // 40px threshold for mobile swipe
    if (diff > 40) {
      nextSlide();
    } else if (diff < -40) {
      prevSlide();
    }
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  useEffect(() => {
    if (!isPlaying) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }

    const stepMs = 50;
    intervalRef.current = setInterval(() => {
      setProgress((old) => {
        if (old >= 100) {
          nextSlide();
        }
        return old >= 100 ? 0 : old + (stepMs / duration) * 100;
      });
    }, stepMs);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPlaying, currentIndex]);

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        overflow: 'hidden',
        padding: 'clamp(12px, 2.5vw, 24px) 0 clamp(16px, 3.5vw, 36px)',
        backgroundColor: '#000000',
        userSelect: 'none',
        WebkitUserSelect: 'none',
      }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Outer Track with Peek-in Sides - Full-Width Layout */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          height: 'clamp(140px, 32.5vw, 550px)',
          width: '100%',
        }}
      >
        {slides.map((slide, idx) => {
          let offset = idx - currentIndex;
          if (offset < -Math.floor(slides.length / 2)) offset += slides.length;
          if (offset > Math.floor(slides.length / 2)) offset -= slides.length;

          const isActive = offset === 0;
          const isLeft = offset === -1 || (currentIndex === 0 && idx === slides.length - 1);
          const isRight = offset === 1 || (currentIndex === slides.length - 1 && idx === 0);
          const isVisible = isActive || isLeft || isRight;

          if (!isVisible) return null;

          return (
            <div
              key={slide.id}
              onClick={() => {
                if (!isActive) goToSlide(idx);
              }}
              style={{
                position: 'absolute',
                width: 'min(1600px, 92vw)',
                aspectRatio: '2170 / 724',
                maxHeight: '540px',
                borderRadius: 'clamp(12px, 1.8vw, 20px)',
                overflow: 'hidden',
                backgroundColor: slide.bgColor || '#000000',
                transition: 'all 0.65s cubic-bezier(0.25, 1, 0.5, 1)',
                transform: `translateX(${offset * 102}%) scale(${isActive ? 1 : 0.94})`,
                opacity: isActive ? 1 : 0.45,
                zIndex: isActive ? 10 : 5,
                cursor: isActive ? 'default' : 'pointer',
                boxShadow: isActive ? '0 16px 48px rgba(0, 0, 0, 0.6)' : 'none',
                filter: isActive ? 'none' : 'brightness(70%) blur(0.5px)',
              }}
            >
              {/* Pure Cinematic Image Only */}
              {isActive ? (
                <Link
                  to={slide.link}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    height: '100%',
                    backgroundColor: slide.bgColor || '#000000',
                    textDecoration: 'none',
                    cursor: 'pointer',
                  }}
                >
                  <img
                    src={slide.image}
                    alt={slide.title || `Slide ${slide.id}`}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                    }}
                  />
                </Link>
              ) : (
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    height: '100%',
                    backgroundColor: slide.bgColor || '#000000',
                  }}
                >
                  <img
                    src={slide.image}
                    alt={slide.title || `Slide ${slide.id}`}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                    }}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Floating Arrow Navigation */}
      <button
        onClick={prevSlide}
        aria-label="Previous slide"
        className="hero-slider-arrow left"
        style={{
          position: 'absolute',
          top: '50%',
          left: 'max(12px, calc((100vw - min(1600px, 92vw)) / 2 - 20px))',
          transform: 'translateY(-50%)',
          width: 'clamp(32px, 3.5vw, 46px)',
          height: 'clamp(32px, 3.5vw, 46px)',
          borderRadius: '50%',
          background: 'rgba(30, 30, 36, 0.8)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          zIndex: 20,
          boxShadow: '0 4px 14px rgba(0, 0, 0, 0.5)',
          transition: 'all 0.2s ease',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.25)')}
        onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(30, 30, 36, 0.8)')}
      >
        <ChevronLeft size={20} />
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next slide"
        className="hero-slider-arrow right"
        style={{
          position: 'absolute',
          top: '50%',
          right: 'max(12px, calc((100vw - min(1600px, 92vw)) / 2 - 20px))',
          transform: 'translateY(-50%)',
          width: 'clamp(32px, 3.5vw, 46px)',
          height: 'clamp(32px, 3.5vw, 46px)',
          borderRadius: '50%',
          background: 'rgba(30, 30, 36, 0.8)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          zIndex: 20,
          boxShadow: '0 4px 14px rgba(0, 0, 0, 0.5)',
          transition: 'all 0.2s ease',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.25)')}
        onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(30, 30, 36, 0.8)')}
      >
        <ChevronRight size={20} />
      </button>

      {/* Bottom Controls Bar: Progress Dots + Play/Pause */}
      <div
        style={{
          maxWidth: '1600px',
          margin: '18px auto 0',
          padding: '0 clamp(16px, 4vw, 32px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        {/* Centered Dots with Active Progress Capsule */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          {slides.map((_, idx) => {
            const isActive = currentIndex === idx;
            return (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                style={{
                  position: 'relative',
                  width: isActive ? 'clamp(26px, 4vw, 36px)' : '6px',
                  height: '6px',
                  borderRadius: '9999px',
                  background: 'rgba(255, 255, 255, 0.25)',
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
                      background: '#ffffff',
                      borderRadius: '9999px',
                      transition: isPlaying ? 'width 0.05s linear' : 'none',
                    }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Far Right: Play / Pause Button */}
        <div style={{ position: 'absolute', right: 'clamp(16px, 3.5vw, 32px)' }}>
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
            style={{
              width: '28px',
              height: '28px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.25)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)')}
          >
            {isPlaying ? <Pause size={12} fill="#ffffff" /> : <Play size={12} fill="#ffffff" />}
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .hero-slider-arrow {
            opacity: 0.6;
          }
        }
      `}</style>
    </div>
  );
}
