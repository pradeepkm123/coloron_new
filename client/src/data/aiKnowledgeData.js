import { defaultProducts } from './productsData.js';
import { defaultFaqs, defaultDownloads } from './supportData.js';

export const companyKnowledge = {
  name: "COLOR ON Vision",
  brand: "COLOR ON",
  tagline: "Pro Vision. In Every Light.",
  description: "Coloron Vision is an Apple-aesthetic professional AIoT video surveillance and optical security systems manufacturer and solutions provider. Delivering next-generation 4K ultra-low-light IP cameras, continuous 360° PTZ speed domes, enterprise RAID NVRs, radiometric thermal imaging, and biometric facial access terminals.",
  website: "https://coloron-new.onrender.com",
  certifications: [
    "NDAA Section 889 Compliant (100% free of high-risk chipset bans)",
    "ONVIF Profile S, Profile G, Profile T certified",
    "ISO 9001 Quality Management System certified",
    "CE, FCC, RoHS, IP67 Weatherproof, IK10 Vandal-Resistance certified"
  ],
  warranty: {
    cameras: "3-Year Commercial Manufacturer Warranty",
    recorders: "5-Year Enterprise NVR & Storage Warranty",
    support: "24/7 Firmware Hotfixes, Advance Hardware Replacement for Certified Partners"
  },
  keyTechnologies: [
    {
      name: "ColorSense 24/7 Full Color",
      details: "Combines super-large F1.0 apertures collecting 4x more ambient photons with 1/1.2-inch BSI CMOS sensors and deep-learning neural ISP processing, achieving vivid daytime color even down to 0.0003 Lux total darkness."
    },
    {
      name: "TurboVision Analog HD",
      details: "Transmits uncompressed 5MP and 4K ultra-high-definition video, telemetry control, and coaxial audio over existing standard RG59/RG6 coaxial cable up to 500 meters without replacing legacy wiring."
    },
    {
      name: "AI Deep Learning NPU",
      details: "On-chip 16 TOPS neural accelerator categorizes moving targets into humans and vehicles in real-time, eliminating up to 98% of nuisance false alarms caused by rain, swaying trees, and small animals."
    },
    {
      name: "Autonomous 3.0 PTZ Auto-Tracking",
      details: "36x optical zoom pan-tilt-zoom domes automatically lock on and track vehicles and persons smoothly across 360° endless rotation at speeds up to 400° per second."
    },
    {
      name: "Bi-Spectrum Radiometric Thermography",
      details: "Simultaneously pairs uncooled radiometric vanadium oxide thermal sensors (-20°C to 550°C) with 4K optical starlight sensors for early fire detection, overheat warning, and zero-visibility perimeter security."
    }
  ],
  contact: {
    sales: "sales@coloronvision.com",
    support: "support@coloronvision.com",
    inquiries: "+1 (800) 555-COLORON"
  }
};

export const solutionsKnowledge = [
  {
    slug: "apartments",
    title: "Apartment & Multi-Family Residential Solution",
    category: "Residential & Commercial",
    summary: "Complete perimeter-to-doorstep security featuring ColorSense low-light cameras, touchless facial recognition lobby intercoms, and vehicle license plate recognition entry gates.",
    recommendedProducts: ["Apex Dome X Pro", "Vertex Smart Intercom & Face Terminal", "Sentinel Bullet Ultra 4K"]
  },
  {
    slug: "factories",
    title: "Industrial Manufacturing & Factory Solution",
    category: "Industrial & Manufacturing",
    summary: "Comprehensive perimeter breach detection, assembly line AI visual inspection, employee safety PPE compliance monitoring, and thermal heat monitoring for transformer banks.",
    recommendedProducts: ["Sentinel Bullet Ultra 4K", "ThermoGuard Dual-Spectrum", "Quantum NVR 64-Channel AI"]
  },
  {
    slug: "urban-roadways",
    title: "Urban Roadways & Metropolitan Traffic Solution",
    category: "Smart City & Traffic",
    summary: "Precision traffic flow monitoring, illegal parking and wrong-way violation capture, intersection ANPR multi-lane plate reading, and incident detection.",
    recommendedProducts: ["Matrix PTZ Speed Dome 360", "Sentinel Bullet Ultra 4K"]
  },
  {
    slug: "offices",
    title: "Corporate Offices & Enterprise HQ Solution",
    category: "Commercial & Enterprise",
    summary: "Frictionless 0.2-second facial recognition turnstiles, visitor management badging kiosks, server room dual-factor biometric access, and conference room surveillance.",
    recommendedProducts: ["Vertex Smart Intercom & Face Terminal", "Lumina Turret Eye 5MP", "Quantum NVR 16-Channel PoE"]
  },
  {
    slug: "supermarkets",
    title: "Supermarkets & Retail Loss Prevention Solution",
    category: "Retail & Hospitality",
    summary: "POS cash register video overlay, AI customer foot-traffic heatmaps, aisle dwell-time analytics, and anti-shoplifting deterrence dome cameras.",
    recommendedProducts: ["Lumina Turret Eye 5MP", "Apex Dome X Pro", "Quantum NVR 16-Channel PoE"]
  },
  {
    slug: "highways",
    title: "Highways & Motorways Surveillance Solution",
    category: "Smart City & Infrastructure",
    summary: "Long-range highway corridor monitoring with radar speed measurement, vehicle make/color classification, and fog-penetrating thermal optics.",
    recommendedProducts: ["Matrix PTZ Speed Dome 360", "ThermoGuard Dual-Spectrum"]
  },
  {
    slug: "warehouses",
    title: "Logistics Hubs & Warehouses Solution",
    category: "Logistics & Supply Chain",
    summary: "High-bay narrow-aisle inventory surveillance, loading dock truck turnaround tracking, and visual barcode-linked parcel damage tracing.",
    recommendedProducts: ["Apex Dome X Pro", "Quantum NVR 64-Channel AI", "Sentinel Bullet Ultra 4K"]
  },
  {
    slug: "schools",
    title: "Schools & Educational Campuses Solution",
    category: "Education & Campus",
    summary: "Safe school campus perimeter fencing, automated student bus boarding attendance, anti-bullying restroom audio anomaly detection, and unified lockdown control.",
    recommendedProducts: ["Apex Dome X Pro", "Vertex Smart Intercom & Face Terminal"]
  },
  {
    slug: "solar-farms",
    title: "Solar Photovoltaic Farms Solution",
    category: "Energy & Utilities",
    summary: "Multi-kilometer perimeter thermal protection against metal theft, radiometric hot-spot detection for defective solar panels, and solar-powered autonomous PTZ domes.",
    recommendedProducts: ["ThermoGuard Dual-Spectrum", "Matrix PTZ Speed Dome 360"]
  },
  {
    slug: "electrical-substations",
    title: "Electrical Substations & Power Grid Solution",
    category: "Energy & Utilities",
    summary: "Continuous radiometric thermal monitoring of high-voltage transformers and switchgear to prevent catastrophic fire, combined with radar intrusion alerts.",
    recommendedProducts: ["ThermoGuard Dual-Spectrum", "Sentinel Bullet Ultra 4K"]
  },
  {
    slug: "parking-lots",
    title: "Commercial Parking Lots & Garages Solution",
    category: "Commercial & Traffic",
    summary: "Indoor parking space indicator cameras with integrated green/red vacancy LEDs, license plate entry/exit barrier control, and vehicle locator kiosks.",
    recommendedProducts: ["Sentinel Bullet Ultra 4K", "Apex Dome X Pro"]
  },
  {
    slug: "perimeter-protection",
    title: "Critical Infrastructure Perimeter Protection Solution",
    category: "High Security",
    summary: "Multi-layered perimeter defense fusing radar, thermal starlight imaging, virtual line tripwire alerts, and 110dB active deterrence strobes and sirens.",
    recommendedProducts: ["Sentinel Bullet Ultra 4K", "Matrix PTZ Speed Dome 360", "ThermoGuard Dual-Spectrum"]
  }
];

export const aiKnowledgePayload = {
  company: companyKnowledge,
  products: defaultProducts,
  solutions: solutionsKnowledge,
  faqs: defaultFaqs,
  downloads: defaultDownloads,
  generatedAt: new Date().toISOString()
};
