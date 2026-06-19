"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "¿El agente de voz puede gestionar reservas completas?",
    a: "Sí. El agente puede consultar disponibilidad en tiempo real, recoger los datos del cliente y confirmar la reserva directamente en tu sistema. El nivel de automatización depende de la integración con tu PMS o software de reservas, que configuramos durante la implantación.",
  },
  {
    q: "¿Habla varios idiomas?",
    a: "Nuestros agentes de voz soportan más de 20 idiomas con detección automática. El agente identifica el idioma del cliente desde las primeras palabras y responde en ese mismo idioma, sin que el cliente tenga que seleccionar nada.",
  },
  {
    q: "¿Se integra con mi software de gestión actual?",
    a: "Sí. Integramos el agente de voz con los principales PMS hoteleros, CRMs y plataformas de reservas del sector turístico. Si utilizas un sistema específico, lo evaluamos durante la consulta inicial y te confirmamos la viabilidad antes de empezar.",
  },
  {
    q: "¿Cuánto tiempo tarda la implantación?",
    a: "El proceso completo suele durar entre 2 y 4 semanas. Incluye la configuración del agente con la información de tu negocio, las pruebas de calidad y la integración con tus sistemas. Nuestro objetivo es que el agente esté operativo y bien afinado antes de lanzarlo.",
  },
  {
    q: "¿El agente puede transferir llamadas a una persona?",
    a: "Por supuesto. Puedes definir las situaciones en las que el agente transfiere la llamada a tu equipo: peticiones complejas, quejas, clientes VIP u otras situaciones que requieran atención humana. La transferencia es fluida y el agente proporciona contexto a la persona que recibe la llamada.",
  },
  {
    q: "¿Qué ocurre si el agente no entiende una consulta?",
    a: "El agente está entrenado para gestionar situaciones de incertidumbre con naturalidad: pide aclaraciones, reformula la pregunta o, si no puede resolver la consulta, ofrece al cliente la opción de transferir la llamada o dejar un mensaje. Nunca deja a un cliente sin respuesta.",
  },
];

function FAQItem({
  item,
  index,
}: {
  item: (typeof faqs)[number];
  index: number;
}) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: "easeOut" }}
      className="rounded-xl overflow-hidden transition-all duration-300"
      style={{
        background: open
          ? "rgba(10,92,255,0.08)"
          : "rgba(8,15,30,0.45)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        border: open
          ? "1px solid rgba(10,92,255,0.4)"
          : "1px solid rgba(39,179,255,0.11)",
        boxShadow: open
          ? "0 0 28px rgba(10,92,255,0.14), inset 0 1px 0 rgba(255,255,255,0.06)"
          : "0 4px 16px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.04)",
      }}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-5 text-left group"
      aria-expanded={open}
      >
        <span
          className={`text-sm sm:text-base font-semibold transition-colors duration-200 ${
            open ? "text-white" : "text-[#e2eaf4] group-hover:text-white"
          }`}
        >
          {item.q}
        </span>
        <motion.div
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
          className="flex-shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-colors duration-200"
          style={{
            borderColor: open ? "rgba(10,92,255,0.8)" : "rgba(39,179,255,0.2)",
            background: open ? "rgba(10,92,255,0.2)" : "transparent",
            color: open ? "#27B3FF" : "#6b89a8",
          }}
        >
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
            <path
              d="M5 1v8M1 5h8"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-5 text-base text-[#c4d4e2] leading-relaxed">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 20% 60%, rgba(10,92,255,0.07) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <span
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-bold tracking-widest uppercase glass-badge mb-5"
            style={{ color: "#93b8d8" }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full bg-[#0A5CFF]"
              style={{ boxShadow: "0 0 6px 2px rgba(10,92,255,0.8)" }}
            />
            Resolvemos tus dudas
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
            Preguntas sobre{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #27B3FF 0%, #0A5CFF 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              agentes de voz
            </span>
          </h2>
          <p className="mt-4 text-[#c4d4e2] text-base sm:text-lg leading-relaxed">
            Todo lo que necesitas saber antes de implementar un agente de voz
            con IA en tu negocio turístico.
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {faqs.map((item, i) => (
            <FAQItem key={item.q} item={item} index={i} />
          ))}
        </div>

        {/* Bottom nudge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-[#6b89a8] mb-4">
            ¿Tienes alguna pregunta específica sobre tu negocio?
          </p>
          <motion.a
            href="#contacto"
            whileHover={{
              scale: 1.03,
              boxShadow: "0 0 28px 4px rgba(10,92,255,0.4)",
            }}
            whileTap={{ scale: 0.97 }}
            style={{ boxShadow: "0 6px 20px rgba(10,92,255,0.25)" }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0A5CFF] hover:bg-[#0037CC] text-white text-sm font-semibold transition-colors duration-200"
          >
            Habla con un experto
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
        </motion.div>
      </div>
    </section>
  );
}
