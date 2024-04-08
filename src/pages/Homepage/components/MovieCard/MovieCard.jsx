import React from 'react'

const MovieCard = ({movie}) => {
  return (
    <div className='movie-card'>
        <img src={`https://media.themoviedb.org/t/p/w600_and_h900_bestv2${movie?.poster_path}`}
            alt={movie?.title}/>
        <div className='movie-card-text'>
            <h1>{movie?.title}</h1>
            {movie?.genre_ids.map((id) => (
                <p>{id}</p>
            ))}
            <div className='text-flex-box'>
                <div>{movie?.vote_average}</div>
                <div>{movie?.popularity}</div>
                <div>{movie.adult ? "over18" : "under18"}</div>
            </div>
        </div>
    </div>
  )
}

export default MovieCard