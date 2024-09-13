import React, { useState} from "react";
import ReactDOM from "react-dom/client";
import "../styles/index.css";
import Home from "./component/home.jsx";

let intervalId;
const root = ReactDOM.createRoot(document.getElementById('app'));

const App = () => {
  const [totalSeconds, setTotalSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false); // maneja si el contador está corriendo

  // inicia el contador
  const startCounter = () => {
    if (!isRunning) { // Solo inicia si no está corriendo
      setIsRunning(true);
      intervalId = setInterval(() => {
        setTotalSeconds((prev) => prev + 1);
      }, 1000);
    }
  };

  // detiene el contador
  const stopCounter = () => {
    clearInterval(intervalId);
    setIsRunning(false);
  };

  // detiene el contantador, reinicia los segundos a 0 y camboa el estado a "no corriendo"
  const resetCounter = () => {
    clearInterval(intervalId);
    setTotalSeconds(0);
    setIsRunning(false);
  };

  return (
    <Home
      totalSeconds={totalSeconds} //este es el prop encargado de mostrar el tiempo transcurrido
      onStart={startCounter}
      onStop={stopCounter}
      onReset={resetCounter}
    />
  );
};

root.render(<App />);
