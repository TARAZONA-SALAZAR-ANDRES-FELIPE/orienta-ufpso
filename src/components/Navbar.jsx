import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <img src={logo} alt="UFPS Ocaña logo" />
          <h2>UFPS Ocaña</h2>
        </Link>

        <ul className="nav-menu">
          {location.pathname !== "/" && (
            <li>
              <Link to="/" className={`nav-link${isActive("/") ? " nav-link--active" : ""}`}>
                Inicio
              </Link>
            </li>
          )}
          <li>
            <Link
              to="/consultas"
              className={`nav-link${isActive("/consultas") ? " nav-link--active" : ""}`}
            >
              Consultas IA
            </Link>
          </li>
          <li>
            <Link
              to="/glosario"
              className={`nav-link${isActive("/glosario") ? " nav-link--active" : ""}`}
            >
              Glosario
            </Link>
          </li>
          <li>
            <Link
              to="/mapa"
              className={`nav-link${isActive("/mapa") ? " nav-link--active" : ""}`}
            >
              Mapa
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
