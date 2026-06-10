/**
 * Affiliate-Konfiguration niederrhein-nord.de
 * Stay22-lmaID: 68793e1e7a91cb5fc4b5e142 (Kunde bestätigt 2026-06-10).
 * GetYourGuide-partnerId: 1UPZQQB (geteilte Webmagics/Stark-Marketing-ID, alle Portale).
 */
export const affiliate = {
  stay22: {
    lmaId: "68793e1e7a91cb5fc4b5e142",
    enabled: true,
    mapEmbedId: "",
  },
  getYourGuide: {
    partnerId: "1UPZQQB",
    locale: "de-DE",
    enabled: true,
    cityQuery: "Niederrhein",
  },
};

export const stay22Enabled =
  affiliate.stay22.enabled && affiliate.stay22.lmaId.length > 0;

export const gygEnabled =
  affiliate.getYourGuide.enabled && affiliate.getYourGuide.partnerId.length > 0;
