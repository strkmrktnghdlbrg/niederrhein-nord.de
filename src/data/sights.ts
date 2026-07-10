export type Sight = {
  slug: string;
  name: string;
  district: string;
  type: "Wahrzeichen" | "Museum" | "Kirche" | "Park" | "Markt" | "Modern" | "Aussicht";
  priceFrom: number | null;
  shortDesc: string;
  longDesc: string;
  imageHue: number;
  imageKey?: string;
  categories: string[];
  coordinates: [number, number];
  openingHours?: string;
  websiteUrl?: string;
  gygActivityId?: string;
};

export const sights: Sight[] = [
  {
    slug: "archaeologischer-park-xanten",
    imageKey: "sight:archaeologischer-park-xanten",
    name: "LVR-Archäologischer Park Xanten (APX)",
    district: "xanten",
    type: "Museum",
    priceFrom: 12,
    shortDesc: "Größtes archäologisches Freilichtmuseum Deutschlands auf dem Boden der römischen Colonia Ulpia Traiana.",
    longDesc:
      "Auf dem Gelände der einstigen römischen Stadt Colonia Ulpia Traiana erstreckt sich der größte archäologische Freilichtpark Deutschlands. Rekonstruierte Bauten wie der Hafentempel, das Amphitheater und die Stadtmauer lassen das römische Leben am Niederrhein lebendig werden. Das integrierte LVR-RömerMuseum zeigt Originalfunde in der ehemaligen großen Thermenhalle. Ein Highlight für Familien, Schulklassen und Geschichtsfans.",
    imageHue: 2,
    categories: ["historie", "museen", "wahrzeichen"],
    coordinates: [51.6663, 6.4438],
    openingHours: "tgl. 9:00-18:00 (Winter bis 17:00)",
    websiteUrl: "https://apx.lvr.de",
  },
  {
    slug: "dom-st-viktor-xanten",
    imageKey: "sight:dom-st-viktor-xanten",
    name: "Dom St. Viktor, Xanten",
    district: "xanten",
    type: "Kirche",
    priceFrom: null,
    shortDesc: "Gotische Stiftskirche, der „Kölner Dom des Niederrheins“, mit Schatzkammer und Kreuzgang.",
    longDesc:
      "Der Xantener Dom St. Viktor gilt als bedeutendste gotische Kirche am Niederrhein und wird liebevoll „Kölner Dom des Niederrheins“ genannt. Die fünfschiffige Basilika beeindruckt mit kostbaren Schnitzaltären, dem Marienaltar und einer reichen Schatzkammer (StiftsMuseum). Der Kreuzgang und die Immunität bilden ein stimmungsvolles mittelalterliches Ensemble im Herzen der Altstadt.",
    imageHue: 5,
    categories: ["kultur-wallfahrt", "historie", "wahrzeichen"],
    coordinates: [51.6611, 6.4528],
    websiteUrl: "https://www.sankt-viktor-xanten.de",
  },
  {
    slug: "schwanenburg-kleve",
    imageKey: "sight:schwanenburg-kleve",
    name: "Schwanenburg Kleve",
    district: "kleve",
    type: "Wahrzeichen",
    priceFrom: null,
    shortDesc: "Wahrzeichen Kleves hoch über dem Reichswald, verbunden mit der Lohengrin-Schwanensage.",
    longDesc:
      "Die Schwanenburg thront auf einem Steilhang über Kleve und ist das Wahrzeichen der Schwanenstadt. Der markante Schwanenturm erinnert an die Lohengrin-Sage vom Schwanenritter. Heute beherbergt die Burg das Amtsgericht und ein kleines Museum; vom Turm reicht der Blick weit über den Reichswald bis in die Niederlande.",
    imageHue: 4,
    categories: ["wahrzeichen", "historie"],
    coordinates: [51.7905, 6.1408],
    websiteUrl: "https://www.kleve.de",
  },
  {
    slug: "marienbasilika-kevelaer",
    imageKey: "sight:marienbasilika-kevelaer",
    name: "Marienbasilika & Kerzenkapelle Kevelaer",
    district: "kevelaer",
    type: "Kirche",
    priceFrom: null,
    shortDesc: "Herz des größten Marien-Wallfahrtsorts Nordwesteuropas mit Gnaden- und Kerzenkapelle.",
    longDesc:
      "Rund um den Kapellenplatz bildet das Wallfahrtsensemble von Kevelaer eines der bedeutendsten Pilgerziele Europas. Die neugotische Marienbasilika, die barocke Gnadenkapelle mit dem Gnadenbild „Trösterin der Betrübten“ und die einzigartige Kerzenkapelle ziehen jährlich rund eine Million Pilger an. Ein Ort der Stille mitten am Niederrhein.",
    imageHue: 1,
    categories: ["kultur-wallfahrt", "historie"],
    coordinates: [51.5836, 6.2459],
    websiteUrl: "https://www.wallfahrt-kevelaer.de",
  },
  {
    slug: "schloss-moyland",
    imageKey: "sight:schloss-moyland",
    name: "Museum Schloss Moyland",
    district: "kleve",
    type: "Museum",
    priceFrom: 8,
    shortDesc: "Neugotisches Wasserschloss mit der weltweit größten Joseph-Beuys-Sammlung und Skulpturenpark.",
    longDesc:
      "Das neugotische Wasserschloss Moyland bei Bedburg-Hau beherbergt die weltweit größte Sammlung von Werken des Künstlers Joseph Beuys. Umgeben von einem weitläufigen Skulpturenpark und historischen Gärten ist Moyland ein Magnet für Kunst- und Gartenliebhaber. Wechselausstellungen, Café und Museumsshop laden zum langen Verweilen ein.",
    imageHue: 4,
    categories: ["kultur-wallfahrt", "museen", "familie"],
    coordinates: [51.7494, 6.2189],
    openingHours: "Di-Fr 11:00-17:00, Sa/So 10:00-18:00",
    websiteUrl: "https://www.moyland.de",
  },
  {
    slug: "rathaus-kalkar",
    imageKey: "sight:rathaus-kalkar",
    name: "Historisches Rathaus & St. Nicolai, Kalkar",
    district: "kalkar",
    type: "Wahrzeichen",
    priceFrom: null,
    shortDesc: "Spätgotisches Backstein-Rathaus und die weltberühmten Schnitzaltäre von St. Nicolai.",
    longDesc:
      "Kalkars Marktplatz wird vom prächtigen spätgotischen Backstein-Rathaus aus dem 15. Jahrhundert beherrscht. Nur wenige Schritte entfernt birgt die Kirche St. Nicolai neun bedeutende Schnitzaltäre - Höhepunkte der niederrheinischen Bildschnitzkunst. Das Ensemble macht Kalkar zu einem der schönsten historischen Stadtkerne der Region.",
    imageHue: 5,
    categories: ["wahrzeichen", "historie", "kultur-wallfahrt"],
    coordinates: [51.7405, 6.2917],
    websiteUrl: "https://www.kalkar.de",
  },
  {
    slug: "wunderland-kalkar",
    imageKey: "sight:wunderland-kalkar",
    name: "Wunderland Kalkar",
    district: "kalkar",
    type: "Modern",
    priceFrom: 31,
    shortDesc: "Freizeit- und Familienpark im stillgelegten „Schnellen Brüter“ - über 40 Attraktionen.",
    longDesc:
      "Auf dem Gelände des nie ans Netz gegangenen Kernkraftwerks Kalkar entstand das Wunderland Kalkar: ein Freizeit- und Erlebnispark mit über 40 Fahrgeschäften, Hotel und Eventhallen. Der zur Kletterwand umgebaute Kühlturm mit dem „Vertikalen Karussell“ ist weithin sichtbares Wahrzeichen - ein ungewöhnliches Ausflugsziel für die ganze Familie.",
    imageHue: 3,
    categories: ["familie"],
    coordinates: [51.7747, 6.3219],
    openingHours: "saisonal, siehe Website",
    websiteUrl: "https://www.wunderlandkalkar.eu",
  },
  {
    slug: "xantener-suedsee",
    imageKey: "sight:xantener-suedsee",
    name: "Xantener Südsee",
    district: "xanten",
    type: "Park",
    priceFrom: null,
    shortDesc: "Badesee mit Strand, Wassersportzentrum und Promenade direkt an der Römerstadt.",
    longDesc:
      "Die Xantener Südsee ist das Freizeitparadies der Römerstadt: Strandbad, Tauchen, Segeln, SUP und ein Wassersportzentrum machen den See zum Sommermagnet. Eine Promenade verbindet See, Marina und den Archäologischen Park - perfekt für Familien und Aktivurlauber.",
    imageHue: 2,
    categories: ["rhein-auen", "familie", "natur"],
    coordinates: [51.6536, 6.4361],
    websiteUrl: "https://www.f-z-x.de",
  },
  {
    slug: "rheinpromenade-emmerich",
    imageKey: "sight:rheinpromenade-emmerich",
    name: "Rheinpromenade Emmerich",
    district: "emmerich",
    type: "Aussicht",
    priceFrom: null,
    shortDesc: "Längste Rheinpromenade Deutschlands mit Blick auf die längste Hängebrücke des Landes.",
    longDesc:
      "Über drei Kilometer zieht sich die Emmericher Rheinpromenade am breitesten Punkt des deutschen Rheins entlang - die längste ihrer Art im Land. Vom Geistmarkt bis zur Rheinbrücke (der längsten Hängebrücke Deutschlands) reihen sich Cafés, Bänke und Aussichtspunkte. Ein idealer Ort, um den großen Frachtschiffen zuzusehen.",
    imageHue: 2,
    categories: ["rhein-auen", "wahrzeichen"],
    coordinates: [51.8353, 6.2447],
    websiteUrl: "https://www.emmerich.de",
  },
  {
    slug: "rheinpromenade-rees",
    imageKey: "sight:rheinpromenade-rees",
    name: "Stadtmauer & Rheinpromenade Rees",
    district: "rees",
    type: "Aussicht",
    priceFrom: null,
    shortDesc: "Mittelalterliche Stadtbefestigung und idyllische Promenade der ältesten Stadt am unteren Niederrhein.",
    longDesc:
      "Rees, die älteste Stadt am unteren Niederrhein, bewahrt Reste seiner mittelalterlichen Stadtmauer mit Bastionen direkt am Wasser. Die Rheinpromenade mit Mühlenturm und Bären-Skulptur lädt zu Spaziergängen ein; gegenüber locken Rheinauen und das Reeser Meer als Vogelparadies.",
    imageHue: 4,
    categories: ["rhein-auen", "historie"],
    coordinates: [51.7625, 6.3969],
    websiteUrl: "https://www.stadt-rees.de",
  },
  {
    slug: "forstgarten-kleve",
    imageKey: "sight:forstgarten-kleve",
    name: "Forstgarten & Tiergarten Kleve",
    district: "kleve",
    type: "Park",
    priceFrom: null,
    shortDesc: "Barocke Gartenanlage des Johann Moritz von Nassau-Siegen und der beliebte Klever Tiergarten.",
    longDesc:
      "Der Forstgarten geht auf die barocken Gartenanlagen des Fürsten Johann Moritz von Nassau-Siegen zurück und zählt zu den ältesten künstlichen Gartenanlagen Deutschlands. Alte Baumriesen, das Amphitheater und der angrenzende Tiergarten Kleve mit über 350 Tieren machen den Park zum grünen Wohnzimmer der Schwanenstadt.",
    imageHue: 1,
    categories: ["natur", "familie", "historie"],
    coordinates: [51.7867, 6.1486],
    websiteUrl: "https://www.tiergarten-kleve.de",
  },
  {
    slug: "reichswald",
    imageKey: "sight:reichswald",
    name: "Reichswald",
    district: "kleve",
    type: "Park",
    priceFrom: null,
    shortDesc: "Größtes zusammenhängendes Waldgebiet am Niederrhein - Wandern, Radeln, Naturerlebnis.",
    longDesc:
      "Der Klever Reichswald ist das größte zusammenhängende Waldgebiet am unteren Niederrhein und ein ausgedehntes Naherholungsgebiet zwischen Kleve, Goch und der niederländischen Grenze. Markierte Wander- und Radwege, der Sterbusch und stille Lichtungen machen den Wald zum Rückzugsort für Naturfreunde und Familien.",
    imageHue: 1,
    categories: ["natur", "radwege"],
    coordinates: [51.755, 6.05],
    websiteUrl: "https://www.niederrhein-tourismus.de",
  },
  {
    slug: "steintor-goch",
    imageKey: "sight:steintor-goch",
    name: "Steintor Goch",
    district: "goch",
    type: "Wahrzeichen",
    priceFrom: null,
    shortDesc: "Eines der besterhaltenen mittelalterlichen Stadttore am Niederrhein, an der Niers gelegen.",
    longDesc:
      "Das Steintor in Goch ist eines der wenigen erhaltenen mittelalterlichen Stadttore der Region und das Wahrzeichen der Stadt an der Niers. Zusammen mit der Pfarrkirche St. Maria Magdalena und dem historischen Markt bildet es einen sehenswerten Stadtkern und eine schöne Etappe auf dem Niers-Radweg.",
    imageHue: 5,
    categories: ["wahrzeichen", "historie", "radwege"],
    coordinates: [51.6786, 6.1606],
    websiteUrl: "https://www.goch.de",
  },
  {
    slug: "rheinauen-wildgaense",
    imageKey: "sight:rheinauen-wildgaense",
    name: "Rheinauen & Wildgänse am Unteren Niederrhein",
    district: "emmerich",
    type: "Park",
    priceFrom: null,
    shortDesc: "Internationales Naturschutzgebiet - Winterquartier für bis zu 180.000 arktische Wildgänse.",
    longDesc:
      "Die weiten Rheinauen zwischen Emmerich, Rees und Bislich gehören zu den bedeutendsten Feuchtgebieten Mitteleuropas. Von Oktober bis Februar rasten hier bis zu 180.000 arktische Wildgänse - ein Naturschauspiel von europaweitem Rang. Beobachtungspunkte, geführte Touren und die Naturschutzstation laden zum Staunen ein.",
    imageHue: 2,
    categories: ["natur", "rhein-auen"],
    coordinates: [51.82, 6.43],
    websiteUrl: "https://www.nabu-naturschutzstation.de",
  },
];

export const getSight = (slug: string) => sights.find((s) => s.slug === slug);
export const sightsByDistrict = (district: string) => sights.filter((s) => s.district === district);
export const sightsByCategory = (category: string) => sights.filter((s) => s.categories.includes(category));
