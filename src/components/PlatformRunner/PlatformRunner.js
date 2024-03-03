import React from 'react'
import style from "./PlatformRunner.module.css"

function PlatformRunner() {
  return (
    <iframe className={style.frame}  allow="camera; microphone" src='https://platformrunnermediapipe.onrender.com/' title='platform runner'> </iframe>

  )
}

export default PlatformRunner