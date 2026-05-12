import { Icons } from "./Icons";

const groups: [string, string[]][] = [
  [
    "Product",
    ["Campaigns", "Automation", "Reminders", "Admin portal", "Integrations", "API"],
  ],
  [
    "Solutions",
    ["Salons", "Auto dealers", "Education", "Healthcare", "Finance", "Retail"],
  ],
  ["Company", ["About", "Careers", "Customers", "Press", "Contact"]],
  ["Resources", ["Docs", "Templates", "Changelog", "Security", "Status"]],
];

export const Footer = () => (
  <footer className="relative border-t hairline bg-ink-950">
    <div className="mx-auto max-w-7xl px-6 py-14">
      <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
        <div className="col-span-2">
          <div className="flex items-center gap-2.5">
            <Icons.Logo size={22} />
            <span className="text-[15px] tracking-tight">let&apos;s chat</span>
          </div>
          <p className="mt-3 text-[12.5px] text-ink-400 max-w-[28ch]">
            The cinematic admin portal for businesses running on WhatsApp.
          </p>
          <div className="mt-5 flex items-center gap-2 text-[11px] text-ink-400">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            All systems operational
          </div>
        </div>
        {groups.map(([title, items]) => (
          <div key={title}>
            <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-ink-300">
              {title}
            </div>
            <ul className="mt-3 space-y-2 text-[12.5px] text-ink-400">
              {items.map((i) => (
                <li key={i}>
                  <a href="#" className="hover:text-white transition-colors">
                    {i}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 border-t hairline pt-6 text-[11.5px] text-ink-400">
        <div>© 2026 let&apos;s chat technologies. Built in Bengaluru.</div>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-white transition-colors">
            Privacy
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Terms
          </a>
          <a href="#" className="hover:text-white transition-colors">
            DPA
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Cookies
          </a>
        </div>
      </div>
    </div>
    <div className="relative overflow-hidden">
      <div className="pointer-events-none select-none whitespace-nowrap text-center font-display tracking-[-0.05em] leading-[0.85] text-[28vw] bg-gradient-to-b from-white/5 to-transparent bg-clip-text text-transparent pb-4">
        let&apos;s chat
      </div>
    </div>
  </footer>
);
