module.exports = (env) => ({
  resourceMatcher: /\.tele\.(js|ts)$/,
  requestEndpoint: 'http://localhost:3000/tele/',
  resolverBasePath: './server/',
})
