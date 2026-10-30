import { ArrowIcon } from "@/components/ui/ArrowIcon";
import { proposalHero } from "@/content/propuesta";

// Hero quieto sobre fondo claro liso: una frase que se entiende de un vistazo y la invitación a bajar.
export function ProposalHero() {
  return (
    <section
      data-theme="light"
      className="flex min-h-svh items-center justify-center bg-cream px-6 text-center text-ink md:px-12"
    >
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 pt-24 pb-16">
        <h1 className="font-display text-5xl leading-[1.04] font-medium tracking-[-0.05em] text-balance md:text-6xl">
          {proposalHero.title}
        </h1>

        <p className="max-w-2xl text-lg leading-relaxed text-pretty text-ink/75 md:text-xl">
          {proposalHero.lead}
        </p>

        <a
          href="#web"
          className="group mt-4 flex items-center gap-4 rounded-full bg-ink py-2 pr-2 pl-7 text-lg font-medium text-cream transition-colors duration-300 hover:bg-magenta"
        >
          {proposalHero.cta}
          <span
            aria-hidden
            className="grid size-11 place-items-center rounded-full bg-cream text-ink transition-transform duration-500 ease-smooth group-hover:translate-y-0.5"
          >
            <ArrowIcon className="size-4 rotate-90" />
          </span>
        </a>
      </div>
    </section>
  );
}
