import React, { useContext } from 'react';
import ButtonBar from '../../components/button-bar/button-bar';
import './sidebar.css';
import { faAddressCard, faArrowRightArrowLeft, faBarcode, faFileCircleExclamation, faFileInvoice, faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar } from '@fortawesome/free-solid-svg-icons';
import { useAppContext } from '../../context/AppContext';

function Sidebar() {
    const { currentPage, setCurrentPage } = useAppContext();

    const buttons = [
        { text: 'Dashboard', icon: faHome },
        { text: 'Analisis', icon: faChartBar },
        { text: 'Reportes', icon: faFileInvoice },
        { text: 'Cédulas', icon: faAddressCard },
        { text: 'Escaneo', icon: faBarcode },
        { text: 'Reclamaciones', icon: faFileCircleExclamation },
        { text: 'Entregas y Retornos', icon: faArrowRightArrowLeft }
    ];

    const handleButtonClick = (text) => {
        setCurrentPage(text);
    };

    return (
        <div className="sidebar">
            <div className="container">
                <div className="title">
                    <h1>Dashboard</h1>
                </div>

                <div className="menu">
                    {buttons.map(({ text, icon }) => (
                        <div 
                            key={text} 
                            onClick={() => handleButtonClick(text)}
                            style={{ cursor: 'pointer' }}
                        >
                            <ButtonBar 
                                buttonText={text} 
                                icon={<FontAwesomeIcon icon={icon} />}
                                active={currentPage === text} 
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Sidebar
