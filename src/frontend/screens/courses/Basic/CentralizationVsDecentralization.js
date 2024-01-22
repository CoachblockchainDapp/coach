import { Paragraph, ImageWithCaption, Title } from '../Index';

const CentralizationVsDecentralization = () => {
    return (
        <div style={{ textAlign: 'center', margin: 'auto', width: '60%', marginTop: '80px' }}>
            <Title size="3em" color="black">Centralización vs. Descentralización</Title>
            <hr />
            <Paragraph size="1.5em" color="black">
                La centralización se refiere a un sistema o red en el que el control y la toma de decisiones se concentran en una autoridad centralizada. Por otro lado, la descentralización distribuye el control y la autoridad a través de múltiples nodos o participantes sin un punto único de control.
            </Paragraph>
              {/* <ImageWithCaption
                src="URL_de_la_imagen"
                alt="Descripción de la imagen"
                width='100%'
    />*/}
            <Paragraph size="1.5em" color="black">
                En una red centralizada, una entidad o grupo tiene el poder de tomar decisiones, controlar la información y regular las transacciones. Por el contrario, en una red descentralizada, la autoridad se distribuye entre múltiples nodos o participantes, lo que promueve la transparencia, la resistencia a la censura y la seguridad.
            </Paragraph>

            <Paragraph size="1.5em" color="black">
                Ejemplos de centralización pueden incluir sistemas financieros tradicionales controlados por instituciones financieras, mientras que las criptomonedas y las redes blockchain representan ejemplos de descentralización, donde la validación y el consenso son llevados a cabo por múltiples nodos en la red.
            </Paragraph>

            <Paragraph size="1.5em" color="black">
                Ambos modelos tienen sus propias ventajas y desventajas, y su elección depende del contexto y los objetivos específicos de la red o sistema en cuestión.
            </Paragraph>
        </div>
    );
};

export default CentralizationVsDecentralization;
