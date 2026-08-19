export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string; // ISO date
  readingTime: string;
  body: string[];
}

export const SITE_URL = "https://orchard-website.lovable.app";

export const posts: BlogPost[] = [
  {
    slug: "offline-first-human-knowledge",
    title: "Building Resilience: Why Offline-First Software is the Future of Human Knowledge",
    excerpt:
      "When internet connectivity cuts out, access to critical medical guides, encyclopedias, and educational courses shouldn't vanish. Here is how Orchard stores human knowledge on-device.",
    author: "Elena Rostova",
    date: "2026-08-12",
    readingTime: "6 min read",
    body: [
      "Modern software was designed around a fragile assumption: permanent, high-speed connection to centralized cloud datacenters. When storms, power cuts, or infrastructure outages hit, entire communities find their tools and information instantly inaccessible.",
      "Orchard flips this architecture completely. By embedding a high-performance Kiwix/ZIM archive reader directly into native SwiftUI, users can carry entire offline snapshots of Wikipedia, Project Gutenberg, MDWiki, and interactive PhET science simulations directly in their pockets.",
      "Zero internet is required once downloaded. Whether you are studying in a remote classroom, working off-grid, or navigating an emergency, human knowledge remains permanently accessible on your terms.",
    ],
  },
  {
    slug: "mesh-networking-lora-bluetooth",
    title: "How LoRa and Bluetooth Mesh Keep Communities Connected When the Grid Goes Down",
    excerpt:
      "Cell towers fail. Decentralized peer-to-peer radio meshes don't. Learn how Orchard combines Signal Double Ratchet encryption with packet radio and BLE.",
    author: "Tariq Vance",
    date: "2026-07-28",
    readingTime: "7 min read",
    body: [
      "During natural disasters or regional power outages, cellular base stations quickly deplete battery backups and fail. Centralized chat applications become useless when servers are unreachable.",
      "Orchard integrates peer-to-peer mesh protocols directly into everyday communication. Using Bluetooth Low Energy (BLE) for close-proximity hops and portable Long Range (LoRa) packet radio transceivers, messages hop securely from device to device across miles without cell towers or ISPs.",
      "Every packet is cryptographically protected with Signal Protocol-grade Double Ratchet encryption (secp256k1 identity keys). No phone numbers, no email addresses, and no central logs—just resilient peer-to-peer privacy.",
    ],
  },
  {
    slug: "unifying-fediverse-mastodon-bluesky",
    title: "Unifying the Fediverse: Mastodon, Bluesky, Lemmy, and Nostr in One Stream",
    excerpt:
      "Stop fragmenting your social experience across incompatible silos. Orchard unifies decentralized protocols into 16 categorized, chronological channels.",
    author: "Siddharth Nair",
    date: "2026-07-05",
    readingTime: "5 min read",
    body: [
      "The open web is experiencing a renaissance of decentralized social protocols: ActivityPub (Mastodon), AT Protocol (Bluesky), Lemmy APIs, and Nostr relays. However, keeping track of different apps and disjointed interfaces creates unnecessary friction.",
      "Orchard brings all of these open ecosystems into a unified, distraction-free social hub. You can follow authors across federated servers, browse community forums on Lemmy, read Nostr dispatches, and subscribe to RSS feeds from a single native stream.",
      "Best of all, there are no algorithmic black boxes or ad tracking. Your feeds are rendered chronologically, cached locally for offline reading, and managed purely on your device.",
    ],
  },
  {
    slug: "local-resilience-exchanges-mutual-aid",
    title: "The 21-Category Local Exchange: Mapping Food Forests and Mutual Aid Networks",
    excerpt:
      "True community security starts with knowing where local provisions, clean water, seed banks, and tool libraries exist. Here's how Orchard's 3D connection map works offline.",
    author: "Elena Rostova",
    date: "2026-06-18",
    readingTime: "8 min read",
    body: [
      "Mutual aid is most powerful when neighbors have clear, shared awareness of local resources. Orchard's Connection Map features a rich 3D globe and localized mapping across 21 provision categories—from food forests and farmers markets to clean spring water and repair clinics.",
      "Everything is cached offline alongside national and regional passenger rail routes (Amtrak, commuter rail, and transit). Even without cellular service, you can locate emergency resources, plan multi-modal transit routes, and coordinate neighborhood seed exchanges.",
      "By placing local abundance and community tools at the center of the app, Orchard transforms personal technology into a catalyst for neighborhood self-reliance and collective resilience.",
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export const sortedPosts = [...posts].sort((a, b) => b.date.localeCompare(a.date));

export function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
