export type Category = {
  slug: string;
  name: string;
  shortDesc: string;
  icon: string;
};

export const categories: Category[] = [
  { slug: "wahrzeichen", name: "Wahrzeichen", shortDesc: "APX Xanten, Schwanenburg, Kalkarer Rathaus", icon: "landmark" },
  { slug: "rhein-auen", name: "Rhein & Auen", shortDesc: "Rheinpromenaden, Auen, Fähren & Wildgänse", icon: "anchor" },
  { slug: "radwege", name: "Radwege", shortDesc: "Knotenpunktnetz, Niers- & Rheinradweg", icon: "tree" },
  { slug: "kultur-wallfahrt", name: "Kultur & Wallfahrt", shortDesc: "Kevelaer, Dom St. Viktor, Schloss Moyland", icon: "palette" },
  { slug: "natur", name: "Natur", shortDesc: "Reichswald, Rheinauen, Naturschutzgebiete", icon: "tree" },
  { slug: "familie", name: "Familie", shortDesc: "Wunderland Kalkar, Tiergarten, Freizeitparks", icon: "family" },
  { slug: "genuss", name: "Genuss & Hofläden", shortDesc: "Spargel, Erdbeeren, Hofcafés & Wochenmärkte", icon: "shopping" },
  { slug: "historie", name: "Römer & Historie", shortDesc: "Römerstadt Xanten, Burgen, historische Mühlen", icon: "building" },
  { slug: "museen", name: "Museen", shortDesc: "LVR-RömerMuseum, Museum Schloss Moyland", icon: "museum" },
  { slug: "events", name: "Events & Feste", shortDesc: "Schützenfeste, Wallfahrt, Märkte & Festivals", icon: "moon" },
];

export const getCategory = (slug: string) => categories.find((c) => c.slug === slug);
