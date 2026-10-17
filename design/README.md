# Handoff: Cakes by Clara – webbplats

## Overview
Webbplats för Cakes by Clara, ett tårtbageri i Mariestad som bakar på beställning. Tre sidor: Startsida (med beställningsformulär), Sortiment (filtrerbar tårtlista) och Bröllop (process, priser, bokning av provsmakning). Plus en logotypfil med valda och alternativa logotyper. All copy är på svenska.

## About the Design Files
Filerna i detta paket är **designreferenser byggda i HTML** – prototyper som visar avsett utseende och beteende, inte produktionskod att kopiera rakt av. Uppgiften är att **återskapa designen i målkodbasens miljö** med dess etablerade mönster. Finns ingen kodbas än: välj ett lämpligt ramverk (rekommendation: Astro eller Next.js – statisk sajt med ett par formulär, bra SEO och snabb laddning).

Filerna öppnas direkt i webbläsaren (`support.js` måste ligga bredvid). Varje `.dc.html` innehåller markup med inline-styles mellan `<x-dc>`-taggarna och en `class Component` längst ner med data och logik (`renderVals()`) – där finns alla listor (tårtor, FAQ, priser m.m.).

## Fidelity
**High-fidelity.** Färger, typografi, spacing och interaktioner är slutgiltiga. Återskapa pixelnära. Innehåll (priser, adress, omdömen, villkor) är **platshållare** och ska bytas mot riktiga uppgifter från kunden.

## Design Tokens

### Färger
| Token | Hex | Användning |
|---|---|---|
| bg | `#fcf5f5` | Sidbakgrund (väldigt ljus rosa) |
| bg-alt | `#f8e9eb` | Alternerande sektioner (Favoriter, Beställ) |
| bg-strong | `#f3dce0` | Om Clara, säsongsruta, ikonbakgrunder |
| banner | `#f6e1e4` | Toppbanner |
| line | `#ecd3d7` | Avdelare, kortkanter |
| line-strong | `#d9b3ba` | Inputkanter, chips |
| ink | `#3d2529` | Primär text, mörka kanter |
| ink-2 | `#4a3135` | Brödtext på `#f3dce0` |
| ink-3 | `#5c4247` | Sekundär text |
| ink-muted | `#7d5c62` | Etiketter, eyebrows, priser |
| accent | `#b04a62` | Knappar, länk-hover, kursiv betoning |
| white | `#ffffff` | Formulärfält |

### Typografi (Google Fonts)
- **Instrument Serif** 400 + italic – alla rubriker.
  - H1: `clamp(52px, 7vw, 96px)`, line-height 0.95, letter-spacing -0.01em, `text-wrap: balance`
  - H2: `clamp(40px, 5vw, 60px)`, line-height 1
  - Kortrubrik: 26px. Citat: 28px / 1.25.
- **Hanken Grotesk** 400/500/600 – brödtext och UI.
  - Ingress 19px / 1.55. Brödtext 15–18px / 1.5–1.6. Nav 15px.
  - Eyebrow: 12–13px, uppercase, letter-spacing 0.12–0.14em, färg `#7d5c62`.
- **Pinyon Script** – endast "Clara" i logotypen.
- **Bodoni Moda** italic – logotyp 2b (stämpel), används på förpackning, ej på sajten.

### Radier, skuggor, layout
- Knappar och chips: `border-radius: 999px`. Bilder 12px, stora bilder 16px, kort/formulär 24px.
- Hero-bild: `border-radius: 220px 220px 16px 16px` (valvform), aspect 4/5.
- Mobilmeny-skugga: `0 12px 32px rgba(61,37,41,0.08)`.
- Container: max-width 1240px, sidopadding 32px. Sektioner: padding 96–112px vertikalt.
- Grid: `repeat(auto-fit, minmax(min(100%, Npx), 1fr))` – N = 250–420px beroende på sektion. Allt reflowar till en kolumn på mobil.

## Logotyp
Vald logotyp i menyn: **"CAKES BY" över "Clara"**, centrerat.
- "CAKES BY": Hanken Grotesk 9px, uppercase, letter-spacing 0.4em, `#3d2529`
- "Clara": Pinyon Script 44px, line-height 1.05, `#b04a62`
Rund stämpel (2b i `Logotyp.dc.html`, med "Mariestad") är vald för förpackningar/klistermärken. Bör tas fram som vektor (SVG) av en designer innan tryck.

## Screens

### 1. Startsida (`Startsida v2.dc.html`)
Uppifrån och ner:
1. **Toppbanner** (av/på-bar): "Beställ din tårta senast tre dagar innan – bröllopstårtor sex veckor innan." 14px, bg `#f6e1e4`.
2. **Header**: logotyp vänster; nav höger (Tårtor → Sortiment, Bröllop, Beställ, Frågor, Om Clara, Hitta hit) + rosa pill-knapp "Beställ tårta". Under 860px ersätts nav av en rund 48px hamburgerknapp som fäller ut en panel (absolut under header, full bredd minus 16px).
3. **Hero**: 2-kolumns grid. Vänster: eyebrow "Handgjorda tårtor på beställning", H1 "Tårtor för dagar man vill *minnas*" (kursivt ord i accent), ingress, två knappar (fylld "Beställ tårta", outline "Se sortimentet"). Höger: valvformad bild med fotokredit-pill.
4. **Infoband** (`#hitta`): 4 kolumner mellan två 1px-linjer – Öppet idag / Tis–fre & lör / Adress / Telefon.
5. **Säsongens tårta** (av/på-bar): rundad ruta `#f3dce0`, bild vänster, text höger, knapp.
6. **Kundernas favoriter** (`#tartor`, bg `#f8e9eb`): 4 kort – kvadratisk bild, namn + "från X kr", beskrivning, specialkost-chips.
7. **Bröllop & fester** (`#galleri`): bildgrid, rader 260px, första bilden spänner 2 rader.
8. **Så beställer du + formulär** (`#bestall`, bg `#f8e9eb`): vänster 3 numrerade steg + leveranspriser; höger formulärkort (`#formular`).
9. **Omdömen**: 3 citat i Instrument Serif 28px.
10. **Vanliga frågor** (`#fragor`): rubrik vänster, accordion höger (6 frågor, en öppen åt gången, +/− i accent).
11. **Om Clara** (`#om`, bg `#f3dce0`): bild (kunden lägger in eget foto) + text.
12. **Instagram** (av/på-bar): 6 kvadratiska bilder + länk till @cakesbyclara.
13. **Footer**: logotyp, Besök, Öppettider, Kontakt.

### 2. Sortiment (`Sortiment.dc.html`)
- Rubrik + ingress.
- **Sticky filterrad**: kategorichips (Alla, Klassiker, Fruktiga, Choklad, Barnkalas, Säsong – aktiv = fylld `#3d2529`) och specialkost-toggles (Glutenfri, Laktosfri, Vegansk – streckad kant, aktiv = bg `#f3dce0` och kant i accent). Filtren kombineras (OCH).
- **Grid** av 12 tårtor: bild 4/5, valfri badge (t.ex. "Mest beställd"), namn, pris, beskrivning, "Kan bli …"-chips, knapp **"Beställ den här"**.
- Tomt resultat: meddelande + "Rensa filter".
- Storlekstabell (5 rader) och CTA-rad.

### 3. Bröllop (`Brollop.dc.html`)
- Hero (bild vänster, text höger), H1 "En tårta som är *er*".
- Process i 4 steg med tidsangivelse.
- Galleri + ett stort citat.
- Pristabell (`#priser`) med 4 rader.
- Formulär för provsmakning (`#provsmakning`): namn, kontakt, datum, antal gäster, fritext → tackmeddelande.

## Interactions & Behavior
- **Beställ från sortiment**: "Beställ den här" länkar till `Startsida?tarta=<namn>#formular`. Startsidan läser `tarta` ur URL:en, förväljer tårtan i formulärets select (lägger till den som alternativ om den saknas) och scrollar till `#formular`, alltså formulärkortet och inte sektionsrubriken, så att det fungerar på mobil där formuläret ligger under stegen.
- **Alla "Beställ tårta"-CTA** pekar på `#formular`.
- **Beställningsformulär**: fälten namn*, e-post/telefon*, datum*, antal personer (6–8, 10–12, 15–20, 25–40, Fler än 40), tårta, specialkost (checkboxar), hämtning/leverans (radio), önskemål. Vid submit visas "Tack, {förnamn}!" och knappen "Skicka en till". **Ska kopplas till backend**: e-post till Clara, bekräftelsemejl till kunden och spamskydd.
- **FAQ**: accordion, första frågan öppen från start.
- **Mobilmeny**: brytpunkt 860px. Menyn stängs vid klick på en länk.
- **Hover**: länkar får färgen `#b04a62`.
- Smooth scroll för ankarlänkar.

## State
- Startsida: `menu` (bool), `openFaq` (index), `submitted` + `firstName`, `cake` (vald tårta).
- Sortiment: `cat` (sträng), `diets` (array), `menu`.
- Bröllop: `sent`, `menu`.
- Tårtor, FAQ, priser och omdömen är i dag hårdkodade i `renderVals()`. Rekommendation: lägg dem i ett CMS eller i JSON/markdown så att Clara kan uppdatera själv.

## Assets
- **Foton**: tillfälliga Unsplash-bilder (`images.unsplash.com/photo-…`). Hero-bilden är "white cake with pink roses" av David Holifield. **Alla ska bytas** mot Claras egna foton. Om Unsplash-bilder används i produktion ska fotografen krediteras.
- Om Clara-bilden och bröllopshero är `<image-slot>`-platshållare i prototypen. I koden blir de vanliga bilder.
- Inga ikoner. Hamburgermenyn är tre streck i CSS.

## Innan lansering
- Riktiga uppgifter: adress (nu "Rosengatan 12, 542 30 Mariestad"), telefon ("0501-12 34 56"), öppettider, priser, leveranszoner, villkor och omdömen.
- Integritetspolicy (GDPR, eftersom formulären samlar in personuppgifter) och köpvillkor.
- LocalBusiness/Bakery-schema (JSON-LD) med öppettider. Öppettider och adress ska stå som text i HTML.
- Bildoptimering (WebP/AVIF, `srcset`, lazy loading under hero).
- Länken "Läs mer om mig" saknar mål än. Om Clara-sidan är inte byggd.

## Files
- `Startsida v2.dc.html` – startsida med formulär
- `Sortiment.dc.html` – sortiment med filter
- `Brollop.dc.html` – bröllopssida
- `Logotyp.dc.html` – logotypförslag (vald: "CAKES BY / Clara" i menyn, 2b-stämpeln för förpackning)
- `support.js`, `image-slot.js` – behövs bara för att öppna prototyperna i webbläsaren
