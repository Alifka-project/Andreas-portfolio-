module.exports = {
  siteUrl: "https://andreassvoboda.com/",
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
