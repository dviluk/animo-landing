import { useState, useEffect } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = [
    { label: "Features", href: "#features" },
    { label: "Solutions", href: "#solutions" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Trust", href: "#technology" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0F172A]/90 backdrop-blur-xl shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="relative">
            <span className="text-[22px] font-[700] text-white tracking-tight" style={{ fontFamily: "Inter" }}>
              <span className="relative">
                a<span className="absolute -top-0.5 left-0 w-3 h-3 border-t border-l border-[#06B6D4] rounded-tl opacity-60" />
              </span>
              nimo
            </span>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[14px] text-[#94A3B8] hover:text-white transition-colors"
              style={{ fontFamily: "Inter" }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-2 rounded-lg bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white text-[14px] font-[600] hover:opacity-90 transition-opacity"
            style={{ fontFamily: "Inter" }}
          >
            Request Demo
          </a>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-[#0F172A]/95 backdrop-blur-xl border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[14px] text-[#94A3B8] hover:text-white"
              style={{ fontFamily: "Inter" }}
              onClick={() => setMobileOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-2 rounded-lg bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white text-[14px] font-[600] text-center"
            onClick={() => setMobileOpen(false)}
          >
            Request Demo
          </a>
        </div>
      )}
    </nav>
  );
}
