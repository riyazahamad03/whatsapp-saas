"use client";

const logos = [
  "NATURALS SALON",
  "HYUNDAI",
  "TANISHQ",
  "BYJU'S",
  "APOLLO",
  "URBAN COMPANY",
  "ZUDIO",
  "PHARMEASY",
  "CRED",
  "SWIGGY",
  "LICIOUS",
  "OYO",
  "PINE LABS",
  "RAZORPAY",
];

export const Logos = () => (
  <section className="relative border-y hairline bg-ink-950/60 py-10 overflow-hidden">
    <div className="mx-auto max-w-7xl px-6 mb-6 flex items-center justify-between">
      <div className="text-[11px] font-mono uppercase tracking-[0.22em] text-ink-400">
        Trusted by 50,000+ ops teams
      </div>
      <div className="hidden sm:flex items-center gap-2 text-[11px] text-ink-400">
        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
        <span className="font-mono">99.98% uptime · Meta verified BSP</span>
      </div>
    </div>
    <div className="relative">
      <div className="anim-ticker flex w-max items-center gap-12 whitespace-nowrap">
        {[...logos, ...logos].map((l, i) => (
          <div
            key={i}
            className="font-display text-[22px] tracking-[-0.02em] text-ink-300/70 hover:text-ink-100 transition-colors"
          >
            {l}
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-ink-950 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-ink-950 to-transparent" />
    </div>
  </section>
);
