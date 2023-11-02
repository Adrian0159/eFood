import Links from "../Links";
import Imagem2 from "../../assets/images/image2.png";
import Estrela from "../../assets/images/estrela.png";
import {
  ContainerText,
  Titulo,
  TituloContainer,
  Description,
  Nota,
  CardContainer,
  TagContainer,
} from "./styles";

const Card = () => (
  <CardContainer>
    <img src={Imagem2} alt="La Dolce Vita Trattoria" />
    <TagContainer>Italiana</TagContainer>
    <ContainerText>
      <TituloContainer>
        <Titulo>La Dolce Vita Trattoria</Titulo>
        <Nota>
          <span>4.6</span>
          <img src={Estrela} alt="estrela" />
        </Nota>
      </TituloContainer>
      <Description>
        A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você!
        Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo
        no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor
        inesquecível. Peça já!
      </Description>
      <Links />
    </ContainerText>
  </CardContainer>
);

export default Card;
