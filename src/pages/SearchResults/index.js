import { useEffect, useRef } from "react"
import ListOfGifs from "components/ListOfGifs"
import Spinner from "components/Spinner"
import {useGifs} from "hooks/useGifs"
import useNearScreen from "hooks/useNearScreen"

export default function SearchResults({ params }) {
  const { keyword } = params
  const { loading, gifs, setPage } = useGifs({ keyword })
  const externalRef = useRef()
  const {isNearScreen} = useNearScreen({ externalRef: loading ? null : externalRef })

  // const handleNextPage = () => setPage(prevPage => prevPage + 1)
  
  // const handleNextPage = () => console.log('next page')

  // useEffect(function() {
  //   if (isNearScreen) handleNextPage()
  // })

  return <>
    {
      loading 
        ? <Spinner /> 
        : <>
          <h3 className="App-title">{decodeURI(keyword)}</h3>
          <ListOfGifs gifs={gifs} />
          <div id="visor" ref={externalRef}></div>
        </>
    }
  </>
}
