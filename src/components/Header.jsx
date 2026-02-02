import { NavLink } from "react-router-dom";
import "../style/header.scss"
import logo from "../assets/LOGO.png"; 

export default function Header() {
  return (
    <header className="body-style">
      <img className="header-logo" src={logo} alt="Logo Kasa" />
      <nav className="liens">
        <NavLink 
            to="/" 
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Accueil
          </NavLink>
          
          <NavLink 
            to="/about" 
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            À propos
          </NavLink>
      </nav>
    </header>
  );
}