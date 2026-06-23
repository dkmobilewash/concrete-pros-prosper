/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://concreteprosofprosper.com',
  generateRobotsTxt: true,
  changefreq: 'monthly',
  priority: 0.7,
  exclude: ['/privacy-policy', '/terms-of-service'],
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/', disallow: ['/api/', '/privacy-policy', '/terms-of-service'] },
    ],
    additionalSitemaps: [],
  },
  additionalPaths: async (config) => [
    { loc: '/', priority: 1.0, changefreq: 'weekly' },
    { loc: '/services', priority: 0.9, changefreq: 'monthly' },
    { loc: '/services/driveways', priority: 0.9, changefreq: 'monthly' },
    { loc: '/services/patios', priority: 0.9, changefreq: 'monthly' },
    { loc: '/services/pool-decks', priority: 0.9, changefreq: 'monthly' },
    { loc: '/services/block-walls', priority: 0.9, changefreq: 'monthly' },
    { loc: '/services/foundations-slabs', priority: 0.9, changefreq: 'monthly' },
    { loc: '/services/commercial-concrete', priority: 0.9, changefreq: 'monthly' },
    { loc: '/gallery', priority: 0.8, changefreq: 'weekly' },
    { loc: '/contact', priority: 0.9, changefreq: 'monthly' },
    { loc: '/service-areas/windsong-ranch', priority: 0.8, changefreq: 'monthly' },
    { loc: '/service-areas/star-trail', priority: 0.8, changefreq: 'monthly' },
    { loc: '/service-areas/whitley-place', priority: 0.8, changefreq: 'monthly' },
    { loc: '/service-areas/gentle-creek-estates', priority: 0.8, changefreq: 'monthly' },
    { loc: '/service-areas/tanners-mill', priority: 0.8, changefreq: 'monthly' },
    { loc: '/service-areas/lakes-of-prosper', priority: 0.8, changefreq: 'monthly' },
    { loc: '/service-areas/frontier-estates', priority: 0.8, changefreq: 'monthly' },
    { loc: '/service-areas/prosper-trail', priority: 0.8, changefreq: 'monthly' },
  ],
}
