import { heroClips } from "@/content/site";
import { LoopVideo } from "./LoopVideo";

const half = Math.ceil(heroClips.length / 2);
const columns = [
  { clips: heroClips.slice(0, half), className: "[animation-duration:44s]" },
  {
    clips: heroClips.slice(half),
    className: "[animation-duration:56s] [animation-direction:reverse]",
  },
];

// Dos columnas de videos en sentidos opuestos: una baja y la otra sube. Se pausan con el mouse.
export function VideoColumns({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`group grid grid-cols-2 gap-4 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_18%,black_82%,transparent)] ${className}`}
    >
      {columns.map(({ clips, className: timing }, i) => (
        <div
          key={i}
          className={`flex animate-fall flex-col group-hover:[animation-play-state:paused] motion-reduce:animate-none ${timing}`}
        >
          {[...clips, ...clips].map((src, j) => (
            <div
              key={j}
              className="mb-4 aspect-[2/3] overflow-hidden rounded-3xl bg-white/5"
            >
              <LoopVideo src={src} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
