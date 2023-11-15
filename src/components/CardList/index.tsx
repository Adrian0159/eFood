import Card from "../Card";
import { Food } from "../../pages/Home";
import { ContainerCardList, Container } from "./styles";

export type Props = {
  restaurantes: Food[];
};

const CardList = ({ restaurantes }: Props) => (
  <Container>
    <ContainerCardList>
      {restaurantes.map((foods) => (
        <li key={foods.id}>
          <Card
            id={foods.id}
            titulo={foods.titulo}
            tipo={foods.tipo}
            avaliacao={foods.avaliacao}
            descricao={foods.descricao}
            capa={foods.capa}
          />
        </li>
      ))}
    </ContainerCardList>
  </Container>
);

export default CardList;
