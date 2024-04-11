import React, { useState } from 'react'
import { useSearchMovieQuery } from '../../hooks/useSearchMovie'
import { useNavigate, useSearchParams } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { Alert } from 'react-bootstrap';
import MovieCard from '../../common/MovieCard/MovieCard';
import '../Movies/Moviepage.style.css'
import ReactPaginate from 'react-paginate';

import Search from './component/Search';


//경로 두가지
//nav클릭(popularMovie 보여줌), 검색(키워드와 연관된 영화 보여줌)

//페이지네이션 설치
//page state 만들기
//페이지네이션 클릭할때마다 page 바꿔주기
//page 값이 바뀔때 마다 useSearchMovie에 page까지 넣어서 fetch
const MoviePage = () => {
  //url 쿼리값얻어옴
  const [query, setQuery] = useSearchParams();
  const navigate = useNavigate();

  //페이지네이션
  const [page, setPage] = useState(1);
  //키워드
  const keyword = query.get("q");

  const handlePageClick = ({selected}) => {
    setPage(selected + 1)
  }

  const {data, isLoading, isError, error} = useSearchMovieQuery({
    keyword, page
  });
  console.log('aaa',data);


  if(isLoading){
    return <h1>Loading...</h1>
  }if(isError){
      return <Alert variant='danger'>{error.message}</Alert>;
  }


  //장르 필터
  

  return (
    <div id='movie-page-container'>
      {/* 검색을 했을 경우에만 */}
     {keyword ?
      <div className='m-p-title'>
        <p>Showing {data.total_results} results for</p>
        <p>{keyword}</p>
      </div>
      : ''}

      <Search />
      <div>
        <div>
          <select className='genre-filter'>
            <option>장르1</option>
            <option>장르2</option>
          </select>
          <select className=''>
            <option>인기순</option>
            <option>최신순</option>
            <option>평점높은순</option>
            <option>평점낮은순</option>
          </select>
        </div>
        <div className='m-p-movie-card-wrap'>{data?.results.map((movie, index) => 
          <div key={index}><MovieCard movie={movie}/></div>
          )}
        </div>
        <div id='pagination-wrap'>
          <ReactPaginate
          previousLabel="Previous"
          nextLabel="Next"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          pageCount={data?.total_pages}//전체페이지
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName="pagination"
          activeClassName="active"
          forcePage={page-1}
          // forcePage={pageOffset}
        />
      </div>
      </div>
    </div>
  )
}

export default MoviePage