import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faUserCircle, faSearch } from "@fortawesome/free-solid-svg-icons";
import "./header.css";

function Header() {
  return (
    <header className="header">
      <h1 className="header-title">Reporte Masivas</h1>

      <div className="header-actions">
        <div className="search-box">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <input type="text" placeholder="Buscar..." />
        </div>

        <FontAwesomeIcon icon={faBell} className="icon" />
        <FontAwesomeIcon icon={faUserCircle} className="icon" />
      </div>
    </header>
  );
}

export default Header;
