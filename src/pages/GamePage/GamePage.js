import React from 'react'
import style from "./GamePage.module.css"
import GameHero from '../../components/GameHero/GameHero'
import Game from "../../assets/videos/Game.mp4"
import GameViewer from '../../components/GameViewer/GameViewer'
import { Helmet } from 'react-helmet-async'


function GamePage() {

  return (
    <>
   <Helmet>
    <title>Arcade</title>
        <meta
          name="description"
          content="List of Arcade Games"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Arcade" />
        <meta
          property="og:description"
          content="List of Arcade Games"
        />
    </Helmet>
    <section className={style.wrapper}>
        <GameHero />
        <GameViewer />
        <video className={style.video} src={Game}  autoPlay loop muted/>
    </section>
    </>
  )
}

export default GamePage