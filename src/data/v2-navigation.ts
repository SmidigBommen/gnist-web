import type { NavItem } from "./navigation";

export const v2MainNavigation: NavItem[] = [
  { label: "Hjem", href: "/v2" },
  { label: "Om Gnist", href: "/v2/om-gnist" },
  { label: "Tjenester", href: "/v2/tjenester" },
  { label: "Folka", href: "/v2/folka" },
  { label: "Kurs", href: "/v2/kurs" },
  { label: "Kontakt", href: "/v2/kontakt" },
];

export const v2FooterNavigation = {
  tjenester: [
    { label: "Teknisk ledelse", href: "/v2/tjenester#teknisk-ledelse" },
    { label: "Smidig utvikling", href: "/v2/tjenester#smidig-utvikling" },
    { label: "Produktutvikling", href: "/v2/tjenester#produktutvikling" },
    { label: "Kurs og workshops", href: "/v2/kurs" },
  ],
  selskap: [
    { label: "Om Gnist", href: "/v2/om-gnist" },
    { label: "Folka", href: "/v2/folka" },
    { label: "Kontakt oss", href: "/v2/kontakt" },
  ],
  juridisk: [
    { label: "Personvernerklæring", href: "/personvern" },
    { label: "Åpenhetsloven", href: "/apenhetsloven" },
  ],
};
