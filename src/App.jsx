import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import ErrorPage from "./pages/Error.jsx";

export default function App() {
  return (
    <div>
      <nav style={{ marginBottom: 16 }}>
        <Link to="/">Accueil</Link> | <Link to="/about">À propos</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* Route 404 */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}
