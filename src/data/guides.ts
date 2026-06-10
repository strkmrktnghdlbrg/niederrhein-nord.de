export type SlotType = "morgens" | "mittagessen" | "nachmittag" | "abendessen" | "abends" | "uebernachten";

export type GuideSlot = {
  time: string;
  type: SlotType;
  title: string;
  description: string;
  sightSlug?: string;
  restaurantSlug?: string;
  hotelSlug?: string;
  districtSlug?: string;
  tip?: string;
};

export type GuideDay = { number: number; title: string; intro: string; slots: GuideSlot[]; };

export type Guide = {
  slug: string;
  title: string;
  shortDesc: string;
  lead: string;
  duration: number;
  audience: string;
  bestSeason?: string;
  imageKey?: string;
  imageHue: number;
  days: GuideDay[];
};

export const guides: Guide[] = [
  {
    slug: "xanten-roemer-tag",
    title: "Ein Tag in der Römerstadt Xanten",
    shortDesc: "Vom Archäologischen Park über den Dom bis zur Südsee — der perfekte Tag in Xanten.",
    lead: "Xanten an einem Tag: römische Geschichte am Vormittag, gotischer Dom und Altstadt am Mittag, Wasser und Strand am Nachmittag.",
    duration: 1,
    audience: "Familien & Kulturreisende",
    bestSeason: "April bis Oktober",
    imageHue: 2,
    days: [
      {
        number: 1,
        title: "Römer, Dom & Südsee",
        intro: "Ein abwechslungsreicher Tag zwischen 2000 Jahren Geschichte und Sommerfrische am See.",
        slots: [
          { time: "09:30", type: "morgens", title: "LVR-Archäologischer Park", description: "Start bei Hafentempel und Amphitheater, danach das RömerMuseum.", sightSlug: "archaeologischer-park-xanten" },
          { time: "13:00", type: "mittagessen", title: "Mittagspause in der Altstadt", description: "Niederrheinische Küche rund um den Markt.", districtSlug: "xanten" },
          { time: "14:30", type: "nachmittag", title: "Dom St. Viktor", description: "Gotische Stiftskirche mit Schatzkammer und Kreuzgang.", sightSlug: "dom-st-viktor-xanten" },
          { time: "16:30", type: "nachmittag", title: "Xantener Südsee", description: "Strand, Promenade und Wassersport zum Tagesausklang.", sightSlug: "xantener-suedsee" },
          { time: "20:00", type: "uebernachten", title: "Übernachten in Xanten", description: "Stilvoll in der Altstadt.", hotelSlug: "hotel-van-bebber-xanten" },
        ],
      },
    ],
  },
  {
    slug: "niederrhein-rad-wochenende",
    title: "Rad-Wochenende am unteren Niederrhein",
    shortDesc: "Zwei Tage Knotenpunkt-Radeln zwischen Kleve, Reichswald, Rhein und Kevelaer.",
    lead: "Flaches Land, weiter Himmel: ein entspanntes Radwochenende über das Knotenpunktnetz mit Kultur, Natur und Hofläden.",
    duration: 2,
    audience: "Aktivurlauber & Radfahrer",
    bestSeason: "Mai bis September",
    imageHue: 1,
    days: [
      {
        number: 1,
        title: "Kleve, Reichswald & Schloss Moyland",
        intro: "Start in der Schwanenstadt, hinein in den Reichswald und zum Wasserschloss.",
        slots: [
          { time: "09:30", type: "morgens", title: "Schwanenburg & Forstgarten", description: "Auftakt in Kleve mit Burgblick und Barockgarten.", sightSlug: "schwanenburg-kleve" },
          { time: "12:30", type: "mittagessen", title: "Einkehr am Reichswald", description: "Stärkung vor der Waldetappe.", hotelSlug: "landhaus-am-reichswald" },
          { time: "14:00", type: "nachmittag", title: "Schloss Moyland", description: "Beuys-Kunst und Skulpturenpark per Rad erreichbar.", sightSlug: "schloss-moyland" },
          { time: "19:00", type: "uebernachten", title: "Nacht in Kleve", description: "Zentral übernachten.", hotelSlug: "rilano-hotel-kleve" },
        ],
      },
      {
        number: 2,
        title: "Kevelaer & Spargelland",
        intro: "Über die Knotenpunkte ins Wallfahrtsstädtchen und durch das Spargelland.",
        slots: [
          { time: "10:00", type: "morgens", title: "Marienbasilika Kevelaer", description: "Wallfahrtsensemble und Kerzenkapelle.", sightSlug: "marienbasilika-kevelaer" },
          { time: "13:00", type: "mittagessen", title: "Hofcafé & Spargel", description: "Saisonale Küche im Spargelland (Apr–Jun).", districtSlug: "geldern" },
          { time: "15:00", type: "nachmittag", title: "Rückfahrt über die Niers", description: "Entspannt am Wasser zurück Richtung Goch.", sightSlug: "steintor-goch" },
        ],
      },
    ],
  },
];

export const getGuide = (slug: string) => guides.find((g) => g.slug === slug);
