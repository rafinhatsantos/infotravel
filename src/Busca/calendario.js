
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Calendario = ({ tipo, dataEntrada, onDataSelecionada }) => {
  const [dataSelecionada, setDataSelecionada] = useState(null);

  const handleDataSelecionada = (data) => {
    setDataSelecionada(data);
    if (onDataSelecionada) {
      onDataSelecionada(data);
    }
  };

  const isDataValida = (data) => {
    if (tipo === 'entrada') {
      return data >= new Date();
    } else if (tipo === 'saida') {
      return data >= dataEntrada;
    }
    return true;
  };

  return (
    <div>
      <DatePicker
        selected={dataSelecionada}
        onChange={handleDataSelecionada}
        dateFormat="dd/MM/yyyy"
        filterDate={isDataValida}
        placeholderText="Selecione uma data"
        minDate={tipo === 'saida' ? dataEntrada ++ : new Date()} 
      />
    </div>
  );
};

export default Calendario;