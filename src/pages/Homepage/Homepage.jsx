import React from 'react'
import Banner from './components/Banner/Banner'
import PopularMovieSlide from './components/PopularMovieSlide/PopularMovieSlide'
import TopRateMovieSlide from './components/TopRateSlide/TopRateMovieSlide'
import UpcomingMovieSlide from './components/UpcomingSlide/UpcomingMovieSlide'


//1. 배너 => popular 영화를 들고와서 첫번째 아이템을 보여주자
//2. popular movie
//3. top rated movie
//4. upcoming movie
const Homepage = () => {
  return (
    <div>
      <Banner />
      <TopRateMovieSlide />
      <PopularMovieSlide />
      <UpcomingMovieSlide />
    </div>
  )
}

export default Homepage