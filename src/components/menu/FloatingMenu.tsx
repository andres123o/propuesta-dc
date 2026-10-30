"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";
import { navLinks } from "@/content/site";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { MenuLinks, type NavLink } from "./MenuLinks";
import { RegisterLinks } from "./RegisterLinks";

/*
  Pastilla "Menú" anclada a la derecha. Al abrirla, la misma pieza crece hacia la
  izquierda y hacia abajo hasta ser un panel alto; al cerrarla se recoge igual.
  Abajo del panel van los registros de DC, salvo que se pase otro pie.
*/
export function FloatingMenu({
  links = navLinks,
  footer,
}: {
  links?: NavLink[];
  footer?: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  // Sobre las secciones claras (data-theme="light") la pastilla cerrada pasa a oscuro.
  // El header vive en el layout: al cambiar de ruta se vuelven a buscar las secciones claras.
  const pathname = usePathname();
  useGSAP(
    () => {
      gsap.utils
        .toArray<HTMLElement>('[data-theme="light"]')
        .forEach((section) =>
          ScrollTrigger.create({
            trigger: section,
            start: "top 48px",
            end: "bottom 48px",
            refreshPriority: -1, // se calcula después de los pines de las secciones anteriores
            onToggle: (self) => setDark(self.isActive),
          }),
        );
    },
    { dependencies: [pathname], revertOnUpdate: true },
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    // data-dark invierte también el panel abierto: sobre una sección clara todo el menú va oscuro.
    <div
      data-dark={dark || undefined}
      className={`group/menu pointer-events-auto absolute top-0 -right-3 overflow-hidden transition-[width,height,border-radius,background-color,color] duration-900 ease-smooth md:-right-6 ${
        open
          ? "h-[calc(100dvh-3rem)] w-[min(34rem,calc(100vw-3rem))] rounded-[2rem]"
          : "h-12 w-30 rounded-3xl"
      } ${dark ? "bg-ink text-cream" : "bg-cream text-ink"}`}
    >
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen(true)}
        inert={open}
        className={`absolute top-0 right-0 flex h-12 w-30 items-center justify-center gap-2 text-[15px] font-medium transition-opacity duration-300 ${
          open ? "opacity-0" : "opacity-100 delay-300"
        }`}
      >
        <span className="size-1.5 rounded-full bg-magenta" />
        Menú
      </button>

      {/* Ancho fijo y anclado a la derecha: el contenido no se reacomoda mientras el panel crece. */}
      <div
        inert={!open}
        className={`absolute top-0 right-0 flex h-[calc(100dvh-3rem)] w-[min(34rem,calc(100vw-3rem))] flex-col justify-between p-8 transition-[opacity,translate] duration-500 ${
          open
            ? "translate-y-0 opacity-100 delay-300"
            : "-translate-y-2 opacity-0"
        }`}
      >
        <button
          type="button"
          aria-label="Cerrar menú"
          onClick={close}
          className="grid size-12 place-items-center self-end rounded-full bg-ink text-cream transition-transform duration-500 ease-smooth group-data-dark/menu:bg-cream group-data-dark/menu:text-ink hover:rotate-90"
        >
          <svg viewBox="0 0 16 16" className="size-4" aria-hidden>
            <path
              d="M3 3l10 10M13 3 3 13"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <MenuLinks links={links} className="text-6xl" onNavigate={close} />
        {footer ?? <RegisterLinks onNavigate={close} />}
      </div>
    </div>
  );
}
