export type Restaurant = {
  slug: string;
  name: string;
  district: string;
  cuisine: string;
  priceLevel: "€" | "€€" | "€€€" | "€€€€";
  shortDesc: string;
  longDesc: string;
  imageHue: number;
  imageKey?: string;
  openingHours?: string;
  websiteUrl?: string;
  reservation?: boolean;
  categories: string[];
};

export const restaurants: Restaurant[] = [
  { slug: "gasthaus-zur-linde-xanten", name: "Gasthaus Zur Linde", district: "xanten", cuisine: "Niederrheinisch", priceLevel: "€€", shortDesc: "Bodenständige niederrheinische Küche in der Xantener Altstadt.", longDesc: "Das Gasthaus Zur Linde serviert regionale Klassiker wie Grünkohl, Reibekuchen und saisonalen Spargel in gemütlicher Altstadtatmosphäre nahe dem Dom.", imageHue: 2, reservation: true, categories: ["regional", "gemuetlich"] },
  { slug: "roemer-stube-xanten", name: "Römer-Stube", district: "xanten", cuisine: "Regional & saisonal", priceLevel: "€€", shortDesc: "Saisonale Küche zwischen Markt und Archäologischem Park.", longDesc: "Die Römer-Stube setzt auf frische, saisonale Produkte vom Niederrhein und liegt ideal für eine Pause zwischen APX und Altstadtbummel.", imageHue: 5, reservation: true, categories: ["regional", "saisonal"] },
  { slug: "schwanenhof-kleve", name: "Schwanenhof", district: "kleve", cuisine: "Deutsch", priceLevel: "€€", shortDesc: "Klassische Küche mit Blick auf den Forstgarten.", longDesc: "Der Schwanenhof verbindet deutsche Küche mit niederrheinischem Charme in ruhiger Lage am Forstgarten — beliebt bei Familien und Wanderern.", imageHue: 1, reservation: true, categories: ["regional", "familie"] },
  { slug: "haus-am-kapellenplatz-kevelaer", name: "Haus am Kapellenplatz", district: "kevelaer", cuisine: "Niederrheinisch", priceLevel: "€€", shortDesc: "Traditionsgasthaus direkt am Wallfahrtsensemble.", longDesc: "Mitten im Herzen Kevelaers serviert das Haus am Kapellenplatz herzhafte niederrheinische Gerichte und Kaffee & Kuchen für Pilger und Tagesgäste.", imageHue: 1, reservation: false, categories: ["regional", "cafe"] },
  { slug: "ratskeller-kalkar", name: "Ratskeller Kalkar", district: "kalkar", cuisine: "Regional", priceLevel: "€€", shortDesc: "Gewölbekeller-Restaurant unter dem historischen Backstein-Rathaus.", longDesc: "Im historischen Ratskeller von Kalkar genießt man regionale Küche unter alten Gewölben, nur wenige Schritte von St. Nicolai und Marktplatz entfernt.", imageHue: 5, reservation: true, categories: ["regional", "historisch"] },
  { slug: "rheinterrasse-emmerich", name: "Rheinterrasse Emmerich", district: "emmerich", cuisine: "Fisch & Regional", priceLevel: "€€€", shortDesc: "Restaurant mit Terrasse direkt an der Rheinpromenade.", longDesc: "Die Rheinterrasse bietet Fischgerichte und regionale Küche mit Panoramablick auf den Rhein und die großen Frachter — ein Höhepunkt der längsten Rheinpromenade Deutschlands.", imageHue: 2, reservation: true, categories: ["fisch", "rheinblick"] },
  { slug: "altstadt-bistro-rees", name: "Altstadt-Bistro Rees", district: "rees", cuisine: "Bistro", priceLevel: "€€", shortDesc: "Modernes Bistro an der Reeser Rheinpromenade.", longDesc: "Im Altstadt-Bistro treffen frische Bistroküche und niederrheinische Gemütlichkeit aufeinander — mit Terrasse und Blick auf Stadtmauer und Rhein.", imageHue: 4, reservation: false, categories: ["bistro", "rheinblick"] },
  { slug: "gelderner-hof", name: "Gelderner Hof", district: "geldern", cuisine: "Deutsch & saisonal", priceLevel: "€€", shortDesc: "Zentrales Restaurant in der Festivalstadt Geldern.", longDesc: "Der Gelderner Hof punktet mit saisonaler Küche aus dem Spargel- und Erdbeerland und liegt zentral nahe der Fußgängerzone.", imageHue: 1, reservation: true, categories: ["regional", "saisonal"] },
  { slug: "niers-stuben-goch", name: "Niers-Stuben Goch", district: "goch", cuisine: "Niederrheinisch", priceLevel: "€€", shortDesc: "Gemütliche Stuben an der Niers, ideal für Radler.", longDesc: "Die Niers-Stuben in Goch sind eine beliebte Einkehr für Radfahrer auf dem Niers-Radweg — herzhafte Küche, Kuchen und ein schattiger Biergarten.", imageHue: 5, reservation: false, categories: ["regional", "biergarten"] },
  { slug: "hofcafe-spargelhof-kevelaer", name: "Hofcafé Spargelhof", district: "kevelaer", cuisine: "Hofcafé", priceLevel: "€", shortDesc: "Saisonales Hofcafé mitten im Spargel- und Erdbeerland.", longDesc: "Das Hofcafé eines Spargelhofs bei Kevelaer serviert in der Saison frischen Spargel, Erdbeerkuchen und Produkte aus dem eigenen Hofladen.", imageHue: 3, reservation: false, categories: ["cafe", "saisonal", "hofladen"] },
];

export const getRestaurant = (slug: string) => restaurants.find((r) => r.slug === slug);
export const restaurantsByDistrict = (district: string) => restaurants.filter((r) => r.district === district);
export const restaurantsByCategory = (category: string) =>
  restaurants.filter((r) => r.categories.includes(category));
