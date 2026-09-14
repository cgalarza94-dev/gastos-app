import { useState } from "react";

function App() {
  const [descripcion, setDescripcion] = useState("");
  const [monto, setMonto] = useState("");
  const [mostrado, setMostrado] = useState(null);

  const mostrar = () => {
    setMostrado({ descripcion, monto });
  };

  return (
    <div>
      <input value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
      <input type="number" value={monto} onChange={(e) => setMonto(e.target.value)} />
      <button onClick={mostrar}>Mostrar</button>

      {mostrado && <p>{mostrado.descripcion}: ${mostrado.monto}</p>}
    </div>
  );
}

export default App;