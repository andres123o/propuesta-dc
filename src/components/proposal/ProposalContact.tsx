import type { IconType } from "react-icons";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";
import { ArrowIcon } from "@/components/ui/ArrowIcon";
import { author, proposalContact } from "@/content/propuesta";
import { Reveal } from "./Reveal";

const channels: {
  label: string;
  value: string;
  href: string;
  Icon: IconType;
  tone: string;
}[] = [
  {
    label: "WhatsApp",
    value: author.whatsapp.value,
    href: author.whatsapp.href,
    Icon: FaWhatsapp,
    tone: "bg-sun text-ink",
  },
  {
    label: "Correo",
    value: author.email,
    href: `mailto:${author.email}`,
    Icon: FiMail,
    tone: "bg-[#1c1b19] text-cream ring-1 ring-cream/10",
  },
];

const profiles = [
  { label: "LinkedIn", href: author.linkedin, Icon: FaLinkedinIn },
  { label: "GitHub", href: author.github, Icon: FaGithub },
];

// Cierre de la propuesta: la invitación, los dos canales directos y los perfiles de Andrés.
export function ProposalContact() {
  return (
    <Reveal
      id="contacto"
      className="scroll-mt-24 bg-ink px-6 pt-24 pb-8 text-cream md:px-12 md:pt-32"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-12">
        <div data-reveal className="flex flex-col gap-6">
          <h2 className="font-display text-5xl leading-[1.02] font-medium tracking-[-0.045em] text-balance md:text-7xl">
            {proposalContact.title}
          </h2>
          <p className="max-w-md text-xl text-pretty text-cream/75">
            {proposalContact.text}
          </p>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          {channels.map(({ label, value, href, Icon, tone }) => (
            <a
              key={label}
              data-reveal
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className={`group flex items-center justify-between gap-6 rounded-[2rem] p-6 md:p-10 ${tone}`}
            >
              <span className="flex min-w-0 items-center gap-5">
                <span className="grid size-14 shrink-0 place-items-center rounded-full bg-cream text-ink">
                  <Icon aria-hidden className="size-6" />
                </span>
                <span className="flex min-w-0 flex-col gap-1">
                  <span className="text-sm opacity-75">{label}</span>
                  <span className="truncate font-display text-xl tracking-[-0.02em] md:text-3xl">
                    {value}
                  </span>
                </span>
              </span>
              <span
                aria-hidden
                className="grid size-11 shrink-0 place-items-center rounded-full ring-1 ring-current/30 transition-transform duration-500 ease-smooth group-hover:-rotate-45"
              >
                <ArrowIcon />
              </span>
            </a>
          ))}
        </div>

        <div className="flex flex-col justify-between gap-6 border-t border-cream/10 pt-8 sm:flex-row sm:items-center">
          <p className="text-sm text-cream/60">
            {author.name} · {proposalContact.location}
          </p>
          <div className="flex gap-2">
            {profiles.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="grid size-11 place-items-center rounded-full ring-1 ring-cream/20 transition-colors duration-300 hover:bg-cream hover:text-ink"
              >
                <Icon aria-hidden className="size-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
}
