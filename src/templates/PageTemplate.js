import React from 'react'
import { graphql } from 'gatsby'
import { RichText } from 'prismic-reactjs'

const PageTemplate = ({data}) => {

  console.log(data.allPrismicPage.edges[0])

  const pageData = data.allPrismicPage.edges[0]
  const pageTitle = pageData.node.data.page_title.text
  const pageBody = pageData.node.data.body[0].primary.text.html

  return (
    <div>
      <h1>{pageTitle}</h1>
      <h3>HTML</h3>
      
      <div dangerouslySetInnerHTML={{__html: pageBody }} />
    
    </div>
  )
}

export default PageTemplate


export const query = graphql`
  query PageQuery($uid: String) {
    allPrismicPage(filter: {uid: {eq: $uid}}) {
      edges {
        node {
          uid
          data {

            body {
              ... on PrismicPageBodyText {
                primary {
                  text {
                    html
                  }
                }
              }
            }

            page_title {
              text
              html
            }
            
          }
        }
      }
    }
  }
`