import React from 'react'
import style from "./MobileNav.module.css"
import omar from "../../assets/images/omar.png"

function MobileNav() {
  return (
    <nav className={style.wrapper}>
        <aside className={style.left}>
            <img className={style.logo} src={omar} alt='logo' height={'100px'} width={'100px'} />
        </aside>
        <aside className={style.burger}>

        </aside>
    </nav>
  )
}

export default MobileNav