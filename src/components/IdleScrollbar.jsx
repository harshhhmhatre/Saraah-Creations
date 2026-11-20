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

      // Top color: Subtle drift in the Marquee Gold spectrum (Classic Cinema & Editorial Gold)
      // Center hue ~45° (Marquee Gold #D4AF37), shifting gently between ~42° (Antique Gold) and ~48° (Champagne Mist)
      const hue1 = (45 + sin * 3).toFixed(1);
      const sat1 = (65 + sin * 5).toFixed(1);
      const light1 = (48 + sin * 4).toFixed(1);

      // Bottom color: Subtle drift in the warm antique gold spectrum
      // Center hue ~42° (Deep Gold), shifting gently between ~40° and ~45°
      const hue2 = (42 + sin * 3).toFixed(1);
      const sat2 = (70 + sin * 5).toFixed(1);
      const light2 = (36 + sin * 4).toFixed(1);

      // Subtle ambient gold glow
      const glowAlpha = (0.2 + (sin + 1) * 0.08).toFixed(2);

      root.style.setProperty('--scroll-thumb-start', `hsl(${hue1}, ${sat1}%, ${light1}%)`);
      root.style.setProperty('--scroll-thumb-end', `hsl(${hue2}, ${sat2}%, ${light2}%)`);
      root.style.setProperty(
        '--scroll-thumb-glow',
        `hsla(45, 75%, 50%, ${glowAlpha})`
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
