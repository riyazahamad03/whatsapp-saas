"use client";

import { Icons } from "./Icons";
import { Eyebrow } from "./Primitives";

export const FinalCta = () => (
  <section id="cta" className="relative isolate overflow-hidden border-t hairline">
    <div className="pointer-events-none absolute inset-0 dot-grid opacity-30 [mask-image:radial-gradient(60%_50%_at_50%_50%,#000,transparent_80%)]" />
    <div
      className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[700px] w-[1200px] -translate-x-1/2 -translate-y-1/2 rounded-full"
      style={{
        background: "radial-gradient(closest-side, rgba(37,211,102,0.18), transparent 70%)",
      }}
    />

    <div className="mx-auto max-w-5xl px-6 py-32 text-center">
      <Eyebrow>The future of business automation</Eyebrow>
      <h2 className="mt-5 font-display text-[clamp(2.6rem,7vw,6rem)] leading-[0.9] tracking-[-0.045em] text-balance">
        <span className="text-gradient">Stop replying.</span>
        <br />
        <span className="font-serif-it text-accent-grad">Start converting.</span>
      </h2>
      <p className="mx-auto mt-6 max-w-xl text-[16px] text-ink-300 text-pretty">
        Spin up your first campaign, flow and reminder pipeline in under 20 minutes. We migrate
        from your existing tool for free.
      </p>
      <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
        <a
          href="#"
          className="inline-flex items-center gap-1.5 rounded-full px-6 py-3 text-[14px] font-medium btn-accent transition"
        >
          Book a 20-min demo <Icons.Arrow size={14} stroke={2.2} />
        </a>
        <a
          href="#"
          className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-[14px] font-medium btn-ghost transition"
        >
          <Icons.Play size={12} stroke={2} /> Start free trial
        </a>
      </div>
      <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-1 text-[12px] text-ink-400">
        <span className="inline-flex items-center gap-1.5">
          <Icons.Check size={12} className="text-accent" /> 14-day free trial
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Icons.Check size={12} className="text-accent" /> Free migration
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Icons.Check size={12} className="text-accent" /> Meta-verified BSP
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Icons.Check size={12} className="text-accent" /> SOC 2 · ISO 27001
        </span>
      </div>
    </div>
  </section>
);
