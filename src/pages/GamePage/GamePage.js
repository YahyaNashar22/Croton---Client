import React from 'react'
import style from "./GamePage.module.css"
import GameHero from '../../components/GameHero/GameHero'
import Game from "../../assets/videos/Game.mp4"
import GameViewer from '../../components/GameViewer/GameViewer'

function GamePage() {

  return (
    <section className={style.wrapper}>
        <GameHero />
        <GameViewer />
        <video className={style.video} src={Game}  autoPlay loop muted/>
    </section>
  )
}

export default GamePage