import React from 'react'
import style from "./TrainingPlanPage.module.css"
import TrainingPlanCard from '../../components/TrainingPlanCard/TrainingPlanCard'

function TrainingPlanPage() {
  return (
    <section className={style.container}>
      <h1 className={style.header}>
        Training Plans
      </h1>
    <section className={style.wrapper}>
      <TrainingPlanCard />
    </section>
    </section>
  )
}

export default TrainingPlanPage