export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  tags: string[];
  content: string;
}

export const articles: Article[] = [
  {
    slug: "hva-er-teknisk-ledelse",
    title: "Hva er teknisk ledelse – og hvorfor trenger du det?",
    excerpt:
      "Teknisk ledelse handler om mer enn å ta tekniske valg. Det handler om å skape retning, bygge kultur og koble teknologi til forretningsverdi.",
    author: "Anders Bäckström",
    date: "2025-11-15",
    tags: ["Teknisk ledelse", "Strategi"],
    content: `Teknisk ledelse er en disiplin som ofte misforstås. Mange tenker at en CTO eller tech lead primært skal ta tekniske valg – hvilken database vi skal bruke, hvilket rammeverk vi skal velge, hvordan arkitekturen skal se ut.

Men teknisk ledelse handler vel så mye om mennesker, organisasjon og strategi. En god teknisk leder forstår at teknologien er et middel, ikke et mål i seg selv.

## De tre pilarene

Vi i Gnist ser teknisk ledelse som tre sammenvevde pilarer:

**1. Retning** – Å sette en teknisk visjon som støtter forretningsstrategien og gi teamene tydelige rammer å jobbe innenfor.

**2. Kultur** – Å bygge en ingeniørkultur preget av psykologisk trygghet, nysgjerrighet og faglig stolthet.

**3. Leveranse** – Å sikre at teamene faktisk leverer verdi til brukerne på en bærekraftig måte.

## Når trenger du teknisk ledelse?

Behovet melder seg typisk når organisasjonen vokser forbi det punktet der «alle bare vet» hva som skal gjøres. Når det er mer enn 10-15 utviklere, begynner kompleksiteten å kreve bevisst ledelse.

Teknisk ledelse er ikke reservert for de store selskapene. Også startups og scale-ups trenger noen som løfter blikket og tenker strategisk om teknologi.`,
  },
  {
    slug: "smidige-team-som-trives",
    title: "Smidige team som trives og leverer",
    excerpt:
      "De beste smidige teamene er ikke de som følger Scrum-boken slavisk. De er de som har funnet sin egen rytme og genuint trives med å jobbe sammen.",
    author: "Kristin Haugen",
    date: "2025-10-02",
    tags: ["Smidighet", "Teamutvikling"],
    content: `Etter å ha jobbet med hundrevis av team gjennom årene, har jeg sett et tydelig mønster: de teamene som leverer best, er de som trives best.

Det høres kanskje selvsagt ut, men i praksis investerer overraskende mange organisasjoner alt i prosesser og verktøy – og nesten ingenting i teamets trivsel og dynamikk.

## Hva kjennetegner team som trives?

**Psykologisk trygghet** – Teammedlemmene tør å si fra, stille «dumme» spørsmål og innrømme feil uten frykt for konsekvenser.

**Felles mål** – Alle forstår hva de jobber mot og hvorfor det er viktig.

**Autonomi** – Teamet har reell beslutningsmyndighet over hvordan de løser oppgavene sine.

**Mestring** – Folk føler at de utvikler seg faglig og at kompetansen deres verdsettes.

## Smidighet er en konsekvens

Det fine er at når disse elementene er på plass, kommer smidigheten naturlig. Teamet begynner å eksperimentere, forbedre seg og tilpasse seg – ikke fordi Scrum-guiden sier det, men fordi det føles riktig.

Vår jobb som smidige coacher er ikke å implementere et rammeverk. Det er å skape forutsetningene for at team kan finne sin egen vei til å levere verdi.`,
  },
  {
    slug: "produktutvikling-med-mening",
    title: "Produktutvikling med mening",
    excerpt:
      "God produktutvikling starter med å forstå problemet du løser – ikke med teknologien du skal bruke.",
    author: "Thomas Berg",
    date: "2025-08-20",
    tags: ["Produktutvikling", "Strategi"],
    content: `I en verden full av spennende teknologier er det lett å la seg friste til å starte med løsningen. «Vi trenger en app!» «Vi må bruke AI!» «Hva med blockchain?»

Men de beste produktene starter med en dyp forståelse av problemet de løser. Hvem har dette problemet? Hvor smertefullt er det? Finnes det allerede gode nok løsninger?

## Start med hvorfor

Simon Sinek har gjort «Start with Why» til et mantra, og det er like relevant for produktutvikling. Før du skriver en eneste linje kode, bør du kunne svare tydelig på:

- Hvilket problem løser vi?
- For hvem løser vi det?
- Hvorfor er dette viktig nå?
- Hvordan vet vi at vi har lykkes?

## Eksperimentering over planlegging

Tradisjonell prosjektplanlegging forutsetter at vi vet hva vi skal bygge. I produktutvikling er usikkerheten det normale. Derfor må vi erstatte detaljerte planer med raske eksperimenter.

Bygg den minste versjonen som lar deg teste hypotesen din. Mål resultatet. Lær. Gjenta.

Det krever mot å innrømme at vi ikke vet alt på forhånd. Men det er nettopp den ydmykheten som skiller gode produktorganisasjoner fra resten.`,
  },
];
