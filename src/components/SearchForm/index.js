import React, { useState } from 'react'
import css from './SearchForm.module.css'

function SearchForm({ onSubmit }) {
    const [keyword, setKeyword] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        // navegar a otra ruta
        onSubmit({keyword})
    }

    const handleChange = e => {
        setKeyword(e.target.value)
    }

  return (
    <form onSubmit={handleSubmit} className={css["c-search"]}>
      <button className={css["c-search-btn"]}>Buscar</button>
      <input className={css["c-search-input"]} placeholder="Search a gif here..." onChange={handleChange} type='text' value={keyword} />
    </form>
  )
}

export default React.memo(SearchForm)