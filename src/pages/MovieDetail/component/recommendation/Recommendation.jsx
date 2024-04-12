import React from 'react'
import { useParams } from 'react-router-dom';
import { useRecommendationQuery } from '../../../../hooks/useRecommendation';
import { Alert } from 'react-bootstrap';

const Recommendation = () => {
    const { id } = useParams();
    const { data, isLoading, isError, error } = useRecommendationQuery(id);

    if (isLoading) {
        return <h1>Loading...</h1>
    }
    if (isError) {
    return <Alert variant='danger'>{error.message}</Alert>;
    }

    
    const RecoRange = data;
    console.log('vvv',RecoRange.data.results)

    const Recommendations = RecoRange.data.results.map(reco => (
        <li key={reco.title}>
          <img src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${reco.poster_path}`} alt={reco.title}/>
        </li>
      ));

  return (
    <div id='recommendation-movie'>
        <ul>
            {Recommendations}
        </ul>
    </div>
  )
}

export default Recommendation