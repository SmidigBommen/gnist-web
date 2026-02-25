export interface Service {
  id: string;
  title: string;
  description: string;
  details: string[];
  icon: string;
}

export interface Principle {
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    id: "teknisk-ledelse",
    title: "Teknisk ledelse",
    description:
      "Erfarne teknologiledere som kan gå rett inn i roller som CTO, tech lead eller arkitekt – og levere fra dag én.",
    details: [
      "Interim CTO / VP Engineering",
      "Teknisk arkitektur og strategi",
      "Teambygging og organisasjonsutvikling",
      "Teknisk due diligence",
      "Modernisering av legacy-systemer",
    ],
    icon: "Compass",
  },
  {
    id: "smidig-utvikling",
    title: "Smidig utvikling",
    description:
      "Vi hjelper team og organisasjoner med å bli genuint smidige – ikke bare følge et rammeverk.",
    details: [
      "Smidig coaching og transformasjon",
      "Scrum, Kanban og skalerte rammeverk",
      "Kontinuerlig forbedring og retrospektiver",
      "Verdistrømskartlegging",
      "Organisasjonsdesign for smidighet",
    ],
    icon: "Repeat",
  },
  {
    id: "produktutvikling",
    title: "Produktutvikling",
    description:
      "Fra idé til leveranse – vi hjelper med hele verdikjeden i produktutvikling.",
    details: [
      "Produktledelse og -strategi",
      "Brukersentrert design og UX",
      "Fullstack-utvikling",
      "DevOps og plattform",
      "Data og innsikt",
    ],
    icon: "Rocket",
  },
];

export const principles: Principle[] = [
  {
    title: "Mennesker først",
    description:
      "Teknologi er et verktøy. Det er menneskene som bruker det som skaper verdien. Vi starter alltid med å forstå menneskene.",
  },
  {
    title: "Pragmatisk tilnærming",
    description:
      "Vi velger det som fungerer, ikke det som er trendy. Best practice er en startpunkt, ikke et dogme.",
  },
  {
    title: "Bærekraftig tempo",
    description:
      "Ekte fart kommer fra bærekraftige arbeidsmetoder, ikke fra å presse folk hardere.",
  },
  {
    title: "Kontinuerlig læring",
    description:
      "Vi investerer i vår egen utvikling og deler det vi lærer med andre.",
  },
];
