"use client";

import { motion } from "framer-motion";

/* ── Visual mockups ── */
function HotelVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Central phone card */}
      <div
        className="relative w-52 rounded-2xl p-4 flex flex-col gap-3"
        style={{
          background: "rgba(8,15,30,0.7)",
          border: "1px solid rgba(39,179,255,0.2)",
          boxShadow: "0 24px 64px rgba(10,92,255,0.25), 0 0 0 1px rgba(39,179,255,0.08)",
          backdropFilter: "blur(16px)",
        }}
      >
        <div className="flex items-center gap-3">
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: "rgba(10,92,255,0.25)", border: "1px solid rgba(39,179,255,0.3)" }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path d="M8 1a4 4 0 0 1 4 4c0 2.5-4 9-4 9S4 7.5 4 5a4 4 0 0 1 4-4z" stroke="#27B3FF" strokeWidth="1.4" />
              <circle cx="8" cy="5" r="1.5" stroke="#27B3FF" strokeWidth="1.3" />
            </svg>
          </div>
          <div>
            <p className="text-[10px] text-[#6b89a8]">Llamada entrante</p>
            <p className="text-xs font-bold text-white">Hotel Mediterráneo</p>
          </div>
        </div>
        <div className="h-px" style={{ background: "rgba(39,179,255,0.1)" }} />
        <div className="flex flex-col gap-1.5">
          {["Reserva confirmada", "Check-in 15:00", "Hab. doble — 3 noches"].map((t) => (
            <div key={t} className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-[#27B3FF] flex-shrink-0" />
              <span className="text-[10px] text-[#aac0d8]">{t}</span>
            </div>
          ))}
        </div>
        {/* Pulsing ring */}
        <div
          className="absolute -inset-3 rounded-[24px] pointer-events-none"
          style={{
            border: "1px solid rgba(39,179,255,0.12)",
            animation: "glow-pulse 3s ease-in-out infinite",
          }}
        />
      </div>
      {/* Floating notification */}
      <motion.div
        animate={{ y: [-4, 4, -4] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-4 -right-2 px-3 py-2 rounded-xl text-[10px] font-semibold"
        style={{
          background: "rgba(10,92,255,0.2)",
          border: "1px solid rgba(39,179,255,0.25)",
          color: "#27B3FF",
          backdropFilter: "blur(12px)",
        }}
      >
        ✓ Reserva gestionada
      </motion.div>
      <motion.div
        animate={{ y: [4, -4, 4] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-4 -left-4 px-3 py-2 rounded-xl text-[10px] font-semibold"
        style={{
          background: "rgba(8,15,30,0.8)",
          border: "1px solid rgba(39,179,255,0.18)",
          color: "#93b8d8",
          backdropFilter: "blur(12px)",
        }}
      >
        🕐 Respuesta en 2s
      </motion.div>
    </div>
  );
}

function ApartmentVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div
        className="relative w-56 rounded-2xl overflow-hidden"
        style={{
          background: "rgba(8,15,30,0.7)",
          border: "1px solid rgba(39,179,255,0.2)",
          boxShadow: "0 24px 64px rgba(10,92,255,0.22)",
          backdropFilter: "blur(16px)",
        }}
      >
        {/* Calendar header */}
        <div
          className="px-4 py-3 flex items-center justify-between"
          style={{ borderBottom: "1px solid rgba(39,179,255,0.1)" }}
        >
          <span className="text-xs font-bold text-white">Disponibilidad</span>
          <span className="text-[10px] text-[#6b89a8]">Junio 2025</span>
        </div>
        {/* Calendar grid */}
        <div className="p-4">
          <div className="grid grid-cols-7 gap-1 mb-2">
            {["L", "M", "X", "J", "V", "S", "D"].map((d) => (
              <span key={d} className="text-[9px] text-center text-[#6b89a8]">{d}</span>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-1">
            {Array.from({ length: 30 }, (_, i) => {
              const booked = [3, 4, 5, 12, 13, 20, 21];
              const today = 17;
              return (
                <div
                  key={i}
                  className="aspect-square rounded flex items-center justify-center text-[9px]"
                  style={{
                    background: booked.includes(i + 1)
                      ? "rgba(10,92,255,0.35)"
                      : i + 1 === today
                      ? "rgba(39,179,255,0.2)"
                      : "rgba(255,255,255,0.04)",
                    color: booked.includes(i + 1) ? "#27B3FF" : "#6b89a8",
                    border: i + 1 === today ? "1px solid rgba(39,179,255,0.4)" : "none",
                  }}
                >
                  {i + 1}
                </div>
              );
            })}
          </div>
        </div>
        <div
          className="px-4 py-3 flex items-center gap-2"
          style={{ borderTop: "1px solid rgba(39,179,255,0.1)" }}
        >
          <span className="w-2 h-2 rounded-sm bg-[#0A5CFF]" />
          <span className="text-[10px] text-[#6b89a8]">Ocupado</span>
          <span className="w-2 h-2 rounded-sm ml-3" style={{ background: "rgba(255,255,255,0.08)" }} />
          <span className="text-[10px] text-[#6b89a8]">Libre</span>
        </div>
      </div>
      <motion.div
        animate={{ y: [-3, 3, -3] }}
        transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-3 -left-4 px-3 py-2 rounded-xl text-[10px] font-semibold"
        style={{
          background: "rgba(0,55,204,0.25)",
          border: "1px solid rgba(10,92,255,0.3)",
          color: "#93b8d8",
          backdropFilter: "blur(12px)",
        }}
      >
        🤖 Sin personal extra
      </motion.div>
    </div>
  );
}

function AgencyVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div
        className="relative w-56 rounded-2xl flex flex-col gap-0"
        style={{
          background: "rgba(8,15,30,0.7)",
          border: "1px solid rgba(39,179,255,0.2)",
          boxShadow: "0 24px 64px rgba(10,92,255,0.22)",
          backdropFilter: "blur(16px)",
          overflow: "hidden",
        }}
      >
        <div
          className="px-4 py-3 flex items-center gap-2"
          style={{ borderBottom: "1px solid rgba(39,179,255,0.1)" }}
        >
          <div className="w-2 h-2 rounded-full bg-[#0A5CFF]" style={{ boxShadow: "0 0 6px rgba(10,92,255,0.8)" }} />
          <span className="text-xs font-bold text-white">Consulta en curso</span>
        </div>
        <div className="p-4 flex flex-col gap-2.5">
          {[
            { from: "cliente", text: "¿Viajes a Bali en agosto?" },
            { from: "bot", text: "¡Claro! Tenemos paquetes desde 7 días." },
            { from: "cliente", text: "¿Cuánto cuesta para 2 personas?" },
            { from: "bot", text: "Desde 1.850€ por persona. ¿Te envío un presupuesto?" },
          ].map((m, i) => (
            <div key={i} className={`flex ${m.from === "cliente" ? "justify-start" : "justify-end"}`}>
              <div
                className="max-w-[80%] px-3 py-2 rounded-xl text-[10px] leading-relaxed"
                style={{
                  background: m.from === "bot"
                    ? "rgba(10,92,255,0.3)"
                    : "rgba(255,255,255,0.07)",
                  color: m.from === "bot" ? "#e2eaf4" : "#aac0d8",
                  border: m.from === "bot" ? "1px solid rgba(39,179,255,0.2)" : "1px solid rgba(255,255,255,0.08)",
                }}
              >
                {m.text}
              </div>
            </div>
          ))}
        </div>
      </div>
      <motion.div
        animate={{ y: [-4, 4, -4] }}
        transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-3 -right-4 px-3 py-2 rounded-xl text-[10px] font-semibold"
        style={{
          background: "rgba(10,92,255,0.2)",
          border: "1px solid rgba(39,179,255,0.25)",
          color: "#27B3FF",
          backdropFilter: "blur(12px)",
        }}
      >
        Lead capturado ✓
      </motion.div>
    </div>
  );
}

/* ── Cases data ── */
const cases = [
  {
    tag: "Hoteles",
    title: "Atiende cada llamada. No pierdas ninguna reserva.",
    description:
      "Tu agente de voz atiende al instante a potenciales huéspedes que llaman para preguntar sobre disponibilidad, precios y servicios. Sin esperas. Sin perderse en el menú de opciones.",
    features: ["Reservas y disponibilidad 24/7", "Información de check-in", "Horarios y servicios", "Gestión de solicitudes especiales"],
    visual: <HotelVisual />,
    accent: "#27B3FF",
    reverse: false,
  },
  {
    tag: "Apartamentos turísticos",
    title: "Gestiona solicitudes sin aumentar personal.",
    description:
      "Responde consultas sobre disponibilidad, tarifas, normas de la casa y proceso de check-in online de forma automática. Tu equipo se centra en la experiencia, no en el teléfono.",
    features: ["Disponibilidad y tarifas", "Normativa de estancia", "Check-in online guiado", "Gestión de incidencias"],
    visual: <ApartmentVisual />,
    accent: "#0A5CFF",
    reverse: true,
  },
  {
    tag: "Agencias de viajes",
    title: "Convierte más consultas en ventas.",
    description:
      "Cada llamada es una oportunidad de venta. Tu agente de voz atiende, informa y captura datos de clientes interesados para que tu equipo cierre con la información perfecta.",
    features: ["Información de destinos", "Presupuestos personalizados", "Captación de leads cualificados", "Seguimiento automático"],
    visual: <AgencyVisual />,
    accent: "#27B3FF",
    reverse: false,
  },
];

function Check({ accent }: { accent: string }) {
  return (
    <span
      className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center"
      style={{ background: `${accent}18`, border: `1px solid ${accent}30` }}
    >
      <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden>
        <path
          d="M1.5 4l1.8 1.8L6.5 2"
          stroke={accent}
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export default function UseCases() {
  return (
    <section id="casos-de-uso" className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 80% 40%, rgba(10,92,255,0.07) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12 sm:mb-20"
        >
          <span
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-bold tracking-widest uppercase glass-badge mb-5"
            style={{ color: "#93b8d8" }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full bg-[#0A5CFF]"
              style={{ boxShadow: "0 0 6px 2px rgba(10,92,255,0.8)" }}
            />
            Casos de uso
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
            Para cualquier negocio{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #27B3FF 0%, #0A5CFF 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              turístico
            </span>
          </h2>
        </motion.div>

        {/* Alternating blocks */}
        <div className="flex flex-col gap-16 sm:gap-24">
          {cases.map((c, i) => (
            <motion.div
              key={c.tag}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                c.reverse ? "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1" : ""
              }`}
            >
              {/* Text side */}
              <div>
                <span
                  className="inline-block text-[10px] font-bold tracking-widest uppercase mb-4 px-2.5 py-1 rounded-full"
                  style={{
                    color: c.accent,
                    background: `${c.accent}14`,
                    border: `1px solid ${c.accent}28`,
                  }}
                >
                  {c.tag}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight mb-4 tracking-tight">
                  {c.title}
                </h3>
                <p className="text-[#c4d4e2] leading-relaxed mb-8 text-base">
                  {c.description}
                </p>
                <ul className="flex flex-col gap-3">
                  {c.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <Check accent={c.accent} />
                      <span className="text-sm text-[#d2e0ea] leading-snug">{f}</span>
                    </li>
                  ))}
                </ul>
                <motion.a
                  href="#contacto"
                  whileHover={{ x: 3 }}
                  transition={{ duration: 0.2 }}
                  className="inline-flex items-center gap-2 mt-8 text-sm font-semibold transition-colors duration-200"
                  style={{ color: c.accent }}
                >
                  Solicitar demo para {c.tag.toLowerCase()}
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden>
                    <path d="M1 6.5h11M6.5 1l5.5 5.5-5.5 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </motion.a>
              </div>

              {/* Visual side */}
              <div className="relative h-[280px] sm:h-[320px] flex items-center justify-center">
                {/* Glow background */}
                <div
                  className="absolute inset-0 rounded-3xl pointer-events-none"
                  style={{
                    background: `radial-gradient(ellipse 70% 70% at 50% 50%, ${c.accent}0e 0%, transparent 70%)`,
                  }}
                />
                <div className="relative w-full max-w-sm mx-auto h-full flex items-center justify-center">
                  {c.visual}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
