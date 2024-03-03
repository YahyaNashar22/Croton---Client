import React,{useState, useEffect} from 'react'
import style from "./SingleBookPage.module.css"
import { useParams, Link } from 'react-router-dom'
import axios from "axios"
import Loading from '../../components/Loading/Loading'
import BookFavButton from "../../components/BookFavButton/BookFavButton"
import { changeColor } from '../../utils/gender'
import { userStore } from '../../store'
import { Helmet } from 'react-helmet-async'


function SingleBookPage() {

  const {user} = userStore();
  const colors = changeColor(user.gender)
  const { id } = useParams()
  const [bookData, setBookData] = useState(null)

  const fetchBook = () => {
    axios.get(`${process.env.REACT_APP_BACK_END_URL}books/getone/${id}`)
          .then(res=>setBookData(res.data.book))
          .catch(e=>console.log(e.message))
  }

  useEffect(()=>{
    fetchBook()
  },[id])


  return (
    <>
    <Helmet>
    <title>{bookData && bookData.title}</title>
        <meta
          name="description"
          content={`information about ${bookData && bookData.title}, read online, download`}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content={`${bookData && bookData.title}`} />
        <meta
          property="og:description"
          content={`information about ${bookData && bookData.title}, read online, download`}
        />
    </Helmet>
    <section className={style.wrapper}>
        {
          bookData?
          <>
            <BookFavButton book={bookData} />
            <h1 className={style.header}>
              Book Viewer
            </h1>
          <div className={style.bookDataContainer}>
          <aside className={style.cover}>
            <img 
            src={`${process.env.REACT_APP_BACK_END_URL}${bookData.cover}`} 
            alt={bookData.title} 
            height={600} 
            width={400}
            loading='lazy'
            className={style.bookCover}
            />
          </aside>
          <aside className={style.info}>
            <p className={style.content}>
             <span className={style.contentName}>Title: </span> {bookData.title}
            </p>
            <p className={style.content}>
             <span className={style.contentName}>Author: </span> {bookData.author}
            </p>
            <p className={style.content}>
             <span className={style.contentName}>Genre: </span> {bookData.genre}
            </p>
            <p className={style.content}>
             <span className={style.contentName}>Pages: </span> {bookData.nbOfPages}
            </p>
            <p className={style.content}>
             <span className={style.contentName}>Language: </span> {bookData.language}
            </p>
            <p className={style.content}>
             <span className={style.contentName}>Summary:<br/> </span> {bookData.summary}
            </p>
            <Link to='/books' className={`${style.back} ${style[colors]}`}>Go Back</Link>
            <Link to={bookData.link} className={`${style.downloadLink} ${style[colors]}`}>Download Book</Link>
          </aside>
          </div>
          </>
          :
          <Loading />
        }
    </section>
    </>
  )
}

export default SingleBookPage