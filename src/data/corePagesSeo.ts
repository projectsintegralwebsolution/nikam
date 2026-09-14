export interface PageSeoConfig {
  title: string;
  description: string;
  focusKeyword: string;
  supportiveKeywords: string[];
  canonical: string;
  ogImage: string;
  ogType?: "website" | "article";
}

export const SITE_URL = "https://nikamscientific.com";

export const GLOBAL_ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  "@id": `${SITE_URL}/#organization`,
  name: "Nikam Scientific Co.",
  legalName: "Nikam Scientific Co.",
  alternateName: ["Nikam Scientific", "Nikam Laboratory Glassware"],
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/images/logo/logo2.png`,
    caption: "Nikam Scientific Logo",
  },
  image: `${SITE_URL}/images/about/about.png`,
  description:
    "Established in 1996, Nikam Scientific Co. is an ISO-certified manufacturer of precision Borosilicate 3.3 laboratory glassware, scientific instruments, and custom industrial glass process units in India.",
  foundingDate: "1996",
  founder: {
    "@type": "Person",
    name: "Nikam Scientific Leadership",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Unit No - 18, 19 & 20, Jay Ambe Nagar, Shivaji Nagar, Salvad",
    addressLocality: "Boisar (W)",
    addressRegion: "Maharashtra",
    postalCode: "401504",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 19.8037,
    longitude: 72.7547,
  },
  telephone: "+91-9422685973",
  email: "info@nikamscientific.com",
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+91-9422685973",
      contactType: "sales",
      areaServed: "IN",
      availableLanguage: ["en", "hi", "mr"],
    },
    {
      "@type": "ContactPoint",
      telephone: "+91-9359366254",
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["en", "hi", "mr"],
    },
    {
      "@type": "ContactPoint",
      telephone: "+91-9923285673",
      contactType: "technical support",
      areaServed: "IN",
      availableLanguage: ["en", "hi", "mr"],
    },
  ],
  sameAs: [
    "https://www.facebook.com/pages/Laboratory-Glassware/1867357460156717?ref=hl",
    "https://www.linkedin.com/company/nikam-scientific",
    "https://www.instagram.com/nikamscientific",
    "https://www.youtube.com/@nikamscientific",
  ],
  priceRange: "$$",
  currenciesAccepted: "INR",
  paymentAccepted: "Bank Transfer, RTGS, NEFT, Cheque",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "18:30",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Scientific Glassware and Laboratory Equipment Catalog",
    itemListElement: [
      {
        "@type": "OfferCatalog",
        name: "Laboratory Glassware",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Volumetric Glassware Class A" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Distillation Assemblies & Condensers" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Borosilicate Flasks, Beakers & Burettes" } },
        ],
      },
      {
        "@type": "OfferCatalog",
        name: "Laboratory Equipments",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Hot Air Ovens & Water Baths" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "BOD Incubators & Autoclaves" } },
        ],
      },
      {
        "@type": "OfferCatalog",
        name: "Industrial Process Units",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Industrial Glass Pipelines & Vessels" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Glass Shell & Tube Heat Exchangers" } },
        ],
      },
    ],
  },
};

export const CORE_PAGES_SEO = {
  home: {
    title: "Laboratory Glassware Manufacturer in India | Nikam Scientific",
    description:
      "Nikam Scientific is a premier laboratory glassware manufacturer in India since 1996. We fabricate ISO-certified Borosilicate 3.3 lab glassware, pilot plant units & custom lab equipment. Request a quote.",
    focusKeyword: "Laboratory Glassware Manufacturer in India",
    supportiveKeywords: [
      "scientific glassware supplier",
      "laboratory glassware",
      "lab equipment manufacturer",
      "borosilicate 3.3 laboratory glassware",
      "custom lab glassware manufacturer",
      "industrial glass process units India",
      "ISO certified borosilicate glassware manufacturer in Boisar Maharashtra",
      "precision scientific laboratory glassware factory in India",
      "turnkey laboratory glassware supplier for pharma QA QC",
    ],
    canonical: `${SITE_URL}`,
    ogImage: `${SITE_URL}/images/banners/hero-slide-1.png`,
    ogType: "website" as const,
  },

  about: {
    title: "About Us | Scientific Glassware Manufacturing Company",
    description:
      "Learn about Nikam Scientific Co., established in 1996 in Boisar, Maharashtra. 30+ years of excellence in precision Borosilicate 3.3 glassblowing, calibration, and custom lab solutions.",
    focusKeyword: "Scientific Glassware Manufacturing Company India",
    supportiveKeywords: [
      "borosilicate glass manufacturers",
      "laboratory glassware factory",
      "custom scientific glassblowing workshop",
      "ISO certified lab glassware manufacturer India",
      "precision glassware fabricator",
      "borosilicate 3.3 glass apparatus manufacturer Boisar Maharashtra",
      "custom laboratory glassware glassblowing with lathe machines in India",
      "industrial chemical glassware fabrication history",
    ],
    canonical: `${SITE_URL}/about-us`,
    ogImage: `${SITE_URL}/images/about/about.png`,
    ogType: "website" as const,
  },

  clients: {
    title: "Our Clients | Trusted Lab Glassware Supplier Across India",
    description:
      "Nikam Scientific is the trusted laboratory glassware supplier for leading pharmaceutical firms, chemical plants, CSIR labs, and premier universities across India.",
    focusKeyword: "Laboratory Glassware Supplier for Pharma & Industry",
    supportiveKeywords: [
      "lab glassware supplier",
      "pharmaceutical glassware supplier",
      "chemical industry laboratory equipment vendor",
      "bulk laboratory glassware supplier India",
      "government research lab glassware vendor",
      "borosilicate glassware supplier for pharma QA QC laboratories in India",
      "approved scientific glassware vendor for CSIR universities and R&D centers",
      "B2B chemical process glass equipment contracts",
    ],
    canonical: `${SITE_URL}/our-clients`,
    ogImage: `${SITE_URL}/images/banners/about-banner1.jpg`,
    ogType: "website" as const,
  },

  work: {
    title: "Our Work | Custom Glassware Fabrication & Turnkey Installations",
    description:
      "Explore Nikam Scientific's precision glassblowing projects, turnkey borosilicate pilot plants, industrial glass pipelines, and bespoke laboratory apparatus fabrications.",
    focusKeyword: "Custom Glassware Fabrication & Turnkey Installations",
    supportiveKeywords: [
      "custom lab glassware",
      "glass pilot plant manufacturer",
      "scientific glassblowing services",
      "industrial glass pipeline installation India",
      "custom borosilicate reactor fabrication",
      "custom glass reaction vessel fabrication Boisar",
      "turnkey borosilicate 3.3 distillation plant assembly India",
      "bespoke scientific glass apparatus made to CAD drawing",
    ],
    canonical: `${SITE_URL}/our-work`,
    ogImage: `${SITE_URL}/images/work/img-2.jpeg`,
    ogType: "website" as const,
  },

  blogs: {
    title: "Technical Insights & Scientific Glassware Blog",
    description:
      "Expert articles and technical guides on Borosilicate 3.3 glassware, volumetric calibration, pilot plant scaleup, and laboratory safety standards by Nikam Scientific.",
    focusKeyword: "Laboratory Glassware Technical Guides & Insights",
    supportiveKeywords: [
      "scientific glassware blog",
      "laboratory glassware guide",
      "borosilicate 3.3 technical properties",
      "volumetric glassware calibration guide",
      "pilot plant scaleup best practices",
      "how to maintain class A volumetric flask accuracy in pharma labs",
      "borosilicate glass vs soda lime glass thermal shock resistance",
      "chemical process scaleup guidelines using glass reactors",
    ],
    canonical: `${SITE_URL}/blogs`,
    ogImage: `${SITE_URL}/images/banners/about-banner1.jpg`,
    ogType: "website" as const,
  },

  contact: {
    title: "Contact Us | Request Laboratory Glassware Quotation",
    description:
      "Contact Nikam Scientific Co. in Boisar, Maharashtra. Request bulk quotations, custom glassblowing drawings, or technical consultations. Direct sales: +91 9422685973.",
    focusKeyword: "Laboratory Glassware Manufacturer Contact & RFQ India",
    supportiveKeywords: [
      "lab glassware manufacturer contact",
      "scientific glassware supplier contact",
      "request quote laboratory glassware",
      "custom glassware manufacturer phone number",
      "Nikam Scientific Boisar factory address",
      "request commercial quotation for bulk borosilicate glassware India",
      "contact laboratory equipment manufacturer in Boisar Maharashtra",
      "custom scientific glass apparatus drawing inquiry",
    ],
    canonical: `${SITE_URL}/contact-us`,
    ogImage: `${SITE_URL}/images/banners/about-banner1.jpg`,
    ogType: "website" as const,
  },
};

/**
 * Generate Schema for Home Page
 */
export function getHomeSchema() {
  return [
    GLOBAL_ORGANIZATION_SCHEMA,
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Nikam Scientific",
      description: CORE_PAGES_SEO.home.description,
      publisher: {
        "@id": `${SITE_URL}/#organization`,
      },
      inLanguage: "en-IN",
    },
  ];
}

/**
 * Generate Schema for About Us Page
 */
export function getAboutSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${SITE_URL}/about-us/#aboutpage`,
    url: `${SITE_URL}/about-us`,
    name: CORE_PAGES_SEO.about.title,
    description: CORE_PAGES_SEO.about.description,
    isPartOf: {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
    },
    about: {
      "@id": `${SITE_URL}/#organization`,
    },
    mainEntity: {
      "@type": "Organization",
      name: "Nikam Scientific Co.",
      foundingDate: "1996",
      description:
        "Specialized manufacturer and precision glassblowing fabricator of Borosilicate 3.3 laboratory glassware and custom industrial process equipment in Boisar, Palghar, Maharashtra.",
    },
    inLanguage: "en-IN",
  };
}

/**
 * Generate Schema for Our Clients Page
 */
export function getClientsSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${SITE_URL}/our-clients/#clientspage`,
    url: `${SITE_URL}/our-clients`,
    name: CORE_PAGES_SEO.clients.title,
    description: CORE_PAGES_SEO.clients.description,
    isPartOf: {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
    },
    about: {
      "@type": "Thing",
      name: "B2B Scientific Glassware Clients in Pharma, Chemical & Educational Sectors",
    },
    inLanguage: "en-IN",
  };
}

/**
 * Generate Schema for Our Work Page
 */
export function getWorkSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${SITE_URL}/our-work/#workpage`,
    url: `${SITE_URL}/our-work`,
    name: CORE_PAGES_SEO.work.title,
    description: CORE_PAGES_SEO.work.description,
    isPartOf: {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
    },
    hasPart: [
      {
        "@type": "Service",
        name: "Custom Scientific Glassblowing & Fabrication",
        provider: { "@id": `${SITE_URL}/#organization` },
        description:
          "Bespoke manufacturing of multi-neck reaction flasks, silvered vacuum-jacketed columns, and precision ground joints from CAD drawings.",
      },
      {
        "@type": "Service",
        name: "Turnkey Industrial Glass Pilot Plant Installations",
        provider: { "@id": `${SITE_URL}/#organization` },
        description:
          "Engineering, assembly, and testing of spherical reaction units (up to 200L), glass distillation rigs, and corrosion-proof glass pipelines.",
      },
    ],
    inLanguage: "en-IN",
  };
}

/**
 * Generate Schema for Blogs Hub Page
 */
export function getBlogsSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${SITE_URL}/blogs/#blog`,
    url: `${SITE_URL}/blogs`,
    name: CORE_PAGES_SEO.blogs.title,
    description: CORE_PAGES_SEO.blogs.description,
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
    inLanguage: "en-IN",
  };
}

/**
 * Generate Schema for Contact Us Page
 */
export function getContactSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${SITE_URL}/contact-us/#contactpage`,
    url: `${SITE_URL}/contact-us`,
    name: CORE_PAGES_SEO.contact.title,
    description: CORE_PAGES_SEO.contact.description,
    isPartOf: {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
    },
    mainEntity: {
      "@id": `${SITE_URL}/#organization`,
    },
    inLanguage: "en-IN",
  };
}
