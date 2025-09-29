import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header style={{ padding: 16, borderBottom: "1px solid #eee" }}>
      <nav>
        <Link to="/">Accueil</Link> | <Link to="/about">À propos</Link>
      </nav>
    </header>
  );
}
