import React from 'react'
import CountUp from '../Count-up/CountUp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './kpi.css'
import { faFileAlt } from '@fortawesome/free-solid-svg-icons'

function KPIcard({ title, value, percentage, subtitle, icon }) {
    return (
        <div className="kpi-card">
            {/* Encabezado */}
            <div className="kpi-header">
                <span className="kpi-title">{title}</span>
                {icon && (
                    <div className="kpi-icon">
                        <FontAwesomeIcon icon={icon} />
                    </div>
                )}
            </div>

            {/* Cuerpo con número animado */}
            <div className="kpi-body">
                <CountUp
                    from={0}
                    to={10000}
                    separator=","
                    direction="up"
                    duration={2}
                    className="kpi-number"
                />
            </div>

            {/* Footer con porcentaje */}
            <div className="kpi-footer">
                <span className="kpi-percentage">▲ {percentage}</span>
                <span className="kpi-text"> {subtitle}</span>
            </div>
        </div>
    )
}

export default KPIcard
