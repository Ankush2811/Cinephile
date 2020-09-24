import React, {useState} from 'react'
import styles from './searchMovie.module.css'
import ComponentCard from './componentcard'

export default function SearchMovie(){

    const[query, setQuery] =useState('')
    const[movies, setMovies] =useState([])
    
    const searchMovies = async (e) =>{
        e.preventDefault()
        

        
        const url = `https://api.themoviedb.org/3/search/movie?api_key=da08bd774d6c58913d609343d4da22be&language=en-US&query=${query}&page=1&include_adult=false`
        try{
            const res= await fetch(url)
            const data=await res.json()
            setMovies(data.results)
        }catch(err){
            console.error(err)
        }
    }


    return(
    <>
        <form className={styles.form} onSubmit={searchMovies}>
            <label className={styles.label} htmlFor="query">Movie Name:</label>
            <input className={styles.input} type="text" name="query" placeholder="i.e. Inception" value={query} onChange={(e) => setQuery(e.target.value)}/>
            <button className={styles.button} type="submit">Search</button>
        </form>
        <div className={styles.cardlist}>
            {movies.filter(movie => movie.poster_path).map(movie => (
             <ComponentCard movie={movie} key={movie.id} />   
            ))}

        </div>
    </>
    )
}