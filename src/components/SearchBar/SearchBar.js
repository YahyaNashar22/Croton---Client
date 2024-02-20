import React,{useEffect, useState} from 'react'
import style from "./SearchBar.module.css"
import axios from 'axios';
import search from "../../assets/icons/search.svg"
import { userStore } from '../../store';
import { changeColor } from '../../utils/gender';

function SearchBar({setSearchResult}) {

    const {user} = userStore();
    const colors = changeColor(user.gender);

    const [searchInp, setSearchInp] = useState('');
    function getByName(){

        axios.post(`${process.env.REACT_APP_BACK_END_URL}exercises/search`,{search:searchInp}).then(res=>{
            setSearchResult(res.data.foundExercises)
            console.log(res)
        }).catch(err=>{
            console.log(err.message)
        })
    }
    useEffect(()=>{
        getByName()
    },[searchInp])

  return (

    <div className={style.wrapper}>
        <input className={`${style.inp} ${style[colors]}`} type='text' placeholder='what do you want to search for ?' onChange={(e)=>setSearchInp(e.target.value)} />
        <img className={style.icon} src={search} alt='search' height={24} width={24} />
    </div>
  )
}

export default SearchBar