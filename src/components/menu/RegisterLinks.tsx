import Link from "next/link";
import { registerOptions } from "@/content/site";

// Pastillas del pie del menú; se invierten cuando el menú va oscuro (data-dark en FloatingMenu).
export const menuPill =
  "rounded-full bg-ink px-4 py-2 text-cream transition-[background-color,color,scale] duration-300 hover:scale-95 hover:bg-magenta hover:text-cream group-data-dark/menu:bg-cream group-data-dark/menu:text-ink group-data-dark/menu:hover:bg-magenta group-data-dark/menu:hover:text-cream";

export function RegisterLinks({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <div className="flex flex-wrap items-center gap-2 text-sm">
      <span className="mr-2 opacity-65">Registrarse</span>
      {registerOptions.map(({ label, href }) => (
        <Link key={href} href={href} onClick={onNavigate} className={menuPill}>
          {label}
        </Link>
      ))}
    </div>
  );
}
