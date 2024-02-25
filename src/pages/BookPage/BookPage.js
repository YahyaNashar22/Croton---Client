import React,{useState,useEffect} from 'react'
import style from "./BookPage.module.css"
import LatestBooks from '../../components/LatestBooks/LatestBooks'
import {changeColor} from "../../utils/gender"
import {userStore} from "../../store"
import axios from "axios"
import BooksViewer from '../../components/BooksViewer/BooksViewer'

function BookPage() {

  const [books, setBooks] = useState([])
  const [availableGenres, setAvailableGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('all genres');
  const [search, setSearch] =useState();
  const [page, setPage] = useState(1);
  const [ totalNB, setTotalNB]= useState()

  const availableGenreFetcher = ()=>{
    axios.get(`${process.env.REACT_APP_BACK_END_URL}books/getgenres`)
          .then(res=>setAvailableGenres(res.data.payload))
          .catch(e=>console.log(e.message))
  }
  const genreSetter = (e) =>{
    setSelectedGenre(e.target.value)
  }
  const searchSetter = (e) =>{
    setSearch(e.target.value)
  }

  useEffect(()=>{
    availableGenreFetcher();
  },[])
  
  const {user} = userStore();
  const colors = changeColor(user.gender)

  return (
    <section className={style.wrapper}> 
        <LatestBooks colors={colors} />
        <h2 className={style.sectionHeader}>
          {!search?
          `Available books under ${selectedGenre}`
            :
            `Available books under ${search}`
        }
        </h2>
        <aside className={style.filterContainer}>
          <select className={style.genreSelect} value={selectedGenre} onChange={genreSetter}>
            <option  value='all genres' selected>All Genres</option>
            {
              availableGenres && availableGenres.map((genre,key)=>{
                return(
                  <option key={key} value={genre} onChange={genreSetter}>{genre}</option>
                )
              })
              
            }
          </select>
          <input type='text' className={style.searchBook} placeholder='search for a book' onChange={searchSetter} />
        </aside>
        <BooksViewer
            page={page} 
            selectedGenre={selectedGenre}
            search={search} 
            setTotalNB={setTotalNB} 
            books={books} 
            setBooks={setBooks} />
        <div className={style.pagination}>
          {
            page===1 && totalNB>10 &&
            <button type='button' className={`${style.paginationBtn} ${style[colors]}`} onClick={()=>setPage(page+1)}>Next</button>
          }
          {
            page>1 &&
          <button type='button' className={`${style.paginationBtn} ${style[colors]}`} onClick={()=>setPage(page-1)}>Previous</button>
          }
          <p>{page} / {totalNB/10}</p>
        </div>
    </section>
  )
}

export default BookPage