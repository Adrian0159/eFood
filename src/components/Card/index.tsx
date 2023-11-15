import Links from "../Links";
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

export type Props = {
  titulo: string;
  tipo: string;
  avaliacao: number;
  descricao: string;
  capa: string;
  id: number;
};

const Card = ({ titulo, tipo, avaliacao, descricao, capa }: Props) => {
  return (
    <CardContainer>
      <img src={capa} alt={titulo} />

      <TagContainer>{tipo}</TagContainer>
      <ContainerText>
        <TituloContainer>
          <Titulo>{titulo}</Titulo>
          <Nota>
            <span>{avaliacao}</span>
            <img src={Estrela} alt="estrela" />
          </Nota>
        </TituloContainer>
        <Description>{descricao}</Description>
        <Links />
      </ContainerText>
    </CardContainer>
  );
};

export default Card;
