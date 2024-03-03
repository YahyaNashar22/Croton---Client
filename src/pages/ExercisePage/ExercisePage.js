import React, { useState } from 'react'
import style from "./ExercisePage.module.css"
import ExerciseList from '../../components/ExerciseList/ExerciseList'
import SearchBar from '../../components/SearchBar/SearchBar'
import { changeColor } from '../../utils/gender'
import { userStore } from '../../store'
import { Helmet } from 'react-helmet-async'

function ExercisePage() {

  const {user} = userStore();
  const colors = changeColor(user.gender)

  const [searchResult, setSearchResult]= useState();

  return (
    <>
    <Helmet>
    <title>Exercises</title>
        <meta
          name="description"
          content="List of all exercises"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Exercises" />
        <meta
          property="og:description"
          content="List of all exercises"
        />
    </Helmet>
    <section className={`${style.wrapper} ${style[colors]}`}>
      <h1 className={style.header}>
        List Of Exercises
      </h1>
        <SearchBar setSearchResult={setSearchResult} />
        <ExerciseList searchResult={searchResult} />
    </section>
    </>
  )
}

export default ExercisePage