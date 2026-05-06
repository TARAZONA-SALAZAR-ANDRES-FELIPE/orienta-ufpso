import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Navegación Rápida</h4>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/consultas">Consultas IA</Link></li>
            <li><Link to="/glosario">Glosario</Link></li>
            <li><Link to="/mapa">Mapa del Campus</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Información</h4>
          <ul>
            <li><a href="https://ufpso.edu.co" target="_blank" rel="noreferrer">Sitio oficial UFPS Ocaña</a></li>
            <li><a href="https://ufpso.edu.co/index.php/bienestar-universitario" target="_blank" rel="noreferrer">Bienestar Universitario</a></li>
            <li><a href="https://ufpso.edu.co/index.php/registro-y-control" target="_blank" rel="noreferrer">Registro y Control</a></li>
            <li><a href="https://ufpso.edu.co/index.php/contacto" target="_blank" rel="noreferrer">Contacto</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Sobre OrientaUFPSO</h4>
          <p>
            Plataforma institucional de orientación y soporte para estudiantes
            de la Universidad Francisco de Paula Santander - Seccional Ocaña.
          </p>
          <p className="footer-badge">Diseñado por ProtoByte</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} UFPS Ocaña — Todos los derechos reservados</p>
      </div>
    </footer>
  );
}

export default Footer;
