import type { Metadata } from "next";
import LegalPage, { LegalSection, LegalList, LegalLink } from "../components/LegalPage";
import CookieSettingsButton from "../components/CookieSettingsButton";

export const metadata: Metadata = {
  title: "Política de Cookies | Agencia Don Digital",
  description:
    "Política de cookies de Agencia Don Digital: qué cookies y tecnologías similares utiliza la web, para qué sirven y cómo configurar tus preferencias.",
  alternates: { canonical: "https://agenciadondigital.com/politica-de-cookies" },
};

type Row = {
  name: string;
  provider: string;
  purpose: string;
  duration: string;
  category: string;
  consent: string;
};

// Tecnologías detectadas en el código de la web (no se utilizan otras).
const rows: Row[] = [
  {
    name: "ddg_cookie_consent (localStorage, no es una cookie)",
    provider: "Agencia Don Digital (propia)",
    purpose:
      "Guardar tu decisión sobre las cookies para no volver a mostrar el aviso en cada visita.",
    duration: "12 meses (después se vuelve a solicitar tu decisión)",
    category: "Necesaria",
    consent: "No",
  },
  {
    name: "Asistente de voz — no instala cookies propias",
    provider: "Vapi (con infraestructura de Daily)",
    purpose:
      "Establecer la conversación de voz con el asistente de IA. Solo se carga cuando pulsas «Iniciar conversación» y aceptas el uso del micrófono.",
    duration: "Mientras dura la conversación",
    category: "Necesaria (servicio solicitado expresamente por el usuario)",
    consent: "No (se activa solo a petición del usuario)",
  },
  {
    name: "Botón de WhatsApp — no instala cookies en esta web",
    provider: "WhatsApp (Meta)",
    purpose:
      "Enlace para abrir una conversación en WhatsApp. Solo al pulsarlo se accede al servicio de WhatsApp, que aplica su propia política de cookies.",
    duration: "—",
    category: "Enlace externo",
    consent: "No",
  },
  {
    name: "Alojamiento y tipografías — no instalan cookies",
    provider: "Vercel",
    purpose:
      "Alojamiento de la web. Las tipografías se sirven desde el propio dominio, sin conexiones a Google Fonts.",
    duration: "—",
    category: "—",
    consent: "No",
  },
];

const columns: { key: keyof Row; label: string }[] = [
  { key: "name", label: "Nombre" },
  { key: "provider", label: "Proveedor" },
  { key: "purpose", label: "Finalidad" },
  { key: "duration", label: "Duración" },
  { key: "category", label: "Categoría" },
  { key: "consent", label: "¿Requiere consentimiento?" },
];

function CookieTable() {
  return (
    <>
      {/* Móvil y tablet: tarjetas */}
      <div className="lg:hidden flex flex-col gap-3 mt-4">
        {rows.map((row) => (
          <dl
            key={row.name}
            className="rounded-xl p-4 text-sm"
            style={{
              background: "rgba(39,179,255,0.04)",
              border: "1px solid rgba(39,179,255,0.12)",
            }}
          >
            {columns.map((c) => (
              <div key={c.key} className="py-1.5 first:pt-0 last:pb-0">
                <dt className="text-[10px] font-bold tracking-widest uppercase text-[#6b89a8]">
                  {c.label}
                </dt>
                <dd className={c.key === "name" ? "text-white font-semibold" : ""}>
                  {row[c.key]}
                </dd>
              </div>
            ))}
          </dl>
        ))}
      </div>

      {/* Escritorio: tabla */}
      <div
        className="hidden lg:block mt-4 rounded-xl overflow-hidden"
        style={{ border: "1px solid rgba(39,179,255,0.12)" }}
      >
        <table className="w-full text-left text-[13px]">
          <thead style={{ background: "rgba(39,179,255,0.06)" }}>
            <tr>
              {columns.map((c) => (
                <th
                  key={c.key}
                  scope="col"
                  className="px-3 py-3 text-[10px] font-bold tracking-widest uppercase text-[#6b89a8] align-bottom"
                >
                  {c.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.name} style={{ borderTop: "1px solid rgba(39,179,255,0.1)" }}>
                {columns.map((c) => (
                  <td
                    key={c.key}
                    className={`px-3 py-3 align-top ${c.key === "name" ? "text-white font-semibold" : ""}`}
                  >
                    {row[c.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default function PoliticaCookiesPage() {
  return (
    <LegalPage title="Política de Cookies">
      <LegalSection title="1. ¿Qué son las cookies?">
        <p>
          Las cookies son pequeños archivos que se almacenan en el dispositivo del
          usuario cuando visita determinados sitios web.
        </p>
        <p>
          Pueden utilizarse para permitir el funcionamiento de la web, recordar
          preferencias, obtener estadísticas y, cuando el usuario lo autorice, realizar
          determinadas funciones de analítica y publicidad.
        </p>
      </LegalSection>

      <LegalSection title="2. Tipos de cookies">
        <h3>Cookies necesarias</h3>
        <p>
          Son necesarias para el funcionamiento básico y la seguridad del sitio web.
        </p>
        <p>
          Estas cookies pueden utilizarse sin consentimiento cuando estén comprendidas
          dentro de las excepciones previstas por la normativa aplicable.
        </p>

        <h3>Cookies analíticas</h3>
        <p>
          Permiten conocer cómo utilizan los usuarios el sitio web y obtener estadísticas
          de navegación.
        </p>
        <p>
          Actualmente, Agencia Don Digital no utiliza en esta web herramientas de
          analítica como Google Analytics. Si se incorporan en el futuro, solo se
          activarán después de obtener el consentimiento cuando este sea necesario.
        </p>

        <h3>Cookies de publicidad y marketing</h3>
        <p>
          Permiten medir campañas publicitarias y realizar determinadas acciones de
          marketing.
        </p>
        <p>
          Actualmente, Agencia Don Digital no utiliza en esta web herramientas como
          Google Ads o Meta Pixel. Si se incorporan en el futuro, solo se activarán
          cuando el usuario haya prestado el consentimiento necesario.
        </p>

        <h3>Cookies de terceros</h3>
        <p>
          La web incorpora un asistente de voz con inteligencia artificial (Vapi) que
          solo se carga cuando el usuario decide iniciar una conversación, y un enlace a
          WhatsApp. No incorpora vídeos de YouTube ni mapas de Google Maps.
        </p>
        <p>
          Los servicios de terceros a los que se accede desde la web pueden utilizar
          cookies o tecnologías similares conforme a sus propias políticas.
        </p>
      </LegalSection>

      <LegalSection title="3. Consentimiento">
        <p>Cuando una cookie requiera consentimiento, el usuario podrá:</p>
        <LegalList
          items={[
            "Aceptar todas.",
            "Rechazar las cookies no necesarias.",
            "Configurar sus preferencias.",
          ]}
        />
        <p>El consentimiento deberá obtenerse mediante una acción afirmativa.</p>
        <p>No se utilizan casillas premarcadas.</p>
      </LegalSection>

      <LegalSection title="4. Configuración de cookies">
        <p>
          El usuario puede modificar sus preferencias en cualquier momento mediante el
          enlace <strong>«Configurar cookies»</strong>, disponible en el pie de página de
          todas las páginas de la web, o desde este botón:
        </p>
        <div className="mt-4">
          <CookieSettingsButton className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-[#0A5CFF] hover:bg-[#0037CC] text-white font-semibold text-sm transition-colors duration-200" />
        </div>
        <p className="!mt-4">
          También puede eliminar o bloquear las cookies y los datos de sitios web desde
          la configuración de su navegador.
        </p>
      </LegalSection>

      <LegalSection title="5. Herramientas utilizadas">
        <p>
          Estas son las cookies y tecnologías similares que utiliza realmente este sitio
          web. Actualmente <strong>no se utilizan cookies analíticas ni de
          publicidad</strong>.
        </p>
        <CookieTable />
        <p className="!mt-4">
          Para más información sobre el tratamiento de datos personales, consulta la{" "}
          <LegalLink href="/politica-de-privacidad">Política de Privacidad</LegalLink>.
        </p>
      </LegalSection>

      <LegalSection title="6. Actualización">
        <p>
          Esta Política de Cookies podrá actualizarse cuando cambien las tecnologías
          utilizadas en el sitio web.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
