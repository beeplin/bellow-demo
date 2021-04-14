module.exports = (env) => ({
  resourceMatcher: /\.tele\.(js|ts)$/,
  requestEndpoint: 'http://localhost:3000/__tele__',
  resolverBasePath: './server/src',
})
