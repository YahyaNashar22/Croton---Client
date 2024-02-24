import React from 'react'
import style from "./BookCard.module.css"
import { changeColor } from '../../utils/gender'
import { userStore } from '../../store'
import { Link } from "react-router-dom"

function BookCard({title, cover, id}) {

const {user} = userStore();
const colors = changeColor(user.gender)

  return (
    <div 
    className={style.wrapper}>
        <div className={style.backgroundImage}
                style={{
                    backgroundImage:`url(${process.env.REACT_APP_BACK_END_URL}${cover})`
                    }}
        ></div>
        <img 
        src={`${process.env.REACT_APP_BACK_END_URL}${cover}`} 
        alt={title}
        className={style.bookCover}
        height={400}
        width={250}
        loading='lazy'
        />
        <Link 
        className={`${style.bookLink} ${style[colors]}`}
        to={`/singlebook/${id}`}
        >
            Go to Book
        </Link>
    </div>
  )
}

export default BookCard