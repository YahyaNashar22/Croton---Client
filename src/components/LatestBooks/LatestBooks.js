import React, { useState, useEffect } from "react";
import style from "./LatestBooks.module.css";
import axios from "axios";
import Loading from "../Loading/Loading"
import {motion} from 'framer-motion'

function LatestBooks({colors}) {

  // defining the mobile state
  const [mobile, setMobile] = useState(false);
useEffect(()=>{
  const handleResize = () =>{
    if(window.innerWidth <= 768){
      setMobile(true)
    }else{
      setMobile(false)
  }
}
  handleResize();
  window.addEventListener('resize', handleResize);
  return () => {window.removeEventListener('resize', handleResize)};
},[])

  const [positionIndexes, setPositionIndexes] = useState([0,1,2,3,4,5,6,7,8,9]);
  const [latestBooks, setLatestBooks] = useState([])

  const fetchHandler = () => {
    axios
      .get(`${process.env.REACT_APP_BACK_END_URL}books/getlatest`)
      .then((res) => setLatestBooks(res.data.payload))
      .catch((e) => console.log(e.message));
  };

  useEffect(() => {
    fetchHandler();
    const interval = setInterval(() => {
      handleNext();
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setPositionIndexes((prevIndexes)=>{
      const updatedIndex = prevIndexes.map((prevIndex)=>(prevIndex + 1) % 10) // change the 3 to be equal to array length
      return updatedIndex
    })
  }

  const positions = [
    'center',
    'left1',
    'left2',
    'left3',
    'left4',
    'right1',
    'right2',
    'right3',
    'right4',
    'right5'
  ]
  const bookVariants = {
    center : {x:'0%', scale: 1 , zIndex: 10, opacity:1},
    left1: {x:'-30%', scale: 0.7 , zIndex: 9, opacity:0.7},
    left2: {x:'-50%', scale: 0.5 , zIndex: 8, opacity:0.6},
    left3: {x:'-70%', scale: 0.3 , zIndex: 7, opacity:0.5},
    left4: {x:'-90%', scale: 0.2 , zIndex: 6, opacity:0.4},
    right1: {x:'30%', scale: 0.7 , zIndex: 9, opacity:0.7},
    right2: {x:'50%', scale: 0.5 , zIndex: 8, opacity:0.6},
    right3: {x:'70%', scale: 0.3 , zIndex: 7, opacity:0.5},
    right4: {x:'80%', scale: 0.2 , zIndex: 6, opacity:0.4},
    right5: {x:'90%', scale: 0.1 , zIndex: 5, opacity:0.3},
  }

  return (
    <section className={style.wrapper}>
      {
        !mobile ? 
        <>
      <h1 className={style.header}>
        Latest
      </h1>
      <h1 className={style.header2}>
        Books
      </h1>
        {latestBooks?
        latestBooks.map((book, key)=>{
          return(
            <motion.a key={key} href={`/singlebook/${book._id}`} 
              className={style.link}
            >
            <motion.img
              key={key}
              src={`${process.env.REACT_APP_BACK_END_URL}${book.cover}`}
              alt={book.title}
              variants={bookVariants}
              initial="center"
              animate={positions[positionIndexes[key]]}
              transition={{duration:0.5}}
              height={600}
              width={400}
              className={`${style.covers} ${style[colors]}`}
              />
              </motion.a>
          )
        })
        :
        <Loading />
      }
      <button className={`${style.next} ${style[colors]}`} type="button" onClick={handleNext}>Next</button>
        </>
        :
        <h1 className={style.mobileHeader}>Welcome To Our Book Section !</h1>
      }
      </section>
  );
}

export default LatestBooks;
