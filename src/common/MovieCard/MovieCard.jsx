import React from 'react'
import { useMovieGenreQuery } from '../../hooks/useMovieGenre'
import { useNavigate } from 'react-router-dom';

const MovieCard = ({movie, orderNumber}) => {

  const {data:genreData} = useMovieGenreQuery();
  // console.log("ggg", genreData);
  const navigate = useNavigate();

  const showGenre = (genreIdList) => {
    if(!genreData) return[]
    const genreNameList = genreIdList.map((id) => {
      const genreObj = genreData.find((genre) => genre.id === id)
      return genreObj.name;
    })

    return genreNameList
    
  }

  const showDetail = ({movie}) => {
    navigate(`/movies/${movie.id}`)
  }
  

  return (
    <div className='movie-card' onClick={() => showDetail({ movie })}>
      <span className='order-number'>{orderNumber}</span> {/* 렌더링 순서대로 숫자 표시 */}
        <img src={`https://media.themoviedb.org/t/p/w600_and_h900_bestv2${movie?.poster_path}`}
            alt={movie?.title}/>
        <div className='movie-card-text'>
          <div>
            <h1>{movie?.title}</h1>
            <div className='movie-id'>
            {showGenre(movie.genre_ids).map((id) => (
                <p className={id}>{id}</p>
            ))}
            {/* {items.map(item => (
              <li key={item.id}>{item.name}</li>
            ))} */}
            </div>
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