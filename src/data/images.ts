import type { ImageMetadata } from "astro";

export type ImageSource = "wikimedia" | "unsplash" | "pexels" | "own" | "manufacturer";
export type Credit = { author: string; license: string; licenseUrl: string; sourceUrl: string };
export type ImageEntry = { src: ImageMetadata; alt: string; source: ImageSource; credit?: Credit };

const sightModules = import.meta.glob<{ default: ImageMetadata }>(
  "/src/assets/images/sights/*.{jpg,JPG,jpeg,png,webp}", { eager: true });
const districtModules = import.meta.glob<{ default: ImageMetadata }>(
  "/src/assets/images/districts/*.{jpg,JPG,jpeg,png,webp}", { eager: true });

function asset(folder: "sights" | "districts", slug: string): ImageMetadata {
  const modules = folder === "sights" ? sightModules : districtModules;
  const match = Object.entries(modules).find(([path]) =>
    path.match(new RegExp(`/${slug}\\.(jpg|JPG|jpeg|png|webp)$`)));
  if (!match) throw new Error(`Image asset not found: src/assets/images/${folder}/${slug}.*`);
  return match[1].default;
}

const cc = (): Credit => ({
  author: "Wikimedia Commons",
  license: "CC BY-SA",
  licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
  sourceUrl: "https://commons.wikimedia.org",
});

const sight = (slug: string, alt: string): ImageEntry => ({ src: asset("sights", slug), alt, source: "wikimedia", credit: cc() });
const district = (slug: string, alt: string): ImageEntry => ({ src: asset("districts", slug), alt, source: "wikimedia", credit: cc() });

export const images: Record<string, ImageEntry> = {
  "sight:archaeologischer-park-xanten": sight("archaeologischer-park-xanten", "LVR-Archäologischer Park Xanten — Hafentempel"),
  "sight:dom-st-viktor-xanten": sight("dom-st-viktor-xanten", "Dom St. Viktor in Xanten"),
  "sight:schwanenburg-kleve": sight("schwanenburg-kleve", "Schwanenburg Kleve über der Stadt"),
  "sight:marienbasilika-kevelaer": sight("marienbasilika-kevelaer", "Marienbasilika Kevelaer"),
  "sight:schloss-moyland": sight("schloss-moyland", "Wasserschloss Moyland"),
  "sight:rathaus-kalkar": sight("rathaus-kalkar", "Historisches Rathaus Kalkar"),
  "sight:rheinauen-wildgaense": sight("rheinauen-wildgaense", "Wildgänse in den Rheinauen am Niederrhein"),
  "sight:rheinpromenade-emmerich": sight("rheinpromenade-emmerich", "Rheinpromenade Emmerich am Rhein"),
  "sight:rheinpromenade-rees": sight("rheinpromenade-rees", "Stadtmauer und Rheinpromenade Rees"),
  "sight:steintor-goch": sight("steintor-goch", "Steintor Goch"),
  "sight:wunderland-kalkar": sight("wunderland-kalkar", "Wunderland Kalkar"),
  "sight:xantener-suedsee": sight("xantener-suedsee", "Xantener Südsee"),
  "sight:forstgarten-kleve": sight("forstgarten-kleve", "Forstgarten Kleve"),
  "sight:reichswald": sight("reichswald", "Reichswald bei Kleve"),
  "district:xanten": district("xanten", "Xanten — Römerstadt am Niederrhein"),
  "district:kleve": district("kleve", "Kleve — Schwanenstadt"),
  "district:kevelaer": district("kevelaer", "Kevelaer — Wallfahrtsstadt"),
  "district:kalkar": district("kalkar", "Kalkar am Niederrhein"),
  "district:geldern": district("geldern", "Geldern im Gelderland"),
  "district:emmerich": district("emmerich", "Emmerich am Rhein"),
  "district:rees": district("rees", "Rees am Rhein"),
  "district:goch": district("goch", "Goch an der Niers"),
};

export function getImage(key: string): ImageEntry | undefined {
  return images[key];
}
