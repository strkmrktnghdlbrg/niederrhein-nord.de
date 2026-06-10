import { restaurants } from "../../data/restaurants";
export type RestaurantEn = { slug: string; name: string; cuisine: string; shortDesc: string; longDesc: string; openingHours?: string };
const base = new Map(restaurants.map((r) => [r.slug, r]));
export const restaurantsEn: Record<string, RestaurantEn> = new Proxy({} as Record<string, RestaurantEn>, {
  get(_t, key: string) {
    const r = base.get(key); if (!r) return undefined;
    return { slug: r.slug, name: r.name, cuisine: r.cuisine, shortDesc: r.shortDesc, longDesc: r.longDesc, openingHours: r.openingHours };
  },
  has: (_t, key: string) => base.has(key),
  ownKeys: () => [...base.keys()],
  getOwnPropertyDescriptor: () => ({ enumerable: true, configurable: true }),
});
