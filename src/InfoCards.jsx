// Componente InfoCards con grid visual
function InfoCards() {
  const cards = [
    { title: "Información General", content: "Detalles sobre la UFPS Ocaña." },
    { title: "Contacto", content: "Cómo contactar a la universidad." },
    { title: "Eventos", content: "Próximos eventos y actividades." },
    { title: "Recursos", content: "Enlaces útiles para estudiantes." },
  ];

  return (
    <div className="info-cards">
      {cards.map((card, index) => (
        <div key={index} className="info-card">
          <h4>{card.title}</h4>
          <p>{card.content}</p>
        </div>
      ))}
    </div>
  );
}

export default InfoCards;
