import React from 'react';
import { fontFamily } from '../utils/fonts';


const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    fontFamily: 'Arial, ' + fontFamily.universe,
};

const titleStyle = {
    fontSize: '24px',
    margin: '0',
    textAlign: 'center',
    fontFamily: fontFamily.universe,
    marginTop: '20px',
};

const cardStyle = {
    backgroundColor: '#f5f5f5',
    padding: '20px',
    borderRadius: '20px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
    margin: '40px',
    fontFamily: 'Arial, ' + fontFamily.universe,
};

export const Classroom = () => {
   
    return (
        <div style={containerStyle}>
            <div style={cardStyle}>
                <h1 style={titleStyle}>CLASSROOMS</h1>
                <p>
                    1. En el aula Coaching Team, al tener 7 Coaches se unen a la Classroom número 1 y se comisionan 1000 USDT.
                </p>
                <p>
                    2. En el aula Classroom 1, al tener 105 Coaches que comisionan hasta llegar a 5000-4935 USDT (diferidos por cada Coach 47 USDT) y pasan a la Classroom 2, donde alcanzan un tercer nivel.
                </p>
                <p>
                    5. En el tercer aula, hay 1477 Coaches que comisionarán 45000-34410 USDT (diferidos de 30 USDT). Cuando alcancen la cantidad de 45000 USDT, recibirán otro NFT y pasarán al Aula Magna.
                </p>
                <p>
                    6. En el cuarto aula, cada miembro comisionará por cada Coach hasta 20735 Coaches, hasta llegar a 300000-290290 USDT (diferidos de 14 USDT), pasando al nivel de Doctorado.
                </p>
                <p>
                    7. En el quinto aula, hay 289000 Coaches que comisionarán 100000 USDT (pagos diferidos de 1.011,5000 o 3.4 UST).
                </p>
                {/* Añadimos las propiedades a nuestra tabla nativa */}
                
            </div>
        </div>
    );
};


