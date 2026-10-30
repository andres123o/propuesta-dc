"use client";

import Image from "next/image";
import { useRef } from "react";
import { clientBrands, mediaAgencies } from "@/content/site";
import { gsap, useGSAP } from "@/lib/gsap";
import { LogoMarquee } from "./LogoMarquee";

const half = Math.ceil(clientBrands.length / 2);

export function Clients() {
  const section = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from("[data-agency]", {
        opacity: 0,
        y: 16,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.06,
        scrollTrigger: {
          trigger: "[data-agency]",
          start: "top 85%",
          once: true,
        },
      });
    },
    { scope: section },
  );

  return (
    // data-theme="light" le indica al menú que se ponga oscuro sobre esta sección.
    <section
      id="marcas"
      ref={section}
      data-theme="light"
      className="relative z-10 bg-white px-6 py-28 text-ink md:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          <h2 className="font-display text-4xl leading-[1.05] font-medium tracking-[-0.04em] text-balance md:text-6xl">
            Trabajamos con las marcas que mueven la región.
          </h2>
          <div className="flex flex-col gap-3">
            <LogoMarquee logos={clientBrands.slice(0, half)} />
            <LogoMarquee logos={clientBrands.slice(half)} reverse />
          </div>
        </div>

        <p className="mt-24 text-sm text-ink/65">
          Agencias y holdings de medios
        </p>
        <ul className="mt-4 grid grid-cols-3 md:grid-cols-5">
          {mediaAgencies.map(({ name, src }) => (
            <li
              key={name}
              data-agency
              className="flex h-24 items-center justify-center md:h-28"
            >
              <Image
                src={src}
                alt={name}
                width={160}
                height={64}
                className="max-h-12 w-auto max-w-[65%] object-contain opacity-55 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
