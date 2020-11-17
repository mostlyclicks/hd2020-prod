const path = require('path')

exports.createPages = async ({graphql, actions}) => {
  const { createPage } = actions

  //Query all Pages with IDs
  const pages = await graphql(`
      {
        allPrismicPage {
          nodes {
            uid
            id
          }
        }
      }
  `)
  
  //Set path for page templates
  const pageTemplate = path.resolve('./src/templates/PageTemplate.js')
  
  //Create pages each Page 
  pages.data.allPrismicPage.nodes.forEach((node) => {
    console.log(pages)
    createPage({
      path: `/${node.uid}`,
      component: pageTemplate,
      context: {
        uid: node.uid,
      },
    })
  })
}