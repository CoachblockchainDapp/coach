import React from 'react';
import {
    Paragraph,
    Subtitle,
    ImageWithCaption,
    Title,

} from '../Index';

const BlockchainTypes = () => {
    const blockchainData = [
        {
            tipo: 'Blockchain Público',
            acceso: 'Abierto al público en general',
            participantes: 'Decentralizado, múltiples nodos',
            seguridad: 'Alta seguridad y transparencia',
            velocidad: 'Transacciones más lentas (ejemplo: Bitcoin)',
        },
        {
            tipo: 'Blockchain Privado',
            acceso: 'Acceso restringido, permisos limitados',
            participantes: 'Centralizado, nodos controlados',
            seguridad: 'Seguridad controlada por los participantes',
            velocidad: 'Transacciones más rápidas (ejemplo: Hyperledger Fabric)',
        },
        {
            tipo: 'Blockchain Federado/Consortio',
            acceso: 'Acceso limitado a miembros seleccionados',
            participantes: 'Conjunto de organizaciones/nodos definidos',
            seguridad: 'Seguridad compartida entre los participantes',
            velocidad: 'Velocidad variable según la configuración (ejemplo: Corda)',
        },
    ];

  
        const tableStyle = {
            borderCollapse: 'collapse',
            width: '50%', // Reduciendo el ancho de la tabla al 50%
            margin: 'auto', // Centrando la tabla
            textAlign: 'justify',
        };
    
        const thStyle = {
            border: '1px solid black',
            padding: '8px',
            textAlign: 'center',
            backgroundColor: 'lightgray', // Color de fondo para los encabezados
        };
    
        const tdStyle = {
            border: '1px solid black',
            padding: '8px',
            textAlign: 'center',
        };
    
        return (
            <div style={{ textAlign: 'center', margin: 'auto', width: '60%', marginTop: '80px' }}>

<h2 style={{ textAlign: 'center' }}>Tipos de Blockchain</h2>
                <hr/>

<ImageWithCaption
                src="https://raw.githubusercontent.com/coachblockchain/Images/main/tipos.png"
                alt="Casos de Uso"
                width='110%'
            />


               
                <table style={tableStyle}>
                    <thead>
                        <tr>
                            <th style={thStyle}>Tipo</th>
                            <th style={thStyle}>Acceso</th>
                            <th style={thStyle}>Participantes</th>
                            <th style={thStyle}>Seguridad</th>
                            <th style={thStyle}>Velocidad de Transacción</th>
                        </tr>
                    </thead>
                    <tbody>
                        {blockchainData.map((blockchain, index) => (
                            <tr key={index}>
                                <td style={tdStyle}>{blockchain.tipo}</td>
                                <td style={tdStyle}>{blockchain.acceso}</td>
                                <td style={tdStyle}>{blockchain.participantes}</td>
                                <td style={tdStyle}>{blockchain.seguridad}</td>
                                <td style={tdStyle}>{blockchain.velocidad}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                
             

            </div>
        );
    };
    
    export default BlockchainTypes;
    