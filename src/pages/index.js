import React from "react"
import { Helmet } from 'react-helmet'
import Layout from "../layout"

export default function Home() {

  const msg = "Hulse Dental Project"

  const NewMessage = ({color, children}) => {
    return (
      
      <h1 style={{color: `${color}`}}>
        {children}
      </h1>
      
    )
  }

  return (
    <>
    <Helmet>
      <title>Hulse Dental - Onalaska WI</title>
    </Helmet>
    
    <Layout>
    <div>{msg}</div>
    <NewMessage color="black" children="Hulse Dental">
      <p>Index</p>

      <h3>Todo: 11/16 - 11/23</h3>
      <ul>
        <li><strike>Create Layout</strike></li>
        <li><strike>Add Layout to index</strike></li>
        <li><strike>Add Helmet</strike></li>
        <li><strike>Add Helmet to Layout</strike></li>
        <li><strike>Add Layout to Page template</strike></li>
        <li>Prismic - create home single</li>
        <li><strike>Push to hosting</strike></li>
      </ul>
    </NewMessage>
    </Layout>
    </>
    

  )
}
