import Card from "../Card";
import { ContainerCardList, Container } from "./styles";

const CardList = () => (
  <Container>
    <ContainerCardList>
      <li>
        <Card />
      </li>
      <li>
        <Card />
      </li>
      <li>
        <Card />
      </li>
      <li>
        <Card />
      </li>
      <li>
        <Card />
      </li>
      <li>
        <Card />
      </li>
    </ContainerCardList>
  </Container>
);

export default CardList;
