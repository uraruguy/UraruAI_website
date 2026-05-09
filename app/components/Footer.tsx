import { UraruLogo } from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo + wordmark */}
        <a href="#" className="opacity-80 hover:opacity-100 transition-opacity duration-200">
          <UraruLogo width={110} />
        </a>

        {/* Nav links */}
        <nav className="flex items-center gap-6">
          {["Work", "Services"].map((link) => (
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
        <p className="text-xs text-[#888888]">© 2026 Uraru AI</p>
      </div>
    </footer>
  );
}
