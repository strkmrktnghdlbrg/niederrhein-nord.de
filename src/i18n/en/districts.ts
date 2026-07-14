/**
 * English content for the towns ("districts" section), keyed by the GERMAN slug.
 * Non-translated facts (coordinates, hue, imageKey) come from src/data/districts.ts.
 */
import type { District } from "../../data/districts";

export type DistrictEn = {
  slug: string;
  name: string;
  shortDesc: string;
  longDesc: string;
  characterTags: string[];
  sections?: { h: string; p: string }[];
};

export const districtsEn: Record<string, DistrictEn> = {
  xanten: {
    slug: "xanten",
    name: "Xanten",
    shortDesc: "A Roman town with the Archaeological Park, St. Victor's Cathedral and the Xanten South Lake.",
    longDesc:
      "Xanten is the tourist heart of the northern Lower Rhine: the LVR Archaeological Park brings the Roman Colonia Ulpia Traiana back to life, the Gothic St. Victor's Cathedral is regarded as the \"Cologne Cathedral of the Lower Rhine,\" and the Xanten South Lake invites water sports and beach days. The medieval old town with its Kleve Gate and windmill rounds off the visit.",
    characterTags: ["Roman town", "APX", "South Lake", "Cathedral"],
  },
  kleve: {
    slug: "kleve",
    name: "Kleve",
    shortDesc: "The swan city by the Reichswald, with the Swan Castle, Forest Garden and zoo.",
    longDesc:
      "The district town of Kleve is crowned by the Swan Castle, rising above the Reichswald forest and the Dutch border. The Baroque grounds of the Forest Garden, the zoo and the Museum Kurhaus make Kleve a green cultural town. The Lohengrin swan legend remains the emblem of the city to this day.",
    characterTags: ["Swan Castle", "Reichswald", "University"],
  },
  kevelaer: {
    slug: "kevelaer",
    name: "Kevelaer",
    shortDesc: "Northwest Europe's largest Marian pilgrimage site, with its basilica and Candle Chapel.",
    longDesc:
      "Kevelaer draws around one million pilgrims each year and is the most important Marian pilgrimage site in northwest Europe. The Marian Basilica, the Chapel of Grace and the Candle Chapel form a unique ensemble. Around the Kapellenplatz, devotional shops, the Lower Rhine Museum and cozy dining set the scene.",
    characterTags: ["Pilgrimage", "Basilica", "Candle Chapel"],
  },
  kalkar: {
    slug: "kalkar",
    name: "Kalkar",
    shortDesc: "A late-Gothic gem with a brick town hall, St. Nicholas's Church and Wunderland Kalkar.",
    longDesc:
      "Kalkar is famous for its late-Gothic brick town hall on the historic market square and the carved altars of St. Nicholas's Church - masterpieces of Lower Rhine woodcarving. On the site of a nuclear power plant that never went online, Wunderland Kalkar now draws visitors as a leisure and family park.",
    characterTags: ["Brick Gothic", "St. Nicholas", "Wunderland"],
  },
  geldern: {
    slug: "geldern",
    name: "Geldern",
    shortDesc: "A lively Gelderland town known for its international street-painting festival.",
    longDesc:
      "Geldern, once the capital of the Duchy of Guelders, is today a bustling shopping and festival town. World-famous is its annual street-painting festival, which turns the town center into a vast open-air gallery. The region around Geldern is classic asparagus and strawberry country.",
    characterTags: ["Gelderland", "Street painting", "Asparagus"],
  },
  emmerich: {
    slug: "emmerich",
    name: "Emmerich am Rhein",
    shortDesc: "A Rhine town with Germany's longest Rhine promenade and suspension bridge.",
    longDesc:
      "Emmerich am Rhein lies at the widest point of the Rhine in Germany and has, at more than three kilometers, the longest Rhine promenade in the country. The Emmerich Rhine bridge is Germany's longest suspension bridge. From the promenade you can watch the big freighters on their way to the Netherlands.",
    characterTags: ["Rhine promenade", "Suspension bridge", "On the Rhine"],
  },
  rees: {
    slug: "rees",
    name: "Rees",
    shortDesc: "The oldest town on the lower Lower Rhine, with a city wall and Rhine promenade.",
    longDesc:
      "Rees is the oldest town on the lower Lower Rhine (granted town rights in 1228). Remnants of the medieval fortifications, cozy bastions and a lovely Rhine promenade shape the town. All around, the Rhine meadows, bird sanctuaries and the Reeser Meer lake beckon for nature experiences.",
    characterTags: ["City wall", "Rhine promenade", "Oldest town"],
  },
  goch: {
    slug: "goch",
    name: "Goch & Weeze",
    shortDesc: "The Stone Gate town on the Niers, gateway to the Reichswald and Weeze Airport.",
    longDesc:
      "Goch on the Niers, with its medieval Stone Gate and collegiate church, is a charming stage on the Niers cycle route. Neighboring Weeze is home to Weeze Airport, an important regional airport. Both towns are ideal starting points for tours into the Reichswald and the Goch countryside.",
    characterTags: ["Stone Gate", "Niers", "Weeze Airport"],
  },
};
