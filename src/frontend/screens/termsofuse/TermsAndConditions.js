import React, { useState } from "react";


const cardStyle = {
    backgroundColor: '#f5f5f5',
    padding: '10px',
    borderRadius: '20px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
    margin: '40px',
    fontFamily: 'Arial, sans-serif',
};


const textStyle={
  pandding: "50px",
  marginTop: "80px"
}


export const TermsAndConditions = () => {
  const [accepted, setAccepted] = useState(false);

  const handleAcceptance = () => {
    if (accepted) {
      // Aquí puedes realizar acciones adicionales después de la aceptación.
      alert("¡Gracias por aceptar los términos y condiciones!");
    } else {
      alert("Debes aceptar los términos y condiciones para continuar.");
    }
  };

  return (
    <>

    <div style={cardStyle}>
    <div className="container">
      <h1 className="text-center mt-5">Términos y Condiciones</h1>
      <div className="mt-4">
        <h3 style={textStyle}>1. Aceptación de Términos</h3>
        <p>
          Al utilizar este sitio web, aceptas cumplir con estos términos y
          condiciones de uso.
        </p>
        <p>
        1. El uso de esta plataforma el usuario está sujeto a cumplir con las condiciones y
        términos.
      </p>
      <p>
        2. El usuario se compromete a cumplir con todas las leyes y regulaciones
        locales, nacionales e internacionales aplicables.
      </p>
      <p>
        3. La plataforma se reserva el derecho de modificar sus políticas y
        normas en cualquier momento.
      </p>
      <p>
        4. El usuario es el único responsable de cualquier envío de fondos y
        transacciones realizadas en la plataforma.
      </p>
      <p>
        5. Los costos de transacción serán asumidos por el usuario.
      </p>
      <p>
        6. Si el usuario no cumple con la invitación de al menos dos personas
        dentro de un año, la plataforma se reserva el derecho de retirarlo de la red. Sin
        embargo, el usuario podrá conservar sus NFT.
      </p>
      <p>
        7. El usuario está obligado a formar a al menos dos personas en la
        plataforma.
      </p>
      <p>
        8. Para recibir su primer pago, el usuario debe tener al menos siete
        coaches en su aula. En caso contrario, no podrá recibir comisiones.
      </p>
      <p>
        9. Al utilizar la plataforma y la billetera digital (wallet), el
        usuario acepta todos estos términos y condiciones.
      </p>
      <p>
        10. El usuario es el único responsable de la seguridad de su billetera
        digital y sus claves privadas. No almacenamos información de claves
        privadas.
      </p>
      <p>
        11. Cualquier transacción realizada a través de la billetera digital es
        responsabilidad del usuario.
      </p>
      <p>
        12. El usuario acepta cumplir con todas las leyes y regulaciones
        aplicables relacionadas con las criptomonedas y transacciones
        financieras.
      </p>
      <p>
        13. Nos reservamos el derecho de modificar estos términos y condiciones
        en cualquier momento. Los usuarios serán notificados de cualquier cambio
        importante.
      </p>
      <p>
        14. Los costos de transacción y tarifas asociadas son responsabilidad del
        usuario.
      </p>
      <p>
        15. El usuario debe mantener su información de cuenta actualizada y
        precisa.
      </p>
      <p>
        16. La plataforma no es responsable de pérdidas de fondos debidas a
        errores del usuario o problemas técnicos.
      </p>
      <p>
        17. Al usar la billetera digital, el usuario acepta estos términos y
        condiciones.
      </p>
      <p>
        18. En caso de cambios en las leyes o regulaciones del mercado, las
        políticas de la plataforma podrán ser modificadas.
      </p>
      <p>
        19. Los envíos de fondos son responsabilidad del usuario.
      </p>
      <p>
      20. La billetera proporcionada por el usuario para el retiro de fondos es responsabilidad exclusiva del usuario. La plataforma no se hace responsable de la seguridad o integridad de la billetera del usuario.

      </p>
      <p>
        13. El usuario debe cumplir con la invitación de al menos dos coaches
        en un año para mantenerse en la red. El usuario está obligado a formar a sus coaches.
      </p>
      <p>
        14. El usuario puede conservar sus NFT incluso si se retira de la red.
      </p>
      <p>
        15. En caso de incumplimiento de las normas, la plataforma se reserva el derecho de retirar al usuario de la red.
      </p>
      <p>
        16. En caso de incumplimiento de las normas, la plataforma se reserva el
        derecho de retirar al usuario de la red.
      </p>
      <p>
        17. Los términos y condiciones pueden cambiar, y es responsabilidad del
        usuario mantenerse informado sobre las actualizaciones.
      </p>
      <p>
        18. Al continuar utilizando nuestros servicios, el usuario acepta estos
        términos y condiciones.
      </p>
        <h3>2. Uso del Sitio</h3>
        <p>
          Este sitio web se proporciona tal cual es, sin garantías de ningún
          tipo.
        </p>
        {/* Agrega más secciones de términos y condiciones aquí */}
      </div>
      <div className="form-check mt-4">
        <input
          type="checkbox"
          className="form-check-input"
          id="acceptCheckbox"
          checked={accepted}
          onChange={() => setAccepted(!accepted)}
        />
        <label className="form-check-label" htmlFor="acceptCheckbox">
          He leído y acepto los términos y condiciones.
        </label>
      </div>
      <button className="btn btn-primary mt-3" onClick={handleAcceptance}>
        Aceptar
      </button>
    </div>
    </div>
    </>
  );
};


