import styled from "styled-components";
import { cores } from "../../styles";

export const Titulo = styled.h2`
  font-size: 18px;
  font-weight: bold;
  color: ${cores.amareloEscuro};
`;

export const TituloContainer = styled.div`
  display: flex;
  justify-content: space-between;

  span {
    font-size: 18px;
    color: ${cores.amareloEscuro};
    font-weight: bold;
    margin-right: 8px;
  }
`;

export const Description = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: ${cores.amareloEscuro};
  margin: 16px 0;
  line-height: 22px;
`;

export const Nota = styled.div`
  display: flex;
  align-items: center;
  height: 24px;
`;

export const ContainerText = styled.div`
  padding: 8px;
`;

export const CardContainer = styled.div`
  border: 1px solid ${cores.amareloEscuro};
  background-color: ${cores.branca};
  position: relative;
  img {
    width: 100%;
  }
`;

export const TagContainer = styled.div`
  background-color: ${cores.amareloEscuro};
  color: ${cores.amarelo};
  padding: 6px 10px;
  font-size: 12px;
  font-weight: bold;
  display: inline-block;
  position: absolute;
  top: 16px;
  right: 16px;
`;
