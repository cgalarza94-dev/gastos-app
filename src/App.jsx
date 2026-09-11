function Persona({ nombre, saldo }) {
  return <p>{nombre}: {saldo}</p>;
}

function App() {
  return (
    <div>
      <Persona nombre="Sofía" saldo={10167} />
      <Persona nombre="Martín" saldo={-5833} />
      <Persona nombre="Juan" saldo={-5333} />
    </div>
  );
}

export default App;