import React, { useState, useEffect } from "react";
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
          ? "py-4 bg-[#030210]/80 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_10px_40px_rgba(0,0,0,0.3)]"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 group">
          <div className="relative">
            <span className="text-2xl font-serif font-bold tracking-tight text-white group-hover:text-[#D4AF37] transition-colors duration-300">
              YVL
            </span>
            <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-[#D4AF37] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <span className="text-white/40 text-sm font-light tracking-wider uppercase hidden sm:block">
            Capital
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-[13px] uppercase tracking-[0.2em] text-white/60 hover:text-white transition-colors duration-300 group"
            >
              {link.name}
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-[#D4AF37] group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a
            href="mailto:hello@yvl.capital"
            className="relative px-6 py-3 rounded-full overflow-hidden group"
          >
            {/* Glass Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/[0.1] to-white/[0.05] border border-white/[0.15] rounded-full group-hover:border-[#D4AF37]/50 transition-all duration-300" />

            {/* Hover Fill */}
            <div className="absolute inset-0 bg-[#D4AF37] rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 origin-center" />

            <span className="relative z-10 text-[11px] uppercase tracking-[0.2em] font-semibold text-white group-hover:text-[#030210] transition-colors duration-300">
              Get in Touch
            </span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-full border border-white/[0.15] text-white/70 hover:text-[#D4AF37] hover:border-[#D4AF37]/50 transition-all duration-300"
        >
          {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-[#030210]/95 backdrop-blur-xl border-b border-white/[0.08] overflow-hidden transition-all duration-500 ${
          isMobileMenuOpen ? "max-h-[400px] py-6" : "max-h-0 py-0"
        }`}
      >
        <nav className="flex flex-col items-center gap-6 px-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-[13px] uppercase tracking-[0.2em] text-white/60 hover:text-[#D4AF37] transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
          <a
            href="mailto:hello@yvl.capital"
            className="mt-4 px-8 py-3 bg-[#D4AF37] rounded-full text-[11px] uppercase tracking-[0.2em] font-semibold text-[#030210] hover:bg-white transition-colors duration-300"
          >
            Get in Touch
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
