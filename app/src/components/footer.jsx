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
    <footer className="relative bg-[#030210] text-white py-20 overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#D4AF37]/5 blur-[150px] rounded-full pointer-events-none" />

      {/* Top Border Accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.1] to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 pb-16 border-b border-white/[0.08]">
          {/* Logo & Description */}
          <div className="md:col-span-5 space-y-6">
            <a href="/" className="inline-flex items-center gap-3 group">
              <span className="text-3xl font-serif font-bold tracking-tight text-white group-hover:text-[#D4AF37] transition-colors duration-300">
                YVL
              </span>
              <span className="text-white/40 text-sm font-light tracking-wider uppercase">
                Capital
              </span>
            </a>

            <p className="text-white/40 text-[15px] leading-relaxed max-w-[380px] font-light">
              Building and backing AI-native platforms for critical systems.
              Where autonomous systems meet real-world constraints.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/[0.1] flex items-center justify-center text-white/40 hover:text-[#D4AF37] hover:border-[#D4AF37]/50 hover:bg-[#D4AF37]/5 transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 md:col-start-7">
            <h4 className="text-[11px] uppercase tracking-[0.3em] text-white/30 font-semibold mb-6">
              Navigation
            </h4>
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white/50 text-[14px] hover:text-[#D4AF37] transition-colors duration-300 w-fit"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-4">
            <h4 className="text-[11px] uppercase tracking-[0.3em] text-white/30 font-semibold mb-6">
              Get in Touch
            </h4>
            <div className="space-y-4">
              <a
                href="mailto:hello@yvl.capital"
                className="flex items-center gap-3 text-white/50 hover:text-[#D4AF37] transition-colors duration-300 group"
              >
                <span className="w-8 h-8 rounded-full bg-white/[0.05] border border-white/[0.1] flex items-center justify-center group-hover:border-[#D4AF37]/30 transition-colors">
                  <Mail size={14} />
                </span>
                <span className="text-[14px]">hello@yvl.capital</span>
              </a>

              <div className="pt-4">
                <p className="text-white/30 text-[13px] leading-relaxed">
                  For founders building AI-native autonomous systems.
                  <br />
                  For investors seeking category-defining opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-[12px] tracking-wide">
            &copy; {currentYear} YVL Capital. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="#privacy"
              className="text-white/25 text-[12px] hover:text-white/50 transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <a
              href="#terms"
              className="text-white/25 text-[12px] hover:text-white/50 transition-colors duration-300"
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
