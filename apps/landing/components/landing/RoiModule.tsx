"use client";

import { useRef } from "react";
import { Icons } from "./Icons";
import { BigHeading, Reveal, SectionLabel, Sub } from "./Primitives";
import { useCountUp, useScrollProgress } from "./hooks";

export const RoiModule = () => {
  const ref = useRef<HTMLElement>(null);
  const p = useScrollProgress(ref);
  const active = p > 0.15;

  const conv = useCountUp(312, active, 1800);
  const hours = useCountUp(820, active, 1900);
  const ret = useCountUp(46, active, 2000);
  const rev = useCountUp(4.2, active, 2100);

  const metrics: {
    l: string;
    v: string;
    sub: string;
    I: (p: { size?: number; className?: string }) => JSX.Element;
    accent?: boolean;
  }[] = [
    {
      l: "Conversion lift",
      v: `+${Math.round(conv)}%`,
      sub: "WhatsApp vs email",
      I: Icons.Spark,
      accent: true,
    },
    {
      l: "Manual hours saved",
      v: `${Math.round(hours)}/mo`,
      sub: "per 10-person ops team",
      I: Icons.Bolt,
    },
    {
      l: "Retention improvement",
      v: `+${Math.round(ret)}%`,
      sub: "D60 reactivation",
      I: Icons.Users,
    },
    {
      l: "Revenue per contact",
      v: `${rev.toFixed(1)}×`,
      sub: "vs cold call channel",
      I: Icons.Money,
      accent: true,
    },
  ];

  return (
    <section ref={ref} className="relative py-28 sm:py-36 border-t hairline">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <SectionLabel num="05" label="ROI" />
          <div className="mt-6 max-w-3xl">
            <BigHeading>
              Numbers your CFO
              <br />
              <span className="font-serif-it text-accent-grad">will frame on the wall.</span>
            </BigHeading>
            <Sub className="mt-5">
              Average across 50,000+ businesses in the first 90 days. Measured against their
              previous email + call-centre baseline.
            </Sub>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {metrics.map((m, i) => (
            <div key={i} className="glass rounded-2xl p-5 roi-card" style={{ perspective: "800px" }}>
              <div className="flex items-center justify-between">
                <m.I size={16} className={m.accent ? "text-accent" : "text-ink-300"} />
                <span className="text-[10px] font-mono uppercase tracking-wider text-ink-400">
                  avg · 90d
                </span>
              </div>
              <div
                className={`mt-6 font-display text-[clamp(2.4rem,4vw,3.2rem)] leading-none tracking-[-0.04em] ${
                  m.accent ? "text-accent-grad" : "text-gradient"
                }`}
              >
                {m.v}
              </div>
              <div className="mt-2 text-[13px] text-ink-100">{m.l}</div>
              <div className="text-[11.5px] text-ink-400">{m.sub}</div>
            </div>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-2 text-[12px]">
          {(
            [
              ["98.7%", "delivery rate"],
              ["0.4s", "avg bot reply"],
              ["72%", "tickets auto-closed"],
              ["11×", "CTR vs email"],
            ] as const
          ).map(([v, l]) => (
            <div
              key={l}
              className="rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2.5 flex items-baseline gap-2"
            >
              <span className="font-display text-[18px] text-accent">{v}</span>
              <span className="text-ink-300">{l}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
