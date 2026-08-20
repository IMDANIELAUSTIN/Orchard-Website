export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: "Product Update" | "Service Announcement" | "Hardware Release";
  author: string;
  date: string; // ISO date
  readingTime: string;
  body: string[];
}

export const SITE_URL = "https://orchard-website.lovable.app";

export const posts: BlogPost[] = [
  {
    slug: "offline-first-human-knowledge",
    title: "Orchard Release: Embedded Kiwix Knowledge Engine and Medical Reference Architecture",
    excerpt:
      "When internet connectivity cuts out, access to critical medical guides, encyclopedias, and educational courses shouldn't vanish. Here is how Orchard stores human knowledge on-device.",
    category: "Product Update",
    author: "Daniel Austin",
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
    title: "Service Announcement: Long-Range LoRa Mesh and Bluetooth Bridge Integration",
    excerpt:
      "Cell towers fail. Decentralized peer-to-peer radio meshes don't. Learn how Orchard combines Signal Double Ratchet encryption with packet radio and BLE.",
    category: "Service Announcement",
    author: "Daniel Austin",
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
    title: "Product Update: Unified Fediverse and Decentralized Social Hub Released",
    excerpt:
      "Stop fragmenting your social experience across incompatible silos. Orchard unifies decentralized protocols into 16 categorized, chronological channels.",
    category: "Product Update",
    author: "Daniel Austin",
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
    title: "Service Milestone: 21-Category Mutual Aid Directory and Offline Vector Globe",
    excerpt:
      "True community security starts with knowing where local provisions, clean water, seed banks, and tool libraries exist. Here's how Orchard's 3D connection map works offline.",
    category: "Service Announcement",
    author: "Daniel Austin",
    date: "2026-06-18",
    readingTime: "6 min read",
    body: [
      "Globalized supply chains are efficient until they aren't. In moments of crisis or economic dislocation, knowing how to reach local growers, water sources, and tool libraries is vital.",
      "Orchard introduces a dedicated 21-category localized provision map. You can bookmark local resources—such as food forests, clean spring water, seed banks, solar charging points, and tool lending cooperatives—and share them peer-to-peer.",
      "Everything is rendered using offline vector tiles with an interactive 3D connection globe. No reliance on third-party mapping APIs or centralized tracking.",
    ],
  },
];

export const sortedPosts = [...posts].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
);

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
