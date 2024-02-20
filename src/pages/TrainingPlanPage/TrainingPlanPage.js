import React from 'react'
import style from "./TrainingPlanPage.module.css"
import TrainingPlanCard from '../../components/TrainingPlanCard/TrainingPlanCard'

function TrainingPlanPage() {
  return (
    <section className={style.wrapper}>
      <TrainingPlanCard />
    </section>
  )
}

export default TrainingPlanPage