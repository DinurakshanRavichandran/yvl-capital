import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Team", href: "#team" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "py-4 bg-[#030210]/95 backdrop-blur-xl border-b border-[#E8A147]/10 shadow-[0_10px_40px_rgba(0,0,0,0.4)]"
          : "py-6 bg-transparent"
      }`}
    >
      {/* Gold accent line at top when scrolled */}
      <div
        className={`absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#E8A147]/50 to-transparent transition-opacity duration-500 ${
          isScrolled ? "opacity-100" : "opacity-0"
        }`}
      />

      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 group">
          <span className="text-3xl font-serif font-bold tracking-tight text-[#E8A147] drop-shadow-[0_0_20px_rgba(212,175,55,0.3)]">
            YVL
          </span>
          <div className="flex flex-col items-start hidden sm:flex">
            <span className="text-white/70 text-sm font-medium tracking-wider uppercase group-hover:text-white transition-colors duration-300">
              Capital
            </span>
            <span className="w-6 h-[1px] bg-[#E8A147]/50 group-hover:w-10 transition-all duration-300" />
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative px-5 py-2 text-[12px] uppercase tracking-[0.2em] text-white/50 hover:text-[#E8A147] transition-all duration-300 group"
            >
              {link.name}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-transparent via-[#E8A147] to-transparent group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a
            href="mailto:hello@yvl.capital"
            className="relative px-7 py-3 rounded-full overflow-hidden group"
          >
            {/* Gold Border Background */}
            <div className="absolute inset-0 bg-[#E8A147]/10 border border-[#E8A147]/30 rounded-full group-hover:bg-[#E8A147] group-hover:border-[#E8A147] transition-all duration-500" />

            {/* Shine effect */}
            <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none rounded-full" />

            <span className="relative z-10 text-[11px] uppercase tracking-[0.2em] font-bold text-[#E8A147] group-hover:text-[#030210] transition-colors duration-300">
              Get in Touch
            </span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`md:hidden relative w-11 h-11 flex items-center justify-center rounded-full border transition-all duration-300 ${
            isMobileMenuOpen
              ? "border-[#E8A147] bg-[#E8A147]/10 text-[#E8A147]"
              : "border-[#E8A147]/30 text-[#E8A147]/60 hover:border-[#E8A147] hover:text-[#E8A147] hover:bg-[#E8A147]/5"
          }`}
        >
          {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-[#030210]/95 backdrop-blur-xl border-b border-[#E8A147]/10 overflow-hidden transition-all duration-500 ${
          isMobileMenuOpen ? "max-h-[400px] py-8" : "max-h-0 py-0"
        }`}
      >
        {/* Gold accent line */}
        <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-[#E8A147]/30 to-transparent" />

        <nav className="flex flex-col items-center gap-6 px-6">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="relative text-[13px] uppercase tracking-[0.2em] text-white/50 hover:text-[#E8A147] transition-colors duration-300 group"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <span className="flex items-center gap-3">
                <span className="w-2 h-[1px] bg-[#E8A147]/30 group-hover:w-4 group-hover:bg-[#E8A147] transition-all duration-300" />
                {link.name}
              </span>
            </a>
          ))}

          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#E8A147]/20 to-transparent my-2" />

          <a
            href="mailto:hello@yvl.capital"
            onClick={() => setIsMobileMenuOpen(false)}
            className="relative px-10 py-4 bg-gradient-to-r from-[#E8A147] to-[#D4893D] rounded-full text-[11px] uppercase tracking-[0.2em] font-bold text-[#030210] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all duration-300"
          >
            Get in Touch
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
