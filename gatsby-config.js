const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'MX Web',
    author: '@MXWeb_',
    description: 'Portfolio site for Max Hammond',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'MX Web | Design & Development',
        short_name: 'MX Web',
        start_url: '/',
        background_color: '#1b1f22',
        theme_color: '#C6FF01',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-image'
  ],
}
