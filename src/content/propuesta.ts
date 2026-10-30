// Textos de /propuesta: lo que Andrés haría por DC, sección por sección (problema → solución).

export const proposalNav = [
  { label: "Inicio", href: "/propuesta" },
  { label: "Propuesta", href: "/propuesta#web" },
  { label: "La web nueva", href: "/" },
  { label: "Contacto", href: "/propuesta#contacto" },
];

export const author = {
  name: "Andrés Felipe Olaya",
  email: "andresolayacris@gmail.com",
  whatsapp: { value: "+57 301 508 1517", href: "https://wa.me/573015081517" },
  linkedin:
    "https://www.linkedin.com/in/andres-felipe-cristancho-olaya-3aa762179/",
  github: "https://github.com/andres123o",
};

export const proposalHero = {
  title:
    "DC ya tiene una marca sólida. Su web y sus procesos aún necesitan mejorar.",
  lead: "Soy Andrés Felipe Olaya y quiero ayudarles a crecer desde adentro: una web a la altura de su marca, una base de creadores propia y herramientas que convierten Data Estructural en producto.",
  cta: "Ver la propuesta",
};

export type ProposalSection = {
  id: string;
  title: string;
  // Rótulo de la tarjeta oscura: "El problema" salvo cuando es una oportunidad y no un dolor confirmado.
  problemLabel?: string;
  problem: string;
  // Hechos verificados en su web o en prensa: muestran que el problema no es supuesto.
  evidence?: string[];
  solution: string[];
  links?: { label: string; href: string }[];
};

export const proposalSections: ProposalSection[] = [
  {
    id: "web",
    title: "Una web a la altura de la marca",
    problem:
      "DC tiene más de 7.000 campañas, más de 1.000 clientes, un Effie Plata y un IAB MIXX Bronce con Chevrolet, y su web no transmite ese nivel. Es una plantilla sin diseño propio.",
    evidence: [
      "Sin Google Analytics, Tag Manager ni píxel",
      "Sin sitemap, schema ni imagen para redes",
      "El enlace de su LinkedIn da error 404",
    ],
    solution: [
      "Un estilo y un diseño nuevos que le dan a la marca la presencia que ya tiene en el mercado: quien entra entiende de inmediato el nivel de DC.",
      "Data Estructural, los casos y los premios al frente.",
      "Analítica de visitas y conversiones desde el primer día.",
      "SEO y AEO para aparecer en Google y en las respuestas de agentes de IA como ChatGPT, Claude y Gemini.",
    ],
    links: [{ label: "Ver el prototipo", href: "/" }],
  },
  {
    id: "registro",
    title: "Registros que alimentan una base propia",
    problem:
      "Creadores, managers y marcas llegan por WhatsApp y por un formulario corto, cada uno con datos distintos. No hay una estructura común ni un sistema confiable para hacer seguimiento a cada registro.",
    evidence: [
      "La web no tiene registro de creadores",
      "El formulario pide solo nombre, empresa, correo, país y mensaje",
    ],
    solution: [
      "Cada registro entra con la misma estructura y se guarda en una base de datos de DC.",
      "El equipo ve en un mismo lugar quién se registró, qué perfil tiene y en qué etapa va.",
      "La clasificación de cada registro y el aviso al responsable son automáticos.",
      "Con cada registro crece un inventario de creadores y marcas propio de DC.",
    ],
    links: [
      { label: "Influencer", href: "/registro/influencer" },
      { label: "Manager", href: "/registro/manager" },
      { label: "Marca", href: "/marcas" },
    ],
  },
  {
    id: "motor",
    title: "Motor de sugerencias",
    problem:
      "Con más de 100 campañas al mes, el equipo comercial arma de forma manual la propuesta de creadores para cada brief. Es un proceso lento: cada persona consulta perfiles uno por uno y depende de lo que recuerde de campañas anteriores.",
    evidence: ["Más de 100 campañas activas al mes (El Tiempo)"],
    solution: [
      "Una herramienta interna que toma el brief (objetivo, país, nicho y presupuesto) y sugiere los creadores que mejor encajan.",
      "Cada sugerencia trae su razón: audiencia, resultados en campañas anteriores y afinidad con la marca.",
      "El comercial revisa, ajusta y envía la propuesta en menos tiempo.",
      "Todas las propuestas siguen el método de Data Estructural, las arme quien las arme.",
    ],
  },
  {
    id: "leads",
    title: "Tablero de leads",
    problem:
      "DC consigue muchas marcas interesadas: solo en Brand100 tuvo más de 60 reuniones. Esos contactos llegan por caminos distintos (eventos, dos números de WhatsApp y la web) y no quedan en un mismo lugar. Así es difícil saber cuántas marcas están interesadas, quién atiende a cada una y cuáles se quedaron sin respuesta.",
    evidence: [
      "Dos WhatsApp públicos: Colombia y México",
      "El formulario no pide presupuesto ni tipo de campaña",
    ],
    solution: [
      "Un solo tablero con todas las marcas interesadas, vengan de un evento, de WhatsApp o de la web.",
      "El formulario de la web pregunta presupuesto y tipo de campaña, para que el comercial sepa qué necesita cada marca antes de llamarla.",
      "Cada lead con su estado (nuevo, en conversación, propuesta enviada, cerrado) y su responsable.",
      "Recordatorios automáticos cuando un lead lleva días sin respuesta.",
      "Un reporte mensual de qué evento y qué canal traen más negocio, para decidir en qué eventos invertir.",
    ],
  },
  {
    id: "pais",
    title: "Una web que reconoce el país",
    problemLabel: "La oportunidad",
    problem:
      "DC opera en Colombia, México, Panamá, USA y Perú. Cada visitante podría ver los casos, las marcas y el contacto de su mercado desde la primera visita.",
    evidence: [
      "HUBs en Colombia, México, Panamá, USA y Perú",
      "Una sola versión de la web para todos",
    ],
    solution: [
      "La web identifica el país del visitante y le muestra el contenido de ese mercado.",
      "Casos, marcas de referencia y canal de contacto propios de cada país.",
      "Es una sola web, y el contenido de cada país se administra desde el mismo lugar.",
    ],
  },
  {
    id: "growth",
    title: "Apoyo en growth",
    problemLabel: "La oportunidad",
    problem:
      "Cada punto de esta propuesta toca una parte del negocio: la marca, la captación de marcas y creadores, la propuesta comercial y la expansión a otros países. Hoy esos procesos funcionan por separado y con mucho trabajo manual.",
    evidence: ["Ningún dato de visitas ni conversiones en la web"],
    solution: [
      "Sumarme al equipo para acompañar la operación: captación de marcas, registro de creadores, propuestas comerciales y expansión.",
      "Automatizar las tareas manuales, desde el primer contacto con una marca hasta el cierre de la campaña.",
      "Medir qué eventos, canales y campañas traen más negocio, y mejorar sobre esos datos.",
      "Revisión mensual de resultados con el equipo comercial y de producto.",
    ],
  },
];

export const proposalContact = {
  title: "¿Lo hablamos?",
  text: "Les muestro el prototipo en vivo y definimos juntos por dónde empezar.",
  location: "Bogotá, Colombia",
};
