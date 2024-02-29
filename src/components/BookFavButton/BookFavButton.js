import React,{useState, useEffect} from 'react'
import style from "./BookFavoriteButton.module.css"
import { changeColor } from '../../utils/gender'
import { userStore } from '../../store'
import { clickSoundStore } from '../../store'
import pageFlip from "../../assets/sounds/pageFlip.mp3"
import axios from "axios"

function BookFavButton({book}) {

  const {user, setUser}=userStore();
  const [loading, setLoading] = useState(true);

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
        setLoading(false);
        axios.post(`${process.env.REACT_APP_BACK_END_URL}users/removefavbooks`, {userID:user._id, bookID:book._id})
        .then(res=>{setUser(res.data.user); setLoading(true)})
        .catch(e=>e.message)
      }
      else{
        setLoading(false)
        axios.post(`${process.env.REACT_APP_BACK_END_URL}users/addtofavbooks`, {userID:user._id, bookID:book._id})
        .then(res=>{setUser(res.data.user); setLoading(true)})
        .catch(e=>e.message)
      }
    }

  return (
    <>
    {
      loading ?
      <>
       {!favorited ?
    <button className={`${style.favorite} ${style[colors]}`} type='submit' onClick={()=>{favHandler();setPlaySound()}}>Add to favorites</button>
    :
    <button className={`${style.favorite} ${style[colors]}`} type='submit' onClick={()=>{favHandler();setPlaySound()}}>Remove from favorites</button>
    }
      </>
      :
      <p className={`${style.favorite} ${style[colors]}`}>loading</p>
    }

    {playSound &&
    <audio src={pageFlip} autoPlay onEnded={setPlaySound} />
    }
    </>
  )
}

export default BookFavButton