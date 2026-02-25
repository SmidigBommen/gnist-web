import type { NavItem } from "./navigation";

export const v3MainNavigation: NavItem[] = [
  { label: "Hjem", href: "/v3" },
  { label: "Om oss", href: "/v3/om-gnist" },
  { label: "Tjenester", href: "/v3/tjenester" },
  { label: "Teamet", href: "/v3/folka" },
  { label: "Kurs", href: "/v3/kurs" },
  { label: "Kontakt", href: "/v3/kontakt" },
];

export const v3FooterNavigation = {
  tjenester: [
    { label: "Teknisk ledelse", href: "/v3/tjenester#teknisk-ledelse" },
    { label: "Smidig utvikling", href: "/v3/tjenester#smidig-utvikling" },
    { label: "Produktutvikling", href: "/v3/tjenester#produktutvikling" },
    { label: "Kurs", href: "/v3/kurs" },
  ],
  selskap: [
    { label: "Om oss", href: "/v3/om-gnist" },
    { label: "Teamet", href: "/v3/folka" },
    { label: "Kontakt", href: "/v3/kontakt" },
  ],
  juridisk: [
    { label: "Personvern", href: "/personvern" },
    { label: "Åpenhetsloven", href: "/apenhetsloven" },
  ],
};
