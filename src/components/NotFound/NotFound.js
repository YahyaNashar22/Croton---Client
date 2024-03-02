import React from 'react'
import style from "./NotFound.module.css"
import notFound from "../../assets/images/notFound.gif"

function NotFound() {
  return (
    <section className={style.wrapper}>
    <img src={notFound} height={400} width={400} loading='lazy' alt='not found !' />
    </section>
  )
}

export default NotFound