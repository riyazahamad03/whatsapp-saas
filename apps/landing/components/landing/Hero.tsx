"use client";

import { useEffect, useState } from "react";
import { Icons } from "./Icons";
import { Bubble, FloatCard } from "./Primitives";
import { useMouseParallax } from "./hooks";
import { HeroBackdrop } from "./HeroBackdrop";
import { Hero3D } from "./Hero3D";

const heroMessages = [
  { f: "them" as const, name: "Priya · Salon", t: "Hi! Booking a hair spa for Saturday 4pm?", time: "10:22" },
  { f: "me" as const, name: "let's chat", t: "Confirmed ✓ Reminder sent 1hr before.", time: "10:22" },
  { f: "them" as const, name: "Ramesh · Hyundai", t: "Is my Creta service due?", time: "10:23" },
  { f: "me" as const, name: "let's chat", t: "Yes — service due 12 May. Slot at 9:30?", time: "10:23" },
  { f: "them" as const, name: "Anita · Admissions", t: "Need info on B.Tech CSE.", time: "10:24" },
  { f: "me" as const, name: "let's chat", t: "Sending brochure + counsellor link.", time: "10:24" },
  { f: "them" as const, name: "Vikram · Insurance", t: "Renewed my policy?", time: "10:25" },
  { f: "me" as const, name: "let's chat", t: "Renewed. PDF receipt sent.", time: "10:25" },
];

const HeroPhoneScreen = () => (
  <div className="relative h-full w-full overflow-hidden">
    <div className="flex items-center gap-2 border-b border-white/5 bg-[#0e1117]/95 px-3 py-2.5">
      <div className="h-7 w-7 rounded-full bg-gradient-to-br from-accent to-accent-deep flex items-center justify-center text-[10px] font-bold text-[#042311]">
        LC
      </div>
      <div className="flex-1">
        <div className="text-[11.5px] font-medium text-ink-100">let&apos;s chat — Inbox</div>
        <div className="flex items-center gap-1 text-[9.5px] text-accent">
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
          12,481 live conversations
        </div>
      </div>
      <Icons.Filter size={14} className="text-ink-300" />
    </div>

    <div className="relative h-[calc(100%-42px)] overflow-hidden bg-[#0a0c10]">
      <div
        className="absolute inset-x-0 top-0 flex flex-col gap-2 px-3 py-3"
        style={{ animation: "hero-stream 24s linear infinite" }}
      >
        {[...heroMessages, ...heroMessages, ...heroMessages].map((m, i) => (
          <div key={i} className="flex flex-col gap-0.5">
            <div className="text-[9.5px] text-ink-400 px-1 font-mono uppercase tracking-wider">
              {m.name}
            </div>
            <Bubble from={m.f} time={m.time}>
              {m.t}
            </Bubble>
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-[#0a0c10] to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0a0c10] to-transparent" />
    </div>
  </div>
);

export const Hero = () => {
  const parallax = useMouseParallax(1);
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const on = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  const phoneRY = -22 + parallax.x * 4;
  const phoneRX = 14 + parallax.y * 3 - Math.min(28, scrollY * 0.04);

  return (
    <section
      className="relative isolate overflow-hidden pt-32 pb-24 sm:pt-36 sm:pb-40"
      style={{ perspective: "1800px" }}
    >
      <div className="pointer-events-none absolute inset-0 dot-grid opacity-40 [mask-image:radial-gradient(60%_50%_at_50%_30%,#000_30%,transparent_80%)]" />
      <HeroBackdrop parallax={parallax} />
      <Hero3D className="pointer-events-none fixed inset-0 z-0 opacity-70" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex justify-center">
          <a
            href="#"
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[12px] text-ink-200 hover:bg-white/[0.06] transition"
          >
            <span className="rounded-full bg-accent/15 px-1.5 py-[1px] text-[10px] font-mono uppercase tracking-wider text-accent">
              new
            </span>
            Service Automation 2.0 — multi-step flows &amp; live agent handoff
            <Icons.Arrow size={12} stroke={2} />
          </a>
        </div>

        <div className="mx-auto mt-7 max-w-4xl text-center">
          <h1 className="font-display text-[clamp(2.8rem,7vw,6.4rem)] leading-[0.92] tracking-[-0.045em] text-balance">
            <span className="text-gradient">Your entire business.</span>
            <br />
            <span className="text-gradient">Running on </span>
            <span className="font-serif-it text-accent-grad">WhatsApp</span>
            <span className="text-gradient">.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-[clamp(1rem,1.25vw,1.18rem)] leading-[1.55] text-ink-300 text-pretty">
            Run campaigns, automate services and send intelligent reminders — all from one
            cinematic admin portal. The platform 50,000+ ops teams use to turn conversations into
            revenue.
          </p>
          <div className="mt-9 flex items-center justify-center gap-3">
            <a
              href="#cta"
              className="inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 text-[14px] font-medium btn-accent transition"
            >
              Book a demo <Icons.Arrow size={14} stroke={2.2} />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[14px] font-medium btn-ghost transition"
            >
              <Icons.Play size={12} stroke={2} /> Start free trial
            </a>
          </div>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-1 text-[12px] text-ink-400">
            <span className="inline-flex items-center gap-1.5">
              <Icons.Check size={12} className="text-accent" /> Free 14-day trial
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Icons.Check size={12} className="text-accent" /> No credit card
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Icons.Check size={12} className="text-accent" /> Meta-verified BSP
            </span>
          </div>
        </div>

        <div
          className="relative mt-16 flex items-center justify-center"
          style={{ perspective: "1600px" }}
        >
          <FloatCard
            className="absolute -left-2 top-10 w-[230px] hidden md:block"
            style={{
              transform: `translate3d(${parallax.x * -14}px, ${parallax.y * -10}px, 60px) rotate(-4deg)`,
              transition: "transform .3s ease-out",
            }}
          >
            <div className="flex items-center gap-2 text-[11px] text-ink-300 font-mono uppercase tracking-wider">
              <Icons.Chart size={12} className="text-accent" /> Campaign · live
            </div>
            <div className="mt-2 text-[22px] font-display tracking-tight">412,808</div>
            <div className="text-[11px] text-ink-400">messages sent · last 24h</div>
            <div className="mt-3 grid grid-cols-3 gap-1.5">
              <div className="rounded bg-white/5 px-1.5 py-1 text-center">
                <div className="text-[10px] text-ink-400">DEL</div>
                <div className="text-[12px] text-ink-100">98.7%</div>
              </div>
              <div className="rounded bg-white/5 px-1.5 py-1 text-center">
                <div className="text-[10px] text-ink-400">READ</div>
                <div className="text-[12px] text-accent">87.4%</div>
              </div>
              <div className="rounded bg-white/5 px-1.5 py-1 text-center">
                <div className="text-[10px] text-ink-400">CTR</div>
                <div className="text-[12px] text-ink-100">31.2%</div>
              </div>
            </div>
          </FloatCard>

          <FloatCard
            className="absolute right-2 top-32 w-[230px] hidden md:block"
            style={{
              transform: `translate3d(${parallax.x * 18}px, ${parallax.y * -6}px, 100px) rotate(3deg)`,
              transition: "transform .3s ease-out",
            }}
          >
            <div className="flex items-center gap-2 text-[11px] text-ink-300 font-mono uppercase tracking-wider">
              <Icons.Bell size={12} className="text-accent" /> Reminder sent
            </div>
            <div className="mt-2 text-[13px] text-ink-100 leading-snug">
              Hyundai Service · 11 May
              <br />
              <span className="text-ink-300">Slot @ 9:30 AM</span>
            </div>
            <div className="mt-3 flex items-center gap-1.5 text-[11px]">
              <span className="rounded bg-accent/15 text-accent px-1.5 py-0.5">Confirmed</span>
              <span className="rounded bg-white/5 text-ink-200 px-1.5 py-0.5">+₹4,200</span>
            </div>
          </FloatCard>

          <FloatCard
            className="absolute left-8 bottom-2 w-[220px] hidden md:block"
            style={{
              transform: `translate3d(${parallax.x * -10}px, ${parallax.y * 14}px, 40px) rotate(2deg)`,
              transition: "transform .3s ease-out",
            }}
          >
            <div className="flex items-center gap-2 text-[11px] text-ink-300 font-mono uppercase tracking-wider">
              <Icons.Bolt size={12} className="text-accent" /> Flow · Salon
            </div>
            <div className="mt-2 space-y-1.5 text-[11.5px]">
              <div className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Service selected
              </div>
              <div className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Stylist picked
              </div>
              <div className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" /> Awaiting payment
              </div>
              <div className="flex items-center gap-1.5 text-ink-500">
                <span className="h-1.5 w-1.5 rounded-full bg-ink-600" /> Reminder queued
              </div>
            </div>
          </FloatCard>

          <FloatCard
            className="absolute right-6 bottom-6 w-[210px] hidden md:block"
            style={{
              transform: `translate3d(${parallax.x * 22}px, ${parallax.y * 12}px, 120px) rotate(-3deg)`,
              transition: "transform .3s ease-out",
            }}
          >
            <div className="flex items-center gap-2 text-[11px] text-ink-300 font-mono uppercase tracking-wider">
              <Icons.Users size={12} className="text-accent" /> Segment built
            </div>
            <div className="mt-2 text-[12px] text-ink-100">
              Lapsed customers · 90d
              <br />
              <span className="text-ink-300">28,419 contacts</span>
            </div>
            <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/5">
              <div className="h-full bg-accent" style={{ width: "72%" }} />
            </div>
          </FloatCard>

          <div
            className="relative"
            style={{
              transformStyle: "preserve-3d",
              transform: `rotateX(${phoneRX}deg) rotateY(${phoneRY}deg)`,
              transition: "transform .15s linear",
            }}
          >
            <div
              className="relative h-[560px] w-[280px] rounded-[44px] bg-gradient-to-b from-ink-700 to-ink-900 p-[6px] shadow-[0_60px_120px_-30px_rgba(0,0,0,0.7),0_0_0_1px_rgba(255,255,255,0.04)]"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div
                className="pointer-events-none absolute -inset-10 -z-10 rounded-[60px]"
                style={{
                  background:
                    "radial-gradient(closest-side, rgba(37,211,102,0.06), transparent 70%)",
                }}
              />
              <div
                className="relative h-full w-full overflow-hidden rounded-[38px] bg-[#050608]"
                style={{ transform: "translateZ(20px)" }}
              >
                <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-black ring-soft" />
                <HeroPhoneScreen />
              </div>
              <div className="absolute -right-[3px] top-28 h-14 w-[3px] rounded-r bg-ink-600" />
            </div>
            <div
              className="absolute -bottom-12 left-1/2 -z-10 h-12 w-[300px] -translate-x-1/2 rounded-[50%] blur-2xl"
              style={{
                background: "radial-gradient(closest-side, rgba(0,0,0,0.7), transparent 70%)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
