module.exports = {
  ci: {
    collect: {
      staticDistDir: './web', // Adjust this path to your build directory
      // Other configurations
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
