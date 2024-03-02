import React from 'react'
import style from "./NutritionCenterPage.module.css"
import NutritionCenterHero from '../../components/NutritionCenterHero/NutritionCenterHero'
import CalculateTEE from '../../components/CalculateTEE/CalculateTEE'
import CalculateBMR from '../../components/CalcuateBMR/CalculateBMR'
import KnowAF from '../../components/KnowAF/KnowAF'
import PrepareDietPlan from '../../components/PrepareDietPlan/PrepareDietPlan'
import CarbsProtLip from '../../components/CarbsProtLip/CarbsProtLip'
import CalculateIdealWeight from '../../components/CalculateIdealWeight/CalculateIdealWeight'
import CalculateProteinNeeds from '../../components/CalculateProteinNeeds/CalculateProteinNeeds'

function NutritionCenterPage() {
  return (
    <section className={style.wrapper}>
      <NutritionCenterHero />
      <CalculateTEE />
      <CalculateBMR />
      <KnowAF />
      <PrepareDietPlan />
      <CarbsProtLip />
      <CalculateIdealWeight />
      <CalculateProteinNeeds />
    </section>
  )
}

export default NutritionCenterPage