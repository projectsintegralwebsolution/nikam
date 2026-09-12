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
};

export default nextConfig;
