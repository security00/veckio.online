export type GameCategory = "fps" | "shooter" | "io";

export type Game = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  categories: GameCategory[];
  officialUrl: string;
  embedUrl?: string;
  controls: string[];
  tips: string[];
  features: string[];
};

export const VECK_EMBED_URL =
  "https://veck.io/?cg=true&auto_play=true&czyExpWeb2App=enabled&czyGamepageswitcher_20251209=ineligible&isNewUser=false";

export const GAMES: Game[] = [
  {
    slug: "veck-io",
    name: "Veck.io",
    tagline: "Instant multiplayer FPS — no download required.",
    description:
      "Jump into fast rounds with snappy movement, tight gunplay, and quick respawns. Veck.io is built for instant browser action and short, satisfying sessions.",
    categories: ["fps", "shooter", "io"],
    officialUrl: "https://veck.io/",
    embedUrl: VECK_EMBED_URL,
    features: [
      "Fast matchmaking & quick respawns",
      "Skill-based movement",
      "Lightweight: runs in the browser",
    ],
    controls: [
      "WASD to move",
      "Mouse to aim",
      "Left-click to shoot",
      "Right-click to aim (if supported)",
      "Space to jump",
      "Shift to sprint (if supported)",
    ],
    tips: [
      "Play corners: peek, burst, and reset — don’t overexpose.",
      "Prioritize accuracy over spray. Short bursts win fights.",
      "Warm up with 2 minutes of flicks and tracking before grinding.",
    ],
  },
  {
    slug: "krunker-io",
    name: "Krunker.io",
    tagline: "Arcade-style FPS with quick movement.",
    description:
      "A long-running browser FPS known for its fast movement and easy drop-in matches. Great if you like quick kills and quick resets.",
    categories: ["fps", "shooter", "io"],
    officialUrl: "https://krunker.io/",
    embedUrl: "https://krunker.io/",
    features: ["Fast movement", "Multiple classes", "Large community"],
    controls: [
      "WASD to move",
      "Mouse to aim",
      "Left-click to shoot",
      "Space to jump",
    ],
    tips: [
      "Keep momentum: strafe, jump, and reposition after every fight.",
      "Lower your mouse sensitivity until your tracking becomes stable.",
      "Use cover to reload safely — never reload in the open.",
    ],
  },
  {
    slug: "shell-shockers",
    name: "Shell Shockers",
    tagline: "Eggs with guns — surprisingly competitive.",
    description:
      "A quirky but legit FPS with distinct weapons and readable fights. Great for casual sessions that still reward aim and positioning.",
    categories: ["fps", "shooter", "io"],
    officialUrl: "https://shellshock.io/",
    embedUrl: "https://shellshock.io/",
    features: ["Readable fights", "Distinct weapons", "Fast casual matchmaking"],
    controls: ["WASD to move", "Mouse to aim", "Left-click to shoot"],
    tips: [
      "Hold head-glitches and tight angles — avoid wide swings.",
      "Use sound cues to pre-aim common lanes.",
      "Take high ground when available; it simplifies aim and retreats.",
    ],
  },
  {
    slug: "venge-io",
    name: "Venge.io",
    tagline: "Arena FPS with power-ups and clean visuals.",
    description:
      "A browser arena shooter with smooth gunplay and power-up control. If you like rotating for objectives, this one is worth a try.",
    categories: ["fps", "shooter", "io"],
    officialUrl: "https://venge.io/",
    embedUrl: "https://venge.io/",
    features: ["Power-ups", "Objectives", "Clean arena layouts"],
    controls: ["WASD to move", "Mouse to aim", "Left-click to shoot"],
    tips: [
      "Time power-ups and rotate early — don’t arrive late and empty.",
      "Use short peeks to chip damage before committing.",
      "When weak, disengage first; re-peek only after resetting.",
    ],
  },
  {
    slug: "voxiom-io",
    name: "Voxiom.io",
    tagline: "Voxel FPS with crafting-style depth.",
    description:
      "A blocky shooter that mixes FPS combat with resource play. Good for players who enjoy strategy and upgrades alongside aim.",
    categories: ["fps", "shooter", "io"],
    officialUrl: "https://voxiom.io/",
    embedUrl: "https://voxiom.io/",
    features: ["Upgrades & strategy", "Varied modes", "Longer-form matches"],
    controls: ["WASD to move", "Mouse to aim", "Left-click to shoot"],
    tips: [
      "Play the economy: upgrades compound over time.",
      "Avoid mid-map open areas unless you have cover or teammates.",
      "Take fights on your terms — angle advantage beats raw aim.",
    ],
  },
  {
    slug: "kirka-io",
    name: "Kirka.io",
    tagline: "Fast browser FPS with simple gunplay.",
    description:
      "Quick matches, easy controls, and low friction. A solid pick when you want pure FPS loops without complexity.",
    categories: ["fps", "shooter", "io"],
    officialUrl: "https://kirka.io/",
    embedUrl: "https://kirka.io/",
    features: ["Quick matches", "Simple weapons", "Low friction gameplay"],
    controls: ["WASD to move", "Mouse to aim", "Left-click to shoot"],
    tips: [
      "Keep crosshair at head height before every peek.",
      "Strafe-cancel into your shots to tighten spread and accuracy.",
      "Win the first bullet: pre-aim common entrances.",
    ],
  },
  {
    slug: "war-brokers",
    name: "War Brokers",
    tagline: "Vehicles + FPS combat in the browser.",
    description:
      "A browser shooter that adds vehicles and longer-range fights. Great when you want big moments, not just arena duels.",
    categories: ["fps", "shooter", "io"],
    officialUrl: "https://warbrokers.io/",
    embedUrl: "https://warbrokers.io/",
    features: ["Vehicles", "Large maps", "Long-range engagements"],
    controls: ["WASD to move", "Mouse to aim", "Left-click to shoot"],
    tips: [
      "Scan first, shoot second — large maps punish tunnel vision.",
      "Use cover rotations instead of sprinting across open ground.",
      "If you’re getting beamed, change elevation and break line-of-sight.",
    ],
  },
  {
    slug: "mini-royale",
    name: "Mini Royale: Nations",
    tagline: "Battle royale-style FPS on small hardware.",
    description:
      "A browser FPS that leans into survival-style pacing and looting. Best for players who like longer sessions and planning.",
    categories: ["fps", "shooter"],
    officialUrl: "https://miniroyale.io/",
    embedUrl: "https://miniroyale.io/",
    features: ["Longer sessions", "Looting loop", "Tactical pacing"],
    controls: ["WASD to move", "Mouse to aim", "Left-click to shoot"],
    tips: [
      "Prioritize armor and meds before chasing fights.",
      "Rotate early to avoid getting pinched by late movers.",
      "Use third-party timing: enter fights when both sides are weak.",
    ],
  },
  {
    slug: "forward-assault",
    name: "Forward Assault",
    tagline: "Tactical FPS vibes in a browser package.",
    description:
      "A more tactical shooter feel with slower peeks and higher punishment. Good if you enjoy methodical play and disciplined aim.",
    categories: ["fps", "shooter"],
    officialUrl: "https://www.crazygames.com/game/forward-assault-remix",
    embedUrl: "https://www.crazygames.com/game/forward-assault-remix",
    features: ["Tactical pacing", "Disciplined peeks", "Clear lanes"],
    controls: ["WASD to move", "Mouse to aim", "Left-click to shoot"],
    tips: [
      "Hold angles first; take duels only with advantage.",
      "Tap fire at range — spraying costs fights.",
      "Use utility/cover and avoid dry-swinging multiple opponents.",
    ],
  },
  {
    slug: "bullet-force",
    name: "Bullet Force",
    tagline: "Classic multiplayer FPS feel.",
    description:
      "A familiar FPS loop with fast respawns and simple objectives. Works well as an alternative when you want a more traditional pace.",
    categories: ["fps", "shooter"],
    officialUrl: "https://www.crazygames.com/game/bullet-force-multiplayer",
    embedUrl: "https://www.crazygames.com/game/bullet-force-multiplayer",
    features: ["Classic FPS feel", "Fast respawns", "Simple objectives"],
    controls: ["WASD to move", "Mouse to aim", "Left-click to shoot"],
    tips: [
      "Avoid mid-lane. Use side routes to create better duels.",
      "Reload only after you’re behind cover.",
      "If you lose two fights in a row, reset your angle and slow down.",
    ],
  },
  {
    slug: "combat-reloaded",
    name: "Combat Reloaded",
    tagline: "Low-friction FPS with quick matches.",
    description:
      "A straightforward browser shooter you can jump into fast. Great for quick sessions and aim practice.",
    categories: ["fps", "shooter"],
    officialUrl: "https://www.crazygames.com/game/combat-reloaded",
    embedUrl: "https://www.crazygames.com/game/combat-reloaded",
    features: ["Instant matches", "Simple gunplay", "Quick practice"],
    controls: ["WASD to move", "Mouse to aim", "Left-click to shoot"],
    tips: [
      "Keep your crosshair where enemies will appear, not where they are.",
      "Play off cover and peek in small increments.",
      "When you’re missing, slow your shots — accuracy beats speed.",
    ],
  },
  {
    slug: "pixel-strike-3d",
    name: "Pixel Strike 3D",
    tagline: "Retro-style FPS with quick action.",
    description:
      "A blocky shooter that focuses on instant fun and readable fights. Great if you like arcade energy with simple mechanics.",
    categories: ["fps", "shooter"],
    officialUrl: "https://www.crazygames.com/game/pixel-strike-3d",
    embedUrl: "https://www.crazygames.com/game/pixel-strike-3d",
    features: ["Arcade energy", "Simple mechanics", "Readable fights"],
    controls: ["WASD to move", "Mouse to aim", "Left-click to shoot"],
    tips: [
      "Choose fights you can finish — don’t chase into unknown angles.",
      "Use micro-movements to dodge while staying accurate.",
      "Control space: force enemies into predictable lanes.",
    ],
  },
];

export function getGameBySlug(slug: string): Game | undefined {
  return GAMES.find((game) => game.slug === slug);
}

export function getGamesByCategory(category: GameCategory): Game[] {
  return GAMES.filter((game) => game.categories.includes(category));
}

export function getRelatedGames(slug: string, limit = 8): Game[] {
  const base = getGameBySlug(slug);
  if (!base) return GAMES.filter((g) => g.slug !== slug).slice(0, limit);

  const related = GAMES.filter((g) => g.slug !== slug)
    .map((game) => {
      const overlap = game.categories.filter((c) =>
        base.categories.includes(c),
      ).length;
      return { game, overlap };
    })
    .sort((a, b) => b.overlap - a.overlap || a.game.name.localeCompare(b.game.name))
    .map((r) => r.game);

  return related.slice(0, limit);
}

