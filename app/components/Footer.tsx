export default function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo + wordmark */}
        <a href="#" className="flex items-center gap-3">
          <svg width="28" height="28" viewBox="0 0 64 64" fill="none">
            <path
              d="M10 10 L10 36 Q10 56 32 56 Q54 56 54 36 L54 10"
              stroke="#00C4CF"
              strokeWidth="7"
              strokeLinecap="round"
            />
            <circle cx="32" cy="10" r="5" fill="#00C4CF" />
          </svg>
          <span className="font-semibold text-[#F0EDE4]">Uraru AI</span>
        </a>

        {/* Nav links */}
        <nav className="flex items-center gap-6">
          {["Work", "Services", "About"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm text-[#888888] hover:text-[#F0EDE4] transition-colors duration-200"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Copyright */}
        <p className="text-xs text-[#888888]">© 2025 Uraru AI</p>
      </div>
    </footer>
  );
}
