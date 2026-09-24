import Link from "next/link";
import Navbar from "./Navbar";
import Footer from "./Footer";

export const LEGAL_UPDATED = "24 de septiembre de 2026";

function BackHome() {
  return (
    <Link
      href="/"
      className="inline-flex items-center gap-2 text-sm font-medium text-[#6b89a8] hover:text-[#27B3FF] transition-colors duration-200"
    >
      <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden>
        <path
          d="M12 6.5H1M6.5 1L1 6.5 6.5 12"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      Volver a la página principal
    </Link>
  );
}

export default function LegalPage({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <main>
      <Navbar />
      <section className="relative px-4 sm:px-6 pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 45% at 50% 0%, rgba(10,92,255,0.14) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="mb-8">
            <BackHome />
          </div>

          <span className="glass-badge inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-bold tracking-widest uppercase text-[#27B3FF] mb-5">
            Información legal
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
            {title}
          </h1>
          <p className="text-sm text-[#6b89a8] mb-10 sm:mb-12">
            Última actualización: {LEGAL_UPDATED}
          </p>

          <div className="glass-card rounded-2xl sm:rounded-3xl px-5 py-2 sm:px-10 sm:py-4">
            {children}
          </div>

          <div className="mt-10">
            <BackHome />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      className="py-7 sm:py-8 border-b last:border-b-0 text-[15px] leading-relaxed text-[#aac0d8] [&_p+p]:mt-3 [&_p+ul]:mt-3 [&_ul+p]:mt-3 [&_h3]:mt-6 [&_h3]:mb-2 [&_h3]:text-base [&_h3]:font-bold [&_h3]:text-white [&_strong]:text-white [&_strong]:font-semibold"
      style={{ borderColor: "rgba(39,179,255,0.1)" }}
    >
      <h2 className="text-lg sm:text-xl font-bold text-white mb-4">{title}</h2>
      {children}
    </section>
  );
}

export function LegalList({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="flex flex-col gap-2">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <span
            aria-hidden
            className="mt-[9px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#27B3FF]"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function Mail({ address }: { address: string }) {
  return (
    <a
      href={`mailto:${address}`}
      className="text-[#27B3FF] hover:text-white transition-colors duration-200 break-all"
    >
      {address}
    </a>
  );
}

export function LegalLink({ href, children }: { href: string; children: React.ReactNode }) {
  const className = "text-[#27B3FF] hover:text-white transition-colors duration-200";
  if (href.startsWith("/")) {
    return <Link href={href} className={className}>{children}</Link>;
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  );
}

export function OwnerData() {
  return (
    <div className="flex flex-col gap-1.5">
      <p><strong>Nombre:</strong> Agencia Don Digital</p>
      <p className="!mt-0"><strong>Correo electrónico:</strong> <Mail address="info@agenciadondigital.com" /></p>
      <p className="!mt-0"><strong>Correo comercial:</strong> <Mail address="comercial@agenciadondigital.com" /></p>
      <p className="!mt-0">
        <strong>Sitio web:</strong>{" "}
        <LegalLink href="https://agenciadondigital.com/">https://agenciadondigital.com/</LegalLink>
      </p>
    </div>
  );
}
