/**
 * English content for the events, keyed by the GERMAN slug.
 * Non-translated facts (dates, coordinates, radius, prices) come from
 * src/data/events.ts.
 */
import type { CityEvent } from "../../data/events";

export interface EventEn {
  slug: string;
  title: string;
  eyebrow: string;
  intro: string;
  description: string;
  address: string;
}

export const eventsEn: Record<string, EventEn> = {
  "wallfahrt-kevelaer": {
    slug: "kevelaer-pilgrimage",
    title: "Kevelaer Pilgrimage Season",
    eyebrow: "Pilgrimage",
    intro:
      "From May to early November, around one million believers make the pilgrimage to the Consoler of the Afflicted in Kevelaer.",
    description:
      "The pilgrimage season in Kevelaer is the defining event on the Lower Rhine: processions, candlelight processions and pilgrim groups from all over Europe fill the Kapellenplatz. Find hotels and guesthouses for your stay in Kevelaer.",
    address: "Kapellenplatz, 47623 Kevelaer",
  },
  "strassenmaler-festival-geldern": {
    slug: "geldern-street-painting-festival",
    title: "International Street-Painting Festival, Geldern",
    eyebrow: "Festival",
    intro:
      "Once a year, artists from around the world turn Geldern's town center into a vast open-air gallery.",
    description:
      "The Street-Painting Festival is one of the oldest and largest of its kind in the world. Thousands of visitors come to watch the artists paint on the asphalt. Secure your accommodation in and around Geldern early.",
    address: "Town center, 47608 Geldern",
  },
  "wildgaense-saison": {
    slug: "wild-geese-season",
    title: "Wild-Geese Season on the Lower Rhine",
    eyebrow: "Natural spectacle",
    intro:
      "From October to February, up to 180,000 Arctic wild geese rest in the Rhine meadows - Europe's top spot.",
    description:
      "Every winter, the lower Lower Rhine becomes a roost for hundreds of thousands of wild geese. Guided observation tours start in Emmerich, Rees and Bislich. Find cozy accommodation for your nature weekend.",
    address: "Rhine meadows, 46446 Emmerich am Rhein",
  },
  "spargel-erdbeerzeit": {
    slug: "asparagus-strawberry-season",
    title: "Asparagus & Strawberry Season on the Lower Rhine",
    eyebrow: "Food",
    intro:
      "From April to June, the Lower Rhine asparagus country is in high season - farm shops, pick-your-own and asparagus menus.",
    description:
      "The Lower Rhine is one of Germany's largest asparagus and strawberry growing areas. In season, farm shops, asparagus farms and pick-your-own strawberry fields beckon between Kleve, Geldern and Kevelaer. Plan your foodie weekend.",
    address: "Lower Rhine North region",
  },
};
