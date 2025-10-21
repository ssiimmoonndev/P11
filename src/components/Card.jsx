import { Link } from "react-router-dom";

export default function Card({title, cover}) {
  return (
    <div className="location-card">
      <img src={cover} alt={title} className="card-image" />
      <div className="card-gradient"></div>
      <span className="card-title">{title}</span>
    </div>
  )
}