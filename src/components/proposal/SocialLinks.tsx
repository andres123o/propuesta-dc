import { menuPill } from "@/components/menu/RegisterLinks";
import { author } from "@/content/propuesta";

// Pie del menú en la propuesta: donde la web de DC pone "Registrarse", aquí van los perfiles de Andrés.
export function SocialLinks() {
  const links = [
    { label: "LinkedIn", href: author.linkedin },
    { label: "GitHub", href: author.github },
  ];

  return (
    <div className="flex flex-wrap items-center gap-2 text-sm">
      <span className="mr-2 opacity-65">Andrés en</span>
      {links.map(({ label, href }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noreferrer"
          className={menuPill}
        >
          {label}
        </a>
      ))}
    </div>
  );
}
