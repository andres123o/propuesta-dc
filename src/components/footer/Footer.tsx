import Link from "next/link";
import { ArrowIcon } from "@/components/ui/ArrowIcon";
import { contactChannels, footerLinks } from "@/content/site";
import { Awards } from "@/components/hero/Awards";
import { FitText } from "./FitText";

const [email, ...whatsapps] = contactChannels;
const heading = "text-sm text-cream/60";
const link =
  "w-fit text-cream/80 transition-colors duration-300 hover:text-cream";

export function Footer() {
  return (
    <footer
      id="contacto"
      className="relative z-10 bg-ink px-6 pt-32 pb-6 text-cream md:px-12"
    >
      <div className="mx-auto max-w-7xl">
        {/* Llamado principal: una frase y dos acciones directas. */}
        <div className="grid gap-10 md:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] md:items-end">
          <h2 className="font-display text-5xl leading-[1.02] font-medium tracking-[-0.045em] text-balance md:text-7xl">
            Hablemos de tu próxima campaña.
          </h2>
          <div className="flex flex-col gap-8 md:items-end">
            <div className="grid w-full max-w-lg grid-cols-2 gap-3">
              <Link
                href="/marcas"
                className="group flex items-center justify-between gap-4 rounded-full bg-cream py-2 pr-2 pl-7 text-lg font-medium text-ink transition-colors duration-300 hover:bg-white"
              >
                Escríbenos
                <span className="grid size-11 place-items-center rounded-full bg-ink text-cream transition-transform duration-500 ease-smooth group-hover:-rotate-45">
                  <ArrowIcon />
                </span>
              </Link>
              <Link
                href="/registro/influencer"
                className="flex items-center justify-center rounded-full px-7 text-lg font-medium ring-1 ring-cream/25 transition-colors duration-300 hover:bg-cream/10"
              >
                Únete como creador
              </Link>
            </div>
            <Awards />
          </div>
        </div>

        <div className="mt-24 grid grid-cols-2 gap-10 border-t border-cream/10 pt-10 md:grid-cols-4">
          <nav aria-label="Pie de página" className="flex flex-col gap-3">
            <p className={heading}>Navegación</p>
            {footerLinks.map(({ label, href }) => (
              <Link key={href} href={href} className={link}>
                {label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <p className={heading}>Contacto</p>
            <a href={email.href} className={link}>
              {email.value}
            </a>
            {whatsapps.map(({ label, value, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className={link}
              >
                {label.replace("WhatsApp ", "")} · {value}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <p className={heading}>Oficina</p>
            <address className="text-cream/80 not-italic">
              Autopista Norte #97-50, Of. 806
              <br />
              Bogotá D.C., Colombia
            </address>
          </div>

          <div className="flex flex-col gap-3">
            <p className={heading}>HUBs de facturación</p>
            <ul className="flex flex-col gap-1 text-cream/80">
              {["Colombia", "México", "Panamá", "USA", "Perú"].map(
                (country) => (
                  <li key={country}>{country}</li>
                ),
              )}
            </ul>
          </div>
        </div>

        <div className="mt-24 flex flex-col justify-between gap-3 text-sm text-cream/60 md:flex-row">
          <p>© 2026 DC Influencer Marketing S.A.S.</p>
          <div className="flex gap-6">
            <a
              href="#"
              className="transition-colors duration-300 hover:text-cream"
            >
              Política de Tratamiento de Datos
            </a>
            <a
              href="#"
              className="transition-colors duration-300 hover:text-cream"
            >
              Términos y Condiciones
            </a>
          </div>
        </div>

        {/* El nombre de la agencia ocupa exactamente todo el ancho del contenedor. */}
        <div aria-hidden className="mt-6">
          <FitText
            text="DC Influencer Marketing"
            className="font-display font-semibold tracking-[-0.055em] text-cream"
          />
        </div>
      </div>
    </footer>
  );
}
