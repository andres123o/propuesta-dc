import Image from "next/image";
import { heroAwards } from "@/content/site";

// Premios en dos columnas iguales: logo en blanco atenuado arriba y la medalla debajo.
export function Awards() {
  return (
    <ul aria-label="Premios 2024" className="grid w-full max-w-lg grid-cols-2">
      {heroAwards.map((item, i) => (
        <li
          key={item.award}
          className={`flex flex-col gap-2 ${i > 0 ? "border-l border-white/15 pl-8" : "pr-8"}`}
        >
          <span className="flex h-10 items-end gap-2 opacity-80">
            <Image
              src={item.logo}
              alt={item.award}
              width={item.width}
              height={item.height}
              className="h-full w-auto brightness-0 invert"
            />
            {"suffix" in item && (
              <span className="font-display text-2xl leading-none font-semibold tracking-[0.06em]">
                {item.suffix}
              </span>
            )}
          </span>
          <span className="text-sm">
            <span className={`font-medium ${item.tone}`}>{item.medal}</span>
            <span className="text-cream/65"> · 2024</span>
          </span>
        </li>
      ))}
    </ul>
  );
}
