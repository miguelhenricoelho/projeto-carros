// src/App.jsx
import React from 'react';
import TextoPrincipal from './components/textoPrincipal.jsx';
import Conteudo from './components/Conteudo.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
  return (
    <div style={{ paddingBottom: '100px' }}>
      <TextoPrincipal titulo="CARROS MAIS POPULARES DE 2026" />
      <Conteudo />
      <Footer />
    </div>
  );
}

export default App;
