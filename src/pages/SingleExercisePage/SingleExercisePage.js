import React, {useEffect, useState} from 'react'
import style from "./SingleExercisePage.module.css"
import axios from 'axios'
import Loading from "../../components/Loading/Loading"
import { useParams, Link } from 'react-router-dom';
import { changeColor, changePicture } from '../../utils/gender'
import { userStore } from '../../store'
import SimilarExercises from '../../components/SimilarExercises/SimilarExercises'
import { Helmet } from 'react-helmet-async'


function SingleExercisePage() {

    const {user}=userStore();
    let colors = changeColor(user.gender); 
    let index = changePicture(user.gender)

    const [foundExercise, setFoundExercise] = useState(null)

    const {id} = useParams()

  const fetchExercise = () =>{
    axios.get(`${process.env.REACT_APP_BACK_END_URL}exercises/getone/${id}`).then((res) =>
          {setFoundExercise(res.data.exercise)}
          ).catch(e=>e.message)
  }

  useEffect(()=>{
    fetchExercise()
  },[id])

  return (
    <>
        <Helmet>
    <title>{foundExercise && foundExercise.name}</title>
        <meta
          name="description"
          content={`information about ${foundExercise && foundExercise.name}`}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content={`${foundExercise && foundExercise.name}`} />
        <meta
          property="og:description"
          content={`information about ${foundExercise && foundExercise.name}`}
        />
    </Helmet>
    <section className={`${style.wrapper} ${style[colors]}`}>
        {foundExercise?
        <div className={style.upperContainer}>
          <h1 className={style.header}>
            {foundExercise.name}
          </h1>
        <div className={style.upper}>
       <img className={style.image} 
          src={`${process.env.REACT_APP_BACK_END_URL}${foundExercise.gif[index]}`} 
          alt='exercise' 
          height={400} 
          width={400} 
          loading='lazy' />
       <p className={style.content}>
            Name: <span className={style[colors]}>{foundExercise.name}</span><br/>
            Category: <span className={style[colors]}>{foundExercise.category}</span><br/>
            Type: <span className={style[colors]}>{foundExercise.type}</span><br/>
            Muscle Group: <span className={style[colors]}>{foundExercise.muscleGrp}</span><br/>
            Instructions:<br/> <span className={style[colors]}>{foundExercise.instructions}</span> 
       </p>
          <Link to='/exercises' className={`${style.back} ${style[colors]}`}>Go Back</Link>
       </div>
       </div>
       :
       <Loading />
       }
        <SimilarExercises index={index} colors={colors} />
    </section>
    </>
  )
}

export default SingleExercisePage