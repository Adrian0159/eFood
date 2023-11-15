import Product from "../Product";
import { Food } from "../../pages/Home";
import { Container, ListContainer } from "./styles";

export type Props = {
  cardapios: Food[];
};

const ProductList = ({ cardapios }: Props) => {
  return (
    <>
      <Container>
        <ListContainer>
          {cardapios.map((foods) => (
            <li key={foods.cardapio.id}>
              <Product
                id={foods.cardapio.id}
                descricao={foods.cardapio.descricao}
                foto={foods.cardapio.foto}
                nome={foods.cardapio.nome}
              />
            </li>
          ))}
        </ListContainer>
      </Container>
    </>
  );
};

export default ProductList;
