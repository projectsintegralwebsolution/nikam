export interface ProductItem {
  id: string;
  slug: string;
  name: string;
  category: "glassware" | "equipment" | "industrial";
  categoryName: string;
  shortDesc: string;
  description: string;
  image: string;
  features: string[];
  specs?: { label: string; value: string }[];
  applications?: string[];
  faqs?: { q: string; a: string }[];
}

export const PRODUCT_CATEGORIES = [
  {
    id: "laboratory-glassware",
    title: "Laboratory Glassware",
    slug: "laboratory-glassware",
    subtitle: "Precision Engineered Scientific Glassware",
    description: "Premium borosilicate glassware designed for accurate laboratory experiments, pharmaceutical testing, and analytical research.",
    image: "/images/categories/laboratory-glassware.png",
    count: "18 Categories",
  },
  {
    id: "laboratory-equipments",
    title: "Laboratory Equipments",
    slug: "laboratory-equipments",
    subtitle: "Reliable Laboratory Equipment for Scientific Excellence",
    description: "Robust, high-accuracy temperature and sterilization equipment engineered to meet stringent laboratory standards.",
    image: "/images/categories/laboratory-equipments.png",
    count: "4 Product Lines",
  },
  {
    id: "industrial-processing-unit",
    title: "Industrial Processing Unit",
    slug: "industrial-processing-unit",
    subtitle: "Industrial Chemical & Glass Process Assemblies",
    description: "Corrosion-resistant borosilicate glass units and pipeline assemblies for industrial production, pilot plants, and chemical synthesis.",
    image: "/images/categories/industrial-processing.png",
    count: "6 Product Lines",
  },
];

export const PRODUCTS: ProductItem[] = [
  // Laboratory Glassware
  {
    id: "burettes",
    slug: "burettes",
    name: "Burettes",
    category: "glassware",
    categoryName: "Laboratory Glassware",
    shortDesc: "Class A accuracy burettes with leak-proof PTFE/glass stopcocks for volumetric titration.",
    description: "Nikam Scientific manufactures high-precision laboratory burettes calibrated to Class A standards. Featuring permanent amber/white graduations, chemically inert PTFE needle valves or precision ground glass stopcocks, our burettes ensure unmatched accuracy for acid-base and redox titrations in analytical laboratories.",
    image: "/images/products/Burettes1.jpg",
    features: [
      "Class A Calibrated Accuracy",
      "Leak-Proof PTFE or Ground Glass Stopcock",
      "Superior Borosilicate 3.3 Chemical Resistance",
      "High-Contrast Permanent Volume Graduations",
      "Multiple Capacities: 10ml, 25ml, 50ml, 100ml",
      "Precision Smooth Flow Control"
    ],
    specs: [
      { label: "Material", value: "Borosilicate 3.3 Glass" },
      { label: "Standard", value: "IS / ISO 385 Class A & Class B" },
      { label: "Capacities", value: "10 ml, 25 ml, 50 ml, 100 ml" },
      { label: "Stopcock Type", value: "PTFE Key / Straight Bore Glass Stopcock" }
    ],
    applications: [
      "Volumetric Titration in Research & Quality Control",
      "Pharmaceutical Analysis & Assay Testing",
      "Chemical Manufacturing Quality Testing",
      "Educational Chemistry Laboratories"
    ],
    faqs: [
      {
        q: "What tolerance standards do Nikam Scientific burettes adhere to?",
        a: "Our burettes meet Class A and Class B tolerances as prescribed by ISO 385 and Indian Standards (IS)."
      },
      {
        q: "Are the graduation markings acid and chemical resistant?",
        a: "Yes, graduations are thermally fused ceramic enamels that withstand harsh laboratory solvents, acids, and repeated washing cycles."
      }
    ]
  },
  {
    id: "pipettes",
    slug: "pipettes",
    name: "Pipettes",
    category: "glassware",
    categoryName: "Laboratory Glassware",
    shortDesc: "Volumetric and graduated pipettes designed for rapid, highly precise liquid measurement.",
    description: "Our range includes Bulb (Volumetric) Pipettes with single mark calibration and Measuring (Serological/Mohr) Pipettes with clear subdivision graduations. Crafted from heavy-duty borosilicate glass, they deliver consistent volumetric accuracy.",
    image: "/images/products/Pipettes-1.jpg",
    features: [
      "Class A Volumetric Pipettes with Individual Calibration",
      "Graduated Serological & Mohr Pipettes",
      "Fire-Polished Tips for Smooth Liquid Release",
      "Capacities from 0.1ml up to 100ml",
      "Colour Coded for Fast Capacity Identification"
    ],
    specs: [
      { label: "Types Available", value: "Volumetric (Bulb), Graduated (Serological, Mohr)" },
      { label: "Accuracy Class", value: "Class A with Batch Certificate" },
      { label: "Glass Type", value: "Borosilicate 3.3 High Expansion Resistant" }
    ]
  },
  {
    id: "measuring-volumetric-flasks",
    slug: "measuring-volumetric-flasks",
    name: "Measuring / Volumetric Flasks",
    category: "glassware",
    categoryName: "Laboratory Glassware",
    shortDesc: "Class A certified volumetric flasks with interchangeable ground stoppers for standard solution preparation.",
    description: "Manufactured strictly to ISO 1042 standards, Nikam Scientific volumetric flasks feature sharp, permanent calibration ring marks and ground glass or polypropylene stoppers to prevent evaporation.",
    image: "/images/products/Measuring-Volumetric-Flasks-1.jpg",
    features: [
      "Class A with Individual or Batch Calibration",
      "Supplied with Interchangeable Glass / Polyethylene Stoppers",
      "Chemical Resistant Borosilicate 3.3 Formulation",
      "Capacities: 5ml to 5000ml"
    ]
  },
  {
    id: "distillation-apparatus",
    slug: "distillation-apparatus",
    name: "Distillation Apparatus",
    category: "glassware",
    categoryName: "Laboratory Glassware",
    shortDesc: "Complete distillation setups including flasks, condensers, adapters, and receiving vessels.",
    description: "Turnkey laboratory distillation assemblies crafted for fractional distillation, solvent recovery, water purification, and essential oil extraction. Interchangeable ground joints ensure vapor-tight connections.",
    image: "/images/products/Distllation-Appararus.jpg",
    features: [
      "Interchangeable Precision Ground Joints (14/23, 19/26, 24/29, 29/32)",
      "High Thermal Shock Resistance",
      "Compatible with Heating Mantles and Oil Baths",
      "Standard and Custom Configurations"
    ]
  },
  {
    id: "distillation-apparatus-parts-condensers",
    slug: "distillation-apparatus-parts-condensers",
    name: "Distillation Condensers",
    category: "glassware",
    categoryName: "Laboratory Glassware",
    shortDesc: "Liebig, Graham, Allihn (Bulb), and Coil condensers for optimal vapor cooling.",
    description: "Precision engineered condensers designed for high heat transfer efficiency. Constructed with borosilicate inner tubes and heavy outer cooling jackets to handle vigorous refluxing and distillation.",
    image: "/images/products/Distillation-Apparatus-Parts-1.jpg",
    features: [
      "Available Styles: Liebig, Graham, Allihn, Friedrichs, Coil",
      "Detachable Plastic Hose Connectors or Glass Serrated Barbs",
      "Precision Conical Ground Joints",
      "Effective Cooling Jacket Lengths: 150mm to 1000mm"
    ]
  },
  {
    id: "standard-joints-stoppers-adapters",
    slug: "standard-joints-stoppers-adapters",
    name: "Standard Joints, Stoppers & Adapters",
    category: "glassware",
    categoryName: "Laboratory Glassware",
    shortDesc: "Ground socket, cone, reduction/expansion adapters, and stoppers for custom assemblies.",
    description: "Standard taper 1:10 ground joints manufactured with ultra-smooth surface finish to guarantee leak-tight vacuum and pressure performance without jamming.",
    image: "/images/products/Standard-Joints-Stoppers-Adapters-1.jpg",
    features: [
      "Precision Ground 1:10 Taper Joints",
      "Full Interchangeability Across Sizes",
      "Reduction, Expansion, Multiple & Bent Adapters",
      "Hollow Hexagonal & Penny Head Stoppers"
    ]
  },
  {
    id: "flasks",
    slug: "flasks",
    name: "Laboratory Flasks",
    category: "glassware",
    categoryName: "Laboratory Glassware",
    shortDesc: "Round bottom, flat bottom, Erlenmeyer, and multi-neck boiling flasks.",
    description: "Engineered with uniform wall distribution to withstand mechanical stress and thermal gradients. Multi-neck flasks (2, 3, and 4 neck) available with angled or parallel side sockets.",
    image: "/images/products/Flasks-1.jpg",
    features: [
      "Uniform Wall Thickness for Maximum Thermal Safety",
      "Single, Two, Three, and Four-Neck Configurations",
      "Erlenmeyer Conical Flasks with Graduations",
      "Sizes from 25ml to 20,000ml (20 Litres)"
    ]
  },
  {
    id: "beakers",
    slug: "beakers",
    name: "Beakers",
    category: "glassware",
    categoryName: "Laboratory Glassware",
    shortDesc: "Low form (Griffin) and tall form (Berzelius) borosilicate beakers with pouring spouts.",
    description: "General laboratory beakers with exceptional thermal and chemical resistance. Easy-to-read metric graduations and matte marking spot.",
    image: "/images/products/Beakers.jpg",
    features: [
      "Reinforced Rims and Specially Formulated Pouring Spout",
      "High Resistance to Thermal Shock up to 500°C",
      "Capacities from 25ml up to 10,000ml"
    ]
  },
  {
    id: "separating-dropping-funnels",
    slug: "separating-dropping-funnels",
    name: "Separating & Dropping Funnels",
    category: "glassware",
    categoryName: "Laboratory Glassware",
    shortDesc: "Pear shaped, cylindrical, and globe funnels with PTFE stopcocks and pressure equalizing arms.",
    description: "Ideal for liquid-liquid extractions and controlled reagent addition in synthesis setups.",
    image: "/images/products/Separating-Dropping-Funnels.jpg",
    features: [
      "Pear-Shaped (Squibb) and Cylindrical Designs",
      "Smooth Drip Tips and Ground Interchangeable Stoppers",
      "PTFE Stopcocks for Leak-Proof Control"
    ]
  },
  {
    id: "fractionating-columns",
    slug: "fractionating-columns",
    name: "Fractionating Columns",
    category: "glassware",
    categoryName: "Laboratory Glassware",
    shortDesc: "Vigreux, Dufton, and Packed fractionating columns for precision separation of liquids.",
    description: "Designed to provide maximum theoretical plate efficiency with low hold-up volume for fractional distillation.",
    image: "/images/products/Fractionating-Columns.jpg",
    features: [
      "Vigreux Indentations with Optimized Spatial Distribution",
      "Vacuum-Jacketed Options for Reduced Heat Loss",
      "Multiple Column Lengths: 150mm to 1000mm"
    ]
  },
  {
    id: "stirrers",
    slug: "stirrers",
    name: "Glass Stirrers & Guides",
    category: "glassware",
    categoryName: "Laboratory Glassware",
    shortDesc: "PTFE/Glass stirring shafts, collapsible paddle blades, and vacuum-tight stirrer glands.",
    description: "Durable glass and PTFE stirring rods and guide assemblies ensuring dynamic gas-tight and vacuum agitation.",
    image: "/images/products/Stirrers-New.jpg",
    features: [
      "Collapsible PTFE and Glass Blades",
      "Precision Ground Shafts for Dynamic Seal Glands",
      "Low Friction and Chemically Inert Construction"
    ]
  },
  {
    id: "still-heads-splash-heads",
    slug: "still-heads-splash-heads",
    name: "Still Heads & Splash Heads",
    category: "glassware",
    categoryName: "Laboratory Glassware",
    shortDesc: "Recovery still heads, Claisen heads, and Kjeldahl splash heads for distillation.",
    description: "Prevent spray and droplets from contaminating the distillate while directing vapors into condenser units.",
    image: "/images/products/Still-Heads-Splash-Heads.jpg",
    features: [
      "Straight and Sloping Condenser Connections",
      "Thermometer Socket Pocket Options",
      "Precision Sockets and Cones"
    ]
  },
  {
    id: "tube",
    slug: "tube",
    name: "Laboratory Glass Tubes",
    category: "glassware",
    categoryName: "Laboratory Glassware",
    shortDesc: "Test tubes, centrifuge tubes, culture tubes, and combustion tubes.",
    description: "Uniform wall thickness borosilicate test and culture tubes with rimmed or screw-cap finishes.",
    image: "/images/products/Tube-1.jpg",
    features: [
      "Thermal and Shock Resistant Borosilicate Glass",
      "With Rim or Screw Cap with PTFE/Silicone Liner",
      "Centrifuge Conical Bottom or Round Bottom"
    ]
  },
  {
    id: "bottles",
    slug: "bottles",
    name: "Reagent & Media Bottles",
    category: "glassware",
    categoryName: "Laboratory Glassware",
    shortDesc: "Graduated reagent bottles with GL45 blue screw caps and pouring rings.",
    description: "Autoclavable borosilicate bottles suitable for chemical storage, biological media preparation, and transport.",
    image: "/images/products/Bottles.jpg",
    features: [
      "Standard GL45 Polypropylene Screw Cap & Pouring Ring",
      "Autoclavable up to 140°C",
      "Clear Permanent Enamel Graduations"
    ]
  },
  {
    id: "gas-apparatus",
    slug: "gas-apparatus",
    name: "Gas Generation & Absorption Apparatus",
    category: "glassware",
    categoryName: "Laboratory Glassware",
    shortDesc: "Kipp's apparatus, gas washing bottles, and Orsat gas analysis equipment.",
    description: "Specialized apparatus for laboratory generation, washing, and quantitative volumetric analysis of gases.",
    image: "/images/products/Gas-Apparatus.jpg",
    features: [
      "Gas-Tight Ground Stopper Fittings",
      "Drechsel and Friedrichs Gas Washing Head Options",
      "Heavy Borosilicate Construction"
    ]
  },
  {
    id: "chromatography-apparatus",
    slug: "chromatography-apparatus",
    name: "Chromatography Columns & Tanks",
    category: "glassware",
    categoryName: "Laboratory Glassware",
    shortDesc: "Flash chromatography columns with sintered glass discs and PTFE stopcocks.",
    description: "Precision bore columns designed for gravity and flash preparative chromatography separations.",
    image: "/images/products/Chromatography-Apparatus.jpg",
    features: [
      "Porosity 1, 2, or 3 Sintered Disc Filters",
      "Standard Joint Socket at Top for Solvent Reservoirs",
      "Precision Bore Straight Walls"
    ]
  },
  {
    id: "miscellaneous-fitting",
    slug: "miscellaneous-fitting",
    name: "Miscellaneous Glass Fittings",
    category: "glassware",
    categoryName: "Laboratory Glassware",
    shortDesc: "Manifolds, vacuum take-off adapters, stopcock plugs, clips, and connectors.",
    description: "Extensive range of specialty connectors, bends, and joint clips to complete any laboratory setup.",
    image: "/images/products/Miscellaneous-Fitting.jpg",
    features: [
      "Stainless Steel and Polyacetal Joint Clips",
      "Vacuum and Pressure T-Bore / Straight Stopcocks",
      "Flexible Hose Connectors"
    ]
  },
  {
    id: "miscellaneous-apparatus",
    slug: "miscellaneous-apparatus",
    name: "Miscellaneous Laboratory Apparatus",
    category: "glassware",
    categoryName: "Laboratory Glassware",
    shortDesc: "Dean Stark moisture apparatus, Soxhlet extraction units, and custom glass assemblies.",
    description: "Complete analytical and synthesis assemblies tailored to ASTM, ISO, and pharmacopoeia testing methodologies.",
    image: "/images/products/Miscellaneous-Apparatus.jpg",
    features: [
      "Complete Soxhlet Extraction Sets with Condenser and Extractor",
      "Dean-Stark Water Estimator with Stopcock",
      "Custom Design and Glassblower Fabrication on Request"
    ]
  },

  // Laboratory Equipments
  {
    id: "laboratory-ovens",
    slug: "laboratory-ovens",
    name: "Laboratory Ovens",
    category: "equipment",
    categoryName: "Laboratory Equipments",
    shortDesc: "Precision digital forced-air convection drying and heating ovens for research and industrial QA.",
    description: "Nikam Scientific laboratory ovens provide uniform heating, digital PID micro-processor temperature control, and stainless steel interior chambers. Suitable for glassware drying, moisture testing, baking, and sterilization up to 250°C/300°C.",
    image: "/images/products/Laboratory-Ovens.jpg",
    features: [
      "Digital Microprocessor PID Temperature Controller",
      "High Grade SUS304 Stainless Steel Inner Chamber",
      "Forced Convection Blower for Optimal Temperature Uniformity",
      "Safety Over-Temperature Thermostat and Alarm",
      "Adjustable Perforated Stainless Steel Shelves"
    ],
    specs: [
      { label: "Temperature Range", value: "Ambient +5°C to 250°C / 300°C" },
      { label: "Chamber Material", value: "SUS304 Stainless Steel Mirror Finish" },
      { label: "Controller", value: "Dual LED Digital PID Controller" },
      { label: "Power Supply", value: "220-240V AC, 50/60 Hz" }
    ]
  },
  {
    id: "lab-water-bath",
    slug: "lab-water-bath",
    name: "Lab Water Bath",
    category: "equipment",
    categoryName: "Laboratory Equipments",
    shortDesc: "Constant temperature circulating and constant water baths with seamless deep-drawn reservoirs.",
    description: "Engineered for sample incubation, serological testing, thawing, and chemical warming. Features high-precision PID heating elements and corrosion-proof stainless steel baths.",
    image: "/images/products/Lab-Water-Bath.jpg",
    features: [
      "Seamless Deep-Drawn Stainless Steel Tank (No Weld Seams)",
      "Digital Display with Precision ±0.1°C Stability",
      "Gabled Stainless Steel Lid to Direct Condensation Away",
      "Dry-Run Low Liquid Cutoff Protection"
    ]
  },
  {
    id: "bod-incubator",
    slug: "bod-incubator",
    name: "BOD Incubator",
    category: "equipment",
    categoryName: "Laboratory Equipments",
    shortDesc: "Biochemical Oxygen Demand refrigerated incubators with hermetically sealed compressors.",
    description: "Designed for wastewater BOD testing, microbial culturing, seed germination, and enzyme preservation at stable temperatures between 5°C and 60°C.",
    image: "/images/products/BOD-Incubator.jpg",
    features: [
      "Temperature Range: 5°C to 60°C with ±0.5°C Uniformity",
      "CFC-Free Eco-Friendly Refrigeration Unit",
      "Internal Glass Door for Sample Observation Without Temperature Drop",
      "Built-in Illumination and Air Circulation Fan"
    ]
  },
  {
    id: "autoclave",
    slug: "autoclave",
    name: "Autoclave",
    category: "equipment",
    categoryName: "Laboratory Equipments",
    shortDesc: "Vertical and horizontal high-pressure steam sterilizers for culture media and laboratory equipment.",
    description: "Heavy duty pressure vessels constructed from thick gauge stainless steel with automatic pressure relief valves, gasket seals, and micro-controlled sterilization cycles.",
    image: "/images/products/Autoclave.jpg",
    features: [
      "Operating Pressure up to 15 to 22 PSI (121°C - 134°C)",
      "High Grade SS304/SS316 Heavy Duty Chamber",
      "Multi-Port Safety Release Valve and Pressure Gauge",
      "Low Water Level Heater Protection"
    ]
  },

  // Industrial Processing Unit
  {
    id: "pipeline-components",
    slug: "pipeline-components",
    name: "Pipeline Components",
    category: "industrial",
    categoryName: "Industrial Processing Unit",
    shortDesc: "Borosilicate 3.3 glass pipes, elbows, tees, spacers, and backing flanges for corrosion-free chemical transfer.",
    description: "Modular borosilicate glass pipeline systems designed for visual inspection and zero metal contamination in acidic, halogen, and solvent transfer lines. Available in nominal bores from DN15 to DN300.",
    image: "/images/products/Pipeline-Components.jpg",
    features: [
      "High Corrosion Resistance Against Almost All Acids & Solvents",
      "Standard Nominal Bores from DN15 to DN300",
      "PTFE Gaskets and Cast Iron/Stainless Steel Backing Flanges",
      "Transparent Walls for Constant Process Monitoring"
    ]
  },
  {
    id: "vessels",
    slug: "vessels",
    name: "Glass Process Vessels",
    category: "industrial",
    categoryName: "Industrial Processing Unit",
    shortDesc: "Spherical and cylindrical reaction vessels, receivers, and boiling kettles up to 100-200 Litres.",
    description: "Engineered for pilot plants and pharmaceutical synthesis. Available with jackets for thermal fluid circulation, bottom drain valves, and multiple nozzles on top covers.",
    image: "/images/products/Vessels.jpg",
    features: [
      "Capacities from 5 Litres to 200 Litres",
      "Jacketed and Non-Jacketed Options for Heating/Cooling",
      "Zero Dead Space PTFE Bottom Flush Valve",
      "Vacuum and Full Atmosphere Operation"
    ]
  },
  {
    id: "heat-exchangers",
    slug: "heat-exchangers",
    name: "Heat Exchangers",
    category: "industrial",
    categoryName: "Industrial Processing Unit",
    shortDesc: "Glass coil and shell-and-tube condensers for aggressive industrial chemical condensation and cooling.",
    description: "Designed for highly corrosive process streams where metals are attacked. Features high heat transfer area and low pressure drops.",
    image: "/images/products/Heat-Exchangers.jpg",
    features: [
      "Available Heat Exchange Surfaces up to 15 m²",
      "Glass Coil and Glass/PTFE Shell-and-Tube Types",
      "Exceptional Resistance to Thermal Shock",
      "Easy CIP (Clean-In-Place) Maintenance"
    ]
  },
  {
    id: "column-components",
    slug: "column-components",
    name: "Column Components",
    category: "industrial",
    categoryName: "Industrial Processing Unit",
    shortDesc: "Packed and plate distillation columns, reflux dividers, liquid distributors, and support plates.",
    description: "Engineered for continuous and batch fractional distillation columns in chemical processing units. Delivers reliable gas-liquid contact and high separation efficiency.",
    image: "/images/products/Column-Components.jpg",
    features: [
      "Column Diameters from DN50 to DN400",
      "Ceramic, Glass & PTFE Structured/Random Packings",
      "Precision Reflux Dividers with Solenoid Valve Control",
      "Even Liquid Distribution Headers"
    ]
  },
  {
    id: "sight-glass",
    slug: "sight-glass",
    name: "Sight Glass & Flow Indicators",
    category: "industrial",
    categoryName: "Industrial Processing Unit",
    shortDesc: "Tubular and double-window sight glasses for observing liquid flow, color, and phase transitions in pipelines.",
    description: "High-pressure borosilicate sight glass assemblies mounted in chemical process lines for continuous visual observation.",
    image: "/images/products/Sight-Glass.jpg",
    features: [
      "Tubular 360° Vision and Flanged Double-Window Designs",
      "Thermal Toughened Borosilicate Glass Discs",
      "Compatible with ANSI, DIN, and Custom Flange Standards"
    ]
  },
  {
    id: "stirrers-2",
    slug: "stirrers-2",
    name: "Stirrers",
    category: "industrial",
    categoryName: "Industrial Processing Unit",
    shortDesc: "Heavy duty top-mounted mechanical drive stirrers with PTFE turbine and anchor impellers.",
    description: "Overhead motor drives and magnetically coupled or mechanical seal stirrer shafts designed for reliable agitation in large glass process reactors.",
    image: "/images/products/Stirrers.jpg",
    features: [
      "Anchor, Turbine, Propeller, and Pitched Blade PTFE Impellers",
      "Flame-Proof and Variable Speed Motor Drives",
      "Gas-Tight Mechanical Seals with Water Cooling Jackets"
    ]
  }
];

export const CLIENT_LOGOS = [
  { name: "Client 1", image: "/images/clients/1.jpg" },
  { name: "Client 2", image: "/images/clients/2.jpg" },
  { name: "Client 3", image: "/images/clients/3.jpg" },
  { name: "Client 4", image: "/images/clients/4.jpg" },
  { name: "Client 5", image: "/images/clients/5.jpg" },
  { name: "Client 6", image: "/images/clients/6.jpg" },
  { name: "Client 8", image: "/images/clients/8.jpg" },
  { name: "Client 9", image: "/images/clients/9.jpg" },
  { name: "Client 10", image: "/images/clients/10.jpg" },
  { name: "Client 11", image: "/images/clients/11.jpg" },
  { name: "Client 12", image: "/images/clients/12.jpg" },
  { name: "Client 13", image: "/images/clients/13.jpg" },
  { name: "Client 14", image: "/images/clients/14.jpg" },
  { name: "Client 15", image: "/images/clients/15.jpg" },
  { name: "Client 16", image: "/images/clients/16.jpg" },
  { name: "Client 17", image: "/images/clients/17.jpg" },
  { name: "Client 18", image: "/images/clients/18.jpg" },
];

export const BLOG_POSTS = [
  {
    id: "precision-borosilicate-glassware-in-pharma",
    slug: "precision-borosilicate-glassware-in-pharma",
    title: "Why Borosilicate 3.3 Glass is the Gold Standard for Pharmaceutical Research",
    date: "Dec 18, 2025",
    author: "Nikam Scientific Technical Team",
    excerpt: "Borosilicate 3.3 offers extreme chemical resistance, minimal thermal expansion, and unmatched purity, preventing leaching in sensitive HPLC and active pharmaceutical synthesis.",
    image: "/images/categories/laboratory-glassware.png",
    category: "Technical Insights",
    readTime: "4 min read"
  },
  {
    id: "maintaining-calibration-accuracy-in-volumetric-flasks",
    slug: "maintaining-calibration-accuracy-in-volumetric-flasks",
    title: "Best Practices for Cleaning & Maintaining Class A Volumetric Glassware",
    date: "Nov 25, 2025",
    author: "Quality Assurance Department",
    excerpt: "Learn how temperature shocks, aggressive alkaline detergents, and abrasive brushes can alter volumetric calibration tolerances, and how to preserve Class A certified precision.",
    image: "/images/products/Measuring-Volumetric-Flasks.jpg",
    category: "Laboratory Best Practices",
    readTime: "5 min read"
  },
  {
    id: "industrial-glass-process-units-scaleup",
    slug: "industrial-glass-process-units-scaleup",
    title: "Scaling Up Chemical Synthesis with Modular Borosilicate Glass Units",
    date: "Oct 14, 2025",
    author: "Engineering Division",
    excerpt: "Transitioning from bench scale to pilot plant: exploring corrosion resistance, visual monitoring advantages, and safety design in large-volume glass reactors.",
    image: "/images/categories/industrial-processing.png",
    category: "Process Engineering",
    readTime: "6 min read"
  }
];

export const INDUSTRIES_SERVED = [
  {
    title: "Pharma Industry",
    description: "High-precision volumetric glassware and reaction setups meeting USP, BP, and EP pharmacopeia requirements.",
    icon: "Pill"
  },
  {
    title: "Chemical Industry",
    description: "Corrosion-resistant borosilicate processing vessels, heat exchangers, and distillation units for aggressive chemicals.",
    icon: "FlaskConical"
  },
  {
    title: "Research Laboratory",
    description: "Custom designed scientific glassware and precision equipment built to exact experimental specifications.",
    icon: "Microscope"
  },
  {
    title: "Educational Institutions",
    description: "Durable, high-grade laboratory apparatus and heating equipment for universities, colleges, and schools.",
    icon: "GraduationCap"
  },
  {
    title: "Food Testing",
    description: "Reliable analytical instruments, ovens, and glassware for nutritional testing, food safety, and quality assurance.",
    icon: "Apple"
  },
  {
    title: "Environmental Laboratory",
    description: "Specialized BOD incubators, water testing apparatus, and condensers for water and soil pollution analysis.",
    icon: "Leaf"
  }
];

export const WHY_CHOOSE_US = [
  {
    title: "30+ Years of Experience",
    desc: "Three decades of specialized laboratory glassware and equipment manufacturing expertise."
  },
  {
    title: "ISO-Certified Manufacturing",
    desc: "Certified, quality-controlled processes ensure unmatched consistency across all products."
  },
  {
    title: "Strict Quality Control",
    desc: "Every product undergoes multi-point optical and dimensional inspection for mechanical strength."
  },
  {
    title: "Precision Engineering",
    desc: "Advanced glassblowing techniques and calibrated tooling ensure Class A accuracy."
  },
  {
    title: "Fast Delivery",
    desc: "Efficient inventory and nationwide logistics ensure prompt, safe delivery to your doorstep."
  },
  {
    title: "Technical Support",
    desc: "Expert guidance and engineering consultation for custom sizes and specialized applications."
  }
];
