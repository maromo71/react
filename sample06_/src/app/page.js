"use client";
import { useState } from "react";
import "./page.css";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className="painel">
      <h1 className="titulo">Contador: {count}</h1>
      <button
        className="botao"
        onClick={() => setCount(count + 1)}
      >
        Incrementar
      </button>
    </div>
  );
}
