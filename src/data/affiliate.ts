/**
 * Affiliate-Konfiguration niederrhein-nord.de
 *
 * Stay22-lmaID: domain-spezifisch (Account j.stark@stark.marketing).
 *   Vom Kunden bestätigt am 2026-06-10: 68793e1e7a91cb5fc4b5e142 (reaktiviert —
 *   ersetzt den älteren Eintrag 68793f63… aus STAY22-IDS-REFERENCE.md).
 * GetYourGuide-partnerId: geteilte Webmagics/Stark-Marketing-Partner-ID,
 *   in ALLEN Portalen identisch (1UPZQQB).
 *
 * Struktur gespiegelt von karlsruhe-interaktiv.de (Astro-Referenz).
 */
export const affiliate = {
  stay22: {
    lmaId: "68793e1e7a91cb5fc4b5e142",
    enabled: true,
    mapEmbedId: "",
  },
  getYourGuide: {
    partnerId: "1UPZQQB", // geteilte Partner-ID über alle Projekte
    locale: "de-DE",
    enabled: true,
    cityQuery: "Niederrhein", // Region statt einzelner Stadt
  },
};

export const stay22Enabled =
  affiliate.stay22.enabled && affiliate.stay22.lmaId.length > 0;

export const gygEnabled =
  affiliate.getYourGuide.enabled && affiliate.getYourGuide.partnerId.length > 0;
