import {useState, useEffect, useRef} from 'react'
import MovieCard from './MovieCard';
import Filter from './Filter';
import movies from "../data/movies";
import AddMovie from "./AddMovie"
import { Link } from "react-router-dom";

function MovieList() {
    const [films,setFilms] = useState(movies)
    const [filteredFilms, setFilteredFilms] = useState([])
    const [filter, setfilter] = useState(0)
    const [searchInput, setSearchInput] = useState('')
    const search = useRef('');

    
    useEffect(() => {
        search.current = searchInput;
        if(searchInput.length >0){
        const res = films.filter(result => result.title.toLowerCase().indexOf(searchInput.toLowerCase()) !== -1);
        setFilteredFilms(res);
        } else {
            setFilteredFilms(films)
        }
        
    }, [filter,searchInput,films])

    const handlerFilterRating = (e)=>{
        setfilter(e.target.value);
    }

    const handlerAddFilm = (obj)=>{
        setFilms(obj);
        setFilteredFilms(films);
        console.log('films',films)
        console.log('passed objs',obj);
    }

  return (
    <>
    <div className='movies-list'>
    <h1>MOVIES LIST</h1>
    
    <AddMovie films={films} handlerAddFilm={handlerAddFilm} />
    
    <Filter 
    filter={filter} 
    handlerFilterRating={handlerFilterRating}
    setSearchInput={setSearchInput}
    />


    <div className='movies'>
    {filteredFilms.filter(m => m.rating >= filter).map((movie, key)=>{
    return (
        <Link to={`/film/${movie.id}`}>
        <MovieCard 
        key= {key} 
        title={movie.title} 
        rating={movie.rating} 
        poster={movie.poster} 
        />
        </Link>
        )
    })
    }
</div>
</div>
    </>
  )
}

export default MovieList