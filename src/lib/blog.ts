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
    slug: "why-self-custody-matters",
    title: "Why self-custody still matters in 2026",
    excerpt:
      "Custodial platforms keep failing in the same predictable ways. Here is how holding your own keys changes the risk you carry.",
    author: "Mara Ellis",
    date: "2026-08-04",
    readingTime: "6 min read",
    body: [
      "Every custodial failure of the last decade rhymes: deposits are pooled, the pool is lent out, and the withdrawal queue closes on a Friday afternoon. When you hold your own keys, none of that machinery sits between you and your coins.",
      "Self-custody is not about distrusting every company. It is about removing the single point of failure that turns someone else's bad quarter into your loss. Northlight keeps the seed on your device, encrypted, and never transmits it anywhere.",
      "The trade-off is responsibility. Write the seed down, store it somewhere fire-resistant, and test a restore before you move meaningful amounts. That fifteen minutes is the entire cost of admission.",
    ],
  },
  {
    slug: "multisig-vaults-explained",
    title: "Multisig vaults, explained without the jargon",
    excerpt:
      "Two-of-three signing sounds complicated. In practice it is closer to a safe with two keys and a spare in a drawer.",
    author: "Devin Cho",
    date: "2026-07-18",
    readingTime: "8 min read",
    body: [
      "A multisig vault splits spending authority across several keys. A two-of-three vault means any two of your three keys can move funds, so losing one key is inconvenient rather than catastrophic.",
      "A common layout: one key on your phone, one on a hardware signer at home, one on a hardware signer at a relative's house. A thief with your phone has nothing. A house fire costs you one key, not the vault.",
      "Northlight walks you through key generation, backs up the wallet descriptor alongside each seed, and lets you rehearse a recovery on a watch-only copy before you fund anything.",
    ],
  },
  {
    slug: "reading-the-fee-market",
    title: "Reading the fee market before you hit send",
    excerpt:
      "Fee estimation is guesswork dressed up as a number. Here is how to read the mempool and pick a rate you will not regret.",
    author: "Priya Raman",
    date: "2026-06-29",
    readingTime: "5 min read",
    body: [
      "Fees are an auction for block space, not a fixed price. When the mempool is thin, a one sat/vB transaction confirms overnight. When it is congested, the same transaction can sit for days.",
      "Ask one question before sending: does this need to confirm in the next hour? If not, pick a low rate and enable replace-by-fee so you can bump it later without losing anything.",
      "Northlight shows the live mempool distribution next to the fee slider, so the number you choose is grounded in what is actually pending rather than a black-box estimate.",
    ],
  },
  {
    slug: "lightning-for-everyday-spending",
    title: "Lightning for everyday spending",
    excerpt:
      "On-chain for savings, Lightning for coffee. A practical split that keeps fees sane and privacy intact.",
    author: "Mara Ellis",
    date: "2026-06-10",
    readingTime: "7 min read",
    body: [
      "Treat on-chain balances as savings and Lightning as your spending wallet. Keep only what you would carry in cash on the Lightning side and top it up when it runs low.",
      "Payments settle in under a second and cost a fraction of a cent, which makes small purchases viable in a way base-layer transactions never were.",
      "Northlight keeps both balances in one interface, so moving value between them is two taps rather than a manual channel-management exercise.",
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
