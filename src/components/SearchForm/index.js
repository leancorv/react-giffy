import React, { useReducer, useState } from 'react'
import { useLocation } from "wouter"
import css from './SearchForm.module.css'

const RATINGS = ['g', 'pg', 'pg-13', 'r']

const reducer = (state, param) => {
  console.log(param)
  return {
    ...state,
    keyword: param,
    times: state.times + 1
  }
}

function SearchForm({ initialKeyword = '', initialRating = 'g'}) {
    // const [keyword, setKeyword] = useState(decodeURIComponent(initialKeyword));
    const [rating, setRating] = useState(initialRating);
    // const [times, setTimes] = useState(0)

    const [state, dispatch] = useReducer(reducer, {
      keyword: decodeURIComponent(initialKeyword),
      times: 0
    })

    const {keyword, times} = state

    const [_, pushLocation] = useLocation();

    const updateKeyword = (keyword) => {
      dispatch(keyword)
    }

    const handleChange = evt => {
      updateKeyword(evt.target.value)
    }

    const handleSubmit = evt => {
        evt.preventDefault()
        // navegar a otra ruta
        pushLocation(`/search/${keyword}/${rating}`)
    }

    const handleChangeRating = evt => {
      setRating(evt.target.value)
    }

  return (
    <form onSubmit={handleSubmit} className={css["c-search"]}>
      <button className={css["c-search-btn"]}>Buscar</button>
      <input 
        className={css["c-search-input"]} 
        placeholder="Search a gif here..." 
        onChange={handleChange} type='text' 
        value={keyword} 
      />
      <select onChange={handleChangeRating} value={rating}>
        <option disabled>Rating type</option>
        {RATINGS.map(rating => (
          <option key={rating}>{rating}</option>
        ))}
      </select>
      <small>{times}</small>
    </form>
  )
}

export default React.memo(SearchForm)