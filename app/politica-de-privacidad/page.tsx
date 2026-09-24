import type { Metadata } from "next";
import LegalPage, {
  LegalSection,
  LegalList,
  LegalLink,
  Mail,
  OwnerData,
} from "../components/LegalPage";

export const metadata: Metadata = {
  title: "Política de Privacidad | Agencia Don Digital",
  description:
    "Política de privacidad de Agencia Don Digital: qué datos personales tratamos, con qué finalidad, base jurídica, proveedores y cómo ejercer tus derechos.",
  alternates: { canonical: "https://agenciadondigital.com/politica-de-privacidad" },
};

export default function PoliticaPrivacidadPage() {
  return (
    <LegalPage title="Política de Privacidad">
      <LegalSection title="1. Responsable del tratamiento">
        <OwnerData />
      </LegalSection>

      <LegalSection title="2. Datos personales que podemos recopilar">
        <p>Dependiendo de la utilización del sitio web, podemos tratar:</p>
        <LegalList
          items={[
            "Nombre y apellidos.",
            "Dirección de correo electrónico.",
            "Número de teléfono.",
            "Información proporcionada mediante formularios de contacto.",
            "Información proporcionada voluntariamente mediante chatbot o asistente de voz.",
            "Información relacionada con solicitudes de información.",
            "Datos técnicos relacionados con la navegación.",
            "Dirección IP.",
            "Información sobre dispositivo y navegador.",
            "Información obtenida mediante herramientas de analítica, cuando exista consentimiento.",
          ]}
        />
        <p>
          No solicitamos deliberadamente categorías especiales de datos personales a
          través del sitio web.
        </p>
      </LegalSection>

      <LegalSection title="3. Finalidades del tratamiento">
        <p>Los datos podrán utilizarse para:</p>
        <LegalList
          items={[
            "Responder consultas.",
            "Gestionar solicitudes de información.",
            "Contactar con potenciales clientes.",
            "Preparar presupuestos y propuestas comerciales.",
            "Gestionar la relación contractual con clientes.",
            "Prestar los servicios contratados.",
            "Mejorar el funcionamiento del sitio web.",
            "Analizar el uso del sitio web cuando exista consentimiento.",
            "Medir campañas publicitarias cuando exista consentimiento.",
            "Gestionar comunicaciones comerciales cuando exista una base jurídica válida.",
          ]}
        />
      </LegalSection>

      <LegalSection title="4. Base jurídica">
        <p>El tratamiento podrá basarse, dependiendo de la finalidad, en:</p>
        <LegalList
          items={[
            "Consentimiento del usuario.",
            "Ejecución de un contrato o aplicación de medidas precontractuales.",
            "Cumplimiento de obligaciones legales.",
            "Interés legítimo cuando resulte aplicable.",
          ]}
        />
      </LegalSection>

      <LegalSection title="5. Formularios de contacto">
        <p>
          Los datos introducidos en los formularios serán utilizados para responder a la
          solicitud realizada.
        </p>
        <p>
          Los formularios deberán incorporar información básica sobre el tratamiento de
          datos y, cuando sea necesario, una casilla de aceptación que no esté premarcada.
        </p>
      </LegalSection>

      <LegalSection title="6. Comunicaciones comerciales">
        <p>
          Cuando el usuario haya dado su consentimiento o exista otra base jurídica
          válida, Agencia Don Digital podrá enviar comunicaciones comerciales
          relacionadas con sus servicios, novedades, contenidos y promociones.
        </p>
        <p>
          El usuario podrá solicitar dejar de recibir estas comunicaciones en cualquier
          momento escribiendo a:
        </p>
        <p>
          <strong>
            <Mail address="comercial@agenciadondigital.com" />
          </strong>
        </p>
      </LegalSection>

      <LegalSection title="7. Chatbots e inteligencia artificial">
        <p>
          El sitio web puede incorporar sistemas de chatbot o inteligencia artificial
          para facilitar la atención y comunicación con los usuarios.
        </p>
        <p>
          Actualmente, la web ofrece un asistente de voz con inteligencia artificial
          (botón «Escuchar una llamada real») proporcionado por Vapi. El asistente solo
          se activa cuando el usuario pulsa «Iniciar conversación» y concede permiso de
          acceso al micrófono en su navegador. Durante la conversación se transmite la
          voz del usuario y datos técnicos de la conexión (como la dirección IP) a los
          servidores del proveedor para poder procesar y responder a la consulta.
        </p>
        <p>
          Los datos introducidos voluntariamente por el usuario podrán ser tratados para
          gestionar su consulta o solicitud.
        </p>
        <p>
          Cuando estos servicios sean proporcionados por terceros, el tratamiento se
          realizará conforme a las condiciones y garantías aplicables a dichos
          proveedores.
        </p>
      </LegalSection>

      <LegalSection title="8. Proveedores externos">
        <p>
          Agencia Don Digital puede utilizar proveedores tecnológicos para alojamiento,
          dominio, correo electrónico, analítica, publicidad, automatización, chatbot,
          inteligencia artificial y otros servicios necesarios para el funcionamiento de
          la web.
        </p>
        <p>Actualmente, en relación con este sitio web, se utilizan:</p>
        <LegalList
          items={[
            <>
              <strong>Vercel</strong>: alojamiento de la web. Como cualquier servidor,
              trata datos técnicos de la conexión (como la dirección IP) para servir las
              páginas y garantizar su seguridad.
            </>,
            <>
              <strong>Nominalia</strong>: registro del dominio.
            </>,
            <>
              <strong>Vapi</strong>: asistente de voz con inteligencia artificial, solo
              cuando el usuario inicia voluntariamente una conversación. Vapi utiliza a
              su vez la infraestructura de Daily para la transmisión de audio en tiempo
              real.
            </>,
            <>
              <strong>WhatsApp (Meta)</strong>: únicamente si el usuario pulsa el botón
              de WhatsApp, que abre una conversación en el servicio de WhatsApp. A partir
              de ese momento se aplican las condiciones y la política de privacidad de
              WhatsApp.
            </>,
          ]}
        />
        <p>
          Actualmente el sitio web no utiliza herramientas de analítica ni de publicidad
          (como Google Analytics, Google Ads o Meta Pixel). Si en el futuro se
          incorporan otros proveedores, esta Política de Privacidad se actualizará.
        </p>
      </LegalSection>

      <LegalSection title="9. Transferencias internacionales">
        <p>
          Algunos proveedores tecnológicos pueden estar establecidos fuera del Espacio
          Económico Europeo.
        </p>
        <p>
          Cuando se produzcan transferencias internacionales de datos, se utilizarán las
          garantías previstas por la legislación aplicable.
        </p>
      </LegalSection>

      <LegalSection title="10. Conservación de datos">
        <p>
          Los datos se conservarán durante el tiempo necesario para cumplir la finalidad
          para la que fueron recogidos y, posteriormente, durante los plazos legalmente
          establecidos cuando resulte necesario.
        </p>
      </LegalSection>

      <LegalSection title="11. Seguridad">
        <p>
          Agencia Don Digital aplica medidas técnicas y organizativas razonables
          destinadas a proteger los datos personales frente a accesos no autorizados,
          pérdida, destrucción o alteración.
        </p>
      </LegalSection>

      <LegalSection title="12. Derechos">
        <p>El usuario puede ejercer, cuando corresponda, sus derechos de:</p>
        <LegalList
          items={[
            "Acceso.",
            "Rectificación.",
            "Supresión.",
            "Oposición.",
            "Limitación del tratamiento.",
            "Portabilidad.",
            "Retirada del consentimiento.",
          ]}
        />
        <p>Para ejercer estos derechos puede escribir a:</p>
        <p>
          <strong>
            <Mail address="info@agenciadondigital.com" />
          </strong>
        </p>
        <p>
          También puede presentar una reclamación ante la{" "}
          <LegalLink href="https://www.aepd.es/">
            Agencia Española de Protección de Datos
          </LegalLink>
          .
        </p>
      </LegalSection>

      <LegalSection title="13. Redes sociales">
        <p>Agencia Don Digital puede utilizar perfiles en redes sociales.</p>
        <p>
          La interacción realizada en dichas plataformas estará también sujeta a las
          políticas de privacidad de las correspondientes plataformas.
        </p>
      </LegalSection>

      <LegalSection title="14. Enlaces externos">
        <p>La web puede contener enlaces a servicios de terceros.</p>
        <p>
          Agencia Don Digital no controla las políticas de privacidad de dichos
          servicios.
        </p>
      </LegalSection>

      <LegalSection title="15. Actualización">
        <p>
          Esta Política de Privacidad podrá actualizarse cuando resulte necesario debido
          a cambios legales, técnicos o en los servicios ofrecidos.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
