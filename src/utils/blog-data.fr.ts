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
        title: "Semaine de Fidélité : Récompenser Nos Joueurs les Plus Dévoués",
        date: "2025-04-25",
        author: "The Metacube Team",
        category: "Events",
        imageUrl: "/blog/fidelityWeek.png",
        excerpt: "Découvrez la Semaine de Fidélité, un événement spécial où nos joueurs les plus dévoués se sont partagés 1 000 tokens STRK en fonction de leur performance au classement.",
        content: [
            { type: "heading", content: "Célébrer le Dévouement des Joueurs" },
            { type: "paragraph", content: "La Semaine de Fidélité était un événement spécial conçu pour remercier nos joueurs les plus fidèles pour leur soutien continu et leur dévouement à Metacube. Durant cette célébration d'une semaine, les meilleurs joueurs du classement se sont partagés une cagnotte de 1 000 tokens STRK en signe de notre appréciation." },

            { type: "heading", content: "Comment ça Fonctionnait" },
            { type: "paragraph", content: "Contrairement à nos autres événements spéciaux qui transforment le gameplay, la Semaine de Fidélité se concentrait uniquement sur la récompense des performances exceptionnelles dans les mécaniques de jeu standard. Les joueurs se sont affrontés pour obtenir les scores les plus élevés possibles pendant la semaine spécifiée, avec des classements déterminant leur part de la cagnotte." },

            { type: "heading", content: "Système de Score du Classement" },
            { type: "paragraph", content: "Comme pour nos autres événements, les positions du classement étaient calculées en fonction de trois facteurs clés :\n• Le nombre de cubes cassés durant l'événement\n• Le nombre total de pièces collectées\n• Les pénalités pour les morts durant l'événement" },

            { type: "heading", content: "Distribution des Prix" },
            { type: "paragraph", content: "La cagnotte de 1 000 tokens STRK a été distribuée proportionnellement parmi les meilleurs joueurs du classement, les joueurs les mieux classés recevant des parts plus importantes des récompenses. Cela a créé une compétition passionnante où chaque point comptait dans la course aux premières positions." },

            { type: "paragraph", content: "La Semaine de Fidélité a démontré notre engagement à reconnaître et récompenser les membres les plus dévoués de notre communauté. Gardez un œil ouvert pour de futures Semaines de Fidélité et d'autres opportunités spéciales de gagner des récompenses dans l'univers Metacube !" }
        ],
        relatedPosts: ["special-events-in-metacube", "crypto-rave-pulse-event", "monkecube-event"],
    },

    "special-events-in-metacube": {
        id: "special-events-in-metacube",
        title: "Événements Spéciaux dans Metacube : Aventures à Durée Limitée",
        date: "2025-06-01",
        author: "The Metacube Team",
        category: "Events",
        imageUrl: "/blog/com_son.png",
        excerpt: "Découvrez le monde passionnant des événements spéciaux de Metacube qui transforment le gameplay et offrent des récompenses uniques pour une durée limitée, y compris des tokens STRK.",
        content: [
            { type: "heading", content: "Présentation des Événements Spéciaux Metacube" },
            { type: "paragraph", content: "Chez Metacube, nous organisons régulièrement des événements spéciaux à durée limitée qui transforment l'univers Metacube de manière inattendue. Ces événements offrent des défis uniques, des récompenses exclusives incluant des tokens STRK, et des expériences mémorables que vous ne trouverez pas pendant le gameplay normal." },

            { type: "heading", content: "Temps Forts des Événements" },
            { type: "paragraph", content: "Notre communauté a déjà vécu des événements inoubliables :" },
            { type: "paragraph", content: "• **Crypto Rave Pulse** : Un événement innovant où Pelton Flusk a utilisé des haut-parleurs géants émettant de la musique rave pour neutraliser les défenses électriques de Metacube.\n• **Monkecube** : Une transformation totale où Metacube est devenu Monkecube, avec des skins de base sur le thème des singes et un rebranding complet (même monkecube.com redirigeait vers metacube.games)." },

            { type: "heading", content: "Récompenses des Événements" },
            { type: "paragraph", content: "Jusqu'à présent, nos événements ont récompensé les joueurs avec des **Tokens STRK** en fonction de leur position au classement. Les futurs événements pourraient inclure d'autres récompenses telles que des NFT et des skins spéciaux." },

            { type: "heading", content: "Système de Classement STRK" },
            { type: "paragraph", content: "Durant les événements, les joueurs s'affrontent dans un classement pour gagner des tokens STRK. Votre position est déterminée par trois facteurs clés :\n• Le nombre de cubes cassés durant l'événement\n• Le nombre total de pièces collectées\n• Les pénalités pour les morts durant l'événement" },

            { type: "paragraph", content: "Consultez notre couverture détaillée des événements passés comme **Monkecube** et **Crypto Rave Pulse** pour avoir un aperçu de ce qui est possible dans l'univers Metacube en constante évolution. Et rappelez-vous — dans un jeu avec une durée de vie finie, chaque événement spécial est vraiment une expérience unique !" }
        ],
        relatedPosts: ["monkecube-event", "crypto-rave-pulse-event"],
    },

    "monkecube-event": {
        id: "monkecube-event",
        title: "Monkecube : Quand les Primates Ont Pris le Contrôle du Metacube",
        date: "2025-05-15",
        author: "The Metacube Team",
        category: "Events",
        imageUrl: "/blog/monke.jpg",
        excerpt: "Revivez l'événement Monkecube, lorsque l'intégralité de Metacube a été renommé et transformé avec des skins de base sur le thème des singes.",
        content: [
            { type: "heading", content: "La Transformation Monkecube" },
            { type: "paragraph", content: "Durant cet événement spécial, Metacube a subi une transformation complète et a été renommé **Monkecube**. Ce n'était pas qu'un simple changement cosmétique — c'était un rebranding complet de l'expérience de jeu." },

            { type: "heading", content: "Caractéristiques Principales" },
            { type: "paragraph", content: "L'événement Monkecube comprenait :" },
            { type: "paragraph", content: "• **Renommage Complet** : Le jeu a été officiellement renommé « Monkecube » pour la durée de l'événement\n• **Redirection de Domaine** : monkecube.com redirigeait vers metacube.games\n• **Skins de Base Singes** : Tous les skins de base des joueurs ont été transformés en avatars de singes" },

            { type: "heading", content: "Récompenses de l'Événement" },
            { type: "paragraph", content: "Les participants à l'événement Monkecube se sont affrontés pour des **Tokens STRK**, qui ont été attribués en fonction du classement de l'événement. Le classement suivait le nombre de cubes cassés, les pièces collectées et appliquait des pénalités pour les morts des joueurs." },

            { type: "heading", content: "Réactions de la Communauté" },
            { type: "paragraph", content: "L'événement Monkecube est rapidement devenu un favori des fans, la communauté embrassant la transformation primale inattendue. La nature légère de Monkecube a fourni un changement de rythme rafraîchissant par rapport à l'expérience Metacube habituelle." },

            { type: "paragraph", content: "Avez-vous participé à l'événement Monkecube ? Partagez vos souvenirs sur notre canal Discord ou dans les commentaires ci-dessous !" }
        ],
        relatedPosts: ["special-events-in-metacube", "crypto-rave-pulse-event"],
    },

    "crypto-rave-pulse-event": {
        id: "crypto-rave-pulse-event",
        title: "Crypto Rave Pulse : Briser les Défenses du Cube avec le Son",
        date: "2025-04-10",
        author: "The Metacube Team",
        category: "Events",
        imageUrl: "/blog/crp.jpg",
        excerpt: "Découvrez l'événement Crypto Rave Pulse, où Pelton Flusk a utilisé des systèmes de son massifs et de la musique rave pour neutraliser les défenses électriques de Metacube.",
        content: [
            { type: "heading", content: "Le Son contre les Défenses Électriques" },
            { type: "paragraph", content: "Le Crypto Rave Pulse était un événement révolutionnaire dans l'univers Metacube. Durant cette période, Pelton Flusk a déployé des haut-parleurs géants autour du périmètre de Metacube, émettant de la musique rave puissante spécifiquement calibrée pour neutraliser les systèmes de défense électrique du Cube." },

            { type: "heading", content: "Impact sur le Gameplay" },
            { type: "paragraph", content: "Normalement, les défenses de Metacube infligent des dégâts aux joueurs qui interagissent avec elles, bien qu'elles n'empêchent pas le mouvement. Durant l'événement Crypto Rave Pulse, ces défenses ont été neutralisées par la musique, permettant aux joueurs de naviguer sans subir de dégâts des mécanismes de défense du cube." },

            { type: "heading", content: "Bande-Son de l'Événement" },
            { type: "paragraph", content: "La bande-son complète de Crypto Rave Pulse, composée par Pelton Flusk lui-même, est disponible sur SoundCloud. Vous pouvez écouter toutes les pistes de cet événement spécial sur : [Crypto Rave Pulse by Pelton Flusk](https://soundcloud.com/metacubegames/sets/crypto-rave-pulse-by-pelton-flusk)." },

            { type: "heading", content: "Récompenses de l'Événement" },
            { type: "paragraph", content: "Les joueurs qui ont participé à l'événement Crypto Rave Pulse se sont affrontés pour des **Tokens STRK** en fonction de leur position au classement. Le classement était calculé à partir du nombre de cubes cassés et de pièces collectées, avec des pénalités appliquées pour les morts durant l'événement." },

            { type: "paragraph", content: "Le Crypto Rave Pulse a démontré comment Metacube évolue continuellement à travers des événements créatifs à durée limitée qui offrent à la fois divertissement et récompenses précieuses." }
        ],
        relatedPosts: ["special-events-in-metacube", "monkecube-event"],
    },

    "metacube-gameplay-guide": {
        id: "metacube-gameplay-guide",
        title: "Découvrez l'Univers Metacube : Guide de Gameplay Complet",
        date: "2025-05-07",
        author: "The Metacube Team",
        category: "Guides",
        imageUrl: "/blog/metacube_g.jpg",
        excerpt: "Plongez dans les mécaniques de gameplay passionnantes de Metacube, découvrez la mystérieuse structure Metacube, la monnaie du jeu et surmontez les dangers difficiles dans ce guide complet.",
        content: [
            { type: "heading", content: "Introduction à Metacube" },
            { type: "paragraph", content: "Metacube est un jeu NFT gratuit révolutionnaire qui combine l'excitation de la chasse au trésor, l'intrigue de la technologie blockchain et le frisson de l'exploration interstellaire. Dans cette expérience de jeu immersive, les joueurs assument le rôle de Stove the Crypto Raver, un fan inconditionnel de cryptomonnaie et un habitué des raves interstellaires. Aux côtés d'autres Stellar Scavengers, les joueurs se lancent dans une mission audacieuse pour déverrouiller les secrets du Metacube, un coffre-fort céleste contenant de précieuses données blockchain et des NFT rares." },
            { type: "paragraph", content: "Ce guide complet vous guidera à travers les éléments de gameplay de base, vous aidera à comprendre la mystérieuse structure Metacube, expliquera le système de monnaie du jeu et vous préparera aux divers dangers et défis que vous rencontrerez lors de votre voyage." },

            { type: "heading", content: "Bases du Gameplay" },
            { type: "paragraph", content: "Les joueurs commencent leur voyage sur l'astéroïde Zerith-9, où se trouve le Metacube. En tant que Stove the Crypto Raver, ils doivent utiliser leur arme de plate-forme de forage pour casser les petits cubes qui composent le Metacube. Chaque cube contient des données blockchain cachées, et certains cubes contiennent des NFT convoités. Les joueurs peuvent collaborer avec d'autres Stellar Scavengers ou s'affronter pour découvrir les données blockchain et NFT les plus précieux." },
            { type: "paragraph", content: "Le jeu combine des éléments d'exploration, de collecte de ressources et de prise de décision stratégique alors que vous naviguez à la surface de l'astéroïde et dans la structure complexe du Metacube. Vos objectifs principaux incluent miner des cubes, collecter des données précieuses, éviter les dangers et améliorer votre équipement pour accéder à des zones plus difficiles." },

            { type: "heading", content: "Le Metacube : Un Mystère Crypto Colossal" },
            { type: "paragraph", content: "Le Metacube est l'élément central du jeu, une structure colossale composée de 256x256x256 cubes individuels. Chaque petit cube porte un symbole représentant une cryptomonnaie, comme Bitcoin ou Ethereum, ou une donnée blockchain unique. Les créateurs du Metacube l'ont doté de défenses IA avancées et de dangers cachés, faisant du voyage pour découvrir ses secrets une aventure difficile et palpitante." },
            { type: "paragraph", content: "Alors que vous explorez le Metacube, vous découvrirez diverses sections avec différents niveaux de difficulté et récompenses. Certaines zones pourraient contenir des NFT rares mais sont gardées par des défenses plus puissantes. Comprendre la structure du Metacube et planifier votre stratégie de minage en conséquence sera crucial pour votre succès." },

            { type: "heading", content: "Monnaie du Jeu et Améliorations" },
            { type: "paragraph", content: "Tout au long du jeu, les joueurs accumulent de la monnaie du jeu en cassant des cubes et en accomplissant divers défis. Cette monnaie, appelée « MetaCoins », permet aux joueurs d'améliorer les capacités de Stove, y compris le vol, la course et la marche, ainsi que d'améliorer la puissance et l'efficacité de l'arme de plate-forme de forage. Les améliorations sont essentielles pour affronter des défenses plus redoutables du Metacube et augmenter les chances de découvrir des NFT rares." },
            { type: "paragraph", content: "Le jeu propose six types d'améliorations différentes, chacune améliorant des aspects spécifiques de votre expérience de gameplay. Ces améliorations peuvent avoir un impact significatif sur votre efficacité de minage, vos capacités de mouvement et votre survie globale dans l'environnement hostile de Zerith-9 et du Metacube." },

            { type: "heading", content: "Dangers et Défis" },
            { type: "paragraph", content: "Pour créer une expérience de jeu engageante et dynamique, les joueurs doivent surmonter une variété de dangers et de défis tout au long de leur aventure :" },
            { type: "paragraph", content: "• **Contre-attaques de Cubes** : Certains cubes possèdent des défenses puissantes et riposteront s'ils sont frappés incorrectement, endommageant Stove et son arme de plate-forme de forage.\n• **Inspecteurs des Impôts** : Certains cubes, lorsqu'ils sont détruits, libèrent des inspecteurs des impôts implacables qui poursuivent et harcèlent les joueurs. Si la santé d'un joueur atteint zéro, il est temporairement verrouillé hors du jeu, créant un sentiment d'urgence et de risque.\n• **Dangers Environnementaux** : La surface de Zerith-9 pose des défis uniques, notamment le potentiel de dégâts de chute depuis des hauteurs élevées et le risque de manquer d'oxygène en explorant le vide spatial.\n• **Pression Temporelle** : Alors que les Stellar Scavengers courent contre la montre pour déverrouiller les secrets du Metacube, les joueurs doivent optimiser leurs stratégies et prendre des décisions calculées pour rester en tête de la compétition." },
            { type: "paragraph", content: "En surmontant ces défis, les joueurs progressent dans le jeu, acquérant de précieuses données blockchain et NFT qui détermineront finalement leur succès dans Metacube." },

            { type: "heading", content: "Explorez l'Univers Metacube Complet" },
            { type: "paragraph", content: "Ce guide ne fournit qu'un aperçu du monde vaste et passionnant de Metacube. Pour plonger plus profondément dans les mécaniques du jeu, les collections NFT et les plans de développement futurs, nous vous invitons à consulter notre [livre blanc officiel Metacube](https://metacube-1.gitbook.io/metacube-games)." },
            { type: "paragraph", content: "Le livre blanc contient des informations complètes sur :" },
            { type: "paragraph", content: "• Les mécaniques de gameplay détaillées et les stratégies\n• La répartition complète des objets de collection NFT et de leur rareté\n• Le marché NFT et le système d'échange\n• L'utilité en jeu de divers actifs numériques\n• La feuille de route de développement futur incluant la Saison 2 et au-delà\n• L'équipe derrière le développement de Metacube" },
            { type: "paragraph", content: "Que vous soyez un nouveau joueur cherchant à démarrer ou un Stellar Scavenger expérimenté à la recherche de stratégies avancées, le livre blanc fournit des informations précieuses pour améliorer votre expérience Metacube." },
        ],
        relatedPosts: ["welcome-to-our-new-blog", "nft-collectibles-guide"],
    },
    "welcome-to-our-new-blog": {
        id: "welcome-to-our-new-blog",
        title: "Bienvenue sur le Blog Metacube !",
        date: "2025-05-07",
        author: "The Metacube Team",
        category: "Announcements",
        imageUrl: "/blog/banner_m.jfif",
        excerpt: "Nous sommes ravis de lancer notre nouveau blog ! Découvrez les mises à jour, les guides, les temps forts de la communauté et les aperçus du monde de Metacube.",
        content: [
            { type: "heading", content: "Un Nouveau Hub pour les Actualités Metacube" },
            { type: "paragraph", content: "Bienvenue, Metacubers ! Nous sommes ravis de lancer officiellement le **Blog Metacube**, votre nouveau hub central pour tout ce qui concerne notre univers en constante expansion. Ici, vous trouverez les dernières actualités, les mises à jour de développement, des guides de jeu approfondis, les temps forts de la communauté et bien plus encore." },
            { type: "paragraph", content: "Notre objectif est de vous fournir une ligne directe avec l'équipe et un endroit pour explorer les profondeurs de Metacube. Que vous soyez un *joueur chevronné* ou que vous commenciez tout juste votre voyage, nous espérons que ce blog deviendra une ressource précieuse pour vous." },
            { type: "heading", content: "À Quoi S'Attendre" },
            { type: "paragraph", content: "• **Dernières Annonces :** Soyez le premier à connaître les nouvelles fonctionnalités, les événements à venir et les mises à jour majeures.\n• **Aperçus des Développeurs :** Obtenez un regard en coulisses sur notre processus de développement, les défis et les plans futurs.\n• **Guides et Astuces de Jeu :** Maîtrisez Metacube avec des guides détaillés, des stratégies et des astuces de l'équipe et des joueurs expérimentés.\n• **Temps Forts de la Communauté :** Nous mettrons en avant des créations incroyables, des histoires de joueurs et des événements organisés par la communauté. Partagez votre contenu avec nous !\n• **Histoire et Lore :** Plongez plus profondément dans le monde de Metacube et son récit riche." },
            { type: "paragraph", content: "Nous sommes ravis de commencer ce nouveau chapitre avec vous. Restez à l'affût des mises à jour régulières, et n'hésitez pas à partager vos retours et suggestions dans nos canaux communautaires !" },
        ],
        relatedPosts: ["introducing-community-streams", "nft-collectibles-guide"],
    },
    "introducing-community-streams": {
        id: "introducing-community-streams",
        title: "Présentation des Streams Communautaires : Partagez Vos Moments Metacube !",
        date: "2025-05-07",
        author: "The Metacube Team",
        category: "Announcements",
        imageUrl: "/blog/community_b.jpg",
        excerpt: "Découvrez notre nouvelle section Streams Communautaires ! Regardez du gameplay en direct, partagez vos propres streams et connectez-vous avec d'autres Metacubers.",
        content: [
            { type: "heading", content: "Mettez en Lumière Votre Gameplay" },
            { type: "paragraph", content: "Nous sommes extrêmement ravis d'annoncer le lancement de notre toute nouvelle section **Streams Communautaires** sur le site web Metacube ! C'est votre espace dédié pour découvrir du gameplay en direct d'autres Metacubers et, plus important encore, pour partager vos propres aventures Metacube avec le monde." },
            { type: "paragraph", content: "Que vous soyez un streamer chevronné ou que vous souhaitiez simplement partager un moment cool, notre page Streams Communautaires le rend facile. Vous pouvez soumettre des liens vers vos streams en direct ou VOD depuis des plateformes populaires comme [YouTube](https://youtube.com), [Twitch](https://twitch.tv) et [Kick](https://kick.com)." },
            { type: "heading", content: "Ce Que Vous Trouverez" },
            { type: "paragraph", content: "• **Streams en Direct Mis en Avant :** Nous mettrons en avant les streams en direct en cours directement sur la page, facilitant le saut dans l'action.\n• **Grille Vidéo Communautaire :** Parcourez une collection de vidéos et de streams passés soumis par les joueurs. Découvrez de nouvelles stratégies, des constructions impressionnantes ou profitez simplement de regarder d'autres explorer Metacube.\n• **Soumission Facile :** Un formulaire simple vous permet de soumettre votre lien vidéo ou stream, d'ajouter une description et même de spécifier la langue de votre contenu." },
            { type: "paragraph", content: "L'objectif est de favoriser un espace dynamique et interactif où les joueurs peuvent se connecter, apprendre les uns des autres et mettre en valeur les différentes façons dont Metacube est vécu. Nous avons hâte de voir votre contenu !" },
            { type: "paragraph", content: "Rendez-vous sur la page Streams Communautaires maintenant pour la découvrir et soumettre votre premier stream ou vidéo !" },
        ],
        relatedPosts: ["welcome-to-our-new-blog", "nft-collectibles-guide"],
    },
    "nft-collectibles-guide": {
        id: "nft-collectibles-guide",
        title: "Le Guide Ultime des Objets de Collection NFT dans Metacube",
        date: "2025-05-07",
        author: "The Metacube Team",
        category: "Guides",
        imageUrl: "/blog/marketnft.png",
        excerpt: "Débloquez les secrets des objets de collection NFT dans Metacube. Ce guide couvre la rareté, les traits et comment tirer le meilleur parti de vos actifs numériques.",
        content: [
            { type: "heading", content: "Comprendre les Niveaux de Rareté" },
            { type: "paragraph", content: "Dans Metacube, les objets de collection NFT existent en différents niveaux de rareté, chacun influençant leur unicité et leur valeur potentielle. Ces niveaux sont généralement : **Commun, Rare, Épique, Mythique et Légendaire**. Plus l'objet est rare, plus ses attributs et son apparence sont distincts." },
            { type: "paragraph", content: "• Commun : Poids 9+\n• Rare : Poids 7-8\n• Épique : Poids 5-6\n• Mythique : Poids 2-4\n• Légendaire : Poids 1" },
            { type: "image", content: "/blog/raritynft.png", alt: "Graphique de Distribution de Rareté NFT" },
            { type: "paragraph", content: "La distribution de ces raretés est soigneusement gérée pour garantir une expérience de collection équilibrée et engageante." },
            { type: "heading", content: "Traits et Attributs Clés" },
            { type: "paragraph", content: "Chaque objet de collection NFT possède un ensemble de traits qui définissent ses caractéristiques. Ceux-ci peuvent aller d'éléments visuels comme la *couleur* et le *design* à des attributs fonctionnels qui pourraient affecter le gameplay ou l'utilité au sein de l'écosystème Metacube." },
            { type: "paragraph", content: "Comprendre ces traits est crucial pour évaluer la valeur et le potentiel d'un NFT. Les collectionneurs recherchent souvent des objets avec des combinaisons de traits rares ou ceux qui complètent leur style de jeu." },
        ],
        relatedPosts: ["welcome-to-our-new-blog", "metacube-gameplay-guide"],
    },
    "starknet-transactions-batcher": {
        id: "starknet-transactions-batcher",
        title: "Un système de traitement par lots des transactions Starknet",
        date: "2025-05-07",
        author: "The Metacube Team",
        category: "Development",
        imageUrl: "/blog/batcher_b.jfif",
        excerpt: "Découvrez le système de traitement par lots des transactions utilisé dans Metacube pour envoyer instantanément les NFT gagnés par les joueurs, avec une implémentation détaillée en Go.",
        content: [
            { type: "heading", content: "Résumé" },
            { type: "paragraph", content: "Cet article présente le système de traitement par lots des transactions utilisé dans Metacube pour envoyer instantanément les NFT gagnés par les joueurs. Il explique l'architecture évolutive basée sur des acteurs du système et fournit une implémentation détaillée en Go. Tous les extraits de code sont disponibles dans le [dépôt GitHub](https://github.com/metacube-games/starknet-batcher) associé." },
            { type: "paragraph", content: "Cet article est basé sur l'article initialement publié sur [dev.to](https://dev.to/bastienfaivre/a-starknet-transactions-batcher-1hpk) par Bastien Faivre." },
            { type: "heading", content: "Architecture" },
            { type: "paragraph", content: "Le Batcher est composé de deux acteurs principaux :" },
            { type: "paragraph", content: "• **Le Builder** reçoit les transactions, les regroupe en une seule transaction multicall et l'envoie à l'acteur Sender.\n• **Le Sender** finalise la transaction avec les champs appropriés (nonce, frais max, etc.), la signe, l'envoie au réseau Starknet et surveille son statut." },
            { type: "paragraph", content: "Cette séparation des acteurs permet un système évolutif et efficace. Le builder prépare les transactions pendant que le sender les envoie, permettant un flux de transactions continu et efficace." },
            { type: "image", content: "/blog/architecture_graph.webp", alt: "Architecture du Batcher Starknet" },
            { type: "heading", content: "Implémentation" },
            { type: "paragraph", content: "L'implémentation suivante est spécifique à Go, mais les concepts peuvent facilement être adaptés à d'autres langages, car les fonctionnalités restent les mêmes. De plus, notez que cette implémentation est spécifique à l'envoi de NFT depuis le même contrat. Cependant, une approche plus générique est mentionnée plus loin dans l'article. Enfin, le code est basé sur la [bibliothèque starknet.go](https://github.com/NethermindEth/starknet.go) développée par Nethermind." },
            { type: "paragraph", content: "Commençons par le `Batcher` lui-même :" },
            {
                type: "code",
                language: "go",
                content: 'type Batcher struct {\n    accnt           *account.Account\n    contractAddress *felt.Felt\n    maxSize         int\n    inChan          <-chan []string\n    failChan        chan<- []string\n}'
            },
            { type: "paragraph", content: "Le Batcher exécute à la fois les acteurs `Builder` et `Sender` simultanément :" },
            {
                type: "code",
                language: "go",
                content: 'type TxnDataPair struct {\n    Txn  rpc.BroadcastInvokev1Txn\n    Data [][]string\n}\n\nfunc (b *Batcher) Run() {\n    txnDataPairChan := make(chan TxnDataPair)\n\n    go b.runBuildActor(txnDataPairChan)\n    go b.runSendActor(txnDataPairChan)\n}'
            },
            { type: "heading", content: "Builder" },
            { type: "paragraph", content: "Analysons l'acteur Build. Notez que le code est simplifié pour une meilleure lisibilité (code complet disponible sur [GitHub](https://github.com/metacube-games/starknet-batcher/))." },
            {
                type: "code",
                language: "go",
                content: '// This function builds a function call from the transaction data.\nfunc (b *Batcher) buildFunctionCall(data []string) (*rpc.FunctionCall, error) {\n    // Parse the recipient address\n    toAddressInFelt, err := utils.HexToFelt(data[0])\n    if err != nil {\n        // ... error handling ...\n    }\n\n    // Parse the NFT ID\n    nftID, err := strconv.Atoi(data[1])\n    if err != nil {\n        // ... error handling ...\n    }\n\n    // The entry point is a standard ERC721 function\n    // https://docs.openzeppelin.com/contracts-cairo/0.20.0/erc721\n    return &rpc.FunctionCall{\n        ContractAddress: b.contractAddress,\n        EntryPointSelector: utils.GetSelectorFromNameFelt(\n            "safe_transfer_from",\n        ),\n        Calldata: []*felt.Felt{\n            b.accnt.AccountAddress, // from\n            toAddressInFelt, // to\n            new(felt.Felt).SetUint64(uint64(nftID)), // NFT ID\n            new(felt.Felt).SetUint64(0), // data -> None\n            new(felt.Felt).SetUint64(0), // extra data -> None\n        },\n    }, nil\n}\n\n// This function builds the batch transaction from the function calls.\nfunc (b *Batcher) buildBatchTransaction(functionCalls []rpc.FunctionCall) (rpc.BroadcastInvokev1Txn, error) {\n    // Format the calldata (i.e., the function calls)\n    calldata, err := b.accnt.FmtCalldata(functionCalls)\n    if err != nil {\n        // ... error handling ...\n    }\n\n    return rpc.BroadcastInvokev1Txn{\n        InvokeTxnV1: rpc.InvokeTxnV1{\n            MaxFee:        new(felt.Felt).SetUint64(MAX_FEE), // Define MAX_FEE appropriately\n            Version:       rpc.TransactionV1,\n            Nonce:         new(felt.Felt).SetUint64(0), // Will be set by the send actor\n            Type:          rpc.TransactionType_Invoke,\n            SenderAddress: b.accnt.AccountAddress,\n            Calldata:      calldata,\n        },\n    }, nil\n}\n\n// Actual Build actor event loop\nfunc (b *Batcher) runBuildActor(txnDataPairChan chan<- TxnDataPair) {\n    size := 0\n    functionCalls := make([]rpc.FunctionCall, 0, b.maxSize)\n    currentData := make([][]string, 0, b.maxSize)\n    var WAITING_TIME = 5 * time.Second // Example waiting time\n\n    for {\n        trigger := false\n        select {\n        case data, ok := <-b.inChan:\n            if !ok {\n                // Channel closed, handle shutdown\n                return\n            }\n            functionCall, err := b.buildFunctionCall(data)\n            if err != nil {\n                // Handle error, maybe send to failChan\n                continue\n            }\n            functionCalls = append(functionCalls, *functionCall)\n            size++\n            currentData = append(currentData, data)\n            if size >= b.maxSize {\n                trigger = true\n            }\n        case <-time.After(WAITING_TIME):\n            if size > 0 {\n                trigger = true\n            }\n        }\n\n        if trigger {\n            builtTxn, err := b.buildBatchTransaction(functionCalls)\n            if err != nil {\n                // Handle error, maybe send all in currentData to failChan\n            } else {\n                txnDataPairChan <- TxnDataPair{\n                    Txn:  builtTxn,\n                    Data: currentData,\n                }\n            }\n            size = 0\n            functionCalls = make([]rpc.FunctionCall, 0, b.maxSize)\n            currentData = make([][]string, 0, b.maxSize)\n        }\n    }\n}'
            },
            { type: "heading", content: "Sender" },
            { type: "paragraph", content: "Analysons maintenant l'acteur Sender. Notez que le code est simplifié pour une meilleure lisibilité (code complet disponible sur [GitHub](https://github.com/metacube-games/starknet-batcher/))." },
            {
                type: "code",
                language: "go",
                content: '// Actual Send actor event loop\nfunc (b *Batcher) runSendActor(txnDataPairChan <-chan TxnDataPair) {\n    oldNonce := new(felt.Felt).SetUint64(0)\n\n    for {\n        txnDataPair, ok := <-txnDataPairChan\n        if !ok {\n            // Channel closed, handle shutdown\n            return\n        }\n        txn := txnDataPair.Txn\n        data := txnDataPair.Data // To send to failChan if needed\n\n        nonce, err := b.accnt.Nonce(\n            context.Background(),\n            rpc.BlockID{Tag: "latest"},\n            b.accnt.AccountAddress,\n        )\n        if err != nil {\n            // Handle error, send data to failChan\n            continue\n        }\n\n        if nonce.Cmp(oldNonce) <= 0 {\n            nonce.Add(oldNonce, new(felt.Felt).SetUint64(1))\n        }\n\n        txn.InvokeTxnV1.Nonce = nonce\n\n        err = b.accnt.SignInvokeTransaction(\n            context.Background(),\n            &txn.InvokeTxnV1,\n        )\n        if err != nil {\n            // Handle error, send data to failChan\n            continue\n        }\n\n        // Optional: Estimate fee\n        // fee, err := b.accnt.EstimateFee(...)\n        // if err != nil { ... }\n        // if fee > MAX_ACCEPTABLE_FEE { ... re-sign if MaxFee changed ... }\n\n        resp, err := b.accnt.SendTransaction(\n            context.Background(),\n            &txn,\n        )\n        if err != nil {\n            // Handle error, send data to failChan\n            continue\n        }\n\n    statusLoop:\n        for {\n            time.Sleep(time.Second * 5) // Wait before checking status\n            txStatus, err := b.accnt.GetTransactionStatus(\n                context.Background(),\n                resp.TransactionHash,\n            )\n            if err != nil {\n                // Log error, maybe retry or send to failChan after X retries\n                continue\n            }\n\n            switch txStatus.ExecutionStatus {\n            case rpc.TxnExecutionStatusSUCCEEDED:\n                oldNonce = nonce\n                // Successfully sent, log or notify\n                break statusLoop\n            case rpc.TxnExecutionStatusREVERTED:\n                oldNonce = nonce // Nonce is consumed even on revert\n                // Send data to failChan\n                break statusLoop\n            default: // PENDING, etc.\n            }\n\n            switch txStatus.FinalityStatus {\n            case rpc.TxnStatus_Received:\n                continue\n            case rpc.TxnStatus_Accepted_On_L2, rpc.TxnStatus_Accepted_On_L1:\n                oldNonce = nonce\n                // Finalized, log or notify\n                break statusLoop\n            case rpc.TxnStatus_Rejected:\n                // Send data to failChan (nonce might not be consumed, check Starknet docs)\n                break statusLoop\n            default:\n            }\n        }\n    }\n}'
            },
            { type: "heading", content: "Vers un système générique" },
            { type: "paragraph", content: "Le système présenté est spécifique à l'envoi de NFT depuis le même contrat. Cependant, l'architecture peut facilement être adaptée pour envoyer tout type de transaction.\n\nPremièrement, les données de transaction envoyées au Batcher doivent être plus génériques et, par conséquent, contenir plus d'informations. Elles doivent contenir l'adresse du contrat, le sélecteur du point d'entrée et les données d'appel. La fonction `buildFunctionCall` doit ensuite être adaptée pour analyser ces informations.\n\nOn pourrait également aller plus loin en rendant le compte expéditeur générique. Cela nécessiterait plus de refactorisation, car les transactions doivent être regroupées par compte expéditeur. Cependant, c'est faisable et permettrait un système plus polyvalent.\n\nCependant, rappelez-vous que **l'optimisation prématurée est la racine de tous les maux**. Par conséquent, si vous devez simplement envoyer des NFT ou un token spécifique tel que ETH ou STRK, le système présenté est amplement suffisant." },
            { type: "heading", content: "Outil CLI" },
            { type: "paragraph", content: "Le code du dépôt peut être utilisé comme outil CLI pour envoyer un lot de NFT par lots. L'outil est facile à utiliser, et vous devriez pouvoir l'adapter à vos besoins après avoir lu cet article. Veuillez consulter le [README](https://github.com/metacube-games/starknet-batcher/) pour plus d'informations." },
            { type: "heading", content: "Conclusion" },
            { type: "paragraph", content: "J'espère que cet article vous a aidé à mieux comprendre comment Metacube envoie des NFT à ses joueurs. Le système est un composant d'infrastructure clé, et nous sommes heureux de le partager avec la communauté. Si vous avez des questions ou des commentaires, n'hésitez pas à commenter ou à me contacter. Merci d'avoir lu !" },
            { type: "paragraph", content: "Pour plus d'informations, consultez l'[article original sur dev.to](https://dev.to/bastienfaivre/a-starknet-transactions-batcher-1hpk) et le [dépôt GitHub](https://github.com/metacube-games/starknet-batcher)." }
        ],
        relatedPosts: ["starknet-signatures-guide"],
    },
    "starknet-signatures-guide": {
        id: "starknet-signatures-guide",
        title: "Un guide sur les signatures Starknet",
        date: "2025-05-07",
        author: "The Metacube Team",
        category: "Development",
        imageUrl: "/blog/signatures_b.jfif",
        excerpt: "Découvrez le processus de signature et de vérification des signatures sur Starknet, avec des exemples de code en TypeScript et Go.",
        content: [
            { type: "heading", content: "Résumé" },
            { type: "paragraph", content: "Cet article décrit le processus de signature et de vérification d'une signature sur Starknet. Il commence par présenter l'Abstraction de Compte et comment elle modifie la vérification de signature par rapport aux blockchains traditionnelles comme Ethereum. Il fournit ensuite des exemples de code complets en TypeScript et Go pour signer un message et vérifier une signature en utilisant deux méthodes disponibles sur Starknet : en utilisant la clé publique de l'utilisateur et en utilisant l'adresse du compte de l'utilisateur." },
            { type: "paragraph", content: "Cet article est basé sur l'article initialement publié sur [dev.to](https://dev.to/bastienfaivre/a-guide-on-starknet-signatures-a3m) par Bastien Faivre." },
            { type: "heading", content: "Abstraction de Compte" },
            { type: "paragraph", content: "L'Abstraction de Compte est une fonctionnalité centrale de Starknet qui change fondamentalement le fonctionnement des comptes par rapport aux chaînes comme Ethereum. Dans Starknet, les comptes sont des smart contracts qui peuvent implémenter une logique arbitraire pour la validation de transaction. Cela signifie que différents contrats de compte peuvent implémenter différentes méthodes de vérification de signature. Bien que la plupart des comptes Starknet suivent un standard pour la vérification de signature, il est essentiel de comprendre que le contrat de compte lui-même définit la logique de validation." },
            { type: "heading", content: "Signer un message" },
            { type: "paragraph", content: "Lors de la signature d'un message sur Starknet, vous devez d'abord obtenir une clé privée et son compte correspondant. Il existe différentes façons de le faire en fonction du langage et de la bibliothèque utilisés. En TypeScript, vous pouvez utiliser une bibliothèque comme `starknet` ou `starknet.js`. En Go, vous pouvez utiliser la bibliothèque `starknet.go` développée par Nethermind." },
            { type: "paragraph", content: "Voici un exemple de signature d'un message en TypeScript :" },
            {
                type: "code",
                language: "typescript",
                content: 'import { Signature, constants, ec, hash, stark } from "starknet";\n\n// Generate a private key (usually you would use a secure storage method)\nconst privateKey = stark.randomAddress();\n\n// Get the public key from the private key\nconst publicKey = ec.starkCurve.getStarkKey(privateKey);\n\n// The message to sign\nconst message = "Hello, Starknet!";\n\n// Hash the message\nconst messageHash = hash.starknetKeccak(message);\n\n// Sign the message hash\nconst signature = ec.starkCurve.sign(messageHash, privateKey);\n\n// The signature is an array of two elements: r and s\nconsole.log("Signature:", signature);'
            },
            { type: "heading", content: "Vérifier une signature en utilisant la clé publique" },
            { type: "paragraph", content: "Vérifier une signature en utilisant la clé publique est simple sur la plupart des plateformes blockchain. Dans Starknet, vous pouvez vérifier une signature en utilisant la clé publique du signataire avec un code comme celui-ci :" },
            {
                type: "code",
                language: "typescript",
                content: '// Verify the signature using the public key\nconst isValid = ec.starkCurve.verify(messageHash, signature, publicKey);\n\nconsole.log("Is the signature valid?", isValid);'
            },
            { type: "heading", content: "Vérifier une signature en utilisant l'adresse du compte" },
            { type: "paragraph", content: "Dans Starknet, en raison de l'Abstraction de Compte, vous devez parfois vérifier une signature en utilisant l'adresse du compte du signataire plutôt que sa clé publique. Cela nécessite d'appeler la méthode `is_valid_signature` sur le contrat de compte. (Remarque : L'article original mentionne `isPrefixedMessageValid`, mais les contrats de compte standard utilisent souvent `is_valid_signature`. La méthode exacte peut varier.)" },
            {
                type: "code",
                language: "typescript",
                content: 'import { Account, Provider, constants, stark, Signature } from "starknet";\n\n// Initialize a provider to connect to Starknet\nconst provider = new Provider({ sequencer: { network: constants.NetworkName.SN_MAIN } }); // Or your desired network\n\n// Assume signerAddress, pkForSigner, messageHash and signature are defined\n// const signerAddress = "0x123...";\n// const pkForSigner = "0x456..."; // or connect with a wallet signer\n// const messageHash = "0x789..."; \n// const signature: Signature = ["0xabc...", "0xdef..."]; \n\nasync function verifySignatureUsingAccount(signerAddress: string, pkForSigner: string, msgHash: string, sig: Signature) {\n  const account = new Account(provider, signerAddress, pkForSigner);\n  try {\n    const result = await account.call("is_valid_signature", [\n        msgHash,          // hash\n        sig.length.toString(), // signature_len\n        ...sig             // signature (r, s)\n    ]);\n    // For Ready Wallet/Braavos standard accounts, a single felt "0x1" (VALID_SIGNATURE) is returned on success.\n    // Cairo0 contracts might return an array if the function has multiple return values.\n    // Check the specific account contract for exact return format if issues arise.\n    const isValid = Array.isArray(result) ? result[0] === "0x1" : result.result[0] === "0x1";\n    console.log("Is the signature valid (using account)?", isValid);\n    return isValid;\n  } catch (error) {\n    console.error("Error verifying signature using account:", error);\n    return false;\n  }\n}\n\n// Example usage (ensure variables are set)\n// verifySignatureUsingAccount(signerAddress, pkForSigner, messageHash, signature);'
            },
            { type: "heading", content: "Travailler avec un portefeuille (Ready Wallet, Braavos, etc.)" },
            { type: "paragraph", content: "Lorsque vous travaillez avec un portefeuille comme Ready Wallet ou Braavos, vous n'aurez généralement pas un accès direct à la clé privée de l'utilisateur. Au lieu de cela, vous devrez utiliser l'interface du portefeuille pour demander à l'utilisateur de signer un message." },
            {
                type: "code",
                language: "typescript",
                content: '// This is a conceptual example, actual implementation depends on the wallet connector library (e.g., starknet-react, get-starknet)\nasync function signMessageWithWallet(wallet: any, message: string) { // Use specific wallet type from your library\n  try {\n    // The method might be `signMessage`, `personalSign`, or similar\n    // The exact structure for `typedData` or `message` depends on the wallet and standard (e.g., EIP-712 for Starknet)\n    const signature = await wallet.account.signMessage({ message }); // Example structure, might need TypedData for some wallets\n    console.log("Signature from wallet:", signature);\n    return signature;\n  } catch (error) {\n    console.error("Error signing message with wallet:", error);\n    return null;\n  }\n}'
            },
            { type: "heading", content: "Conclusion" },
            { type: "paragraph", content: "Le modèle d'Abstraction de Compte de Starknet offre de la flexibilité pour la vérification de signature mais nécessite de comprendre les différences par rapport aux modèles de signature blockchain traditionnels. En suivant les exemples fournis, vous devriez être en mesure de signer efficacement des messages et de vérifier des signatures dans vos applications Starknet. Rappelez-vous que les détails d'implémentation spécifiques peuvent varier en fonction du fournisseur de portefeuille et du contrat de compte utilisé. Référez-vous toujours à la documentation spécifique du portefeuille ou du contrat de compte avec lequel vous travaillez." },
            { type: "paragraph", content: "Pour plus d'informations, consultez l'[article original sur dev.to](https://dev.to/bastienfaivre/a-guide-on-starknet-signatures-a3m) par Bastien Faivre." }
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
