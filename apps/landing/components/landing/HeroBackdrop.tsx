"use client";

export const HeroBackdrop = ({ parallax }: { parallax: { x: number; y: number } }) => (
  <div className="pointer-events-none absolute inset-0 overflow-hidden">
    <div
      className="absolute left-1/2 top-[55%] -translate-x-1/2 -translate-y-1/2"
      style={{
        transform: `translate(-50%,-50%) rotateX(${68 + parallax.y * 2}deg) rotateZ(${parallax.x * 4}deg)`,
        transformStyle: "preserve-3d",
        transition: "transform .3s ease-out",
      }}
    >
      {[480, 620, 780, 960].map((sz) => (
        <div
          key={sz}
          className="absolute left-1/2 top-1/2 rounded-full border"
          style={{
            width: sz,
            height: sz,
            borderColor: "rgba(37,211,102,0.10)",
            transform: "translate(-50%,-50%)",
          }}
        >
          <span
            className="absolute -top-1 left-1/2 -translate-x-1/2 h-2 w-2 rounded-full bg-accent"
            style={{ boxShadow: "0 0 16px rgba(37,211,102,0.9)" }}
          />
        </div>
      ))}
    </div>
  </div>
);
