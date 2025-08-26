import React from "react";
import "./TableHeader.css";
import { FaSearch } from "react-icons/fa";

const TableHeader = ({ search, setSearch, resetFilters }) => {
  return (
    <div className="table-header">
      <div className="search-box">
        <FaSearch className="search-icon" />
        <input
          type="text"
          placeholder="Buscar registros..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <select>
        <option>Todos los Estados</option>
        <option>Retornadas</option>
        <option>Entregadas</option>
        <option>Pendientes</option>
        <option>Duplicadas</option>
      </select>

      <select>
        <option>Todos los Tipos</option>
        <option>Masiva</option>
        <option>Individual</option>
      </select>

      <button className="btn-clear" onClick={resetFilters}>✕ Limpiar</button>

      <button className="btn-add">+ Agregar Registro</button>
    </div>
  );
};

export default TableHeader;
