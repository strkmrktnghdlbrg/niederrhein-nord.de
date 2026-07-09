export const analytics = {
  gtmId: "GTM-TNB45DLQ", // TODO: GTM-Container-ID vom Kunden
  enabled: true,
};

export const gtmEnabled = analytics.enabled && analytics.gtmId.length > 0;
