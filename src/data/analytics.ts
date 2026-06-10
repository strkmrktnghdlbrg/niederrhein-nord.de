export const analytics = {
  gtmId: "", // TODO: GTM-Container-ID vom Kunden
  enabled: false,
};

export const gtmEnabled = analytics.enabled && analytics.gtmId.length > 0;
