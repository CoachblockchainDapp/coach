import React from 'react';

const tableHeaderStyle = {
    padding: '12px',
    textAlign: 'center',
    borderBottom: '1px solid #ddd',
  };

  const TableRow = ({ number, cost, referrals, benefits }) => (
    <tr style={{ marginBottom: '30px' }}>
      <td>{number}</td>
      <td>{cost}</td>
      <td dangerouslySetInnerHTML={{ __html: referrals }} />
      <td>{benefits}</td>
    </tr>
  );

const ReferralTable = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
    <table style={{
        borderCollapse: 'collapse',
        width: '80%',
        maxWidth: '800px',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
        borderRadius: '10px',
        overflow: 'hidden',
        marginBottom: '20px',
      }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={tableHeaderStyle}>Paquete</th>
            <th style={tableHeaderStyle}>Costo USDT</th>
            <th style={tableHeaderStyle}>Ganancias por Referidos</th>
            <th style={tableHeaderStyle}>Beneficios</th>
          </tr>
        </thead>
     
        <tbody>
          <TableRow number="1" cost="390 " referrals="Nivel 1: 20%<br />Nivel 2: 15%<br />Nivel 3: 10%" benefits="1 beneficio + Acceso a formación educativa" />
          <TableRow number="2" cost="1950 " referrals="Nivel 1: 25%<br />Nivel 2: 15%<br />Nivel 3: 40%<br />Nivel 4: 5%" benefits="5 formaciones (regala 4) con NFT" />
          <TableRow number="3" cost="3900 " referrals="Nivel 1: 30%<br />Nivel 2: 15%<br />Nivel 3: 10%<br />Nivel 4: 5%" benefits="10 formaciones educativas (cada una con 3 NFT)" />
          <TableRow number="4" cost="5800 " referrals="Nivel 1: 30%<br />Nivel 2: 15%<br />Nivel 3: 10%<br />Nivel 4: 5%" benefits="15 formaciones (regala 14) con 5 NFT cada una" />
          <TableRow number="5" cost="25000 " referrals="Nivel 1: 30%<br />Nivel 2: 15%<br />Nivel 3: 10%<br />Nivel 4: 5%<br />Nivel 5: 5%<br />Nivel 6: 3%<br />Nivel 7: 2%" benefits="120 NFT premiun + 50 formaciones (regala 49) con NFT premiun, acceso a formación continua, certificados y diplomas universitarios" />
        </tbody>
    </table>
    </div>
  );
};

export default ReferralTable;
