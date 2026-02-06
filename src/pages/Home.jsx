import locationsData from "../data/logement.json";
import Card from "../components/Card.jsx";
import bannerImg from "../assets/image-home.png";

export default function Home() {
  return (
    <div className="body-style">
      <div className="image-source" style={{ backgroundImage: `url(${bannerImg})` }}>
        <div className="overlay"/>
        <div className="title-main">Chez vous, partout et ailleurs</div>
      </div>
      <section className="gallery">
        {locationsData.map(location => {
         return (
          <Card
            key={location.id}
            id={location.id}
            title={location.title}
            cover={location.cover}
          />
         ) 
        }
        )}
      </section>
    </div>
  )
}
