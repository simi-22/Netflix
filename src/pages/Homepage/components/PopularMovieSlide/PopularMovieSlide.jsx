import React from 'react'
import { usePopularMoviesQuery } from '../../../../hooks/usePopularMovies'
import { Alert } from 'react-bootstrap'
import MovieCard from '../MovieCard/MovieCard';
import "slick-carousel/slick/slick-theme.css";
import 'slick-carousel/slick/slick.css';
import Slider from 'react-slick';

const PopularMovieSlide = () => {
    const {data, isLoading, isError, error} = usePopularMoviesQuery()
    
    if(isLoading){
        return <h1>Loading...</h1>
    }if(isError){
        return <Alert variant='danger'>{error.message}</Alert>;
    }

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 2,
    };
    return (
    <div id='popular-movie'>
        <h3>Popular Movies</h3>
        <Slider {...settings} className='popular-slide'>
            {data.results.map((movie, index)=><MovieCard movie={movie} key={index}/>)}
        </Slider>
    </div>
  )
}

export default PopularMovieSlide