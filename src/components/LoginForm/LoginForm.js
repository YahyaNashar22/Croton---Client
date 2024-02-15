import React from 'react'
import style from "./LoginForm.module.css"
import { userCredentialsStore } from '../../store';

function LoginForm() {

const {email, password} = userCredentialsStore();
const handleChange = (e)=>{
  const {name, value} = e.target;
  userCredentialsStore.setState({[name]:value})
}

  return (
    <section className={style.wrapper}>
        <h1 className={style.header}>
          Log in To See The Wonders !
        </h1>
        <p className={style.subHeader}>
          Kindly Enter Your Details Below
        </p>
      <from className={style.container} method="POST">
        <label className={style.label}>
          Email
          <input className={style.inp} placeholder='enter your email' type='email' name='email' onChange={handleChange} />
        </label>
        <label className={style.label}>
          Password
          <input className={style.inp} placeholder='enter your password' type='password' name='password' onChange={handleChange} />
        </label>
      </from>
    </section>
  )
}

export default LoginForm