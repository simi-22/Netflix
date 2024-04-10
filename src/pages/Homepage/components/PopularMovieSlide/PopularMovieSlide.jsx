import React from 'react'
import { usePopularMoviesQuery } from '../../../../hooks/usePopularMovies'
import { Alert } from 'react-bootstrap'
// import MovieCard from '../MovieCard/MovieCard';
import "slick-carousel/slick/slick-theme.css";
import 'slick-carousel/slick/slick.css';
import MovieSlider from '../../../../common/MovieSlider/MovieSlider';
// import Slider from 'react-slick';

const PopularMovieSlide = () => {
    const {data, isLoading, isError, error} = usePopularMoviesQuery()
    
    if(isLoading){
        return <h1>Loading...</h1>
    }if(isError){
        return <Alert variant='danger'>{error.message}</Alert>;
    }

   
    return (
    <div id='popular-movie-container' className='movie-slide-container'>
        <MovieSlider title='Popular Movies' movies={data.results} />
    </div>
  )
}

export default PopularMovieSlide