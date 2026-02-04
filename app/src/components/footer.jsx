import React from "react";
import { Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Team", href: "#team" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { name: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
    { name: "Twitter", href: "https://twitter.com", icon: Twitter },
    { name: "Email", href: "mailto:hello@yvl.capital", icon: Mail },
  ];

  return (
    <footer className="relative bg-[#030210] text-white pt-24 pb-12 overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#D4AF37]/8 blur-[180px] rounded-full pointer-events-none" />

      {/* Top Border Accent - Gold Gradient */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-12 pb-16 border-b border-[#D4AF37]/10">

          {/* Logo & Description */}
          <div className="space-y-6 text-center lg:text-left">
            <a href="/" className="inline-flex items-center gap-3 group">
              <span className="text-4xl font-serif font-bold tracking-tight text-[#D4AF37]">
                YVL
              </span>
              <div className="flex flex-col items-start">
                <span className="text-white/80 text-sm font-medium tracking-wider uppercase">
                  Capital
                </span>
                <span className="w-8 h-[1px] bg-[#D4AF37]/50 mt-1" />
              </div>
            </a>

            <p className="text-white/50 text-[15px] leading-relaxed max-w-[320px] mx-auto lg:mx-0 font-light">
              Building and backing AI-native platforms for critical systems.
              Where autonomous systems meet real-world constraints.
            </p>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-3 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/5 flex items-center justify-center text-[#D4AF37]/60 hover:text-[#D4AF37] hover:border-[#D4AF37]/50 hover:bg-[#D4AF37]/10 transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
              <span className="w-6 h-[1px] bg-[#D4AF37]" />
              <h4 className="text-[11px] uppercase tracking-[0.3em] text-[#D4AF37] font-semibold">
                Navigation
              </h4>
            </div>
            <nav className="flex flex-col items-center lg:items-start gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white/50 text-[14px] hover:text-[#D4AF37] transition-colors duration-300 relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#D4AF37]/50 group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
              <span className="w-6 h-[1px] bg-[#D4AF37]" />
              <h4 className="text-[11px] uppercase tracking-[0.3em] text-[#D4AF37] font-semibold">
                Get in Touch
              </h4>
            </div>
            <div className="space-y-5">
              <a
                href="mailto:hello@yvl.capital"
                className="inline-flex items-center justify-center lg:justify-start gap-3 text-white/60 hover:text-[#D4AF37] transition-colors duration-300 group"
              >
                <span className="w-10 h-10 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center group-hover:border-[#D4AF37]/50 group-hover:bg-[#D4AF37]/20 transition-all duration-300">
                  <Mail size={16} className="text-[#D4AF37]" />
                </span>
                <span className="text-[15px] font-medium">hello@yvl.capital</span>
              </a>

              <div className="pt-2">
                <p className="text-white/35 text-[13px] leading-relaxed max-w-[280px] mx-auto lg:mx-0">
                  For founders building AI-native autonomous systems.
                  For investors seeking category-defining opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-white/30 text-[12px] tracking-wide flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37]/40" />
            &copy; {currentYear} YVL Capital. All rights reserved.
          </p>

          <div className="flex items-center gap-8">
            <a
              href="#privacy"
              className="text-white/30 text-[12px] hover:text-[#D4AF37] transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]/30" />
            <a
              href="#terms"
              className="text-white/30 text-[12px] hover:text-[#D4AF37] transition-colors duration-300"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
