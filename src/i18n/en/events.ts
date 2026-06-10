import { events } from "../../data/events";
export interface EventEn { slug: string; title: string; eyebrow: string; intro: string; description: string; address: string }
const base = new Map(events.map((e) => [e.slug, e]));
export const eventsEn: Record<string, EventEn> = new Proxy({} as Record<string, EventEn>, {
  get(_t, key: string) {
    const e = base.get(key); if (!e) return undefined;
    return { slug: e.slug, title: e.title, eyebrow: e.eyebrow, intro: e.intro, description: e.description, address: e.address };
  },
  has: (_t, key: string) => base.has(key),
  ownKeys: () => [...base.keys()],
  getOwnPropertyDescriptor: () => ({ enumerable: true, configurable: true }),
});
