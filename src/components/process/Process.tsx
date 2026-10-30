"use client";

import { useRef, useState } from "react";
import { cardTones, processSteps } from "@/content/site";
import { ScrollTrigger, useGSAP } from "@/lib/gsap";

const STEPS = processSteps.length;

/*
  El título arriba y una tarjeta ancha debajo. La sección se fija y cada gesto de scroll
  encaja en un paso (snap): la tarjeta cambia de color y su único texto entra de nuevo.
  Los puntos de abajo indican en qué paso vas.
*/
export function Process() {
  const section = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);

  useGSAP(
    () => {
      ScrollTrigger.create({
        trigger: section.current,
        start: "top top",
        end: () => `+=${STEPS * window.innerHeight * 0.7}`,
        pin: true,
        // Cada paso ocupa un tramo igual; al soltar el scroll se acomoda en el más cercano.
        snap: {
          snapTo: 1 / (STEPS - 1),
          duration: { min: 0.2, max: 0.5 },
          ease: "power2.inOut",
        },
        onUpdate: (self) => setActive(Math.round(self.progress * (STEPS - 1))),
      });
    },
    { scope: section },
  );

  return (
    <section
      ref={section}
      id="modelo"
      className="relative z-10 flex h-svh flex-col justify-center bg-ink px-6 pt-24 pb-12 text-cream md:px-12"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10">
        <h2 className="mx-auto max-w-4xl text-center font-display text-5xl leading-[1.02] font-medium tracking-[-0.045em] text-balance md:text-7xl">
          De la data al resultado en 7 pasos.
        </h2>

        <div
          className={`flex h-[min(48svh,26rem)] items-center justify-center rounded-[2rem] px-8 text-center transition-colors duration-700 ${cardTones[active].card}`}
        >
          <p
            key={active}
            className="max-w-4xl animate-fade-up font-display text-5xl leading-[1.02] font-medium tracking-[-0.045em] text-balance md:text-7xl"
          >
            {processSteps[active]}
          </p>
        </div>

        <ol aria-label="Pasos" className="flex justify-center gap-2">
          {processSteps.map((step, i) => (
            <li
              key={step}
              aria-current={i === active}
              className={`h-1.5 rounded-full transition-all duration-500 ${i === active ? "w-10 bg-cream" : "w-1.5 bg-cream/25"}`}
            />
          ))}
        </ol>
      </div>
    </section>
  );
}
