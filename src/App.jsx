import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Glosario from "./pages/Glosario";
import Mapa from "./pages/Mapa";
import ChatHelp from "./pages/ChatHelp";
import "./App.css";

function AppLayout() {
  const location = useLocation();
  const showFooter = location.pathname !== "/consultas";

  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/glosario" element={<Glosario />} />
          <Route path="/mapa" element={<Mapa />} />
          <Route path="/help" element={<Navigate to="/consultas" replace />} />
          <Route path="/consultas" element={<ChatHelp />} />
        </Routes>
      </main>
      {showFooter && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

export default App;
