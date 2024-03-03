import React from 'react'
import style from "./TrainingPlanPage.module.css"
import TrainingPlanCard from '../../components/TrainingPlanCard/TrainingPlanCard'
import { Helmet } from 'react-helmet-async'

function TrainingPlanPage() {
  return (
    <>
        <Helmet>
    <title>Training plans</title>
        <meta
          name="description"
          content={`A Collection Of Training Plans To Suit Your Goals`}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content={`Training plans`} />
        <meta
          property="og:description"
          content={`A Collection Of Training Plans To Suit Your Goals`}
        />
    </Helmet>
    <section className={style.container}>
      <h1 className={style.header}>
        Training Plans
      </h1>
    <section className={style.wrapper}>
      <TrainingPlanCard />
    </section>
    </section>
    </>
  )
}

export default TrainingPlanPage