import { useState } from "react";

export default function Increment() {
  const [nextId, setNextId] = useState(1);

  const handleClickIncorrecte = () => {
    // Forma directa: React pot agrupar les dues crides i no sumar bé
    setNextId(nextId + 1);
    setNextId(nextId + 1);
  };

  const handleClickCorrecte = () => {
    // Forma funcional: sempre fa servir l’últim valor actualitzat
    setNextId(id => id + 1);
    setNextId(id => id + 1);
  };

  return (
    <div style={{ fontFamily: "sans-serif", padding: "1rem" }}>
      <h2>Valor actual: {nextId}</h2>

      <button onClick={handleClickIncorrecte} style={{ marginRight: "10px" }}>
        Incrementar (forma incorrecta)
      </button>

      <button onClick={handleClickCorrecte}>
        Incrementar (forma correcta)
      </button>
    </div>
  );
}
    