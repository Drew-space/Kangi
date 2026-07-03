const FOOTER_COLS = [
  {
    title: "Help",
    links: [
      "Contact Us",
      "My Order",
      "Size Guide",
      "Track Shipment",
      "Sitemap",
    ],
  },
  {
    title: "Info",
    links: [
      "Terms & Conditions",
      "About Us",
      "GoodDay/Better",
      "Code of Honor",
      "Privacy & Cookie Policy",
      "Company Information",
    ],
  },
  {
    title: "Store Locator",
    links: ["Country / Region, City"],
  },
];

export default function Footer() {
  return (
    <footer
      className="px-6 md:px-12 pt-16 pb-10"
      style={{ background: "var(--black)", color: "var(--white)" }}
    >
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-12 mb-16">
        {/* Brand */}
        <div>
          <span
            className="font-display text-3xl tracking-widest"
            style={{ color: "var(--white)" }}
          >
            SOFIA ATELIER
          </span>
          <p className="text-white/40 text-xs tracking-wide mt-3 max-w-xs leading-relaxed">
            Elevated streetwear for the modern individual. Premium materials,
            considered design.
          </p>
        </div>

        {/* Link columns + newsletter */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-xs tracking-wider">
          {FOOTER_COLS.map((col) => (
            <div key={col.title}>
              <p
                className="font-display text-[10px] tracking-[0.3em] uppercase mb-4"
                style={{ color: "var(--stone)" }}
              >
                {col.title}
              </p>
              <ul className="space-y-2">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-white/50 hover:text-white/90 transition-colors"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div>
            <p
              className="font-display text-[10px] tracking-[0.3em] uppercase mb-4"
              style={{ color: "var(--stone)" }}
            >
              Newsletter
            </p>
            <p className="text-white/40 text-[11px] leading-relaxed mb-3">
              By entering your email address below, you consent to receiving our
              newsletter.
            </p>
            <div className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Email"
                className="bg-transparent border-b border-white/20 text-white text-xs py-1.5 outline-none placeholder-white/30 focus:border-white/50 transition-colors"
              />
              <button
                className="font-display text-[10px] tracking-widest uppercase mt-2 py-2"
                style={{ background: "var(--stone)", color: "var(--black)" }}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] tracking-wider text-white/30">
        <span>© 2025SOFIA ATELIER. All rights reserved.</span>
        <div className="flex gap-6">
          {["Instagram", "TikTok", "Pinterest"].map((s) => (
            <a
              key={s}
              href="#"
              className="hover:text-white/70 transition-colors font-display uppercase tracking-widest text-[10px]"
            >
              {s}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
