import React, { useReducer } from 'react'
import { useLocation } from "wouter"
import css from './SearchForm.module.css'

const RATINGS = ['g', 'pg', 'pg-13', 'r']

const reducer = (state, action) => {
  if (action.type === 'update_keyword') {
    return {
      ...state,
      keyword: action.payload,
      times: state.times + 1
    }
  } else if (action.type === 'update_rating') {
    return {
      ...state,
      rating: action.payload,
      times: state.times + 1
    }
  }

  return state
}

function SearchForm({ initialKeyword = '', initialRating = 'g'}) {

    const [state, dispatch] = useReducer(reducer, {
      keyword: decodeURIComponent(initialKeyword),
      rating: initialRating,
      times: 0
    })

    const {keyword, rating, times} = state

    const [_, pushLocation] = useLocation();

    const handleChange = evt => {
      dispatch({ type: 'update_keyword', payload: evt.target.value })
    }

    const handleSubmit = evt => {
        evt.preventDefault()
        // navegar a otra ruta
        pushLocation(`/search/${keyword}/${rating}`)
    }

    const handleChangeRating = evt => {
      dispatch({ type: 'update_rating', payload: evt.target.value })
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