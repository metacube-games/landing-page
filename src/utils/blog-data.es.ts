export interface BlogContent {
    type: "heading" | "paragraph" | "image" | "code";
    content: string;
    alt?: string;
    language?: string;
}

export interface Category {
    name: string; // fallback
    slug: string | null;
    key: string; // translation key
}

export interface BlogPost {
    id: string;
    title: string;
    date: string;
    author: string;
    category: string;
    imageUrl: string;
    excerpt: string;
    content: BlogContent[];
    relatedPosts?: string[];
}

/**
 * Gets the CSS class name for a given rarity level
 * @param rarity - The rarity name (common, rare, epic, mythic, legendary)
 * @returns CSS class string with gradient and color styling
 */
export const getRarityClass = (rarity: string): string => {
    switch (rarity.toLowerCase()) {
        case "common":
            return "bg-gradient-to-br from-slate-300 to-slate-400 text-slate-800 dark:from-slate-600 dark:to-slate-700 dark:text-slate-200 border-slate-500";
        case "rare":
            return "bg-gradient-to-br from-teal-400 to-cyan-500 text-teal-900 dark:from-teal-600 dark:to-cyan-500 dark:text-teal-100 border-teal-500";
        case "epic":
            return "bg-gradient-to-br from-purple-400 to-violet-600 text-white dark:from-purple-600 dark:to-violet-500 dark:text-white border-violet-500";
        case "mythic":
            return "bg-gradient-to-br from-red-500 to-rose-600 text-white dark:from-red-600 dark:to-rose-500 dark:text-white border-red-500";
        case "legendary":
            return "bg-gradient-to-br from-amber-300 to-orange-500 text-amber-900 dark:from-amber-500 dark:to-orange-400 dark:text-amber-100 border-amber-500";
        default:
            return "bg-gradient-to-br from-slate-300 to-slate-400 text-slate-800 dark:from-slate-600 dark:to-slate-700 dark:text-slate-200 border-slate-500";
    }
};

/**
 * Gets the glow effect CSS class for a given rarity level
 * @param rarity - The rarity name
 * @returns CSS shadow class string for glow effect
 */
export const getRarityGlow = (rarity: string): string => {
    switch (rarity.toLowerCase()) {
        case "common":
            return "shadow-[0_0_5px_rgba(148,163,184,0.2)]";
        case "rare":
            return "shadow-[0_0_18px_rgba(20,184,166,0.5)]";
        case "epic":
            return "shadow-[0_0_24px_rgba(139,92,246,0.6)]";
        case "mythic":
            return "shadow-[0_0_40px_rgba(239,68,68,0.8)]";
        case "legendary":
            return "shadow-[0_0_30px_rgba(245,158,11,0.7)]";
        default:
            return "shadow-[0_0_5px_rgba(148,163,184,0.2)]";
    }
};

// Helper function for attribute card border based on rarity - Hearthstone style
export const getCardBorder = (rarity: string): string => {
    switch (rarity.toLowerCase()) {
        case "common":
            return "border border-slate-300 dark:border-slate-600";
        case "rare":
            return "border-2 border-teal-400 dark:border-teal-600";
        case "epic":
            return "border-2 border-purple-400 dark:border-purple-600";
        case "mythic":
            return "border-[3px] border-red-500 dark:border-red-600";
        case "legendary":
            return "border-[3px] border-amber-400 dark:border-amber-500";
        default:
            return "border border-slate-300 dark:border-slate-600";
    }
};

// NFT Statistics data based on provided weights
export const nftStatistics = {
    Skin: {
        common: [
            { name: "Fire Man", value: 1064, percentage: "10.6%" },
            { name: "Gladiator", value: 1089, percentage: "10.8%" },
            { name: "Alien", value: 983, percentage: "9.8%" },
            { name: "Skeleton", value: 1009, percentage: "10.0%" }
        ],
        rare: [
            { name: "Anonymous", value: 764, percentage: "7.6%" },
            { name: "Johnny Wolovick", value: 840, percentage: "8.4%" },
            { name: "Golden Boy", value: 781, percentage: "7.8%" }
        ],
        epic: [
            { name: "Michel Marin", value: 650, percentage: "6.5%" },
            { name: "Doge", value: 699, percentage: "6.9%" },
            { name: "Changpen Cil", value: 539, percentage: "5.3%" },
            { name: "Wallstreet Guy", value: 539, percentage: "5.3%" }
        ],
        mythic: [
            { name: "Broke Donald", value: 350, percentage: "3.5%" },
            { name: "Giga Chad", value: 337, percentage: "3.3%" },
            { name: "Pepe", value: 230, percentage: "2.3%" }
        ],
        legendary: [
            { name: "Pelton Flusk", value: 126, percentage: "1.2%" }
        ]
    },
    Cube: {
        common: [
            { name: "B-Chip", value: 328, percentage: "3.2%" },
            { name: "B-Processor", value: 358, percentage: "3.5%" },
            { name: "E-Chip", value: 377, percentage: "3.7%" },
            { name: "E-Processor", value: 347, percentage: "3.4%" },
            { name: "CLI", value: 364, percentage: "3.6%" },
            { name: "Corrupted CLI", value: 339, percentage: "3.3%" },
            { name: "Magma Alloy", value: 358, percentage: "3.5%" },
            { name: "Magma Pool", value: 354, percentage: "3.5%" },
            { name: "Bitcoin", value: 334, percentage: "3.3%" },
            { name: "Ether", value: 325, percentage: "3.2%" },
            { name: "Unknown Figure", value: 304, percentage: "3.0%" },
            { name: "Moneyro", value: 307, percentage: "3.0%" },
            { name: "Accumulator", value: 281, percentage: "2.8%" },
            { name: "Pump & Dumper", value: 321, percentage: "3.2%" },
            { name: "L-Processor", value: 305, percentage: "3.0%" },
            { name: "Lunar Pool", value: 292, percentage: "2.9%" }
        ],
        rare: [
            { name: "EfteX", value: 285, percentage: "2.8%" },
            { name: "Lunar", value: 291, percentage: "2.9%" },
            { name: "BULL!", value: 268, percentage: "2.6%" },
            { name: "BEAR!", value: 229, percentage: "2.2%" },
            { name: "Handcuffs", value: 274, percentage: "2.7%" },
            { name: "Spiral Cash", value: 247, percentage: "2.4%" }
        ],
        epic: [
            { name: "STONKS!", value: 159, percentage: "1.5%" },
            { name: "Tornado", value: 187, percentage: "1.8%" },
            { name: "Shadow Figure", value: 231, percentage: "2.3%" },
            { name: "Mumeye", value: 217, percentage: "2.1%" },
            { name: "Wall Street Suit", value: 227, percentage: "2.2%" },
            { name: "Diamond Hands", value: 238, percentage: "2.3%" },
            { name: "Lock", value: 175, percentage: "1.7%" },
            { name: "Seed Phrase", value: 159, percentage: "1.5%" },
            { name: "Woof Woof Miam", value: 175, percentage: "1.7%" },
            { name: "The D", value: 184, percentage: "1.8%" }
        ],
        mythic: [
            { name: "Lazarus", value: 155, percentage: "1.5%" },
            { name: "Wall Street Guy", value: 151, percentage: "1.5%" },
            { name: "Private Key", value: 115, percentage: "1.1%" },
            { name: "Doge", value: 117, percentage: "1.1%" },
            { name: "Starknet", value: 74, percentage: "0.7%" },
            { name: "Cairo", value: 158, percentage: "1.5%" },
            { name: "Toothpaste", value: 139, percentage: "1.3%" },
            { name: "Layer Barrier", value: 104, percentage: "1.0%" },
            { name: "M-Chip", value: 108, percentage: "1.0%" }
        ],
        legendary: [
            { name: "Metacube", value: 39, percentage: "0.3%" }
        ]
    },
    Coin: {
        common: [
            { name: "Yellow", value: 3661, percentage: "36.6%" },
            { name: "Blue", value: 2903, percentage: "29.0%" }
        ],
        rare: [
            { name: "Green", value: 2095, percentage: "20.9%" }
        ],
        epic: [
            { name: "Red", value: 896, percentage: "8.9%" }
        ],
        mythic: [
            { name: "Gray", value: 445, percentage: "4.4%" }
        ],
        legendary: [
            { name: "Purple", value: 100, percentage: "1.0%" }
        ]
    },
    Background: {
        common: [
            { name: "Violet", value: 3028, percentage: "30.2%" },
            { name: "Red", value: 2510, percentage: "25.1%" }
        ],
        rare: [
            { name: "Green", value: 1903, percentage: "19.0%" },
            { name: "Blue", value: 1588, percentage: "15.8%" }
        ],
        epic: [
            { name: "Yellow", value: 653, percentage: "6.5%" }
        ],
        mythic: [
            { name: "Orange", value: 200, percentage: "2.0%" }
        ],
        legendary: [
            { name: "Magenta", value: 118, percentage: "1.1%" }
        ]
    },
    Weapon: {
        common: [
            { name: "Sword", value: 1529, percentage: "15.2%" },
            { name: "Hammer", value: 1440, percentage: "14.4%" }
        ],
        rare: [
            { name: "Double Axe", value: 1270, percentage: "12.7%" },
            { name: "Gun", value: 1180, percentage: "11.8%" },
            { name: "Scythe", value: 1046, percentage: "10.4%" },
            { name: "Kunai", value: 953, percentage: "9.5%" }
        ],
        epic: [
            { name: "TNT", value: 848, percentage: "8.4%" },
            { name: "Candy", value: 794, percentage: "7.9%" }
        ],
        mythic: [
            { name: "Hammer Future", value: 488, percentage: "4.8%" },
            { name: "Pirannah", value: 307, percentage: "3.0%" }
        ],
        legendary: [
            { name: "Unicorn", value: 145, percentage: "1.4%" }
        ]
    }
};

export const categories: Category[] = [
    { name: "All Posts", slug: null, key: "categories.all" },
    { name: "Announcements", slug: "announcements", key: "categories.announcements" },
    { name: "Guides", slug: "guides", key: "categories.guides" },
    { name: "Development", slug: "development", key: "categories.development" },
    { name: "Events", slug: "events", key: "categories.events" },
];

export const blogPosts: Record<string, BlogPost> = {
    "fidelity-week-event": {
        id: "fidelity-week-event",
        title: "Semana de Fidelidad: Recompensando a Nuestros Jugadores Más Dedicados",
        date: "2025-04-25",
        author: "The Metacube Team",
        category: "Events",
        imageUrl: "/blog/fidelityWeek.png",
        excerpt: "Descubre la Semana de Fidelidad, un evento especial donde nuestros jugadores más dedicados compartieron 1,000 tokens STRK basados en su rendimiento en la tabla de clasificación.",
        content: [
            { type: "heading", content: "Celebrando la Dedicación de los Jugadores" },
            { type: "paragraph", content: "La Semana de Fidelidad fue un evento especial diseñado para agradecer a nuestros jugadores más fieles por su continuo apoyo y dedicación a Metacube. Durante esta celebración de una semana, los mejores jugadores de la tabla de clasificación compartieron un pozo de premios de 1,000 tokens STRK como muestra de nuestro agradecimiento." },

            { type: "heading", content: "Cómo Funcionó" },
            { type: "paragraph", content: "A diferencia de nuestros otros eventos especiales que transforman el juego, la Semana de Fidelidad se centró puramente en recompensar el rendimiento excepcional dentro de las mecánicas de juego estándar. Los jugadores compitieron para lograr las puntuaciones más altas posibles durante la semana especificada, siendo las posiciones de la tabla de clasificación las que determinaron su parte del pozo de premios." },

            { type: "heading", content: "Puntuación de la Tabla de Clasificación" },
            { type: "paragraph", content: "Al igual que en nuestros otros eventos, las posiciones de la tabla de clasificación se calcularon basándose en tres factores clave:\n• El número de cubos rotos durante el evento\n• El número total de monedas recolectadas\n• Penalizaciones por muertes durante el evento" },

            { type: "heading", content: "Distribución de Premios" },
            { type: "paragraph", content: "El pozo de premios de 1,000 tokens STRK se distribuyó proporcionalmente entre los mejores jugadores de la tabla de clasificación, con jugadores de mayor rango recibiendo porciones más grandes de las recompensas. Esto creó una competencia emocionante donde cada punto importaba en la carrera por las posiciones más altas." },

            { type: "paragraph", content: "La Semana de Fidelidad demostró nuestro compromiso de reconocer y recompensar a los miembros más dedicados de nuestra comunidad. ¡Estate atento a futuros eventos de Semana de Fidelidad y otras oportunidades especiales para ganar recompensas en el universo de Metacube!" }
        ],
        relatedPosts: ["special-events-in-metacube", "crypto-rave-pulse-event", "monkecube-event"],
    },

    "special-events-in-metacube": {
        id: "special-events-in-metacube",
        title: "Eventos Especiales en Metacube: Aventuras de Tiempo Limitado",
        date: "2025-06-01",
        author: "The Metacube Team",
        category: "Events",
        imageUrl: "/blog/com_son.png",
        excerpt: "Descubre el emocionante mundo de los eventos especiales de Metacube que transforman el juego y ofrecen recompensas únicas por tiempo limitado, incluyendo tokens STRK.",
        content: [
            { type: "heading", content: "Presentando los Eventos Especiales de Metacube" },
            { type: "paragraph", content: "En Metacube, organizamos regularmente eventos especiales de tiempo limitado que transforman el universo de Metacube de formas inesperadas. Estos eventos proporcionan desafíos únicos, recompensas exclusivas incluyendo tokens STRK, y experiencias memorables que no encontrarás durante el juego normal." },

            { type: "heading", content: "Aspectos Destacados de los Eventos" },
            { type: "paragraph", content: "Nuestra comunidad ya ha experimentado algunos eventos inolvidables:" },
            { type: "paragraph", content: "• **Crypto Rave Pulse**: Un evento innovador donde Pelton Flusk usó altavoces gigantes emitiendo música rave para anular las defensas eléctricas de Metacube.\n• **Monkecube**: Una transformación total donde Metacube se convirtió en Monkecube, presentando aspectos base con temática de monos y un cambio completo de marca (incluso monkecube.com redirigía a metacube.games)." },

            { type: "heading", content: "Recompensas de los Eventos" },
            { type: "paragraph", content: "Hasta ahora, nuestros eventos han recompensado a los jugadores con **Tokens STRK** basados en su posición en la tabla de clasificación. Los eventos futuros pueden incluir otras recompensas como NFTs y aspectos especiales." },

            { type: "heading", content: "Sistema de Tabla de Clasificación STRK" },
            { type: "paragraph", content: "Durante los eventos, los jugadores compiten en una tabla de clasificación para ganar tokens STRK. Tu posición se determina por tres factores clave:\n• El número de cubos rotos durante el evento\n• El número total de monedas recolectadas\n• Penalizaciones por muertes durante el evento" },

            { type: "paragraph", content: "Consulta nuestra cobertura detallada de eventos pasados como **Monkecube** y **Crypto Rave Pulse** para tener una muestra de lo que es posible en el universo de Metacube en constante cambio. Y recuerda: ¡en un juego con una vida útil finita, cada evento especial es verdaderamente una experiencia única en la vida!" }
        ],
        relatedPosts: ["monkecube-event", "crypto-rave-pulse-event"],
    },

    "monkecube-event": {
        id: "monkecube-event",
        title: "Monkecube: Cuando los Primates se Apoderaron del Metacube",
        date: "2025-05-15",
        author: "The Metacube Team",
        category: "Events",
        imageUrl: "/blog/monke.jpg",
        excerpt: "Revive el evento Monkecube, cuando todo el Metacube fue renombrado y transformado con aspectos base de temática de monos.",
        content: [
            { type: "heading", content: "La Transformación Monkecube" },
            { type: "paragraph", content: "Durante este evento especial, Metacube experimentó una transformación completa y fue renombrado a **Monkecube**. Esto no fue solo un pequeño cambio cosmético, fue un cambio completo de marca de la experiencia del juego." },

            { type: "heading", content: "Características Principales" },
            { type: "paragraph", content: "El evento Monkecube incluyó:" },
            { type: "paragraph", content: "• **Cambio de Nombre Completo**: El juego fue oficialmente renombrado a \"Monkecube\" durante la duración del evento\n• **Redirección de Dominio**: monkecube.com redirigía a metacube.games\n• **Aspectos Base de Mono**: Todos los aspectos base de los jugadores se transformaron en avatares de mono" },

            { type: "heading", content: "Recompensas del Evento" },
            { type: "paragraph", content: "Los participantes en el evento Monkecube compitieron por **Tokens STRK**, que fueron otorgados basándose en la tabla de clasificación del evento. La tabla de clasificación rastreó el número de cubos rotos, monedas recolectadas, y aplicó penalizaciones por las muertes de los jugadores." },

            { type: "heading", content: "Reacciones de la Comunidad" },
            { type: "paragraph", content: "El evento Monkecube rápidamente se convirtió en un favorito de los fans, con la comunidad abrazando la inesperada transformación primitiva. La naturaleza alegre de Monkecube proporcionó un refrescante cambio de ritmo de la experiencia habitual de Metacube." },

            { type: "paragraph", content: "¿Participaste en el evento Monkecube? ¡Comparte tus recuerdos en nuestro canal de Discord o en los comentarios abajo!" }
        ],
        relatedPosts: ["special-events-in-metacube", "crypto-rave-pulse-event"],
    },

    "crypto-rave-pulse-event": {
        id: "crypto-rave-pulse-event",
        title: "Crypto Rave Pulse: Rompiendo las Defensas del Cubo con Sonido",
        date: "2025-04-10",
        author: "The Metacube Team",
        category: "Events",
        imageUrl: "/blog/crp.jpg",
        excerpt: "Experimenta el evento Crypto Rave Pulse, donde Pelton Flusk usó sistemas de sonido masivos y música rave para anular las defensas eléctricas del Metacube.",
        content: [
            { type: "heading", content: "Sonido vs. Defensas Eléctricas" },
            { type: "paragraph", content: "El Crypto Rave Pulse fue un evento revolucionario en el universo de Metacube. Durante este periodo, Pelton Flusk desplegó altavoces gigantes alrededor del perímetro del Metacube, emitiendo poderosa música rave específicamente calibrada para anular los sistemas de defensa eléctrica del Cubo." },

            { type: "heading", content: "Impacto en el Juego" },
            { type: "paragraph", content: "Normalmente, las defensas del Metacube causan daño a los jugadores que interactúan con ellas, aunque no impiden el movimiento. Durante el evento Crypto Rave Pulse, estas defensas fueron neutralizadas por la música, permitiendo a los jugadores navegar sin recibir daño de los mecanismos de defensa del cubo." },

            { type: "heading", content: "Banda Sonora del Evento" },
            { type: "paragraph", content: "La banda sonora completa de Crypto Rave Pulse, compuesta por el propio Pelton Flusk, está disponible en SoundCloud. Puedes escuchar todas las pistas de este evento especial en: [Crypto Rave Pulse by Pelton Flusk](https://soundcloud.com/metacubegames/sets/crypto-rave-pulse-by-pelton-flusk)." },

            { type: "heading", content: "Recompensas del Evento" },
            { type: "paragraph", content: "Los jugadores que participaron en el evento Crypto Rave Pulse compitieron por **Tokens STRK** basándose en su posición en la tabla de clasificación. La clasificación se calculó a partir del número de cubos rotos y monedas recolectadas, con penalizaciones aplicadas por muertes durante el evento." },

            { type: "paragraph", content: "El Crypto Rave Pulse demostró cómo Metacube evoluciona continuamente a través de eventos creativos de tiempo limitado que ofrecen tanto entretenimiento como recompensas valiosas." }
        ],
        relatedPosts: ["special-events-in-metacube", "monkecube-event"],
    },

    "metacube-gameplay-guide": {
        id: "metacube-gameplay-guide",
        title: "Descubre el Universo de Metacube: Guía Completa de Juego",
        date: "2025-05-07",
        author: "The Metacube Team",
        category: "Guides",
        imageUrl: "/blog/metacube_g.jpg",
        excerpt: "Sumérgete en las emocionantes mecánicas de juego de Metacube, aprende sobre la misteriosa estructura de Metacube, la moneda del juego y supera desafíos peligrosos en esta guía completa.",
        content: [
            { type: "heading", content: "Introducción a Metacube" },
            { type: "paragraph", content: "Metacube es un revolucionario juego NFT gratuito que combina la emoción de la búsqueda de tesoros, el intriga de la tecnología blockchain y la emoción de la exploración interestelar. En esta inmersiva experiencia de juego, los jugadores asumen el papel de Stove the Crypto Raver, un fanático acérrimo de las criptomonedas y asiduo de las raves interestelares. Junto con otros Stellar Scavengers, los jugadores se embarcan en una atrevida misión para desbloquear los secretos del Metacube, una bóveda celestial que contiene valiosos datos de blockchain y NFTs raros." },
            { type: "paragraph", content: "Esta guía completa te guiará a través de los elementos básicos del juego, te ayudará a entender la misteriosa estructura de Metacube, explicará el sistema de moneda del juego y te preparará para los diversos peligros y desafíos que enfrentarás en tu viaje." },

            { type: "heading", content: "Fundamentos del Juego" },
            { type: "paragraph", content: "Los jugadores comienzan su viaje en el asteroide Zerith-9, donde se encuentra el Metacube. Como Stove the Crypto Raver, deben utilizar su arma de plataforma minera para romper los cubos más pequeños que componen el Metacube. Cada cubo contiene datos de blockchain ocultos, y algunos cubos contienen codiciados NFTs. Los jugadores pueden colaborar con otros Stellar Scavengers o competir contra ellos para descubrir los datos de blockchain y NFTs más valiosos." },
            { type: "paragraph", content: "El juego combina elementos de exploración, recolección de recursos y toma de decisiones estratégicas mientras navegas por la superficie del asteroide y la compleja estructura del Metacube. Tus objetivos principales incluyen minar cubos, recolectar datos valiosos, evitar peligros y mejorar tu equipo para acceder a áreas más desafiantes." },

            { type: "heading", content: "El Metacube: Un Colosal Misterio Cripto" },
            { type: "paragraph", content: "El Metacube es el enfoque central del juego, una estructura colosal compuesta por 256x256x256 cubos individuales. Cada cubo más pequeño lleva un símbolo que representa una criptomoneda, como Bitcoin o Ethereum, o una pieza única de datos de blockchain. Los creadores del Metacube lo dotaron con defensas de IA avanzadas y peligros ocultos, haciendo del viaje para descubrir sus secretos un esfuerzo desafiante y emocionante." },
            { type: "paragraph", content: "Mientras exploras el Metacube, descubrirás varias secciones con diferentes niveles de dificultad y recompensas. Algunas áreas pueden contener NFTs raros pero están protegidas por defensas más poderosas. Entender la estructura del Metacube y planificar tu estrategia de minería en consecuencia será crucial para tu éxito." },

            { type: "heading", content: "Moneda del Juego y Mejoras" },
            { type: "paragraph", content: "A lo largo del juego, los jugadores acumulan moneda del juego rompiendo cubos y completando varios desafíos. Esta moneda, llamada \"MetaCoins\" permite a los jugadores mejorar las habilidades de Stove, incluyendo volar, correr y caminar, así como mejorar la potencia y eficiencia del arma de plataforma minera. Las mejoras son esenciales para enfrentar las defensas más formidables del Metacube y aumentar las posibilidades de descubrir NFTs raros." },
            { type: "paragraph", content: "El juego presenta seis tipos diferentes de mejoras, cada una mejorando aspectos específicos de tu experiencia de juego. Estas mejoras pueden impactar significativamente tu eficiencia de minería, capacidades de movimiento y supervivencia general en el entorno hostil de Zerith-9 y el Metacube." },

            { type: "heading", content: "Peligros y Desafíos" },
            { type: "paragraph", content: "Para crear una experiencia de juego atractiva y dinámica, los jugadores deben superar una variedad de peligros y desafíos a lo largo de su aventura:" },
            { type: "paragraph", content: "• **Contraataques de Cubos**: Algunos cubos poseen defensas poderosas y tomarán represalias si son golpeados incorrectamente, dañando a Stove y su arma de plataforma minera.\n• **Auditores Fiscales**: Ciertos cubos, cuando son destruidos, desatan auditores fiscales implacables que persiguen y acosan a los jugadores. Si la salud de un jugador llega a cero, son temporalmente bloqueados del juego, creando un sentido de urgencia y riesgo.\n• **Peligros Ambientales**: La superficie de Zerith-9 presenta desafíos únicos, incluyendo el potencial de daño por caída desde elevaciones altas y el riesgo de quedarse sin oxígeno mientras exploras el vacío del espacio.\n• **Presión de Tiempo**: Mientras los Stellar Scavengers compiten contra el tiempo para desbloquear los secretos del Metacube, los jugadores deben optimizar sus estrategias y tomar decisiones calculadas para mantenerse por delante de la competencia." },
            { type: "paragraph", content: "Al superar estos desafíos, los jugadores progresan a través del juego, adquiriendo valiosos datos de blockchain y NFTs que en última instancia determinarán su éxito en Metacube." },

            { type: "heading", content: "Explora el Universo Completo de Metacube" },
            { type: "paragraph", content: "Esta guía proporciona solo un vistazo al vasto y emocionante mundo de Metacube. Para profundizar en las mecánicas del juego, colecciones de NFT y planes de desarrollo futuros, te invitamos a consultar nuestro [whitepaper oficial de Metacube](https://metacube-1.gitbook.io/metacube-games)." },
            { type: "paragraph", content: "El whitepaper contiene información extensa sobre:" },
            { type: "paragraph", content: "• Mecánicas de juego detalladas y estrategias\n• Desglose completo de coleccionables NFT y su rareza\n• El mercado de NFT y sistema de comercio\n• Utilidad en el juego de varios activos digitales\n• Hoja de ruta de desarrollo futuro incluyendo Temporada 2 y más allá\n• Equipo detrás del desarrollo de Metacube" },
            { type: "paragraph", content: "Ya seas un jugador nuevo buscando comenzar o un Stellar Scavenger experimentado buscando estrategias avanzadas, el whitepaper proporciona valiosas perspectivas para mejorar tu experiencia en Metacube." },
        ],
        relatedPosts: ["welcome-to-our-new-blog", "nft-collectibles-guide"],
    },
    "welcome-to-our-new-blog": {
        id: "welcome-to-our-new-blog",
        title: "¡Bienvenido al Blog de Metacube!",
        date: "2025-05-07",
        author: "The Metacube Team",
        category: "Announcements",
        imageUrl: "/blog/banner_m.jfif",
        excerpt: "¡Estamos emocionados de lanzar nuestro nuevo blog! Descubre actualizaciones, guías, destacados de la comunidad y perspectivas sobre el mundo de Metacube.",
        content: [
            { type: "heading", content: "Un Nuevo Centro para Noticias de Metacube" },
            { type: "paragraph", content: "¡Bienvenidos, Metacubers! Estamos encantados de lanzar oficialmente el **Blog de Metacube**, tu nuevo centro principal para todo lo relacionado con nuestro universo en constante expansión. Aquí encontrarás las últimas noticias, actualizaciones de desarrollo, guías de juego detalladas, destacados de la comunidad y mucho más." },
            { type: "paragraph", content: "Nuestro objetivo es proporcionarte una línea directa con el equipo y un lugar para explorar las profundidades de Metacube. Ya seas un *jugador experimentado* o estés comenzando tu viaje, esperamos que este blog se convierta en un recurso valioso para ti." },
            { type: "heading", content: "Qué Esperar" },
            { type: "paragraph", content: "• **Últimos Anuncios:** Sé el primero en conocer sobre nuevas características, próximos eventos y actualizaciones importantes.\n• **Perspectivas de los Desarrolladores:** Obtén una mirada entre bastidores de nuestro proceso de desarrollo, desafíos y planes futuros.\n• **Guías y Consejos del Juego:** Domina Metacube con guías detalladas, estrategias y consejos tanto del equipo como de jugadores experimentados.\n• **Destacados de la Comunidad:** Mostraremos creaciones increíbles, historias de jugadores y eventos organizados por la comunidad. ¡Comparte tu contenido con nosotros!\n• **Historia y Narrativa:** Sumérgete más profundamente en el mundo de Metacube y su rica narrativa." },
            { type: "paragraph", content: "Estamos emocionados de comenzar este nuevo capítulo contigo. ¡Mantente atento para actualizaciones regulares, y no dudes en compartir tus comentarios y sugerencias en nuestros canales de la comunidad!" },
        ],
        relatedPosts: ["introducing-community-streams", "nft-collectibles-guide"],
    },
    "introducing-community-streams": {
        id: "introducing-community-streams",
        title: "Presentando Transmisiones de la Comunidad: ¡Comparte tus Momentos de Metacube!",
        date: "2025-05-07",
        author: "The Metacube Team",
        category: "Announcements",
        imageUrl: "/blog/community_b.jpg",
        excerpt: "¡Descubre nuestra nueva sección de Transmisiones de la Comunidad! Observa juego en vivo, comparte tus propias transmisiones y conecta con otros Metacubers.",
        content: [
            { type: "heading", content: "Brilla con tu Juego" },
            { type: "paragraph", content: "Estamos increíblemente emocionados de anunciar el lanzamiento de nuestra nueva sección **Transmisiones de la Comunidad** en el sitio web de Metacube. Este es tu espacio dedicado para descubrir juego en vivo de otros Metacubers y, más importante aún, para compartir tus propias aventuras de Metacube con el mundo." },
            { type: "paragraph", content: "Ya seas un streamer experimentado o solo quieras compartir un momento genial, nuestra página de Transmisiones de la Comunidad lo hace fácil. Puedes enviar enlaces a tus transmisiones en vivo o VODs de plataformas populares como [YouTube](https://youtube.com), [Twitch](https://twitch.tv), y [Kick](https://kick.com)." },
            { type: "heading", content: "Qué Encontrarás" },
            { type: "paragraph", content: "• **Transmisiones en Vivo Destacadas:** Destacaremos transmisiones en vivo en curso directamente en la página, facilitando saltar a la acción.\n• **Cuadrícula de Videos de la Comunidad:** Explora una colección de videos y transmisiones pasadas enviadas por jugadores. Descubre nuevas estrategias, construcciones impresionantes, o simplemente disfruta viendo a otros explorar Metacube.\n• **Envío Fácil:** Un formulario simple te permite enviar tu enlace de video o transmisión, agregar una descripción e incluso especificar el idioma de tu contenido." },
            { type: "paragraph", content: "El objetivo es fomentar un espacio vibrante e interactivo donde los jugadores puedan conectar, aprender unos de otros y mostrar las diversas formas en que se experimenta Metacube. ¡No podemos esperar para ver tu contenido!" },
            { type: "paragraph", content: "¡Dirígete a la página de Transmisiones de la Comunidad ahora para echarle un vistazo y enviar tu primera transmisión o video!" },
        ],
        relatedPosts: ["welcome-to-our-new-blog", "nft-collectibles-guide"],
    },
    "nft-collectibles-guide": {
        id: "nft-collectibles-guide",
        title: "La Guía Definitiva de Coleccionables NFT en Metacube",
        date: "2025-05-07",
        author: "The Metacube Team",
        category: "Guides",
        imageUrl: "/blog/marketnft.png",
        excerpt: "Desbloquea los secretos de los coleccionables NFT en Metacube. Esta guía cubre rareza, rasgos y cómo aprovechar al máximo tus activos digitales.",
        content: [
            { type: "heading", content: "Entendiendo los Niveles de Rareza" },
            { type: "paragraph", content: "En Metacube, los coleccionables NFT vienen en varios niveles de rareza, cada uno influenciando su singularidad y valor potencial. Estos niveles son típicamente: **Común, Raro, Épico, Mítico y Legendario**. Cuanto más raro sea el artículo, más distintivos serán sus atributos y apariencia." },
            { type: "paragraph", content: "• Común: Peso 9+\n• Raro: Peso 7-8\n• Épico: Peso 5-6\n• Mítico: Peso 2-4\n• Legendario: Peso 1" },
            { type: "image", content: "/blog/raritynft.png", alt: "Gráfico de Distribución de Rareza de NFT" },
            { type: "paragraph", content: "La distribución de estas rarezas se gestiona cuidadosamente para garantizar una experiencia de colección equilibrada y atractiva." },
            { type: "heading", content: "Rasgos y Atributos Clave" },
            { type: "paragraph", content: "Cada coleccionable NFT posee un conjunto de rasgos que definen sus características. Estos pueden variar desde elementos visuales como *color* y *diseño* hasta atributos funcionales que pueden afectar el juego o la utilidad dentro del ecosistema de Metacube." },
            { type: "paragraph", content: "Entender estos rasgos es crucial para evaluar el valor y el potencial de un NFT. Los coleccionistas a menudo buscan artículos con combinaciones de rasgos raros o aquellos que complementan su estilo de juego." },
        ],
        relatedPosts: ["welcome-to-our-new-blog", "metacube-gameplay-guide"],
    },
    "starknet-transactions-batcher": {
        id: "starknet-transactions-batcher",
        title: "Un procesador por lotes de transacciones en Starknet",
        date: "2025-05-07",
        author: "The Metacube Team",
        category: "Development",
        imageUrl: "/blog/batcher_b.jfif",
        excerpt: "Aprende sobre el procesador por lotes de transacciones utilizado en Metacube para enviar NFTs ganados por los jugadores al instante, con una implementación detallada en Go.",
        content: [
            { type: "heading", content: "Resumen" },
            { type: "paragraph", content: "Este artículo presenta el procesador por lotes de transacciones utilizado en Metacube para enviar NFTs ganados por los jugadores al instante. Explica la arquitectura escalable basada en actores del procesador y proporciona una implementación detallada en Go. Todos los fragmentos de código están disponibles en el [repositorio de GitHub](https://github.com/metacube-games/starknet-batcher) asociado." },
            { type: "paragraph", content: "Esta publicación se basa en el artículo publicado originalmente en [dev.to](https://dev.to/bastienfaivre/a-starknet-transactions-batcher-1hpk) por Bastien Faivre." },
            { type: "heading", content: "Arquitectura" },
            { type: "paragraph", content: "El Batcher se compone de dos actores principales:" },
            { type: "paragraph", content: "• **El Builder** recibe las transacciones, las agrupa en una sola transacción multicall y la envía al actor Sender.\n• **El Sender** finaliza la transacción con campos apropiados (nonce, tarifa máxima, etc.), la firma, la envía a la red Starknet y monitorea su estado." },
            { type: "paragraph", content: "Esta separación de actores permite un procesador escalable y eficiente. El builder prepara las transacciones mientras el sender las envía, permitiendo un flujo continuo y eficiente de transacciones." },
            { type: "image", content: "/blog/architecture_graph.webp", alt: "Arquitectura del Batcher de Starknet" },
            { type: "heading", content: "Implementación" },
            { type: "paragraph", content: "La siguiente implementación es específica para Go, pero los conceptos pueden adaptarse fácilmente a otros lenguajes, ya que las funcionalidades siguen siendo las mismas. Además, ten en cuenta que esta implementación es específica para enviar NFTs del mismo contrato. Sin embargo, se menciona un enfoque más genérico más adelante en el artículo. Por último, el código se basa en la [biblioteca starknet.go](https://github.com/NethermindEth/starknet.go) desarrollada por Nethermind." },
            { type: "paragraph", content: "Comencemos con el `Batcher` en sí:" },
            {
                type: "code",
                language: "go",
                content: 'type Batcher struct {\n    accnt           *account.Account\n    contractAddress *felt.Felt\n    maxSize         int\n    inChan          <-chan []string\n    failChan        chan<- []string\n}'
            },
            { type: "paragraph", content: "El Batcher ejecuta tanto los actores `Builder` como `Sender` concurrentemente:" },
            {
                type: "code",
                language: "go",
                content: 'type TxnDataPair struct {\n    Txn  rpc.BroadcastInvokev1Txn\n    Data [][]string\n}\n\nfunc (b *Batcher) Run() {\n    txnDataPairChan := make(chan TxnDataPair)\n\n    go b.runBuildActor(txnDataPairChan)\n    go b.runSendActor(txnDataPairChan)\n}'
            },
            { type: "heading", content: "Builder" },
            { type: "paragraph", content: "Analicemos el actor Build. Ten en cuenta que el código se simplifica para una mejor legibilidad (código completo disponible en [GitHub](https://github.com/metacube-games/starknet-batcher/))." },
            {
                type: "code",
                language: "go",
                content: '// This function builds a function call from the transaction data.\nfunc (b *Batcher) buildFunctionCall(data []string) (*rpc.FunctionCall, error) {\n    // Parse the recipient address\n    toAddressInFelt, err := utils.HexToFelt(data[0])\n    if err != nil {\n        // ... error handling ...\n    }\n\n    // Parse the NFT ID\n    nftID, err := strconv.Atoi(data[1])\n    if err != nil {\n        // ... error handling ...\n    }\n\n    // The entry point is a standard ERC721 function\n    // https://docs.openzeppelin.com/contracts-cairo/0.20.0/erc721\n    return &rpc.FunctionCall{\n        ContractAddress: b.contractAddress,\n        EntryPointSelector: utils.GetSelectorFromNameFelt(\n            "safe_transfer_from",\n        ),\n        Calldata: []*felt.Felt{\n            b.accnt.AccountAddress, // from\n            toAddressInFelt, // to\n            new(felt.Felt).SetUint64(uint64(nftID)), // NFT ID\n            new(felt.Felt).SetUint64(0), // data -> None\n            new(felt.Felt).SetUint64(0), // extra data -> None\n        },\n    }, nil\n}\n\n// This function builds the batch transaction from the function calls.\nfunc (b *Batcher) buildBatchTransaction(functionCalls []rpc.FunctionCall) (rpc.BroadcastInvokev1Txn, error) {\n    // Format the calldata (i.e., the function calls)\n    calldata, err := b.accnt.FmtCalldata(functionCalls)\n    if err != nil {\n        // ... error handling ...\n    }\n\n    return rpc.BroadcastInvokev1Txn{\n        InvokeTxnV1: rpc.InvokeTxnV1{\n            MaxFee:        new(felt.Felt).SetUint64(MAX_FEE), // Define MAX_FEE appropriately\n            Version:       rpc.TransactionV1,\n            Nonce:         new(felt.Felt).SetUint64(0), // Will be set by the send actor\n            Type:          rpc.TransactionType_Invoke,\n            SenderAddress: b.accnt.AccountAddress,\n            Calldata:      calldata,\n        },\n    }, nil\n}\n\n// Actual Build actor event loop\nfunc (b *Batcher) runBuildActor(txnDataPairChan chan<- TxnDataPair) {\n    size := 0\n    functionCalls := make([]rpc.FunctionCall, 0, b.maxSize)\n    currentData := make([][]string, 0, b.maxSize)\n    var WAITING_TIME = 5 * time.Second // Example waiting time\n\n    for {\n        trigger := false\n        select {\n        case data, ok := <-b.inChan:\n            if !ok {\n                // Channel closed, handle shutdown\n                return\n            }\n            functionCall, err := b.buildFunctionCall(data)\n            if err != nil {\n                // Handle error, maybe send to failChan\n                continue\n            }\n            functionCalls = append(functionCalls, *functionCall)\n            size++\n            currentData = append(currentData, data)\n            if size >= b.maxSize {\n                trigger = true\n            }\n        case <-time.After(WAITING_TIME):\n            if size > 0 {\n                trigger = true\n            }\n        }\n\n        if trigger {\n            builtTxn, err := b.buildBatchTransaction(functionCalls)\n            if err != nil {\n                // Handle error, maybe send all in currentData to failChan\n            } else {\n                txnDataPairChan <- TxnDataPair{\n                    Txn:  builtTxn,\n                    Data: currentData,\n                }\n            }\n            size = 0\n            functionCalls = make([]rpc.FunctionCall, 0, b.maxSize)\n            currentData = make([][]string, 0, b.maxSize)\n        }\n    }\n}'
            },
            { type: "heading", content: "Sender" },
            { type: "paragraph", content: "Analicemos ahora el actor Sender. Ten en cuenta que el código se simplifica para una mejor legibilidad (código completo disponible en [GitHub](https://github.com/metacube-games/starknet-batcher/))." },
            {
                type: "code",
                language: "go",
                content: '// Actual Send actor event loop\nfunc (b *Batcher) runSendActor(txnDataPairChan <-chan TxnDataPair) {\n    oldNonce := new(felt.Felt).SetUint64(0)\n\n    for {\n        txnDataPair, ok := <-txnDataPairChan\n        if !ok {\n            // Channel closed, handle shutdown\n            return\n        }\n        txn := txnDataPair.Txn\n        data := txnDataPair.Data // To send to failChan if needed\n\n        nonce, err := b.accnt.Nonce(\n            context.Background(),\n            rpc.BlockID{Tag: "latest"},\n            b.accnt.AccountAddress,\n        )\n        if err != nil {\n            // Handle error, send data to failChan\n            continue\n        }\n\n        if nonce.Cmp(oldNonce) <= 0 {\n            nonce.Add(oldNonce, new(felt.Felt).SetUint64(1))\n        }\n\n        txn.InvokeTxnV1.Nonce = nonce\n\n        err = b.accnt.SignInvokeTransaction(\n            context.Background(),\n            &txn.InvokeTxnV1,\n        )\n        if err != nil {\n            // Handle error, send data to failChan\n            continue\n        }\n\n        // Optional: Estimate fee\n        // fee, err := b.accnt.EstimateFee(...)\n        // if err != nil { ... }\n        // if fee > MAX_ACCEPTABLE_FEE { ... re-sign if MaxFee changed ... }\n\n        resp, err := b.accnt.SendTransaction(\n            context.Background(),\n            &txn,\n        )\n        if err != nil {\n            // Handle error, send data to failChan\n            continue\n        }\n\n    statusLoop:\n        for {\n            time.Sleep(time.Second * 5) // Wait before checking status\n            txStatus, err := b.accnt.GetTransactionStatus(\n                context.Background(),\n                resp.TransactionHash,\n            )\n            if err != nil {\n                // Log error, maybe retry or send to failChan after X retries\n                continue\n            }\n\n            switch txStatus.ExecutionStatus {\n            case rpc.TxnExecutionStatusSUCCEEDED:\n                oldNonce = nonce\n                // Successfully sent, log or notify\n                break statusLoop\n            case rpc.TxnExecutionStatusREVERTED:\n                oldNonce = nonce // Nonce is consumed even on revert\n                // Send data to failChan\n                break statusLoop\n            default: // PENDING, etc.\n            }\n\n            switch txStatus.FinalityStatus {\n            case rpc.TxnStatus_Received:\n                continue\n            case rpc.TxnStatus_Accepted_On_L2, rpc.TxnStatus_Accepted_On_L1:\n                oldNonce = nonce\n                // Finalized, log or notify\n                break statusLoop\n            case rpc.TxnStatus_Rejected:\n                // Send data to failChan (nonce might not be consumed, check Starknet docs)\n                break statusLoop\n            default:\n            }\n        }\n    }\n}'
            },
            { type: "heading", content: "Hacia un procesador por lotes genérico" },
            { type: "paragraph", content: "El procesador por lotes presentado es específico para enviar NFTs del mismo contrato. Sin embargo, la arquitectura puede adaptarse fácilmente para enviar cualquier tipo de transacción.\n\nPrimero, los datos de transacción enviados al Batcher deben ser más genéricos y, por lo tanto, contener más información. Deben contener la dirección del contrato, el selector del punto de entrada y los datos de llamada. La función `buildFunctionCall` debe entonces adaptarse para analizar esta información.\n\nUno podría ir un paso más allá haciendo que la cuenta del remitente sea genérica. Esto requeriría más refactorización, ya que las transacciones deben procesarse por lotes por cuenta de remitente. Sin embargo, es factible y permitiría un procesador por lotes más versátil.\n\nSin embargo, recuerda que **la optimización prematura es la raíz de todo mal**. Por lo tanto, si solo necesitas enviar NFTs o un token específico como ETH o STRK, el procesador por lotes presentado es más que suficiente." },
            { type: "heading", content: "Herramienta CLI" },
            { type: "paragraph", content: "El código del repositorio se puede usar como una herramienta CLI para enviar un montón de NFTs por lotes. La herramienta es fácil de usar, y deberías poder adaptarla a tus necesidades después de leer este artículo. Por favor, consulta el [README](https://github.com/metacube-games/starknet-batcher/) para más información." },
            { type: "heading", content: "Conclusión" },
            { type: "paragraph", content: "Espero que este artículo te haya ayudado a entender mejor cómo Metacube envía NFTs a sus jugadores. El procesador por lotes es un componente clave de la infraestructura, y estamos felices de compartirlo con la comunidad. Si tienes alguna pregunta o comentario, no dudes en comentar o contactarme. ¡Gracias por leer!" },
            { type: "paragraph", content: "Para más información, consulta el [artículo original en dev.to](https://dev.to/bastienfaivre/a-starknet-transactions-batcher-1hpk) y el [repositorio de GitHub](https://github.com/metacube-games/starknet-batcher)." }
        ],
        relatedPosts: ["starknet-signatures-guide"],
    },
    "starknet-signatures-guide": {
        id: "starknet-signatures-guide",
        title: "Una guía sobre firmas en Starknet",
        date: "2025-05-07",
        author: "The Metacube Team",
        category: "Development",
        imageUrl: "/blog/signatures_b.jfif",
        excerpt: "Aprende sobre el proceso de firmar y verificar firmas en Starknet, con ejemplos de código en TypeScript y Go.",
        content: [
            { type: "heading", content: "Resumen" },
            { type: "paragraph", content: "Este artículo describe el proceso de firmar y verificar una firma en Starknet. Comienza introduciendo la Abstracción de Cuentas y cómo modifica la verificación de firmas en comparación con blockchains tradicionales como Ethereum. Luego proporciona ejemplos de código completos en TypeScript y Go para firmar un mensaje y verificar una firma utilizando dos métodos disponibles en Starknet: usando la clave pública del usuario y usando la dirección de cuenta del usuario." },
            { type: "paragraph", content: "Esta publicación se basa en el artículo publicado originalmente en [dev.to](https://dev.to/bastienfaivre/a-guide-on-starknet-signatures-a3m) por Bastien Faivre." },
            { type: "heading", content: "Abstracción de Cuentas" },
            { type: "paragraph", content: "La Abstracción de Cuentas es una característica central de Starknet que cambia fundamentalmente cómo funcionan las cuentas en comparación con cadenas como Ethereum. En Starknet, las cuentas son contratos inteligentes que pueden implementar lógica arbitraria para la validación de transacciones. Esto significa que diferentes contratos de cuenta pueden implementar diferentes métodos de verificación de firmas. Aunque la mayoría de las cuentas de Starknet siguen un estándar para la verificación de firmas, es esencial entender que el contrato de cuenta en sí define la lógica de validación." },
            { type: "heading", content: "Firmar un mensaje" },
            { type: "paragraph", content: "Al firmar un mensaje en Starknet, primero necesitas obtener una clave privada y su cuenta correspondiente. Hay diferentes formas de hacerlo dependiendo del lenguaje y la biblioteca utilizada. En TypeScript, puedes usar una biblioteca como `starknet` o `starknet.js`. En Go, puedes usar la biblioteca `starknet.go` desarrollada por Nethermind." },
            { type: "paragraph", content: "Aquí hay un ejemplo de firmar un mensaje en TypeScript:" },
            {
                type: "code",
                language: "typescript",
                content: 'import { Signature, constants, ec, hash, stark } from "starknet";\n\n// Generate a private key (usually you would use a secure storage method)\nconst privateKey = stark.randomAddress();\n\n// Get the public key from the private key\nconst publicKey = ec.starkCurve.getStarkKey(privateKey);\n\n// The message to sign\nconst message = "Hello, Starknet!";\n\n// Hash the message\nconst messageHash = hash.starknetKeccak(message);\n\n// Sign the message hash\nconst signature = ec.starkCurve.sign(messageHash, privateKey);\n\n// The signature is an array of two elements: r and s\nconsole.log("Signature:", signature);'
            },
            { type: "heading", content: "Verificar una firma usando la clave pública" },
            { type: "paragraph", content: "Verificar una firma usando la clave pública es sencillo en la mayoría de las plataformas blockchain. En Starknet, puedes verificar una firma usando la clave pública del firmante con código como este:" },
            {
                type: "code",
                language: "typescript",
                content: '// Verify the signature using the public key\nconst isValid = ec.starkCurve.verify(messageHash, signature, publicKey);\n\nconsole.log("Is the signature valid?", isValid);'
            },
            { type: "heading", content: "Verificar una firma usando la dirección de cuenta" },
            { type: "paragraph", content: "En Starknet, debido a la Abstracción de Cuentas, a veces necesitas verificar una firma usando la dirección de cuenta del firmante en lugar de su clave pública. Esto requiere llamar al método `is_valid_signature` en el contrato de cuenta. (Nota: El artículo original menciona `isPrefixedMessageValid`, pero los contratos de cuenta estándar a menudo usan `is_valid_signature`. El método exacto puede variar.)" },
            {
                type: "code",
                language: "typescript",
                content: 'import { Account, Provider, constants, stark, Signature } from "starknet";\n\n// Initialize a provider to connect to Starknet\nconst provider = new Provider({ sequencer: { network: constants.NetworkName.SN_MAIN } }); // Or your desired network\n\n// Assume signerAddress, pkForSigner, messageHash and signature are defined\n// const signerAddress = "0x123...";\n// const pkForSigner = "0x456..."; // or connect with a wallet signer\n// const messageHash = "0x789..."; \n// const signature: Signature = ["0xabc...", "0xdef..."]; \n\nasync function verifySignatureUsingAccount(signerAddress: string, pkForSigner: string, msgHash: string, sig: Signature) {\n  const account = new Account(provider, signerAddress, pkForSigner);\n  try {\n    const result = await account.call("is_valid_signature", [\n        msgHash,          // hash\n        sig.length.toString(), // signature_len\n        ...sig             // signature (r, s)\n    ]);\n    // For Ready Wallet/Braavos standard accounts, a single felt "0x1" (VALID_SIGNATURE) is returned on success.\n    // Cairo0 contracts might return an array if the function has multiple return values.\n    // Check the specific account contract for exact return format if issues arise.\n    const isValid = Array.isArray(result) ? result[0] === "0x1" : result.result[0] === "0x1";\n    console.log("Is the signature valid (using account)?", isValid);\n    return isValid;\n  } catch (error) {\n    console.error("Error verifying signature using account:", error);\n    return false;\n  }\n}\n\n// Example usage (ensure variables are set)\n// verifySignatureUsingAccount(signerAddress, pkForSigner, messageHash, signature);'
            },
            { type: "heading", content: "Trabajar con una billetera (Ready Wallet, Braavos, etc.)" },
            { type: "paragraph", content: "Al trabajar con una billetera como Ready Wallet o Braavos, típicamente no tendrás acceso directo a la clave privada del usuario. En su lugar, necesitarás usar la interfaz de la billetera para solicitar al usuario que firme un mensaje." },
            {
                type: "code",
                language: "typescript",
                content: '// This is a conceptual example, actual implementation depends on the wallet connector library (e.g., starknet-react, get-starknet)\nasync function signMessageWithWallet(wallet: any, message: string) { // Use specific wallet type from your library\n  try {\n    // The method might be `signMessage`, `personalSign`, or similar\n    // The exact structure for `typedData` or `message` depends on the wallet and standard (e.g., EIP-712 for Starknet)\n    const signature = await wallet.account.signMessage({ message }); // Example structure, might need TypedData for some wallets\n    console.log("Signature from wallet:", signature);\n    return signature;\n  } catch (error) {\n    console.error("Error signing message with wallet:", error);\n    return null;\n  }\n}'
            },
            { type: "heading", content: "Conclusión" },
            { type: "paragraph", content: "El modelo de Abstracción de Cuentas de Starknet proporciona flexibilidad para la verificación de firmas pero requiere entender las diferencias del modelo tradicional de firmas de blockchain. Siguiendo los ejemplos proporcionados, deberías poder firmar mensajes y verificar firmas efectivamente en tus aplicaciones de Starknet. Recuerda que los detalles específicos de implementación pueden variar dependiendo del proveedor de billetera y el contrato de cuenta que se esté usando. Siempre consulta la documentación específica de la billetera o contrato de cuenta con el que estés trabajando." },
            { type: "paragraph", content: "Para más información, consulta el [artículo original en dev.to](https://dev.to/bastienfaivre/a-guide-on-starknet-signatures-a3m) por Bastien Faivre." }
        ],
        relatedPosts: ["starknet-transactions-batcher"],
    }
};

/**
 * Filters blog posts by category slug
 * @param categorySlug - The category slug to filter by, or null for all posts
 * @returns Array of filtered blog posts
 */
export const getBlogPostsByCategory = (categorySlug: string | null): BlogPost[] => {
    if (!categorySlug) {
        return Object.values(blogPosts);
    }
    return Object.values(blogPosts).filter(post => post.category.toLowerCase().replace(/\s+/g, '-') === categorySlug);
};

/**
 * Gets a blog post by its ID
 * @param id - The unique identifier of the blog post
 * @returns The blog post if found, undefined otherwise
 */
export const getPostById = (id: string): BlogPost | undefined => {
    return blogPosts[id];
};

/**
 * Gets all blog posts
 * @returns Array of all blog posts
 */
export const getAllBlogPosts = (): BlogPost[] => {
    return Object.values(blogPosts);
};

// Helper function to get the translation key for a category by its name
export const getCategoryKeyByName = (categoryName: string): string => {
    const category = categories.find(
        c => c.name.toLowerCase() === categoryName.toLowerCase()
    );
    return category ? category.key : 'categories.all';
};
