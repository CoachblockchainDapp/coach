
import {
    Paragraph,
    Subtitle,
    ImageWithCaption,
    Title,

} from '../Index';

const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    fontFamily: 'Arial, sans-serif',
    marginTop:'5%',
};

const thStyle = {
    fontSize: '1.2em',
    textAlign: 'left',
    borderBottom: '2px solid black',
    padding: '8px',
};

const tdStyle = {
    fontSize: '1.1em',
    textAlign: 'left',
    verticalAlign: 'top',
    borderBottom: '1px solid black',
    padding: '8px',
};

const listStyle = {
    fontSize: '1.1em',
    lineHeight: '1.6',
    textAlign: 'justify',
};


// Componente que utiliza los componentes reutilizables
const Tipos = () => {
    const blockchainTypes = [
        {
            type: 'Centralizada y Segura',
            advantages: [
                'Mayor control y supervisión',
                'Menor probabilidad de errores',
                'Capacidad para implementar cambios rápidamente'
            ],
            disadvantages: [
                'Dependencia de una entidad central',
                'Riesgo de ataques únicos',
                'Falta de transparencia y descentralización'
            ]
        },
        {
            type: 'Descentralizada y Salubre',
            advantages: [
                'Mayor transparencia y distribución',
                'Menor riesgo de manipulación o corrupción',
                'Mayor resistencia a ataques'
            ],
            disadvantages: [
                'Mayor complejidad en la gobernanza',
                'Riesgo de bifurcaciones (forks)',
                'Menor eficiencia en algunas operaciones'
            ]
        },
        // Agrega más tipos de blockchain si es necesario
    ];

    return (
        <div style={{ textAlign: 'center', margin: 'auto', width: '60%', marginTop: '80px' }}>

                <h2 style={{ textAlign: 'center' }}>Tipos de Blockchains</h2>
                <hr/>
                <table style={tableStyle}>
                    <thead>
                        <tr>
                            <th style={thStyle}>Tipo</th>
                            <th style={thStyle}>Ventajas</th>
                            <th style={thStyle}>Desventajas</th>
                        </tr>
                    </thead>
                    <tbody>
                        {blockchainTypes.map((blockchain, index) => (
                            <tr key={index}>
                                <td style={tdStyle}>{blockchain.type}</td>
                                <td style={tdStyle}>
                                    <ul style={listStyle}>
                                        {blockchain.advantages.map((advantage, idx) => (
                                            <li key={idx}>{advantage}</li>
                                        ))}
                                    </ul>
                                </td>
                                <td style={tdStyle}>
                                    <ul style={listStyle}>
                                        {blockchain.disadvantages.map((disadvantage, idx) => (
                                            <li key={idx}>{disadvantage}</li>
                                        ))}
                                    </ul>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>



            </div>
    );
};

export default Tipos;
