import { Link } from "react-router-dom";
import "../style/header.scss"

export default function Header() {
  return (
    <header className="body-style">
      <img src="./src/assets/LOGO.png" alt="Logo Kasa" />
      <nav className="liens">
        <Link to="/">Accueil</Link> | <Link to="/about">À propos</Link>
      </nav>
    </header>
  );
}
