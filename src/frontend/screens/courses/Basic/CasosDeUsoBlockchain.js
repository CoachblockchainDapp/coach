import { Paragraph, ImageWithCaption, Title } from '../Index';

const CasosDeUsoBlockchain = () => {
    return (
        <div style={{ textAlign: 'center', margin: 'auto', width: '60%', marginTop: '80px' }}>
            <Title size="3em" color="black">Casos de Uso del Blockchain</Title>
            <hr />
            <Paragraph size="1.5em" color="black">
                El blockchain es una tecnología de contabilidad distribuida que proporciona un registro inmutable de transacciones. Consiste en bloques de datos vinculados utilizando criptografía y secuenciados en una cadena, lo que garantiza su integridad.
            </Paragraph>
            <ImageWithCaption
                src="https://raw.githubusercontent.com/coachblockchain/Images/main/1c.png"
                alt="Casos de Uso"
                width='110%'
            />
            <Paragraph size="1.5em" color="black">
                La tecnología blockchain tiene aplicaciones en diversos campos más allá de las criptomonedas, como contratos inteligentes, cadena de suministro, votación segura y validación de identidad, entre otros. Estos casos de uso se centran en la descentralización, la transparencia y la seguridad que ofrece el blockchain.
            </Paragraph>
        </div>
    );
};

export default CasosDeUsoBlockchain;
