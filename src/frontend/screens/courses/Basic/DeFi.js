import { Paragraph, ImageWithCaption, Title } from '../Index';

const DeFi = () => {
    return (
        <div style={{ textAlign: 'center', margin: 'auto', width: '60%', marginTop: '80px' }}>
            <Title size="3em" color="black">Finanzas Descentralizadas (DeFi)</Title>
            <hr />
            <Paragraph size="1.5em" color="black">
                Las Finanzas Descentralizadas (DeFi) son un conjunto de servicios financieros construidos sobre tecnología blockchain, que permiten transacciones financieras sin intermediarios y de manera transparente.
            </Paragraph>
           {/* <ImageWithCaption
                src="URL_de_la_imagen"
                alt="Descripción de la imagen"
                width='100%'
    />*/}
            <Paragraph size="1.5em" color="black">
                Los protocolos DeFi permiten a los usuarios prestar, pedir prestado, intercambiar activos, ganar intereses y participar en otras actividades financieras sin la necesidad de instituciones financieras tradicionales.
            </Paragraph>

            <Paragraph size="1.5em" color="black">
                Ethereum es una de las plataformas más utilizadas para aplicaciones DeFi debido a su capacidad para ejecutar contratos inteligentes.
            </Paragraph>

            <Paragraph size="1.5em" color="black">
                La popularidad de DeFi ha crecido rápidamente, aunque también existen riesgos asociados, como la seguridad y la volatilidad del mercado.
            </Paragraph>
        </div>
    );
};

export default DeFi;
