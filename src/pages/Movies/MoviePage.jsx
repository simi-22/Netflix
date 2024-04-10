import React, { useState } from 'react'
import { useSearchMovieQuery } from '../../hooks/useSearchMovie'
import { useSearchParams } from 'react-router-dom';
import { Alert } from 'react-bootstrap';
import MovieCard from '../../common/MovieCard/MovieCard';
import '../Movies/Moviepage.style.css'
import ReactPaginate from 'react-paginate';


//경로 두가지
//nav클릭(popularMovie 보여줌), 검색(키워드와 연관된 영화 보여줌)

//페이지네이션 설치
//page state 만들기
//페이지네이션 클릭할때마다 page 바꿔주기
//page 값이 바뀔때 마다 useSearchMovie에 page까지 넣어서 fetch
const MoviePage = () => {
  //url 쿼리값얻어옴
  const [query, setQuery] = useSearchParams();
  const [page, setPage] = useState(1);
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

  return (
    <div id='movie-page-container'>
      <div>
        <div>필터</div>
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