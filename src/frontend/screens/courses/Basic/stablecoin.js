import { Paragraph, ImageWithCaption, Title } from '../Index';

const Stablecoin = () => {
    return (
        <div style={{ textAlign: 'center', margin: 'auto', width: '60%', marginTop: '80px' }}>
            <Title size="3em" color="black">Fundamentos de los STABLECOINS</Title>
            <hr />
            <Paragraph size="1.5em" color="black">
                Los stablecoins son un tipo de criptomoneda diseñada para mantener un valor estable, a menudo vinculado a una moneda fiduciaria o un activo subyacente. Su principal objetivo es mitigar la volatilidad inherente a otras criptomonedas como Bitcoin o Ethereum.
            </Paragraph>
            <ImageWithCaption
                src="https://raw.githubusercontent.com/coachblockchain/Images/main/Purple%20and%20Blue%20Professional%20Gradient%20Blockchain%20Technology%20Presentation%20(2).png"
                alt="Descripción de la imagen"
                width='100%'
            />
            <Paragraph size="1.5em" color="black">
                Los stablecoins buscan ofrecer estabilidad en su valor y se utilizan en casos donde la volatilidad de otras criptomonedas podría ser problemática, como en transacciones comerciales, remesas o como una forma de mantener el valor en momentos de alta volatilidad del mercado.
            </Paragraph>

            <Paragraph size="1.5em" color="black">
                Ejemplos de stablecoins populares incluyen Tether (USDT), USD Coin (USDC), Dai y TrueUSD (TUSD). Cada uno de estos tiene su propia estructura y respaldo, algunos están respaldados por una reserva de monedas fiduciarias, mientras que otros se basan en algoritmos y mecanismos de estabilización descentralizados.
            </Paragraph>

            <Paragraph size="1.5em" color="black">
                La adopción de los stablecoins ha ido en aumento, ya que ofrecen una forma más estable de acceder y utilizar la tecnología blockchain en aplicaciones financieras y transacciones cotidianas.
            </Paragraph>
        </div>
    );
};

export default Stablecoin;
