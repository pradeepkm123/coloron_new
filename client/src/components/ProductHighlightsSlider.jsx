import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Play, Pause, ChevronLeft, ChevronRight } from 'lucide-react';

const highlightVideos = [
  {
    id: 'highlight-1',
    src: 'https://assets.mixkit.co/videos/preview/mixkit-security-camera-recording-traffic-41748-large.mp4',
    poster: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'highlight-2',
    src: 'https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-city-traffic-at-night-42217-large.mp4',
    poster: 'https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'highlight-3',
    src: 'https://assets.mixkit.co/videos/preview/mixkit-modern-office-building-with-glass-facade-41710-large.mp4',
    poster: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'highlight-4',
    src: 'https://assets.mixkit.co/videos/preview/mixkit-people-walking-in-a-shopping-mall-41852-large.mp4',
    poster: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'highlight-5',
    src: 'https://assets.mixkit.co/videos/preview/mixkit-forklift-moving-boxes-in-a-warehouse-42526-large.mp4',
    poster: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
  },
];

export default function ProductHighlightsSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const [cardWidth, setCardWidth] = useState(820);
  const [leftOffset, setLeftOffset] = useState(32);

  const duration = 5000; // 5 seconds per slide
  const timerRef = useRef(null);
  const dragStartRef = useRef(0);
  const videoRefs = useRef([]);
  const totalSlides = highlightVideos.length;
  const cardGap = 28;

  // Responsive card width and left-alignment offset
  useEffect(() => {
    function handleResize() {
      const vw = window.innerWidth;
      const cw = Math.min(840, Math.max(300, vw - 56));
      setCardWidth(cw);

      if (vw > 1440) {
        setLeftOffset((vw - 1440) / 2 + 32);
      } else {
        setLeftOffset(Math.max(20, vw * 0.04));
      }
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % totalSlides);
    setProgress(0);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    setProgress(0);
  }, [totalSlides]);

  const goToSlide = (idx) => {
    setActiveIndex(idx);
    setProgress(0);
  };

  // Video playback management for active card
  useEffect(() => {
    videoRefs.current.forEach((video, idx) => {
      if (!video) return;
      if (idx === activeIndex && isPlaying) {
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {});
        }
      } else {
        video.pause();
      }
    });
  }, [activeIndex, isPlaying]);

  // Auto-advance timer with smooth progress bar
  useEffect(() => {
    if (!isPlaying || isHovered || isDragging) {
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
  }, [isPlaying, isHovered, isDragging, nextSlide]);

  // Pointer drag gestures
  const handlePointerDown = (e) => {
    if (e.button && e.button !== 0) return;
    setIsDragging(true);
    dragStartRef.current = e.clientX || (e.touches && e.touches[0].clientX) || 0;
    setDragOffset(0);
  };

  const handlePointerMove = (e) => {
    if (!isDragging) return;
    const currentX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
    setDragOffset(currentX - dragStartRef.current);
  };

  const handlePointerUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    const threshold = 60;
    if (dragOffset < -threshold) {
      nextSlide();
    } else if (dragOffset > threshold) {
      prevSlide();
    }
    setDragOffset(0);
  };

  const currentShift = activeIndex * (cardWidth + cardGap);

  return (
    <section
      style={{
        backgroundColor: '#ffffff',
        padding: '70px 0 85px',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid #f0f0f2',
        width: '100%',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        if (isDragging) handlePointerUp();
      }}
    >
      {/* 1. Section Heading (Left-aligned to content grid) */}
      <div
        style={{
          paddingLeft: `${leftOffset}px`,
          paddingRight: `${leftOffset}px`,
          marginBottom: '32px',
        }}
      >
        <h2
          style={{
            fontSize: 'clamp(36px, 4.2vw, 54px)',
            fontWeight: 700,
            color: '#1d1d1f',
            letterSpacing: '-0.035em',
            margin: 0,
            lineHeight: 1.1,
            fontFamily:
              '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Icons", "Helvetica Neue", Helvetica, Arial, sans-serif',
          }}
        >
          Get the highlights.
        </h2>
      </div>

      {/* 2. Full-Width Carousel Viewport (Bleeds all the way across the right side) */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          overflow: 'hidden',
          paddingBottom: '16px',
        }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        <div
          style={{
            display: 'flex',
            gap: `${cardGap}px`,
            paddingLeft: `${leftOffset}px`,
            paddingRight: `${leftOffset}px`,
            transition: isDragging ? 'none' : 'transform 0.65s cubic-bezier(0.16, 1, 0.3, 1)',
            transform: `translateX(${-currentShift + dragOffset}px)`,
            cursor: isDragging ? 'grabbing' : 'grab',
            userSelect: 'none',
            width: 'max-content',
          }}
          className="highlights-cards-track"
        >
          {highlightVideos.map((item, idx) => {
            const isCurrent = idx === activeIndex;
            return (
              <div
                key={item.id}
                onClick={() => goToSlide(idx)}
                style={{
                  width: `${cardWidth}px`,
                  height: 'clamp(380px, 45vw, 500px)',
                  borderRadius: '32px',
                  backgroundColor: '#000000',
                  boxShadow: isCurrent
                    ? '0 20px 48px rgba(0, 0, 0, 0.16)'
                    : '0 6px 20px rgba(0, 0, 0, 0.05)',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'opacity 0.4s ease, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                  opacity: isCurrent ? 1 : 0.7,
                  transform: isCurrent ? 'scale(1)' : 'scale(0.985)',
                  flexShrink: 0,
                  cursor: 'pointer',
                }}
                className="highlights-card"
              >
                {/* Pure Video Element filling the full card with zero text */}
                <video
                  ref={(el) => (videoRefs.current[idx] = el)}
                  src={item.src}
                  poster={item.poster}
                  muted
                  playsInline
                  loop
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    borderRadius: '32px',
                    pointerEvents: 'none',
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* 3. Apple Pill Controller & Interactive Steppers */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '14px',
          marginTop: '24px',
        }}
      >
        {/* Previous Chevron Button */}
        <button
          onClick={prevSlide}
          aria-label="Previous highlight"
          style={{
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            backgroundColor: '#e8e8ed',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: '#1d1d1f',
            transition: 'background-color 0.2s ease, transform 0.15s ease',
            boxShadow: '0 2px 6px rgba(0, 0, 0, 0.04)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#dedee3';
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#e8e8ed';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          <ChevronLeft size={18} />
        </button>

        {/* Apple Pill Progress Bar Container */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            backgroundColor: '#e8e8ed',
            padding: '10px 18px',
            borderRadius: '9999px',
            boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.06)',
          }}
        >
          {highlightVideos.map((_, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                title={`Go to highlight ${idx + 1}`}
                style={{
                  position: 'relative',
                  width: isActive ? '36px' : '7px',
                  height: '7px',
                  borderRadius: '9999px',
                  backgroundColor: isActive ? 'rgba(29, 29, 31, 0.2)' : 'rgba(29, 29, 31, 0.35)',
                  border: 'none',
                  padding: 0,
                  cursor: 'pointer',
                  overflow: 'hidden',
                  transition: 'width 0.3s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.2s ease',
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
                      backgroundColor: '#1d1d1f',
                      borderRadius: '9999px',
                      transition: 'width 0.05s linear',
                    }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Next Chevron Button */}
        <button
          onClick={nextSlide}
          aria-label="Next highlight"
          style={{
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            backgroundColor: '#e8e8ed',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: '#1d1d1f',
            transition: 'background-color 0.2s ease, transform 0.15s ease',
            boxShadow: '0 2px 6px rgba(0, 0, 0, 0.04)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#dedee3';
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#e8e8ed';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          <ChevronRight size={18} />
        </button>

        {/* Apple Circular Play / Pause Button */}
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
          style={{
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            backgroundColor: '#e8e8ed',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: '#1d1d1f',
            transition: 'background-color 0.2s ease, transform 0.15s ease',
            boxShadow: '0 2px 6px rgba(0, 0, 0, 0.04)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#dedee3';
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#e8e8ed';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          {isPlaying ? <Pause size={14} fill="#1d1d1f" /> : <Play size={14} fill="#1d1d1f" style={{ marginLeft: '2px' }} />}
        </button>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .highlights-card {
            height: 320px !important;
            border-radius: 24px !important;
          }
          .highlights-card video {
            border-radius: 24px !important;
          }
        }
      `}</style>
    </section>
  );
}
