"use client";

import type { ReactNode } from "react";
import { ScrollTrigger } from "@/lib/gsap";

/*
  Baja hasta que el mosaico termina de armarse. Bajar solo una pantalla dejaba la vista
  al inicio del pin, con las tarjetas todavía fuera de cuadro (pantalla negra).
  En móvil o con movimiento reducido no hay pin: baja al inicio de la sección.
*/
export function ScrollDownButton({
  className,
  children,
}: {
  className: string;
  children: ReactNode;
}) {
  function scrollToMosaic() {
    const pin = ScrollTrigger.getById("mosaico");
    const top =
      pin?.end ??
      document.getElementById("nosotros")?.offsetTop ??
      window.innerHeight;
    window.scrollTo({ top, behavior: "smooth" });
  }

  return (
    <button type="button" onClick={scrollToMosaic} className={className}>
      {children}
    </button>
  );
}
