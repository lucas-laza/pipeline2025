module.exports = {
  ci: {
    collect: {
      // Répertoire contenant les fichiers statiques (optionnel si non utilisé en mode statique)
      staticDistDir: './web', // Assurez-vous que ce chemin correspond au répertoire de votre site.

      // Commande pour démarrer le serveur local
      startServerCommand: 'php -S 127.0.0.1:8080 -t web > server.log 2>&1 &',

      // Liste des URLs à tester avec Lighthouse
      url: [
        'http://127.0.0.1:8080', // Page d'accueil de Drupal
      ],

      // Nombre de fois où chaque URL est analysée
      numberOfRuns: 3,
    },
    assert: {
      // Définition des seuils de qualité pour chaque catégorie Lighthouse
      assertions: {
        'categories:performance': ['error', { minScore: 0.8 }], // Performance ≥ 80%
        'categories:accessibility': ['error', { minScore: 0.9 }], // Accessibilité ≥ 90%
        'categories:best-practices': ['error', { minScore: 0.85 }], // Bonnes pratiques ≥ 85%
        'categories:seo': ['error', { minScore: 0.9 }], // SEO ≥ 90%
      },
    },
    upload: {
      // Stockage des rapports Lighthouse
      target: 'temporary-public-storage', // Utilisé pour tests temporaires
      // Optionnel : ajoutez un serveur spécifique pour stocker vos rapports si nécessaire
      // target: 'filesystem',
      // outputDir: './lighthouse-reports',
    },
  },
};
