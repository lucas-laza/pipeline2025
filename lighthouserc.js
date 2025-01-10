module.exports = {
  ci: {
    collect: {
      staticDistDir: './web',

      startServerCommand: 'php -S 127.0.0.1:8080 -t web > server.log 2>&1 &',

      url: [
        'http://127.0.0.1:8080', 
      ],

      numberOfRuns: 3,
    },
    assert: {
      assertions: {
        'categories:performance': ['error', { minScore: 0.8 }], // Performance ≥ 80%
        'categories:accessibility': ['error', { minScore: 0.9 }], // Accessibilité ≥ 90%
        'categories:best-practices': ['error', { minScore: 0.85 }], // Bonnes pratiques ≥ 85%
        'categories:seo': ['error', { minScore: 0.9 }], // SEO ≥ 90%
      },
    },
    upload: {
      // Stockage des rapports Lighthouse
      target: 'temporary-public-storage',
      // target: 'filesystem',
      // outputDir: './lighthouse-reports',
    },
  },
};
