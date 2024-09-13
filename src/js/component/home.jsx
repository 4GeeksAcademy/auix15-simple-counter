import React from 'react';
import SecondsCounter from './secondsCounter';
              //tres props: cantidad de segundos, para manejar el inicio, detener y reiniciar
const Home = ({ totalSeconds, onStart, onStop, onReset }) => {
  

  return (
    <div>
      <h1 className="title">Contador</h1>
      <SecondsCounter totalSeconds={totalSeconds} />
     <div className="button-container">
        <button className="start-button" onClick={onStart}>Iniciar</button>
        <button className="stop-button" onClick={onStop}>Detener</button>
        <button className="reset-button" onClick={onReset}>Reiniciar</button>
      </div>
    </div>
  );

};

export default Home;
