import React from 'react'
import style from "./SimilarExercises.module.css"
import axios from "axios"
import {useQuery} from 'react-query'
import Loading from '../Loading/Loading'
import { Link } from 'react-router-dom'



function SimilarExercises({index, colors}) {

    const { isPending, error, data } = useQuery({
        queryKey: ['exercisesData'],
        queryFn: () =>
          axios.get(`${process.env.REACT_APP_BACK_END_URL}exercises/getall`).then((res) =>
           { return( res.data.exercises)}
          ),
      })
    
      if (isPending) return <Loading />
      if (error) return 'An error has occurred: ' + error.messag


  return (
    <section className={`${style.container} ${style[colors]}`}>
        <h2 className={style.header}>
            Don't forget to checkout these as Well !
        </h2>
    <ul className={style.wrapper}>
{        data && data.map((exercise, key)=>{
          return(
            <Link className={style.img} to={`/singleexercise/${exercise._id}`}  key={key}>
            <img
            className={style.img}
            src={`${process.env.REACT_APP_BACK_END_URL}${exercise.gif[index]}`}
            height={150} 
            width={150} 
            alt='exercises' 
            loading='lazy' />
             </Link>
            )
        }
        )}
    </ul>
    </section>
  )
}

export default SimilarExercises