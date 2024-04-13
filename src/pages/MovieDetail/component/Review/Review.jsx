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
  return (
    <div id='movie-reviews'>{data.data.results.length === 0 ? (
        <div className="mb-5">0 개의 리뷰가 있습니다.</div>
      ) : (
        data.data.results.map((review, index) => (
          <p review={review} key={index}></p>
        ))
      )}</div>
  )
}

export default Review