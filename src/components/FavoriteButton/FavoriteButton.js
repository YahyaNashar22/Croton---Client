import React from 'react'
import style from "./FavoriteButton.module.css"
import { changeColor } from '../../utils/gender'
import { userStore } from '../../store'
import { clickSoundStore } from '../../store'
import metalClick from "../../assets/sounds/metalClick.mp3"

function FavoriteButton() {
    const {user}=userStore();
    let colors = changeColor(user.gender); 
    const {playSound, setPlaySound} = clickSoundStore();


  return (
    <>
    <button className={`${style.favorite} ${style[colors]}`} type='submit' onClick={()=>setPlaySound()}>Add to favorites</button>
    {playSound &&
    <audio src={metalClick} autoPlay onEnded={setPlaySound} />
    }
    </>
  )
}

export default FavoriteButton