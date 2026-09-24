"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

// Fuera de la home, los enlaces a secciones deben apuntar a la página principal.
function useSectionHref() {
  const onHome = usePathname() === "/";
  return (href: string) =>
    onHome || href === "#contacto" ? href : href === "#" ? "/" : `/${href}`;
}

const links = [
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "Servicios", href: "#servicios" },
  { label: "Precios", href: "#precios" },
  { label: "FAQ", href: "#faq" },
];

function Logo() {
  const sectionHref = useSectionHref();
  return (
    <a href={sectionHref("#")} className="group flex items-center gap-3">
      {/* Symbol */}
      <div className="relative">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          aria-hidden
          className="flex-shrink-0"
        >
          <rect width="40" height="40" rx="9" fill="#0A5CFF" />
          {/* Outer D */}
          <path
            d="M11 9h10c6.075 0 11 4.925 11 11s-4.925 11-11 11H11V9z"
            fill="white"
          />
          {/* Inner cutout */}
          <path
            d="M15.5 13.5h5.5c3.59 0 6.5 2.91 6.5 6.5s-2.91 6.5-6.5 6.5h-5.5V13.5z"
            fill="#0A5CFF"
          />
        </svg>
        {/* Glow */}
        <div className="absolute inset-0 rounded-[9px] bg-[#0A5CFF]/30 blur-md scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
      </div>

      {/* Wordmark */}
      <div className="flex flex-col justify-center leading-none gap-[3px]">
        <span className="text-white font-black text-[15px] tracking-[0.18em] uppercase">
          Don{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #27B3FF, #0A5CFF)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Digital
          </span>
        </span>
        <span className="text-[#6b89a8] text-[8px] tracking-[0.15em] uppercase hidden sm:block">
          Agentes de Voz IA para el turismo
        </span>
      </div>
    </a>
  );
}

function NavLink({ label, href }: { label: string; href: string }) {
  const [hovered, setHovered] = useState(false);

  return (
    <li
      className="relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <a
        href={href}
        className="block text-[17px] font-semibold pb-1 transition-colors duration-200"
        style={{ color: hovered ? "#0A5CFF" : "#6b89a8" }}
      >
        {label}
      </a>
      <AnimatePresence>
        {hovered && (
          <motion.span
            key="underline"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            exit={{ scaleX: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full bg-[#0A5CFF] origin-left"
          />
        )}
      </AnimatePresence>
    </li>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const sectionHref = useSectionHref();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "backdrop-blur-2xl" : "bg-transparent"
      }`}
      style={scrolled ? {
        background: "rgba(5, 10, 20, 0.72)",
        borderBottom: "1px solid rgba(39, 179, 255, 0.1)",
        boxShadow: "0 1px 0 rgba(39,179,255,0.06), 0 20px 40px rgba(0,0,0,0.45)",
      } : undefined}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-[64px] sm:h-[68px] flex items-center justify-between gap-8" aria-label="Navegación principal">
        <Logo />

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <NavLink key={link.href} label={link.label} href={sectionHref(link.href)} />
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:block flex-shrink-0">
          <motion.a
            href="#contacto"
            whileHover={{ scale: 1.04, boxShadow: "0 0 32px 5px rgba(10,92,255,0.5)" }}
            whileTap={{ scale: 0.96 }}
            style={{ boxShadow: "0 6px 22px rgba(10,92,255,0.32)" }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#0A5CFF] hover:bg-[#0037CC] text-white text-sm font-semibold transition-colors duration-200"
          >
            Hablemos
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden>
              <path
                d="M1 6.5h11M6.5 1l5.5 5.5-5.5 5.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.a>
        </div>

        {/* Burger */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden flex flex-col gap-[6px] p-2"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            className="block w-5 h-[1.5px] bg-white origin-center"
          />
          <motion.span
            animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
            className="block w-5 h-[1.5px] bg-white"
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            className="block w-5 h-[1.5px] bg-white origin-center"
          />
        </button>
      </nav>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="md:hidden overflow-hidden backdrop-blur-2xl border-b"
            style={{
              background: "rgba(5, 10, 20, 0.88)",
              borderColor: "rgba(39, 179, 255, 0.1)",
              boxShadow: "0 20px 40px rgba(0,0,0,0.45)",
            }}
          >
            <ul className="px-6 py-5 flex flex-col gap-5">
              {links.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ x: -16, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.06, ease: "easeOut" }}
                >
                  <a
                    href={sectionHref(link.href)}
                    onClick={() => setMenuOpen(false)}
                    className="text-[17px] font-semibold text-[#6b89a8] hover:text-[#0A5CFF] transition-colors"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <li>
                <a
                  href="#contacto"
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#0A5CFF] text-white text-sm font-semibold"
                >
                  Hablemos
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
