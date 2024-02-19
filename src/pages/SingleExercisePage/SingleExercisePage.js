import React from 'react'
import style from "./SingleExercisePage.module.css"
import {useQuery} from 'react-query'
import axios from 'axios'
import Loading from "../../components/Loading/Loading"
import { useParams } from 'react-router-dom';
import { changeColor, changePicture } from '../../utils/gender'
import { userStore } from '../../store'

function SingleExercisePage() {

    const {user}=userStore();
    let colors = changeColor(user.gender); 
    let index = changePicture(user.gender)

    const {id} = useParams()

    const { isPending, error, data } = useQuery({
        queryKey: ['singleExerciseData'],
        queryFn: () =>
          axios.get(`${process.env.REACT_APP_BACK_END_URL}exercises/getone/${id}`).then((res) =>
           { return res.data.exercise}
          ),
      })
    
      if (isPending) return <Loading />
      if (error) return 'An error has occurred: ' + error.messag

  return (
    <section className={style.wrapper}>
        {data &&
        <>
       <img className={style.image} src={`${process.env.REACT_APP_BACK_END_URL}${data.gif[index]}`} alt='exercise' height={400} width={400} loading='lazy' />
       <p className={style.content}>
        Name: <span className={style[colors]}>{data.name}</span><br/>
        Category: <span className={style[colors]}>{data.category}</span><br/>
        Type: <span className={style[colors]}>{data.type}</span><br/>
        Muscle Group: <span className={style[colors]}>{data.muscleGrp}</span><br/>
        Instructions:<br/> <span className={style[colors]}>{data.instructions}</span> 
       </p>
       </>
        }
    </section>
  )
}

export default SingleExercisePage