const path = require('path');

const siteAddress = new URL("https://www.zyhong.studio")

module.exports = {
  siteMetadata: {
    title: `Zyhong Liu`,
    description: `Zyhong Studio`,
    author: `@zyhong`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: path.join(__dirname, `src`, `markdown`),
      },
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "www.zyhong.studio",
        acl: null,
        protocol: siteAddress.protocol.slice(0, -1),
        hostname: siteAddress.hostname,
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
          siteUrl: siteAddress.href.slice(0, -1),
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
