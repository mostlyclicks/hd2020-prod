require('dotenv').config({
  path: `.env`,
})

const prismicHtmlSerializer = require('./src/gatsby/htmlSerializer')

module.exports = {
  plugins: [
    `gatsby-plugin-styled-components`,
    // `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-source-prismic', 
      options: {
        repositoryName: 'hd01',
        accessToken: `${process.env.PRISMIC_API_KEY}`,
        // Get the correct URLs in blog posts
        // linkResolver: () => (page) => `/${page.uid}`,
        // PrismJS highlighting for labels and slices
        htmlSerializer: () => prismicHtmlSerializer,
        // Remove this config option if you only have one language in your Prismic repository
        lang: 'en-us',
        schemas: {
          page: require('./src/schemas/page.json'),
          //home_page: require('./src/schemas/home_page.json')
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `montserrat\:300,700`,
        ]
      }
    }

  ],
}


// amily=Montserrat:wght@300;700&display=swap');