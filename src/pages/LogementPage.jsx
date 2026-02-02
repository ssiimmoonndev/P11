import CarrouselContainer from "../components/Carrousel.jsx"
import locationsData from "../data/logement.json";
import { useParams, Navigate } from "react-router-dom"; 
import Dropdown from "../components/Dropdown.jsx";
import "../style/logement.scss";


export default function LogementPage() {
  const { id } = useParams();
  const ficheLogement = locationsData.find((logement) => logement.id === id);

  if (!ficheLogement) {
      return <Navigate to="/error" />;
  }

  const [firstName, lastName] = ficheLogement.host.name.split(' ');
 
  const stars = [1, 2, 3, 4, 5];

  return (
      <div className="logement-page">
          <CarrouselContainer pictures={ficheLogement.pictures} />

          <div className="logement-header">
              <div className="logement-info">
                  <h1>{ficheLogement.title}</h1>
                  <p className="location">{ficheLogement.location}</p>
                  <div className="tags-container">
                      {ficheLogement.tags.map((tag, index) => (
                          <span key={index} className="tag">{tag}</span>
                      ))}
                  </div>
              </div>
              <div className="logement-host-rating">
                  <div className="host-info">
                      <div className="host-name">
                          <span>{firstName}</span>
                          <span>{lastName}</span>
                      </div>
                      <img src={ficheLogement.host.picture} alt={ficheLogement.host.name} className="host-picture"/>
                  </div>

                  <div className="rating">
                      {stars.map((level) => (
                          ficheLogement.rating >= level ? (
                              <span key={level} className="star active">★</span> 
                          ) : (
                              <span key={level} className="star inactive">★</span>
                          )
                      ))}
                  </div>
              </div>
          </div>
          <div className="logement-dropdowns">
              <Dropdown title="Description" content={ficheLogement.description} />
              <Dropdown 
                  title="Équipements" 
                  content={
                      <ul>
                          {ficheLogement.equipments.map((item, index) => (
                              <li key={index}>{item}</li>
                          ))}
                      </ul>
                  } 
              />
          </div>
      </div>
  );
}
