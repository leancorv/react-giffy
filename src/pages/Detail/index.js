import { useContext } from "react"
import StaticContext from "../../context/StaticContext"

export default function Detail({ params }) {
  useContext(StaticContext)
  console.log(params.id)
  return (
    <h1>Gif con id {params.id}</h1>
  )
}
