"use client";

import { useEffect, useRef } from "react";

const PARTICLES = 5200;
const Z_NEAR = 0.7;
const Z_FAR = 12;
const CAMERA_HEIGHT = 1.6;

// Particles are scattered uniformly in screen space (x relative to depth,
// evenly in 1/z) so the surface has an even density without grid artifacts
const particles = Array.from({ length: PARTICLES }, () => {
  const z = 1 / (1 / Z_NEAR - (1 / Z_NEAR - 1 / Z_FAR) * Math.random());
  return {
    x: (Math.random() * 2 - 1) * 1.8 * z,
    z,
    fog: 1 - (z - Z_NEAR) / (Z_FAR - Z_NEAR),
  };
});

// Base dot color and the accent (emerald) used on the wave crests, per theme
const PALETTE = {
  dark: { base: [255, 255, 255], accent: [52, 211, 153], alpha: 0.85 },
  light: { base: [100, 116, 139], accent: [5, 150, 105], alpha: 0.9 },
};

export const HeroBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = 0;
    let height = 0;
    let frame = 0;
    let visible = true;
    const pointer = { x: 0, y: 0 };
    const tilt = { x: 0, y: 0 };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = (time: number) => {
      const t = time * 0.0004;
      const palette = darkQuery.matches ? PALETTE.dark : PALETTE.light;

      // Ease the camera towards the pointer for a subtle parallax
      tilt.x += (pointer.x - tilt.x) * 0.04;
      tilt.y += (pointer.y - tilt.y) * 0.04;

      context.clearRect(0, 0, width, height);

      const horizon = height * 0.38;
      const scale = height * 0.47;
      const aspect = width / height;
      // Keep the same on-screen density on smaller viewports
      const count = Math.round(
        PARTICLES * Math.min(1, (width * height) / (1280 * 900))
      );

      for (let i = 0; i < count; i++) {
        const particle = particles[i];
        const x = particle.x * aspect * 0.75 + tilt.x * 0.8;
        const { z, fog } = particle;

        const wave =
          Math.sin(x * 0.45 + t * 1.5) * 0.3 +
          Math.cos(z * 0.6 - t) * 0.3 +
          Math.sin(x * 0.25 + z * 0.4 + t * 0.8) * 0.25;

        const y = CAMERA_HEIGHT + tilt.y * 0.2 - wave;
        const screenX = width / 2 + (x / z) * scale;
        const screenY = horizon + (y / z) * scale;

        if (screenX < -4 || screenX > width + 4 || screenY > height + 4)
          continue;

        // 0 at the wave troughs, 1 at the crests
        const crest = Math.max(0, Math.min(1, (wave + 0.4) / 1.1));
        const [r, g, b] = palette.base.map((channel, i) =>
          Math.round(channel + (palette.accent[i] - channel) * crest)
        );
        const size = 0.8 + fog * 1.8;

        context.fillStyle = `rgba(${r}, ${g}, ${b}, ${
          palette.alpha * (0.15 + fog * 0.85) * (0.4 + crest * 0.6)
        })`;
        context.fillRect(screenX, screenY, size, size);
      }
    };

    const loop = (time: number) => {
      draw(time);
      frame = requestAnimationFrame(loop);
    };

    const start = () => {
      cancelAnimationFrame(frame);
      if (reducedMotion) draw(0);
      else if (visible && !document.hidden) frame = requestAnimationFrame(loop);
    };

    const onPointerMove = (event: PointerEvent) => {
      pointer.x = (event.clientX / window.innerWidth - 0.5) * 2;
      pointer.y = (event.clientY / window.innerHeight - 0.5) * 2;
    };

    // Stop rendering while the hero is scrolled out of view or the tab is hidden
    const intersection = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      start();
    });
    const resizeObserver = new ResizeObserver(() => {
      resize();
      if (reducedMotion) draw(0);
    });

    resize();
    intersection.observe(canvas);
    resizeObserver.observe(canvas);
    document.addEventListener("visibilitychange", start);
    darkQuery.addEventListener("change", start);
    if (!reducedMotion) window.addEventListener("pointermove", onPointerMove);

    return () => {
      cancelAnimationFrame(frame);
      intersection.disconnect();
      resizeObserver.disconnect();
      document.removeEventListener("visibilitychange", start);
      darkQuery.removeEventListener("change", start);
      window.removeEventListener("pointermove", onPointerMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[100svh] w-full animate-fade animate-once animate-duration-[1500ms] [mask-image:linear-gradient(to_bottom,black_40%,transparent)]"
    />
  );
};
