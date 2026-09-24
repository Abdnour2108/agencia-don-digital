"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const VAPI_PUBLIC_KEY = process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY;
const ASSISTANT_ID = process.env.NEXT_PUBLIC_VAPI_ASSISTANT_ID;

// Fixed heights to avoid hydration mismatch
const BARS = [6, 18, 10, 24, 8, 20, 14, 28, 9, 17, 6, 22, 12, 26, 7, 19, 11];

type CallStatus = "idle" | "connecting" | "active" | "ended";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

function IconMic({ color = "rgba(39,179,255,0.9)" }: { color?: string }) {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="9" y="2" width="6" height="12" rx="3" stroke={color} strokeWidth="1.6" />
      <path d="M5 11a7 7 0 0 0 14 0" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
      <path d="M12 19v3M9 22h6" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function IconSpeaker({ color = "rgba(10,92,255,0.9)" }: { color?: string }) {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M11 5L6 9H2v6h4l5 4V5z" stroke={color} strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14" stroke="rgba(39,179,255,0.65)" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function WaveBars({ active, isSpeaking }: { active: boolean; isSpeaking: boolean }) {
  if (!active) return null;
  return (
    <div className="flex items-center gap-[3px] h-10">
      {BARS.map((h, i) => (
        <motion.div
          key={i}
          className="w-[3px] rounded-full"
          style={{ background: isSpeaking ? "#0A5CFF" : "#27B3FF" }}
          animate={{
            height: isSpeaking ? [3, h, 3] : [3, Math.max(4, h * 0.3), 3],
            opacity: isSpeaking ? [0.55, 1, 0.55] : [0.15, 0.35, 0.15],
          }}
          transition={{
            duration: isSpeaking ? 0.38 + (i % 5) * 0.07 : 1.8 + (i % 4) * 0.35,
            repeat: Infinity,
            delay: i * (isSpeaking ? 0.035 : 0.09),
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

function PulseRings({ isSpeaking }: { isSpeaking: boolean }) {
  const color = isSpeaking ? "rgba(10,92,255,0.55)" : "rgba(39,179,255,0.3)";
  const dur = isSpeaking ? 0.75 : 2.2;
  const gap = isSpeaking ? 0.18 : 0.55;

  return (
    <>
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{ width: 88 + i * 26, height: 88 + i * 26, border: `1px solid ${color}` }}
          animate={{ scale: [1, 1.18 + i * 0.06], opacity: [0.7, 0] }}
          transition={{ duration: dur + i * 0.2, repeat: Infinity, delay: i * gap, ease: "easeOut" }}
        />
      ))}
    </>
  );
}

export default function VapiModal({ isOpen, onClose }: Props) {
  const vapiRef = useRef<any>(null);
  const [status, setStatus] = useState<CallStatus>("idle");
  const [isSpeaking, setIsSpeaking] = useState(false);

  const stopAndCleanup = () => {
    if (vapiRef.current) {
      vapiRef.current.stop();
      vapiRef.current = null;
    }
  };

  const startCall = async () => {
    if (vapiRef.current || status === "connecting") return;
    if (!VAPI_PUBLIC_KEY || !ASSISTANT_ID) {
      console.error("Faltan las variables de entorno NEXT_PUBLIC_VAPI_PUBLIC_KEY / NEXT_PUBLIC_VAPI_ASSISTANT_ID");
      return;
    }
    setStatus("connecting");
    setIsSpeaking(false);

    try {
      const VapiClass = (await import("@vapi-ai/web")).default;
      const vapi = new VapiClass(VAPI_PUBLIC_KEY);
      vapiRef.current = vapi;

      vapi.on("call-start", () => setStatus("active"));
      vapi.on("call-end", () => {
        setStatus("ended");
        setIsSpeaking(false);
        vapiRef.current = null;
      });
      vapi.on("speech-start", () => setIsSpeaking(true));
      vapi.on("speech-end", () => setIsSpeaking(false));
      vapi.on("error", () => {
        setStatus("idle");
        vapiRef.current = null;
      });

      await vapi.start(ASSISTANT_ID);
    } catch {
      setStatus("idle");
      vapiRef.current = null;
    }
  };

  const handleEndCall = () => {
    stopAndCleanup();
    setStatus("ended");
    setIsSpeaking(false);
  };

  const handleClose = () => {
    stopAndCleanup();
    setStatus("idle");
    setIsSpeaking(false);
    onClose();
  };

  const handleRestart = () => {
    setStatus("idle");
    setIsSpeaking(false);
  };

  useEffect(() => {
    return () => stopAndCleanup();
  }, []);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const statusLabel = {
    idle: "Asistente de Voz IA",
    connecting: "Conectando...",
    active: isSpeaking ? "Asistente hablando" : "Escuchando...",
    ended: "Conversación finalizada",
  }[status];

  const statusDot = {
    idle: { color: "#0A5CFF", glow: "rgba(10,92,255,0.8)" },
    connecting: { color: "#f59e0b", glow: "rgba(245,158,11,0.8)" },
    active: { color: "#22c55e", glow: "rgba(34,197,94,0.8)" },
    ended: { color: "#6b89a8", glow: "rgba(107,137,168,0.5)" },
  }[status];

  const subtitleText = {
    idle: "Habla con nuestro agente de IA y descubre cómo puede transformar tu negocio.",
    connecting: "Estableciendo conexión segura...",
    active: isSpeaking ? "El asistente está respondiendo a tu consulta." : "Te escucho. Puedes hablar ahora.",
    ended: "Gracias por probar nuestro asistente. ¿Te gustaría ver una demostración completa?",
  }[status];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="vapi-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={handleClose}
          style={{ background: "rgba(5,10,20,0.88)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)" }}
        >
          {/* Modal card */}
          <motion.div
            key="vapi-card"
            initial={{ opacity: 0, scale: 0.88, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.93, y: 12 }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-sm rounded-3xl overflow-hidden"
            style={{
              background: "rgba(8,15,30,0.97)",
              border: "1px solid rgba(39,179,255,0.18)",
              boxShadow:
                "0 40px 100px rgba(10,92,255,0.3), 0 8px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.07)",
            }}
          >
            {/* Top ambient glow */}
            <div
              aria-hidden
              className="absolute -top-24 left-1/2 -translate-x-1/2 w-80 h-48 rounded-full pointer-events-none"
              style={{ background: "radial-gradient(ellipse, rgba(10,92,255,0.22) 0%, transparent 70%)" }}
            />

            {/* Shimmer overlay */}
            <div aria-hidden className="shimmer-overlay" />

            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
              aria-label="Cerrar modal"
            >
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden>
                <path d="M1 1l9 9M10 1L1 10" stroke="rgba(255,255,255,0.45)" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>

            <div className="relative z-10 px-7 pt-8 pb-7 flex flex-col items-center">

              {/* Status badge */}
              <motion.div
                layout
                className="flex items-center gap-2 mb-7"
              >
                <motion.div
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  animate={{
                    backgroundColor: statusDot.color,
                    boxShadow: [`0 0 0px ${statusDot.glow}`, `0 0 8px ${statusDot.glow}`, `0 0 0px ${statusDot.glow}`],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span
                  className="text-[11px] font-bold tracking-widest uppercase"
                  style={{ color: "#93b8d8" }}
                >
                  {statusLabel}
                </span>
              </motion.div>

              {/* Visualization circle */}
              <div className="relative flex items-center justify-center w-44 h-44 mb-6 flex-shrink-0">
                {/* Pulse rings (only when active) */}
                {status === "active" && <PulseRings isSpeaking={isSpeaking} />}

                {/* Connecting spinner ring */}
                {status === "connecting" && (
                  <motion.div
                    className="absolute rounded-full"
                    style={{
                      width: 106,
                      height: 106,
                      border: "2px solid transparent",
                      borderTopColor: "#0A5CFF",
                      borderRightColor: "rgba(10,92,255,0.25)",
                    }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  />
                )}

                {/* Avatar circle */}
                <motion.div
                  animate={{
                    boxShadow:
                      status === "active"
                        ? isSpeaking
                          ? [
                              "0 0 18px rgba(10,92,255,0.35)",
                              "0 0 42px rgba(10,92,255,0.75)",
                              "0 0 18px rgba(10,92,255,0.35)",
                            ]
                          : [
                              "0 0 10px rgba(39,179,255,0.15)",
                              "0 0 26px rgba(39,179,255,0.4)",
                              "0 0 10px rgba(39,179,255,0.15)",
                            ]
                        : "0 0 0px rgba(0,0,0,0)",
                  }}
                  transition={{
                    duration: isSpeaking ? 0.5 : 2,
                    repeat: status === "active" ? Infinity : 0,
                    ease: "easeInOut",
                  }}
                  className="relative w-[84px] h-[84px] rounded-full flex items-center justify-center"
                  style={{
                    background: "rgba(10,92,255,0.12)",
                    border: "1.5px solid rgba(39,179,255,0.4)",
                  }}
                >
                  <AnimatePresence mode="wait">
                    {status === "active" && isSpeaking ? (
                      <motion.div
                        key="speaker"
                        initial={{ opacity: 0, scale: 0.7 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.7 }}
                        transition={{ duration: 0.2 }}
                      >
                        <IconSpeaker />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="mic"
                        initial={{ opacity: 0, scale: 0.7 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.7 }}
                        transition={{ duration: 0.2 }}
                      >
                        <IconMic
                          color={
                            status === "active"
                              ? "rgba(39,179,255,0.95)"
                              : status === "connecting"
                              ? "rgba(245,158,11,0.75)"
                              : "rgba(39,179,255,0.55)"
                          }
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Connecting pulse overlay */}
                  {status === "connecting" && (
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      style={{ background: "rgba(245,158,11,0.08)" }}
                      animate={{ opacity: [0.3, 0.9, 0.3] }}
                      transition={{ duration: 1.2, repeat: Infinity }}
                    />
                  )}
                </motion.div>
              </div>

              {/* Wave bars */}
              <AnimatePresence>
                {status === "active" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mb-5 overflow-hidden"
                  >
                    <WaveBars active isSpeaking={isSpeaking} />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Subtitle */}
              <AnimatePresence mode="wait">
                <motion.p
                  key={subtitleText}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.28 }}
                  className="text-[13px] text-center leading-relaxed mb-7"
                  style={{ color: "#6b89a8" }}
                >
                  {subtitleText}
                </motion.p>
              </AnimatePresence>

              {/* Action buttons */}
              <div className="w-full flex flex-col gap-2.5">
                <AnimatePresence mode="wait">
                  {status === "idle" && (
                    <motion.div
                      key="btn-start"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25 }}
                      className="w-full"
                    >
                      <motion.button
                        onClick={startCall}
                        whileHover={{ scale: 1.02, boxShadow: "0 0 48px 6px rgba(10,92,255,0.55)" }}
                        whileTap={{ scale: 0.97 }}
                        className="w-full flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl font-semibold text-sm text-white"
                        style={{
                          background: "linear-gradient(135deg, #0A5CFF 0%, #0037CC 100%)",
                          boxShadow: "0 8px 28px rgba(10,92,255,0.42)",
                        }}
                      >
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden>
                          <rect x="9" y="2" width="6" height="12" rx="3" fill="white" />
                          <path d="M5 11a7 7 0 0 0 14 0" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
                          <path d="M12 19v3M9 22h6" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
                        </svg>
                        Iniciar conversación
                      </motion.button>
                    </motion.div>
                  )}

                  {status === "connecting" && (
                    <motion.div
                      key="btn-connecting"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25 }}
                      className="w-full flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl font-semibold text-sm cursor-not-allowed"
                      style={{
                        background: "rgba(10,92,255,0.08)",
                        border: "1px solid rgba(39,179,255,0.15)",
                        color: "#6b89a8",
                      }}
                    >
                      <motion.div
                        className="w-4 h-4 rounded-full border-2 flex-shrink-0"
                        style={{ borderColor: "rgba(39,179,255,0.25)", borderTopColor: "#27B3FF" }}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 0.75, repeat: Infinity, ease: "linear" }}
                      />
                      Conectando...
                    </motion.div>
                  )}

                  {status === "active" && (
                    <motion.div
                      key="btn-end"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25 }}
                      className="w-full"
                    >
                      <motion.button
                        onClick={handleEndCall}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.97 }}
                        className="w-full flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-medium text-sm transition-colors"
                        style={{
                          background: "rgba(239,68,68,0.08)",
                          border: "1px solid rgba(239,68,68,0.28)",
                          color: "rgba(252,165,165,0.85)",
                        }}
                      >
                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden>
                          <rect x="1.5" y="1.5" width="10" height="10" rx="2" fill="currentColor" />
                        </svg>
                        Finalizar llamada
                      </motion.button>
                    </motion.div>
                  )}

                  {status === "ended" && (
                    <motion.div
                      key="btn-ended"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25 }}
                      className="w-full flex flex-col gap-2.5"
                    >
                      <motion.a
                        href="#contacto"
                        onClick={handleClose}
                        whileHover={{ scale: 1.02, boxShadow: "0 0 48px 6px rgba(10,92,255,0.55)" }}
                        whileTap={{ scale: 0.97 }}
                        className="w-full flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl font-semibold text-sm text-white"
                        style={{
                          background: "linear-gradient(135deg, #0A5CFF 0%, #0037CC 100%)",
                          boxShadow: "0 8px 28px rgba(10,92,255,0.42)",
                        }}
                      >
                        Reservar una demostración
                        <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden>
                          <path d="M1 7h12M7 1l6 6-6 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </motion.a>

                      <motion.button
                        onClick={handleRestart}
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full flex items-center justify-center px-6 py-3 rounded-xl font-medium text-sm"
                        style={{
                          background: "rgba(39,179,255,0.05)",
                          border: "1px solid rgba(39,179,255,0.12)",
                          color: "#6b89a8",
                        }}
                      >
                        Iniciar otra conversación
                      </motion.button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Divider + branding */}
              <div className="mt-6 flex items-center gap-3 w-full">
                <div className="flex-1 h-px" style={{ background: "rgba(39,179,255,0.08)" }} />
                <span className="text-[10px] font-medium tracking-wide" style={{ color: "rgba(107,137,168,0.5)" }}>
                  Powered by Vapi · Don Digital
                </span>
                <div className="flex-1 h-px" style={{ background: "rgba(39,179,255,0.08)" }} />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
