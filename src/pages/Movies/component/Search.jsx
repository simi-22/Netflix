import React, { useState } from 'react'
import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import './Search.style.css'

const Search = () => {
    const navigate = useNavigate();
    const [keywords, setKeywords] = useState("");

    
    //검색창
    const searchByKeyword = (event) => {
        event.preventDefault();
        //url바꿔주기
        navigate(`/movies?q=${keywords}`);
    }
    
  return (
    <div>
        <Form className="d-flex" onSubmit={searchByKeyword}>
                <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={keywords}
                onChange={(event) => setKeywords(event.target.value)}
                />
                <button><FontAwesomeIcon icon={faMagnifyingGlass} type='submit' /></button>
        </Form>
    </div>
  )
}

export default Search