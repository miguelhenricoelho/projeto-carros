// src/components/Conteudo.jsx
import React from 'react';

function Conteudo() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      
      {/* --- CARRO 1: TOYOTA COROLLA --- */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px', margin: '0 0 40px 0', borderBottom: '1px solid #eee', paddingBottom: '20px' }}>
        {/* Imagem à esquerda */}
        <img 
          src="/toyota.png"
          alt="Toyota Corolla" 
          style={{ width: '300px', height: '200px', objectFit: 'cover', borderRadius: '8px' }} 
        />
        {/* Texto à direita */}
        <div>
          <p>O Toyota Corolla é o carro mais popular e vendido do mundo,
             com mais de 50 milhões de unidades comercializadas globalmente desde o seu lançamento em 1966.
             Reconhecido mundialmente por sua lendária confiabilidade mecânica,
             excelente custo-benefício e alto valor de revenda, o modelo se tornou
             o sinônimo perfeito de durabilidade. Ao longo de suas gerações,
             o Corolla evoluiu constantemente em segurança e tecnologia,
             destacando-se hoje também por suas inovadoras e econômicas 
             versões com motorização híbrida.</p>
        </div>
      </div>

      {/* --- CARRO 2: HYUNDAI HB20 --- */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px', margin: '0 0 40px 0', borderBottom: '1px solid #eee', paddingBottom: '20px' }}>
        {/* Imagem à esquerda */}
        <img 
          src="/hb20.png"
          alt="Hyundai HB20" 
          style={{ width: '300px', height: '200px', objectFit: 'cover', borderRadius: '8px' }} 
        />
        {/* Texto à direita */}
        <div>
          <p>O Hyundai HB20 é um dos carros mais vendidos e populares do Brasil contemporâneo. 
             O modelo conquistou o mercado nacional com seu design arrojado e moderno, 
             oferecendo um excelente pacote de equipamentos de série desde as versões de entrada. 
             Reconhecido pelo ótimo desempenho dos seus motores turbo e pela economia de combustível, 
             o HB20 se destaca como uma escolha segura, tecnológica e ideal para o dia a dia nas cidades.</p>
        </div>
      </div>

      {/* --- CARRO 3: FIAT UNO --- */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px', margin: '0 0 20px 0' }}>
        {/* Imagem à esquerda */}
        <img 
          src="/uno.png"
          alt="Fiat Uno" 
          style={{ width: '300px', height: '200px', objectFit: 'cover', borderRadius: '8px' }} 
        />
        {/* Texto à direita */}
        <div>
          <p>O Fiat Uno é famoso por sua economia extrema de combustível e versatilidade mecânica. 
             O modelo marcou época como um carro altamente acessível, muito robusto e de manutenção barata, 
             tornando-se um verdadeiro ícone das ruas e frotas brasileiras. Com seu formato quadrado característico, 
             ele garantiu um excelente espaço interno e se consolidou como o sinônimo de veículo prático e durável.</p>
        </div>
      </div>

    </div>
  );
}

export default Conteudo;
