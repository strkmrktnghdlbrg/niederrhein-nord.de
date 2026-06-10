import { news } from "../../data/news";
export type NewsEn = { slug: string; title: string; lead: string; summary: string; category: string; source: { name: string } };
const base = new Map(news.map((n) => [n.slug, n]));
export const newsEn: Record<string, NewsEn> = new Proxy({} as Record<string, NewsEn>, {
  get(_t, key: string) {
    const n = base.get(key); if (!n) return undefined;
    return { slug: n.slug, title: n.title, lead: n.lead, summary: n.summary, category: n.category, source: { name: n.source.name } };
  },
  has: (_t, key: string) => base.has(key),
  ownKeys: () => [...base.keys()],
  getOwnPropertyDescriptor: () => ({ enumerable: true, configurable: true }),
});
