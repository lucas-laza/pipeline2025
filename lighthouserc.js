module.exports = {
  ci: {
    collect: {
      staticDistDir: './web', // Ensure this points to the correct directory.
      url: ['http://127.0.0.1:8080'], // Explicitly list the URLs to test.
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
