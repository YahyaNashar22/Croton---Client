import React from 'react'
import style from "./LoginPage.module.css"
import LoginForm from "../../components/LoginForm/LoginForm.js"
import animatedBookShop from "../../assets/images/Bookshop.gif"


function LoginSignup() {
  return (
    <section className={style.wrapper}>
      <div className={style.container}>
      <LoginForm />
      <img className={style.img} src={animatedBookShop} alt='book shop' height={'700px'} />
      </div>
    </section>
  )
}

export default LoginSignup