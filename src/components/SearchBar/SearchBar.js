import React,{useEffect, useState} from 'react'
import style from "./SearchBar.module.css"
import axios from 'axios';

function SearchBar({setSearchResult}) {

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
        <input type='text' placeholder='what do you want to search for ?' onChange={(e)=>setSearchInp(e.target.value)} />
    </div>
  )
}

export default SearchBar