import React from 'react'
import style from "./ExtraInfoPage.module.css"
import ExtraInfoForm from '../../components/ExtraInfoForm/ExtraInfoForm'
import DNA from "../../assets/videos/DNA.mp4"

function ExtraInfoPage() {
  return (
    <section className={style.wrapper}>
        <ExtraInfoForm />
        <video className={style.video} src={DNA}  autoPlay loop muted/>
    </section>
  )
}

export default ExtraInfoPage