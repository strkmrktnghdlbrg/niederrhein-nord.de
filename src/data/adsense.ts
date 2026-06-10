/**
 * AdSense niederrhein-nord.de
 * publisherId noch offen — Kunde liefert ca-pub eines anderen/neuen Kontos.
 * Solange leer ⇒ adsenseEnabled=false, kein Script, keine ads.txt.
 */
export const adsense = {
  publisherId: "", // TODO: ca-pub-… vom Kunden eintragen, dann public/ads.txt anlegen
  enabled: false,
  slots: {
    newsInArticle: "",
    districtSidebar: "",
    sightsFooter: "",
  },
};

export const adsenseEnabled =
  adsense.enabled && adsense.publisherId.length > 0;
