import React from 'react'
import { useMovieGenreQuery } from '../../hooks/useMovieGenre'

const MovieCard = ({movie}) => {

  const {data:genreData} = useMovieGenreQuery();
  // console.log("ggg", genreData);

  const showGenre = (genreIdList) => {
    if(!genreData) return[]
    const genreNameList = genreIdList.map((id) => {
      const genreObj = genreData.find((genre) => genre.id === id)
      return genreObj.name;
    })

    return genreNameList
    
  }
  return (
    <div className='movie-card'>
        <img src={`https://media.themoviedb.org/t/p/w600_and_h900_bestv2${movie?.poster_path}`}
            alt={movie?.title}/>
        <div className='movie-card-text'>
            <h1>{movie?.title}</h1>
            <div className='movie-id'>
            {showGenre(movie.genre_ids).map((id) => (
                <p className={id}>{id}</p>
            ))}
            </div>
            <div className='mini-card-overview'>{movie?.overview}</div>
            <div className='vote-average'><span>{movie?.vote_average}</span></div>
            {/*<div>{movie.adult ? "over18" : "under18"}</div> */}
            <div className='mini-card-button'><button>자세히보기</button></div>
        </div>
    </div>
  )
}

export default MovieCard