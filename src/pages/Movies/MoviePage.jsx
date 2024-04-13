import React, { useEffect, useState } from 'react'
import { useSearchMovieQuery } from '../../hooks/useSearchMovie'
import { useSearchParams } from 'react-router-dom';
import { Alert, Col, Row } from 'react-bootstrap';
import MovieCard from '../../common/MovieCard/MovieCard';
import '../Movies/Moviepage.style.css'
import ReactPaginate from 'react-paginate';

import Search from './component/Search';
import Sort from './component/Sort';


//경로 두가지
//nav클릭(popularMovie 보여줌), 검색(키워드와 연관된 영화 보여줌)

//페이지네이션 설치
//page state 만들기
//페이지네이션 클릭할때마다 page 바꿔주기
//page 값이 바뀔때 마다 useSearchMovie에 page까지 넣어서 fetch
const MoviePage = () => {
  //url 쿼리값얻어옴
  const [query, setQuery] = useSearchParams();
  const [sort, setSort] = useState("");
  const keyword = query.get("q");
  const [page, setPage] = useState(1);
  const [data, setData] = useState(null);
  const [genre, setGenre] = useState(null);

  const handlePageClick = ({ selected }) => {
    setPage(selected + 1);
    setSort("");
    setGenre(null);
  };

  const {
    isLoading,
    isError,
    error,
    data: searchData,
  } = useSearchMovieQuery({
    keyword,
    page,
  });

  const sortMovie = () => {
    if (sort === "asc") {
      const sortedData = data.results.sort(
        (a, b) => a.popularity - b.popularity
      );
      setData({ ...data, results: sortedData });
      return;
    }
    const sortedData = data.results.sort((a, b) => b.popularity - a.popularity);
    setData({ ...data, results: sortedData });
  };

  const filterMovieByGenre = () => {
    const filteredData = data.results.filter((movie) => {
      return movie.genre_ids.includes(genre.id);
    });
    setData({ ...data, results: filteredData });
  };

  useEffect(() => {
    if (searchData) {
      setData(searchData);
    }
  }, [searchData]);

  useEffect(() => {
    if (sort !== "") {
      sortMovie();
    }
  }, [sort]);

  useEffect(() => {
    if (genre) {
      filterMovieByGenre();
    }
  }, [genre]);


  // console.log('aaa',data);


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
        {data && data.total_results && (
          <p>Showing {data.total_results} results for</p>
        )}
        <p>{keyword}</p>
      </div>
      : ''}

      <Search />


      <div>
        <div>
        <Sort sort={sort} setSort={setSort} genre={genre} setGenre={setGenre} />
      {data?.results.length === 0 ? (
        <div>{keyword} 와 일치하는 영화가 없습니다.</div>
      ) : (
        <div className="m-p-movie-card-wrap">
          {data?.results.map((movie, index) => (
            <div key={index} >
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
      )}
        </div>
        
        <div id='pagination-wrap'>
          <ReactPaginate
          previousLabel="<"
          nextLabel=">"
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
          marginPagesDisplayed={1}
          pageRangeDisplayed={3}
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