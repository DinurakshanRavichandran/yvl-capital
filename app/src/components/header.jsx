import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import Logo from "../assets/LOGO.png"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home", type: "hash" },
    { name: "About", href: "/about", type: "route" },
    { name: "Thesis", href: "/thesis", type: "route" },
    { name: "Allocation", href: "#allocation", type: "hash" },
    { name: "Studio", href: "/studio", type: "route" },
    { name: "Team", href: "/team", type: "route" },
    { name: "News", href: "#news", type: "hash" },
    { name: "Contact", href: "/contact", type: "route" },
  ];

  const handleNavClick = (e, link) => {
    if (link.type === "hash") {
      e.preventDefault();
      setIsMobileMenuOpen(false);
      
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          if (link.href === "#home") {
            window.scrollTo({ top: 0, behavior: "smooth" });
          } else {
            document.getElementById(link.href.replace("#", ""))?.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      } else {
        if (link.href === "#home") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          document.getElementById(link.href.replace("#", ""))?.scrollIntoView({ behavior: "smooth" });
        }
      }
    } else {
      setIsMobileMenuOpen(false);
      navigate(link.href);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "py-4 bg-[#030210]/95 backdrop-blur-xl border-b border-[#E8A147]/10 shadow-2xl"
          : "py-6 bg-transparent"
      }`}
    >
      {/* Top Accent Line */}
      <div
        className={`absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#E8A147]/30 to-transparent transition-opacity duration-500 ${
          isScrolled ? "opacity-100" : "opacity-0"
        }`}
      />

      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        {/* <a 
          href="/" 
          onClick={(e) => { e.preventDefault(); navigate("/"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          className="flex items-center gap-3 group"
        >
          <span className="text-3xl font-serif font-bold tracking-tight text-[#E8A147] drop-shadow-[0_0_15px_rgba(232,161,71,0.2)]">
            YVL
          </span>
          <div className="flex flex-col items-start hidden sm:flex">
            <span className="text-white/70 text-[10px] font-bold tracking-[0.3em] uppercase group-hover:text-white transition-colors duration-300">
              Capital
            </span>
            <span className="w-4 h-[1px] bg-[#E8A147]/50 group-hover:w-8 transition-all duration-300" />
          </div>
        </a> */}

         <a 
          href="/" 
          onClick={(e) => { e.preventDefault(); navigate("/"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          className="flex items-center group"
        >
        {/* Replaced text with your imported Logo image */}
      <img 
        src={Logo} 
        alt="YVL Capital" 
        className="h-8 md:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
      />
    </a>
        {/* Desktop Navigation with Gradient Underline */}
        <nav className="hidden xl:flex items-center gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link)}
              className="relative px-4 py-2 text-[11px] font-bold uppercase tracking-[0.25em] text-white/40 hover:text-[#E8A147] transition-all duration-300 group"
            >
              {link.name}
              {/* Center-out Gradient Underline Animation */}
              <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-gradient-to-r from-transparent via-[#E8A147] to-transparent group-hover:w-full transition-all duration-500" />
            </a>
          ))}
        </nav>

        {/* REFINED CTA BUTTON - Keeping the original animation you loved */}
        <div className="hidden md:block">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, { href: "#contact", type: "hash" })}
            className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden rounded-full border border-[#E8A147]/30 transition-all duration-500 hover:border-[#E8A147]"
          >
            {/* Sliding Background fill */}
            <div className="absolute inset-0 bg-[#E8A147] translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            
            {/* Shine effect */}
            <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

            <span className="relative z-10 text-[10px] font-black uppercase tracking-[0.3em] text-[#E8A147] group-hover:text-[#030210] transition-colors duration-500">
              Get in Touch
            </span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`xl:hidden relative w-10 h-10 flex items-center justify-center rounded-full border transition-all duration-300 ${
            isMobileMenuOpen
              ? "border-[#E8A147] bg-[#E8A147]/10 text-[#E8A147]"
              : "border-white/10 text-white/50 hover:border-[#E8A147]"
          }`}
        >
          {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`xl:hidden absolute top-full left-0 right-0 bg-[#030210]/98 backdrop-blur-2xl border-b border-[#E8A147]/10 overflow-hidden transition-all duration-500 ease-in-out ${
          isMobileMenuOpen ? "max-h-screen py-10 opacity-100" : "max-h-0 py-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col items-center gap-8 px-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link)}
              className="text-[12px] font-bold uppercase tracking-[0.3em] text-white/40 hover:text-[#E8A147] transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
          <div className="w-12 h-[1px] bg-[#E8A147]/20 my-2" />
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, { href: "#contact", type: "hash" })}
            className="w-full max-w-[240px] text-center px-8 py-4 rounded-full border border-[#E8A147] text-[10px] font-black uppercase tracking-[0.3em] text-[#E8A147] hover:bg-[#E8A147] hover:text-[#030210] transition-all duration-500 shadow-[0_0_20px_rgba(232,161,71,0.15)]"
          >
            Get in Touch
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;