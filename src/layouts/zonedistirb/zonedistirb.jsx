import React from "react";
import "./zonedistirb.css";

// Datos base que quieras mostrar en el dashboard
// (en producción, estos vendrían de tu Excel / API)
const zonesData = [
  { label: "ESTE", value: 380 },
  { label: "METRO", value: 12 }
];

// Definimos todas las zonas que queremos mostrar
const allZones = [
  { label: "ESTE", color: "emerald" },
  { label: "METRO", color: "blue" },
  { label: "NORTE", color: "yellow" },
  { label: "SUR", color: "purple" }
];

function numberFmt(n) {
  return new Intl.NumberFormat("es-DO").format(n);
}

export default function ZoneDistrib() {
  // Combinar los datos reales con la lista fija de zonas
  const zones = allZones.map((z) => {
    const found = zonesData.find((d) => d.label === z.label);
    return { ...z, value: found ? found.value : 0 };
  });

  const total = zones.reduce((acc, z) => acc + z.value, 0);
  const zonesWithPct = zones.map((z) => ({
    ...z,
    pct: total === 0 ? 0 : (z.value / total) * 100
  }));

  return (
    <div className="zone-card">
      <div className="zone-header">
        <div>
          <h3>Distribución por Zonas</h3>
          <p>Por volumen de datos</p>
        </div>
        <button
          className="zone-btn"
          onClick={() =>
            alert("Acción de analizar (conecta aquí tu handler)")
          }
        >
          Analizar
        </button>
      </div>

      <ul className="zone-list">
        {zonesWithPct.map((z) => (
          <li key={z.label} className="zone-item">
            <div className="zone-label">
              <span className={`dot dot-${z.color}`}></span>
              <span>{z.label}</span>
            </div>

            <div className="zone-bar">
              <div
                className={`zone-bar-fill fill-${z.color}`}
                style={{ width: `${z.pct}%` }}
              ></div>
            </div>

            <div className="zone-values">
              <div className="zone-value">{numberFmt(z.value)}</div>
              <div className="zone-percent">{z.pct.toFixed(2)}%</div>
            </div>
          </li>
        ))}
      </ul>

      <div className="zone-footer">
        <span>Total</span>
        <span>{numberFmt(total)}</span>
      </div>
    </div>
  );
}
