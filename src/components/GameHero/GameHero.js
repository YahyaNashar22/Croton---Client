import React from 'react'
import style from "./GameHero.module.css"

function GameHero() {
  return (
    <section className={style.wrapper}>
        <h1 className={style.header}>
            Welcome To The Game Arena
        </h1>
        <h2 className={style.subHeader}>
            Discover Our Variety Of Games Below. We Aim To Innovate  And Provide You With An Exciting Gaming Experience!
          Where you can test your skills!
        </h2>
    </section>
  )
}

export default GameHero