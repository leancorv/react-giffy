import Gif from "components/Gif"
import Spinner from "components/Spinner"
import useGlobalGifs from "hooks/useGlobalGifs"
import useSingleGif from "hooks/useSingleGif"

export default function Detail({ params }) {
  const {gif, isLoading, isError} = useSingleGif({id: params.id})

  if (isLoading) return <Spinner />
  if (!gif) return null

  return <>
      <h3 className="App-title">{gif.title}</h3>
      <Gif {...gif} />
  </>
}
