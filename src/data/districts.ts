export type District = {
  slug: string;
  name: string;
  shortDesc: string;
  longDesc: string;
  hue: number;
  imageKey?: string;
  coordinates: [number, number];
  characterTags: string[];
};

export const districts: District[] = [
  {
    slug: "xanten",
    imageKey: "district:xanten",
    name: "Xanten",
    shortDesc: "Römerstadt mit Archäologischem Park, Dom St. Viktor und der Xantener Südsee.",
    longDesc:
      "Xanten ist das touristische Herz des nördlichen Niederrheins: Im LVR-Archäologischen Park wird das römische Colonia Ulpia Traiana lebendig, der gotische Dom St. Viktor gilt als „Kölner Dom des Niederrheins“, und die Xantener Südsee lädt zu Wassersport und Strandtagen. Die mittelalterliche Altstadt mit Klever Tor und Windmühle rundet den Besuch ab.",
    hue: 2,
    coordinates: [51.6577, 6.453],
    characterTags: ["Römerstadt", "APX", "Südsee", "Dom"],
  },
  {
    slug: "kleve",
    imageKey: "district:kleve",
    name: "Kleve",
    shortDesc: "Schwanenstadt am Reichswald mit Schwanenburg, Forstgarten und Tiergarten.",
    longDesc:
      "Die Kreisstadt Kleve thront mit der Schwanenburg über dem Reichswald und der niederländischen Grenze. Die barocken Gartenanlagen des Forstgartens, der Tiergarten und das Museum Kurhaus machen Kleve zur grünen Kulturstadt. Die Lohengrin-Schwanensage ist bis heute das Wahrzeichen der Stadt.",
    hue: 4,
    coordinates: [51.7879, 6.1385],
    characterTags: ["Schwanenburg", "Reichswald", "Hochschule"],
  },
  {
    slug: "kevelaer",
    imageKey: "district:kevelaer",
    name: "Kevelaer",
    shortDesc: "Größter Marien-Wallfahrtsort Nordwesteuropas mit Basilika und Kerzenkapelle.",
    longDesc:
      "Kevelaer zieht jährlich rund eine Million Pilger an und ist der bedeutendste Marien-Wallfahrtsort Nordwesteuropas. Marienbasilika, Gnadenkapelle und Kerzenkapelle bilden ein einzigartiges Ensemble. Rund um den Kapellenplatz prägen Devotionalienhandel, Niederrheinisches Museum und gemütliche Gastronomie das Bild.",
    hue: 1,
    coordinates: [51.5826, 6.2462],
    characterTags: ["Wallfahrt", "Basilika", "Kerzenkapelle"],
  },
  {
    slug: "kalkar",
    imageKey: "district:kalkar",
    name: "Kalkar",
    shortDesc: "Spätgotisches Kleinod mit Backstein-Rathaus, St. Nicolai und Wunderland Kalkar.",
    longDesc:
      "Kalkar ist berühmt für sein spätgotisches Backstein-Rathaus am historischen Marktplatz und die Schnitzaltäre der Kirche St. Nicolai — Meisterwerke der niederrheinischen Bildschnitzkunst. Auf dem Gelände eines nie ans Netz gegangenen Kernkraftwerks lockt heute das Wunderland Kalkar als Freizeit- und Familienpark.",
    hue: 4,
    coordinates: [51.7405, 6.2917],
    characterTags: ["Backstein", "St. Nicolai", "Wunderland"],
  },
  {
    slug: "geldern",
    imageKey: "district:geldern",
    name: "Geldern",
    shortDesc: "Lebendige Gelderland-Stadt, bekannt für das internationale Straßenmaler-Festival.",
    longDesc:
      "Geldern, einst Hauptstadt des Herzogtums Geldern, ist heute eine quirlige Einkaufs- und Festivalstadt. Weltberühmt ist das jährliche Straßenmaler-Festival, das die Innenstadt in eine riesige Freiluft-Galerie verwandelt. Die Region um Geldern ist klassisches Spargel- und Erdbeerland.",
    hue: 1,
    coordinates: [51.519, 6.327],
    characterTags: ["Gelderland", "Straßenmaler", "Spargel"],
  },
  {
    slug: "emmerich",
    imageKey: "district:emmerich",
    name: "Emmerich am Rhein",
    shortDesc: "Rheinstadt mit der längsten Rheinpromenade Deutschlands und Hängebrücke.",
    longDesc:
      "Emmerich am Rhein liegt am breitesten Punkt des Rheins in Deutschland und besitzt mit über drei Kilometern die längste Rheinpromenade des Landes. Die Rheinbrücke Emmerich ist die längste Hängebrücke Deutschlands. Von der Promenade aus beobachtet man die großen Frachter auf dem Weg in die Niederlande.",
    hue: 2,
    coordinates: [51.8344, 6.2486],
    characterTags: ["Rheinpromenade", "Hängebrücke", "am Rhein"],
  },
  {
    slug: "rees",
    imageKey: "district:rees",
    name: "Rees",
    shortDesc: "Älteste Stadt am unteren Niederrhein mit Stadtmauer und Rheinpromenade.",
    longDesc:
      "Rees ist die älteste Stadt am unteren Niederrhein (Stadtrecht 1228). Reste der mittelalterlichen Stadtbefestigung, gemütliche Bastionen und eine schöne Rheinpromenade prägen den Ort. Rundherum locken Rheinauen, Vogelschutzgebiete und das Reeser Meer zu Naturerlebnissen.",
    hue: 4,
    coordinates: [51.7625, 6.3969],
    characterTags: ["Stadtmauer", "Rheinpromenade", "älteste Stadt"],
  },
  {
    slug: "goch",
    imageKey: "district:goch",
    name: "Goch & Weeze",
    shortDesc: "Steintor-Stadt an der Niers, Tor zum Reichswald und zum Airport Weeze.",
    longDesc:
      "Goch an der Niers ist mit dem mittelalterlichen Steintor und der Stiftskirche eine charmante Etappe am Niers-Radweg. Das benachbarte Weeze beherbergt mit dem Airport Weeze einen wichtigen Regionalflughafen. Beide Orte sind ideale Ausgangspunkte für Touren in den Reichswald und ins Gocher Umland.",
    hue: 5,
    coordinates: [51.6783, 6.1619],
    characterTags: ["Steintor", "Niers", "Airport Weeze"],
  },
];

export const getDistrict = (slug: string) => districts.find((d) => d.slug === slug);
