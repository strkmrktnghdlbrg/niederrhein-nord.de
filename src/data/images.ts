import type { ImageMetadata } from "astro";

export type ImageSource = "wikimedia" | "unsplash" | "pexels" | "own" | "manufacturer";

export type Credit = {
  author: string;
  license: string;
  licenseUrl: string;
  sourceUrl: string;
};

export type ImageEntry = {
  src: ImageMetadata;
  alt: string;
  source: ImageSource;
  credit?: Credit;
};

/**
 * Bild-Registry. Vorerst leer ⇒ Komponenten nutzen den Farb-Hue-Fallback (wie im Mockup).
 * Echte Wikimedia-/Eigene Fotos in src/assets/images/{sights,districts}/<slug>.jpg ablegen
 * und hier per Eintrag (mit Credit) registrieren.
 */
export const images: Record<string, ImageEntry> = {};

export function getImage(key: string): ImageEntry | undefined {
  return images[key];
}
