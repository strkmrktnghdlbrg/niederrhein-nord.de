export interface CityEvent {
  slug: string;
  title: string;
  intro: string;
  eyebrow: string;
  checkin: string;
  checkout: string;
  description: string;
  address: string;
  lat?: number;
  lng?: number;
  radius?: number;
  maxPricePerNight?: number;
  limit?: number;
  eventStart?: string;
  eventEnd?: string;
}

export const events: CityEvent[] = [
  {
    slug: "wallfahrt-kevelaer",
    title: "Wallfahrtssaison Kevelaer",
    eyebrow: "Wallfahrt",
    intro: "Von Mai bis Anfang November pilgern rund eine Million Gläubige zur Trösterin der Betrübten nach Kevelaer.",
    description:
      "Die Wallfahrtssaison in Kevelaer ist das prägende Ereignis am Niederrhein: Prozessionen, Lichterprozessionen und Pilgergruppen aus ganz Europa beleben den Kapellenplatz. Finde Hotels und Gästehäuser für deinen Aufenthalt in Kevelaer.",
    address: "Kapellenplatz, 47623 Kevelaer",
    lat: 51.5836,
    lng: 6.2459,
    radius: 6000,
    maxPricePerNight: 160,
    eventStart: "2026-05-01",
    eventEnd: "2026-11-08",
  },
  {
    slug: "strassenmaler-festival-geldern",
    title: "Internationales Straßenmaler-Festival Geldern",
    eyebrow: "Festival",
    intro: "Einmal im Jahr verwandeln Künstler aus aller Welt die Gelderner Innenstadt in eine riesige Freiluft-Galerie.",
    description:
      "Das Straßenmaler-Festival ist eines der ältesten und größten seiner Art weltweit. Tausende Besucher kommen, um den Künstlern beim Malen auf dem Asphalt zuzusehen. Sichere dir frühzeitig eine Unterkunft in und um Geldern.",
    address: "Innenstadt, 47608 Geldern",
    lat: 51.519,
    lng: 6.327,
    radius: 12000,
    maxPricePerNight: 150,
    eventStart: "2026-09-05",
    eventEnd: "2026-09-06",
  },
  {
    slug: "wildgaense-saison",
    title: "Wildgänse-Saison am Unteren Niederrhein",
    eyebrow: "Naturschauspiel",
    intro: "Von Oktober bis Februar rasten bis zu 180.000 arktische Wildgänse in den Rheinauen — Europas Top-Spot.",
    description:
      "Jeden Winter wird der Untere Niederrhein zum Schlafzimmer für Hunderttausende Wildgänse. Geführte Beobachtungstouren starten in Emmerich, Rees und Bislich. Finde gemütliche Unterkünfte für dein Naturwochenende.",
    address: "Rheinauen, 46446 Emmerich am Rhein",
    lat: 51.82,
    lng: 6.43,
    radius: 15000,
    maxPricePerNight: 140,
    eventStart: "2026-10-15",
    eventEnd: "2027-02-15",
  },
  {
    slug: "spargel-erdbeerzeit",
    title: "Spargel- & Erdbeerzeit am Niederrhein",
    eyebrow: "Genuss",
    intro: "Von April bis Juni hat das Niederrhein-Spargelland Hochsaison — Hofläden, Selbstpflücke und Spargelmenüs.",
    description:
      "Der Niederrhein ist eines der größten Spargel- und Erdbeeranbaugebiete Deutschlands. In der Saison locken Hofläden, Spargelhöfe und Erdbeer-Selbstpflückfelder zwischen Kleve, Geldern und Kevelaer. Plane dein Genusswochenende.",
    address: "Region Niederrhein Nord",
    lat: 51.6577,
    lng: 6.453,
    radius: 25000,
    maxPricePerNight: 130,
    eventStart: "2026-04-15",
    eventEnd: "2026-06-24",
  },
];

export const isUpcoming = (e: CityEvent): boolean =>
  !e.eventEnd || new Date(e.eventEnd) >= new Date();
