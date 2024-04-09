import React, { useRef, useState } from 'react';
import '../MovieSlider/MovieSlider.style.css';
import Slider from 'react-slick';
import MovieCard from '../MovieCard/MovieCard';

const MovieSlider = ({title, movies}) => {
    const [slideIndex, setSlideIndex] = useState(0);
    const [updateCount, setUpdateCount] = useState(0);
    let sliderRef = useRef(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 2500,
        pauseOnHover: true,
        afterChange: () => setUpdateCount(updateCount + 1),
        beforeChange: (current, next) => setSlideIndex(next)
      };
    return (
        <div id='movie-slide-container'>
            {/* <p>Total updates: {updateCount} </p> */}
       
            <h3>{title}</h3>
            <Slider ref={slider => {
                sliderRef = slider;
                }}{...settings} 
                className='movie-slide'
            >
                {movies.map((movie, index)=><MovieCard movie={movie} key={index}/>)}
            </Slider>
            <input
            onChange={e => sliderRef.slickGoTo(e.target.value)}
            value={slideIndex}
            type="range"
            min={0}
            max={20}
        />
        </div>
  )
}

export default MovieSlider