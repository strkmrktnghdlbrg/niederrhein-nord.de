export type Hotel = {
  slug: string;
  name: string;
  district: string;
  stars: 2 | 3 | 4 | 5;
  priceFrom: number;
  rating: number;
  reviews: number;
  guestFavorite?: boolean;
  shortDesc: string;
  longDesc: string;
  imageHue: number;
  bookingUrl: string;
  amenities: string[];
};

export const hotels: Hotel[] = [
  {
    slug: "parkhotel-kleve",
    name: "Parkhotel Kleve",
    district: "kleve",
    stars: 4,
    priceFrom: 112,
    rating: 4.5,
    reviews: 980,
    guestFavorite: true,
    shortDesc: "4★-Hotel am Forstgarten, ruhige Lage nahe Tiergarten und Innenstadt.",
    longDesc:
      "Das Parkhotel Kleve liegt direkt am historischen Forstgarten und bietet komfortable Zimmer, Restaurant und Wellnessbereich in ruhiger, grüner Lage. Tiergarten, Museum Kurhaus und die Klever Innenstadt sind bequem zu Fuß erreichbar.",
    imageHue: 1,
    bookingUrl: "https://www.booking.com/searchresults.de.html?ss=Kleve",
    amenities: ["WLAN", "Restaurant", "Wellness", "Parkplatz"],
  },
  {
    slug: "hotel-van-bebber-xanten",
    name: "Hotel van Bebber, Xanten",
    district: "xanten",
    stars: 3,
    priceFrom: 119,
    rating: 4.6,
    reviews: 640,
    guestFavorite: true,
    shortDesc: "Traditionshaus in der Xantener Altstadt, wenige Schritte vom Dom.",
    longDesc:
      "Das historische Hotel van Bebber empfängt Gäste seit Generationen mitten in der Xantener Altstadt. Stilvolle Zimmer, regionale Küche und die Nähe zu Dom St. Viktor und Archäologischem Park machen es zur idealen Basis für die Römerstadt.",
    imageHue: 2,
    bookingUrl: "https://www.booking.com/searchresults.de.html?ss=Xanten",
    amenities: ["WLAN", "Restaurant", "Bar", "Altstadtlage"],
  },
  {
    slug: "hotel-kevelaerer-hof",
    name: "Hotel Kevelaerer Hof",
    district: "kevelaer",
    stars: 3,
    priceFrom: 89,
    rating: 4.4,
    reviews: 520,
    shortDesc: "Gemütliches Pilger- und Familienhotel nahe der Marienbasilika.",
    longDesc:
      "Nur wenige Schritte vom Kapellenplatz entfernt bietet der Kevelaerer Hof komfortable Zimmer für Pilger, Familien und Geschäftsreisende. Hauseigenes Restaurant mit niederrheinischer Küche und kurze Wege zu Basilika und Kerzenkapelle.",
    imageHue: 1,
    bookingUrl: "https://www.booking.com/searchresults.de.html?ss=Kevelaer",
    amenities: ["WLAN", "Restaurant", "Parkplatz", "Zentral"],
  },
  {
    slug: "landhaus-am-reichswald",
    name: "Landhaus am Reichswald",
    district: "goch",
    stars: 4,
    priceFrom: 139,
    rating: 4.7,
    reviews: 410,
    guestFavorite: true,
    shortDesc: "Ruhiges 4★-Landhotel am Waldrand mit Wellness und Naturlage.",
    longDesc:
      "Am Rand des Reichswalds gelegen verbindet das Landhaus Naturnähe mit Komfort: großzügige Zimmer, Saunalandschaft und regionale Küche. Ideal für Wander- und Radurlauber, die das Gocher Umland und den Reichswald erkunden möchten.",
    imageHue: 5,
    bookingUrl: "https://www.booking.com/searchresults.de.html?ss=Goch",
    amenities: ["WLAN", "Wellness", "Restaurant", "Fahrradverleih", "Parkplatz"],
  },
  {
    slug: "rilano-hotel-kleve",
    name: "Rilano Hotel Cleve City",
    district: "kleve",
    stars: 4,
    priceFrom: 104,
    rating: 4.3,
    reviews: 760,
    shortDesc: "Modernes 4★-Stadthotel zentral in Kleve, ideal für Geschäft & Städtetrip.",
    longDesc:
      "Das Rilano Hotel Cleve City liegt verkehrsgünstig in der Klever Innenstadt. Moderne Zimmer, Tagungsräume und ein Restaurant machen es zum praktischen Standort für Geschäftsreisende und Entdecker des nördlichen Niederrheins.",
    imageHue: 3,
    bookingUrl: "https://www.booking.com/searchresults.de.html?ss=Kleve",
    amenities: ["WLAN", "Restaurant", "Tagungsräume", "Parkplatz"],
  },
  {
    slug: "hotel-am-kraftwerk-kalkar",
    name: "Wunderland Kalkar Hotel",
    district: "kalkar",
    stars: 3,
    priceFrom: 99,
    rating: 4.2,
    reviews: 1200,
    shortDesc: "Familienhotel direkt im Freizeitpark Wunderland Kalkar.",
    longDesc:
      "Das parkeigene Hotel des Wunderland Kalkar bietet Familienzimmer und kurze Wege zu allen Attraktionen. Mit Eintrittspaketen, Eventhallen und Restaurants ist es die erste Wahl für Familien- und Gruppenaufenthalte am Niederrhein.",
    imageHue: 3,
    bookingUrl: "https://www.booking.com/searchresults.de.html?ss=Kalkar",
    amenities: ["WLAN", "Familienzimmer", "Restaurant", "Parkplatz"],
  },
  {
    slug: "gaestehaus-priorenhof-kevelaer",
    name: "Gästehaus Priorenhof, Kevelaer",
    district: "kevelaer",
    stars: 3,
    priceFrom: 79,
    rating: 4.5,
    reviews: 330,
    shortDesc: "Ruhiges Gästehaus für Pilger und Erholungssuchende am Kapellenplatz.",
    longDesc:
      "Das Gästehaus Priorenhof bietet schlichten, gepflegten Komfort in unmittelbarer Nähe des Wallfahrtsensembles. Ein guter Ausgangspunkt für Tage der Stille, Einkehr und Spaziergänge durch Kevelaer.",
    imageHue: 1,
    bookingUrl: "https://www.booking.com/searchresults.de.html?ss=Kevelaer",
    amenities: ["WLAN", "Frühstück", "Zentral", "Ruhig"],
  },
  {
    slug: "rheinhotel-emmerich",
    name: "Rheinhotel Emmerich",
    district: "emmerich",
    stars: 3,
    priceFrom: 94,
    rating: 4.3,
    reviews: 480,
    shortDesc: "Stadthotel an der längsten Rheinpromenade Deutschlands.",
    longDesc:
      "Direkt an der Emmericher Rheinpromenade gelegen bietet das Rheinhotel Zimmer mit Blick aufs Wasser und die großen Frachtschiffe. Ein idealer Standort für Rad- und Schiffsausflüge entlang des unteren Niederrheins.",
    imageHue: 2,
    bookingUrl: "https://www.booking.com/searchresults.de.html?ss=Emmerich+am+Rhein",
    amenities: ["WLAN", "Rheinblick", "Restaurant", "Fahrradverleih"],
  },
  {
    slug: "stadthotel-geldern",
    name: "Stadthotel Geldern",
    district: "geldern",
    stars: 3,
    priceFrom: 84,
    rating: 4.2,
    reviews: 290,
    shortDesc: "Zentrales Hotel in der Festival- und Einkaufsstadt Geldern.",
    longDesc:
      "Das Stadthotel Geldern liegt zentral nahe der Fußgängerzone und ist ein praktischer Standort für Shopping, das Straßenmaler-Festival und Touren ins Gelderland und ins Spargelland rund um Geldern.",
    imageHue: 1,
    bookingUrl: "https://www.booking.com/searchresults.de.html?ss=Geldern",
    amenities: ["WLAN", "Frühstück", "Zentral", "Parkplatz"],
  },
  {
    slug: "hotel-op-de-poort-rees",
    name: "Hotel Op de Poort, Rees",
    district: "rees",
    stars: 3,
    priceFrom: 88,
    rating: 4.4,
    reviews: 360,
    shortDesc: "Hotel mit Rheinblick an der Promenade der ältesten Stadt am unteren Niederrhein.",
    longDesc:
      "An der Reeser Rheinpromenade gelegen bietet das Hotel Op de Poort gemütliche Zimmer und regionale Küche mit Blick auf den Rhein. Perfekt für Naturfreunde, die Rheinauen und das Reeser Meer erkunden wollen.",
    imageHue: 4,
    bookingUrl: "https://www.booking.com/searchresults.de.html?ss=Rees",
    amenities: ["WLAN", "Rheinblick", "Restaurant", "Terrasse"],
  },
  {
    slug: "boutiquehotel-xanten",
    name: "Boutiquehotel Neumaier, Xanten",
    district: "xanten",
    stars: 4,
    priceFrom: 129,
    rating: 4.6,
    reviews: 270,
    guestFavorite: true,
    shortDesc: "Charmantes Boutiquehotel mit individuellem Design nahe dem APX.",
    longDesc:
      "Das Boutiquehotel Neumaier verbindet niederrheinischen Charme mit modernem Design. Individuell gestaltete Zimmer, ein gutes Frühstück und die Nähe zum Archäologischen Park und zur Südsee machen es zur stilvollen Basis in Xanten.",
    imageHue: 2,
    bookingUrl: "https://www.booking.com/searchresults.de.html?ss=Xanten",
    amenities: ["WLAN", "Design", "Frühstück", "Fahrradverleih"],
  },
  {
    slug: "landgasthof-goch",
    name: "Landgasthof Gochsheide",
    district: "goch",
    stars: 3,
    priceFrom: 76,
    rating: 4.3,
    reviews: 210,
    shortDesc: "Gemütlicher Landgasthof mit niederrheinischer Küche bei Goch.",
    longDesc:
      "Der familiengeführte Landgasthof Gochsheide bietet bodenständigen Komfort, herzhafte niederrheinische Küche und einen ruhigen Ausgangspunkt für Radtouren entlang der Niers und in den Reichswald.",
    imageHue: 5,
    bookingUrl: "https://www.booking.com/searchresults.de.html?ss=Goch",
    amenities: ["WLAN", "Restaurant", "Parkplatz", "Fahrradverleih"],
  },
];

export const getHotel = (slug: string) => hotels.find((h) => h.slug === slug);
export const hotelsByDistrict = (district: string) => hotels.filter((h) => h.district === district);
export const topHotelsByDistrict = (district: string, limit = 4) =>
  hotelsByDistrict(district)
    .slice()
    .sort((a, b) => b.rating - a.rating)
    .slice(0, limit);
