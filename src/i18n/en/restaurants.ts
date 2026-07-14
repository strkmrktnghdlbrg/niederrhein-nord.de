/**
 * English content for the restaurants, keyed by the GERMAN slug.
 * Non-translated facts (priceLevel, reservation, imageHue, coordinates) come
 * from src/data/restaurants.ts.
 */
import type { Restaurant } from "../../data/restaurants";

export type RestaurantEn = {
  slug: string;
  name: string;
  cuisine: string;
  shortDesc: string;
  longDesc: string;
  openingHours?: string;
  sections?: { h: string; p: string }[];
};

export const restaurantsEn: Record<string, RestaurantEn> = {
  "gasthaus-zur-linde-xanten": {
    slug: "zur-linde-tavern-xanten",
    name: "Zur Linde Tavern",
    cuisine: "Lower Rhine",
    shortDesc: "Down-to-earth Lower Rhine cooking in Xanten's old town.",
    longDesc:
      "Zur Linde serves regional classics such as kale, potato pancakes and seasonal asparagus in a cozy old-town setting near the cathedral.",
  },
  "roemer-stube-xanten": {
    slug: "roemer-stube-xanten",
    name: "Römer-Stube",
    cuisine: "Regional & seasonal",
    shortDesc: "Seasonal cooking between the market and the Archaeological Park.",
    longDesc:
      "The Römer-Stube relies on fresh, seasonal produce from the Lower Rhine and is ideally placed for a break between the APX and a stroll through the old town.",
  },
  "schwanenhof-kleve": {
    slug: "schwanenhof-kleve",
    name: "Schwanenhof",
    cuisine: "German",
    shortDesc: "Classic cooking with a view of the Forest Garden.",
    longDesc:
      "The Schwanenhof pairs German cuisine with Lower Rhine charm in a quiet spot by the Forest Garden - a favorite with families and hikers.",
  },
  "haus-am-kapellenplatz-kevelaer": {
    slug: "haus-am-kapellenplatz-kevelaer",
    name: "Haus am Kapellenplatz",
    cuisine: "Lower Rhine",
    shortDesc: "A traditional inn right by the pilgrimage ensemble.",
    longDesc:
      "In the heart of Kevelaer, the Haus am Kapellenplatz serves hearty Lower Rhine dishes as well as coffee and cake for pilgrims and day visitors.",
  },
  "ratskeller-kalkar": {
    slug: "ratskeller-kalkar",
    name: "Ratskeller Kalkar",
    cuisine: "Regional",
    shortDesc: "A vaulted-cellar restaurant beneath the historic brick town hall.",
    longDesc:
      "In Kalkar's historic Ratskeller you enjoy regional cuisine beneath old vaults, just a few steps from St. Nicholas's Church and the market square.",
  },
  "rheinterrasse-emmerich": {
    slug: "rhine-terrace-emmerich",
    name: "Rheinterrasse Emmerich",
    cuisine: "Fish & Regional",
    shortDesc: "A restaurant with a terrace right on the Rhine promenade.",
    longDesc:
      "The Rheinterrasse serves fish dishes and regional cuisine with a panoramic view of the Rhine and the big freighters - a highlight of Germany's longest Rhine promenade.",
  },
  "altstadt-bistro-rees": {
    slug: "old-town-bistro-rees",
    name: "Old Town Bistro Rees",
    cuisine: "Bistro",
    shortDesc: "A modern bistro on the Rees Rhine promenade.",
    longDesc:
      "At the Old Town Bistro, fresh bistro cooking meets Lower Rhine coziness - with a terrace and a view of the city wall and the Rhine.",
  },
  "gelderner-hof": {
    slug: "gelderner-hof",
    name: "Gelderner Hof",
    cuisine: "German & seasonal",
    shortDesc: "A central restaurant in the festival town of Geldern.",
    longDesc:
      "The Gelderner Hof scores with seasonal cooking from asparagus and strawberry country and sits centrally near the pedestrian zone.",
  },
  "niers-stuben-goch": {
    slug: "niers-stuben-goch",
    name: "Niers-Stuben Goch",
    cuisine: "Lower Rhine",
    shortDesc: "A cozy inn on the Niers, ideal for cyclists.",
    longDesc:
      "The Niers-Stuben in Goch is a popular stop for cyclists on the Niers cycle route - hearty cooking, cakes and a shady beer garden.",
  },
  "hofcafe-spargelhof-kevelaer": {
    slug: "asparagus-farm-cafe-kevelaer",
    name: "Farm Café at the Asparagus Farm",
    cuisine: "Farm café",
    shortDesc: "A seasonal farm café in the middle of asparagus and strawberry country.",
    longDesc:
      "The farm café of an asparagus farm near Kevelaer serves fresh asparagus in season, strawberry cake and produce from its own farm shop.",
  },
};
