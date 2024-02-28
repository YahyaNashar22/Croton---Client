import React from 'react'
import style from "./NutritionCenterHero.module.css"

function NutritionCenterHero() {
  return (
    <div className={style.wrapper}>
        <h1 className={style.header}>
            Welcome To Our Nutrition Center
        </h1>
        <p className={style.description}>
            Nourishment is integral to the success of your fitness journey. Providing the energy, nutrients and hydration necessary for effective workouts, recovery and overall well being.
        </p>
    </div>
  )
}

export default NutritionCenterHero