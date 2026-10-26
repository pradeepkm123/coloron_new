import React, { useState, useEffect, useMemo, useRef } from "react";
import { useParams, useSearchParams, Link, useNavigate } from "react-router-dom";
import {
  Search,
  Plus,
  Minus,
  ChevronRight,
  Check,
  X,
  ArrowRight,
  PlayCircle,
  PhoneCall,
  ExternalLink
} from "lucide-react";
import { fetchProducts } from "../api/client";

// Dedicated catalog items for CAMERA PRODUCTS matching Hikvision screenshot
const CAMERA_CATALOG = [
  {
    id: "ds-2ce79h8t",
    slug: "ds-2ce79h8t-ait3zf",
    model: "DS-2CE79H8T-AIT3ZF",
    name: "5 MP Ultra Low Light Motorized Varifocal Turret Camera",
    isNew: true,
    series: "Value Series",
    caseType: "Turret",
    resolution: "3K / 5 MP",
    lensType: "Motorized Varifocal",
    irDistance: "Up to 60m",
    wdr: "130 dB WDR",
    illumination: "Ultra Low Light",
    powerSupply: "12 VDC",
    protection: "IP67 Weatherproof",
    material: "Metal",
    supplementalLight: "IR Light",
    image: "/images/cctv_turret_catalog.jpg",
  },
  {
    id: "ds-2ce67dv3t-ptls",
    slug: "ds-2ce67dv3t-ptls",
    model: "DS-2CE67DV3T-PTLS",
    name: "2MP ColorVu 3.0 Fixed PT Camera",
    isNew: true,
    series: "ColorVu Series",
    caseType: "PT Camera",
    resolution: "2 MP",
    lensType: "Fixed Lens",
    irDistance: "Up to 30m",
    wdr: "120 dB WDR",
    illumination: "ColorVu",
    powerSupply: "12 VDC",
    protection: "IP66",
    material: "Plastic",
    supplementalLight: "White Light",
    image: "/images/cctv_pt_camera.jpg",
  },
  {
    id: "ds-2ce67dv3t-ptlxts",
    slug: "ds-2ce67dv3t-ptlxts",
    model: "DS-2CE67DV3T-PTLXTS",
    name: "2MP ColorVu 3.0 Two Way Audio Fixed PT Camera",
    isNew: true,
    series: "ColorVu Series",
    caseType: "PT Camera",
    resolution: "2 MP",
    lensType: "Fixed Lens",
    irDistance: "Up to 30m",
    wdr: "120 dB WDR",
    illumination: "ColorVu",
    powerSupply: "12 VDC",
    protection: "IP66",
    material: "Plastic",
    supplementalLight: "White Light",
    image: "/images/cctv_pt_camera.jpg",
  },
  {
    id: "ds-2ce10dv0t-lps",
    slug: "ds-2ce10dv0t-lps",
    model: "DS-2CE10DV0T-LPS",
    name: "2MP ColorVu 3.0 Fixed Mini Bullet Camera",
    isNew: true,
    series: "ColorVu Series",
    caseType: "Bullet",
    resolution: "2 MP",
    lensType: "Fixed Lens",
    irDistance: "Up to 20m",
    wdr: "Digital WDR",
    illumination: "ColorVu",
    powerSupply: "12 VDC",
    protection: "IP67 Weatherproof",
    material: "Metal & Plastic",
    supplementalLight: "White Light",
    image: "/images/cctv_bullet_catalog.jpg",
  },
  {
    id: "ds-2ce67dv0t-ptls",
    slug: "ds-2ce67dv0t-ptls",
    model: "DS-2CE67DV0T-PTLS",
    name: "2MP ColorVu 3.0 Fixed PT Camera",
    isNew: true,
    series: "ColorVu Series",
    caseType: "PT Camera",
    resolution: "2 MP",
    lensType: "Fixed Lens",
    irDistance: "Up to 30m",
    wdr: "120 dB WDR",
    illumination: "ColorVu",
    powerSupply: "12 VDC",
    protection: "IP66",
    material: "Plastic",
    supplementalLight: "White Light",
    image: "/images/cctv_pt_camera.jpg",
  },
  {
    id: "ds-2ce67dv0t-ptlxts",
    slug: "ds-2ce67dv0t-ptlxts",
    model: "DS-2CE67DV0T-PTLXTS",
    name: "2MP ColorVu 3.0 Two Way Audio Fixed PT Camera",
    isNew: true,
    series: "ColorVu Series",
    caseType: "PT Camera",
    resolution: "2 MP",
    lensType: "Fixed Lens",
    irDistance: "Up to 30m",
    wdr: "120 dB WDR",
    illumination: "ColorVu",
    powerSupply: "12 VDC",
    protection: "IP66",
    material: "Plastic",
    supplementalLight: "White Light",
    image: "/images/cctv_pt_camera.jpg",
  },
  {
    id: "ds-2ce72dv0t-ls",
    slug: "ds-2ce72dv0t-ls",
    model: "DS-2CE72DV0T-LS",
    name: "2MP ColorVu 3.0 Fixed Turret Camera",
    isNew: true,
    series: "ColorVu Series",
    caseType: "Turret",
    resolution: "2 MP",
    lensType: "Fixed Lens",
    irDistance: "Up to 30m",
    wdr: "120 dB WDR",
    illumination: "ColorVu",
    powerSupply: "12 VDC",
    protection: "IP67 Weatherproof",
    material: "Metal",
    supplementalLight: "White Light",
    image: "/images/cctv_turret_catalog.jpg",
  },
  {
    id: "ds-2ce67kv0t-ptls",
    slug: "ds-2ce67kv0t-ptls",
    model: "DS-2CE67KV0T-PTLS",
    name: "3K ColorVu 3.0 Fixed PT Camera",
    isNew: true,
    series: "ColorVu Series",
    caseType: "PT Camera",
    resolution: "3K / 5 MP",
    lensType: "Fixed Lens",
    irDistance: "Up to 40m",
    wdr: "130 dB WDR",
    illumination: "ColorVu",
    powerSupply: "12 VDC",
    protection: "IP66",
    material: "Plastic",
    supplementalLight: "White Light",
    image: "/images/cctv_pt_camera.jpg",
  },
  {
    id: "ds-2ce67kv0t-ptlxts",
    slug: "ds-2ce67kv0t-ptlxts",
    model: "DS-2CE67KV0T-PTLXTS",
    name: "3K ColorVu 3.0 Two Way Audio Fixed PT Camera",
    isNew: true,
    series: "ColorVu Series",
    caseType: "PT Camera",
    resolution: "3K / 5 MP",
    lensType: "Fixed Lens",
    irDistance: "Up to 40m",
    wdr: "130 dB WDR",
    illumination: "ColorVu",
    powerSupply: "12 VDC",
    protection: "IP66",
    material: "Plastic",
    supplementalLight: "White Light",
    image: "/images/cctv_pt_camera.jpg",
  },
  {
    id: "ds-2cd2047g2-lu",
    slug: "ds-2cd2047g2-lu",
    model: "DS-2CD2047G2-LU",
    name: "4 MP ColorVu Smart Hybrid Light Fixed Bullet Camera",
    isNew: true,
    series: "Smart Hybrid Light Series",
    caseType: "Bullet",
    resolution: "4 MP",
    lensType: "Fixed Lens",
    irDistance: "Up to 40m",
    wdr: "130 dB WDR",
    illumination: "Smart Hybrid Light",
    powerSupply: "PoE (802.3af)",
    protection: "IP67 Weatherproof",
    material: "Metal",
    supplementalLight: "Hybrid Light",
    image: "/images/cctv_bullet_catalog.jpg",
  },
  {
    id: "ds-2cd2387g2-lsu",
    slug: "ds-2cd2387g2-lsu",
    model: "DS-2CD2387G2-LSU/SL",
    name: "8 MP Smart Hybrid Light Motorized Varifocal Turret Camera",
    isNew: true,
    series: "Smart Hybrid Light Series",
    caseType: "Turret",
    resolution: "8 MP / 4K",
    lensType: "Motorized Varifocal",
    irDistance: "Up to 60m",
    wdr: "130 dB WDR",
    illumination: "Smart Hybrid Light",
    powerSupply: "PoE (802.3af)",
    protection: "IP67 Weatherproof",
    material: "Metal",
    supplementalLight: "Hybrid Light",
    image: "/images/cctv_turret_catalog.jpg",
  },
  {
    id: "ds-2de4425iw-de",
    slug: "ds-2de4425iw-de",
    model: "DS-2DE4425IW-DE",
    name: "4 MP 25× Optical Zoom IR Network PTZ Speed Dome",
    isNew: true,
    series: "Value Series",
    caseType: "PT Camera",
    resolution: "4 MP",
    lensType: "Motorized Varifocal",
    irDistance: "80m and above",
    wdr: "120 dB WDR",
    illumination: "Ultra Low Light",
    powerSupply: "12 VDC",
    protection: "IP66",
    material: "Metal & Plastic",
    supplementalLight: "IR Light",
    image: "/images/new_prod_speed_dome.jpg",
  },
];

// Dedicated catalog items for VIDEO RECORDERS & SERVERS
const RECORDER_CATALOG = [
  {
    id: "ds-7608nxi-i2",
    slug: "ds-7608nxi-i2-8p",
    model: "DS-7608NXI-I2/8P",
    name: "8-ch 1U 8 PoE 4K DeepinMind Network Video Recorder",
    isNew: true,
    series: "DeepinMind Series",
    caseType: "1U Rackmount",
    resolution: "4K / 32 MP",
    lensType: "N/A",
    irDistance: "N/A",
    wdr: "N/A",
    illumination: "N/A",
    powerSupply: "100-240 VAC",
    protection: "Enterprise Grade",
    material: "Metal",
    supplementalLight: "N/A",
    image: "/images/cctv_recording_composition.jpg",
  },
  {
    id: "ds-7716nxi-i4",
    slug: "ds-7716nxi-i4-16p",
    model: "DS-7716NXI-I4/16P",
    name: "16-ch 1.5U 16 PoE AcuSense Intelligent NVR Server",
    isNew: true,
    series: "AcuSense Series",
    caseType: "1.5U Rackmount",
    resolution: "4K UHD",
    lensType: "N/A",
    irDistance: "N/A",
    wdr: "N/A",
    illumination: "N/A",
    powerSupply: "100-240 VAC",
    protection: "Enterprise Grade",
    material: "Metal",
    supplementalLight: "N/A",
    image: "/images/apple_nvr_pro.jpg",
  },
  {
    id: "ds-9632ni-i8",
    slug: "ds-9632ni-i8",
    model: "DS-9632NI-I8",
    name: "32-ch 2U 8 SATA Enterprise Video Storage Server (Hot-Swap)",
    isNew: true,
    series: "Enterprise Series",
    caseType: "2U Rackmount",
    resolution: "12 MP / 4K",
    lensType: "N/A",
    irDistance: "N/A",
    wdr: "N/A",
    illumination: "N/A",
    powerSupply: "Redundant PSU",
    protection: "Enterprise Grade",
    material: "Metal",
    supplementalLight: "N/A",
    image: "/images/cctv_recording_composition.jpg",
  },
  {
    id: "ds-7604ni-k1",
    slug: "ds-7604ni-k1-4p",
    model: "DS-7604NI-K1/4P",
    name: "4-ch Compact PoE Plug & Play 4K Network Video Recorder",
    isNew: true,
    series: "Value Series",
    caseType: "Compact Desktop",
    resolution: "4K UHD",
    lensType: "N/A",
    irDistance: "N/A",
    wdr: "N/A",
    illumination: "N/A",
    powerSupply: "48 VDC",
    protection: "Commercial Grade",
    material: "Metal & Plastic",
    supplementalLight: "N/A",
    image: "/images/apple_nvr_pro.jpg",
  },
];

// Dedicated catalog items for ACCESS CONTROL
const ACCESS_CATALOG = [
  {
    id: "ds-k1t673dx",
    slug: "ds-k1t673dx",
    model: "DS-K1T673DX",
    name: "Face Recognition Terminal with 7-inch LCD Touchscreen & QR Code",
    isNew: true,
    series: "Pro Access Series",
    caseType: "Wall Mount / Turnstile",
    resolution: "2 MP Dual Lens",
    lensType: "Wide Angle",
    irDistance: "Up to 3m",
    wdr: "120 dB WDR",
    illumination: "IR Light",
    powerSupply: "12 VDC / PoE",
    protection: "IP65 Weatherproof",
    material: "Metal & Glass",
    supplementalLight: "White Light",
    image: "/images/cat_access_terminal.jpg",
  },
  {
    id: "ds-k1t342mfx",
    slug: "ds-k1t342mfx",
    model: "DS-K1T342MFX",
    name: "Value Face Recognition & Fingerprint Time Attendance Terminal",
    isNew: true,
    series: "Value Series",
    caseType: "Wall Mount",
    resolution: "2 MP",
    lensType: "Wide Angle",
    irDistance: "Up to 2m",
    wdr: "Digital WDR",
    illumination: "IR Light",
    powerSupply: "12 VDC",
    protection: "Indoor",
    material: "Plastic",
    supplementalLight: "White Light",
    image: "/images/quick_pass.jpg",
  },
  {
    id: "ds-k2604",
    slug: "ds-k2604",
    model: "DS-K2604",
    name: "4-Door Multi-Door Master Access Controller with TCP/IP & RS-485",
    isNew: true,
    series: "Enterprise Series",
    caseType: "Cabinet Box",
    resolution: "N/A",
    lensType: "N/A",
    irDistance: "N/A",
    wdr: "N/A",
    illumination: "N/A",
    powerSupply: "100-240 VAC",
    protection: "Indoor Metal Box",
    material: "Metal",
    supplementalLight: "N/A",
    image: "/images/cat_edge_box.jpg",
  },
];

// CONFIGURATION FOR ALL 23 CATEGORY MENU ITEMS
const CATEGORY_MAP = {
  "camera-products": {
    name: "Camera Products",
    subnavTitle: "Coloron Security Cameras",
    heroTitle: "Pro Series Network Cameras",
    heroSubtitle: "Making Pro, More Pro",
    heroImage: "/images/hikvision_pro_banner.jpg",
    defaultCatalog: CAMERA_CATALOG,
    defaultCount: 445,
  },
  "video-recorders": {
    name: "Video Recorders and Servers",
    subnavTitle: "Coloron Video Recorders",
    heroTitle: "Pro Series NVRs & Storage Servers",
    heroSubtitle: "Empower Surveillance with High-Throughput Edge AI",
    heroImage: "/images/hero_nvr_servers.jpg",
    defaultCatalog: RECORDER_CATALOG,
    defaultCount: 168,
  },
  "access-control": {
    name: "Access Control",
    subnavTitle: "Coloron Access Control",
    heroTitle: "Intelligent Biometric & Face Terminals",
    heroSubtitle: "Contactless, Ultra-Fast and Highly Secure",
    heroImage: "/images/hero_access_control.jpg",
    defaultCatalog: ACCESS_CATALOG,
    defaultCount: 92,
  },
  "video-intercom": {
    name: "Video Intercom",
    subnavTitle: "Coloron Video Intercom",
    heroTitle: "Smart IP & Two-Wire Video Intercoms",
    heroSubtitle: "Crystal-Clear Two-Way Audio & High-Def Video Entry",
    heroImage: "/images/hero_video_intercom.jpg",
    defaultCatalog: ACCESS_CATALOG,
    defaultCount: 76,
  },
  "speed-gates": {
    name: "Speed Gates and Turnstiles",
    subnavTitle: "Coloron Speed Gates",
    heroTitle: "Pedestrian Speed Gates & Optical Turnstiles",
    heroSubtitle: "High-Volume Smooth Pedestrian Flow Management",
    heroImage: "/images/vehicle_access.jpg",
    defaultCatalog: ACCESS_CATALOG,
    defaultCount: 48,
  },
  "alarm": {
    name: "Alarm",
    subnavTitle: "Coloron Intrusion Alarm",
    heroTitle: "Wireless AX PRO Intrusion Alarm Systems",
    heroSubtitle: "Instant Detection with Zero False Alarms",
    heroImage: "/images/cat_edge_box.jpg",
    defaultCatalog: CAMERA_CATALOG,
    defaultCount: 64,
  },
  "interactive-displays": {
    name: "Interactive Flat Panel Displays",
    subnavTitle: "Coloron Interactive Displays",
    heroTitle: "4K Ultra-HD Interactive Touch Displays",
    heroSubtitle: "Collaborative Smart Boards for Corporate & Education",
    heroImage: "/images/industry_education.jpg",
    defaultCatalog: CAMERA_CATALOG,
    defaultCount: 38,
  },
  "led-displays": {
    name: "LED Displays",
    subnavTitle: "Coloron Commercial Displays",
    heroTitle: "Fine-Pitch Commercial LED Video Walls",
    heroSubtitle: "Seamless Large-Scale Command Center Visualization",
    heroImage: "/images/industry_commercial.jpg",
    defaultCatalog: CAMERA_CATALOG,
    defaultCount: 52,
  },
  "display-control": {
    name: "Display and Control",
    subnavTitle: "Coloron Display & Control",
    heroTitle: "Video Wall Controllers & Decoders",
    heroSubtitle: "High-Density Video Stream Decoding & Control",
    heroImage: "/images/cat_edge_box.jpg",
    defaultCatalog: RECORDER_CATALOG,
    defaultCount: 42,
  },
  "networking": {
    name: "Networking",
    subnavTitle: "Coloron Networking",
    heroTitle: "Smart Managed PoE Switches & Routers",
    heroSubtitle: "Long-Range 300m PoE Transmission with VIP Port Priority",
    heroImage: "/images/cat_poe_switch.jpg",
    defaultCatalog: RECORDER_CATALOG,
    defaultCount: 110,
  },
  "thermal": {
    name: "Thermal",
    subnavTitle: "Coloron Thermal Cameras",
    heroTitle: "Bi-Spectrum Heat & Fire Thermal Cameras",
    heroSubtitle: "24/7 Total Perimeter Protection in Complete Darkness",
    heroImage: "/images/cat_thermal_cam.jpg",
    defaultCatalog: CAMERA_CATALOG,
    defaultCount: 84,
  },
  "parking-management": {
    name: "Parking Management",
    subnavTitle: "Coloron Smart Parking",
    heroTitle: "ANPR Parking Barrier & Guidance Systems",
    heroSubtitle: "Frictionless High-Accuracy License Plate Recognition",
    heroImage: "/images/vehicle_access.jpg",
    defaultCatalog: CAMERA_CATALOG,
    defaultCount: 56,
  },
  "intelligent-traffic": {
    name: "Intelligent Traffic",
    subnavTitle: "Coloron Intelligent Traffic",
    heroTitle: "AI Radar Traffic & Speed Enforcement Domes",
    heroSubtitle: "Precision Multi-Lane Vehicle Tracking & Violation Capture",
    heroImage: "/images/new_prod_speed_dome.jpg",
    defaultCatalog: CAMERA_CATALOG,
    defaultCount: 78,
  },
  "portable-products": {
    name: "Portable Products",
    subnavTitle: "Coloron Portable Security",
    heroTitle: "Body Worn Cameras & Portable Deployable Units",
    heroSubtitle: "Real-Time 4G/5G Live Streaming for Field Officers",
    heroImage: "/images/new_prod_solar.jpg",
    defaultCatalog: CAMERA_CATALOG,
    defaultCount: 34,
  },
  "onboard-security": {
    name: "Onboard Security",
    subnavTitle: "Coloron Mobile Onboard",
    heroTitle: "Mobile NVRs & In-Vehicle Dash Cameras",
    heroSubtitle: "Anti-Vibration Shockproof Transit Surveillance",
    heroImage: "/images/vehicle_access.jpg",
    defaultCatalog: RECORDER_CATALOG,
    defaultCount: 45,
  },
  "security-inspection": {
    name: "Security Inspection",
    subnavTitle: "Coloron Security Inspection",
    heroTitle: "Walk-Through Metal Detectors & X-Ray Scanners",
    heroSubtitle: "Multi-Zone Threat Detection with Temperature Screening",
    heroImage: "/images/quick_pass.jpg",
    defaultCatalog: ACCESS_CATALOG,
    defaultCount: 29,
  },
  "radar": {
    name: "Radar",
    subnavTitle: "Coloron Security Radar",
    heroTitle: "All-Weather Perimeter Defense Radar",
    heroSubtitle: "Active Target Tracking in Rain, Fog and Zero Visibility",
    heroImage: "/images/cat_thermal_cam.jpg",
    defaultCatalog: CAMERA_CATALOG,
    defaultCount: 24,
  },
  "premises-distribution": {
    name: "Premises Distribution System",
    subnavTitle: "Coloron Cabling & Distribution",
    heroTitle: "Structured Optical Fiber & Cat6 Cabling Solutions",
    heroSubtitle: "Low-Loss High-Bandwidth Pure Copper Infrastructure",
    heroImage: "/images/cctv_recording_composition.jpg",
    defaultCatalog: RECORDER_CATALOG,
    defaultCount: 65,
  },
  "fire-products": {
    name: "Fire Products",
    subnavTitle: "Coloron Fire Alarm Systems",
    heroTitle: "Commercial Fire Detection & Smoke Sensors",
    heroSubtitle: "Intelligent Addressable Early-Warning Life Safety",
    heroImage: "/images/cat_edge_box.jpg",
    defaultCatalog: CAMERA_CATALOG,
    defaultCount: 50,
  },
  "audio-products": {
    name: "Audio Products",
    subnavTitle: "Coloron Commercial Audio",
    heroTitle: "Network IP Horn Speakers & Ceiling Paging",
    heroSubtitle: "High-Decibel Active Deterrence & Scheduled Broadcasts",
    heroImage: "/images/cctv_turret_catalog.jpg",
    defaultCatalog: CAMERA_CATALOG,
    defaultCount: 42,
  },
  "sensing-products": {
    name: "Sensing Products",
    subnavTitle: "Coloron Environmental Sensing",
    heroTitle: "Industrial IoT Sensors & Vibration Monitors",
    heroSubtitle: "Continuous Environmental Health & Security Metrics",
    heroImage: "/images/cat_edge_box.jpg",
    defaultCatalog: CAMERA_CATALOG,
    defaultCount: 36,
  },
  "hilook": {
    name: "HiLook",
    subnavTitle: "Coloron HiLook Series",
    heroTitle: "Cost-Effective Entry-Level Video Surveillance",
    heroSubtitle: "Reliable Everyday Security for Homes & Small Businesses",
    heroImage: "/images/hikvision_pro_banner.jpg",
    defaultCatalog: CAMERA_CATALOG,
    defaultCount: 120,
  },
  "software": {
    name: "Software",
    subnavTitle: "Coloron VMS & Central Software",
    heroTitle: "Central Management Software & Mobile Client",
    heroSubtitle: "Unified Video, Access, Attendance & AI Analytics",
    heroImage: "/images/product_selector.jpg",
    defaultCatalog: RECORDER_CATALOG,
    defaultCount: 18,
  },
};

export default function CategoryProducts() {
  const { categorySlug } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const searchSectionRef = useRef(null);

  // Normalize current category config
  const slug = categorySlug || "camera-products";
  const catConfig = CATEGORY_MAP[slug] || {
    name: slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
    subnavTitle: `Coloron ${slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}`,
    heroTitle: `${slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())} Lineup`,
    heroSubtitle: "Professional Optics, High-Definition Surveillance & AI Security",
    heroImage: "/images/hikvision_pro_banner.jpg",
    defaultCatalog: CAMERA_CATALOG,
    defaultCount: 200,
  };

  // Filter state
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSeries, setSelectedSeries] = useState("");
  const [selectedCaseTypes, setSelectedCaseTypes] = useState([]);
  const [selectedResolutions, setSelectedResolutions] = useState([]);
  const [selectedLensTypes, setSelectedLensTypes] = useState([]);
  const [selectedIrDistances, setSelectedIrDistances] = useState([]);
  const [selectedWdrs, setSelectedWdrs] = useState([]);
  const [selectedIlluminations, setSelectedIlluminations] = useState([]);
  const [selectedPowers, setSelectedPowers] = useState([]);
  const [selectedProtections, setSelectedProtections] = useState([]);
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [selectedSupplementalLights, setSelectedSupplementalLights] = useState([]);

  // Accordion open/close state
  const [openSections, setOpenSections] = useState({
    series: true,
    caseType: false,
    resolution: false,
    lensType: false,
    irDistance: false,
    wdr: false,
    illumination: false,
    power: false,
    protection: false,
    material: false,
    supplementalLight: false,
  });

  // Compare selection (prod model -> item)
  const [comparedProducts, setComparedProducts] = useState({});

  // DB items state
  const [dbProducts, setDbProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchProducts({ category: catConfig.name })
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          const mapped = data.map((p) => ({
            id: p.id || p.slug,
            slug: p.slug || p.id,
            model: p.name?.split(" ")[0]?.toUpperCase()?.startsWith("DS-")
              ? p.name.split(" ")[0]
              : `CL-${(p.slug || "PROD").substring(0, 8).toUpperCase()}`,
            name: p.name || p.tagline,
            isNew: true,
            series: p.series?.includes("Pro") ? "Smart Hybrid Light Series" : "Value Series",
            caseType: p.category?.toLowerCase()?.includes("bullet") ? "Bullet" : "Turret",
            resolution: p.resolution || "4 MP",
            lensType: p.lens?.includes("Motorized") ? "Motorized Varifocal" : "Fixed Lens",
            irDistance: "Up to 40m",
            wdr: p.wdr || "120 dB WDR",
            illumination: "ColorVu",
            powerSupply: "PoE (802.3af)",
            protection: "IP67 Weatherproof",
            material: "Metal",
            supplementalLight: "White Light",
            image: p.images?.[0] || catConfig.defaultCatalog[0]?.image || "/images/cctv_turret_catalog.jpg",
          }));
          setDbProducts(mapped);
        } else {
          setDbProducts([]);
        }
      })
      .catch((err) => console.error("Error fetching db products:", err))
      .finally(() => setLoading(false));
  }, [slug, catConfig.name]);

  // Combined product catalog for this category
  const allProducts = useMemo(() => {
    const catalogBase = catConfig.defaultCatalog || CAMERA_CATALOG;
    const seen = new Set(catalogBase.map((p) => p.model));
    const extras = dbProducts.filter((p) => !seen.has(p.model));
    return [...catalogBase, ...extras];
  }, [catConfig, dbProducts]);

  const toggleSection = (sectionKey) => {
    setOpenSections((prev) => ({
      ...prev,
      [sectionKey]: !prev[sectionKey],
    }));
  };

  const toggleCheckbox = (list, setList, val) => {
    if (list.includes(val)) {
      setList(list.filter((x) => x !== val));
    } else {
      setList([...list, val]);
    }
  };

  const handleReset = () => {
    setSearchQuery("");
    setSelectedSeries("");
    setSelectedCaseTypes([]);
    setSelectedResolutions([]);
    setSelectedLensTypes([]);
    setSelectedIrDistances([]);
    setSelectedWdrs([]);
    setSelectedIlluminations([]);
    setSelectedPowers([]);
    setSelectedProtections([]);
    setSelectedMaterials([]);
    setSelectedSupplementalLights([]);
  };

  const toggleCompare = (item) => {
    setComparedProducts((prev) => {
      const next = { ...prev };
      if (next[item.model]) {
        delete next[item.model];
      } else {
        if (Object.keys(next).length >= 4) {
          alert("You can compare up to 4 products at a time.");
          return next;
        }
        next[item.model] = item;
      }
      return next;
    });
  };

  const scrollToSearch = () => {
    if (searchSectionRef.current) {
      searchSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Filter application
  const filteredProducts = useMemo(() => {
    return allProducts.filter((p) => {
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesModel = p.model.toLowerCase().includes(q);
        const matchesName = p.name.toLowerCase().includes(q);
        if (!matchesModel && !matchesName) return false;
      }

      if (selectedSeries && p.series !== selectedSeries) return false;
      if (selectedCaseTypes.length > 0 && !selectedCaseTypes.includes(p.caseType)) return false;
      if (selectedResolutions.length > 0) {
        const matchesRes = selectedResolutions.some((r) =>
          p.resolution.toLowerCase().includes(r.toLowerCase())
        );
        if (!matchesRes) return false;
      }
      if (selectedLensTypes.length > 0 && !selectedLensTypes.includes(p.lensType)) return false;
      if (selectedIrDistances.length > 0 && !selectedIrDistances.includes(p.irDistance)) return false;
      if (selectedWdrs.length > 0 && !selectedWdrs.includes(p.wdr)) return false;
      if (selectedIlluminations.length > 0 && !selectedIlluminations.includes(p.illumination)) return false;
      if (selectedPowers.length > 0 && !selectedPowers.includes(p.powerSupply)) return false;
      if (selectedProtections.length > 0 && !selectedProtections.includes(p.protection)) return false;
      if (selectedMaterials.length > 0 && !selectedMaterials.includes(p.material)) return false;
      if (selectedSupplementalLights.length > 0 && !selectedSupplementalLights.includes(p.supplementalLight)) return false;

      return true;
    });
  }, [
    allProducts,
    searchQuery,
    selectedSeries,
    selectedCaseTypes,
    selectedResolutions,
    selectedLensTypes,
    selectedIrDistances,
    selectedWdrs,
    selectedIlluminations,
    selectedPowers,
    selectedProtections,
    selectedMaterials,
    selectedSupplementalLights,
  ]);

  const compareCount = Object.keys(comparedProducts).length;

  const hasActiveFilters =
    searchQuery ||
    selectedSeries ||
    selectedCaseTypes.length > 0 ||
    selectedResolutions.length > 0 ||
    selectedLensTypes.length > 0 ||
    selectedIrDistances.length > 0 ||
    selectedWdrs.length > 0 ||
    selectedIlluminations.length > 0 ||
    selectedPowers.length > 0 ||
    selectedProtections.length > 0 ||
    selectedMaterials.length > 0 ||
    selectedSupplementalLights.length > 0;

  const displayCount = hasActiveFilters ? filteredProducts.length : catConfig.defaultCount;

  return (
    <div className="search-catalog-page">
      {/* 1. TOP HERO BANNER (MATCHING HIKVISION PRO SERIES SCREENSHOT) */}
      <section className="hik-hero-banner">
        <div
          className="hik-hero-bg"
          style={{ backgroundImage: `url(${catConfig.heroImage})` }}
        />
        <div className="hik-hero-overlay" />
        <div className="hik-hero-container">
          <div className="hik-hero-left">
            <h1 className="hik-hero-headline">{catConfig.heroTitle}</h1>
            <p className="hik-hero-tagline">{catConfig.heroSubtitle}</p>
            <button
              type="button"
              className="hik-hero-btn"
              onClick={scrollToSearch}
            >
              Explore More
            </button>
          </div>
        </div>
      </section>

      {/* 2. SUBNAV BAR (HIKVISION SUB-HEADER & BREADCRUMB) */}
      <div className="hik-subnav-bar">
        <div className="catalog-container hik-subnav-inner">
          <div className="subnav-left">
            <span className="subnav-brand-title">{catConfig.subnavTitle}</span>
            <div className="subnav-links">
              <button
                type="button"
                className="subnav-link-btn active"
                onClick={scrollToSearch}
              >
                Product Categories
              </button>
              <button
                type="button"
                className="subnav-link-btn"
                onClick={() => alert("Product Demo Video available soon.")}
              >
                Watch Video
              </button>
              <Link to="/contact" className="subnav-link-btn">
                Contact Sales
              </Link>
              <Link to="/compare" className="subnav-link-btn">
                Related Links
              </Link>
            </div>
          </div>
          <div className="subnav-right">
            <nav className="catalog-breadcrumbs">
              <Link to="/" className="bc-item">Home</Link>
              <ChevronRight size={13} className="bc-sep" />
              <Link to="/products" className="bc-item">Products</Link>
              <ChevronRight size={13} className="bc-sep" />
              <span className="bc-item active">{catConfig.name}</span>
            </nav>
          </div>
        </div>
      </div>

      {/* 3. MAIN TWO COLUMN SEARCH & PRODUCT CATALOG */}
      <div ref={searchSectionRef} className="catalog-container catalog-layout">
        {/* LEFT SIDEBAR: FILTERS */}
        <aside className="catalog-sidebar">
          {/* Header Row: Title + Reset */}
          <div className="sidebar-header">
            <h2 className="sidebar-title">Search List</h2>
            <button
              type="button"
              className="sidebar-reset-btn"
              onClick={handleReset}
              title="Reset all filters"
            >
              Reset
            </button>
          </div>

          {/* Model Search Box */}
          <div className="sidebar-search-box">
            <input
              type="text"
              className="sidebar-search-input"
              placeholder="Search for Product Models"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search size={17} className="sidebar-search-icon" />
          </div>

          {/* ACCORDION FILTERS */}
          <div className="sidebar-filters-accordion">
            {/* 1. Series */}
            <div className="filter-accordion-item">
              <div
                className="filter-accordion-header"
                onClick={() => toggleSection("series")}
              >
                <span className="filter-title">Series</span>
                <span className="filter-toggle-icon">
                  {openSections.series ? <Minus size={16} /> : <Plus size={16} />}
                </span>
              </div>
              {openSections.series && (
                <div className="filter-accordion-body">
                  {["Value Series", "Smart Hybrid Light Series", "ColorVu Series"].map((ser) => (
                    <label
                      key={ser}
                      className="radio-option"
                      onClick={() =>
                        setSelectedSeries(selectedSeries === ser ? "" : ser)
                      }
                    >
                      <span
                        className={`custom-radio ${
                          selectedSeries === ser ? "checked" : ""
                        }`}
                      />
                      <span className="option-label">{ser}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* 2. Case Type */}
            <div className="filter-accordion-item">
              <div
                className="filter-accordion-header"
                onClick={() => toggleSection("caseType")}
              >
                <span className="filter-title">Case Type</span>
                <span className="filter-toggle-icon">
                  {openSections.caseType ? <Minus size={16} /> : <Plus size={16} />}
                </span>
              </div>
              {openSections.caseType && (
                <div className="filter-accordion-body">
                  {["Turret", "PT Camera", "Bullet", "Dome"].map((ct) => (
                    <label
                      key={ct}
                      className="checkbox-option"
                      onClick={() =>
                        toggleCheckbox(selectedCaseTypes, setSelectedCaseTypes, ct)
                      }
                    >
                      <span
                        className={`custom-checkbox ${
                          selectedCaseTypes.includes(ct) ? "checked" : ""
                        }`}
                      >
                        {selectedCaseTypes.includes(ct) && <Check size={12} strokeWidth={3} />}
                      </span>
                      <span className="option-label">{ct}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* 3. Resolution */}
            <div className="filter-accordion-item">
              <div
                className="filter-accordion-header"
                onClick={() => toggleSection("resolution")}
              >
                <span className="filter-title">Resolution</span>
                <span className="filter-toggle-icon">
                  {openSections.resolution ? <Minus size={16} /> : <Plus size={16} />}
                </span>
              </div>
              {openSections.resolution && (
                <div className="filter-accordion-body">
                  {["2 MP", "3K / 5 MP", "4 MP", "8 MP / 4K"].map((res) => (
                    <label
                      key={res}
                      className="checkbox-option"
                      onClick={() =>
                        toggleCheckbox(selectedResolutions, setSelectedResolutions, res)
                      }
                    >
                      <span
                        className={`custom-checkbox ${
                          selectedResolutions.includes(res) ? "checked" : ""
                        }`}
                      >
                        {selectedResolutions.includes(res) && <Check size={12} strokeWidth={3} />}
                      </span>
                      <span className="option-label">{res}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* 4. Lens Type */}
            <div className="filter-accordion-item">
              <div
                className="filter-accordion-header"
                onClick={() => toggleSection("lensType")}
              >
                <span className="filter-title">Lens Type</span>
                <span className="filter-toggle-icon">
                  {openSections.lensType ? <Minus size={16} /> : <Plus size={16} />}
                </span>
              </div>
              {openSections.lensType && (
                <div className="filter-accordion-body">
                  {["Fixed Lens", "Motorized Varifocal", "Varifocal"].map((lt) => (
                    <label
                      key={lt}
                      className="checkbox-option"
                      onClick={() =>
                        toggleCheckbox(selectedLensTypes, setSelectedLensTypes, lt)
                      }
                    >
                      <span
                        className={`custom-checkbox ${
                          selectedLensTypes.includes(lt) ? "checked" : ""
                        }`}
                      >
                        {selectedLensTypes.includes(lt) && <Check size={12} strokeWidth={3} />}
                      </span>
                      <span className="option-label">{lt}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* 5. IR Distance */}
            <div className="filter-accordion-item">
              <div
                className="filter-accordion-header"
                onClick={() => toggleSection("irDistance")}
              >
                <span className="filter-title">IR Distance</span>
                <span className="filter-toggle-icon">
                  {openSections.irDistance ? <Minus size={16} /> : <Plus size={16} />}
                </span>
              </div>
              {openSections.irDistance && (
                <div className="filter-accordion-body">
                  {["Up to 20m", "Up to 30m", "Up to 40m", "Up to 60m", "80m and above"].map((ir) => (
                    <label
                      key={ir}
                      className="checkbox-option"
                      onClick={() =>
                        toggleCheckbox(selectedIrDistances, setSelectedIrDistances, ir)
                      }
                    >
                      <span
                        className={`custom-checkbox ${
                          selectedIrDistances.includes(ir) ? "checked" : ""
                        }`}
                      >
                        {selectedIrDistances.includes(ir) && <Check size={12} strokeWidth={3} />}
                      </span>
                      <span className="option-label">{ir}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* 6. WDR */}
            <div className="filter-accordion-item">
              <div
                className="filter-accordion-header"
                onClick={() => toggleSection("wdr")}
              >
                <span className="filter-title">WDR</span>
                <span className="filter-toggle-icon">
                  {openSections.wdr ? <Minus size={16} /> : <Plus size={16} />}
                </span>
              </div>
              {openSections.wdr && (
                <div className="filter-accordion-body">
                  {["Digital WDR", "120 dB WDR", "130 dB WDR"].map((w) => (
                    <label
                      key={w}
                      className="checkbox-option"
                      onClick={() => toggleCheckbox(selectedWdrs, setSelectedWdrs, w)}
                    >
                      <span
                        className={`custom-checkbox ${
                          selectedWdrs.includes(w) ? "checked" : ""
                        }`}
                      >
                        {selectedWdrs.includes(w) && <Check size={12} strokeWidth={3} />}
                      </span>
                      <span className="option-label">{w}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* 7. Illumination Level */}
            <div className="filter-accordion-item">
              <div
                className="filter-accordion-header"
                onClick={() => toggleSection("illumination")}
              >
                <span className="filter-title">Illumination Level</span>
                <span className="filter-toggle-icon">
                  {openSections.illumination ? <Minus size={16} /> : <Plus size={16} />}
                </span>
              </div>
              {openSections.illumination && (
                <div className="filter-accordion-body">
                  {["ColorVu", "Ultra Low Light", "Smart Hybrid Light"].map((il) => (
                    <label
                      key={il}
                      className="checkbox-option"
                      onClick={() =>
                        toggleCheckbox(selectedIlluminations, setSelectedIlluminations, il)
                      }
                    >
                      <span
                        className={`custom-checkbox ${
                          selectedIlluminations.includes(il) ? "checked" : ""
                        }`}
                      >
                        {selectedIlluminations.includes(il) && <Check size={12} strokeWidth={3} />}
                      </span>
                      <span className="option-label">{il}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* 8. Power Supply */}
            <div className="filter-accordion-item">
              <div
                className="filter-accordion-header"
                onClick={() => toggleSection("power")}
              >
                <span className="filter-title">Power Supply</span>
                <span className="filter-toggle-icon">
                  {openSections.power ? <Minus size={16} /> : <Plus size={16} />}
                </span>
              </div>
              {openSections.power && (
                <div className="filter-accordion-body">
                  {["12 VDC", "PoE (802.3af)", "24 VAC"].map((pwr) => (
                    <label
                      key={pwr}
                      className="checkbox-option"
                      onClick={() =>
                        toggleCheckbox(selectedPowers, setSelectedPowers, pwr)
                      }
                    >
                      <span
                        className={`custom-checkbox ${
                          selectedPowers.includes(pwr) ? "checked" : ""
                        }`}
                      >
                        {selectedPowers.includes(pwr) && <Check size={12} strokeWidth={3} />}
                      </span>
                      <span className="option-label">{pwr}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* 9. Protection Level */}
            <div className="filter-accordion-item">
              <div
                className="filter-accordion-header"
                onClick={() => toggleSection("protection")}
              >
                <span className="filter-title">Protection Level</span>
                <span className="filter-toggle-icon">
                  {openSections.protection ? <Minus size={16} /> : <Plus size={16} />}
                </span>
              </div>
              {openSections.protection && (
                <div className="filter-accordion-body">
                  {["IP67 Weatherproof", "IP66", "IK10 Vandal-Proof"].map((prot) => (
                    <label
                      key={prot}
                      className="checkbox-option"
                      onClick={() =>
                        toggleCheckbox(selectedProtections, setSelectedProtections, prot)
                      }
                    >
                      <span
                        className={`custom-checkbox ${
                          selectedProtections.includes(prot) ? "checked" : ""
                        }`}
                      >
                        {selectedProtections.includes(prot) && <Check size={12} strokeWidth={3} />}
                      </span>
                      <span className="option-label">{prot}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* 10. Material */}
            <div className="filter-accordion-item">
              <div
                className="filter-accordion-header"
                onClick={() => toggleSection("material")}
              >
                <span className="filter-title">Material</span>
                <span className="filter-toggle-icon">
                  {openSections.material ? <Minus size={16} /> : <Plus size={16} />}
                </span>
              </div>
              {openSections.material && (
                <div className="filter-accordion-body">
                  {["Metal", "Plastic", "Metal & Plastic"].map((mat) => (
                    <label
                      key={mat}
                      className="checkbox-option"
                      onClick={() =>
                        toggleCheckbox(selectedMaterials, setSelectedMaterials, mat)
                      }
                    >
                      <span
                        className={`custom-checkbox ${
                          selectedMaterials.includes(mat) ? "checked" : ""
                        }`}
                      >
                        {selectedMaterials.includes(mat) && <Check size={12} strokeWidth={3} />}
                      </span>
                      <span className="option-label">{mat}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* 11. Supplemental Light */}
            <div className="filter-accordion-item">
              <div
                className="filter-accordion-header"
                onClick={() => toggleSection("supplementalLight")}
              >
                <span className="filter-title">Supplemental Light</span>
                <span className="filter-toggle-icon">
                  {openSections.supplementalLight ? <Minus size={16} /> : <Plus size={16} />}
                </span>
              </div>
              {openSections.supplementalLight && (
                <div className="filter-accordion-body">
                  {["White Light", "IR Light", "Hybrid Light"].map((sl) => (
                    <label
                      key={sl}
                      className="checkbox-option"
                      onClick={() =>
                        toggleCheckbox(
                          selectedSupplementalLights,
                          setSelectedSupplementalLights,
                          sl
                        )
                      }
                    >
                      <span
                        className={`custom-checkbox ${
                          selectedSupplementalLights.includes(sl) ? "checked" : ""
                        }`}
                      >
                        {selectedSupplementalLights.includes(sl) && (
                          <Check size={12} strokeWidth={3} />
                        )}
                      </span>
                      <span className="option-label">{sl}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>
          </div>
        </aside>

        {/* RIGHT AREA: PRODUCT RESULTS */}
        <main className="catalog-content">
          {/* Matches Header */}
          <div className="catalog-results-header">
            <h2 className="matches-count-text">
              {displayCount} Products Matches
            </h2>
          </div>

          {/* Product Grid */}
          {filteredProducts.length === 0 ? (
            <div className="catalog-no-results">
              <Search size={40} className="no-results-icon" />
              <h3>No matching products found</h3>
              <p>Try adjusting your search filters or clear them to see all cameras.</p>
              <button
                type="button"
                className="no-results-reset-btn"
                onClick={handleReset}
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="catalog-product-grid">
              {filteredProducts.map((product) => {
                const isCompared = !!comparedProducts[product.model];
                return (
                  <div key={product.id || product.model} className="hik-product-card">
                    {/* Top: NEW Badge */}
                    <div className="card-top-row">
                      {product.isNew && (
                        <span className="badge-new-text">NEW</span>
                      )}
                    </div>

                    {/* Image Area */}
                    <Link
                      to={`/product/${product.slug}`}
                      className="card-image-link"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="card-prod-image"
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.src = "/images/cctv_turret_catalog.jpg";
                        }}
                      />
                    </Link>

                    {/* Product Model */}
                    <Link
                      to={`/product/${product.slug}`}
                      className="card-model-link"
                    >
                      <h3 className="card-model-title">{product.model}</h3>
                    </Link>

                    {/* Subtitle / Specs */}
                    <p className="card-sub-description">{product.name}</p>

                    {/* Compare Checkbox */}
                    <div className="card-compare-footer">
                      <label
                        className="compare-checkbox-label"
                        onClick={(e) => {
                          e.preventDefault();
                          toggleCompare(product);
                        }}
                      >
                        <span
                          className={`custom-checkbox-compare ${
                            isCompared ? "checked" : ""
                          }`}
                        >
                          {isCompared && <Check size={11} strokeWidth={3} />}
                        </span>
                        <span className="compare-text">Compare</span>
                      </label>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </main>
      </div>

      {/* FLOATING COMPARE BAR (EXACT HIKVISION 4-SLOT STYLE) */}
      {compareCount > 0 && (
        <div className="hik-compare-bar-wrap">
          <div className="hik-compare-bar">
            {/* Close Bar Button */}
            <button
              type="button"
              className="hik-compare-close-btn"
              onClick={() => setComparedProducts({})}
              title="Close Comparison Bar"
            >
              <X size={16} />
            </button>

            {/* 4 Product Slots */}
            <div className="hik-compare-slots">
              {[0, 1, 2, 3].map((slotIdx) => {
                const prod = Object.values(comparedProducts)[slotIdx];
                if (prod) {
                  return (
                    <div key={prod.model} className="hik-compare-slot filled">
                      <div className="slot-img-wrap">
                        <img src={prod.image} alt={prod.model} className="slot-img" />
                        <button
                          type="button"
                          className="slot-remove-btn"
                          onClick={() => toggleCompare(prod)}
                          title="Remove product"
                        >
                          <X size={12} />
                        </button>
                      </div>
                      <span className="slot-model-label" title={prod.model}>
                        {prod.model}
                      </span>
                    </div>
                  );
                }
                return (
                  <div key={`empty-${slotIdx}`} className="hik-compare-slot empty">
                    <span className="slot-empty-text">Up to 4 products</span>
                  </div>
                );
              })}
            </div>

            {/* Actions: Clear All & Compare (N) */}
            <div className="hik-compare-actions">
              <button
                type="button"
                className="hik-compare-clear-btn"
                onClick={() => setComparedProducts({})}
              >
                Clear All
              </button>
              <Link
                to={`/compare?models=${encodeURIComponent(
                  Object.keys(comparedProducts).join(",")
                )}`}
                className="hik-compare-launch-btn"
                onClick={() => {
                  try {
                    localStorage.setItem(
                      "coloron_compare_items",
                      JSON.stringify(Object.values(comparedProducts))
                    );
                  } catch (e) {}
                }}
              >
                Compare <span className="compare-badge-num">{compareCount}</span>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* STYLES */}
      <style>{`
        /* PAGE BASE */
        .search-catalog-page {
          min-height: 100vh;
          background-color: #ffffff;
          color: #333333;
          font-family: "PingFang SC", "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", Arial, sans-serif;
          padding-top: 52px; /* Height of Navbar */
          padding-bottom: 90px;
        }

        .catalog-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 32px;
        }

        /* 1. TOP HERO BANNER */
        .hik-hero-banner {
          position: relative;
          width: 100%;
          height: 750px;
          min-height: 750px;
          background-color: #161618;
          overflow: hidden;
          display: flex;
          align-items: center;
        }

        .hik-hero-bg {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center right;
          background-repeat: no-repeat;
          opacity: 1;
        }

        .hik-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            rgba(18, 18, 20, 0.95) 0%,
            rgba(18, 18, 20, 0.85) 30%,
            rgba(18, 18, 20, 0.45) 55%,
            rgba(18, 18, 20, 0.05) 85%,
            transparent 100%
          );
        }

        .hik-hero-container {
          position: relative;
          z-index: 2;
          max-width: 1400px;
          width: 100%;
          margin: 0 auto;
          padding: 80px 32px;
        }

        .hik-hero-left {
          max-width: 620px;
        }

        .hik-hero-headline {
          font-size: 48px;
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 18px 0;
          line-height: 1.15;
          letter-spacing: -0.5px;
        }

        .hik-hero-tagline {
          font-size: 20px;
          color: rgba(255, 255, 255, 0.88);
          margin: 0 0 34px 0;
          font-weight: 400;
          line-height: 1.45;
        }

        .hik-hero-btn {
          display: inline-block;
          background-color: #d32f2f;
          color: #ffffff;
          font-size: 15px;
          font-weight: 600;
          padding: 12px 36px;
          border-radius: 28px;
          border: none;
          cursor: pointer;
          transition: background-color 0.2s ease, transform 0.15s ease;
          box-shadow: 0 4px 14px rgba(211, 47, 47, 0.3);
        }
        .hik-hero-btn:hover {
          background-color: #b71c1c;
          transform: translateY(-1px);
        }

        /* 2. SUBNAV BAR (BREADCRUMB & CATEGORY QUICK LINKS) */
        .hik-subnav-bar {
          background-color: #ffffff;
          border-bottom: 1px solid #e5e5e5;
          padding: 14px 0;
          margin-bottom: 30px;
        }

        .hik-subnav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
        }

        .subnav-left {
          display: flex;
          align-items: center;
          gap: 28px;
          flex-wrap: wrap;
        }

        .subnav-brand-title {
          font-size: 15px;
          font-weight: 700;
          color: #1a1a1a;
        }

        .subnav-links {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .subnav-link-btn {
          background: none;
          border: none;
          color: #555555;
          font-size: 13px;
          padding: 0;
          cursor: pointer;
          text-decoration: none;
          transition: color 0.15s ease;
        }
        .subnav-link-btn:hover {
          color: #d32f2f;
        }
        .subnav-link-btn.active {
          color: #d32f2f;
          font-weight: 600;
        }

        .catalog-breadcrumbs {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
        }
        .bc-item {
          color: #777777;
          text-decoration: none;
          transition: color 0.15s;
        }
        .bc-item:hover {
          color: #d32f2f;
        }
        .bc-item.active {
          color: #222222;
          font-weight: 500;
        }
        .bc-sep {
          color: #aaaaaa;
        }

        /* 3. MAIN TWO-COLUMN LAYOUT */
        .catalog-layout {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 48px;
          align-items: start;
        }

        @media (max-width: 960px) {
          .catalog-layout {
            grid-template-columns: 1fr;
            gap: 24px;
          }
        }

        /* LEFT SIDEBAR */
        .catalog-sidebar {
          width: 100%;
        }

        .sidebar-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 18px;
        }

        .sidebar-title {
          font-size: 20px;
          font-weight: 700;
          color: #1a1a1a;
          margin: 0;
        }

        .sidebar-reset-btn {
          border: 1px solid #d2d2d7;
          background: #ffffff;
          color: #444444;
          font-size: 13px;
          padding: 4px 16px;
          border-radius: 16px;
          cursor: pointer;
          transition: all 0.15s ease;
        }
        .sidebar-reset-btn:hover {
          background: #f7f7f8;
          border-color: #999999;
          color: #111111;
        }

        /* SEARCH INPUT */
        .sidebar-search-box {
          position: relative;
          margin-bottom: 20px;
        }
        .sidebar-search-input {
          width: 100%;
          box-sizing: border-box;
          height: 38px;
          padding: 0 36px 0 12px;
          border: 1px solid #dcdcdc;
          border-radius: 20px;
          font-size: 13px;
          color: #333333;
          outline: none;
          background-color: #ffffff;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .sidebar-search-input:focus {
          border-color: #777777;
        }
        .sidebar-search-input::placeholder {
          color: #999999;
          font-size: 13px;
        }
        .sidebar-search-icon {
          position: absolute;
          right: 12px;
          top: 50%;
          transform: translateY(-50%);
          color: #444444;
          pointer-events: none;
        }

        /* ACCORDION FILTERS */
        .sidebar-filters-accordion {
          border-top: 1px solid #eeeeee;
        }

        .filter-accordion-item {
          border-bottom: 1px solid #eeeeee;
        }

        .filter-accordion-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 15px 0;
          cursor: pointer;
          user-select: none;
        }

        .filter-title {
          font-size: 14px;
          font-weight: 600;
          color: #222222;
        }

        .filter-toggle-icon {
          color: #222222;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .filter-accordion-body {
          padding-bottom: 16px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        /* CUSTOM RADIO */
        .radio-option {
          display: flex;
          align-items: center;
          gap: 10px;
          cursor: pointer;
          user-select: none;
          font-size: 13px;
          color: #333333;
        }
        .custom-radio {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          border: 1px solid #b5b5b5;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: all 0.15s ease;
          background: #ffffff;
          flex-shrink: 0;
        }
        .custom-radio.checked {
          border-color: #333333;
          background-color: #ffffff;
        }
        .custom-radio.checked::after {
          content: "";
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #333333;
        }

        /* CUSTOM CHECKBOX */
        .checkbox-option {
          display: flex;
          align-items: center;
          gap: 10px;
          cursor: pointer;
          user-select: none;
          font-size: 13px;
          color: #333333;
        }
        .custom-checkbox {
          width: 16px;
          height: 16px;
          border: 1px solid #b5b5b5;
          border-radius: 2px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: #ffffff;
          color: #ffffff;
          flex-shrink: 0;
          transition: all 0.15s ease;
        }
        .custom-checkbox.checked {
          background-color: #333333;
          border-color: #333333;
        }
        .option-label {
          font-size: 13px;
          line-height: 1.4;
          color: #333333;
        }

        /* RIGHT CONTENT */
        .catalog-content {
          min-width: 0;
        }

        .catalog-results-header {
          margin-bottom: 20px;
        }

        .matches-count-text {
          font-size: 18px;
          font-weight: 600;
          color: #1a1a1a;
          margin: 0;
        }

        /* PRODUCT GRID */
        .catalog-product-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        @media (max-width: 1200px) {
          .catalog-product-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 600px) {
          .catalog-product-grid {
            grid-template-columns: 1fr;
          }
        }

        /* PRODUCT CARD */
        .hik-product-card {
          background: #ffffff;
          border: 1px solid #eaeaea;
          box-sizing: border-box;
          padding: 18px 20px;
          display: flex;
          flex-direction: column;
          position: relative;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }
        .hik-product-card:hover {
          border-color: #cccccc;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.05);
        }

        /* NEW BADGE */
        .card-top-row {
          min-height: 20px;
          margin-bottom: 4px;
        }
        .badge-new-text {
          color: #d32f2f;
          font-weight: 700;
          font-style: italic;
          font-size: 12px;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }

        /* PRODUCT IMAGE */
        .card-image-link {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 180px;
          text-decoration: none;
          margin-bottom: 12px;
          background: #ffffff;
        }
        .card-prod-image {
          max-height: 160px;
          max-width: 100%;
          object-fit: contain;
          transition: transform 0.25s ease;
        }
        .hik-product-card:hover .card-prod-image {
          transform: scale(1.03);
        }

        /* PRODUCT MODEL TITLE */
        .card-model-link {
          text-decoration: none;
          display: block;
          margin-bottom: 6px;
        }
        .card-model-title {
          font-size: 14px;
          font-weight: 700;
          color: #1a1a1a;
          margin: 0;
          line-height: 1.35;
          transition: color 0.15s ease;
        }
        .card-model-link:hover .card-model-title {
          color: #d32f2f;
        }

        /* SUBTITLE */
        .card-sub-description {
          font-size: 12px;
          color: #666666;
          line-height: 1.45;
          margin: 0 0 16px 0;
          flex-grow: 1;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* COMPARE CHECKBOX FOOTER */
        .card-compare-footer {
          border-top: 1px solid #f6f6f6;
          padding-top: 12px;
          margin-top: auto;
        }
        .compare-checkbox-label {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          user-select: none;
        }
        .custom-checkbox-compare {
          width: 15px;
          height: 15px;
          border: 1px solid #b5b5b5;
          border-radius: 2px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: #ffffff;
          color: #ffffff;
          transition: all 0.15s ease;
        }
        .custom-checkbox-compare.checked {
          background-color: #333333;
          border-color: #333333;
        }
        .compare-text {
          font-size: 12px;
          color: #444444;
          font-weight: 400;
        }

        /* NO RESULTS */
        .catalog-no-results {
          background: #fafafa;
          border: 1px dashed #e0e0e0;
          border-radius: 8px;
          padding: 60px 20px;
          text-align: center;
          color: #666666;
        }
        .no-results-icon {
          color: #999999;
          margin-bottom: 16px;
        }
        .no-results-reset-btn {
          margin-top: 18px;
          padding: 8px 24px;
          border-radius: 20px;
          background: #333333;
          color: #ffffff;
          border: none;
          font-size: 13px;
          cursor: pointer;
        }

        /* FLOATING COMPARE BAR (HIKVISION 4-SLOT STYLE) */
        .hik-compare-bar-wrap {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: #ffffff;
          border-top: 1px solid #e0e0e0;
          box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.08);
          padding: 12px 24px;
          animation: slideUpHikBar 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }
        @keyframes slideUpHikBar {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }
        .hik-compare-bar {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }
        .hik-compare-close-btn {
          background: transparent;
          border: none;
          color: #888888;
          cursor: pointer;
          padding: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: color 0.15s;
        }
        .hik-compare-close-btn:hover {
          color: #222222;
        }
        .hik-compare-slots {
          display: flex;
          align-items: center;
          gap: 14px;
          flex: 1;
          justify-content: center;
        }
        .hik-compare-slot {
          width: 135px;
          height: 88px;
          border-radius: 4px;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          position: relative;
        }
        .hik-compare-slot.empty {
          border: 1px solid #e2e2e2;
          background-color: #ffffff;
        }
        .slot-empty-text {
          font-size: 11px;
          color: #a0a0a0;
          font-weight: 400;
        }
        .hik-compare-slot.filled {
          border: 1px solid #e0e0e0;
          background-color: #ffffff;
          padding: 5px 8px;
          justify-content: space-between;
        }
        .slot-img-wrap {
          position: relative;
          width: 100%;
          height: 52px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .slot-img {
          max-height: 48px;
          max-width: 80px;
          object-fit: contain;
        }
        .slot-remove-btn {
          position: absolute;
          top: -2px;
          right: -2px;
          width: 16px;
          height: 16px;
          border: none;
          background: #ebebeb;
          color: #666666;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.15s;
        }
        .slot-remove-btn:hover {
          background: #d32f2f;
          color: #ffffff;
        }
        .slot-model-label {
          font-size: 10px;
          font-weight: 600;
          color: #222222;
          max-width: 120px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          line-height: 1.2;
          margin-top: 2px;
        }
        .hik-compare-actions {
          display: flex;
          align-items: center;
          gap: 14px;
        }
        .hik-compare-clear-btn {
          background: #ffffff;
          border: 1px solid #d2d2d7;
          color: #444444;
          font-size: 12px;
          font-weight: 500;
          padding: 6px 18px;
          border-radius: 18px;
          cursor: pointer;
          transition: all 0.15s;
        }
        .hik-compare-clear-btn:hover {
          background: #f5f5f7;
          color: #111111;
        }
        .hik-compare-launch-btn {
          background: #d32f2f;
          color: #ffffff;
          font-size: 13px;
          font-weight: 600;
          padding: 7px 20px;
          border-radius: 20px;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: background 0.15s ease;
        }
        .hik-compare-launch-btn:hover {
          background: #b71c1c;
        }
        .compare-badge-num {
          background: #ffffff;
          color: #d32f2f;
          font-size: 11px;
          font-weight: 700;
          border-radius: 10px;
          padding: 1px 6px;
        }
      `}</style>
    </div>
  );
}
