export interface BlogContent {
    type: "heading" | "paragraph" | "image" | "code";
    content: string;
    alt?: string;
    language?: string;
}

export interface Category {
    name: string;
    slug: string | null;
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

// Helper function to get rarity class based on the rarity name
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

// Helper function for glow effects based on rarity - enhanced for Hearthstone style
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
    { name: "All Posts", slug: null },
    { name: "Announcements", slug: "announcements" },
    { name: "Guides", slug: "guides" },
    { name: "Development", slug: "development" },
    { name: "Events", slug: "events" },
];

export const blogPosts: Record<string, BlogPost> = {
    "metacube-gameplay-guide": {
        id: "metacube-gameplay-guide",
        title: "Discover the Metacube Universe: Complete Gameplay Guide",
        date: "2025-05-07",
        author: "The Metacube Team",
        category: "Guides",
        imageUrl: "/blog/metacube_g.jpg",
        excerpt: "Dive into Metacube's exciting gameplay mechanics, learn about the mysterious Metacube structure, in-game currency, and overcome challenging hazards in this comprehensive guide.",
        content: [
            { type: "heading", content: "Introduction to Metacube" },
            { type: "paragraph", content: "Metacube is a revolutionary free-to-play NFT game that combines the excitement of treasure hunting, the intrigue of blockchain technology, and the thrill of interstellar exploration. In this immersive gaming experience, players assume the role of Stove the Crypto Raver, a die-hard fan of cryptocurrency and a regular at interstellar raves. Alongside fellow Stellar Scavengers, players embark on a daring mission to unlock the secrets of the Metacube, a celestial vault containing valuable blockchain data and rare NFTs." },
            { type: "paragraph", content: "This comprehensive guide will walk you through the core gameplay elements, help you understand the mysterious Metacube structure, explain the in-game currency system, and prepare you for the various hazards and challenges you'll face on your journey." },

            { type: "heading", content: "Gameplay Basics" },
            { type: "paragraph", content: "Players begin their journey on the asteroid Zerith-9, where the Metacube is located. As Stove the Crypto Raver, they must utilize their mining rig weapon to break the smaller cubes that make up the Metacube. Each cube contains hidden blockchain data, and some cubes hold coveted NFTs. Players can collaborate with fellow Stellar Scavengers or compete against them to uncover the most valuable blockchain data and NFTs." },
            { type: "paragraph", content: "The game combines elements of exploration, resource gathering, and strategic decision-making as you navigate the asteroid's surface and the Metacube's complex structure. Your main objectives include mining cubes, collecting valuable data, avoiding hazards, and upgrading your equipment to access more challenging areas." },

            { type: "heading", content: "The Metacube: A Colossal Crypto Mystery" },
            { type: "paragraph", content: "The Metacube is the central focus of the game, a colossal structure made up of 256x256x256 individual cubes. Each smaller cube bears a symbol representing a cryptocurrency, such as Bitcoin or Ethereum, or a unique piece of blockchain data. The Metacube's creators imbued it with advanced AI defenses and hidden hazards, making the journey to uncover its secrets a challenging and thrilling endeavor." },
            { type: "paragraph", content: "As you explore the Metacube, you'll discover various sections with different difficulty levels and rewards. Some areas might contain rare NFTs but are guarded by more powerful defenses. Understanding the Metacube's structure and planning your mining strategy accordingly will be crucial to your success." },

            { type: "heading", content: "In-Game Currency & Upgrades" },
            { type: "paragraph", content: "Throughout the game, players accumulate in-game currency by breaking cubes and completing various challenges. This currency, referred to as \"MetaCoins\" allows players to upgrade Stove's abilities, including flying, running, and walking, as well as enhancing the power and efficiency of the mining rig weapon. Upgrades are essential for tackling more formidable defenses of the Metacube and increasing the chances of discovering rare NFTs." },
            { type: "paragraph", content: "The game features six different types of upgrades, each enhancing specific aspects of your gameplay experience. These upgrades can significantly impact your mining efficiency, movement capabilities, and overall survival in the hostile environment of Zerith-9 and the Metacube." },

            { type: "heading", content: "Hazards and Challenges" },
            { type: "paragraph", content: "To create an engaging and dynamic gaming experience, players must overcome a variety of hazards and challenges throughout their adventure:" },
            { type: "paragraph", content: "• **Cube Counterattacks**: Some cubes possess powerful defenses and will retaliate if struck improperly, damaging Stove and his mining rig weapon.\n• **Tax Auditors**: Certain cubes, when destroyed, unleash relentless tax auditors that chase and harass players. If a player's health reaches zero, they are temporarily locked out of the game, creating a sense of urgency and risk.\n• **Environmental Hazards**: The surface of Zerith-9 poses unique challenges, including the potential for fall damage from high elevations and the risk of running out of oxygen while exploring the vacuum of space.\n• **Time Pressure**: As the Stellar Scavengers race against time to unlock the Metacube's secrets, players must optimize their strategies and make calculated decisions to stay ahead of the competition." },
            { type: "paragraph", content: "By overcoming these challenges, players progress through the game, acquiring valuable blockchain data and NFTs that will ultimately determine their success in Metacube." },

            { type: "heading", content: "Explore the Complete Metacube Universe" },
            { type: "paragraph", content: "This guide provides just a glimpse into the vast and exciting world of Metacube. To dive deeper into the game mechanics, NFT collections, and future development plans, we invite you to check out our [official Metacube whitepaper](https://metacube-1.gitbook.io/metacube-games)." },
            { type: "paragraph", content: "The whitepaper contains extensive information about:" },
            { type: "paragraph", content: "• Detailed gameplay mechanics and strategies\n• Complete breakdown of NFT collectibles and their rarity\n• The NFT marketplace and trading system\n• In-game utility of various digital assets\n• Future development roadmap including Season 2 and beyond\n• Team behind Metacube's development" },
            { type: "paragraph", content: "Whether you're a new player looking to get started or a seasoned Stellar Scavenger seeking advanced strategies, the whitepaper provides valuable insights to enhance your Metacube experience." },
        ],
        relatedPosts: ["welcome-to-our-new-blog", "nft-collectibles-guide"],
    },
    "welcome-to-our-new-blog": {
        id: "welcome-to-our-new-blog",
        title: "Welcome to the Metacube Blog!",
        date: "2025-05-07",
        author: "The Metacube Team",
        category: "Announcements",
        imageUrl: "/blog/banner_m.jfif",
        excerpt: "We're excited to launch our new blog! Discover updates, guides, community highlights, and insights into the world of Metacube.",
        content: [
            { type: "heading", content: "A New Hub for Metacube News" },
            { type: "paragraph", content: "Welcome, Metacubers! We are thrilled to officially launch the **Metacube Blog**, your new central hub for all things related to our ever-expanding universe. Here, you'll find the latest news, development updates, in-depth game guides, community spotlights, and much more." },
            { type: "paragraph", content: "Our goal is to provide you with a direct line to the team and a place to explore the depths of Metacube. Whether you're a *seasoned player* or just starting your journey, we hope this blog becomes a valuable resource for you." },
            { type: "heading", content: "What to Expect" },
            { type: "paragraph", content: "• **Latest Announcements:** Be the first to know about new features, upcoming events, and major updates.\n• **Developer Insights:** Get a behind-the-scenes look at our development process, challenges, and future plans.\n• **Game Guides & Tips:** Master Metacube with detailed guides, strategies, and tips from both the team and experienced players.\n• **Community Highlights:** We'll be showcasing amazing creations, player stories, and community-run events. Share your content with us!\n• **Lore & Story:** Dive deeper into the world of Metacube and its rich narrative." },
            { type: "paragraph", content: "We're excited to start this new chapter with you. Stay tuned for regular updates, and don't hesitate to share your feedback and suggestions in our community channels!" },
        ],
        relatedPosts: ["introducing-community-streams", "nft-collectibles-guide"],
    },
    "introducing-community-streams": {
        id: "introducing-community-streams",
        title: "Introducing Community Streams: Share Your Metacube Moments!",
        date: "2025-05-07",
        author: "The Metacube Team",
        category: "Announcements",
        imageUrl: "/blog/banner_m.jfif",
        excerpt: "Discover our new Community Streams section! Watch live gameplay, share your own streams, and connect with fellow Metacubers.",
        content: [
            { type: "heading", content: "Shine a Spotlight on Your Gameplay" },
            { type: "paragraph", content: "We're incredibly excited to announce the launch of our brand new **Community Streams** section on the Metacube website! This is your dedicated space to discover live gameplay from fellow Metacubers and, more importantly, to share your own Metacube adventures with the world." },
            { type: "paragraph", content: "Whether you're a seasoned streamer or just want to share a cool moment, our Community Streams page makes it easy. You can submit links to your live streams or VODs from popular platforms like [YouTube](https://youtube.com), [Twitch](https://twitch.tv), and [Kick](https://kick.com)." },
            { type: "heading", content: "What You'll Find" },
            { type: "paragraph", content: "• **Featured Live Streams:** We'll be highlighting ongoing live streams directly on the page, making it easy to jump into the action.\n• **Community Video Grid:** Browse a collection of videos and past streams submitted by players. Discover new strategies, impressive builds, or just enjoy watching others explore Metacube.\n• **Easy Submission:** A simple form allows you to submit your video or stream link, add a description, and even specify the language of your content." },
            { type: "paragraph", content: "The goal is to foster a vibrant and interactive space where players can connect, learn from each other, and showcase the diverse ways Metacube is experienced. We can't wait to see your content!" },
            { type: "paragraph", content: "Head over to the Community Streams page now to check it out and submit your first stream or video!" },
        ],
        relatedPosts: ["welcome-to-our-new-blog", "nft-collectibles-guide"],
    },
    "nft-collectibles-guide": {
        id: "nft-collectibles-guide",
        title: "The Ultimate Guide to NFT Collectibles in Metacube",
        date: "2025-05-07",
        author: "The Metacube Team",
        category: "Guides",
        imageUrl: "/blog/marketnft.png",
        excerpt: "Unlock the secrets of NFT collectibles in Metacube. This guide covers rarity, traits, and how to make the most of your digital assets.",
        content: [
            { type: "heading", content: "Understanding Rarity Tiers" },
            { type: "paragraph", content: "In Metacube, NFT collectibles come in various rarity tiers, each influencing their uniqueness and potential value. These tiers are typically: **Common, Uncommon, Rare, Epic, Legendary, and Mythic**. The rarer the item, the more distinct its attributes and appearance." },
            { type: "paragraph", content: "• Common: Weight 9+\n• Uncommon: Weight 7-8\n• Rare: Weight 5-6\n• Epic: Weight 3-4\n• Legendary: Weight 2\n• Mythic: Weight 1" },
            { type: "image", content: "/blog/raritynft.png", alt: "NFT Rarity Distribution Chart" },
            { type: "paragraph", content: "The distribution of these rarities is carefully managed to ensure a balanced and engaging collecting experience. You can often find rarity information directly on the item's description page or through community-driven databases." },
            { type: "heading", content: "Key Traits and Attributes" },
            { type: "paragraph", content: "Each NFT collectible possesses a set of traits that define its characteristics. These can range from visual elements like *color* and *design* to functional attributes that might affect gameplay or utility within the Metacube ecosystem." },
            { type: "paragraph", content: "• **Skins:** Common skins like 'Azure Blue' or 'Crimson Red'. Rarer skins might have animated textures or special particle effects.\n• **Accessories:** Items like hats, capes, or auras. Legendary accessories can grant unique visual flairs.\n• **Utility:** Some NFTs might offer specific in-game advantages, such as resource gathering boosts or access to exclusive areas." },
            { type: "paragraph", content: "Understanding these traits is crucial for assessing an NFT's value and potential. Collectors often seek out items with rare trait combinations or those that complement their playstyle." },
        ],
        relatedPosts: ["welcome-to-our-new-blog", "metacube-gameplay-guide"],
    },
    "starknet-transactions-batcher": {
        id: "starknet-transactions-batcher",
        title: "A Starknet transactions batcher",
        date: "2025-05-07",
        author: "The Metacube Team",
        category: "Development",
        imageUrl: "/blog/banner_m.jfif",
        excerpt: "Learn about the transactions batcher used in Metacube to send NFTs earned by players instantly, with a detailed implementation in Go.",
        content: [
            { type: "heading", content: "Abstract" },
            { type: "paragraph", content: "This article presents the transactions batcher used in Metacube to send NFTs earned by players instantly. It explains the batcher's scalable actor-based architecture and provides a detailed implementation in Go. All the code snippets are available in the associated [GitHub repository](https://github.com/metacube-games/starknet-batcher)." },
            { type: "paragraph", content: "This post is based on the article originally published on [dev.to](https://dev.to/bastienfaivre/a-starknet-transactions-batcher-1hpk) by Bastien Faivre." },
            { type: "heading", content: "Architecture" },
            { type: "paragraph", content: "The Batcher is composed of two main actors:" },
            { type: "paragraph", content: "• **The Builder** receives the transactions, batches them into a single multicall transaction, and sends it to the Sender actor.\n• **The Sender** finalizes the transaction with appropriate fields (nonce, max fee, etc.), signs it, sends it to the Starknet network, and monitors its status." },
            { type: "paragraph", content: "This actor separation allows for a scalable and efficient batcher. The builder prepares the transactions while the sender sends them, allowing for a continuous and efficient flow of transactions." },
            { type: "image", content: "/blog/architecture_graph.webp", alt: "Starknet Batcher Architecture" },
            { type: "heading", content: "Implementation" },
            { type: "paragraph", content: "The following implementation is specific to Go, but the concepts can easily be adapted to other languages, as the functionalities remain the same. Moreover, note that this implementation is specific to sending NFTs from the same contract. However, a more generic approach is mentioned later in the article. Lastly, the code is based on the [starknet.go library](https://github.com/NethermindEth/starknet.go) developed by Nethermind." },
            { type: "paragraph", content: "Let's start with the `Batcher` itself:" },
            {
                type: "code",
                language: "go",
                content: 'type Batcher struct {\n    accnt           *account.Account\n    contractAddress *felt.Felt\n    maxSize         int\n    inChan          <-chan []string\n    failChan        chan<- []string\n}'
            },
            { type: "paragraph", content: "The Batcher runs both the `Builder` and the `Sender` actors concurrently:" },
            {
                type: "code",
                language: "go",
                content: 'type TxnDataPair struct {\n    Txn  rpc.BroadcastInvokev1Txn\n    Data [][]string\n}\n\nfunc (b *Batcher) Run() {\n    txnDataPairChan := make(chan TxnDataPair)\n\n    go b.runBuildActor(txnDataPairChan)\n    go b.runSendActor(txnDataPairChan)\n}'
            },
            { type: "heading", content: "Builder" },
            { type: "paragraph", content: "Let's analyze the Build actor. Note that the code is simplified for better readability (full code available on [GitHub](https://github.com/metacube-games/starknet-batcher/))." },
            {
                type: "code",
                language: "go",
                content: '// This function builds a function call from the transaction data.\nfunc (b *Batcher) buildFunctionCall(data []string) (*rpc.FunctionCall, error) {\n    // Parse the recipient address\n    toAddressInFelt, err := utils.HexToFelt(data[0])\n    if err != nil {\n        // ... error handling ...\n    }\n\n    // Parse the NFT ID\n    nftID, err := strconv.Atoi(data[1])\n    if err != nil {\n        // ... error handling ...\n    }\n\n    // The entry point is a standard ERC721 function\n    // https://docs.openzeppelin.com/contracts-cairo/0.20.0/erc721\n    return &rpc.FunctionCall{\n        ContractAddress: b.contractAddress,\n        EntryPointSelector: utils.GetSelectorFromNameFelt(\n            "safe_transfer_from",\n        ),\n        Calldata: []*felt.Felt{\n            b.accnt.AccountAddress, // from\n            toAddressInFelt, // to\n            new(felt.Felt).SetUint64(uint64(nftID)), // NFT ID\n            new(felt.Felt).SetUint64(0), // data -> None\n            new(felt.Felt).SetUint64(0), // extra data -> None\n        },\n    }, nil\n}\n\n// This function builds the batch transaction from the function calls.\nfunc (b *Batcher) buildBatchTransaction(functionCalls []rpc.FunctionCall) (rpc.BroadcastInvokev1Txn, error) {\n    // Format the calldata (i.e., the function calls)\n    calldata, err := b.accnt.FmtCalldata(functionCalls)\n    if err != nil {\n        // ... error handling ...\n    }\n\n    return rpc.BroadcastInvokev1Txn{\n        InvokeTxnV1: rpc.InvokeTxnV1{\n            MaxFee:        new(felt.Felt).SetUint64(MAX_FEE), // Define MAX_FEE appropriately\n            Version:       rpc.TransactionV1,\n            Nonce:         new(felt.Felt).SetUint64(0), // Will be set by the send actor\n            Type:          rpc.TransactionType_Invoke,\n            SenderAddress: b.accnt.AccountAddress,\n            Calldata:      calldata,\n        },\n    }, nil\n}\n\n// Actual Build actor event loop\nfunc (b *Batcher) runBuildActor(txnDataPairChan chan<- TxnDataPair) {\n    size := 0\n    functionCalls := make([]rpc.FunctionCall, 0, b.maxSize)\n    currentData := make([][]string, 0, b.maxSize)\n    var WAITING_TIME = 5 * time.Second // Example waiting time\n\n    for {\n        trigger := false\n        select {\n        case data, ok := <-b.inChan:\n            if !ok {\n                // Channel closed, handle shutdown\n                return\n            }\n            functionCall, err := b.buildFunctionCall(data)\n            if err != nil {\n                // Handle error, maybe send to failChan\n                continue\n            }\n            functionCalls = append(functionCalls, *functionCall)\n            size++\n            currentData = append(currentData, data)\n            if size >= b.maxSize {\n                trigger = true\n            }\n        case <-time.After(WAITING_TIME):\n            if size > 0 {\n                trigger = true\n            }\n        }\n\n        if trigger {\n            builtTxn, err := b.buildBatchTransaction(functionCalls)\n            if err != nil {\n                // Handle error, maybe send all in currentData to failChan\n            } else {\n                txnDataPairChan <- TxnDataPair{\n                    Txn:  builtTxn,\n                    Data: currentData,\n                }\n            }\n            size = 0\n            functionCalls = make([]rpc.FunctionCall, 0, b.maxSize)\n            currentData = make([][]string, 0, b.maxSize)\n        }\n    }\n}'
            },
            { type: "heading", content: "Sender" },
            { type: "paragraph", content: "Let's now analyze the Sender actor. Note that the code is simplified for better readability (full code available on [GitHub](https://github.com/metacube-games/starknet-batcher/))." },
            {
                type: "code",
                language: "go",
                content: '// Actual Send actor event loop\nfunc (b *Batcher) runSendActor(txnDataPairChan <-chan TxnDataPair) {\n    oldNonce := new(felt.Felt).SetUint64(0)\n\n    for {\n        txnDataPair, ok := <-txnDataPairChan\n        if !ok {\n            // Channel closed, handle shutdown\n            return\n        }\n        txn := txnDataPair.Txn\n        data := txnDataPair.Data // To send to failChan if needed\n\n        nonce, err := b.accnt.Nonce(\n            context.Background(),\n            rpc.BlockID{Tag: "latest"},\n            b.accnt.AccountAddress,\n        )\n        if err != nil {\n            // Handle error, send data to failChan\n            continue\n        }\n\n        if nonce.Cmp(oldNonce) <= 0 {\n            nonce.Add(oldNonce, new(felt.Felt).SetUint64(1))\n        }\n\n        txn.InvokeTxnV1.Nonce = nonce\n\n        err = b.accnt.SignInvokeTransaction(\n            context.Background(),\n            &txn.InvokeTxnV1,\n        )\n        if err != nil {\n            // Handle error, send data to failChan\n            continue\n        }\n\n        // Optional: Estimate fee\n        // fee, err := b.accnt.EstimateFee(...)\n        // if err != nil { ... }\n        // if fee > MAX_ACCEPTABLE_FEE { ... re-sign if MaxFee changed ... }\n\n        resp, err := b.accnt.SendTransaction(\n            context.Background(),\n            &txn,\n        )\n        if err != nil {\n            // Handle error, send data to failChan\n            continue\n        }\n\n    statusLoop:\n        for {\n            time.Sleep(time.Second * 5) // Wait before checking status\n            txStatus, err := b.accnt.GetTransactionStatus(\n                context.Background(),\n                resp.TransactionHash,\n            )\n            if err != nil {\n                // Log error, maybe retry or send to failChan after X retries\n                continue\n            }\n\n            switch txStatus.ExecutionStatus {\n            case rpc.TxnExecutionStatusSUCCEEDED:\n                oldNonce = nonce\n                // Successfully sent, log or notify\n                break statusLoop\n            case rpc.TxnExecutionStatusREVERTED:\n                oldNonce = nonce // Nonce is consumed even on revert\n                // Send data to failChan\n                break statusLoop\n            default: // PENDING, etc.\n            }\n\n            switch txStatus.FinalityStatus {\n            case rpc.TxnStatus_Received:\n                continue\n            case rpc.TxnStatus_Accepted_On_L2, rpc.TxnStatus_Accepted_On_L1:\n                oldNonce = nonce\n                // Finalized, log or notify\n                break statusLoop\n            case rpc.TxnStatus_Rejected:\n                // Send data to failChan (nonce might not be consumed, check Starknet docs)\n                break statusLoop\n            default:\n            }\n        }\n    }\n}'
            },
            { type: "heading", content: "Towards a generic batcher" },
            { type: "paragraph", content: "The batcher presented is specific to sending NFTs from the same contract. However, the architecture can easily be adapted to send any type of transaction.\n\nFirst, the transaction data sent to the Batcher must be more generic and, therefore, contain more information. They must contain the contract address, the entry point selector, and the call data. The `buildFunctionCall` function must then be adapted to parse this information.\n\nOne could also go one step further by making the sender account generic. This would require more refactoring, as the transactions must be batched per sender account. However, it is feasible and would allow for a more versatile batcher.\n\nHowever, remember that **premature optimization is the root of all evil**. Therefore, if you just need to send NFTs or a specific token such as ETH or STRK, the batcher presented is more than enough." },
            { type: "heading", content: "CLI tool" },
            { type: "paragraph", content: "The repository code can be used as a CLI tool to send a bunch of NFTs by batch. The tool is easy to use, and you should be able to adapt it to your needs after reading this article. Please refer to the [README](https://github.com/metacube-games/starknet-batcher/) for more information." },
            { type: "heading", content: "Conclusion" },
            { type: "paragraph", content: "I hope that this article helped you to better understand how Metacube sends NFTs to its players. The batcher is a key infrastructure component, and we are happy to share it with the community. If you have any questions or feedback, feel free to comment or reach out to me. Thank you for reading!" },
            { type: "paragraph", content: "For more information, check out the [original article on dev.to](https://dev.to/bastienfaivre/a-starknet-transactions-batcher-1hpk) and the [GitHub repository](https://github.com/metacube-games/starknet-batcher)." }
        ],
        relatedPosts: ["starknet-signatures-guide"],
    },
    "starknet-signatures-guide": {
        id: "starknet-signatures-guide",
        title: "A guide on Starknet signatures",
        date: "2025-05-07",
        author: "The Metacube Team",
        category: "Development",
        imageUrl: "/blog/banner_m.jfif",
        excerpt: "Learn about the process of signing and verifying signatures on Starknet, with code examples in TypeScript and Go.",
        content: [
            { type: "heading", content: "Abstract" },
            { type: "paragraph", content: "This article outlines the process of signing and verifying a signature on Starknet. It begins by introducing Account Abstraction and how it modifies signature verification compared to traditional blockchains like Ethereum. It then provides comprehensive code examples in TypeScript and Go for signing a message and verifying a signature using two methods available on Starknet: using the user's public key and using the user's account address." },
            { type: "paragraph", content: "This post is based on the article originally published on [dev.to](https://dev.to/bastienfaivre/a-guide-on-starknet-signatures-a3m) by Bastien Faivre." },
            { type: "heading", content: "Account Abstraction" },
            { type: "paragraph", content: "Account Abstraction is a core feature of Starknet that fundamentally changes how accounts work compared to chains like Ethereum. In Starknet, accounts are smart contracts that can implement arbitrary logic for transaction validation. This means that different account contracts can implement different signature verification methods. While most Starknet accounts follow a standard for signature verification, it's essential to understand that the account contract itself defines the validation logic." },
            { type: "heading", content: "Signing a message" },
            { type: "paragraph", content: "When signing a message on Starknet, you first need to get a private key and its corresponding account. There are different ways to do so depending on the language and library used. In TypeScript, you can use a library like `starknet` or `starknet.js`. In Go, you can use the `starknet.go` library developed by Nethermind." },
            { type: "paragraph", content: "Here's an example of signing a message in TypeScript:" },
            {
                type: "code",
                language: "typescript",
                content: 'import { Signature, constants, ec, hash, stark } from "starknet";\n\n// Generate a private key (usually you would use a secure storage method)\nconst privateKey = stark.randomAddress();\n\n// Get the public key from the private key\nconst publicKey = ec.starkCurve.getStarkKey(privateKey);\n\n// The message to sign\nconst message = "Hello, Starknet!";\n\n// Hash the message\nconst messageHash = hash.starknetKeccak(message);\n\n// Sign the message hash\nconst signature = ec.starkCurve.sign(messageHash, privateKey);\n\n// The signature is an array of two elements: r and s\nconsole.log("Signature:", signature);'
            },
            { type: "heading", content: "Verifying a signature using the public key" },
            { type: "paragraph", content: "Verifying a signature using the public key is straightforward on most blockchain platforms. In Starknet, you can verify a signature using the signer's public key with code like this:" },
            {
                type: "code",
                language: "typescript",
                content: '// Verify the signature using the public key\nconst isValid = ec.starkCurve.verify(messageHash, signature, publicKey);\n\nconsole.log("Is the signature valid?", isValid);'
            },
            { type: "heading", content: "Verifying a signature using the account address" },
            { type: "paragraph", content: "In Starknet, due to Account Abstraction, sometimes you need to verify a signature using the signer's account address rather than their public key. This requires calling the `is_valid_signature` method on the account contract. (Note: The original article mentions `isPrefixedMessageValid`, but standard account contracts often use `is_valid_signature`. The exact method can vary.)" },
            {
                type: "code",
                language: "typescript",
                content: 'import { Account, Provider, constants, stark, Signature } from "starknet";\n\n// Initialize a provider to connect to Starknet\nconst provider = new Provider({ sequencer: { network: constants.NetworkName.SN_MAIN } }); // Or your desired network\n\n// Assume signerAddress, pkForSigner, messageHash and signature are defined\n// const signerAddress = "0x123...";\n// const pkForSigner = "0x456..."; // or connect with a wallet signer\n// const messageHash = "0x789..."; \n// const signature: Signature = ["0xabc...", "0xdef..."]; \n\nasync function verifySignatureUsingAccount(signerAddress: string, pkForSigner: string, msgHash: string, sig: Signature) {\n  const account = new Account(provider, signerAddress, pkForSigner);\n  try {\n    const result = await account.call("is_valid_signature", [\n        msgHash,          // hash\n        sig.length.toString(), // signature_len\n        ...sig             // signature (r, s)\n    ]);\n    // For ArgentX/Braavos standard accounts, a single felt "0x1" (VALID_SIGNATURE) is returned on success.\n    // Cairo0 contracts might return an array if the function has multiple return values.\n    // Check the specific account contract for exact return format if issues arise.\n    const isValid = Array.isArray(result) ? result[0] === "0x1" : result.result[0] === "0x1";\n    console.log("Is the signature valid (using account)?", isValid);\n    return isValid;\n  } catch (error) {\n    console.error("Error verifying signature using account:", error);\n    return false;\n  }\n}\n\n// Example usage (ensure variables are set)\n// verifySignatureUsingAccount(signerAddress, pkForSigner, messageHash, signature);'
            },
            { type: "heading", content: "Working with a wallet (Argent, Braavos, etc.)" },
            { type: "paragraph", content: "When working with a wallet like Argent or Braavos, you typically won't have direct access to the user's private key. Instead, you'll need to use the wallet's interface to request the user to sign a message." },
            {
                type: "code",
                language: "typescript",
                content: '// This is a conceptual example, actual implementation depends on the wallet connector library (e.g., starknet-react, get-starknet)\nasync function signMessageWithWallet(wallet: any, message: string) { // Use specific wallet type from your library\n  try {\n    // The method might be `signMessage`, `personalSign`, or similar\n    // The exact structure for `typedData` or `message` depends on the wallet and standard (e.g., EIP-712 for Starknet)\n    const signature = await wallet.account.signMessage({ message }); // Example structure, might need TypedData for some wallets\n    console.log("Signature from wallet:", signature);\n    return signature;\n  } catch (error) {\n    console.error("Error signing message with wallet:", error);\n    return null;\n  }\n}'
            },
            { type: "heading", content: "Conclusion" },
            { type: "paragraph", content: "Starknet's Account Abstraction model provides flexibility for signature verification but requires understanding the differences from traditional blockchain signature models. By following the examples provided, you should be able to effectively sign messages and verify signatures in your Starknet applications. Remember that the specific implementation details may vary depending on the wallet provider and account contract being used. Always refer to the specific documentation of the wallet or account contract you're working with." },
            { type: "paragraph", content: "For more information, check out the [original article on dev.to](https://dev.to/bastienfaivre/a-guide-on-starknet-signatures-a3m) by Bastien Faivre." }
        ],
        relatedPosts: ["starknet-transactions-batcher"],
    }
};

export const getBlogPostsByCategory = (categorySlug: string | null): BlogPost[] => {
    if (!categorySlug) {
        return Object.values(blogPosts);
    }
    return Object.values(blogPosts).filter(post => post.category.toLowerCase().replace(/\s+/g, '-') === categorySlug);
};

export const getPostById = (id: string): BlogPost | undefined => {
    return blogPosts[id];
};

// Helper function to get all blog posts
export const getAllBlogPosts = (): BlogPost[] => {
    const allPosts = Object.values(blogPosts);
    // console.log("getAllBlogPosts called, returning", allPosts.length, "posts");
    // console.log("All post IDs:", Object.keys(blogPosts));
    // console.log("All post titles:", allPosts.map(p => p.title));
    return allPosts;
}; 