import './App.css';
import { useEffect, useState } from 'react' // Importamos useState y useEffect de React
import CiudadInput from './components/CiudadInput' // El componente de input

function App() {
  const [ubicacion, setUbicacion] = useState(null) // Variable para guardar la ubicacion del usuario
  const [error, setError] = useState(null) // Variable para guardar errores si los hay

  // use Effect se ejecuta automaticamente cuando el componente se monta (cuando se abre la app)
  useEffect(() => {
    if (navigator.geolocation) {
      // Si el navegador soporta geolocalizacion, pedimos los datos
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const coords = {
            lat: position.coords.latitude,   // Latitud actual
            lng: position.coords.longitude   // Longitud actual
          }
          setUbicacion(coords) // Guardamos la ubicacion en el estado
        },
        (err) => {
          // Si el usuario rechaza o hay error, lo guardamos
          setError("No se pudo obtener la ubicacion: " + err.message)
        }
      )
    } else {
      // Si el navegador no soporta geolocalizacion
      setError("La geolocalizacion no está disponible en este navegador.")
    }
  }, []) // El array vacio [] hace que esto se ejecute una sola vez al cargar la app

  return (
    <div>
      <h1>🔥 Forest Fire Prediction App</h1>
      <p>Ingresá una ciudad para conocer el riesgo de incendio en tiempo real.</p>
      <CiudadInput /> {/*Componente de input de ciudad*/}

      {/*Mostramos la ubicacion si la tenemos*/}
      {ubicacion && (
        <p>📍 Tu ubicación detectada: Lat {ubicacion.lat}, Lng {ubicacion.lng}</p>
      )}

      {/*Mostramos el error si hubo*/}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  )
}

export default App // Exportamos el componente principal