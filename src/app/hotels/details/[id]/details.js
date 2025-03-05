"use client";


import './Details.css'; // Importação do arquivo CSS

const HotelDetails = ({ hotel }) => {
  if (!hotel) {
    return <div>Carregando...</div>;
  }

  return (
<div className="detailsContainer">
    <div>
        <img src={hotel.hotel.image} alt={hotel.hotel.name} className="hotelImage" />
        <div>
            <h1>{hotel.hotel.name}</h1>
            <p><strong>Endereço:</strong> {hotel.hotel.address}</p>
            <p><strong>Estrelas:</strong> {'⭐'.repeat(hotel.hotel.stars)}</p>
            <p><strong>Descrição:</strong> {hotel.hotel.description}</p>
        </div>
    </div>
    <h2 className="disponibilidade">Quartos Disponíveis</h2>
    <ul className="listaquartos">
        {hotel.rooms.map((room, index) => (
            <li className="quartos" key={index}>
                <div className="roomInfo">
                     {room.roomType.name} <br />
                    
                    <span className={room.cancellationPolicies.refundable ? "refundable" : "nonRefundable"}>
                        {room.cancellationPolicies.refundable ? "Cancelamento gratuito" : "Multa de cancelamento"}
                    </span>
                </div>
                <div className="priceAndButton">
                    <strong className="price">
                        {room.price.amount} {room.price.currency}
                    </strong>
                    <button className="reserveButton">Reservar</button>
                </div>
            </li>
        ))}
    </ul>
</div>
  );
};

export default HotelDetails;