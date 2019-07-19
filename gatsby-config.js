/**
 * Configure your Gatsby site with this file.
 * siteMetadata here override config in theme/gatsby-config.js
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Gatsby Theme Ultronele Demo",
    author: `liwenzhi`,
    description: `Ultronele - the Fastest Elearning Engine in the world`,
    siteUrl: `https://ultronele.netlify.com`,
    signiture: `Robin w li`,
    logoImg:`/logo_ultronele.png`,
    social: {
      twitter: `lwz75121`,
    },
    menus: [
      {name: 'HOME', url: '/'},
      {name: 'PRODUCT', url: '/product'},
      {name: 'SERVICE', url: '/service'},
      {name: 'USER GUIDE', url: '/userguide'},
      {name: 'ROADMAP', url: '/roadmap'},
      {name: 'TEAM', url: '/team'},
    ] 
  },
  plugins: [
    {
      resolve: "gatsby-theme-ultronele",
      options: {
        // contentPath: `content`
      }
    }
  ],
}
