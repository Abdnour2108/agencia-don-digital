// Gestión del consentimiento de cookies (se guarda en localStorage del navegador).
//
// Para añadir en el futuro un script que requiera consentimiento (p. ej. Google
// Analytics o Meta Pixel), cárgalo solo cuando `getConsent()?.analytics` /
// `getConsent()?.marketing` sea true y escucha el evento CONSENT_UPDATED_EVENT.

export const CONSENT_STORAGE_KEY = "ddg_cookie_consent";
export const CONSENT_VERSION = 1;
// Se vuelve a pedir el consentimiento pasados 12 meses.
export const CONSENT_MAX_AGE_MS = 365 * 24 * 60 * 60 * 1000;

export const OPEN_SETTINGS_EVENT = "ddg:open-cookie-settings";
export const CONSENT_UPDATED_EVENT = "ddg:cookie-consent-updated";

export type ConsentChoices = {
  analytics: boolean;
  marketing: boolean;
};

export type StoredConsent = ConsentChoices & {
  version: number;
  necessary: true;
  date: string;
};

export function getConsent(): StoredConsent | null {
  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as StoredConsent;
    if (parsed.version !== CONSENT_VERSION) return null;
    const age = Date.now() - new Date(parsed.date).getTime();
    if (!(age >= 0 && age < CONSENT_MAX_AGE_MS)) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function saveConsent(choices: ConsentChoices): StoredConsent {
  const consent: StoredConsent = {
    version: CONSENT_VERSION,
    necessary: true,
    analytics: choices.analytics,
    marketing: choices.marketing,
    date: new Date().toISOString(),
  };
  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(consent));
  } catch {
    // Almacenamiento bloqueado: la decisión vale solo para esta visita.
  }
  window.dispatchEvent(new CustomEvent(CONSENT_UPDATED_EVENT, { detail: consent }));
  return consent;
}

export function openCookieSettings() {
  window.dispatchEvent(new Event(OPEN_SETTINGS_EVENT));
}
