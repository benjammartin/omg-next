const withSass = require('@zeit/next-sass')

module.exports = withSass({
  experimental: {
    async rewrites() {
      console.log('ok')
      return [
        { source: '/:uid', destination: '/category/:uid' },
      ];
    },
  },
})