import Link from "next/link";
import type { ProposalSection } from "@/content/propuesta";
import { cardTones } from "@/content/site";
import { Reveal } from "./Reveal";

// Una sección de la propuesta: el problema en una tarjeta sobria y la solución en una de color.
export function ProposalBlock({
  section,
  index,
}: {
  section: ProposalSection;
  index: number;
}) {
  const tone = cardTones[index % cardTones.length];

  return (
    <Reveal
      id={section.id}
      className="scroll-mt-24 bg-ink px-6 py-16 text-cream md:px-12 md:py-24"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-10">
        <h2
          data-reveal
          className="font-display text-4xl leading-[1.04] font-medium tracking-[-0.045em] text-balance md:text-6xl"
        >
          {section.title}
        </h2>

        <div className="grid gap-3 md:grid-cols-2">
          <div
            data-reveal
            className="flex flex-col justify-between gap-10 rounded-[2rem] bg-[#1c1b19] p-8 ring-1 ring-cream/10 md:p-12"
          >
            <div className="flex flex-col gap-6">
              <p className="text-sm text-cream/60">
                {section.problemLabel ?? "El problema"}
              </p>
              <p className="font-display text-2xl leading-snug tracking-[-0.02em] text-pretty md:text-3xl">
                {section.problem}
              </p>
            </div>

            {section.evidence && (
              <div className="flex flex-col gap-3">
                <p className="text-sm text-cream/60">Lo que investigué</p>
                <ul className="flex flex-wrap gap-2">
                  {section.evidence.map((fact) => (
                    <li
                      key={fact}
                      className="rounded-full px-4 py-2 text-sm text-cream/85 ring-1 ring-cream/15"
                    >
                      {fact}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div
            data-reveal
            className={`flex flex-col justify-between gap-10 rounded-[2rem] p-8 md:p-12 ${tone.card}`}
          >
            <div className="flex flex-col gap-6">
              <p className="text-sm">La solución</p>
              <ul className="flex flex-col gap-4">
                {section.solution.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-xl leading-snug text-pretty md:text-2xl"
                  >
                    <span
                      aria-hidden
                      className="mt-[0.55em] size-1.5 shrink-0 rounded-full bg-current"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {section.links && (
              <div className="flex flex-wrap gap-2">
                {section.links.map(({ label, href }) => (
                  <Link
                    key={href}
                    href={href}
                    className={`rounded-full px-5 py-2.5 text-base font-medium transition-opacity duration-300 hover:opacity-85 ${tone.button}`}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </Reveal>
  );
}
