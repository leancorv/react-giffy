import { useState } from "react"
import { Link, useLocation } from "wouter"

const POPULAR_GIFS = ["Matrix", "Chile", "Colombia", "Ecuador"]

export default function Home() {
    const [keyword, setKeyword] = useState('')
    const [path, pushLocation] = useLocation()

    const handleSubmit = e => {
        e.preventDefault()
        // navegar a otra ruta
        pushLocation(`/search/${keyword}`)
        console.log(keyword)
    }

    const handleChange = e => {
        setKeyword(e.target.value)
    }

  return (
    <>
        <form onSubmit={handleSubmit}>
            <input placeholder="Search a gif here..." onChange={handleChange} type="text" value={keyword} />
        </form>
        <h3 className="App-title">Los gifs más populares</h3>
        <ul>
            {
                POPULAR_GIFS.map((popularGif) => (
                    <li key={popularGif}>
                        <Link to={`/search/${popularGif}`}>
                            Gifs de {popularGif}
                        </Link>
                    </li>
                ))
            }
        </ul>
    </>
  )
}
