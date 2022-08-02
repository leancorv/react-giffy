import { useEffect, useState } from "react";
import getGifs from "../services/getGifs";
import Gif from "./Gif";

export default function ListOfGifs({ params }) {
    const { keyword } = params
    const [loading, setLoading] = useState(false)

    const [gifs, setGifs] = useState([])

    useEffect(function () {
        setLoading(true)
        getGifs({ keyword })
          .then(gifs => {
            setGifs(gifs)
            setLoading(false)
        })
    }, [keyword])

    if (loading) return <i>Cargando...⌚</i>

  return <>
    {   
        gifs.map(({id, title, url}) => 
            <Gif 
                id={id}
                key={id}
                title={title} 
                url={url} 
            />
        )
    }
  </>
}
