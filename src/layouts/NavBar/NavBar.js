import React, {useEffect, useState} from 'react'
import style from "./NavBar.module.css"
import {Link, useLocation, useNavigate} from "react-router-dom"
import { menuStore, userStore } from '../../store'
import omar from "../../assets/images/omar.png"
import burger from "../../assets/icons/burger.svg"
import x from "../../assets/icons/x.svg"
import axios from 'axios'
import { changeColor } from '../../utils/gender'


function NavBar() {

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);


  // calculate the scroll if it exceeds the 100vh
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > window.innerHeight) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);
////////////////////////////
  const location = useLocation();
  const navigate = useNavigate();

  const {open,openClose} = menuStore();
  const {user, setUser} = userStore();
  const colors = changeColor(user.gender)

  const logoutHandler = () =>{
    axios.get(`${process.env.REACT_APP_BACK_END_URL}users/logout`).then(res=>{
      navigate('/login');
      setUser({});
    }).catch(err=>{console.log(err.message)})
  }
  return (
    <>
    <nav style={{top: visible ? '0' : '-200px', transition: 'top 0.3s'}}
     className={
      `${location.pathname==='/body' || location.pathname==='/mind'?style.disappear:style.wrapper}
      ${location.pathname==='/'?style.wrapper:style[colors]}
      ${scrolled ? style.scrolled : ""}`
      }>
      <aside className={style.left} onClick={()=>navigate('/')}>
          <img className={style.logo} src={omar} alt='logo' width={'100px'} height={'100px'} />
      </aside>
      <aside className={style.middle}>
          <Link to="/body" className={location.pathname==="/body" ? style.activeLinks : style.links}>Body</Link>
          <Link to="/mind" className={location.pathname==="/mind" ? style.activeLinks : style.links}>Mind</Link>
          <Link to="/nutrition-center" className={style.links}>Nutrition Center</Link>
      </aside>
      <aside className={style.right}>
          { user.email ?
          <>
          <button type='submit' onClick={logoutHandler} className={style.signout}>sign out</button>
          <Link to="/profile" className={style.profilePic}>
            <img className={style.profilePic} src={user.profilePic? `${process.env.REACT_APP_BACK_END_URL}${user.profilePic}`:user.photoURL} alt="Profile" width={'50px'} height={'50px'}/>
            </Link>
            </>
          :
          <button type='submit' onClick={logoutHandler} className={style.signout}>sign in</button>
          }
      </aside>
    </nav>
    {/* Mobile View */}
    <nav style={{top: visible ? '0' : '-200px', transition: 'top 0.3s'}} className={
      `${style.mobileWrapper}`}>
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
            <>
            {user.email?
            <>
            <button type='submit' onClick={logoutHandler} className={style.signout}>sign out</button>
            <Link to="/profile" className={style.profilePic}>
            <img className={style.profilePic} src={user.profilePic? `${process.env.REACT_APP_BACK_END_URL}${user.profilePic}`:user.photoURL} alt="Profile" width={'50px'} height={'50px'}/>
            </Link>
            </>
            :<button type='submit' onClick={logoutHandler} className={style.signout}>sign in</button>}
            </>
          </section>
          </>}
      </aside>
    </nav>
    </>
  )
}

export default NavBar