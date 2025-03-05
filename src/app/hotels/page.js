"use client";
import './Hotels.css';
import Header2 from "@/Header/header2";
import Busca from "@/Busca/index";
import React, { useEffect, useState } from 'react';
import Footer from "@/Footer/footer"; 
import HotelsList from './hotelsList';

export default function Hotels() {
  const [destino, setDestino] = useState('');

  useEffect(() => {
    // Recupera o valor do destino salvo no localStorage
    const destinoSalvo = localStorage.getItem('destino');
    if (destinoSalvo) {
      setDestino(destinoSalvo);
    }
  }, []);


  return (
    <>
      <Header2 />
      <Busca />
      <div className="localizacao">
          <h1>{destino}</h1>
      </div>
      <HotelsList/>
      <Footer /> 
    </>
  );
}