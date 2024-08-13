import { useState } from 'react'
import './App.css'

function App() {
  const [hi, setHi] = useState();
  const [mi, setMi] = useState();
  const [hf, setHf] = useState();
  const [mf, setMf] = useState();
  const [resultado, setResultado] = useState("Resultado");

  const soma = () => {
    let somaHora = Number(hi) + Number(hf);
    let somaMin= Number(mi) + Number(mf);

    while (somaMin > 59){
        somaMin -=60;
        somaHora ++;
    }

    setResultado (`${somaHora} : ${somaMin}`);
}
  
const sub = () => {
    let momentoInicial = hi * 60 + Number(mi);
    let momentoFinal = hf*60 + Number(mf);
    let resultadoMinuto = Math.abs(momentoInicial - momentoFinal);
    let resultadoHora = 0;
   
    while(resultadoMinuto > 59){
        resultadoHora++;
        resultadoMinuto -= 60;
    }
  
    setResultado (`${resultadoHora} : ${resultadoMinuto}`);
  }

  return (
    <>
         <h1>Calculadora</h1>
    <div class="samba">
        <h3>Horários a Calcular</h3>
        <input type="number"
         value={hi} 
         onChange={(e) => setHi(e.target.value)} 
         placeholder="Hora Inicial"/> &nbsp;

<input type="number"
         value={mi} 
         onChange={(e) => setMi(e.target.value)} 
         placeholder="Minuto Inicial"/> &nbsp;<br/><br/>

<input type="number"
         value={hf} 
         onChange={(e) => setHf(e.target.value)} 
         placeholder="Hora Final"/> &nbsp;

<input type="number"   
         value={mf} 
         onChange={(e) => setMf(e.target.value)} 
         placeholder="Minuto Final"/> &nbsp; <br/><br/>


        <button onClick={soma}>Soma</button>&nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={sub}>Diferença</button>
        <h3 id="resultado">{ resultado}</h3>
    </div>
    </>
  )
}

export default App
