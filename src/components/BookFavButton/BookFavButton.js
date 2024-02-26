import React,{useState, useEffect} from 'react'
import style from "./BookFavoriteButton.module.css"
import { changeColor } from '../../utils/gender'
import { userStore } from '../../store'
import { clickSoundStore } from '../../store'
import metalClick from "../../assets/sounds/metalClick.mp3"
import axios from "axios"

function BookFavButton({book}) {

  const {user, setUser}=userStore();

  const [favorited, setFavorited]= useState(Object.values(user.favBooks).some(item => item._id === book._id));
  
    let colors = changeColor(user.gender); 
    const {playSound, setPlaySound} = clickSoundStore();
   useEffect(()=>{
    if( Object.values(user.favBooks).some(item => item._id === book._id)){
      setFavorited(true)
    }
    else{
      setFavorited(false)
    }
   },[user]) 

   console.log(user)
   
    const favHandler = () =>{
      if(favorited){
        axios.post(`${process.env.REACT_APP_BACK_END_URL}users/removefavbooks`, {userID:user._id, bookID:book._id})
        .then(res=>{setUser(res.data.user)})
        .catch(e=>e.message)
      }
      else{
        axios.post(`${process.env.REACT_APP_BACK_END_URL}users/addtofavbooks`, {userID:user._id, bookID:book._id})
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

export default BookFavButton