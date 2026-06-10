import { hotels } from "../../data/hotels";
export type HotelEn = { slug: string; name: string; shortDesc: string; longDesc: string; amenities: string[] };
const base = new Map(hotels.map((h) => [h.slug, h]));
export const hotelsEn: Record<string, HotelEn> = new Proxy({} as Record<string, HotelEn>, {
  get(_t, key: string) {
    const h = base.get(key); if (!h) return undefined;
    return { slug: h.slug, name: h.name, shortDesc: h.shortDesc, longDesc: h.longDesc, amenities: h.amenities };
  },
  has: (_t, key: string) => base.has(key),
  ownKeys: () => [...base.keys()],
  getOwnPropertyDescriptor: () => ({ enumerable: true, configurable: true }),
});
