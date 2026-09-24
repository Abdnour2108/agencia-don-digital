"use client";

import { openCookieSettings } from "../lib/cookieConsent";

export default function CookieSettingsButton({
  className,
  children = "Configurar cookies",
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <button type="button" onClick={openCookieSettings} className={className}>
      {children}
    </button>
  );
}
