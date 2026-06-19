"use client";

import { motion } from "framer-motion";

function IconPhone() {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden>
      <path
        d="M19 16.5c0 .4-.1.8-.3 1.2-.2.4-.5.7-.8 1-.6.5-1.2.8-1.9.8-.5 0-1-.1-1.6-.4-.6-.3-1.1-.6-1.6-.9a24 24 0 0 1-1.5-1.3 24 24 0 0 1-1.3-1.5c-.4-.5-.7-1-.9-1.6-.2-.5-.3-1-.3-1.5 0-.5.1-.9.3-1.3.2-.4.5-.8.9-1.2.5-.5 1-.7 1.6-.7.2 0 .4 0 .6.1.2.1.4.2.5.4l1.8 2.5c.2.2.3.4.4.6.1.2.1.4.1.5 0 .2-.1.4-.2.6-.1.2-.2.3-.4.5l-.5.5c-.1.1-.1.2-.1.3 0 .1 0 .1.1.2l.1.2c.2.3.4.6.7 1 .4.4.7.8 1.1 1.1.4.4.8.7 1.2 1 .2.1.4.2.6.2.1 0 .2-.1.3-.2l.6-.6c.2-.2.3-.3.5-.4.2-.1.3-.1.5-.1.1 0 .3 0 .5.1.2.1.3.2.5.3l2.5 1.8c.2.1.4.3.4.5.1.2.1.4.1.6z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeMiterlimit="10"
      />
    </svg>
  );
}

function IconBrain() {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden>
      <path
        d="M9 13c0-2.2 1.8-4 4-4s4 1.8 4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="13" cy="13" r="8" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M13 5V3M13 23v-2M5 13H3M23 13h-2M7.05 7.05L5.64 5.64M20.36 20.36l-1.41-1.41M7.05 18.95l-1.41 1.41M20.36 5.64l-1.41 1.41"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <circle cx="13" cy="13" r="2" fill="currentColor" />
    </svg>
  );
}

function IconChart() {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden>
      <path
        d="M4 20l5-7 4 4 4.5-6.5L22 15"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="22" cy="6" r="3" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M22 3V1M22 11V9M25 6h2M15 6h2M24.1 3.9l1.4-1.4M17.5 10.5l1.4-1.4M24.1 8.1l1.4 1.4M17.5 3.9l1.4 1.4"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );
}

const steps = [
  {
    number: "01",
    title: "Atiende",
    description:
      "El agente de voz responde las llamadas al instante, sin esperas ni desvíos. Disponible las 24 horas, los 365 días del año, en cualquier idioma.",
    icon: <IconPhone />,
    accent: "#27B3FF",
  },
  {
    number: "02",
    title: "Informa",
    description:
      "Responde dudas sobre habitaciones, precios, horarios, actividades y servicios con total precisión. Tu negocio siempre tiene la respuesta correcta.",
    icon: <IconBrain />,
    accent: "#0A5CFF",
  },
  {
    number: "03",
    title: "Convierte",
    description:
      "Ayuda al cliente a completar una reserva o genera un lead cualificado. Cada llamada se convierte en una oportunidad de negocio real.",
    icon: <IconChart />,
    accent: "#27B3FF",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 overflow-hidden"
    >
      {/* Section glow */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(10,92,255,0.07) 0%, transparent 65%)",
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
            Proceso
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
            Cómo funciona el{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #27B3FF 0%, #0A5CFF 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              agente de voz
            </span>
          </h2>
          <p className="mt-4 text-[#c4d4e2] text-base sm:text-lg max-w-lg mx-auto leading-relaxed">
            Tres pasos automáticos que trabajan mientras tú te dedicas a lo que
            importa.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {/* Connector lines */}
          <div
            aria-hidden
            className="hidden md:block absolute top-[72px] left-[calc(33.33%+16px)] right-[calc(33.33%+16px)] h-px pointer-events-none"
            style={{
              background:
                "linear-gradient(90deg, rgba(39,179,255,0.35) 0%, rgba(10,92,255,0.35) 100%)",
            }}
          />

          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.14, ease: "easeOut" }}
              className="group"
            >
              <div
                className="glass-card rounded-2xl p-6 md:p-8 h-full relative overflow-hidden transition-all duration-300"
                style={{
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
                  className="absolute -top-12 -right-12 w-36 h-36 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle, ${step.accent}22 0%, transparent 70%)`,
                  }}
                />

                {/* Step number + line */}
                <div className="relative flex items-center gap-3 mb-6">
                  <span
                    className="text-[10px] font-black tracking-[0.25em] uppercase flex-shrink-0"
                    style={{ color: `${step.accent}80` }}
                  >
                    {step.number}
                  </span>
                  <div
                    className="flex-1 h-px"
                    style={{ background: `${step.accent}28` }}
                  />
                </div>

                {/* Icon */}
                <motion.div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                  style={{
                    background: `${step.accent}14`,
                    border: `1px solid ${step.accent}28`,
                    color: step.accent,
                  }}
                  whileHover={{ scale: 1.08, rotate: 4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 18 }}
                >
                  {step.icon}
                </motion.div>

                <h3 className="text-2xl font-black text-white mb-3 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-base text-[#c4d4e2] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
