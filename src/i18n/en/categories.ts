/**
 * English content for the categories, keyed by the GERMAN slug.
 * icon comes from the base entry in src/data/categories.ts.
 */
import type { Category } from "../../data/categories";

export type CategoryEn = { slug: string; name: string; shortDesc: string; intro?: string };

export const categoriesEn: Record<string, CategoryEn> = {
  wahrzeichen: {
    slug: "landmarks",
    name: "Landmarks",
    shortDesc: "Xanten's APX, the Swan Castle, Kalkar's town hall",
  },
  "rhein-auen": {
    slug: "rhine-and-meadows",
    name: "Rhine & Meadows",
    shortDesc: "Rhine promenades, meadows, ferries & wild geese",
  },
  radwege: {
    slug: "cycling-routes",
    name: "Cycling Routes",
    shortDesc: "The node network, the Niers & Rhine cycle paths",
  },
  "kultur-wallfahrt": {
    slug: "culture-and-pilgrimage",
    name: "Culture & Pilgrimage",
    shortDesc: "Kevelaer, St. Victor's Cathedral, Moyland Castle",
  },
  natur: {
    slug: "nature",
    name: "Nature",
    shortDesc: "The Reichswald, Rhine meadows, nature reserves",
  },
  familie: {
    slug: "family",
    name: "Family",
    shortDesc: "Wunderland Kalkar, the zoo, theme parks",
  },
  genuss: {
    slug: "food-and-farm-shops",
    name: "Food & Farm Shops",
    shortDesc: "Asparagus, strawberries, farm cafés & markets",
  },
  historie: {
    slug: "romans-and-history",
    name: "Romans & History",
    shortDesc: "The Roman town of Xanten, castles, historic mills",
  },
  museen: {
    slug: "museums",
    name: "Museums",
    shortDesc: "The LVR Roman Museum, Moyland Castle Museum",
  },
  events: {
    slug: "events-and-festivals",
    name: "Events & Festivals",
    shortDesc: "Marksmen's fairs, pilgrimages, markets & festivals",
  },
};
