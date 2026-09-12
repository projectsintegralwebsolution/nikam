import { SITE_URL, GLOBAL_ORGANIZATION_SCHEMA } from "./corePagesSeo";
import { FAQItem } from "@/components/seo/ProductFaqSection";

export interface ItemSeoData {
  focusKeyword: string;
  supportiveKeywords: string[];
  title: string;
  description: string;
  faqs: FAQItem[];
  canonicalSlug?: string;
  mpn?: string;
  priceRange?: { low: string; high: string };
}

export const PRODUCT_SEO_DATA: Record<string, ItemSeoData> = {
  // ==================== 18 GLASSWARE PRODUCTS ====================
  burettes: {
    focusKeyword: "Burettes Manufacturer in India",
    supportiveKeywords: [
      "Class A burette",
      "PTFE stopcock burette 50ml",
      "titration burette borosilicate",
      "Schellbach burette India",
      "calibrated volumetric burettes manufacturer",
      "borosilicate 3.3 laboratory burette supplier Boisar",
    ],
    title: "Precision Burettes Manufacturer in India | Class A Titration Burettes",
    description:
      "Nikam Scientific is a leading burettes manufacturer in India, fabricating Class A & B Borosilicate 3.3 titration burettes with PTFE or glass stopcocks. Request a quote.",
    faqs: [
      {
        q: "What accuracy class and calibration tolerances do Nikam Scientific burettes adhere to?",
        a: "Our burettes are precision-calibrated to ISO 385 and IS 1997 standards. Class A burettes offer tight volumetric tolerances (±0.05 ml on 50 ml capacity) with individual certification, while Class B models serve general educational titrations.",
      },
      {
        q: "Which stopcock design is recommended for acid-base titrations—PTFE or ground glass?",
        a: "We manufacture both straight-bore ground glass stopcocks and maintenance-free PTFE needle valve stopcocks. PTFE keys require zero grease, preventing bore contamination during sensitive analytical titrations with strong alkalis.",
      },
      {
        q: "Can Nikam Scientific supply Schellbach stripes or automatic zeroing burettes?",
        a: "Yes. We fabricate custom Schellbach reflection stripes (blue stripe on white background) that eliminate meniscus parallax error, as well as automatic zeroing burettes with bottom reservoir bottles. Explore complementary <a href='/products/measuring-volumetric-flasks'>volumetric flasks</a>.",
      },
      {
        q: "What are the standard order quantities and dispatch timelines for institutional buyers?",
        a: "As a direct manufacturer in Boisar, we accept bulk orders from universities and pharma testing labs with immediate dispatch. Inquire via our <a href='/contact-us'>contact portal</a> for factory-direct pricing.",
      },
    ],
  },

  pipettes: {
    focusKeyword: "Volumetric & Graduated Pipettes Manufacturer",
    supportiveKeywords: [
      "Class A pipettes India",
      "measuring pipettes borosilicate",
      "Mohr pipettes supplier",
      "serological pipette 10ml 25ml",
      "single mark bulb pipette manufacturer",
      "ISO 648 calibrated volumetric pipettes for pharma QA QC",
    ],
    title: "Volumetric & Graduated Pipettes Manufacturer | Nikam Scientific",
    description:
      "Buy ISO 648 Class A volumetric and graduated measuring pipettes directly from Nikam Scientific Co., trusted laboratory glassware manufacturer in India.",
    faqs: [
      {
        q: "What is the difference between Nikam Scientific volumetric transfer pipettes and graduated pipettes?",
        a: "Our volumetric transfer (bulb) pipettes conform to ISO 648 and are calibrated 'to deliver' (TD/Ex) a single precise volume (e.g., 10ml, 25ml, 50ml) with Class A accuracy. Our graduated measuring pipettes conform to ISO 835 for dispensing variable volumes.",
      },
      {
        q: "What markings and color-coding are used on your laboratory pipettes?",
        a: "Each pipette features durable amber or white enamel calibrations that remain legible after repetitive acid cleaning. Standard international color coding on the suction stem ensures rapid, error-free identification by lab technicians.",
      },
      {
        q: "Are these pipettes resistant to autoclave sterilization and aggressive chemicals?",
        a: "Yes, constructed strictly from low-expansion Borosilicate 3.3 glass, our pipettes endure repetitive steam sterilization at 121°C without volumetric drift, and resist hostile acids and solvents used in pharmaceutical QC.",
      },
      {
        q: "Can we request calibration certificates traceable to NABL reference standards?",
        a: "Yes, Class A pipettes can be accompanied by batch or individual calibration certificates traceable to national standards. Pair with our <a href='/products/burettes'>precision burettes</a> for complete volumetric analytical setups.",
      },
    ],
  },

  "measuring-volumetric-flasks": {
    focusKeyword: "Class A Volumetric Flasks Manufacturer",
    supportiveKeywords: [
      "measuring flasks borosilicate",
      "calibrated volumetric flask with stopper",
      "amber volumetric flask India",
      "ISO 1042 flasks manufacturer Boisar",
      "Class A volumetric flask 100ml 250ml 500ml",
      "pharmaceutical standard measuring flask supplier",
    ],
    title: "Class A Volumetric & Measuring Flasks Manufacturer | Nikam Scientific",
    description:
      "Nikam Scientific manufactures Class A Borosilicate 3.3 volumetric flasks conforming to ISO 1042 with penny head glass/PE stoppers. Get bulk institutional quotes.",
    faqs: [
      {
        q: "Which international standards govern Nikam Scientific Class A volumetric flasks?",
        a: "Our volumetric measuring flasks are manufactured strictly in compliance with ISO 1042 and Indian Standard IS 915. Each flask features an individually machine-etched calibration ring calibrated 'In' (TC) at 20°C or 27°C.",
      },
      {
        q: "Do you supply amber glass volumetric flasks for light-sensitive reagents?",
        a: "Yes, we produce low-actinic amber volumetric flasks that absorb harmful ultraviolet and short-wavelength light between 290nm and 450nm, protecting photo-sensitive compounds such as vitamins, silver salts, and APIs.",
      },
      {
        q: "What types of interchangeable stoppers are available?",
        a: "We offer interchangeable ground glass penny-head stoppers, solid PTFE stoppers, and leak-proof polyethylene (PE) snap-on stoppers matching standard joint sizes (10/19, 14/23, 19/26, 24/29). See our <a href='/products/standard-joints-stoppers-adapters'>stoppers catalog</a>.",
      },
      {
        q: "How should volumetric flasks be washed to maintain Class A precision?",
        a: "Avoid abrasive scouring and prolonged exposure to strong boiling alkalis. Mild laboratory detergent or acid washing followed by deionized water rinse and room temperature drying preserves volumetric accuracy. Read our detailed <a href='/blogs/maintaining-calibration-accuracy-in-volumetric-flasks'>calibration maintenance guide</a>.",
      },
    ],
  },

  "distillation-apparatus": {
    focusKeyword: "Laboratory Distillation Apparatus Manufacturer",
    supportiveKeywords: [
      "glass distillation assembly",
      "water distillation apparatus borosilicate",
      "vacuum distillation rig India",
      "essential oil distillation glassware",
      "borosilicate glass distillation set manufacturer Boisar",
      "solvent recovery distillation unit supplier",
    ],
    title: "Laboratory Distillation Apparatus Manufacturer & Supplier | Nikam Scientific",
    description:
      "Source high-purity Borosilicate 3.3 laboratory distillation apparatus and complete turnkey vacuum distillation rigs from Nikam Scientific Co. in India.",
    faqs: [
      {
        q: "What configurations of laboratory distillation apparatus do you manufacture?",
        a: "We manufacture standard single-stage water distillation setups, fractional distillation assemblies with <a href='/products/fractionating-columns'>Vigreux columns</a>, vacuum distillation rigs with receiver adapters, and specialized essential oil steam distillation units.",
      },
      {
        q: "What ground glass joint tolerances are used to ensure vacuum seal integrity?",
        a: "All connecting joints are precision diamond-ground to 1:10 standard taper (14/23, 19/26, 24/29, 29/32). This guarantees leak-proof, high-vacuum operation down to 0.1 mbar without vapor carryover.",
      },
      {
        q: "Can your distillation apparatus handle flammable and hostile solvents?",
        a: "Yes. Engineered from high-purity Borosilicate 3.3 glass, our units withstand high reflux temperatures, thermal cycling, and chemical attack from harsh acids, ethers, and aromatic solvents.",
      },
      {
        q: "Can custom condenser lengths or heating mantle capacities be accommodated?",
        a: "Yes. From 250ml laboratory analytical assemblies up to 20L pilot distillation set-ups, we customize flask sizes, condenser lengths, and thermometer pockets. Contact our engineers on <a href='/contact-us'>contact us</a>.",
      },
    ],
  },

  "distillation-apparatus-parts-condensers": {
    focusKeyword: "Laboratory Glass Condensers Manufacturer",
    supportiveKeywords: [
      "Liebig condenser manufacturer",
      "Graham coiled condenser India",
      "Allihn bulb reflux condenser",
      "Dimroth high efficiency glass condenser",
      "borosilicate distillation condensers supplier Boisar",
      "interchangeable ground joint condenser",
    ],
    title: "Laboratory Glass Condensers & Distillation Parts Manufacturer",
    description:
      "Nikam Scientific manufactures Borosilicate 3.3 laboratory glass condensers—Liebig, Allihn, Graham, Dimroth, and Friedrichs. Inquire for factory-direct prices.",
    faqs: [
      {
        q: "Which condenser design should I choose for reflux versus downward distillation?",
        a: "For vertical reflux, <strong>Allihn (bulb)</strong> or <strong>Dimroth (coiled)</strong> condensers maximize surface area and vapor turbulence. For downward distillation, <strong>Liebig (straight tube)</strong> or <strong>Graham (spiral inner tube)</strong> condensers provide rapid condensation without vapor trapping.",
      },
      {
        q: "What cooling water hose connection options are available?",
        a: "We supply detachable plastic screw-thread hose connectors (GL14) for maximum safety, as well as traditional integral glass serrated nozzles that securely grip standard 8mm to 10mm laboratory tubing.",
      },
      {
        q: "What is the thermal shock tolerance of Nikam Scientific condensers?",
        a: "Our Borosilicate 3.3 condensers withstand sudden temperature differentials (ΔT) of over 120°C, ensuring safety even when cold chilling fluid circulates around high-boiling vapor streams.",
      },
      {
        q: "Do you supply spare distillation adapters, receiver bends, and splash heads?",
        a: "Yes, we fabricate matching <a href='/products/still-heads-splash-heads'>still heads</a>, recovery bends, and vacuum receiver adapters in all standard ground joint sizes with immediate nationwide delivery.",
      },
    ],
  },

  "standard-joints-stoppers-adapters": {
    focusKeyword: "Interchangeable Ground Glass Joints & Adapters",
    supportiveKeywords: [
      "ground glass joints 14/23 24/29",
      "cone socket glass adapters",
      "PTFE interchangeable stoppers",
      "reduction expansion glass adapter India",
      "laboratory glass connectors manufacturer Boisar",
      "vacuum distillation adapters borosilicate",
    ],
    title: "Interchangeable Ground Glass Joints, Adapters & Stoppers Manufacturer",
    description:
      "Precision interchangeable taper ground glass joints, cones, sockets, reduction/expansion adapters, and stoppers manufactured by Nikam Scientific Co. in India.",
    faqs: [
      {
        q: "What taper standard and joint sizes does Nikam Scientific manufacture?",
        a: "Our ground joints strictly follow the international 1:10 taper standard in sizes 10/19, 14/23, 19/26, 24/29, 29/32, 34/35, 40/38, 45/40, and 55/44, ensuring seamless compatibility with global scientific glassware brands.",
      },
      {
        q: "What types of interchangeable adapters do you fabricate?",
        a: "We manufacture reduction adapters (larger socket to smaller cone), expansion adapters (smaller socket to larger cone), swan neck adapters, multiple-port receiver adapters, and vacuum take-off bends.",
      },
      {
        q: "Are the ground surfaces leak-tight without grease?",
        a: "For moderate vacuum applications, our ultra-fine precision grinding enables tight seals. For high-vacuum work or alkali solutions, we recommend PTFE sealing sleeves or PTFE stoppers available from our <a href='/products/miscellaneous-fitting'>fittings range</a>.",
      },
      {
        q: "Can custom angles, multi-neck headers, or non-standard tapers be made?",
        a: "Yes. Our skilled glassblowers fabricate custom joint configurations, T-adapters, and manifold connections from CAD drawings. Submit your specifications on our <a href='/contact-us'>contact page</a>.",
      },
    ],
  },

  flasks: {
    focusKeyword: "Laboratory Flasks Manufacturer in India",
    supportiveKeywords: [
      "conical flask Erlenmeyer",
      "round bottom boiling flask borosilicate",
      "flat bottom flask India",
      "two neck three neck reaction flask",
      "borosilicate 3.3 laboratory flasks manufacturer Boisar",
      "heavy duty chemical synthesis flask supplier",
    ],
    title: "Laboratory Flasks (Conical, Round Bottom, Multi-Neck) Manufacturer",
    description:
      "Buy high-grade Borosilicate 3.3 laboratory flasks—Erlenmeyer conical flasks, round bottom boiling flasks, and multi-neck reaction flasks from Nikam Scientific.",
    faqs: [
      {
        q: "What capacities and wall thicknesses are available for Nikam Scientific flasks?",
        a: "We manufacture flasks from 25ml up to 20,000ml (20 Litres) with reinforced uniform heavy walls designed to resist mechanical stress, vacuum pressure, and localized thermal shock during heating mantle use.",
      },
      {
        q: "Do you supply multi-neck reaction flasks for chemical synthesis?",
        a: "Yes. We engineer 2-neck, 3-neck, 4-neck, and 5-neck round bottom flasks with parallel or angled side necks in standard ground joint sizes (e.g., center 24/29, sides 19/26 or 14/23) for refluxing, stirring, and temperature monitoring.",
      },
      {
        q: "What graduation standards are printed on your conical Erlenmeyer flasks?",
        a: "Our conical flasks feature high-contrast, permanent white ceramic enamel graduations and matte marking spots that withstand repetitive acid washing and autoclave sterilization without fading.",
      },
      {
        q: "Can institutional buyers order flasks in custom batch quantities with fast delivery?",
        a: "Yes, as a direct factory manufacturer in Boisar (Maharashtra), we fulfill bulk procurement orders with break-free crate packaging across India. Pair with our <a href='/products/beakers'>borosilicate beakers</a>.",
      },
    ],
  },

  beakers: {
    focusKeyword: "Borosilicate Glass Beakers Manufacturer",
    supportiveKeywords: [
      "laboratory glass beakers",
      "low form Griffin beaker 250ml 500ml 1000ml",
      "tall form beaker borosilicate",
      "graduated laboratory beakers India",
      "ISO 3819 borosilicate 3.3 beakers supplier",
      "heavy duty heat resistant glass beaker Boisar",
    ],
    title: "Borosilicate Glass Beakers Manufacturer & Supplier in India",
    description:
      "Nikam Scientific manufactures ISO 3819 certified Borosilicate 3.3 glass beakers (low form Griffin & tall form) with spout and graduations. Inquire for bulk pricing.",
    faqs: [
      {
        q: "Which international standards do Nikam Scientific beakers comply with?",
        a: "Our beakers comply with ISO 3819 and DIN 12331 standards for low form (Griffin) and tall form geometry, featuring a flat, sturdy base and non-drip pouring spout for clean, safe liquid transfer.",
      },
      {
        q: "What is the maximum operating temperature for these beakers?",
        a: "Manufactured from genuine low-expansion Borosilicate 3.3 glass, our beakers have a strain point of 510°C and can be safely heated on hotplates or open flame (with wire gauze) up to 250°C in continuous operation.",
      },
      {
        q: "What capacities are standard in your catalog?",
        a: "We produce beakers from 5ml micro-beakers up to 10,000ml (10 Litres) industrial beakers, with 50ml, 100ml, 250ml, 500ml, 1000ml, and 2000ml sizes held in high stock volumes for rapid dispatch.",
      },
      {
        q: "How can pharma testing labs order bulk case lots?",
        a: "Contact our commercial sales department directly at <code>info@nikamscientific.com</code> or submit an inquiry through our <a href='/contact-us'>quote page</a> for competitive tier pricing and nationwide delivery.",
      },
    ],
  },

  "separating-dropping-funnels": {
    focusKeyword: "Separating & Dropping Funnels Manufacturer",
    supportiveKeywords: [
      "pear shape separating funnel",
      "cylindrical dropping funnel with stopper",
      "PTFE stopcock separatory funnel",
      "pressure equalizing dropping funnel India",
      "borosilicate chemical extraction funnels Boisar",
      "Gilson separating funnel manufacturer",
    ],
    title: "Separating & Dropping Funnels Manufacturer | Nikam Scientific",
    description:
      "Manufacturer of premium Borosilicate 3.3 pear-shaped separating funnels and pressure-equalizing dropping funnels with grease-free PTFE keys in India.",
    faqs: [
      {
        q: "What body shapes are available for Nikam Scientific separating funnels?",
        a: "We manufacture conical (Squibb / pear shape), spherical, and cylindrical separating funnels from 50ml to 10,000ml capacity, engineered for efficient phase separation with minimal meniscus hold-up at the stopcock bore.",
      },
      {
        q: "Do your dropping funnels feature pressure equalizing tubes for closed-system reactions?",
        a: "Yes. Our pressure-equalizing cylindrical dropping funnels feature an integral narrow-bore bypass tube connecting the receiver to the upper bulb, ensuring smooth, uninterrupted reagent addition under inert atmosphere or vacuum.",
      },
      {
        q: "What stopcock specifications ensure leak-free solvent extraction?",
        a: "We fit precision-ground glass keys or high-grade solid PTFE needle keys that offer zero chemical degradation, even when handling halogenated solvents like dichloromethane and chloroform. See complementary <a href='/products/flasks'>laboratory flasks</a>.",
      },
      {
        q: "How fast can bulk orders be delivered across Indian pharmaceutical hubs?",
        a: "We maintain ready stock of 100ml, 250ml, 500ml, and 1000ml funnels at our Boisar facility, shipping within 24–48 hours to pharma hubs in Gujarat, Maharashtra, Telangana, and Tamil Nadu via secure crating.",
      },
    ],
  },

  "fractionating-columns": {
    focusKeyword: "Fractionating Columns Manufacturer India",
    supportiveKeywords: [
      "Vigreux fractionating column",
      "packed distillation column glassware",
      "precision fractional distillation column",
      "silvered vacuum jacketed column India",
      "borosilicate fractionating column with joints Boisar",
      "Raschig ring packed glass column",
    ],
    title: "Precision Fractionating Columns (Vigreux & Packed) Manufacturer",
    description:
      "Nikam Scientific manufactures precision Borosilicate 3.3 Vigreux and packed fractionating distillation columns with interchangeable joints across India.",
    faqs: [
      {
        q: "What makes Nikam Scientific Vigreux columns highly efficient for fractional separation?",
        a: "Our Vigreux columns feature precisely spaced, angled indentations (flutes) pointing downward at uniform 45-degree angles, maximizing liquid-vapor contact area and theoretical plate count while minimizing liquid hold-up.",
      },
      {
        q: "Can fractionating columns be supplied with vacuum insulation jackets?",
        a: "Yes. For close-boiling mixtures and vacuum distillation, we manufacture silvered vacuum-jacketed columns with expansion bellows to eliminate heat loss to the ambient environment. Inquire at <a href='/contact-us'>contact us</a>.",
      },
      {
        q: "What packing materials are recommended for your plain packed columns?",
        a: "Our plain packed columns feature bottom glass indentations or sintered supports, compatible with glass Raschig rings, glass beads, Fenske helices, or stainless steel wire packing.",
      },
      {
        q: "What ground joint combinations and effective lengths are available?",
        a: "Standard effective lengths range from 150mm to 1000mm with 19/26, 24/29, or 29/32 interchangeable joints. Pair with our <a href='/products/distillation-apparatus-parts-condensers'>distillation condensers</a>.",
      },
    ],
  },

  stirrers: {
    focusKeyword: "Laboratory Glass Stirrers & Guides Manufacturer",
    supportiveKeywords: [
      "glass stirring rod borosilicate",
      "PTFE stirrer blade overhead guide",
      "vacuum gland glass stirrer guide",
      "paddle stirrer laboratory glassware India",
      "anchor type glass stirrer shaft Boisar",
      "chemical synthesis overhead agitator",
    ],
    title: "Laboratory Glass Stirrers, Rods & Stirrer Guides Manufacturer",
    description:
      "Buy Borosilicate 3.3 glass stirring rods, overhead stirrer shafts with PTFE paddles, and vacuum-tight stirrer guides manufactured by Nikam Scientific in India.",
    faqs: [
      {
        q: "What types of laboratory glass stirrers does Nikam Scientific manufacture?",
        a: "We manufacture simple glass stirring rods with fire-polished rounded ends, rubber-tipped policemen, overhead stirrer shafts with collapsible PTFE paddles, anchor-type glass stirrers, and precision ground stirrer guides.",
      },
      {
        q: "How does your vacuum stirrer guide prevent vapor leakage during chemical synthesis?",
        a: "Our precision stirrer guides feature a ground glass cone (e.g., 24/29, 29/32) with an integrated PTFE O-ring gland and screw-cap compression seal, ensuring smooth shaft rotation with vacuum integrity down to high vacuum levels.",
      },
      {
        q: "Are the glass shafts straight enough for high RPM motor operation?",
        a: "Yes. Every glass stirrer shaft is precision-aligned and straightened under optical tolerance checks to prevent vibration, wobbling, or ground joint wear when driven by overhead lab motors up to 1500 RPM.",
      },
      {
        q: "Can custom paddle diameters or length extensions be fabricated?",
        a: "Yes, we produce custom stirrer lengths from 200mm up to 1200mm to fit all sizes of reaction kettles and flasks. Inquire at our <a href='/contact-us'>quotation portal</a>.",
      },
    ],
  },

  "still-heads-splash-heads": {
    focusKeyword: "Distillation Still Heads & Splash Heads Glassware",
    supportiveKeywords: [
      "distillation still head manufacturer",
      "Kjeldahl splash head borosilicate",
      "Claisen distillation adapter India",
      "recovery bend distillation glassware",
      "anti-carryover splash head Boisar",
      "thermometer pocket distillation head",
    ],
    title: "Distillation Still Heads & Splash Heads Manufacturer | Nikam Scientific",
    description:
      "Source Borosilicate 3.3 distillation still heads, Kjeldahl splash heads, Claisen heads, and recovery bends with ground joints from Nikam Scientific Co. in India.",
    faqs: [
      {
        q: "What is the primary function of a Kjeldahl splash head in distillation?",
        a: "A Kjeldahl splash head contains an internal baffle bulb and curved tube that catches violent liquid droplets and aerosol spray from boiling mixtures, preventing alkaline or acidic carryover into the condenser and receiver.",
      },
      {
        q: "What joint angles are standard on your distillation still heads?",
        a: "Our standard still heads feature a 75-degree downward side arm designed to connect a vertical boiling flask directly to an inclined <a href='/products/distillation-apparatus-parts-condensers'>Liebig or Graham condenser</a>, with a top socket (14/23) for precision thermometer placement.",
      },
      {
        q: "Do you manufacture Claisen still heads for vacuum distillation?",
        a: "Yes, our Claisen still heads incorporate two parallel vertical necks, allowing simultaneous insertion of a vacuum bleeding capillary tube and a thermometer while preventing entrainment into the condenser.",
      },
      {
        q: "Are these heads compatible with all international glassware systems?",
        a: "Yes. Engineered to ISO 383 ground joint standards, our still heads integrate seamlessly with all standard taper equipment. Explore complete setups on our <a href='/products/distillation-apparatus'>distillation apparatus page</a>.",
      },
    ],
  },

  tube: {
    focusKeyword: "Laboratory Glass Tubes Manufacturer in India",
    supportiveKeywords: [
      "borosilicate test tubes bulk",
      "glass culture tubes with screw cap",
      "centrifuge tubes glass India",
      "chemical connection tubing borosilicate",
      "rimless test tubes manufacturer Boisar",
      "heavy wall boiling tubes supplier",
    ],
    title: "Laboratory Glass Tubes & Test Tubes Manufacturer | Nikam Scientific",
    description:
      "Nikam Scientific manufactures Borosilicate 3.3 laboratory test tubes, culture tubes with screw caps, and centrifuge tubes with rim or rimless finish in India.",
    faqs: [
      {
        q: "What glass grade is used in Nikam Scientific laboratory test tubes?",
        a: "We manufacture test tubes strictly from low-expansion Borosilicate 3.3 glass (not cheap soda-lime glass), offering high thermal shock resistance when heated over direct Bunsen burner flames and hydrolytic Class 1 chemical resistance.",
      },
      {
        q: "What tube styles, lengths, and diameters are available?",
        a: "Our catalog covers test tubes from 10x75mm up to 32x200mm boiling tubes, available with rounded beaded rims or rimless for robotic autosamplers, as well as round-bottom and conical-bottom centrifuge tubes.",
      },
      {
        q: "Do you supply screw-capped culture tubes with autoclavable liners?",
        a: "Yes, we produce GL-threaded culture tubes fitted with polypropylene or phenolic screw caps containing PTFE/silicone septa that withstand autoclave cycles up to 140°C without leakage.",
      },
      {
        q: "What are the packaging and minimum order quantities for bulk supply?",
        a: "Test tubes are packed in sturdy cellular carton dividers (100 to 500 pcs per carton) with bubble cushioning to ensure zero transit breakage across India. Inquire via our <a href='/contact-us'>contact page</a>.",
      },
    ],
  },

  bottles: {
    focusKeyword: "Reagent & Media Storage Bottles Manufacturer",
    supportiveKeywords: [
      "reagent bottles with screw cap",
      "amber glass media bottle GL45",
      "BOD bottles laboratory India",
      "wide mouth reagent bottle borosilicate",
      "autoclavable laboratory storage bottles Boisar",
      "chemical solution storage bottles manufacturer",
    ],
    title: "Reagent & Culture Media Storage Bottles Manufacturer | Nikam Scientific",
    description:
      "Buy Borosilicate 3.3 laboratory reagent bottles, GL45 media bottles, BOD bottles, and amber storage bottles manufactured by Nikam Scientific in India.",
    faqs: [
      {
        q: "What makes GL45 borosilicate media bottles suitable for microbiological media prep?",
        a: "Our GL45 bottles are crafted from low-expansion Borosilicate 3.3 glass with a drip-free pouring ring and heat-resistant polypropylene screw cap. They are fully autoclavable at 121°C and feature permanent white enamel volume graduations.",
      },
      {
        q: "Do you manufacture amber reagent bottles for light-sensitive chemicals?",
        a: "Yes. Our amber reagent bottles provide UV protection up to 500nm, preventing photochemical decomposition of light-sensitive reagents, titrants, and pharmaceutical active ingredients.",
      },
      {
        q: "What stopper options are available for narrow mouth and wide mouth bottles?",
        a: "We supply interchangeable ground glass stoppers (flat-head or penny-head), polypropylene screw caps with PTFE liners, and precision interchangeable stoppered BOD bottles for environmental water testing.",
      },
      {
        q: "Can institutional and pharmaceutical buyers order pallets with custom branding?",
        a: "Yes, we accommodate institutional bulk orders with customized volume printing or barcoding. Contact our sales team at <a href='/contact-us'>contact us</a> for formal quotations.",
      },
    ],
  },

  "gas-apparatus": {
    focusKeyword: "Gas Generation & Absorption Glass Apparatus",
    supportiveKeywords: [
      "Kipps apparatus glass manufacturer",
      "Drechsel gas washing bottle India",
      "gas sampling tubes borosilicate",
      "laboratory gas absorption apparatus Boisar",
      "borosilicate gas generator setup",
      "chemical gas analysis glassware supplier",
    ],
    title: "Gas Generation & Absorption Glass Apparatus Manufacturer | Nikam Scientific",
    description:
      "Nikam Scientific manufactures Borosilicate 3.3 Kipp's apparatus, Drechsel gas washing bottles, and custom gas sampling tubes for research laboratories in India.",
    faqs: [
      {
        q: "What capacities of Kipp's gas generation apparatus do you manufacture?",
        a: "We manufacture Kipp's apparatus in 250ml, 500ml, and 1000ml capacities from heavy-wall Borosilicate 3.3 glass, featuring ground glass connections and acid-resistant stopcocks for safe generation of H2S, CO2, and H2 gases.",
      },
      {
        q: "What types of gas washing and scrub bottles are available?",
        a: "We supply Drechsel gas washing bottles with sintered glass filter discs (porosity 1, 2, or 3) or plain bubbler tubes in 125ml, 250ml, and 500ml sizes, designed to purify and dry gas streams in analytical setups.",
      },
      {
        q: "Can custom gas sampling tubes with PTFE valves be manufactured?",
        a: "Yes, we fabricate custom gas sampling tubes with straight-bore or two-way high-vacuum PTFE stopcocks and silicone septum ports for GC gas injection. See our <a href='/our-work'>custom fabrication projects</a>.",
      },
      {
        q: "How safe are your gas apparatus assemblies under moderate gas pressure?",
        a: "Every unit is flame-annealed in computer-controlled lehrs to remove all internal thermal stresses and hydrostatically tested to ensure safe operation during typical laboratory gas evolution.",
      },
    ],
  },

  "chromatography-apparatus": {
    focusKeyword: "Chromatography Columns & Reservoirs Manufacturer",
    supportiveKeywords: [
      "glass chromatography column with frit",
      "PTFE stopcock chromatography column India",
      "flash chromatography reservoir column",
      "TLC developing tank borosilicate Boisar",
      "preparative chromatography glass columns",
      "chemical purification glass column supplier",
    ],
    title: "Glass Chromatography Columns & Reservoirs Manufacturer | Nikam Scientific",
    description:
      "Source Borosilicate 3.3 chromatography columns with sintered frits, PTFE stopcocks, and flash reservoirs from Nikam Scientific Co. in India.",
    faqs: [
      {
        q: "What sintered disc porosities are used in Nikam Scientific chromatography columns?",
        a: "Our chromatography columns are fitted with Porosity 0, 1, 2, or 3 sintered glass discs that securely retain silica gel or alumina stationary phases without clogging or shedding fibers into the eluent.",
      },
      {
        q: "Do you manufacture flash chromatography columns with interchangeable ground joint reservoirs?",
        a: "Yes. We engineer flash columns with top spherical or socket joints (e.g., 24/29, 29/32) and separate solvent reservoirs, allowing positive air/nitrogen pressure to be applied for rapid compound separation.",
      },
      {
        q: "What stopcock types are used to control eluent flow rate?",
        a: "We fit high-precision PTFE needle valve stopcocks that allow micro-adjustment of drop rates without contaminating organic solvent fractions with stopcock grease.",
      },
      {
        q: "What column diameters and lengths can be ordered?",
        a: "Standard internal diameters range from 10mm to 80mm with effective lengths from 150mm to 1000mm. Custom preparative sizes up to 150mm diameter can be manufactured upon request via <a href='/contact-us'>our quote desk</a>.",
      },
    ],
  },

  "miscellaneous-fitting": {
    focusKeyword: "Custom Laboratory Glass Fittings & Connectors",
    supportiveKeywords: [
      "laboratory glass connectors",
      "borosilicate glass manifolds India",
      "two way three way glass stopcocks",
      "vacuum hose connector borosilicate Boisar",
      "T-shape Y-shape glass tubing connector",
      "interchangeable glass joints and taps supplier",
    ],
    title: "Custom Laboratory Glass Fittings & Connectors Manufacturer | Nikam Scientific",
    description:
      "Nikam Scientific fabricates custom Borosilicate 3.3 laboratory glass fittings—manifolds, connectors, taps, T/Y adapters, and vacuum adapters in India.",
    faqs: [
      {
        q: "What glass connectors and fittings does Nikam Scientific specialize in?",
        a: "We fabricate straight, T-shape, Y-shape, and U-shape glass connectors, vacuum manifolds with multiple stopcocks, threaded GL connectors, and cone-to-hose reduction connectors in Borosilicate 3.3 glass.",
      },
      {
        q: "Can custom vacuum manifolds be built for Schlenk line synthesis?",
        a: "Yes. We engineer dual-bank and single-bank Schlenk vacuum manifolds with high-vacuum PTFE or glass hollow plugs, inert gas inlet ports, and precision ground joints tailored to your fume hood dimensions.",
      },
      {
        q: "What tubing sizes do your serrated glass hose adapters fit?",
        a: "Our hose connectors feature precision-formed serrations that grip standard 6mm, 8mm, 10mm, and 12mm silicone, PVC, or rubber tubing, ensuring vacuum-tight and leak-proof gas and water circulation.",
      },
      {
        q: "Can we order non-standard adapters manufactured from sample sketches?",
        a: "Yes. Custom glassblowing from customer sketches or sample components is a core competency of our Boisar factory. Submit details at <a href='/contact-us'>contact us</a>.",
      },
    ],
  },

  "miscellaneous-apparatus": {
    focusKeyword: "Specialized Scientific Glass Apparatus Manufacturer",
    supportiveKeywords: [
      "Soxhlet extraction apparatus glass",
      "Dean Stark moisture apparatus India",
      "arsenic determination glass setup",
      "custom scientific glass apparatus Boisar",
      "borosilicate reaction apparatus supplier",
      "bespoke laboratory glassware fabrication India",
    ],
    title: "Specialized Scientific Laboratory Glass Apparatus Manufacturer",
    description:
      "Manufacturer of specialized Borosilicate 3.3 laboratory apparatus—Soxhlet extractors, Dean Stark traps, and Arsenic determination setups in India.",
    faqs: [
      {
        q: "What specialized analytical extraction apparatus do you manufacture?",
        a: "We manufacture complete Soxhlet extraction apparatus (extractor, Allihn condenser, boiling flask from 50ml to 5000ml), Dean-Stark water estimation traps, and Kuderna-Danish concentrators.",
      },
      {
        q: "Do you fabricate apparatus for government standard test methods (IS, ASTM, IP)?",
        a: "Yes. We manufacture glass assemblies adhering to specific ASTM, IP, and Indian Standard (IS) methods, including Arsenic determination apparatus, distillation apparatus for petroleum products, and nitrogen determination units.",
      },
      {
        q: "How do your master glassblowers ensure dimensional accuracy on complex apparatus?",
        a: "Complex assemblies are built using specialized lathe chucks and graphite mandrels, followed by polariscope optical inspection and stress-relieving annealing in electric lehrs to eliminate residual glass tension.",
      },
      {
        q: "How can research scientists order bespoke glassware prototypes?",
        a: "Send your technical CAD drawings, sketches, or component photos to <code>info@nikamscientific.com</code> or reach out via our <a href='/our-work'>custom work portal</a> for direct engineer consultation.",
      },
    ],
  },

  // ==================== 4 LABORATORY EQUIPMENTS ====================
  "laboratory-ovens": {
    focusKeyword: "Laboratory Hot Air Oven Manufacturer in India",
    supportiveKeywords: [
      "hot air oven manufacturer Boisar",
      "industrial drying oven digital",
      "forced convection lab oven 250C",
      "stainless steel 304 laboratory oven India",
      "pharmaceutical hot air oven supplier",
      "thermostatic laboratory drying chamber",
    ],
    title: "Laboratory Hot Air Ovens & Industrial Drying Ovens Manufacturer",
    description:
      "Nikam Scientific manufactures heavy-duty digital laboratory hot air ovens and industrial drying ovens (up to 250°C) with PID temperature control in India.",
    faqs: [
      {
        q: "What temperature range and accuracy do Nikam Scientific laboratory ovens deliver?",
        a: "Our hot air ovens operate from ambient +5°C up to 250°C (with optional high-temp models to 300°C), controlled by digital microprocessor PID controllers with PT100 sensors achieving ±0.5°C control accuracy.",
      },
      {
        q: "What construction materials are used for the chamber and exterior?",
        a: "The interior chamber is fabricated from corrosion-resistant SS 304 stainless steel with adjustable perforated shelves. The exterior is heavy-gauge mild steel finished in anti-corrosive powder coating, separated by 75mm thick ceramic mineral wool insulation.",
      },
      {
        q: "Does the oven feature forced air circulation for uniform temperature distribution?",
        a: "Yes, our forced-air convection models feature a dynamic motorized blower fan with aerodynamically designed internal air ducts, ensuring uniform heat distribution across all shelf levels.",
      },
      {
        q: "What standard chamber capacities are available for institutional procurement?",
        a: "Standard models range from 45 Litres up to 340 Litres (custom walk-in models available upon request). Contact our technical team on <a href='/contact-us'>contact us</a> for formal quotations and technical specs.",
      },
    ],
  },

  "lab-water-bath": {
    focusKeyword: "Laboratory Water Bath Manufacturer in India",
    supportiveKeywords: [
      "constant temperature water bath",
      "serological water bath supplier India",
      "digital thermostatic water bath Boisar",
      "double walled stainless steel water bath",
      "laboratory incubation water bath manufacturer",
      "tissue culture water bath supplier",
    ],
    title: "Precision Laboratory Water Baths Manufacturer in India | Nikam Scientific",
    description:
      "Buy digital thermostatic and serological laboratory water baths with seamless SS 304 chambers from Nikam Scientific Co., trusted manufacturer in India.",
    faqs: [
      {
        q: "What temperature range and stability do your laboratory water baths maintain?",
        a: "Our thermostatic water baths operate from ambient +5°C up to 99.9°C with ±0.2°C temperature uniformity, driven by digital PID temperature indicators and immersion tubular heating elements.",
      },
      {
        q: "Is the internal tank seamless to prevent leaks and rust formation?",
        a: "Yes. The inner chamber is deep-drawn from a single sheet of heavy-gauge SS 304 stainless steel with rounded internal corners, completely eliminating welds, leaks, and bacterial crevices.",
      },
      {
        q: "What cover options are supplied with the water bath?",
        a: "We provide removable stainless steel concentric ring lids for flask heating or gabled stainless steel pyramid lids that channel condensation back into the bath without dripping onto sample tubes.",
      },
      {
        q: "What chamber sizes and tube rack capacities are available?",
        a: "We offer 6-liter, 12-liter, 18-liter, and 24-liter capacities with custom test tube and flask racks. Request a commercial quotation at our <a href='/contact-us'>quote page</a>.",
      },
    ],
  },

  "bod-incubator": {
    focusKeyword: "BOD Incubator Manufacturer in India",
    supportiveKeywords: [
      "biochemical oxygen demand incubator",
      "refrigerated laboratory incubator India",
      "low temperature BOD incubator chamber Boisar",
      "digital microbiological incubator supplier",
      "environmental testing BOD incubator manufacturer",
      "CFC-free cooling laboratory incubator",
    ],
    title: "BOD Incubator Manufacturer & Supplier in India | Nikam Scientific",
    description:
      "Nikam Scientific manufactures precision refrigerated BOD Incubators (5°C to 60°C) with hermetically sealed CFC-free cooling for environmental and pharma labs.",
    faqs: [
      {
        q: "What temperature range is supported by Nikam Scientific BOD incubators?",
        a: "Our BOD incubators cover a wide operating range from 5°C to 60°C with ±0.5°C accuracy, making them ideal for standard 20°C biochemical oxygen demand (BOD) incubation, seed germination, and stability testing.",
      },
      {
        q: "What refrigeration system is utilized for low-temperature cooling?",
        a: "We utilize heavy-duty, hermetically sealed Emerson/Tecumseh compressors with eco-friendly, CFC-free R134a refrigerant, copper cooling coils, and automatic defrost cycles for continuous 24/7 reliability.",
      },
      {
        q: "Does the unit have an internal viewing door for sample inspection without thermal loss?",
        a: "Yes. Every BOD incubator incorporates a full-view toughened transparent acrylic inner door behind the outer insulated magnetic door, allowing sample inspection without disturbing chamber temperature.",
      },
      {
        q: "What chamber capacities are standard?",
        a: "Capacities include 100L, 175L, 280L, and 340L models with adjustable stainless steel wire mesh shelves. Inquire for institutional tender pricing on our <a href='/contact-us'>contact portal</a>.",
      },
    ],
  },

  autoclave: {
    focusKeyword: "Laboratory Steam Sterilizer Autoclave Manufacturer",
    supportiveKeywords: [
      "vertical autoclave manufacturer in India",
      "laboratory steam sterilizer Boisar",
      "high pressure autoclave 121C",
      "stainless steel 304 autoclave supplier",
      "hospital and microbiological autoclave manufacturer",
      "vertical pressure steam sterilizer India",
    ],
    title: "Laboratory Steam Sterilizer Autoclave Manufacturer | Nikam Scientific",
    description:
      "Nikam Scientific manufactures vertical laboratory steam sterilizers and high-pressure autoclaves (up to 121°C / 15 psi) with SS 304 chambers across India.",
    faqs: [
      {
        q: "What operating pressure and temperature does the autoclave maintain?",
        a: "Our vertical autoclaves operate at 15 to 22 psi pressure corresponding to 121°C to 126°C sterilization temperature, ensuring 100% biological destruction of spores, bacteria, and viral pathogens.",
      },
      {
        q: "What safety mechanisms are engineered into the autoclave vessel?",
        a: "Safety features include a spring-loaded safety valve, dead-weight pressure relief valve, vacuum release valve, hydraulic pressure test certification at 30 psi, and an automatic low-water level heater cut-off switch.",
      },
      {
        q: "What grade of stainless steel is used for the lid and chamber?",
        a: "Both the inner sterilization chamber and the heavy-duty radial locking lid are forged from thick-gauge SS 304 or SS 316 grade stainless steel with high-temperature food-grade silicone gaskets.",
      },
      {
        q: "How can laboratories, hospitals, and biotech firms place orders?",
        a: "We supply standard sizes from 22 Litres to 150 Litres nationwide across India with complete hydrostatic test certificates. Submit your inquiry on our <a href='/contact-us'>quote page</a>.",
      },
    ],
  },

  // ==================== 6 INDUSTRIAL PROCESSING UNITS ====================
  "pipeline-components": {
    focusKeyword: "Industrial Glass Pipeline Components Manufacturer",
    supportiveKeywords: [
      "borosilicate glass pipe fittings",
      "industrial glass bends and tees India",
      "glass pipeline couplings and reducers Boisar",
      "corrosion proof glass pipeline systems",
      "PTFE gasket industrial glass flange coupling",
      "chemical process glass piping manufacturer",
    ],
    title: "Industrial Glass Pipeline Components & Couplings Manufacturer | Nikam Scientific",
    description:
      "Nikam Scientific manufactures corrosion-proof Borosilicate 3.3 industrial glass pipeline components, bends, tees, reducers, and PTFE couplings across India.",
    faqs: [
      {
        q: "What pipe diameters and lengths are standard for Nikam Scientific glass pipelines?",
        a: "We manufacture Borosilicate 3.3 glass pipeline sections from DN 15 (1/2 inch) up to DN 300 (12 inch) nominal diameter, in standard spool lengths from 100mm up to 2000mm, conforming to DIN ISO 3587.",
      },
      {
        q: "What coupling system is used to connect glass pipes securely without stress?",
        a: "We supply stainless steel or cast iron backing flange couplings with PTFE envelope gaskets and compression spring washers that absorb thermal expansion and pipe vibrations while maintaining a leak-proof seal.",
      },
      {
        q: "What are the chemical and temperature limitations of industrial glass piping?",
        a: "Our borosilicate pipelines withstand boiling concentrated acids (HCl, HNO3, H2SO4) up to 200°C continuous service, and full vacuum conditions down to 0.1 mbar.",
      },
      {
        q: "Can turnkey pipeline layouts be engineered from factory P&ID drawings?",
        a: "Yes. Our engineering team calculates spool lengths, expansion joints, and support brackets directly from your plant drawings. View completed installations on <a href='/our-work'>our work gallery</a>.",
      },
    ],
  },

  vessels: {
    focusKeyword: "Industrial Borosilicate Glass Process Vessels Manufacturer",
    supportiveKeywords: [
      "spherical glass reaction vessels 50L 100L 200L",
      "cylindrical glass process kettle India",
      "jacketed glass reactor vessel Boisar",
      "pilot plant chemical synthesis vessel",
      "borosilicate 3.3 industrial vessel manufacturer",
      "corrosion proof glass reaction vessel supplier",
    ],
    title: "Industrial Borosilicate Glass Process Vessels (Up to 200L) Manufacturer",
    description:
      "Source spherical and cylindrical Borosilicate 3.3 industrial glass process vessels (5L to 200L) and jacketed reactors from Nikam Scientific Co. in India.",
    faqs: [
      {
        q: "What vessel capacities and geometries does Nikam Scientific manufacture?",
        a: "We manufacture spherical process vessels from 5 Litres up to 200 Litres, as well as cylindrical vessels and jacketed reaction kettles fitted with bottom drain valves and multi-port top covers.",
      },
      {
        q: "Can your glass vessels operate under deep vacuum and elevated temperatures?",
        a: "Yes. Every vessel is manufactured from uniform heavy-wall Borosilicate 3.3 glass engineered for full vacuum operation down to 0.1 mbar and maximum operating temperatures up to 200°C with thermal shock ΔT up to 100°C.",
      },
      {
        q: "What nozzle configurations can be built onto the vessel head?",
        a: "We customize top covers with multiple DN nozzles for overhead <a href='/products/stirrers-2'>agitator drives</a>, condenser reflux lines, liquid feed funnels, solids charging ports, and thermowells.",
      },
      {
        q: "How are large glass vessels shipped and installed safely across India?",
        a: "Vessels 50L and larger are packed in foam-lined, shockproof structural wooden crates and delivered with dedicated freight handlers nationwide. Submit project requirements at <a href='/contact-us'>contact us</a>.",
      },
    ],
  },

  "heat-exchangers": {
    focusKeyword: "Borosilicate Glass Heat Exchangers & Condensers Manufacturer",
    supportiveKeywords: [
      "coil type glass heat exchanger India",
      "shell and tube glass condenser Boisar",
      "corrosive acid glass heat exchanger manufacturer",
      "industrial borosilicate 3.3 condenser",
      "chemical process heat exchanger supplier India",
      "vent condenser glass pilot plant",
    ],
    title: "Borosilicate Glass Heat Exchangers & Condensers Manufacturer | Nikam Scientific",
    description:
      "Nikam Scientific manufactures high-efficiency Borosilicate 3.3 coil-type and shell-and-tube glass heat exchangers for aggressive chemical distillation in India.",
    faqs: [
      {
        q: "What heat exchanger configurations does Nikam Scientific fabricate?",
        a: "We fabricate <strong>Coil Type Condensers</strong> (vapor on shell side, coolant in internal glass coil) from 0.2 m² up to 15 m² surface area, as well as <strong>Shell & Tube Heat Exchangers</strong> with glass shells and PTFE/tantalum/hastelloy tubes.",
      },
      {
        q: "Why is borosilicate glass preferred for condensing corrosive acid vapors?",
        a: "Unlike stainless steel or exotic alloys that suffer pitting and chloride stress corrosion cracking, Borosilicate 3.3 glass is 100% immune to corrosion from hot hydrochloric, sulfuric, and nitric acid fumes.",
      },
      {
        q: "What is the maximum coolant pressure allowed in the coil?",
        a: "Our glass cooling coils are pressure-tested to withstand up to 3.0 bar gauge coolant operating pressure, compatible with industrial chilled water and brine circulation systems.",
      },
      {
        q: "Can replacement coils or custom headers be retrofitted to existing plants?",
        a: "Yes, we manufacture interchangeable replacement glass condensers matching all standard European and Indian plant dimensions. Request technical sizing assistance via <a href='/contact-us'>our inquiry desk</a>.",
      },
    ],
  },

  "column-components": {
    focusKeyword: "Industrial Glass Distillation Column Components",
    supportiveKeywords: [
      "packed distillation column sections India",
      "column feed pipe section borosilicate Boisar",
      "reflux divider glass column component",
      "bubble cap glass column sections manufacturer",
      "industrial borosilicate column supplier",
      "chemical fractionating column assembly",
    ],
    title: "Industrial Glass Distillation Column Components & Sections Manufacturer",
    description:
      "Manufacture of Borosilicate 3.3 industrial glass column components, pipe sections, feed adapters, reflux dividers, and packing supports by Nikam Scientific in India.",
    faqs: [
      {
        q: "What column diameters and section lengths are available?",
        a: "We manufacture column pipe sections from DN 50 (2 inch) up to DN 300 (12 inch) nominal diameter in standard lengths of 500mm, 1000mm, and 1500mm with precision ground flat or spherical ends.",
      },
      {
        q: "What internal components and supports do you supply for packed columns?",
        a: "We manufacture heavy-duty glass packing support grids, liquid redistribution trays, vapor feed sections with dip pipes, and magnetic or motorized reflux dividers.",
      },
      {
        q: "Can your column sections be insulated with silvered vacuum jackets?",
        a: "Yes. For vacuum distillation and high-temperature fractionation where heat loss must be minimized, we engineer silvered vacuum-jacketed column sections with expansion bellows.",
      },
      {
        q: "How do these components assemble with process vessels and condensers?",
        a: "They connect seamlessly using standard backing flanges and PTFE envelope gaskets to our <a href='/products/vessels'>process vessels</a> and <a href='/products/heat-exchangers'>heat exchangers</a>, forming complete turnkey distillation pilot plants.",
      },
    ],
  },

  "sight-glass": {
    focusKeyword: "Industrial Glass Sight Glass & Flow Indicators Manufacturer",
    supportiveKeywords: [
      "tubular sight glass borosilicate India",
      "visual flow indicator manufacturer Boisar",
      "double window sight glass chemical industry",
      "high pressure borosilicate sight glass tube",
      "inline sight flow indicator supplier",
      "corrosion proof sight glass for pipelines",
    ],
    title: "Industrial Sight Glass & Visual Flow Indicators Manufacturer | Nikam Scientific",
    description:
      "Nikam Scientific manufactures heavy-wall Borosilicate 3.3 tubular sight glasses and inline visual flow indicators for chemical process pipelines across India.",
    faqs: [
      {
        q: "What is the pressure rating and thermal limit of Nikam Scientific tubular sight glasses?",
        a: "Our tubular sight glasses are precision-cut from heavy-wall Borosilicate 3.3 tubing and flame-annealed to operate under working pressures up to 3 bar gauge (depending on diameter) and service temperatures up to 200°C.",
      },
      {
        q: "What sizes are available to fit industrial pipelines?",
        a: "We produce standard nominal bores from DN 15 (1/2 inch) up to DN 150 (6 inch) in lengths from 100mm to 500mm, compatible with both glass and metal pipeline flange standards.",
      },
      {
        q: "Do you supply protective metallic cages or acrylic shielding?",
        a: "Yes, for added plant safety in high-traffic production areas, we supply sight glass assemblies enclosed in slotted stainless steel or transparent polycarbonate protective shields.",
      },
      {
        q: "Can sight glasses with internal PTFE rotating impellers or drip lips be ordered?",
        a: "Yes, we fabricate visual flow indicators with internal PTFE flap indicators or drip nozzles to visually confirm fluid flow velocity even with clear liquids. Contact us at <a href='/contact-us'>contact us</a>.",
      },
    ],
  },

  "stirrers-2": {
    focusKeyword: "Industrial Glass Stirrers & Agitators Manufacturer",
    supportiveKeywords: [
      "industrial glass agitator shaft India",
      "anchor stirrer borosilicate pilot plant",
      "pitched blade glass impeller Boisar",
      "mechanical seal glass stirrer drive",
      "corrosion proof industrial reaction agitator",
      "borosilicate 3.3 stirrer for chemical reactor",
    ],
    title: "Industrial Glass Stirrers & Reaction Agitators Manufacturer | Nikam Scientific",
    description:
      "Buy industrial Borosilicate 3.3 glass stirrers, anchor agitators, pitched-blade impellers, and drive assemblies from Nikam Scientific Co. in India.",
    faqs: [
      {
        q: "What impeller geometries do you fabricate for industrial glass vessels?",
        a: "We manufacture Borosilicate 3.3 anchor agitators for high-viscosity heat transfer, pitched-blade turbine impellers for vigorous liquid-liquid mixing, and hydrofoil impellers for gas dispersion in vessels up to 200L.",
      },
      {
        q: "How is the glass stirrer shaft driven and sealed at high RPM?",
        a: "The upper end of the glass shaft is coupled to a precision metal drive arbor that passes through a water-cooled double mechanical seal or magnetic drive, ensuring complete vapor containment under full vacuum up to 400 RPM.",
      },
      {
        q: "Is the glass agitator fully resistant to corrosive slurry abrasion?",
        a: "Yes. Solid Borosilicate 3.3 glass offers superior surface smoothness and hardness that resists chemical pitting and abrasive wear from chemical slurries and crystalline suspensions.",
      },
      {
        q: "Can custom shaft lengths and shaft diameters be manufactured to replace broken stirrers?",
        a: "Yes. We frequently fabricate replacement glass stirrer shafts matching exact dimensions of existing European or Indian pilot reactors. Submit shaft drawings at <a href='/contact-us'>contact us</a>.",
      },
    ],
  },
};

/**
 * Generate B2B Product JSON-LD Schema
 */
export function getProductSchema(product: {
  slug: string;
  name: string;
  image: string;
  categoryName: string;
  shortDesc: string;
}, seoData: ItemSeoData) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${SITE_URL}/products/${product.slug}/#product`,
    name: product.name,
    image: `${SITE_URL}${product.image}`,
    description: seoData.description,
    sku: `NS-${product.slug.toUpperCase().slice(0, 10)}`,
    mpn: seoData.mpn || `MPN-${product.slug.toUpperCase()}`,
    brand: {
      "@type": "Brand",
      name: "Nikam Scientific",
    },
    manufacturer: {
      "@id": `${SITE_URL}/#organization`,
    },
    category: product.categoryName,
    itemCondition: "https://schema.org/NewCondition",
    material: product.categoryName.includes("Glassware") || product.categoryName.includes("Industrial")
      ? "Borosilicate 3.3 Glass"
      : "Stainless Steel / Mild Steel",
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "INR",
      lowPrice: seoData.priceRange?.low || "250",
      highPrice: seoData.priceRange?.high || "50000",
      offerCount: "10",
      priceValidUntil: "2027-12-31",
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
      seller: {
        "@id": `${SITE_URL}/#organization`,
      },
      description: "Available for institutional quotation, bulk manufacturing, and custom scientific fabrication",
    },
  };
}

/**
 * Generate BreadcrumbList JSON-LD Schema
 */
export function getProductBreadcrumbSchema(
  productName: string,
  productSlug: string,
  categoryName: string,
  categorySlug: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: categoryName,
        item: `${SITE_URL}/${categorySlug}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: productName,
        item: `${SITE_URL}/products/${productSlug}`,
      },
    ],
  };
}

/**
 * Generate FAQPage JSON-LD Schema
 */
export function getFaqPageSchema(faqs: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a.replace(/<[^>]*>/g, ""), // strip HTML tags for clean schema text
      },
    })),
  };
}

/**
 * Generate Category CollectionPage Schema
 */
export function getCategorySchema(
  categorySlug: string,
  categoryTitle: string,
  description: string,
  products: Array<{ name: string; slug: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${SITE_URL}/${categorySlug}/#collection`,
    url: `${SITE_URL}/${categorySlug}`,
    name: categoryTitle,
    description: description,
    isPartOf: {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
    },
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: products.map((p, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: p.name,
        url: `${SITE_URL}/products/${p.slug}`,
      })),
    },
  };
}

/**
 * Breadcrumb Schema for Category Pages
 */
export function getCategoryBreadcrumbSchema(categoryName: string, categorySlug: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: categoryName,
        item: `${SITE_URL}/${categorySlug}`,
      },
    ],
  };
}

/**
 * Central Category SEO Data (Focus keyword, supportive keywords, SERP meta, and 4 bespoke FAQs)
 */
export const CATEGORY_SEO_DATA: Record<
  string,
  {
    focusKeyword: string;
    supportiveKeywords: string[];
    title: string;
    description: string;
    categoryName: string;
    faqs: FAQItem[];
  }
> = {
  "laboratory-glassware": {
    focusKeyword: "Laboratory Glassware Manufacturer in India",
    supportiveKeywords: [
      "borosilicate 3.3 laboratory glassware India",
      "scientific glass apparatus supplier Mumbai Boisar",
      "custom laboratory glassware fabrication",
      "Class A volumetric glassware ISO standard",
      "laboratory boiling flasks beakers condensers manufacturer",
      "industrial scientific glassware exporter",
    ],
    title: "Laboratory Glassware Manufacturer & Supplier in India",
    description:
      "Nikam Scientific is India's premier manufacturer of Borosilicate 3.3 laboratory glassware. ISO-certified volumetric, distillation, and custom glass apparatus with nationwide B2B delivery.",
    categoryName: "Laboratory Glassware",
    faqs: [
      {
        q: "What types of laboratory glassware does Nikam Scientific manufacture?",
        a: "We manufacture a comprehensive portfolio of Borosilicate 3.3 laboratory glassware including Class A volumetric items (<a href='/products/measuring-volumetric-flasks'>volumetric flasks</a>, <a href='/products/pipettes'>pipettes</a>, <a href='/products/burettes'>burettes</a>), distillation systems (<a href='/products/distillation-apparatus'>distillation apparatus</a>, <a href='/products/distillation-apparatus-parts-condensers'>condensers</a>, <a href='/products/still-heads-splash-heads'>still heads</a>), general laboratory glass (<a href='/products/beakers'>beakers</a>, <a href='/products/flasks'>flasks</a>, <a href='/products/tube'>test tubes</a>), and custom-fabricated reaction vessels.",
      },
      {
        q: "What glass grade and calibration standards are used in your glassware?",
        a: "All our laboratory glassware is fabricated strictly from low-expansion 3.3 borosilicate glass conforming to ISO 3585 and DIN 12217 standards. Our Class A volumetric items meet DIN EN ISO 1042 / ISO 4788 tolerances and include batch or individual calibration certificates upon request. Learn more on our <a href='/our-work'>quality and calibration page</a>.",
      },
      {
        q: "Can Nikam Scientific manufacture custom or non-standard glassware from drawings?",
        a: "Yes. With over 30 years of specialized scientific glassblowing expertise at our Boisar manufacturing facility, we engineer custom glass apparatus from technical sketches, CAD drawings, or sample parts for pharmaceutical R&D, chemical plants, and testing labs. Inquire via our <a href='/contact-us'>contact page</a>.",
      },
      {
        q: "How can B2B buyers and institutions order in bulk across India?",
        a: "Educational institutions, testing labs, and industrial corporations can request competitive quotation sheets and scheduled dispatches. All shipments feature multi-layer cellular packaging and wooden crating to ensure zero transit breakage across all Indian states.",
      },
    ],
  },

  "laboratory-equipments": {
    focusKeyword: "Laboratory Equipments Manufacturer in India",
    supportiveKeywords: [
      "scientific laboratory equipment supplier India",
      "laboratory ovens BOD incubator manufacturer",
      "laboratory water baths autoclaves Boisar",
      "analytical instruments equipment supplier Mumbai",
      "pharmaceutical lab equipment dealer",
      "research laboratory heating sterilization devices",
    ],
    title: "Laboratory Equipments Manufacturer & Supplier in India",
    description:
      "Explore high-precision laboratory equipments manufactured and supplied by Nikam Scientific in India. Digital laboratory ovens, BOD incubators, water baths, and autoclaves.",
    categoryName: "Laboratory Equipments",
    faqs: [
      {
        q: "What range of laboratory equipment does Nikam Scientific supply?",
        a: "We engineer and supply essential benchtop and floor-standing scientific instruments including forced-air <a href='/products/laboratory-ovens'>laboratory ovens</a>, thermostatic <a href='/products/lab-water-bath'>lab water baths</a>, refrigerated <a href='/products/bod-incubator'>BOD incubators</a>, and heavy-duty steam <a href='/products/autoclave'>autoclaves</a> designed for research and quality control laboratories.",
      },
      {
        q: "Are your laboratory instruments calibrated and certified for compliance?",
        a: "Yes. All Nikam Scientific laboratory equipment is manufactured under ISO quality protocols, featuring precise PID temperature controllers and digital sensor displays. Factory calibration certificates and electrical safety validation reports accompany equipment shipments upon request. Learn more on our <a href='/our-work'>quality standards page</a>.",
      },
      {
        q: "How does Nikam Scientific ensure warranty and after-sales service support across India?",
        a: "We provide a comprehensive 1-year manufacturer warranty on all heating, incubation, and sterilization units, backed by an inventory of genuine replacement parts and technical support from our engineering team in Boisar, Maharashtra. Inquire on our <a href='/contact-us'>contact page</a> for maintenance assistance.",
      },
      {
        q: "Can these instruments be bundled with laboratory glassware for turnkey lab setups?",
        a: "Yes! Many educational colleges, pharmaceutical laboratories, and chemical QA facilities order integrated bundles—pairing our laboratory ovens and water baths with <a href='/laboratory-glassware'>borosilicate reaction glassware</a> and customized stands. Request a turnkey quote via our <a href='/contact-us'>RFQ portal</a>.",
      },
    ],
  },

  "industrial-processing-unit": {
    focusKeyword: "Industrial Glass Processing Units Manufacturer in India",
    supportiveKeywords: [
      "borosilicate 3.3 industrial glass plant India",
      "industrial glass pipeline manufacturer Boisar",
      "glass reaction distillation vessels manufacturer",
      "corrosion resistant chemical process equipment",
      "pilot plant glass assembly supplier Mumbai",
      "industrial glass pipeline components exporter",
    ],
    title: "Industrial Glass Processing Units Manufacturer in India",
    description:
      "Nikam Scientific engineers Borosilicate 3.3 industrial glass processing units, glass pipelines, reaction vessels, heat exchangers, and pilot plant setups for chemical & pharma plants.",
    categoryName: "Industrial Processing Unit",
    faqs: [
      {
        q: "What industrial glass processing units and assemblies do you engineer?",
        a: "We manufacture turnkey Borosilicate 3.3 process plants including modular <a href='/products/pipeline-components'>glass pipeline components</a>, spherical <a href='/products/vessels'>reaction vessels</a>, coil and shell-and-tube <a href='/products/heat-exchangers'>heat exchangers</a>, <a href='/products/column-components'>column components</a>, <a href='/products/sight-glass'>sight glasses</a>, and heavy-duty <a href='/products/stirrers-2'>industrial stirrers</a> ranging up to DN300 diameter.",
      },
      {
        q: "Why is Borosilicate 3.3 glass preferred for chemical processing plants?",
        a: "Borosilicate 3.3 offers near-total chemical inertness against aggressive mineral acids, halogens, and organic solvents (except HF and hot concentrated caustic solutions), smooth non-porous surfaces preventing cross-contamination, visual monitoring of fluid dynamics, and superior thermal shock resilience up to 200°C.",
      },
      {
        q: "Do you provide structural support frames and PTFE gaskets for glass assemblies?",
        a: "Yes. Every processing unit comes with heavy-duty tubular stainless steel (SS304 / SS316) or epoxy-coated mounting structures, virgin PTFE envelope gaskets, and flexible PTFE bellows to accommodate vibration and thermal expansion in accordance with industrial safety norms.",
      },
      {
        q: "Does Nikam Scientific handle onsite assembly, commissioning, and custom skid design?",
        a: "Yes, our senior glass engineers collaborate directly with plant managers to fabricate skid-mounted units matching available ceiling heights and pipeline orientations. We provide technical supervision, site commissioning, and pressure testing across India. Inquire via our <a href='/contact-us'>contact page</a>.",
      },
    ],
  },
};

