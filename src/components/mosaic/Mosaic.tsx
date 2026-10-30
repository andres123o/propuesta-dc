"use client";

import Link from "next/link";
import { useRef } from "react";
import { mosaicTiles } from "@/content/site";
import { gsap, useGSAP } from "@/lib/gsap";

/*
  La sección se fija y las tarjetas entran por izquierda y derecha al ritmo del scroll
  hasta llenar la pantalla. Al subir, el efecto se revierte.
*/
export function Mosaic() {
  const section = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap
        .matchMedia()
        .add(
          "(min-width: 48rem) and (prefers-reduced-motion: no-preference)",
          () => {
            gsap
              .timeline({
                scrollTrigger: {
                  id: "mosaico",
                  trigger: section.current,
                  start: "top top",
                  end: "+=150%",
                  pin: true,
                  scrub: 1,
                },
              })
              .from("[data-from]", {
                xPercent: (_, el: HTMLElement) =>
                  el.dataset.from === "left" ? -140 : 140,
                opacity: 0,
                ease: "power3.out",
                stagger: 0.12,
              });
          },
        );
    },
    { scope: section },
  );

  return (
    <section
      id="nosotros"
      ref={section}
      className="relative z-10 overflow-hidden bg-ink px-6 pt-24 pb-6 md:h-svh md:px-12"
    >
      <div className="mx-auto h-full max-w-7xl">
        {/* Alineado a la izquierda con el logo y a la derecha con el menú, que sobresale del contenedor. */}
        <div className="grid h-full grid-cols-2 gap-2 md:-mr-6 md:grid-cols-12 md:grid-rows-6">
          {mosaicTiles.map((tile) => {
            const className = `flex flex-col justify-between rounded-3xl p-6 transition-colors duration-500 md:p-8 ${tile.area} ${tile.tone}`;
            const content = (
              <>
                <p
                  className={`font-display text-4xl leading-none font-medium tracking-[-0.04em] text-balance md:text-5xl ${"size" in tile ? tile.size : "lg:text-6xl"}`}
                >
                  {tile.title}
                </p>
                {"caption" in tile && (
                  <p className="mt-6 text-sm tracking-wide opacity-75 md:text-base">
                    {tile.caption}
                  </p>
                )}
              </>
            );

            return "href" in tile ? (
              <Link
                key={tile.title}
                href={tile.href}
                data-from={tile.from}
                className={className}
              >
                {content}
              </Link>
            ) : (
              <div key={tile.title} data-from={tile.from} className={className}>
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
