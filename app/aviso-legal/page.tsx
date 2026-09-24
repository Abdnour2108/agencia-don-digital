import type { Metadata } from "next";
import LegalPage, { LegalSection, LegalLink, Mail, OwnerData } from "../components/LegalPage";

export const metadata: Metadata = {
  title: "Aviso Legal | Agencia Don Digital",
  description:
    "Aviso legal del sitio web de Agencia Don Digital: identificación del titular, condiciones de uso, propiedad intelectual y responsabilidad.",
  alternates: { canonical: "https://agenciadondigital.com/aviso-legal" },
};

export default function AvisoLegalPage() {
  return (
    <LegalPage title="Aviso Legal">
      <LegalSection title="1. Identificación del titular">
        <OwnerData />
        <p className="mt-4">
          Agencia Don Digital es una agencia de servicios digitales especializada en
          soluciones digitales para empresas, incluyendo diseño y desarrollo web,
          posicionamiento SEO, marketing digital, automatización de procesos, chatbots,
          inteligencia artificial, email marketing y gestión de redes sociales.
        </p>
      </LegalSection>

      <LegalSection title="2. Objeto">
        <p>
          El presente Aviso Legal regula el acceso, navegación y utilización del sitio
          web de Agencia Don Digital.
        </p>
        <p>
          El acceso y utilización del sitio web implica la aceptación de las condiciones
          establecidas en este Aviso Legal.
        </p>
      </LegalSection>

      <LegalSection title="3. Condiciones de uso">
        <p>
          El usuario se compromete a utilizar el sitio web de forma lícita y conforme a
          la legislación vigente.
        </p>
        <p>
          Queda prohibido utilizar el sitio web con fines ilícitos o que puedan
          perjudicar los derechos o intereses de Agencia Don Digital o de terceros.
        </p>
      </LegalSection>

      <LegalSection title="4. Propiedad intelectual e industrial">
        <p>
          Los contenidos, textos, imágenes, diseños, logotipos, elementos gráficos,
          código y demás elementos que forman parte del sitio web están protegidos por
          la legislación aplicable en materia de propiedad intelectual e industrial.
        </p>
        <p>
          Queda prohibida su reproducción, distribución o utilización sin la
          correspondiente autorización cuando esta sea necesaria.
        </p>
      </LegalSection>

      <LegalSection title="5. Responsabilidad">
        <p>
          Agencia Don Digital procurará que la información publicada en el sitio web sea
          correcta y esté actualizada.
        </p>
        <p>
          No obstante, no garantiza la inexistencia de errores, interrupciones o fallos
          técnicos.
        </p>
        <p>El usuario utiliza el sitio web bajo su propia responsabilidad.</p>
      </LegalSection>

      <LegalSection title="6. Enlaces externos">
        <p>
          El sitio web puede contener enlaces a páginas web o servicios de terceros.
        </p>
        <p>
          Agencia Don Digital no se responsabiliza del contenido, funcionamiento o
          políticas de privacidad de sitios web externos.
        </p>
      </LegalSection>

      <LegalSection title="7. Protección de datos">
        <p>
          El tratamiento de datos personales realizado a través del sitio web se regula
          mediante la correspondiente{" "}
          <LegalLink href="/politica-de-privacidad">Política de Privacidad</LegalLink>.
        </p>
      </LegalSection>

      <LegalSection title="8. Cookies">
        <p>El sitio web puede utilizar cookies y tecnologías similares.</p>
        <p>
          La información correspondiente se encuentra desarrollada en la{" "}
          <LegalLink href="/politica-de-cookies">Política de Cookies</LegalLink>.
        </p>
      </LegalSection>

      <LegalSection title="9. Legislación aplicable">
        <p>
          La relación entre Agencia Don Digital y los usuarios del sitio web se regirá
          por la normativa española que resulte aplicable.
        </p>
      </LegalSection>

      <LegalSection title="10. Contacto">
        <p>Para cualquier consulta relacionada con el sitio web:</p>
        <p>
          <strong>
            <Mail address="info@agenciadondigital.com" />
          </strong>
        </p>
      </LegalSection>
    </LegalPage>
  );
}
