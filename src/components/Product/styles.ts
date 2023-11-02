import styled from "styled-components";
import { cores } from "../../styles";

export const ProductContainer = styled.div`
  background-color: ${cores.amareloEscuro};
  padding: 8px;

  img {
    width: 100%;
  }
`;

export const Titulo = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin: 8px 0;
  color: ${cores.amareloClaro};
`;

export const Descrition = styled.p`
  font-size: 14px;
  color: ${cores.amareloClaro};
`;

export const Botao = styled.button`
  color: ${cores.amareloEscuro};
  background-color: ${cores.amareloClaro};
  display: block;
  text-align: center;
  margin-top: 8px;
  font-size: 16px;
  padding: 4px 0;
  font-weight: bold;
  width: 100%;
  border: none;
  cursor: pointer;
`;
