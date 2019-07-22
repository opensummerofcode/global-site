module.exports = {
  siteMetadata: {
    title: `open Summer of Code`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    menuLinks:[
            {
               name:'home',
               link:'/'
            },
            {
               name:'About',
               link:'/page-2'
            },
            {
              name:'Take a look!',
              link:'/page-2'
           },
           {
            name:'Contact',
            link:'/page-2'
         }
          ]
  },
  plugins: [ {
    resolve: 'gatsby-plugin-web-font-loader',
    options: {
      google: {
        families: ['Open Sans', 'Montserrat']
      }
    }
  },
    `gatsby-plugin-react-helmet`,
    { 
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    
    
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
