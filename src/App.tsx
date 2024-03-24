import { useState } from 'react';

function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setImc] = useState<number | null>(null);
  const [classificacao, setClassificacao] = useState('');

  const calcularIMC = () => {
    const alturaEmMetros = parseFloat(altura) / 100;
    const imc = parseFloat(peso) / (alturaEmMetros * alturaEmMetros);
    if (!isNaN(imc)) {
      setImc(Number(imc.toFixed(2)));
      setClassificacao(classificarIMC(imc));
    }
  }

  const classificarIMC = (imc: number) => {
    if (imc < 18.5) {
      return 'Abaixo do peso';
    } else if (imc < 24.9) {
      return 'Peso normal';
    } else if (imc < 29.9) {
      return 'Sobrepeso';
    } else if (imc < 34.9) {
      return 'Obesidade grau 1';
    } else if (imc < 39.9) {
      return 'Obesidade grau 2';
    } else {
      return 'Obesidade grau 3';
    }
  }

  return (
    <main>
      <h1>Calculadora Imc</h1>
      <input type="number" placeholder="Peso em kg" value={peso} onChange={e => setPeso(e.target.value)} />
      <input type="number" placeholder="Altura em cm" value={altura} onChange={e => setAltura(e.target.value)} />
      <button onClick={calcularIMC}>Calcular IMC</button>
      {imc && <p>O seu IMC é: {imc}</p>}
      {classificacao && <p>A sua classificação é: {classificacao}</p>}
    </main>
  )
}

export default App