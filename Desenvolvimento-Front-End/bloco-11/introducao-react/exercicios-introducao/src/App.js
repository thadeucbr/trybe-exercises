import './App.css';
const task = (...value) => {
  return (
    value.map((item,index) => <li key={index}>{item}</li>
      )
  );
}

function App() {
  return (
    task('Teste','Oi','Funcionou!')
  )
}

export default App;
