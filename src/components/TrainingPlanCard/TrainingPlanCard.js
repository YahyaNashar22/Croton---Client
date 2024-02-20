import React, {useEffect, useState} from 'react'
import style from "./TrainingPlanCard.module.css"
import axios from 'axios'
import Loading from "../Loading/Loading"
import { Link } from "react-router-dom"
import clock from "../../assets/icons/clock.svg"
import {userStore} from "../../store"
import {changeColor} from "../../utils/gender"


function TrainingPlanCard() {

    const { user } = userStore();
    const colors = changeColor(user.gender)

    const [foundPlans, setFoundPlans] =useState([]);

    const fetchHandler = () => {
        axios.get(`${process.env.REACT_APP_BACK_END_URL}trainingplans/getall`).then(res=>setFoundPlans(res.data.plans)).catch(e=>e.message)
    }
    useEffect(()=>{
        fetchHandler();
    },[foundPlans])

  return (
    <div className={style.wrapper}>
        {foundPlans?
            foundPlans.map((plan, key)=>{
                return (
                    <div key={key} className={`${style.item} ${style[colors]}`}>
                        <p className={style.content}>
                        {plan.name} <br />
                        {plan.focus} <br />
                        {plan.nbOfExercises} exercises <br/>
                        <span className={style.clock}>
                            <img className={style.clockImg} src={clock} alt='clock' height={24} width={24}  />
                        </span>{plan.duration} mins.</p>
                        <Link to={`${process.env.REACT_APP_BACK_END_URL}trainingplans/getone/:${plan._id}`} className={`${style.startbtn} ${style[colors]}`}>Start</Link>
                    </div>
                )
            })
            :
            <Loading />
        }
    </div>
  )
}

export default TrainingPlanCard