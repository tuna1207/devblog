require(`dotenv`).config({
  path: `.env`,
})
const path = require(`path`)

module.exports = {
  siteMetadata: {
    // Used for the title template on pages other than the index site
    siteTitle: `TuNA`,
    // Default title of the page
    siteTitleAlt: `TuNA Blog`,
    // Can be used for e.g. JSONLD
    siteHeadline: `TuNA Blog`,
    // Will be used to generate absolute URLs for og:image etc.
    siteUrl: `https://thetuna.tech`,
    // Used for SEO
    siteDescription: `TuNA's Typography driven, feature-rich blogging with minimal aesthetics.`,
    author: `TuNA`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      options: {
        navigation: [
          // {
          //   title: `Blog`,
          //   slug: `/blog`,
          // },
          {
            title: `About`,
            slug: `/about`,
          },
          {
            title: `Contact`,
            slug: '/contact',
          },
        ],
        externalLinks: [
          {
            name: `LinkedIn`,
            url: `https://www.linkedin.com/in/nguyen-anh-tu-1a171b123`,
          },
          {
            name: `GitHub`,
            url: `https://github.com/tunguyenbhtech`,
          },
        ],
        showThemeAuthor: false,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `tuna - blog`,
        short_name: `minimal-blog`,
        description: `TuNA's Typography driven, feature-rich blogging with minimal aesthetics.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    {
      resolve: "gatsby-plugin-webpack-bundle-analyser-v2",
      options: {
        // devMode: true,
        disable: true,
      },
    },
  ],
}
