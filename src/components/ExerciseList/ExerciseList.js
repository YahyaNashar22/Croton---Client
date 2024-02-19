import React from 'react'
import style from "./ExerciseList.module.css"
import {useQuery} from 'react-query'
import axios from 'axios'
import Loading from '../Loading/Loading'
import { Link } from "react-router-dom"
import { changeColor } from '../../utils/gender'
import { userStore } from '../../store'

function ExerciseList({searchResult}) {
    const {user} = userStore();
    const colors = changeColor(user.gender);

    const { isPending, error, data } = useQuery({
        queryKey: ['exerciseData'],
        queryFn: () =>
          axios.get(`${process.env.REACT_APP_BACK_END_URL}exercises/getall`).then((res) =>
           {return res.data.exercises}
          ),
      })
    
      if (isPending) return <Loading />
      if (error) return 'An error has occurred: ' + error.messag

  return (
    <ul className={style.wrapper}>
          {searchResult ? searchResult.map((exercise)=>{
          return(
            <Link to={`/singleexercise/${exercise._id}`} className={`${style.item} ${style[colors]}`}>
              {exercise.name}
            </Link>
            )
        }):
        data && data.map((exercise)=>{
          return(
            <Link to={`/singleexercise/${exercise._id}`} className={`${style.item} ${style[colors]}`}>
              {exercise.name}
            </Link>
            )
        }
        )
        }
    </ul>
  )
}

export default ExerciseList