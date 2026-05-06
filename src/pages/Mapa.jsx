const bloques = [
  {
    nombre: "Bloque A",
    icon: "🏫",
    descripcion: "Salones de clase y laboratorios de ciencias básicas.",
    detalle: "Física, Química, Matemáticas",
  },
  {
    nombre: "Bloque B",
    icon: "💻",
    descripcion: "Aulas para carreras de ingeniería y tecnología.",
    detalle: "Ingeniería de Sistemas, Civil, Industrial",
  },
  {
    nombre: "Bloque C",
    icon: "🏛️",
    descripcion: "Espacios administrativos y oficinas de decanatura.",
    detalle: "Decanaturas, Coordinaciones académicas",
  },
  {
    nombre: "Edificio Administrativo",
    icon: "🏢",
    descripcion: "Edificio principal con rectoría, registro y servicios estudiantiles.",
    detalle: "Rectoría, Registro y Control, Financiero",
  },
  {
    nombre: "Bienestar Universitario",
    icon: "🌿",
    descripcion: "Centro de servicios estudiantiles, cafetería y actividades recreativas.",
    detalle: "Enfermería, Psicología, Deportes, Cafetería",
  },
  {
    nombre: "Biblioteca",
    icon: "📚",
    descripcion: "Recursos académicos, salas de estudio y acceso a bases de datos.",
    detalle: "Préstamo de libros, salas digitales, hemeroteca",
  },
];

function Mapa() {
  return (
    <div className="mapa-page">
      <div className="page-container">
        <div className="page-header">
          <h1>Mapa del Campus</h1>
          <p>
            Explora las instalaciones de la Universidad Francisco de Paula Santander
            · Seccional Ocaña.
          </p>
        </div>

        <div className="bloques-grid">
          {bloques.map((bloque, index) => (
            <div key={index} className="bloque-card">
              <span className="bloque-icon">{bloque.icon}</span>
              <h3>{bloque.nombre}</h3>
              <p>{bloque.descripcion}</p>
              <span className="bloque-detalle">{bloque.detalle}</span>
            </div>
          ))}
        </div>

        <div className="mapa-cta">
          <p>¿No encuentras el lugar que buscas?</p>
          <a
            href="https://ufpso.edu.co"
            target="_blank"
            rel="noreferrer"
            className="mapa-link"
          >
            Visitar sitio oficial UFPS Ocaña →
          </a>
        </div>
      </div>
    </div>
  );
}

export default Mapa;
