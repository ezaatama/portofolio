export type Shot = { src: string; width: number; height: number; matte?: boolean };

export type Project = {
  slug: string;
  name: string;
  company: string;
  years: string;
  kind: string;
  summary: string;
  body: string[];
  // without a cover, pages show a typographic stand-in
  cover?: Shot;
  screens: Shot[];
  features?: { title: string; line: string }[];
  playStore?: string;
  appStore?: string;
  // shown in the home page's case carousel
  role: string;
  stack: string;
  highlight: string;
};

const big = (name: string): Shot => ({ src: `/images/work/${name}.png`, width: 2752, height: 4195 });
// Phinter screens were exported on a white ground, so they print with multiply
const small = (name: string): Shot => ({ src: `/images/work/${name}.png`, width: 1000, height: 1500, matte: true });

export const profile = {
  name: "Reza Putra Pratama",
  role: "Mobile developer",
  city: "Bekasi, West Java",
  email: "ezatama33@gmail.com",
  phone: "+62 819 1187 0796",
  whatsapp: "https://wa.me/6281911870796",
  linkedin: "https://www.linkedin.com/in/reza-putra-pratama/",
  github: "https://github.com/ezaatama",
  instagram: "https://www.instagram.com/ezaatama",
  cv: "/file/resume_reza.pdf",
};

export const projects: Project[] = [
  {
    slug: "kimo-driver",
    role: "Mobile developer",
    stack: "Flutter, offline sync",
    highlight: "Version 2 rebuilt from scratch",
    name: "Kimo Driver",
    company: "Kiatananda Group",
    years: "2026 to now",
    kind: "Logistics, internal",
    summary: "Trips, photo proof and offline sync for truck drivers.",
    body: [
      "Kiatananda Group’s truck drivers carry Kimo Driver on every trip. I build it in Flutter, and in 2026 I started version 2 from scratch.",
    ],
    // version 2 screens (home, order, assets), rendered in a phone frame on a transparent ground
    cover: { src: "/images/work/kimo1.png", width: 1000, height: 1500 },
    screens: [
      { src: "/images/work/kimo2.png", width: 1000, height: 1500 },
      { src: "/images/work/kimo3.png", width: 1000, height: 1500 },
    ],
    features: [
      { title: "Every leg of a trip", line: "Load, delivery and unload, each confirmed with a watermarked photo." },
      { title: "Works offline", line: "A local database holds the trip, then syncs and recovers when the signal returns." },
      { title: "Location in the background", line: "Background tracking, geofences and reminders to send trip photos." },
      { title: "The driver’s paperwork", line: "Trip allowances, extra costs, attendance and exit permits in one app." },
    ],
  },
  {
    slug: "phinter-mobile",
    role: "Mobile developer",
    stack: "Flutter, Bloc, Golang",
    highlight: "Up to 30% better performance",
    name: "Phinter Mobile",
    company: "PT Phintraco Group",
    years: "2023 to 2026",
    kind: "HRIS",
    summary: "Attendance, leave and permits for Phintraco staff.",
    body: [
      "Phintraco staff open Phinter every working day to check in by location and ask for leave or permits.",
      "I built it in Flutter with Bloc, wrote some of its Golang endpoints, and shipped every release to both stores.",
    ],
    cover: small("phinter3"),
    screens: [small("phinter1"), small("phinter2"), small("phinter4")],
    playStore: "https://play.google.com/store/apps/details?id=com.phinter.phintraco",
    appStore: "https://apps.apple.com/us/app/phinter-mobile/id6475161724",
  },
  {
    slug: "gethome",
    role: "Mobile developer",
    stack: "Flutter, REST APIs",
    highlight: "Became my bachelor’s thesis",
    name: "Gethome.id",
    company: "PT Propertree Investa Cendekia",
    years: "2021 to 2023",
    kind: "Property",
    summary: "Weekly build progress for people buying a house.",
    body: [
      "Gethome connects home buyers with the contractors, suppliers and notaries behind their house. Version 1.0 shows the buyer how their own unit is being built.",
      "Photos and progress are updated every week, so buyers follow construction without visiting the site. The flow also became the subject of my bachelor's thesis.",
    ],
    cover: big("gethome1"),
    screens: [big("gethome2"), big("gethome3"), big("gethome4")],
    playStore: "https://play.google.com/store/apps/details?id=id.gethome.myhome",
    appStore: "https://apps.apple.com/id/app/gethome-id/id1626773228",
  },
  {
    slug: "koperasi-digital-propertree",
    role: "Mobile developer",
    stack: "Flutter, REST APIs",
    highlight: "Live on Google Play and the App Store",
    name: "Koperasi Digital Propertree",
    company: "PT Propertree Investa Cendekia",
    years: "2021 to 2023",
    kind: "Cooperative",
    summary: "A service cooperative for the property sector, on the phone.",
    body: [
      "Koperasi Digital Propertree takes a service cooperative focused on property and puts its membership and services in a mobile app.",
      "Built in Flutter and released on Google Play and the App Store, with UAT documentation written alongside each feature.",
    ],
    cover: big("koop1"),
    screens: [big("koop2"), big("koop3"), big("koop4")],
    playStore: "https://play.google.com/store/apps/details?id=id.koperasipropertree.apps",
    appStore: "https://apps.apple.com/id/app/koperasi-digital-propertree/id6445837757",
  },
  {
    slug: "roastkuy",
    role: "Mobile developer",
    stack: "Flutter, REST APIs",
    highlight: "Live on Google Play",
    name: "Roastkuy",
    company: "PT Propertree Investa Cendekia",
    years: "2021 to 2023",
    kind: "Restaurant",
    summary: "Grilled chicken from outlets in Depok and Bogor.",
    body: [
      "Roastkuy is a grilled chicken restaurant with outlets around Depok and Bogor. The app brings its menu of marinades and sauces to customers’ phones.",
      "Built in Flutter against the restaurant’s REST API and released on Google Play.",
    ],
    cover: big("roastkuy1"),
    screens: [big("roastkuy2"), big("roastkuy3"), big("roastkuy4")],
    playStore: "https://play.google.com/store/apps/details?id=id.roastkuy.apps",
  },
  {
    slug: "ngaji-kuy",
    role: "Designer and developer",
    stack: "Flutter, audio playback",
    highlight: "Designed and built on my own",
    name: "Ngaji Kuy",
    company: "Personal project",
    years: "Personal",
    kind: "Religious",
    summary: "Quran recitation with audio, prayers and prayer times.",
    body: [
      "Ngaji Kuy is an app for reciting the Quran, with the complete set of surahs and daily prayers.",
      "Audio playback and prayer times make it easy for anyone to use. I designed and built it on my own.",
    ],
    cover: big("ngaji1"),
    screens: [big("ngaji2"), big("ngaji3"), big("ngaji4")],
  },
];

export const experience = [
  {
    years: "2026 to now",
    company: "Kiatananda Group",
    role: "Mobile developer",
    line: "Kimo Driver, the app truck drivers carry on every trip.",
  },
  {
    years: "2023 to 2026",
    company: "PT Phintraco Group",
    role: "Mobile developer",
    line: "Phinter HRIS app; performance up as much as 30%.",
  },
  {
    years: "2023",
    company: "PT Eureka Bookhouse",
    role: "Mobile developer",
    line: "Built the KataRasa e-commerce app.",
  },
  {
    years: "2021 to 2023",
    company: "PT Propertree Investa Cendekia",
    role: "Mobile developer",
    line: "Shipped Gethome.id, Roastkuy and Koperasi Digital Propertree.",
  },
  {
    years: "2019 to 2020",
    company: "PT Arfadia",
    role: "WordPress developer, intern",
    line: "Client site redesigns and SEO.",
  },
];

export const projectBy = (slug: string) => projects.find((p) => p.slug === slug)!;
