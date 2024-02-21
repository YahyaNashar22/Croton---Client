import React, {useState, useEffect} from 'react'
import style from "./SingleTrainingPlanPage.module.css"
import axios from "axios"
import { useParams, Link } from 'react-router-dom'
import Loading from '../../components/Loading/Loading'
import clock from "../../assets/icons/blackClock.svg"
import { userStore } from '../../store'
import { changeColor, changePicture } from '../../utils/gender'
import FavoriteButton from "../../components/FavoriteButton/FavoriteButton"


function SingleTrainingPlanPage() {

  const {user} = userStore();
  const colors = changeColor(user.gender)
  const index = changePicture(user.gender)

  const {id} = useParams()
  const [foundPlan, setFoundPlan] = useState(null)

  const fetchPlan = () => {
    axios.get(`${process.env.REACT_APP_BACK_END_URL}trainingplans/getone/${id}`).then(res=>setFoundPlan(res.data.plan)).catch(e=>{console.log(e.message)})
  }
  useEffect(()=>{
    fetchPlan()
  },[id])

  return (
    <section className={style.wrapper}>
       {foundPlan?
       <>
       <FavoriteButton id={foundPlan._id} />
       <div className={style.upper}>
      <h1 className={style.header}>
        {foundPlan.name}
      </h1>
      <h2 className={style.focus}>
        {foundPlan.focus} | {foundPlan.nbOfExercises} exercises | <span><img src={clock} height={24} width={24} alt='clock' /></span> {foundPlan.duration} mins.
      </h2>
      </div>
      <div className={style.middle}>
        <p className={style.description}>
          {foundPlan.description}
        </p>
      </div>
      <ul className={style.lower}>
        {foundPlan.exerciseObject.map((exercise, key)=>{
          return(
            <li key={key} className={`${style.exercise} ${style[colors]}`}>
              <p>{exercise.exerciseID.name}</p>
              <p>{exercise.sets} sets</p>
              <p>{exercise.reps} reps</p>
              <Link to={`/singleexercise/${exercise.exerciseID._id}`} 
              className={style.exerciseImg}>
                <img src={`${process.env.REACT_APP_BACK_END_URL}${exercise.exerciseID.gif[index]}`} alt='exercise' height={90} width={90} loading='lazy' className={style.exerciseImg} />
                </Link>
              </li>
          )
        }
        )}
      </ul>
      </>
      :
      <Loading />
      }
    </section>
  )
}

export default SingleTrainingPlanPage