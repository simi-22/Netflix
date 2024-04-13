import React from 'react'
import { useParams } from 'react-router-dom';
import { useReviewQuery } from '../../../../hooks/useReview';
import { Alert } from 'react-bootstrap';
import './Review.style.css';

const Review = () => {
    const { id } = useParams();
    const { data, isLoading, isError, error } = useReviewQuery(id);

    if (isLoading) {
        return <h1>Loading...</h1>
    }
    if (isError) {
    return <Alert variant='danger'>{error.message}</Alert>;
    }
    console.log('vvv', data);

    // const renderReviews = () => {
    //   return data.results.map((review, index) => (
    //     <li key={index}>
    //       <p>Author: {review.author}</p>
    //       <p>Content: {review.content}</p>
    //     </li>
    //   ));
    // };
    const renderReviews = data.results.map(reviews => (
      <li key={reviews.id} className='each-reviews'>
          <div className='writer'>
            <p><img src="https://mblogthumb-phinf.pstatic.net/MjAyMDExMDFfMyAg/MDAxNjA0MjI5NDA4NDMy.5zGHwAo_UtaQFX8Hd7zrDi1WiV5KrDsPHcRzu3e6b8Eg.IlkR3QN__c3o7Qe9z5_xYyCyr2vcx7L_W1arNFgwAJwg.JPEG.gambasg/%EC%9C%A0%ED%8A%9C%EB%B8%8C_%EA%B8%B0%EB%B3%B8%ED%94%84%EB%A1%9C%ED%95%84_%ED%8C%8C%EC%8A%A4%ED%85%94.jpg?type=w800" alt="프로필 이미지" /></p>
            <p>@{reviews.author_details.username}</p>
          </div>
          <p>{reviews.content}</p>
          {/* <p>{reviews.created_at}</p> */}
      </li>
    ));

  return (
    <div id='movie-reviews'>
      <h2>Review</h2>
      <ul className='movie-reviews-wrap'>
        {renderReviews}
      </ul>
    </div>
  )
}

export default Review