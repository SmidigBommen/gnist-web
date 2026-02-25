export interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  format: string;
  audience: string;
  topics: string[];
  instructor?: string;
}

export const courses: Course[] = [
  {
    id: "smidig-ledelse",
    title: "Smidig ledelse i praksis",
    description:
      "Et intensivt kurs for ledere som vil forstå og praktisere smidig ledelse. Lær hvordan du skaper rammene for selvorganiserte team som leverer verdi.",
    duration: "2 dager",
    format: "Klasserom / digitalt",
    audience: "Ledere, mellomledere, prosjektledere",
    topics: [
      "Smidig tankegang og prinsipper",
      "Servant leadership",
      "Bygge psykologisk trygghet",
      "OKR og målstyring",
      "Praktiske øvelser og caser",
    ],
    instructor: "Kristin Haugen",
  },
  {
    id: "teknisk-ledelse-kurs",
    title: "Teknisk ledelse for tech leads",
    description:
      "Bli en bedre teknisk leder. Kurset dekker alt fra arkitekturbeslutninger til teamledelse og karriereutvikling for utviklere.",
    duration: "2 dager",
    format: "Klasserom",
    audience: "Tech leads, seniorutviklere, arkitekter",
    topics: [
      "Rollen som teknisk leder",
      "Arkitekturbeslutninger og trade-offs",
      "Kodereview og kunnskapsdeling",
      "Mentoring og talentutvikling",
      "Teknisk gjeld og prioritering",
    ],
    instructor: "Anders Bäckström",
  },
  {
    id: "produktledelse",
    title: "Produktledelse fra A til Å",
    description:
      "Lær å drive produktutvikling med fokus på brukerverdi, eksperimentering og datadrevet beslutningstaking.",
    duration: "1 dag",
    format: "Workshop",
    audience: "Produktledere, produkteiere, UX-designere",
    topics: [
      "Produktstrategi og visjon",
      "Brukerresearch og innsikt",
      "Prioriteringsrammeverk",
      "Eksperimentering og hypotesetesting",
      "Samspill mellom produkt, design og tech",
    ],
    instructor: "Thomas Berg",
  },
  {
    id: "devops-workshop",
    title: "DevOps i praksis",
    description:
      "Hands-on workshop der teamet ditt lærer å bygge og drifte moderne leveranseplattformer med CI/CD, containere og infrastruktur som kode.",
    duration: "2 dager",
    format: "Hands-on workshop",
    audience: "Utviklere, DevOps-ingeniører, plattformteam",
    topics: [
      "CI/CD-pipelines",
      "Containerisering med Docker og Kubernetes",
      "Infrastruktur som kode",
      "Observerbarhet og monitorering",
      "Sikkerhet i leveransekjeden",
    ],
    instructor: "Martin Larsen",
  },
];
