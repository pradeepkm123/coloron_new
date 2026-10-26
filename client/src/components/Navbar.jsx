import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Search, Menu, X, ArrowRight, ChevronDown } from 'lucide-react';
import coloronLogo from '../Assets/Image/coloron.png';
import productSelectorImg from '../Assets/Image/product_selector.jpg';
import guanlanAiBanner from '../Assets/Image/guanlan_ai_card.jpg';
import vehicleAccessImg from '../Assets/Image/vehicle_access.jpg';
import mobileAccessImg from '../Assets/Image/mobile_access.jpg';
import quickPassImg from '../Assets/Image/quick_pass.jpg';

const productMenuItems = {
  col1: [
    { name: 'Camera Products', path: '/products/category/camera-products' },
    { name: 'Video Recorders and Servers', path: '/products/category/video-recorders' },
    { name: 'Access Control', path: '/products/category/access-control' },
    { name: 'Video Intercom', path: '/products/category/video-intercom' },
    { name: 'Speed Gates and Turnstiles', path: '/products/category/speed-gates' },
    { name: 'Alarm', path: '/products/category/alarm' },
    { name: 'Interactive Flat Panel Displays', path: '/products/category/interactive-displays' },
    { name: 'LED Displays', path: '/products/category/led-displays' },
  ],
  col2: [
    { name: 'Display and Control', path: '/products/category/display-control' },
    { name: 'Networking', path: '/products/category/networking' },
    { name: 'Thermal', path: '/products/category/thermal' },
    { name: 'Parking Management', path: '/products/category/parking-management' },
    { name: 'Intelligent Traffic', path: '/products/category/intelligent-traffic' },
    { name: 'Portable Products', path: '/products/category/portable-products' },
    { name: 'Onboard Security', path: '/products/category/onboard-security' },
    { name: 'Security Inspection', path: '/products/category/security-inspection' },
  ],
  col3: [
    { name: 'Radar', path: '/products/category/radar' },
    { name: 'Premises Distribution System', path: '/products/category/premises-distribution' },
    { name: 'Fire Products', path: '/products/category/fire-products' },
    { name: 'Audio Products', path: '/products/category/audio-products' },
    { name: 'Sensing Products', path: '/products/category/sensing-products' },
    { name: 'HiLook', path: '/products/category/hilook' },
    { name: 'Software', path: '/products/category/software' },
  ],
};

const productSpotlights = [
  {
    id: 0,
    image: productSelectorImg,
    title: 'Product Selector',
    desc: 'Find the right Coloron products for your needs!',
    link: '/products',
  },
  {
    id: 1,
    image: vehicleAccessImg,
    title: 'CCTV Storage & Bandwidth Calculator',
    desc: 'Calculate precise storage requirements, disk space, and camera stream bandwidth.',
    link: '/quote-calculator',
  },
  {
    id: 2,
    image: guanlanAiBanner,
    title: 'Product Comparison Tool',
    desc: 'Compare camera models, lenses, sensors, and intelligent AI capabilities side-by-side.',
    link: '/compare',
  },
];

const solutionSpotlights = [
  {
    id: 0,
    image: vehicleAccessImg,
    title: 'Vehicle Access Control Management',
    desc: 'Streamline vehicle access with automatic license plate recognition and long-range UHF card technology...',
    link: '/solutions#vehicle-access',
  },
  {
    id: 1,
    image: mobileAccessImg,
    title: 'Mobile Access Control Solution',
    desc: "Enhance building security and convenience with Coloron's mobile credential solution.",
    link: '/solutions#mobile-access',
  },
  {
    id: 2,
    image: quickPassImg,
    title: 'Quick Pass for People & Vehicle Access Control',
    desc: "Coloron's complete people and vehicle access control management solution that delivers fast, seamless throughput.",
    link: '/solutions#quick-pass',
  },
];

const solutionsSidebarCategories = [
  'Education',
  'Energy',
  'Healthcare',
  'Logistics',
  'Manufacturing',
  'Public Transport',
  'Safe City',
  'Retail',
  'Traffic',
];

const solutionsViewBy = [
  {
    id: 'industry',
    title: 'Solutions by Industry',
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" />
      </svg>
    ),
  },
  {
    id: 'scenario',
    title: 'Solutions by Scenario',
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
      </svg>
    ),
  },
  {
    id: 'function',
    title: 'Solutions by Function',
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
  },
  {
    id: 'smb',
    title: 'SMB Solution',
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18M9 8h1M9 12h1M9 16h1M14 8h1M14 12h1M14 16h1M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16" />
      </svg>
    ),
  },
];

const solutionsData = {
  industry: {
    type: 'two_columns_plain',
    col1: [
      { name: 'Buildings', path: '/solutions#buildings' },
      { name: 'Education', path: '/solutions#education' },
      { name: 'Logistics', path: '/solutions#logistics' },
      { name: 'Mining', path: '/solutions#mining' },
      { name: 'Power & Utilities', path: '/solutions#power-utilities' },
      { name: 'Safe City', path: '/solutions#safe-city' },
      { name: 'Transit Bus', path: '/solutions#transit-bus' },
      { name: 'Food Processing', path: '/solutions#food-processing' },
    ],
    col2: [
      { name: 'Chemical Industry', path: '/solutions#chemical' },
      { name: 'Hospitals', path: '/solutions#hospitals' },
      { name: 'Industrial Park', path: '/solutions#industrial-park' },
      { name: 'Oil & Gas', path: '/solutions#oil-gas' },
      { name: 'Retail', path: '/solutions#retail' },
      { name: 'Traffic', path: '/solutions#traffic' },
      { name: 'Vehicle Manufacturing', path: '/solutions#vehicle-manufacturing' },
      { name: 'Electronics Manufacturing', path: '/solutions#electronics-manufacturing' },
    ],
  },
  Energy: {
    type: 'sections',
    col1: [
      {
        heading: 'Solutions by Industry',
        items: [
          { name: 'Mining', path: '/solutions#mining' },
          { name: 'Oil & Gas', path: '/solutions#oil-gas' },
          { name: 'Power-Utilities', path: '/solutions#power-utilities' },
        ],
      },
      {
        heading: 'Solutions by Function',
        items: [
          { name: 'Intelligent Inspection', path: '/solutions/intelligent-inspection' },
          { name: 'Industrial Thermography', path: '/solutions/industrial-thermography' },
          { name: 'Access Control', path: '/solutions#access-control' },
          { name: 'Entrance & Exit Management', path: '/solutions#entrance-exit' },
          { name: 'Perimeter Protection', hot: true, path: '/solutions/perimeter-protection' },
          { name: 'Integrated Solar Powered Security', path: '/solutions#solar-security' },
        ],
      },
    ],
    col2: [
      {
        heading: 'Solutions by Scenario',
        items: [
          { name: 'Onshore Oilfields', path: '/solutions/onshore-oilfields' },
          { name: 'Offshore Oil Platform', path: '/solutions/offshore-oil-platform' },
          { name: 'Pipeline Inspection', path: '/solutions/pipeline-inspection' },
          { name: 'Solar Farms', path: '/solutions/solar-farms' },
          { name: 'Hydroelectric Power Plants', path: '/solutions/hydroelectric-power-plants' },
          { name: 'Electrical Substations', path: '/solutions/electrical-substations' },
          { name: 'Transmission Line Inspection', path: '/solutions/transmission-line-inspection' },
        ],
      },
    ],
  },
  Healthcare: {
    type: 'sections',
    col1: [
      {
        heading: 'Solutions by Industry',
        items: [
          { name: 'Hospitals', path: '/solutions#hospitals' },
        ],
      },
    ],
    col2: [
      {
        heading: 'Solutions by Function',
        items: [
          { name: 'Radar Sensor-based Care', path: '/solutions#radar-care' },
        ],
      },
    ],
  },
  Logistics: {
    type: 'sections',
    col1: [
      {
        heading: 'Solutions by Industry',
        items: [
          { name: 'Logistics', path: '/solutions#logistics' },
        ],
      },
      {
        heading: 'Solutions by Scenario',
        items: [
          { name: 'Warehouses', path: '/solutions/warehouses' },
        ],
      },
    ],
    col2: [
      {
        heading: 'Solutions by Function',
        items: [
          { name: 'Line Haul Management', path: '/solutions/line-haul-management' },
          { name: 'Parcel Tracking', path: '/solutions/visual-parcel-tracking' },
          { name: 'Dock Management', path: '/solutions/dock-management' },
          { name: 'Access Control', path: '/solutions/access-control' },
          { name: 'Entrance & Exit Management', path: '/solutions/entrance-exit' },
          { name: 'Perimeter Protection', hot: true, path: '/solutions/perimeter-protection' },
          { name: 'Time Attendance', path: '/solutions/time-attendance' },
          { name: 'Visitor Management', path: '/solutions/visitor-management' },
        ],
      },
    ],
  },
  Manufacturing: {
    type: 'sections',
    col1: [
      {
        heading: 'Solutions by Industry',
        items: [
          { name: 'Industrial Park', path: '/solutions#industrial-park' },
          { name: 'Chemical Industry', path: '/solutions#chemical' },
          { name: 'Vehicle Manufacturing', path: '/solutions#vehicle-manufacturing' },
          { name: 'Food Processing', path: '/solutions#food-processing' },
          { name: 'Electronics Manufacturing', path: '/solutions#electronics-manufacturing' },
        ],
      },
      {
        heading: 'Solutions by Scenario',
        items: [
          { name: 'Factories', path: '/solutions#factories' },
        ],
      },
    ],
    col2: [
      {
        heading: 'Solutions by Function',
        items: [
          { name: 'AR Live Interaction', path: '/solutions#ar-live' },
          { name: 'Industrial Thermography', path: '/solutions/industrial-thermography' },
          { name: 'Intelligent Inspection', path: '/solutions/intelligent-inspection' },
          { name: 'Access Control', path: '/solutions#access-control' },
          { name: 'Dock Management', path: '/solutions/dock-management' },
          { name: 'Entrance & Exit Management', path: '/solutions#entrance-exit' },
          { name: 'Perimeter Protection', hot: true, path: '/solutions/perimeter-protection' },
          { name: 'Integrated Solar Powered Security', path: '/solutions#solar-security' },
        ],
      },
    ],
  },
  Education: {
    type: 'sections',
    col1: [
      {
        heading: 'Solutions by Scenario',
        items: [
          { name: 'Classroom Hub', path: '/solutions#classroom-hub' },
          { name: 'Schools', path: '/solutions#schools' },
        ],
      },
    ],
    col2: [
      {
        heading: 'Solutions by Function',
        items: [
          { name: 'Course Recording', path: '/solutions#course-recording' },
          { name: 'Distance Learning', path: '/solutions/distance-learning' },
          { name: 'Student Attendance', path: '/solutions/student-attendance' },
          { name: 'Student Pick-Up', path: '/solutions#student-pickup' },
          { name: 'Remote Classroom Inspection', path: '/solutions/remote-classroom-inspection' },
        ],
      },
    ],
  },
  'Public Transport': {
    type: 'sections',
    col1: [
      {
        heading: 'Solutions by Industry',
        items: [
          { name: 'Transit Bus', path: '/solutions#transit-bus' },
        ],
      },
      {
        heading: 'Solutions by Scenario',
        items: [
          { name: 'Bus Stop', path: '/solutions/bus-stop' },
          { name: 'Transit Bus On-board', path: '/solutions/transit-bus-onboard' },
        ],
      },
    ],
    col2: [
      {
        heading: 'Solutions by Function',
        items: [
          { name: 'Advanced Driving Assistance', path: '/solutions#adas' },
          { name: 'Onboard Passenger Counting', path: '/solutions#passenger-counting' },
          { name: 'GNSS Vehicle Trajectory Management', path: '/solutions#gnss-trajectory' },
        ],
      },
    ],
  },
  'Safe City': {
    type: 'sections',
    col1: [
      {
        heading: 'Solutions by Industry',
        items: [
          { name: 'Safe City', path: '/solutions#safe-city' },
        ],
      },
    ],
    col2: [
      {
        heading: 'Solutions by Function',
        items: [
          { name: 'Integrated Solar Powered Security', path: '/solutions#solar-security' },
        ],
      },
    ],
  },
  Retail: {
    type: 'sections',
    col1: [
      {
        heading: 'Solutions by Industry',
        items: [
          { name: 'Retail', path: '/solutions#retail' },
        ],
      },
      {
        heading: 'Solutions by Scenario',
        items: [
          { name: 'Supermarkets', path: '/solutions/supermarkets' },
          { name: 'Shopping Malls', path: '/solutions/shopping-malls' },
          { name: 'Parking Lots', path: '/solutions#parking-lots' },
          { name: 'Car Dealerships', path: '/solutions/car-dealerships' },
          { name: 'Gas Stations', path: '/solutions/gas-stations' },
        ],
      },
    ],
    col2: [
      {
        heading: 'Solutions by Function',
        items: [
          { name: 'Remote Audit', path: '/solutions#remote-audit' },
          { name: 'Access Control', path: '/solutions#access-control' },
          { name: 'Entrance & Exit Management', path: '/solutions#entrance-exit' },
          { name: 'People Counting', path: '/solutions#people-counting' },
        ],
      },
    ],
  },
  Traffic: {
    type: 'sections',
    col1: [
      {
        heading: 'Solutions by Industry',
        items: [
          { name: 'Traffic', path: '/solutions#traffic' },
        ],
      },
      {
        heading: 'Solutions by Scenario',
        items: [
          { name: 'Highways', path: '/solutions/highways' },
          { name: 'Urban Roadways', path: '/solutions/urban-roadways' },
        ],
      },
    ],
    col2: [
      {
        heading: 'Solutions by Function',
        items: [
          { name: 'Speed Measurement', path: '/solutions/speed-measurement' },
          { name: 'Violation Detection', path: '/solutions/violation-detection' },
          { name: 'Vehicle Information Detection', path: '/solutions/vehicle-information-detection' },
          { name: 'Incident Detection', path: '/solutions/incident-detection' },
          { name: 'Portable Enforcement', path: '/solutions/portable-enforcement' },
          { name: 'Integrated Solar Powered Security', path: '/solutions#solar-security' },
        ],
      },
    ],
  },
  scenario: {
    type: 'two_columns_plain',
    col1: [
      { name: 'Apartments', path: '/solutions/apartments' },
      { name: 'Car Dealerships', path: '/solutions/car-dealerships' },
      { name: 'Conference Rooms', path: '/solutions/conference-rooms' },
      { name: 'Electrical Substations', path: '/solutions/electrical-substations' },
      { name: 'Supermarkets', path: '/solutions/supermarkets' },
      { name: 'Highways', path: '/solutions/highways' },
      { name: 'Monitoring Center', path: '/solutions/monitoring-center' },
      { name: 'Parking Lots', path: '/solutions/parking-lots' },
      { name: 'Shopping Malls', path: '/solutions/shopping-malls' },
      { name: 'Urban Roadways', path: '/solutions/urban-roadways' },
      { name: 'Onshore Oilfields', path: '/solutions/onshore-oilfields' },
      { name: 'Transmission Line Inspection', path: '/solutions/transmission-line-inspection' },
      { name: 'Solar Farms', path: '/solutions/solar-farms' },
    ],
    col2: [
      { name: 'Bus Stop', path: '/solutions/bus-stop' },
      { name: 'Classroom Hub', path: '/solutions/classroom-hub' },
      { name: 'Construction Site', path: '/solutions/construction-site' },
      { name: 'Factories', path: '/solutions/factories' },
      { name: 'Gas Stations', path: '/solutions/gas-stations' },
      { name: 'Hotels', path: '/solutions/hotels' },
      { name: 'Office Buildings', path: '/solutions/offices' },
      { name: 'Schools', path: '/solutions/schools' },
      { name: 'Transit Bus On-board', path: '/solutions/transit-bus-onboard' },
      { name: 'Warehouses', path: '/solutions/warehouses' },
      { name: 'Offshore Oil Platform', path: '/solutions/offshore-oil-platform' },
      { name: 'Pipeline Inspection', path: '/solutions/pipeline-inspection' },
      { name: 'Hydroelectric Power Plants', path: '/solutions/hydroelectric-power-plants' },
    ],
  },
  function: {
    type: 'two_columns_plain',
    col1: [
      { name: 'Industrial Digital Transformation Solutions', isNew: true, path: '/solutions#digital-transformation' },
      { name: 'Mobile Access Control Solution', isNew: true, path: '/solutions#mobile-access' },
      { name: 'Access Control', path: '/solutions/access-control' },
      { name: 'Course Recording', path: '/solutions#course-recording' },
      { name: 'Dock Management', path: '/solutions/dock-management' },
      { name: 'Incident Detection', path: '/solutions/incident-detection' },
      { name: 'Remote Audit', path: '/solutions#remote-audit' },
      { name: 'Integrated Solar-Powered Security', path: '/solutions#solar-security' },
      { name: 'Line haul management', path: '/solutions/line-haul-management' },
      { name: 'People Counting', path: '/solutions/people-counting' },
      { name: 'Portable Enforcement', path: '/solutions/portable-enforcement' },
      { name: 'Remote Classroom Inspection', path: '/solutions#remote-classroom' },
      { name: 'Student Attendance', path: '/solutions/student-attendance' },
      { name: 'Vehicle Access Control Management', isNew: true, path: '/solutions#vehicle-access' },
      { name: 'Vehicle Information Detection', path: '/solutions/vehicle-information-detection' },
      { name: 'Visitor Management', path: '/solutions/visitor-management' },
      { name: 'GNSS Vehicle Trajectory Management', path: '/solutions#gnss-trajectory' },
    ],
    col2: [
      { name: 'Quick Pass for People & Vehicle Access Control', isNew: true, path: '/solutions#quick-pass' },
      { name: 'Advanced Driving Assistance', path: '/solutions/advanced-driving-assistance' },
      { name: 'AR Live Interaction', path: '/solutions#ar-live' },
      { name: 'Distance Learning', path: '/solutions/distance-learning' },
      { name: 'Entrance & Exit Management', path: '/solutions/entrance-exit' },
      { name: 'Industrial Thermography', path: '/solutions/industrial-thermography' },
      { name: 'Information Display', path: '/solutions/information-display' },
      { name: 'Intelligent Inspection', path: '/solutions/intelligent-inspection' },
      { name: 'Parcel Tracking', path: '/solutions/visual-parcel-tracking' },
      { name: 'Perimeter Protection', hot: true, path: '/solutions/perimeter-protection' },
      { name: 'Radar Sensor-based Care', path: '/solutions#radar-care' },
      { name: 'Speed Measurement', path: '/solutions/speed-measurement' },
      { name: 'Time & Attendance', path: '/solutions/time-attendance' },
      { name: 'Visual Parcel Tracking', isNew: true, path: '/solutions/visual-parcel-tracking' },
      { name: 'Violation Detection', path: '/solutions/violation-detection' },
      { name: 'Onboard Passenger Counting', path: '/solutions#passenger-counting' },
      { name: 'Student Pick-Up', path: '/solutions#student-pickup' },
    ],
  },
  smb: {
    type: 'two_columns_plain',
    col1: [
      { name: 'Offices', path: '/solutions/offices' },
      { name: 'Villas', path: '/solutions#smb-villas' },
      { name: 'Shops', hot: true, path: '/solutions#smb-shops' },
      { name: 'Quick Pass for People & Vehicle Access Control', isNew: true, path: '/solutions#quick-pass' },
    ],
    col2: [
      { name: 'Stores', path: '/solutions/supermarkets' },
      { name: 'Farms', path: '/solutions#smb-farms' },
      { name: 'Condominiums', isNew: true, path: '/solutions#smb-condominiums' },
      { name: 'SMB Converged Solutions', isNew: true, path: '/solutions#smb-converged' },
    ],
  },
};

const techMenuItems = [
  {
    title: 'Light Explorer Expert',
    desc: 'C4 & E4H Series with F/1.0 Super Aperture and 24/7 ColorSense optics...',
    path: '/technologies?tech=light-explorer-expert',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="5" />
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
      </svg>
    ),
  },
  {
    title: 'Light Explorer',
    desc: 'Full-time vivid color surveillance for commercial & residential...',
    path: '/technologies?tech=light-explorer',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
        <circle cx="12" cy="13" r="4" />
      </svg>
    ),
  },
  {
    title: 'Solar-powered 4G Series',
    desc: 'Autonomous zero-cable surveillance with 4G wireless cellular...',
    path: '/technologies?tech=solar-powered-4g',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
      </svg>
    ),
  },
  {
    title: 'Multi Sensor',
    desc: 'TandemVu dual lens panoramic overview & precision tracking...',
    path: '/technologies?tech=multi-sensor',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
  },
  {
    title: 'Intercom',
    desc: 'High-definition IP two-way audiovisual access & mobile entry...',
    path: '/technologies?tech=intercom',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    title: 'Thermal Cameras',
    desc: 'Bi-spectrum infrared heat detection and 3km perimeter defense...',
    path: '/technologies?tech=thermal-cameras',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" />
        <circle cx="11.5" cy="17.5" r="2" fill="currentColor" />
        <path d="M17 6c1 .8 1.5 1.8 1.5 3s-.5 2.2-1.5 3M20 4c1.8 1.5 2.5 3.2 2.5 5s-.7 3.5-2.5 5" />
      </svg>
    ),
  },
  {
    title: 'Guanlan Encoding',
    desc: 'AI-powered video compression cutting storage costs up to 75%...',
    path: '/technologies?tech=guanlan-encoding',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="15" rx="3" />
        <circle cx="8" cy="11.5" r="2.5" />
        <circle cx="16" cy="11.5" r="2.5" />
        <path d="M8 14h8" />
        <path d="M10 4V2m4 2V2" />
        <path d="M5 22h14" />
      </svg>
    ),
  },
  {
    title: 'See Clearer Technology',
    desc: '140dB Super WDR with quad-exposure true sensor synthesis...',
    path: '/technologies?tech=see-clearer',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <circle cx="12" cy="12" r="4.5" />
        <circle cx="12" cy="12" r="1.5" />
        <path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3" />
      </svg>
    ),
  },
  {
    title: 'See Smarter Technology',
    desc: 'DeepinMind neural edge AI classification & false alarm filtering...',
    path: '/technologies?tech=see-smarter',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a5 5 0 0 1 5 5c0 1.9-.9 3.5-2.2 4.4.8.8 1.2 1.8 1.2 2.6 0 1.5-1 2.8-2.5 3.3V22h-3v-4.7C9 16.8 8 15.5 8 14c0-.8.4-1.8 1.2-2.6C7.9 10.5 7 8.9 7 7a5 5 0 0 1 5-5z" />
        <circle cx="12" cy="7" r="1.5" fill="currentColor" />
        <path d="M2 10h3M19 10h3M4 5l3 2M17 7l3-2M4 17l3-2M17 15l3 2" />
      </svg>
    ),
  },
  {
    title: 'See Vaster Technology',
    desc: 'High-speed 360° optical zoom & intelligent auto-tracking...',
    path: '/technologies?tech=see-vaster',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="6" width="20" height="12" rx="3" />
        <text x="4.5" y="14.5" fontSize="6.5" fontWeight="bold" fill="currentColor" stroke="none">360°</text>
        <path d="M1 12h1M22 12h1M12 1v1M12 22v1" />
        <circle cx="17.5" cy="12" r="2.5" />
      </svg>
    ),
  },
  {
    title: 'See More in Demanding Scenarios',
    desc: 'Marine-grade 316L anti-corrosion & explosion-proof ATEX...',
    path: '/technologies?tech=see-more-demanding',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
        <circle cx="12" cy="14" r="3" />
        <path d="M12 9v2M12 16v1M9.5 14h-1M15.5 14h-1" />
      </svg>
    ),
  },
  {
    title: 'Radar Technology',
    desc: 'All-weather 60GHz millimeter-wave active target tracking...',
    path: '/technologies?tech=radar-technology',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="5" cy="19" r="2" fill="currentColor" />
        <path d="M5 13a6 6 0 0 1 6 6" />
        <path d="M5 8a11 11 0 0 1 11 11" />
        <path d="M5 3a16 16 0 0 1 16 16" />
        <path d="M5 19l8-8" />
      </svg>
    ),
  },
  {
    title: 'Security Inspection Technology',
    desc: 'AI baggage X-ray threat detection & walk-through smart gates...',
    path: '/technologies?tech=security-inspection',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    title: 'Audio Technology',
    desc: 'Directional acoustic beamforming & sound event recognition...',
    path: '/technologies?tech=audio-technology',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
      </svg>
    ),
  },
  {
    title: 'Storage and Bandwidth',
    desc: '800m ePoE long-distance transmission & enterprise RAID NVR...',
    path: '/technologies?tech=storage-bandwidth',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="22" y1="12" x2="2" y2="12" />
        <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
        <line x1="6" y1="16" x2="6.01" y2="16" />
        <line x1="10" y1="16" x2="10.01" y2="16" />
      </svg>
    ),
  },
  {
    title: 'EaseEngine',
    desc: 'Cloud-native AIoT device orchestration & zero-touch onboarding...',
    path: '/technologies?tech=ease-engine',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
  },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSolutionTab, setActiveSolutionTab] = useState('industry');
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [activeProductSlideIndex, setActiveProductSlideIndex] = useState(0);
  const [mobileExpandedSection, setMobileExpandedSection] = useState(null);
  const dropdownTimerRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMobileSection = (section) => {
    setMobileExpandedSection((prev) => (prev === section ? null : section));
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Carousel auto-slide for Solutions dropdown
  useEffect(() => {
    if (activeDropdown === 'Solutions') {
      const timer = setInterval(() => {
        setActiveSlideIndex((prev) => (prev + 1) % solutionSpotlights.length);
      }, 4500);
      return () => clearInterval(timer);
    }
  }, [activeDropdown]);

  // Carousel auto-slide for Products dropdown
  useEffect(() => {
    if (activeDropdown === 'Products') {
      const timer = setInterval(() => {
        setActiveProductSlideIndex((prev) => (prev + 1) % productSpotlights.length);
      }, 4500);
      return () => clearInterval(timer);
    }
  }, [activeDropdown]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setSearchOpen(false);
    setActiveDropdown(null);
    setMobileExpandedSection(null);
  }, [location]);

  const handleMouseEnter = (itemName) => {
    if (dropdownTimerRef.current) clearTimeout(dropdownTimerRef.current);
    if (itemName === 'Products' || itemName === 'Solutions' || itemName === 'Technologies') {
      setActiveDropdown(itemName);
    } else {
      setActiveDropdown(null);
    }
  };

  const handleMouseLeave = () => {
    dropdownTimerRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 180);
  };

  const handleDropdownEnter = () => {
    if (dropdownTimerRef.current) clearTimeout(dropdownTimerRef.current);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setSearchQuery('');
    }
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Technologies', path: '/technologies' },
    { name: 'About Us', path: '/about' },
  ];

  return (
    <>
      <header
        onMouseLeave={handleMouseLeave}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
          backgroundColor: isScrolled || activeDropdown ? 'rgba(255, 255, 255, 0.82)' : '#ffffff',
          backdropFilter: isScrolled || activeDropdown ? 'blur(20px) saturate(180%)' : 'none',
          WebkitBackdropFilter: isScrolled || activeDropdown ? 'blur(20px) saturate(180%)' : 'none',
          boxShadow: isScrolled || activeDropdown ? '0 4px 20px rgba(0, 0, 0, 0.06)' : 'none',
          borderBottom: isScrolled ? '1px solid rgba(0, 0, 0, 0.08)' : '1px solid transparent',
        }}
      >
        <div
          style={{
            maxWidth: '1360px',
            margin: '0 auto',
            padding: '0 24px',
            height: '64px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Brand Logo - Big & Prominent */}
          <Link
            to="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              padding: '4px 0',
            }}
          >
            <img
              src={coloronLogo}
              alt="Coloron Vision"
              style={{
                height: '52px',
                width: 'auto',
                maxWidth: '220px',
                objectFit: 'contain',
                display: 'block',
              }}
            />
          </Link>

          {/* Desktop Nav Items */}
          <nav
            style={{
              display: 'none',
              alignItems: 'center',
              gap: 'clamp(14px, 2.2vw, 36px)',
              height: '100%',
            }}
            className="desktop-nav"
          >
            {navLinks.map((item) => {
              const isActive = location.pathname === item.path;
              const isHovered = activeDropdown === item.name;
              const isHighlight = isHovered || isActive;
              const accentColor = '#0071e3';

              return (
                <div
                  key={item.name}
                  onMouseEnter={() => handleMouseEnter(item.name)}
                  style={{
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    position: 'relative',
                  }}
                >
                  <Link
                    to={item.path}
                    style={{
                      textDecoration: 'none',
                      fontSize: '0.92rem',
                      fontWeight: isHighlight ? 600 : 400,
                      color: isHighlight ? '#0071e3' : '#1d1d1f',
                      transition: 'color 0.2s ease',
                      padding: '8px 2px',
                      display: 'flex',
                      alignItems: 'center',
                      height: '100%',
                    }}
                  >
                    {item.name}
                  </Link>

                  {/* Active / Hover bottom blue bar indicator */}
                  {(isHovered || (isActive && !activeDropdown)) && (
                    <div
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: '-4px',
                        right: '-4px',
                        height: '2.5px',
                        backgroundColor: accentColor,
                        borderRadius: '2px 2px 0 0',
                        animation: 'fadeIn 0.2s ease',
                      }}
                    />
                  )}
                </div>
              );
            })}
          </nav>

          {/* Right Action Icons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              style={{
                background: 'none',
                border: 'none',
                color: '#515154',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                padding: '6px',
                borderRadius: '50%',
                transition: 'color 0.2s',
              }}
              title="Search Products"
            >
              <Search size={18} />
            </button>

            <Link
              to="/quote-calculator"
              className="btn-primary"
              style={{
                fontSize: '0.8rem',
                padding: '6px 16px',
                borderRadius: '9999px',
                height: '32px',
                display: 'none',
              }}
              id="header-quote-btn"
            >
              Get Quote
            </Link>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                background: 'none',
                border: 'none',
                color: '#1d1d1f',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                padding: '6px',
              }}
              className="mobile-trigger"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Apple Style Mega Menu Dropdown */}
        {activeDropdown && (
          <div
            onMouseEnter={handleDropdownEnter}
            onMouseLeave={handleMouseLeave}
            style={{
              position: 'absolute',
              top: '64px',
              left: 0,
              right: 0,
              backgroundColor: '#ffffff',
              borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
              padding: '36px 0 44px',
              animation: 'appleDropdownFade 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
              boxShadow: '0 30px 60px rgba(0, 0, 0, 0.12)',
              zIndex: 101,
            }}
          >
            {activeDropdown === 'Technologies' ? (
              <div
                style={{
                  maxWidth: '1360px',
                  margin: '0 auto',
                  padding: '0 32px',
                  display: 'grid',
                  gridTemplateColumns: 'minmax(0, 1fr) 280px',
                  gap: '36px',
                  alignItems: 'stretch',
                }}
              >
                {/* 3-Column Grid for 11 Technologies */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    columnGap: '24px',
                    rowGap: '16px',
                  }}
                >
                  {techMenuItems.map((item) => (
                    <Link
                      key={item.title}
                      to={item.path}
                      className="tech-menu-item"
                    >
                      <div className="tech-item-icon">
                        {item.icon}
                      </div>
                      <div style={{ minWidth: 0, flex: 1 }}>
                        <div className="tech-item-title">
                          {item.title}
                        </div>
                        <div className="tech-item-desc">
                          {item.desc}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

                {/* Right Spotlight Card */}
                <div
                  style={{
                    backgroundColor: '#f5f7fa',
                    borderRadius: '12px',
                    padding: '16px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    border: '1px solid rgba(0, 0, 0, 0.05)',
                  }}
                >
                  <div>
                    <div
                      style={{
                        borderRadius: '8px',
                        overflow: 'hidden',
                        marginBottom: '14px',
                        position: 'relative',
                        aspectRatio: '16 / 9',
                        backgroundColor: '#050c1e',
                      }}
                    >
                      <img
                        src="/images/core_tech_colorvu.jpg"
                        alt="Light Explorer Expert C4 Series"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          display: 'block',
                          transition: 'transform 0.4s ease',
                        }}
                        className="guanlan-card-img"
                      />
                    </div>
                    <h4
                      style={{
                        fontSize: '0.94rem',
                        fontWeight: 700,
                        color: '#1d1d1f',
                        marginBottom: '8px',
                        lineHeight: 1.3,
                      }}
                    >
                      Light Explorer Expert (C4 Series)
                    </h4>
                    <p
                      style={{
                        fontSize: '0.78rem',
                        color: '#666668',
                        lineHeight: 1.45,
                        margin: 0,
                      }}
                    >
                      Next-generation F/1.0 super aperture optical architecture and ColorSense 24/7 full-color imaging in ultra-low light.
                    </p>
                  </div>

                  <div style={{ marginTop: '16px', paddingTop: '8px' }}>
                    <Link
                      to="/technologies?tech=light-explorer-expert"
                      style={{
                        fontSize: '0.82rem',
                        fontWeight: 600,
                        color: '#0071e3',
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        transition: 'all 0.2s ease',
                      }}
                      className="view-all-tech-link"
                    >
                      Explore Key Technologies <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            ) : activeDropdown === 'Solutions' ? (
              <div
                style={{
                  maxWidth: '1360px',
                  margin: '0 auto',
                  padding: '0 32px',
                  display: 'grid',
                  gridTemplateColumns: '190px minmax(0, 1fr) 290px',
                  gap: '36px',
                  alignItems: 'stretch',
                }}
              >
                {/* Left Sidebar Tabs */}
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  {/* Top Industry List */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                    {solutionsSidebarCategories.map((cat) => {
                      const isTabActive = activeSolutionTab === cat;
                      return (
                        <button
                          key={cat}
                          type="button"
                          onMouseEnter={() => setActiveSolutionTab(cat)}
                          className={`solution-sidebar-btn ${isTabActive ? 'active' : ''}`}
                        >
                          {cat}
                        </button>
                      );
                    })}
                  </div>

                  {/* View by divider */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', margin: '14px 0 8px 10px', fontSize: '0.72rem', color: '#86868b' }}>
                    <span>View by</span>
                    <div style={{ flex: 1, height: '1px', backgroundColor: 'rgba(0,0,0,0.06)' }} />
                  </div>

                  {/* Bottom View by Tabs */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                    {solutionsViewBy.map((item) => {
                      const isTabActive = activeSolutionTab === item.id;
                      return (
                        <button
                          key={item.id}
                          type="button"
                          onMouseEnter={() => setActiveSolutionTab(item.id)}
                          className={`solution-sidebar-btn ${isTabActive ? 'active' : ''}`}
                          style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
                        >
                          <span style={{ display: 'flex', alignItems: 'center', opacity: isTabActive ? 1 : 0.7 }}>
                            {item.icon}
                          </span>
                          <span>{item.title}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Middle Dynamic Content Area */}
                <div style={{ paddingLeft: '8px' }}>
                  {(() => {
                    const curSolData = solutionsData[activeSolutionTab] || solutionsData.industry;
                    if (curSolData.type === 'two_columns_plain') {
                      return (
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', columnGap: '36px', rowGap: '6px' }}>
                          <div>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                              {curSolData.col1.map((link) => (
                                <li key={link.name}>
                                  <Link to={link.path} className="solution-link-item">
                                    {link.name}
                                    {link.hot && <span className="hot-tag">HOT</span>}
                                    {link.isNew && <span className="new-tag">NEW</span>}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                              {curSolData.col2.map((link) => (
                                <li key={link.name}>
                                  <Link to={link.path} className="solution-link-item">
                                    {link.name}
                                    {link.hot && <span className="hot-tag">HOT</span>}
                                    {link.isNew && <span className="new-tag">NEW</span>}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      );
                    }

                    return (
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', columnGap: '36px', rowGap: '16px' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                          {curSolData.col1?.map((sec, idx) => (
                            <div key={idx}>
                              <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#1d1d1f', marginBottom: '8px' }}>
                                {sec.heading}
                              </div>
                              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                                {sec.items?.map((link) => (
                                  <li key={link.name}>
                                    <Link to={link.path} className="solution-link-item">
                                      {link.name}
                                      {link.hot && <span className="hot-tag">HOT</span>}
                                      {link.isNew && <span className="new-tag">NEW</span>}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                          {curSolData.col2?.map((sec, idx) => (
                            <div key={idx}>
                              <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#1d1d1f', marginBottom: '8px' }}>
                                {sec.heading}
                              </div>
                              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                                {sec.items?.map((link) => (
                                  <li key={link.name}>
                                    <Link to={link.path} className="solution-link-item">
                                      {link.name}
                                      {link.hot && <span className="hot-tag">HOT</span>}
                                      {link.isNew && <span className="new-tag">NEW</span>}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })()}
                </div>

                {/* Right Spotlight Carousel */}
                {(() => {
                  const curSpot = solutionSpotlights[activeSlideIndex] || solutionSpotlights[0];
                  return (
                    <div
                      style={{
                        backgroundColor: '#f5f7fa',
                        borderRadius: '12px',
                        padding: '16px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        border: '1px solid rgba(0, 0, 0, 0.05)',
                        minHeight: '290px',
                      }}
                    >
                      <div>
                        <div
                          style={{
                            borderRadius: '8px',
                            overflow: 'hidden',
                            marginBottom: '14px',
                            position: 'relative',
                            aspectRatio: '16 / 9',
                            backgroundColor: '#050c1e',
                          }}
                        >
                          <img
                            src={curSpot.image}
                            alt={curSpot.title}
                            key={curSpot.id}
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                              display: 'block',
                              transition: 'transform 0.4s ease',
                              animation: 'fadeIn 0.3s ease',
                            }}
                            className="solution-spotlight-img"
                          />
                        </div>
                        <h4
                          style={{
                            fontSize: '0.94rem',
                            fontWeight: 700,
                            color: '#1d1d1f',
                            marginBottom: '8px',
                            lineHeight: 1.3,
                          }}
                        >
                          {curSpot.title}
                        </h4>
                        <p
                          style={{
                            fontSize: '0.78rem',
                            color: '#666668',
                            lineHeight: 1.45,
                            margin: 0,
                          }}
                        >
                          {curSpot.desc}
                        </p>
                      </div>

                      <div>
                        <div style={{ marginTop: '14px', paddingTop: '4px' }}>
                          <Link
                            to={curSpot.link}
                            style={{
                              fontSize: '0.82rem',
                              fontWeight: 600,
                              color: '#0071e3',
                              textDecoration: 'none',
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '6px',
                              transition: 'all 0.2s ease',
                            }}
                            className="view-all-tech-link"
                          >
                            View All <ArrowRight size={14} />
                          </Link>
                        </div>

                        {/* Carousel Pagination Bars / Dots */}
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginTop: '14px' }}>
                          {solutionSpotlights.map((spot, idx) => (
                            <button
                              key={spot.id}
                              onClick={() => setActiveSlideIndex(idx)}
                              style={{
                                height: '3px',
                                width: activeSlideIndex === idx ? '24px' : '16px',
                                backgroundColor: activeSlideIndex === idx ? '#1d1d1f' : '#d1d5db',
                                borderRadius: '2px',
                                border: 'none',
                                padding: 0,
                                cursor: 'pointer',
                                transition: 'all 0.25s ease',
                              }}
                              aria-label={`Slide ${idx + 1}`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </div>
            ) : (
              <div
                style={{
                  maxWidth: '1360px',
                  margin: '0 auto',
                  padding: '0 32px',
                  display: 'grid',
                  gridTemplateColumns: 'minmax(0, 1fr) 280px',
                  gap: '36px',
                  alignItems: 'stretch',
                }}
              >
                {/* 3 Columns for Product Categories */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    columnGap: '36px',
                    rowGap: '6px',
                  }}
                >
                  <div>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {productMenuItems.col1.map((item) => (
                        <li key={item.name}>
                          <Link to={item.path} className="solution-link-item" style={{ fontSize: '0.88rem', padding: '3px 0' }}>
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {productMenuItems.col2.map((item) => (
                        <li key={item.name}>
                          <Link to={item.path} className="solution-link-item" style={{ fontSize: '0.88rem', padding: '3px 0' }}>
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {productMenuItems.col3.map((item) => (
                        <li key={item.name}>
                          <Link to={item.path} className="solution-link-item" style={{ fontSize: '0.88rem', padding: '3px 0' }}>
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right Spotlight Card */}
                {(() => {
                  const curSpot = productSpotlights[activeProductSlideIndex] || productSpotlights[0];
                  return (
                    <div
                      style={{
                        backgroundColor: '#f5f7fa',
                        borderRadius: '12px',
                        padding: '16px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        border: '1px solid rgba(0, 0, 0, 0.05)',
                        minHeight: '290px',
                      }}
                    >
                      <div>
                        <div
                          style={{
                            borderRadius: '8px',
                            overflow: 'hidden',
                            marginBottom: '14px',
                            position: 'relative',
                            aspectRatio: '16 / 9',
                            backgroundColor: '#ffffff',
                            border: '1px solid rgba(0, 0, 0, 0.04)',
                          }}
                        >
                          <img
                            src={curSpot.image}
                            alt={curSpot.title}
                            key={curSpot.id}
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                              display: 'block',
                              transition: 'transform 0.4s ease',
                              animation: 'fadeIn 0.3s ease',
                            }}
                            className="solution-spotlight-img"
                          />
                        </div>
                        <h4
                          style={{
                            fontSize: '0.94rem',
                            fontWeight: 700,
                            color: '#1d1d1f',
                            marginBottom: '8px',
                            lineHeight: 1.3,
                          }}
                        >
                          {curSpot.title}
                        </h4>
                        <p
                          style={{
                            fontSize: '0.78rem',
                            color: '#666668',
                            lineHeight: 1.45,
                            margin: 0,
                          }}
                        >
                          {curSpot.desc}
                        </p>
                      </div>

                      <div>
                        <div style={{ marginTop: '14px', paddingTop: '4px' }}>
                          <Link
                            to={curSpot.link}
                            style={{
                              fontSize: '0.82rem',
                              fontWeight: 600,
                              color: '#0071e3',
                              textDecoration: 'none',
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '6px',
                              transition: 'all 0.2s ease',
                            }}
                            className="view-all-tech-link"
                          >
                            View All <ArrowRight size={14} />
                          </Link>
                        </div>

                        {/* Carousel Pagination Bars / Dots */}
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginTop: '14px' }}>
                          {productSpotlights.map((spot, idx) => (
                            <button
                              key={spot.id}
                              onClick={() => setActiveProductSlideIndex(idx)}
                              style={{
                                height: '3px',
                                width: activeProductSlideIndex === idx ? '24px' : '16px',
                                backgroundColor: activeProductSlideIndex === idx ? '#1d1d1f' : '#d1d5db',
                                borderRadius: '2px',
                                border: 'none',
                                padding: 0,
                                cursor: 'pointer',
                                transition: 'all 0.25s ease',
                              }}
                              aria-label={`Slide ${idx + 1}`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </div>
            )}
          </div>
        )}

        {/* Quick Search Drawer */}
        {searchOpen && (
          <div
            style={{
              padding: '16px 24px',
              borderTop: '1px solid rgba(0, 0, 0, 0.08)',
              background: '#ffffff',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
              animation: 'fadeIn 0.2s ease',
            }}
          >
            <form
              onSubmit={handleSearchSubmit}
              style={{
                maxWidth: '680px',
                margin: '0 auto',
                display: 'flex',
                gap: '12px',
                alignItems: 'center',
              }}
            >
              <Search size={20} color="#86868b" />
              <input
                type="text"
                autoFocus
                placeholder="Search 4K cameras, PTZ domes, AI NVRs, ColorSense optics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  flex: 1,
                  background: 'transparent',
                  border: 'none',
                  outline: 'none',
                  color: '#1d1d1f',
                  fontSize: '1rem',
                  fontFamily: 'inherit',
                }}
              />
              <button type="submit" className="btn-primary" style={{ padding: '6px 18px', fontSize: '0.85rem' }}>
                Search
              </button>
            </form>
          </div>
        )}

        {/* Mobile Dropdown Menu Drawer */}
        {mobileMenuOpen && (
          <div
            style={{
              position: 'fixed',
              top: '64px',
              left: 0,
              right: 0,
              bottom: 0,
              height: 'calc(100vh - 64px)',
              maxHeight: 'calc(100vh - 64px)',
              backgroundColor: '#ffffff',
              zIndex: 999,
              overflowY: 'auto',
              WebkitOverflowScrolling: 'touch',
              padding: '16px 20px 48px',
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
              animation: 'mobileDrawerSlide 0.22s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            {/* Integrated Mobile Search Bar */}
            <div style={{ marginBottom: '14px' }}>
              <form
                onSubmit={handleSearchSubmit}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  backgroundColor: '#f5f7fa',
                  padding: '10px 14px',
                  borderRadius: '12px',
                  border: '1px solid rgba(0, 0, 0, 0.06)',
                }}
              >
                <Search size={18} color="#86868b" />
                <input
                  type="text"
                  placeholder="Search cameras, NVRs, solutions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{
                    flex: 1,
                    background: 'transparent',
                    border: 'none',
                    outline: 'none',
                    fontSize: '0.94rem',
                    color: '#1d1d1f',
                    fontFamily: 'inherit',
                  }}
                />
                {searchQuery.trim() && (
                  <button
                    type="submit"
                    style={{
                      background: '#0071e3',
                      color: '#ffffff',
                      border: 'none',
                      borderRadius: '8px',
                      padding: '4px 10px',
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                    }}
                  >
                    Go
                  </button>
                )}
              </form>
            </div>

            {/* Primary Navigation Links with Expandable Accordions */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              {/* 1. Home */}
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="mobile-nav-item"
              >
                <span>Home</span>
              </Link>

              {/* 2. Products (Accordion) */}
              <div>
                <button
                  type="button"
                  onClick={() => toggleMobileSection('Products')}
                  className={`mobile-nav-item ${mobileExpandedSection === 'Products' ? 'expanded' : ''}`}
                >
                  <span>Products</span>
                  <ChevronDown
                    size={18}
                    style={{
                      transition: 'transform 0.25s ease',
                      transform: mobileExpandedSection === 'Products' ? 'rotate(180deg)' : 'rotate(0deg)',
                      color: mobileExpandedSection === 'Products' ? '#0071e3' : '#86868b',
                    }}
                  />
                </button>

                {mobileExpandedSection === 'Products' && (
                  <div className="mobile-submenu-box">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4px' }}>
                      {[
                        ...productMenuItems.col1,
                        ...productMenuItems.col2,
                        ...productMenuItems.col3,
                      ].map((prod) => (
                        <Link
                          key={prod.name}
                          to={prod.path}
                          onClick={() => setMobileMenuOpen(false)}
                          className="mobile-sublink"
                        >
                          <span>{prod.name}</span>
                        </Link>
                      ))}
                    </div>
                    <div style={{ marginTop: '12px', paddingTop: '10px', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
                      <Link
                        to="/products"
                        onClick={() => setMobileMenuOpen(false)}
                        style={{
                          fontSize: '0.86rem',
                          fontWeight: 600,
                          color: '#0071e3',
                          textDecoration: 'none',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                        }}
                      >
                        Explore All Products <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* 3. Solutions (Accordion) */}
              <div>
                <button
                  type="button"
                  onClick={() => toggleMobileSection('Solutions')}
                  className={`mobile-nav-item ${mobileExpandedSection === 'Solutions' ? 'expanded' : ''}`}
                >
                  <span>Solutions</span>
                  <ChevronDown
                    size={18}
                    style={{
                      transition: 'transform 0.25s ease',
                      transform: mobileExpandedSection === 'Solutions' ? 'rotate(180deg)' : 'rotate(0deg)',
                      color: mobileExpandedSection === 'Solutions' ? '#0071e3' : '#86868b',
                    }}
                  />
                </button>

                {mobileExpandedSection === 'Solutions' && (
                  <div className="mobile-submenu-box">
                    <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#86868b', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      Key Industries
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px', marginBottom: '14px' }}>
                      {solutionsSidebarCategories.map((cat) => (
                        <Link
                          key={cat}
                          to={`/solutions#${cat.toLowerCase().replace(/\s+/g, '-')}`}
                          onClick={() => setMobileMenuOpen(false)}
                          className="mobile-sublink"
                        >
                          {cat}
                        </Link>
                      ))}
                    </div>

                    <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#86868b', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      Popular Scenarios & Functions
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      {[
                        { name: 'Vehicle Access Control', isNew: true, path: '/solutions#vehicle-access' },
                        { name: 'Mobile Access Control', isNew: true, path: '/solutions#mobile-access' },
                        { name: 'Perimeter Protection', hot: true, path: '/solutions/perimeter-protection' },
                        { name: 'Integrated Solar Security', path: '/solutions#solar-security' },
                        { name: 'SMB Converged Solutions', isNew: true, path: '/solutions#smb-converged' },
                      ].map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          onClick={() => setMobileMenuOpen(false)}
                          className="mobile-sublink"
                          style={{ display: 'flex', alignItems: 'center' }}
                        >
                          <span>{item.name}</span>
                          {item.hot && <span className="hot-tag">HOT</span>}
                          {item.isNew && <span className="new-tag">NEW</span>}
                        </Link>
                      ))}
                    </div>

                    <div style={{ marginTop: '12px', paddingTop: '10px', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
                      <Link
                        to="/solutions"
                        onClick={() => setMobileMenuOpen(false)}
                        style={{
                          fontSize: '0.86rem',
                          fontWeight: 600,
                          color: '#0071e3',
                          textDecoration: 'none',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                        }}
                      >
                        Explore All Solutions <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* 4. Technologies (Accordion) */}
              <div>
                <button
                  type="button"
                  onClick={() => toggleMobileSection('Technologies')}
                  className={`mobile-nav-item ${mobileExpandedSection === 'Technologies' ? 'expanded' : ''}`}
                >
                  <span>Technologies</span>
                  <ChevronDown
                    size={18}
                    style={{
                      transition: 'transform 0.25s ease',
                      transform: mobileExpandedSection === 'Technologies' ? 'rotate(180deg)' : 'rotate(0deg)',
                      color: mobileExpandedSection === 'Technologies' ? '#0071e3' : '#86868b',
                    }}
                  />
                </button>

                {mobileExpandedSection === 'Technologies' && (
                  <div className="mobile-submenu-box">
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {techMenuItems.map((tech) => (
                        <Link
                          key={tech.title}
                          to={tech.path}
                          onClick={() => setMobileMenuOpen(false)}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            textDecoration: 'none',
                            padding: '8px 10px',
                            borderRadius: '8px',
                            backgroundColor: '#f9fafb',
                            color: '#1d1d1f',
                          }}
                        >
                          <div style={{ color: '#0071e3', display: 'flex', alignItems: 'center' }}>
                            {tech.icon}
                          </div>
                          <div>
                            <div style={{ fontSize: '0.88rem', fontWeight: 600 }}>{tech.title}</div>
                          </div>
                        </Link>
                      ))}
                    </div>

                    <div style={{ marginTop: '12px', paddingTop: '10px', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
                      <Link
                        to="/technologies"
                        onClick={() => setMobileMenuOpen(false)}
                        style={{
                          fontSize: '0.86rem',
                          fontWeight: 600,
                          color: '#0071e3',
                          textDecoration: 'none',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                        }}
                      >
                        Explore All Technologies <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* 5. About Us */}
              <Link
                to="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="mobile-nav-item"
              >
                <span>About Us</span>
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Blurred Backdrop Overlay when Mega Dropdown is active */}
      {activeDropdown && (
        <div
          onClick={() => setActiveDropdown(null)}
          style={{
            position: 'fixed',
            top: '64px',
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.45)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            zIndex: 90,
            animation: 'appleBackdropFade 0.25s ease',
          }}
        />
      )}

      {/* Scoped CSS animations and responsive helpers */}
      <style>{`
        @keyframes appleDropdownFade {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes appleBackdropFade {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes mobileDrawerSlide {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .mobile-nav-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          padding: 12px 14px;
          border-radius: 10px;
          font-size: 1.05rem;
          font-weight: 600;
          color: #1d1d1f;
          text-decoration: none;
          background: transparent;
          border: none;
          cursor: pointer;
          font-family: inherit;
          transition: all 0.2s ease;
          text-align: left;
        }
        .mobile-nav-item:hover,
        .mobile-nav-item.expanded {
          background-color: #f5f7fa;
          color: #0071e3;
        }
        .mobile-submenu-box {
          background-color: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.06);
          border-radius: 12px;
          padding: 12px 14px;
          margin: 4px 0 8px;
          animation: fadeIn 0.2s ease;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
        }
        .mobile-sublink {
          display: block;
          padding: 6px 8px;
          font-size: 0.88rem;
          color: #333336;
          text-decoration: none;
          border-radius: 6px;
          transition: all 0.15s ease;
        }
        .mobile-sublink:hover {
          color: #0071e3;
          background-color: #f0f4f8;
        }
        .tech-menu-item {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          text-decoration: none;
          padding: 8px 10px;
          border-radius: 8px;
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
          color: #1d1d1f;
        }
        .tech-menu-item:hover {
          background-color: #f7f8fa;
        }
        .tech-menu-item:hover .tech-item-title {
          color: #0071e3 !important;
        }
        .tech-menu-item:hover .tech-item-icon {
          color: #0071e3 !important;
          transform: scale(1.08);
        }
        .tech-item-icon {
          flex-shrink: 0;
          margin-top: 2px;
          color: #3b3b3d;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.2s ease, color 0.2s ease;
        }
        .tech-item-title {
          font-size: 0.92rem;
          font-weight: 600;
          color: #1d1d1f;
          margin-bottom: 3px;
          line-height: 1.25;
          transition: color 0.2s ease;
        }
        .tech-item-desc {
          font-size: 0.78rem;
          color: #767678;
          line-height: 1.38;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .solution-sidebar-btn {
          display: block;
          width: 100%;
          text-align: left;
          padding: 6px 12px;
          border-radius: 6px;
          font-size: 0.88rem;
          color: #444446;
          background: transparent;
          border: none;
          cursor: pointer;
          transition: all 0.15s ease;
          font-family: inherit;
        }
        .solution-sidebar-btn:hover {
          color: #1d1d1f;
          background-color: #f3f4f6;
        }
        .solution-sidebar-btn.active {
          color: #0071e3;
          font-weight: 600;
          background-color: #f0f2f5;
        }
        .solution-link-item {
          display: inline-flex;
          align-items: center;
          text-decoration: none;
          font-size: 0.86rem;
          color: #333336;
          padding: 3px 0;
          transition: color 0.15s ease;
        }
        .solution-link-item:hover {
          color: #0071e3 !important;
        }
        .hot-tag {
          color: #ff8c00;
          font-style: italic;
          font-weight: 700;
          font-size: 0.72rem;
          margin-left: 6px;
        }
        .new-tag {
          color: #0071e3;
          font-style: italic;
          font-weight: 700;
          font-size: 0.72rem;
          margin-left: 6px;
        }
        .solution-spotlight-img:hover,
        .guanlan-card-img:hover {
          transform: scale(1.04);
        }
        .view-all-tech-link:hover {
          color: #0071e3 !important;
          gap: 9px !important;
        }
        @media (min-width: 860px) and (max-width: 1040px) {
          .desktop-nav {
            gap: 14px !important;
          }
          .desktop-nav a {
            font-size: 0.84rem !important;
            padding: 8px 1px !important;
          }
          #header-quote-btn {
            font-size: 0.76rem !important;
            padding: 5px 12px !important;
          }
        }
        @media (min-width: 860px) {
          .desktop-nav { display: flex !important; }
          #header-quote-btn { display: inline-flex !important; }
          .mobile-trigger { display: none !important; }
        }
      `}</style>
    </>
  );
}
