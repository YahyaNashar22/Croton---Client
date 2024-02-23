import React from 'react'
import style from "./BookPage.module.css"
import LatestBooks from '../../components/LatestBooks/LatestBooks'
import {changeColor} from "../../utils/gender"
import {userStore} from "../../store"

function BookPage() {
  
  const {user} = userStore();
  const colors = changeColor(user.gender)

  return (
    <section className={style.wrapper}>
        <LatestBooks colors={colors} />
    </section>
  )
}

export default BookPage