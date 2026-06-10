# SEO-Migrationsplan niederrhein-nord.de (WordPress → Astro)

Stand: 2026-06-10. Datenquellen: alte Sitemap, Google `site:`-Index, SEMrush `de` (organic).
Roh-SEO-Daten (Title/Meta/H1/H2 aller Legit-Seiten): siehe `legacy-seo.json`.

## Ausgangslage (wichtig)

- **SEMrush `de`: praktisch kein organischer Traffic.** Nur die Startseite rankt überhaupt — für
  Tippfehler/Brand (`niederhein`, `niederrhein`) auf **Position 81–94** (Seite 8–10), **0 % Traffic**.
  **Keine** Content-URL rankt messbar. ⇒ Es gibt aktuell **keine „sehr gut rankende" URL**, die beim
  Relaunch akut gefährdet wäre. Trotzdem: Slugs + Content der Legit-Seiten 1:1 erhalten (Equity-Schutz, da indexiert).
- **Alte Site ist gehackt/Spam-injiziert:** ~28 fremdsprachige Casino/Gambling-Posts
  (`betninja`, `vavada`, `moro-spin-casino`, `casino-online…`, IT/BG/NL/PL). **Nicht migrieren.**
  Diese URLs sollen **410/404** liefern (NICHT auf gute Seiten weiterleiten → würde Spam-Signale vererben).
  Zusätzlich in der Google Search Console zur Entfernung einreichen.

## Migrations-Regeln

1. **Alle Legit-Slugs 1:1 behalten** (gleicher Pfad im Astro-Build) ⇒ keine Redirects nötig, volle Erhaltung.
2. **Title, Meta Description, H1, H2 exakt übernehmen** (aus `legacy-seo.json`) — rankingrelevant.
   Wo Meta leer war, aus dem ersten Absatz eine ~155-Zeichen-Description erzeugen.
3. **Duplikat** `beste-hotels-kreis-kleve-2` → 301 auf `beste-hotels-kreis-kleve` (identischer Inhalt).
4. **Casino/Spam-URLs** → 410, nicht weiterleiten.
5. **Interne Verlinkung ausbauen:** neue Sektionsseiten ⇄ diese Magazin-Artikel (Mapping unten).

## URL-Map (Legit-Seiten → neuer Build)

| Alte URL | Index | SEMrush Traffic | Plan | Neue Sektion / Verlinkung |
|---|---|---|---|---|
| `/` | ja | 0 (Brand, Pos 81+) | Startseite (Mockup steht) | — |
| `/entdecken-sie/` | ja | – | → 301 auf `/` oder Übersichtsseite | — |
| `/roemer-niederrhein/` | ja | – | **Slug behalten**, Magazin | ↔ Sight „APX Xanten", „Dom St. Viktor" |
| `/altstaedte-niederrhein/` | – | – | Slug behalten, Magazin | ↔ Städte & Orte (Xanten/Kalkar/Rees) |
| `/schloesser-herrenhaeuser/` | – | – | Slug behalten, Magazin | ↔ Sight „Schloss Moyland", „Schwanenburg" |
| `/historische-muehlen/` | – | – | Slug behalten, Magazin | ↔ Städte & Orte (Rees/Sonsbeck) |
| `/historische-bauwerke/` | – | – | Slug behalten, Magazin (generisch → auf NR fokussieren) | ↔ Sights |
| `/camping-niederrhein/` | – | – | Slug behalten, Magazin | ↔ Aktivitäten |
| `/wassersport-niederrhein/` | – | – | Slug behalten, Magazin | ↔ Aktivitäten (Rhein/Auen) |
| `/wanderwege-niederrhein/` | – | – | Slug behalten, Magazin | ↔ Aktivitäten/Radwege |
| `/radtour-niers-tipps/` | – | – | Slug behalten, Magazin | ↔ Radwege (Knotenpunkt) |
| `/reiten-niederrhein/` | – | – | Slug behalten, Magazin | ↔ Aktivitäten |
| `/freizeitparks-niederrhein/` | – | – | Slug behalten, Magazin | ↔ Aktivitäten/Familien |
| `/ausflugsziele-familien/` | – | – | Slug behalten, Magazin | ↔ Aktivitäten |
| `/geheime-naturorte/` | – | – | Slug behalten, Magazin (enthält Moyland) | ↔ Sights/Natur |
| `/rhein-lebensader/` | – | – | Slug behalten, Magazin | ↔ Rhein & Auen |
| `/kulinarischer-roadtrip/` | ja | – | Slug behalten, Magazin | ↔ Genuss/Hofläden |
| `/niederrhein-rezepte/` | – | – | Slug behalten, Magazin | ↔ Genuss |
| `/wochenmaerkte-niederrhein/` | ja | – | Slug behalten, Magazin (Duisburg-Bezug ggf. raus) | ↔ Genuss/Städte |
| `/nachhaltige-bauernhoefe/` | – | – | Slug behalten, Magazin | ↔ Genuss/Hofläden |
| `/kuenstler-niederrhein/` | – | – | Slug behalten, Magazin | ↔ Kultur |
| `/sprache-niederrhein/` | – | – | Slug behalten, Magazin | ↔ Kultur |
| `/braeuche-karneval/` | – | – | Slug behalten, Magazin | ↔ Kultur/Events |
| `/kultur-am-niederrhein-von-menschen-und-traditionen/` | – | – | Slug behalten, Magazin (**Spam-H2 säubern**) | ↔ Kultur |
| `/hotels-niederrhein-nord/` | ja | – | Slug behalten, Hotels-Hub | ↔ Stay22-Hotels |
| `/beste-hotels-kreis-kleve/` | – | – | **Kanonisch**, Magazin/Hotels | ↔ Hotels |
| `/beste-hotels-kreis-kleve-2/` | – | – | **301 → `/beste-hotels-kreis-kleve/`** | — |
| `/pensionen-gasthoefe/` | ja | – | Slug behalten, **Content neu (ist fälschl. Bayer. Wald)** | ↔ Hotels |
| `/veranstaltungen-2025/` | – | – | Slug behalten oder → `/events/`, Magazin | ↔ Events |
| `/unternehmen-niederrhein/` | – | – | Slug behalten (Gastbeitrag), Magazin | niedrige Prio |
| `/immobilien-niederrhein/` | – | – | Slug behalten (Gastbeitrag), Magazin | niedrige Prio |
| `/werbung-fuer-unternehmen/` | – | – | Slug behalten (**Spam-H2 säubern**) | niedrige Prio |
| `/blog/` | ja | – | → Magazin-Index `/magazin/` (301) | Hub aller Artikel |
| weitere Gastposts (gin, fliesenverleger, umzug, elektriker, gps-hunde, immobilienmakler, umzugsfirma) | tlw. | – | optional behalten/301; kein NR-Bezug | niedrige Prio |

## Casino/Spam (NICHT migrieren → 410 + GSC-Removal)

`trusted-betninja-service…`, `fresh-betninja-site…`, `betninja-casino…`, `betninja-gaming…`,
`bet-ninja-casino…`, `moro-spin-casino…`, `get-lucky-casino…`, `aruba-bet-casino…`, `casino-star-onlajn…`,
`bet-wild-igralna…`, `winpot-casino…`, `teaspins-casino…`, `vavada-pl…`, `greetings-to-the-leading-entertainment-hub`,
`esplora-il-mondo-di-gioco…`, `siti-casino-senza-documenti…`, `migliori-casino-online-europei…`,
`casino-online-internazionali…`, `casino-su-internet…`, `superior-casino-online-portugues…`,
`nl-gokwebsites-casino…`, `internet-casino-zonder-restricties…`, `nieuwe-internationale-online-casinos…`,
`naj-*` (BG), `explore-the-top-online-slots-australia…`, `sister-casino-websites…`, `/test/`.

## Ausführbar erst nach Astro-Build

„Anlegen / weiterleiten / interne Links" setzt den Build voraus (aktuell nur Startseiten-Mockup).
Dieser Plan + `legacy-seo.json` sind die Vorlage dafür.
