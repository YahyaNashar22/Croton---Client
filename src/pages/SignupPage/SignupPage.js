import React from 'react'
import style from "./SignupPage.module.css"
import SignupForm from '../../components/SignupForm/SignupForm'
import animatedGym from "../../assets/images/Gym.gif"

function SignupPage() {
  return (
    <div className={style.container}>
    <SignupForm />
    <img className={style.img} src={animatedGym} alt='Gym' height={'900px'}/>
    </div>
  )
}

export default SignupPage