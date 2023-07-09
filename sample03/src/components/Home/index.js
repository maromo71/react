import { useState } from "react";
import React  from "react";
import './style.css';

export default function Home() {
    const [numeroAleatorio, setNumeroAleatorio] = useState(0);

    function gerarNumero() {
        const num = Math.floor(Math.random() * (100 - 1) + 1);
        setNumeroAleatorio(num);
    }
    return (
        <div className="conteudo-centralizado">
            <h3>Número Aleatório</h3>
            <h1>{numeroAleatorio}</h1>
            <div className='area-botao'>
                <label>
                    Clique para gerar um número aleatório:
                </label>
                <button onClick={gerarNumero}>
                    Gerar Número
                </button>
            </div>
        </div>
    );
}