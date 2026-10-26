import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, Maximize2 } from 'lucide-react';

/**
 * Coloron-branded animated dock management "video".
 * Pure SVG + requestAnimationFrame, no third-party video or branding.
 * Timeline (seconds):
 *  0-3   Dock available
 *  3-9   Truck reverses in, ANPR reads plate
 *  9-11  Docked, dock door opens
 *  11-18 Rear door open, loading 0 -> 100%
 *  18-20 Doors close
 *  20-24 Truck drives out
 */
const DURATION = 24;
const ORANGE = '#ea580c';
const PLATE = 'PL8 NO 123';

const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const ease = (x) => (x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2);
const ramp = (t, start, end) => ease(clamp((t - start) / (end - start)));
const lerp = (a, b, k) => a + (b - a) * k;
const fmt = (s) => `0:${String(Math.floor(s)).padStart(2, '0')}`;

function getState(t) {
  const approach = t < 20 ? ramp(t, 3, 9) : 1 - ramp(t, 20, 24);
  const plateRead = t >= 6.5 && t < 22;
  const occupied = t >= 9 && t < 20;
  const dockDoor = t < 18 ? ramp(t, 9.5, 11) : 1 - ramp(t, 18, 19.5);
  const truckDoorOpen = t >= 11 && t < 18;
  const loading = Math.round(ramp(t, 11.5, 17.5) * 100 * (t < 20 ? 1 : 1));
  let driving = 'Waiting';
  if (t >= 3 && t < 9) driving = 'Driving in';
  else if (t >= 9 && t < 20) driving = 'Parked';
  else if (t >= 20) driving = 'Driving out';

  let caption = 'Dock A01 available, waiting for assigned truck';
  if (t >= 3 && t < 6.5) caption = 'Truck approaching, Dock Camera tracking vehicle';
  else if (t >= 6.5 && t < 9) caption = 'ANPR: license plate recognized & matched to booking';
  else if (t >= 9 && t < 11) caption = 'Dock occupied, LED light on, dock door opening';
  else if (t >= 11 && t < 18) caption = 'Rear door open, real-time loading rate detection';
  else if (t >= 18 && t < 20) caption = 'Loading complete, doors closing';
  else if (t >= 20) caption = 'Truck departing, dock released for next booking';

  return { approach, plateRead, occupied, dockDoor, truckDoorOpen, loading, driving, caption, scanning: t >= 3 && t < 9 };
}

function Truck({ approach, truckDoorOpen, loading, plateRead, mini = false }) {
  const cx = lerp(1180, 800, approach);
  const by = lerp(560, 650, approach);
  const s = lerp(0.42, 1, approach);
  const boxes = Math.floor((loading / 100) * 12);

  return (
    <g transform={`translate(${cx} ${by}) scale(${s})`}>
      {/* shadow */}
      <ellipse cx="0" cy="8" rx="230" ry="18" fill="rgba(0,0,0,0.45)" />
      {/* wheels */}
      <rect x="-190" y="-40" width="70" height="48" rx="10" fill="#111" />
      <rect x="120" y="-40" width="70" height="48" rx="10" fill="#111" />
      {/* trailer body */}
      <rect x="-210" y="-400" width="420" height="370" rx="8" fill="#d9dde3" stroke="#9aa3ad" strokeWidth="4" />
      <rect x="-210" y="-400" width="420" height="22" fill="#b8bfc8" />
      {truckDoorOpen ? (
        <>
          <rect x="-192" y="-372" width="384" height="330" fill="#1b1f24" />
          {Array.from({ length: boxes }).map((_, i) => {
            const col = i % 4;
            const row = Math.floor(i / 4);
            return (
              <rect
                key={i}
                x={-180 + col * 92}
                y={-142 - row * 92}
                width="84"
                height="84"
                rx="4"
                fill="#c98b4a"
                stroke="#8a5a2b"
                strokeWidth="3"
              />
            );
          })}
          {/* swung doors */}
          <rect x="-222" y="-372" width="18" height="330" fill="#c3c9d1" />
          <rect x="204" y="-372" width="18" height="330" fill="#c3c9d1" />
        </>
      ) : (
        <>
          <rect x="-192" y="-372" width="190" height="330" fill="#cfd4da" stroke="#a7afb8" strokeWidth="3" />
          <rect x="2" y="-372" width="190" height="330" fill="#cfd4da" stroke="#a7afb8" strokeWidth="3" />
          <line x1="-120" y1="-360" x2="-120" y2="-54" stroke="#8f98a2" strokeWidth="6" />
          <line x1="120" y1="-360" x2="120" y2="-54" stroke="#8f98a2" strokeWidth="6" />
        </>
      )}
      {/* bumper, lights, plate */}
      <rect x="-215" y="-34" width="430" height="14" fill="#2a2e33" />
      <rect x="-200" y="-30" width="34" height="10" rx="2" fill="#ff3b30" />
      <rect x="166" y="-30" width="34" height="10" rx="2" fill="#ff3b30" />
      {!mini && (
        <>
          <rect x="-62" y="-24" width="124" height="24" rx="3" fill="#f5f5f5" stroke="#333" strokeWidth="2" />
          <text x="0" y="-6" textAnchor="middle" fontSize="16" fontWeight="700" fill="#111" fontFamily="monospace">
            {PLATE}
          </text>
          {plateRead && (
            <>
              <rect x="-70" y="-30" width="140" height="36" fill="none" stroke="#22c55e" strokeWidth="3" />
              <text x="0" y="-38" textAnchor="middle" fontSize="15" fill="#22c55e" fontWeight="700">
                ANPR 99.6%
              </text>
            </>
          )}
        </>
      )}
    </g>
  );
}

export default function DockSimulationPlayer({ autoPlay = true }) {
  const [t, setT] = useState(0);
  const [playing, setPlaying] = useState(false);
  const containerRef = useRef(null);
  const rafRef = useRef(null);
  const lastRef = useRef(null);
  const userPausedRef = useRef(false);

  // Animation loop
  useEffect(() => {
    if (!playing) return undefined;
    const tick = (now) => {
      if (lastRef.current == null) lastRef.current = now;
      const dt = (now - lastRef.current) / 1000;
      lastRef.current = now;
      setT((prev) => (prev + dt) % DURATION);
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(rafRef.current);
      lastRef.current = null;
    };
  }, [playing]);

  // Autoplay while visible
  useEffect(() => {
    if (!autoPlay || !containerRef.current) return undefined;
    const reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return undefined;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (userPausedRef.current) return;
        setPlaying(entry.isIntersecting);
      },
      { threshold: 0.35 }
    );
    obs.observe(containerRef.current);
    return () => obs.disconnect();
  }, [autoPlay]);

  const togglePlay = () => {
    userPausedRef.current = playing;
    setPlaying(!playing);
  };

  const restart = () => {
    setT(0);
    userPausedRef.current = false;
    setPlaying(true);
  };

  const goFullscreen = () => {
    const el = containerRef.current;
    if (!el) return;
    if (document.fullscreenElement) document.exitFullscreen();
    else if (el.requestFullscreen) el.requestFullscreen();
  };

  const st = getState(t);
  const ringPhase = (t * 1.6) % 1;

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        width: '100%',
        aspectRatio: '16 / 9',
        backgroundColor: '#0b0f14',
        overflow: 'hidden',
        userSelect: 'none',
      }}
    >
      <svg
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMidYMid slice"
        style={{ width: '100%', height: '100%', display: 'block', cursor: 'pointer' }}
        onClick={togglePlay}
        role="img"
        aria-label="Animated Coloron dock management demonstration"
      >
        <defs>
          <linearGradient id="dsp-wall" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#3b434d" />
            <stop offset="1" stopColor="#5f6873" />
          </linearGradient>
          <linearGradient id="dsp-ground" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#2b3036" />
            <stop offset="1" stopColor="#16191d" />
          </linearGradient>
          <radialGradient id="dsp-glow">
            <stop offset="0" stopColor="#fff7d6" stopOpacity="0.85" />
            <stop offset="1" stopColor="#fff7d6" stopOpacity="0" />
          </radialGradient>
          <clipPath id="dsp-inset">
            <rect x="1170" y="630" width="390" height="230" rx="10" />
          </clipPath>
        </defs>

        {/* Wall */}
        <rect x="0" y="0" width="1600" height="650" fill="url(#dsp-wall)" />
        {Array.from({ length: 16 }).map((_, i) => (
          <line key={i} x1={i * 100} y1="0" x2={i * 100} y2="650" stroke="rgba(0,0,0,0.12)" strokeWidth="2" />
        ))}
        {/* Ground */}
        <rect x="0" y="650" width="1600" height="250" fill="url(#dsp-ground)" />
        <line x1="560" y1="900" x2="640" y2="650" stroke="#e5c100" strokeWidth="6" strokeDasharray="28 22" />
        <line x1="1040" y1="900" x2="960" y2="650" stroke="#e5c100" strokeWidth="6" strokeDasharray="28 22" />

        {/* Dock opening */}
        <rect x="580" y="240" width="440" height="410" fill="#1a1d21" stroke="#2a2f35" strokeWidth="10" />
        {/* Warehouse interior with pallets */}
        <rect x="590" y="250" width="420" height="390" fill="#2a2620" />
        <rect x="640" y="520" width="110" height="110" fill="#b07a3e" />
        <rect x="770" y="540" width="100" height="90" fill="#a06d36" />
        <rect x="890" y="510" width="100" height="120" fill="#b07a3e" />
        {/* Roller door */}
        <g>
          <rect x="590" y="250" width="420" height={390 * (1 - st.dockDoor)} fill="#3d434a" />
          {Array.from({ length: 20 }).map((_, i) => {
            const y = 250 + i * 20;
            if (y > 250 + 390 * (1 - st.dockDoor)) return null;
            return <line key={i} x1="590" y1={y} x2="1010" y2={y} stroke="#2b3036" strokeWidth="3" />;
          })}
        </g>

        {/* Supplemental LED light */}
        <rect x="440" y="170" width="70" height="46" rx="6" fill="#c7ccd2" stroke="#8f98a2" strokeWidth="3" />
        {st.occupied && <circle cx="475" cy="250" r="190" fill="url(#dsp-glow)" />}

        {/* LED sign */}
        <rect x="680" y="120" width="240" height="90" rx="6" fill="#0a0a0a" stroke="#333" strokeWidth="4" />
        <text x="800" y="158" textAnchor="middle" fontSize="28" fontWeight="700" fill="#ef4444" fontFamily="monospace">
          Dock:A01
        </text>
        <text
          x="800"
          y="195"
          textAnchor="middle"
          fontSize="24"
          fontWeight="700"
          fill={st.plateRead ? '#22c55e' : '#f59e0b'}
          fontFamily="monospace"
        >
          {st.plateRead ? PLATE : 'AVAILABLE'}
        </text>

        {/* Dock camera */}
        <g transform="translate(1120 175)">
          <rect x="-10" y="-30" width="20" height="40" fill="#9aa3ad" />
          <rect x="-70" y="0" width="120" height="44" rx="14" fill="#f2f4f6" stroke="#b9c0c8" strokeWidth="3" />
          <circle cx="-70" cy="22" r="16" fill="#111" />
          {st.scanning &&
            [0, 0.33, 0.66].map((o, i) => {
              const p = (ringPhase + o) % 1;
              return (
                <circle
                  key={i}
                  cx="-10"
                  cy="22"
                  r={40 + p * 110}
                  fill="none"
                  stroke={ORANGE}
                  strokeWidth="4"
                  opacity={1 - p}
                />
              );
            })}
        </g>

        {/* Truck */}
        {st.approach > 0.001 && (
          <Truck approach={st.approach} truckDoorOpen={st.truckDoorOpen} loading={st.loading} plateRead={st.plateRead} />
        )}

        {/* Info panel */}
        <g transform="translate(40 610)">
          <rect width="500" height="250" rx="14" fill="rgba(234,88,12,0.18)" stroke="rgba(251,146,60,0.75)" strokeWidth="2" />
          {[
            ['License Plate Number', st.plateRead ? PLATE : '—'],
            ['Dock Occupation Status', st.occupied ? 'Occupied' : 'Available'],
            ['Driving In & Out Status', st.driving],
            ['Vehicle Door Status', st.truckDoorOpen ? 'Open' : 'Closed'],
            ['Loading Rate', `${st.loading}%`],
          ].map(([k, v], i) => (
            <text key={k} x="26" y={50 + i * 44} fontSize="25" fill="#ffffff" fontFamily="Inter, sans-serif">
              <tspan fill="rgba(255,255,255,0.75)">{k}: </tspan>
              <tspan fontWeight="700">{v}</tspan>
            </text>
          ))}
        </g>

        {/* Inset camera feed */}
        <g clipPath="url(#dsp-inset)">
          <rect x="1170" y="630" width="390" height="230" fill="#20252b" />
          <line x1="1250" y1="860" x2="1300" y2="630" stroke="#e5c100" strokeWidth="3" strokeDasharray="12 10" />
          <line x1="1480" y1="860" x2="1430" y2="630" stroke="#e5c100" strokeWidth="3" strokeDasharray="12 10" />
          {st.approach > 0.001 && (
            <g transform={`translate(1365 ${lerp(900, 830, st.approach)}) scale(0.38)`}>
              <Truck approach={1} truckDoorOpen={st.truckDoorOpen} loading={st.loading} plateRead={false} mini />
              <rect x="-230" y="-420" width="460" height="440" fill="none" stroke="#22c55e" strokeWidth="8" />
            </g>
          )}
          <text x="1186" y="656" fontSize="18" fill="#ffffff" fontWeight="700" fontFamily="Inter, sans-serif">
            CAM 02 · Dock A01
          </text>
          <circle cx="1540" cy="650" r="7" fill="#ef4444" opacity={Math.floor(t * 2) % 2 ? 1 : 0.3} />
        </g>
        <rect x="1170" y="630" width="390" height="230" rx="10" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="2" />

        {/* Caption + branding */}
        <g transform="translate(40 36)">
          <rect width="190" height="40" rx="20" fill={ORANGE} />
          <text x="95" y="27" textAnchor="middle" fontSize="20" fontWeight="800" fill="#fff" fontFamily="Inter, sans-serif" letterSpacing="2">
            COLORON
          </text>
          <text x="210" y="27" fontSize="22" fill="#ffffff" fontWeight="600" fontFamily="Inter, sans-serif">
            {st.caption}
          </text>
        </g>
      </svg>

      {/* Big play button when paused */}
      {!playing && (
        <button
          onClick={togglePlay}
          aria-label="Play video"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '72px',
            height: '72px',
            borderRadius: '50%',
            border: 'none',
            backgroundColor: ORANGE,
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 8px 30px rgba(234,88,12,0.6), 0 0 0 10px rgba(234,88,12,0.25)',
          }}
        >
          <Play size={30} fill="#fff" style={{ marginLeft: '4px' }} />
        </button>
      )}

      {/* Control bar */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          padding: '18px 14px 10px',
          background: 'linear-gradient(to top, rgba(0,0,0,0.75), transparent)',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          color: '#fff',
        }}
      >
        <button onClick={togglePlay} aria-label={playing ? 'Pause' : 'Play'} style={ctrlBtn}>
          {playing ? <Pause size={16} fill="#fff" /> : <Play size={16} fill="#fff" />}
        </button>
        <button onClick={restart} aria-label="Restart" style={ctrlBtn}>
          <RotateCcw size={15} />
        </button>
        <input
          type="range"
          min="0"
          max={DURATION}
          step="0.05"
          value={t}
          onChange={(e) => setT(parseFloat(e.target.value))}
          aria-label="Seek"
          style={{ flex: 1, accentColor: ORANGE, cursor: 'pointer' }}
        />
        <span style={{ fontSize: '0.78rem', fontVariantNumeric: 'tabular-nums', minWidth: '78px', textAlign: 'center' }}>
          {fmt(t)} / {fmt(DURATION)}
        </span>
        <button onClick={goFullscreen} aria-label="Fullscreen" style={ctrlBtn}>
          <Maximize2 size={15} />
        </button>
      </div>
    </div>
  );
}

const ctrlBtn = {
  background: 'rgba(255,255,255,0.12)',
  border: '1px solid rgba(255,255,255,0.2)',
  color: '#fff',
  width: '30px',
  height: '30px',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  flexShrink: 0,
};
