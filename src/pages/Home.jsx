import "../style/home.scss"
import locationsData from "../data/logement.json";

export default function Home() {
  return (
    <div className="body-style">
      <div className="image-source">
        <div className="overlay"/>
        <div className="title-main">Chez vous, partout et ailleurs</div>
      </div>
      <section className="gallery">
        {locationsData.map((location) => (
          // Balise <a> pour que la carte soit cliquable
          <a 
            key={location.id} 
            className="location-card"
          >
            <img src={location.cover} alt={location.title} className="card-image" />
            <div className="card-gradient"></div>
            <span className="card-title">{location.title}</span>
          </a>
        ))}
      </section>
    </div>
  )
}
