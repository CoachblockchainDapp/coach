import React from 'react';

export const List = ({ items, fontSize }) => {
  return (
    <ul style={{ listStyle: 'none', padding: '0', fontSize: `${fontSize}px` }}>
      {items.map((item, index) => (
        <li key={index} style={{ marginBottom: '10px' }}>
          {`${index + 1}. ${item}`}
        </li>
      ))}
    </ul>
  );
};
