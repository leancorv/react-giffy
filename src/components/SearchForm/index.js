import React, { useState } from 'react'

export default function SearchForm({ onSubmit }) {
    const [keyword, setKeyword] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        // navegar a otra ruta
        onSubmit(keyword)
    }

    const handleChange = e => {
        setKeyword(e.target.value)
    }

  return (
    <form onSubmit={handleSubmit}>
        <button>Buscar</button>
        <input placeholder="Search a gif here..." onChange={handleChange} type="text" value={keyword} />
    </form>
  )
}
