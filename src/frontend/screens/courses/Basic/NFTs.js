import { Paragraph, ImageWithCaption, Title } from '../Index';

const NFTs = () => {
    return (
        <div style={{ textAlign: 'center', margin: 'auto', width: '60%', marginTop: '80px' }}>
            <Title size="3em" color="black">Tokens No Fungibles (NFTs)</Title>
            <hr />
            <Paragraph size="1.5em" color="black">
                Los Tokens No Fungibles (NFTs) son activos digitales únicos e indivisibles que se registran en blockchain, lo que garantiza su autenticidad y propiedad.
            </Paragraph>
               {/* <ImageWithCaption
                src="URL_de_la_imagen"
                alt="Descripción de la imagen"
                width='100%'
    />*/}
            <Paragraph size="1.5em" color="black">
                Los NFTs se utilizan en áreas como el arte digital, coleccionables, juegos y bienes virtuales, ya que permiten la verificación de la propiedad y la rareza de un activo digital específico.
            </Paragraph>

            <Paragraph size="1.5em" color="black">
                Ethereum ha sido una plataforma popular para la creación y comercialización de NFTs debido a su capacidad para soportar estándares como ERC-721 y ERC-1155.
            </Paragraph>

            <Paragraph size="1.5em" color="black">
                Los NFTs han ganado popularidad, aunque su valor y liquidez pueden variar significativamente según el mercado y la percepción del activo.
            </Paragraph>
        </div>
    );
};

export default NFTs;
