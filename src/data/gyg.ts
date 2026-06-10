export type GygPlacement = {
  key: string;
  show: boolean;
  query: string;
  title: string;
  lead: string;
  count: number;
};

const R = "Niederrhein";

export const gygPlacements: Record<string, GygPlacement> = {
  "page:home": { key: "page:home", show: true, query: R, title: "Touren, Tickets & Erlebnisse am Niederrhein", lead: "Geführte Touren, Tickets und Aktivitäten zwischen Xanten, Kleve und Kevelaer — buchbar über GetYourGuide.", count: 4 },
  "page:sights-index": { key: "page:sights-index", show: true, query: R, title: "Erlebnisse rund um die Sehenswürdigkeiten", lead: "Führungen und Tickets zu den Highlights des nördlichen Niederrheins.", count: 4 },
  "page:guides-index": { key: "page:guides-index", show: true, query: R, title: "Aktivitäten für deinen Reiseplan", lead: "Passende Touren und Tickets für deine Tage am Niederrhein.", count: 4 },
  "page:categories-index": { key: "page:categories-index", show: true, query: R, title: "Touren & Tickets nach Kategorie", lead: "Erlebnisse am Niederrhein, thematisch sortiert.", count: 4 },
  "sight:archaeologischer-park-xanten": { key: "sight:archaeologischer-park-xanten", show: true, query: "Xanten Archäologischer Park", title: "Touren & Tickets: Römerstadt Xanten", lead: "Führungen und Tickets für den Archäologischen Park und das RömerMuseum.", count: 3 },
  "sight:marienbasilika-kevelaer": { key: "sight:marienbasilika-kevelaer", show: true, query: "Kevelaer", title: "Erlebnisse in Kevelaer", lead: "Stadt- und Wallfahrtsführungen rund um die Marienbasilika.", count: 3 },
  "sight:schloss-moyland": { key: "sight:schloss-moyland", show: true, query: "Schloss Moyland Kleve", title: "Kunst & Garten: Schloss Moyland", lead: "Tickets und Touren rund um das Wasserschloss und den Skulpturenpark.", count: 3 },
};

export const getGygPlacement = (key: string): GygPlacement | undefined => {
  if (gygPlacements[key]) return gygPlacements[key];
  // Fallback für Sights/Kategorien ohne eigene Platzierung: generische Region-Suche
  if (key.startsWith("sight:") || key.startsWith("category:") || key.startsWith("guide:")) {
    return { key, show: true, query: R, title: "Touren & Tickets am Niederrhein", lead: "Geführte Touren und Tickets für die Region — über GetYourGuide.", count: 4 };
  }
  return undefined;
};
