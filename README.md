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
| Galleri med filter (Vintage, Tema) | `src/pages/galleri.astro` |
| Bröllop med bokning av provsmakning | `src/pages/brollop.astro` |

## Ändra innehåll

Texter, priser och listor ligger i `src/data/`:

- `site.json` – adress, telefon, e-post, öppettider, leveranspriser, toppbanner och av/på för sektioner (`show`)
- `cakes.json` – tårtkombinationer; de med `favorite: true` visas under "Populära kombinationer" och som rekommenderade kombinationer i formuläret (`bottom` och `fillings` fylls i när kunden väljer dem)
- `gallery.json` – bilderna i galleriet och deras kategori (Vintage, Tema)
- `order.json` – valbara tårtbottnar och fyllningar i beställningsformuläret (och max antal fyllningar)
- `seasonal.json` – säsongens tårta (visas när `show.seasonal` är `true` i `site.json`)
- `sizes.json` – storlekar och priser under "Så beställer du"
- `faq.json`, `reviews.json`, `wedding.json`

Färger och typsnitt finns som variabler i `src/styles/global.css`.

## Formulär

Båda formulären (beställning och provsmakning) skickas via [Formspree](https://formspree.io)
till adressen i `formEndpoint` i `src/data/site.json`. Formspree mejlar varje förfrågan vidare.
Fältens `name` blir rubrikerna i mejlet, flera ikryssade rutor skickas som en rad och
`_replyto` sätts när kunden anger en e-postadress. Formulären har även en spamfälla (`_gotcha`).

## Publicering

Vid push till `main` byggs och publiceras sajten med GitHub Pages
(`.github/workflows/deploy.yml`). Aktivera det under *Settings → Pages → Source: GitHub Actions*.

## Kvar före lansering

- [ ] Byt alla Unsplash-bilder mot Claras egna foton (lägg dem i `public/images/`)
- [x] Bild på Clara (Om Clara)
- [x] Bild till bröllopshero
- [ ] Riktiga uppgifter: adress, telefon, öppettider, priser, leveranszoner, omdömen
- [x] Koppla formulären till e-post (Formspree)
- [ ] Integritetspolicy (GDPR) och köpvillkor
- [ ] Länken "Läs mer om mig" saknar en egen sida
- [ ] Instagram: fyll i instagramUrl i site.json om ett eget konto skapas, så visas länkarna igen
- [ ] Egen domän (t.ex. cakesbyclara.se)

## Design

Originalfilerna från Claude Design ligger i `design/` som referens.
Öppna en `.dc.html`-fil direkt i webbläsaren för att se prototypen.
