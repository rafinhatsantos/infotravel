"use client";

import axios from 'axios';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; // Importe o useRouter
import './Hotels.css'; // Importação do arquivo CSS

const HotelsList = () => {
  const [hotels, setHotels] = useState([]);
  const router = useRouter(); // Inicialize o useRouter

  useEffect(() => {
    // Função para buscar os hotéis
    const fetchHotels = async () => {
      try {
        const response = await axios.get('http://localhost:3333/hotels');
        setHotels(response.data);
      } catch (error) {
        console.error('Erro ao buscar hotéis:', error);
      }
    };

    fetchHotels();
  }, []);

  // Função para redirecionar para a página de detalhes
  const handleHotelClick = (hotelId) => {
    router.push(`hotels/details/${hotelId}`); // Ajuste o caminho da rota
  };

  return (
    <div className="container">
      {hotels.map((hotel) => (
        <div
          key={hotel.id}
          className="card"
          onClick={() => handleHotelClick(hotel.id)} // Adiciona o evento de clique
          style={{ cursor: 'pointer' }} // Muda o cursor para indicar que é clicável
        >
          <div className="imageContainer">
            <img
              src={hotel.hotel.image}
              alt={hotel.hotel.name}
              className="image"
            />
            <div className="priceTag">
              {hotel.lowestPrice.amount} {hotel.lowestPrice.currency}
            </div>
          </div>
          <div className="details">
            <h3 className="name">{hotel.hotel.name}</h3>
            <p className="stars">{'⭐'.repeat(hotel.hotel.stars)}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HotelsList;