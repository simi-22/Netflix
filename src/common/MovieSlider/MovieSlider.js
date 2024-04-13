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
        beforeChange: (current, next) => setSlideIndex(next),
        responsive: [
            {
              breakpoint: 1280,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 2,
                infinite: true,
              }
            },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 680,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            }
          ]
      };
    return (
        <div id='movie-slide-container'>
            <h3>{title}</h3>
            <Slider ref={slider => {
                sliderRef = slider;
                }}{...settings} 
                className='movie-slide'
            >
                {movies.map((movie, index)=><MovieCard movie={movie} key={index} orderNumber={index + 1} />)}
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