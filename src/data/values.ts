export interface Value {
  title: string;
  description: string;
  icon: string;
}

export const values: Value[] = [
  {
    title: "Gnist",
    description:
      "Vi brenner for faget vårt og deler engasjementet med kundene våre. Den indre driven og nysgjerrigheten er det som gjør oss gode.",
    icon: "Flame",
  },
  {
    title: "Åpenhet",
    description:
      "Vi er ærlige og transparente i alt vi gjør. Vi deler kunnskap fritt og bygger tillit gjennom åpen kommunikasjon.",
    icon: "Eye",
  },
  {
    title: "Mot",
    description:
      "Vi tør å utfordre status quo og ta de vanskelige samtalene. Ekte forbedring krever mot til å prøve nye tilnærminger.",
    icon: "Shield",
  },
  {
    title: "Fellesskap",
    description:
      "Vi tror på kraften i mangfold og samarbeid. Sammen skaper vi bedre løsninger enn noen av oss kunne gjort alene.",
    icon: "Users",
  },
];

export const socialResponsibility = {
  title: "Samfunnsbidrag",
  intro:
    "Gnist ønsker å bidra positivt til samfunnet utover det vi gjør for kundene våre. Vi engasjerer oss i flere initiativer.",
  initiatives: [
    {
      title: "Lær Kidsa Koding",
      description:
        "Vi bidrar frivillig med å lære barn og unge programmering gjennom workshops og arrangementer.",
    },
    {
      title: "Mangfold i tech",
      description:
        "Vi jobber aktivt for å øke mangfoldet i teknologibransjen gjennom mentoring og samarbeid med organisasjoner.",
    },
    {
      title: "Kunnskapsdeling",
      description:
        "Vi holder foredrag, skriver artikler og arrangerer meetups for å dele kunnskap med tech-miljøet.",
    },
  ],
};
