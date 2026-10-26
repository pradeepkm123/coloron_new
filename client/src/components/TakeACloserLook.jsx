import React, { useState } from 'react';
import { X, Play } from 'lucide-react';

export default function TakeACloserLook() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section
      style={{
        padding: '30px 0 80px',
        backgroundColor: '#ffffff',
      }}
    >
      <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 32px' }}>
        {/* Section Heading */}
        <div style={{ paddingLeft: '12px', paddingRight: '12px', marginBottom: '28px' }}>
          <h2
            style={{
              fontSize: '2.75rem',
              fontWeight: 700,
              color: '#1d1d1f',
              letterSpacing: '-0.035em',
              margin: 0,
              fontFamily:
                '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Icons", "Helvetica Neue", Helvetica, Arial, sans-serif',
            }}
          >
            Take a closer look.
          </h2>
        </div>

        {/* Guided Tour Banner Card */}
        <div style={{ paddingLeft: '12px', paddingRight: '12px' }}>
          <div
            onClick={() => setShowVideo(true)}
            style={{
              position: 'relative',
              width: '100%',
              borderRadius: '28px',
              overflow: 'hidden',
              cursor: 'pointer',
              backgroundColor: '#e5e5ea',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.07)',
              transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.008)';
              e.currentTarget.style.boxShadow = '0 18px 45px rgba(0, 0, 0, 0.12)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.07)';
            }}
          >
            <img
              src="/images/cctv_guided_tour.jpg"
              alt="A Guided Tour of Coloron AI CCTV and Enterprise Surveillance Lineup"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                objectFit: 'cover',
              }}
            />

            {/* Floating 'Watch the film' Glass Pill */}
            <div
              style={{
                position: 'absolute',
                bottom: 'clamp(20px, 3.5vw, 40px)',
                left: 'clamp(20px, 3.5vw, 44px)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                backgroundColor: 'rgba(29, 29, 31, 0.82)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                color: '#ffffff',
                padding: '12px 22px',
                borderRadius: '9999px',
                fontSize: '0.92rem',
                fontWeight: 500,
                boxShadow: '0 10px 24px rgba(0, 0, 0, 0.3)',
                transition: 'all 0.2s ease',
              }}
            >
              <div
                style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  backgroundColor: '#0071e3',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Play size={12} fill="#ffffff" color="#ffffff" style={{ marginLeft: '2px' }} />
              </div>
              Watch the film
            </div>
          </div>
        </div>
      </div>

      {/* Apple-Style Video Modal when 'Watch the film' is clicked */}
      {showVideo && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
            backdropFilter: 'blur(16px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
          }}
          onClick={() => setShowVideo(false)}
        >
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '1000px',
              borderRadius: '20px',
              overflow: 'hidden',
              backgroundColor: '#000000',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.5)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowVideo(false)}
              aria-label="Close video"
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                zIndex: 10,
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'background-color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.25)')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.6)')}
            >
              <X size={18} />
            </button>

            {/* Video Player */}
            <video
              src="https://assets.mixkit.co/videos/preview/mixkit-modern-office-building-with-glass-facade-41710-large.mp4"
              controls
              autoPlay
              style={{
                width: '100%',
                aspectRatio: '16/9',
                display: 'block',
                backgroundColor: '#000000',
              }}
            />

            <div style={{ padding: '20px 24px', backgroundColor: '#1d1d1f', color: '#ffffff' }}>
              <h3 style={{ margin: '0 0 4px', fontSize: '1.25rem', fontWeight: 600 }}>
                A Guided Tour of Coloron AI CCTV &amp; Optical Systems
              </h3>
              <p style={{ margin: 0, fontSize: '0.9rem', color: '#86868b' }}>
                Explore cutting-edge optical sensors, breakthrough AI neural detection, 24/7 ColorSense night vision, and enterprise surveillance architecture.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
