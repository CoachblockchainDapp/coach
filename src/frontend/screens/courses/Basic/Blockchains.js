import { Row, Col } from 'react-bootstrap';
import {
    Paragraph,
    Subtitle,
    ImageWithCaption,
    Title,

} from '../Index';




const BlockchainSteps = () => {
    return (
        <>
            <Row className="justify-content-around">
                <Col md={4}>
                    <ImageWithCaption
                        src="https://raw.githubusercontent.com/coachblockchain/Images/main/1.png"
                        alt="Descripción de la imagen"
                        caption="A envía dinero a B."
                        width="80%"
                    />
                </Col>
                <Col md={4}>
                    <ImageWithCaption
                        src="https://raw.githubusercontent.com/coachblockchain/Images/main/2.png"
                        alt="Esta operación se convierte en un bloque."
                        caption="Esta operación se convierte en un bloque."
                        width="80%"
                    />
                </Col>
                <Col md={4}>
                    <ImageWithCaption
                        src="https://raw.githubusercontent.com/coachblockchain/Images/main/3.png"
                        alt="Descripción de la imagen"
                        caption="Los bloques se transmiten a toda la red."
                        width="80%"
                    />
                </Col>
            </Row>

            <hr />

            <Row className="justify-content-around">
                <Col md={4}>
                    <ImageWithCaption
                        src="https://raw.githubusercontent.com/coachblockchain/Images/main/4.png"
                        alt="Descripción de la imagen"
                        caption="Los nodos validan la operación en la red."
                        width="80%"
                    />
                </Col>
                <Col md={4}>
                    <ImageWithCaption
                        src="https://raw.githubusercontent.com/coachblockchain/Images/main/5.png"
                        alt="Descripción de la imagen"
                        caption="El bloque se agrega a la cadena, creando un registro inmutable y transparente de la transacción."
                        width="80%"
                    />
                </Col>
                <Col md={4}>
                    <ImageWithCaption
                        src="https://raw.githubusercontent.com/coachblockchain/Images/main/6.png"
                        alt="Descripción de la imagen"
                        caption="¡Listo! El dinero se transfiere de A a B."
                        width="80%"
                    />
                </Col>
            </Row>
        </>
    );
};



// Componente que utiliza los componentes reutilizables
const Blockchains = () => {
    return (
        <div style={{ textAlign: 'center', margin: 'auto', width: '60%', marginTop: '80px' }}>



            <Title size="3em" color="black">Blockchain</Title>
            <hr />
            <Paragraph size="1.5em" color="black">
                Una blockchain es una cadena de bloques de información digital, la cual es modificada por personas autorizadas sin la necesidad de intermediarios.
            </Paragraph>

            <ImageWithCaption
                src="https://raw.githubusercontent.com/coachblockchain/Images/main/blockchains%20%26%20the%20future.png"
                alt="Descripción de la imagen"
                caption="Cadena de Bloques."
            />

            <Subtitle size="1.8em" color="blue">Peer To Peer</Subtitle>

            <Paragraph size="1.5em" color="black">
                Las personas autorizadas forman una red de administradores llamada "red peer to peer" (p2p), donde cada uno tiene acceso sincronizado a una base de datos compartida. Esta red puede ser pública o privada y accesible solo para miembros registrados.
            </Paragraph>


            <ImageWithCaption
                src="https://raw.githubusercontent.com/coachblockchain/Images/main/blockchains%20%26%20the%20future%20(1).png"
                alt="Descripción de la imagen"
                caption="Peer to Peer."
            />


            <Paragraph size="1.5em" color="black">
                Cada bloque contiene datos específicos, conocidos como "hash", que representan la identidad única del bloque. Estos datos incluyen la información del bloque anterior y del próximo bloque en la cadena. El hash de un bloque se genera a partir de sus datos y actúa como una especie de huella digital única que garantiza la integridad y la conexión secuencial de la cadena de bloques. Esta característica es fundamental en la estructura inmutable de la cadena, ya que cualquier modificación en un bloque afectaría a su hash y, por consiguiente, a los bloques subsiguientes, alertando sobre cualquier intento de manipulación en la cadena.
            </Paragraph>



            <ImageWithCaption
                src="https://raw.githubusercontent.com/coachblockchain/Images/main/Dise%C3%B1o%20sin%20t%C3%ADtulo.png"
                alt="Descripción de la imagen"
                caption="El HASH identifica cada cadena,  sus contenidos y siempre es único (Como una huella digital)."
                width="80%"
            />

            <Subtitle size="1.8em" color="blue">¿Cómo funciona?</Subtitle>

            <BlockchainSteps/>


        




        </div>
    );
};

export default Blockchains;




