import React,{useState} from 'react'
import style from "./GameViewer.module.css"
import Gestures from '../Gestures/Gestures'
import TicTacToe from "../TicTacToe/TicTacToe"
import PlatformRunner from '../PlatformRunner/PlatformRunner'

function GameViewer() {

const [gesturesGame, setGesturesGame]=useState(false);
const [ticTacToeGame, setTicTacToeGame]=useState(false);
const [platformRunnerGame, setPlatformRunnerGame]=useState(false);



  return (
    <section className={style.wrapper}>
        <h1 className={style.linkToDifferentProject}>
          Click on a title to load the game !
        </h1>
        <div className={style.games}>
        {
          ticTacToeGame ? 
          <>
          <button className={style.gameButtonClose} type='buttton' onClick={()=>setTicTacToeGame(!ticTacToeGame)}>X</button>
          <TicTacToe />
          </>
          :
          <button className={style.gameButton} type='buttton' onClick={()=>setTicTacToeGame(!ticTacToeGame)}>Tic Tac Toe</button>
        }
        {
          gesturesGame ? 
          <>
          <button className={style.gameButtonClose} type='buttton' onClick={()=>setGesturesGame(!gesturesGame)}>X</button>
          <Gestures />
          </>
          :
          <button className={style.gameButton} type='buttton' onClick={()=>setGesturesGame(!gesturesGame)}>Gestures</button>
        }
        {
          platformRunnerGame ? 
          <>
          <button className={style.gameButtonClose} type='buttton' onClick={()=>setPlatformRunnerGame(!platformRunnerGame)}>X</button>
          <PlatformRunner />
          </>
          :
          <button className={style.gameButton} type='buttton' onClick={()=>setPlatformRunnerGame(!platformRunnerGame)}>PlatformRunner</button>
        }
        </div>
    </section>
  )
}

export default GameViewer