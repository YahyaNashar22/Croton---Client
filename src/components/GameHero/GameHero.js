import React from 'react'
import style from "./GameHero.module.css"
import Game from "../../assets/videos/Game.mp4"

function GameHero() {
  return (
    <section className={style.wrapper}>
        <video className={style.video} src={Game}  autoPlay loop muted/>
    </section>
  )
}

export default GameHero