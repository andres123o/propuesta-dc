export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Productos", href: "/#productos" },
  { label: "Equipo", href: "/#equipo" },
  { label: "Modelo", href: "/#modelo" },
  { label: "Para marcas", href: "/marcas" },
];

export const registerOptions = [
  { label: "Como influencer", href: "/registro/influencer" },
  { label: "Como manager", href: "/registro/manager" },
];

// Cuadrícula de 12 × 6 con posiciones fijas: lo que tiene más texto ocupa las tarjetas grandes.
// `from` es el lado por el que entra cada tarjeta.
export const mosaicTiles = [
  {
    title: "Menos corazonadas. Más datos.",
    area: "md:col-start-1 md:col-span-5 md:row-start-1 md:row-span-4",
    tone: "bg-magenta text-cream",
    size: "lg:text-7xl",
    from: "left",
  },
  {
    title: "Data Estructural",
    caption: "Metodología propia",
    area: "md:col-start-6 md:col-span-4 md:row-start-1 md:row-span-3",
    tone: "bg-[#2e2c29] text-cream",
    from: "right",
  },
  {
    title: "7+",
    caption: "años de trayectoria",
    area: "md:col-start-10 md:col-span-3 md:row-start-1 md:row-span-2",
    tone: "bg-sun text-ink",
    from: "right",
  },
  {
    title: "12.000",
    caption: "creadores",
    area: "md:col-start-10 md:col-span-3 md:row-start-3 md:row-span-2",
    tone: "bg-cream text-ink",
    from: "right",
  },
  {
    title: "CO · MX · PA · US · PE",
    caption: "Presencia en 5 países",
    area: "md:col-start-6 md:col-span-4 md:row-start-4 md:row-span-3",
    tone: "bg-[#024269] text-cream",
    from: "left",
  },
  {
    title: "HUBs",
    caption: "de facturación local",
    area: "md:col-start-1 md:col-span-3 md:row-start-5 md:row-span-2",
    tone: "bg-[#f050a0] text-ink",
    from: "left",
  },
  {
    title: "LATAM",
    caption: "Operación remota",
    area: "md:col-start-4 md:col-span-2 md:row-start-5 md:row-span-2",
    tone: "bg-[#e6e3dd] text-ink",
    size: "lg:text-5xl",
    from: "left",
  },
  {
    title: "Escríbenos →",
    href: "/marcas",
    area: "md:col-start-10 md:col-span-3 md:row-start-5 md:row-span-2",
    tone: "bg-white text-ink hover:bg-magenta hover:text-cream",
    from: "right",
  },
] as const;

export const heroAwards = [
  {
    award: "Effie Awards Colombia",
    logo: "/awards/effie.png",
    width: 1446,
    height: 759,
    medal: "Plata",
    tone: "text-[#c9c5bd]",
  },
  {
    award: "IAB MIXX Awards",
    logo: "/awards/iab.svg",
    width: 487,
    height: 244,
    suffix: "MIXX",
    medal: "Bronce",
    tone: "text-[#c98a5a]",
  },
];
export const heroWords = ["certeza", "precisión", "resultados", "data"];

export const heroClips = [
  "42286",
  "50466",
  "42291",
  "50481",
  "50467",
  "50429",
  "50482",
  "49141",
  "50453",
  "50484",
].map((id) => `/clips/${id}.mp4`);

const logo = (name: string, file: string) => ({
  name,
  src: `/brands/${file}.svg`,
});

export const clientBrands = [
  logo("Pepsi", "pepsi"),
  logo("P&G", "pg"),
  logo("Mercado Libre", "mercadolibre"),
  logo("Xiaomi", "xiaomi"),
  logo("Falabella", "falabella"),
  logo("Belcorp", "belcorp"),
  logo("Natura", "natura"),
  logo("Movistar", "movistar"),
  logo("Éxito", "exito"),
  logo("Rappi", "rappi"),
  logo("Isdin", "isdin"),
  logo("vivo", "vivo"),
  logo("Geely", "geely"),
  logo("Addi", "addi"),
  logo("Sendwave", "sendwave"),
  logo("Crem Helado", "crem-helado"),
  logo("Zenú", "zenu"),
  logo("Prebel", "prebel"),
  logo("Parque Arauco", "parquearauco"),
  logo("Chevrolet", "chevrolet"),
  logo("Carl's Jr.", "carlsjr"),
];

export const mediaAgencies = [
  logo("WPP", "wpp"),
  logo("Omnicom", "omnicom"),
  logo("Dentsu", "dentsu"),
  logo("IPG Mediabrands", "mediabrands"),
  logo("Havas", "havas"),
];

// Una línea por solución; el video va de fondo mientras la solución está activa.
export const solutions = [
  {
    title: "Marketing de Influencia",
    line: "Nuestro core: creadores que generan resultados medibles.",

    clip: "50467",
  },
  {
    title: "Viralizers",
    line: "De 10 a 100 microinfluenciadores para alcance masivo.",

    clip: "42291",
  },
  {
    title: "UGC",
    line: "+9.000 creadores con contenido nativo que convierte.",

    clip: "50466",
  },
  {
    title: "Vivia",
    line: "Avatares hiperrealistas creados con IA generativa.",

    clip: "50453",
  },
  {
    title: "DC Play",
    line: "Experiencias gamificadas que convierten vistas en data.",

    clip: "42286",
  },
  {
    title: "DC x WikiMujeres",
    line: "+130K mujeres activas en toda LATAM.",

    clip: "50429",
  },
  {
    title: "Talent Management",
    line: "Representación y gestión integral de talento.",

    clip: "50481",
  },
  {
    title: "DCG",
    line: "+80 talentos de gaming y esports en LATAM y EE. UU.",

    clip: "50482",
  },
  {
    title: "Bootcamps",
    line: "Eventos en vivo que conectan creadores y marcas.",

    clip: "50484",
  },
].map((item) => ({ ...item, clip: `/clips/${item.clip}.mp4` }));

export const processSteps = [
  "Análisis del objetivo de marca",
  "Data estructural: insights de valor",
  "Estrategia creativa",
  "Scouting y negociación de perfiles",
  "Entregable final",
  "Ejecución de proyectos",
  "Reporting",
];

export const leaders = [
  {
    name: "Cinthya Dussán Guzmán",
    role: "Founder & CEO",
    photo: "/team/cinthya.jpg",
  },
  {
    name: "Stephany Hemelberg",
    role: "Chief of Product & Innovation",
    photo: "/team/stephany.jpg",
  },
];

export const contactChannels = [
  {
    label: "Email",
    value: "contacto@dcinfluencers.com",
    href: "mailto:contacto@dcinfluencers.com",
  },
  {
    label: "WhatsApp Colombia",
    value: "+57 311 267 6086",
    href: "https://wa.me/573112676086",
  },
  {
    label: "WhatsApp México",
    value: "+52 566 608 9128",
    href: "https://wa.me/525666089128",
  },
];

export const footerLinks = [
  { label: "Productos", href: "/#productos" },
  { label: "Marcas", href: "/#marcas" },
  { label: "Modelo de trabajo", href: "/#modelo" },
  { label: "Equipo", href: "/#equipo" },
  { label: "Para marcas", href: "/marcas" },
  { label: "Registro de creadores", href: "/registro/influencer" },
  { label: "Registro de managers", href: "/registro/manager" },
];

export const countries = [
  "Colombia",
  "México",
  "Panamá",
  "Perú",
  "Estados Unidos",
  "Otro",
];
export const socialNetworks = [
  "Instagram",
  "TikTok",
  "YouTube",
  "X",
  "Twitch",
  "LinkedIn",
];
export const creatorNiches = [
  "Belleza",
  "Moda",
  "Lifestyle",
  "Gaming",
  "Tecnología",
  "Fitness",
  "Comida",
  "Viajes",
  "Humor",
  "Finanzas",
  "Maternidad",
  "Música",
];
export const audienceRanges = [
  "Menos de 10K",
  "10K a 50K",
  "50K a 200K",
  "200K a 1M",
  "Más de 1M",
];
export const rosterRanges = ["1 a 5", "6 a 20", "21 a 50", "Más de 50"];
export const rateRanges = [
  "Menos de USD 100",
  "USD 100 a 500",
  "USD 500 a 1.500",
  "USD 1.500 a 5.000",
  "Más de USD 5.000",
];
export const yesNo = ["Sí", "No"];
export const campaignGoals = [
  "Reconocimiento",
  "Consideración",
  "Conversión",
  "Lanzamiento",
  "Contenido UGC",
  "Gaming",
];
export const budgetRanges = [
  "Menos de USD 5.000",
  "USD 5.000 a 20.000",
  "USD 20.000 a 50.000",
  "Más de USD 50.000",
  "Aún no lo sé",
];

// Colores de las tarjetas que cambian por paso (modelo de trabajo y formularios).
export const cardTones = [
  { card: "bg-magenta text-cream", button: "bg-cream text-ink" },
  { card: "bg-sun text-ink", button: "bg-ink text-cream" },
  { card: "bg-[#024269] text-cream", button: "bg-cream text-ink" },
  { card: "bg-[#f050a0] text-ink", button: "bg-ink text-cream" },
  { card: "bg-cream text-ink", button: "bg-ink text-cream" },
  { card: "bg-[#2e2c29] text-cream", button: "bg-cream text-ink" },
  { card: "bg-white text-ink", button: "bg-ink text-cream" },
];
