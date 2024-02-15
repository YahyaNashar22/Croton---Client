import React from 'react'
import style from "./NavBar.module.css"
import {Link, useLocation, useNavigate} from "react-router-dom"
import { menuStore } from '../../store'
import omar from "../../assets/images/omar.png"
import burger from "../../assets/icons/burger.svg"
import x from "../../assets/icons/x.svg"


function NavBar() {

  const location = useLocation();
  const navigate = useNavigate();

  const {open,openClose} = menuStore();

  return (
    <>
    <nav className={style.wrapper}>
      <aside className={style.left} onClick={()=>navigate('/')}>
          <img className={style.logo} src={omar} alt='logo' width={'100px'} height={'100px'} />
      </aside>
      <aside className={style.middle}>
          <Link to="/body" className={location.pathname==="/body" ? style.activeLinks : style.links}>Body</Link>
          <Link to="/mind" className={location.pathname==="/mind" ? style.activeLinks : style.links}>Mind</Link>
          <Link to="/nutrition-center" className={location.pathname==="/nutrition-center" ? style.activeLinks : style.links}>Nutrition Center</Link>
      </aside>
      <aside className={style.right}>
          <Link to="/login-signup" className={style.signout}>sign out</Link>
      </aside>
    </nav>
    {/* Mobile View */}
    <nav className={style.mobileWrapper}>
      <aside className={style.left} onClick={()=>navigate('/')}>
          <img className={style.logo} src={omar} alt='logo' width={'100px'} height={'100px'} />
      </aside>
      <aside className={style.menu} >
          {!open ? 
          <img className={style.burger} src={burger} alt='burger menu' height={'50px'} width={'50px'} onClick={()=>openClose()} />
          :
          <>
            <img className={style.burger} src={x} alt='close menu' height={'50px'} width={'50px'} onClick={()=>openClose()} />
            <section className={style.mobileList}>
            <Link to="/body" className={location.pathname==="/body" ? style.activeLinks : style.links}>Body</Link>
            <Link to="/mind" className={location.pathname==="/mind" ? style.activeLinks : style.links}>Mind</Link>
            <Link to="/nutrition-center" className={location.pathname==="/nutrition-center" ? style.activeLinks : style.links}>Nutrition Center</Link>
            <Link to="/login-signup" className={style.signout}>sign out</Link>
          </section>
          </>}
      </aside>
    </nav>
    </>
  )
}

export default NavBar