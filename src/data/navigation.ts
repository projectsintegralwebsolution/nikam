export interface NavItem {
  title: string;
  href: string;
  children?: {
    title: string;
    href: string;
    description?: string;
  }[];
}

export const MAIN_NAV: NavItem[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About Us",
    href: "/about-us",
  },
  {
    title: "Products",
    href: "/laboratory-glassware",
    children: [
      {
        title: "Laboratory Glassware",
        href: "/laboratory-glassware",
        description: "Burettes, Pipettes, Flasks, Condensers, Joint Stoppers, Tubes & Custom Glass",
      },
      {
        title: "Laboratory Equipments",
        href: "/laboratory-equipments",
        description: "Laboratory Ovens, Water Baths, BOD Incubators, Autoclaves",
      },
      {
        title: "Industrial Processing Unit",
        href: "/industrial-processing-unit",
        description: "Pipeline Components, Vessels, Stirrers, Heat Exchangers, Columns",
      },
    ],
  },
  {
    title: "Our Presence",
    href: "/our-clients",
    children: [
      {
        title: "Our Clients",
        href: "/our-clients",
        description: "Pharma companies, research labs, educational institutes & industrial leaders",
      },
      {
        title: "Our Work",
        href: "/our-work",
        description: "Turnkey scientific installations, precision manufacturing & custom fabrications",
      },
    ],
  },
  {
    title: "Blogs",
    href: "/blogs",
  },
  {
    title: "Contact Us",
    href: "/contact-us",
  },
];

export const FOOTER_PRODUCTS = [
  { title: "Laboratory Glassware", href: "/laboratory-glassware" },
  { title: "Laboratory Equipments", href: "/laboratory-equipments" },
  { title: "Industrial Processing Unit", href: "/industrial-processing-unit" },
  { title: "Burettes & Pipettes", href: "/products/burettes" },
  { title: "Volumetric & Measuring Flasks", href: "/products/measuring-volumetric-flasks" },
  { title: "Distillation Apparatus", href: "/products/distillation-apparatus" },
];

export const FOOTER_USEFUL_LINKS = [
  { title: "HOME", href: "/" },
  { title: "ABOUT US", href: "/about-us" },
  { title: "OUR CLIENTS", href: "/our-clients" },
  { title: "OUR WORK", href: "/our-work" },
  { title: "BLOGS", href: "/blogs" },
  { title: "CONTACT US", href: "/contact-us" },
];
