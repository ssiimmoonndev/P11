import locationsData from "../data/logement.json";
import Card from "../components/Card.jsx";

export default function Home() {
  return (
    <div className="body-style">
      <div className="image-source">
        <div className="overlay"/>
        <div className="title-main">Chez vous, partout et ailleurs</div>
      </div>
      <section className="gallery">
        {locationsData.map((location) => (
          <Card
          key={location.id}
          id={location.id}
          title={location.title}
          cover={location.cover}
          />
        ))}
      </section>
    </div>
  )
}
