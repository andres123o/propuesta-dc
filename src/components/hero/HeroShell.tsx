"use client";

import { useRef, type ReactNode } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

/*
  Al hacer scroll el contenido del hero se queda quieto: solo su borde inferior sube
  (con esquinas redondeadas) y deja ver la sección de abajo, que pasa por debajo.
*/
export function HeroShell({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ref.current,
      { clipPath: "inset(0% 0% 0% 0% round 0px 0px 0px 0px)" },
      {
        clipPath: "inset(0% 0% 100% 0% round 0px 0px 40px 40px)",
        opacity: 0.4,
        ease: "none",
        scrollTrigger: {
          trigger: ref.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
          pin: true,
          pinSpacing: false,
        },
      },
    );
  });

  return (
    <section
      ref={ref}
      className="relative isolate z-20 flex min-h-svh overflow-hidden bg-ink px-6 md:px-12"
    >
      {children}
    </section>
  );
}
