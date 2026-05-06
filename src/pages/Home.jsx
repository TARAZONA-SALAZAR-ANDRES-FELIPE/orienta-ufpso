import { Link } from "react-router-dom";

const quickLinks = [
  {
    icon: "🤖",
    title: "Consultas IA",
    desc: "Resuelve dudas académicas y administrativas con nuestro asistente inteligente.",
    to: "/consultas",
    label: "Ir al chat",
  },
  {
    icon: "📖",
    title: "Glosario",
    desc: "Consulta términos académicos y administrativos con definiciones claras.",
    to: "/glosario",
    label: "Ver glosario",
  },
  {
    icon: "🗺️",
    title: "Mapa del Campus",
    desc: "Explora los bloques, laboratorios y servicios de la UFPS Ocaña.",
    to: "/mapa",
    label: "Ver mapa",
  },
];

function Home() {
  return (
    <div className="home">
      <div className="page-container">

        {/* Hero */}
        <section className="welcome">
          <div className="welcome-badge">Universidad Francisco de Paula Santander · Ocaña</div>
          <h1>Bienvenido a<br />OrientaUFPSO</h1>
          <p>
            Tu guía institucional para trámites, consultas académicas y orientación
            en la UFPS Seccional Ocaña.
          </p>
        </section>

        {/* Quick links grid */}
        <section className="quick-links-section">
          <h2 className="section-title">¿Qué necesitas hoy?</h2>
          <div className="quick-links-grid">
            {quickLinks.map((item) => (
              <div key={item.to} className="quick-card">
                <span className="quick-card-icon">{item.icon}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <Link to={item.to} className="quick-card-btn">{item.label} →</Link>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Banner */}
        <section className="support-card">
          <div className="support-banner">
            <span className="support-tag">Asistente disponible 24/7</span>
            <h2>¿Tienes una duda específica?</h2>
            <p>
              Usa el chat de soporte con IA para resolver preguntas sobre matrículas,
              horarios, trámites y más — en segundos.
            </p>
            <Link to="/consultas" className="chat-button">
              Abrir chat de soporte
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}

export default Home;
