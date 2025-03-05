import HotelDetails from "./details";
import Header2 from "@/Header/header2";
import Busca from "@/Busca/index";
import Footer from "@/Footer/footer";
import axios from 'axios';

// Função para buscar os detalhes do hotel
async function getHotelDetails(id) {
  try {
    const response = await axios.get(`http://localhost:3333/hotels/${id}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar detalhes do hotel:', error);
    return null;
  }
}

export default async function Page({ params }) {
  const { id } = params; // Obtém o ID da URL

  // Busca os detalhes do hotel
  const hotel = await getHotelDetails(id);

  if (!hotel) {
    return <div>Hotel não encontrado.</div>;
  }

  return (
    <>
      <Header2 />
      <Busca />
      <HotelDetails hotel={hotel} /> {/* Passa os dados do hotel como props */}
      <Footer />
    </>
  );
}