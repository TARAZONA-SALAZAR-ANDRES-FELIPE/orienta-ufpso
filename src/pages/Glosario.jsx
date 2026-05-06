import { useState } from "react";

const terms = [
  {
    term: "Homologación",
    categoria: "Académico",
    description:
      "Proceso para reconocer créditos obtenidos en otras instituciones educativas y aplicarlos a tu carrera en la UFPS.",
  },
  {
    term: "Fraccionamiento",
    categoria: "Financiero",
    description:
      "Opción de dividir el pago de la matrícula en varias cuotas durante el semestre, según el calendario de pagos.",
  },
  {
    term: "Supletorio",
    categoria: "Académico",
    description:
      "Examen adicional que se ofrece para recuperar una materia reprobada, generalmente al final del semestre.",
  },
  {
    term: "Corte",
    categoria: "Académico",
    description:
      "Período de evaluación académica que divide el semestre en etapas para calificar el rendimiento estudiantil.",
  },
  {
    term: "Cancelación de materia",
    categoria: "Administrativo",
    description:
      "Anulación de una asignatura inscrita durante el semestre en curso. Debe realizarse dentro del plazo establecido por Registro y Control.",
  },
  {
    term: "Matrícula",
    categoria: "Administrativo",
    description:
      "Registro oficial de un estudiante en la universidad para un semestre, que incluye la selección y pago de asignaturas.",
  },
  {
    term: "Paz y Salvo",
    categoria: "Administrativo",
    description:
      "Documento que certifica que el estudiante no tiene deudas pendientes con ninguna dependencia de la universidad.",
  },
  {
    term: "Carga Académica",
    categoria: "Académico",
    description:
      "Total de créditos o asignaturas que un estudiante cursa en un período académico determinado.",
  },
  {
    term: "Plan de Estudios",
    categoria: "Académico",
    description:
      "Conjunto de asignaturas y créditos organizados por semestres que conforman un programa académico.",
  },
  {
    term: "Registro y Control",
    categoria: "Dependencia",
    description:
      "Dependencia universitaria encargada de gestionar los procesos académicos: matrículas, notas, certificados y trámites estudiantiles.",
  },
  {
    term: "Bienestar Universitario",
    categoria: "Dependencia",
    description:
      "Servicios de apoyo psicológico, deportivo y social para el desarrollo integral de los estudiantes.",
  },
  {
    term: "Habilitación",
    categoria: "Académico",
    description:
      "Examen especial para estudiantes que reprobaron una asignatura con nota entre 2.0 y 2.9, para intentar aprobarla.",
  },
];

const categorias = ["Todos", "Académico", "Administrativo", "Financiero", "Dependencia"];

function Glosario() {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoriaActiva, setCategoriaActiva] = useState("Todos");

  const filteredTerms = terms.filter((item) => {
    const matchesSearch =
      item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategoria =
      categoriaActiva === "Todos" || item.categoria === categoriaActiva;
    return matchesSearch && matchesCategoria;
  });

  return (
    <div className="glosario-page">
      <div className="page-container">
        <div className="page-header">
          <h1>Glosario de Términos</h1>
          <p>
            Definiciones claras de términos académicos y administrativos de la UFPS Ocaña.
          </p>
        </div>

        {/* Buscador */}
        <div className="search-container">
          <input
            type="text"
            placeholder="🔍  Buscar término o descripción..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        {/* Filtros por categoría */}
        <div className="categoria-filters">
          {categorias.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoriaActiva(cat)}
              className={`categoria-btn${categoriaActiva === cat ? " categoria-btn--active" : ""}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Contador */}
        <p className="results-count">
          {filteredTerms.length} término{filteredTerms.length !== 1 ? "s" : ""} encontrado{filteredTerms.length !== 1 ? "s" : ""}
        </p>

        {/* Lista */}
        <div className="terms-container">
          {filteredTerms.length > 0 ? (
            <ul className="term-list">
              {filteredTerms.map((item, index) => (
                <li key={index} className="term-item">
                  <div className="term-header">
                    <h3>{item.term}</h3>
                    <span className={`term-categoria term-categoria--${item.categoria.toLowerCase()}`}>
                      {item.categoria}
                    </span>
                  </div>
                  <p>{item.description}</p>
                </li>
              ))}
            </ul>
          ) : (
            <div className="no-results">
              <span className="no-results-icon">🔍</span>
              <p>No se encontraron términos que coincidan con tu búsqueda.</p>
              <button
                onClick={() => { setSearchTerm(""); setCategoriaActiva("Todos"); }}
                className="reset-btn"
              >
                Limpiar filtros
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Glosario;
