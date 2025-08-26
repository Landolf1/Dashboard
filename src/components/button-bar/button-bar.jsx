import React from 'react'
import './button-bar.css'

function ButtonBar({ buttonText = 'text here!', icon, active = false }) {
    return (
        <div className="button-bar">
            <a href="#" className={`button ${active ? 'active' : ''}`}>
                {icon && <span className="icon">{icon}</span>}
                <span>{buttonText}</span>
            </a>
        </div>
    )
}

export default ButtonBar
