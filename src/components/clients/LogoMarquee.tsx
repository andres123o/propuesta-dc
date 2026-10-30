"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";

type Logo = { name: string; src: string };

/*
  Cinta infinita: un solo tween de GSAP sobre la pista (va duplicada, así -50 % empalma).
  El scroll la acelera según su velocidad y el mouse la frena, siempre con transición.
*/
export function LogoMarquee({
  logos,
  reverse = false,
}: {
  logos: Logo[];
  reverse?: boolean;
}) {
  const root = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const [from, to] = reverse ? [-50, 0] : [0, -50];
      const loop = gsap.fromTo(
        track.current,
        { xPercent: from },
        {
          xPercent: to,
          duration: logos.length * 3.5,
          ease: "none",
          repeat: -1,
        },
      );
      const speed = (timeScale: number, duration: number) =>
        gsap.to(loop, {
          timeScale,
          duration,
          ease: "power2.out",
          overwrite: true,
        });

      ScrollTrigger.create({
        trigger: root.current,
        start: "top bottom",
        end: "bottom top",
        onUpdate: (self) => {
          speed(1 + Math.min(Math.abs(self.getVelocity()) / 400, 4), 0.3).then(
            () => speed(1, 1.4),
          );
        },
      });

      const el = root.current!;
      const onEnter = () => speed(0.15, 0.8);
      const onLeave = () => speed(1, 0.8);
      el.addEventListener("pointerenter", onEnter);
      el.addEventListener("pointerleave", onLeave);
      return () => {
        el.removeEventListener("pointerenter", onEnter);
        el.removeEventListener("pointerleave", onLeave);
      };
    },
    { scope: root },
  );

  return (
    <div
      ref={root}
      className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
    >
      <div ref={track} className="flex w-max will-change-transform">
        {[0, 1].map((copy) => (
          <ul key={copy} aria-hidden={copy === 1} className="flex">
            {logos.map(({ name, src }) => (
              <li
                key={name}
                className="group mr-3 flex h-24 w-44 shrink-0 items-center justify-center rounded-2xl bg-neutral-100 transition-colors duration-500 hover:bg-neutral-50 md:h-28 md:w-52"
              >
                <Image
                  src={src}
                  alt={name}
                  width={160}
                  height={64}
                  className="max-h-11 w-auto max-w-[58%] object-contain opacity-60 grayscale transition duration-500 group-hover:opacity-100 group-hover:grayscale-0"
                />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
