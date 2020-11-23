import React from "react"
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
    <Layout>
    <div>{msg}</div>
    <NewMessage color="black" children="Hulse Dental">
      <p>Index</p>

      <h3>Todo: 11/16 - 11/23</h3>
      <ul>
        <li>Create Layout</li>
        <li>Add Layout to index</li>
        <li>Add Helmet</li>
        <li>Add Helmet to Layout</li>
        <li>Add Layout to Page template</li>
        <li>Prismic - create home single</li>
        <li>Push to hosting</li>
      </ul>
    </NewMessage>
    </Layout>
    

  )
}
