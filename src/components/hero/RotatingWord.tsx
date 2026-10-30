"use client";

import { useRef, useState } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

const VISIBLE_S = 2.8;

/*
  Cada letra gira en 3D sobre su eje horizontal al salir y al entrar, en cascada.
  El ancho se ajusta con suavidad, así el punto se desliza hasta su nuevo lugar.
*/
export function RotatingWord({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0);
  const wrapper = useRef<HTMLSpanElement>(null);
  const word = useRef<HTMLSpanElement>(null);
  const dot = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const letters = word.current!.children;

      gsap
        .timeline()
        .to(wrapper.current, {
          width: word.current!.offsetWidth + dot.current!.offsetWidth,
          duration: 0.6,
          ease: "expo.inOut",
        })
        .from(
          letters,
          {
            rotationX: -90,
            opacity: 0,
            duration: 0.75,
            ease: "expo.out",
            stagger: 0.03,
          },
          "<0.1",
        )
        .fromTo(
          dot.current,
          { scale: 0.3, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.55, ease: "back.out(3)" },
          "<0.2",
        )
        .to(letters, {
          rotationX: 90,
          opacity: 0,
          duration: 0.38,
          ease: "power2.in",
          stagger: 0.02,
          delay: VISIBLE_S,
        })
        .to(
          dot.current,
          { scale: 0.3, opacity: 0, duration: 0.3, ease: "power2.in" },
          "<0.15",
        )
        .call(() => setIndex((i) => (i + 1) % words.length));
    },
    { dependencies: [index], scope: wrapper },
  );

  return (
    <>
      <span className="sr-only">{words[0]}.</span>
      <span
        ref={wrapper}
        aria-hidden
        className="inline-flex whitespace-nowrap [perspective:600px]"
      >
        <span ref={word} key={index} className="inline-block">
          {[...words[index]].map((letter, i) => (
            <span key={i} className="inline-block origin-[50%_50%_-0.4em]">
              {letter}
            </span>
          ))}
        </span>
        <span ref={dot} className="inline-block">
          .
        </span>
      </span>
    </>
  );
}
