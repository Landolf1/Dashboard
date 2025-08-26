import React from 'react'
import { faFileAlt } from '@fortawesome/free-solid-svg-icons'
import Sidebar from "../../layouts/sidebar/sidebar";
import Header from "../../layouts/header/header";
import "./Dashboard.css";
import KPIcard from '../../components/KPI-card/kpicard.jsx'
import RecentFiles from '../../layouts/recent-files/recent-files'
import ZoneDistrib from '../../layouts/zonedistirb/zonedistirb'

function Dashboard() {
    return (
        <div className="dashboard-container">
            <Sidebar />
            <div className="main-content">
                <Header />
                <div className="content">
                    <div className="kpi-grid">
                        <KPIcard 
                            title="Total Entregadas"
                            value={10000}
                            percentage="+12.3%"
                            subtitle="vs mes anterior"
                            icon={faFileAlt}
                        />
                        
                        <KPIcard 
                            title="Total Retronadas"
                            value={10000}
                            percentage="+12.3%"
                            subtitle="vs mes anterior"
                            icon={faFileAlt}
                        />

                        <KPIcard 
                            title="Total Pendientes"
                            value={10000}
                            percentage="+12.3%"
                            subtitle="vs mes anterior"
                            icon={faFileAlt}
                        />

                        <KPIcard 
                            title="Total Registros"
                            value={10000}
                            percentage="+12.3%"
                            subtitle="vs mes anterior"
                            icon={faFileAlt}
                        />
                    </div>

                    <div className="tables-content">
                        <div className="recents_files">
                            <RecentFiles />
                        </div>

                        <div className="zone_distrib">
                            <ZoneDistrib />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
