"use client";

import { useEffect, useRef } from "react";

// Solo reproduce mientras está a la vista. React no serializa `muted` en el HTML
// del servidor, así que se fija aquí para que el navegador permita el autoplay.
export function LoopVideo({ src }: { src: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current!;
    video.muted = true;
    const observer = new IntersectionObserver(([entry]) =>
      entry.isIntersecting ? video.play().catch(() => {}) : video.pause(),
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      src={src}
      loop
      playsInline
      muted
      preload="metadata"
      className="size-full object-cover"
    />
  );
}
