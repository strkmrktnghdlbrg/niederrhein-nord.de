/**
 * English content for the "sights" section.
 * Keyed by the GERMAN slug (Sight.slug). Holds the new English slug plus all
 * translated fields. Non-translated fields (coordinates, priceFrom, imageKey,
 * websiteUrl ...) still come from the base entry in src/data/sights.ts.
 */
import type { Sight } from "../../data/sights";

export type SightEn = {
  slug: string;
  name: string;
  type: string;
  shortDesc: string;
  longDesc: string;
  openingHours?: string;
  sections?: { h: string; p: string }[];
};

export const sightsEn: Record<string, SightEn> = {
  "archaeologischer-park-xanten": {
    slug: "xanten-archaeological-park",
    name: "LVR Archaeological Park Xanten (APX)",
    type: "Museum",
    shortDesc:
      "Germany's largest open-air archaeological museum, set on the grounds of the Roman city of Colonia Ulpia Traiana.",
    longDesc:
      "Germany's largest open-air archaeological park stretches across the site of the former Roman city of Colonia Ulpia Traiana. Reconstructed buildings such as the harbor temple, the amphitheater and the city wall bring Roman life on the Lower Rhine vividly back to life. The integrated LVR Roman Museum displays original finds inside the former great bath hall. A highlight for families, school groups and history fans alike.",
    openingHours: "Daily 9:00-18:00 (winter until 17:00)",
  },
  "dom-st-viktor-xanten": {
    slug: "xanten-cathedral-st-victor",
    name: "St. Victor's Cathedral, Xanten",
    type: "Church",
    shortDesc:
      "A Gothic collegiate church known as the \"Cologne Cathedral of the Lower Rhine,\" with a treasury and cloister.",
    longDesc:
      "St. Victor's Cathedral in Xanten is regarded as the most important Gothic church on the Lower Rhine and is fondly called the \"Cologne Cathedral of the Lower Rhine.\" The five-aisled basilica impresses with precious carved altars, the Marian altar and a rich treasury (the Collegiate Museum). The cloister and the surrounding immunity district form an atmospheric medieval ensemble at the heart of the old town.",
  },
  "schwanenburg-kleve": {
    slug: "swan-castle-kleve",
    name: "Swan Castle Kleve",
    type: "Landmark",
    shortDesc:
      "Kleve's landmark high above the Reichswald forest, tied to the Lohengrin swan legend.",
    longDesc:
      "The Swan Castle (Schwanenburg) sits atop a steep slope above Kleve and is the emblem of the \"swan city.\" Its striking Swan Tower recalls the Lohengrin legend of the swan knight. Today the castle houses the local court and a small museum; from the tower the view reaches far across the Reichswald forest and into the Netherlands.",
  },
  "marienbasilika-kevelaer": {
    slug: "basilica-kevelaer",
    name: "Marian Basilica & Candle Chapel, Kevelaer",
    type: "Church",
    shortDesc:
      "The heart of northwest Europe's largest Marian pilgrimage site, with its Chapel of Grace and Candle Chapel.",
    longDesc:
      "Around the Kapellenplatz square, the pilgrimage ensemble of Kevelaer forms one of the most significant pilgrim destinations in Europe. The neo-Gothic Marian Basilica, the Baroque Chapel of Grace with the miraculous image \"Consoler of the Afflicted,\" and the unique Candle Chapel draw around one million pilgrims every year. A place of stillness in the middle of the Lower Rhine.",
  },
  "schloss-moyland": {
    slug: "moyland-castle",
    name: "Moyland Castle Museum",
    type: "Museum",
    shortDesc:
      "A neo-Gothic moated castle with the world's largest Joseph Beuys collection and a sculpture park.",
    longDesc:
      "The neo-Gothic moated castle of Moyland near Bedburg-Hau houses the world's largest collection of works by the artist Joseph Beuys. Surrounded by an expansive sculpture park and historic gardens, Moyland is a magnet for art and garden lovers. Changing exhibitions, a café and a museum shop invite you to linger.",
    openingHours: "Tue-Fri 11:00-17:00, Sat/Sun 10:00-18:00",
  },
  "rathaus-kalkar": {
    slug: "kalkar-town-hall",
    name: "Historic Town Hall & St. Nicholas, Kalkar",
    type: "Landmark",
    shortDesc:
      "A late-Gothic brick town hall and the world-famous carved altars of St. Nicholas's Church.",
    longDesc:
      "Kalkar's market square is dominated by its magnificent late-Gothic brick town hall from the 15th century. Just a few steps away, St. Nicholas's Church holds nine important carved altars - masterpieces of Lower Rhine woodcarving. The ensemble makes Kalkar one of the loveliest historic town centers in the region.",
  },
  "wunderland-kalkar": {
    slug: "wunderland-kalkar",
    name: "Wunderland Kalkar",
    type: "Modern",
    shortDesc:
      "A theme and family park inside a decommissioned \"fast breeder\" reactor - more than 40 attractions.",
    longDesc:
      "Wunderland Kalkar was built on the site of a nuclear power plant that never went into operation: a leisure and adventure park with more than 40 rides, a hotel and event halls. The cooling tower, converted into a climbing wall and home to the \"Vertical Carousel,\" is a landmark visible for miles - an unusual day out for the whole family.",
    openingHours: "Seasonal, see website",
  },
  "xantener-suedsee": {
    slug: "xanten-south-lake",
    name: "Xanten South Lake",
    type: "Park",
    shortDesc:
      "A bathing lake with a beach, water-sports center and promenade right beside the Roman town.",
    longDesc:
      "The Xanten South Lake (Südsee) is the recreational paradise of the Roman town: a lido, diving, sailing, stand-up paddling and a water-sports center make it a summer magnet. A promenade connects the lake, the marina and the Archaeological Park - perfect for families and active travelers.",
  },
  "rheinpromenade-emmerich": {
    slug: "emmerich-rhine-promenade",
    name: "Emmerich Rhine Promenade",
    type: "Viewpoint",
    shortDesc:
      "Germany's longest Rhine promenade, looking out over the country's longest suspension bridge.",
    longDesc:
      "For more than three kilometers the Emmerich Rhine promenade runs along the widest point of the German Rhine - the longest of its kind in the country. From the Geistmarkt to the Rhine bridge (Germany's longest suspension bridge), cafés, benches and viewpoints line the way. An ideal spot to watch the big cargo ships glide past.",
  },
  "rheinpromenade-rees": {
    slug: "rees-rhine-promenade",
    name: "City Wall & Rhine Promenade, Rees",
    type: "Viewpoint",
    shortDesc:
      "The medieval fortifications and idyllic promenade of the oldest town on the lower Lower Rhine.",
    longDesc:
      "Rees, the oldest town on the lower Lower Rhine, preserves remnants of its medieval city wall with bastions right by the water. The Rhine promenade with its mill tower and bear sculpture invites a stroll; across the river, the Rhine meadows and the Reeser Meer lake beckon as a bird paradise.",
  },
  "forstgarten-kleve": {
    slug: "kleve-forest-garden",
    name: "Forest Garden & Zoo, Kleve",
    type: "Park",
    shortDesc:
      "The Baroque garden of Johann Moritz of Nassau-Siegen and the popular Kleve zoo.",
    longDesc:
      "The Forest Garden (Forstgarten) goes back to the Baroque garden layouts of Prince Johann Moritz of Nassau-Siegen and is among the oldest landscaped gardens in Germany. Ancient giant trees, the amphitheater and the neighboring Kleve zoo with more than 350 animals make the park the green living room of the swan city.",
  },
  reichswald: {
    slug: "reichswald-forest",
    name: "Reichswald Forest",
    type: "Park",
    shortDesc:
      "The largest contiguous woodland on the Lower Rhine - hiking, cycling and nature.",
    longDesc:
      "The Kleve Reichswald is the largest contiguous forest on the lower Lower Rhine and an expansive recreation area between Kleve, Goch and the Dutch border. Marked hiking and cycling trails, the Sterbusch and quiet clearings make the forest a retreat for nature lovers and families.",
  },
  "steintor-goch": {
    slug: "goch-stone-gate",
    name: "Stone Gate, Goch",
    type: "Landmark",
    shortDesc:
      "One of the best-preserved medieval town gates on the Lower Rhine, set on the Niers river.",
    longDesc:
      "The Stone Gate (Steintor) in Goch is one of the few surviving medieval town gates in the region and the landmark of this town on the Niers river. Together with the parish church of St. Mary Magdalene and the historic market, it forms an attractive town center and a fine stage on the Niers cycle route.",
  },
  "rheinauen-wildgaense": {
    slug: "rhine-meadows-wild-geese",
    name: "Rhine Meadows & Wild Geese of the Lower Rhine",
    type: "Park",
    shortDesc:
      "An internationally protected area - a winter refuge for up to 180,000 Arctic wild geese.",
    longDesc:
      "The broad Rhine meadows between Emmerich, Rees and Bislich are among the most important wetlands in Central Europe. From October to February, up to 180,000 Arctic wild geese rest here - a natural spectacle of European rank. Observation points, guided tours and the nature conservation station invite you to marvel.",
  },
};
