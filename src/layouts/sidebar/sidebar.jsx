import React from 'react'
import ButtonBar from '../../components/button-bar/button-bar'
import './sidebar.css'
import { faAddressCard, faArrowRightArrowLeft, faBarcode, faCircleExclamation, faFileCircleExclamation, faFileInvoice, faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartBar } from '@fortawesome/free-solid-svg-icons'


function Sidebar() {
    const [activeButton, setActiveButton] = React.useState('Dashboard');

    const buttons = [
        { text: 'Dashboard', icon: faHome },
        { text: 'Analisis', icon: faChartBar },
        { text: 'Reportes', icon: faFileInvoice },
        { text: 'Cédulas', icon: faAddressCard },
        { text: 'Escaneo', icon: faBarcode },
        { text: 'Reclamaciones', icon: faFileCircleExclamation },
        { text: 'Entregas y Retornos', icon: faArrowRightArrowLeft }
    ];

    return (
        <div className="sidebar">
            <div className="container">
                <div className="title">
                    <h1>Dashboard</h1>
                </div>

                <div className="menu">
                    {buttons.map(({ text, icon }) => (
                        <div key={text} onClick={() => setActiveButton(text)}>
                            <ButtonBar 
                                buttonText={text} 
                                icon={<FontAwesomeIcon icon={icon} />}
                                active={activeButton === text} 
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Sidebar
