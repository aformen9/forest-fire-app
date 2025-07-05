import './App.css';
import CiudadInput from './components/CiudadImput';

function App() {
  return (
    <div>
      <h1>🔥 Forest Fire Prediction App</h1>
      <p>Ingresá una ciudad para conocer el riesgo de incendio en tiempo real.</p>
      <CiudadInput />
    </div>
  )
}

export default App