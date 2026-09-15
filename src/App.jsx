import "./App.css";
import { useState } from "react";

function App() {
  const [descripcion, setDescripcion] = useState("");
  const [monto, setMonto] = useState("");
  const [gastos, setGastos] = useState([]);

  const agregarGasto = (e) => {
    e.preventDefault();
    if (!descripcion.trim() || !monto) return;

    setGastos([...gastos, { id: Date.now(), descripcion, monto: Number(monto) }]);

    setDescripcion("");
    setMonto("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <form onSubmit={agregarGasto}>
        <input
          placeholder="Descripción"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />
        <input
          type="number"
          placeholder="Monto"
          value={monto}
          onChange={(e) => setMonto(e.target.value)}
        />
        <button type="submit">Agregar gasto</button>
      </form>

      {gastos.length === 0 && <p>Todavía no cargaste ningún gasto.</p>}

      <ul>
        {gastos.map((item) => (
          <li key={item.id} className="gasto">
            {item.descripcion}: ${item.monto}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;