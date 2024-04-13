import React from 'react'
import { useParams } from 'react-router-dom';
import { useReviewQuery } from '../../../../hooks/useReview';
import { Alert } from 'react-bootstrap';

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
    <div>Review</div>
  )
}

export default Review