import React from 'react'
import GymScene from '../../components/GymScene/GymScene'
import { Helmet } from 'react-helmet-async'

function BodyPage() {

  return (
    <>
    <Helmet>
    <title>Gym</title>
        <meta
          name="description"
          content="3d gym overview"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Gym" />
        <meta
          property="og:description"
          content="3d Gym overview"
        />
    </Helmet>
        <GymScene />
    </>
  )
}

export default BodyPage