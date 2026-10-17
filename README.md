# Cakes by Clara

Webbplats för Cakes by Clara, ett tårtbageri i Mariestad. Byggd med [Astro](https://astro.build) utifrån designen i `design/`.

## Kom igång

```bash
npm install
npm run dev      # utvecklingsserver på http://localhost:4321
npm run build    # bygger den färdiga sajten till dist/
npm run preview  # förhandsvisar det byggda resultatet
```

## Sidor

| Sida | Fil |
|---|---|
| Startsida med beställningsformulär | `src/pages/index.astro` |
| Sortiment med filter | `src/pages/sortiment.astro` |
| Bröllop med bokning av provsmakning | `src/pages/brollop.astro` |

## Ändra innehåll

Texter, priser och listor ligger i `src/data/`:

- `site.json` – adress, telefon, e-post, öppettider, leveranspriser, toppbanner och av/på för sektioner (`show`)
- `cakes.json` – alla tårtor (`favorite: true` visar tårtan under "Kundernas favoriter" på startsidan)
- `seasonal.json` – säsongens tårta
- `faq.json`, `reviews.json`, `sizes.json`, `wedding.json`

Färger och typsnitt finns som variabler i `src/styles/global.css`.

## Formulär

Formulären visar i dag bara ett tackmeddelande. För att få beställningar som e-post:
skapa ett formulär hos t.ex. [Formspree](https://formspree.io) och klistra in adressen i
`formEndpoint` i `src/data/site.json`. Formulären har redan en spamfälla (`_gotcha`).

## Publicering

Vid push till `main` byggs och publiceras sajten med GitHub Pages
(`.github/workflows/deploy.yml`). Aktivera det under *Settings → Pages → Source: GitHub Actions*.

## Kvar före lansering

- [ ] Byt alla Unsplash-bilder mot Claras egna foton (lägg dem i `public/images/`)
- [x] Bild på Clara (Om Clara)
- [ ] Bild till bröllopshero, som nu är en platshållare
- [ ] Riktiga uppgifter: adress, telefon, öppettider, priser, leveranszoner, omdömen
- [ ] Koppla formulären till e-post (se ovan)
- [ ] Integritetspolicy (GDPR) och köpvillkor
- [ ] Länken "Läs mer om mig" saknar en egen sida
- [ ] Egen domän (t.ex. cakesbyclara.se)

## Design

Originalfilerna från Claude Design ligger i `design/` som referens.
Öppna en `.dc.html`-fil direkt i webbläsaren för att se prototypen.
