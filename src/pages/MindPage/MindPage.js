import React from 'react'
import DeskScene from '../../components/DeskScene/DeskScene'
import { Helmet } from 'react-helmet-async'


function MindPage() {
  return (
    <>
    <Helmet>
    <title>Desk</title>
        <meta
          name="description"
          content="3d Desk overview"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Desk" />
        <meta
          property="og:description"
          content="3d Desk overview"
        />
    </Helmet>
    <div style={{backgroundColor:"black"}}>
    <DeskScene />
    </div>
    </>
  )
}

export default MindPage