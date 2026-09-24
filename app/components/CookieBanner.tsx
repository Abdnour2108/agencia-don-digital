"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  getConsent,
  saveConsent,
  OPEN_SETTINGS_EVENT,
  type ConsentChoices,
} from "../lib/cookieConsent";

const NONE: ConsentChoices = { analytics: false, marketing: false };
const ALL: ConsentChoices = { analytics: true, marketing: true };

const primaryBtn =
  "inline-flex items-center justify-center px-5 py-3 rounded-xl bg-[#0A5CFF] hover:bg-[#0037CC] text-white font-semibold text-sm transition-colors duration-200 w-full sm:w-auto";
const secondaryBtn =
  "inline-flex items-center justify-center px-5 py-3 rounded-xl font-medium text-sm transition-colors duration-200 w-full sm:w-auto text-[#aac0d8] hover:text-white";
const secondaryStyle = {
  background: "rgba(39,179,255,0.06)",
  border: "1px solid rgba(39,179,255,0.18)",
};

function Toggle({
  id,
  checked,
  disabled,
  onChange,
}: {
  id: string;
  checked: boolean;
  disabled?: boolean;
  onChange?: (v: boolean) => void;
}) {
  return (
    <button
      id={id}
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={() => onChange?.(!checked)}
      className={`relative inline-flex h-6 w-11 flex-shrink-0 items-center rounded-full transition-colors duration-200 ${
        disabled ? "cursor-not-allowed opacity-60" : "cursor-pointer"
      }`}
      style={{
        background: checked ? "#0A5CFF" : "rgba(107,137,168,0.25)",
        border: "1px solid rgba(39,179,255,0.2)",
      }}
    >
      <span
        aria-hidden
        className="inline-block h-4 w-4 rounded-full bg-white transition-transform duration-200"
        style={{ transform: checked ? "translateX(22px)" : "translateX(4px)" }}
      />
    </button>
  );
}

const categories: {
  key: "necessary" | keyof ConsentChoices;
  title: string;
  text: string;
}[] = [
  {
    key: "necessary",
    title: "Cookies necesarias",
    text: "Imprescindibles para el funcionamiento básico y la seguridad de la web, y para recordar tus preferencias de cookies. Siempre activas.",
  },
  {
    key: "analytics",
    title: "Cookies analíticas",
    text: "Nos permitirían conocer cómo se utiliza la web y obtener estadísticas de navegación. Actualmente no utilizamos ninguna herramienta de este tipo.",
  },
  {
    key: "marketing",
    title: "Cookies de publicidad y marketing",
    text: "Nos permitirían medir campañas publicitarias y realizar acciones de marketing. Actualmente no utilizamos ninguna herramienta de este tipo.",
  },
];

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showPanel, setShowPanel] = useState(false);
  const [choices, setChoices] = useState<ConsentChoices>(NONE);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stored = getConsent();
    // eslint-disable-next-line react-hooks/set-state-in-effect -- localStorage solo existe en el cliente
    if (!stored) setShowBanner(true);

    const open = () => {
      const current = getConsent();
      setChoices(
        current
          ? { analytics: current.analytics, marketing: current.marketing }
          : NONE
      );
      setShowPanel(true);
    };
    window.addEventListener(OPEN_SETTINGS_EVENT, open);
    return () => window.removeEventListener(OPEN_SETTINGS_EVENT, open);
  }, []);

  useEffect(() => {
    if (!showPanel) return;
    panelRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowPanel(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [showPanel]);

  const decide = (c: ConsentChoices) => {
    saveConsent(c);
    setShowBanner(false);
    setShowPanel(false);
  };

  const openPanel = () => {
    setChoices(NONE);
    setShowPanel(true);
  };

  return (
    <>
      {/* ── Banner ── */}
      <AnimatePresence>
        {showBanner && !showPanel && (
          <motion.div
            key="cookie-banner"
            role="region"
            aria-label="Aviso de cookies"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed bottom-0 left-0 right-0 z-[60] p-3 sm:p-5"
          >
            <div
              className="max-w-4xl mx-auto rounded-2xl p-5 sm:p-6 flex flex-col md:flex-row md:items-center gap-5 backdrop-blur-2xl"
              style={{
                background: "rgba(8,15,30,0.94)",
                border: "1px solid rgba(39,179,255,0.18)",
                boxShadow:
                  "0 24px 60px rgba(0,0,0,0.5), 0 0 40px rgba(10,92,255,0.15), inset 0 1px 0 rgba(255,255,255,0.06)",
              }}
            >
              <div className="flex-1">
                <p className="text-xs font-semibold tracking-widest uppercase text-[#6b89a8] mb-2">
                  Cookies
                </p>
                <p className="text-sm text-[#aac0d8] leading-relaxed">
                  Utilizamos cookies para garantizar el funcionamiento de nuestra
                  web, analizar el tráfico y, si lo autorizas, mejorar nuestras
                  acciones de marketing.{" "}
                  <a
                    href="/politica-de-cookies"
                    className="text-[#27B3FF] hover:text-white underline underline-offset-2 transition-colors duration-200"
                  >
                    Más información
                  </a>
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-2.5 flex-shrink-0">
                <button type="button" onClick={() => decide(ALL)} className={primaryBtn}>
                  Aceptar todas
                </button>
                <button type="button" onClick={() => decide(NONE)} className={primaryBtn}>
                  Rechazar
                </button>
                <button
                  type="button"
                  onClick={openPanel}
                  className={secondaryBtn}
                  style={secondaryStyle}
                >
                  Configurar cookies
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Panel de configuración ── */}
      <AnimatePresence>
        {showPanel && (
          <motion.div
            key="cookie-panel-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[70] flex items-end sm:items-center justify-center p-3 sm:p-4"
            style={{
              background: "rgba(5,10,20,0.85)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
            }}
            onClick={() => setShowPanel(false)}
          >
            <motion.div
              ref={panelRef}
              tabIndex={-1}
              role="dialog"
              aria-modal="true"
              aria-labelledby="cookie-panel-title"
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 10 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg max-h-[90svh] overflow-y-auto rounded-3xl p-6 sm:p-8 outline-none"
              style={{
                background: "rgba(8,15,30,0.97)",
                border: "1px solid rgba(39,179,255,0.18)",
                boxShadow:
                  "0 40px 100px rgba(10,92,255,0.25), 0 8px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.07)",
              }}
            >
              <button
                type="button"
                onClick={() => setShowPanel(false)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
                aria-label="Cerrar configuración de cookies"
              >
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden>
                  <path d="M1 1l9 9M10 1L1 10" stroke="rgba(255,255,255,0.45)" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>

              <h2 id="cookie-panel-title" className="text-xl sm:text-2xl font-black text-white mb-2 pr-8">
                Configurar cookies
              </h2>
              <p className="text-sm text-[#6b89a8] leading-relaxed mb-6">
                Elige qué categorías de cookies quieres permitir. Puedes cambiar
                tu decisión en cualquier momento desde el enlace «Configurar
                cookies» del pie de página.
              </p>

              <ul className="flex flex-col gap-3 mb-7">
                {categories.map((cat) => {
                  const isNecessary = cat.key === "necessary";
                  const checked = isNecessary ? true : choices[cat.key as keyof ConsentChoices];
                  return (
                    <li
                      key={cat.key}
                      className="rounded-xl p-4"
                      style={{
                        background: "rgba(39,179,255,0.04)",
                        border: "1px solid rgba(39,179,255,0.12)",
                      }}
                    >
                      <div className="flex items-center justify-between gap-4 mb-1.5">
                        <label htmlFor={`cookie-${cat.key}`} className="text-sm font-bold text-white">
                          {cat.title}
                        </label>
                        <div className="flex items-center gap-3">
                          <span className="text-[10px] font-bold tracking-widest uppercase text-[#6b89a8]">
                            {isNecessary ? "Siempre activas" : checked ? "Activadas" : "Desactivadas"}
                          </span>
                          <Toggle
                            id={`cookie-${cat.key}`}
                            checked={checked}
                            disabled={isNecessary}
                            onChange={(v) =>
                              setChoices((c) => ({ ...c, [cat.key]: v }))
                            }
                          />
                        </div>
                      </div>
                      <p className="text-xs text-[#6b89a8] leading-relaxed">{cat.text}</p>
                    </li>
                  );
                })}
              </ul>

              <div className="flex flex-col sm:flex-row gap-2.5">
                <button type="button" onClick={() => decide(choices)} className={`${primaryBtn} sm:flex-1`}>
                  Guardar selección
                </button>
                <button type="button" onClick={() => decide(ALL)} className={`${secondaryBtn} sm:flex-1`} style={secondaryStyle}>
                  Aceptar todas
                </button>
                <button type="button" onClick={() => decide(NONE)} className={`${secondaryBtn} sm:flex-1`} style={secondaryStyle}>
                  Rechazar
                </button>
              </div>

              <p className="mt-5 text-xs text-[#6b89a8]">
                Más información en nuestra{" "}
                <a href="/politica-de-cookies" className="text-[#27B3FF] hover:text-white transition-colors duration-200">
                  Política de Cookies
                </a>
                .
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
