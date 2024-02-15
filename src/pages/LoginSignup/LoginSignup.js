import React from 'react'
import style from "./LoginSignup.module.css"
import LoginForm from "../../components/LoginForm/LoginForm.js"
import SignupForm from "../../components/SignupForm/SignupForm.js"


function LoginSignup() {
  return (
    <section className={style.wrapper}>
      <LoginForm />
    </section>
  )
}

export default LoginSignup