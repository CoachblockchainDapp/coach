import { Paragraph, ImageWithCaption, Title } from '../Index';

const Altcoin = () => {
    return (
        <div style={{ textAlign: 'center', margin: 'auto', width: '60%', marginTop: '80px' }}>
            <Title size="3em" color="black">Fundamentos del ALTCOINS</Title>
            <hr />
            <Paragraph size="1.5em" color="black">
                Las altcoins son cualquier criptomoneda que no sea Bitcoin. Surgieron después del éxito inicial de Bitcoin y ofrecen variaciones en términos de funcionalidad, privacidad, algoritmos de consenso y otros aspectos técnicos.
            </Paragraph>
            <ImageWithCaption
                src="https://raw.githubusercontent.com/coachblockchain/Images/main/Colorful%20Bitcoin%20Trading%20Concept%20Illustration%20Banner.png"
                alt="Descripción de la imagen"
                width='100%'
            />
            <Paragraph size="1.5em" color="black">
                Algunas altcoins se centran en solucionar problemas específicos, como la privacidad, la escalabilidad o las aplicaciones descentralizadas. Su valor y adopción pueden variar ampliamente y se ven influenciados por varios factores del mercado y la tecnología.
            </Paragraph>

            <Paragraph size="1.5em" color="black">
            La diversidad en el ámbito de las criptomonedas se manifiesta en la amplia gama de tokens alternativos o altcoins que existen. Estos tokens, aparte de Bitcoin, presentan una variedad de características únicas. Por ejemplo, Ethereum ha sido un pionero en la introducción de contratos inteligentes, lo que permite la creación de aplicaciones descentralizadas (dApps) y ofrece un entorno para el desarrollo de tokens personalizados.
            </Paragraph>

            <Paragraph size="1.5em" color="black">
            En cuanto a Ethereum 2.0, se trata de una actualización importante en la red Ethereum que tiene como objetivo mejorar la escalabilidad, seguridad y sostenibilidad de la blockchain. Esta actualización incorpora un cambio de consenso, pasando de la prueba de trabajo (PoW) a la prueba de participación (PoS), lo que busca hacer más eficiente el proceso de validación de transacciones y reducir el consumo de energía. Además, Ethereum 2.0 está diseñado para permitir un mayor número de transacciones por segundo y mejorar la experiencia de los desarrolladores y usuarios de la red.
            </Paragraph>

     


        </div>
    );
};

export default Altcoin;
