import React, { useState, useRef, useCallback } from 'react';
import { Eye, Sparkles, Moon, Sun, ArrowLeftRight } from 'lucide-react';

export default function NightVisionSlider() {
  const [sliderPos, setSliderPos] = useState(50); // percentage 0 - 100
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 5) percentage = 5;
    if (percentage > 95) percentage = 95;
    setSliderPos(percentage);
  }, []);

  const handleTouchMove = (e) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <div
      style={{
        position: 'relative',
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '0 16px',
      }}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
    >
      <div
        ref={containerRef}
        className="slider-container"
        onMouseDown={(e) => {
          setIsDragging(true);
          handleMove(e.clientX);
        }}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        style={{ cursor: 'ew-resize', height: '540px' }}
      >
        {/* Right side background: Coloron 4K ColorSense Night Vision (Vivid, sharp, full-color nocturnal street/building) */}
        <img
          src="https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1600&q=80"
          alt="Coloron ColorSense 4K Full-Color Nocturnal"
          className="slider-img"
          style={{
            filter: 'contrast(105%) saturate(125%) brightness(100%)',
          }}
        />

        {/* Left side overlay (Clipped): Conventional Infrared Grainy B&W CCTV */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            width: `${sliderPos}%`,
            overflow: 'hidden',
            borderRight: '2px solid rgba(255, 255, 255, 0.9)',
          }}
        >
          <div style={{ position: 'relative', width: containerRef.current?.offsetWidth || '1100px', height: '100%' }}>
            <img
              src="https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1600&q=80"
              alt="Conventional IR Black & White CCTV"
              className="slider-img"
              style={{
                filter: 'grayscale(100%) contrast(140%) brightness(75%) blur(0.5px)',
              }}
            />
            {/* Grain Noise Overlay for Conventional IR simulation */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'radial-gradient(circle, transparent 40%, rgba(0,0,0,0.6) 100%)',
                pointerEvents: 'none',
              }}
            />
          </div>
        </div>

        {/* Floating Label: Left (Conventional IR) */}
        <div
          style={{
            position: 'absolute',
            top: '24px',
            left: '24px',
            background: 'rgba(0, 0, 0, 0.75)',
            backdropFilter: 'blur(12px)',
            padding: '8px 16px',
            borderRadius: '9999px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            pointerEvents: 'none',
          }}
        >
          <Moon size={14} color="#86868b" />
          <span style={{ fontSize: '0.8rem', color: '#a1a1a6', fontWeight: 500 }}>
            Standard CCTV: Grainy IR B&W (F2.0)
          </span>
        </div>

        {/* Floating Label: Right (Coloron ColorSense) */}
        <div
          style={{
            position: 'absolute',
            top: '24px',
            right: '24px',
            background: 'rgba(0, 113, 227, 0.85)',
            backdropFilter: 'blur(12px)',
            padding: '8px 16px',
            borderRadius: '9999px',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            pointerEvents: 'none',
            boxShadow: '0 4px 20px rgba(0, 113, 227, 0.5)',
          }}
        >
          <Sparkles size={14} color="#ffd60a" />
          <span style={{ fontSize: '0.8rem', color: '#ffffff', fontWeight: 600 }}>
            Coloron ColorSense: 24/7 Full Color (F1.0)
          </span>
        </div>

        {/* Draggable Divider Handle */}
        <div
          className="slider-handle"
          style={{
            left: `${sliderPos}%`,
          }}
        >
          <div className="slider-handle-circle">
            <ArrowLeftRight size={18} strokeWidth={2.4} />
          </div>
        </div>

        {/* Bottom Specs Ticker */}
        <div
          style={{
            position: 'absolute',
            bottom: '20px',
            left: '20px',
            right: '20px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            background: 'rgba(10, 10, 14, 0.85)',
            backdropFilter: 'blur(20px)',
            borderRadius: '14px',
            padding: '12px 20px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            pointerEvents: 'none',
          }}
        >
          <div style={{ display: 'flex', gap: '20px', fontSize: '0.82rem' }}>
            <div>
              <span style={{ color: '#86868b' }}>Aperture: </span>
              <span style={{ color: '#f5f5f7', fontWeight: 600 }}>Super-Aperture F1.0 (4x light capture)</span>
            </div>
            <div style={{ display: 'none' }} className="desktop-stat">
              <span style={{ color: '#86868b' }}>Lux Sensitivity: </span>
              <span style={{ color: '#f5f5f7', fontWeight: 600 }}>0.0003 Lux Night Rating</span>
            </div>
            <div style={{ display: 'none' }} className="desktop-stat">
              <span style={{ color: '#86868b' }}>ISP Engine: </span>
              <span style={{ color: '#2997ff', fontWeight: 600 }}>Neural 3D-DNR + Multi-Frame Fusion</span>
            </div>
          </div>
          <span style={{ fontSize: '0.75rem', color: '#ffd60a', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Sparkles size={12} /> Drag to Compare
          </span>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .desktop-stat { display: block !important; }
        }
      `}</style>
    </div>
  );
}
