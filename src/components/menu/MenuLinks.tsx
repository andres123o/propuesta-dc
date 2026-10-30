import Link from "next/link";
import { navLinks } from "@/content/site";

export type NavLink = { label: string; href: string };

// Al pasar el mouse, el enlace se corre y nace un punto magenta a su izquierda.
export function MenuLinks({
  links = navLinks,
  className = "",
  onNavigate,
}: {
  links?: NavLink[];
  className?: string;
  onNavigate?: () => void;
}) {
  return (
    <ul
      className={`flex flex-col font-display leading-none font-medium tracking-[-0.05em] ${className}`}
    >
      {links.map(({ label, href }) => (
        <li key={href}>
          <Link
            href={href}
            onClick={onNavigate}
            className="relative inline-block py-1 transition-[padding] duration-500 ease-smooth before:absolute before:top-1/2 before:left-0 before:size-[0.3em] before:-translate-y-1/2 before:scale-0 before:rounded-full before:bg-magenta before:transition-transform before:duration-500 before:ease-smooth hover:pl-[0.55em] hover:before:scale-100"
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
