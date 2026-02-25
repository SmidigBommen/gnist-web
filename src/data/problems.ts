export interface Problem {
  id: string;
  problem: string;
  description: string;
  solution: string;
  serviceLink: string;
}

export const problems: Problem[] = [
  {
    id: "treg-leveranse",
    problem: "Vi leverer for sakte",
    description:
      "Teamet jobber hardt, men det tar altfor lang tid fra idé til produksjon. Prosessene føles tunge og det er mange flaskehalser.",
    solution:
      "Vi kartlegger verdistrømmen deres, identifiserer flaskehalser og hjelper dere med å innføre smidige praksiser som gir raskere og mer forutsigbare leveranser.",
    serviceLink: "smidig-utvikling",
  },
  {
    id: "mangler-teknisk-ledelse",
    problem: "Vi mangler teknisk lederskap",
    description:
      "Organisasjonen vokser, men den tekniske retningen er uklar. Det mangler noen som kan se helheten og ta de strategiske tekniske valgene.",
    solution:
      "Våre erfarne teknologiledere kan gå inn som interim CTO, VP Engineering eller teknisk arkitekt – og levere retning og resultater fra dag én.",
    serviceLink: "teknisk-ledelse",
  },
  {
    id: "siloer",
    problem: "Teamene jobber i siloer",
    description:
      "Utviklere, designere og forretning snakker forbi hverandre. Det er vanskelig å få til reelt samarbeid på tvers.",
    solution:
      "Vi hjelper dere med å bygge tverrfaglige produktteam med tydelig mandat, felles mål og gode samarbeidsrutiner.",
    serviceLink: "smidig-utvikling",
  },
  {
    id: "teknisk-gjeld",
    problem: "Teknisk gjeld bremser oss",
    description:
      "Kodebasen er blitt vanskelig å jobbe med. Nye funksjoner tar stadig lengre tid, og kvaliteten synker.",
    solution:
      "Vi hjelper dere med å kartlegge og prioritere teknisk gjeld, lage en realistisk plan for modernisering, og bygge praksiser som forhindrer at gjelden vokser.",
    serviceLink: "teknisk-ledelse",
  },
  {
    id: "usikker-produktretning",
    problem: "Vi vet ikke hva vi skal bygge",
    description:
      "Det kommer mange idéer og forespørsler, men det er vanskelig å prioritere. Vi er usikre på om vi bygger det riktige.",
    solution:
      "Vi hjelper dere med å etablere en tydelig produktstrategi basert på brukerinnsikt, eksperimentering og datadrevne beslutninger.",
    serviceLink: "produktutvikling",
  },
  {
    id: "skalering",
    problem: "Vi klarer ikke å skalere",
    description:
      "Det som fungerte da vi var ti utviklere, fungerer ikke lenger med femti. Koordineringen tar mer tid enn utviklingen.",
    solution:
      "Vi har erfaring med å skalere både team og arkitektur. Vi hjelper dere med organisasjonsdesign, teamtopologier og teknisk plattform som støtter vekst.",
    serviceLink: "smidig-utvikling",
  },
];
