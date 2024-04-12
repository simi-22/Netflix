import React from 'react'
import { useParams } from 'react-router-dom';
import { useDetailMovieQuery } from '../../hooks/useDetailMovie';
import { Alert } from 'react-bootstrap';
import './MovieDetailpage.style.css';
import Actor from './component/Actor/Actor';
import './component/Actor/Actor.style.css';
import Recommendation from './component/recommendation/Recommendation';

const MovieDetailPage = () => {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useDetailMovieQuery(id);
 
  

  if (isLoading) {
    return <h1>Loading...</h1>
  }
  if (isError) {
    return <Alert variant='danger'>{error.message}</Alert>;
  }


  const DetailData = data;
  // console.log('vvv', DetailData.data);
  const genreNames = DetailData.data.genres;
  const companyName = DetailData.data.production_companies[0].name;
  // console.log(companyName)

  // console.log(genreNames);
  let posterBackDrop = {
    width: "100%",
    height: "400px",
    backgroundImage: `url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${DetailData.data?.backdrop_path}) alt={DetailData.data?.title} cover`,
  };

  return (
    <div id='movie-detail-page'>
      <div className='movie-detail-page-container'>
        <div className='detail-top-wrap' style={{backgroundImage:`url( https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${DetailData.data?.backdrop_path})`}}>
          <div className='detail-top'>
            <div>
              <img src={`https://media.themoviedb.org/t/p/w600_and_h900_bestv2${DetailData.data?.poster_path}`} alt={DetailData.data?.title}/>
            </div>
            <div>
              <h1>{DetailData.data?.title}</h1>
              <ul className='mdp-genre'>
                {genreNames.map(genre => (
                  <li key={genre.id}>{genre.name}</li>
                ))}
              </ul>
              <ul className='mdp-short-ov'>
                <li>{companyName}</li>
                <li>⭐️{DetailData.data?.vote_average}(🗳️{DetailData.data?.vote_count})</li>
                <li>{DetailData.data?.release_date}</li>
              </ul>
              <ul className='mdp-overview'>
                <li>" {DetailData.data?.tagline} "</li>
                <li>{DetailData.data?.overview}</li>
              </ul>
            </div>
          </div>
        </div>
          <Actor />
          <Recommendation />


          <h2>관련 영화</h2>
          <ul>
            <li>영화 카드</li>
          </ul>
        
        
        <div>
          <h2>트레일러</h2>
          <div>동영상</div>
        </div>
        <div>배우</div>
        <div>Review</div>
        </div>
      </div>
  )
}

export default MovieDetailPage