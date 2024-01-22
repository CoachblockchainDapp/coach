import { Paragraph, Title,ImageWithCaption } from '../Index';

const HistoriaBlockchain = () => {
    return (
        <div style={{ textAlign: 'center', margin: 'auto', width: '80%', marginTop: '40px' }}>
        <Title size="3em" color="black">Historia del Blockchain</Title>
        <hr />

        <ImageWithCaption
                src="https://raw.githubusercontent.com/coachblockchain/Images/main/blockchains%20%26%20the%20future%20(3).png"
                alt="Descripción de la imagen"
                caption="Evolución del dinero"
                width='100%'
            />

        <Paragraph size="1.5em" color="black">
        <span style={{ color: 'black', fontWeight: 'bold' }}>1991-2008:</span>  Publicación del documento de Bitcoin por Satoshi Nakamoto, describiendo un sistema de efectivo electrónico descentralizado.
        </Paragraph>
        <Paragraph size="1.5em" color="black">
        <span style={{ color: 'green', fontWeight: 'bold' }}>2009:</span> Extracción del primer bloque de la cadena de Bitcoin, conocido como el "bloque génesis".
        </Paragraph>
        <Paragraph size="1.5em" color="black">
        <span style={{ color: 'blue', fontWeight: 'bold' }}>2010-2012:</span> Se establecen los primeros intercambios de bitcoins y se incrementa la adopción temprana de la criptomoneda.
        </Paragraph>
        <Paragraph size="1.5em" color="black">
        <span style={{ color: 'red', fontWeight: 'bold' }}>2013:</span>  El valor de Bitcoin aumenta significativamente, alcanzando nuevos máximos y generando mayor atención mediática.
        </Paragraph>
        <Paragraph size="1.5em" color="black">
        <span style={{ color: 'black', fontWeight: 'bold' }}> 2014-2015: </span>   Se desarrollan y prueban numerosas aplicaciones de blockchain más allá de las criptomonedas, explorando casos de uso en la industria financiera y más allá.
        </Paragraph>
        <Paragraph size="1.5em" color="black">
        <span style={{ color: 'green', fontWeight: 'bold' }}> 2017: </span>   Se produce un boom en la inversión en criptomonedas y proyectos relacionados con blockchain, junto con un aumento masivo en el precio de Bitcoin.
        </Paragraph>
        <Paragraph size="1.5em" color="black">
        <span style={{ color: 'blue', fontWeight: 'bold' }}> 2018-2019: </span>    Se observa una corrección en el mercado de criptomonedas y una mayor madurez en la regulación y adopción de blockchain.
        </Paragraph>
        <Paragraph size="1.5em" color="black">
        <span style={{ color: 'red', fontWeight: 'bold' }}>  2020: </span>    Continúa la expansión de blockchain en aplicaciones comerciales y se intensifican las discusiones sobre la integración de la tecnología en diversos sectores.
        </Paragraph>
    </div>
    
    );
};

export default HistoriaBlockchain;
