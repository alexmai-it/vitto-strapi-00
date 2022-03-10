module.exports = ({ env }) => ({
    // gestore sitemap
    'sitemap': {
      enabled: true,
      config: {
        autoGenerate: true,
        allowedFields: ['id', 'uid'],
        excludedTypes: [],
      },
    },
    // ext SEO per articoli
    seo: {
        enabled: true,
      },
  });