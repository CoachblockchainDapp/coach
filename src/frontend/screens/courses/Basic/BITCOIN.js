import { Row, Col } from 'react-bootstrap';
import {
    Paragraph,
    Subtitle,
    ImageWithCaption,
    Title,

} from '../Index';


// Componente que utiliza los componentes reutilizables
const BITCOIN = () => {
    return (
        <div style={{ textAlign: 'center', margin: 'auto', width: '60%', marginTop: '80px' }}>



            <Title size="3em" color="black">BITCOIN Y CRYPTOMONEDAS</Title>
            <hr />
            
            <Paragraph size="1.5em" color="black">
            Bitcoin es la primera y más conocida criptomoneda descentralizada. Fue creada en 2009 por una persona o grupo bajo el seudónimo de Satoshi Nakamoto. Se basa en una red descentralizada de nodos que utilizan una tecnología llamada blockchain para registrar todas las transacciones de manera segura e inmutable.
            </Paragraph>

            <ImageWithCaption
                src="https://raw.githubusercontent.com/coachblockchain/Images/main/Colorful%20Calm%20Corporate%20Clean%20Mind%20Map%20(1).png"
                alt="Descripción de la imagen"
                caption="Funcionalidad del BITCOIN."
                width='100%'
            />

<Paragraph size="1.5em" color="black">
Bitcoin permite transacciones peer-to-peer sin necesidad de intermediarios, lo que significa que las personas pueden enviar y recibir pagos directamente entre sí sin la intervención de bancos u otras instituciones financieras. Se utiliza una tecnología llamada minería para validar y confirmar las transacciones, y los usuarios pueden poseer y almacenar sus bitcoins en carteras digitales.
            </Paragraph>

           
        
            <Paragraph size="1.5em" color="black">
            La oferta de Bitcoin está limitada a 21 millones de monedas, lo que ayuda a crear un sistema deflacionario. Su precio puede ser volátil debido a factores como la demanda del mercado, la adopción, la regulación y los eventos económicos globales.
            </Paragraph>



        </div>
    );
};

export default  BITCOIN 
