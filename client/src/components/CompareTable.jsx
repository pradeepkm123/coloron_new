import React from 'react';
import { Link } from 'react-router-dom';
import { Check, X, Shield, Sparkles, Cpu, Eye, Zap } from 'lucide-react';

export default function CompareTable({ products, allProducts, onSelectProduct, onRemoveProduct }) {
  const specSections = [
    {
      title: 'Optics & Resolution',
      icon: <Eye size={18} color="#0071e3" />,
      specs: [
        { label: 'Video Resolution', key: 'resolution' },
        { label: 'Optical Sensor', key: 'sensor' },
        { label: 'Lens & Focal Length', key: 'lens' },
        { label: 'Field of View (FOV)', key: 'fov' },
        { label: 'Wide Dynamic Range', key: 'wdr' },
        { label: 'Min. Illumination', key: 'minIllumination' },
      ],
    },
    {
      title: 'Night Vision & Clarity',
      icon: <Sparkles size={18} color="#b25e00" />,
      specs: [
        { label: 'Night Vision Mode', key: 'nightVisionType' },
        { label: 'Night Distance', key: 'nightVisionDistance' },
      ],
    },
    {
      title: 'Neural AI Analytics',
      icon: <Cpu size={18} color="#1b8738" />,
      specs: [
        {
          label: 'Deep Learning Features',
          render: (p) => (
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {p.aiFeatures?.map((f, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', color: '#1d1d1f' }}>
                  <Check size={14} color="#1b8738" strokeWidth={2.5} />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          ),
        },
      ],
    },
    {
      title: 'Durability & Enclosure',
      icon: <Shield size={18} color="#0071e3" />,
      specs: [
        { label: 'Ingress & Impact Rating', key: 'protection' },
        { label: 'Chassis Material', key: 'casingMaterial' },
        { label: 'Color & Finish', key: 'color' },
      ],
    },
    {
      title: 'Connectivity & Storage',
      icon: <Zap size={18} color="#8944ab" />,
      specs: [
        { label: 'Power Supply', key: 'power' },
        { label: 'Onboard Storage', key: 'storage' },
        { label: 'Two-Way Audio', key: 'audio' },
        { label: 'Video Compression', key: 'compression' },
      ],
    },
  ];

  return (
    <div style={{ overflowX: 'auto', paddingBottom: '32px' }}>
      <table
        style={{
          width: '100%',
          minWidth: '780px',
          borderCollapse: 'separate',
          borderSpacing: '0',
          tableLayout: 'fixed',
          backgroundColor: '#ffffff',
          borderRadius: '16px',
          border: '1px solid rgba(0, 0, 0, 0.08)',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
        }}
      >
        {/* Header with Camera Cards */}
        <thead>
          <tr>
            <th
              style={{
                width: '240px',
                textAlign: 'left',
                padding: '24px 16px',
                borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
                verticalAlign: 'bottom',
              }}
            >
              <div style={{ fontSize: '1.2rem', fontWeight: 700, color: '#1d1d1f' }}>
                Compare Models
              </div>
              <div style={{ fontSize: '0.82rem', color: '#6e6e73', marginTop: '4px' }}>
                Side-by-side technical teardown
              </div>
            </th>

            {products.map((p, idx) => (
              <th
                key={p.id || idx}
                style={{
                  textAlign: 'center',
                  padding: '24px 16px',
                  borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
                  position: 'relative',
                }}
              >
                {/* Remove button if more than 1 */}
                {products.length > 1 && (
                  <button
                    onClick={() => onRemoveProduct(p.id)}
                    style={{
                      position: 'absolute',
                      top: '8px',
                      right: '12px',
                      background: 'rgba(0, 0, 0, 0.06)',
                      border: 'none',
                      color: '#6e6e73',
                      borderRadius: '50%',
                      width: '26px',
                      height: '26px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                    }}
                    title="Remove from comparison"
                  >
                    <X size={14} />
                  </button>
                )}

                {/* Model switcher dropdown */}
                <select
                  value={p.id}
                  onChange={(e) => onSelectProduct(idx, e.target.value)}
                  style={{
                    background: '#f5f5f7',
                    border: '1px solid rgba(0, 0, 0, 0.12)',
                    color: '#1d1d1f',
                    padding: '6px 12px',
                    borderRadius: '8px',
                    fontSize: '0.82rem',
                    marginBottom: '16px',
                    outline: 'none',
                    cursor: 'pointer',
                    maxWidth: '190px',
                  }}
                >
                  {allProducts.map((opt) => (
                    <option key={opt.id} value={opt.id} style={{ background: '#ffffff', color: '#1d1d1f' }}>
                      {opt.name}
                    </option>
                  ))}
                </select>

                <img
                  src={p.images?.[0]}
                  alt={p.name}
                  style={{
                    width: '130px',
                    height: '130px',
                    objectFit: 'contain',
                    margin: '0 auto 12px',
                    filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.08))',
                  }}
                />

                <div style={{ fontSize: '1.1rem', fontWeight: 600, color: '#1d1d1f' }}>
                  {p.name}
                </div>
                <div style={{ fontSize: '0.78rem', color: '#0071e3', marginTop: '2px', fontWeight: 500 }}>
                  {p.series}
                </div>
                <div style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1d1d1f', margin: '10px 0 14px' }}>
                  ${p.price}
                </div>

                <Link
                  to={`/product/${p.slug || p.id}`}
                  className="btn-primary"
                  style={{ fontSize: '0.78rem', padding: '6px 16px' }}
                >
                  View Details
                </Link>
              </th>
            ))}
          </tr>
        </thead>

        {/* Spec Sections */}
        <tbody>
          {specSections.map((section, sIdx) => (
            <React.Fragment key={sIdx}>
              <tr>
                <td
                  colSpan={products.length + 1}
                  style={{
                    padding: '20px 16px 10px',
                    background: '#f5f5f7',
                    borderTop: '1px solid rgba(0, 0, 0, 0.08)',
                    fontWeight: 600,
                    fontSize: '0.95rem',
                    color: '#1d1d1f',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    {section.icon}
                    <span>{section.title}</span>
                  </div>
                </td>
              </tr>

              {section.specs.map((item, iIdx) => (
                <tr
                  key={iIdx}
                  style={{
                    borderBottom: '1px solid rgba(0, 0, 0, 0.04)',
                  }}
                >
                  <td
                    style={{
                      padding: '14px 16px',
                      color: '#6e6e73',
                      fontSize: '0.85rem',
                      fontWeight: 500,
                      verticalAlign: 'top',
                      borderRight: '1px solid rgba(0, 0, 0, 0.04)',
                    }}
                  >
                    {item.label}
                  </td>

                  {products.map((p) => (
                    <td
                      key={p.id}
                      style={{
                        padding: '14px 16px',
                        fontSize: '0.85rem',
                        color: '#1d1d1f',
                        textAlign: 'center',
                        verticalAlign: 'top',
                        borderRight: '1px solid rgba(0, 0, 0, 0.04)',
                      }}
                    >
                      {item.render ? item.render(p) : p[item.key] || '—'}
                    </td>
                  ))}
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}
