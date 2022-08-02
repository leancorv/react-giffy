import { useEffect, useState } from "react"
import { Link, useLocation } from "wouter"
import ListOfGifs from "../../components/ListOfGifs"
import getGifs from "../../services/getGifs"

const POPULAR_GIFS = ["Matrix", "Chile", "Colombia", "Ecuador"]

export default function Home() {
    const [keyword, setKeyword] = useState('')
    const [path, pushLocation] = useLocation()

    const [loading, setLoading] = useState(false)
    const [gifs, setGifs] = useState([])
    
    // <----------------------
    useEffect(function() {
      setLoading(true)
      getGifs({ keyword: 'Rick' })
        .then(gifs => {
          setGifs(gifs)
          setLoading(false)
        })
    }, [keyword])

    // <----------------------

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
        <h3 className="App-title">Última búsqueda</h3>
        <ListOfGifs gifs={gifs} />
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
