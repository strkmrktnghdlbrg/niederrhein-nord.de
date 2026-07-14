/**
 * English content for the travel planners ("guides"), keyed by the GERMAN slug.
 * Slots are kept in the same order as src/data/guides.ts so the detail page can
 * pair each translated slot with its base slot (imageHue, sightSlug, etc.).
 */
import type { SlotType } from "../../data/guides";

export type GuideSlotEn = { time: string; type: SlotType; title: string; description: string; tip?: string };
export type GuideDayEn = { number: number; title: string; intro: string; slots: GuideSlotEn[] };
export type GuideEn = {
  slug: string;
  title: string;
  shortDesc: string;
  lead: string;
  audience: string;
  bestSeason?: string;
  days: GuideDayEn[];
};

export const guidesEn: Record<string, GuideEn> = {
  "xanten-roemer-tag": {
    slug: "xanten-roman-day",
    title: "A Day in the Roman Town of Xanten",
    shortDesc:
      "From the Archaeological Park and the cathedral to the South Lake - the perfect day in Xanten.",
    lead:
      "Xanten in a day: Roman history in the morning, the Gothic cathedral and old town at midday, water and beach in the afternoon.",
    audience: "Families & culture travelers",
    bestSeason: "April to October",
    days: [
      {
        number: 1,
        title: "Romans, Cathedral & South Lake",
        intro: "A varied day between 2,000 years of history and summer leisure by the lake.",
        slots: [
          { time: "09:30", type: "morgens", title: "LVR Archaeological Park", description: "Start at the harbor temple and amphitheater, then the Roman Museum." },
          { time: "13:00", type: "mittagessen", title: "Lunch break in the old town", description: "Lower Rhine cuisine around the market square." },
          { time: "14:30", type: "nachmittag", title: "St. Victor's Cathedral", description: "A Gothic collegiate church with a treasury and cloister." },
          { time: "16:30", type: "nachmittag", title: "Xanten South Lake", description: "Beach, promenade and water sports to round off the day." },
          { time: "20:00", type: "uebernachten", title: "Overnight in Xanten", description: "In style in the old town." },
        ],
      },
    ],
  },
  "niederrhein-rad-wochenende": {
    slug: "lower-rhine-cycling-weekend",
    title: "A Cycling Weekend on the Lower Rhine",
    shortDesc:
      "Two days of node-network cycling between Kleve, the Reichswald, the Rhine and Kevelaer.",
    lead:
      "Flat land, wide skies: a relaxed cycling weekend across the node network, with culture, nature and farm shops.",
    audience: "Active travelers & cyclists",
    bestSeason: "May to September",
    days: [
      {
        number: 1,
        title: "Kleve, Reichswald & Moyland Castle",
        intro: "A start in the swan city, into the Reichswald and on to the moated castle.",
        slots: [
          { time: "09:30", type: "morgens", title: "Swan Castle & Forest Garden", description: "A start in Kleve with castle views and a Baroque garden." },
          { time: "12:30", type: "mittagessen", title: "A stop by the Reichswald", description: "A bite to eat before the forest stage." },
          { time: "14:00", type: "nachmittag", title: "Moyland Castle", description: "Beuys art and a sculpture park, reachable by bike." },
          { time: "19:00", type: "uebernachten", title: "Night in Kleve", description: "Stay centrally." },
        ],
      },
      {
        number: 2,
        title: "Kevelaer & Asparagus Country",
        intro: "Across the nodes to the little pilgrimage town and through asparagus country.",
        slots: [
          { time: "10:00", type: "morgens", title: "Marian Basilica Kevelaer", description: "The pilgrimage ensemble and Candle Chapel." },
          { time: "13:00", type: "mittagessen", title: "Farm café & asparagus", description: "Seasonal cooking in asparagus country (Apr-Jun)." },
          { time: "15:00", type: "nachmittag", title: "Return along the Niers", description: "A relaxed ride back along the water toward Goch." },
        ],
      },
    ],
  },
};
