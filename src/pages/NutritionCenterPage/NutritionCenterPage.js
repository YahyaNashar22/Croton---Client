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
import { Helmet } from 'react-helmet-async'


function NutritionCenterPage() {
  return (
    <>
    <Helmet>
    <title>Nutrition Center</title>
        <meta
          name="description"
          content="Nutriction Center and facts about a healthier diet plan, how to calculate your daily macro needs, your ideal weight, you BMR and TEE"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Nutrition Center" />
        <meta
          property="og:description"
          content="Nutriction Center and facts about a healthier diet plan, how to calculate your daily macro needs, your ideal weight, you BMR and TEE"
        />
    </Helmet>
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
    </>
  )
}

export default NutritionCenterPage