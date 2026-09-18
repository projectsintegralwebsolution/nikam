/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'nikamscientific.com',
      },
      {
        protocol: 'https',
        hostname: 'demo.bravisthemes.com',
      },
    ],
  },
  async rewrites() {
    const productSlugs = [
      'burettes',
      'pipettes',
      'measuring-volumetric-flasks',
      'tube',
      'distillation-apparatus-parts-condensers',
      'standard-joints-stoppers-adapters',
      'flasks',
      'still-heads-splash-heads',
      'miscellaneous-fitting',
      'stirrers',
      'separating-dropping-funnels',
      'fractionating-columns',
      'distillation-apparatus',
      'chromatography-apparatus',
      'beakers',
      'bottles',
      'gas-apparatus',
      'miscellaneous-apparatus',
      'laboratory-ovens',
      'lab-water-bath',
      'bod-incubator',
      'autoclave',
      'pipeline-components',
      'vessels',
      'stirrers-2',
      'heat-exchangers',
      'column-components',
      'sight-glass'
    ];

    const demo2Rule = {
      source: '/demo-2/:path*',
      destination: '/:path*',
    };

    const productRewrites = productSlugs.map(slug => ({
      source: `/${slug}`,
      destination: `/products/${slug}`,
    }));

    return [demo2Rule, ...productRewrites];
  },
  async redirects() {
    return [
      { source: '/SPACERS.php', destination: '/pipeline-components', permanent: true },
      { source: '/spacers.php', destination: '/pipeline-components', permanent: true },
      { source: '/PIPELINE_COMPONENTS.php', destination: '/pipeline-components', permanent: true },
      { source: '/pipeline_components.php', destination: '/pipeline-components', permanent: true },
      { source: '/MEASURING_VOLUMETRIC_FLASKS.php', destination: '/measuring-volumetric-flasks', permanent: true },
      { source: '/measuring_volumetric_flasks.php', destination: '/measuring-volumetric-flasks', permanent: true },
      { source: '/DISTILLATION_APPARATUS_PARTS_CONDENSERS.php', destination: '/distillation-apparatus-parts-condensers', permanent: true },
      { source: '/distillation_apparatus_parts_condensers.php', destination: '/distillation-apparatus-parts-condensers', permanent: true },
      { source: '/gallery.php', destination: '/our-work', permanent: true },
      { source: '/Gallery.php', destination: '/our-work', permanent: true },
      { source: '/90_BENDS_WITH_THERMOMETER_BRANCH.php', destination: '/pipeline-components', permanent: true },
      { source: '/90_bends_with_thermometer_branch.php', destination: '/pipeline-components', permanent: true },
      { source: '/STILL_HEADS_SPLASH_HEADS.php', destination: '/still-heads-splash-heads', permanent: true },
      { source: '/still_heads_splash_heads.php', destination: '/still-heads-splash-heads', permanent: true },
      { source: '/LABORATORY_GLASSWARE.php', destination: '/laboratory-glassware', permanent: true },
      { source: '/laboratory_glassware.php', destination: '/laboratory-glassware', permanent: true },
      { source: '/Y_PIECES.php', destination: '/pipeline-components', permanent: true },
      { source: '/y_pieces.php', destination: '/pipeline-components', permanent: true },
      { source: '/about.php', destination: '/about-us', permanent: true },
      { source: '/About.php', destination: '/about-us', permanent: true },
      { source: '/BEAKERS.php', destination: '/beakers', permanent: true },
      { source: '/beakers.php', destination: '/beakers', permanent: true },
      { source: '/UNEQUAL_CROSS_PIECES.php', destination: '/pipeline-components', permanent: true },
      { source: '/unequal_cross_pieces.php', destination: '/pipeline-components', permanent: true },
      { source: '/MISCELLANEOUS_APPARATUS.php', destination: '/miscellaneous-apparatus', permanent: true },
      { source: '/miscellaneous_apparatus.php', destination: '/miscellaneous-apparatus', permanent: true },
      { source: '/TUBES.php', destination: '/tube', permanent: true },
      { source: '/tubes.php', destination: '/tube', permanent: true },
      { source: '/JACKETED_PIPE_SECTIONS.php', destination: '/pipeline-components', permanent: true },
      { source: '/jacketed_pipe_sections.php', destination: '/pipeline-components', permanent: true },
      { source: '/MISCELLANEOUS_FITTING.php', destination: '/miscellaneous-fitting', permanent: true },
      { source: '/miscellaneous_fitting.php', destination: '/miscellaneous-fitting', permanent: true },
      { source: '/HEAT_EXCHANGERS.php', destination: '/heat-exchangers', permanent: true },
      { source: '/heat_exchangers.php', destination: '/heat-exchangers', permanent: true },
      { source: '/CLOSUERS_GLASS.php', destination: '/pipeline-components', permanent: true },
      { source: '/closuers_glass.php', destination: '/pipeline-components', permanent: true },
      { source: '/SIGHT_GLASS.php', destination: '/sight-glass', permanent: true },
      { source: '/sight_glass.php', destination: '/sight-glass', permanent: true },
      { source: '/DISTLLATION_APPARARUS.php', destination: '/distillation-apparatus', permanent: true },
      { source: '/distllation_appararus.php', destination: '/distillation-apparatus', permanent: true },
      { source: '/DISTILLATION_APPARATUS.php', destination: '/distillation-apparatus', permanent: true },
      { source: '/distillation_apparatus.php', destination: '/distillation-apparatus', permanent: true },
      { source: '/COLUMN_COMPONENTS.php', destination: '/column-components', permanent: true },
      { source: '/column_components.php', destination: '/column-components', permanent: true },
      { source: '/INDUSTRIAL_PROCESSING_UNIT.php', destination: '/industrial-processing-unit', permanent: true },
      { source: '/industrial_processing_unit.php', destination: '/industrial-processing-unit', permanent: true },
      { source: '/STIRRERS.php', destination: '/stirrers', permanent: true },
      { source: '/stirrers.php', destination: '/stirrers', permanent: true },
      { source: '/contact.php', destination: '/contact-us', permanent: true },
      { source: '/Contact.php', destination: '/contact-us', permanent: true },
      { source: '/VESSELS.php', destination: '/vessels', permanent: true },
      { source: '/vessels.php', destination: '/vessels', permanent: true },
      { source: '/ROTARY_FILM_EVAPORATOR.php', destination: '/distillation-apparatus', permanent: true },
      { source: '/rotary_film_evaporator.php', destination: '/distillation-apparatus', permanent: true },
    ];
  },
};

export default nextConfig;
