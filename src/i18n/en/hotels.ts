/**
 * English content for the hotels, keyed by the GERMAN slug.
 * Holds the new English slug plus all translated fields. Not translated
 * (from the base entry): coordinates, priceFrom, stars, rating, reviews,
 * guestFavorite, imageHue, bookingUrl, district.
 */
import type { Hotel } from "../../data/hotels";

export type HotelEn = {
  slug: string;
  name: string;
  shortDesc: string;
  longDesc: string;
  amenities: string[];
  sections?: { h: string; p: string }[];
};

export const hotelsEn: Record<string, HotelEn> = {
  "parkhotel-kleve": {
    slug: "parkhotel-kleve",
    name: "Parkhotel Kleve",
    shortDesc: "A 4-star hotel by the Forest Garden, quietly located near the zoo and town center.",
    longDesc:
      "The Parkhotel Kleve sits right beside the historic Forest Garden and offers comfortable rooms, a restaurant and a wellness area in a quiet, green setting. The zoo, the Museum Kurhaus and Kleve's town center are all within easy walking distance.",
    amenities: ["Wi-Fi", "Restaurant", "Wellness", "Parking"],
  },
  "hotel-van-bebber-xanten": {
    slug: "hotel-van-bebber-xanten",
    name: "Hotel van Bebber, Xanten",
    shortDesc: "A traditional house in Xanten's old town, a few steps from the cathedral.",
    longDesc:
      "The historic Hotel van Bebber has welcomed guests for generations in the middle of Xanten's old town. Stylish rooms, regional cuisine and its closeness to St. Victor's Cathedral and the Archaeological Park make it the ideal base for exploring the Roman town.",
    amenities: ["Wi-Fi", "Restaurant", "Bar", "Old-town location"],
  },
  "hotel-kevelaerer-hof": {
    slug: "hotel-kevelaerer-hof",
    name: "Hotel Kevelaerer Hof",
    shortDesc: "A cozy hotel for pilgrims and families near the Marian Basilica.",
    longDesc:
      "Just a few steps from the Kapellenplatz, the Kevelaerer Hof offers comfortable rooms for pilgrims, families and business travelers. Its in-house restaurant serves Lower Rhine cuisine, and the basilica and Candle Chapel are only a short walk away.",
    amenities: ["Wi-Fi", "Restaurant", "Parking", "Central"],
  },
  "landhaus-am-reichswald": {
    slug: "country-house-reichswald",
    name: "Country House by the Reichswald",
    shortDesc: "A quiet 4-star country hotel at the edge of the forest, with wellness and a natural setting.",
    longDesc:
      "Set at the edge of the Reichswald forest, this country house pairs a natural setting with comfort: spacious rooms, a sauna area and regional cuisine. Ideal for hikers and cyclists who want to explore the Goch countryside and the Reichswald.",
    amenities: ["Wi-Fi", "Wellness", "Restaurant", "Bike rental", "Parking"],
  },
  "rilano-hotel-kleve": {
    slug: "rilano-hotel-kleve",
    name: "Rilano Hotel Cleve City",
    shortDesc: "A modern, central 4-star city hotel in Kleve, ideal for business and city breaks.",
    longDesc:
      "The Rilano Hotel Cleve City enjoys a convenient location in Kleve's town center. Modern rooms, meeting facilities and a restaurant make it a practical base for business travelers and explorers of the northern Lower Rhine.",
    amenities: ["Wi-Fi", "Restaurant", "Meeting rooms", "Parking"],
  },
  "hotel-am-kraftwerk-kalkar": {
    slug: "wunderland-kalkar-hotel",
    name: "Wunderland Kalkar Hotel",
    shortDesc: "A family hotel right inside the Wunderland Kalkar theme park.",
    longDesc:
      "The park's own hotel at Wunderland Kalkar offers family rooms and short paths to all the attractions. With admission packages, event halls and restaurants, it is the first choice for family and group stays on the Lower Rhine.",
    amenities: ["Wi-Fi", "Family rooms", "Restaurant", "Parking"],
  },
  "gaestehaus-priorenhof-kevelaer": {
    slug: "priorenhof-guesthouse-kevelaer",
    name: "Priorenhof Guesthouse, Kevelaer",
    shortDesc: "A quiet guesthouse for pilgrims and those seeking rest, right by the Kapellenplatz.",
    longDesc:
      "The Priorenhof guesthouse offers simple, well-kept comfort in the immediate vicinity of the pilgrimage ensemble. A good starting point for days of quiet, reflection and strolls through Kevelaer.",
    amenities: ["Wi-Fi", "Breakfast", "Central", "Quiet"],
  },
  "rheinhotel-emmerich": {
    slug: "rhine-hotel-emmerich",
    name: "Rhine Hotel Emmerich",
    shortDesc: "A town hotel on Germany's longest Rhine promenade.",
    longDesc:
      "Located right on the Emmerich Rhine promenade, the Rhine Hotel offers rooms with a view of the water and the big cargo ships. An ideal base for cycling and boat trips along the lower Lower Rhine.",
    amenities: ["Wi-Fi", "Rhine view", "Restaurant", "Bike rental"],
  },
  "stadthotel-geldern": {
    slug: "city-hotel-geldern",
    name: "City Hotel Geldern",
    shortDesc: "A central hotel in the festival and shopping town of Geldern.",
    longDesc:
      "The City Hotel Geldern sits centrally near the pedestrian zone and is a practical base for shopping, the street-painting festival and tours into the Gelderland and the asparagus country around Geldern.",
    amenities: ["Wi-Fi", "Breakfast", "Central", "Parking"],
  },
  "hotel-op-de-poort-rees": {
    slug: "hotel-op-de-poort-rees",
    name: "Hotel Op de Poort, Rees",
    shortDesc: "A hotel with Rhine views on the promenade of the oldest town on the lower Lower Rhine.",
    longDesc:
      "Set on the Rees Rhine promenade, Hotel Op de Poort offers cozy rooms and regional cuisine with a view of the river. Perfect for nature lovers who want to explore the Rhine meadows and the Reeser Meer lake.",
    amenities: ["Wi-Fi", "Rhine view", "Restaurant", "Terrace"],
  },
  "boutiquehotel-xanten": {
    slug: "boutique-hotel-xanten",
    name: "Boutique Hotel Neumaier, Xanten",
    shortDesc: "A charming boutique hotel with individual design near the APX.",
    longDesc:
      "The Boutique Hotel Neumaier combines Lower Rhine charm with modern design. Individually styled rooms, a good breakfast and its closeness to the Archaeological Park and the South Lake make it a stylish base in Xanten.",
    amenities: ["Wi-Fi", "Design", "Breakfast", "Bike rental"],
  },
  "landgasthof-goch": {
    slug: "country-inn-goch",
    name: "Country Inn Gochsheide",
    shortDesc: "A cozy country inn with Lower Rhine cuisine near Goch.",
    longDesc:
      "The family-run Country Inn Gochsheide offers down-to-earth comfort, hearty Lower Rhine cuisine and a quiet starting point for cycling tours along the Niers and into the Reichswald.",
    amenities: ["Wi-Fi", "Restaurant", "Parking", "Bike rental"],
  },
};
