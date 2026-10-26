import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Plus, X, ArrowRight, ShieldCheck, Zap, BellRing, Network, Eye } from 'lucide-react';

const cardsData = [
  {
    id: 'weatherproof-design',
    theme: 'light',
    eyebrow: 'Industrial Design',
    title: 'Rugged. Weatherproof.\nEngineered to protect.',
    bgStyle: {
      backgroundColor: '#f5f5f7',
    },
    plusButtonTheme: 'dark',
    renderVisual: () => (
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: '12px',
          right: '12px',
          height: '380px',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
          pointerEvents: 'none',
        }}
      >
        {/* CCTV Bullet Camera Industrial Showcase Artwork */}
        <div
          style={{
            position: 'relative',
            width: '280px',
            height: '340px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-end',
            paddingBottom: '24px',
            boxSizing: 'border-box',
          }}
        >
          {/* Weatherproof & Vandal Protection Tech Badge */}
          <div
            style={{
              position: 'absolute',
              top: '12px',
              backgroundColor: 'rgba(255, 255, 255, 0.92)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              padding: '8px 14px',
              borderRadius: '9999px',
              boxShadow: '0 4px 16px rgba(0,0,0,0.08), inset 0 0 0 1px rgba(0,0,0,0.06)',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              zIndex: 3,
            }}
          >
            <ShieldCheck size={14} color="#0071e3" strokeWidth={2.4} />
            <span style={{ fontSize: '0.72rem', fontWeight: 600, color: '#1d1d1f', letterSpacing: '0.02em' }}>
              IP67 Waterproof • IK10 Vandal
            </span>
          </div>

          {/* CCTV Camera Profile Silhouette Artwork */}
          <div
            style={{
              position: 'relative',
              width: '240px',
              height: '240px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* Camera Sunshield Housing */}
            <div
              style={{
                position: 'absolute',
                top: '30px',
                width: '190px',
                height: '42px',
                background: 'linear-gradient(180deg, #ffffff 0%, #e2e4e9 100%)',
                borderRadius: '16px 16px 4px 4px',
                boxShadow: '0 6px 18px rgba(0,0,0,0.12), inset 0 1px 2px rgba(255,255,255,0.9)',
                zIndex: 2,
              }}
            />

            {/* Camera Main Cylindrical Barrel */}
            <div
              style={{
                position: 'absolute',
                top: '50px',
                width: '170px',
                height: '110px',
                background: 'linear-gradient(180deg, #f8f9fa 0%, #d8dbe2 60%, #bcc1cd 100%)',
                borderRadius: '14px',
                boxShadow: '0 16px 36px rgba(0,0,0,0.14), inset 0 2px 4px rgba(255,255,255,0.8)',
                zIndex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                paddingLeft: '14px',
              }}
            >
              {/* Front Optical Faceplate */}
              <div
                style={{
                  width: '64px',
                  height: '84px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #1b2128 0%, #0a0d11 100%)',
                  boxShadow: 'inset 0 0 0 2px #4b5563, 0 4px 12px rgba(0,0,0,0.3)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                }}
              >
                {/* Main Glass Lens */}
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle at 35% 35%, #2a4365 0%, #0d1b2a 70%)',
                    boxShadow: '0 0 8px rgba(0,113,227,0.4), inset 0 0 0 2px #3b82f6',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <div
                    style={{
                      width: '14px',
                      height: '14px',
                      borderRadius: '50%',
                      background: 'radial-gradient(circle at 30% 30%, #60a5fa 0%, #1e3a8a 80%)',
                    }}
                  />
                </div>
                {/* Dual IR / Warm LED Diodes */}
                <div style={{ display: 'flex', gap: '8px' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ef4444', opacity: 0.85, boxShadow: '0 0 6px #ef4444' }} />
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#fbbf24', opacity: 0.9, boxShadow: '0 0 6px #fbbf24' }} />
                </div>
              </div>

              {/* Metal Heat Sink Grooves */}
              <div style={{ marginLeft: '16px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
                <div style={{ width: '60px', height: '3px', backgroundColor: '#9ca3af', borderRadius: '2px', opacity: 0.6 }} />
                <div style={{ width: '60px', height: '3px', backgroundColor: '#9ca3af', borderRadius: '2px', opacity: 0.6 }} />
                <div style={{ width: '60px', height: '3px', backgroundColor: '#9ca3af', borderRadius: '2px', opacity: 0.6 }} />
                <div style={{ width: '45px', height: '3px', backgroundColor: '#9ca3af', borderRadius: '2px', opacity: 0.6 }} />
              </div>
            </div>

            {/* 3-Axis Articulated Wall Mount Bracket */}
            <div
              style={{
                position: 'absolute',
                top: '135px',
                right: '48px',
                width: '36px',
                height: '70px',
                background: 'linear-gradient(90deg, #d1d5db 0%, #9ca3af 100%)',
                borderRadius: '8px',
                boxShadow: '0 8px 16px rgba(0,0,0,0.15)',
                transform: 'rotate(-20deg)',
              }}
            />
            {/* Wall Mount Base Plate */}
            <div
              style={{
                position: 'absolute',
                bottom: '18px',
                right: '32px',
                width: '68px',
                height: '18px',
                background: 'linear-gradient(180deg, #e5e7eb 0%, #9ca3af 100%)',
                borderRadius: '9999px',
                boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
              }}
            />
          </div>
        </div>
      </div>
    ),
    modal: {
      category: 'Industrial Design & Durability',
      title: 'Rugged. Weatherproof. Engineered to protect.',
      block1: {
        lead: 'Built for the most demanding environments.',
        text: 'Engineered with high-pressure die-cast aerospace-grade aluminum housing, IK10 vandal resistance, and hermetic IP67 weather sealing. Built to withstand torrential monsoon rains, desert dust storms, and extreme temperatures from -40°C to +65°C without compromising surveillance continuity.',
        image: '/images/tvt_bullet_9420.png',
      },
      block2: {
        lead: 'All-weather surveillance resilience.',
        text: 'Integrated with self-regulating internal thermal dissipation, hydrophobic optical glass to repel moisture droplets, and 6000V lightning surge protection to withstand electrical transients and extreme industrial environments.',
        specs: [
          { label: 'Housing Material', value: 'Die-Cast Aerospace Aluminum' },
          { label: 'Weather & Dust', value: 'IP67 Waterproof & Dust-tight' },
          { label: 'Vandal Protection', value: 'IK10 Impact Rated Enclosure' },
          { label: 'Operating Temp', value: '-40°C to +65°C Extreme Resilience' },
        ],
      },
    },
  },
  {
    id: 'dual-illumination',
    theme: 'dark',
    eyebrow: 'Dual Light Optics',
    title: 'Full-color clarity.\nDay and pitch-black night.',
    bgStyle: {
      background: 'linear-gradient(175deg, #09131f 0%, #10243b 50%, #060e18 100%)',
    },
    plusButtonTheme: 'light',
    renderVisual: () => (
      <div
        style={{
          position: 'absolute',
          bottom: '20px',
          left: 0,
          right: 0,
          height: '360px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          pointerEvents: 'none',
        }}
      >
        {/* CCTV Optical Lens with Dual Illumination Ring */}
        <div
          style={{
            position: 'relative',
            width: '240px',
            height: '240px',
            borderRadius: '50%',
            background: 'radial-gradient(circle at 35% 35%, #162a45 0%, #0b1523 65%, #04080e 100%)',
            boxShadow: '0 20px 50px rgba(0,0,0,0.8), inset 0 0 0 10px #1a3250, inset 0 0 0 18px #0d1b2d',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Dual Illumination LED Ring (Warm White + Stealth IR Diodes) */}
          <div
            style={{
              position: 'absolute',
              inset: '16px',
              borderRadius: '50%',
              border: '2px dashed rgba(255, 204, 0, 0.4)',
              boxShadow: '0 0 20px rgba(255, 180, 0, 0.25)',
            }}
          />

          {/* Inner Stepped Lens Barrel */}
          <div
            style={{
              width: '180px',
              height: '180px',
              borderRadius: '50%',
              background: 'radial-gradient(circle at 30% 30%, #0f2038 0%, #050c17 70%)',
              boxShadow: 'inset 0 0 30px rgba(0, 113, 227, 0.4), inset 0 0 0 6px #091424',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* Multi-coated Glass Flare */}
            <div
              style={{
                position: 'absolute',
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                background: 'radial-gradient(circle at 70% 25%, rgba(0, 210, 255, 0.4) 0%, transparent 60%)',
                filter: 'blur(4px)',
              }}
            />
            {/* Center Pupil Iris (F1.0 Super Aperture) */}
            <div
              style={{
                width: '74px',
                height: '74px',
                borderRadius: '50%',
                background: 'radial-gradient(circle at 35% 35%, #0c203b 0%, #000000 80%)',
                boxShadow: '0 0 18px rgba(0, 113, 227, 0.6), inset 0 0 10px rgba(0, 210, 255, 0.5)',
                position: 'relative',
              }}
            >
              {/* Highlight Glint */}
              <div
                style={{
                  position: 'absolute',
                  top: '16px',
                  left: '16px',
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.85)',
                  filter: 'blur(1px)',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    ),
    modal: {
      category: 'Dual Illumination Optics',
      title: 'Full-color clarity. Day and pitch-black night.',
      block1: {
        lead: 'ColorSense 24/7 intelligent illumination.',
        text: 'Equipped with large F1.0 super-aperture optics, high-sensitivity 1/1.8" BSI image sensors, and intelligent Dual Light technology. In complete darkness, stealth IR provides covert monitoring until a human or vehicle approaches—instantly activating warm supplemental LEDs to capture vivid full-color evidentiary details.',
        image: '/images/tvt_turret_9520.png',
      },
      block2: {
        lead: 'Advanced optical clarity and WDR.',
        text: 'Featuring 120dB True Wide Dynamic Range (WDR) and 3D Digital Noise Reduction. Backlit doorways, intense vehicle high beams, and harsh shadow transitions are balanced automatically to reveal facial features and license plates with crystal fidelity.',
        specs: [
          { label: 'Resolution & Sensor', value: '4K Ultra HD / 1/1.8" Low-Light BSI' },
          { label: 'Optical Aperture', value: 'F1.0 Super Large Aperture' },
          { label: 'Night Range', value: '30m Smart Dual-Light Warm + IR' },
          { label: 'Dynamic Range', value: '120dB True Hardware WDR' },
        ],
      },
    },
  },
  {
    id: 'ai-engine',
    theme: 'dark',
    eyebrow: 'AI Edge Computing',
    title: 'Deep learning chip.\nIntelligence at the edge.',
    bgStyle: {
      background: 'linear-gradient(175deg, #0b131a 0%, #132533 50%, #080d12 100%)',
    },
    plusButtonTheme: 'light',
    renderVisual: () => (
      <div
        style={{
          position: 'absolute',
          bottom: '40px',
          left: 0,
          right: 0,
          height: '340px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          pointerEvents: 'none',
        }}
      >
        {/* Surveillance AI Processor Chip Visual */}
        <div
          style={{
            position: 'relative',
            width: '185px',
            height: '185px',
            borderRadius: '26px',
            padding: '2px',
            background: 'linear-gradient(135deg, #00d2ff 0%, #0071e3 50%, #30d158 100%)',
            boxShadow: '0 0 50px rgba(0, 113, 227, 0.4), 0 0 25px rgba(0, 210, 255, 0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Chip Body */}
          <div
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '24px',
              background: 'linear-gradient(160deg, #182635 0%, #0e1722 50%, #080e15 100%)',
              boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.2), inset 0 -2px 4px rgba(0,0,0,0.6)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              boxSizing: 'border-box',
              padding: '16px',
              textAlign: 'center',
            }}
          >
            <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#00d2ff', letterSpacing: '0.15em', marginBottom: '4px' }}>
              COLORON AI
            </div>
            <div
              style={{
                color: '#ffffff',
                fontSize: '1.9rem',
                fontWeight: 800,
                letterSpacing: '-0.04em',
                lineHeight: 1,
              }}
            >
              16 TOPS
            </div>
            <div
              style={{
                fontSize: '0.85rem',
                fontWeight: 700,
                color: '#30d158',
                letterSpacing: '0.1em',
                marginTop: '6px',
              }}
            >
              EDGE NPU
            </div>

            {/* Neural Detection Badges */}
            <div style={{ display: 'flex', gap: '6px', marginTop: '12px' }}>
              <span style={{ fontSize: '0.62rem', backgroundColor: 'rgba(48, 209, 88, 0.18)', color: '#30d158', padding: '2px 6px', borderRadius: '4px', fontWeight: 600 }}>
                Human 99.8%
              </span>
              <span style={{ fontSize: '0.62rem', backgroundColor: 'rgba(0, 210, 255, 0.18)', color: '#00d2ff', padding: '2px 6px', borderRadius: '4px', fontWeight: 600 }}>
                Vehicle 99.9%
              </span>
            </div>
          </div>
        </div>
      </div>
    ),
    modal: {
      category: 'AI Edge Computing',
      title: 'Deep learning chip. Intelligence at the edge.',
      block1: {
        lead: 'On-device deep learning neural target filtering.',
        text: 'Powered by an onboard 16 TOPS Deep Learning Neural Processing Unit (NPU). Real-time computer vision algorithms continuously classify human silhouettes and motor vehicles with 99.8% precision, eradicating up to 99% of false alarms caused by rain, leaves, insects, shadows, and stray animals.',
        image: '/images/core_tech_acusense.jpg',
      },
      block2: {
        lead: 'Intelligent perimeter protection & smart search.',
        text: 'Instantly set up virtual line-crossing, intrusion zones, and entrance/exit triggers. When reviewing archives, smart attribute filtering lets you pinpoint exact human or vehicle events across hours of footage in seconds.',
        specs: [
          { label: 'Neural Accelerator', value: '16 TOPS Dedicated Edge NPU' },
          { label: 'Alarm Accuracy', value: '99.8% Precision Target Filtering' },
          { label: 'Classification', value: 'Human, Vehicle & Non-Motor Targets' },
          { label: 'Response Latency', value: '< 0.02s Real-Time Trigger Speed' },
        ],
      },
    },
  },
  {
    id: 'active-deterrence',
    theme: 'dark',
    eyebrow: 'Active Deterrence',
    title: 'Proactive defense.\nStop crime before it happens.',
    bgStyle: {
      background: 'linear-gradient(175deg, #180914 0%, #290f23 50%, #12050e 100%)',
    },
    plusButtonTheme: 'light',
    renderVisual: () => (
      <div
        style={{
          position: 'absolute',
          bottom: '20px',
          left: '16px',
          right: '16px',
          height: '350px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          pointerEvents: 'none',
        }}
      >
        {/* Active Deterrence Sound & Strobe Visualization */}
        <div
          style={{
            position: 'relative',
            width: '240px',
            height: '240px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Concentric Siren Acoustic Waves */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              borderRadius: '50%',
              border: '2px solid rgba(255, 59, 48, 0.25)',
              boxShadow: '0 0 30px rgba(255, 59, 48, 0.2)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              inset: '24px',
              borderRadius: '50%',
              border: '2px solid rgba(0, 113, 227, 0.3)',
              boxShadow: '0 0 20px rgba(0, 113, 227, 0.25)',
            }}
          />

          {/* Central Siren & Strobe Core */}
          <div
            style={{
              width: '130px',
              height: '130px',
              borderRadius: '50%',
              background: 'radial-gradient(circle at 35% 35%, #2a1122 0%, #150510 70%)',
              boxShadow: '0 10px 30px rgba(0,0,0,0.7), inset 0 0 0 3px #441836',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
            }}
          >
            {/* Flashing Police Red & Blue Strobes */}
            <div style={{ display: 'flex', gap: '10px' }}>
              <div style={{ width: '14px', height: '14px', borderRadius: '50%', backgroundColor: '#ff3b30', boxShadow: '0 0 14px #ff3b30' }} />
              <div style={{ width: '14px', height: '14px', borderRadius: '50%', backgroundColor: '#0071e3', boxShadow: '0 0 14px #0071e3' }} />
            </div>
            <div style={{ fontSize: '0.78rem', fontWeight: 800, color: '#ffffff', letterSpacing: '0.04em' }}>
              110 dB
            </div>
            <div style={{ fontSize: '0.62rem', fontWeight: 600, color: '#ff453a', letterSpacing: '0.08em' }}>
              SIREN ACTIVE
            </div>
          </div>
        </div>

        {/* Live Audio Warning Pill */}
        <div
          style={{
            backgroundColor: 'rgba(35, 18, 30, 0.9)',
            border: '1px solid rgba(255, 59, 48, 0.3)',
            borderRadius: '9999px',
            padding: '8px 16px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            boxShadow: '0 6px 18px rgba(0,0,0,0.4)',
          }}
        >
          <BellRing size={14} color="#ff453a" />
          <span style={{ fontSize: '0.72rem', fontWeight: 600, color: '#ffffff' }}>
            Two-Way Audio • Instant Voice Warn
          </span>
        </div>
      </div>
    ),
    modal: {
      category: 'Active Deterrence & Two-Way Audio',
      title: 'Proactive defense. Stop crime before it happens.',
      block1: {
        lead: 'Transform passive recording into active deterrence.',
        text: 'Traditional CCTV cameras only record crimes after they occur. COLORON Active Deterrence cameras stop intrusions in their tracks. The moment an unauthorized person breaches a restricted perimeter, bright red and blue strobe lights flash while an ear-piercing 110dB siren or custom voice warning sounds immediately.',
        image: '/images/tvt_turret_9520.png',
      },
      block2: {
        lead: 'Real-time two-way audio communication.',
        text: 'Equipped with a high-sensitivity noise-canceling dual-microphone array and high-decibel waterproof speaker. Communicate directly with visitors or warn off trespassers in real time through the COLORON mobile app with crystal-clear full-duplex clarity.',
        specs: [
          { label: 'Acoustic Siren', value: '110dB High-Output Warning Siren' },
          { label: 'Visual Strobes', value: 'Flashing Red & Blue Police Lights' },
          { label: 'Two-Way Audio', value: 'Dual-Mic Array with Noise Suppression' },
          { label: 'Voice Warning', value: 'Custom Pre-Recorded Audio Broadcasts' },
        ],
      },
    },
  },
  {
    id: 'surveillance-ecosystem',
    theme: 'dark',
    eyebrow: 'Surveillance Ecosystem',
    title: 'Seamless security.\nTotal coverage made easy.',
    bgStyle: {
      background: 'linear-gradient(175deg, #0d121c 0%, #162130 50%, #0a0e16 100%)',
    },
    plusButtonTheme: 'light',
    renderVisual: () => (
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: '20px',
          right: '20px',
          height: '350px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-end',
          paddingBottom: '30px',
          boxSizing: 'border-box',
          pointerEvents: 'none',
        }}
      >
        {/* NVR & Camera Ecosystem Visual */}
        <div
          style={{
            position: 'relative',
            width: '240px',
            height: '240px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '14px',
          }}
        >
          {/* Central Enterprise NVR Server Deck */}
          <div
            style={{
              width: '210px',
              height: '64px',
              backgroundColor: '#1b2432',
              borderRadius: '12px',
              boxShadow: '0 8px 24px rgba(0,0,0,0.7), inset 0 1px 2px rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0 16px',
              boxSizing: 'border-box',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Network size={20} color="#0071e3" />
              <div>
                <div style={{ fontSize: '0.74rem', fontWeight: 700, color: '#ffffff' }}>COLORON NVR</div>
                <div style={{ fontSize: '0.62rem', color: '#86868b' }}>64-Ch 4K Storage Hub</div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '4px' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#30d158', boxShadow: '0 0 6px #30d158' }} />
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#0071e3', boxShadow: '0 0 6px #0071e3' }} />
            </div>
          </div>

          {/* Connected Cameras Multi-Stream Tag */}
          <div
            style={{
              backgroundColor: 'rgba(0, 113, 227, 0.15)',
              border: '1px solid rgba(0, 113, 227, 0.4)',
              borderRadius: '9999px',
              padding: '8px 16px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <Eye size={14} color="#00d2ff" />
            <span style={{ fontSize: '0.72rem', fontWeight: 600, color: '#ffffff' }}>
              PoE Plug & Play • Zero Cloud Fees
            </span>
          </div>
        </div>
      </div>
    ),
    modal: {
      category: 'Surveillance Ecosystem',
      title: 'Seamless security. Total coverage made easy.',
      block1: {
        lead: 'Complete end-to-end CCTV infrastructure.',
        text: 'Effortlessly pair COLORON IP cameras with our high-throughput Network Video Recorders (NVRs), enterprise PoE switches, and the COLORON mobile app. Enjoy unified multi-channel 24/7 recording, redundant RAID storage protection, and zero recurring subscription fees.',
        image: '/images/apple_nvr_pro.jpg',
      },
      block2: {
        lead: 'Plug-and-play PoE and smart bandwidth compression.',
        text: 'Power and transmit ultra-high-definition video over a single Ethernet cable up to 250 meters with plug-and-play PoE. Advanced H.265+ smart video compression slashes bandwidth and storage requirements by up to 75% without compromising image fidelity.',
        specs: [
          { label: 'Transmission', value: 'Plug-and-Play PoE (Up to 250m)' },
          { label: 'Video Compression', value: 'Smart H.265+ (75% Storage Savings)' },
          { label: 'Channel Capacity', value: '4 to 64 Channel Centralized NVRs' },
          { label: 'Subscription Cost', value: '$0 / Lifetime Zero Cloud Fees' },
        ],
      },
    },
  },
];

export default function ExploreLineupSlider() {
  const scrollContainerRef = useRef(null);
  const [activeModalCard, setActiveModalCard] = useState(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -340, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 340, behavior: 'smooth' });
    }
  };

  // Keyboard Escape listener & body scroll locking
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveModalCard(null);
      }
    };

    if (activeModalCard) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [activeModalCard]);

  return (
    <section
      style={{
        padding: '60px 0 70px',
        backgroundColor: '#ffffff',
        position: 'relative',
        overflow: 'hidden',
        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Icons", "Helvetica Neue", Helvetica, Arial, sans-serif',
      }}
    >
      {/* 1. Header Row */}
      <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 32px 32px' }}>
        <h2
          style={{
            fontSize: 'clamp(2.4rem, 4.4vw, 3.4rem)',
            fontWeight: 700,
            color: '#1d1d1f',
            letterSpacing: '-0.035em',
            margin: 0,
            lineHeight: 1.1,
          }}
        >
          Get to know CCTV Cameras.
        </h2>
      </div>

      {/* 2. Horizontal Cards Track */}
      <div
        ref={scrollContainerRef}
        style={{
          display: 'flex',
          gap: '20px',
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          paddingLeft: 'max(16px, calc((100vw - 1440px) / 2 + 16px))',
          paddingRight: 'max(16px, calc((100vw - 1440px) / 2 + 16px))',
          paddingBottom: '20px',
        }}
      >
        {cardsData.map((card) => {
          const isLight = card.theme === 'light';

          return (
            <div
              key={card.id}
              onClick={() => setActiveModalCard(card)}
              style={{
                flex: '0 0 clamp(270px, 80vw, 310px)',
                width: 'clamp(270px, 80vw, 310px)',
                height: '560px',
                borderRadius: '28px',
                position: 'relative',
                overflow: 'hidden',
                scrollSnapAlign: 'start',
                cursor: 'pointer',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.06)',
                transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s ease',
                ...card.bgStyle,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.015)';
                e.currentTarget.style.boxShadow = '0 18px 40px rgba(0, 0, 0, 0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.06)';
              }}
            >
              {/* Card Text Header */}
              <div
                style={{
                  position: 'relative',
                  zIndex: 2,
                  padding: '30px 26px 0',
                }}
              >
                <div
                  style={{
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    letterSpacing: '-0.01em',
                    color: isLight ? '#86868b' : '#a1a1a6',
                    marginBottom: '6px',
                  }}
                >
                  {card.eyebrow}
                </div>
                <h3
                  style={{
                    fontSize: 'clamp(1.48rem, 2vw, 1.78rem)',
                    fontWeight: 700,
                    letterSpacing: '-0.025em',
                    lineHeight: 1.15,
                    margin: 0,
                    color: isLight ? '#1d1d1f' : '#ffffff',
                    whiteSpace: 'pre-line',
                  }}
                >
                  {card.title}
                </h3>
              </div>

              {/* Card Visual Artwork */}
              {card.renderVisual()}

              {/* Bottom Right Circular (+) Trigger Button */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveModalCard(card);
                }}
                aria-label={`Get details on ${card.eyebrow}`}
                title={`Learn more about ${card.eyebrow}`}
                style={{
                  position: 'absolute',
                  bottom: '22px',
                  right: '22px',
                  width: '34px',
                  height: '34px',
                  borderRadius: '50%',
                  backgroundColor: card.plusButtonTheme === 'dark' ? '#1d1d1f' : '#ffffff',
                  color: card.plusButtonTheme === 'dark' ? '#ffffff' : '#1d1d1f',
                  border: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  boxShadow: '0 4px 14px rgba(0, 0, 0, 0.25)',
                  transition: 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.2s ease',
                  zIndex: 5,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.15)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              >
                <Plus size={18} strokeWidth={2.4} />
              </button>
            </div>
          );
        })}
      </div>

      {/* 3. Bottom Chevron Controls (‹ and ›) */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '12px',
          marginTop: '20px',
        }}
      >
        <button
          onClick={scrollLeft}
          aria-label="Scroll left"
          title="Scroll left"
          style={{
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            backgroundColor: '#f2f2f2',
            border: 'none',
            color: '#1d1d1f',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'background-color 0.2s ease, transform 0.15s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#e5e5ea')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#f2f2f2')}
        >
          <ChevronLeft size={18} />
        </button>

        <button
          onClick={scrollRight}
          aria-label="Scroll right"
          title="Scroll right"
          style={{
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            backgroundColor: '#f2f2f2',
            border: 'none',
            color: '#1d1d1f',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'background-color 0.2s ease, transform 0.15s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#e5e5ea')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#f2f2f2')}
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* 4. Fullscreen Interactive Modal rendered via createPortal directly into document.body */}
      {activeModalCard && typeof document !== 'undefined' && createPortal(
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="apple-exact-modal-title"
          onClick={() => setActiveModalCard(null)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100vw',
            height: '100vh',
            zIndex: 999999,
            backgroundColor: 'rgba(0, 0, 0, 0.65)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 'clamp(16px, 3vw, 32px)',
            boxSizing: 'border-box',
            animation: 'cctvExactFadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards',
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '840px',
              maxHeight: 'min(90vh, 880px)',
              backgroundColor: '#ffffff',
              borderRadius: '28px',
              boxShadow: '0 30px 80px rgba(0, 0, 0, 0.45)',
              overflowY: 'auto',
              padding: 'clamp(24px, 4vw, 42px)',
              boxSizing: 'border-box',
              animation: 'cctvExactScaleUp 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards',
            }}
          >
            {/* Modal Header: Category Eyebrow, Title & Close Button */}
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '20px', marginBottom: '24px' }}>
              <div>
                <div
                  style={{
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: '#86868b',
                    marginBottom: '8px',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {activeModalCard.modal.category}
                </div>
                <h2
                  id="apple-exact-modal-title"
                  style={{
                    fontSize: 'clamp(1.85rem, 3.4vw, 2.5rem)',
                    fontWeight: 700,
                    letterSpacing: '-0.03em',
                    lineHeight: 1.15,
                    color: '#1d1d1f',
                    margin: 0,
                    maxWidth: '700px',
                  }}
                >
                  {activeModalCard.modal.title}
                </h2>
              </div>

              {/* Close Button (X) */}
              <button
                type="button"
                onClick={() => setActiveModalCard(null)}
                aria-label="Close modal"
                title="Close"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  backgroundColor: '#f2f2f2',
                  border: 'none',
                  color: '#1d1d1f',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  flexShrink: 0,
                  transition: 'background-color 0.2s ease, transform 0.15s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#e5e5ea')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#f2f2f2')}
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Content Card 1: Lead Feature with Centered Showcase Image */}
            <div
              style={{
                backgroundColor: '#f5f5f7',
                borderRadius: '24px',
                padding: 'clamp(24px, 3.5vw, 36px)',
                marginBottom: '20px',
              }}
            >
              <p
                style={{
                  fontSize: 'clamp(0.95rem, 1.35vw, 1.12rem)',
                  lineHeight: 1.5,
                  color: '#1d1d1f',
                  margin: '0 0 28px',
                  maxWidth: '720px',
                }}
              >
                <strong style={{ fontWeight: 700, color: '#000000' }}>
                  {activeModalCard.modal.block1.lead}{' '}
                </strong>
                {activeModalCard.modal.block1.text}
              </p>

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  minHeight: '260px',
                  padding: '10px 0',
                }}
              >
                <img
                  src={activeModalCard.modal.block1.image}
                  alt={activeModalCard.eyebrow}
                  style={{
                    maxHeight: '290px',
                    maxWidth: '85%',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 20px 36px rgba(0, 0, 0, 0.14))',
                  }}
                  onError={(e) => {
                    // Graceful fallback to bullet camera
                    e.currentTarget.src = '/images/tvt_bullet_9420.png';
                  }}
                />
              </div>
            </div>

            {/* Modal Content Card 2: Secondary Feature Narrative & Specifications */}
            <div
              style={{
                backgroundColor: '#f5f5f7',
                borderRadius: '24px',
                padding: 'clamp(24px, 3.5vw, 36px)',
                marginBottom: '28px',
              }}
            >
              <p
                style={{
                  fontSize: 'clamp(0.95rem, 1.35vw, 1.12rem)',
                  lineHeight: 1.5,
                  color: '#1d1d1f',
                  margin: '0 0 24px',
                  maxWidth: '720px',
                }}
              >
                <strong style={{ fontWeight: 700, color: '#000000' }}>
                  {activeModalCard.modal.block2.lead}{' '}
                </strong>
                {activeModalCard.modal.block2.text}
              </p>

              {/* Technical Specifications Grid */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                  gap: '12px',
                  paddingTop: '18px',
                  borderTop: '1px solid rgba(0, 0, 0, 0.08)',
                }}
              >
                {activeModalCard.modal.block2.specs.map((spec) => (
                  <div
                    key={spec.label}
                    style={{
                      backgroundColor: '#ffffff',
                      borderRadius: '16px',
                      padding: '14px 18px',
                      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
                    }}
                  >
                    <div
                      style={{
                        fontSize: '0.74rem',
                        fontWeight: 600,
                        color: '#86868b',
                        textTransform: 'uppercase',
                        letterSpacing: '0.04em',
                        marginBottom: '4px',
                      }}
                    >
                      {spec.label}
                    </div>
                    <div
                      style={{
                        fontSize: '0.92rem',
                        fontWeight: 600,
                        color: '#1d1d1f',
                        lineHeight: 1.35,
                      }}
                    >
                      {spec.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Actions Row */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '16px',
                paddingTop: '6px',
              }}
            >
              <Link
                to="/compare"
                onClick={() => setActiveModalCard(null)}
                style={{
                  fontSize: '1rem',
                  fontWeight: 500,
                  color: '#0071e3',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  transition: 'opacity 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.8')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
              >
                Compare models & specs <ArrowRight size={16} />
              </Link>

              <Link
                to="/quote-calculator"
                onClick={() => setActiveModalCard(null)}
                style={{
                  backgroundColor: '#0071e3',
                  color: '#ffffff',
                  padding: '11px 24px',
                  borderRadius: '9999px',
                  fontSize: '0.92rem',
                  fontWeight: 500,
                  textDecoration: 'none',
                  boxShadow: '0 4px 12px rgba(0, 113, 227, 0.25)',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#0077ed')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#0071e3')}
              >
                Request Quote
              </Link>
            </div>
          </div>
        </div>,
        document.body
      )}

      {/* Scoped CSS for Fullscreen Modal Animations */}
      <style>{`
        @keyframes cctvExactFadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes cctvExactScaleUp {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(14px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
