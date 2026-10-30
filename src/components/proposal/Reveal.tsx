"use client";

import { useRef, type ReactNode } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

/*
  Entrada sutil: al llegar la sección, sus piezas [data-reveal] suben un poco y aparecen,
  una tras otra, una sola vez. Con movimiento reducido se muestran quietas.
*/
export function Reveal({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from("[data-reveal]", {
          y: 24,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: { trigger: ref.current, start: "top 75%", once: true },
        });
      });
    },
    { scope: ref },
  );

  return (
    <section ref={ref} id={id} className={className}>
      {children}
    </section>
  );
}
