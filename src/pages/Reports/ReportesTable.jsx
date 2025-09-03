import React, { useState, useMemo } from "react";
import { FaTrash, FaSort, FaSortUp, FaSortDown } from "react-icons/fa";
import "../Dashboard/Table.css";

const ReportesTable = ({ reportes }) => {
  const [search, setSearch] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });

  const columns = [
    { key: "nombre", label: "NOMBRE DEL ARCHIVO" },
    { key: "tipo", label: "TIPO DE REPORTE" },
    { key: "fecha", label: "FECHA DE SUBIDA" },
    { key: "usuario", label: "USUARIO" },
  ];

  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const resetFilters = () => {
    setSearch("");
  };

  const filteredData = useMemo(() => {
    let filtered = [...reportes];

    if (search) {
      filtered = filtered.filter((row) =>
        Object.values(row).some((value) =>
          String(value).toLowerCase().includes(search.toLowerCase())
        )
      );
    }

    if (sortConfig.key) {
      filtered.sort((a, b) => {
        const aVal = String(a[sortConfig.key] || "");
        const bVal = String(b[sortConfig.key] || "");
        if (aVal < bVal) return sortConfig.direction === "asc" ? -1 : 1;
        if (aVal > bVal) return sortConfig.direction === "asc" ? 1 : -1;
        return 0;
      });
    }

    return filtered;
  }, [reportes, search, sortConfig]);

  return (
    <div className="table-container" style={{
      background: '#ffffff',
      borderRadius: '12px',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
      overflow: 'hidden',
      width: '100%',
      margin: '20px 0'
    }}>
      <div className="table-actions" style={{
        padding: '16px 24px',
        borderBottom: '1px solid #e2e8f0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#f8fafc'
      }}>
        <h3 style={{
          margin: 0,
          fontSize: '1.1rem',
          fontWeight: '600',
          color: '#1e293b'
        }}>Reportes</h3>
        <div className="search-container" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px'
        }}>
          <input
            type="text"
            placeholder="🔍 Buscar reporte..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              color: '#000000',
              width: '280px',
              padding: '8px 14px',
              borderRadius: '8px',
              border: '1px solid #d1d5db',
              fontSize: '0.9rem',
              backgroundColor: '#fff',
              transition: 'all 0.2s ease',
              outline: 'none'
            }}
            onFocus={(e) => {
              e.target.borderColor = '#3b82f6';
              e.target.boxShadow = '0 0 0 2px rgba(59, 130, 246, 0.2)';
            }}
            onBlur={(e) => {
              e.target.borderColor = '#d1d5db';
              e.target.boxShadow = 'none';
            }}
          />
          {search && (
            <button 
              onClick={resetFilters} 
              style={{
                padding: '8px 16px',
                background: '#ffffff',
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '0.9rem',
                color: '#475569',
                fontWeight: '500',
                transition: 'all 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
              onMouseOver={(e) => {
                e.target.background = '#f1f5f9';
                e.target.borderColor = '#94a3b8';
              }}
              onMouseOut={(e) => {
                e.target.background = '#ffffff';
                e.target.borderColor = '#d1d5db';
              }}
            >
              <span>Limpiar</span>
            </button>
          )}
        </div>
      </div>

      <div style={{ overflowX: 'auto' }}>
        <table style={{
          width: '100%',
          borderCollapse: 'collapse',
          fontFamily: 'Inter, -apple-system, sans-serif'
        }}>
          <thead>
            <tr style={{
              backgroundColor: '#f8fafc',
              borderBottom: '1px solid #e2e8f0'
            }}>
              {columns.map((col) => (
                <th 
                  key={col.key} 
                  onClick={() => handleSort(col.key)}
                  style={{
                    padding: '14px 16px',
                    textAlign: 'left',
                    fontSize: '0.85rem',
                    fontWeight: '600',
                    color: '#475569',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    cursor: 'pointer',
                    position: 'relative',
                    transition: 'background-color 0.2s ease',
                    whiteSpace: 'nowrap'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = '#f1f5f9';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = '';
                  }}
                >
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}>
                    {col.label}
                    <span style={{
                      display: 'flex',
                      flexDirection: 'column',
                      fontSize: '0.7rem',
                      color: sortConfig.key === col.key ? '#3b82f6' : '#94a3b8',
                      opacity: sortConfig.key === col.key ? 1 : 0.5
                    }}>
                      <FaSortUp style={{
                        marginBottom: '-4px',
                        color: sortConfig.key === col.key && sortConfig.direction === 'asc' ? '#3b82f6' : 'inherit'
                      }} />
                      <FaSortDown style={{
                        marginTop: '-4px',
                        color: sortConfig.key === col.key && sortConfig.direction === 'desc' ? '#3b82f6' : 'inherit'
                      }} />
                    </span>
                  </div>
                </th>
              ))}
              <th style={{
                padding: '14px 16px',
                textAlign: 'left',
                fontSize: '0.85rem',
                fontWeight: '600',
                color: '#475569',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                whiteSpace: 'nowrap'
              }}>ACCIONES</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((row, i) => (
                <tr 
                  key={i}
                  style={{
                    borderBottom: '1px solid #f1f5f9',
                    transition: 'background-color 0.2s ease',
                    backgroundColor: i % 2 === 0 ? '#ffffff' : '#f8fafc'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = '#f1f5f9';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = i % 2 === 0 ? '#ffffff' : '#f8fafc';
                  }}
                >
                  <td style={{
                    padding: '14px 16px',
                    color: '#1e293b',
                    fontSize: '0.9rem'
                  }}>{row.nombre}</td>
                  <td style={{
                    padding: '14px 16px',
                    color: '#475569',
                    fontSize: '0.9rem'
                  }}>{row.tipo}</td>
                  <td style={{
                    padding: '14px 16px',
                    color: '#64748b',
                    fontSize: '0.9rem',
                    whiteSpace: 'nowrap'
                  }}>{row.fecha}</td>
                  <td style={{
                    padding: '14px 16px',
                    color: '#475569',
                    fontSize: '0.9rem'
                  }}>{row.usuario}</td>
                  <td style={{
                    padding: '8px 16px',
                    textAlign: 'center',
                    width: '80px'
                  }}>
                    <button 
                      onClick={() => console.log('Eliminar', row.id)}
                      style={{
                        background: 'transparent',
                        border: 'none',
                        color: '#ef4444',
                        cursor: 'pointer',
                        padding: '6px',
                        borderRadius: '6px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.background = '#fee2e2';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.background = 'transparent';
                      }}
                      title="Eliminar reporte"
                    >
                      <FaTrash size={14} />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td 
                  colSpan={columns.length + 1} 
                  style={{ 
                    textAlign: 'center',
                    padding: '40px 20px',
                    color: '#64748b',
                    fontSize: '0.95rem'
                  }}
                >
                  No se encontraron reportes que coincidan con tu búsqueda
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReportesTable;
