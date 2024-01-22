import { Paragraph, ImageWithCaption, Title } from '../Index';

const FundamentosBlockchain = () => {
    return (
        <div style={{ textAlign: 'center', margin: 'auto', width: '60%', marginTop: '80px' }}>
            <Title size="3em" color="black">Fundamentos del Blockchain</Title>
            <hr />
            <Paragraph size="1.5em" color="black">
                El blockchain es una tecnología de contabilidad distribuida que proporciona un registro inmutable de transacciones. Consiste en bloques de datos vinculados utilizando criptografía y secuenciados en una cadena, lo que garantiza su integridad.
            </Paragraph>
            <ImageWithCaption
                src="https://raw.githubusercontent.com/coachblockchain/Images/main/Purple%20and%20Blue%20Professional%20Gradient%20Blockchain%20Technology%20Presentation.png"
                alt="Descripción de la imagen"
                caption="Fundamentos del blockchain."
                width='100%'
            />
            <Paragraph size="1.5em" color="black">
                La descentralización, transparencia, seguridad y resistencia a la manipulación son características fundamentales del blockchain. Esta tecnología tiene aplicaciones en diversos campos más allá de las criptomonedas, como contratos inteligentes, cadena de suministro, votación segura, entre otros.
            </Paragraph>
        </div>
    );
};

export default FundamentosBlockchain;
