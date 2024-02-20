import React, { useState } from 'react';
import TimbreButton from './TimbreButton';
import TimbreStatus from './TimbreStatus';
import timbreSound from '../public/timbretimbrecasa.mp3'; 
import './App.css'
function App() {
  const [status, setStatus] = useState('Listo para Timbrar');
  const [selectedUser, setSelectedUser] = useState(null);
  const audioRef = React.useRef();

  const handleClick = () => {
    if (selectedUser) {
      setStatus(`Timbrando a ${selectedUser}`);
      audioRef.current.play();
      setTimeout(() => {
        setStatus('Listo para Timbrar');
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }, 2000); // Simulando el timbre durante 2 segundos
    } else {
      setStatus('Por favor selecciona a quién timbrar');
    }
  };

  const handleUserChange = (event) => {
    setSelectedUser(event.target.value);
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Timbre Digital</h1>
      <select className="user-select" onChange={handleUserChange} value={selectedUser}>
        <option value="">Selecciona un usuario</option>
        <option value="Usuario 1">Usuario 1</option>
        <option value="Usuario 2">Usuario 2</option>
        <option value="Usuario 3">Usuario 3</option>
        {/* Agrega más opciones según sea necesario */}
      </select>
      <audio ref={audioRef} src={timbreSound} />
      <TimbreButton onClick={handleClick} />
      <TimbreStatus status={status} />
    </div>
  );
}

export default App;
