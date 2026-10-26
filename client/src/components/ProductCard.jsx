import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Check } from 'lucide-react';

export default function ProductCard({ product, onToggleCompare, isCompared }) {
  return (
    <div
      className="glass-card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        position: 'relative',
        height: '100%',
        backgroundColor: '#ffffff',
        border: '1px solid rgba(0, 0, 0, 0.08)',
        borderRadius: '18px',
      }}
    >
      {/* Top badges */}
      <div
        style={{
          position: 'absolute',
          top: '16px',
          left: '16px',
          right: '16px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          zIndex: 2,
        }}
      >
        <span className={`badge-pill ${product.isFlagship ? 'blue' : ''}`}>
          {product.badge || product.category}
        </span>
        {onToggleCompare && (
          <button
            onClick={() => onToggleCompare(product)}
            style={{
              background: isCompared ? '#0071e3' : 'rgba(0, 0, 0, 0.06)',
              border: isCompared ? '1px solid #0071e3' : '1px solid rgba(0, 0, 0, 0.12)',
              color: isCompared ? '#ffffff' : '#1d1d1f',
              borderRadius: '9999px',
              padding: '4px 10px',
              fontSize: '0.72rem',
              fontWeight: 500,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              transition: 'all 0.2s ease',
            }}
          >
            {isCompared ? <Check size={12} strokeWidth={3} /> : null}
            {isCompared ? 'Comparing' : '+ Compare'}
          </button>
        )}
      </div>

      {/* Product Image Stage with Subtle Glow */}
      <Link
        to={`/product/${product.slug || product.id}`}
        style={{
          display: 'block',
          position: 'relative',
          padding: '48px 24px 20px',
          background: 'radial-gradient(circle at 50% 60%, rgba(0, 113, 227, 0.05) 0%, transparent 70%)',
          textAlign: 'center',
          overflow: 'hidden',
        }}
      >
        <img
          src={product.images?.[0] || 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1200&q=80'}
          alt={product.name}
          style={{
            width: '100%',
            height: '210px',
            objectFit: 'contain',
            transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
            filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.08))',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        />
      </Link>

      {/* Product Information */}
      <div
        style={{
          padding: '20px 24px 24px',
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          justifyContent: 'space-between',
        }}
      >
        <div>
          <div style={{ fontSize: '0.75rem', color: '#0071e3', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px' }}>
            {product.series}
          </div>
          <Link
            to={`/product/${product.slug || product.id}`}
            style={{
              textDecoration: 'none',
              color: '#1d1d1f',
              fontSize: '1.25rem',
              fontWeight: 600,
              letterSpacing: '-0.02em',
              display: 'block',
              marginBottom: '6px',
            }}
          >
            {product.name}
          </Link>
          <p
            style={{
              fontSize: '0.85rem',
              color: '#6e6e73',
              lineHeight: 1.45,
              marginBottom: '16px',
              minHeight: '38px',
            }}
          >
            {product.tagline}
          </p>

          {/* Quick Specs Chips */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
            <span
              style={{
                fontSize: '0.72rem',
                background: '#f5f5f7',
                color: '#1d1d1f',
                padding: '4px 8px',
                borderRadius: '6px',
                border: '1px solid rgba(0, 0, 0, 0.06)',
              }}
            >
              {product.resolution.split(' ')[0]}
            </span>
            <span
              style={{
                fontSize: '0.72rem',
                background: '#f5f5f7',
                color: '#1d1d1f',
                padding: '4px 8px',
                borderRadius: '6px',
                border: '1px solid rgba(0, 0, 0, 0.06)',
              }}
            >
              {product.protection}
            </span>
            <span
              style={{
                fontSize: '0.72rem',
                background: '#f5f5f7',
                color: '#1d1d1f',
                padding: '4px 8px',
                borderRadius: '6px',
                border: '1px solid rgba(0, 0, 0, 0.06)',
              }}
            >
              {product.sensor?.split(' ')[0] || 'STARVIS 2'}
            </span>
          </div>
        </div>

        {/* Price & Action Row */}
        <div
          style={{
            paddingTop: '16px',
            borderTop: '1px solid rgba(0, 0, 0, 0.06)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <div style={{ fontSize: '0.7rem', color: '#6e6e73' }}>Starting from</div>
            <div style={{ fontSize: '1.2rem', fontWeight: 700, color: '#1d1d1f' }}>
              ${product.price}
            </div>
          </div>

          <div style={{ display: 'flex', gap: '8px' }}>
            <Link
              to={`/product/${product.slug || product.id}`}
              className="btn-primary"
              style={{
                padding: '6px 14px',
                fontSize: '0.82rem',
              }}
            >
              Explore <ChevronRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
