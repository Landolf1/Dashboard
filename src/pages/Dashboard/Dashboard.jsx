import React from 'react'
import Sidebar from "../../layouts/sidebar/sidebar";
import Header from "../../layouts/header/header";
import TablesContent from "./TablesContent";
import "./Dashboard.css";

function Dashboard() {
    return (
        <div className="dashboard-container">
            <Sidebar />
            <div className="main-content">
                <Header />
                <div className="content">
                    <TablesContent />
                </div>
            </div>
        </div>
    )
}

export default Dashboard
