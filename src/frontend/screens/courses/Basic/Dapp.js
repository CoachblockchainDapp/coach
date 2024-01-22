import { Paragraph, ImageWithCaption, Title } from '../Index';

const dApps = () => {
    return (
        <div style={{ textAlign: 'center', margin: 'auto', width: '60%', marginTop: '80px' }}>
            <Title size="3em" color="black">Aplicaciones Descentralizadas (dApps)</Title>
            <hr />
            <Paragraph size="1.5em" color="black">
                Las Aplicaciones Descentralizadas (dApps) son aplicaciones que se ejecutan en una red descentralizada, como blockchain, y están basadas en contratos inteligentes.
            </Paragraph>
              {/* <ImageWithCaption
                src="URL_de_la_imagen"
                alt="Descripción de la imagen"
                width='100%'
    />*/}
            <Paragraph size="1.5em" color="black">
                Estas aplicaciones están diseñadas para operar sin un control centralizado, lo que proporciona transparencia y resistencia a la censura.
            </Paragraph>

            <Paragraph size="1.5em" color="black">
                Ethereum es conocido por ser un ecosistema popular para el desarrollo de dApps debido a su capacidad para crear contratos inteligentes.
            </Paragraph>

            <Paragraph size="1.5em" color="black">
                Las dApps abarcan una amplia gama de casos de uso, desde finanzas hasta juegos y sistemas de votación.
            </Paragraph>
        </div>
    );
};

export default dApps;
