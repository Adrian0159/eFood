import Pizza from "../../assets/images/image3.png";
import { Botao, Descrition, ProductContainer, Titulo } from "./styles";

const Product = () => {
  return (
    <>
      <ProductContainer>
        <img src={Pizza} alt="Pizza marguerita" />
        <Titulo>Pizza Marguerita</Titulo>
        <Descrition>
          A clássica Marguerita: molho de tomate suculento, mussarela derretida,
          manjericão fresco e um toque de azeite. Sabor e simplicidade!
        </Descrition>
        <Botao>Adicionar ao carrinho</Botao>
      </ProductContainer>
    </>
  );
};

export default Product;
