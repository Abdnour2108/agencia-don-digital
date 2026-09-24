"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import CookieSettingsButton from "./CookieSettingsButton";

const legalLinks = [
  { label: "Aviso Legal", href: "/aviso-legal" },
  { label: "Política de Privacidad", href: "/politica-de-privacidad" },
  { label: "Política de Cookies", href: "/politica-de-cookies" },
];

const navLinks = [
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "Casos de uso", href: "#casos-de-uso" },
  { label: "Servicios", href: "#servicios" },
  { label: "Precios", href: "#precios" },
  { label: "FAQ", href: "#faq" },
];

const services = [
  { label: "Agentes de Voz IA", href: "#servicios" },
  { label: "Diseño Web Premium", href: "#servicios" },
  { label: "SEO Turístico", href: "#servicios" },
  { label: "Consulta gratuita", href: "#contacto" },
];

const socials = [
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden
      >
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
];

export default function Footer() {
  // Fuera de la home, los enlaces a secciones deben apuntar a la página principal.
  // #contacto es el propio footer, presente en todas las páginas.
  const onHome = usePathname() === "/";
  const sectionHref = (href: string) =>
    onHome || href === "#contacto" ? href : `/${href}`;

  return (
    <footer id="contacto" className="relative overflow-hidden" style={{ borderTop: "1px solid rgba(39,179,255,0.1)" }}>
      {/* Top gradient line */}
      <div
        aria-hidden
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(10,92,255,0.6), rgba(39,179,255,0.6), transparent)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 100%, rgba(10,92,255,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">

        {/* ── CTA band ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="py-12 sm:py-16 md:py-20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8"
          style={{ borderBottom: "1px solid rgba(39,179,255,0.1)" }}
        >
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-[#6b89a8] mb-2">
              ¿Listo para no perder más reservas?
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight max-w-md">
              Hablemos sobre tu{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #27B3FF 0%, #0A5CFF 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                agente de voz
              </span>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0 w-full sm:w-auto">
            <motion.a
              href="mailto:agenciadondigital@gmail.com"
              whileHover={{
                scale: 1.03,
                boxShadow: "0 0 32px 5px rgba(10,92,255,0.45)",
              }}
              whileTap={{ scale: 0.97 }}
              style={{ boxShadow: "0 6px 22px rgba(10,92,255,0.3)" }}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#0A5CFF] hover:bg-[#0037CC] text-white font-semibold text-sm transition-colors duration-200 w-full sm:w-auto"
            >
              Solicitar demostración gratuita
              <svg
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
                aria-hidden
              >
                <path
                  d="M1 6.5h11M6.5 1l5.5 5.5-5.5 5.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.a>
            <a
              href="mailto:agenciadondigital@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm transition-all duration-200 w-full sm:w-auto"
              style={{
                background: "rgba(39,179,255,0.06)",
                border: "1px solid rgba(39,179,255,0.18)",
                color: "#6b89a8",
              }}
            >
              agenciadondigital@gmail.com
            </a>
          </div>
        </motion.div>

        {/* ── Main footer grid ── */}
        <div className="py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="lg:col-span-1"
          >
            <a href={onHome ? "#" : "/"} className="group inline-flex items-center gap-3 mb-5">
              <div className="relative">
                <svg width="38" height="38" viewBox="0 0 40 40" fill="none" aria-hidden>
                  <rect width="40" height="40" rx="9" fill="#0A5CFF" />
                  <path
                    d="M11 9h10c6.075 0 11 4.925 11 11s-4.925 11-11 11H11V9z"
                    fill="white"
                  />
                  <path
                    d="M15.5 13.5h5.5c3.59 0 6.5 2.91 6.5 6.5s-2.91 6.5-6.5 6.5h-5.5V13.5z"
                    fill="#0A5CFF"
                  />
                </svg>
              </div>
              <div className="flex flex-col leading-none gap-[3px]">
                <span className="text-white font-black text-[14px] tracking-[0.18em] uppercase">
                  Don{" "}
                  <span
                    style={{
                      background: "linear-gradient(90deg,#27B3FF,#0A5CFF)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    Digital
                  </span>
                </span>
                <span className="text-[#6b89a8] text-[8px] tracking-[0.12em] uppercase">
                  Agentes de Voz IA para el turismo
                </span>
              </div>
            </a>

            <p className="text-sm text-[#6b89a8] leading-relaxed mb-6 max-w-xs">
              Especialistas en agentes de voz con IA para empresas turísticas.
              Nunca pierdas una reserva por no contestar.
            </p>

            <div className="flex gap-3">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  whileHover={{ scale: 1.1, color: "#27B3FF" }}
                  whileTap={{ scale: 0.93 }}
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-[#6b89a8] transition-colors duration-200"
                  style={{
                    border: "1px solid rgba(39,179,255,0.15)",
                    background: "rgba(8,15,30,0.4)",
                  }}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          >
            <h4 className="text-xs font-bold tracking-widest uppercase text-[#6b89a8] mb-5">
              Navegación
            </h4>
            <ul className="flex flex-col gap-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={sectionHref(l.href)}
                    className="text-sm text-[#aac0d8] hover:text-white transition-colors duration-200"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          >
            <h4 className="text-xs font-bold tracking-widest uppercase text-[#6b89a8] mb-5">
              Servicios
            </h4>
            <ul className="flex flex-col gap-3">
              {services.map((l) => (
                <li key={l.label}>
                  <a
                    href={sectionHref(l.href)}
                    className="text-sm text-[#aac0d8] hover:text-white transition-colors duration-200"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          >
            <h4 className="text-xs font-bold tracking-widest uppercase text-[#6b89a8] mb-5">
              Contacto
            </h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="mt-0.5 flex-shrink-0 text-[#0A5CFF]"
                  aria-hidden
                >
                  <path
                    d="M14 3H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z"
                    stroke="currentColor"
                    strokeWidth="1.4"
                  />
                  <path
                    d="M1 4l7 5 7-5"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                  />
                </svg>
                <a
                  href="mailto:agenciadondigital@gmail.com"
                  className="text-sm text-[#aac0d8] hover:text-white transition-colors duration-200"
                >
                  agenciadondigital@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="mt-0.5 flex-shrink-0 text-[#0A5CFF]"
                  aria-hidden
                >
                  <path
                    d="M13 10.5c0 .3-.07.6-.22.87-.14.27-.34.52-.6.73-.42.37-.88.55-1.37.56-.36 0-.74-.09-1.16-.28a11.3 11.3 0 0 1-1.16-.67 17.8 17.8 0 0 1-1.1-.95 17.5 17.5 0 0 1-.95-1.1c-.26-.39-.47-.77-.62-1.15C5.6 7.13 5.5 6.75 5.5 6.39c0-.37.08-.72.24-1.04.16-.33.4-.63.73-.88C6.85 4.17 7.22 4 7.62 4c.15 0 .3.03.44.1.14.06.27.16.37.3l1.3 1.83c.1.13.17.25.22.37.05.11.08.22.08.32 0 .13-.04.26-.11.38a1.8 1.8 0 0 1-.3.38l-.4.42a.28.28 0 0 0-.08.2c0 .04 0 .08.02.12l.06.15c.1.19.29.43.54.72.26.29.53.58.82.86.3.27.58.5.88.7.16.1.3.14.45.14a.3.3 0 0 0 .2-.08l.42-.43c.12-.12.24-.21.36-.27.12-.06.23-.09.36-.09.1 0 .21.02.33.08.12.05.24.13.37.23L12.6 9.6c.15.1.25.22.31.37.06.14.09.29.09.44z"
                    stroke="currentColor"
                    strokeWidth="1.1"
                    strokeMiterlimit="10"
                  />
                </svg>
                <a
                  href="tel:+34631322941"
                  className="text-sm text-[#aac0d8] hover:text-white transition-colors duration-200"
                >
                  +34 631 322 941
                </a>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="mt-0.5 flex-shrink-0 text-[#0A5CFF]"
                  aria-hidden
                >
                  <path
                    d="M8 1.5A4.5 4.5 0 0 1 12.5 6c0 3-4.5 8.5-4.5 8.5S3.5 9 3.5 6A4.5 4.5 0 0 1 8 1.5z"
                    stroke="currentColor"
                    strokeWidth="1.4"
                  />
                  <circle cx="8" cy="6" r="1.5" stroke="currentColor" strokeWidth="1.4" />
                </svg>
                <span className="text-sm text-[#aac0d8]">España</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* ── Bottom bar ── */}
        <div
          className="py-6 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: "1px solid rgba(39,179,255,0.08)" }}
        >
          <p className="text-xs text-[#6b89a8]">
            © {new Date().getFullYear()} Don Digital. Todos los derechos
            reservados.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
            {legalLinks.map((l, i) => (
              <span key={l.href} className="flex items-center gap-3">
                {i > 0 && <span aria-hidden className="text-xs text-[#6b89a8]/50">|</span>}
                <a
                  href={l.href}
                  className="text-xs text-[#6b89a8] hover:text-[#aac0d8] transition-colors duration-200"
                >
                  {l.label}
                </a>
              </span>
            ))}
            <span aria-hidden className="text-xs text-[#6b89a8]/50">|</span>
            <CookieSettingsButton className="text-xs text-[#6b89a8] hover:text-[#aac0d8] transition-colors duration-200 cursor-pointer" />
          </div>
        </div>

      </div>
    </footer>
  );
}
