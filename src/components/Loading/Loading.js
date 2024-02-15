import React from 'react'
import style from "./Loading.module.css"
import loading from "../../assets/images/loading.svg"

function Loading() {
  return (
    <div className={style.wrapper}>
        <img src={loading} alt='loading' width={'100%'} height={'400px'}/>
        <h1 className={style.loadingTxt}>Loading your content <br/> Please wait . . .</h1>
    </div>
  )
}

export default Loading