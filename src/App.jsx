function Gasto({ descripcion, monto }) {
  return <li>{descripcion} — ${monto}</li>;
}

function App() {
  const gastos = [
    { id: 1, descripcion: "Carne", monto: 25000 },
    { id: 2, descripcion: "Vino", monto: 12000 }
  ];

  return (
    <ul>
      {gastos.map((g) => (
        <Gasto key={g.id} descripcion={g.descripcion} monto={g.monto} />
      ))}
    </ul>
  );
}

export default App;