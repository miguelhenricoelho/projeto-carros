import React from 'react';

function TextoPrincipal(props) {
  return (
    <h1 style={{ textAlign: 'center', margin: '20px 0' }}>
      {props.titulo}
    </h1>
  );
}

export default TextoPrincipal;

