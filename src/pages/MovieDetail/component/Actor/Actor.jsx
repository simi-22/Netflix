import React from 'react'
import { useActorQuery } from '../../../../hooks/useActor';
import { useParams } from 'react-router-dom';
import { Alert } from 'react-bootstrap';

const Actor = () => {
    const { id } = useParams();
    const { data, isLoading, isError, error } = useActorQuery(id);
    if (isLoading) {
        return <h1>Loading...</h1>
      }
      if (isError) {
        return <Alert variant='danger'>{error.message}</Alert>;
      }
      
      const CastRange = data;
      // console.log('vvv', CastRange.data);

      //
      const characters = CastRange.data.cast.map(actor => (
        <li key={actor.name}>
          <img src={`https://image.tmdb.org/t/p/w276_and_h350_face${actor.profile_path}`} alt={actor.name}/>
          <div>
            <p>{actor.name}</p>
            <p>{actor.character}</p>
          </div>
        </li>
      ));
    //   console.log(characters);

  return (
    <div id='cast-list'>
        <h3>Cast</h3>
        <ul>
           {characters}
        </ul>
        
    </div>
  )
}

export default Actor

