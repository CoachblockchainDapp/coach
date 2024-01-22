import { Paragraph, ImageWithCaption, Title } from '../Index';

const Wallets = () => {
    return (
        <div style={{ textAlign: 'center', margin: 'auto', width: '60%', marginTop: '80px' }}>
            <Title size="3em" color="black">Wallets y Tipos de Wallets</Title>
            <hr />
            <Paragraph size="1.5em" color="black">
                Una wallet de criptomonedas es una herramienta para almacenar, gestionar y realizar transacciones con activos digitales. Existen diferentes tipos de wallets que varían en términos de accesibilidad, seguridad y uso.
            </Paragraph>
            <ImageWithCaption
                src="https://raw.githubusercontent.com/coachblockchain/Images/main/Tipos%20de%20blockchain.png"
                alt="Descripción de la imagen"
                width='100%'
            />
            <Paragraph size="1.5em" color="black">
                Las wallets pueden ser clasificadas en wallets de software (software wallets), que pueden ser aplicaciones móviles, de escritorio o en línea; wallets de hardware (hardware wallets), que son dispositivos físicos especializados; wallets de papel (paper wallets), que almacenan claves privadas en formato impreso; y wallets físicas, como monedas físicas que almacenan información criptográfica.
            </Paragraph>

            <Paragraph size="1.5em" color="black">
                Las wallets de software son convenientes para un acceso rápido, pero pueden ser menos seguras que las wallets de hardware, que ofrecen un nivel adicional de seguridad al mantener las claves privadas offline. Los paper wallets ofrecen una mayor seguridad al mantener las claves fuera de línea, mientras que las wallets físicas proporcionan una experiencia táctil y visual para la gestión de activos digitales.
            </Paragraph>

            <Paragraph size="1.5em" color="black">
                Cada tipo de wallet tiene sus propias ventajas y consideraciones de seguridad, y la elección depende de las preferencias y necesidades del usuario.
            </Paragraph>
        </div>
    );
};

export default Wallets;
