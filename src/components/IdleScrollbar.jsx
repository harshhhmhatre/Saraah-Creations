'use client';

import { useEffect, useRef } from 'react';

/**
 * IdleScrollbar Component
 * Gently and subtly animates the scrollbar slider ("thumb") gradient when the user is idle.
 * Uses the brand's signature emerald-green and antique-gold palette with a slow,
 * organic breathing oscillation. Pauses during active user interaction and resumes seamlessly.
 */
export default function IdleScrollbar() {
  const isIdleRef = useRef(false);
  const idleTimeoutRef = useRef(null);
  const animFrameRef = useRef(null);
  const progressRef = useRef(0);
  const lastTimeRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const root = document.documentElement;

    const updateLoop = (timestamp) => {
      if (!isIdleRef.current) return;

      if (lastTimeRef.current !== null) {
        const delta = timestamp - lastTimeRef.current;
        // Slow, elegant 10-second full breathing cycle
        progressRef.current = (progressRef.current + delta / 10000) % 1;
      }
      lastTimeRef.current = timestamp;

      // Smooth sinusoidal oscillation (-1 to 1)
      const sin = Math.sin(progressRef.current * Math.PI * 2);

      // Top color: Subtle drift in the signature emerald / forest green spectrum
      // Center hue ~110° (emerald), shifting gently between ~98° (rich olive-forest) and ~122° (radiant emerald)
      const hue1 = (110 + sin * 12).toFixed(1);
      const sat1 = (54 + sin * 6).toFixed(1);
      const light1 = (38 + sin * 4).toFixed(1);

      // Bottom color: Subtle drift in the signature luxury gold / bronze spectrum
      // Center hue ~44° (amber gold), shifting gently between ~38° (warm bronze) and ~50° (luminous champagne gold)
      const hue2 = (44 + sin * 6).toFixed(1);
      const sat2 = (68 + sin * 6).toFixed(1);
      const light2 = (42 + sin * 5).toFixed(1);

      // Subtle ambient glow
      const glowAlpha = (0.15 + (sin + 1) * 0.08).toFixed(2);

      root.style.setProperty('--scroll-thumb-start', `hsl(${hue1}, ${sat1}%, ${light1}%)`);
      root.style.setProperty('--scroll-thumb-end', `hsl(${hue2}, ${sat2}%, ${light2}%)`);
      root.style.setProperty(
        '--scroll-thumb-glow',
        `hsla(${hue1}, 65%, 45%, ${glowAlpha})`
      );

      animFrameRef.current = requestAnimationFrame(updateLoop);
    };

    const startIdle = () => {
      if (isIdleRef.current) return;
      isIdleRef.current = true;
      lastTimeRef.current = null;
      animFrameRef.current = requestAnimationFrame(updateLoop);
    };

    const onUserActivity = () => {
      // If currently idle, pause animation loop to save resources and avoid distraction while scrolling
      if (isIdleRef.current) {
        isIdleRef.current = false;
        if (animFrameRef.current) {
          cancelAnimationFrame(animFrameRef.current);
          animFrameRef.current = null;
        }
        lastTimeRef.current = null;
      }

      // Reset the idle timer (triggers after 1.2s of no interaction)
      if (idleTimeoutRef.current) {
        clearTimeout(idleTimeoutRef.current);
      }
      idleTimeoutRef.current = setTimeout(startIdle, 1200);
    };

    const events = ['mousemove', 'mousedown', 'keydown', 'scroll', 'touchstart', 'wheel'];
    events.forEach((evt) => {
      window.addEventListener(evt, onUserActivity, { passive: true });
    });

    // Start idle cycle after initial page load
    idleTimeoutRef.current = setTimeout(startIdle, 1500);

    return () => {
      events.forEach((evt) => {
        window.removeEventListener(evt, onUserActivity);
      });
      if (idleTimeoutRef.current) clearTimeout(idleTimeoutRef.current);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      root.style.removeProperty('--scroll-thumb-start');
      root.style.removeProperty('--scroll-thumb-end');
      root.style.removeProperty('--scroll-thumb-glow');
    };
  }, []);

  return null;
}
