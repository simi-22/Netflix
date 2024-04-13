import React from 'react'
import { useParams } from 'react-router-dom';
import YouTube from 'react-youtube'
import { useTrailerQuery } from '../../../../hooks/useTrailer';
import { Alert } from 'react-bootstrap';
import './Trailer.style.css'

const Trailer = () => {
    const { id } = useParams();
    const { data, isLoading, isError, error } = useTrailerQuery(id);

    if (isLoading) {
        return <h1>Loading...</h1>
    }
    if (isError) {
    return <Alert variant='danger'>{error.message}</Alert>;
    }

    // console.log('vvv', data)

     // 데이터가 존재하지 않거나 key 속성이 없는 경우
     if (!data || !data.key) {
        return <Alert variant='danger'>Trailer not found</Alert>;
    }
    
    const opts = {
        height: '600',
        width: '1000',
        };


  return (
    <div id='trailer'>
        <h2>Trailer</h2>
        <div><YouTube videoId={data.key} opts={opts}/></div>
    </div>
  )
}

export default Trailer