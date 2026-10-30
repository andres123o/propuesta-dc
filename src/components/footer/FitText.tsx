"use client";

import { useLayoutEffect, useRef } from "react";

// Ajusta el tamaño de letra para que el texto ocupe exactamente el ancho de su contenedor,
// sin estirar las letras. Se recalcula al cambiar el tamaño de la ventana.
export function FitText({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const span = ref.current!;
    const fit = () => {
      span.style.fontSize = "100px";
      span.style.fontSize = `${(100 * span.parentElement!.clientWidth) / span.scrollWidth}px`;
    };
    fit();
    const observer = new ResizeObserver(fit);
    observer.observe(span.parentElement!);
    return () => observer.disconnect();
  }, []);

  return (
    <span
      ref={ref}
      className={`block w-max text-[8vw] leading-[0.8] whitespace-nowrap ${className}`}
    >
      {text}
    </span>
  );
}
