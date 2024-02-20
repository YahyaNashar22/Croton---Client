import React, { useState } from 'react'
import style from "./ExercisePage.module.css"
import ExerciseList from '../../components/ExerciseList/ExerciseList'
import SearchBar from '../../components/SearchBar/SearchBar'
import { changeColor } from '../../utils/gender'
import { userStore } from '../../store'

function ExercisePage() {

  const {user} = userStore();
  const colors = changeColor(user.gender)

  const [searchResult, setSearchResult]= useState();

  return (
    <section className={`${style.wrapper} ${style[colors]}`}>
      <h1 className={style.header}>
        List Of Exercises
      </h1>
        <SearchBar setSearchResult={setSearchResult} />
        <ExerciseList searchResult={searchResult} />
    </section>

  )
}

export default ExercisePage