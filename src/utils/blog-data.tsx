// Blog post type definitions
export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  imageUrl: string;
  content: BlogContent[];
  relatedPosts?: string[];
};

export type BlogContent = {
  type: "heading" | "paragraph" | "image";
  content: string;
  alt?: string;
};

// Categories
export const categories = [
  { name: "All", slug: "" },
  { name: "Gameplay", slug: "gameplay" },
  { name: "NFTs", slug: "nfts" },
  { name: "Updates", slug: "updates" },
];

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

// Corrected NFT Statistics data based on provided weights and derive_rarity_from_weight logic
// Assuming the 'value' and 'percentage' from the original data represent observed counts in a 10,000 NFT collection.
// We are re-categorizing these observed counts based on the new rarity derivation.

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

// Blog posts data - this would typically come from a CMS or API
export const blogPosts: Record<string, BlogPost> = {
  "metacube-universe": {
    id: "metacube-universe",
    title: "Exploring the Metacube Universe",
    excerpt: "Learn about the immersive gaming experience where players assume the role of Stove the Crypto Raver.",
    date: "February 15, 2024",
    author: "Metacube Team",
    category: "gameplay",
    imageUrl: "/blog/metacube-universe.jpg",
    content: [
      {
        type: "heading",
        content: "Metacube Universe",
      },
      {
        type: "paragraph",
        content: "Metacube is a revolutionary free-to-play NFT game that combines the excitement of treasure hunting, the intrigue of blockchain technology, and the thrill of interstellar exploration. In this immersive gaming experience, players assume the role of Stove the Crypto Raver, a die-hard fan of cryptocurrency and a regular at interstellar raves. Alongside fellow Stellar Scavengers, players embark on a daring mission to unlock the secrets of the Metacube, a celestial vault containing valuable blockchain data and rare NFTs."
      },
      {
        type: "heading",
        content: "The Metacube",
      },
      {
        type: "paragraph",
        content: "At the heart of the game lies the Metacube, a mysterious celestial object that holds valuable blockchain data and rare NFTs. Players must work together to explore, mine, and ultimately unlock the secrets of this enigmatic structure."
      },
      {
        type: "paragraph",
        content: "The Metacube presents various challenges and puzzles that players must solve, requiring both individual skill and collective effort. As players progress through the game, they'll encounter increasingly complex obstacles that test their abilities and strategic thinking."
      },
      {
        type: "heading",
        content: "In-Game Currency",
      },
      {
        type: "paragraph",
        content: "Metacube features a robust in-game economy powered by blockchain technology. Players can earn cryptocurrency through various activities, including completing missions, solving puzzles, and participating in events."
      },
      {
        type: "paragraph",
        content: "This earned currency can be used to upgrade equipment, purchase rare items, or trade with other players. The blockchain-based nature of the currency ensures that all transactions are secure, transparent, and truly owned by the players."
      },
      {
        type: "heading",
        content: "Hazards and Challenges",
      },
      {
        type: "paragraph",
        content: "The journey through Metacube is fraught with dangers. From hostile alien entities to treacherous environmental hazards, players must navigate carefully to survive and thrive in this challenging universe."
      },
      {
        type: "paragraph",
        content: "Strategic thinking and quick reflexes are essential for overcoming these obstacles. Players can also collaborate to tackle particularly difficult challenges, emphasizing the community-driven nature of the game."
      },
    ],
    relatedPosts: ["nft-collectibles-guide", "future-development"],
  },
  "nft-collectibles-guide": {
    id: "nft-collectibles-guide",
    title: "Complete Guide to Metacube NFTs: Collectibles, Rarity & Value",
    excerpt: "Everything you need to know about Metacube NFTs, including rarity tiers, trait distributions, and value analysis.",
    date: "March 1, 2024",
    author: "Metacube Team",
    category: "nfts",
    imageUrl: "/blog/nft-collectibles.jpg",
    content: [
      {
        type: "heading",
        content: "NFTs and Collectibles in Metacube",
      },
      {
        type: "paragraph",
        content: "One of Metacube's most exciting features is its robust NFT ecosystem. Players can discover, collect, and trade unique digital assets that have real-world value and in-game utility."
      },
      {
        type: "heading",
        content: "Understanding Metacube NFT Rarity"
      },
      {
        type: "paragraph",
        content: "The Metacube collection consists of 10,000 unique NFTs, each with a distinct combination of traits across five categories: Skin, Cube, Coin, Background, and Weapon. The rarity of each trait directly impacts its scarcity and value within the ecosystem."
      },
      {
        type: "heading",
        content: "Rarity Tiers Explained"
      },
      {
        type: "paragraph",
        content: "Metacube uses a five-tier rarity system that determines the value and scarcity of each trait, derived from its generation weight:"
      },
      {
        type: "paragraph",
        content: "• Common: Weight 9+ (Most frequent)\n• Rare: Weight 7-8\n• Epic: Weight 5-6\n• Mythic: Weight 2-4\n• Legendary: Weight 0-1 (Rarest)"
      },
      {
        type: "heading",
        content: "Rarity Weight System & Odds"
      },
      {
        type: "paragraph",
        content: "Our rarity system is based on a weight calculation that determines how frequently a trait is intended to appear during generation. The higher the weight, the more common the trait. This weight system ensures a balanced distribution of traits while maintaining the exclusivity of higher-tier rarities. For collectors, understanding this system helps in evaluating the true scarcity and potential value of their NFTs."
      },
       {
        type: "paragraph",
        content: "The chance of a specific trait appearing is proportional to its weight relative to the sum of all weights within its category. For example, if a skin has a weight of 10 and the total weight of all available skins is 100, that particular skin has roughly a 10% chance of being selected *when a skin is generated*."
      },
      {
        type: "heading",
        content: "NFT Market and Trading"
      },
      {
        type: "paragraph",
        content: "Metacube features a robust marketplace where players can buy, sell, and trade their NFT collections. This marketplace is integrated with the blockchain, ensuring secure and transparent transactions between players."
      },
      {
        type: "paragraph",
        content: "Players have complete ownership of their NFTs and can choose to trade them within the game or on external NFT marketplaces, providing flexibility and true digital ownership."
      },
      {
        type: "heading",
        content: "Trait Distribution Analysis (Observed from 10,000 NFTs)"
      },
      {
        type: "paragraph",
        content: "The following statistics represent the observed distribution from the initial 10,000 Metacube NFTs, with items now categorized by their true rarity based on their generation weights:"
      },
      {
        type: "paragraph",
        content: "• Skins: Common skins like 'Fire Man' (10.6% of all NFTs) are most prevalent. The legendary 'Pelton Flusk' skin is the rarest, appearing in 1.2% of NFTs.\n• Cubes: Common cubes such as 'B-Chip' (3.2%) appear frequently, while the legendary 'Metacube' is extremely rare at 0.3% of all NFTs.\n• Coins: 'Yellow' coins are common (36.6%), with 'Purple' coins being legendary (1.0%).\n• Backgrounds: 'Violet' is the most common background (30.2%), and 'Magenta' is legendary (1.1%).\n• Weapons: Common 'Sword' (15.2%) and 'Hammer' (14.4%) are widely found, while the 'Unicorn' weapon is legendary (1.4%)."
      },
      {
        type: "heading",
        content: "In-Game Utility"
      },
      {
        type: "paragraph",
        content: "Beyond their collectible value, Metacube NFTs offer practical benefits within the game. These can include enhanced abilities, access to exclusive areas, unique cosmetic appearances, or special gameplay advantages."
      },
      {
        type: "paragraph",
        content: "Some NFTs may also grant holders access to special events, governance voting rights, or other exclusive community benefits, creating a deeper connection between players and the game world."
      },
      {
        type: "heading",
        content: "Rarity Impact on Gameplay"
      },
      {
        type: "paragraph",
        content: "The rarity of your NFT doesn't just affect its collectible value—it can significantly impact your gameplay experience. Higher rarity items may provide greater advantages or unlock unique game mechanics that aren't available with common items."
      },
      {
        type: "paragraph",
        content: "However, we've designed the game to remain balanced and enjoyable regardless of which NFTs you own. While legendary items offer special perks, common and rare items have their own unique advantages that can be equally valuable in different gameplay situations."
      }
    ],
    relatedPosts: ["metacube-universe", "future-development"],
  },
  "future-development": {
    id: "future-development",
    title: "Future Development and Expansion",
    excerpt: "Learn about Season 2 and beyond, including continuous updates and community involvement.",
    date: "March 15, 2024",
    author: "Metacube Team",
    category: "updates",
    imageUrl: "/blog/future-development.jpg",
    content: [
      {
        type: "heading",
        content: "Future Development and Expansion",
      },
      {
        type: "paragraph",
        content: "The Metacube team is committed to the continuous growth and evolution of the game. Our roadmap includes exciting plans for expansion, new features, and enhanced gameplay experiences."
      },
      {
        type: "heading",
        content: "Season 2 and Beyond",
      },
      {
        type: "paragraph",
        content: "Following the successful launch of Season 1, we're already developing content for Season 2 and planning future seasons. Each new season will introduce fresh storylines, challenges, environments, and NFT collections for players to explore and collect."
      },
      {
        type: "paragraph",
        content: "Our narrative team is crafting an evolving universe that will grow richer and more complex with each season, providing players with new adventures and discoveries to keep the gameplay experience fresh and engaging."
      },
      {
        type: "heading",
        content: "Continuous Updates and Improvements",
      },
      {
        type: "paragraph",
        content: "We're dedicated to regularly updating Metacube with new features, gameplay improvements, and technical enhancements. Our development cycle includes both major content updates and smaller, more frequent patches to ensure optimal performance and address community feedback."
      },
      {
        type: "paragraph",
        content: "These updates will include everything from new missions and challenges to quality-of-life improvements and UI enhancements, all aimed at creating the best possible experience for our players."
      },
      {
        type: "heading",
        content: "Community Feedback and Involvement",
      },
      {
        type: "paragraph",
        content: "The Metacube community plays a crucial role in shaping the future of the game. We actively seek player feedback through various channels, including our Discord server, community forums, and social media platforms."
      },
      {
        type: "paragraph",
        content: "We're exploring governance mechanisms that will allow NFT holders to participate in key decisions about the game's development, giving our most dedicated players a voice in Metacube's evolution."
      },
    ],
    relatedPosts: ["metacube-universe", "nft-collectibles-guide"],
  }
};

// Helper function to get all blog posts as an array
export const getAllBlogPosts = (): BlogPost[] => {
  return Object.values(blogPosts);
};

// Helper function to get blog posts by category
export const getBlogPostsByCategory = (category: string): BlogPost[] => {
  return getAllBlogPosts().filter(post => post.category === category);
}; 