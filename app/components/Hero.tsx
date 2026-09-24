"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import VapiModal from "./VapiModal";

/* ── Fixed bar heights — avoids hydration mismatch with Math.random ── */
const WAVE_BARS = [8, 22, 14, 30, 10, 25, 17, 32, 11, 21, 8, 26];

function FadeUp({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const benefits = [
  "Atención telefónica 24/7",
  "Respuesta inmediata",
  "Gestión automática de reservas",
  "Múltiples idiomas",
  "Integración con CRM y PMS",
  "Más reservas directas",
];

/* ── Step icons ── */
function IconPhone() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <path
        d="M11.3 9.5c0 .2-.05.42-.15.6a1.5 1.5 0 0 1-.4.53c-.27.24-.57.36-.9.36-.22 0-.45-.05-.71-.17s-.52-.28-.78-.5a15 15 0 0 1-.78-.69 15 15 0 0 1-.7-.78 5.5 5.5 0 0 1-.5-.78C6.2 7.8 6.1 7.56 6.1 7.34c0-.2.04-.41.14-.6.1-.2.24-.38.44-.55.26-.2.54-.29.84-.29.12 0 .23.03.33.08.11.05.21.12.3.23l1 1.43c.09.1.15.2.2.29a.7.7 0 0 1 .06.3c0 .1-.03.2-.08.3a1.3 1.3 0 0 1-.2.29l-.28.29a.2.2 0 0 0-.06.14c0 .03 0 .06.02.1l.04.1c.09.15.21.32.39.52.18.2.37.4.58.59.2.18.4.34.61.47.11.07.21.1.31.1a.2.2 0 0 0 .14-.06l.28-.28c.09-.09.17-.15.25-.19.08-.04.16-.06.24-.06.07 0 .15.02.22.06.08.04.16.1.25.17l1.44 1c.1.07.17.15.22.26.04.1.06.2.06.3z"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeMiterlimit="10"
      />
    </svg>
  );
}
function IconChat() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <path d="M1 2h12v7.5H9.5L7 12l-2.5-2.5H1z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M3.5 5.5h7M3.5 7.5h4.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}
function IconCalendar() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <rect x="1" y="2.5" width="12" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
      <path d="M1 5.5h12M4.5 1v3M9.5 1v3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M4 9l2 2 4-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IconCheck() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.2" />
      <path d="M4.5 7l2 2L9.5 5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const STEPS = [
  {
    id: 0,
    Icon: IconPhone,
    label: "Se recibe la llamada",
    desc: "El agente responde al instante.",
    color: "#27B3FF",
    isSuccess: false,
  },
  {
    id: 1,
    Icon: IconChat,
    label: "Se resuelven dudas",
    desc: "Habitaciones, disponibilidad y precios.",
    color: "#0A5CFF",
    isSuccess: false,
  },
  {
    id: 2,
    Icon: IconCalendar,
    label: "Se convierte en reserva",
    desc: "El agente confirma automáticamente.",
    color: "#0A5CFF",
    isSuccess: false,
  },
  {
    id: 3,
    Icon: IconCheck,
    label: "Reserva confirmada",
    desc: "Nueva reserva registrada.",
    color: "#22c55e",
    isSuccess: true,
  },
];

/* ── Phone mockup ── */
function PhoneMockup({ waveActive }: { waveActive: boolean }) {
  return (
    <motion.div
      animate={{ y: [-5, 5, -5] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="relative flex-shrink-0 flex justify-center"
    >
      {/* Vibration on incoming call */}
      <motion.div
        animate={
          !waveActive
            ? { x: [-2, 2, -2, 2, -1, 1, 0], rotate: [-1.5, 1.5, -1.5, 0] }
            : {}
        }
        transition={{
          duration: 0.5,
          repeat: !waveActive ? Infinity : 0,
          repeatDelay: 3.5,
        }}
      >
        {/* Phone body */}
        <div
          className="relative w-[172px] h-[330px] rounded-[34px] overflow-hidden"
          style={{
            background:
              "linear-gradient(160deg, rgba(12,20,38,0.98) 0%, rgba(5,10,20,0.98) 100%)",
            border: "1.5px solid rgba(39,179,255,0.28)",
            boxShadow:
              "0 20px 60px rgba(10,92,255,0.32), 0 0 0 1px rgba(255,255,255,0.05), inset 0 1px 0 rgba(255,255,255,0.1)",
          }}
        >
          {/* Dynamic island */}
          <div
            className="absolute top-3.5 left-1/2 -translate-x-1/2 w-[66px] h-[10px] rounded-full z-20"
            style={{ background: "#000" }}
          />

          {/* Subtle screen sheen */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(160deg, rgba(39,179,255,0.07) 0%, transparent 45%)",
            }}
          />

          {/* Screen content */}
          <div className="absolute inset-0 flex flex-col items-center pt-14">
            {/* Time */}
            <span className="text-[10px] text-white/40 font-medium mb-5">
              09:41
            </span>

            {/* Caller pulse rings + avatar */}
            <div className="relative mb-4 flex items-center justify-center">
              {/* Rings */}
              <motion.div
                className="absolute rounded-full"
                style={{
                  width: 80,
                  height: 80,
                  border: "1px solid rgba(39,179,255,0.55)",
                }}
                animate={{ scale: [1, 1.7], opacity: [0.7, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
              />
              <motion.div
                className="absolute rounded-full"
                style={{
                  width: 80,
                  height: 80,
                  border: "1px solid rgba(39,179,255,0.35)",
                }}
                animate={{ scale: [1, 2.1], opacity: [0.5, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut",
                  delay: 0.6,
                }}
              />
              {/* Avatar */}
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center relative z-10"
                style={{
                  background: "rgba(10,92,255,0.22)",
                  border: "1.5px solid rgba(39,179,255,0.45)",
                }}
              >
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 20 20"
                  fill="none"
                  aria-hidden
                >
                  <circle
                    cx="10"
                    cy="8"
                    r="4"
                    stroke="rgba(39,179,255,0.9)"
                    strokeWidth="1.4"
                  />
                  <path
                    d="M3 18c0-3.866 3.134-7 7-7s7 3.134 7 7"
                    stroke="rgba(39,179,255,0.9)"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>

            {/* Label */}
            <p className="text-[10px] text-white/45 mb-1 tracking-wide">
              Llamada entrante
            </p>
            <p className="text-[14px] font-bold text-white mb-1">
              Cliente potencial
            </p>

            {/* Voice wave */}
            <div className="flex items-center gap-[3px] mt-5 mb-5 h-9">
              {WAVE_BARS.map((h, i) => (
                <motion.div
                  key={i}
                  className="w-[3px] rounded-full"
                  style={{ background: "#27B3FF" }}
                  animate={{
                    height: waveActive ? [3, h, 3] : [3, 5, 3],
                    opacity: waveActive ? [0.5, 1, 0.5] : [0.25, 0.35, 0.25],
                  }}
                  transition={{
                    duration: waveActive ? 0.55 : 1.2,
                    repeat: Infinity,
                    delay: i * 0.055,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>

            {/* Answer button */}
            <motion.div
              className="w-12 h-12 rounded-full flex items-center justify-center"
              style={{
                background: "rgba(34,197,94,0.22)",
                border: "1.5px solid rgba(34,197,94,0.5)",
              }}
              animate={{
                boxShadow: [
                  "0 0 0px rgba(34,197,94,0)",
                  "0 0 18px rgba(34,197,94,0.55)",
                  "0 0 0px rgba(34,197,94,0)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden
              >
                <path
                  d="M13 9.7c0 .25-.06.5-.17.72a1.7 1.7 0 0 1-.46.62c-.33.3-.69.44-1.08.44-.26 0-.55-.07-.86-.2a9.5 9.5 0 0 1-.93-.6c-.35-.27-.7-.57-1.05-.9A16 16 0 0 1 7.5 8.8a9.5 9.5 0 0 1-.6-.93 3.5 3.5 0 0 1-.2-.86c0-.27.06-.53.18-.77.12-.24.3-.46.55-.66.3-.22.65-.34 1.01-.34.14 0 .28.03.4.09.13.06.25.15.35.28l1.2 1.72c.1.13.17.25.22.36.05.11.08.22.08.32 0 .13-.04.26-.1.38-.06.12-.15.24-.27.35l-.33.34a.23.23 0 0 0-.07.16c0 .04 0 .07.02.12l.05.12c.1.18.26.39.47.63.21.24.44.47.69.7.24.22.48.41.73.56.13.09.25.13.36.13a.25.25 0 0 0 .17-.07l.33-.34c.1-.1.2-.17.3-.22.1-.05.19-.07.29-.07.08 0 .18.02.27.07.1.05.2.12.3.2l1.72 1.2c.12.08.2.18.26.3.05.12.07.24.07.36z"
                  fill="rgba(34,197,94,0.9)"
                />
              </svg>
            </motion.div>
          </div>
        </div>

        {/* Phone glow below */}
        <div
          className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-28 h-7 rounded-full blur-xl pointer-events-none"
          style={{ background: "rgba(10,92,255,0.38)" }}
        />
      </motion.div>
    </motion.div>
  );
}

/* ── 4-step animated flow ── */
function FlowSteps({ activeStep }: { activeStep: number }) {
  return (
    <div className="flex flex-col justify-between gap-0 w-full sm:flex-1">
      {STEPS.map((step, i) => {
        const isActive = activeStep >= i;
        const isCurrent = activeStep === i;
        const isLast = i === STEPS.length - 1;
        const { Icon, label, desc, color, isSuccess } = step;

        return (
          <div key={step.id} className="relative">
            {/* Step card */}
            <motion.div
              animate={{
                background: isActive
                  ? isSuccess
                    ? "rgba(34,197,94,0.09)"
                    : "rgba(10,92,255,0.1)"
                  : "rgba(8,15,30,0.35)",
                borderColor: isActive
                  ? isSuccess
                    ? "rgba(34,197,94,0.4)"
                    : "rgba(10,92,255,0.42)"
                  : "rgba(39,179,255,0.09)",
                boxShadow: isCurrent
                  ? isSuccess
                    ? "0 0 16px rgba(34,197,94,0.22)"
                    : "0 0 16px rgba(10,92,255,0.22)"
                  : "none",
              }}
              transition={{ duration: 0.5 }}
              className="rounded-xl px-4 py-3.5 flex items-start gap-3 border"
              style={{
                border: "1px solid rgba(39,179,255,0.09)",
              }}
            >
              {/* Icon bubble */}
              <motion.div
                animate={{
                  background: isActive
                    ? isSuccess
                      ? "rgba(34,197,94,0.2)"
                      : "rgba(10,92,255,0.25)"
                    : "rgba(255,255,255,0.04)",
                  boxShadow: isCurrent
                    ? isSuccess
                      ? "0 0 14px rgba(34,197,94,0.6)"
                      : "0 0 14px rgba(39,179,255,0.55)"
                    : "none",
                }}
                transition={{ duration: 0.5 }}
                className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center"
                style={{ color: isActive ? color : "#6b89a8" }}
              >
                <Icon />
              </motion.div>

              {/* Text */}
              <div className="min-w-0">
                <motion.p
                  animate={{
                    color: isActive ? "#ffffff" : "#4a6580",
                  }}
                  transition={{ duration: 0.5 }}
                  className="text-[13px] font-bold leading-tight mb-1 truncate"
                >
                  {label}
                </motion.p>
                <motion.p
                  animate={{
                    color: isActive ? "#7ea8c8" : "#2d4259",
                  }}
                  transition={{ duration: 0.5 }}
                  className="text-[11px] leading-snug"
                >
                  {desc}
                </motion.p>
              </div>
            </motion.div>

            {/* Connector line */}
            {!isLast && (
              <div
                className="mx-auto ml-[28px] w-px h-4 relative overflow-hidden"
                style={{ background: "rgba(39,179,255,0.1)" }}
              >
                <motion.div
                  className="absolute inset-0"
                  animate={{
                    background:
                      activeStep > i
                        ? "linear-gradient(to bottom, #0A5CFF, #27B3FF)"
                        : "transparent",
                  }}
                  transition={{ duration: 0.4 }}
                />
                {/* Traveling dot */}
                {activeStep === i + 1 && (
                  <motion.div
                    className="absolute left-1/2 -translate-x-1/2 w-2 h-2 rounded-full"
                    style={{
                      background: "#27B3FF",
                      boxShadow: "0 0 6px #27B3FF",
                    }}
                    initial={{ top: 0 }}
                    animate={{ top: "100%" }}
                    transition={{ duration: 0.45, ease: "easeIn" }}
                  />
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

/* ── Right-side visual panel ── */
function VisualPanel() {
  const [activeStep, setActiveStep] = useState(-1);

  useEffect(() => {
    let step = 0;
    let timer: ReturnType<typeof setTimeout>;

    function advance() {
      setActiveStep(step);
      if (step < STEPS.length - 1) {
        step++;
        timer = setTimeout(advance, 1700);
      } else {
        // Hold last step, then reset
        timer = setTimeout(() => {
          setActiveStep(-1);
          step = 0;
          timer = setTimeout(advance, 900);
        }, 3000);
      }
    }

    timer = setTimeout(advance, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: 28, scale: 0.96 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.85, delay: 0.3, ease: "easeOut" }}
      className="relative"
    >
      {/* Ambient glow behind card */}
      <div
        aria-hidden
        className="absolute -inset-8 rounded-[56px] blur-3xl pointer-events-none -z-10"
        style={{ background: "rgba(10,92,255,0.12)" }}
      />

      {/* Main glass card */}
      <div
        className="relative rounded-3xl p-7 overflow-hidden"
        style={{
          background: "rgba(8,15,30,0.58)",
          backdropFilter: "blur(28px)",
          WebkitBackdropFilter: "blur(28px)",
          border: "1px solid rgba(39,179,255,0.17)",
          boxShadow:
            "0 28px 80px rgba(10,92,255,0.22), 0 8px 24px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.07)",
        }}
      >
        {/* Inner highlight */}
        <div
          aria-hidden
          className="absolute inset-0 rounded-3xl pointer-events-none"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.07) 0%, transparent 50%)",
          }}
        />
        {/* Top-right accent glow */}
        <div
          aria-hidden
          className="absolute -top-16 -right-16 w-56 h-56 rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(10,92,255,0.18) 0%, transparent 70%)",
          }}
        />

        {/* Card header */}
        <div className="relative flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div
              className="w-2.5 h-2.5 rounded-full"
              style={{
                background: "#22c55e",
                boxShadow: "0 0 10px rgba(34,197,94,0.85)",
              }}
            />
            <span
              className="text-[11px] font-bold tracking-widest uppercase"
              style={{ color: "#93b8d8" }}
            >
              Agente de Voz IA · En directo
            </span>
          </div>
          {/* Window dots */}
          <div className="flex gap-1.5">
            {["rgba(239,68,68,0.65)", "rgba(234,179,8,0.65)", "rgba(34,197,94,0.65)"].map(
              (c, i) => (
                <span
                  key={i}
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ background: c }}
                />
              )
            )}
          </div>
        </div>

        {/* Content: phone + steps */}
        <div className="flex flex-col sm:flex-row gap-5 items-center sm:items-stretch">
          {/* Phone */}
          <PhoneMockup waveActive={activeStep >= 0} />

          {/* Steps */}
          <FlowSteps activeStep={activeStep} />
        </div>

        {/* Footer status */}
        <div
          className="relative mt-6 pt-5 flex items-center justify-between"
          style={{ borderTop: "1px solid rgba(39,179,255,0.09)" }}
        >
          <div className="flex items-center gap-2.5">
            <motion.div
              className="w-2 h-2 rounded-full"
              style={{ background: "#22c55e" }}
              animate={{
                boxShadow: [
                  "0 0 0px rgba(34,197,94,0)",
                  "0 0 8px rgba(34,197,94,0.9)",
                  "0 0 0px rgba(34,197,94,0)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-[11px] text-[#6b89a8]">
              Disponible 24 horas
            </span>
          </div>
          <span className="text-[11px] text-[#6b89a8]">
            Respuesta{" "}
            <span style={{ color: "#27B3FF" }}>&lt; 3s</span>
          </span>
        </div>
      </div>
    </motion.div>
  );
}

/* ── Hero section ── */
export default function Hero() {
  const [isVapiOpen, setIsVapiOpen] = useState(false);

  return (
    <>
      <VapiModal isOpen={isVapiOpen} onClose={() => setIsVapiOpen(false)} />
      <section className="relative min-h-[100svh] flex flex-col items-center justify-center px-4 sm:px-6 pt-20 sm:pt-24 pb-12 sm:pb-16 overflow-hidden">

      {/* ── Background ── */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 100% 70% at 50% -10%, rgba(10,92,255,0.38) 0%, rgba(39,179,255,0.12) 42%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 90% 80%, rgba(39,179,255,0.14) 0%, transparent 65%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 8% 70%, rgba(0,55,204,0.16) 0%, transparent 65%)",
        }}
      />
      {/* Grid */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#27B3FF 1px, transparent 1px), linear-gradient(90deg, #27B3FF 1px, transparent 1px)",
          backgroundSize: "52px 52px",
        }}
      />
      {/* Grid vignette */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 75% 60% at 50% 50%, transparent 40%, #050a14 100%)",
        }}
      />
      {/* Grain */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.028]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='280' height='280'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='280' height='280' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "200px 200px",
        }}
      />

      {/* ── Content grid ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-10 lg:gap-12 xl:gap-16 items-center">

        {/* ── LEFT: Commercial content ── */}
        <div className="flex flex-col">

          {/* Badge */}
          <FadeUp delay={0} className="flex mb-6">
            <span
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase glass-badge"
              style={{ color: "#93b8d8" }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full bg-[#0A5CFF]"
                style={{
                  boxShadow: "0 0 8px 3px rgba(10,92,255,0.9)",
                  animation: "glow-pulse 2s ease-in-out infinite",
                }}
              />
              Agentes de Voz con IA para Turismo
            </span>
          </FadeUp>

          {/* Title */}
          <FadeUp delay={0.1}>
            <h1 className="text-[2rem] sm:text-5xl lg:text-5xl xl:text-[3.4rem] font-black leading-[1.05] tracking-tight text-white mb-4">
              Agentes de Voz con IA{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #27B3FF 0%, #0A5CFF 55%, #0037CC 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                a medida
              </span>
            </h1>
          </FadeUp>

          {/* Tagline */}
          <FadeUp delay={0.15}>
            <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-white/90 mb-5 leading-snug">
              Consigue más clientes y una mejor atención al cliente.
            </p>
          </FadeUp>

          {/* Subtitle */}
          <FadeUp delay={0.22}>
            <div className="text-[#c4d4e2] text-base leading-relaxed max-w-lg mb-8 space-y-3">
              <p>
                En Don Digital diseñamos, entrenamos e implementamos agentes de
                voz con inteligencia artificial para tu negocio.
              </p>
              <p>
                Nuestros agentes atienden llamadas, responden consultas,
                gestionan reservas y captan clientes las 24 horas del día,
                adaptándose al tono y necesidades de tu negocio.
              </p>
            </div>
          </FadeUp>

          {/* Benefits */}
          <FadeUp delay={0.3}>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2.5 gap-x-6 mb-10">
              {benefits.map((b) => (
                <li key={b} className="flex items-center gap-2.5">
                  <span
                    className="flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center"
                    style={{
                      background: "rgba(10,92,255,0.18)",
                      border: "1px solid rgba(39,179,255,0.35)",
                    }}
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
                        stroke="#27B3FF"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="text-sm text-[#d2e0ea]">{b}</span>
                </li>
              ))}
            </ul>
          </FadeUp>

          {/* CTAs */}
          <FadeUp delay={0.38}>
            <div className="flex flex-col sm:flex-row gap-3">
              <motion.a
                href="#contacto"
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 0 44px 8px rgba(10,92,255,0.55)",
                }}
                whileTap={{ scale: 0.97 }}
                style={{ boxShadow: "0 8px 30px rgba(10,92,255,0.4)" }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#0A5CFF] hover:bg-[#0037CC] text-white font-semibold text-sm transition-colors duration-200 w-full sm:w-auto"
              >
                Solicitar demostración
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M1 7h12M7 1l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.a>

              <motion.button
                type="button"
                onClick={() => setIsVapiOpen(true)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm transition-all duration-300 w-full sm:w-auto"
                style={{
                  background: "rgba(39,179,255,0.07)",
                  border: "1px solid rgba(39,179,255,0.2)",
                  color: "#93b8d8",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)",
                }}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  aria-hidden
                >
                  <circle
                    cx="7"
                    cy="7"
                    r="5.5"
                    stroke="currentColor"
                    strokeWidth="1.4"
                  />
                  <path d="M5.5 5.2l4 1.8-4 1.8V5.2z" fill="currentColor" />
                </svg>
                Escuchar una llamada real
              </motion.button>
            </div>
          </FadeUp>
        </div>

        {/* ── RIGHT: Animated visual panel ── */}
        <div className="flex justify-center lg:justify-end">
          <div className="w-full max-w-[600px]">
            <VisualPanel />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full flex items-start justify-center pt-1.5"
          style={{ border: "1px solid rgba(39,179,255,0.22)" }}
        >
          <div className="w-1 h-2 rounded-full bg-[#0A5CFF]" />
        </motion.div>
      </motion.div>
    </section>
    </>
  );
}
