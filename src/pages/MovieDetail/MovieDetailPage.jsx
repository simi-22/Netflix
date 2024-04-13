import React from 'react'
import { useParams } from 'react-router-dom';
import { useDetailMovieQuery } from '../../hooks/useDetailMovie';
import { Alert } from 'react-bootstrap';
import './MovieDetailpage.style.css';
import Actor from './component/Actor/Actor';
import './component/Actor/Actor.style.css';
import Recommendation from './component/recommendation/Recommendation';
import Trailer from './component/Trailer/Trailer';
import Review from './component/Review/Review';

const MovieDetailPage = () => {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useDetailMovieQuery(id);
 
  

  if (isLoading) {
    return <h1>Loading...</h1>
  }
  if (isError) {
    return <Alert variant='danger'>{error.message}</Alert>;
  }



  // console.log('vvv', DetailData.data);
  const genreNames = data.genres;
  const companyName = data.production_companies[0].name;
  // console.log(companyName)

  

  return (
    <div id='movie-detail-page'>
      <div className='movie-detail-page-container'>
        <div className='detail-top-wrap' style={{backgroundImage:`url( https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${data?.backdrop_path})`}}>
          <div className='detail-top'>
            <div>
              <img src={`https://media.themoviedb.org/t/p/w600_and_h900_bestv2${data?.poster_path}`} alt={data?.title}/>
            </div>
            <div>
              <h1>{data?.title}</h1>
              <ul className='mdp-genre'>
                {genreNames.map(genre => (
                  <li key={genre.id}>{genre.name}</li>
                ))}
              </ul>
              <ul className='mdp-short-ov'>
                <li>{companyName}</li>
                <li>⭐️{data?.vote_average}(🗳️{data?.vote_count})</li>
                <li>{data?.release_date}</li>
              </ul>
              <ul className='mdp-overview'>
                <li>" {data?.tagline} "</li>
                <li>{data?.overview}</li>
              </ul>
            </div>
          </div>
        </div>

        <div className='mdp-cast-reco'>
          <Actor />
          <Recommendation />
        </div>
            
        <Trailer />

        <Review id={id}/>
        </div>
      </div>
  )
}

export default MovieDetailPage