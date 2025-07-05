import { useState } from 'react' // Importamos useState desde react.
// Funcion de React que permite guardar y acrualizar info dentro de un componente. (ciudad por ej)
// useState devuelve un array con dos elementos: el valor actual y una funcion para actualizarlo.
// El primer elemento es el valor actual y el segundo es una funcion para actualizarlo. 

function CiudadInput() {                                        // creamos un componente llamado ciudadinput
    const [ciudad, setCiudad] = useState('')    // Creamos una variable "ciudad" con su actualizador "setCiudad". Arranca vacía.
    const manejarCambio = (evento) => { // Creamos una funcion que se va a llamar cuando el usuario escriba algo en el input.//}
        setCiudad(evento.target.value) // Actualizamos el valor de "ciudad" con el valor del input.
    }

    return (
        <div>
            {/* Input de texto controlado por React*/}
            <input
                type="text" // El tipo de input es texto.
                placeholder="Escribí una ciudad..." // Un texto que aparece cuando el input está vacío, para guiar al usuario.
                value={ciudad} // El valor del input es el valor de la variable "ciudad".
                onChange={manejarCambio} // Cuando el usuario escribe algo, se llama a la funcion manejarCambio. 
            />

            {/* Boton (todabia no hace nada */}
            <button>Consultar</button>

            {/*Mostrar lo que escribio el usuario en tiempo real*/}
            <p>Ciudad actual: {ciudad}</p> {/* Aca mostramos la variable ciudad en pantalla*/}
        </div>
    )
}

export default CiudadInput // Exportamos el componente para poder usarlo en App.jsx