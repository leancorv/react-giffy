import './Gif.css'

export default function Gif({ title, id, url}) {
  return (
    <a href='' className="Gif">
        <h4>{title}</h4>
        <small>{id}</small>
        <img alt={title} src={url} />
    </a>
  )
}
