import React, { useState, useEffect, useRef } from 'react';

/**
 * Hook to detect if user has requested reduced motion in their OS
 */
export function useReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(media.matches);

    const listener = (e) => setReduced(e.matches);
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, []);

  return reduced;
}

/**
 * Hook to compute normalized 0 to 1 scroll progress through a container element
 */
export function useScrollProgress(containerRef) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalScrollable = rect.height - windowHeight;

      if (totalScrollable <= 0) {
        setProgress(0);
        return;
      }

      // Calculate progress from 0 (top enters) to 1 (bottom reaches viewport bottom)
      const currentScroll = -rect.top;
      const rawProgress = currentScroll / totalScrollable;
      const clamped = Math.max(0, Math.min(1, rawProgress));
      setProgress(clamped);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [containerRef]);

  return progress;
}

/**
 * ScrollReveal Component:
 * Reveals children with Apple-style staggered timing as they reach viewport.
 * Heading (0ms), Subtitle (100ms), Description (180ms), Button (260ms), Image (100ms)
 */
export function ScrollReveal({
  children,
  stagger = 0,
  threshold = 0.15,
  className = '',
  style = {},
  direction = 'up', // 'up', 'down', 'none'
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (prefersReduced) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, prefersReduced]);

  const translateYVal = direction === 'up' ? '36px' : direction === 'down' ? '-36px' : '0px';

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: prefersReduced || isVisible ? 1 : 0,
        transform:
          prefersReduced || isVisible
            ? 'translate3d(0, 0, 0) scale(1)'
            : `translate3d(0, ${translateYVal}, 0) scale(0.96)`,
        transition: prefersReduced
          ? 'none'
          : `opacity 0.75s cubic-bezier(0.16, 1, 0.3, 1) ${stagger}ms, transform 0.75s cubic-bezier(0.16, 1, 0.3, 1) ${stagger}ms`,
        willChange: 'opacity, transform',
        ...style,
      }}
    >
      {children}
    </div>
  );
}

/**
 * ParallaxProduct Component:
 * Shifts background/image slightly slower than page scroll to produce Apple's signature physical depth
 */
export function ParallaxProduct({ children, speed = 0.15, className = '', style = {} }) {
  const ref = useRef(null);
  const [offsetY, setOffsetY] = useState(0);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced) return;

    const onScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const viewportMid = window.innerHeight / 2;
      const elemMid = rect.top + rect.height / 2;
      const diff = (elemMid - viewportMid) * speed;
      setOffsetY(diff);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [speed, prefersReduced]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transform: prefersReduced ? 'none' : `translate3d(0, ${offsetY}px, 0)`,
        transition: 'transform 0.1s linear',
        willChange: 'transform',
        ...style,
      }}
    >
      {children}
    </div>
  );
}
