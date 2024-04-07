import React from 'react'
import Alert from 'react-bootstrap/Alert';
import { usePopularMoviesQuery } from '../../../../hooks/usePopularMovies'

const Banner = () => {
  const {data, isLoading, isError, error} = usePopularMoviesQuery();
  console.log(data); 

  if(isLoading){
    <h1>Loading...</h1>
  }
  if(isError){
    <Alert variant={'danger'}>{error.message}</Alert>
  }
  return (
    <div style={{
        backgroundImage:"url(" + 
        `https://media.themoviedb.org/t/p/w1066_and_h600_bestv2${data?.results[0].backdrop_path}` + 
        ")",
    }}
    className='banner'
    >
        <div className='banner-text-box'>
            <h1>{data?.results[0].title}</h1>
            <p>{data?.results[0].overview}</p>
        </div>
    </div>
  )
}

export default Banner