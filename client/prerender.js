import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DOMAIN = 'https://coloron-new.onrender.com';
const DIST_DIR = path.resolve(__dirname, 'dist');
const SERVER_BUNDLE = path.resolve(DIST_DIR, 'server', 'entry-server.js');
const TEMPLATE_PATH = path.resolve(DIST_DIR, 'index.html');
const TEMPLATE_BACKUP = path.resolve(DIST_DIR, '_template.html');

// Import data
import { defaultProducts } from './src/data/productsData.js';
import { defaultFaqs, defaultDownloads } from './src/data/supportData.js';
import { companyKnowledge, solutionsKnowledge, aiKnowledgePayload } from './src/data/aiKnowledgeData.js';

// All categories
const CATEGORIES = [
  { slug: 'camera-products', name: 'Camera Products', desc: 'Pro Series Network Cameras with ColorSense 24/7 and AI detection.' },
  { slug: 'video-recorders', name: 'Video Recorders and Servers', desc: 'Pro Series NVRs and High-Throughput Edge AI video storage servers.' },
  { slug: 'access-control', name: 'Access Control', desc: 'Intelligent Biometric, Face Recognition Terminals and Turnstiles.' },
  { slug: 'video-intercom', name: 'Video Intercom', desc: 'Smart IP and Two-Wire Video Intercoms with crystal-clear 2-way audio.' },
  { slug: 'speed-gates', name: 'Speed Gates and Turnstiles', desc: 'Pedestrian Optical Speed Gates for high-volume pedestrian flow.' },
  { slug: 'alarm', name: 'Alarm Systems', desc: 'Wireless AX PRO Intrusion Alarm Systems with zero false alarms.' },
  { slug: 'interactive-displays', name: 'Interactive Flat Panel Displays', desc: '4K Ultra-HD Interactive Touch Displays for Corporate and Education.' },
  { slug: 'led-displays', name: 'LED Displays', desc: 'Fine Pitch Seamless Commercial LED Video Walls.' },
  { slug: 'network-switches', name: 'Network Transmission', desc: 'High-Power PoE Switches, Industrial Fiber and Converters.' },
  { slug: 'thermal-cameras', name: 'Thermal Cameras', desc: 'Bi-Spectrum Uncooled Radiometric Heat Detection Cameras.' },
  { slug: 'solar-powered', name: 'Solar Powered Security', desc: 'Autonomous 4G/5G Solar-Powered Outdoor Surveillance Units.' },
  { slug: 'ptz-cameras', name: 'PTZ Speed Domes', desc: '36x Optical Zoom 360° Endless Pan Auto-Tracking Robotics Domes.' },
  { slug: 'nvr-storage', name: 'NVR & Video Storage', desc: 'Enterprise RAID Network Video Recorders up to 160TB.' },
  { slug: 'intelligent-traffic', name: 'Intelligent Traffic', desc: 'Radar Traffic Domes, ANPR and Multi-Lane Speed Measurement.' },
  { slug: 'portable-products', name: 'Portable Products', desc: 'Body Worn Cameras and Deployable Rapid Response Surveillance.' },
  { slug: 'onboard-security', name: 'Onboard Mobile Security', desc: 'Anti-Vibration Transit Mobile NVRs and Vehicle Dash Cams.' },
  { slug: 'security-inspection', name: 'Security Inspection', desc: 'Walk-Through Metal Detectors and Parcel X-Ray Baggage Scanners.' },
  { slug: 'radar', name: 'Security Radar', desc: 'All-Weather Perimeter Defense Radar with active PTZ target tracking.' },
  { slug: 'premises-distribution', name: 'Premises Distribution System', desc: 'Structured Pure Copper Cat6 and Fiber Optic Cabling Solutions.' },
  { slug: 'fire-products', name: 'Fire Products', desc: 'Commercial Addressable Fire and Smoke Detection Life Safety.' }
];

// Product detail slugs
const PRODUCT_SLUGS = [
  'apex-dome-x-pro',
  'sentinel-bullet-ultra-4k',
  'matrix-ptz-speed-dome-360',
  'lumina-turret-eyeball-5mp',
  'thermo-guard-dual-spectrum',
  'quantum-nvr-64-channel-ai',
  'quantum-nvr-16-channel-poe',
  'vertex-smart-access-intercom-terminal',
  'turbo-vision-5mp-analog-camera',
  'aura-smart-home-pan-tilt-ai',
  'ds-2ce79h8t-ait3zf',
  'ds-2ce67dv3t-ptls',
  'ds-2ce67dv3t-ptlxts',
  'ds-2ce10dv0t-lps',
  'ds-2ce67dv0t-ptls',
  'ds-2ce67dv0t-ptlxts',
  'ds-2ce72dv0t-ls',
  'ds-2ce67kv0t-ptls',
  'ds-2ce67kv0t-ptlxts',
  'ds-2cd2047g2-lu',
  'ds-2cd2387g2-lsu',
  'ds-2de4425iw-de',
  'ds-7608nxi-i2-8p',
  'ds-7716nxi-i4-16p',
  'ds-9632ni-i8',
  'ds-7604ni-k1-4p',
  'ds-k1t673dx',
  'ds-k1t342mfx',
  'ds-k2604'
];

// All solution routes
const SOLUTION_ROUTES = [
  'apartments',
  'factories',
  'classroom-hub',
  'urban-roadways',
  'offices',
  'supermarkets',
  'stores',
  'bus-stop',
  'car-dealerships',
  'conference-rooms',
  'construction-site',
  'electrical-substations',
  'gas-stations',
  'highways',
  'hotels',
  'monitoring-center',
  'parking-lots',
  'schools',
  'shopping-malls',
  'transit-bus-onboard',
  'warehouses',
  'onshore-oilfields',
  'offshore-oil-platform',
  'transmission-line-inspection',
  'pipeline-inspection',
  'solar-farms',
  'hydroelectric-power-plants',
  'speed-measurement',
  'incident-detection',
  'violation-detection',
  'vehicle-information-detection',
  'portable-enforcement',
  'perimeter-protection',
  'time-attendance',
  'access-control',
  'people-counting',
  'visual-parcel-tracking',
  'visitor-management',
  'line-haul-management',
  'student-attendance',
  'dock-management',
  'distance-learning',
  'information-display',
  'remote-classroom-inspection',
  'intelligent-inspection',
  'advanced-driving-assistance',
  'industrial-thermography'
];

function buildRouteList() {
  const routes = [
    { url: '/', priority: '1.0', changefreq: 'daily' },
    { url: '/products', priority: '0.9', changefreq: 'weekly' },
    { url: '/solutions', priority: '0.9', changefreq: 'weekly' },
    { url: '/technologies', priority: '0.8', changefreq: 'weekly' },
    { url: '/support', priority: '0.8', changefreq: 'weekly' },
    { url: '/compare', priority: '0.7', changefreq: 'monthly' },
    { url: '/quote-calculator', priority: '0.7', changefreq: 'monthly' },
    { url: '/about', priority: '0.7', changefreq: 'monthly' },
    { url: '/contact', priority: '0.7', changefreq: 'monthly' },
    { url: '/ai-knowledge', priority: '0.9', changefreq: 'daily' }
  ];

  // Categories
  for (const cat of CATEGORIES) {
    routes.push({
      url: `/products/category/${cat.slug}`,
      priority: '0.8',
      changefreq: 'weekly'
    });
  }

  // Products
  for (const p of PRODUCT_SLUGS) {
    routes.push({
      url: `/product/${p}`,
      priority: '0.8',
      changefreq: 'weekly'
    });
  }

  // Solutions
  for (const sol of SOLUTION_ROUTES) {
    routes.push({
      url: `/solutions/${sol}`,
      priority: '0.8',
      changefreq: 'monthly'
    });
  }

  return routes;
}

function getBreadcrumb(items) {
  return {
    '@type': 'BreadcrumbList',
    'itemListElement': items.map((it, idx) => ({
      '@type': 'ListItem',
      'position': idx + 1,
      'name': it.name,
      'item': `${DOMAIN}${it.url}`
    }))
  };
}

function getRouteMetadata(url) {
  if (url === '/') {
    return {
      title: 'Coloron Vision — Pro Optics & AIoT Security Systems',
      description: 'Coloron Vision - Advanced AIoT Video Surveillance, CCTV Cameras, Optical Security Systems, NVR Video Storage & Enterprise AI Solutions. Pro Vision. In Every Light.',
      schema: {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'Organization',
            '@id': `${DOMAIN}/#organization`,
            name: 'COLOR ON Vision',
            url: DOMAIN,
            logo: `${DOMAIN}/assets/coloron-DzhDhnxo.png`,
            description: companyKnowledge.description,
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: companyKnowledge.contact.inquiries,
              contactType: 'customer support',
              email: companyKnowledge.contact.support
            }
          },
          {
            '@type': 'WebSite',
            '@id': `${DOMAIN}/#website`,
            url: DOMAIN,
            name: 'COLOR ON Vision',
            publisher: { '@id': `${DOMAIN}/#organization` }
          }
        ]
      }
    };
  }

  if (url === '/products') {
    return {
      title: 'CCTV Cameras & AIoT Video Surveillance Products | Coloron Vision',
      description: 'Explore Coloron Vision\'s lineup of 4K IP cameras, PTZ speed domes, thermal cameras, AI NVRs, and biometric access control terminals.',
      schema: {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'CollectionPage',
            name: 'Coloron Vision Surveillance Product Lineup',
            url: `${DOMAIN}/products`,
            description: 'Complete lineup of Coloron CCTV cameras, NVRs, and AIoT security hardware.'
          },
          getBreadcrumb([
            { name: 'Home', url: '/' },
            { name: 'Products', url: '/products' }
          ])
        ]
      }
    };
  }

  if (url.startsWith('/products/category/')) {
    const slug = url.split('/products/category/')[1];
    const cat = CATEGORIES.find(c => c.slug === slug);
    const catName = cat ? cat.name : slug.replace(/-/g, ' ');
    return {
      title: `${catName} | Coloron Vision Surveillance`,
      description: `Explore Coloron Vision ${catName}. Engineered with ColorSense 24/7 low-light optics, high-throughput AI analytics, and commercial durability.`,
      schema: {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'CollectionPage',
            name: `${catName} - Coloron Vision`,
            url: `${DOMAIN}${url}`,
            description: cat ? cat.desc : `Surveillance systems for ${catName}`
          },
          getBreadcrumb([
            { name: 'Home', url: '/' },
            { name: 'Products', url: '/products' },
            { name: catName, url }
          ])
        ]
      }
    };
  }

  if (url.startsWith('/product/')) {
    const slug = url.split('/product/')[1];
    const prod = defaultProducts.find(p => p.slug === slug || p.id === slug);
    const prodName = prod ? prod.name : `Coloron ${slug.replace(/-/g, ' ').toUpperCase()}`;
    const desc = prod ? prod.description : `High-performance surveillance hardware with ColorSense low-light imaging and AI classification.`;
    return {
      title: `${prodName} | Coloron Vision`,
      description: desc.substring(0, 160).replace(/"/g, "'"),
      schema: {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'Product',
            name: prodName,
            description: desc,
            brand: {
              '@type': 'Brand',
              name: 'COLOR ON'
            },
            offers: {
              '@type': 'Offer',
              price: prod ? prod.price : '299',
              priceCurrency: 'USD',
              availability: 'https://schema.org/InStock',
              url: `${DOMAIN}${url}`
            },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: prod ? prod.rating : '4.9',
              reviewCount: prod ? prod.reviewsCount : '60'
            }
          },
          getBreadcrumb([
            { name: 'Home', url: '/' },
            { name: 'Products', url: '/products' },
            { name: prodName, url }
          ])
        ]
      }
    };
  }

  if (url === '/support') {
    return {
      title: 'Technical Support, Firmware & CCTV FAQs | Coloron Vision',
      description: 'Download camera firmware updates, enterprise CMS software for Windows & macOS, mobile apps, and read technical FAQs on Coloron optical security.',
      schema: {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'FAQPage',
            mainEntity: defaultFaqs.map(f => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: {
                '@type': 'Answer',
                text: f.a
              }
            }))
          },
          getBreadcrumb([
            { name: 'Home', url: '/' },
            { name: 'Support', url: '/support' }
          ])
        ]
      }
    };
  }

  if (url === '/ai-knowledge') {
    return {
      title: 'COLOR ON AI Knowledge Base & Technical Directory | Coloron Vision',
      description: 'Comprehensive, machine-readable knowledge base of Coloron Vision CCTV security cameras, NVRs, AIoT surveillance architectures, and technical specifications.',
      schema: {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'TechArticle',
            headline: 'COLOR ON Vision Complete Technical Knowledge Base',
            description: companyKnowledge.description,
            publisher: {
              '@type': 'Organization',
              name: 'COLOR ON Vision',
              url: DOMAIN
            }
          },
          getBreadcrumb([
            { name: 'Home', url: '/' },
            { name: 'AI Knowledge Directory', url: '/ai-knowledge' }
          ])
        ]
      }
    };
  }

  if (url.startsWith('/solutions/')) {
    const slug = url.split('/solutions/')[1];
    const titleCase = slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    return {
      title: `${titleCase} CCTV & AI Security Solution | Coloron Vision`,
      description: `Coloron Vision enterprise security and AIoT monitoring architecture for ${titleCase}. Ultra-low-light imaging, automated alerts, and NDAA compliance.`,
      schema: {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'Service',
            name: `${titleCase} Security Solution`,
            provider: {
              '@type': 'Organization',
              name: 'COLOR ON Vision'
            },
            description: `Turnkey surveillance solution for ${titleCase}.`
          },
          getBreadcrumb([
            { name: 'Home', url: '/' },
            { name: 'Solutions', url: '/solutions' },
            { name: titleCase, url }
          ])
        ]
      }
    };
  }

  if (url === '/solutions') {
    return {
      title: 'Enterprise Security & CCTV Solutions | Coloron Vision',
      description: 'Intelligent video surveillance solutions for residential, smart city, education, industrial, logistics, energy, and commercial sectors.',
      schema: {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'CollectionPage',
            name: 'Coloron Vision Industry Solutions',
            url: `${DOMAIN}/solutions`
          },
          getBreadcrumb([
            { name: 'Home', url: '/' },
            { name: 'Solutions', url: '/solutions' }
          ])
        ]
      }
    };
  }

  if (url === '/about') {
    return {
      title: 'About Coloron Vision — Precision Optics & AI Security',
      description: 'Learn about Coloron Vision\'s mission, optical engineering heritage, NDAA compliance, and global surveillance infrastructure.',
      schema: {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'Organization',
            name: 'COLOR ON Vision',
            url: DOMAIN,
            description: companyKnowledge.description
          },
          getBreadcrumb([
            { name: 'Home', url: '/' },
            { name: 'About Us', url: '/about' }
          ])
        ]
      }
    };
  }

  if (url === '/contact') {
    return {
      title: 'Contact Coloron Vision — Enterprise Sales & Security Inquiries',
      description: 'Get in touch with Coloron Vision security consultants, request commercial project demos, or locate authorized distributors.',
      schema: {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'ContactPage',
            name: 'Contact Coloron Vision',
            url: `${DOMAIN}/contact`
          },
          getBreadcrumb([
            { name: 'Home', url: '/' },
            { name: 'Contact', url: '/contact' }
          ])
        ]
      }
    };
  }

  // Generic fallback
  const cleanTitle = url.replace(/\//g, ' ').trim().replace(/\b\w/g, l => l.toUpperCase()) || 'Vision';
  return {
    title: `${cleanTitle} | Coloron Vision`,
    description: 'Coloron Vision - Advanced AIoT Video Surveillance & Optical Security Systems. Pro Vision. In Every Light.',
    schema: null
  };
}

async function run() {
  console.log('🚀 Starting COLOR ON Static Site Generation (SSG)...');

  if (!fs.existsSync(TEMPLATE_PATH) && !fs.existsSync(TEMPLATE_BACKUP)) {
    throw new Error(`Template not found. Run "vite build" first!`);
  }

  // Preserve pristine template
  let template;
  if (fs.existsSync(TEMPLATE_BACKUP)) {
    template = fs.readFileSync(TEMPLATE_BACKUP, 'utf-8');
  } else {
    template = fs.readFileSync(TEMPLATE_PATH, 'utf-8');
    fs.writeFileSync(TEMPLATE_BACKUP, template, 'utf-8');
  }

  if (!fs.existsSync(SERVER_BUNDLE)) {
    throw new Error(`Server bundle not found at ${SERVER_BUNDLE}. Run "vite build --ssr src/entry-server.jsx --outDir dist/server" first!`);
  }

  const { render } = await import(pathToFileURL(SERVER_BUNDLE).href);

  const routes = buildRouteList();
  console.log(`📦 Pre-rendering ${routes.length} public routes...`);

  let successCount = 0;

  for (const route of routes) {
    const meta = getRouteMetadata(route.url);
    let appHtml = '';

    try {
      appHtml = render(route.url);
    } catch (err) {
      console.error(`❌ Error rendering ${route.url}:`, err.message);
      continue;
    }

    // Build head enhancements
    let customHead = `\n    <title>${meta.title}</title>\n`;
    customHead += `    <meta name="description" content="${meta.description.replace(/"/g, '&quot;')}" />\n`;
    customHead += `    <link rel="canonical" href="${DOMAIN}${route.url}" />\n`;
    customHead += `    <meta property="og:title" content="${meta.title.replace(/"/g, '&quot;')}" />\n`;
    customHead += `    <meta property="og:description" content="${meta.description.replace(/"/g, '&quot;')}" />\n`;
    customHead += `    <meta property="og:url" content="${DOMAIN}${route.url}" />\n`;
    customHead += `    <meta property="og:type" content="website" />\n`;
    customHead += `    <meta property="og:site_name" content="Coloron Vision" />\n`;
    customHead += `    <meta name="robots" content="index, follow" />\n`;

    if (meta.schema) {
      customHead += `    <script type="application/ld+json">\n${JSON.stringify(meta.schema, null, 2)}\n    </script>\n`;
    }

    // Clean template of existing title and description tags
    let html = template
      .replace(/<title>.*?<\/title>/gi, '')
      .replace(/<meta\s+name=["']description["'][^>]*>/gi, '')
      .replace(/<link\s+rel=["']canonical["'][^>]*>/gi, '')
      .replace(/<meta\s+property=["']og:[^"']+["'][^>]*>/gi, '');

    // Insert customHead right before </head>
    html = html.replace('</head>', `${customHead}  </head>`);

    // Inject appHtml into <div id="root"></div>
    html = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

    // Write file
    let outFilePath;
    if (route.url === '/') {
      outFilePath = path.resolve(DIST_DIR, 'index.html');
    } else {
      const routeDir = path.resolve(DIST_DIR, route.url.replace(/^\//, ''));
      if (!fs.existsSync(routeDir)) {
        fs.mkdirSync(routeDir, { recursive: true });
      }
      outFilePath = path.resolve(routeDir, 'index.html');
    }

    fs.writeFileSync(outFilePath, html, 'utf-8');
    successCount++;
  }

  console.log(`✅ Successfully pre-rendered ${successCount}/${routes.length} pages into static HTML!`);

  // Generate dynamic sitemap.xml
  generateSitemap(routes);

  // Generate robots.txt
  generateRobotsTxt();

  // Generate /api/ai-knowledge.json
  generateAiKnowledgeFiles();

  // Cleanup dist/server and backup
  const serverDir = path.resolve(DIST_DIR, 'server');
  if (fs.existsSync(serverDir)) {
    fs.rmSync(serverDir, { recursive: true, force: true });
    console.log('🧹 Cleaned up temporary SSR build directory.');
  }

  if (fs.existsSync(TEMPLATE_BACKUP)) {
    fs.unlinkSync(TEMPLATE_BACKUP);
  }

  console.log('🎉 SSG build complete! COLOR ON is fully crawlable and readable without JS!');
}

function generateSitemap(routes) {
  const today = new Date().toISOString().split('T')[0];
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  for (const r of routes) {
    xml += '  <url>\n';
    xml += `    <loc>${DOMAIN}${r.url}</loc>\n`;
    xml += `    <lastmod>${today}</lastmod>\n`;
    xml += `    <changefreq>${r.changefreq}</changefreq>\n`;
    xml += `    <priority>${r.priority}</priority>\n`;
    xml += '  </url>\n';
  }

  xml += '</urlset>\n';

  fs.writeFileSync(path.resolve(DIST_DIR, 'sitemap.xml'), xml, 'utf-8');
  fs.writeFileSync(path.resolve(__dirname, 'public', 'sitemap.xml'), xml, 'utf-8');
  console.log('🗺️ Generated sitemap.xml in dist/ and public/ with', routes.length, 'URLs.');
}

function generateRobotsTxt() {
  const robots = `# robots.txt for COLOR ON Vision (${DOMAIN})
User-agent: *
Allow: /
Disallow: /admin
Disallow: /admin/
Disallow: /api/quotes
Disallow: /api/contact

# Allow legitimate search engines and AI knowledge-base crawlers
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Applebot
Allow: /

User-agent: CCBot
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: Cohere-ai
Allow: /

Sitemap: ${DOMAIN}/sitemap.xml
`;

  fs.writeFileSync(path.resolve(DIST_DIR, 'robots.txt'), robots, 'utf-8');
  fs.writeFileSync(path.resolve(__dirname, 'public', 'robots.txt'), robots, 'utf-8');
  console.log('🤖 Generated robots.txt in dist/ and public/ allowing search engines & AI crawlers.');
}

function generateAiKnowledgeFiles() {
  const jsonContent = JSON.stringify(aiKnowledgePayload, null, 2);

  // 1. In public/api and dist/api
  const publicApiDir = path.resolve(__dirname, 'public', 'api');
  if (!fs.existsSync(publicApiDir)) fs.mkdirSync(publicApiDir, { recursive: true });
  fs.writeFileSync(path.resolve(publicApiDir, 'ai-knowledge.json'), jsonContent, 'utf-8');

  const distApiDir = path.resolve(DIST_DIR, 'api');
  if (!fs.existsSync(distApiDir)) fs.mkdirSync(distApiDir, { recursive: true });
  fs.writeFileSync(path.resolve(distApiDir, 'ai-knowledge.json'), jsonContent, 'utf-8');

  // Also create dist/api/ai-knowledge/index.html returning JSON or redirecting
  const distAiKnowledgeEndpointDir = path.resolve(distApiDir, 'ai-knowledge');
  if (!fs.existsSync(distAiKnowledgeEndpointDir)) fs.mkdirSync(distAiKnowledgeEndpointDir, { recursive: true });
  
  // HTML wrapper that immediately renders the JSON content cleanly
  const htmlWrapper = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>COLOR ON AI Knowledge Base Endpoint</title>
  <meta http-equiv="refresh" content="0; url=/api/ai-knowledge.json">
</head>
<body>
  <pre>${jsonContent}</pre>
</body>
</html>`;
  fs.writeFileSync(path.resolve(distAiKnowledgeEndpointDir, 'index.html'), htmlWrapper, 'utf-8');

  console.log('🧠 Generated /api/ai-knowledge.json and /api/ai-knowledge endpoints.');
}

run().catch((err) => {
  console.error('Fatal SSG Error:', err);
  process.exit(1);
});
