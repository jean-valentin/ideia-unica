import { useState } from 'react';

function Home() {
    return (
        <div>
            <h1>Home</h1>
            <Contador />
            <br></br>
            <h3>versão 1.0.0 beta</h3>
        </div>
    )
}

function Contador() {
    const [contador,setContador] = useState(1);

    function adicionarContador() {
        setContador(contador + 1);
    }
        return (
            <div>
                <div>{contador}</div>
                <button onClick={adicionarContador}>Adicionar</button>
            </div>
        )
}

export default Home