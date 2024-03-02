import React from 'react'
import style from "./Gestures.module.css"

function Gestures() {
  return (
    <iframe className={style.frame}  allow="camera; microphone" src='https://game-media-three.vercel.app' title='3D game viewer'> </iframe>
  )
}

export default Gestures