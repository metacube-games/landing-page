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
        title: "Treue-Woche: Belohnung unserer treuesten Spieler",
        date: "2025-04-25",
        author: "The Metacube Team",
        category: "Events",
        imageUrl: "/blog/fidelityWeek.png",
        excerpt: "Erfahren Sie mehr über die Treue-Woche, ein besonderes Event, bei dem unsere treuesten Spieler 1.000 STRK-Token basierend auf ihrer Ranglisten-Performance teilten.",
        content: [
            { type: "heading", content: "Würdigung der Spieler-Hingabe" },
            { type: "paragraph", content: "Die Treue-Woche war ein besonderes Event, das darauf ausgelegt war, unseren treuesten Spielern für ihre anhaltende Unterstützung und Hingabe zu Metacube zu danken. Während dieser einwöchigen Feier teilten sich Top-Performer auf der Rangliste einen Preispool von 1.000 STRK-Token als Zeichen unserer Wertschätzung." },

            { type: "heading", content: "Wie es funktionierte" },
            { type: "paragraph", content: "Im Gegensatz zu unseren anderen besonderen Events, die das Gameplay transformieren, konzentrierte sich die Treue-Woche ausschließlich darauf, außergewöhnliche Leistungen innerhalb der Standard-Spielmechanik zu belohnen. Spieler kämpften darum, während der angegebenen Woche die höchstmöglichen Punktzahlen zu erreichen, wobei die Ranglisten-Platzierungen ihren Anteil am Preispool bestimmten." },

            { type: "heading", content: "Ranglisten-Bewertung" },
            { type: "paragraph", content: "Wie bei unseren anderen Events wurde die Ranglisten-Position anhand von drei Schlüsselfaktoren berechnet:\n• Die Anzahl der während des Events zerstörten Würfel\n• Die Gesamtzahl der gesammelten Münzen\n• Strafen für Todesfälle während des Events" },

            { type: "heading", content: "Preisverteilung" },
            { type: "paragraph", content: "Der Preispool von 1.000 STRK-Token wurde proportional unter den Top-Performern auf der Rangliste verteilt, wobei höher platzierte Spieler größere Anteile der Belohnungen erhielten. Dies schuf einen spannenden Wettbewerb, bei dem jeder Punkt im Rennen um die Top-Positionen zählte." },

            { type: "paragraph", content: "Die Treue-Woche demonstrierte unser Engagement, die engagiertesten Mitglieder unserer Community anzuerkennen und zu belohnen. Halten Sie Ausschau nach zukünftigen Treue-Wochen-Events und anderen besonderen Gelegenheiten, um Belohnungen im Metacube-Universum zu verdienen!" }
        ],
        relatedPosts: ["special-events-in-metacube", "crypto-rave-pulse-event", "monkecube-event"],
    },

    "special-events-in-metacube": {
        id: "special-events-in-metacube",
        title: "Spezielle Events in Metacube: Zeitlich begrenzte Abenteuer",
        date: "2025-06-01",
        author: "The Metacube Team",
        category: "Events",
        imageUrl: "/blog/com_son.png",
        excerpt: "Entdecken Sie die aufregende Welt der speziellen Events von Metacube, die das Gameplay transformieren und für begrenzte Zeit einzigartige Belohnungen bieten, einschließlich STRK-Token.",
        content: [
            { type: "heading", content: "Vorstellung der speziellen Metacube-Events" },
            { type: "paragraph", content: "Bei Metacube veranstalten wir regelmäßig spezielle, zeitlich begrenzte Events, die das Metacube-Universum auf unerwartete Weise transformieren. Diese Events bieten einzigartige Herausforderungen, exklusive Belohnungen einschließlich STRK-Token und unvergessliche Erfahrungen, die Sie während des regulären Gameplays nicht finden werden." },

            { type: "heading", content: "Event-Highlights" },
            { type: "paragraph", content: "Unsere Community hat bereits einige unvergessliche Events erlebt:" },
            { type: "paragraph", content: "• **Crypto Rave Pulse**: Ein innovatives Event, bei dem Pelton Flusk riesige Lautsprecher einsetzte, die Rave-Musik ausstrahlten, um Metacubes elektrische Verteidigung zu neutralisieren.\n• **Monkecube**: Eine totale Transformation, bei der Metacube zu Monkecube wurde, mit Affen-Basis-Skins und einem kompletten Rebranding (sogar monkecube.com leitete zu metacube.games weiter)." },

            { type: "heading", content: "Event-Belohnungen" },
            { type: "paragraph", content: "Bisher haben unsere Events Spieler mit **STRK-Token** basierend auf ihrer Ranglisten-Position belohnt. Zukünftige Events könnten auch andere Belohnungen wie NFTs und spezielle Skins beinhalten." },

            { type: "heading", content: "STRK-Ranglisten-System" },
            { type: "paragraph", content: "Während Events konkurrieren Spieler auf einer Rangliste, um STRK-Token zu verdienen. Ihre Position wird durch drei Schlüsselfaktoren bestimmt:\n• Die Anzahl der während des Events zerstörten Würfel\n• Die Gesamtzahl der gesammelten Münzen\n• Strafen für Todesfälle während des Events" },

            { type: "paragraph", content: "Schauen Sie sich unsere detaillierte Berichterstattung über vergangene Events wie **Monkecube** und **Crypto Rave Pulse** an, um einen Eindruck davon zu bekommen, was im sich ständig verändernden Metacube-Universum möglich ist. Und denken Sie daran – in einem Spiel mit begrenzter Lebensdauer ist jedes besondere Event wirklich eine einmalige Erfahrung!" }
        ],
        relatedPosts: ["monkecube-event", "crypto-rave-pulse-event"],
    },

    "monkecube-event": {
        id: "monkecube-event",
        title: "Monkecube: Als Primaten den Metacube übernahmen",
        date: "2025-05-15",
        author: "The Metacube Team",
        category: "Events",
        imageUrl: "/blog/monke.jpg",
        excerpt: "Erleben Sie das Monkecube-Event noch einmal, als der gesamte Metacube umbenannt und mit Affen-Basis-Skins transformiert wurde.",
        content: [
            { type: "heading", content: "Die Monkecube-Transformation" },
            { type: "paragraph", content: "Während dieses besonderen Events durchlief Metacube eine komplette Transformation und wurde in **Monkecube** umbenannt. Dies war nicht nur eine kleine kosmetische Änderung – es war ein vollständiges Rebranding des Spielerlebnisses." },

            { type: "heading", content: "Hauptmerkmale" },
            { type: "paragraph", content: "Das Monkecube-Event umfasste:" },
            { type: "paragraph", content: "• **Komplette Umbenennung**: Das Spiel wurde für die Dauer des Events offiziell in \"Monkecube\" umbenannt\n• **Domain-Weiterleitung**: monkecube.com leitete zu metacube.games weiter\n• **Affen-Basis-Skins**: Alle Spieler-Basis-Skins wurden in Affen-Avatare transformiert" },

            { type: "heading", content: "Event-Belohnungen" },
            { type: "paragraph", content: "Teilnehmer am Monkecube-Event konkurrierten um **STRK-Token**, die basierend auf der Event-Rangliste vergeben wurden. Die Rangliste verfolgte die Anzahl der zerstörten Würfel, gesammelten Münzen und wendete Strafen für Spielertode an." },

            { type: "heading", content: "Community-Reaktionen" },
            { type: "paragraph", content: "Das Monkecube-Event wurde schnell zu einem Fan-Favoriten, wobei die Community die unerwartete urzeitliche Transformation annahm. Die unbeschwerte Natur von Monkecube bot eine erfrischende Abwechslung zum üblichen Metacube-Erlebnis." },

            { type: "paragraph", content: "Haben Sie am Monkecube-Event teilgenommen? Teilen Sie Ihre Erinnerungen in unserem Discord-Kanal oder in den Kommentaren unten!" }
        ],
        relatedPosts: ["special-events-in-metacube", "crypto-rave-pulse-event"],
    },

    "crypto-rave-pulse-event": {
        id: "crypto-rave-pulse-event",
        title: "Crypto Rave Pulse: Die Würfel-Verteidigung mit Sound brechen",
        date: "2025-04-10",
        author: "The Metacube Team",
        category: "Events",
        imageUrl: "/blog/crp.jpg",
        excerpt: "Erleben Sie das Crypto Rave Pulse Event, bei dem Pelton Flusk massive Soundsysteme und Rave-Musik einsetzte, um die elektrische Verteidigung des Metacube zu neutralisieren.",
        content: [
            { type: "heading", content: "Sound gegen elektrische Verteidigung" },
            { type: "paragraph", content: "Der Crypto Rave Pulse war ein bahnbrechendes Event im Metacube-Universum. Während dieser Zeit setzte Pelton Flusk riesige Lautsprecher rund um den Metacube-Perimeter ein, die kraftvolle Rave-Musik ausstrahlten, die speziell kalibriert war, um die elektrischen Verteidigungssysteme des Würfels zu neutralisieren." },

            { type: "heading", content: "Gameplay-Auswirkungen" },
            { type: "paragraph", content: "Normalerweise fügen die Verteidigungen des Metacube Schaden zu, wenn Spieler mit ihnen interagieren, obwohl sie Bewegungen nicht verhindern. Während des Crypto Rave Pulse Events wurden diese Verteidigungen durch die Musik neutralisiert, was es Spielern ermöglichte, ohne Schaden durch die Verteidigungsmechanismen des Würfels zu navigieren." },

            { type: "heading", content: "Event-Soundtrack" },
            { type: "paragraph", content: "Der komplette Crypto Rave Pulse Soundtrack, komponiert von Pelton Flusk selbst, ist auf SoundCloud verfügbar. Sie können alle Tracks dieses besonderen Events anhören unter: [Crypto Rave Pulse by Pelton Flusk](https://soundcloud.com/metacubegames/sets/crypto-rave-pulse-by-pelton-flusk)." },

            { type: "heading", content: "Event-Belohnungen" },
            { type: "paragraph", content: "Spieler, die am Crypto Rave Pulse Event teilnahmen, konkurrierten um **STRK-Token** basierend auf ihrer Ranglisten-Position. Das Ranglisten-Ranking wurde aus der Anzahl der zerstörten Würfel und gesammelten Münzen berechnet, wobei Strafen für Todesfälle während des Events angewendet wurden." },

            { type: "paragraph", content: "Der Crypto Rave Pulse demonstrierte, wie sich Metacube kontinuierlich durch kreative, zeitlich begrenzte Events entwickelt, die sowohl Unterhaltung als auch wertvolle Belohnungen bieten." }
        ],
        relatedPosts: ["special-events-in-metacube", "monkecube-event"],
    },

    "metacube-gameplay-guide": {
        id: "metacube-gameplay-guide",
        title: "Entdecken Sie das Metacube-Universum: Vollständiger Gameplay-Leitfaden",
        date: "2025-05-07",
        author: "The Metacube Team",
        category: "Guides",
        imageUrl: "/blog/metacube_g.jpg",
        excerpt: "Tauchen Sie ein in Metacubes spannende Gameplay-Mechaniken, lernen Sie die mysteriöse Metacube-Struktur kennen, die In-Game-Währung und überwinden Sie herausfordernde Gefahren in diesem umfassenden Leitfaden.",
        content: [
            { type: "heading", content: "Einführung in Metacube" },
            { type: "paragraph", content: "Metacube ist ein revolutionäres Free-to-Play NFT-Spiel, das die Aufregung der Schatzsuche, die Faszination der Blockchain-Technologie und den Nervenkitzel der interstellaren Erkundung kombiniert. In diesem immersiven Spielerlebnis übernehmen Spieler die Rolle von Stove dem Crypto Raver, einem eingefleischten Fan von Kryptowährungen und regelmäßigem Besucher interstellarer Raves. Gemeinsam mit anderen Stellar Scavengers begeben sich Spieler auf eine waghalsige Mission, um die Geheimnisse des Metacube zu entschlüsseln, eines himmlischen Tresors mit wertvollen Blockchain-Daten und seltenen NFTs." },
            { type: "paragraph", content: "Dieser umfassende Leitfaden führt Sie durch die Kern-Gameplay-Elemente, hilft Ihnen, die mysteriöse Metacube-Struktur zu verstehen, erklärt das In-Game-Währungssystem und bereitet Sie auf die verschiedenen Gefahren und Herausforderungen vor, denen Sie auf Ihrer Reise begegnen werden." },

            { type: "heading", content: "Gameplay-Grundlagen" },
            { type: "paragraph", content: "Spieler beginnen ihre Reise auf dem Asteroiden Zerith-9, wo sich der Metacube befindet. Als Stove der Crypto Raver müssen sie ihre Mining-Rig-Waffe einsetzen, um die kleineren Würfel zu zerbrechen, aus denen der Metacube besteht. Jeder Würfel enthält versteckte Blockchain-Daten, und einige Würfel enthalten begehrte NFTs. Spieler können mit anderen Stellar Scavengers zusammenarbeiten oder gegen sie konkurrieren, um die wertvollsten Blockchain-Daten und NFTs aufzudecken." },
            { type: "paragraph", content: "Das Spiel kombiniert Elemente der Erkundung, Ressourcensammlung und strategischen Entscheidungsfindung, während Sie über die Oberfläche des Asteroiden und die komplexe Struktur des Metacube navigieren. Ihre Hauptziele umfassen das Abbauen von Würfeln, das Sammeln wertvoller Daten, das Vermeiden von Gefahren und das Aufrüsten Ihrer Ausrüstung, um auf anspruchsvollere Bereiche zuzugreifen." },

            { type: "heading", content: "Der Metacube: Ein kolossales Krypto-Mysterium" },
            { type: "paragraph", content: "Der Metacube ist der zentrale Fokus des Spiels, eine kolossale Struktur aus 256x256x256 einzelnen Würfeln. Jeder kleinere Würfel trägt ein Symbol, das eine Kryptowährung wie Bitcoin oder Ethereum oder ein einzigartiges Stück Blockchain-Daten darstellt. Die Schöpfer des Metacube statteten ihn mit fortgeschrittenen KI-Verteidigungen und versteckten Gefahren aus, was die Reise zur Entschlüsselung seiner Geheimnisse zu einem herausfordernden und spannenden Unterfangen macht." },
            { type: "paragraph", content: "Während Sie den Metacube erkunden, werden Sie verschiedene Bereiche mit unterschiedlichen Schwierigkeitsgraden und Belohnungen entdecken. Einige Bereiche enthalten möglicherweise seltene NFTs, sind aber von mächtigeren Verteidigungen bewacht. Das Verständnis der Struktur des Metacube und die entsprechende Planung Ihrer Mining-Strategie werden entscheidend für Ihren Erfolg sein." },

            { type: "heading", content: "In-Game-Währung & Upgrades" },
            { type: "paragraph", content: "Im Laufe des Spiels sammeln Spieler In-Game-Währung, indem sie Würfel zerbrechen und verschiedene Herausforderungen meistern. Diese Währung, genannt \"MetaCoins\", ermöglicht es Spielern, Stoves Fähigkeiten aufzurüsten, einschließlich Fliegen, Laufen und Gehen, sowie die Kraft und Effizienz der Mining-Rig-Waffe zu verbessern. Upgrades sind unerlässlich, um die gewaltigeren Verteidigungen des Metacube anzugehen und die Chancen zu erhöhen, seltene NFTs zu entdecken." },
            { type: "paragraph", content: "Das Spiel bietet sechs verschiedene Arten von Upgrades, die jeweils spezifische Aspekte Ihres Spielerlebnisses verbessern. Diese Upgrades können Ihre Mining-Effizienz, Bewegungsfähigkeiten und das Gesamtüberleben in der feindlichen Umgebung von Zerith-9 und dem Metacube erheblich beeinflussen." },

            { type: "heading", content: "Gefahren und Herausforderungen" },
            { type: "paragraph", content: "Um ein fesselndes und dynamisches Spielerlebnis zu schaffen, müssen Spieler während ihres Abenteuers eine Vielzahl von Gefahren und Herausforderungen überwinden:" },
            { type: "paragraph", content: "• **Würfel-Gegenangriffe**: Einige Würfel besitzen starke Verteidigungen und werden sich wehren, wenn sie unsachgemäß getroffen werden, wobei sie Stove und seine Mining-Rig-Waffe beschädigen.\n• **Steuerprüfer**: Bestimmte Würfel entfesseln, wenn sie zerstört werden, unermüdliche Steuerprüfer, die Spieler jagen und belästigen. Wenn die Gesundheit eines Spielers null erreicht, werden sie vorübergehend aus dem Spiel ausgesperrt, was ein Gefühl von Dringlichkeit und Risiko schafft.\n• **Umweltgefahren**: Die Oberfläche von Zerith-9 stellt einzigartige Herausforderungen dar, einschließlich des Potenzials für Fallschaden aus großen Höhen und des Risikos, während der Erkundung des Weltraum-Vakuums keinen Sauerstoff mehr zu haben.\n• **Zeitdruck**: Während die Stellar Scavengers gegen die Zeit antreten, um die Geheimnisse des Metacube zu entschlüsseln, müssen Spieler ihre Strategien optimieren und kalkulierte Entscheidungen treffen, um der Konkurrenz voraus zu sein." },
            { type: "paragraph", content: "Durch das Überwinden dieser Herausforderungen machen Spieler Fortschritte im Spiel und erwerben wertvolle Blockchain-Daten und NFTs, die letztendlich ihren Erfolg in Metacube bestimmen werden." },

            { type: "heading", content: "Erkunden Sie das komplette Metacube-Universum" },
            { type: "paragraph", content: "Dieser Leitfaden bietet nur einen Einblick in die weite und aufregende Welt von Metacube. Um tiefer in die Spielmechanik, NFT-Sammlungen und zukünftigen Entwicklungspläne einzutauchen, laden wir Sie ein, unser [offizielles Metacube-Whitepaper](https://metacube-1.gitbook.io/metacube-games) zu lesen." },
            { type: "paragraph", content: "Das Whitepaper enthält umfangreiche Informationen über:" },
            { type: "paragraph", content: "• Detaillierte Spielmechanik und Strategien\n• Vollständige Aufschlüsselung der NFT-Sammlerstücke und ihrer Seltenheit\n• Den NFT-Marktplatz und das Handelssystem\n• In-Game-Nutzen verschiedener digitaler Assets\n• Zukünftige Entwicklungs-Roadmap einschließlich Season 2 und darüber hinaus\n• Team hinter der Entwicklung von Metacube" },
            { type: "paragraph", content: "Egal ob Sie ein neuer Spieler sind, der loslegen möchte, oder ein erfahrener Stellar Scavenger, der nach fortgeschrittenen Strategien sucht, das Whitepaper bietet wertvolle Einblicke zur Verbesserung Ihres Metacube-Erlebnisses." },
        ],
        relatedPosts: ["welcome-to-our-new-blog", "nft-collectibles-guide"],
    },
    "welcome-to-our-new-blog": {
        id: "welcome-to-our-new-blog",
        title: "Willkommen im Metacube-Blog!",
        date: "2025-05-07",
        author: "The Metacube Team",
        category: "Announcements",
        imageUrl: "/blog/banner_m.jfif",
        excerpt: "Wir freuen uns, unseren neuen Blog zu starten! Entdecken Sie Updates, Leitfäden, Community-Highlights und Einblicke in die Welt von Metacube.",
        content: [
            { type: "heading", content: "Ein neuer Knotenpunkt für Metacube-News" },
            { type: "paragraph", content: "Willkommen, Metacuber! Wir freuen uns sehr, den **Metacube-Blog** offiziell zu starten, Ihren neuen zentralen Knotenpunkt für alles rund um unser sich ständig erweiterndes Universum. Hier finden Sie die neuesten Nachrichten, Entwicklungs-Updates, ausführliche Spiel-Leitfäden, Community-Spotlights und vieles mehr." },
            { type: "paragraph", content: "Unser Ziel ist es, Ihnen eine direkte Verbindung zum Team zu bieten und einen Ort zum Erkunden der Tiefen von Metacube zu schaffen. Egal ob Sie ein *erfahrener Spieler* sind oder gerade Ihre Reise beginnen, wir hoffen, dass dieser Blog zu einer wertvollen Ressource für Sie wird." },
            { type: "heading", content: "Was Sie erwarten können" },
            { type: "paragraph", content: "• **Neueste Ankündigungen:** Seien Sie der Erste, der von neuen Features, bevorstehenden Events und wichtigen Updates erfährt.\n• **Entwickler-Einblicke:** Werfen Sie einen Blick hinter die Kulissen unseres Entwicklungsprozesses, Herausforderungen und zukünftigen Pläne.\n• **Spiel-Leitfäden & Tipps:** Meistern Sie Metacube mit detaillierten Leitfäden, Strategien und Tipps sowohl vom Team als auch von erfahrenen Spielern.\n• **Community-Highlights:** Wir werden erstaunliche Kreationen, Spielergeschichten und von der Community veranstaltete Events präsentieren. Teilen Sie Ihre Inhalte mit uns!\n• **Lore & Story:** Tauchen Sie tiefer in die Welt von Metacube und ihre reiche Erzählung ein." },
            { type: "paragraph", content: "Wir freuen uns darauf, dieses neue Kapitel mit Ihnen zu beginnen. Bleiben Sie dran für regelmäßige Updates und zögern Sie nicht, Ihr Feedback und Ihre Vorschläge in unseren Community-Kanälen zu teilen!" },
        ],
        relatedPosts: ["introducing-community-streams", "nft-collectibles-guide"],
    },
    "introducing-community-streams": {
        id: "introducing-community-streams",
        title: "Vorstellung der Community-Streams: Teilen Sie Ihre Metacube-Momente!",
        date: "2025-05-07",
        author: "The Metacube Team",
        category: "Announcements",
        imageUrl: "/blog/community_b.jpg",
        excerpt: "Entdecken Sie unseren neuen Community-Streams-Bereich! Schauen Sie Live-Gameplay zu, teilen Sie Ihre eigenen Streams und verbinden Sie sich mit anderen Metacubern.",
        content: [
            { type: "heading", content: "Rücken Sie Ihr Gameplay ins Rampenlicht" },
            { type: "paragraph", content: "Wir freuen uns unglaublich, den Start unseres brandneuen **Community-Streams**-Bereichs auf der Metacube-Website bekannt zu geben! Dies ist Ihr dedizierter Raum, um Live-Gameplay von anderen Metacubern zu entdecken und, noch wichtiger, Ihre eigenen Metacube-Abenteuer mit der Welt zu teilen." },
            { type: "paragraph", content: "Egal ob Sie ein erfahrener Streamer sind oder einfach nur einen coolen Moment teilen möchten, unsere Community-Streams-Seite macht es einfach. Sie können Links zu Ihren Live-Streams oder VODs von beliebten Plattformen wie [YouTube](https://youtube.com), [Twitch](https://twitch.tv) und [Kick](https://kick.com) einreichen." },
            { type: "heading", content: "Was Sie finden werden" },
            { type: "paragraph", content: "• **Featured Live-Streams:** Wir werden laufende Live-Streams direkt auf der Seite hervorheben, um es einfach zu machen, in die Action einzutauchen.\n• **Community-Video-Raster:** Durchsuchen Sie eine Sammlung von Videos und vergangenen Streams, die von Spielern eingereicht wurden. Entdecken Sie neue Strategien, beeindruckende Builds oder genießen Sie einfach, anderen beim Erkunden von Metacube zuzusehen.\n• **Einfache Einreichung:** Ein einfaches Formular ermöglicht es Ihnen, Ihren Video- oder Stream-Link einzureichen, eine Beschreibung hinzuzufügen und sogar die Sprache Ihres Inhalts anzugeben." },
            { type: "paragraph", content: "Das Ziel ist es, einen lebendigen und interaktiven Raum zu schaffen, in dem Spieler sich verbinden, voneinander lernen und die vielfältigen Arten präsentieren können, wie Metacube erlebt wird. Wir können es kaum erwarten, Ihre Inhalte zu sehen!" },
            { type: "paragraph", content: "Gehen Sie jetzt zur Community-Streams-Seite, um sie sich anzusehen und Ihren ersten Stream oder Ihr erstes Video einzureichen!" },
        ],
        relatedPosts: ["welcome-to-our-new-blog", "nft-collectibles-guide"],
    },
    "nft-collectibles-guide": {
        id: "nft-collectibles-guide",
        title: "Der ultimative Leitfaden zu NFT-Sammlerstücken in Metacube",
        date: "2025-05-07",
        author: "The Metacube Team",
        category: "Guides",
        imageUrl: "/blog/marketnft.png",
        excerpt: "Entschlüsseln Sie die Geheimnisse der NFT-Sammlerstücke in Metacube. Dieser Leitfaden deckt Seltenheit, Eigenschaften und wie Sie das Beste aus Ihren digitalen Assets herausholen.",
        content: [
            { type: "heading", content: "Seltenheitsstufen verstehen" },
            { type: "paragraph", content: "In Metacube gibt es NFT-Sammlerstücke in verschiedenen Seltenheitsstufen, die jeweils ihre Einzigartigkeit und ihren potenziellen Wert beeinflussen. Diese Stufen sind typischerweise: **Common, Rare, Epic, Mythic und Legendary**. Je seltener das Item, desto ausgeprägter sind seine Attribute und sein Erscheinungsbild." },
            { type: "paragraph", content: "• Common: Gewicht 9+\n• Rare: Gewicht 7-8\n• Epic: Gewicht 5-6\n• Mythic: Gewicht 2-4\n• Legendary: Gewicht 1" },
            { type: "image", content: "/blog/raritynft.png", alt: "NFT Seltenheits-Verteilungsdiagramm" },
            { type: "paragraph", content: "Die Verteilung dieser Seltenheiten wird sorgfältig verwaltet, um ein ausgewogenes und fesselndes Sammelerlebnis zu gewährleisten." },
            { type: "heading", content: "Schlüssel-Eigenschaften und Attribute" },
            { type: "paragraph", content: "Jedes NFT-Sammlerstück besitzt eine Reihe von Eigenschaften, die seine Charakteristika definieren. Diese können von visuellen Elementen wie *Farbe* und *Design* bis hin zu funktionalen Attributen reichen, die das Gameplay oder den Nutzen innerhalb des Metacube-Ökosystems beeinflussen könnten." },
            { type: "paragraph", content: "Das Verständnis dieser Eigenschaften ist entscheidend für die Bewertung des Wertes und Potenzials eines NFT. Sammler suchen oft nach Items mit seltenen Eigenschaftskombinationen oder solchen, die ihren Spielstil ergänzen." },
        ],
        relatedPosts: ["welcome-to-our-new-blog", "metacube-gameplay-guide"],
    },
    "starknet-transactions-batcher": {
        id: "starknet-transactions-batcher",
        title: "Ein Starknet-Transaktions-Batcher",
        date: "2025-05-07",
        author: "The Metacube Team",
        category: "Development",
        imageUrl: "/blog/batcher_b.jfif",
        excerpt: "Erfahren Sie mehr über den Transaktions-Batcher, der in Metacube verwendet wird, um NFTs, die von Spielern verdient wurden, sofort zu senden, mit einer detaillierten Implementierung in Go.",
        content: [
            { type: "heading", content: "Zusammenfassung" },
            { type: "paragraph", content: "Dieser Artikel präsentiert den Transaktions-Batcher, der in Metacube verwendet wird, um NFTs, die von Spielern verdient wurden, sofort zu senden. Er erklärt die skalierbare, akteurbasierte Architektur des Batchers und bietet eine detaillierte Implementierung in Go. Alle Code-Snippets sind im zugehörigen [GitHub-Repository](https://github.com/metacube-games/starknet-batcher) verfügbar." },
            { type: "paragraph", content: "Dieser Beitrag basiert auf dem Artikel, der ursprünglich auf [dev.to](https://dev.to/bastienfaivre/a-starknet-transactions-batcher-1hpk) von Bastien Faivre veröffentlicht wurde." },
            { type: "heading", content: "Architektur" },
            { type: "paragraph", content: "Der Batcher besteht aus zwei Hauptakteuren:" },
            { type: "paragraph", content: "• **Der Builder** empfängt die Transaktionen, bündelt sie in eine einzige Multicall-Transaktion und sendet sie an den Sender-Akteur.\n• **Der Sender** finalisiert die Transaktion mit geeigneten Feldern (Nonce, Max Fee, usw.), signiert sie, sendet sie an das Starknet-Netzwerk und überwacht ihren Status." },
            { type: "paragraph", content: "Diese Akteurtrennung ermöglicht einen skalierbaren und effizienten Batcher. Der Builder bereitet die Transaktionen vor, während der Sender sie sendet, was einen kontinuierlichen und effizienten Transaktionsfluss ermöglicht." },
            { type: "image", content: "/blog/architecture_graph.webp", alt: "Starknet Batcher Architektur" },
            { type: "heading", content: "Implementierung" },
            { type: "paragraph", content: "Die folgende Implementierung ist spezifisch für Go, aber die Konzepte können leicht auf andere Sprachen angepasst werden, da die Funktionalitäten gleich bleiben. Beachten Sie außerdem, dass diese Implementierung spezifisch für das Senden von NFTs aus demselben Vertrag ist. Ein generischerer Ansatz wird jedoch später im Artikel erwähnt. Schließlich basiert der Code auf der [starknet.go-Bibliothek](https://github.com/NethermindEth/starknet.go), die von Nethermind entwickelt wurde." },
            { type: "paragraph", content: "Beginnen wir mit dem `Batcher` selbst:" },
            {
                type: "code",
                language: "go",
                content: 'type Batcher struct {\n    accnt           *account.Account\n    contractAddress *felt.Felt\n    maxSize         int\n    inChan          <-chan []string\n    failChan        chan<- []string\n}'
            },
            { type: "paragraph", content: "Der Batcher führt sowohl den `Builder`- als auch den `Sender`-Akteur gleichzeitig aus:" },
            {
                type: "code",
                language: "go",
                content: 'type TxnDataPair struct {\n    Txn  rpc.BroadcastInvokev1Txn\n    Data [][]string\n}\n\nfunc (b *Batcher) Run() {\n    txnDataPairChan := make(chan TxnDataPair)\n\n    go b.runBuildActor(txnDataPairChan)\n    go b.runSendActor(txnDataPairChan)\n}'
            },
            { type: "heading", content: "Builder" },
            { type: "paragraph", content: "Analysieren wir den Build-Akteur. Beachten Sie, dass der Code zur besseren Lesbarkeit vereinfacht wurde (vollständiger Code verfügbar auf [GitHub](https://github.com/metacube-games/starknet-batcher/))." },
            {
                type: "code",
                language: "go",
                content: '// This function builds a function call from the transaction data.\nfunc (b *Batcher) buildFunctionCall(data []string) (*rpc.FunctionCall, error) {\n    // Parse the recipient address\n    toAddressInFelt, err := utils.HexToFelt(data[0])\n    if err != nil {\n        // ... error handling ...\n    }\n\n    // Parse the NFT ID\n    nftID, err := strconv.Atoi(data[1])\n    if err != nil {\n        // ... error handling ...\n    }\n\n    // The entry point is a standard ERC721 function\n    // https://docs.openzeppelin.com/contracts-cairo/0.20.0/erc721\n    return &rpc.FunctionCall{\n        ContractAddress: b.contractAddress,\n        EntryPointSelector: utils.GetSelectorFromNameFelt(\n            "safe_transfer_from",\n        ),\n        Calldata: []*felt.Felt{\n            b.accnt.AccountAddress, // from\n            toAddressInFelt, // to\n            new(felt.Felt).SetUint64(uint64(nftID)), // NFT ID\n            new(felt.Felt).SetUint64(0), // data -> None\n            new(felt.Felt).SetUint64(0), // extra data -> None\n        },\n    }, nil\n}\n\n// This function builds the batch transaction from the function calls.\nfunc (b *Batcher) buildBatchTransaction(functionCalls []rpc.FunctionCall) (rpc.BroadcastInvokev1Txn, error) {\n    // Format the calldata (i.e., the function calls)\n    calldata, err := b.accnt.FmtCalldata(functionCalls)\n    if err != nil {\n        // ... error handling ...\n    }\n\n    return rpc.BroadcastInvokev1Txn{\n        InvokeTxnV1: rpc.InvokeTxnV1{\n            MaxFee:        new(felt.Felt).SetUint64(MAX_FEE), // Define MAX_FEE appropriately\n            Version:       rpc.TransactionV1,\n            Nonce:         new(felt.Felt).SetUint64(0), // Will be set by the send actor\n            Type:          rpc.TransactionType_Invoke,\n            SenderAddress: b.accnt.AccountAddress,\n            Calldata:      calldata,\n        },\n    }, nil\n}\n\n// Actual Build actor event loop\nfunc (b *Batcher) runBuildActor(txnDataPairChan chan<- TxnDataPair) {\n    size := 0\n    functionCalls := make([]rpc.FunctionCall, 0, b.maxSize)\n    currentData := make([][]string, 0, b.maxSize)\n    var WAITING_TIME = 5 * time.Second // Example waiting time\n\n    for {\n        trigger := false\n        select {\n        case data, ok := <-b.inChan:\n            if !ok {\n                // Channel closed, handle shutdown\n                return\n            }\n            functionCall, err := b.buildFunctionCall(data)\n            if err != nil {\n                // Handle error, maybe send to failChan\n                continue\n            }\n            functionCalls = append(functionCalls, *functionCall)\n            size++\n            currentData = append(currentData, data)\n            if size >= b.maxSize {\n                trigger = true\n            }\n        case <-time.After(WAITING_TIME):\n            if size > 0 {\n                trigger = true\n            }\n        }\n\n        if trigger {\n            builtTxn, err := b.buildBatchTransaction(functionCalls)\n            if err != nil {\n                // Handle error, maybe send all in currentData to failChan\n            } else {\n                txnDataPairChan <- TxnDataPair{\n                    Txn:  builtTxn,\n                    Data: currentData,\n                }\n            }\n            size = 0\n            functionCalls = make([]rpc.FunctionCall, 0, b.maxSize)\n            currentData = make([][]string, 0, b.maxSize)\n        }\n    }\n}'
            },
            { type: "heading", content: "Sender" },
            { type: "paragraph", content: "Analysieren wir nun den Sender-Akteur. Beachten Sie, dass der Code zur besseren Lesbarkeit vereinfacht wurde (vollständiger Code verfügbar auf [GitHub](https://github.com/metacube-games/starknet-batcher/))." },
            {
                type: "code",
                language: "go",
                content: '// Actual Send actor event loop\nfunc (b *Batcher) runSendActor(txnDataPairChan <-chan TxnDataPair) {\n    oldNonce := new(felt.Felt).SetUint64(0)\n\n    for {\n        txnDataPair, ok := <-txnDataPairChan\n        if !ok {\n            // Channel closed, handle shutdown\n            return\n        }\n        txn := txnDataPair.Txn\n        data := txnDataPair.Data // To send to failChan if needed\n\n        nonce, err := b.accnt.Nonce(\n            context.Background(),\n            rpc.BlockID{Tag: "latest"},\n            b.accnt.AccountAddress,\n        )\n        if err != nil {\n            // Handle error, send data to failChan\n            continue\n        }\n\n        if nonce.Cmp(oldNonce) <= 0 {\n            nonce.Add(oldNonce, new(felt.Felt).SetUint64(1))\n        }\n\n        txn.InvokeTxnV1.Nonce = nonce\n\n        err = b.accnt.SignInvokeTransaction(\n            context.Background(),\n            &txn.InvokeTxnV1,\n        )\n        if err != nil {\n            // Handle error, send data to failChan\n            continue\n        }\n\n        // Optional: Estimate fee\n        // fee, err := b.accnt.EstimateFee(...)\n        // if err != nil { ... }\n        // if fee > MAX_ACCEPTABLE_FEE { ... re-sign if MaxFee changed ... }\n\n        resp, err := b.accnt.SendTransaction(\n            context.Background(),\n            &txn,\n        )\n        if err != nil {\n            // Handle error, send data to failChan\n            continue\n        }\n\n    statusLoop:\n        for {\n            time.Sleep(time.Second * 5) // Wait before checking status\n            txStatus, err := b.accnt.GetTransactionStatus(\n                context.Background(),\n                resp.TransactionHash,\n            )\n            if err != nil {\n                // Log error, maybe retry or send to failChan after X retries\n                continue\n            }\n\n            switch txStatus.ExecutionStatus {\n            case rpc.TxnExecutionStatusSUCCEEDED:\n                oldNonce = nonce\n                // Successfully sent, log or notify\n                break statusLoop\n            case rpc.TxnExecutionStatusREVERTED:\n                oldNonce = nonce // Nonce is consumed even on revert\n                // Send data to failChan\n                break statusLoop\n            default: // PENDING, etc.\n            }\n\n            switch txStatus.FinalityStatus {\n            case rpc.TxnStatus_Received:\n                continue\n            case rpc.TxnStatus_Accepted_On_L2, rpc.TxnStatus_Accepted_On_L1:\n                oldNonce = nonce\n                // Finalized, log or notify\n                break statusLoop\n            case rpc.TxnStatus_Rejected:\n                // Send data to failChan (nonce might not be consumed, check Starknet docs)\n                break statusLoop\n            default:\n            }\n        }\n    }\n}'
            },
            { type: "heading", content: "Hin zu einem generischen Batcher" },
            { type: "paragraph", content: "Der vorgestellte Batcher ist spezifisch für das Senden von NFTs aus demselben Vertrag. Die Architektur kann jedoch leicht angepasst werden, um jede Art von Transaktion zu senden.\n\nZuerst müssen die an den Batcher gesendeten Transaktionsdaten generischer sein und daher mehr Informationen enthalten. Sie müssen die Vertragsadresse, den Entry Point Selector und die Calldata enthalten. Die `buildFunctionCall`-Funktion muss dann angepasst werden, um diese Informationen zu parsen.\n\nMan könnte auch einen Schritt weiter gehen, indem man das Sender-Konto generisch macht. Dies würde mehr Refactoring erfordern, da die Transaktionen pro Sender-Konto gebündelt werden müssen. Es ist jedoch machbar und würde einen vielseitigeren Batcher ermöglichen.\n\nDenken Sie jedoch daran, dass **vorzeitige Optimierung die Wurzel allen Übels ist**. Wenn Sie also nur NFTs oder einen bestimmten Token wie ETH oder STRK senden müssen, ist der vorgestellte Batcher mehr als ausreichend." },
            { type: "heading", content: "CLI-Tool" },
            { type: "paragraph", content: "Der Repository-Code kann als CLI-Tool verwendet werden, um eine Reihe von NFTs in Batches zu senden. Das Tool ist einfach zu verwenden, und Sie sollten in der Lage sein, es nach dem Lesen dieses Artikels an Ihre Bedürfnisse anzupassen. Weitere Informationen finden Sie in der [README](https://github.com/metacube-games/starknet-batcher/)." },
            { type: "heading", content: "Fazit" },
            { type: "paragraph", content: "Ich hoffe, dass dieser Artikel Ihnen geholfen hat, besser zu verstehen, wie Metacube NFTs an seine Spieler sendet. Der Batcher ist eine wichtige Infrastrukturkomponente, und wir freuen uns, ihn mit der Community zu teilen. Wenn Sie Fragen oder Feedback haben, können Sie gerne kommentieren oder mich kontaktieren. Vielen Dank fürs Lesen!" },
            { type: "paragraph", content: "Für weitere Informationen schauen Sie sich den [Originalartikel auf dev.to](https://dev.to/bastienfaivre/a-starknet-transactions-batcher-1hpk) und das [GitHub-Repository](https://github.com/metacube-games/starknet-batcher) an." }
        ],
        relatedPosts: ["starknet-signatures-guide"],
    },
    "starknet-signatures-guide": {
        id: "starknet-signatures-guide",
        title: "Ein Leitfaden zu Starknet-Signaturen",
        date: "2025-05-07",
        author: "The Metacube Team",
        category: "Development",
        imageUrl: "/blog/signatures_b.jfif",
        excerpt: "Lernen Sie den Prozess des Signierens und Verifizierens von Signaturen auf Starknet kennen, mit Code-Beispielen in TypeScript und Go.",
        content: [
            { type: "heading", content: "Zusammenfassung" },
            { type: "paragraph", content: "Dieser Artikel skizziert den Prozess des Signierens und Verifizierens einer Signatur auf Starknet. Er beginnt mit der Einführung von Account Abstraction und wie sie die Signaturverifizierung im Vergleich zu traditionellen Blockchains wie Ethereum modifiziert. Anschließend bietet er umfassende Code-Beispiele in TypeScript und Go zum Signieren einer Nachricht und zum Verifizieren einer Signatur unter Verwendung von zwei auf Starknet verfügbaren Methoden: Verwendung des öffentlichen Schlüssels des Benutzers und Verwendung der Kontoadresse des Benutzers." },
            { type: "paragraph", content: "Dieser Beitrag basiert auf dem Artikel, der ursprünglich auf [dev.to](https://dev.to/bastienfaivre/a-guide-on-starknet-signatures-a3m) von Bastien Faivre veröffentlicht wurde." },
            { type: "heading", content: "Account Abstraction" },
            { type: "paragraph", content: "Account Abstraction ist ein Kernmerkmal von Starknet, das grundlegend verändert, wie Konten im Vergleich zu Chains wie Ethereum funktionieren. In Starknet sind Konten Smart Contracts, die beliebige Logik für die Transaktionsvalidierung implementieren können. Das bedeutet, dass verschiedene Kontokontrakte unterschiedliche Signaturverifizierungsmethoden implementieren können. Während die meisten Starknet-Konten einem Standard für die Signaturverifizierung folgen, ist es wichtig zu verstehen, dass der Kontokontrakt selbst die Validierungslogik definiert." },
            { type: "heading", content: "Eine Nachricht signieren" },
            { type: "paragraph", content: "Beim Signieren einer Nachricht auf Starknet benötigen Sie zunächst einen privaten Schlüssel und das entsprechende Konto. Es gibt verschiedene Möglichkeiten, dies zu tun, abhängig von der verwendeten Sprache und Bibliothek. In TypeScript können Sie eine Bibliothek wie `starknet` oder `starknet.js` verwenden. In Go können Sie die von Nethermind entwickelte `starknet.go`-Bibliothek verwenden." },
            { type: "paragraph", content: "Hier ist ein Beispiel für das Signieren einer Nachricht in TypeScript:" },
            {
                type: "code",
                language: "typescript",
                content: 'import { Signature, constants, ec, hash, stark } from "starknet";\n\n// Generate a private key (usually you would use a secure storage method)\nconst privateKey = stark.randomAddress();\n\n// Get the public key from the private key\nconst publicKey = ec.starkCurve.getStarkKey(privateKey);\n\n// The message to sign\nconst message = "Hello, Starknet!";\n\n// Hash the message\nconst messageHash = hash.starknetKeccak(message);\n\n// Sign the message hash\nconst signature = ec.starkCurve.sign(messageHash, privateKey);\n\n// The signature is an array of two elements: r and s\nconsole.log("Signature:", signature);'
            },
            { type: "heading", content: "Eine Signatur mit dem öffentlichen Schlüssel verifizieren" },
            { type: "paragraph", content: "Das Verifizieren einer Signatur mit dem öffentlichen Schlüssel ist auf den meisten Blockchain-Plattformen unkompliziert. In Starknet können Sie eine Signatur mit dem öffentlichen Schlüssel des Unterzeichners mit Code wie diesem verifizieren:" },
            {
                type: "code",
                language: "typescript",
                content: '// Verify the signature using the public key\nconst isValid = ec.starkCurve.verify(messageHash, signature, publicKey);\n\nconsole.log("Is the signature valid?", isValid);'
            },
            { type: "heading", content: "Eine Signatur mit der Kontoadresse verifizieren" },
            { type: "paragraph", content: "In Starknet müssen Sie aufgrund von Account Abstraction manchmal eine Signatur mit der Kontoadresse des Unterzeichners anstelle ihres öffentlichen Schlüssels verifizieren. Dies erfordert das Aufrufen der `is_valid_signature`-Methode auf dem Kontokontrakt. (Hinweis: Der Originalartikel erwähnt `isPrefixedMessageValid`, aber Standard-Kontokontrakte verwenden oft `is_valid_signature`. Die genaue Methode kann variieren.)" },
            {
                type: "code",
                language: "typescript",
                content: 'import { Account, Provider, constants, stark, Signature } from "starknet";\n\n// Initialize a provider to connect to Starknet\nconst provider = new Provider({ sequencer: { network: constants.NetworkName.SN_MAIN } }); // Or your desired network\n\n// Assume signerAddress, pkForSigner, messageHash and signature are defined\n// const signerAddress = "0x123...";\n// const pkForSigner = "0x456..."; // or connect with a wallet signer\n// const messageHash = "0x789..."; \n// const signature: Signature = ["0xabc...", "0xdef..."]; \n\nasync function verifySignatureUsingAccount(signerAddress: string, pkForSigner: string, msgHash: string, sig: Signature) {\n  const account = new Account(provider, signerAddress, pkForSigner);\n  try {\n    const result = await account.call("is_valid_signature", [\n        msgHash,          // hash\n        sig.length.toString(), // signature_len\n        ...sig             // signature (r, s)\n    ]);\n    // For Ready Wallet/Braavos standard accounts, a single felt "0x1" (VALID_SIGNATURE) is returned on success.\n    // Cairo0 contracts might return an array if the function has multiple return values.\n    // Check the specific account contract for exact return format if issues arise.\n    const isValid = Array.isArray(result) ? result[0] === "0x1" : result.result[0] === "0x1";\n    console.log("Is the signature valid (using account)?", isValid);\n    return isValid;\n  } catch (error) {\n    console.error("Error verifying signature using account:", error);\n    return false;\n  }\n}\n\n// Example usage (ensure variables are set)\n// verifySignatureUsingAccount(signerAddress, pkForSigner, messageHash, signature);'
            },
            { type: "heading", content: "Arbeiten mit einer Wallet (Ready Wallet, Braavos, etc.)" },
            { type: "paragraph", content: "Wenn Sie mit einer Wallet wie Ready Wallet oder Braavos arbeiten, haben Sie normalerweise keinen direkten Zugriff auf den privaten Schlüssel des Benutzers. Stattdessen müssen Sie die Schnittstelle der Wallet verwenden, um den Benutzer aufzufordern, eine Nachricht zu signieren." },
            {
                type: "code",
                language: "typescript",
                content: '// This is a conceptual example, actual implementation depends on the wallet connector library (e.g., starknet-react, get-starknet)\nasync function signMessageWithWallet(wallet: any, message: string) { // Use specific wallet type from your library\n  try {\n    // The method might be `signMessage`, `personalSign`, or similar\n    // The exact structure for `typedData` or `message` depends on the wallet and standard (e.g., EIP-712 for Starknet)\n    const signature = await wallet.account.signMessage({ message }); // Example structure, might need TypedData for some wallets\n    console.log("Signature from wallet:", signature);\n    return signature;\n  } catch (error) {\n    console.error("Error signing message with wallet:", error);\n    return null;\n  }\n}'
            },
            { type: "heading", content: "Fazit" },
            { type: "paragraph", content: "Starknets Account Abstraction-Modell bietet Flexibilität für die Signaturverifizierung, erfordert aber das Verständnis der Unterschiede zu traditionellen Blockchain-Signaturmodellen. Indem Sie den bereitgestellten Beispielen folgen, sollten Sie in der Lage sein, Nachrichten effektiv zu signieren und Signaturen in Ihren Starknet-Anwendungen zu verifizieren. Beachten Sie, dass die spezifischen Implementierungsdetails je nach verwendetem Wallet-Anbieter und Kontokontrakt variieren können. Beziehen Sie sich immer auf die spezifische Dokumentation der Wallet oder des Kontokontrakts, mit dem Sie arbeiten." },
            { type: "paragraph", content: "Für weitere Informationen schauen Sie sich den [Originalartikel auf dev.to](https://dev.to/bastienfaivre/a-guide-on-starknet-signatures-a3m) von Bastien Faivre an." }
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
