"use client";

import './Busca.css';
import axios from 'axios';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useRouter } from 'next/navigation'; 
import SubMenu from './submenu.js';
import Calendario from './calendario';
import Hospedes from './hospede';

export default function Busca() {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [dataEntrada, setDataEntrada] = useState(null);
  const [isHospedesOpen, setIsHospedesOpen] = useState(false);
  const [hospedes, setHospedes] = useState({ adultos: 0, criancas: 0 });
  const inputRef = useRef(null);
  const hospedesRef = useRef(null);
  const router = useRouter(); 

  const handleInputChange = async (e) => {
    const value = e.target.value;
    setInputValue(value);

    if (value.length > 0) {
      try {
        const response = await axios.get(`http://localhost:3333/suggestions?query=${value}`);
        console.log('Resposta da API:', response.data);
        setSuggestions(response.data);
        setIsSubMenuOpen(response.data.length > 0);
      } catch (error) {
        console.error('Erro ao buscar sugestões:', error);
        setSuggestions([]);
        setIsSubMenuOpen(false);
      }
    } else {
      setSuggestions([]);
      setIsSubMenuOpen(false);
    }
  };

  const handleDivClick = () => {
    inputRef.current.focus();
  };

  const handleSuggestionClick = (name) => {
    setInputValue(name);
    setIsSubMenuOpen(false);
  };

  const handleHospedesClick = () => {
    setIsHospedesOpen(!isHospedesOpen);
  };

  const handleHospedesChange = useCallback((novosHospedes) => {
    setHospedes(novosHospedes);
  }, []);

  const handlePesquisarClick = () => {
    // Salva o valor do destino no localStorage
    localStorage.setItem('destino', inputValue);

    // Redireciona para a página hotels
    router.push('/hotels');
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (hospedesRef.current && !hospedesRef.current.contains(event.target)) {
        setIsHospedesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="busca">
      {/* Seção de Destino */}
      <div className="destino" onClick={handleDivClick}>
        <div className="filho-destino">
          <img src="./icon.png" alt="icone" className="icon" />
          <p>Destino</p>
        </div>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Selecione o destino"
          ref={inputRef}
        />
        {isSubMenuOpen && (
          <SubMenu
            suggestions={suggestions}
            searchTerm={inputValue}
            onSuggestionClick={handleSuggestionClick}
          />
        )}
      </div>

      {/* Seção de Entrada */}
      <div className="entrada">
        <div className="filho-destino">
          <img src="./calendario.png" alt="icone" className="icon" />
          <p>Entrada</p>
        </div>
        <Calendario 
          tipo="entrada"
          dataEntrada={null} 
          onDataSelecionada={setDataEntrada}
        />
      </div>

      <div className="saida">
        <div className="filho-destino">
          <img src="./calendario.png" alt="icone" className="icon" />
          <p>Saida</p>
        </div>
        <Calendario 
          tipo="saida"
          dataEntrada={dataEntrada} 
        />
      </div>

      {/* Seção de Hóspedes */}
      <div className="hospedes-container" ref={hospedesRef}>
        <div className="hospedes" onClick={handleHospedesClick}>
          <div className="filho-hospedes">
            <div className="filho-destino">
              <img src="./hospede.png" alt="icone" className="icon" />
              <p className="p-hospedagem">Hospedes</p>
            </div>
            <p>Adultos {hospedes.adultos}, crianças {hospedes.criancas}</p>
          </div>
          {isHospedesOpen && (
            <Hospedes onHospedesChange={handleHospedesChange} />
          )}
        </div>
      </div>

      {/* Botão de Pesquisar */}
      <button className="btn" onClick={handlePesquisarClick}>
        pesquisar
      </button>
    </div>
  );
}