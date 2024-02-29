import React,{useState, useEffect} from 'react'
import style from "./FavoriteButton.module.css"
import { changeColor } from '../../utils/gender'
import { userStore } from '../../store'
import { clickSoundStore } from '../../store'
import metalClick from "../../assets/sounds/metalClick.mp3"
import axios from "axios"

function FavoriteButton({plan}) {

  const {user, setUser}=userStore();

  const [favorited, setFavorited]= useState(Object.values(user.favPlans).some(item => item._id === plan._id));
  
    let colors = changeColor(user.gender); 
    const {playSound, setPlaySound} = clickSoundStore();
   useEffect(()=>{
    if( Object.values(user.favPlans).some(item => item._id === plan._id)){
      setFavorited(true)
    }
    else{
      setFavorited(false)
    }
   },[user]) 

   const refreshUser = () =>{
    axios.get(`${process.env.REACT_APP_BACK_END_URL}users/oneuser`)
          .then(res=>setUser(res.data))
          .catch(e=>console.log(e.message))
   }

   useEffect(()=>{
    refreshUser()
   },[user])
   
    const favHandler = () =>{
      if(favorited){
        axios.post(`${process.env.REACT_APP_BACK_END_URL}users/removefavplans`, {userID:user._id, planID:plan._id})
        .then(res=>{setUser(res.data.user)})
        .catch(e=>e.message)
      }
      else{
        axios.post(`${process.env.REACT_APP_BACK_END_URL}users/addtofavplans`, {userID:user._id, planID:plan._id})
        .then(res=>{setUser(res.data.user)})
        .catch(e=>e.message)
      }
    }

  return (
    <>
    {!favorited ?
    <button className={`${style.favorite} ${style[colors]}`} type='submit' onClick={()=>{favHandler();setPlaySound()}}>Add to favorites</button>
    :
    <button className={`${style.favorite} ${style[colors]}`} type='submit' onClick={()=>{favHandler();setPlaySound()}}>Remove from favorites</button>
    }
    {playSound &&
    <audio src={metalClick} autoPlay onEnded={setPlaySound} />
    }
    </>
  )
}

export default FavoriteButton