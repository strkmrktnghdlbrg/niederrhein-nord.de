import { categories } from "../../data/categories";
const base = new Map(categories.map((c) => [c.slug, c]));
export const categoriesEn: Record<string, { slug: string; name: string; shortDesc: string }> = new Proxy(
  {} as Record<string, { slug: string; name: string; shortDesc: string }>, {
  get(_t, key: string) {
    const c = base.get(key); if (!c) return undefined;
    return { slug: c.slug, name: c.name, shortDesc: c.shortDesc };
  },
  has: (_t, key: string) => base.has(key),
  ownKeys: () => [...base.keys()],
  getOwnPropertyDescriptor: () => ({ enumerable: true, configurable: true }),
});
