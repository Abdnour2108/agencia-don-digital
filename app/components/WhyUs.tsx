"use client";

import { motion } from "framer-motion";

/* ── Icons ── */
function IconSpecialization() {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden>
      <circle cx="13" cy="13" r="10" stroke="currentColor" strokeWidth="1.6" />
      <path d="M13 3v2M13 21v2M3 13h2M21 13h2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M13 8a5 5 0 0 1 5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="13" cy="13" r="2" fill="currentColor" />
      <path d="M13 13l3-3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function IconAI() {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden>
      <rect x="7" y="5" width="12" height="12" rx="3" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="10.5" cy="9.5" r="1.2" fill="currentColor" />
      <circle cx="15.5" cy="9.5" r="1.2" fill="currentColor" />
      <path d="M10.5 12.5s.8 1.5 2.5 1.5 2.5-1.5 2.5-1.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M10 5V3M13 5V2M16 5V3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M7 10H4M7 13H5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M19 10h3M19 13h2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M10 17v3M13 17v4M16 17v3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function IconResults() {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden>
      <path d="M4 20l5.5-6 4 3.5 5-7 5 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="22.5" cy="5.5" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M22.5 3V1.5M22.5 9.5V8M25.5 5.5H27M16.5 5.5H18" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

/* ── Pillar data ── */
const pillars = [
  {
    icon: <IconSpecialization />,
    number: "01",
    title: "Especialización turística",
    points: [
      "Conocemos cómo reservan los viajeros y qué preguntas hacen",
      "Estrategias diseñadas para el ciclo de venta del turismo",
    ],
    accent: "#27B3FF",
  },
  {
    icon: <IconAI />,
    number: "02",
    title: "Automatización con IA",
    points: [
      "Reducimos tareas repetitivas para que tu equipo se centre en la experiencia",
      "Tecnología avanzada integrada en tus procesos existentes",
    ],
    accent: "#0A5CFF",
  },
  {
    icon: <IconResults />,
    number: "03",
    title: "Más reservas",
    points: [
      "Tecnología enfocada a generar reservas, no solo visibilidad",
      "Métricas claras desde el primer día para medir el retorno",
    ],
    accent: "#27B3FF",
  },
];

/* ── Stats ── */
const stats = [
  { value: "24/7", label: "Disponible siempre" },
  { value: "< 3s", label: "Tiempo de respuesta" },
  { value: "+20", label: "Idiomas soportados" },
  { value: "CRM", label: "Integraciones PMS" },
];

function Pillar({
  pillar,
  index,
}: {
  pillar: (typeof pillars)[number];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
      className="relative group"
    >
      <div
        className="relative rounded-2xl p-6 md:p-8 h-full transition-all duration-300 overflow-hidden"
        style={{
          background: "rgba(8,15,30,0.52)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(39,179,255,0.12)",
          boxShadow:
            "0 8px 32px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.06)",
        }}
      >
        {/* Inner highlight */}
        <div
          aria-hidden
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, transparent 55%)",
          }}
        />
        {/* Corner glow on hover */}
        <div
          aria-hidden
          className="absolute -top-10 -right-10 w-32 h-32 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle, ${pillar.accent}22 0%, transparent 70%)`,
          }}
        />

        <span
          className="block text-[10px] font-black tracking-[0.25em] uppercase mb-6"
          style={{ color: `${pillar.accent}70` }}
        >
          {pillar.number}
        </span>

        <motion.div
          className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
          style={{
            background: `${pillar.accent}14`,
            border: `1px solid ${pillar.accent}28`,
            color: pillar.accent,
          }}
          whileHover={{ scale: 1.08, rotate: 4 }}
          transition={{ type: "spring", stiffness: 300, damping: 18 }}
        >
          {pillar.icon}
        </motion.div>

        <h3 className="text-lg font-bold text-white mb-4 leading-snug">
          {pillar.title}
        </h3>

        <ul className="flex flex-col gap-3">
          {pillar.points.map((pt) => (
            <li key={pt} className="flex items-start gap-3">
              <span
                className="mt-[5px] flex-shrink-0 w-[5px] h-[5px] rounded-full"
                style={{ background: pillar.accent }}
              />
              <span className="text-sm text-[#d2e0ea] leading-relaxed">{pt}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function WhyUs() {
  return (
    <section id="resultados" className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 20% 50%, rgba(10,92,255,0.07) 0%, transparent 65%)",
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
            Nuestra propuesta de valor
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
            ¿Por qué elegir{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #27B3FF 0%, #0A5CFF 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Don Digital?
            </span>
          </h2>
          <p className="mt-4 text-[#c4d4e2] text-base sm:text-lg max-w-lg mx-auto leading-relaxed">
            No somos una agencia generalista. Somos especialistas en tecnología
            para el sector turístico.
          </p>
        </motion.div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {pillars.map((p, i) => (
            <Pillar key={p.title} pillar={p} index={i} />
          ))}
        </div>

        {/* ── Stats strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative rounded-2xl overflow-hidden mb-16"
          style={{
            background: "rgba(8,15,30,0.52)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(39,179,255,0.14)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.22), inset 0 1px 0 rgba(255,255,255,0.06)",
          }}
        >
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, transparent 50%)",
            }}
          />
          <div className="relative grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0"
            style={{ borderColor: "rgba(39,179,255,0.1)" }}
          >
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                className="px-8 py-8 text-center"
                style={{ borderColor: "rgba(39,179,255,0.1)" }}
              >
                <p
                  className="text-3xl sm:text-4xl font-black mb-1"
                  style={{
                    background:
                      "linear-gradient(135deg, #27B3FF 0%, #0A5CFF 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {s.value}
                </p>
                <p className="text-sm text-[#c4d4e2] font-medium">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── CTA Banner ── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative rounded-2xl overflow-hidden"
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, #0037CC 0%, #0A5CFF 50%, #27B3FF22 100%)",
            }}
          />
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
          <div
            aria-hidden
            className="absolute -top-12 -right-12 w-56 h-56 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(39,179,255,0.35) 0%, transparent 70%)",
            }}
          />

          <div className="relative z-10 px-6 sm:px-8 py-10 sm:py-14 flex flex-col sm:flex-row items-center justify-between gap-8 text-center sm:text-left">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-white/60 mb-3">
                ¿Cuántas reservas pierdes cuando nadie responde?
              </p>
              <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight max-w-md">
                Descubre cómo un agente de voz puede atender a tus clientes las
                24 horas del día.
              </h3>
            </div>
            <div className="flex-shrink-0">
              <motion.a
                href="#contacto"
                whileHover={{
                  scale: 1.04,
                  boxShadow: "0 0 36px 6px rgba(255,255,255,0.22)",
                }}
                whileTap={{ scale: 0.96 }}
                style={{ boxShadow: "0 8px 28px rgba(0,0,0,0.25)" }}
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl bg-white text-[#0037CC] font-bold text-sm transition-colors duration-200 hover:bg-[#f0f6ff]"
              >
                Solicitar demostración gratuita
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M1 7.5h13M7.5 1l6.5 6.5-6.5 6.5"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
