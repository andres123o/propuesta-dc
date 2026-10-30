import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { FloatingMenu } from "./FloatingMenu";
import type { NavLink } from "./MenuLinks";

// Mismo contenedor que las secciones: el logo y el menú alinean con sus bordes.
// Sin props es el header de DC; la propuesta lo usa sin logo y con sus propios enlaces.
export function Header({
  logo = true,
  links,
  menuFooter,
}: {
  logo?: boolean;
  links?: NavLink[];
  menuFooter?: ReactNode;
}) {
  return (
    <header className="pointer-events-none fixed inset-x-0 top-6 z-50 px-6 md:px-12">
      <div className="relative mx-auto flex h-12 max-w-7xl items-center">
        {logo && (
          <Link
            href="/"
            aria-label="DC Influencer Marketing, inicio"
            className="pointer-events-auto"
          >
            <Image
              src="/logo-dc-mark.png"
              alt=""
              width={44}
              height={44}
              priority
            />
          </Link>
        )}
        <FloatingMenu links={links} footer={menuFooter} />
      </div>
    </header>
  );
}
