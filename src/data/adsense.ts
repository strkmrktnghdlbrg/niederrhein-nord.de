/**
 * AdSense niederrhein-nord.de
 * publisherId gesetzt ⇒ Script lädt ungated (kein Consent-Gating).
 * ads.txt liegt in public/ads.txt.
 */
export const adsense = {
  publisherId: "ca-pub-3946820918041547",
  enabled: true,
  slots: {
    newsInArticle: "",
    districtSidebar: "",
    sightsFooter: "",
  },
};

export const adsenseEnabled =
  adsense.enabled && adsense.publisherId.length > 0;
