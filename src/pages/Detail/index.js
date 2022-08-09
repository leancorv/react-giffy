import Gif from "components/Gif"
import useGlobalGifs from "hooks/useGlobalGifs"
import useSingleGif from "hooks/useSingleGif"

export default function Detail({ params }) {
  const {gif} = useSingleGif({id: params.id})

  if (!gif) return null

  return <>
      <h3 className="App-title">{gif.title}</h3>
      <Gif {...gif} />
  </>
}
