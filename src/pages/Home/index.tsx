import { useEffect, useState } from "react";
import Hero from "../../components/Hero";
import CardList from "../../components/CardList";

export type Food = {
  id: number;
  titulo: string;
  destacado: boolean;
  tipo: string;
  avaliacao: number;
  descricao: string;
  capa: string;
  cardapio: {
    foto: string;
    preco: number;
    id: number;
    nome: string;
    descricao: string;
    porcao: string;
  };
};

const Home = () => {
  const [restaurante, setRestaurante] = useState<Food[]>([]);

  useEffect(() => {
    fetch("https://fake-api-tau.vercel.app/api/efood/restaurantes")
      .then((res) => res.json())
      .then((res) => setRestaurante(res));
  }, []);
  return (
    <>
      <Hero />
      <CardList restaurantes={restaurante} />
    </>
  );
};

export default Home;
