import { useState } from "react";


function Contador() {

    const [valor, setValor] = useState(0);

    function handleClick() {
        setValor(valor + 1);
    }
  return (
    <div style={{
        fontFamily: "sans-serif"
    }}>

    <div style={{
            textAlign: "center"
    }}>
        <h2>Componente Contador</h2>
        <p>O valor atual é: {valor}</p>
        <button onClick={handleClick}>Adicionar + 1</button>
    </div>

    </div>
  )
}

export default Contador