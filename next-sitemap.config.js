module.exports = {
  siteUrl: "https://www.andreassvoboda.com/",
  generateRobotsTxt: true,
  additionalPaths: async () => [
    {
      loc: "/board-executive-advisory",
      changefreq: "monthly",
      priority: 0.8,
      lastmod: new Date().toISOString(),
    },
  ],
};
