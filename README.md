# Propuesta DC Influencer Marketing

Prototipo de una nueva web para DC Influencer Marketing y la propuesta de lo que se construiría encima de ella.

- `/`: la web de DC rediseñada.
- `/registro/influencer`, `/registro/manager` y `/marcas`: registros de una pregunta por pantalla (por ahora solo interfaz).
- `/propuesta`: los problemas encontrados y la solución para cada uno.

## Stack

Next.js 16 (App Router), React 19, Tailwind CSS 4 y GSAP para las animaciones.

## Estructura

```
src/
  app/
    (dc)/        rutas de la web de DC, con su header y footer
    propuesta/   la propuesta, con su propio header y cierre
  components/    un directorio por sección; ui/ para piezas compartidas
  content/       todos los textos y datos (site, forms, propuesta)
  lib/           configuración de GSAP
```

## Desarrollo

```bash
npm install
npm run dev
```

Abre http://localhost:3000.
