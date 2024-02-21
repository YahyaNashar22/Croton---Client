import React,{useEffect, useState} from 'react'
import style from "./ProfilePage.module.css"
import { userStore } from '../../store'
import { changeColor, changePicture } from '../../utils/gender'
import { Link } from "react-router-dom"
import axios from "axios"
import pinkRuler from "../../assets/icons/pinkRuler.svg"
import pinkWeight from "../../assets/icons/pinkWeight.svg"
import pinkPhone from "../../assets/icons/pinkPhone.svg"
import pinkProfile from "../../assets/icons/pinkProfile.svg"
import navyRuler from "../../assets/icons/navyRuler.svg"
import navyWeight from "../../assets/icons/navyWeight.svg"
import navyPhone from "../../assets/icons/navyPhone.svg"
import navyProfile from "../../assets/icons/navyProfile.svg"
import Loading from '../../components/Loading/Loading'



function ProfilePage() {
    const {user} = userStore();
    const colors = changeColor(user.gender)
    const index = changePicture(user.gender)
  return (
    <section className={style.wrapper}>
        <aside className={`${style.left} ${style[colors]}`}>
            <img src={`${process.env.REACT_APP_BACK_END_URL}${user.profilePic?user.profilePic:user.photoURL}`} className={style.profilePic} height={200} width={200} loading='lazy' alt='profile' />
            <p className={style.name}>
            {user.fullname}
            </p>
            <p className={style.info}>
                <span className={style.icon}>
                    <img className={style.iconimg} src={index===1?pinkProfile:navyProfile} height={30} width={30} alt='icon' loading='lazy'  />
                </span>
                {user.age} years old<br/>
                <span className={style.icon}>
                    <img className={style.iconimg} src={index===1?pinkRuler:navyRuler} height={30} width={30} alt='icon' loading='lazy'  />
                </span>
                {user.height} cm<br/>
                <span className={style.icon}>
                    <img className={style.iconimg} src={index===1?pinkWeight:navyWeight} height={30} width={30} alt='icon' loading='lazy'  />
                </span>
                {user.weight} kg<br/>
                <span className={style.icon}>
                    <img className={style.iconimg} src={index===1?pinkPhone:navyPhone} height={30} width={30} alt='icon' loading='lazy'  />
                </span>
                {user.phoneNumber}<br/>
            </p>
        </aside>
        <aside className={style.right}>
            <section className={`${style.bookblock} ${style[colors]}`}>
                <h1 className={`${style.blockHeader} ${style[colors]}`}>
                    Favorite Books
                </h1>
                <div className={style.favoriteContainer}>
                    {
                        user.favBooks ? user.favBooks.map((book, key)=>{
                            return(
                                <Link key={key} to={`/singleBook/${book._id}`} className={style.favLink}>
                                    <img src={`${process.env.REACT_APP_BACK_END_URL}${book.cover}`} alt='item' height={200} width={100} loading='lazy' />
                                </Link>
                            )
                        }):
                        <p>getting your content</p>
                    }
                </div>
            </section>
            <div className={style.plansRecipes}>
            <section className={`${style.block} ${style[colors]}`}>
                <h1 className={`${style.blockHeader} ${style[colors]}`}>
                    Favorite Trainig Plans
                </h1>
                <div className={style.favoriteContainer}>
                    {
                        user.favPlans? user.favPlans.map((plan, key)=>{
                            console.log(user)
                            return(
                                <Link key={key} to={`/singletrainingplan/${plan._id}`} className={style.favLink}>
                                    <p className={style.trainingPlanName}>{plan.name}</p>
                                </Link>
                            )
                        }):
                        <p>getting your plans ready</p>
                    }
                </div>
            </section>
            <section className={`${style.block} ${style[colors]}`}>
                <h1 className={`${style.blockHeader} ${style[colors]}`}>
                    Favorite Recipes
                </h1>
                <div className={style.favoriteContainer}>
                    {
                        user.favRecipes? user.favRecipes.map((recipe, key)=>{
                            console.log(user)
                            return(
                                <Link key={key} to={`/singletrainingplan/${recipe._id}`} className={style.favLink}>
                                    <p className={style.recipeName}>{recipe.name}</p>
                                </Link>
                            )
                        }):
                        <p>getting your plans ready</p>
                    }
                </div>
            </section>
            </div>
        </aside>
    </section>
  )
}

export default ProfilePage