import React from 'react';
import Sidebar from "../layouts/sidebar/sidebar";
import Header from "../layouts/header/header";

const EmptyPage = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="content">
          {/* Contenido vacío */}
        </div>
      </div>
    </div>
  );
};

export default EmptyPage;
