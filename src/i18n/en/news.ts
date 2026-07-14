/**
 * English content for the magazine ("news"), keyed by the GERMAN slug.
 * Non-translated facts (publishedAt, source.url, imageKey, category enum) come
 * from src/data/news.ts; category is provided here as a readable English label.
 */
import type { NewsItem } from "../../data/news";

export type NewsEn = {
  slug: string;
  title: string;
  lead: string;
  summary: string;
  category: string;
  source: { name: string };
};

export const newsEn: Record<string, NewsEn> = {
  "wildgaense-saison-2026": {
    slug: "wild-geese-season-2026",
    title: "Wild-Geese Season: 180,000 Guests on the Lower Rhine",
    lead:
      "From October to February the Arctic wild geese rest in the Rhine meadows - a natural spectacle of European rank.",
    summary:
      "Every winter the lower Lower Rhine between Emmerich, Rees and Bislich becomes the most important wild-goose resting area in Central Europe. We show the best observation spots, guided tours and what to keep in mind when watching the geese.",
    category: "Science",
    source: { name: "Niederrhein Nord" },
  },
  "spargel-erdbeerzeit-hoflaeden": {
    slug: "asparagus-strawberry-farm-shops",
    title: "Asparagus & Strawberry Season: Farm Shops Between Kleve and Kevelaer",
    lead: "The Lower Rhine is asparagus country - where it now comes fresh from the field to the plate.",
    summary:
      "In the season from April to June, the farm shops and asparagus farms around Kleve, Geldern and Kevelaer open their doors. Our overview of the loveliest farm cafés, pick-your-own fields and asparagus restaurants on the northern Lower Rhine.",
    category: "Food",
    source: { name: "Niederrhein Nord" },
  },
  "radsaison-knotenpunkte": {
    slug: "cycling-season-node-network",
    title: "Cycling Season Begins: The Lower Rhine by Node Network",
    lead: "Pick-your-own fields, farm cafés and the loveliest round tours for summer 2026.",
    summary:
      "The node network makes the Lower Rhine Germany's most relaxed cycling region. We present three round tours along the Niers, the Rhine and the Reichswald - flat, signposted and full of places to stop.",
    category: "City life",
    source: { name: "Niederrhein Nord" },
  },
  "apx-xanten-saison": {
    slug: "xanten-archaeological-park-season",
    title: "Roman Town of Xanten: A New Season at the Archaeological Park",
    lead:
      "Guided tours, Roman festivals and special exhibitions at Germany's largest open-air archaeological museum.",
    summary:
      "The LVR Archaeological Park Xanten opens its season: gladiator fights, Roman crafts and new interpretive programs at the Roman Museum. We give an overview of the highlights and ticket tips.",
    category: "Culture",
    source: { name: "Niederrhein Nord" },
  },
  "strassenmaler-festival-geldern-2026": {
    slug: "geldern-street-painting-festival-2026",
    title: "Geldern Street-Painting Festival: The 2026 Program Is Set",
    lead: "Artists from around the world turn the town center into a vast open-air gallery.",
    summary:
      "One of the world's oldest street-painting festivals returns to Geldern. The 2026 program with live acts, a market and hands-on activities has been published - and accommodation is already in demand.",
    category: "Culture",
    source: { name: "Niederrhein Nord" },
  },
  "schloss-moyland-ausstellung": {
    slug: "moyland-castle-exhibition",
    title: "Moyland Castle Museum: A New Beuys Special Exhibition",
    lead: "The moated castle shows rarely seen works from the world's largest Joseph Beuys collection.",
    summary:
      "Moyland Castle Museum near Bedburg-Hau dedicates a new special exhibition to Joseph Beuys. Its sculpture park and historic gardens open alongside - a rewarding destination for art and nature lovers.",
    category: "Culture",
    source: { name: "Niederrhein Nord" },
  },
};
