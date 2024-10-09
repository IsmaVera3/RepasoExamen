import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [nombre, setNombre] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [usuario, setUsuario] = useState(null);

  const guardarUsuario = () => {
    const datosUsuario = {
      nombre: nombre,
      contrasena: contrasena,
    }
    setUsuario(datosUsuario)
  }

  useEffect(() =>{
    console.log(usuario)
  }, [usuario])

  return (
    <div className="container">
      <h3>Nombre</h3>
      <input
        name="nombre"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <h3>Contraseña</h3>
      <input
        type="password"
        name="contrasena"
        placeholder="Contraseña"
        value={contrasena}
        onChange={(e) => setContrasena(e.target.value)}
      />
      
      <button className="boton" onClick={guardarUsuario}>Guardar</button>
    
    </div>
  )
  
}

export default App
