import React from "react"
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Layout from "../layout"
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
            primary {
              hero_content
              hero_title {
                text
                type
              }
            }
            slice_type
          }
        }
      }
    }
  }
}
`

export default function Home(props) {

  const homeBody = props.data.allPrismicHomepage.edges[0].node.data.body[0]

  return (
    <>
    <Helmet>
      <title>Hulse Dental - Onalaska WI</title>
    </Helmet>
    
    <Layout>
      <SliceZone body={homeBody} />
      <ProgressNotes />
    </Layout>
    </>
  )
}
