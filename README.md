<div align="center">

# ✳ FARO Napoli
### Una casa. Una rete. Una città che vive.

Un concept di intelligenza artificiale multi-agente per connettere **casa, servizi e mobilità** a Napoli.

[Esplora la landing page](https://giacolees.github.io/faro-napoli/) · [Guarda la demo](docs/assets/demo.mp4) · [Materiali originali](assets/slides/)

![Status: concept](https://img.shields.io/badge/status-concept-e67142?style=flat-square)
![Made for Napoli](https://img.shields.io/badge/made_for-Napoli-103d42?style=flat-square)
![Static landing](https://img.shields.io/badge/web-HTML_·_CSS-f5f3eb?style=flat-square)

</div>

![Panoramica del concept FARO Napoli](docs/assets/demo.jpg)

## Abitare significa appartenere

Trovare una casa significa anche raggiungere un’università, accedere ai servizi e vivere il territorio. FARO Napoli esplora una risposta coordinata: agenti specializzati che mettono in relazione esigenze abitative, possibilità di attivazione degli immobili, servizi e mobilità.

> **Progetto dimostrativo.** Le schermate e i video presentano dati simulati. Non è disponibile un servizio di ricerca immobiliare operativo; alloggi, canoni, contributi e tempi richiedono verifica.

## Quattro prospettive, una visione

| Area | Ruolo nel concept |
| :--- | :--- |
| **⌂ Casa** | Esplorare soluzioni in base a esigenze e budget. |
| **✧ Attivazione** | Individuare il potenziale degli alloggi sottoutilizzati, soggetto a verifica. |
| **◇ Servizi** | Collegare il percorso abitativo a servizi e contributi da verificare. |
| **↗ Mobilità** | Considerare collegamenti, tempi di viaggio e accessibilità. |

Un orchestratore rappresentato nella demo coordina queste prospettive. Gli scenari illustrativi includono studenti e necessità abitative temporanee.

## La landing page

Una pagina responsive in italiano, con palette crema, verde petrolio e terracotta, grafica orbitale in CSS, video integrato e navigazione tra visione e sistema. Non richiede compilazione. I font Google sono opzionali: sono previsti fallback locali.

```sh
python3 -m http.server 8000 --directory docs
```

Apri **http://localhost:8000**. Per pubblicare con GitHub Pages, usa il branch `main` e la cartella `/docs`.

## Dentro il repository

```text
assets/
  audio/       Narrazioni originali
  slides/      Tavole SVG del progetto
  videos/      Video originali
 docs/
  index.html   Landing page
  style.css    Design responsive
  assets/      Demo video e anteprima
scripts/       Utilità di ispezione degli asset
```

Le dipendenze in `package.json` includono React e Remotion per il lavoro audiovisivo. Il repository non contiene ancora una composizione Remotion eseguibile; la landing usa direttamente il video già prodotto. Non è previsto un backend.

## Contribuire

Apri una issue per proporre miglioramenti alla presentazione, all’accessibilità o alla documentazione. Descrivi il problema e il risultato atteso; per modifiche visive includi un confronto prima/dopo.

## Materiali e diritti

I materiali originali sono inclusi per documentare il progetto. Non è stata definita una licenza di riutilizzo per il codice o gli asset: contatta i titolari prima di riutilizzarli.

---
<div align="center">Pensato per Napoli. A partire dalle persone.</div>
