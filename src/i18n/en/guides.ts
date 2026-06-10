import { guides } from "../../data/guides";
import type { SlotType } from "../../data/guides";
export type GuideSlotEn = { time: string; type: SlotType; title: string; description: string; tip?: string };
export type GuideDayEn = { number: number; title: string; intro: string; slots: GuideSlotEn[] };
export type GuideEn = { slug: string; title: string; shortDesc: string; lead: string; audience: string; bestSeason?: string; days: GuideDayEn[] };
const base = new Map(guides.map((g) => [g.slug, g]));
export const guidesEn: Record<string, GuideEn> = new Proxy({} as Record<string, GuideEn>, {
  get(_t, key: string) {
    const g = base.get(key); if (!g) return undefined;
    return {
      slug: g.slug, title: g.title, shortDesc: g.shortDesc, lead: g.lead, audience: g.audience, bestSeason: g.bestSeason,
      days: g.days.map((d) => ({ number: d.number, title: d.title, intro: d.intro,
        slots: d.slots.map((s) => ({ time: s.time, type: s.type, title: s.title, description: s.description, tip: s.tip })) })),
    };
  },
  has: (_t, key: string) => base.has(key),
  ownKeys: () => [...base.keys()],
  getOwnPropertyDescriptor: () => ({ enumerable: true, configurable: true }),
});
