import { useEffect, useState } from "react";


function Tarefa() {

    const [completed, setCompleted] = useState(false);
    const [tarefa, setTarefa] = useState('');

    useEffect(() => {
        if (completed) {
            setTarefa('Parabéns! Você concluiu a Tarefa!');
            
        }
    }, [completed])
  return (

    <div style={{
        fontFamily: "sans-serif"
    }}>
    <div style={{
        textAlign: "center"
}}>
        <h2>Componente Tarefa</h2>
        <h3>{tarefa}</h3>
        <p>Conclua a tarefa</p>
        <button onClick={() => setCompleted(true)}>Concluir Tarefa</button>
    </div>

    </div>
  )
}

export default Tarefa