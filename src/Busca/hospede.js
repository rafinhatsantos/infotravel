"use client";

import React, { useState, useEffect } from 'react';
import './Hospedes.css'; 

export default function Hospedes({ onHospedesChange }) {
  const [adultos, setAdultos] = useState(0);
  const [criancas, setCriancas] = useState(0);

  
  useEffect(() => {
    onHospedesChange({ adultos, criancas });
  }, [adultos, criancas]); 

 
  const incrementarAdultos = (event) => {
    event.stopPropagation();
    setAdultos(adultos + 1);
  };
  
  const decrementarAdultos = (event) => {
    event.stopPropagation();
    if (adultos > 0) {
      setAdultos(adultos - 1);
    }
  };
  
  const incrementarCriancas = (event) => {
    event.stopPropagation();
    setCriancas(criancas + 1);
  };
  
  const decrementarCriancas = (event) => {
    event.stopPropagation();
    if (criancas > 0) {
      setCriancas(criancas - 1);
    }
  };
  return (
    <div className="hospedes-submenu">
    <div className="contador">
  <p>Adultos</p>
  <div className="controle">
    <button onClick={decrementarAdultos}>-</button>
    <span>{adultos}</span>
    <button onClick={incrementarAdultos}>+</button>
  </div>
</div>
<div className="contador">
  <p>Crianças</p>
  <div className="controle">
    <button onClick={decrementarCriancas}>-</button>
    <span>{criancas}</span>
    <button onClick={incrementarCriancas}>+</button>
  </div>
</div>
      <div className="total">
        <p>Adultos {adultos}, crianças {criancas}</p>
      </div>
    </div>
  );
}