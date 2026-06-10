import { sights } from "../../data/sights";
export type SightEn = { slug: string; name: string; type: string; shortDesc: string; longDesc: string; openingHours?: string };
const base = new Map(sights.map((s) => [s.slug, s]));
export const sightsEn: Record<string, SightEn> = new Proxy({} as Record<string, SightEn>, {
  get(_t, key: string) {
    const s = base.get(key); if (!s) return undefined;
    return { slug: s.slug, name: s.name, type: s.type, shortDesc: s.shortDesc, longDesc: s.longDesc, openingHours: s.openingHours };
  },
  has: (_t, key: string) => base.has(key),
  ownKeys: () => [...base.keys()],
  getOwnPropertyDescriptor: () => ({ enumerable: true, configurable: true }),
});
