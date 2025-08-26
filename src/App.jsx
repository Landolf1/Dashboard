// App.jsx
import React, { useContext } from "react";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import Analisis from "./pages/Analisis/Analisis.jsx";
import Reports from "./pages/Reports/Reports";
import Cedulas from "./pages/Cedulas/Cedulas";
import Escaneo from "./pages/Escaneo/Escaneo";
import Reclamaciones from "./pages/Reclamaciones/Reclamaciones";
import EntregasRetornos from "./pages/EntregasRetornos/EntregasRetornos";
import { useAppContext } from "./context/AppContext";
import "./App.css";

function App() {
  const { currentPage } = useAppContext();

  const renderPage = () => {
    switch(currentPage) {
      case 'Dashboard':
        return <Dashboard />;
      case 'Analisis':
        return <Analisis />;
      case 'Reportes':
        return <Reports />;
      case 'Cédulas':
        return <Cedulas />;
      case 'Escaneo':
        return <Escaneo />;
      case 'Reclamaciones':
        return <Reclamaciones />;
      case 'Entregas y Retornos':
        return <EntregasRetornos />;
      default:
        return <Dashboard />;
    }
  };

  return renderPage();
}

export default App;
