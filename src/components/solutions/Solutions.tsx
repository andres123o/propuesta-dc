"use client";

import { useEffect, useRef, useState } from "react";
import { solutions } from "@/content/site";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";

const LAST = solutions.length - 1;
const HOLD = 1.5; // filas de scroll que la última solución se queda fija
const STEPS = LAST + HOLD;
// Alto de cada fila: los nombres y su información comparten la misma pauta para moverse juntos.
const ROW = "h-[2.8rem] md:h-[5.6rem]";
// Ventana de 5 filas, difuminada arriba y abajo; la lista arranca con su primera fila en el centro.
const WINDOW =
  "h-[14rem] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_35%,black_65%,transparent)] md:h-[28rem]";
const OFFSET = "mt-[5.6rem] md:mt-[11.2rem]";

/*
  Como la sección de trabajo de Contra: "Nuestros métodos" fijo en la línea del centro y,
  a su lado, los nombres y la información de cada solución suben juntos con el scroll.
  La fila alineada queda encendida; cambia el video de fondo.
*/
export function Solutions() {
  const section = useRef<HTMLElement>(null);
  const names = useRef<HTMLOListElement>(null);
  const details = useRef<HTMLUListElement>(null);
  const trigger = useRef<ScrollTrigger>(null);
  const videos = useRef<HTMLVideoElement[]>([]);
  const [active, setActive] = useState(0);

  useGSAP(
    () => {
      const timeline = gsap
        .timeline({
          scrollTrigger: {
            trigger: section.current,
            start: "top top",
            end: () => `+=${STEPS * window.innerHeight * 0.6}`,
            pin: true,
            scrub: 0.6,
            onUpdate: (self) =>
              setActive(Math.round(Math.min(self.progress * STEPS, LAST))),
          },
        })
        .to([names.current, details.current], {
          yPercent: (-100 * LAST) / solutions.length,
          ease: "none",
          duration: LAST,
        })
        // Pausa al final: Bootcamps se queda en pantalla un tramo de scroll antes de soltar la sección.
        .to({}, { duration: HOLD });
      trigger.current = timeline.scrollTrigger!;
    },
    { scope: section },
  );

  // Solo se reproduce el video de la solución activa.
  useEffect(() => {
    videos.current.forEach((video, i) => {
      if (i === active) {
        video.muted = true;
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, [active]);

  // Al hacer clic en un nombre, el scroll lleva hasta él.
  const goTo = (i: number) => {
    const st = trigger.current;
    if (st)
      window.scrollTo({
        top: st.start + (i / STEPS) * (st.end - st.start),
        behavior: "smooth",
      });
  };

  const tone = (i: number) => (i === active ? "opacity-100" : "opacity-30");

  return (
    <section
      id="productos"
      ref={section}
      className="relative z-10 h-svh overflow-hidden bg-ink px-6 text-cream md:px-12"
    >
      {solutions.map(({ title, clip }, i) => (
        <video
          key={title}
          ref={(el) => {
            if (el) videos.current[i] = el;
          }}
          src={clip}
          loop
          muted
          playsInline
          preload="metadata"
          aria-hidden
          className={`absolute inset-0 -z-10 size-full object-cover transition-opacity duration-700 ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div aria-hidden className="absolute inset-0 -z-10 bg-ink/65" />

      <div className="mx-auto flex h-full max-w-7xl items-center gap-6 md:gap-10">
        <h2 className="shrink-0 font-display text-3xl font-medium tracking-[-0.04em] md:text-6xl">
          Nuestros métodos
        </h2>

        <div className={WINDOW}>
          <ol ref={names} className={OFFSET}>
            {solutions.map(({ title }, i) => (
              <li key={title} className={`flex items-center ${ROW}`}>
                <button
                  type="button"
                  onClick={() => goTo(i)}
                  aria-current={i === active}
                  className={`font-display text-3xl font-medium tracking-[-0.04em] whitespace-nowrap transition-opacity duration-500 hover:opacity-70 md:text-6xl ${tone(i)}`}
                >
                  {title}
                </button>
              </li>
            ))}
          </ol>
        </div>

        <div className={`hidden flex-1 lg:block ${WINDOW}`}>
          <ul ref={details} className={OFFSET}>
            {solutions.map(({ title, line }, i) => (
              <li
                key={title}
                className={`flex flex-col justify-center gap-2 border-l border-cream/20 pl-8 transition-opacity duration-500 ${ROW} ${i === active ? "opacity-100" : "opacity-0"}`}
              >
                <p className="max-w-sm font-display text-xl leading-snug tracking-[-0.02em]">
                  {line}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
