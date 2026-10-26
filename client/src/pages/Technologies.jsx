import React, { useState, useEffect, useMemo, useRef } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import {
  ChevronRight,
  CheckCircle2,
  ArrowRight,
  Eye,
  Cpu,
  Zap,
  Shield,
  Sun,
  Camera,
  Layers,
  PhoneCall,
  Flame,
  Radio,
  Sliders,
  HardDrive,
  Volume2,
  Sparkles,
  SlidersHorizontal,
  Maximize2,
  Scan,
  Compass,
  Check,
  Disc,
  Activity,
  Server,
  Wifi,
  Database,
  Crosshair,
  Lock,
  Boxes,
  Home,
  Headphones,
  Play,
  X,
  FileText
} from "lucide-react";

// MASTER TECHNOLOGIES DATA: ALL 16 CATEGORIES AS PER PROJECT SPECIFICATION
const TECHNOLOGIES_DATA = {
  "light-explorer-expert": {
    id: "light-explorer-expert",
    title: "Light Explorer Expert",
    category: "Optics & Clarity",
    badge: "OPTICAL BREAKTHROUGH",
    icon: Eye,
    heroImage: "/images/core_tech_colorvu.jpg",
    hudTitle: "C4 Series",
    hudSubtitle: "Engineered for continuous 24/7 reliability, state-of-the-art optical engineering, and precision AI intelligence.",
    hudStats: [
      { label: "24/7 FULL-COLOR", sub: "IN TOTAL DARKNESS", icon: "viewfinder" },
      { label: "ULTRA LOW-LIGHT SENSOR", sub: "BSI CMOS ARCHITECTURE", icon: "chip" },
      { label: "F/1.0 HIGH-TRANSMITTANCE LENS", sub: "400% PHOTON INTAKE", icon: "lens" },
      { label: "ISO 8,192,000 | 4K 60fps", sub: "ADVANCED FORENSIC DETAIL", icon: "activity" },
    ],
    hudAperture: "F1.0",
    subItems: [
      {
        id: "c4-series",
        title: "C4 Series",
        seriesBadge: "Flagship Generation 4",
        headline: "C4 Series — 24/7 Vivid Color Imaging with F/1.0 Super Aperture",
        tagline:
          "Harnessing 4x larger light intake than conventional f/2.0 lenses, Coloron C4 Series captures ultra-vivid, full-color forensic details in total darkness without harsh spotlights.",
        heroBanner: "/images/core_tech_colorvu.jpg",
        hudTitle: "C4 Series",
        hudSubtitle: "Engineered for continuous 24/7 reliability, state-of-the-art optical engineering, and precision AI intelligence.",
        hudAperture: "F1.0",
        hudStats: [
          { label: "24/7 FULL-COLOR", sub: "IN TOTAL DARKNESS", icon: "viewfinder" },
          { label: "ULTRA LOW-LIGHT SENSOR", sub: "BSI CMOS ARCHITECTURE", icon: "chip" },
          { label: "F/1.0 HIGH-TRANSMITTANCE LENS", sub: "ED OPTICAL GLASS", icon: "lens" },
          { label: "ISO 8,192,000 | 4K 60fps", sub: "SMOOTH MOTION CAPTURE", icon: "activity" },
        ],
        metrics: [
          { val: "400%", label: "Light Gathering", sub: "vs. Standard F/2.0 Lenses" },
          { val: "0.0003", unit: "Lux", label: "Ultra-Low Light", sub: "True Color in Darkness" },
          { val: "99.4%", label: "AI Classification", sub: "False Alarm Filtering" },
          { val: "4K UHD", label: "Optical Resolution", sub: "3840 × 2160 @ 30fps" },
        ],
        specs: [
          "F/1.0 Super Large Aperture with 400% photon gathering boost",
          "Advanced 1/1.8\" BSI Progressive Scan sensor array",
          "Soft, warm supplemental lighting with zero optical glare",
          "Active 3D Dynamic Noise Reduction preserving edge sharpness",
          "130dB True Optical WDR for extreme headlight & shadow balance",
          "AcuSense Deep Learning Human & Vehicle classification",
        ],
        features: [
          {
            num: "01",
            title: "F/1.0 Super Large Aperture",
            desc: "Collects 4 times the amount of light of an ordinary camera, keeping the image bright even in low-light environments down to 0.0003 Lux.",
          },
          {
            num: "02",
            title: "Advanced Sensor Technology",
            desc: "Vastly improves the utilization of available light with backside-illuminated (BSI) pixels, maximizing sensitivity.",
          },
          {
            num: "03",
            title: "ColorSense True Color Engine",
            desc: "Patented image signal processing balances saturation and chromatic fidelity, rendering true-to-life colors around the clock.",
          },
          {
            num: "04",
            title: "AcuSense Human & Vehicle Classification",
            desc: "Built-in deep learning algorithms filter out 99% of false alarms triggered by animals, rain, or falling leaves.",
          },
        ],
        beforeAfter: {
          title: "Optical Comparison: Conventional IR vs. Coloron C4 ColorSense",
          desc: "Drag the slider to inspect the forensic difference between noisy black-and-white infrared surveillance and Coloron's true-to-life 24/7 color reproduction.",
          beforeLabel: "Conventional IR (B&W)",
          afterLabel: "Coloron C4 ColorSense (24/7 Color)",
          beforeImg: "/images/bullet_front_lens.jpg",
          afterImg: "/images/core_tech_colorvu.jpg",
        },
        products: [
          {
            model: "DS-2CD23126G3-I2UY",
            name: "12MP AcuSense Powered by DarkFighter Fixed Turret Camera",
            image: "/images/cctv_turret_catalog.jpg",
            tag: "Flagship C4",
            res: "12MP / 4K UHD",
            lens: "2.8mm / 4mm F1.0",
            light: "Up to 40m ColorSense",
          },
          {
            model: "DS-2CE67DV3T-PTLS",
            name: "2MP ColorVu 3.0 Fixed Pan-Tilt PT Camera",
            image: "/images/cctv_pt_camera.jpg",
            tag: "PT Series",
            res: "2MP 1080p",
            lens: "Fixed Pan-Tilt",
            light: "Up to 30m White Light",
          },
          {
            model: "DS-2CE10DV0T-LPS",
            name: "2MP ColorVu 3.0 Fixed Mini Bullet Camera",
            image: "/images/cctv_bullet_catalog.jpg",
            tag: "Mini Bullet",
            res: "2MP 1080p",
            lens: "2.8mm Wide Angle",
            light: "Up to 20m Smart Light",
          },
        ],
      },
      {
        id: "e4h-series",
        title: "E4H Series",
        seriesBadge: "Smart Hybrid & Deterrence",
        headline: "E4H Series — Smart Dual Illumination with Active Deterrence",
        tagline:
          "Intelligently combines covert infrared night vision with an automatic warm spotlight trigger, flashing strobe lights, and audible warnings when intruders breach perimeter boundaries.",
        heroBanner: "/images/core_tech_acusense.jpg",
        hudTitle: "E4H Series",
        hudSubtitle: "Smart Hybrid Illumination with edge AI Siren, Red & Blue Strobes, and Dual-Mic Two-Way Audio.",
        hudAperture: "F1.2",
        hudStats: [
          { label: "SMART DUAL ILLUMINATION", sub: "IR + WARM SPOTLIGHT", icon: "viewfinder" },
          { label: "ACTIVE VISUAL STROBE", sub: "RED / BLUE DETERRENT", icon: "chip" },
          { label: "110dB VOICE SIREN", sub: "CUSTOMIZABLE ALERTS", icon: "lens" },
          { label: "EDGE AI FILTERING", sub: "99.4% FALSE ALARM REJECTION", icon: "activity" },
        ],
        metrics: [
          { val: "3 Modes", label: "Smart Illumination", sub: "IR / Color / Hybrid" },
          { val: "110 dB", label: "Voice Siren", sub: "Customizable Audio Warnings" },
          { val: "Strobe", label: "Active Deterrence", sub: "Red / Blue Visual Flashes" },
          { val: "IP67", label: "Weatherproof Casing", sub: "IK10 Vandal-Resistant" },
        ],
        specs: [
          "Smart Hybrid Light: auto switches from IR to full color on detection",
          "Integrated flashing red/blue strobe light for immediate deterrent",
          "High-decibel custom voice alert siren up to 110dB",
          "Two-way audio communication with acoustic echo cancellation",
          "IP67 Weatherproofing & IK10 Vandal Resistance",
          "Built-in microphone and speaker for real-time talkback",
        ],
        features: [
          {
            num: "01",
            title: "Smart Hybrid Illumination",
            desc: "Covert IR mode operates silently at night. When a human or vehicle is identified by the AI engine, warm spotlights automatically turn on to capture crisp color.",
          },
          {
            num: "02",
            title: "Proactive Crime Prevention",
            desc: "Stops intrusions before they happen. Flashing strobe lights and verbal warnings alert suspects that they have been detected.",
          },
          {
            num: "03",
            title: "Dual-Mic Two-Way Audio",
            desc: "Enables operators to talk directly through the camera in real time with high-fidelity noise cancellation up to 15 meters away.",
          },
          {
            num: "04",
            title: "PoE Single-Cable Deployment",
            desc: "Streams 4K video, audio, deterrence signals, and power over a single standard Ethernet cable with zero clutter.",
          },
        ],
        products: [
          {
            model: "DS-2CD23126G3-IS2UY/SL",
            name: "12MP AcuSense Strobe Light and Warning Turret Camera",
            image: "/images/cctv_turret_catalog.jpg",
            tag: "Active Deterrence",
            res: "12MP / 4K",
            lens: "Fixed Turret F1.6",
            light: "Hybrid Strobe & Audio",
          },
          {
            model: "DS-2CD2047G2-LU",
            name: "4 MP ColorVu Smart Hybrid Light Fixed Bullet Camera",
            image: "/images/cctv_bullet_catalog.jpg",
            tag: "Hybrid Light",
            res: "4MP 2688×1520",
            lens: "Fixed 2.8mm",
            light: "Up to 40m Hybrid Light",
          },
        ],
      },
    ],
  },

  "light-explorer": {
    id: "light-explorer",
    title: "Light Explorer",
    category: "Optics & Clarity",
    badge: "24/7 COLOR PERCEPTION",
    icon: Camera,
    heroImage: "/images/bullet_front_lens.jpg",
    hudTitle: "ColorSense 3.0",
    hudSubtitle: "Continuous full-color surveillance for residential estates, retail storefronts, and commercial facilities.",
    hudAperture: "F1.2",
    hudStats: [
      { label: "FULL-TIME COLOR", sub: "ZERO B&W CONVERSION", icon: "viewfinder" },
      { label: "WARM SUPPLEMENTAL LIGHT", sub: "GENTLE & GLARE-FREE", icon: "chip" },
      { label: "OPTICAL ED GLASS", sub: "CHROMATIC ABERRATION REDUCTION", icon: "lens" },
      { label: "PLUG & PLAY READY", sub: "ANALOG HD & IP COMPATIBLE", icon: "activity" },
    ],
    subItems: [
      {
        id: "c3-series",
        title: "C3 Series",
        seriesBadge: "Standard ColorVu",
        headline: "C3 Series — Standard Full-Time Color Surveillance",
        tagline:
          "Reliable 24/7 color security designed for retail stores, residential communities, and small commercial perimeter monitoring with zero black-and-white video footage.",
        heroBanner: "/images/bullet_front_lens.jpg",
        hudTitle: "C3 Series",
        hudSubtitle: "High-aperture optical assembly with warm illumination for crystal forensic clarity.",
        hudAperture: "F1.2",
        hudStats: [
          { label: "24/7 VIVID COLOR", sub: "TRUE CHROMATIC ACCURACY", icon: "viewfinder" },
          { label: "F/1.2 APERTURE", sub: "MAXIMUM PHOTON EFFICIENCY", icon: "chip" },
          { label: "30M ILLUMINATION", sub: "WARM SOFT LIGHT RANGE", icon: "lens" },
          { label: "IP67 WEATHERPROOF", sub: "ALL-WEATHER RELIABILITY", icon: "activity" },
        ],
        metrics: [
          { val: "F/1.2", label: "Large Aperture", sub: "Optimal Light Intake" },
          { val: "30m", label: "Warm Light Range", sub: "Gentle Night Vision" },
          { val: "3K HD", label: "Sensor Sharpness", sub: "Crystal Forensic Quality" },
          { val: "IP67", label: "Enclosure Rating", sub: "All-Weather Durability" },
        ],
        specs: [
          "F/1.2 large aperture optical assembly",
          "Up to 30m warm supplemental light range",
          "High-definition 1080p and 3K video clarity",
          "Plug & Play installation with existing coaxial or PoE cabling",
          "Multi-axis bracket for wall or ceiling mount",
          "Anti-reflection coated front optical glass",
        ],
        features: [
          {
            num: "01",
            title: "24/7 True Color",
            desc: "Eliminates blurry greyscale night footage. Accurately identifies clothing colors, vehicle paint, and facial characteristics.",
          },
          {
            num: "02",
            title: "Soft Warm Lighting",
            desc: "Gentle, non-intrusive light provides clarity without blinding passersby or creating neighborhood light pollution.",
          },
          {
            num: "03",
            title: "Broad Dynamic Range",
            desc: "Compensates for harsh shadows and intense bright spots, ensuring balanced exposure across challenging scenes.",
          },
          {
            num: "04",
            title: "Smart Illumination Control",
            desc: "Dynamic sensor intelligently adjusts supplemental light output to match ambient darkness levels.",
          },
        ],
        products: [
          {
            model: "DS-2CE72DV0T-LS",
            name: "2MP ColorVu 3.0 Fixed Turret Camera",
            image: "/images/cctv_turret_catalog.jpg",
            tag: "C3 Turret",
            res: "2MP 1080p",
            lens: "Fixed 2.8mm",
            light: "Up to 30m ColorVu",
          },
        ],
      },
    ],
  },

  "solar-powered-4g": {
    id: "solar-powered-4g",
    title: "AOV SolarVu™ 4G Series",
    category: "Autonomous Edge",
    badge: "ZERO-CABLE DEPLOYMENT",
    icon: Sun,
    heroImage: "/images/solar_camera_hero.jpg",
    hudTitle: "AOV SolarVu™ AIoT",
    hudSubtitle: "Continuous autonomous monitoring in remote farms, construction yards, and highway corridors.",
    hudAperture: "F1.4",
    hudStats: [
      { label: "100% OFF-GRID", sub: "SOLAR + SMART LITHIUM", icon: "viewfinder" },
      { label: "4G LTE CONNECTIVITY", sub: "ZERO ETHERNET REQUIRED", icon: "chip" },
      { label: "RADAR DETECTION", sub: "ULTRA LOW POWER WAKEUP", icon: "lens" },
      { label: "IP67 STORMPROOF", sub: "TYPHOON & FROST RESISTANT", icon: "activity" },
    ],
    subItems: [
      {
        id: "standalone-solar",
        title: "AOV SolarVu™ 4G",
        seriesBadge: "Off-Grid Security",
        headline: "AOV SolarVu™ Cameras — View Anytime, Deploy Anywhere",
        tagline:
          "Zero power grid, zero Ethernet cables required. Engineered with high-efficiency photovoltaic panels, deep-cycle lithium batteries, and embedded 4G LTE cellular telemetry.",
        heroBanner: "/images/solar_camera_hero.jpg",
        hudTitle: "Standalone Solar 4G",
        hudSubtitle: "Engineered for 7-day continuous operation in overcast weather conditions.",
        hudAperture: "F1.4",
        hudStats: [
          { label: "80W SOLAR ARRAY", sub: "MONOCRYSTALLINE CELLS", icon: "viewfinder" },
          { label: "360Wh LITHIUM BATTERY", sub: "SMART BMS THERMAL CONTROL", icon: "chip" },
          { label: "LOW-POWER SLEEP/WAKE", sub: "RADAR TRIGGER IN <0.2s", icon: "lens" },
          { label: "4G MULTI-BAND CELLULAR", sub: "WORLDWIDE CARRIER SUPPORT", icon: "activity" },
        ],
        metrics: [
          { val: "80 W", label: "Solar Photovoltaic", sub: "Monocrystalline High-Yield" },
          { val: "7 Days", label: "Overcast Autonomy", sub: "Deep-Cycle Smart Battery" },
          { val: "4G LTE", label: "Cellular Uplink", sub: "Encrypted Cloud Streaming" },
          { val: "IP67", label: "Weather Resistance", sub: "Built for Extreme Climates" },
        ],
        specs: [
          "High-efficiency monocrystalline solar photovoltaic panel",
          "Long-life lithium battery with integrated Battery Management System (BMS)",
          "4G cellular transmission with dual-antenna diversity",
          "Low-power PIR and radar dual-detection wake-up triggers",
          "ColorVu full-color imaging in total darkness",
        ],
        features: [
          {
            num: "01",
            title: "Total Wireless Freedom",
            desc: "Install anywhere within minutes. Ideal for agricultural fields, construction perimeters, oil pipelines, and forestry reserves.",
          },
          {
            num: "02",
            title: "Intelligent Power Management",
            desc: "Patented power control system dynamically regulates consumption, extending runtime during consecutive rainy days.",
          },
          {
            num: "03",
            title: "Cold-Weather Heating Film",
            desc: "Self-heating battery pack allows continuous charging and discharging down to -20°C in freezing winter environments.",
          },
          {
            num: "04",
            title: "Encrypted Remote Management",
            desc: "Monitor battery health, solar yield, cellular signal, and 4K live video through the Coloron mobile app or central VMS.",
          },
        ],
        products: [
          {
            model: "DS-2XS6A87G1-L/C32S80",
            name: "8 MP 4K Solar-Powered Security 4G Bullet Camera Kit",
            image: "/images/new_prod_solar.jpg",
            tag: "Solar Kit",
            res: "8MP / 4K",
            lens: "4mm Fixed F1.0",
            light: "40m ColorVu Light",
          },
        ],
      },
    ],
  },

  "multi-sensor": {
    id: "multi-sensor",
    title: "Multi Sensor",
    category: "Panoramic & PTZ",
    badge: "DUAL OPTICAL CHANNELS",
    icon: Layers,
    heroImage: "/images/core_tech_tandemvu.jpg",
    hudTitle: "TandemVu Dual Lens",
    hudSubtitle: "Ultra-wide 180° panoramic contextual overview synchronized with 32x optical zoom speed dome.",
    hudAperture: "F1.2",
    hudStats: [
      { label: "180° PANORAMA", sub: "CONTINUOUS BROAD OVERVIEW", icon: "viewfinder" },
      { label: "32X SPEED DOME", sub: "PINPOINT TARGET TRACKING", icon: "chip" },
      { label: "TARGET LINKAGE", sub: "CLICK TO AUTO-STEER PTZ", icon: "lens" },
      { label: "TANDEMVU ARCHITECTURE", sub: "ZERO BLIND SPOTS EVER", icon: "activity" },
    ],
    subItems: [
      {
        id: "tandem-vu",
        title: "TandemVu Dual Lens",
        seriesBadge: "Panoramic + PTZ",
        headline: "TandemVu Dual Lens — Big Picture & Precision Zoom Together",
        tagline:
          "Combines an ultra-wide 180° panoramic channel and a high-speed 32x optical zoom PTZ dome into a unified chassis. Never miss the contextual overview while tracking fine details.",
        heroBanner: "/images/core_tech_tandemvu.jpg",
        hudTitle: "TandemVu Dual Lens",
        hudSubtitle: "Continuous situational overview and zoom-in tracking simultaneously in one unified device.",
        hudAperture: "F1.2",
        hudStats: [
          { label: "DUAL 4K SENSORS", sub: "FULL FRAME RATE ON BOTH", icon: "viewfinder" },
          { label: "AI AUTO-TRACKING 3.0", sub: "DEEP LEARNING VEHICLE LOCK", icon: "chip" },
          { label: "LASER IR ILLUMINATOR", sub: "UP TO 300M NIGHT VISION", icon: "lens" },
          { label: "COLORVU IN PANORAMA", sub: "24/7 COLOR CONTEXT", icon: "activity" },
        ],
        metrics: [
          { val: "180°", label: "Panoramic Overview", sub: "Zero Blind-Spot Monitoring" },
          { val: "32x", label: "Optical Zoom", sub: "Pinpoint License & Face Detail" },
          { val: "Smart Link", label: "Target Coordination", sub: "Auto Steers Speed Dome" },
          { val: "400°/s", label: "Pan Speed", sub: "Rapid Target Interception" },
        ],
        specs: [
          "Upper lens: 180° Ultra-Wide Panoramic 4K overview channel",
          "Lower lens: 32x Optical Zoom PTZ with AI auto-tracking",
          "Smart Target Linkage: tap anywhere on the panorama to steer the PTZ",
          "ColorVu 24/7 color in panoramic view + DarkFighter in PTZ speed dome",
        ],
        features: [
          {
            num: "01",
            title: "Coordinated Surveillance",
            desc: "Even while the PTZ camera tracks a moving suspect in extreme close-up, the panoramic lens continuously records the entire perimeter.",
          },
          {
            num: "02",
            title: "Intelligent Auto-Tracking 3.0",
            desc: "Deep learning algorithms automatically steer the speed dome to lock on and track vehicles or pedestrians across multi-lane highways.",
          },
          {
            num: "03",
            title: "Reduced Infrastructure Footprint",
            desc: "Replaces multiple fixed cameras and a speed dome with a single IP address and single PoE++ cable drop.",
          },
          {
            num: "04",
            title: "Precision Preset Linkage",
            desc: "Instantly zooms to alarm zones triggered by perimeter radar or line-crossing tripwires.",
          },
        ],
        products: [
          {
            model: "DS-2SE7C124IW-AE",
            name: "TandemVu 7-inch 4 MP 32X Optical Zoom Dual Lens Network Dome",
            image: "/images/new_prod_speed_dome.jpg",
            tag: "TandemVu",
            res: "4MP + 4MP",
            lens: "180° + 32x Zoom",
            light: "Laser Matrix Night Vision",
          },
        ],
      },
    ],
  },

  intercom: {
    id: "intercom",
    title: "Intercom",
    category: "Access Control",
    badge: "SMART ENTRY & AUDIO",
    icon: PhoneCall,
    heroImage: "/images/hero_video_intercom.jpg",
    hudTitle: "IP Video Intercom",
    hudSubtitle: "Biometric facial recognition, contactless card validation, and crystal-clear full-duplex video communication.",
    hudAperture: "F2.0",
    hudStats: [
      { label: "TOUCHSCREEN STATION", sub: "ANTI-FINGERPRINT GLASS", icon: "viewfinder" },
      { label: "DUAL-CAMERA BIOMETRIC", sub: "ANTI-SPOOFING 3D FACE", icon: "chip" },
      { label: "SIP PROTOCOL READY", sub: "SMARTPHONE APP FORWARDING", icon: "lens" },
      { label: "IP65 & IK08 RATED", sub: "VANDAL-PROOF STAINLESS", icon: "activity" },
    ],
    subItems: [
      {
        id: "ip-video-intercom",
        title: "IP Video Intercom",
        seriesBadge: "Smart Villa & Apartment",
        headline: "IP Video Intercom — Luxury Access Control & Video Calling",
        tagline:
          "Elevate entrance security with high-definition video door stations, touch-screen indoor panels, and instant mobile app calling for residential and enterprise premises.",
        heroBanner: "/images/hero_video_intercom.jpg",
        hudTitle: "IP Video Intercom",
        hudSubtitle: "Seamless visitor greeting, remote door unlocking, and high-fidelity noise cancellation.",
        hudAperture: "F2.0",
        hudStats: [
          { label: "10-INCH TOUCH PANEL", sub: "IPS HIGH RESOLUTION", icon: "viewfinder" },
          { label: "CLOUD APP FORWARDING", sub: "CALLS TO SMARTPHONE", icon: "chip" },
          { label: "WDR CAMERA LENS", sub: "AGAINST BRIGHT SUNLIGHT", icon: "lens" },
          { label: "MULTI-TENANT SUPPORT", sub: "SCALABLE TO 10,000 FLATS", icon: "activity" },
        ],
        metrics: [
          { val: "2 MP", label: "Door Camera HD", sub: "180° Ultra-Wide Fisheye" },
          { val: "<0.2s", label: "Face Recognition", sub: "Anti-Spoofing 3D Sensor" },
          { val: "SIP", label: "Open Protocol", sub: "PBX & VoIP Phone Link" },
          { val: "IK08", label: "Vandal Resistance", sub: "Solid Aluminum Enclosure" },
        ],
        specs: [
          "2MP HD fisheye camera with wide dynamic range (WDR) and IR night vision",
          "Touchscreen indoor station running Android OS with third-party app support",
          "Remote unlocking and live audio/video answer via Coloron smartphone app",
          "Standard PoE (802.3af) power supply with surface or flush mounting options",
        ],
        features: [
          {
            num: "01",
            title: "Touchless Face Recognition",
            desc: "Deep learning facial algorithms unlock doors in under 0.2 seconds without physical contact.",
          },
          {
            num: "02",
            title: "Acoustic Echo Cancellation",
            desc: "Hardware DSP filters out background traffic noise and street sounds for effortless caller comprehension.",
          },
          {
            num: "03",
            title: "Elevator Dispatch Integration",
            desc: "Automatically calls the elevator and authorizes access only to the visitor's designated floor upon greeting.",
          },
          {
            num: "04",
            title: "Virtual Temporary QR Codes",
            desc: "Generate time-limited QR entry passes for delivery personnel, cleaners, or guests directly from your phone.",
          },
        ],
        products: [
          {
            model: "DS-KV8113-WME1",
            name: "Metal Villa Door Station with Card Reader & PoE",
            image: "/images/hero_video_intercom.jpg",
            tag: "Door Station",
            res: "2MP 1080p",
            lens: "Wide Angle Fisheye",
            light: "IR Night Vision",
          },
        ],
      },
    ],
  },

  "thermal-cameras": {
    id: "thermal-cameras",
    title: "Thermal Cameras",
    category: "Forensics & Heat Sensing",
    badge: "THERMAL IMAGING FORENSICS",
    icon: Flame,
    heroImage: "/images/cat_thermal_cam.jpg",
    hudTitle: "Bi-Spectrum Thermal",
    hudSubtitle: "Detect heat emissions through dense smoke, total darkness, fog, and foliage for early fire warning and critical perimeter protection.",
    hudAperture: "F1.0",
    hudStats: [
      { label: "UNCOOLED VOx SENSOR", sub: "NETD <35mK THERMAL RESOLUTION", icon: "viewfinder" },
      { label: "BI-SPECTRUM OVERLAY", sub: "THERMAL + OPTICAL FUSION", icon: "chip" },
      { label: "EARLY FIRE ALGORITHM", sub: "ALERTS BEFORE FLAMES IGNITE", icon: "lens" },
      { label: "TEMPERATURE EXCEPTION", sub: "PRECISION ±2°C MEASUREMENT", icon: "activity" },
    ],
    subItems: [
      {
        id: "bi-spectrum-thermal",
        title: "Bi-Spectrum Thermography",
        seriesBadge: "Perimeter & Fire Prevention",
        headline: "Bi-Spectrum Thermal Cameras — See Beyond Light, Weather & Smoke",
        tagline:
          "Engineered with uncooled Vanadium Oxide (VOx) focal plane sensors, Coloron thermal cameras detect minuscule heat variations at extreme distances in zero ambient light.",
        heroBanner: "/images/cat_thermal_cam.jpg",
        hudTitle: "Bi-Spectrum Thermal",
        hudSubtitle: "Continuous heat signature detection combined with high-resolution 4K optical detail.",
        hudAperture: "F1.0",
        hudStats: [
          { label: "<35 mK SENSITIVITY", sub: "PINPOINT TEMPERATURE DELTAS", icon: "viewfinder" },
          { label: "LONG-RANGE DETECTION", sub: "UP TO 3,000M PERIMETER", icon: "chip" },
          { label: "DUAL-SPECTRUM FUSION", sub: "OUTLINE SHARPNESS ON HEATMAP", icon: "lens" },
          { label: "IP67 WEATHERPROOF", sub: "HEATER & DEFROST INTEGRATED", icon: "activity" },
        ],
        metrics: [
          { val: "<35 mK", label: "NETD Sensitivity", sub: "Ultra-Fine Temperature Delta" },
          { val: "±2°C", label: "Temperature Accuracy", sub: "Industrial Thermometry" },
          { val: "3,000m", label: "Perimeter Range", sub: "Long-Range Human Detection" },
          { val: "Bi-Spectrum", label: "Image Fusion", sub: "Thermal + 4K Optical Blend" },
        ],
        specs: [
          "Uncooled VOx microbolometer with high thermal sensitivity (NETD < 35 mK)",
          "Bi-Spectrum image fusion: overlays sharp optical details onto thermal heatmaps",
          "Temperature exception alarms from -20°C to 550°C for early fire warning",
          "Advanced VCA algorithms: line crossing, intrusion detection, smoking detection",
        ],
        features: [
          {
            num: "01",
            title: "Early Fire Warning",
            desc: "Detects internal thermal buildup in lithium battery storage, recycling plants, or electrical switchgear before open flames emerge.",
          },
          {
            num: "02",
            title: "Extreme Weather Penetration",
            desc: "Long-wave infrared waves pierce through thick fog, heavy rain, dust storms, and dense tree foliage unaffected by visible light.",
          },
          {
            num: "03",
            title: "Immunity to Optical Camouflage",
            desc: "Intruders wearing camouflage gear or hiding in tall grass are instantly revealed by their distinct body heat radiation.",
          },
          {
            num: "04",
            title: "Zero False Alarms from Sunlight",
            desc: "Thermal sensors are completely immune to blinding car headlights, reflections off glass buildings, and moving water ripples.",
          },
        ],
        products: [
          {
            model: "DS-2TD2617-6/PA",
            name: "Thermal & Optical Bi-spectrum Network Bullet Camera",
            image: "/images/cat_thermal_cam.jpg",
            tag: "Bi-Spectrum",
            res: "160×120 Thermal / 4MP Optical",
            lens: "6mm Thermal Lens",
            light: "40m IR + Strobe Siren",
          },
        ],
      },
    ],
  },

  "guanlan-encoding": {
    id: "guanlan-encoding",
    title: "Guanlan Encoding",
    category: "Compression & AI",
    badge: "INTELLIGENT COMPRESSION",
    icon: Sparkles,
    heroImage: "/images/core_tech_guanlan.jpg",
    hudTitle: "Guanlan AI Codec",
    hudSubtitle: "AI-driven scene-adaptive video compression reducing bandwidth and storage consumption by up to 80% without losing forensic clarity.",
    hudAperture: "AI",
    hudStats: [
      { label: "80% BANDWIDTH SAVINGS", sub: "DYNAMIC SCENE BITRATE", icon: "viewfinder" },
      { label: "PERCEPTUAL CODING", sub: "PRESERVES FORENSIC DETAIL", icon: "chip" },
      { label: "ZERO ARTIFACT ARRAYS", sub: "NEURAL NOISE SUPPRESSION", icon: "lens" },
      { label: "H.265+ COMPATIBLE", sub: "UNIVERSAL STREAMING", icon: "activity" },
    ],
    subItems: [
      {
        id: "smart-h265",
        title: "Smart H.265+",
        seriesBadge: "Ultra-Low Bitrate",
        headline: "Guanlan Encoding — AI-Driven Video Compression Architecture",
        tagline:
          "Harnessing real-time perceptual intelligence, Guanlan Encoding analyzes moving regions of interest, dynamically allocating bits to faces and license plates while aggressively compressing static backgrounds.",
        heroBanner: "/images/core_tech_guanlan.jpg",
        hudTitle: "Smart H.265+ Codec",
        hudSubtitle: "Intelligent background modeling and neural motion estimation for ultra-low bitrate 4K video.",
        hudAperture: "AI",
        hudStats: [
          { label: "4K AT 2MBPS", sub: "CRYSTAL STREAMING QUALITY", icon: "viewfinder" },
          { label: "ROI TARGET ENCODING", sub: "MAX BITS FOR FORENSIC EVIDENCE", icon: "chip" },
          { label: "ADAPTIVE FRAME GROUPING", sub: "REDUCED I-FRAME OVERHEAD", icon: "lens" },
          { label: "5X HARD DRIVE LIFE", sub: "DRASTIC NVR TCO REDUCTION", icon: "activity" },
        ],
        metrics: [
          { val: "80%", label: "Bandwidth Savings", sub: "vs. Standard H.264 Streams" },
          { val: "5x", label: "Retention Multiplier", sub: "50 Days Storage on Same Disk" },
          { val: "4K @ 2Mbps", label: "Bitrate Efficiency", sub: "Smooth Streaming on Cellular" },
          { val: "0 Loss", label: "Forensic Integrity", sub: "Pixel-Perfect Face Details" },
        ],
        specs: [
          "Scene-adaptive perceptual encoding with edge AI semantic segmentation",
          "Dynamic background subtraction and reference frame optimization",
          "Region of Interest (ROI) priority encoding for faces, badges, and license plates",
          "Fully backward compatible with standard RTSP, ONVIF, and H.265 decoders",
        ],
        features: [
          {
            num: "01",
            title: "Targeted Bit Allocation",
            desc: "Assigns maximum bitrate to critical foreground subjects like moving persons and license plates while conserving data on static backgrounds.",
          },
          {
            num: "02",
            title: "Halved Cloud Storage Costs",
            desc: "Dramatically reduces AWS and Azure video ingestion and storage costs for cloud-managed surveillance architectures.",
          },
          {
            num: "03",
            title: "Smooth Mobile Streaming",
            desc: "Enables silky-smooth 4K multi-camera playback over standard 4G or congested public Wi-Fi networks.",
          },
          {
            num: "04",
            title: "Extended Hard Drive Lifespan",
            desc: "Reduced disk write frequency lowers read/write head wear, decreasing NVR hard drive failure rates by up to 60%.",
          },
        ],
        products: [
          {
            model: "DS-7608NXI-I2/8P",
            name: "8-ch 1U 8 PoE Guanlan AcuSense 4K Network Video Recorder",
            image: "/images/hero_nvr_servers.jpg",
            tag: "Guanlan NVR",
            res: "Up to 12MP 4K",
            lens: "PoE Plug & Play",
            light: "Smart H.265+ Engine",
          },
        ],
      },
    ],
  },

  "see-clearer": {
    id: "see-clearer",
    title: "See Clearer Technology",
    category: "Optics & Clarity",
    badge: "ULTRA HIGH RESOLUTION",
    icon: Compass,
    heroImage: "/images/uhd_city_panorama.jpg",
    hudTitle: "Super WDR 130dB",
    hudSubtitle: "Multi-exposure optical fusion balances blinding sunlight and deep shadows simultaneously.",
    hudAperture: "F1.2",
    hudStats: [
      { label: "130dB TRUE WDR", sub: "MULTI-EXPOSURE FUSION", icon: "viewfinder" },
      { label: "OPTICAL DEFOG ISP", sub: "PENETRATES SMOG & HAZE", icon: "chip" },
      { label: "3D DIGITAL NOISE REDUCTION", sub: "PRESERVES SUBTLE TEXTURES", icon: "lens" },
      { label: "4K SHARPNESS MATRIX", sub: "ULTRA-CLEAR EVIDENCE", icon: "activity" },
    ],
    subItems: [
      {
        id: "super-wdr",
        title: "130dB Super WDR",
        seriesBadge: "Extreme Dynamic Range",
        headline: "See Clearer Technology — 130dB Super WDR & Optical Defog",
        tagline:
          "Combines multi-frame optical exposure brackets and hardware ISP tone-mapping to deliver razor-sharp clarity in extreme backlit conditions such as glass lobby entrances and tunnel exits.",
        heroBanner: "/images/uhd_city_panorama.jpg",
        hudTitle: "Super WDR 130dB",
        hudSubtitle: "Triple-shutter sensor captures highlight and shadow exposures simultaneously.",
        hudAperture: "F1.2",
        hudStats: [
          { label: "130dB DYNAMIC RANGE", sub: "BALANCED EXPOSURE", icon: "viewfinder" },
          { label: "ANTI-BLOOMING COATING", sub: "ZERO HALO ON HEADLIGHTS", icon: "chip" },
          { label: "REAL-TIME TONE MAPPING", sub: "TRUE-TO-LIFE FORENSICS", icon: "lens" },
          { label: "60 FPS HIGH FRAME RATE", sub: "SMOOTH MOTION RENDERING", icon: "activity" },
        ],
        metrics: [
          { val: "130 dB", label: "Dynamic Range", sub: "Multi-Exposure Tone Mapping" },
          { val: "60 fps", label: "High Frame Rate", sub: "Zero Motion Blur on Highway" },
          { val: "Defog", label: "Optical Enhancement", sub: "Smog & Haze Penetration" },
          { val: "3D DNR", label: "Noise Filtering", sub: "Clean Edge Rendering" },
        ],
        specs: [
          "Triple-shutter sensor capturing bright and dark exposures in a single frame",
          "Advanced chromatic defog algorithm for maritime, highway, and mountain vistas",
          "Highlight Compensation (HLC) preventing headlight glare during nighttime traffic checks",
          "Backlight Compensation (BLC) keeping foreground subjects clearly illuminated",
        ],
        features: [
          {
            num: "01",
            title: "True Optical 130dB WDR",
            desc: "Renders faces and license plates crystal-clear even when cameras face directly toward sunrise or sunset.",
          },
          {
            num: "02",
            title: "Optical Atmospheric Defog",
            desc: "Pulls hidden contours and colors out of sea mist, dust clouds, and morning fog for reliable port surveillance.",
          },
          {
            num: "03",
            title: "Headlight Glare Suppression",
            desc: "Inverts intense vehicle high beams to reveal readable front license plate numbers at security gate barriers.",
          },
          {
            num: "04",
            title: "Adaptive 3D Noise Reduction",
            desc: "Compares sequential frames to erase digital snow and pixel speckling while keeping text razor sharp.",
          },
        ],
        products: [
          {
            model: "DS-2CD3186G2-IS",
            name: "8 MP AcuSense Motorized Varifocal Dome Camera",
            image: "/images/cctv_turret_catalog.jpg",
            tag: "Super WDR",
            res: "8MP 4K",
            lens: "2.8-12mm Motorized",
            light: "50m DarkFighter IR",
          },
        ],
      },
    ],
  },

  "see-smarter": {
    id: "see-smarter",
    title: "See Smarter Technology",
    category: "Compression & AI",
    badge: "EDGE NEURAL INTELLIGENCE",
    icon: Cpu,
    heroImage: "/images/core_tech_acusense.jpg",
    hudTitle: "AcuSense Deep Learning",
    hudSubtitle: "Edge-trained neural networks categorize humans, vehicles, and motorcycles with 99.4% false alarm rejection.",
    hudAperture: "AI",
    hudStats: [
      { label: "HUMAN & VEHICLE FOCUS", sub: "DEEP LEARNING CLASSIFICATION", icon: "viewfinder" },
      { label: "99.4% ACCURACY", sub: "FILTERS RAIN, LEAVES & ANIMALS", icon: "chip" },
      { label: "RAPID TARGET SEARCH", sub: "INSTANT EVENT RETRIEVAL", icon: "lens" },
      { label: "EDGE NPU ACCELERATION", sub: "SUB-SECOND DETECTION", icon: "activity" },
    ],
    subItems: [
      {
        id: "deepinmind-ai",
        title: "DeepinMind AI",
        seriesBadge: "Edge Neural Processing",
        headline: "See Smarter Technology — AcuSense & DeepinMind Neural Processing",
        tagline:
          "Transforming reactive video recording into proactive perimeter intelligence. Embedded neural processors filter out rain, wind, animals, and foliage to trigger alerts only on actual security threats.",
        heroBanner: "/images/core_tech_acusense.jpg",
        hudTitle: "DeepinMind Edge AI",
        hudSubtitle: "Multi-target classification, perimeter tripwires, and intelligent attribute search.",
        hudAperture: "AI",
        hudStats: [
          { label: "DEEP NEURAL NETWORK", sub: "TRAINED ON 10M+ SCENARIOS", icon: "viewfinder" },
          { label: "QUICK TARGET SEARCH", sub: "FIND PERSON BY CLOTHING COLOR", icon: "chip" },
          { label: "FACIAL RECOGNITION", sub: "ON-THE-FLY VIP & BLACKLIST", icon: "lens" },
          { label: "PERIMETER PROTECTION", sub: "VIRTUAL LINE-CROSSING FENCE", icon: "activity" },
        ],
        metrics: [
          { val: "99.4%", label: "Accuracy Rate", sub: "False Alarm Filtering" },
          { val: "<0.1s", label: "Inference Speed", sub: "Edge NPU Acceleration" },
          { val: "Target", label: "Smart Filter", sub: "Human / Vehicle Split" },
          { val: "Quick", label: "Video Search", sub: "Retrieve Evidence in Seconds" },
        ],
        specs: [
          "Integrated dedicated Neural Processing Unit (NPU) with multi-TOPS computing power",
          "Real-time perimeter protection: Line Crossing Detection & Intrusion Detection",
          "Quick Target Search: search recordings by human or vehicle category to save hours of review",
          "Face Capture and facial attribute modeling for access and VIP analytics",
        ],
        features: [
          {
            num: "01",
            title: "99.4% False Alarm Elimination",
            desc: "Ignores falling autumn leaves, heavy rain downpours, stray cats, and windblown tree shadows, alerting security guards only when humans or cars enter restricted zones.",
          },
          {
            num: "02",
            title: "Instant Incident Retrieval",
            desc: "Locate relevant footage in seconds rather than scrubbing through 24 hours of video by filtering clips by 'Human' or 'Vehicle'.",
          },
          {
            num: "03",
            title: "Facial Recognition at the Edge",
            desc: "Identifies known personnel and flags unauthorized individuals against internal blacklists in real time.",
          },
          {
            num: "04",
            title: "Vehicle License Plate AI (ANPR)",
            desc: "Recognizes license plates across 90+ countries with speed detection, barrier control integration, and parking duration logging.",
          },
        ],
        products: [
          {
            model: "DS-2CD2087G2-LU",
            name: "8 MP AcuSense ColorVu Fixed Bullet Network Camera",
            image: "/images/cctv_bullet_catalog.jpg",
            tag: "AcuSense AI",
            res: "8MP 4K",
            lens: "2.8mm Wide Angle",
            light: "40m ColorVu Light",
          },
        ],
      },
    ],
  },

  "see-vaster": {
    id: "see-vaster",
    title: "See Vaster Technology",
    category: "Panoramic & PTZ",
    badge: "360° SPATIAL COVERAGE",
    icon: Maximize2,
    heroImage: "/images/uhd_city_panorama.jpg",
    hudTitle: "PanoVu 360° Matrix",
    hudSubtitle: "Continuous multi-sensor panoramic coverage for airport concourses, public plazas, and stadium arenas.",
    hudAperture: "F1.6",
    hudStats: [
      { label: "360° SEAMLESS STITCH", sub: "HARDWARE BLENDING ENGINE", icon: "viewfinder" },
      { label: "32MP RESOLUTION", sub: "MULTI-SENSOR COMPOSITE", icon: "chip" },
      { label: "ZERO BLIND ZONES", sub: "COMPREHENSIVE AIRPORT COVERAGE", icon: "lens" },
      { label: "DEWARPING MODES", sub: "VR, PANORAMA, QUAD SPLIT", icon: "activity" },
    ],
    subItems: [
      {
        id: "panovu-360",
        title: "PanoVu 360° Panoramic",
        seriesBadge: "Wide Area Surveillance",
        headline: "See Vaster Technology — 360° PanoVu Seamless Panoramic Arrays",
        tagline:
          "Harnessing multiple synchronized optical sensors and real-time hardware image stitching, PanoVu replaces up to 8 conventional fixed cameras with a single panoramic view.",
        heroBanner: "/images/uhd_city_panorama.jpg",
        hudTitle: "PanoVu 360° Matrix",
        hudSubtitle: "Zero distortion and seamless pixel alignment across massive municipal squares.",
        hudAperture: "F1.6",
        hudStats: [
          { label: "4-IN-1 SENSORS", sub: "INDIVIDUALLY ADJUSTABLE", icon: "viewfinder" },
          { label: "SMOOTH PANORAMA", sub: "ELIMINATES VISUAL SEAMS", icon: "chip" },
          { label: "SINGLE IP ADDRESS", sub: "REDUCES VMS LICENSE FEES", icon: "lens" },
          { label: "HIGH APERTURE", sub: "NIGHTTIME BROAD COVERAGE", icon: "activity" },
        ],
        metrics: [
          { val: "360°", label: "Panoramic View", sub: "Full Spatial Awareness" },
          { val: "32 MP", label: "Composite Res", sub: "Extreme Detail in Crowd" },
          { val: "1 IP", label: "Address Stream", sub: "Single VMS Channel Cost" },
          { val: "IP67", label: "Ruggedized", sub: "Airport & Stadium Ready" },
        ],
        specs: [
          "Multiple image sensors arranged radially with real-time hardware dewarping",
          "Ultra-low latency GPU edge stitching with zero seam alignment distortion",
          "Customizable dewarping modes: 360° Fisheye, 180° Panoramic, Quad PTZ Views",
          "Integrated high-speed PTZ tracking dome for automatic target inspection",
        ],
        features: [
          {
            num: "01",
            title: "Replaces Multiple Cameras",
            desc: "One PanoVu panoramic camera covers an entire football stadium or warehouse floor, slashing mounting hardware and cabling costs.",
          },
          {
            num: "02",
            title: "Simultaneous Multi-User Dewarping",
            desc: "Different security operators can independently zoom into separate sections of the 360° image without moving the physical lens.",
          },
          {
            num: "03",
            title: "Crowd Density Analytics",
            desc: "Calculates occupancy levels and crowd movement trends across large train stations, alerting managers to overcrowding.",
          },
          {
            num: "04",
            title: "VMS Channel License Economy",
            desc: "Streams multi-camera views through a single network IP address, saving substantial recurring software license fees.",
          },
        ],
        products: [
          {
            model: "DS-2DP1636Z-D",
            name: "PanoVu Series 360° Panoramic 16 MP + 36x PTZ Camera",
            image: "/images/new_prod_speed_dome.jpg",
            tag: "PanoVu",
            res: "16MP + PTZ",
            lens: "360° Multi-Lens",
            light: "Laser Night Vision",
          },
        ],
      },
    ],
  },

  "see-more-demanding": {
    id: "see-more-demanding",
    title: "See More in Demanding Scenarios",
    category: "Autonomous Edge",
    badge: "HARSH ENVIRONMENT PROTECTION",
    icon: Shield,
    heroImage: "/images/cctv_bullet_catalog.jpg",
    hudTitle: "Marine & Explosive Proof",
    hudSubtitle: "Certified 316L stainless steel enclosures for offshore oil rigs, chemical processing plants, and marine shipping ports.",
    hudAperture: "F1.2",
    hudStats: [
      { label: "316L STAINLESS STEEL", sub: "ACID & SALT RESISTANT", icon: "viewfinder" },
      { label: "ATEX & IECEx CERTIFIED", sub: "ZONE 1 & 2 EXPLOSION PROOF", icon: "chip" },
      { label: "IP68 WATER SUBMERSION", sub: "RESISTS CONTINUOUS JETS", icon: "lens" },
      { label: "-40°C TO +70°C", sub: "EXTREME TEMPERATURE TOLERANCE", icon: "activity" },
    ],
    subItems: [
      {
        id: "anti-corrosion",
        title: "Anti-Corrosion Marine 316L",
        seriesBadge: "Heavy Industrial Grade",
        headline: "See More in Demanding Scenarios — Explosion-Proof & Marine 316L",
        tagline:
          "Built to endure the harshest environments on Earth. Engineered with electropolished AISI 316L stainless steel, explosion-proof explosion containment, and active wiper blades.",
        heroBanner: "/images/cctv_bullet_catalog.jpg",
        hudTitle: "Marine & Hazardous Grade",
        hudSubtitle: "Ruggedized surveillance for maritime vessels, refineries, and mining operations.",
        hudAperture: "F1.2",
        hudStats: [
          { label: "NEMA 4X / C5-M RATED", sub: "COASTAL CORROSION PROOF", icon: "viewfinder" },
          { label: "EXPLOSION FLAMEPROOF", sub: "CONTAINS INTERNAL SPARKS", icon: "chip" },
          { label: "INTEGRATED WIPER", sub: "CLEARS SALT, MUD & OIL", icon: "lens" },
          { label: "HIGH VOLTAGE ISOLATION", sub: "LIGHTNING SURGE PROTECTION", icon: "activity" },
        ],
        metrics: [
          { val: "316L", label: "Stainless Steel", sub: "Marine Grade Electrolytic" },
          { val: "ATEX", label: "Certification", sub: "Explosion Proof Zone 1 / 2" },
          { val: "IP68", label: "Immersion Depth", sub: "Dust & High Pressure Jets" },
          { val: "-40°C", label: "Cold Start", sub: "Internal Heating Elements" },
        ],
        specs: [
          "Electro-polished AISI 316L stainless steel casing resistant to salt fog and acidic vapors",
          "ATEX and IECEx certifications for explosive dust and gas atmospheres",
          "Active silicone wiper blade with optional pressurized washer reservoir",
          "Germanium or sapphire front optical glass with scratch resistance",
        ],
        features: [
          {
            num: "01",
            title: "Offshore Marine Resistance",
            desc: "Withstands corrosive sea spray and chemical salt fog on cargo ships, offshore wind turbines, and naval ports for over a decade.",
          },
          {
            num: "02",
            title: "Hazardous Atmosphere Safety",
            desc: "Explosion-proof casings prevent any internal electrical sparks from igniting surrounding flammable gases in oil refineries and grain silos.",
          },
          {
            num: "03",
            title: "Self-Cleaning Wiper Mechanism",
            desc: "Built-in wiper removes dirt, salt spray, and grease from the front lens automatically, keeping forensic evidence clear without manual maintenance.",
          },
          {
            num: "04",
            title: "Extreme Thermal Operation",
            desc: "Operates reliably in desert heat up to 70°C and arctic chills down to -40°C with automated heating elements and thermal shielding.",
          },
        ],
        products: [
          {
            model: "DS-2DT6224X-AELW",
            name: "Stainless Steel 316L Explosion-Proof Speed Dome PTZ",
            image: "/images/cctv_bullet_catalog.jpg",
            tag: "Hazardous Grade",
            res: "4MP 1080p",
            lens: "25x Optical Zoom",
            light: "Laser Night Vision",
          },
        ],
      },
    ],
  },

  "radar-technology": {
    id: "radar-technology",
    title: "Radar Technology",
    category: "Forensics & Heat Sensing",
    badge: "PERIMETER DETECTION",
    icon: Radio,
    heroImage: "/images/low_light_racing.jpg",
    hudTitle: "Radar-Video Synergy",
    hudSubtitle: "Millimeter-wave perimeter radar coupled with speed dome PTZ for high-speed tracking and zero visual blind spots.",
    hudAperture: "Radar",
    hudStats: [
      { label: "60GHz MM-WAVE RADAR", sub: "HIGH SPEED & DISTANCE PRECISION", icon: "viewfinder" },
      { label: "PTZ SMART LINKAGE", sub: "AUTO-STEERS SPEED DOME", icon: "chip" },
      { label: "WEATHER IMMUNITY", sub: "OPERATES IN DENSE FOG & SNOW", icon: "lens" },
      { label: "MULTI-TARGET TRACKING", sub: "UP TO 64 OBJECTS SIMULTANEOUSLY", icon: "activity" },
    ],
    subItems: [
      {
        id: "radar-video-synergy",
        title: "Radar-Video Synergy",
        seriesBadge: "Perimeter Security",
        headline: "Radar Technology — Millimeter-Wave Radar & PTZ Coordinated Tracking",
        tagline:
          "Combines 60GHz millimeter-wave radar detection with ultra-high-speed PTZ cameras. Millimeter waves pinpoint intruder speed and trajectory through pitch-black darkness, fog, and rain.",
        heroBanner: "/images/low_light_racing.jpg",
        hudTitle: "Millimeter-Wave Radar",
        hudSubtitle: "Continuous 3D trajectory tracking and coordinates-based PTZ steering.",
        hudAperture: "Radar",
        hudStats: [
          { label: "120M DETECTION RADIUS", sub: "100° RADAR BEAM COVERAGE", icon: "viewfinder" },
          { label: "SPEED & DIRECTION", sub: "INSTANT VELOCITY MEASUREMENT", icon: "chip" },
          { label: "ZERO FALSE TRIGGERS", sub: "FILTERS FLYING INSECTS & BIRDS", icon: "lens" },
          { label: "MAP COORDINATE PLOT", sub: "REAL-TIME GIS INTEGRATION", icon: "activity" },
        ],
        metrics: [
          { val: "120 m", label: "Radar Radius", sub: "100° Horizontal Coverage" },
          { val: "64 Targets", label: "Simultaneous Track", sub: "Speed, Distance, Angle" },
          { val: "0 Lux", label: "Light Independent", sub: "Operates in Total Darkness" },
          { val: "IP67", label: "Weather Resistance", sub: "Heavy Rain & Snow Immune" },
        ],
        specs: [
          "60GHz frequency-modulated continuous-wave (FMCW) radar transceiver",
          "Smart radar-PTZ linkage steering speed dome to intruder's exact GPS coordinates",
          "Configurable defense sectors with customizable warning zones and alarm zones",
          "Pet immunity and animal filtering to prevent false perimeter alerts",
        ],
        features: [
          {
            num: "01",
            title: "All-Weather Perimeter Defense",
            desc: "Radar waves pass straight through dense blinding snow, heavy rain, thick dust, and zero-light conditions that disable optical cameras.",
          },
          {
            num: "02",
            title: "Simultaneous Multi-Target Tracking",
            desc: "Tracks up to 64 individual moving intruders, vehicles, or boats simultaneously, plotting their exact velocity and path on a digital site map.",
          },
          {
            num: "03",
            title: "Autonomous PTZ Steerage",
            desc: "When radar detects an intruder crossing a perimeter boundary, it immediately commands the paired speed dome camera to zoom in on the target.",
          },
          {
            num: "04",
            title: "Zero False Alarms from Spiders & Leaves",
            desc: "Radar algorithms analyze Doppler frequency shifts, completely ignoring small animals, blowing debris, and insects crawling across the lens.",
          },
        ],
        products: [
          {
            model: "DS-PR1-60",
            name: "Security Radar 60m / 100° Detection Angle Kit",
            image: "/images/low_light_racing.jpg",
            tag: "Radar Kit",
            res: "MM-Wave Radar",
            lens: "100° Beam Width",
            light: "All-Weather Active",
          },
        ],
      },
    ],
  },

  "security-inspection": {
    id: "security-inspection",
    title: "Security Inspection Technology",
    category: "Access Control",
    badge: "AI PERCEPTIVE SCREENING",
    icon: Lock,
    heroImage: "/images/hero_access_control.jpg",
    hudTitle: "Smart Security Gate",
    hudSubtitle: "AI-assisted luggage screening, metal detection walkthroughs, and contactless thermal forehead screening.",
    hudAperture: "Screen",
    hudStats: [
      { label: "DEEP LEARNING X-RAY", sub: "AUTO-DETECTS CONTRABAND & LIQUIDS", icon: "viewfinder" },
      { label: "MULTI-ZONE METAL SENSOR", sub: "PINPOINTS WEAPON LOCATION", icon: "chip" },
      { label: "HIGH THROUGHPUT", sub: "PROCESSES 60 PEOPLE / MINUTE", icon: "lens" },
      { label: "TOUCHLESS INTEGRATION", sub: "FACIAL VALIDATION & COUNTING", icon: "activity" },
    ],
    subItems: [
      {
        id: "x-ray-ai",
        title: "X-Ray Baggage Deep Learning",
        seriesBadge: "Checkpoint Security",
        headline: "Security Inspection Technology — Intelligent Contraband Detection",
        tagline:
          "Combines dual-energy X-ray transmission and edge deep learning models to automatically highlight prohibited items, weapons, knives, and liquid explosives at airport and transit checkpoints.",
        heroBanner: "/images/hero_access_control.jpg",
        hudTitle: "X-Ray AI Screening",
        hudSubtitle: "Instant material color-coding and automated anomaly bounding boxes.",
        hudAperture: "Screen",
        hudStats: [
          { label: "DUAL-ENERGY ATOMIC", sub: "ORGANIC / INORGANIC COLORING", icon: "viewfinder" },
          { label: "REAL-TIME AI BOUNDING", sub: "HIGHLIGHTS CONCEALED BLADES", icon: "chip" },
          { label: "CLOUD LOGGING", sub: "RECORDS INSPECTION HISTORY", icon: "lens" },
          { label: "LOW RADIATION DOSE", sub: "SAFE FOR OPERATORS & FOOD", icon: "activity" },
        ],
        metrics: [
          { val: "Dual-Energy", label: "Atomic Number", sub: "Organic vs Metal Colors" },
          { val: "<0.5s", label: "AI Classification", sub: "Instant Threat Warning" },
          { val: "33 Zones", label: "Metal Detection", sub: "Pinpoint Body Location" },
          { val: "60 /min", label: "Passenger Flow", sub: "Fast Transit Throughput" },
        ],
        specs: [
          "Dual-energy X-ray imaging differentiating organic, inorganic, and metallic materials",
          "Deep learning threat algorithm trained on millions of baggage scans",
          "Walk-through metal detector with 33 independent overlapping detection zones",
          "Integrated thermal sensor for contactless body temperature verification",
        ],
        features: [
          {
            num: "01",
            title: "Automated Contraband Recognition",
            desc: "Highlights guns, knives, scissors, aerosol canisters, and fireworks with colored bounding boxes to assist screening operators during high-traffic rushes.",
          },
          {
            num: "02",
            title: "Material Color-Coding",
            desc: "Orange indicates organic matter (explosives, narcotics, plastics), blue represents dense metals (guns, knives), and green shows light alloys.",
          },
          {
            num: "03",
            title: "Multi-Zone Walk-Through Precision",
            desc: "LED lights along the side panels light up at the exact height (ankle, waist, chest) where concealed metal is detected on an individual.",
          },
          {
            num: "04",
            title: "Encrypted Cloud Archiving",
            desc: "Stores full X-ray scan images alongside passenger snapshot photos for cross-referenced audit trails and forensics.",
          },
        ],
        products: [
          {
            model: "ISD-SMG318LT-F",
            name: "Walk-Through Metal Detector with Temperature Measurement",
            image: "/images/hero_access_control.jpg",
            tag: "Inspection Gate",
            res: "18 Detection Zones",
            lens: "Thermal + Optical Screen",
            light: "High-Visibility LEDs",
          },
        ],
      },
    ],
  },

  "audio-technology": {
    id: "audio-technology",
    title: "Audio Technology",
    category: "Optics & Clarity",
    badge: "ACOUSTIC FORENSICS",
    icon: Volume2,
    heroImage: "/images/bullet_front_lens.jpg",
    hudTitle: "Acoustic Array 3.0",
    hudSubtitle: "Directional microphone arrays with AI acoustic filtering for glass-break, gunshot, and aggression detection.",
    hudAperture: "Audio",
    hudStats: [
      { label: "15M PICKUP RADIUS", sub: "OMNIDIRECTIONAL CONDENSER", icon: "viewfinder" },
      { label: "AI NOISE SUPPRESSION", sub: "FILTERS WIND & ENGINE ROAR", icon: "chip" },
      { label: "SOUND EVENT CLASSIFIER", sub: "GLASS BREAK, GUNSHOT, SCREAM", icon: "lens" },
      { label: "ACOUSTIC ECHO CANCEL", sub: "CLEAR FULL-DUPLEX TALKBACK", icon: "activity" },
    ],
    subItems: [
      {
        id: "acoustic-array",
        title: "Acoustic Array Sensor",
        seriesBadge: "Smart Sound Forensics",
        headline: "Audio Technology — Directional Beamforming & Acoustic Event AI",
        tagline:
          "Hearing what cameras cannot see. Multi-microphone beamforming arrays capture crystal-clear voices while intelligent algorithms automatically trigger alarms upon hearing glass breaks or screams.",
        heroBanner: "/images/bullet_front_lens.jpg",
        hudTitle: "Acoustic Array Sensor",
        hudSubtitle: "High-fidelity two-way voice communication and sound localization.",
        hudAperture: "Audio",
        hudStats: [
          { label: "BEAMFORMING ARRAY", sub: "FOCUSES ON TARGET SPEAKER", icon: "viewfinder" },
          { label: "GLASS BREAK DETECTION", sub: "TRIGGERS INTRUSION ALERT", icon: "chip" },
          { label: "HIGH DECIBEL SIREN", sub: "115dB CUSTOMIZABLE VOICE", icon: "lens" },
          { label: "DSP NOISE FILTER", sub: "CRYSTAL VOCAL CLARITY", icon: "activity" },
        ],
        metrics: [
          { val: "15 m", label: "Pickup Radius", sub: "High-Gain Condenser Array" },
          { val: "115 dB", label: "Warning Siren", sub: "Loud Perimeter Deterrence" },
          { val: "AI Voice", label: "Acoustic Filter", sub: "Suppresses Wind & Traffic" },
          { val: "Full-Duplex", label: "Two-Way Audio", sub: "Zero-Latency Realtime Talk" },
        ],
        specs: [
          "Dual-microphone array with beamforming spatial noise rejection",
          "Acoustic AI event classifier for gunshots, screams, car alarms, and shattering glass",
          "High-decibel waterproof speaker for verbal commands and pre-recorded audio warnings",
          "Hardware DSP for Acoustic Echo Cancellation (AEC) and Automatic Gain Control (AGC)",
        ],
        features: [
          {
            num: "01",
            title: "Gunshot & Glass Break Alerts",
            desc: "Acoustic AI recognizes the unique sound signature of breaking storefront glass or gunshots, alerting police before perpetrators even enter the camera frame.",
          },
          {
            num: "02",
            title: "Wind Noise Elimination",
            desc: "Proprietary aerodynamic acoustic mesh and DSP algorithms filter out whistling outdoor gusts, preserving speech intelligibility.",
          },
          {
            num: "03",
            title: "Proactive Verbal Warning",
            desc: "Broadcast custom spoken messages like 'You have entered a restricted zone, please leave immediately' when tripwires are crossed.",
          },
          {
            num: "04",
            title: "Natural Two-Way Conversation",
            desc: "Full-duplex technology enables conversation between control center operators and visitors at the gate without awkward walkie-talkie pauses.",
          },
        ],
        products: [
          {
            model: "DS-2CD2143G2-IS",
            name: "4 MP AcuSense Fixed Dome Network Camera with Mic",
            image: "/images/cctv_turret_catalog.jpg",
            tag: "Built-in Mic",
            res: "4MP 2688×1520",
            lens: "2.8mm Wide Angle",
            light: "30m DarkFighter IR",
          },
        ],
      },
    ],
  },

  "storage-bandwidth": {
    id: "storage-bandwidth",
    title: "Storage and Bandwidth",
    category: "Compression & AI",
    badge: "HIGH DENSITY CLOUD NVR",
    icon: HardDrive,
    heroImage: "/images/hero_nvr_servers.jpg",
    hudTitle: "Enterprise NVR Storage",
    hudSubtitle: "Hot-swappable enterprise RAID storage, ePoE long-distance transmission up to 800m, and redundant power supplies.",
    hudAperture: "RAID",
    hudStats: [
      { label: "800M ePoE TRANSMISSION", sub: "OVER STANDARD CAT5/6 CABLE", icon: "viewfinder" },
      { label: "RAID 0/1/5/6/10", sub: "ZERO DATA LOSS ON DRIVE FAULT", icon: "chip" },
      { label: "REDUNDANT POWER SUPPLY", sub: "HOT-SWAPPABLE 24/7 UPTIME", icon: "lens" },
      { label: "ANR RECOVERY", sub: "AUTO NETWORK REPLENISHMENT", icon: "activity" },
    ],
    subItems: [
      {
        id: "epoe-long-distance",
        title: "ePoE 800m Long Distance",
        seriesBadge: "Infrastructure Tech",
        headline: "Storage & Bandwidth — Enterprise High-Availability Storage & ePoE",
        tagline:
          "Overcoming Ethernet's 100-meter physical barrier. Extended Power over Ethernet (ePoE) delivers power and 4K video up to 800 meters over a single cable without intermediate repeaters.",
        heroBanner: "/images/hero_nvr_servers.jpg",
        hudTitle: "ePoE Infrastructure",
        hudSubtitle: "Eliminates fiber converters and localized power drops in large campus facilities.",
        hudAperture: "ePoE",
        hudStats: [
          { label: "800M DISTANCE", sub: "8X STANDARD ETHERNET REACH", icon: "viewfinder" },
          { label: "NO EXTENDERS NEEDED", sub: "DRASTICALLY REDUCES COSTS", icon: "chip" },
          { label: "PLUG & PLAY DEPLOY", sub: "ZERO PROTOCOL CONFIGURATION", icon: "lens" },
          { label: "HOT-SWAP DISK TRAYS", sub: "ZERO DOWNTIME UPGRADES", icon: "activity" },
        ],
        metrics: [
          { val: "800 m", label: "ePoE Range", sub: "Zero Repeater Drops" },
          { val: "RAID 6", label: "Redundancy", sub: "Dual Disk Failure Tolerance" },
          { val: "384 TB", label: "Max Capacity", sub: "High-Density SAS Storage" },
          { val: "ANR", label: "Auto Fallback", sub: "SD Card Sync on Outage" },
        ],
        specs: [
          "ePoE modulation delivering 10Mbps/PoE over 800m or 100Mbps/PoE over 300m",
          "Enterprise hardware RAID controller supporting RAID 0, 1, 5, 6, 10, and Hot Spare",
          "Automatic Network Replenishment (ANR): Edge SD cards record during outages and sync to NVR once reconnected",
          "Dual Gigabit and 10GbE SFP+ optical uplinks for zero packet latency",
        ],
        features: [
          {
            num: "01",
            title: "800-Meter Single Run",
            desc: "Connect perimeter perimeter fences, long driveways, and parking gates directly to the main server room without expensive fiber optic transceivers.",
          },
          {
            num: "02",
            title: "Dual-Drive Fault Tolerance",
            desc: "RAID 6 arrays guarantee that even if two enterprise hard drives fail simultaneously, video recordings remain completely intact with zero data loss.",
          },
          {
            num: "03",
            title: "Auto Network Replenishment (ANR)",
            desc: "If network switches disconnect, cameras automatically cache video onto internal micro-SD cards and upload missed footage to the NVR upon reconnect.",
          },
          {
            num: "04",
            title: "Hot-Swappable Hard Drive Caddies",
            desc: "Replace damaged storage drives on the fly without powering down server racks or interrupting live recording streams.",
          },
        ],
        products: [
          {
            model: "DS-9664NI-I16",
            name: "64-ch 3U 16 HDDs High-End Enterprise Network Video Recorder",
            image: "/images/hero_nvr_servers.jpg",
            tag: "Enterprise NVR",
            res: "Up to 12MP 4K",
            lens: "16x Hot-Swap Bays",
            light: "Dual Redundant PSU",
          },
        ],
      },
    ],
  },

  "ease-engine": {
    id: "ease-engine",
    title: "EaseEngine",
    category: "Compression & AI",
    badge: "UNIFIED AIoT PLATFORM",
    icon: Boxes,
    heroImage: "/images/uhd_city_panorama.jpg",
    hudTitle: "EaseEngine Cloud",
    hudSubtitle: "Unified cloud orchestration for cameras, access control, intercoms, alarm panels, and automated health monitoring.",
    hudAperture: "IoT",
    hudStats: [
      { label: "SINGLE PANE OF GLASS", sub: "UNIFIED VMS & IOT MANAGEMENT", icon: "viewfinder" },
      { label: "ZERO-TOUCH DEPLOYMENT", sub: "SCAN QR CODE TO ONBOARD", icon: "chip" },
      { label: "AUTOMATED HEALTH CHECK", sub: "PREDICTIVE HARD DRIVE ALERTS", icon: "lens" },
      { label: "ENTERPRISE REST API", sub: "SEAMLESS THIRD-PARTY LINK", icon: "activity" },
    ],
    subItems: [
      {
        id: "unified-iot",
        title: "Unified AIoT Cloud Platform",
        seriesBadge: "Cloud & Device Operations",
        headline: "EaseEngine — Cloud-Native Orchestration & Zero-Touch Deployment",
        tagline:
          "Connect, configure, and maintain tens of thousands of distributed surveillance edge devices across multi-branch organizations from a single web browser or mobile console.",
        heroBanner: "/images/uhd_city_panorama.jpg",
        hudTitle: "EaseEngine AIoT",
        hudSubtitle: "Predictive maintenance, bulk firmware dispatch, and enterprise role-based access.",
        hudAperture: "IoT",
        hudStats: [
          { label: "10,000+ SITES", sub: "SCALABLE MULTI-TENANT ARCH", icon: "viewfinder" },
          { label: "99.99% CLOUD SLA", sub: "GEO-REDUNDANT CLUSTER", icon: "chip" },
          { label: "BATCH FIRMWARE PUSH", sub: "ZERO DISRUPTION UPDATES", icon: "lens" },
          { label: "ENCRYPTED TLS 1.3", sub: "END-TO-END DATA SECURITY", icon: "activity" },
        ],
        metrics: [
          { val: "1-Click", label: "Batch Provision", sub: "Scan QR Code on Device" },
          { val: "99.99%", label: "Uptime SLA", sub: "High-Availability Cloud" },
          { val: "Health", label: "Predictive AI", sub: "Disk & Network Monitoring" },
          { val: "REST API", label: "SDK Ready", sub: "ERP & HRMS Integration" },
        ],
        specs: [
          "Microservices cloud architecture with global high-speed CDN streaming",
          "Automated device health monitoring flagging degraded hard drives or camera defocusing",
          "Batch remote configuration: push network settings and passwords to 1,000 devices at once",
          "Granular role-based access control (RBAC) with audit trail logs for strict compliance",
        ],
        features: [
          {
            num: "01",
            title: "Zero-Touch Onboarding",
            desc: "Field technicians scan the QR code on the camera box using the installer app, automatically registering the device to the central client portal in seconds.",
          },
          {
            num: "02",
            title: "Predictive Device Health Monitoring",
            desc: "EaseEngine continuously tracks HDD SMART status, internal temperature, packet loss, and lens occlusion, warning administrators before cameras go offline.",
          },
          {
            num: "03",
            title: "One-Click Bulk Firmware Upgrades",
            desc: "Dispatch scheduled cybersecurity patches and firmware updates to thousands of cameras across nationwide retail branches overnight with zero manual visits.",
          },
          {
            num: "04",
            title: "Comprehensive Open API Integration",
            desc: "Easily integrate video bookmarks and access control logs with payroll software, building management systems (BMS), and municipal dispatch centers.",
          },
        ],
        products: [
          {
            model: "Coloron-EaseCloud-Pro",
            name: "EaseEngine Enterprise Cloud Management License & VMS",
            image: "/images/hero_nvr_servers.jpg",
            tag: "Cloud Platform",
            res: "Unlimited Channels",
            lens: "Cloud Video Storage",
            light: "Enterprise Security",
          },
        ],
      },
    ],
  },
};

// ORDERED 16 KEY TECHNOLOGIES AS PRESENTED IN THE USER'S SPECIFICATION
const SIDEBAR_ITEMS = [
  "light-explorer-expert",
  "light-explorer",
  "solar-powered-4g",
  "multi-sensor",
  "intercom",
  "thermal-cameras",
  "guanlan-encoding",
  "see-clearer",
  "see-smarter",
  "see-vaster",
  "see-more-demanding",
  "radar-technology",
  "security-inspection",
  "audio-technology",
  "storage-bandwidth",
  "ease-engine",
];

// HERO SHOWCASE SLIDES (Matching the User's Reference Screenshot)
const HERO_SLIDES = [
  {
    id: "solar-powered-4g",
    title: "AOV SolarVu™ Cameras",
    subtitle: "View anytime, deploy anywhere",
    buttonText: "Explore More",
    image: "/images/solar_camera_hero.jpg",
    targetKey: "solar-powered-4g",
    video: "/images/speed-measurement/checkpoint-highway-video.mp4",
  },
  {
    id: "light-explorer-expert",
    title: "ColorVu Technology",
    subtitle: "24/7 vivid colorful imaging in total darkness with F1.0 super aperture",
    buttonText: "Explore More",
    image: "/images/core_tech_colorvu.jpg",
    targetKey: "light-explorer-expert",
    video: "/images/speed-measurement/checkpoint-highway-video.mp4",
  },
  {
    id: "guanlan-encoding",
    title: "Guanlan Encoding",
    subtitle: "Cutting storage and bandwidth costs up to 50% with edge AI models",
    buttonText: "Explore More",
    image: "/images/core_tech_guanlan.jpg",
    targetKey: "guanlan-encoding",
    video: "/videos/cctv_hero_bg.webm",
  },
  {
    id: "see-vaster",
    title: "TandemVu Technology",
    subtitle: "180° panoramic overview with simultaneous 40x PTZ auto-tracking",
    buttonText: "Explore More",
    image: "/images/core_tech_tandemvu.jpg",
    targetKey: "see-vaster",
    video: "/images/speed-measurement/video-highway-corridor.mp4",
  },
];

export default function Technologies() {
  const location = useLocation();
  const [searchParams] = useSearchParams();

  const [activeTechKey, setActiveTechKey] = useState("solar-powered-4g");
  const [activeSubId, setActiveSubId] = useState("standalone-solar");

  // Top Hero Slider & Interactive Video Modal States
  const [heroSlideIndex, setHeroSlideIndex] = useState(0);
  const [heroIsPlaying, setHeroIsPlaying] = useState(true);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const heroTouchStartX = useRef(0);
  const heroTouchEndX = useRef(0);
  const heroTimerRef = useRef(null);
  const workspaceRef = useRef(null);

  // Auto-advance hero slides every 5.5s
  useEffect(() => {
    if (!heroIsPlaying) return;
    heroTimerRef.current = setInterval(() => {
      setHeroSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5500);
    return () => clearInterval(heroTimerRef.current);
  }, [heroIsPlaying]);

  const handleHeroTouchStart = (e) => {
    heroTouchStartX.current = e.touches[0].clientX;
  };
  const handleHeroTouchMove = (e) => {
    heroTouchEndX.current = e.touches[0].clientX;
  };
  const handleHeroTouchEnd = () => {
    const diff = heroTouchStartX.current - heroTouchEndX.current;
    if (diff > 45) {
      setHeroSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    } else if (diff < -45) {
      setHeroSlideIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
    }
  };

  const handleExploreSlide = (slide) => {
    handleSelectTech(slide.targetKey);
    if (workspaceRef.current) {
      const topOffset = 184;
      const y = workspaceRef.current.getBoundingClientRect().top + window.pageYOffset - topOffset;
      window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
    }
  };

  const scrollToCategories = () => {
    if (workspaceRef.current) {
      const topOffset = 184;
      const y = workspaceRef.current.getBoundingClientRect().top + window.pageYOffset - topOffset;
      window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
    }
  };

  // Interactive Before/After slider state (0 to 100)
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const sliderContainerRef = useRef(null);

  // URL query param or hash listener
  useEffect(() => {
    const queryTech = searchParams.get("tech");
    const hash = location.hash ? location.hash.replace("#", "") : "";
    const target = queryTech || hash;

    if (target) {
      if (TECHNOLOGIES_DATA[target]) {
        setActiveTechKey(target);
        const firstSub = TECHNOLOGIES_DATA[target].subItems?.[0]?.id || "";
        setActiveSubId(firstSub);
      } else {
        for (const [k, tech] of Object.entries(TECHNOLOGIES_DATA)) {
          const foundSub = tech.subItems?.find(
            (s) => s.id === target || s.title.toLowerCase().includes(target.toLowerCase())
          );
          if (foundSub) {
            setActiveTechKey(k);
            setActiveSubId(foundSub.id);
            break;
          }
        }
      }
    }
  }, [location.hash, searchParams]);

  const activeTech = TECHNOLOGIES_DATA[activeTechKey] || TECHNOLOGIES_DATA["light-explorer-expert"];
  const activeSub =
    activeTech.subItems?.find((s) => s.id === activeSubId) ||
    activeTech.subItems?.[0] ||
    null;

  const handleSelectTech = (key) => {
    setActiveTechKey(key);
    const firstSub = TECHNOLOGIES_DATA[key]?.subItems?.[0]?.id || "";
    setActiveSubId(firstSub);
    setSliderPos(50);
  };

  const handleSelectSub = (subId, e) => {
    e.stopPropagation();
    setActiveSubId(subId);
    setSliderPos(50);
  };

  // Slider dragging handlers
  const handleMove = (clientX) => {
    if (!sliderContainerRef.current) return;
    const rect = sliderContainerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(pct);
  };

  const handleTouchMove = (e) => {
    if (isDragging && e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  useEffect(() => {
    const stopDrag = () => setIsDragging(false);
    window.addEventListener("mouseup", stopDrag);
    window.addEventListener("touchend", stopDrag);
    return () => {
      window.removeEventListener("mouseup", stopDrag);
      window.removeEventListener("touchend", stopDrag);
    };
  }, []);

  return (
    <div className="apple-tech-page">
      {/* 1. CINEMATIC FULL-WIDTH HERO SLIDER (Exact Reference Design Match) */}
      <div
        className="tech-hero-slider-stage"
        onMouseEnter={() => setHeroIsPlaying(false)}
        onMouseLeave={() => setHeroIsPlaying(true)}
        onTouchStart={handleHeroTouchStart}
        onTouchMove={handleHeroTouchMove}
        onTouchEnd={handleHeroTouchEnd}
        style={{
          position: "relative",
          width: "100%",
          height: "clamp(360px, 46vw, 600px)",
          overflow: "hidden",
          backgroundColor: "#000000",
          userSelect: "none",
        }}
      >
        {HERO_SLIDES.map((slide, idx) => {
          const isActive = idx === heroSlideIndex;
          return (
            <div
              key={slide.id}
              style={{
                position: "absolute",
                inset: 0,
                opacity: isActive ? 1 : 0,
                transform: isActive ? "scale(1)" : "scale(1.04)",
                transition: "opacity 0.8s ease, transform 1.2s ease",
                pointerEvents: isActive ? "auto" : "none",
              }}
            >
              {/* Background Image */}
              <img
                src={slide.image}
                alt={slide.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center 45%",
                  display: "block",
                }}
              />

              {/* Gradient Dark Scrim for High Contrast on Typography */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(90deg, rgba(0, 0, 0, 0.65) 0%, rgba(0, 0, 0, 0.32) 48%, rgba(0, 0, 0, 0.05) 75%, transparent 100%)",
                }}
              />

              {/* Slide Text & CTA Overlay on Left (Exact Reference Style) */}
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "clamp(24px, 6vw, 96px)",
                  transform: "translateY(-50%)",
                  maxWidth: "640px",
                  zIndex: 10,
                  color: "#ffffff",
                }}
              >
                <h1
                  style={{
                    fontSize: "clamp(32px, 4.4vw, 54px)",
                    fontWeight: 700,
                    letterSpacing: "-0.03em",
                    lineHeight: 1.12,
                    margin: "0 0 14px 0",
                    textShadow: "0 2px 14px rgba(0,0,0,0.45)",
                  }}
                >
                  {slide.title}
                </h1>
                <p
                  style={{
                    fontSize: "clamp(15px, 1.8vw, 20px)",
                    fontWeight: 400,
                    color: "rgba(255, 255, 255, 0.92)",
                    margin: "0 0 28px 0",
                    lineHeight: 1.35,
                    textShadow: "0 2px 8px rgba(0,0,0,0.5)",
                  }}
                >
                  {slide.subtitle}
                </p>

                <button
                  type="button"
                  onClick={() => handleExploreSlide(slide)}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "10px 32px",
                    borderRadius: "9999px",
                    backgroundColor: "rgba(0, 0, 0, 0.2)",
                    border: "1.5px solid #ffffff",
                    color: "#ffffff",
                    fontSize: "14px",
                    fontWeight: 500,
                    cursor: "pointer",
                    backdropFilter: "blur(8px)",
                    WebkitBackdropFilter: "blur(8px)",
                    transition: "all 0.25s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#ffffff";
                    e.currentTarget.style.color = "#000000";
                    e.currentTarget.style.borderColor = "#ffffff";
                    e.currentTarget.style.boxShadow = "0 0 20px rgba(255, 255, 255, 0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
                    e.currentTarget.style.color = "#ffffff";
                    e.currentTarget.style.borderColor = "#ffffff";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {slide.buttonText}
                </button>
              </div>
            </div>
          );
        })}

        {/* Center Bottom: Slider Horizontal Bar Indicators (Exact Reference Match) */}
        <div
          style={{
            position: "absolute",
            bottom: "22px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            zIndex: 20,
          }}
        >
          {HERO_SLIDES.map((_, dotIdx) => (
            <button
              key={dotIdx}
              type="button"
              onClick={() => setHeroSlideIndex(dotIdx)}
              aria-label={`Slide ${dotIdx + 1}`}
              style={{
                width: dotIdx === heroSlideIndex ? "38px" : "22px",
                height: "3px",
                borderRadius: "2px",
                backgroundColor:
                  dotIdx === heroSlideIndex ? "#ffffff" : "rgba(255, 255, 255, 0.45)",
                border: "none",
                padding: 0,
                cursor: "pointer",
                transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
                boxShadow: dotIdx === heroSlideIndex ? "0 0 8px rgba(255,255,255,0.7)" : "none",
              }}
            />
          ))}
        </div>

        {/* Bottom Right Floating Contact Widget (Exact Match to Screenshot) */}
        <div
          style={{
            position: "absolute",
            bottom: "22px",
            right: "clamp(16px, 3.5vw, 40px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: "8px",
            zIndex: 20,
          }}
        >
          <Link
            to="/contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "7px 16px",
              borderRadius: "9999px",
              backgroundColor: "rgba(255, 255, 255, 0.95)",
              color: "#1d1d1f",
              fontSize: "12px",
              fontWeight: 600,
              textDecoration: "none",
              boxShadow: "0 6px 18px rgba(0,0,0,0.22)",
              backdropFilter: "blur(10px)",
              transition: "transform 0.2s ease, background-color 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#ffffff";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.95)";
              e.currentTarget.style.transform = "none";
            }}
          >
            <Headphones size={14} color="#e60012" />
            <span>Contact Us</span>
          </Link>

          <Link
            to="/contact?inquiry=spec-sheet"
            title="Download Spec Sheets & Documentation"
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "8px",
              backgroundColor: "#e60012",
              color: "#ffffff",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 4px 12px rgba(230,0,18,0.4)",
              transition: "transform 0.2s ease, background-color 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.08)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <FileText size={16} />
          </Link>
        </div>
      </div>

      {/* 2. STICKY SUB-NAVIGATION & BREADCRUMB BAR (Exact Match to Reference Screenshot) */}
      <div
        className="tech-sticky-subnav-bar"
        style={{
          position: "sticky",
          top: "64px",
          zIndex: 40,
          backgroundColor: "#ffffff",
          borderBottom: "1px solid rgba(0, 0, 0, 0.08)",
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.03)",
        }}
      >
        <div
          style={{
            maxWidth: "1440px",
            margin: "0 auto",
            padding: "12px clamp(16px, 4vw, 32px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          {/* Left: Section Title & Navigation Sub-links */}
          <div>
            <div
              style={{
                fontSize: "16px",
                fontWeight: 700,
                color: "#1d1d1f",
                letterSpacing: "-0.01em",
              }}
            >
              Coloron Security Cameras
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "18px",
                marginTop: "4px",
                fontSize: "12px",
                color: "#6b7280",
                flexWrap: "wrap",
              }}
            >
              <button
                type="button"
                onClick={scrollToCategories}
                style={{
                  background: "none",
                  border: "none",
                  padding: 0,
                  fontSize: "12px",
                  color: "#4b5563",
                  cursor: "pointer",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#0071e3")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#4b5563")}
              >
                Product categories
              </button>

              <button
                type="button"
                onClick={() => setVideoModalOpen(true)}
                style={{
                  background: "none",
                  border: "none",
                  padding: 0,
                  fontSize: "12px",
                  color: "#4b5563",
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#0071e3")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#4b5563")}
              >
                <Play size={11} fill="currentColor" />
                <span>Watch video</span>
              </button>

              <Link
                to="/contact"
                style={{
                  color: "#4b5563",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#0071e3")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#4b5563")}
              >
                Contact sales
              </Link>

              <Link
                to="/products"
                style={{
                  color: "#4b5563",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#0071e3")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#4b5563")}
              >
                Related links
              </Link>
            </div>
          </div>

          {/* Right: Breadcrumb Path with Home Icon */}
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "12px",
              color: "#9ca3af",
            }}
          >
            <Link
              to="/"
              style={{
                color: "#6b7280",
                display: "flex",
                alignItems: "center",
                transition: "color 0.2s",
              }}
              aria-label="Home"
            >
              <Home size={14} />
            </Link>
            <ChevronRight size={12} color="#9ca3af" />
            <Link
              to="/products"
              style={{
                color: "#6b7280",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
            >
              Products
            </Link>
            <ChevronRight size={12} color="#9ca3af" />
            <span style={{ color: "#111827", fontWeight: 600 }}>
              {activeTech.title}
            </span>
          </nav>
        </div>
      </div>

      {/* 3. MAIN WORKSPACE (SIDEBAR + CONTENT) */}
      <div
        ref={workspaceRef}
        id="tech-categories-workspace"
        className="apple-tech-container apple-tech-layout"
        style={{
          marginTop: "clamp(48px, 6vw, 84px)",
          paddingTop: "clamp(12px, 2vw, 24px)",
          scrollMarginTop: "192px",
        }}
      >
        {/* LEFT SIDEBAR: MODERN KEY TECHNOLOGIES MENU */}
        <aside className="apple-tech-sidebar">
          {/* Top Header Button Pill */}
          <div className="sidebar-header-btn">
            Key Technologies
          </div>

          {/* Technology Menu Items List */}
          <div className="sidebar-nav-list">
            {SIDEBAR_ITEMS.map((key) => {
              const tech = TECHNOLOGIES_DATA[key];
              if (!tech) return null;
              const isActive = activeTechKey === key;
              const hasSub = tech.subItems && tech.subItems.length > 0;

              return (
                <div key={key} className="sidebar-group">
                  {/* Parent Row */}
                  <div
                    className={`sidebar-nav-item ${isActive ? "active" : ""}`}
                    onClick={() => handleSelectTech(key)}
                  >
                    <span className="nav-item-text">{tech.title}</span>
                  </div>

                  {/* Sub-Series Accordion List */}
                  {isActive && hasSub && (
                    <div className="sidebar-sub-list">
                      {tech.subItems.map((sub) => {
                        const isSubActive = activeSubId === sub.id;
                        return (
                          <div
                            key={sub.id}
                            className={`sidebar-sub-item ${isSubActive ? "active" : ""}`}
                            onClick={(e) => handleSelectSub(sub.id, e)}
                          >
                            {sub.title}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </aside>

        {/* RIGHT CONTENT: ULTRA-PREMIUM APPLE/COLORON SHOWCASE */}
        <main className="apple-tech-main">
          {activeSub ? (
            <div className="apple-showcase-wrap">
              {/* Top Headline Section */}
              <div className="showcase-top-header">
                <div className="badge-pill">
                  {activeTech.badge || "KEY TECHNOLOGY"}
                </div>
                <h1 className="showcase-headline">{activeSub.headline}</h1>
                <p className="showcase-tagline">{activeSub.tagline}</p>
              </div>

              {/* HERO SHOWCASE BANNER WITH HIGH-TECH HUD GRAPHICS OVERLAY */}
              <div className="tech-hero-banner-card">
                <img
                  src={activeSub.heroBanner || activeTech.heroImage}
                  alt={activeSub.title}
                  className="hero-banner-img"
                />
                <div className="hero-banner-scrim" />

                {/* Overlaid HUD Tech Graphics */}
                <div className="hero-hud-content">
                  {/* Left HUD Panel */}
                  <div className="hud-left-panel">
                    <div className="hud-kicker">COLORON CORE TECHNOLOGY</div>
                    <h2 className="hud-title">{activeSub.hudTitle || activeSub.title}</h2>
                    <p className="hud-description">
                      {activeSub.hudSubtitle || "Engineered for continuous 24/7 reliability, state-of-the-art optical engineering, and precision AI intelligence."}
                    </p>
                  </div>

                  {/* Right HUD Panel: Surveillance Tech Specs */}
                  <div className="hud-right-panel">
                    {/* HUD Aperture Graphic */}
                    {activeSub.hudAperture && (
                      <div className="hud-aperture-badge">
                        <div className="aperture-circle-graphic">
                          <Disc size={20} className="aperture-spin-icon" />
                        </div>
                        <div className="aperture-label-wrap">
                          <span className="aperture-val">{activeSub.hudAperture}</span>
                          <span className="aperture-txt">SUPER APERTURE</span>
                        </div>
                      </div>
                    )}

                    {/* HUD Feature Telemetry Items */}
                    <div className="hud-stats-stack">
                      {(activeSub.hudStats || activeTech.hudStats || []).map((s, idx) => (
                        <div key={idx} className="hud-stat-chip">
                          <div className="hud-chip-dot" />
                          <div className="hud-chip-texts">
                            <span className="hud-chip-title">{s.label}</span>
                            <span className="hud-chip-sub">{s.sub}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* KEY ARCHITECTURAL SPECIFICATIONS CARD */}
              {activeSub.specs && activeSub.specs.length > 0 && (
                <div className="specs-card-box">
                  <h3 className="specs-box-title">Key Architectural Specifications</h3>
                  <div className="specs-box-grid">
                    {activeSub.specs.map((spec, sIdx) => (
                      <div key={sIdx} className="spec-check-row">
                        <div className="spec-blue-check">
                          <Check size={12} strokeWidth={3.5} />
                        </div>
                        <span className="spec-row-text">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* CORE TECHNOLOGY FEATURES (01-04 NUMBERED BENTO CARDS) */}
              {activeSub.features && activeSub.features.length > 0 && (
                <div className="core-features-section">
                  <h3 className="section-title-bold">Core Technology Features</h3>
                  <div className="core-features-grid">
                    {activeSub.features.map((feat, fIdx) => (
                      <div key={fIdx} className="core-feature-card">
                        <div className="feature-number">{feat.num || `0${fIdx + 1}`}</div>
                        <h4 className="feature-title">{feat.title}</h4>
                        <p className="feature-desc">{feat.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 4 PROFESSIONAL BENCHMARK STAT CARDS */}
              {activeSub.metrics && activeSub.metrics.length > 0 && (
                <div className="pro-metrics-container">
                  <div className="pro-metrics-grid">
                    {activeSub.metrics.map((m, idx) => {
                      const icons = [Sun, Eye, Cpu, Maximize2];
                      const tags = ["OPTICAL BENCHMARK", "MIN. THRESHOLD", "AI ACCURACY", "RESOLUTION"];
                      const IconComponent = icons[idx % icons.length];
                      const tagText = tags[idx % tags.length];

                      return (
                        <div key={idx} className="pro-metric-card">
                          {/* Top ambient accent glow line */}
                          <div className="pro-metric-glow-line" />

                          {/* Card Header with Icon Badge & Technical Category Tag */}
                          <div className="pro-metric-header">
                            <div className="pro-metric-icon-box">
                              <IconComponent size={15} strokeWidth={2.2} />
                            </div>
                            <span className="pro-metric-tag">{tagText}</span>
                          </div>

                          {/* Large Hero Metric Value */}
                          <div className="pro-metric-val-wrap">
                            <span className="pro-metric-val">{m.val}</span>
                            {m.unit && <span className="pro-metric-unit">{m.unit}</span>}
                          </div>

                          {/* Metric Label & Benchmark Sub-spec Tag */}
                          <div className="pro-metric-body">
                            <h4 className="pro-metric-label">{m.label}</h4>
                            <div className="pro-metric-sub-badge">
                              <span className="pro-sub-arrow">▲</span>
                              <span className="pro-sub-text">{m.sub}</span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* INTERACTIVE BEFORE/AFTER NIGHT VISION SLIDER (ANIMATIC EXPERIENCE) */}
              {activeSub.beforeAfter && (
                <div className="apple-before-after-section">
                  <div className="before-after-header">
                    <h3 className="section-title-sm">{activeSub.beforeAfter.title}</h3>
                    <p className="section-desc-sm">{activeSub.beforeAfter.desc}</p>
                  </div>

                  <div
                    ref={sliderContainerRef}
                    className="slider-viewport"
                    onMouseDown={() => setIsDragging(true)}
                    onTouchStart={() => setIsDragging(true)}
                    onMouseMove={handleMouseMove}
                    onTouchMove={handleTouchMove}
                  >
                    {/* Before Image (Left Layer - B&W IR) */}
                    <img
                      src={activeSub.beforeAfter.beforeImg}
                      alt="Conventional B&W IR"
                      className="slider-img-layer before-img"
                    />

                    {/* After Image (Right Layer - ColorSense full color) */}
                    <div
                      className="slider-img-clipped"
                      style={{ width: `${sliderPos}%` }}
                    >
                      <img
                        src={activeSub.beforeAfter.afterImg}
                        alt="Coloron C4 ColorSense"
                        className="slider-img-layer after-img"
                      />
                    </div>

                    {/* Dividing Handle */}
                    <div
                      className="slider-divider-line"
                      style={{ left: `${sliderPos}%` }}
                    >
                      <div className="slider-handle-knob">
                        <SlidersHorizontal size={16} />
                      </div>
                    </div>

                    {/* Floating Badges */}
                    <div className="slider-pill-badge left">
                      {activeSub.beforeAfter.afterLabel}
                    </div>
                    <div className="slider-pill-badge right">
                      {activeSub.beforeAfter.beforeLabel}
                    </div>
                  </div>
                </div>
              )}

              {/* RECOMMENDED PRODUCT LINEUP */}
              {activeSub.products && activeSub.products.length > 0 && (
                <div className="apple-products-section">
                  <div className="prod-section-header">
                    <div>
                      <h3 className="section-title-bold">Recommended Product Lineup</h3>
                      <p className="prod-section-subtitle">
                        Hardware models integrated with Coloron {activeSub.title} technology.
                      </p>
                    </div>
                    <Link
                      to="/products/category/camera-products"
                      className="apple-link-all"
                    >
                      Browse full catalog <ArrowRight size={14} />
                    </Link>
                  </div>

                  <div className="apple-prod-grid">
                    {activeSub.products.map((p) => (
                      <div key={p.model} className="apple-card-product">
                        <div className="prod-badge-row">
                          <span className="badge-prod-tag">{p.tag}</span>
                        </div>
                        <div className="prod-img-box">
                          <img src={p.image} alt={p.model} className="prod-img" />
                        </div>
                        <div className="prod-model-code">{p.model}</div>
                        <p className="prod-full-name">{p.name}</p>

                        <div className="prod-specs-chips">
                          {p.res && <span className="spec-chip">{p.res}</span>}
                          {p.lens && <span className="spec-chip">{p.lens}</span>}
                        </div>

                        <div className="prod-footer-row">
                          <Link
                            to={`/product/${p.model.toLowerCase()}`}
                            className="btn-apple-view"
                          >
                            View Specs <ChevronRight size={13} />
                          </Link>
                          <Link
                            to={`/compare?models=${p.model}`}
                            className="btn-apple-compare"
                          >
                            Compare
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* LUXURY BOTTOM CALLOUT BANNER */}
              <div className="apple-luxury-cta">
                <div className="cta-content">
                  <h3 className="cta-heading">
                    Engineered for mission-critical visual intelligence.
                  </h3>
                  <p className="cta-sub">
                    Consult with Coloron optical specialists to evaluate focal lengths, sensor lux ratings, and thermal ranges for your facilities.
                  </p>
                </div>
                <div className="cta-buttons">
                  <Link to="/contact" className="btn-cta-white">
                    Request Engineering Whitepaper
                  </Link>
                  <Link to="/quote-calculator" className="btn-cta-transparent">
                    Storage Calculator
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <div className="apple-empty-state">
              <h3>Select a technology from Key Technologies to explore.</h3>
            </div>
          )}
        </main>
      </div>

      {/* STYLES: ULTRA-PREMIUM COLORON / APPLE AESTHETICS */}
      <style>{`
        /* PAGE BASE */
        .apple-tech-page {
          min-height: 100vh;
          background-color: #ffffff;
          color: #1d1d1f;
          padding-top: 64px;
          padding-bottom: 100px;
          font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          -webkit-font-smoothing: antialiased;
        }

        .apple-tech-container {
          max-width: 1440px;
          margin: 0 auto;
          padding: 0 36px;
        }

        /* 1. TOP BREADCRUMB */
        .apple-tech-bc-bar {
          background-color: #ffffff;
          padding: 16px 0 14px;
          border-bottom: 1px solid rgba(0, 0, 0, 0.06);
          margin-bottom: 36px;
        }
        .apple-tech-bc {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
        }
        .bc-item {
          color: #6e6e73;
          text-decoration: none;
          transition: color 0.15s;
        }
        .bc-item:hover {
          color: #0071e3;
        }
        .bc-item.active {
          color: #1d1d1f;
          font-weight: 500;
        }
        .bc-item.highlight {
          color: #0071e3;
          font-weight: 600;
        }
        .bc-sep {
          color: #b0b0b5;
        }

        /* 2. TWO-COLUMN LAYOUT */
        .apple-tech-layout {
          display: grid;
          grid-template-columns: 270px 1fr;
          gap: 48px;
          align-items: start;
          margin-top: clamp(48px, 6vw, 84px);
          padding-top: clamp(12px, 2vw, 24px);
          margin-bottom: 60px;
        }

        @media (max-width: 1024px) {
          .apple-tech-layout {
            grid-template-columns: 1fr;
            gap: 32px;
            margin-top: 36px;
            padding-top: 16px;
          }
        }

        /* LEFT SIDEBAR */
        .apple-tech-sidebar {
          width: 100%;
          position: sticky;
          top: 184px;
        }

        /* Header Button: Pill style */
        .sidebar-header-btn {
          background-color: #0071e3;
          color: #ffffff;
          font-size: 14.5px;
          font-weight: 700;
          letter-spacing: 0.2px;
          padding: 12px 20px;
          border-radius: 8px;
          box-shadow: 0 4px 14px rgba(0, 113, 227, 0.25);
          margin-bottom: 18px;
          user-select: none;
        }

        /* Nav List */
        .sidebar-nav-list {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .sidebar-group {
          display: flex;
          flex-direction: column;
        }

        .sidebar-nav-item {
          display: flex;
          align-items: center;
          padding: 10px 14px;
          border-left: 3px solid transparent;
          color: #333336;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          user-select: none;
          transition: all 0.18s ease;
          border-radius: 0 8px 8px 0;
        }
        .sidebar-nav-item:hover {
          background-color: #f7f9fc;
          color: #0071e3;
        }
        .sidebar-nav-item.active {
          border-left-color: #0071e3;
          font-weight: 700;
          color: #111827;
          background-color: #f4f8fd;
        }

        .nav-item-text {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        /* Sub-Series Accordion */
        .sidebar-sub-list {
          padding: 6px 0 10px 22px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .sidebar-sub-item {
          font-size: 13.5px;
          color: #6e6e73;
          padding: 4px 8px;
          cursor: pointer;
          user-select: none;
          border-radius: 6px;
          transition: all 0.15s ease;
        }
        .sidebar-sub-item:hover {
          color: #0071e3;
          background-color: rgba(0, 113, 227, 0.06);
        }
        .sidebar-sub-item.active {
          color: #0071e3;
          font-weight: 700;
          background-color: #e8f2fc;
        }

        /* RIGHT SHOWCASE MAIN */
        .apple-tech-main {
          min-width: 0;
        }

        .apple-showcase-wrap {
          display: flex;
          flex-direction: column;
        }

        /* Top Header */
        .showcase-top-header {
          margin-bottom: 24px;
        }

        .badge-pill {
          display: inline-block;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.6px;
          color: #0071e3;
          background-color: #e8f2fc;
          padding: 4px 12px;
          border-radius: 14px;
          margin-bottom: 12px;
        }

        .showcase-headline {
          font-size: clamp(24px, 2.8vw, 34px);
          font-weight: 700;
          color: #111827;
          line-height: 1.25;
          letter-spacing: -0.6px;
          margin: 0 0 12px 0;
        }

        .showcase-tagline {
          font-size: 15px;
          color: #6b7280;
          line-height: 1.6;
          margin: 0;
          max-width: 900px;
        }

        /* HERO SHOWCASE BANNER WITH HUD OVERLAY */
        .tech-hero-banner-card {
          position: relative;
          width: 100%;
          min-height: 420px;
          border-radius: 16px;
          overflow: hidden;
          background-color: #000000;
          margin-bottom: 32px;
          box-shadow: 0 12px 36px rgba(0, 0, 0, 0.12);
        }

        .hero-banner-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .hero-banner-scrim {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to right,
            rgba(0, 0, 0, 0.88) 0%,
            rgba(0, 0, 0, 0.62) 50%,
            rgba(0, 0, 0, 0.35) 100%
          );
        }

        .hero-hud-content {
          position: relative;
          z-index: 2;
          padding: 44px 44px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          min-height: 420px;
          gap: 32px;
          color: #ffffff;
        }

        @media (max-width: 900px) {
          .hero-hud-content {
            flex-direction: column;
            align-items: flex-start;
            padding: 30px 24px;
          }
        }

        .hud-left-panel {
          max-width: 480px;
        }

        .hud-kicker {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.2px;
          color: #00c7ff;
          margin-bottom: 8px;
          text-transform: uppercase;
        }

        .hud-title {
          font-size: clamp(32px, 4vw, 44px);
          font-weight: 800;
          letter-spacing: -1px;
          color: #ffffff;
          margin: 0 0 14px 0;
          line-height: 1.1;
        }

        .hud-description {
          font-size: 14.5px;
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.55;
          margin: 0;
        }

        /* Right HUD Panel */
        .hud-right-panel {
          display: flex;
          flex-direction: column;
          gap: 16px;
          align-items: flex-end;
        }
        @media (max-width: 900px) {
          .hud-right-panel {
            align-items: flex-start;
            width: 100%;
          }
        }

        .hud-aperture-badge {
          display: flex;
          align-items: center;
          gap: 12px;
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(0, 199, 255, 0.4);
          padding: 10px 18px;
          border-radius: 12px;
        }

        .aperture-circle-graphic {
          color: #00c7ff;
          display: flex;
          align-items: center;
        }
        .aperture-spin-icon {
          animation: apertureSpin 18s linear infinite;
        }
        @keyframes apertureSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .aperture-label-wrap {
          display: flex;
          flex-direction: column;
        }
        .aperture-val {
          font-size: 20px;
          font-weight: 800;
          color: #ffffff;
          line-height: 1;
        }
        .aperture-txt {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.8px;
          color: #00c7ff;
        }

        .hud-stats-stack {
          display: flex;
          flex-direction: column;
          gap: 8px;
          min-width: 260px;
        }

        .hud-stat-chip {
          display: flex;
          align-items: center;
          gap: 12px;
          background: rgba(10, 20, 35, 0.65);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.12);
          padding: 8px 14px;
          border-radius: 8px;
        }

        .hud-chip-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #00c7ff;
          box-shadow: 0 0 8px #00c7ff;
          flex-shrink: 0;
        }

        .hud-chip-texts {
          display: flex;
          flex-direction: column;
        }
        .hud-chip-title {
          font-size: 12px;
          font-weight: 700;
          color: #ffffff;
          letter-spacing: 0.3px;
        }
        .hud-chip-sub {
          font-size: 10px;
          color: rgba(255, 255, 255, 0.65);
          font-weight: 500;
        }

        /* KEY ARCHITECTURAL SPECIFICATIONS CARD */
        .specs-card-box {
          background-color: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 14px;
          padding: 24px 28px;
          margin-bottom: 36px;
        }

        .specs-box-title {
          font-size: 16px;
          font-weight: 700;
          color: #111827;
          margin: 0 0 18px 0;
        }

        .specs-box-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px 28px;
        }
        @media (max-width: 720px) {
          .specs-box-grid {
            grid-template-columns: 1fr;
          }
        }

        .spec-check-row {
          display: flex;
          align-items: flex-start;
          gap: 10px;
        }

        .spec-blue-check {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background-color: #0071e3;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .spec-row-text {
          font-size: 13.5px;
          color: #374151;
          line-height: 1.45;
          font-weight: 500;
        }

        /* CORE TECHNOLOGY FEATURES (01-04 NUMBERED CARDS) */
        .core-features-section {
          margin-bottom: 36px;
        }

        .section-title-bold {
          font-size: 20px;
          font-weight: 700;
          color: #111827;
          margin: 0 0 20px 0;
          letter-spacing: -0.4px;
        }

        .core-features-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }
        @media (max-width: 760px) {
          .core-features-grid {
            grid-template-columns: 1fr;
          }
        }

        .core-feature-card {
          background-color: #ffffff;
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          padding: 24px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.02);
          transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
        }
        .core-feature-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0, 113, 227, 0.06);
          border-color: rgba(0, 113, 227, 0.35);
        }

        .feature-number {
          font-size: 18px;
          font-weight: 800;
          color: #0071e3;
          margin-bottom: 8px;
        }

        .feature-title {
          font-size: 16px;
          font-weight: 700;
          color: #111827;
          margin: 0 0 8px 0;
        }

        .feature-desc {
          font-size: 13px;
          color: #6b7280;
          line-height: 1.6;
          margin: 0;
        }

        /* PROFESSIONAL BENCHMARK METRIC CARDS */
        .pro-metrics-container {
          margin-bottom: 36px;
        }

        .pro-metrics-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }
        @media (max-width: 1100px) {
          .pro-metrics-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 600px) {
          .pro-metrics-grid {
            grid-template-columns: 1fr;
          }
        }

        .pro-metric-card {
          position: relative;
          background: linear-gradient(145deg, #ffffff 0%, #f8faff 100%);
          border: 1px solid rgba(0, 113, 227, 0.14);
          border-radius: 16px;
          padding: 22px 20px 20px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03), inset 0 1px 0 rgba(255, 255, 255, 0.9);
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }
        .pro-metric-card:hover {
          transform: translateY(-4px);
          border-color: rgba(0, 113, 227, 0.4);
          box-shadow: 0 14px 34px rgba(0, 113, 227, 0.12), inset 0 1px 0 rgba(255, 255, 255, 1);
        }

        /* Top accent line */
        .pro-metric-glow-line {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2.5px;
          background: linear-gradient(90deg, #0071e3, #00c7ff, transparent);
          opacity: 0.85;
          transition: opacity 0.25s ease;
        }
        .pro-metric-card:hover .pro-metric-glow-line {
          opacity: 1;
          height: 3px;
        }

        /* Card Header */
        .pro-metric-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 14px;
        }

        .pro-metric-icon-box {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          background: rgba(0, 113, 227, 0.08);
          color: #0071e3;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(0, 113, 227, 0.15);
          transition: all 0.2s ease;
        }
        .pro-metric-card:hover .pro-metric-icon-box {
          background: #0071e3;
          color: #ffffff;
          transform: scale(1.05);
          box-shadow: 0 4px 10px rgba(0, 113, 227, 0.3);
        }

        .pro-metric-tag {
          font-size: 9.5px;
          font-weight: 700;
          letter-spacing: 0.7px;
          color: #0071e3;
          text-transform: uppercase;
          background: #eef5fc;
          padding: 3px 8px;
          border-radius: 6px;
          border: 1px solid rgba(0, 113, 227, 0.12);
        }

        /* Value */
        .pro-metric-val-wrap {
          display: flex;
          align-items: baseline;
          gap: 5px;
          margin-bottom: 8px;
        }
        .pro-metric-val {
          font-size: 34px;
          font-weight: 800;
          letter-spacing: -1.2px;
          line-height: 1;
          background: linear-gradient(135deg, #005bb5 0%, #0071e3 50%, #00a3ff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .pro-metric-unit {
          font-size: 14px;
          font-weight: 700;
          color: #0071e3;
          letter-spacing: -0.2px;
        }

        /* Label and Subtext */
        .pro-metric-body {
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-top: auto;
        }
        .pro-metric-label {
          font-size: 14.5px;
          font-weight: 700;
          color: #0f172a;
          margin: 0;
          letter-spacing: -0.2px;
        }

        .pro-metric-sub-badge {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          padding: 4px 9px;
          border-radius: 6px;
          font-size: 11.5px;
          color: #475569;
          font-weight: 500;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.02);
          width: fit-content;
        }
        .pro-sub-arrow {
          font-size: 9px;
          color: #10b981;
          font-weight: 700;
        }
        .pro-sub-text {
          line-height: 1.2;
        }

        /* INTERACTIVE BEFORE/AFTER NIGHT VISION SLIDER */
        .apple-before-after-section {
          background: #ffffff;
          border: 1px solid #e5e7eb;
          border-radius: 18px;
          padding: 24px;
          margin-bottom: 36px;
          box-shadow: 0 4px 18px rgba(0, 0, 0, 0.03);
        }

        .before-after-header {
          margin-bottom: 16px;
        }
        .section-title-sm {
          font-size: 17px;
          font-weight: 700;
          color: #111827;
          margin: 0 0 6px 0;
        }
        .section-desc-sm {
          font-size: 13.5px;
          color: #6e6e73;
          margin: 0;
          line-height: 1.5;
        }

        .slider-viewport {
          position: relative;
          width: 100%;
          height: 380px;
          border-radius: 12px;
          overflow: hidden;
          background-color: #000;
          cursor: ew-resize;
          user-select: none;
        }

        .slider-img-layer {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          pointer-events: none;
        }
        .before-img {
          filter: grayscale(100%) contrast(1.1) brightness(0.65);
        }

        .slider-img-clipped {
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          overflow: hidden;
          pointer-events: none;
        }
        .after-img {
          width: 100%;
          height: 100%;
          min-width: 100%;
        }

        .slider-divider-line {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 2px;
          background: #ffffff;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
          pointer-events: none;
          transform: translateX(-50%);
        }

        .slider-handle-knob {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: #ffffff;
          color: #0071e3;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.35);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .slider-pill-badge {
          position: absolute;
          bottom: 16px;
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 11.5px;
          font-weight: 700;
          letter-spacing: 0.3px;
          pointer-events: none;
          backdrop-filter: blur(12px);
        }
        .slider-pill-badge.left {
          left: 16px;
          background: rgba(0, 113, 227, 0.9);
          color: #ffffff;
        }
        .slider-pill-badge.right {
          right: 16px;
          background: rgba(0, 0, 0, 0.65);
          color: #ffffff;
        }

        /* RECOMMENDED PRODUCT LINEUP */
        .apple-products-section {
          margin-bottom: 36px;
        }

        .prod-section-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 20px;
          flex-wrap: wrap;
          gap: 12px;
        }
        .prod-section-subtitle {
          font-size: 13.5px;
          color: #6b7280;
          margin: 0;
        }

        .apple-link-all {
          font-size: 13px;
          font-weight: 600;
          color: #0071e3;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 4px;
        }
        .apple-link-all:hover {
          text-decoration: underline;
        }

        .apple-prod-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        @media (max-width: 900px) {
          .apple-prod-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 600px) {
          .apple-prod-grid {
            grid-template-columns: 1fr;
          }
        }

        .apple-card-product {
          background: #ffffff;
          border: 1px solid #e5e7eb;
          border-radius: 14px;
          padding: 20px;
          display: flex;
          flex-direction: column;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.02);
          transition: border-color 0.2s, box-shadow 0.2s, transform 0.2s;
        }
        .apple-card-product:hover {
          border-color: #0071e3;
          transform: translateY(-2px);
          box-shadow: 0 10px 28px rgba(0, 113, 227, 0.08);
        }

        .prod-badge-row {
          margin-bottom: 8px;
        }
        .badge-prod-tag {
          font-size: 11px;
          font-weight: 700;
          color: #d32f2f;
          text-transform: uppercase;
        }

        .prod-img-box {
          height: 140px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 14px;
        }
        .prod-img {
          max-height: 125px;
          max-width: 100%;
          object-fit: contain;
          transition: transform 0.2s ease;
        }
        .apple-card-product:hover .prod-img {
          transform: scale(1.04);
        }

        .prod-model-code {
          font-size: 14px;
          font-weight: 700;
          color: #111827;
          margin-bottom: 6px;
        }
        .prod-full-name {
          font-size: 12px;
          color: #6b7280;
          line-height: 1.45;
          margin: 0 0 14px 0;
          flex-grow: 1;
        }

        .prod-specs-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 16px;
        }
        .spec-chip {
          background: #f1f5f9;
          color: #475569;
          font-size: 11px;
          font-weight: 600;
          padding: 3px 8px;
          border-radius: 6px;
        }

        .prod-footer-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid #f1f5f9;
          padding-top: 12px;
          margin-top: auto;
        }

        .btn-apple-view {
          font-size: 12px;
          font-weight: 600;
          color: #0071e3;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
        }
        .btn-apple-view:hover {
          text-decoration: underline;
        }

        .btn-apple-compare {
          font-size: 12px;
          color: #475569;
          text-decoration: none;
          border: 1px solid #cbd5e1;
          padding: 4px 12px;
          border-radius: 14px;
          transition: all 0.15s;
        }
        .btn-apple-compare:hover {
          border-color: #0071e3;
          color: #0071e3;
        }

        /* LUXURY CTA BANNER */
        .apple-luxury-cta {
          background: linear-gradient(135deg, #1b1b1e 0%, #0d0d0f 100%);
          border-radius: 18px;
          padding: 36px 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 24px;
          color: #ffffff;
        }

        .cta-heading {
          font-size: 21px;
          font-weight: 700;
          margin: 0 0 8px 0;
          letter-spacing: -0.4px;
        }
        .cta-sub {
          font-size: 13.5px;
          color: rgba(255, 255, 255, 0.7);
          margin: 0;
          max-width: 580px;
          line-height: 1.5;
        }

        .cta-buttons {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-wrap: wrap;
        }

        .btn-cta-white {
          background: #ffffff;
          color: #111827;
          font-size: 13px;
          font-weight: 600;
          padding: 10px 20px;
          border-radius: 20px;
          text-decoration: none;
          transition: all 0.18s;
        }
        .btn-cta-white:hover {
          background: #f1f5f9;
          transform: translateY(-1px);
        }

        .btn-cta-transparent {
          background: transparent;
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.35);
          font-size: 13px;
          font-weight: 500;
          padding: 9px 18px;
          border-radius: 20px;
          text-decoration: none;
          transition: all 0.18s;
        }
        .btn-cta-transparent:hover {
          border-color: #ffffff;
        }

        .apple-empty-state {
          padding: 80px 20px;
          text-align: center;
          color: #86868b;
        }
      `}</style>

      {/* Interactive Video Demonstration Modal */}
      {videoModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setVideoModalOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            zIndex: 99999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "880px",
              backgroundColor: "#000000",
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 25px 60px rgba(0,0,0,0.7)",
              border: "1px solid rgba(255,255,255,0.12)",
            }}
          >
            <div
              style={{
                padding: "16px 20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottom: "1px solid rgba(255,255,255,0.1)",
                color: "#ffffff",
              }}
            >
              <div style={{ fontWeight: 600, fontSize: "15px" }}>
                Coloron Optical Labs • AI Video Demonstration
              </div>
              <button
                type="button"
                onClick={() => setVideoModalOpen(false)}
                style={{
                  background: "rgba(255,255,255,0.1)",
                  border: "none",
                  borderRadius: "50%",
                  width: "32px",
                  height: "32px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#ffffff",
                  cursor: "pointer",
                }}
              >
                <X size={18} />
              </button>
            </div>
            <div style={{ aspectRatio: "16 / 9", backgroundColor: "#000000" }}>
              <video
                src="/images/speed-measurement/checkpoint-highway-video.mp4"
                controls
                autoPlay
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
