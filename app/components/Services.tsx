"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

/* ── Icons ── */
function IconVoice() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
      <circle cx="14" cy="10" r="4" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M8 10c0 3.314 2.686 6 6 6s6-2.686 6-6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path d="M14 16v4M11 20h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      {/* Sound waves */}
      <path d="M4 10c0 5.523 4.477 10 10 10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeOpacity="0.5" />
      <path d="M24 10c0 5.523-4.477 10-10 10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeOpacity="0.5" />
      <path d="M1 10a13 13 0 0 0 13 13" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeOpacity="0.28" />
      <path d="M27 10a13 13 0 0 1-13 13" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeOpacity="0.28" />
    </svg>
  );
}

function IconWeb() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
      <rect x="2" y="4" width="24" height="17" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M2 9h24" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="6" cy="6.5" r="1" fill="currentColor" />
      <circle cx="9.5" cy="6.5" r="1" fill="currentColor" />
      <circle cx="13" cy="6.5" r="1" fill="currentColor" />
      <path d="M9 25h10M14 21v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M8 14l2.5 2L14 12l3 3 2-1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconSEO() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.6" />
      <path d="M18.5 18.5L25 25" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M9 12h6M12 9v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

/* ── Data ── */
const services = [
  {
    icon: <IconVoice />,
    tag: "Más demandado",
    title: "Agentes de Voz IA",
    description:
      "Tu recepcionista virtual que nunca descansa. Atiende llamadas, responde dudas y gestiona reservas de forma completamente autónoma.",
    features: [
      "Atención 24/7 sin interrupciones",
      "Gestión automática de reservas",
      "IA conversacional natural",
      "Integración con CRM y PMS",
      "Informes y métricas detalladas",
    ],
    gradient: "from-[#0A5CFF]/18 to-[#0037CC]/6",
    iconColor: "#27B3FF",
    glowColor: "rgba(10,92,255,0.22)",
    featured: true,
  },
  {
    icon: <IconWeb />,
    tag: "Presencia digital",
    title: "Diseño Web Premium",
    description:
      "Tu web es tu mejor comercial. La construimos para convertir visitantes en huéspedes con diseño que inspira confianza y velocidad máxima.",
    features: [
      "Diseño moderno y premium",
      "Responsive mobile-first",
      "Optimizado para reservas directas",
      "Velocidad máxima de carga",
    ],
    gradient: "from-[#27B3FF]/14 to-[#0A5CFF]/4",
    iconColor: "#0A5CFF",
    glowColor: "rgba(39,179,255,0.18)",
    featured: false,
  },
  {
    icon: <IconSEO />,
    tag: "Visibilidad orgánica",
    title: "SEO Turístico",
    description:
      "Posicionamos tu negocio en Google cuando los viajeros buscan exactamente lo que ofreces. SEO especializado en turismo.",
    features: [
      "SEO local y nacional",
      "Google Business Profile",
      "Posicionamiento orgánico",
      "Captación de viajeros",
    ],
    gradient: "from-[#0037CC]/16 to-[#27B3FF]/4",
    iconColor: "#27B3FF",
    glowColor: "rgba(0,55,204,0.22)",
    featured: false,
  },
];

/* ── Tilt card ── */
function TiltCard({
  children,
  glowColor,
}: {
  children: React.ReactNode;
  glowColor: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const springConfig = { stiffness: 160, damping: 22 };
  const rotateX = useSpring(useTransform(rawY, [-0.5, 0.5], [7, -7]), springConfig);
  const rotateY = useSpring(useTransform(rawX, [-0.5, 0.5], [-7, 7]), springConfig);
  const glowX = useSpring(useTransform(rawX, [-0.5, 0.5], [20, 80]), springConfig);
  const glowY = useSpring(useTransform(rawY, [-0.5, 0.5], [20, 80]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    rawX.set((e.clientX - rect.left) / rect.width - 0.5);
    rawY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { rawX.set(0); rawY.set(0); }}
      style={{ rotateX, rotateY, transformPerspective: 900, transformStyle: "preserve-3d" }}
      whileHover={{ z: 12 }}
      className="relative h-full"
    >
      <motion.div
        aria-hidden
        className="absolute -inset-px rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at ${glowX.get()}% ${glowY.get()}%, ${glowColor} 0%, transparent 65%)`,
        }}
      />
      {children}
    </motion.div>
  );
}

/* ── Section ── */
export default function Services() {
  return (
    <section id="servicios" className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 100%, rgba(10,92,255,0.09) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <span
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-bold tracking-widest uppercase glass-badge mb-5"
            style={{ color: "#93b8d8" }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full bg-[#0A5CFF]"
              style={{ boxShadow: "0 0 6px 2px rgba(10,92,255,0.8)" }}
            />
            Lo que ofrecemos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
            Tecnología diseñada para{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #27B3FF 0%, #0A5CFF 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              el turismo real
            </span>
          </h2>
          <p className="mt-4 text-[#c4d4e2] text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Soluciones tecnológicas con resultados medibles. Sin promesas vacías,
            sin tecnología innecesaria.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 44 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.14, ease: "easeOut" }}
              className="group h-full"
            >
              <TiltCard glowColor={svc.glowColor}>
                {/* Featured gradient border */}
                {svc.featured && (
                  <div
                    className="absolute -inset-[1px] rounded-2xl z-0 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(39,179,255,0.5), rgba(10,92,255,0.5), rgba(0,55,204,0.3))",
                    }}
                  />
                )}

                <div
                  className={`relative h-full rounded-2xl p-7 flex flex-col gap-6 overflow-hidden transition-all duration-300 ${
                    svc.featured ? "z-10" : ""
                  }`}
                  style={{
                    background: svc.featured
                      ? "rgba(8,15,30,0.65)"
                      : "rgba(8,15,30,0.52)",
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                    border: svc.featured
                      ? "none"
                      : "1px solid rgba(39,179,255,0.12)",
                    boxShadow: svc.featured
                      ? "0 12px 48px rgba(10,92,255,0.25), inset 0 1px 0 rgba(255,255,255,0.07)"
                      : "0 8px 32px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.05)",
                  }}
                >
                  {/* Inner top-left highlight */}
                  <div
                    aria-hidden
                    className="absolute inset-0 rounded-2xl pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(255,255,255,0.07) 0%, transparent 55%)",
                    }}
                  />

                  {/* Top bar */}
                  <div className="flex items-start justify-between">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{
                        background: `${svc.glowColor}`,
                        border: `1px solid ${svc.iconColor}30`,
                        color: svc.iconColor,
                        boxShadow: svc.featured
                          ? `0 0 20px ${svc.glowColor}`
                          : "none",
                      }}
                    >
                      {svc.icon}
                    </div>
                    <span
                      className="text-[9px] font-black tracking-widest uppercase px-2 py-0.5 rounded-full mt-1"
                      style={
                        svc.featured
                          ? {
                              background: "rgba(39,179,255,0.15)",
                              border: "1px solid rgba(39,179,255,0.35)",
                              color: "#27B3FF",
                            }
                          : { color: "#6b89a8" }
                      }
                    >
                      {svc.tag}
                    </span>
                  </div>

                  {/* Title + description */}
                  <div>
                    <h3
                      className="text-lg font-bold mb-2 leading-snug"
                      style={{ color: svc.featured ? "#ffffff" : "#ffffff" }}
                    >
                      {svc.title}
                    </h3>
                    <p className="text-base text-[#c4d4e2] leading-relaxed">
                      {svc.description}
                    </p>
                  </div>

                  {/* Features */}
                  <ul className="flex flex-col gap-2.5 mt-auto">
                    {svc.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5">
                        <span
                          className="mt-[3px] flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center"
                          style={{ background: `${svc.iconColor}20` }}
                        >
                          <svg
                            width="8"
                            height="8"
                            viewBox="0 0 8 8"
                            fill="none"
                            aria-hidden
                          >
                            <path
                              d="M1.5 4l1.8 1.8L6.5 2"
                              stroke={svc.iconColor}
                              strokeWidth="1.4"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                        <span className="text-sm text-[#d2e0ea] leading-snug">
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <motion.a
                    href="#contacto"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold mt-2"
                    style={{ color: svc.iconColor }}
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.2 }}
                  >
                    {svc.featured ? "Solicitar demo" : "Saber más"}
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
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
