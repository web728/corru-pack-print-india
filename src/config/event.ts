export const EVENT = {
  name: "Corru Pack Print India",
  fullName: "ICPMA Corru Pack Print India Expo",
  edition: 3,
  editionLabel: "3rd Edition",
  year: 2028,

  dates: {
    start: "2028-02-09",
    end: "2028-02-12",
    display: "9–12 February 2028",
    days: 4,
  },

  venue: {
    name: "Yashobhoomi",
    fullName: "India International Convention & Expo Centre",
    area: "Dwarka",
    city: "New Delhi",
    state: "Delhi",
    country: "India",
    display: "Yashobhoomi, Dwarka, New Delhi",
    fullDisplay: "Yashobhoomi — India International Convention & Expo Centre, Dwarka, New Delhi, India",
  },

  // tagline: "Bharat Ka Vision, Corrugation Ka Mission, Expo Mein Milega Har Solution",

  organizers: {
    icpma: {
      name: "Indian Paper Corrugated & Packaging Machinery Manufacturers Association",
      shortName: "ICPMA",
      founded: "2014",
      city: "New Delhi",
    },
    futurex: {
      name: "Futurex Trade Fair & Events Pvt. Ltd.",
      shortName: "Futurex",
      tagline: "Let's Build The Future Together",
    },
  },

  contact: {
    primary: {
      name: "Ms. Priyanka",
      phone: "+91 74280 26409",
      email: "info.icpma@gmail.com",
      organization: "ICPMA" as const,
    },
    secondary: {
      name: "Futurex Trade Fair & Events",
      phone: "+91 9810855697",
      email: "namit@futurextrade.com",
      organization: "Futurex" as const,
    },
  },

  social: {
    facebook: "https://facebook.com/corrupackprint/",
    instagram: "https://instagram.com/corrupackprint/",
    twitter: "https://twitter.com/corrupackprint",
    linkedin: "https://linkedin.com/company/corrupackprint/",
    youtube: "https://youtube.com/@corrupackprint/",
  },

  domain: "corrupackprintindia.org",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://corrupackprintindia.org",

  editions: [
    { number: 1, year: 2024, dates: "7–9 March 2024", venue: "Yashobhoomi, India International Convention & Expo Centre (IICC)", city: "New Delhi", status: "past" as const },
    { number: 2, year: 2026, dates: "19–22 March 2026", venue: "Hall No. 6, Bombay Exhibition Centre (NESCO)", city: "Goregaon, Mumbai", status: "past" as const },
    { number: 3, year: 2028, dates: "9–12 February 2028", venue: "Yashobhoomi", city: "New Delhi", status: "current" as const },
  ],
} as const;

export const PRODUCT_CATEGORIES = [
  { slug: "printing-converting", name: "Printing & Converting", icon: "Printer" },
  { slug: "flexo", name: "Flexo Printing", icon: "Layers" },
  { slug: "die-cutting", name: "Die Cutting", icon: "Scissors" },
  { slug: "folder-gluer", name: "Folder Gluer", icon: "FoldVertical" },
  { slug: "automation", name: "Automation & Robotics", icon: "Bot" },
  { slug: "adhesives", name: "Adhesives & Consumables", icon: "Droplets" },
  { slug: "inks", name: "Inks & Coatings", icon: "Palette" },
  { slug: "kraft-paper", name: "Kraft Paper & Board", icon: "FileText" },
  { slug: "testing-equipment", name: "Testing Equipment", icon: "FlaskConical" },
  { slug: "material-handling", name: "Material Handling", icon: "Container" },
  { slug: "spare-parts", name: "Spare Parts", icon: "Cog" },
  { slug: "sustainable-solutions", name: "Sustainable Solutions", icon: "Leaf" },
  { slug: "allied-machineries", name: "Allied Machineries", icon: "Factory" },
] as const;

export const POST_SHOW_STATS = [
  { label: "Valued live machinery demonstrations", value: "72%" },
  { label: "Reported quality buyer interactions", value: "68%" },
  { label: "Engaged with key decision-makers", value: "65%" },
  { label: "Connected with new business prospects", value: "62%" },
  { label: "Reported relevant business enquiries", value: "60%" },
  { label: "Met dealers and distributors", value: "58%" },
] as const;

export const REFERENCE_PREFIX = "CPP28";
export type FormType = "VIS" | "EXH" | "CON" | "SPO" | "BRO" | "NWS" | "MED" | "CNF";
