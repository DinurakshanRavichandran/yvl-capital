// import { LinkedinIcon, X, Mail } from "lucide-react";
// import Logo from "../assets/LOGO.png"

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   const navLinks = [
//     { name: "About", href: "#about" },
//     { name: "Portfolio", href: "#portfolio" },
//     { name: "Team", href: "#team" },
//     { name: "Contact", href: "#contact" },
//   ];

//   const socialLinks = [
//     { name: "LinkedIn", href: "https://linkedin.com", icon: LinkedinIcon },
//     { name: "X", href: "https://x.com", icon: X },
//     { name: "Email", href: "mailto:hello@yvl.capital", icon: Mail },
//   ];

//   return (
//     <footer className="relative bg-[#030210] text-white pt-24 pb-12 overflow-hidden">
//       {/* Background Ambient Glow */}
//       <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#E8A147]/8 blur-[180px] rounded-full pointer-events-none" />

//       {/* Top Border Accent - Gold Gradient */}
//       <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#E8A147]/40 to-transparent" />

//       <div className="relative z-10 max-w-6xl mx-auto px-6">
//         {/* Main Footer Content */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-12 pb-16 border-b border-[#E8A147]/10">

//           {/* Logo & Description */}
//           <div className="space-y-6 text-center lg:text-left">
//             <a href="/" className="inline-flex items-center gap-3 group">
//               <span className="text-4xl font-serif font-bold tracking-tight text-[#E8A147]">
//                 YVL
//               </span>
//               <div className="flex flex-col items-start">
//                 <span className="text-white/80 text-sm font-medium tracking-wider uppercase">
//                   Capital
//                 </span>
//                 <span className="w-8 h-[1px] bg-[#E8A147]/50 mt-1" />
//               </div>
//             </a>

//             <p className="text-white/50 text-[15px] leading-relaxed max-w-[320px] mx-auto lg:mx-0 font-light">
//               Building and backing AI-native platforms for critical systems.
//               Where autonomous systems meet real-world constraints.
//             </p>

//             {/* Social Links */}
//             <div className="flex items-center justify-center lg:justify-start gap-3 pt-2">
//               {socialLinks.map((social) => (
//                 <a
//                   key={social.name}
//                   href={social.href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="w-11 h-11 rounded-full border border-[#E8A147]/20 bg-[#E8A147]/5 flex items-center justify-center text-[#E8A147]/60 hover:text-[#E8A147] hover:border-[#E8A147]/50 hover:bg-[#E8A147]/10 transition-all duration-300"
//                   aria-label={social.name}
//                 >
//                   <social.icon size={18} />
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Navigation Links */}
//           <div className="text-center lg:text-left">
//             <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
//               <span className="w-6 h-[1px] bg-[#E8A147]" />
//               <h4 className="text-[11px] uppercase tracking-[0.3em] text-[#E8A147] font-semibold">
//                 Navigation
//               </h4>
//             </div>
//             <nav className="flex flex-col items-center lg:items-start gap-4">
//               {navLinks.map((link) => (
//                 <a
//                   key={link.name}
//                   href={link.href}
//                   className="text-white/50 text-[14px] hover:text-[#E8A147] transition-colors duration-300 relative group"
//                 >
//                   {link.name}
//                   <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#E8A147]/50 group-hover:w-full transition-all duration-300" />
//                 </a>
//               ))}
//             </nav>
//           </div>

//           {/* Contact Info */}
//           <div className="text-center lg:text-left">
//             <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
//               <span className="w-6 h-[1px] bg-[#E8A147]" />
//               <h4 className="text-[11px] uppercase tracking-[0.3em] text-[#E8A147] font-semibold">
//                 Get in Touch
//               </h4>
//             </div>
//             <div className="space-y-5">
//               <a
//                 href="mailto:hello@yvl.capital"
//                 className="inline-flex items-center justify-center lg:justify-start gap-3 text-white/60 hover:text-[#E8A147] transition-colors duration-300 group"
//               >
//                 <span className="w-10 h-10 rounded-full bg-[#E8A147]/10 border border-[#E8A147]/20 flex items-center justify-center group-hover:border-[#E8A147]/50 group-hover:bg-[#E8A147]/20 transition-all duration-300">
//                   <Mail size={16} className="text-[#E8A147]" />
//                 </span>
//                 <span className="text-[15px] font-medium">hello@yvl.capital</span>
//               </a>

//               <div className="pt-2">
//                 <p className="text-white/35 text-[13px] leading-relaxed max-w-[280px] mx-auto lg:mx-0">
//                   For founders building AI-native autonomous systems.
//                   For investors seeking category-defining opportunities.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="pt-10 flex flex-col sm:flex-row items-center justify-between gap-6">
//           <p className="text-white/30 text-[12px] tracking-wide flex items-center gap-2">
//             <span className="w-2 h-2 rounded-full bg-[#E8A147]/40" />
//             &copy; {currentYear} YVL Capital. All rights reserved.
//           </p>

//           <div className="flex items-center gap-8">
//             <a
//               href="#privacy"
//               className="text-white/30 text-[12px] hover:text-[#E8A147] transition-colors duration-300"
//             >
//               Privacy Policy
//             </a>
//             <span className="w-1.5 h-1.5 rounded-full bg-[#E8A147]/30" />
//             <a
//               href="#terms"
//               className="text-white/30 text-[12px] hover:text-[#E8A147] transition-colors duration-300"
//             >
//               Terms of Service
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from "react";
import { motion } from "framer-motion";
import { LinkedinIcon, X, Mail, ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/LOGO.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  const navLinks = [
    { name: "Investment Thesis", href: "/#thesis" },
    { name: "Nexa Operations", href: "/#studio" },
    { name: "Leadership Team", href: "/team" },
    { name: "About the Firm", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    { name: "LinkedIn", href: "https://linkedin.com", icon: LinkedinIcon },
    { name: "X", href: "https://x.com", icon: X },
    { name: "Email", href: "mailto:hello@yvl.capital", icon: Mail },
  ];

  return (
    <footer className="relative bg-[#030210] text-white pt-32 pb-12 overflow-hidden border-t border-white/5">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#E8A147]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#E8A147]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
          
          {/* 1. BRAND COLUMN */}
          <div className="md:col-span-5 space-y-8">
            <motion.a 
              href="/"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              onClick={(e) => { e.preventDefault(); navigate("/"); window.scrollTo(0,0); }}
              className="inline-block group"
            >
              <img 
                src={Logo} 
                alt="YVL Capital" 
                className="h-12 w-auto object-contain brightness-110 group-hover:scale-105 transition-transform duration-500" 
              />
            </motion.a>
            
            <p className="text-white/40 text-lg font-light leading-relaxed max-w-sm font-hoefler italic">
              "Architecting sovereign control systems for a post-human industrial landscape."
            </p>

            <div className="flex gap-4">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-[#E8A147] hover:border-[#E8A147]/40 transition-all duration-300 bg-white/[0.02]"
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* 2. NAVIGATION COLUMN */}
          <div className="md:col-span-3">
            <h4 className="text-[#E8A147] text-[10px] uppercase tracking-[0.4em] font-black mb-10 opacity-80">
              Navigation
            </h4>
            <ul className="space-y-5">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-white/40 hover:text-white transition-all duration-300 text-sm font-medium tracking-wide flex items-center group gap-2"
                  >
                    <span className="w-0 h-[1px] bg-[#E8A147] group-hover:w-4 transition-all duration-300" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. LOCATIONS COLUMN */}
          <div className="md:col-span-4">
            <h4 className="text-[#E8A147] text-[10px] uppercase tracking-[0.4em] font-black mb-10 opacity-80">
              Global Hubs
            </h4>
            <div className="space-y-8">
              {[
                { city: "Dubai", type: "Operational HQ" },
                { city: "London", type: "Capital Markets" },
                { city: "Montreal", type: "R&D Studio" }
              ].map((loc) => (
                <div key={loc.city} className="group border-b border-white/5 pb-4">
                  <div className="flex justify-between items-end">
                    <span className="text-xl font-hoefler text-white/80 group-hover:text-white transition-colors">
                      {loc.city}
                    </span>
                    <span className="text-[9px] uppercase tracking-widest text-white/20 mb-1">
                      {loc.type}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* BOTTOM LEGAL BAR */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/20">
              © {currentYear} YVL Capital Partners
            </span>
            <div className="flex gap-6">
              <a href="/privacy" className="text-[10px] uppercase tracking-[0.2em] text-white/20 hover:text-white transition-colors">Privacy</a>
              <a href="/terms" className="text-[10px] uppercase tracking-[0.2em] text-white/20 hover:text-white transition-colors">Terms</a>
            </div>
          </div>

          <div className="flex items-center gap-4 text-white/20">
            <div className="h-[1px] w-12 bg-white/10" />
            <span className="text-[10px] font-mono italic tracking-widest">
              Built for the Eternal Industries.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;