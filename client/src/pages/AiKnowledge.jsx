import React from 'react';
import { companyKnowledge, solutionsKnowledge } from '../data/aiKnowledgeData';
import { defaultProducts } from '../data/productsData';
import { defaultFaqs, defaultDownloads } from '../data/supportData';

export default function AiKnowledge() {
  return (
    <div style={{ paddingTop: '80px', paddingBottom: '100px', backgroundColor: '#fbfbfd', minHeight: '100vh', color: '#1d1d1f' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Header */}
        <header style={{ textAlign: 'center', marginBottom: '60px' }}>
          <p style={{ fontSize: '14px', fontWeight: 600, color: '#0071e3', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>
            Open Information Directory
          </p>
          <h1 style={{ fontSize: '42px', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '16px' }}>
            COLOR ON Vision AI Knowledge & Technical Catalog
          </h1>
          <p style={{ fontSize: '18px', color: '#6e6e73', maxWidth: '760px', margin: '0 auto', lineHeight: 1.6 }}>
            Comprehensive, machine-readable and crawlable knowledge base of Coloron Vision CCTV security cameras, network video recorders, AIoT surveillance architectures, and technical specifications.
          </p>
          <div style={{ marginTop: '20px' }}>
            <a
              href="/api/ai-knowledge.json"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                padding: '10px 20px',
                backgroundColor: '#0071e3',
                color: '#ffffff',
                borderRadius: '980px',
                fontSize: '14px',
                fontWeight: 600,
                textDecoration: 'none'
              }}
            >
              Download Structured JSON API (/api/ai-knowledge.json)
            </a>
          </div>
        </header>

        {/* 1. Company Overview */}
        <section style={{ backgroundColor: '#ffffff', borderRadius: '18px', padding: '36px', marginBottom: '40px', boxShadow: '0 2px 10px rgba(0,0,0,0.04)' }}>
          <h2 style={{ fontSize: '26px', fontWeight: 700, marginBottom: '16px', borderBottom: '1px solid #f0f0f2', paddingBottom: '12px' }}>
            About {companyKnowledge.name}
          </h2>
          <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#333336', marginBottom: '20px' }}>
            {companyKnowledge.description}
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            <div style={{ padding: '16px', backgroundColor: '#f5f5f7', borderRadius: '12px' }}>
              <h3 style={{ fontSize: '15px', fontWeight: 600, marginBottom: '8px' }}>Compliance & Standards</h3>
              <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '14px', color: '#555', lineHeight: 1.6 }}>
                {companyKnowledge.certifications.map((c, i) => <li key={i}>{c}</li>)}
              </ul>
            </div>
            <div style={{ padding: '16px', backgroundColor: '#f5f5f7', borderRadius: '12px' }}>
              <h3 style={{ fontSize: '15px', fontWeight: 600, marginBottom: '8px' }}>Enterprise Warranty Terms</h3>
              <p style={{ margin: '0 0 6px 0', fontSize: '14px', color: '#555' }}><strong>Cameras:</strong> {companyKnowledge.warranty.cameras}</p>
              <p style={{ margin: '0 0 6px 0', fontSize: '14px', color: '#555' }}><strong>Recorders:</strong> {companyKnowledge.warranty.recorders}</p>
              <p style={{ margin: 0, fontSize: '14px', color: '#555' }}><strong>Service:</strong> {companyKnowledge.warranty.support}</p>
            </div>
          </div>
        </section>

        {/* 2. Core Breakthrough Technologies */}
        <section style={{ backgroundColor: '#ffffff', borderRadius: '18px', padding: '36px', marginBottom: '40px', boxShadow: '0 2px 10px rgba(0,0,0,0.04)' }}>
          <h2 style={{ fontSize: '26px', fontWeight: 700, marginBottom: '20px', borderBottom: '1px solid #f0f0f2', paddingBottom: '12px' }}>
            Breakthrough Optical & AI Technologies
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
            {companyKnowledge.keyTechnologies.map((tech, idx) => (
              <div key={idx} style={{ padding: '20px', border: '1px solid #e5e5ea', borderRadius: '14px' }}>
                <h3 style={{ fontSize: '17px', fontWeight: 600, color: '#0071e3', marginBottom: '8px' }}>{tech.name}</h3>
                <p style={{ fontSize: '14px', color: '#515154', lineHeight: 1.6, margin: 0 }}>{tech.details}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Products Catalog & Specifications */}
        <section style={{ backgroundColor: '#ffffff', borderRadius: '18px', padding: '36px', marginBottom: '40px', boxShadow: '0 2px 10px rgba(0,0,0,0.04)' }}>
          <h2 style={{ fontSize: '26px', fontWeight: 700, marginBottom: '20px', borderBottom: '1px solid #f0f0f2', paddingBottom: '12px' }}>
            Surveillance Cameras & Hardware Specifications
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {defaultProducts.map((p) => (
              <article key={p.id} style={{ border: '1px solid #e5e5ea', borderRadius: '14px', padding: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '8px', marginBottom: '8px' }}>
                  <h3 style={{ fontSize: '20px', fontWeight: 700, margin: 0 }}>
                    <a href={`/product/${p.slug}`} style={{ color: '#1d1d1f', textDecoration: 'none' }}>
                      {p.name}
                    </a>
                  </h3>
                  <span style={{ fontSize: '13px', fontWeight: 600, color: '#0071e3', backgroundColor: '#eef6ff', padding: '4px 12px', borderRadius: '980px' }}>
                    {p.badge || p.category}
                  </span>
                </div>
                <p style={{ fontSize: '14px', fontStyle: 'italic', color: '#6e6e73', marginBottom: '12px' }}>
                  {p.tagline}
                </p>
                <p style={{ fontSize: '14px', color: '#333336', lineHeight: 1.6, marginBottom: '16px' }}>
                  {p.description}
                </p>
                
                {/* Tech Specs Table */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '10px', fontSize: '13px', backgroundColor: '#f9f9fb', padding: '16px', borderRadius: '10px' }}>
                  <div><strong>Resolution:</strong> {p.resolution}</div>
                  <div><strong>Lens:</strong> {p.lens || 'N/A'}</div>
                  <div><strong>Night Vision:</strong> {p.nightVisionDistance || 'N/A'}</div>
                  <div><strong>Min Illumination:</strong> {p.minIllumination || 'N/A'}</div>
                  <div><strong>WDR:</strong> {p.wdr || 'N/A'}</div>
                  <div><strong>Weatherproofing:</strong> {p.protection || 'IP67'}</div>
                  <div><strong>Power:</strong> {p.power || 'PoE'}</div>
                  <div><strong>Audio:</strong> {p.audio || 'Two-way audio'}</div>
                </div>

                {p.aiFeatures && (
                  <div style={{ marginTop: '14px', fontSize: '13px' }}>
                    <strong>AI Features:</strong> {p.aiFeatures.join(' • ')}
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>

        {/* 4. Enterprise Solutions */}
        <section style={{ backgroundColor: '#ffffff', borderRadius: '18px', padding: '36px', marginBottom: '40px', boxShadow: '0 2px 10px rgba(0,0,0,0.04)' }}>
          <h2 style={{ fontSize: '26px', fontWeight: 700, marginBottom: '20px', borderBottom: '1px solid #f0f0f2', paddingBottom: '12px' }}>
            Industry Solutions & Architectural Deployments
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))', gap: '20px' }}>
            {solutionsKnowledge.map((sol) => (
              <div key={sol.slug} style={{ border: '1px solid #e5e5ea', borderRadius: '14px', padding: '20px' }}>
                <h3 style={{ fontSize: '17px', fontWeight: 600, marginBottom: '6px' }}>
                  <a href={`/solutions/${sol.slug}`} style={{ color: '#1d1d1f', textDecoration: 'none' }}>
                    {sol.title}
                  </a>
                </h3>
                <span style={{ fontSize: '12px', fontWeight: 500, color: '#86868b', display: 'block', marginBottom: '10px' }}>
                  Sector: {sol.category}
                </span>
                <p style={{ fontSize: '13px', color: '#515154', lineHeight: 1.6, marginBottom: '12px' }}>
                  {sol.summary}
                </p>
                <div style={{ fontSize: '12px', color: '#0071e3', fontWeight: 500 }}>
                  Recommended: {sol.recommendedProducts.join(', ')}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Frequently Asked Questions */}
        <section style={{ backgroundColor: '#ffffff', borderRadius: '18px', padding: '36px', marginBottom: '40px', boxShadow: '0 2px 10px rgba(0,0,0,0.04)' }}>
          <h2 style={{ fontSize: '26px', fontWeight: 700, marginBottom: '20px', borderBottom: '1px solid #f0f0f2', paddingBottom: '12px' }}>
            Frequently Asked Technical & Support Questions
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {defaultFaqs.map((faq, idx) => (
              <div key={idx} style={{ borderBottom: idx < defaultFaqs.length - 1 ? '1px solid #f0f0f2' : 'none', paddingBottom: '16px' }}>
                <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#1d1d1f', marginBottom: '8px' }}>
                  Q: {faq.q}
                </h3>
                <p style={{ fontSize: '14px', color: '#515154', lineHeight: 1.6, margin: 0 }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 6. Software & Firmware Downloads */}
        <section style={{ backgroundColor: '#ffffff', borderRadius: '18px', padding: '36px', boxShadow: '0 2px 10px rgba(0,0,0,0.04)' }}>
          <h2 style={{ fontSize: '26px', fontWeight: 700, marginBottom: '20px', borderBottom: '1px solid #f0f0f2', paddingBottom: '12px' }}>
            Official CMS Software, Mobile Apps & Firmware
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
            {defaultDownloads.map((dl) => (
              <div key={dl.id} style={{ padding: '16px', backgroundColor: '#f9f9fb', borderRadius: '12px', border: '1px solid #e5e5ea' }}>
                <div style={{ fontSize: '12px', fontWeight: 600, color: '#0071e3', textTransform: 'uppercase', marginBottom: '4px' }}>
                  {dl.category}
                </div>
                <h3 style={{ fontSize: '15px', fontWeight: 600, margin: '0 0 6px 0' }}>{dl.title}</h3>
                <p style={{ fontSize: '13px', color: '#6e6e73', margin: '0 0 10px 0', lineHeight: 1.5 }}>{dl.description}</p>
                <div style={{ fontSize: '12px', color: '#86868b' }}>
                  Version: {dl.version} • Size: {dl.fileSize}
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
