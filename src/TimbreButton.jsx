import React from 'react';

function TimbreButton({ onClick }) {
  return (
    <button onClick={onClick} style={{ fontSize: '20px', padding: '10px 20px', cursor: 'pointer' }}>
      Timbrar
    </button>
  );
}

export default TimbreButton;
