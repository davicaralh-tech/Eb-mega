"use client";

import { useState } from "react";

export default function Home() {
  const [lado, setLado] = useState("");

  return (
    <main>
      <h1>🇧🇷 EB ÔMEGA 🏴</h1>

      <p>Escolha o seu lado:</p>

      <button onClick={() => setLado("EXÉRCITO")}>
        🇧🇷 EXÉRCITO
      </button>

      <button onClick={() => setLado("CRIA")}>
        🏴 CRIA
      </button>

      {lado && <p>Você escolheu: {lado}</p>}
    </main>
  );
  }
