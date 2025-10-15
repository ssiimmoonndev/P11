import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="error-style">
      <img className="img-404" src="./src/assets/404.png" alt="Erreur 404" />
      <h2 className="oups">Oups ! La page que vous demandez n'existe pas.</h2>
      <div className="link-to-home">
        <Link to="/">Retourner sur la page d'accueil</Link>
      </div> 
    </div>
  )
}
