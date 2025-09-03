import React, { useState } from "react";
import Sidebar from "../../layouts/sidebar/sidebar";
import Header from "../../layouts/header/header";
import "./Reportes.css";
import ReportesTable from "./ReportesTable";

function Reportes() {
  const [tipoReporte, setTipoReporte] = useState("");
  const [archivo, setArchivo] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const [reportes, setReportes] = useState([]);

  const handleFile = (file) => {
    setArchivo(file);
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!tipoReporte || !archivo) return;

    const nuevoReporte = {
      id: Date.now(),
      nombre: archivo.name,
      tipo: tipoReporte,
      fecha: new Date().toLocaleString(),
      usuario: 'Admin' // en el futuro puedes poner usuario real
    };

    setReportes([...reportes, nuevoReporte]);
    setArchivo(null);
    setTipoReporte("");
  };

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="content">
          <div className="form-card">
            <h2 className="form-title">📂 Subida de Reportes</h2>
            <form className="report-form" onSubmit={handleSubmit}>
              {/* Tipo de reporte */}
              <div className="form-group">
                <label className="form-label">Tipo de reporte</label>
                <select
                  value={tipoReporte}
                  onChange={(e) => setTipoReporte(e.target.value)}
                  className="form-input"
                >
                  <option value="">-- Selecciona --</option>
                  <option value="masivas">Actualizar Masivas</option>
                  <option value="reclamaciones">Actualizar Reclamaciones</option>
                </select>
              </div>

              {/* Área de arrastrar y soltar */}
              <div
                className={`upload-area ${dragActive ? "active" : ""}`}
                onDragEnter={handleDrag}
                onDragOver={handleDrag}
                onDragLeave={handleDrag}
                onDrop={handleDrop}
              >
                <input
                  type="file"
                  id="file-upload"
                  accept=".xlsx,.xls,.csv"
                  onChange={handleChange}
                  hidden
                />
                <label htmlFor="file-upload" className="upload-label">
                  {archivo ? (
                    <p>📎 Archivo seleccionado: <strong>{archivo.name}</strong></p>
                  ) : (
                    <p>
                      Arrastra tu archivo aquí o{" "}
                      <span className="select-text">haz clic para seleccionar</span>
                    </p>
                  )}
                </label>
              </div>

              {/* Botón */}
              <button type="submit" className="submit-btn">
                Subir Reporte
              </button>
            </form>
          </div>
          <ReportesTable reportes={reportes} />
        </div>
      </div>
    </div>
  );
}

export default Reportes;
