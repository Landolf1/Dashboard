import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt, faDownload, faEye } from "@fortawesome/free-solid-svg-icons";
import "./recent-files.css";

function RecentFiles() {
  // Datos de ejemplo, puedes traerlos de props o de una API
  const reports = [
    { title: "Reporte Ventas Agosto", date: "2024-08-15", status: "Completado" },
    { title: "Análisis Clientes Masivo", date: "2024-08-14", status: "Procesando" },
    { title: "Inventario General", date: "2024-08-13", status: "Completado" },
    { title: "Transacciones Diarias", date: "2024-08-12", status: "Completado" },
  ];

  return (
    <div className="recent-card">
      {/* Encabezado */}
      <div className="recent-header">
        <div>
          <h3>Reportes Recientes</h3>
          <p className="recent-subtitle">Últimos reportes procesados</p>
        </div>
        <button className="btn-view">
          <FontAwesomeIcon icon={faEye} /> Ver todos
        </button>
      </div>

      {/* Lista de reportes */}
      <ul className="recent-list">
        {reports.map((report, index) => (
          <li key={index} className="recent-item">
            <div className="recent-left">
              <div className="file-icon">
                <FontAwesomeIcon icon={faFileAlt} />
              </div>
              <div>
                <p className="report-title">{report.title}</p>
                <span className="report-date">{report.date}</span>
              </div>
            </div>

            <div className="recent-right">
              <span
                className={`status-badge ${
                  report.status === "Completado" ? "completed" : "processing"
                }`}
              >
                {report.status}
              </span>
              <FontAwesomeIcon icon={faDownload} className="download-icon" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecentFiles;
