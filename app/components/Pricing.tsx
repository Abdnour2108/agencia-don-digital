"use client";

import { motion } from "framer-motion";

const plans = [
  {
    id: "start",
    name: "Start",
    tagline: "Empieza a no perder reservas",
    for: "Para pequeños alojamientos y negocios turísticos que quieren dar el primer paso con la IA de voz.",
    features: [
      "Agente de voz IA básico",
      "Atención 24/7",
      "Hasta 200 llamadas/mes",
      "1 idioma configurado",
      "Informes mensuales",
    ],
    cta: "Solicitar propuesta",
    popular: false,
    premium: false,
  },
  {
    id: "growth",
    name: "Growth",
    tagline: "El más elegido por hoteles y apartamentos",
    for: "Para empresas turísticas que quieren escalar su atención telefónica y maximizar reservas.",
    features: [
      "Agente de voz IA avanzado",
      "Atención 24/7 ilimitada",
      "Hasta 5 idiomas",
      "Gestión de reservas integrada",
      "Integración CRM o PMS",
      "Dashboard de métricas",
    ],
    cta: "Solicitar propuesta",
    popular: true,
    premium: false,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    tagline: "Para grandes operaciones turísticas",
    for: "Para cadenas hoteleras, grandes agencias y empresas con necesidades personalizadas de alto volumen.",
    features: [
      "Solución completamente personalizada",
      "Idiomas ilimitados",
      "Integraciones a medida",
      "Agentes multicanal (voz + chat)",
      "SLA garantizado",
      "Account manager dedicado",
    ],
    cta: "Hablar con un experto",
    popular: false,
    premium: true,
  },
];

function Check({ inverted }: { inverted?: boolean }) {
  return (
    <span
      className="mt-[3px] flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center"
      style={{
        background: inverted ? "rgba(255,255,255,0.18)" : "rgba(10,92,255,0.15)",
      }}
    >
      <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden>
        <path
          d="M1.5 4l1.8 1.8L6.5 2"
          stroke={inverted ? "#fff" : "#27B3FF"}
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

function PlanCard({
  plan,
  index,
}: {
  plan: (typeof plans)[number];
  index: number;
}) {
  const isPremium = plan.premium;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: "easeOut" }}
      className="group h-full"
    >
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="relative h-full rounded-2xl flex flex-col overflow-hidden transition-all duration-300"
        style={{
          background: isPremium
            ? "rgba(10,15,28,0.7)"
            : "rgba(8,15,30,0.52)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: isPremium
            ? "1px solid rgba(39,179,255,0.25)"
            : "1px solid rgba(39,179,255,0.12)",
          boxShadow: isPremium
            ? "0 12px 48px rgba(10,92,255,0.2), inset 0 1px 0 rgba(255,255,255,0.07)"
            : "0 8px 32px rgba(0,0,0,0.22), inset 0 1px 0 rgba(255,255,255,0.05)",
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

        {/* Premium shimmer top bar */}
        {isPremium && (
          <div
            className="absolute top-0 left-0 right-0 h-[1px]"
            style={{
              background:
                "linear-gradient(90deg, transparent, #27B3FF, #0A5CFF, transparent)",
            }}
          />
        )}

        {/* Hover glow */}
        <div
          aria-hidden
          className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-400"
          style={{
            background: isPremium
              ? "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(39,179,255,0.08) 0%, transparent 70%)"
              : "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(10,92,255,0.07) 0%, transparent 70%)",
          }}
        />

        <div className="relative flex flex-col flex-1 p-6 gap-5">
          {/* Name + tagline */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <h3
                className="text-xl font-black tracking-tight"
                style={{ color: isPremium ? "#27B3FF" : "#ffffff" }}
              >
                {plan.name}
              </h3>
              {isPremium && (
                <span className="text-[9px] font-bold tracking-widest uppercase text-[#27B3FF] border border-[#27B3FF]/30 px-2 py-0.5 rounded-full">
                  Enterprise
                </span>
              )}
            </div>
            <p className="text-xs text-[#c4d4e2] font-medium leading-snug">{plan.tagline}</p>
          </div>

          {/* For whom */}
          <p
            className="text-xs text-[#c4d4e2] leading-relaxed pt-4"
            style={{ borderTop: "1px solid rgba(39,179,255,0.1)" }}
          >
            {plan.for}
          </p>

          {/* Price label */}
          <div
            className="rounded-xl px-4 py-3"
            style={{
              background: "rgba(10,92,255,0.1)",
              border: "1px solid rgba(10,92,255,0.2)",
            }}
          >
            <p className="text-[10px] uppercase tracking-widest text-[#93b8d8] mb-0.5">
              Inversión
            </p>
            <p className="text-sm font-semibold text-[#d2e0ea] leading-snug">
              Presupuesto personalizado según tu negocio y volumen.
            </p>
          </div>

          {/* Features */}
          <ul className="flex flex-col gap-2.5">
            {plan.features.map((f) => (
              <li key={f} className="flex items-start gap-2.5">
                <Check />
                <span className="text-sm text-[#d2e0ea] leading-snug">{f}</span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="mt-auto pt-4">
            <motion.a
              href="#contacto"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 24px 3px rgba(10,92,255,0.35)",
              }}
              whileTap={{ scale: 0.97 }}
              style={{ boxShadow: "0 4px 16px rgba(10,92,255,0.2)" }}
              className={`flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold transition-colors duration-200 ${
                isPremium
                  ? "bg-gradient-to-r from-[#0A5CFF] to-[#27B3FF] text-white hover:from-[#0037CC] hover:to-[#0A5CFF]"
                  : "border border-[#0A5CFF]/50 text-[#27B3FF] hover:bg-[#0A5CFF] hover:text-white hover:border-[#0A5CFF]"
              }`}
            >
              {plan.cta}
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden>
                <path d="M1 6.5h11M6.5 1l5.5 5.5-5.5 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function PopularCard({
  plan,
  index,
}: {
  plan: (typeof plans)[number];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: "easeOut" }}
      className="relative h-full"
    >
      {/* Gradient border */}
      <div
        className="absolute -inset-[1px] rounded-2xl z-0"
        style={{
          background: "linear-gradient(135deg, #27B3FF, #0A5CFF, #0037CC)",
        }}
      />
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="relative z-10 h-full rounded-2xl flex flex-col overflow-hidden"
        style={{
          background: "linear-gradient(160deg, #0A5CFF 0%, #0037CC 100%)",
        }}
      >
        {/* Texture */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        {/* Top shine */}
        <div
          aria-hidden
          className="absolute top-0 left-0 right-0 h-24 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.12) 0%, transparent 100%)",
          }}
        />

        <div className="relative flex flex-col flex-1 p-6 gap-5">
          <div>
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-xl font-black text-white tracking-tight">
                {plan.name}
              </h3>
              <span className="text-[9px] font-black tracking-widest uppercase bg-white text-[#0037CC] px-2.5 py-1 rounded-full shadow-md">
                Más popular
              </span>
            </div>
            <p className="text-xs text-white/60 font-medium leading-snug">{plan.tagline}</p>
          </div>

          <p
            className="text-xs text-white/70 leading-relaxed pt-4"
            style={{ borderTop: "1px solid rgba(255,255,255,0.12)" }}
          >
            {plan.for}
          </p>

          <div
            className="rounded-xl px-4 py-3"
            style={{
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.2)",
            }}
          >
            <p className="text-[10px] uppercase tracking-widest text-white/50 mb-0.5">
              Inversión
            </p>
            <p className="text-sm font-semibold text-white/90 leading-snug">
              Presupuesto personalizado según tu negocio y volumen.
            </p>
          </div>

          <ul className="flex flex-col gap-2.5">
            {plan.features.map((f) => (
              <li key={f} className="flex items-start gap-2.5">
                <Check inverted />
                <span className="text-sm text-white/85 leading-snug">{f}</span>
              </li>
            ))}
          </ul>

          <div className="mt-auto pt-4">
            <motion.a
              href="#contacto"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 32px 6px rgba(255,255,255,0.25)",
              }}
              whileTap={{ scale: 0.97 }}
              style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.3)" }}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-bold bg-white text-[#0037CC] hover:bg-[#f0f6ff] transition-colors duration-200"
            >
              {plan.cta}
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden>
                <path d="M1 6.5h11M6.5 1l5.5 5.5-5.5 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Pricing() {
  return (
    <section id="precios" className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 80% 30%, rgba(10,92,255,0.08) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-14"
        >
          <span
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-bold tracking-widest uppercase glass-badge mb-5"
            style={{ color: "#93b8d8" }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full bg-[#0A5CFF]"
              style={{ boxShadow: "0 0 6px 2px rgba(10,92,255,0.8)" }}
            />
            Planes
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
            Adapta el agente de voz{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #27B3FF 0%, #0A5CFF 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              a tu negocio
            </span>
          </h2>
          <p className="mt-4 text-[#c4d4e2] text-base sm:text-lg max-w-lg mx-auto leading-relaxed">
            Sin precios cerrados. Cada propuesta se adapta a tu volumen de
            llamadas, idiomas necesarios y sistemas existentes.
          </p>
        </motion.div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch mb-12">
          {plans.map((plan, i) =>
            plan.popular ? (
              <PopularCard key={plan.id} plan={plan} index={i} />
            ) : (
              <PlanCard key={plan.id} plan={plan} index={i} />
            )
          )}
        </div>

        {/* Trust guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="flex justify-center"
        >
          <div
            className="flex items-start sm:items-center gap-3 px-5 sm:px-6 py-4 rounded-2xl max-w-2xl w-full sm:w-auto"
            style={{
              background: "rgba(8,15,30,0.52)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              border: "1px solid rgba(39,179,255,0.12)",
              boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              className="flex-shrink-0 text-[#27B3FF]"
              aria-hidden
            >
              <path
                d="M10 2L3 5.5v5c0 3.87 3.03 7.5 7 8.5 3.97-1 7-4.63 7-8.5v-5L10 2z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <path
                d="M7 10l2 2 4-4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="text-sm text-[#c4d4e2] leading-relaxed">
              Sin permanencia obligatoria. Sin costes ocultos.{" "}
              <span className="text-[#d2e0ea] font-medium">
                Resultados medibles desde el primer mes.
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
