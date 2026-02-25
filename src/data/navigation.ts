export interface NavItem {
  label: string;
  href: string;
}

export const mainNavigation: NavItem[] = [
  { label: "Hjem", href: "/" },
  { label: "Om Gnist", href: "/om-gnist" },
  { label: "Tjenester", href: "/tjenester" },
  { label: "Folka", href: "/folka" },
  { label: "Kurs", href: "/kurs" },
  { label: "Artikler", href: "/artikler" },
  { label: "Kontakt", href: "/kontakt" },
];

export const footerNavigation = {
  tjenester: [
    { label: "Teknisk ledelse", href: "/tjenester#teknisk-ledelse" },
    { label: "Smidig utvikling", href: "/tjenester#smidig-utvikling" },
    { label: "Produktutvikling", href: "/tjenester#produktutvikling" },
    { label: "Kurs og workshops", href: "/kurs" },
  ],
  selskap: [
    { label: "Om Gnist", href: "/om-gnist" },
    { label: "Folka", href: "/folka" },
    { label: "Kontakt oss", href: "/kontakt" },
    { label: "Artikler", href: "/artikler" },
  ],
  juridisk: [
    { label: "Personvernerklæring", href: "/personvern" },
    { label: "Åpenhetsloven", href: "/apenhetsloven" },
  ],
};
