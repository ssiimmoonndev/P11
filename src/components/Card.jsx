import { Link } from "react-router-dom";

export default function Card({id, title, cover}) {
  return (
    <Link to={`/location/${id}`} className="location-card">
      <img src={cover} alt={title} className="card-image" />
      <span className="card-title">{title}</span>
    </Link>
  )
}