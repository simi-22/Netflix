import React from 'react'
import { useTopRateMoviesQuery } from '../../../../hooks/useTopRateMovies'
import { Alert } from 'react-bootstrap'
// import MovieCard from "../../../../common/MovieCard/MovieCard";
import "slick-carousel/slick/slick-theme.css";
import 'slick-carousel/slick/slick.css';
// import Slider from 'react-slick';
import MovieSlider from '../../../../common/MovieSlider/MovieSlider';

const TopRateMovieSlide = () => {
    const {data, isLoading, isError, error} = useTopRateMoviesQuery()
    
    if(isLoading){
        return <h1>Loading...</h1>
    }if(isError){
        return <Alert variant='danger'>{error.message}</Alert>;
    }

   
    return (
        <div className='movie-slide-container'>
            <MovieSlider title='Top Rate Movies' movies={data.results} />
        </div>
  )
}

export default TopRateMovieSlide