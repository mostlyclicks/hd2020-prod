import React from "react"
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Layout from "../layout"
import Header from '../header/header'
import Footer from '../footer'

import ProgressNotes from "../components/utility/progressNotes"
import SliceZone from '../components/sliceZone'
import styled from "styled-components"




export const query = graphql`
{
  allPrismicHomepage {
    edges {
      node {
        data {
          body {
            slice_type
            primary {
              hero_content
              hero_title {
                text
                type
              }
              hero_background_image {
                url
              }
              intro_image {
                url
              }
              text_block {
                text
                type
              }
            }
            
          }
        }
      }
    }
  }
}
`

export default function Home(props) {

  const homeBody = props.data.allPrismicHomepage.edges[0].node.data.body

console.log(homeBody)

  return (
    <>
    <Helmet>
      <title>Hulse Dental - Onalaska WI</title>
    </Helmet>
      <Layout>
        <Header />
          <SliceZone body={homeBody} />
          <ProgressNotes />
      </Layout>
    </>
  )
}

