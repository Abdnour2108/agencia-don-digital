"use client";

import { motion } from "framer-motion";

const WHATSAPP_NUMBER = "34631322941";
const WHATSAPP_MESSAGE = "Hola, quiero más información sobre los agentes de voz con IA de Don Digital.";

function IconWhatsApp() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M17.47 14.38c-.29-.15-1.7-.84-1.97-.93-.26-.1-.46-.15-.65.15-.19.29-.75.93-.92 1.12-.17.19-.34.22-.63.07-.29-.15-1.22-.45-2.32-1.43-.86-.76-1.44-1.71-1.6-2-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.65-1.57-.9-2.15-.24-.57-.48-.5-.65-.5-.17-.01-.36-.01-.55-.01-.19 0-.5.07-.77.36-.26.29-1 .98-1 2.4s1.03 2.78 1.17 2.97c.15.19 2.03 3.1 4.92 4.34.69.3 1.22.47 1.64.6.69.22 1.31.19 1.81.11.55-.08 1.7-.7 1.94-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.34z"
        fill="currentColor"
      />
      <path
        d="M12.02 2C6.5 2 2 6.5 2 12.02c0 1.79.47 3.53 1.36 5.06L2 22l5.04-1.32a10 10 0 0 0 4.98 1.32h.01c5.52 0 10.01-4.5 10.01-10.02C22.04 6.47 17.55 2 12.02 2zm0 18.28h-.01a8.24 8.24 0 0 1-4.2-1.15l-.3-.18-3 .78.8-2.92-.2-.3a8.25 8.25 0 0 1-1.27-4.4c0-4.56 3.72-8.27 8.29-8.27 2.21 0 4.29.86 5.86 2.43a8.22 8.22 0 0 1 2.42 5.85c0 4.56-3.72 8.16-8.39 8.16z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function WhatsAppButton() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE
  )}`;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      initial={{ opacity: 0, scale: 0.6, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1, ease: "easeOut" }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_rgba(37,211,102,0.4)] transition-shadow duration-200 hover:shadow-[0_10px_32px_rgba(37,211,102,0.55)] sm:bottom-7 sm:right-7"
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366] opacity-30" />
      <IconWhatsApp />
    </motion.a>
  );
}
