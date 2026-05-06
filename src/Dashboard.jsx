import { useState, useEffect } from "react";

// Componente Dashboard con 4 tarjetas que suman clics en localStorage
function Dashboard() {
  // Estado para los contadores de clics
  const [clicks, setClicks] = useState({
    matriculas: 0,
    horarios: 0,
    mapa: 0,
    bienestar: 0,
  });

  // Cargar clics desde localStorage al montar el componente
  useEffect(() => {
    const storedClicks = localStorage.getItem("dashboardClicks");
    if (storedClicks) {
      setClicks(JSON.parse(storedClicks));
    }
  }, []);

  // Función para manejar clics y actualizar localStorage
  const handleClick = (key) => {
    const newClicks = { ...clicks, [key]: clicks[key] + 1 };
    setClicks(newClicks);
    localStorage.setItem("dashboardClicks", JSON.stringify(newClicks));
  };

  return (
    <div className="dashboard">
      <div className="card" onClick={() => handleClick("matriculas")}>
        <h3>Matrículas</h3>
        <p>Clics: {clicks.matriculas}</p>
      </div>
      <div className="card" onClick={() => handleClick("horarios")}>
        <h3>Horarios</h3>
        <p>Clics: {clicks.horarios}</p>
      </div>
      <div className="card" onClick={() => handleClick("mapa")}>
        <h3>Mapa</h3>
        <p>Clics: {clicks.mapa}</p>
      </div>
      <div className="card" onClick={() => handleClick("bienestar")}>
        <h3>Bienestar</h3>
        <p>Clics: {clicks.bienestar}</p>
      </div>
    </div>
  );
}

export default Dashboard;
