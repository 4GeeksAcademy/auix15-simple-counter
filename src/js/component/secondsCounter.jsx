import React from 'react';

const SecondsCounter = ({ totalSeconds }) => {
  //para que calcule horas, minutos y segundos
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = totalSeconds % 60;
  
  const formattedHours = String(hours).padStart(2, '0');
  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(seconds).padStart(2, '0');

  return (
    <div className="counter-container">
      <i className="fas fa-clock counter-icon"></i>
      <div className="counter-text">{formattedHours}</div>
      <div className="counter-separator">:</div>
      <div className="counter-text">{formattedMinutes}</div>
      <div className="counter-separator">:</div>
      <div className="counter-text">{formattedSeconds}</div>
    </div>
  );
};

export default SecondsCounter;
