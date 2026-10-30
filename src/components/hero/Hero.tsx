import { ArrowIcon } from "@/components/ui/ArrowIcon";
import { heroWords } from "@/content/site";
import { HeroShell } from "./HeroShell";
import { RotatingWord } from "./RotatingWord";
import { ScrollDownButton } from "./ScrollDownButton";
import { VideoColumns } from "./VideoColumns";

export function Hero() {
  return (
    <HeroShell>
      <div
        aria-hidden
        className="absolute top-1/4 right-0 -z-10 size-[42rem] rounded-full bg-magenta/20 blur-[140px]"
      />
      <div
        aria-hidden
        className="absolute bottom-0 left-1/4 -z-10 size-[24rem] rounded-full bg-sun/10 blur-[120px]"
      />
      {/* Funde el borde inferior con el fondo de la sección siguiente para que no se note el corte. */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 -z-10 h-48 bg-linear-to-b from-transparent to-ink"
      />

      <div className="relative mx-auto flex w-full max-w-7xl items-center pt-28 pb-12">
        <VideoColumns className="absolute inset-y-0 right-0 -z-10 w-full opacity-30 md:-right-16 md:w-[54%] md:opacity-100" />

        <div className="flex w-full flex-col gap-12 md:w-[54%]">
          <h1 className="font-display text-5xl leading-[1.05] font-medium tracking-[-0.05em] md:text-6xl lg:text-[5.5rem]">
            Menos intuición,
            <span className="mt-2 flex items-center gap-[0.25em]">
              más
              {/* Solo la palabra que cambia va sobre fondo claro; su ancho sigue a la palabra. */}
              <span className="rounded-[0.32em] bg-cream px-[0.4em] pt-[0.06em] pb-[0.12em] text-ink">
                <RotatingWord words={heroWords} />
              </span>
            </span>
          </h1>

          <div className="flex flex-wrap items-center gap-x-8 gap-y-6">
            <ScrollDownButton className="group flex items-center gap-4 rounded-full bg-cream py-3 pr-3 pl-9 text-[1.75rem] font-medium text-ink transition-colors duration-300 hover:bg-white">
              Conoce más
              {/* La flecha apunta hacia abajo: lleva a la siguiente sección. */}
              <span
                aria-hidden
                className="grid size-16 place-items-center rounded-full bg-ink text-cream transition-transform duration-500 ease-smooth group-hover:translate-y-1"
              >
                <ArrowIcon className="size-6 rotate-90" />
              </span>
            </ScrollDownButton>
          </div>
        </div>
      </div>
    </HeroShell>
  );
}
