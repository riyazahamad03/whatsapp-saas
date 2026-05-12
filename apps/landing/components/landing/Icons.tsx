import type { SVGProps, ReactNode } from "react";

type IconBaseProps = {
  size?: number;
  className?: string;
  stroke?: number;
} & Omit<SVGProps<SVGSVGElement>, "stroke">;

type PathIconProps = IconBaseProps & { d?: string; children?: ReactNode };

const Icon = ({
  d,
  size = 16,
  className = "",
  stroke = 1.6,
  children,
  ...rest
}: PathIconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={stroke}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...rest}
  >
    {d ? <path d={d} /> : children}
  </svg>
);

export const Icons = {
  Logo: ({ size = 24, className = "" }: { size?: number; className?: string }) => (
    <svg width={size} height={size} viewBox="0 0 32 32" className={className} fill="none">
      <defs>
        <linearGradient id="lcg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#6cf09e" />
          <stop offset="1" stopColor="#128c7e" />
        </linearGradient>
      </defs>
      <path
        d="M16 2c7.732 0 14 6.044 14 13.5 0 7.456-6.268 13.5-14 13.5-2.32 0-4.51-.546-6.45-1.515L2 30l2.7-7.087C3.038 20.704 2 18.214 2 15.5 2 8.044 8.268 2 16 2Z"
        fill="url(#lcg)"
      />
      <path
        d="M11 11.5c0-.83.67-1.5 1.5-1.5h.9c.4 0 .76.24.92.61l.95 2.27a1 1 0 0 1-.23 1.13l-.78.78a.6.6 0 0 0-.13.68 7.5 7.5 0 0 0 3.4 3.4.6.6 0 0 0 .68-.13l.78-.78a1 1 0 0 1 1.13-.23l2.27.95c.37.16.61.52.61.92v.9c0 .83-.67 1.5-1.5 1.5h-.5c-5.247 0-9.5-4.253-9.5-9.5v-.5Z"
        fill="#042311"
      />
    </svg>
  ),
  Arrow: (p: IconBaseProps) => <Icon {...p} d="M5 12h14M13 6l6 6-6 6" />,
  Plus: (p: IconBaseProps) => <Icon {...p} d="M12 5v14M5 12h14" />,
  Check: (p: IconBaseProps) => <Icon {...p} d="M5 12l5 5L20 7" />,
  CheckCircle: (p: IconBaseProps) => (
    <Icon {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M8 12l3 3 5-6" />
    </Icon>
  ),
  X: (p: IconBaseProps) => <Icon {...p} d="M6 6l12 12M6 18L18 6" />,
  Send: (p: IconBaseProps) => <Icon {...p} d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7Z" />,
  Bolt: (p: IconBaseProps) => <Icon {...p} d="M13 2 3 14h7l-1 8 10-12h-7l1-8Z" />,
  Bell: (p: IconBaseProps) => (
    <Icon {...p} d="M6 8a6 6 0 0 1 12 0c0 7 3 7 3 9H3c0-2 3-2 3-9ZM10 21a2 2 0 0 0 4 0" />
  ),
  Spark: (p: IconBaseProps) => (
    <Icon
      {...p}
      d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8"
    />
  ),
  Users: (p: IconBaseProps) => (
    <Icon {...p}>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2 21c0-3.5 3-6 7-6s7 2.5 7 6" />
      <circle cx="17" cy="7" r="2.5" />
      <path d="M16 14c3 0 6 2 6 5" />
    </Icon>
  ),
  Chart: (p: IconBaseProps) => <Icon {...p} d="M3 3v18h18M7 14l3-3 3 3 5-6" />,
  Cog: (p: IconBaseProps) => (
    <Icon {...p}>
      <circle cx="12" cy="12" r="3" />
      <path d="M19 12a7 7 0 0 0-.1-1.2l2-1.5-2-3.4-2.4.8a7 7 0 0 0-2-1.2L14 3h-4l-.5 2.5a7 7 0 0 0-2 1.2l-2.4-.8-2 3.4 2 1.5A7 7 0 0 0 5 12c0 .4 0 .8.1 1.2l-2 1.5 2 3.4 2.4-.8a7 7 0 0 0 2 1.2L10 21h4l.5-2.5a7 7 0 0 0 2-1.2l2.4.8 2-3.4-2-1.5c.1-.4.1-.8.1-1.2Z" />
    </Icon>
  ),
  Calendar: (p: IconBaseProps) => (
    <Icon {...p}>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18M8 3v4M16 3v4" />
    </Icon>
  ),
  Phone: (p: IconBaseProps) => (
    <Icon {...p}>
      <rect x="6" y="2" width="12" height="20" rx="3" />
      <path d="M11 18h2" />
    </Icon>
  ),
  Car: (p: IconBaseProps) => (
    <Icon
      {...p}
      d="M3 13l2-5a3 3 0 0 1 3-2h8a3 3 0 0 1 3 2l2 5M5 13h14v5H5zM7 18v2M17 18v2"
    />
  ),
  Scissors: (p: IconBaseProps) => (
    <Icon {...p}>
      <circle cx="6" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <path d="M8.1 8.1 21 21M14 14l7-7" />
    </Icon>
  ),
  Cap: (p: IconBaseProps) => (
    <Icon {...p} d="M22 9 12 4 2 9l10 5 10-5ZM6 11v6c0 1 3 3 6 3s6-2 6-3v-6" />
  ),
  Tag: (p: IconBaseProps) => (
    <Icon {...p}>
      <path d="M3 12V3h9l9 9-9 9-9-9Z" />
      <circle cx="8" cy="8" r="1.2" fill="currentColor" />
    </Icon>
  ),
  Layers: (p: IconBaseProps) => (
    <Icon {...p} d="m12 2 10 6-10 6L2 8l10-6ZM2 14l10 6 10-6M2 18l10 6 10-6" />
  ),
  Inbox: (p: IconBaseProps) => (
    <Icon {...p} d="M3 13l3-8h12l3 8v6H3zM3 13h5l1 3h6l1-3h5" />
  ),
  Filter: (p: IconBaseProps) => <Icon {...p} d="M3 5h18l-7 9v6l-4-2v-4L3 5Z" />,
  Money: (p: IconBaseProps) => (
    <Icon {...p}>
      <rect x="2" y="6" width="20" height="12" rx="2" />
      <circle cx="12" cy="12" r="3" />
      <path d="M5 9v6M19 9v6" />
    </Icon>
  ),
  Eye: (p: IconBaseProps) => <Icon {...p} d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />,
  Globe: (p: IconBaseProps) => (
    <Icon {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
    </Icon>
  ),
  Sparkles: (p: IconBaseProps) => (
    <Icon
      {...p}
      d="M5 3v4M3 5h4M19 14v4M17 16h4M12 4l2.5 5.5L20 12l-5.5 2.5L12 20l-2.5-5.5L4 12l5.5-2.5L12 4Z"
    />
  ),
  Lock: (p: IconBaseProps) => (
    <Icon {...p}>
      <rect x="4" y="11" width="16" height="10" rx="2" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" />
    </Icon>
  ),
  Play: (p: IconBaseProps) => <Icon {...p} d="M7 4v16l13-8L7 4Z" />,
};

export type IconComponent = (typeof Icons)[keyof typeof Icons];
