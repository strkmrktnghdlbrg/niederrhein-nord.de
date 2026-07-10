export type NewsItem = {
  slug: string;
  title: string;
  lead: string;
  summary: string;
  district?: string;
  category: "Tech" | "Wissenschaft" | "Kultur" | "Stadtleben" | "Gastro" | "Verkehr" | "Recht";
  publishedAt: string;
  source: { name: string; url: string; publishedAt: string };
  imageHue: number;
  imageKey?: string;
};

export const news: NewsItem[] = [
  {
    slug: "wildgaense-saison-2026",
    title: "Wildgänse-Saison: 180.000 Gäste am Unteren Niederrhein",
    lead: "Von Oktober bis Februar rasten die arktischen Wildgänse in den Rheinauen - ein Naturschauspiel von europäischem Rang.",
    summary:
      "Jeden Winter wird der Untere Niederrhein zwischen Emmerich, Rees und Bislich zum bedeutendsten Wildgans-Rastgebiet Mitteleuropas. Wir zeigen die besten Beobachtungsspots, geführte Touren und worauf man bei der Gänsebeobachtung achten sollte.",
    district: "emmerich",
    category: "Wissenschaft",
    publishedAt: "2026-06-06",
    source: { name: "Niederrhein Nord", url: "https://niederrhein-nord.de", publishedAt: "2026-06-06" },
    imageHue: 2,
  },
  {
    slug: "spargel-erdbeerzeit-hoflaeden",
    title: "Spargel- & Erdbeerzeit: Hofläden zwischen Kleve und Kevelaer",
    lead: "Der Niederrhein ist Spargelland - wo es jetzt frisch vom Feld auf den Teller kommt.",
    summary:
      "In der Saison von April bis Juni öffnen rund um Kleve, Geldern und Kevelaer die Hofläden und Spargelhöfe. Unsere Übersicht der schönsten Hofcafés, Selbstpflück-Felder und Spargelrestaurants im nördlichen Niederrhein.",
    district: "geldern",
    category: "Gastro",
    publishedAt: "2026-06-02",
    source: { name: "Niederrhein Nord", url: "https://niederrhein-nord.de", publishedAt: "2026-06-02" },
    imageHue: 1,
  },
  {
    slug: "radsaison-knotenpunkte",
    title: "Radsaison startet: Der Niederrhein per Knotenpunkt",
    lead: "Selbstpflücke-Felder, Hofcafés und die schönsten Rundtouren für den Sommer 2026.",
    summary:
      "Das Knotenpunktnetz macht den Niederrhein zum entspanntesten Radrevier Deutschlands. Wir stellen drei Rundtouren entlang von Niers, Rhein und Reichswald vor - flach, beschildert und voller Einkehrmöglichkeiten.",
    category: "Stadtleben",
    publishedAt: "2026-05-28",
    source: { name: "Niederrhein Nord", url: "https://niederrhein-nord.de", publishedAt: "2026-05-28" },
    imageHue: 1,
  },
  {
    slug: "apx-xanten-saison",
    title: "Römerstadt Xanten: Neue Saison im Archäologischen Park",
    lead: "Führungen, Römerfeste und Sonderausstellungen im größten archäologischen Freilichtmuseum Deutschlands.",
    summary:
      "Der LVR-Archäologische Park Xanten startet in die Saison: Gladiatorenkämpfe, römisches Handwerk und neue Vermittlungsangebote im RömerMuseum. Wir geben einen Überblick über Highlights und Ticket-Tipps.",
    district: "xanten",
    category: "Kultur",
    publishedAt: "2026-05-20",
    source: { name: "Niederrhein Nord", url: "https://niederrhein-nord.de", publishedAt: "2026-05-20" },
    imageHue: 2,
  },
  {
    slug: "strassenmaler-festival-geldern-2026",
    title: "Straßenmaler-Festival Geldern: Programm 2026 steht",
    lead: "Künstler aus aller Welt verwandeln die Innenstadt in eine riesige Freiluft-Galerie.",
    summary:
      "Eines der ältesten Straßenmaler-Festivals der Welt kehrt nach Geldern zurück. Das Programm 2026 mit Live-Acts, Markt und Mitmach-Aktionen ist veröffentlicht - und Unterkünfte sind schon gefragt.",
    district: "geldern",
    category: "Kultur",
    publishedAt: "2026-05-12",
    source: { name: "Niederrhein Nord", url: "https://niederrhein-nord.de", publishedAt: "2026-05-12" },
    imageHue: 3,
  },
  {
    slug: "schloss-moyland-ausstellung",
    title: "Museum Schloss Moyland: Neue Beuys-Sonderausstellung",
    lead: "Das Wasserschloss zeigt selten gezeigte Werke aus der weltgrößten Joseph-Beuys-Sammlung.",
    summary:
      "Museum Schloss Moyland bei Bedburg-Hau widmet Joseph Beuys eine neue Sonderausstellung. Dazu öffnen Skulpturenpark und historische Gärten - ein lohnendes Ziel für Kunst- und Naturfreunde.",
    district: "kleve",
    category: "Kultur",
    publishedAt: "2026-05-04",
    source: { name: "Niederrhein Nord", url: "https://niederrhein-nord.de", publishedAt: "2026-05-04" },
    imageHue: 4,
  },
];

export const getNewsItem = (slug: string) => news.find((n) => n.slug === slug);
export const recentNews = (limit = 6) =>
  news.slice().sort((a, b) => b.publishedAt.localeCompare(a.publishedAt)).slice(0, limit);
