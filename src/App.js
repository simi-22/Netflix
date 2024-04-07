import { Route, Routes } from 'react-router-dom'
import AppLayout from './layout/AppLayout';
import HomePage from './pages/Homepage/Homepage';
import MoviePage from './pages/Movies/MoviePage';
import MovieDetailPage from './pages/MovieDetail/MovieDetailPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './pages/Homepage/components/Banner/Banner.style.css';
import './layout/Navbar.style.css';


//홈'/'
//영화전체를보여주는페이지(서치) '/movies'
//영화상세페이지 '/movies/:id'
//추천영화 '/movies/:id/recommandation'
//리뷰 '/movies/:id/reviews'


function App() {
  return (
    <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path='movies'>
            <Route index element={<MoviePage/>} />
            <Route path=':id' element={<MovieDetailPage />}/>
          </Route>
        </Route>
        <Route path='*' element={<NotFoundPage />}></Route>
    </Routes>
  );
}

export default App;
