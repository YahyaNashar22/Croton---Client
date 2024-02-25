import React, { useEffect} from 'react'
import style from "./BooksViewer.module.css"
import axios from "axios"
import Loading from '../Loading/Loading'
import BookCard from '../BookCard/BookCard'

function BooksViewer({page, selectedGenre, setTotalNB, books, setBooks, search}) {

    const bookFetcher = (selectedGenre, search) => {
        if(!search){
            if (selectedGenre ==="all genres"){
                axios.get(`${process.env.REACT_APP_BACK_END_URL}books/getall?page=${page}`)
                    .then(res=>{setBooks(res.data.books); setTotalNB(res.data.count)})
                    .catch(e=>console.log(e.message))
            }
            else if (selectedGenre!== "all genres"){
                axios.post(`${process.env.REACT_APP_BACK_END_URL}books/genre`, {genre:selectedGenre})
                    .then(res=>{
                        setBooks(res.data.foundBooks); setTotalNB(res.data.count)
                    })
                    .catch(e=>e.message)
            }
        }
         if(search){
            axios.post(`${process.env.REACT_APP_BACK_END_URL}books/search`, {search:search})
                .then(res=>{
                    setBooks(res.data.foundBooks); setTotalNB(res.data.count)
                })
                .catch(e=>console.log(e.message))
        }
    }

    useEffect(()=>{
        bookFetcher(selectedGenre, search)
    },[page, selectedGenre, search])

  return (
    <ul className={style.wrapper}>
        {
            books ? 
                books.map((book,key)=>{
                    return(
                        <BookCard 
                            key={key}
                            title={book.title}
                            cover={book.cover}
                            id={book._id}
                        />
                    )
                })
            :
            <Loading />
        }
    </ul>
  )
}

export default BooksViewer