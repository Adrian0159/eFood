import { useState, useEffect } from "react";
import Banner from "../../components/Banner";
import Header from "../../components/Header";
import { Food } from "../Home";
import ProductList from "../../components/ProductList";

const Perfil = () => {
  const [cardapio, setCardapio] = useState<Food[]>([]);

  useEffect(() => {
    fetch("https://fake-api-tau.vercel.app/api/efood/restaurantes")
      .then((res) => res.json())
      .then((res) => setCardapio(res));
  }, []);
  return (
    <>
      <Header />
      <Banner />
      <ProductList cardapios={cardapio} />
    </>
  );
};

export default Perfil;
