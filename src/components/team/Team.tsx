import Image from "next/image";
import { leaders } from "@/content/site";

export function Team() {
  return (
    <section
      id="equipo"
      data-theme="light"
      className="relative z-10 bg-cream px-6 py-32 text-ink md:px-12"
    >
      <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:items-start">
        <h2 className="font-display text-5xl leading-[1.02] font-medium tracking-[-0.045em] text-balance md:text-7xl">
          Más de 40 personas, un solo estándar.
        </h2>

        <ul className="grid grid-cols-2 gap-4">
          {leaders.map(({ name, role, photo }) => (
            <li key={name} className="flex flex-col gap-4">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-ink/5">
                <Image
                  src={photo}
                  alt={name}
                  fill
                  sizes="(min-width: 768px) 30vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-display text-xl font-medium tracking-[-0.02em]">
                  {name}
                </p>
                <p className="text-ink/65">{role}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
