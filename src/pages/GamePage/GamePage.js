import React from 'react'
import style from "./GamePage.module.css"
import GameHero from '../../components/GameHero/GameHero'

function GamePage() {
  return (
    <section className={style.wrapper}>
        <GameHero />
    </section>
  )
}

export default GamePage