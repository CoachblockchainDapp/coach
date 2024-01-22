import React, { useState } from 'react';
import { SideNavBar } from '../../../components'; // Asegúrate de que la ruta sea correcta
import Blockchains from './Blockchains'
import Tipos from './Tipos'
import BITCOIN from './BITCOIN';
import Altcoin from './ALTCOIN';
import FundamentosBlockchain from './FundamentosBlockchain';
import HistoriaBlockchain from './HistoriaBlockchain ';
import CasosDeUsoBlockchain from './CasosDeUsoBlockchain';
import BlockchainTypes from './BlockchainsTypes';
import Stablecoin from './stablecoin.js'
import CentralizationVsDecentralization from './CentralizationVsDecentralization.js'
import Wallets from './Wallets.js';
import DeFi from './DeFi.js';
import dApps from './Dapp.js';
import NFTs from './NFTs.js';

export const Course = () => {
    const [selectedKey, setSelectedKey] = useState('1'); // Estado para el elemento seleccionado

    // Función para manejar la selección del elemento en la barra lateral
    const handleSelect = (eventKey) => {
        setSelectedKey(eventKey);
    };

    // Renderizado condicional del contenido principal según el elemento seleccionado
    const renderContent = () => {
        switch (selectedKey) {
            case '1-1-0':
                return <Tipos />;
            case '1-1-1':
                return <BlockchainTypes />;
            case '1-2':
                return <FundamentosBlockchain />;
            case '1-3':
                return <HistoriaBlockchain />;
            case '1-4':
                return <CasosDeUsoBlockchain />;
            case '2-1':
                return <BITCOIN />;
            case '2-2-1':
                return <Altcoin />;
            case '2-3-1':
                return <Stablecoin />;
            case '3-1':
                return <CentralizationVsDecentralization />;
            case '4-1-1-1':
                return <Wallets />;
            case '6-1':
                return <DeFi />;
            case '7-1':
                return <dApps />;
            case '8-1':
                return <NFTs />;
            // Agrega más casos según sea necesario para cada elemento de la barra lateral
            default:
                return <Blockchains />;
        }
    };

    return (
        <div>
            <SideNavBar onSelect={handleSelect} /> {/* Pasa la función para manejar la selección */}
            <div style={{ marginLeft: 250, padding: '20px' }}>
                {renderContent()} {/* Renderiza el contenido principal según el estado seleccionado */}
            </div>
        </div>
    );
};



