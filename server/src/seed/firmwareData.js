export const defaultDownloads = [
  {
    id: "dl-1",
    category: "Firmware",
    title: "Apex Dome X Pro Firmware v5.7.4",
    releaseDate: "2025-08-15",
    version: "v5.7.4_build250815",
    fileSize: "68.4 MB",
    checksum: "SHA256: 8f2c38b4d96a01...",
    applicableModels: ["Apex Dome X Pro", "Apex Dome X Lite"],
    description: "Adds enhanced neural human-vehicle detection accuracy, RTSP over TLS 1.3, and improved ColorSense auto-white balance under sodium lighting."
  },
  {
    id: "dl-2",
    category: "Firmware",
    title: "Sentinel Bullet Ultra 4K Firmware v5.6.8",
    releaseDate: "2025-07-28",
    version: "v5.6.8_build250728",
    fileSize: "74.1 MB",
    checksum: "SHA256: 1d9a24c55e7b...",
    applicableModels: ["Sentinel Bullet Ultra 4K"],
    description: "Enhanced LPR plate recognition engine with expanded European and Asian alphanumeric plate templates."
  },
  {
    id: "dl-3",
    category: "Firmware",
    title: "Matrix PTZ Speed Dome Firmware v6.1.2",
    releaseDate: "2025-09-01",
    version: "v6.1.2_build250901",
    fileSize: "92.0 MB",
    checksum: "SHA256: 3c44a2b918ef...",
    applicableModels: ["Matrix PTZ Speed Dome 360"],
    description: "Smart 3.0 auto-tracking algorithmic speed boost; optimizes wiper timing cycle during low temperatures."
  },
  {
    id: "dl-4",
    category: "Software & Tools",
    title: "Coloron Guard Pro Client CMS (Windows)",
    releaseDate: "2025-08-20",
    version: "v4.2.0-win64",
    fileSize: "142 MB",
    checksum: "SHA256: f0e319984b2c...",
    applicableModels: ["All Coloron NVRs & IP Cameras"],
    description: "Enterprise video management software for multi-monitor video walls, E-Maps, AI alert center, and PTZ joystick control."
  },
  {
    id: "dl-5",
    category: "Software & Tools",
    title: "Coloron Guard Pro Client CMS (macOS Apple Silicon)",
    releaseDate: "2025-08-20",
    version: "v4.2.0-arm64",
    fileSize: "136 MB",
    checksum: "SHA256: a176e331bfa2...",
    applicableModels: ["All Coloron NVRs & IP Cameras"],
    description: "Native macOS client built for M1/M2/M3/M4 Apple Silicon with Metal hardware accelerated video decoding."
  },
  {
    id: "dl-6",
    category: "Software & Tools",
    title: "Coloron Batch Configuration & IP Tool",
    releaseDate: "2025-06-10",
    version: "v2.5.1",
    fileSize: "28 MB",
    checksum: "SHA256: 77a09c488e...",
    applicableModels: ["All Network Products"],
    description: "Automatically discovers Coloron cameras across subnets, batch activates passwords, assigns static IPs, and updates firmware."
  },
  {
    id: "dl-7",
    category: "Mobile App",
    title: "Coloron Connect iOS (App Store)",
    releaseDate: "2025-08-29",
    version: "v3.8.2",
    fileSize: "85 MB",
    checksum: "iOS 15.0 or later",
    applicableModels: ["All Cloud & P2P Models"],
    description: "Live 4K streaming, instant AI push notifications, 2-way audio intercom, and timeline scrub playback on iPhone & iPad."
  },
  {
    id: "dl-8",
    category: "Mobile App",
    title: "Coloron Connect Android (APK & Google Play)",
    releaseDate: "2025-08-29",
    version: "v3.8.2",
    fileSize: "78 MB",
    checksum: "Android 9.0 or later",
    applicableModels: ["All Cloud & P2P Models"],
    description: "Secure P2P encrypted connection, live multi-grid view, PTZ touch virtual joystick, and clip export."
  },
  {
    id: "dl-9",
    category: "Manuals & Whitepapers",
    title: "ColorSense 24/7 Optical Whitepaper",
    releaseDate: "2025-05-12",
    version: "Rev 2.1",
    fileSize: "12.4 MB",
    checksum: "PDF",
    applicableModels: ["All ColorSense Cameras"],
    description: "Deep technical breakdown of large F1.0 aperture physics, BSI sensor photodiode architecture, and AI-ISP color pipeline."
  }
];

export const defaultFaqs = [
  {
    q: "How does Coloron ColorSense technology achieve full-color video in total darkness?",
    a: "ColorSense combines a super-large F1.0 aperture lens (collecting 4x more ambient photons than standard F2.0 lenses) with a 1/1.2-inch ultra-sensitive sensor and our dedicated ISP neural processing chip. Even at 0.0003 Lux, it renders accurate daytime-quality color without grain or motion blur."
  },
  {
    q: "Are Coloron cameras and NVRs compliant with NDAA and ONVIF?",
    a: "Yes. All Coloron enterprise tier products are fully NDAA Section 889 compliant with zero high-risk telecommunications chipsets. They also strictly conform to ONVIF Profile S, G, and T, allowing interoperability with Milestone, Genetec, and third-party systems."
  },
  {
    q: "Can I upgrade my existing analog coaxial CCTV to Coloron without rewiring?",
    a: "Absolutely. Our TurboVision series transmits pristine 5MP and 4K video alongside audio and telemetry controls directly over standard RG59 or RG6 coaxial cable up to 500 meters, saving tremendous cabling labor."
  },
  {
    q: "How does AI human and vehicle classification reduce false alarms?",
    a: "Traditional PIR or pixel-motion sensors trigger alerts on blowing trees, heavy rain, spiders, or small animals. Coloron's on-chip deep neural network analyzes every moving frame in real-time, filtering out up to 98% of false alarms and notifying you only when human or vehicle contours enter your designated zones."
  },
  {
    q: "What warranty and enterprise support does Coloron provide?",
    a: "Coloron provides a 3-year standard manufacturer warranty on all commercial cameras, a 5-year warranty on enterprise NVRs, and advance hardware replacement service for certified enterprise partners."
  }
];
