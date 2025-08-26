import React, { useState, useMemo } from "react";
import { FaTrash, FaEdit, FaSort, FaSortUp, FaSortDown } from "react-icons/fa";
import TableHeader from "./TableHeader";
import "./Table.css";

const Table = () => {
  const [data] = useState([]);
  const [search, setSearch] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });

  const columns = [
    { key: "tarjeta", label: "NUMERO DE TARJETA" },
    { key: "nombre", label: "NOMBRE" },
    { key: "cedula", label: "CEDULA" },
    { key: "fecha", label: "FECHA" },
    { key: "zona", label: "ZONA" },
    { key: "provincia", label: "PROVINCIA" },
    { key: "estado", label: "ESTADO" },
    { key: "comentario", label: "COMENTARIO" },
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
    let filtered = [...data];

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
  }, [data, search, sortConfig]);

  return (
    <div className="table-container">
      <TableHeader search={search} setSearch={setSearch} resetFilters={resetFilters} />

      <table className="custom-table">
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col.key} onClick={() => handleSort(col.key)}>
                <span>{col.label}</span>
                {sortConfig.key === col.key ? (
                  sortConfig.direction === "asc" ? (
                    <FaSortUp className="sort-icon" />
                  ) : (
                    <FaSortDown className="sort-icon" />
                  )
                ) : (
                  <FaSort className="sort-icon inactive" />
                )}
              </th>
            ))}
            <th>ACCIONES</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.length > 0 ? (
            filteredData.map((row, i) => (
              <tr key={i}>
                <td>{row.tarjeta}</td>
                <td>{row.nombre}</td>
                <td>{row.cedula}</td>
                <td>{row.fecha}</td>
                <td>{row.zona}</td>
                <td>{row.provincia}</td>
                <td>{row.estado}</td>
                <td>{row.comentario}</td>
                <td>
                  <button className="btn-icon edit"><FaEdit /></button>
                  <button className="btn-icon delete"><FaTrash /></button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length + 1} style={{ textAlign: "center" }}>
                No hay datos disponibles
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
