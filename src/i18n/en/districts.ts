import { districts } from "../../data/districts";
export type DistrictEn = { slug: string; name: string; shortDesc: string; longDesc: string; characterTags: string[] };
const base = new Map(districts.map((d) => [d.slug, d]));
// Fallback-Proxy: bis echte EN-Übersetzungen vorliegen, deutscher Basistext.
export const districtsEn: Record<string, DistrictEn> = new Proxy({} as Record<string, DistrictEn>, {
  get(_t, key: string) {
    const d = base.get(key); if (!d) return undefined;
    return { slug: d.slug, name: d.name, shortDesc: d.shortDesc, longDesc: d.longDesc, characterTags: d.characterTags };
  },
  has: (_t, key: string) => base.has(key),
  ownKeys: () => [...base.keys()],
  getOwnPropertyDescriptor: () => ({ enumerable: true, configurable: true }),
});
