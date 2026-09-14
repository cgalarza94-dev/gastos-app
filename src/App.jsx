import { useState } from "react";

function App() {
  const [contador, setContador] = useState(0);

  const restar = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

  return (
    <div>
      <p>{contador}</p>
      <button onClick={() => setContador(contador + 1)}>+</button>
      <button onClick={restar}>-</button>
    </div>
  );
}

export default App;