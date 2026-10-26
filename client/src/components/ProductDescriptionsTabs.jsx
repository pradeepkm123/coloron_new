import React, { useState } from 'react';
import { Download, FileText, CheckCircle2, ArrowDownToLine, Eye } from 'lucide-react';

export default function ProductDescriptionsTabs({ product }) {
  const [activeTab, setActiveTab] = useState('Introduction');

  const tabs = ['Introduction', 'Specification', 'Accessories', 'Download'];

  const modelNumber = product?.model || product?.sku || 'TD-9423A3-LR';

  const accessoriesData = [
    {
      id: 'acc-1',
      model: 'TD-YXH0302',
      type: 'Junction Box',
      image: '/images/acc_box.png',
      desc: 'Weatherproof cable conduit junction enclosure',
    },
    {
      id: 'acc-2',
      model: 'TD-YXH0302 TD-YZJ0501',
      type: 'Pole Mount Bracket',
      image: '/images/acc_pole.png',
      desc: 'Heavy-duty vertical pole bracket with stainless steel clamps',
    },
    {
      id: 'acc-3',
      model: 'TD-YXH0302 TD-YZJ0601',
      type: 'Corner / Wall Bracket',
      image: '/images/acc_wall.png',
      desc: 'Right-angle exterior corner mount junction hardware',
    },
    {
      id: 'acc-4',
      model: 'TD-YXH0302 TD-YZJ0811',
      type: 'Pendant Mount Bracket',
      image: '/images/acc_pendant.png',
      desc: 'Ceiling dropped-down pendant tube extension arm',
    },
  ];

  const downloadsData = [
    {
      title: `${modelNumber} Datasheet 2022.11.25.pdf`,
      size: '2.4 MB',
      date: 'Nov 2022',
      type: 'PDF Document',
    },
    {
      title: `${modelNumber} User Manual & Configuration Guide.pdf`,
      size: '4.8 MB',
      date: 'Jan 2023',
      type: 'PDF Document',
    },
    {
      title: 'Quick Installation and Cable Waterproofing Guide.pdf',
      size: '1.6 MB',
      date: 'Mar 2023',
      type: 'PDF Document',
    },
  ];

  return (
    <section style={{ padding: '72px 24px 84px', background: '#fbfbfd', borderTop: '1px solid rgba(0, 0, 0, 0.06)' }}>
      <div style={{ maxWidth: '1040px', margin: '0 auto' }}>
        
        {/* Centered Heading: Descriptions */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <h2
            style={{
              fontSize: '2.25rem',
              fontWeight: 700,
              letterSpacing: '-0.025em',
              color: '#1d1d1f',
              margin: 0,
            }}
          >
            Descriptions
          </h2>
        </div>

        {/* Centered Apple Segmented Pill Tabs Navigation */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '44px',
          }}
        >
          <div
            style={{
              position: 'relative',
              display: 'grid',
              gridTemplateColumns: `repeat(${tabs.length}, 1fr)`,
              background: '#ededf0',
              borderRadius: '980px',
              padding: '4px',
              width: '100%',
              maxWidth: '580px',
              boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.06)',
              border: '1px solid rgba(0, 0, 0, 0.04)',
              userSelect: 'none',
            }}
          >
            {/* Sliding White Active Pill Indicator */}
            <div
              style={{
                position: 'absolute',
                top: '4px',
                bottom: '4px',
                left: '4px',
                width: 'calc(25% - 2px)',
                transform: `translateX(${tabs.indexOf(activeTab) * 100}%)`,
                background: '#ffffff',
                borderRadius: '980px',
                boxShadow: '0 3px 12px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.06)',
                border: '0.5px solid rgba(0, 0, 0, 0.04)',
                transition: 'transform 0.35s cubic-bezier(0.25, 1, 0.5, 1)',
                pointerEvents: 'none',
                zIndex: 1,
              }}
            />

            {tabs.map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  style={{
                    position: 'relative',
                    zIndex: 2,
                    padding: '10px 14px',
                    fontSize: '0.92rem',
                    fontWeight: isActive ? 600 : 500,
                    color: isActive ? '#1d1d1f' : '#6e6e73',
                    background: 'transparent',
                    border: 'none',
                    borderRadius: '980px',
                    cursor: 'pointer',
                    transition: 'color 0.25s ease',
                    whiteSpace: 'nowrap',
                    textAlign: 'center',
                    outline: 'none',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = '#1d1d1f';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = '#6e6e73';
                    }
                  }}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Contents Container */}
        <div
          style={{
            background: '#ffffff',
            borderRadius: '24px',
            border: '1px solid rgba(0, 0, 0, 0.06)',
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.03)',
            padding: '40px',
            minHeight: '440px',
          }}
        >
          {/* TAB 1: INTRODUCTION */}
          {activeTab === 'Introduction' && (
            <div>
              {/* Features List */}
              <div style={{ marginBottom: '44px' }}>
                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: '#1d1d1f',
                    marginBottom: '18px',
                    letterSpacing: '-0.01em',
                  }}
                >
                  Features
                </h3>
                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                  }}
                >
                  {[
                    'Starlight',
                    '2MP ( 1920 × 1080 ) @30fps',
                    'Support smart H.265/H.264 coding',
                    'ICR auto switch, true day/night',
                    'Up to 100m IR night view distance; motorized zoom lens',
                    '3D DNR, true WDR, HLC, BLC and ROI coding',
                    'Built-in micro SD card slot, up to 256GB',
                    '1CH audio input; 1CH audio output',
                    '1CH alarm input; 1CH alarm output',
                    'DC12V/PoE power supply',
                    'Support three streams',
                    'IP67',
                    'Support mobile surveillance by smart phones with iOS and Android OS',
                    'Intelligent analytics: video abnormality (video blur detection, video cast detection, scene change), license plate recognition',
                  ].map((feat, idx) => (
                    <li
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'baseline',
                        gap: '12px',
                        fontSize: '0.94rem',
                        color: '#2d3748',
                        lineHeight: 1.55,
                      }}
                    >
                      <span
                        style={{
                          display: 'inline-block',
                          width: '6px',
                          height: '6px',
                          borderRadius: '50%',
                          background: '#0071e3',
                          flexShrink: 0,
                          transform: 'translateY(-2px)',
                        }}
                      />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Dimension Schematics */}
              <div style={{ paddingTop: '24px', borderTop: '1px solid rgba(0, 0, 0, 0.08)' }}>
                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: '#1d1d1f',
                    marginBottom: '20px',
                    letterSpacing: '-0.01em',
                  }}
                >
                  Dimension
                </h3>
                <div
                  style={{
                    background: '#ffffff',
                    padding: '20px',
                    borderRadius: '8px',
                    display: 'inline-block',
                    maxWidth: '100%',
                    overflowX: 'auto',
                  }}
                >
                  <img
                    src="/images/camera_dimension.png"
                    alt="Camera technical dimensions schematic"
                    style={{
                      maxWidth: '600px',
                      width: '100%',
                      height: 'auto',
                      display: 'block',
                      filter: 'contrast(1.05)',
                    }}
                  />
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: SPECIFICATION */}
          {activeTab === 'Specification' && (
            <div style={{ overflowX: 'auto' }}>
              <table
                style={{
                  width: '100%',
                  borderCollapse: 'collapse',
                  fontSize: '0.9rem',
                  lineHeight: 1.5,
                }}
              >
                <tbody>
                  {/* Top Model Row */}
                  <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                    <td
                      style={{
                        padding: '12px 18px',
                        fontWeight: 600,
                        color: '#1d1d1f',
                        width: '30%',
                        background: '#f8fafc',
                      }}
                    >
                      Model
                    </td>
                    <td
                      style={{
                        padding: '12px 18px',
                        color: '#1d1d1f',
                        fontWeight: 600,
                      }}
                    >
                      {modelNumber}
                    </td>
                  </tr>

                  {/* Category Header: Camera */}
                  <tr>
                    <td
                      colSpan={2}
                      style={{
                        padding: '12px 20px',
                        background: '#f5f5f7',
                        fontWeight: 600,
                        color: '#1d1d1f',
                        fontSize: '0.86rem',
                        letterSpacing: '0.04em',
                        textTransform: 'uppercase',
                      }}
                    >
                      Camera
                    </td>
                  </tr>

                  {[
                    { key: 'Image Sensor', val: '1 / 2.8" CMOS' },
                    { key: 'Image Size', val: '1920 × 1080' },
                    { key: 'Electronic Shutter', val: '1 / 3 s ~ 1 / 10000 s' },
                    { key: 'Iris Type', val: 'DC Iris' },
                    { key: 'Min. Illumination', val: '0.005 lux@F1.6, AGC ON; 0 lux with IR' },
                    { key: 'Lens', val: '2.8~12mm@F1.4, motorized  |  7~22mm@F1.6, motorized' },
                    {
                      key: 'Field of View',
                      val: 'H: 103.4°~32.4°; V: 71°~181.5°; D: 111°~36.8°  |  H: 44°~17.6°; V: 25.6°~10°; D: 49.7°~20.2°',
                    },
                    { key: 'Lens Mount', val: 'Φ14' },
                    { key: 'Wide Dynamic Range', val: '120dB' },
                    { key: 'BLC', val: 'Yes' },
                    { key: 'HLC', val: 'Yes' },
                    { key: 'Defog', val: 'Yes' },
                    { key: 'Digital NR', val: '3D DNR' },
                    { key: 'Angle Adjustment', val: 'Pan: 0°~360°; Tilt: 0°~90°; Rotation: 0°~360°' },
                  ].map((row, i) => (
                    <tr
                      key={i}
                      style={{
                        borderBottom: '1px solid #edf2f7',
                        background: i % 2 === 0 ? '#ffffff' : '#fafafa',
                      }}
                    >
                      <td style={{ padding: '10px 18px', color: '#4a5568', fontWeight: 500 }}>{row.key}</td>
                      <td style={{ padding: '10px 18px', color: '#1a202c' }}>{row.val}</td>
                    </tr>
                  ))}

                  {/* Category Header: Image */}
                  <tr>
                    <td
                      colSpan={2}
                      style={{
                        padding: '12px 20px',
                        background: '#f5f5f7',
                        fontWeight: 600,
                        color: '#1d1d1f',
                        fontSize: '0.86rem',
                        letterSpacing: '0.04em',
                        textTransform: 'uppercase',
                      }}
                    >
                      Image
                    </td>
                  </tr>

                  {[
                    {
                      key: 'Video Compression',
                      val: (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                          <div>Main stream: Smart H.265 / H.265+ / H.265 / Smart H.264 / H.264+ / H.264</div>
                          <div>Sub stream: H.265+ / H.265 / H.264+ / H.264 / MJPEG</div>
                          <div>Third stream: H.265+ / H.265 / H.264+ / H.264 / MJPEG</div>
                        </div>
                      ),
                    },
                    { key: 'H.264 Compression Standard', val: 'Baseline Profile / Main Profile / High Profile' },
                    { key: 'Resolution', val: '1080P ( 1920 × 1080 ), 720P ( 1280 × 720 ), D1, CIF, 480 × 240' },
                    {
                      key: 'Main Stream',
                      val: (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                          <div>60Hz: 1080P / 720P (1 ~ 30fps); 50Hz: 1080P / 720P (1 ~ 25fps)</div>
                          <div>HFR Mode: 1080P / 720P (60Hz: 1~60fps; 50Hz: 1~50fps)</div>
                        </div>
                      ),
                    },
                    {
                      key: 'Sub Stream',
                      val: '60Hz: 720P / D1 / CIF / 480×240 (1~30fps); 50Hz: 720P / D1 / CIF / 480×240 (1~25fps)',
                    },
                    {
                      key: 'Third Stream',
                      val: '60Hz: D1 / CIF / 480×240 (1~30fps); 50Hz: D1 / CIF / 480×240 (1~25fps)',
                    },
                    { key: 'Bit Rate', val: '64 Kbps ~ 6 Mbps' },
                    { key: 'Bit Rate Type', val: 'VBR / CBR' },
                    { key: 'Audio Compression', val: 'G711A / U' },
                  ].map((row, i) => (
                    <tr
                      key={`img-${i}`}
                      style={{
                        borderBottom: '1px solid #edf2f7',
                        background: i % 2 === 0 ? '#ffffff' : '#fafafa',
                      }}
                    >
                      <td style={{ padding: '10px 18px', color: '#4a5568', fontWeight: 500, verticalAlign: 'top' }}>
                        {row.key}
                      </td>
                      <td style={{ padding: '10px 18px', color: '#1a202c' }}>{row.val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* TAB 3: ACCESSORIES */}
          {activeTab === 'Accessories' && (
            <div>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                  gap: '24px',
                }}
              >
                {accessoriesData.map((acc) => (
                  <div
                    key={acc.id}
                    style={{
                      background: '#ffffff',
                      border: '1px solid rgba(0, 0, 0, 0.08)',
                      borderRadius: '18px',
                      overflow: 'hidden',
                      transition: 'all 0.3s cubic-bezier(0.25, 1, 0.5, 1)',
                      display: 'flex',
                      flexDirection: 'column',
                      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.02)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-4px)';
                      e.currentTarget.style.boxShadow = '0 16px 36px rgba(0, 0, 0, 0.08)';
                      e.currentTarget.style.borderColor = '#0071e3';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.02)';
                      e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.08)';
                    }}
                  >
                    {/* Image Area */}
                    <div
                      style={{
                        background: '#f8f9fa',
                        padding: '24px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '210px',
                      }}
                    >
                      <img
                        src={acc.image}
                        alt={acc.model}
                        style={{
                          maxHeight: '160px',
                          maxWidth: '100%',
                          objectFit: 'contain',
                        }}
                      />
                    </div>

                    {/* Divider */}
                    <div style={{ height: '1px', background: '#e9ecef', width: '100%' }} />

                    {/* Content Details */}
                    <div
                      style={{
                        padding: '16px 20px',
                        textAlign: 'center',
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                      }}
                    >
                      <div
                        style={{
                          fontSize: '0.95rem',
                          fontWeight: 600,
                          color: '#2d3748',
                          letterSpacing: '-0.01em',
                          marginBottom: '4px',
                        }}
                      >
                        {acc.model}
                      </div>
                      <div
                        style={{
                          fontSize: '0.8rem',
                          color: '#718096',
                        }}
                      >
                        {acc.type}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: DOWNLOAD */}
          {(activeTab === 'Download' || activeTab === 'Downloads') && (
            <div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {downloadsData.map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '18px 24px',
                      background: '#f8fafc',
                      borderRadius: '10px',
                      border: '1px solid #e2e8f0',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#f1f5f9';
                      e.currentTarget.style.borderColor = '#cbd5e1';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = '#f8fafc';
                      e.currentTarget.style.borderColor = '#e2e8f0';
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                      <div
                        style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: '10px',
                          background: 'rgba(0, 113, 227, 0.1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#0071e3',
                          flexShrink: 0,
                        }}
                      >
                        <ArrowDownToLine size={20} />
                      </div>
                      <div>
                        <div
                          style={{
                            fontSize: '0.95rem',
                            fontWeight: 600,
                            color: '#1e293b',
                            marginBottom: '2px',
                          }}
                        >
                          {item.title}
                        </div>
                        <div style={{ fontSize: '0.8rem', color: '#64748b' }}>
                          {item.type} • {item.size} • Updated {item.date}
                        </div>
                      </div>
                    </div>

                    <a
                      href={`/downloads/${item.title}`}
                      onClick={(e) => {
                        e.preventDefault();
                        alert(`Starting download: ${item.title}`);
                      }}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '8px 18px',
                        background: '#0071e3',
                        color: '#ffffff',
                        fontSize: '0.85rem',
                        fontWeight: 500,
                        borderRadius: '980px',
                        textDecoration: 'none',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        boxShadow: '0 2px 8px rgba(0, 113, 227, 0.25)',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = '#0077ed';
                        e.currentTarget.style.boxShadow = '0 4px 14px rgba(0, 113, 227, 0.35)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = '#0071e3';
                        e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 113, 227, 0.25)';
                      }}
                    >
                      <Download size={14} />
                      <span>Download</span>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
