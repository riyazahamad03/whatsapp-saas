"use client";

import { useEffect, useRef, useState, type RefObject } from "react";

export function useReveal(
  ref: RefObject<Element>,
  opts: { threshold?: number; rootMargin?: string } = {},
) {
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      {
        threshold: opts.threshold ?? 0.2,
        rootMargin: opts.rootMargin ?? "0px 0px -10% 0px",
      },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [ref, opts.threshold, opts.rootMargin]);
  return seen;
}

export function useScrollProgress(ref: RefObject<HTMLElement>) {
  const [p, setP] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const tick = () => {
      if (!el) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const start = vh * 0.9;
      const end = -r.height + vh * 0.1;
      const raw = (start - r.top) / (start - end);
      setP(Math.max(0, Math.min(1, raw)));
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(tick);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    tick();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [ref]);
  return p;
}

export function useCountUp(target: number, active: boolean, duration = 1400) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!active) return;
    let raf = 0;
    let start: number | undefined;
    const step = (t: number) => {
      if (start === undefined) start = t;
      const k = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - k, 3);
      setN(target * eased);
      if (k < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [active, target, duration]);
  return n;
}

export function useMouseParallax(strength = 1) {
  const [p, setP] = useState({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      target.current = {
        x: ((e.clientX / w) * 2 - 1) * strength,
        y: ((e.clientY / h) * 2 - 1) * strength,
      };
    };
    let raf = 0;
    const tick = () => {
      setP((prev) => ({
        x: prev.x + (target.current.x - prev.x) * 0.08,
        y: prev.y + (target.current.y - prev.y) * 0.08,
      }));
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    window.addEventListener("mousemove", onMove);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
    };
  }, [strength]);
  return p;
}
